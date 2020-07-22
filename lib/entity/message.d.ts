/**
 * 消息头
 */
declare class MessageHead {
    /**
     * 是否响应
     */
    isAck: boolean;
    /**
     * 时间
     */
    date: number;
    /**
     * 消息是否成功
     */
    isSuccess: boolean;
    /**
     * 是否为异常
     */
    isException: boolean;
    /**
     * 提示语
     */
    message: string;
    /**
     * 提示语的详细信息
     */
    messageMore: string;
    /**
     * 需要跳转的url地址
     */
    redirectURL: string;
    /**
     * 是否需要刷新当前页面
     */
    isRefresh: boolean;
    /**
     * 错误码
     */
    errorCode: string;
}
/**
 * 消息正文
 */
declare class MessageBody<T1, T2> {
    /**
     * 数据
     */
    data: T1;
    /**
     * 扩展数据
     */
    extendData: T2;
}
/**
 * 消息实体
 */
export declare class MessageEntity<BodyDataType = any, BodyExtendDataType = any> {
    /**
     * 头信息
     */
    head: MessageHead;
    /**
     * 正文信息
     */
    body: MessageBody<BodyDataType, BodyExtendDataType>;
}
export {};
//# sourceMappingURL=message.d.ts.map