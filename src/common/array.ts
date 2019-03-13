/**
 * 将一个数组拆分为多个数组
 * @param arr 原数组
 * @param stepCount 拆分后，每个数组最多包含的项数量
 */
export function splitArray<T>(arr: T[], stepCount: number): T[][] {
    if (!arr || !arr.length || stepCount <= 0) {
        return []
    }
    const arrLen = arr.length
    if (arrLen <= stepCount) {
        return [arr]
    }
    const newArray: T[][] = []
    const maxCount = Math.ceil(arrLen / stepCount)
    let startIndex = 0
    for (let i = 0; i < maxCount; i++) {
        newArray[i] = arr.slice(startIndex, (i + 1) * stepCount)
        startIndex += stepCount
    }
    return newArray
}

/**
 * 去掉array中的重复项
 * @param arr 需要去重的数组
 */
export function unique<T>(arr: T[]): T[] {
    if (!arr || arr.length <= 1) {
        return arr;
    }
    let newArr = [...arr], duplicateIdx = [], idxLength = 0;
    for (let i = 1; i < newArr.length; i++) {
        if (newArr[i] === newArr[i - 1]) {
            idxLength = duplicateIdx.push(i);
        }
    }
    if (idxLength > 0) {
        while (idxLength--) {
            newArr.splice(duplicateIdx[idxLength], 1);
        }
    }
    return newArr
}