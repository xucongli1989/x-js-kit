/**
 * 星期几的类型
 */
export declare type WeekValueType = 0 | 1 | 2 | 3 | 4 | 5 | 6;
/**
 * 月份类型
 */
export declare type MonthValueType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
/**
 * 时间实体类型
 */
export interface DateTimeEntityType {
    /**
     * 年份，如：2019
     */
    year: number;
    /**
     * 月份（从1开始），如：1
     */
    month: MonthValueType;
    /**
     * 日期，如：10
     */
    day: number;
    /**
     * 小时，如：13
     */
    hour: number;
    /**
     * 分钟，如：45
     */
    min: number;
    /**
     * 秒，如：55
     */
    second: number;
    /**
     * 毫秒，如：122
     */
    millisecond: number;
    /**
     * 星期（0为星期日），（0~6）
     */
    week: WeekValueType;
}
//# sourceMappingURL=date.d.ts.map