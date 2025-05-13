import { KeyValue } from "../entity/keyValue"
import { isNullOrUndefined } from "./data"

/**
 * 将枚举转换为KeyValue列表
 */
export function convertEnumToList<T>(em: T): KeyValue<string, any>[] {
    const lst = [] as KeyValue<string, any>[]
    for (const key in em) {
        if (!isNaN(Number(key))) {
            continue
        }
        const item = {} as KeyValue<string, any>
        item.key = key
        item.value = em[key] as any
        lst.push(item)
    }
    return lst
}

/**
 *  将字符串或数字转换为枚举，若转换失败则取枚举的第一项或取自定义的默认枚举
 */
export function toEnum<T>(em: T, value: string | number, defaultValue?: T[keyof T]): T[keyof T] {
    const lst = convertEnumToList(em)
    if (!isNullOrUndefined(value)) {
        const m = lst.find((k) => k.value == value)
        if (m) {
            return (em as any)[m.key]
        }
    }
    if (!isNullOrUndefined(defaultValue)) {
        return defaultValue as T[keyof T]
    }
    return (em as any)[lst[0].key]
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
