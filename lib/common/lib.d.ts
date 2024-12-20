/// <reference types="node" />
import { AnyKeyValueType, AnyFunctionType } from "../declaration/common";
/**
 * 是否为服务器环境（仅仅是判断 window 未定义）
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
 * 当前环境中的全局对象
 */
export declare const globalObject: Window | NodeJS.Global;
/**
 * 获取document对象，若没有，则为null
 */
export declare function getDocument(): Document;
/**
 * 当前环境中的document对象，若没有，则为null
 */
export declare const document: Document;
/**
 * 获取localStorage对象，若没有，则为null
 */
export declare function getLocalStorage(): Storage;
/**
 * 设置localStorage对象，若已存在，则忽略此设置
 */
export declare function setLocalStorage(st: Storage): void;
/**
 * 获取Symbol类型，若没有，则为null
 */
export declare function getSymbol(desc?: string): any;
/**
 * 创建全局命名空间
 * @param name 名称，如"A.B.C"
 * @returns 全局对象，如：window.A.B.C
 */
export declare function createNamespace(name: string): any;
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
/**
 * 重新设置全局异常处理函数
 */
export declare function setTryRunErrorHandler(fn: AnyFunctionType): void;
/**
 * 合并多个对象，与 Object.assign 的行为唯一的区别是：把相同的函数合并到一起，并从第一个参数的此函数一直调用到最后一个参数的此函数
 * @param objs 要合并的对象
 * @returns 合并后的新对象
 */
export declare function mergeObjectAndCombineSameFunc<T = any>(target: T, ...sources: T[]): T;
//# sourceMappingURL=lib.d.ts.map