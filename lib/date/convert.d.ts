import { DateTimeEntityType } from "../declaration/date";
/**
 * 返回时间实体对象
 */
export declare function toEntity(dt: Date): DateTimeEntityType;
/**
* 将字符串"/Date(...)/"的日期转为js Date对象
* @param dateStr date字符串，如"/Date(1441036800000)/"
* @returns 如果转换成功，则返回Date对象，否则返回null
*/
export declare function parse(dateStr: string): Date | null;
//# sourceMappingURL=convert.d.ts.map