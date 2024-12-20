import { i18n, InitOptions, Resource, ThirdPartyModule } from "i18next"
import { convertEnumToList, isValueInEnum } from "../common/enumTool"
import { isString } from "../common/data"

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
export const LanguageTypeEnumList = convertEnumToList(LanguageTypeEnum)

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
        supportedLngs: LanguageTypeEnumList.map((k) => k.value),
        fallbackLng: defaultLang,
        interpolation: {
            escapeValue: false
        },
        resources: transData
    }

    const ins = initReact ? defaultInstance.use(initReact) : defaultInstance

    //创建新的 i18n 实例
    if (isCreateNewInstance) {
        return ins.createInstance(initOps, (err) => {
            //此函数必须有，否则报错
            if (!err) {
                return
            }
            console.error(`Create new i18n instance error: ${err}`)
        })
    }

    //初始化默认实例
    return ins.init(initOps, (err) => {
        if (!err) {
            return
        }
        console.error(`Init default i18n instance error: ${err}`)
    })
}
