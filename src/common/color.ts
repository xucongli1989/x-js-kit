import { isNullOrUndefined } from "./data"
import { splitString } from "./string"

/**
 * 颜色实体
 */
export interface RGBAColorType {
    r: number
    g: number
    b: number
    a: number
}

/**
 * 将十六进制的 RGBA 颜色转换为实体对象
 */
export function hexToEntity(hex: string) {
    let result: RGBAColorType = null as any
    hex = hex?.replaceAll("#", "").trim()
    if (!hex) {
        return result
    }
    const arr = splitString(hex, 2)
    if (arr.length == 3) {
        result = {} as any
        result.r = parseInt(arr[0], 16)
        result.g = parseInt(arr[1], 16)
        result.b = parseInt(arr[2], 16)
        result.a = 255
        return result
    }
    if (arr.length == 4) {
        result = {} as any
        result.r = parseInt(arr[0], 16)
        result.g = parseInt(arr[1], 16)
        result.b = parseInt(arr[2], 16)
        result.a = parseInt(arr[3], 16)
        return result
    }
    return result
}

/**
 * 将 RGBA 转换为十六进制的颜色字符串（小写，如：#ff001199）
 */
export function rgbaToHex(r: number, g: number, b: number, a?: number) {
    const getHex = (v: number) => v.toString(16).padStart(2, "0")
    return `#${getHex(r)}${getHex(g)}${getHex(b)}${isNullOrUndefined(a) ? "" : getHex(a || 0)}`
}
