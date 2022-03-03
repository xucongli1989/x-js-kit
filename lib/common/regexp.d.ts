/**
 * 正则引擎枚举
 */
export declare enum RegExpEngineEnum {
    ECMA = "ECMA",
    DOTNET = "DOTNET"
}
/**
 * 将字符串中的关键字符进行编码，以避免在传给Regex时，这些字符被当成正则中的关键字处理
 */
export declare function escapeReg(str: string, engine?: RegExpEngineEnum): string;
//# sourceMappingURL=regexp.d.ts.map