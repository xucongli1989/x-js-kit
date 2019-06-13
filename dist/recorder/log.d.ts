import { AnyKeyValueType } from "../declaration/common";
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
    info(str: string, option: AnyKeyValueType): void;
    /**
     * 一般日志（异步）
     */
    infoAsync(str: string, option: AnyKeyValueType): PromiseType;
    /**
     * 警告日志
     */
    warn(str: string, option: AnyKeyValueType): void;
    /**
     * 警告日志（异步）
     */
    warnAsync(str: string, option: AnyKeyValueType): PromiseType;
    /**
     * 错误日志
     */
    error(str: string, option: AnyKeyValueType): void;
    /**
     * 错误日志（异步）
     */
    errorAsync(str: string, option: AnyKeyValueType): PromiseType;
}
declare class LoggerHelper {
    /**
     * 写日志
     * @param level 日志级别
     * @param content 日志内容
     * @param option 自定义选项
     */
    write(level: LevelTypeEnum, content: ContentType, option?: AnyKeyValueType): void;
    /**
     * 写日志（异步）
     * @param level 日志级别
     * @param content 日志内容
     * @param option 自定义选项
     */
    writeAsync(level: LevelTypeEnum, content: ContentType, option?: AnyKeyValueType): PromiseType;
    /**
     *  写一般日志
     * @param content 日志内容
     * @param option 自定义选项
     */
    info(content: ContentType, option?: AnyKeyValueType): void;
    /**
     *  写一般日志（异步）
     * @param content 日志内容
     * @param option 自定义选项
     */
    infoAsync(content: ContentType, option?: AnyKeyValueType): PromiseType;
    /**
     *  写警告日志
     * @param content 日志内容
     * @param option 自定义选项
     */
    warn(content: ContentType, option?: AnyKeyValueType): void;
    /**
     *  写警告日志（异步）
     * @param content 日志内容
     * @param option 自定义选项
     */
    warnAsync(content: ContentType, option?: AnyKeyValueType): PromiseType;
    /**
     *  写错误日志
     * @param content 日志内容
     * @param option 自定义选项
     */
    error(content: ContentType, option?: AnyKeyValueType): void;
    /**
     *  写错误日志（异步）
     * @param content 日志内容
     * @param option 自定义选项
     */
    errorAsync(content: ContentType, option?: AnyKeyValueType): PromiseType;
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