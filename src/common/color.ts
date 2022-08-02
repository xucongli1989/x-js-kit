import { toInt } from "./convert"
import { isNumber } from "./data"
import { splitString } from "./string"

/**
 * 颜色实体
 */
export interface RGBAColorType {
    /**
     * 0-255
     */
    r: number
    /**
     * 0-255
     */
    g: number
    /**
     * 0-255
     */
    b: number
    /**
     * 0-255
     */
    a?: number
    /**
     * a 的 0~1 小数形式
     */
    a01?: number
    /**
     * a 的 0~100 百分比形式
     */
    a100?: number
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
        result.a01 = 1
        result.a100 = 100
        return result
    }
    if (arr.length == 4) {
        result = {} as any
        result.r = parseInt(arr[0], 16)
        result.g = parseInt(arr[1], 16)
        result.b = parseInt(arr[2], 16)
        result.a = parseInt(arr[3], 16)
        result.a01 = result.a / 255.0
        result.a100 = toInt(result.a01 * 100)
        return result
    }
    return result
}

/**
 * 将 RGBA 转换为十六进制的颜色字符串（小写，如：#ff001199）
 */
export function rgbaToHex(rgba: RGBAColorType) {
    if (!rgba) {
        return ""
    }
    const getHex = (v: number) => v.toString(16).padStart(2, "0")
    let aHex = "ff"
    if (isNumber(rgba.a)) {
        aHex = getHex(rgba.a as number)
    } else if (isNumber(rgba.a01)) {
        aHex = getHex(toInt((rgba.a01 as number) * 255))
    } else if (isNumber(rgba.a100)) {
        aHex = getHex(toInt(((rgba.a100 as number) / 100.0) * 255))
    }
    return `#${getHex(rgba.r)}${getHex(rgba.g)}${getHex(rgba.b)}${aHex}`
}
