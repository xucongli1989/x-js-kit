/**
 * 日志级别类型
 */
export declare enum LevelTypeEnum {
    "info" = "info",
    "warn" = "warn",
    "error" = "error"
}
/**
 * 日志内容类型
 */
export declare type ContentType = object | string;
/**
 * 异步日志返回类型
 */
export declare type PromiseType = Promise<void> | Promise<{}>;
/**
 * 日志记录器接口
 */
export interface LogRecorderType {
    /**
     * 一般日志
     */
    info(str: string): void;
    /**
     * 一般日志（异步）
     */
    infoAsync(str: string): PromiseType;
    /**
     * 警告日志
     */
    warn(str: string): void;
    /**
     * 警告日志（异步）
     */
    warnAsync(str: string): PromiseType;
    /**
     * 错误日志
     */
    error(str: string): void;
    /**
     * 错误日志（异步）
     */
    errorAsync(str: string): PromiseType;
}
declare class LoggerHelper {
    /**
     * 写日志
     * @param level 日志级别
     * @param content 日志内容
     */
    write(level: LevelTypeEnum, content: ContentType): void;
    /**
     * 写日志（异步）
     * @param level 日志级别
     * @param content 日志内容
     */
    writeAsync(level: LevelTypeEnum, content: ContentType): PromiseType;
    /**
     *  写一般日志
     * @param content 日志内容
     */
    info(content: ContentType): void;
    /**
     *  写一般日志（异步）
     * @param content 日志内容
     */
    infoAsync(content: ContentType): PromiseType;
    /**
     *  写警告日志
     * @param content 日志内容
     */
    warn(content: ContentType): void;
    /**
     *  写警告日志（异步）
     * @param content 日志内容
     */
    warnAsync(content: ContentType): PromiseType;
    /**
     *  写错误日志
     * @param content 日志内容
     */
    error(content: ContentType): void;
    /**
     *  写错误日志（异步）
     * @param content 日志内容
     */
    errorAsync(content: ContentType): PromiseType;
}
/**
 * 当前日志工具类
 */
export declare let logger: LoggerHelper;
/**
 * 重新设置默认的日志记录器
 * @param logRecorder 新的日志记录器（默认的日志记录器为window.console）
 */
export declare function setLoggerRecorder(logRecorder: LogRecorderType): void;
export {};
//# sourceMappingURL=log.d.ts.map