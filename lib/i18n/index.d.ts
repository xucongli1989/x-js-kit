import { i18n, Resource, ThirdPartyModule } from "i18next";
export declare enum LanguageTypeEnum {
    简体中文 = "zh-CN",
    English = "en-US",
    Français = "fr-FR",
    Deutsch = "de-DE",
    Español = "es-ES",
    日本語 = "ja-JP",
    한국어 = "ko-KR",
    繁體中文 = "zh-TW"
}
/**
 * 显示语言列表
 * @param isChina true：只返回简体中文，false：返回除简体中文之外的所有语言
 */
export declare function getLanguageTypeEnumList(isChina?: boolean): import("../entity/keyValue").KeyValue<string, any>[];
/**
 * 从语言的字符串代码中获取支持的语言，如：ja-jp -> ja-JP, ja -> ja-JP
 */
export declare function getLanguageFromCode(code: string): LanguageTypeEnum;
/**
 * 获取默认语言
 */
export declare function getDefaultLanguage(isChina: boolean): LanguageTypeEnum.简体中文 | LanguageTypeEnum.English;
/**
 * 获取默认的货币符号
 */
export declare function getDefaultCurrencySymbol(isChina: boolean): "¥" | "$";
/**
 * 获取指定对象中的某个语言节点中的数据。
 * 如果 data 是字符串，则直接返回该字符串；如果是 object，则返回 object[当前语言] ；如果 object[当前语言] 没有值，则返回 object[默认语言]
 */
export declare function getLanguageNodeData<T>(data: string | Record<LanguageTypeEnum, T>, isChina: boolean, lang: LanguageTypeEnum): string | T | null;
/**
 * 创建或初始化 i18n 实例。注意：defaultInstance、initReact 必须作为参数由具体使用的项目传过来，因为每个项目的默认实例不一样
 */
export declare function createOrInitI18nInstance(isCreateNewInstance: boolean, defaultInstance: i18n, initReact: ThirdPartyModule, isChina: boolean, lang: LanguageTypeEnum, transData: Resource): i18n;
/**
 * 获取当前组件库的 i18n 实例。这里会将 i18n 实例挂载到全局变量上，供不同组件跨模块访问。为什么要这样做？因为这个组件库中的每一个组件最终是分别 build 成一个独立的包，组件与组件是隔离的，并没有数据共享机制，如果不这样做，那么每个打包后的组件都有自己的 i18n 实例。
 */
export declare function getXJsKitI18nInstance(): i18n;
//# sourceMappingURL=index.d.ts.map