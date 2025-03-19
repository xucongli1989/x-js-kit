import { partNumber, htmlLeftRightBlank, chineseChar } from "../constant/regex"
import { escapeReg } from "./regexp"
import { htmlEntityMap } from "../constant/map"
import { MethodResult } from "../entity/method-result"
import { toInt } from "./convert"
import { getXJsKitI18nInstance } from "../i18n"
import { XJsKitTranslationKeyNameEnum } from "../i18n/data"

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
 * 判断两个字符串是否相等（忽略大小写）
 */
export function equalsIgnoreCase(a: string, b: string) {
    return (a || "").toUpperCase() == (b || "").toUpperCase()
}

/**
 * 判断两个字符串是否相等（忽略大小写+去左右空白）
 */
export function equalsIgnoreCaseAndTrim(a: string, b: string) {
    return equalsIgnoreCase(trim(a), trim(b))
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
    return s.join("")
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

/**
 * 删除空白行（空白行是指：此行为空白且末尾为 \r 或 \n）
 */
export function removeBlankLines(str: string): string {
    if (!str) {
        return ""
    }
    return str.replace(/^\s*[\r\n]/gm, "")
}

/**
 * 将文本中的字符串形式或换行符形式的 "\r\n" 和 "\n" 统一替换成 <br/>
 */
export function replaceNewlineToBr(str: string) {
    if (!str) {
        return ""
    }
    return str.replace(/(\\r\\n)|(\r\n)/gi, "<br/>").replace(/(\\n)|(\n)/gi, "<br/>")
}

/**
 * 获取字符串中的中文字符
 */
export function getChineseWord(str: string) {
    if (!str) {
        return ""
    }
    const match = str.match(new RegExp(chineseChar, "g"))
    if (!match || !match.length) {
        return ""
    }
    return match.join("")
}

/**
 * 按分隔符合并字符串
 */
export function combineStr(separator: string, ...subStrs: string[]) {
    if (!subStrs || !subStrs.length) {
        return ""
    }
    return subStrs.filter((k) => !!k).join(separator)
}

/**
 * 判断字符串是否表示一个集合中的某一项或某一个范围（注：一个范围用英文冒号分隔，多个范围用英文逗号分隔。自动兼容全半角分隔符和多余的空格），如：
 * 【1】表示第1项
 * 【2】表示第2项
 * 【2:5】表示第2项到第5项
 * 【-1】表示最后一项
 * 【-2】表示倒数第2项
 * 【-5:-2】表示倒数第5项到倒数第2项
 * 【2,4:7,-5:-2】表示第2项和第4到7项和倒数第5项至倒数第2项
 */
export function isRangeText(str: string, isOnlySupportOneRange?: boolean) {
    const i18n = getXJsKitI18nInstance()
    const msg = new MethodResult()
    str = str?.replace(/，/g, ",").replace(/：/g, ":").replace(/\s/g, "")
    str = trimString(str, ",")
    if (!str) {
        msg.isSuccess = false
        msg.message = i18n.t(XJsKitTranslationKeyNameEnum.必须提供一个有效的范围)
        return msg
    }
    const itemReg = /^-?\d+$/
    const items = str.split(",")

    if (isOnlySupportOneRange && items.length >= 2) {
        msg.isSuccess = false
        msg.message = i18n.t(XJsKitTranslationKeyNameEnum.格式不正确只支持单个范围请删除逗号)
        return msg
    }

    for (const item of items) {
        const arr = item.split(":")
        if (!(arr.length == 1 || arr.length == 2)) {
            msg.isSuccess = false
            msg.message = i18n.t(XJsKitTranslationKeyNameEnum.格式不正确)
            break
        }
        if (!itemReg.test(arr[0]) || !toInt(arr[0])) {
            msg.isSuccess = false
            msg.message = i18n.t(XJsKitTranslationKeyNameEnum.格式不正确必须为整数且不能为0)
            break
        }
        if (arr.length == 2 && (!itemReg.test(arr[1]) || !toInt(arr[1]))) {
            msg.isSuccess = false
            msg.message = i18n.t(XJsKitTranslationKeyNameEnum.格式不正确必须为整数且不能为0)
            break
        }
        if (arr.length == 2 && toInt(arr[0]) < 0 && toInt(arr[1]) > 0) {
            msg.isSuccess = false
            msg.message = i18n.t(XJsKitTranslationKeyNameEnum.左侧数字为负数时右侧数字必须也同时为负数)
            break
        }
        if (arr.length == 2 && toInt(arr[0]) > 0 && toInt(arr[1]) < 0) {
            continue
        }
        if (arr.length == 2 && toInt(arr[0]) > toInt(arr[1])) {
            msg.isSuccess = false
            msg.message = i18n.t(XJsKitTranslationKeyNameEnum.格式不正确左侧数字必须小于等于右侧数字)
            break
        }
    }
    return msg
}

/**
 * 删除字符串前面的下划线
 */
export function removeStartLine(str: string) {
    return lTrimString(str, "_")
}

/**
 * 删除所有空白字符
 */
export function removeWhiteSpace(str: string) {
    if (!str) {
        return ""
    }
    return str.replaceAll(/\s+/g, "")
}
