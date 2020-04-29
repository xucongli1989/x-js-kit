/**
 * 将值转为int型，若失败，则返回defaultValue
 * @param val 要转换的值
 * @param  defaultValue 默认值
 * @returns 转换结果
 */
export declare function toIntDefault(val: string, defaultValue: number | null): number | null;
/**
   * 将值转为int型，若失败，则返回0
   * @param  val 要转换的值
   */
export declare function toInt(val: string): number;
/**
 * 将值转为int型，若失败，则返回null
 * @param  val 要转换的值
 * @returns 如果转换失败，则返回null
 */
export declare function toIntNull(val: string): number | null;
/**
 * 将值转为float型，若失败，则返回defaultValue
 * @param val 要转换的值
 * @param defaultValue 默认值
 * @returns  转换结果
 */
export declare function toFloatDefault(val: string, defaultValue: number | null): number | null;
/**
 * 将值转为float型，若失败，则返回0
 * @param  val 要转换的值
 * @returns  转换结果
 */
export declare function toFloat(val: string): number;
/**
 * 将值转为float型，若失败，则返回null
 * @param  val 要转换的值
 * @returns  转换结果
 */
export declare function toFloatNull(val: string): number | null;
//# sourceMappingURL=convert.d.ts.map