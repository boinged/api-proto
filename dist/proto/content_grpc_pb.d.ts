// package: 
// file: content.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as content_pb from "./content_pb";

interface IContentService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getContent: IContentService_IGetContent;
}

interface IContentService_IGetContent extends grpc.MethodDefinition<content_pb.ContentRequest, content_pb.ContentResponse> {
    path: "/Content/GetContent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<content_pb.ContentRequest>;
    requestDeserialize: grpc.deserialize<content_pb.ContentRequest>;
    responseSerialize: grpc.serialize<content_pb.ContentResponse>;
    responseDeserialize: grpc.deserialize<content_pb.ContentResponse>;
}

export const ContentService: IContentService;

export interface IContentServer extends grpc.UntypedServiceImplementation {
    getContent: grpc.handleUnaryCall<content_pb.ContentRequest, content_pb.ContentResponse>;
}

export interface IContentClient {
    getContent(request: content_pb.ContentRequest, callback: (error: grpc.ServiceError | null, response: content_pb.ContentResponse) => void): grpc.ClientUnaryCall;
    getContent(request: content_pb.ContentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_pb.ContentResponse) => void): grpc.ClientUnaryCall;
    getContent(request: content_pb.ContentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_pb.ContentResponse) => void): grpc.ClientUnaryCall;
}

export class ContentClient extends grpc.Client implements IContentClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getContent(request: content_pb.ContentRequest, callback: (error: grpc.ServiceError | null, response: content_pb.ContentResponse) => void): grpc.ClientUnaryCall;
    public getContent(request: content_pb.ContentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: content_pb.ContentResponse) => void): grpc.ClientUnaryCall;
    public getContent(request: content_pb.ContentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: content_pb.ContentResponse) => void): grpc.ClientUnaryCall;
}
