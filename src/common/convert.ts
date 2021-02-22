/**
 * 将值转为int型，若失败，则返回defaultValue
 * @param val 要转换的值
 * @param  defaultValue 默认值
 * @returns 转换结果
 */
export function toIntDefault(val: any, defaultValue: number | null) {
    const result = parseInt(val, 10)
    if (isNaN(result)) {
        return defaultValue
    }
    return result
}

/**
 * 将值转为int型，若失败，则返回0
 * @param  val 要转换的值
 */
export function toInt(val: any): number {
    return toIntDefault(val, 0) as number
}

/**
 * 将值转为int型，若失败，则返回null
 * @param  val 要转换的值
 * @returns 如果转换失败，则返回null
 */
export function toIntNull(val: any) {
    return toIntDefault(val, null)
}

/**
 * 将值转为float型，若失败，则返回defaultValue
 * @param val 要转换的值
 * @param defaultValue 默认值
 * @returns  转换结果
 */
export function toFloatDefault(val: any, defaultValue: number | null) {
    const result = parseFloat(val)
    if (isNaN(result)) {
        return defaultValue
    }
    return result
}

/**
 * 将值转为float型，若失败，则返回0
 * @param  val 要转换的值
 * @returns  转换结果
 */
export function toFloat(val: any): number {
    return toFloatDefault(val, 0) as number
}

/**
 * 将值转为float型，若失败，则返回null
 * @param  val 要转换的值
 * @returns  转换结果
 */
export function toFloatNull(val: any) {
    return toFloatDefault(val, null)
}
