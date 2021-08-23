import { DateTimeCounterEntityType, DateTimeEntityType, MonthValueType, WeekValueType } from "../declaration/date"
import { isDate, isString } from "../common/data"
import { toInt } from "../common/convert"

/**
 * 一年的毫秒数（按360天计算）
 */
const msPerYear = 31104000000
/**
 * 一个月的毫秒数（按30天计算）
 */
const msPerMonth = 2592000000
/**
 * 一天的毫秒数
 */
const msPerDay = 86400000
/**
 * 一小时的毫秒数
 */
const msPerHour = 3600000
/**
 * 一分钟的毫秒数
 */
const msPerMin = 60000
/**
 * 一秒钟的毫秒数
 */
const msPerSec = 1000

/**
 * 返回时间实体对象
 */
export function toEntity(dt: Date): DateTimeEntityType {
    const model = {} as DateTimeEntityType
    model.year = dt.getFullYear()
    model.month = (dt.getMonth() + 1) as MonthValueType
    model.day = dt.getDate()
    model.hour = dt.getHours()
    model.min = dt.getMinutes()
    model.second = dt.getSeconds()
    model.millisecond = dt.getMilliseconds()
    model.week = dt.getDay() as WeekValueType
    return model
}

/**
 * 根据毫秒数返回用于计时统计的实体
 */
export function toCounterEntity(ms: number): DateTimeCounterEntityType {
    const model = {} as DateTimeCounterEntityType
    model.year = 0
    model.month = 0
    model.day = 0
    model.hour = 0
    model.min = 0
    model.second = 0
    model.millisecond = 0

    if (ms <= 0) {
        return model
    }

    if (ms >= msPerYear) {
        model.year = toInt(ms / msPerYear)
    }
    if (ms >= msPerMonth) {
        model.month = toInt((ms % msPerYear) / msPerMonth)
    }
    if (ms >= msPerDay) {
        model.day = toInt(((ms % msPerYear) % msPerMonth) / msPerDay)
    }
    if (ms >= msPerHour) {
        model.hour = toInt((((ms % msPerYear) % msPerMonth) % msPerDay) / msPerHour)
    }
    if (ms >= msPerMin) {
        model.min = toInt(((((ms % msPerYear) % msPerMonth) % msPerDay) % msPerHour) / msPerMin)
    }
    if (ms >= msPerSec) {
        model.second = toInt((((((ms % msPerYear) % msPerMonth) % msPerDay) % msPerHour) % msPerMin) / msPerSec)
    }
    model.millisecond = toInt((((((ms % msPerYear) % msPerMonth) % msPerDay) % msPerHour) % msPerMin) % msPerSec)
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
