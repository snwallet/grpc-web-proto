/**
 * @fileoverview gRPC-Web generated client stub for rpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.rpc = require('./rpc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.rpc.RpcClient =
    function (hostname, credentials, options) {
        if (!options) options = {};
        options['format'] = 'text';

        /**
         * @private @const {!grpc.web.GrpcWebClientBase} The client
         */
        this.client_ = new grpc.web.GrpcWebClientBase(options);

        /**
         * @private @const {string} The hostname
         */
        this.hostname_ = hostname;

    };


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.rpc.RpcPromiseClient =
    function (hostname, credentials, options) {
        if (!options) options = {};
        options['format'] = 'text';

        /**
         * @private @const {!grpc.web.GrpcWebClientBase} The client
         */
        this.client_ = new grpc.web.GrpcWebClientBase(options);

        /**
         * @private @const {string} The hostname
         */
        this.hostname_ = hostname;

    };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.rpc.RpcRequest,
 *   !proto.rpc.RpcResponse>}
 */
const methodDescriptor_Rpc_JsonRpc = new grpc.web.MethodDescriptor(
    '/rpc.Rpc/JsonRpc',
    grpc.web.MethodType.UNARY,
    proto.rpc.RpcRequest,
    proto.rpc.RpcResponse,
    /**
     * @param {!proto.rpc.RpcRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
        return request.serializeBinary();
    },
    proto.rpc.RpcResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.rpc.RpcRequest,
 *   !proto.rpc.RpcResponse>}
 */
const methodInfo_Rpc_JsonRpc = new grpc.web.AbstractClientBase.MethodInfo(
    proto.rpc.RpcResponse,
    /**
     * @param {!proto.rpc.RpcRequest} request
     * @return {!Uint8Array}
     */
    function (request) {
        return request.serializeBinary();
    },
    proto.rpc.RpcResponse.deserializeBinary
);


/**
 * @param {!proto.rpc.RpcRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.rpc.RpcResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.rpc.RpcResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.rpc.RpcClient.prototype.jsonRpc =
    function (request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/rpc.Rpc/JsonRpc',
            request,
            metadata || {},
            methodDescriptor_Rpc_JsonRpc,
            callback);
    };


/**
 * @param {!proto.rpc.RpcRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.rpc.RpcResponse>}
 *     Promise that resolves to the response
 */
proto.rpc.RpcPromiseClient.prototype.jsonRpc =
    function (request, metadata) {
        return this.client_.unaryCall(this.hostname_ +
            '/rpc.Rpc/JsonRpc',
            request,
            metadata || {},
            methodDescriptor_Rpc_JsonRpc);
    };


module.exports = proto.rpc;

