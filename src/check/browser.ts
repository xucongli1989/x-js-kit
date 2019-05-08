import { isBowser, getGlobalObject } from "../common/lib"
import { getWidthType, BrowserWidthTypeEnum } from "../device/browser"

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

/**
 * 是否非常小的宽度
 */
export function isExtraSmall() {
    return getWidthType() == BrowserWidthTypeEnum.ExtraSmall
}

/**
 * 是否小的宽度
 */
export function isSmall() {
    return getWidthType() == BrowserWidthTypeEnum.Small
}

/**
 * 是否中等宽度
 */
export function isMedium() {
    return getWidthType() == BrowserWidthTypeEnum.Medium
}

/**
 * 是否大的宽度
 */
export function isLarge() {
    return getWidthType() == BrowserWidthTypeEnum.Large
}

/**
 * 是否非常大的宽度
 */
export function isExtraLarge() {
    return getWidthType() == BrowserWidthTypeEnum.ExtraLarge
}