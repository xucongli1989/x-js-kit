import { DateTimeEntityType, MonthValueType, WeekValueType } from "../declaration/date"
import { isDate, isString } from "../common/data"

/**
 * 返回时间实体对象
 */
export function toEntity(dt: Date): DateTimeEntityType {
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

/**
* 将字符串"/Date(...)/"的日期转为js Date对象
* @param dateStr date字符串，如"/Date(1441036800000)/"
* @returns 如果转换成功，则返回Date对象，否则返回null
*/
export function parse(dateStr: string): Date | null {
    if (!dateStr || !isString(dateStr)) {
        return null
    }
    let date = null
    const mts = dateStr.match(/(\/Date\((\d+)\)\/)/)
    if (mts && mts.length >= 3) {
        date = new Date(parseInt(mts[2]))
    }
    if (!isDate(date)) {
        return null
    }
    return date
}