import * as Lib from "../common/lib";
let globalCacheName = "x-js-kit-localcache";
/**
 * 返回全局缓存对象
 */
export const getGlobalCache = () => {
    const cacheValue = localStorage.getItem(globalCacheName);
    if (!cacheValue) {
        return null;
    }
    return JSON.parse(cacheValue);
};
/**
 * 修改localStorage缓存的默认名称
 */
export const setGlobalCacheName = (name) => {
    const oldValue = localStorage.getItem(globalCacheName);
    localStorage.removeItem(globalCacheName);
    globalCacheName = name;
    localStorage.setItem(globalCacheName, oldValue);
};
/**
 * 添加数据至缓存
 */
export const add = (key, value) => {
    const cache = getGlobalCache();
    if (!cache) {
        return;
    }
    cache.items[key] = value;
    localStorage.setItem(globalCacheName, JSON.stringify(cache));
};
/**
 * 读取指定缓存
 */
export const get = (key) => {
    const cache = getGlobalCache();
    if (!cache) {
        return null;
    }
    const item = cache.items[key];
    if (!item) {
        return null;
    }
    if (item.expire && item.expire < new Date().valueOf()) {
        remove(key);
        return null;
    }
    return item;
};
/**
 * 删除指定缓存
 */
export const remove = (key) => {
    const cache = getGlobalCache();
    if (!cache) {
        return null;
    }
    delete cache.items[key];
    localStorage.setItem(globalCacheName, JSON.stringify(cache));
};
(() => {
    if (!Lib.getLocalStorage()) {
        return;
    }
    //设置默认缓存值
    const defaultGlobalLocalStorage = {
        time: new Date().valueOf(),
        items: {}
    };
    if (!localStorage.getItem(globalCacheName)) {
        localStorage.setItem(globalCacheName, JSON.stringify(defaultGlobalLocalStorage));
    }
    //清理过期缓存
    const ch = getGlobalCache();
    if (!ch)
        return;
    Object.keys(ch.items).forEach(key => {
        const item = ch.items[key];
        if (!item || !item.expire) {
            return;
        }
        if (item.expire < new Date().valueOf()) {
            remove(key);
        }
    });
})();
