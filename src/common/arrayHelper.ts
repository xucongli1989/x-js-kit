/**
 * 将一个数组拆分为多个数组
 * @param arr 原数组
 * @param stepCount 拆分后，每个数组最多包含的项数量
 */
export const splitArray = (arr: any[], stepCount: number): any[][] => {
    if (!arr || !arr.length || stepCount <= 0) {
        return []
    }
    const arrLen = arr.length
    if (arrLen <= stepCount) {
        return [arr]
    }
    const newArray: any[][] = []
    const maxCount = Math.ceil(arrLen / stepCount)
    let startIndex = 0
    for (let i = 0; i < maxCount; i++) {
        newArray[i] = arr.slice(startIndex, (i + 1) * stepCount)
        startIndex += stepCount
    }
    return newArray
}