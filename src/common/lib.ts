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
 * 获取localStorage对象
 */
export const getLocalStorage = (): Storage => {
    if (isBowser()) {
        return window.localStorage
    }
    return ((global as any).localStorage || null) as Storage
}