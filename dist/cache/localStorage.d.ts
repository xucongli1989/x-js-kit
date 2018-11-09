interface AddLocalStorageOptionType {
    key: string;
    value: any;
    expire: Date;
}
export default class LocalStorage {
    /**
     * localStorage缓存的默认名称
     */
    static globalLocalStorageCacheName: string;
    /**
     * 添加数据至缓存
     */
    static addLocalStorage(ops: AddLocalStorageOptionType): void;
}
export {};
