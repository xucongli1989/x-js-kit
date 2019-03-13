import * as regexConst from "../constant/regex"

/**
 * url是否以【http://】开头
 */
export function isHttp(url: string) {
    if (!url) {
        return false
    }
    return regexConst.http.test(url.toLowerCase())
}

/**
 * url是否以【https://】开头
 */
export function isHttps(url: string) {
    if (!url) {
        return false
    }
    return regexConst.https.test(url.toLowerCase())
}

/**
 * url是否为http或https的地址
 */
export function isHttpOrHttpsUrl(url: string) {
    if (!url) {
        return false
    }
    return regexConst.httpOrHttps.test(url.toLowerCase())
}