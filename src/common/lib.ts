import { AnyKeyValueType, AnyFunctionType } from "../declaration/common"
import { isFunction } from "./data"

/**
 * tryRun在调用异常时执行的函数
 */
let defaultTryRunErrorHandler: AnyFunctionType = () => null

/**
 * 是否为服务器环境
 */
export function isServer() {
    return typeof (window) === 'undefined'
}

/**
 * 是否为浏览器环境
 */
export function isBowser() {
    return !isServer()
}

/**
 * 获取全局对象
 */
export function getGlobalObject(): Window | NodeJS.Global {
    if (isBowser()) {
        return window
    }
    return global
}

/**
 * 当前环境中的全局对象
 */
export const globalObject = getGlobalObject()

/**
 * 获取document对象，若没有，则为null
 */
export function getDocument(): Document {
    return ((globalObject as any).document || null) as Document
}

/**
 * 当前环境中的document对象，若没有，则为null
 */
export const document = getDocument()



/**
 * 获取localStorage对象，若没有，则为null
 */
export function getLocalStorage(): Storage {
    return ((globalObject as any).localStorage || null) as Storage
}

/**
 * 获取Symbol类型，若没有，则为null
 */
export function getSymbol(desc?: string): any {
    const g = globalObject as any
    return g.Symbol ? g.Symbol(desc) : null
}

/**
 * 创建全局命名空间
 * @param name 名称，如"A.B.C"
 * @returns 全局对象，如：window.A.B.C
 */
export function createNamespace(name: string): object {
    if (!name) {
        return null as any
    }
    let obj: any = globalObject
    const tokens = name.split(".")
    let token = ""
    while (tokens.length > 0) {
        token = tokens.shift() as string
        if (typeof obj[token] === "undefined") {
            obj[token] = {}
        }
        obj = obj[token]
    }
    return obj
}

/**
 * 获取指定对象的指定属性
 * @param obj 对象
 * @param path 属性路径，如：a.b.c
 * @returns 返回obj.a.b.c，如果获取失败，则返回null
 */
export function getValue<T>(obj: AnyKeyValueType, path: string): T | null {
    if (!obj || !path) {
        return null
    }
    let temp = obj
    try {
        path.split(".").forEach(keyName => {
            temp = temp[keyName]
        })
        if (typeof (temp) == 'undefined') {
            return null
        }
        return temp as T
    } catch (e) {
        return null
    }
}

/**
 * 深度clone
 */
export function deepClone<T>(obj: T): T | null {
    try {
        return JSON.parse(JSON.stringify(obj))
    } catch (e) {
        return null
    }
}

/**
 * 尝试运行指定function；若异常，则执行全局配置的异常处理函数tryRunErrorHandler，并返回null
 * @param fn  函数名
 * @param args 参数
 */
export function tryRun<T>(fn: AnyFunctionType, ...args: any[]): T | null {
    if (!fn) {
        return null
    }
    try {
        return fn(...args) as T
    } catch (e) {
        if (defaultTryRunErrorHandler) {
            defaultTryRunErrorHandler(e)
        }
        return null
    }
}

/**
 * 重新设置全局异常处理函数
 */
export function setTryRunErrorHandler(fn: AnyFunctionType) {
    defaultTryRunErrorHandler = fn
}


/**
 * 合并多个对象，与 Object.assign 的行为唯一的区别是：把相同的函数合并到一起，并从第一个参数的此函数一直调用到最后一个参数的此函数
 * @param objs 要合并的对象
 * @returns 合并后的新对象
 */
export function mergeObjectAndCombineSameFunc<T = any>(target: T, ...sources: T[]): T {
    if (!sources || !sources.length) {
        return target
    }
    const result = sources.reduce((preItem: any, currentItem: any) => {
        if (!preItem) {
            return currentItem
        }
        if (!currentItem) {
            return preItem
        }
        const pre = { ...preItem }
        const cur = { ...currentItem }
        //合并function
        Object.keys(pre).forEach((key) => {
            const preValue: any = pre[key]
            const currentValue: any = cur[key]
            const isPreValueFunction: boolean = isFunction(preValue)
            const isCurrentValueFunction: boolean = isFunction(currentValue)
            if (!isPreValueFunction && !isCurrentValueFunction) {
                return
            }
            if (isPreValueFunction && !isCurrentValueFunction) {
                //上一项是函数，而下一项不是函数，则以上一项为准
                cur[key] = preValue
            } else if (!isPreValueFunction && isCurrentValueFunction) {
                //上一项不是函数，下一项是函数，不用处理
            } else {
                //上一项与下一项的值均为函数，则合并
                cur[key] = (...args: any[]) => {
                    preValue(...args)
                    currentValue(...args)
                }
            }
            //删除上一项的值，便于后面的合并覆盖
            pre[key] = undefined
        })
        return {
            ...pre,
            ...cur
        }
    }, target || {}) as T
    return result
}
