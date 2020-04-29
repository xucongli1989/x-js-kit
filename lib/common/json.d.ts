import { AnyKeyValueType } from "../declaration/common";
/**
   * 是否包含名key
   * @param json json对象
   * @param keyName key名
   * @returns 判断结果
   */
export declare function hasKey(json: AnyKeyValueType, keyName: string): boolean;
/**
 * 是否包含值value
 * @param  json json对象
 * @param keyValue value值
 * @returns 判断结果
 */
export declare function hasValue(json: AnyKeyValueType, keyValue: any): boolean;
/**
 * json对象转成param形式的字符串，如{a:1,b:2,c:[3,4,5]}=>"a=1&b=2&c=3&c=4&c=5"
 * @param  json 待转换的json数据源
 * @returns 转换结果
 */
export declare function toParams(json: AnyKeyValueType): string;
//# sourceMappingURL=json.d.ts.map