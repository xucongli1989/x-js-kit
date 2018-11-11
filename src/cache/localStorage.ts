let globalCacheName = "x-js-toolkit-localcache"
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

class Lib {
    /**
     * 返回全局缓存对象
     */
    static getGlobalCache(): GlobalCacheType | null {
        const cacheValue = localStorage.getItem(globalCacheName) as string
        if (!cacheValue) {
            return null;
        }
        return JSON.parse(cacheValue) as GlobalCacheType
    }
    /**
     * 修改localStorage缓存的默认名称
     */
    static setGlobalCacheName(name: string) {
        const oldValue = localStorage.getItem(globalCacheName) as string;
        localStorage.removeItem(globalCacheName)
        globalCacheName = name
        localStorage.setItem(globalCacheName, oldValue);
    }
    /**
     * 添加数据至缓存
     */
    static add(key: string, value: ItemContentType) {
        const cache = Lib.getGlobalCache()
        if (!cache) {
            return
        }
        cache.items[key] = value
        localStorage.setItem(globalCacheName, JSON.stringify(cache))
    }
    /**
     * 读取指定缓存
     */
    static get(key: string): ItemContentType | null {
        const cache = Lib.getGlobalCache()
        if (!cache) {
            return null
        }
        const item = cache.items[key]
        if (!item) {
            return null
        }
        if (item.expire && item.expire < new Date().valueOf()) {
            Lib.remove(key)
            return null
        }
        return item
    }
    /**
     * 删除指定缓存
     */
    static remove(key: string) {
        const cache = Lib.getGlobalCache()
        if (!cache) {
            return null
        }
        delete cache.items[key]
        localStorage.setItem(globalCacheName, JSON.stringify(cache))
    }
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
    const ch = Lib.getGlobalCache()
    if (!ch) return
    Object.keys(ch.items).forEach(key => {
        const item = ch.items[key]
        if (!item || !item.expire) {
            return
        }
        if (item.expire < new Date().valueOf()) {
            Lib.remove(key)
        }
    })
})()

export default Lib