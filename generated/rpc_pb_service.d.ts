// package: rpc
// file: rpc.proto

import * as rpc_pb from "./rpc_pb";
import {grpc} from "@improbable-eng/grpc-web";

type RpcJsonRpc = {
  readonly methodName: string;
  readonly service: typeof Rpc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof rpc_pb.RpcRequest;
  readonly responseType: typeof rpc_pb.RpcResponse;
};

type RpcStreamRpc = {
  readonly methodName: string;
  readonly service: typeof Rpc;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof rpc_pb.RpcRequest;
  readonly responseType: typeof rpc_pb.RpcResponse;
};

export class Rpc {
  static readonly serviceName: string;
  static readonly JsonRpc: RpcJsonRpc;
  static readonly StreamRpc: RpcStreamRpc;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class RpcClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  jsonRpc(
    requestMessage: rpc_pb.RpcRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: rpc_pb.RpcResponse|null) => void
  ): UnaryResponse;
  jsonRpc(
    requestMessage: rpc_pb.RpcRequest,
    callback: (error: ServiceError|null, responseMessage: rpc_pb.RpcResponse|null) => void
  ): UnaryResponse;
  streamRpc(metadata?: grpc.Metadata): BidirectionalStream<rpc_pb.RpcRequest, rpc_pb.RpcResponse>;
}

