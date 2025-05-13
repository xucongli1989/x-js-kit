import { KeyValue } from "../entity/keyValue";
/**
 * 将枚举转换为KeyValue列表
 */
export declare function convertEnumToList<T>(em: T): KeyValue<string, any>[];
/**
 *  将字符串或数字转换为枚举，若转换失败则取枚举的第一项或取自定义的默认枚举
 */
export declare function toEnum<T>(em: T, value: string | number, defaultValue?: T[keyof T]): T[keyof T];
/**
 * 判断一个值是否属于指定的枚举
 */
export declare function isValueInEnum<T>(em: T, value: string | number): boolean;
//# sourceMappingURL=enumTool.d.ts.map