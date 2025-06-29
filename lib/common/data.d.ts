/**
 * 判断obj是否为null
 */
export declare function isNull(obj: any): boolean;
/**
 * 判断obj是否为数组
 */
export declare function isArray(obj: any): boolean;
/**
 * 判断val是否为数字
 * @param val 要判断的值
 * @returns  判断结果
 */
export declare function isNumber(val: any): boolean;
/**
 * 判断指定值是否为一个对象
 * @param  val 要判断的值
 * @returns  判断结果
 */
export declare function isObject(val: any): boolean;
/**
 * 判断指定值为null或undefined或""
 * @param  val 要判断的值
 * @returns 判断结果
 */
export declare function isNullOrEmpty(val: any): boolean;
/**
 * 判断指定值为null或undefined或""或空白字符串
 * @param  val 要判断的值
 * @returns 判断结果
 */
export declare function isNullOrWhiteSpace(val: any): boolean;
/**
 * 判断指定值是否为function
 * @param  val 要判断的值
 * @returns 判断结果
 */
export declare function isFunction(val: any): boolean;
/**
 * 判断指定值是否为String
 * @param  val 要判断的值
 * @returns 判断结果
 */
export declare function isString(val: any): boolean;
/**
 * 判断指定字符串是否为"true"或"false"
 * @param  val 要判断的值
 * @returns 判断结果
 */
export declare function isBoolean(val: string): boolean;
/**
 * 判断指定值是否为undefined
 * @param  val 要判断的值
 * @returns 判断结果
 */
export declare function isUndefined(val: any): boolean;
/**
 * 判断指定值是否为 null 或 undefined
 * @param  val 要判断的值
 * @returns 判断结果
 */
export declare function isNullOrUndefined(val: any): boolean;
/**
 * 指定值是否全部为大写
 * @param  val 要判断的值
 * @returns 判断结果
 */
export declare function isUpper(val: string): boolean;
/**
 * 指定值是否全部为小写
 * @param  val 要判断的值
 * @returns 判断结果
 */
export declare function isLower(val: string): boolean;
/**
 * 指定值是否为Date对象
 * @param val 要判断的值
 * @returns 判断结果
 */
export declare function isDate(val: any): boolean;
/**
 * 指定值是否为Error对象
 * @param val 要判断的值
 * @returns 判断结果
 */
export declare function isError(val: any): boolean;
/**
 * 判断value值在后面的参数中是否存在
 * @param value 要判断的值
 * @param args 参数列表
 */
export declare function isIn<T>(value: T, ...args: T[]): boolean;
/**
 * 判断字符串value值在后面的参数中是否存在（忽略大小写）
 * @param value 要判断的值
 * @param args 参数列表
 */
export declare function isInIgnoreCase(value: string, ...args: string[]): boolean;
/**
 * 判断一个字符串是否为 URL
 */
export declare function isURL(value: string): boolean;
//# sourceMappingURL=data.d.ts.map