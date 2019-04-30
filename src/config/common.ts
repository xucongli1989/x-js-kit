import { AnyFunctionType } from "../declaration/common"

/**
 * common.lib.tryRun在调用异常时执行的函数
 */
let _tryRunErrorHandler: AnyFunctionType = () => { }

/**
 * 读取全局异常处理函数
 */
export function getTryRunErrorHandler() {
    return _tryRunErrorHandler
}

/**
 * 重新设置全局异常处理函数
 */
export function setTryRunErrorHandler(fn: AnyFunctionType) {
    _tryRunErrorHandler = fn
}