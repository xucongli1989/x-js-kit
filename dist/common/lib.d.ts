/// <reference types="node" />
/**
 * 是否为服务器环境
 */
export declare const isServer: () => boolean;
/**
 * 是否为浏览器环境
 */
export declare const isBowser: () => boolean;
/**
 * 获取全局对象
 */
export declare const getGlobalObject: () => Window | NodeJS.Global;
/**
 * 获取localStorage对象
 */
export declare const getLocalStorage: () => Storage;
/**
 * 创建全局命名空间
 * @param name 名称，如"A.B.C"
 * @returns 全局对象，如：window.A.B.C
 */
export declare const createNamespace: (name: string) => object;
//# sourceMappingURL=lib.d.ts.map