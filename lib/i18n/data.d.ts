import { LanguageTypeEnum } from ".";
declare const defaultNameSpace = "translation";
export declare enum XJsKitTranslationKeyNameEnum {
    必须提供一个有效的范围 = "\u5FC5\u987B\u63D0\u4F9B\u4E00\u4E2A\u6709\u6548\u7684\u8303\u56F4",
    格式不正确只支持单个范围请删除逗号 = "\u683C\u5F0F\u4E0D\u6B63\u786E\u53EA\u652F\u6301\u5355\u4E2A\u8303\u56F4\u8BF7\u5220\u9664\u9017\u53F7",
    格式不正确 = "\u683C\u5F0F\u4E0D\u6B63\u786E",
    格式不正确必须为整数且不能为0 = "\u683C\u5F0F\u4E0D\u6B63\u786E\u5FC5\u987B\u4E3A\u6574\u6570\u4E14\u4E0D\u80FD\u4E3A0",
    左侧数字为负数时右侧数字必须也同时为负数 = "\u5DE6\u4FA7\u6570\u5B57\u4E3A\u8D1F\u6570\u65F6\u53F3\u4FA7\u6570\u5B57\u5FC5\u987B\u4E5F\u540C\u65F6\u4E3A\u8D1F\u6570",
    格式不正确左侧数字必须小于等于右侧数字 = "\u683C\u5F0F\u4E0D\u6B63\u786E\u5DE6\u4FA7\u6570\u5B57\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E\u53F3\u4FA7\u6570\u5B57"
}
export declare const XJsKitI18nResourcesData: Record<LanguageTypeEnum, Record<typeof defaultNameSpace, Record<keyof typeof XJsKitTranslationKeyNameEnum, string>>>;
export {};
//# sourceMappingURL=data.d.ts.map