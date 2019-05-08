import { isString } from "../common/data"

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
    info(str: string): void
    /**
     * 一般日志（异步）
     */
    infoAsync(str: string): PromiseType
    /**
     * 警告日志
     */
    warn(str: string): void
    /**
     * 警告日志（异步）
     */
    warnAsync(str: string): PromiseType
    /**
     * 错误日志
     */
    error(str: string): void
    /**
     * 错误日志（异步）
     */
    errorAsync(str: string): PromiseType
}

/**
 * 当前默认的日志记录器（默认为window.console）
 */
let defaultLogRecorder: LogRecorderType = new class {
    info(str: string) {
        console.info(str)
    }
    infoAsync(str: string) {
        console.info(str)
        return Promise.resolve()
    }
    warn(str: string) {
        console.warn(str)
    }
    warnAsync(str: string) {
        console.warn(str)
        return Promise.resolve()
    }
    error(str: string) {
        console.error(str)
    }
    errorAsync(str: string) {
        console.error(str)
        return Promise.resolve()
    }
}

/**
 * 根据日志级别返回对应的日志记录函数
 */
function getLogRecorder(level: LevelTypeEnum, isAsync: boolean): (str: string) => void | ((str: string) => PromiseType) {
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
     */
    write(level: LevelTypeEnum, content: ContentType) {
        if (!content) {
            return
        }
        const str = (isString(content) ? content : JSON.stringify(content)) as string
        const logFunc = getLogRecorder(level, false)
        logFunc(str)
    }
    /**
     * 写日志（异步）
     * @param level 日志级别
     * @param content 日志内容
     */
    writeAsync(level: LevelTypeEnum, content: ContentType) {
        if (!content) {
            return Promise.resolve()
        }
        const str = (isString(content) ? content : JSON.stringify(content)) as string
        const logFunc = getLogRecorder(level, true)
        return <PromiseType>(logFunc(str) as any)
    }
    /**
     *  写一般日志
     * @param content 日志内容
     */
    info(content: ContentType) {
        this.write(LevelTypeEnum.info, content)
    }
    /**
     *  写一般日志（异步）
     * @param content 日志内容
     */
    infoAsync(content: ContentType) {
        return this.writeAsync(LevelTypeEnum.info, content)
    }
    /**
     *  写警告日志
     * @param content 日志内容
     */
    warn(content: ContentType) {
        this.write(LevelTypeEnum.warn, content)
    }
    /**
     *  写警告日志（异步）
     * @param content 日志内容
     */
    warnAsync(content: ContentType) {
        return this.writeAsync(LevelTypeEnum.warn, content)
    }
    /**
     *  写错误日志
     * @param content 日志内容
     */
    error(content: ContentType) {
        this.write(LevelTypeEnum.error, content)
    }
    /**
     *  写错误日志（异步）
     * @param content 日志内容
     */
    errorAsync(content: ContentType) {
        return this.writeAsync(LevelTypeEnum.error, content)
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