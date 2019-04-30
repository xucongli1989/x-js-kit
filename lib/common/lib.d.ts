/// <reference types="node" />
import { AnyKeyValueType, AnyFunctionType } from "../declaration/common";
/**
 * 是否为服务器环境
 */
export declare function isServer(): boolean;
/**
 * 是否为浏览器环境
 */
export declare function isBowser(): boolean;
/**
 * 获取全局对象
 */
export declare function getGlobalObject(): Window | NodeJS.Global;
/**
 * 获取localStorage对象
 */
export declare function getLocalStorage(): Storage;
/**
 * 创建全局命名空间
 * @param name 名称，如"A.B.C"
 * @returns 全局对象，如：window.A.B.C
 */
export declare function createNamespace(name: string): object;
/**
 * 获取指定对象的指定属性
 * @param obj 对象
 * @param path 属性路径，如：a.b.c
 * @returns 返回obj.a.b.c，如果获取失败，则返回null
 */
export declare function getValue<T>(obj: AnyKeyValueType, path: string): T | null;
/**
 * 深度clone
 */
export declare function deepClone<T>(obj: T): T | null;
/**
 * 尝试运行指定function；若异常，则执行全局配置的异常处理函数tryRunErrorHandler，并返回null
 * @param fn  函数名
 * @param args 参数
 */
export declare function tryRun<T>(fn: AnyFunctionType, ...args: any[]): T | null;
//# sourceMappingURL=lib.d.ts.map