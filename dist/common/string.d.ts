import { MethodResult } from "../entity/method-result";
/**
 * 将字符串按一定字符数拆分成字符串数组
 */
export declare function splitString(str: string, stepCharCount: number): string[];
/**
 * 截取字符串并以省略符号显示字符串
 * @param str 原字符串
 * @param len 要保留的字符长度
 * @param ellipsisChars 被截断的字符显示的符号
 */
export declare function ellipsis(str: string, len: number, ellipsisChars?: string): string;
/**
 * 从字符串中提取数字（可带小数点）。如："abc123.01cde"->123.01
 */
export declare function getNumber(str: string): number | null;
/**
 * 去左右空格
 * @param  str 待处理字符串
 * @returns  处理后的字符串
 */
export declare function trim(str: string): string;
/**
 * 去左空格
 * @param  str 待处理字符串
 * @returns  处理后的字符串
 */
export declare function lTrim(str: string): string;
/**
 * 去右空格
 * @param  str 待处理字符串
 * @returns  处理后的值
 */
export declare function rTrim(str: string): string;
/**
 * 去掉左边的指定字符串
 * @param str 待处理的字符串
 * @param strToRemove 需要移除的字符串
 * @param isIgnoreCase 是否忽略大小写
 * @returns 处理结果
 */
export declare function lTrimString(str: string, strToRemove: string, isIgnoreCase?: boolean): string;
/**
 * 去掉右边的指定字符串
 * @param str 待处理的字符串
 * @param strToRemove 需要移除的字符串
 * @param isIgnoreCase 是否忽略大小写
 * @returns 处理结果
 */
export declare function rTrimString(str: string, strToRemove: string, isIgnoreCase?: boolean): string;
/**
 * 去左右指定的字符串
 * @param str 待处理的字符串
 * @param strToRemove 需要移除的字符串
 * @param isIgnoreCase 是否忽略大小写
 * @returns 处理结果
 */
export declare function trimString(str: string, strToRemove: string, isIgnoreCase?: boolean): string;
/**
 * 从html字符串中移除左右空白占位符
 * @param html 待处理的字符串
 * @returns 处理结果
 */
export declare function trimHTML(html: string): string;
/**
 * 判断两个字符串是否相等（忽略大小写）
 */
export declare function equalsIgnoreCase(a: string, b: string): boolean;
/**
 * 判断两个字符串是否相等（忽略大小写+去左右空白）
 */
export declare function equalsIgnoreCaseAndTrim(a: string, b: string): boolean;
/**
 * 指定源字符串source中是否包含search字符串
 * @param  source 源字符串
 * @param  search 要查找的字符串
 * @param  isIgnoreCase 是否忽略大小写(默认为false)
 * @returns  结果
 */
export declare function contains(source: string, search: string, isIgnoreCase?: boolean): boolean;
/**
 * 将html标签转换为实体形式
 * @param  html 需要被替换的html
 * @returns  转换后的值
 */
export declare function escapeHtml(html: string): string;
/**
 * @param   str 要重复的字符串
 * @param   repeatCount 重复次数
 * @returns  新的字符串
 */
export declare function repeat(str: string, repeatCount: number): string;
/**
 * 字符串批量构建器（无需使用"+"进行字符串的拼接，直接使用此对象的append方法后，再toString即可得到拼好的字符串）
 */
export declare class Builder<T> {
    private _arr;
    /**
     * 追加项
     * @param items 待追加的项
     * @returns this
     */
    append(...items: T[]): this;
    /**
     * 返回已合并的所有项的字符串
     */
    toString(): string;
    /**
     * 清空当前的构建器中的所有项
     * @returns this
     */
    clear(): this;
    /**
     * 返回构建器中所有项的字符串总的字符长度
     */
    length(): number;
}
export declare const builder: typeof Builder;
/**
 * 使用模板格式化字符串
 * @param str 模板，如："今天是星期{0}，已成交{1}单！"
 * @param args 模板中的参数
 */
export declare function format(str: string, ...args: any[]): string;
/**
 * 删除空白行（空白行是指：此行为空白且末尾为 \r 或 \n）
 */
export declare function removeBlankLines(str: string): string;
/**
 * 将文本中的字符串 "\r\n" 和 "\n" 统一替换成 <br/>
 */
export declare function replaceNewlineToBr(str: string): string;
/**
 * 获取字符串中的中文字符
 */
export declare function getChineseWord(str: string): string;
/**
 * 按分隔符合并字符串
 */
export declare function combineStr(separator: string, ...subStrs: string[]): string;
/**
 * 判断字符串是否表示一个集合中的某一项或某一个范围（注：一个范围用英文冒号分隔，多个范围用英文逗号分隔。自动兼容全半角分隔符和多余的空格），如：
 * 【1】表示第1项
 * 【2】表示第2项
 * 【2:5】表示第2项到第5项
 * 【-1】表示最后一项
 * 【-2】表示倒数第2项
 * 【-5:-2】表示倒数第5项到倒数第2项
 * 【2,4:7,-5:-2】表示第2项和第4到7项和倒数第5项至倒数第2项
 */
export declare function isRangeText(str: string): MethodResult<any, any>;
//# sourceMappingURL=string.d.ts.map