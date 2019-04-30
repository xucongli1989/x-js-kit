import { getLocalStorage } from "../common/lib"

let globalCacheName = "x-js-kit-localcache"

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
 * 添加数据至缓存
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
 * 读取指定缓存
 */
export function get(key: string): ItemContentType | null {
    const cache = getGlobalCache()
    if (!cache) {
        return null
    }
    const item = cache.items[key]
    if (!item) {
        return null
    }
    if (item.expire && item.expire < new Date().valueOf()) {
        remove(key)
        return null
    }
    return item
}
/**
 * 删除指定缓存
 */
export function remove(key: string) {
    const cache = getGlobalCache()
    if (!cache) {
        return null
    }
    delete cache.items[key]
    localStorage.setItem(globalCacheName, JSON.stringify(cache))
}

(() => {
    if (!getLocalStorage()) {
        return
    }
    //设置默认缓存值
    const defaultGlobalLocalStorage: GlobalCacheType = {
        time: new Date().valueOf(),
        items: {}
    }
    if (!localStorage.getItem(globalCacheName)) {
        localStorage.setItem(globalCacheName, JSON.stringify(defaultGlobalLocalStorage))
    }
    //清理过期缓存
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
})()