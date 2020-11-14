export interface ItemContentType<ValueType = any> {
    /**
     * 具体的缓存值
     */
    value: ValueType;
    /**
     * 过期时间，若不指定，则无过期时间（此时间为：从1970年1月1日0时0分0秒（UTC，即协调世界时）到该日期的毫秒数。如：new Date().valueOf()）
     */
    expire?: number;
}
export interface GlobalCacheType<ValueType = any> {
    /**
     * 时间
     */
    time: number;
    /**
     * 所有缓存项
     */
    items: {
        [key: string]: ItemContentType<ValueType>;
    };
}
/**
 * 返回全局缓存对象
 */
export declare function getGlobalCache<ValueType>(): GlobalCacheType<ValueType> | null;
/**
 * 修改localStorage缓存的默认名称
 */
export declare function setGlobalCacheName(name: string): void;
/**
 * 添加数据至缓存（默认每30分钟自动清理所有过期的缓存）
 */
export declare function add<ValueType>(key: string, value: ItemContentType<ValueType>): void;
/**
 * 删除指定缓存
 */
export declare function remove(key: string): void;
/**
 * 读取指定缓存
 * @param key 缓存key
 * @param ignoreExpireCheck 是否忽略过期检测，默认为false.（true:即使过期，只要还没被清理，则依然返回。false:如果已过期，则删除此缓存并返回null）
 */
export declare function get<ValueType>(key: string, ignoreExpireCheck?: boolean): ItemContentType<ValueType> | null;
/**
 * 清理过期缓存
 */
export declare function clearExpired(): void;
/**
 * 获取自动清理过期缓存的间隔（毫秒）
 */
export declare function getAutoClearExpiredTimeSpan(): number;
/**
 * 设置自动清理过期缓存的间隔（毫秒），并按计划执行清理
 */
export declare function setAutoClearExpiredTimeSpan(timeSpan: number): void;
//# sourceMappingURL=localStorage.d.ts.map