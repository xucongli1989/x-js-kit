/**
 * 将一个数组拆分为多个数组
 * @param arr 原数组
 * @param stepCount 拆分后，每个数组最多包含的项数量
 */
export declare function splitArray<T>(arr: T[], stepCount: number): T[][];
/**
 * 去掉array中的重复项
 * @param arr 需要去重的数组
 */
export declare function unique<T>(arr: T[]): T[];
/**
 * 遍历指定数组并返回一个新数组（与原生map不一样的地方是：原生map中未过滤null和undefined，而此方法会过滤）
 * @param arr 需要遍历的数组
 * @param fn 处理函数
 */
export declare function map<T>(arr: any[], fn: (item: any, idx?: number) => T | null | undefined): T[];
//# sourceMappingURL=array.d.ts.map