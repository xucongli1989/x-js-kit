import { DateTimeEntityType, MonthValueType, WeekValueType } from "../declaration/date"

/**
 * 返回时间实体对象
 */
export const toEntity = (dt: Date): DateTimeEntityType => {
    const model = {} as DateTimeEntityType
    model.year = dt.getFullYear()
    model.month = dt.getMonth() + 1 as MonthValueType
    model.day = dt.getDate()
    model.hour = dt.getHours()
    model.min = dt.getMinutes()
    model.second = dt.getSeconds()
    model.millisecond = dt.getMilliseconds()
    model.week = dt.getDay() as WeekValueType
    return model
}