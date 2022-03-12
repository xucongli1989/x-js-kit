import { KeyValue } from "../entity/keyValue"
import { isNullOrUndefined } from "./data"

/**
 * 将枚举转换为KeyValue列表
 */
export function convertEnumToList<T>(em: T): KeyValue[] {
    const lst = [] as KeyValue[]
    for (const key in em) {
        if (!isNaN(Number(key))) {
            continue
        }
        const item = {} as KeyValue
        item.key = key
        item.value = em[key]
        lst.push(item)
    }
    return lst
}

/**
 *  获取枚举的默认值（如果没有指定自定义的默认值，则取第一个；如果有指定自定义的默认值，则判断此默认值是否在此枚举中存在，如果不存在，则取枚举的第一个）
 */
export function getDefaultEnum<T>(em: T, defaultValue?: string | number): T {
    const lst = convertEnumToList(em)
    if (!isNullOrUndefined(defaultValue)) {
        const m = lst.find((k) => k.value == defaultValue)
        if (m) {
            return (em as any)[m.key] as T
        }
    }
    return (em as any)[lst[0].key] as T
}

/**
 * 判断一个值是否属于指定的枚举
 */
export function isValueInEnum<T>(em: T, value: string | number): boolean {
    if (isNullOrUndefined(value)) {
        return false
    }
    return !!convertEnumToList(em).find((k) => k.value == value)
}
