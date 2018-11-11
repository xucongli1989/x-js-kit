interface ItemContentType {
    /**
     * 具体的缓存值
     */
    value: any;
    /**
     * 过期时间，若不指定，则无过期时间
     */
    expire?: Date;
}
interface GlobalCacheType {
    /**
     * 时间
     */
    time: Date;
    /**
     * 所有缓存项
     */
    items: {
        [key: string]: ItemContentType;
    };
}
export default class Lib {
    /**
     * 返回全局缓存对象
     */
    static getGlobalCache(): GlobalCacheType | null;
    /**
     * 修改localStorage缓存的默认名称
     */
    static setGlobalCacheName(name: string): void;
    /**
     * 添加数据至缓存
     */
    static add(key: string, value: ItemContentType): void;
    /**
     * 读取指定缓存
     */
    static get(key: string): ItemContentType | null;
    /**
     * 删除指定缓存
     */
    static remove(key: string): null | undefined;
}
export {};
