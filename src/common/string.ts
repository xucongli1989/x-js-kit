import { partNumber, htmlLeftRightBlank } from "../constant/regex"
import { escapeReg } from "./regexp"
import { htmlEntityMap } from "../constant/map"

/**
 * 将字符串按一定字符数拆分成字符串数组
 */
export function splitString(str: string, stepCharCount: number): string[] {
    if (!str || stepCharCount <= 0) {
        return []
    }
    const strLen = str.length
    if (strLen <= stepCharCount) {
        return [str]
    }
    const result: string[] = []
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
export function ellipsis(str: string, len: number, ellipsisChars = "..."): string {
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
export function getNumber(str: string): number | null {
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
export function trim(str: string) {
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
export function lTrim(str: string) {
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
export function rTrim(str: string) {
    if (!str) {
        return ""
    }
    return str.replace(/\s+$/, "")
}

/**
 * 去掉左边的指定字符串
 * @param str 待处理的字符串
 * @param strToRemove 需要移除的字符串
 * @param isIgnoreCase 是否忽略大小写
 * @returns 处理结果
 */
export function lTrimString(str: string, strToRemove: string, isIgnoreCase: boolean = false) {
    if (!str) {
        return ""
    }
    if (!strToRemove) {
        return str
    }
    return str.replace(new RegExp(`^(${escapeReg(strToRemove)})*`, isIgnoreCase ? "gi" : "g"), "")
}

/**
 * 去掉右边的指定字符串
 * @param str 待处理的字符串
 * @param strToRemove 需要移除的字符串
 * @param isIgnoreCase 是否忽略大小写
 * @returns 处理结果
 */
export function rTrimString(str: string, strToRemove: string, isIgnoreCase: boolean = false) {
    if (!str) {
        return ""
    }
    if (!strToRemove) {
        return str
    }
    return str.replace(new RegExp(`(${escapeReg(strToRemove)})*$`, isIgnoreCase ? "gi" : "g"), "")
}

/**
 * 去左右指定的字符串
 * @param str 待处理的字符串
 * @param strToRemove 需要移除的字符串
 * @param isIgnoreCase 是否忽略大小写
 * @returns 处理结果
 */
export function trimString(str: string, strToRemove: string, isIgnoreCase: boolean = false) {
    if (!str) {
        return ""
    }
    if (!strToRemove) {
        return str
    }
    return str.replace(new RegExp(`(^(${escapeReg(strToRemove)})*)|((${escapeReg(strToRemove)})*$)`, isIgnoreCase ? "gi" : "g"), "")
}

/**
 * 从html字符串中移除左右空白占位符
 * @param html 待处理的字符串
 * @returns 处理结果
 */
export function trimHTML(html: string) {
    let str = html
    if (!str) {
        return ""
    }
    while (htmlLeftRightBlank.test(str)) {
        str = str.replace(htmlLeftRightBlank, "")
    }
    return str
}

/**
 * 指定源字符串source中是否包含search字符串
 * @param  source 源字符串
 * @param  search 要查找的字符串
 * @param  isIgnoreCase 是否忽略大小写(默认为false)
 * @returns  结果
 */
export function contains(source: string, search: string, isIgnoreCase: boolean = false) {
    let sourceStr = source
    let str = search
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
export function escapeHtml(html: string) {
    if (!html) {
        return ""
    }
    return String(html).replace(/[&<>"'/]/g, (s) => htmlEntityMap[s])
}

/**
 * @param   str 要重复的字符串
 * @param   repeatCount 重复次数
 * @returns  新的字符串
 */
export function repeat(str: string, repeatCount: number) {
    let count = repeatCount
    if (!str || count <= 0) {
        return ""
    }
    const s = []
    while (count--) {
        s.push(str)
    }
    return s.join('')
}

/**
 * 字符串批量构建器（无需使用"+"进行字符串的拼接，直接使用此对象的append方法后，再toString即可得到拼好的字符串）
 */
export class Builder<T> {
    private _arr: T[] = []
    /**
     * 追加项
     * @param items 待追加的项
     * @returns this 
     */
    append(...items: T[]) {
        this._arr.push(...items)
        return this
    }
    /**
     * 返回已合并的所有项的字符串
     */
    toString() {
        return this._arr.join("")
    }
    /**
     * 清空当前的构建器中的所有项
     * @returns this
     */
    clear() {
        this._arr = []
        return this
    }
    /**
     * 返回构建器中所有项的字符串总的字符长度
     */
    length() {
        return this.toString().length
    }
}

export const builder = Builder

/**
 * 使用模板格式化字符串
 * @param str 模板，如："今天是星期{0}，已成交{1}单！"
 * @param args 模板中的参数
 */
export function format(str: string, ...args: any[]) {
    if (!str || !args.length) {
        return str
    }
    let result = str
    for (let token = 0; token < args.length; token++) {
        result = result.replace(new RegExp("\\{" + token + "\\}", "gi"), args[token])
    }
    return result
}