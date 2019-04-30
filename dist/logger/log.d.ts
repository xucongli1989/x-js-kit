/**
 * 日志级别类型
 */
export declare enum LevelTypeEnum {
    "info" = 0,
    "warn" = 1,
    "error" = 2
}
/**
 * 日志内容类型
 */
export declare type ContentType = object | string;
/**
 * 日志记录器接口
 */
export interface LogType {
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
    writeAsync(level: LevelTypeEnum, content: Promise<object | string>): Promise<void>;
    /**
     *  写一般日志
     * @param content 日志内容
     */
    info(content: ContentType): void;
    /**
     *  写一般日志（异步）
     * @param content 日志内容
     */
    infoAsync(content: Promise<object | string>): Promise<void>;
    /**
     *  写警告日志
     * @param content 日志内容
     */
    warn(content: ContentType): void;
    /**
     *  写警告日志（异步）
     * @param content 日志内容
     */
    warnAsync(content: Promise<object | string>): Promise<void>;
    /**
     *  写错误日志
     * @param content 日志内容
     */
    error(content: ContentType): void;
    /**
     *  写错误日志（异步）
     * @param content 日志内容
     */
    errorAsync(content: Promise<object | string>): Promise<void>;
}
/**
 * 当前日志记录器
 */
export declare let logger: LogType;
/**
 * 设置日志记录器
 * @param log 自定义的日志记录器
 */
export declare function setLogger(log: LogType): void;
//# sourceMappingURL=log.d.ts.map