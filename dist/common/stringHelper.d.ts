/**
 * 将字符串按一定字符数拆分成字符串数组
 */
export declare const splitString: (str: string, stepCharCount: number) => string[];
/**
 * 截取字符串并以省略符号显示字符串
 * @param str 原字符串
 * @param len 要保留的字符长度
 * @param ellipsisChars 被截断的字符显示的符号
 */
export declare const ellipsis: (str: string, len: number, ellipsisChars?: string) => string;
/**
 * 从字符串中提取数字（可带小数点）。如："abc123.01cde"->123.01
 */
export declare const getNumber: (str: string) => number | null;
//# sourceMappingURL=stringHelper.d.ts.map