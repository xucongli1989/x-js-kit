/**
 * 将分钟数转为带小时的字符串，如：10小时20分钟
 */
export declare function toHourStringFromMins(mins: number): string;
/**
 * 将Date对象转换为指定的格式字符串
 * 注：月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * @param dateValue 日期对象
 * @param fmtStr 格式（默认值为yyyy-MM-dd），如：yyyy-MM-dd
 * @returns 格式化后的字符串
 */
export declare function format(dateValue: Date | number, fmtStr?: string): string;
//# sourceMappingURL=format.d.ts.map