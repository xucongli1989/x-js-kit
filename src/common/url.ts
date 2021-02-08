import { KeyValue } from "../entity/keyValue"
import { lTrimString } from "./string"

/**
 * url分隔的类型
 */
export interface UrlSplitByQueryType {
    /**
     * 域名主机等主体部分
     */
    hostPart: string
    /**
     * 查询字符串部分
     */
    queryPart: string
    /**
     * 结尾的hash部分
     */
    hashPart: string
}

/**
 * 将url字符串以查询串分隔后，提取成三个部分（也就是以字符?和字符#中间的字符串为界限分隔）
 * 注意：边界不包含字符?或#
 * @param url url字符串
 */
export function splitUrlByQueryInfo(url: string): UrlSplitByQueryType {
    const result = {} as UrlSplitByQueryType
    result.hostPart = ""
    result.queryPart = ""
    result.hashPart = ""
    if (!url) {
        return result
    }
    const questionMarkIndex = url.lastIndexOf("?")
    const wellNumberMarkIndex = url.indexOf("#")

    //只存在查询串
    if (questionMarkIndex >= 0 && wellNumberMarkIndex < 0) {
        result.hostPart = url.substr(0, questionMarkIndex)
        result.queryPart = lTrimString(url.substring(questionMarkIndex + 1), "?")
        return result
    }

    //只存在hash
    if (questionMarkIndex < 0 && wellNumberMarkIndex >= 0) {
        result.hostPart = url.substr(0, wellNumberMarkIndex)
        result.hashPart = lTrimString(url.substr(wellNumberMarkIndex + 1), "#")
        return result
    }

    //同时存在查询串和hash
    if (questionMarkIndex >= 0 && wellNumberMarkIndex >= 0) {
        result.hostPart = url.substr(0, questionMarkIndex)
        result.queryPart = lTrimString(url.substring(questionMarkIndex + 1, wellNumberMarkIndex), "?")
        result.hashPart = lTrimString(url.substr(wellNumberMarkIndex + 1), "#")
        return result
    }

    result.hostPart = url
    return result
}

/**
 * 将url拆分对象合并成完整的url
 */
export function mergeUrlBySplitQueryInfo(splitInfo: UrlSplitByQueryType) {
    if (!splitInfo) {
        return ""
    }
    let url = splitInfo.hostPart || ""
    if (splitInfo.queryPart) {
        url += "?" + splitInfo.queryPart
    }
    if (splitInfo.hashPart) {
        url += "#" + splitInfo.hashPart
    }
    return url
}

/**
 * 将查询串转换为key value数组（注意：若key重复，只处理第一个）
 * @param queryString 查询字符串，如：a=b&c=d
 */
export function convertQueryStringToKeyValueArray(queryString: string): KeyValue<string>[] {
    const result = [] as KeyValue<string>[]
    if (!queryString) {
        return result
    }
    const keys = new Set()
    queryString.split("&").forEach((item) => {
        if (!item) {
            return
        }
        const [key, value] = item.split("=")
        if (!key) {
            return
        }
        if (keys.has(key)) {
            return
        }
        keys.add(key)
        result.push(new KeyValue<string>(key, value))
    })
    return result
}

/**
 * 将查询串的key value数组转换成普通的字符串，如：a=b&c=d（注意：若key重复，只处理第一个）
 * @param arr key value数组
 */
export function convertKeyValueArrayToQueryString(arr: KeyValue<string>[]) {
    if (!arr || !arr.length) {
        return ""
    }
    const keys = new Set()
    const queryString = [] as string[]
    arr.forEach((item) => {
        if (keys.has(item.key)) {
            return
        }
        keys.add(item.key)
        queryString.push(`${item.key}=${item.value}`)
    })
    return queryString.join("&")
}

/**
 * 在url后面追加查询字符串，若其中key已存在，则覆盖
 * @param url url地址，如location.href
 * @param queryString 要追加的查询串，如："a=123&b=456"
 */
export function appendQueryString(url: string, queryString: string) {
    if (!url) {
        return ""
    }
    if (!queryString) {
        return url
    }
    const splitInfo = splitUrlByQueryInfo(url)
    const urlQueryKeyValue = convertQueryStringToKeyValueArray(splitInfo.queryPart)
    const appendQueryKeyValue = convertQueryStringToKeyValueArray(queryString)
    appendQueryKeyValue.forEach((item) => {
        //已存在，则修改
        const queryInfo = urlQueryKeyValue.find((k) => k.key == item.key)
        if (queryInfo) {
            queryInfo.value = item.value
            return
        }
        if (!item.value) {
            return
        }
        //不存在，则追加
        urlQueryKeyValue.push(new KeyValue<string>(item.key, item.value))
    })
    splitInfo.queryPart = convertKeyValueArrayToQueryString(urlQueryKeyValue)
    return mergeUrlBySplitQueryInfo(splitInfo)
}

/**
 * 从查询串中获取指定参数
 * @param search 查询串，如：location.search
 * @param paramName 参数名
 */
export function getUrlParameter(search: string, paramName: string) {
    const name = paramName.replace(/[[]/, "\\[").replace(/[\]]/, "\\]")
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)")
    const results = regex.exec(search)
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "))
}
