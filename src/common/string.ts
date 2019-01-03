import { partNumber } from "../constant/regex"
import { htmlEntityMap } from "../constant/map"

/**
 * 将字符串按一定字符数拆分成字符串数组
 */
export const splitString = (str: string, stepCharCount: number): string[] => {
    if (!str || stepCharCount <= 0) {
        return []
    }
    const strLen = str.length
    if (strLen <= stepCharCount) {
        return [str]
    }
    let result: string[] = []
    let startIndex = 0
    while (startIndex < strLen) {
        result.push(str.substr(startIndex, stepCharCount))
        startIndex += stepCharCount
    }
    return result
}

/**
 * 截取字符串并以省略符号显示字符串
 * @param str 原字符串
 * @param len 要保留的字符长度
 * @param ellipsisChars 被截断的字符显示的符号
 */
export const ellipsis = (str: string, len: number, ellipsisChars = "..."): string => {
    if (!str || len <= 0) {
        return ""
    }
    if (str.length <= len) {
        return str
    }
    return str.substring(0, len) + ellipsisChars
}

/**
 * 从字符串中提取数字（可带小数点）。如："abc123.01cde"->123.01
 */
export const getNumber = (str: string): number | null => {
    if (!str) {
        return null
    }
    const mt = str.match(partNumber)
    if (!mt || !mt.length) {
        return null
    }
    return parseFloat(mt[0])
}

/**
 * 去左右空格
 * @param  str 待处理字符串
 * @returns  处理后的字符串
 */
export const trim = (str: string) => {
    if (!str) {
        return ""
    }
    return str.replace(/^\s+|\s+$/g, "")
}

/**
 * 去左空格
 * @param  str 待处理字符串
 * @returns  处理后的字符串
 */
export const lTrim = (str: string) => {
    if (!str) {
        return ""
    }
    return str.replace(/^\s+/, "")
}

/**
 * 去右空格
 * @param  str 待处理字符串
 * @returns  处理后的值
 */
export const rTrim = (str: string) => {
    if (!str) {
        return ""
    }
    return str.replace(/\s+$/, "")
}

/**
 * 指定源字符串sourceStr中是否包含str字符串
 * @param  sourceStr 源字符串
 * @param  str 要查找的字符串
 * @param  isIgnoreCase 是否忽略大小写(默认为false)
 * @returns  结果
 */
export const contains = (sourceStr: string, str: string, isIgnoreCase: boolean = false) => {
    if (!sourceStr) {
        return false
    }
    if (str === "") {
        return true
    }
    if (!str) {
        return false
    }
    if (isIgnoreCase) {
        sourceStr = sourceStr.toUpperCase()
        str = str.toUpperCase()
    }
    return sourceStr.includes(str)
}

/**
* 将html标签转换为实体形式
* @param  html 需要被替换的html
* @returns  转换后的值
*/
export const escapeHtml = (html: string) => {
    if (!html) {
        return ""
    }
    return String(html).replace(/[&<>"'\/]/g, (s) => {
        return htmlEntityMap[s]
    })
}

/**
 * @param   str 要重复的字符串
 * @param   count 重复次数
 * @returns  新的字符串
 */
export const repeat = (str: string, count: number) => {
    if (!str || count <= 0) {
        return ""
    }
    let s = []
    while (count--) {
        s.push(str)
    }
    return s.join('')
}