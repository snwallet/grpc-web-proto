// package: rpc
// file: rpc.proto

var rpc_pb = require("./rpc_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Rpc = (function () {
  function Rpc() {}
  Rpc.serviceName = "rpc.Rpc";
  return Rpc;
}());

Rpc.JsonRpc = {
  methodName: "JsonRpc",
  service: Rpc,
  requestStream: false,
  responseStream: false,
  requestType: rpc_pb.RpcRequest,
  responseType: rpc_pb.RpcResponse
};

Rpc.StreamRpc = {
  methodName: "StreamRpc",
  service: Rpc,
  requestStream: true,
  responseStream: true,
  requestType: rpc_pb.RpcRequest,
  responseType: rpc_pb.RpcResponse
};

exports.Rpc = Rpc;

function RpcClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

RpcClient.prototype.jsonRpc = function jsonRpc(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Rpc.JsonRpc, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

RpcClient.prototype.streamRpc = function streamRpc(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(Rpc.StreamRpc, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.RpcClient = RpcClient;

