// package: rpc
// file: src/grpc-server/proto3/rpc.proto

import * as jspb from "google-protobuf";

export class RpcRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMethod(): string;
  setMethod(value: string): void;

  getParams(): string;
  setParams(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RpcRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RpcRequest): RpcRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RpcRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RpcRequest;
  static deserializeBinaryFromReader(message: RpcRequest, reader: jspb.BinaryReader): RpcRequest;
}

export namespace RpcRequest {
  export type AsObject = {
    id: string,
    method: string,
    params: string,
  }
}

export class RpcResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMethod(): string;
  setMethod(value: string): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RpcResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RpcResponse): RpcResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RpcResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RpcResponse;
  static deserializeBinaryFromReader(message: RpcResponse, reader: jspb.BinaryReader): RpcResponse;
}

export namespace RpcResponse {
  export type AsObject = {
    id: string,
    method: string,
    data: string,
  }
}

