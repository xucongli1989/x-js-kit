/* eslint-disable class-methods-use-this */
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
 * 异步日志返回类型
 */
export type PromiseType = Promise<void> | Promise<unknown>

/**
 * 日志记录器接口
 */
export interface LogRecorderType {
    /**
     * 一般日志
     */
    info(content: any, option: AnyKeyValueType): void
    /**
     * 一般日志（异步）
     */
    infoAsync(content: any, option: AnyKeyValueType): PromiseType
    /**
     * 警告日志
     */
    warn(content: any, option: AnyKeyValueType): void
    /**
     * 警告日志（异步）
     */
    warnAsync(content: any, option: AnyKeyValueType): PromiseType
    /**
     * 错误日志
     */
    error(content: any, option: AnyKeyValueType): void
    /**
     * 错误日志（异步）
     */
    errorAsync(content: any, option: AnyKeyValueType): PromiseType
}

class DefaultLogRecorderClass {
    info(content: any, option: AnyKeyValueType) {
        console.info(content, option)
    }
    infoAsync(content: any, option: AnyKeyValueType) {
        console.info(content, option)
        return Promise.resolve()
    }
    warn(content: any, option: AnyKeyValueType) {
        console.warn(content, option)
    }
    warnAsync(content: any, option: AnyKeyValueType) {
        console.warn(content, option)
        return Promise.resolve()
    }
    error(content: any, option: AnyKeyValueType) {
        console.error(content, option)
    }
    errorAsync(content: any, option: AnyKeyValueType) {
        console.error(content, option)
        return Promise.resolve()
    }
}

/**
 * 当前默认的日志记录器（默认为window.console）
 */
let defaultLogRecorder: LogRecorderType = new DefaultLogRecorderClass()

/**
 * 根据日志级别返回对应的日志记录函数
 */
function getLogRecorder(level: LevelTypeEnum, isAsync: boolean): (obj: any, option: AnyKeyValueType) => void | ((obj: any, option: AnyKeyValueType) => PromiseType) {
    if (isAsync) {
        let fun = defaultLogRecorder.infoAsync
        switch (level) {
            case LevelTypeEnum.info:
                fun = defaultLogRecorder.infoAsync
                break
            case LevelTypeEnum.warn:
                fun = defaultLogRecorder.warnAsync
                break
            case LevelTypeEnum.error:
                fun = defaultLogRecorder.errorAsync
                break
        }
        return fun as any
    }
    let fun = defaultLogRecorder.info
    switch (level) {
        case LevelTypeEnum.info:
            fun = defaultLogRecorder.info
            break
        case LevelTypeEnum.warn:
            fun = defaultLogRecorder.warn
            break
        case LevelTypeEnum.error:
            fun = defaultLogRecorder.error
            break
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
    write(level: LevelTypeEnum, content: any, option: AnyKeyValueType = {}) {
        const logFunc = getLogRecorder(level, false)
        logFunc(content, option)
    }
    /**
     * 写日志（异步）
     * @param level 日志级别
     * @param content 日志内容
     * @param option 自定义选项
     */
    writeAsync(level: LevelTypeEnum, content: any, option: AnyKeyValueType = {}) {
        const logFunc = getLogRecorder(level, true)
        return <PromiseType>(logFunc(content, option) as any)
    }
    /**
     *  写一般日志
     * @param content 日志内容
     * @param option 自定义选项
     */
    info(content: any, option: AnyKeyValueType = {}) {
        this.write(LevelTypeEnum.info, content, option)
    }
    /**
     *  写一般日志（异步）
     * @param content 日志内容
     * @param option 自定义选项
     */
    infoAsync(content: any, option: AnyKeyValueType = {}) {
        return this.writeAsync(LevelTypeEnum.info, content, option)
    }
    /**
     *  写警告日志
     * @param content 日志内容
     * @param option 自定义选项
     */
    warn(content: any, option: AnyKeyValueType = {}) {
        this.write(LevelTypeEnum.warn, content, option)
    }
    /**
     *  写警告日志（异步）
     * @param content 日志内容
     * @param option 自定义选项
     */
    warnAsync(content: any, option: AnyKeyValueType = {}) {
        return this.writeAsync(LevelTypeEnum.warn, content, option)
    }
    /**
     *  写错误日志
     * @param content 日志内容
     * @param option 自定义选项
     */
    error(content: any, option: AnyKeyValueType = {}) {
        this.write(LevelTypeEnum.error, content, option)
    }
    /**
     *  写错误日志（异步）
     * @param content 日志内容
     * @param option 自定义选项
     */
    errorAsync(content: any, option: AnyKeyValueType = {}) {
        return this.writeAsync(LevelTypeEnum.error, content, option)
    }
}

/**
 * 当前日志工具类，把类型为【信息、警告、错误】的日志统一起来。
 * 默认的记录器为全局的console，也可以自定义日志记录器，只需要实现相应的接口即可。
 */
export const logger: LoggerHelper = new LoggerHelper()

/**
 * 重新设置默认的日志记录器
 * @param logRecorder 新的日志记录器（默认的日志记录器为window.console）
 */
export function setLoggerRecorder(logRecorder: LogRecorderType) {
    defaultLogRecorder = logRecorder
}
