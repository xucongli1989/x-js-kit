/**
 * 消息头
 */
class MessageHead {
    /**
     * 是否响应
     */
    isAck: boolean = true
    /**
     * 时间
     */
    date: number = new Date().valueOf()
    /**
     * 消息是否成功
     */
    isSuccess: boolean = true
    /**
     * 是否为异常
     */
    isException: boolean = false
    /**
     * 提示语
     */
    message: string = ""
    /**
     * 提示语的详细信息
     */
    messageMore: string = ""
    /**
     * 需要跳转的url地址
     */
    redirectURL: string = ""
    /**
     * 是否需要刷新当前页面
     */
    isRefresh: boolean = false
    /**
     * 错误码
     */
    errorCode: string = ""
}

/**
 * 消息正文
 */
class MessageBody<T1, T2> {
    /**
     * 数据
     */
    data: T1 = null as any
    /**
     * 扩展数据
     */
    extendData: T2 = null as any
}


/**
 * 消息实体
 */
export class MessageEntity<BodyDataType = any, BodyExtendDataType = any> {
    /**
     * 头信息
     */
    head: MessageHead = new MessageHead()
    /**
     * 正文信息
     */
    body: MessageBody<BodyDataType, BodyExtendDataType> = new MessageBody<BodyDataType, BodyExtendDataType>()
}

