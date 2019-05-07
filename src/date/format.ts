import { isNumber, isDate } from "../common/data"

/**
 * 将分钟数转为带小时的字符串，如：10小时20分钟
 */
export function toHourStringFromMins(mins: number): string {
    if (mins < 0) {
        return ""
    }
    if (mins == 0) {
        return "0分钟"
    }
    let h = parseInt((mins / 60).toString());
    let m = parseInt((mins % 60).toString());
    let s = [];
    if (h > 0) {
        s.push(`${h}小时`);
    }
    if (m > 0) {
        s.push(`${m}分钟`);
    }
    return s.join("");
}

/**
 * 将Date对象转换为指定的格式字符串
 * 注：月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * @param dateValue 日期对象
 * @param fmt 格式（默认值为yyyy-MM-dd），如：yyyy-MM-dd
 * @returns 格式化后的字符串
 */
export function format(dateValue: Date | number, fmt: string = "yyyy-MM-dd") {
    let dt: Date = dateValue as Date
    if (isNumber(dateValue as any)) {
        dt = new Date(dateValue)
    }
    if (!isDate(dt)) {
        return ""
    }
    const o: any = {
        "M+": dt.getMonth() + 1, //月份 
        "d+": dt.getDate(), //日 
        "h+": dt.getHours(), //小时 
        "m+": dt.getMinutes(), //分 
        "s+": dt.getSeconds(), //秒 
        "q+": Math.floor((dt.getMonth() + 3) / 3), //季度 
        "S": dt.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (dt.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
        }
    }
    return fmt
}  