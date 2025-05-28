import i18next, { i18n, InitOptions, Resource, ThirdPartyModule } from "i18next"
import { convertEnumToList, isValueInEnum } from "../common/enumTool"
import { isString } from "../common/data"
import { getGlobalObject } from "../common/lib"
import { XJsKitI18nResourcesData } from "./data"

export enum LanguageTypeEnum {
    简体中文 = "zh-CN",
    繁體中文 = "zh-TW",
    English = "en-US",
    Français = "fr-FR",
    Deutsch = "de-DE",
    Español = "es-ES",
    日本語 = "ja-JP",
    한국어 = "ko-KR"
}

/**
 * 显示语言列表
 * @param isChina true：只返回【简体中文、繁体中文】，false：返回除【简体中文、繁体中文】之外的所有语言
 */
export function getLanguageTypeEnumList(isChina?: boolean) {
    const lst = convertEnumToList(LanguageTypeEnum)
    const chinaLangs = [LanguageTypeEnum.简体中文, LanguageTypeEnum.繁體中文]
    if (isChina === true) {
        return lst.filter((k) => chinaLangs.includes(k.value as any))
    }
    if (isChina === false) {
        return lst.filter((k) => !chinaLangs.includes(k.value as any))
    }
    return lst
}

/**
 * 从语言的字符串代码中获取支持的语言，如：ja-jp -> ja-JP, ja -> ja-JP
 */
export function getLanguageFromCode(code: string) {
    let result = getLanguageTypeEnumList().find((k) => k.value.toUpperCase() == code.toUpperCase())?.value
    if (!result) {
        result = getLanguageTypeEnumList().find((k) => k.value.toUpperCase().split("-")[1] == code.toUpperCase())?.value
    }
    if (!result) {
        result = getLanguageTypeEnumList().find((k) => k.value.toUpperCase().split("-")[0] == code.toUpperCase())?.value
    }
    return result as LanguageTypeEnum
}

/**
 * 获取默认语言
 */
export function getDefaultLanguage(isChina: boolean) {
    return isChina ? LanguageTypeEnum.简体中文 : LanguageTypeEnum.English
}

/**
 * 获取默认的货币符号
 */
export function getDefaultCurrencySymbol(isChina: boolean) {
    return isChina ? "¥" : "$"
}

/**
 * 获取指定对象中的某个语言节点中的数据。
 * 如果 data 是字符串，则直接返回该字符串；如果是 object，则返回 object[当前语言] ；如果 object[当前语言] 没有值，则返回 object[默认语言]
 */
export function getLanguageNodeData<T>(data: string | Record<LanguageTypeEnum, T>, isChina: boolean, lang: LanguageTypeEnum) {
    if (!data) {
        return null
    }
    //如果是字符串，则直接返回原数据即可
    if (isString(data)) {
        return data as string
    }
    return (data as Record<LanguageTypeEnum, T>)[lang] || (data as Record<LanguageTypeEnum, T>)[getDefaultLanguage(isChina)]
}

/**
 * 创建或初始化 i18n 实例。注意：defaultInstance、initReact 必须作为参数由具体使用的项目传过来，因为每个项目的默认实例不一样
 */
export function createOrInitI18nInstance(isCreateNewInstance: boolean, defaultInstance: i18n, initReact: ThirdPartyModule, isChina: boolean, lang: LanguageTypeEnum, transData: Resource) {
    const defaultLang = getDefaultLanguage(isChina)
    const currentLang = lang && isValueInEnum(LanguageTypeEnum, lang) ? lang : defaultLang

    const initOps: InitOptions = {
        lng: currentLang,
        supportedLngs: getLanguageTypeEnumList().map((k) => k.value),
        fallbackLng: defaultLang,
        interpolation: {
            escapeValue: false
        },
        resources: transData
    }

    const instance = isCreateNewInstance ? defaultInstance.createInstance() : defaultInstance
    const ins = initReact ? instance.use(initReact) : instance

    //初始化实例
    ins.init(initOps, (err) => {
        if (!err) {
            return
        }
        console.error(`Init default i18n instance error: ${err}`)
    })

    return instance
}

/**
 * 获取当前组件库的 i18n 实例。这里会将 i18n 实例挂载到全局变量上，供不同组件跨模块访问。为什么要这样做？因为这个组件库中的每一个组件最终是分别 build 成一个独立的包，组件与组件是隔离的，并没有数据共享机制，如果不这样做，那么每个打包后的组件都有自己的 i18n 实例。
 */
export function getXJsKitI18nInstance() {
    const globalObj = getGlobalObject() as any
    if (globalObj.___xJsKitI18nInstance) {
        return globalObj.___xJsKitI18nInstance as typeof i18next
    }
    globalObj.___xJsKitI18nInstance = createOrInitI18nInstance(true, i18next as any, null as any, true, getDefaultLanguage(true), XJsKitI18nResourcesData)
    return globalObj.___xJsKitI18nInstance as typeof i18next
}
