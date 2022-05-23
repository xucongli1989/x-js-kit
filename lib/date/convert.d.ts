import { DateTimeCounterEntityType, DateTimeEntityType } from "../declaration/date";
/**
 * 返回时间实体对象
 */
export declare function toEntity(dt: Date): DateTimeEntityType;
/**
 * 根据毫秒数返回用于计时统计的实体
 */
export declare function toCounterEntity(ms: number): DateTimeCounterEntityType;
/**
 * 将字符串"/Date(...)/"的日期转为js Date对象
 * @param dateStr date字符串，如"/Date(1441036800000)/"
 * @returns 如果转换成功，则返回Date对象，否则返回null
 */
export declare function parse(dateStr: string): Date | null;
/**
 * 将日期对象转换为：yyyy-MM-dd HH:mm:ss
 */
export declare function convertDateTimeToYMDHMS(dt: Date): string;
/**
 * 将日期对象转换为：yyyy-MM-dd HH:mm:ss.SSS
 */
export declare function convertDateTimeToYMDHMSMS(dt: Date): string;
//# sourceMappingURL=convert.d.ts.map