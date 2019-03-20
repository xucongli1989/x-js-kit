import { isBowser, getGlobalObject } from "../common/lib"

/**
 * 判断是否为IE浏览器（仅支持<=IE 11）
 * @param version 具体的IE版本号
 * @param userAgent 浏览器代理字符串，若不指定，则取navigator.userAgent
 */
export function isIE(version?: number, userAgent?: string): boolean {
    let ua = userAgent || ""
    if (isBowser() && !ua) {
        ua = (<Window>getGlobalObject()).navigator.userAgent
    }
    if (!ua) {
        throw new Error("You must set userAgent in this method.")
    }
    if (!version) {
        return /msie/i.test(ua) || !!ua.match(/Trident\/7\./i)
    }
    if (version == 11) {
        return !!ua.match(/Trident\/7\./i)
    }
    return (ua.match(new RegExp("MSIE\\s+(\\d+)", "i")) || [])[1] == version.toString()
}