import { isString } from "../common/data"

/**
 * 日志级别类型
 */
export enum LevelTypeEnum { "info", "warn", "error" }

/**
 * 日志内容类型
 */
export type ContentType = object | string

/**
 * 日志记录器接口
 */
export interface LogType {
    /**
     * 写日志
     * @param level 日志级别
     * @param content 日志内容
     */
    write(level: LevelTypeEnum, content: ContentType): void
    /**
     * 写日志（异步）
     * @param level 日志级别
     * @param content 日志内容
     */
    writeAsync(level: LevelTypeEnum, content: Promise<object | string>): Promise<void>
    /**
     *  写一般日志
     * @param content 日志内容
     */
    info(content: ContentType): void
    /**
     *  写一般日志（异步）
     * @param content 日志内容
     */
    infoAsync(content: Promise<object | string>): Promise<void>
    /**
     *  写警告日志
     * @param content 日志内容
     */
    warn(content: ContentType): void
    /**
     *  写警告日志（异步）
     * @param content 日志内容
     */
    warnAsync(content: Promise<object | string>): Promise<void>
    /**
     *  写错误日志
     * @param content 日志内容
     */
    error(content: ContentType): void
    /**
     *  写错误日志（异步）
     * @param content 日志内容
     */
    errorAsync(content: Promise<object | string>): Promise<void>
}

/**
 * 默认的日志记录器
 */
class ConsoleLogger implements LogType {
    write(level: LevelTypeEnum, content: ContentType) {
        const str = isString(content) ? content : JSON.stringify(content)
        switch (level) {
            case LevelTypeEnum.info:
                console.log(str)
                break;
            case LevelTypeEnum.warn:
                console.warn(str)
                break;
            case LevelTypeEnum.error:
                console.error(str)
                break;
        }
    }
    async writeAsync(level: LevelTypeEnum, content: Promise<object | string>) {
        this.write(level, await content)
    }
    info(content: ContentType) {
        this.write(LevelTypeEnum.info, content)
    }
    async infoAsync(content: Promise<object | string>) {
        return this.writeAsync(LevelTypeEnum.info, content)
    }
    warn(content: ContentType) {
        this.write(LevelTypeEnum.warn, content)
    }
    async warnAsync(content: Promise<object | string>) {
        return this.writeAsync(LevelTypeEnum.warn, content)
    }
    error(content: ContentType) {
        this.write(LevelTypeEnum.error, content)
    }
    async errorAsync(content: Promise<object | string>) {
        return this.writeAsync(LevelTypeEnum.error, content)
    }
}

/**
 * 当前日志记录器
 */
export let logger: LogType = new ConsoleLogger()

/**
 * 设置日志记录器
 * @param log 自定义的日志记录器
 */
export function setLogger(log: LogType) {
    logger = log
}