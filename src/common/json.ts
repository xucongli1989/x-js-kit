import { AnyKeyValueType } from "../declaration/common"
import { isArray, isNullOrUndefined, isNullOrWhiteSpace, isString } from "./data"

/**
 * 是否包含名key
 * @param json json对象
 * @param keyName key名
 * @returns 判断结果
 */
export function hasKey(json: AnyKeyValueType, keyName: string) {
    if (!json) {
        return false
    }
    return Object.keys(json).includes(keyName)
}

/**
 * 是否包含值value
 * @param  json json对象
 * @param keyValue value值
 * @returns 判断结果
 */
export function hasValue(json: AnyKeyValueType, keyValue: any) {
    if (!json) {
        return false
    }
    let r = false
    for (const k in json) {
        if (json[k] === keyValue) {
            r = true
            break
        }
    }
    return r
}

/**
 * json对象转成param形式的字符串，如{a:1,b:2,c:[3,4,5]}=>"a=1&b=2&c=3&c=4&c=5"
 * @param  json 待转换的json数据源
 * @returns 转换结果
 */
export function toParams(json: AnyKeyValueType) {
    if (!json) return ""
    const arr = []
    for (const m in json) {
        const value = json[m]
        if (isNullOrUndefined(value) || (isString(value) && isNullOrWhiteSpace(value))) {
            continue
        }
        let temp = ""
        if (isArray(value)) {
            temp = value.join("&" + m + "=")
        } else {
            temp = value
        }
        arr.push(m + "=" + temp)
    }
    return arr.join("&")
}

/**
 * 将json字符串转换为对象，如果转换失败，则返回null
 * @param json json字符串
 */
export function toObject<T>(json: string): T | null {
    if (!json) {
        return null
    }
    let result: T | null = null
    try {
        //去前后空白
        json = json.trim()
        //花括号对象去前后空白
        json = json.replace(/^{\s+/, "{").replace(/\s+}$/, "}")
        //数组对象去前后空白
        json = json.replace(/^\[\s+/, "[").replace(/\s+]$/, "]")
        result = JSON.parse(json)
    } catch {
        //
    }
    return result
}
