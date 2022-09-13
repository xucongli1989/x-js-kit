/**
 * 消息结果实体（首字母小写）
 */
export class MethodResult<TResult = any, TData = any> {
    /**
     * 该方法执行的逻辑是否成功（默认为true）
     */
    isSuccess: boolean = true
    /**
     * 该方法返回的消息提示
     */
    message: string = ""
    /**
     * 该方法返回的错误消息提示
     */
    errorMessage: string = ""
    /**
     * 该方法返回的结果
     */
    result: TResult = undefined as any
    /**
     * 其它数据（比如用dictionary存放不同的数据结果）
     */
    data: TData = undefined as any
}

/**
 * 消息结果实体（首字母大写）
 */
export class MethodResult2<TResult = any, TData = any> {
    /**
     * 该方法执行的逻辑是否成功（默认为true）
     */
    IsSuccess: boolean = true
    /**
     * 该方法返回的消息提示
     */
    Message: string = ""
    /**
     * 该方法返回的错误消息提示
     */
    ErrorMessage: string = ""
    /**
     * 该方法返回的结果
     */
    Result: TResult = undefined as any
    /**
     * 其它数据（比如用dictionary存放不同的数据结果）
     */
    Data: TData = undefined as any
}
