/**
 * 正则引擎枚举
 */
export enum RegExpEngineEnum {
    ECMA = "ECMA",
    DOTNET = "DOTNET"
}

/**
 * 将字符串中的关键字符进行编码，以避免在传给Regex时，这些字符被当成正则中的关键字处理
 */
export function escapeReg(str: string, engine: RegExpEngineEnum = RegExpEngineEnum.ECMA) {
    if (!str) {
        return ""
    }
    if (engine == RegExpEngineEnum.ECMA) {
        return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
    }
    if (engine == RegExpEngineEnum.DOTNET) {
        //https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.escape?view=net-6.0
        return str.replace(/[\\*+?|{[()^$.# ]/g, "\\$&")
    }
    return ""
}
