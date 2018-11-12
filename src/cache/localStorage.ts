let globalCacheName = "x-js-kit-localcache"
export interface ItemContentType {
    /**
     * 具体的缓存值
     */
    value: any
    /**
     * 过期时间，若不指定，则无过期时间
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
export const getGlobalCache = (): (GlobalCacheType | null) => {
    const cacheValue = localStorage.getItem(globalCacheName) as string
    if (!cacheValue) {
        return null;
    }
    return JSON.parse(cacheValue) as GlobalCacheType
}
/**
 * 修改localStorage缓存的默认名称
 */
export const setGlobalCacheName = (name: string) => {
    const oldValue = localStorage.getItem(globalCacheName) as string;
    localStorage.removeItem(globalCacheName)
    globalCacheName = name
    localStorage.setItem(globalCacheName, oldValue);
}
/**
 * 添加数据至缓存
 */
export const add = (key: string, value: ItemContentType) => {
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
export const get = (key: string): ItemContentType | null => {
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
export const remove = (key: string) => {
    const cache = getGlobalCache()
    if (!cache) {
        return null
    }
    delete cache.items[key]
    localStorage.setItem(globalCacheName, JSON.stringify(cache))
}

(() => {
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