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
 * 合并两个数组（未去重）
 * @param arr1 数组1
 * @param arr2 数组2
 */
export declare function union<T>(arr1: T[], arr2: T[]): T[];
/**
 * 获取两个数组的交集（已去重）
 * @param arr1 数组1
 * @param arr2 数组2
 */
export declare function intersect<T>(arr1: T[], arr2: T[]): T[];
/**
 * 获取两个数组的差集（已去重）
 * @param arr1 数组1
 * @param arr2 数组2
 */
export declare function diff<T>(arr1: T[], arr2: T[]): T[];
/**
 * 遍历指定数组并返回一个新数组（与原生map不一样的地方是：原生map中未过滤null和undefined，而此方法会过滤）
 * @param arr 需要遍历的数组
 * @param fn 处理函数
 */
export declare function map<TargetType = any, SourceType = any>(arr: SourceType[], fn: (item: SourceType, idx?: number) => TargetType | null | undefined): TargetType[];
/**
 * 根据起始值和终点值创建一个数组，如：[1,2,3,4....]
 * @param startValue 起始值（包含）
 * @param endValue 终点值（包含）
 * @param step 步长，默认为 1
 */
export declare function createNumberArray(startValue: number, endValue: number, step?: number): number[];
/**
 * 判断数组是否为空
 */
export declare function isNullOrEmpty(arr: any[]): boolean;
/**
 * 判断数组不为空
 */
export declare function isNotNullOrEmpty(arr: any[]): boolean;
/**
 * 判断参数数组中是否至少有一个数组为空
 */
export declare function isAnyNullOrEmpty(...arrs: any[][]): boolean;
/**
 * 判断参数数组中是否至少有一个数组不为空
 */
export declare function isAnyNotNullOrEmpty(...arrs: any[][]): boolean;
/**
 * 判断参数数组中是否所有的数组都为空
 */
export declare function isAllNullOrEmpty(...arrs: any[][]): boolean;
/**
 * 判断参数数组中是否所有的数组都不为空
 */
export declare function isAllNotNullOrEmpty(...arrs: any[][]): boolean;
//# sourceMappingURL=array.d.ts.map