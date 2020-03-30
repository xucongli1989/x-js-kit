import { AnyKeyValueType } from "../declaration/common"
import {isArray} from "./data"

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
    if (!json) return "";
    const arr = []
    let temp = "";
    for (const m in json) {
        if (isArray(json[m])) {
            temp = json[m].join("&" + m + "=");
        } else {
            temp = json[m];
        }
        arr.push(m + "=" + temp);
    }
    return arr.join("&");
}