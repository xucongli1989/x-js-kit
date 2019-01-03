/**
 * 是否为服务器环境
 */
export const isServer = () => {
    return typeof (window) === 'undefined'
}

/**
 * 是否为浏览器环境
 */
export const isBowser = () => {
    return !isServer()
}

/**
 * 获取全局对象
 */
export const getGlobalObject = () => {
    if (isBowser()) {
        return window
    }
    return global
}

/**
 * 获取localStorage对象
 */
export const getLocalStorage = (): Storage => {
    const g: any = getGlobalObject()
    return (g.localStorage || null) as Storage
}

/**
 * 创建全局命名空间
 * @param name 名称，如"A.B.C"
 * @returns 全局对象，如：window.A.B.C
 */
export const createNamespace = (name: string): object => {
    if (!name) {
        return null as any
    }
    let obj: any = getGlobalObject(), tokens = name.split("."), token = ""
    while (tokens.length > 0) {
        token = tokens.shift() as string
        if (typeof obj[token] === "undefined") {
            obj[token] = {}
        }
        obj = obj[token]
    }
    return obj
}