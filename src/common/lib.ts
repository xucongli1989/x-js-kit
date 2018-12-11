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