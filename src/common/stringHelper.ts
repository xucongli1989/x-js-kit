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