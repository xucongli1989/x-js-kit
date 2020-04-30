import { getLocalStorage } from "../common/lib"

let globalCacheName = "x-js-kit-localcache"
/**
 * 自动清理过期缓存的间隔时间（毫秒），默认为30分钟
 */
let autoClearExpiredTimeSpan = 30 * 60 * 1000
let clearExpiredIntervalId: number

export interface ItemContentType {
    /**
     * 具体的缓存值
     */
    value: any
    /**
     * 过期时间，若不指定，则无过期时间（此时间为：从1970年1月1日0时0分0秒（UTC，即协调世界时）到该日期的毫秒数。如：new Date().valueOf()）
     */
    expire?: number
}
export interface GlobalCacheType {
    /**
     * 时间
     */
    time: number,
    /**
     * 所有缓存项
     */
    items: { [key: string]: ItemContentType }
}

/**
 * 返回全局缓存对象
 */
export function getGlobalCache(): (GlobalCacheType | null) {
    const cacheValue = localStorage.getItem(globalCacheName) as string
    if (!cacheValue) {
        return null;
    }
    return JSON.parse(cacheValue) as GlobalCacheType
}
/**
 * 修改localStorage缓存的默认名称
 */
export function setGlobalCacheName(name: string) {
    const oldValue = localStorage.getItem(globalCacheName) as string;
    localStorage.removeItem(globalCacheName)
    globalCacheName = name
    localStorage.setItem(globalCacheName, oldValue);
}


/**
 * 添加数据至缓存（默认每30分钟自动清理所有过期的缓存）
 */
export function add(key: string, value: ItemContentType) {
    const cache = getGlobalCache()
    if (!cache) {
        return
    }
    cache.items[key] = value
    localStorage.setItem(globalCacheName, JSON.stringify(cache))
}

/**
 * 删除指定缓存
 */
export function remove(key: string) {
    const cache = getGlobalCache()
    if (!cache) {
        return
    }
    delete cache.items[key]
    localStorage.setItem(globalCacheName, JSON.stringify(cache))
}

/**
 * 读取指定缓存
 * @param key 缓存key
 * @param ignoreExpireCheck 是否忽略过期检测，默认为false.（true:即使过期，只要还没被清理，则依然返回。false:如果已过期，则删除此缓存并返回null） 
 */
export function get(key: string, ignoreExpireCheck: boolean = false): ItemContentType | null {
    const cache = getGlobalCache()
    if (!cache) {
        return null
    }
    const item = cache.items[key]
    if (!item) {
        return null
    }
    if (!ignoreExpireCheck && item.expire && item.expire < new Date().valueOf()) {
        remove(key)
        return null
    }
    return item
}


/**
 * 清理过期缓存
 */
export function clearExpired() {
    const ch = getGlobalCache()
    if (!ch) return
    Object.keys(ch.items).forEach(key => {
        const item = ch.items[key]
        if (!item || !item.expire) {
            return
        }
        if (item.expire < new Date().valueOf()) {
            remove(key)
        }
    })
}

/**
 * 执行自动定期清理
 */
function runClearExpiredInterval() {
    if (clearExpiredIntervalId) {
        clearInterval(clearExpiredIntervalId)
    }
    clearExpiredIntervalId = setInterval(clearExpired, autoClearExpiredTimeSpan) as any
}

/**
 * 获取自动清理过期缓存的间隔（毫秒）
 */
export function getAutoClearExpiredTimeSpan() {
    return autoClearExpiredTimeSpan
}

/**
 * 设置自动清理过期缓存的间隔（毫秒），并按计划执行清理
 */
export function setAutoClearExpiredTimeSpan(timeSpan: number) {
    if (timeSpan <= 0) {
        throw new Error("timeSpan must > 0.")
    }
    autoClearExpiredTimeSpan = timeSpan
    runClearExpiredInterval()
}



(() => {
    if (!getLocalStorage()) {
        throw new Error("localStorage is not defined. If you are using Node.js ,you need set global.localStorage to an object like original localStorage in browser.")
    }
    //设置默认缓存值
    const defaultGlobalLocalStorage: GlobalCacheType = {
        time: new Date().valueOf(),
        items: {}
    }
    if (!localStorage.getItem(globalCacheName)) {
        localStorage.setItem(globalCacheName, JSON.stringify(defaultGlobalLocalStorage))
    }
    //立即清理过期缓存
    clearExpired()
    //执行定时清理过期缓存
    runClearExpiredInterval()
})()