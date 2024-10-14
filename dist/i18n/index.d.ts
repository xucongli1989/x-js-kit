import { i18n, Resource, ThirdPartyModule } from "i18next";
export declare enum LanguageTypeEnum {
    简体中文 = "zh-CN",
    繁體中文 = "zh-TW",
    English = "en-US",
    Français = "fr-FR",
    Deutsch = "de-DE",
    Español = "es-ES",
    日本語 = "ja-JP",
    한국어 = "ko-KR"
}
export declare const LanguageTypeEnumList: import("../entity/keyValue").KeyValue<any, any>[];
/**
 * 获取默认语言
 */
export declare function getDefaultLanguage(isChina: boolean): LanguageTypeEnum.简体中文 | LanguageTypeEnum.English;
/**
 * 获取默认的货币符号
 */
export declare function getDefaultCurrencySymbol(isChina: boolean): "¥" | "$";
/**
 * 创建或初始化 i18n 实例。注意：defaultInstance、initReact 必须作为参数由具体使用的项目传过来，因为每个项目的默认实例不一样
 */
export declare function createOrInitI18nInstance(isCreateNewInstance: boolean, defaultInstance: i18n, initReact: ThirdPartyModule, isChina: boolean, lang: LanguageTypeEnum, transData: Resource): i18n | Promise<import("i18next").TFunction<"translation", undefined>>;
//# sourceMappingURL=index.d.ts.map