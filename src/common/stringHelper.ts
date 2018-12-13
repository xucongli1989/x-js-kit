/**
 * 将字符串按一定字符数拆分成字符串数组
 */
export const splitString = (str: string, stepCharCount: number): string[] => {
    if (!str) {
        return []
    }
    const strLen = str.length
    if (!stepCharCount || stepCharCount <= 0 || strLen <= stepCharCount) {
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