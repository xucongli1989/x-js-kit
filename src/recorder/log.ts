import { isString } from "../common/data"
import { AnyKeyValueType } from "../declaration/common"

/**
 * 日志级别类型
 */
export enum LevelTypeEnum {
    "info" = "info",
    "warn" = "warn",
    "error" = "error"
}

/**
 * 日志内容类型
 */
export type ContentType = object | string

/**
 * 异步日志返回类型
 */
export type PromiseType = Promise<void> | Promise<{}>

/**
 * 日志记录器接口
 */
export interface LogRecorderType {
    /**
     * 一般日志
     */
    info(str: string, option: AnyKeyValueType): void
    /**
     * 一般日志（异步）
     */
    infoAsync(str: string, option: AnyKeyValueType): PromiseType
    /**
     * 警告日志
     */
    warn(str: string, option: AnyKeyValueType): void
    /**
     * 警告日志（异步）
     */
    warnAsync(str: string, option: AnyKeyValueType): PromiseType
    /**
     * 错误日志
     */
    error(str: string, option: AnyKeyValueType): void
    /**
     * 错误日志（异步）
     */
    errorAsync(str: string, option: AnyKeyValueType): PromiseType
}

/**
 * 当前默认的日志记录器（默认为window.console）
 */
let defaultLogRecorder: LogRecorderType = new class {
    info(str: string, option: AnyKeyValueType) {
        console.info(str, option)
    }
    infoAsync(str: string, option: AnyKeyValueType) {
        console.info(str, option)
        return Promise.resolve()
    }
    warn(str: string, option: AnyKeyValueType) {
        console.warn(str, option)
    }
    warnAsync(str: string, option: AnyKeyValueType) {
        console.warn(str, option)
        return Promise.resolve()
    }
    error(str: string, option: AnyKeyValueType) {
        console.error(str, option)
    }
    errorAsync(str: string, option: AnyKeyValueType) {
        console.error(str, option)
        return Promise.resolve()
    }
}

/**
 * 根据日志级别返回对应的日志记录函数
 */
function getLogRecorder(level: LevelTypeEnum, isAsync: boolean): (str: string, option: AnyKeyValueType) => void | ((str: string, option: AnyKeyValueType) => PromiseType) {
    if (isAsync) {
        let fun = defaultLogRecorder.infoAsync
        switch (level) {
            case LevelTypeEnum.info:
                fun = defaultLogRecorder.infoAsync
                break;
            case LevelTypeEnum.warn:
                fun = defaultLogRecorder.warnAsync
                break;
            case LevelTypeEnum.error:
                fun = defaultLogRecorder.errorAsync
                break;
        }
        return fun as any
    }
    let fun = defaultLogRecorder.info
    switch (level) {
        case LevelTypeEnum.info:
            fun = defaultLogRecorder.info
            break;
        case LevelTypeEnum.warn:
            fun = defaultLogRecorder.warn
            break;
        case LevelTypeEnum.error:
            fun = defaultLogRecorder.error
            break;
    }
    return fun as any
}

class LoggerHelper {
    /**
     * 写日志
     * @param level 日志级别
     * @param content 日志内容
     * @param option 自定义选项
     */
    write(level: LevelTypeEnum, content: ContentType, option: AnyKeyValueType = {}) {
        if (!content) {
            return
        }
        const str = (isString(content) ? content : JSON.stringify(content)) as string
        const logFunc = getLogRecorder(level, false)
        logFunc(str, option)
    }
    /**
     * 写日志（异步）
     * @param level 日志级别
     * @param content 日志内容
     * @param option 自定义选项
     */
    writeAsync(level: LevelTypeEnum, content: ContentType, option: AnyKeyValueType = {}) {
        if (!content) {
            return Promise.resolve()
        }
        const str = (isString(content) ? content : JSON.stringify(content)) as string
        const logFunc = getLogRecorder(level, true)
        return <PromiseType>(logFunc(str, option) as any)
    }
    /**
     *  写一般日志
     * @param content 日志内容
     * @param option 自定义选项
     */
    info(content: ContentType, option: AnyKeyValueType = {}) {
        this.write(LevelTypeEnum.info, content, option)
    }
    /**
     *  写一般日志（异步）
     * @param content 日志内容
     * @param option 自定义选项
     */
    infoAsync(content: ContentType, option: AnyKeyValueType = {}) {
        return this.writeAsync(LevelTypeEnum.info, content, option)
    }
    /**
     *  写警告日志
     * @param content 日志内容
     * @param option 自定义选项
     */
    warn(content: ContentType, option: AnyKeyValueType = {}) {
        this.write(LevelTypeEnum.warn, content, option)
    }
    /**
     *  写警告日志（异步）
     * @param content 日志内容
     * @param option 自定义选项
     */
    warnAsync(content: ContentType, option: AnyKeyValueType = {}) {
        return this.writeAsync(LevelTypeEnum.warn, content, option)
    }
    /**
     *  写错误日志
     * @param content 日志内容
     * @param option 自定义选项
     */
    error(content: ContentType, option: AnyKeyValueType = {}) {
        this.write(LevelTypeEnum.error, content, option)
    }
    /**
     *  写错误日志（异步）
     * @param content 日志内容
     * @param option 自定义选项
     */
    errorAsync(content: ContentType, option: AnyKeyValueType = {}) {
        return this.writeAsync(LevelTypeEnum.error, content, option)
    }
}

/**
 * 当前日志工具类
 */
export let logger: LoggerHelper = new LoggerHelper()

/**
 * 重新设置默认的日志记录器
 * @param logRecorder 新的日志记录器（默认的日志记录器为window.console）
 */
export function setLoggerRecorder(logRecorder: LogRecorderType) {
    defaultLogRecorder = logRecorder
}