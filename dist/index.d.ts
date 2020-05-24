/// <reference types="node" />
declare const ContentService: {
    getContent: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: any;
        responseType: any;
        requestSerialize: (arg: any) => Buffer;
        requestDeserialize: (buffer_arg: any) => any;
        responseSerialize: (arg: any) => Buffer;
        responseDeserialize: (buffer_arg: any) => any;
    };
};
export { ContentService };
export * from './proto/content_grpc_pb';
export * from './proto/content_pb';
