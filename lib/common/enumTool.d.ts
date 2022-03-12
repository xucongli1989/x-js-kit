import { KeyValue } from "../entity/keyValue";
/**
 * 将枚举转换为KeyValue列表
 */
export declare function convertEnumToList<T>(em: T): KeyValue[];
/**
 *  获取枚举的默认值（如果没有指定自定义的默认值，则取第一个；如果有指定自定义的默认值，则判断此默认值是否在此枚举中存在，如果不存在，则取枚举的第一个）
 */
export declare function getDefaultEnum<T>(em: T, defaultValue?: string | number): T;
/**
 * 判断一个值是否属于指定的枚举
 */
export declare function isValueInEnum<T>(em: T, value: string | number): boolean;
//# sourceMappingURL=enumTool.d.ts.map