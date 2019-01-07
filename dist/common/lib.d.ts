/// <reference types="node" />
import { AnyKeyValueType } from "../declaration/common";
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
/**
 * 获取指定对象的指定属性
 * @param obj 对象
 * @param path 属性路径，如：a.b.c
 * @returns 返回obj.a.b.c，如果获取失败，则返回null
 */
export declare const getValue: <T>(obj: AnyKeyValueType, path: string) => T | null;
//# sourceMappingURL=lib.d.ts.map