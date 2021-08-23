/**
 * 星期几的类型
 */
export type WeekValueType = 0 | 1 | 2 | 3 | 4 | 5 | 6

/**
 * 月份类型
 */
export type MonthValueType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

/**
 * 时间实体类型
 */
export interface DateTimeEntityType {
    /**
     * 年份，如：2019
     */
    year: number
    /**
     * 月份（从1开始），如：1
     */
    month: MonthValueType
    /**
     * 日期，如：10
     */
    day: number
    /**
     * 小时，如：13
     */
    hour: number
    /**
     * 分钟，如：45
     */
    min: number
    /**
     * 秒，如：55
     */
    second: number
    /**
     * 毫秒，如：122
     */
    millisecond: number
    /**
     * 星期（0为星期日），（0~6）
     */
    week: WeekValueType
}

/**
 * 用于计时类统计的实体类型，如：耗时信息
 */
export interface DateTimeCounterEntityType {
    /**
     * 年，按 12 个月（360 天）计算
     */
    year: number
    /**
     * 月，按 30 天计算
     */
    month: number
    /**
     * 日
     */
    day: number
    /**
     * 时
     */
    hour: number
    /**
     * 分
     */
    min: number
    /**
     * 秒
     */
    second: number
    /**
     * 毫秒
     */
    millisecond: number
}
