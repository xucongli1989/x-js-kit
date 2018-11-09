interface AddLocalStorageOptionType {
    key: string,
    value: any,
    expire: Date
}
interface defaultGlobalLocalStorageType {
    time: Date,
    items: AddLocalStorageOptionType[]
}

const defaultGlobalLocalStorage: defaultGlobalLocalStorageType = {
    time: new Date(),
    items: []
}

export default class LocalStorage {
    /**
     * localStorage缓存的默认名称
     */
    static globalLocalStorageCacheName = "x-js-toolkit";
    /**
     * 添加数据至缓存
     */
    static addLocalStorage(ops: AddLocalStorageOptionType) {
        const curCache = localStorage.getItem(LocalStorage.globalLocalStorageCacheName);
        if (!curCache) {
            localStorage.setItem(LocalStorage.globalLocalStorageCacheName, JSON.stringify(defaultGlobalLocalStorage));
        }
        const newLocalValue = JSON.parse(localStorage.getItem(LocalStorage.globalLocalStorageCacheName) as string) as defaultGlobalLocalStorageType;
        newLocalValue.items.push({
            key: ops.key,
            value: ops.value,
            expire: new Date()
        });
        localStorage.setItem(LocalStorage.globalLocalStorageCacheName, JSON.stringify(newLocalValue));
    }
}