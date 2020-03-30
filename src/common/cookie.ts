import { document } from "./lib"

//reference：https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie

/**
 * 获取cookie内容
 * @param sKey cookie键名
 * @returns 内容
 */
export function getItem(sKey: string): string | null {
    if (!document) {
        return null
    }
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}

/**
 * 设置cookie内容
 * @param sKey 键名
 * @param sValue 值
 * @param vEnd 到期时间（可为Number/String/Date对象，若为Number，则设置的是max-age；若为String或Date，则设置的是整个expires）
 * @param sPath 路径（默认/）
 * @param sDomain 域名（默认""）
 * @param bSecure 是否只会被https传输（默认false）
 * @returns 是否设置成功
 */
export function setItem(sKey: string, sValue: string, vEnd: number | string | Date, sPath: string = "/", sDomain: string = "", bSecure: boolean = false): boolean {
    if (!document) {
        return false
    }
    if (!sKey || /^(?:expires|max-age|path|domain|secure)$/i.test(sKey)) {
        return false
    }
    let sExpires = ""
    if (vEnd) {
        switch (vEnd.constructor) {
            case Number:
                sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd
                break
            case String:
                sExpires = "; expires=" + vEnd
                break
            case Date:
                sExpires = "; expires=" + (vEnd as Date).toUTCString()
                break
        }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "")
    return true
}

/**
 * 是否包含某个cookie
 * @param sKey 键名
 * @returns 是否包含
 */
export function hasItem(sKey: string): boolean {
    if (!document) {
        return false
    }
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=")).test(document.cookie)
}

/**
 * 删除cookie
 * @param sKey 键名
 * @param sPath 路径（默认/）
 * @param sDomain 域名（默认""）
 * @returns 是否删除成功
 */
export function removeItem(sKey: string, sPath: string = "/", sDomain: string = ""): boolean {
    if (!document) {
        return false
    }
    if (!sKey || !hasItem(sKey)) {
        return false
    }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "")
    return true
}



/**
 * 获取当前cookie的全部键名
 * @returns 所有键名
 */
export function keys(): string[] {
    if (!document) {
        return []
    }
    const aKeys = document.cookie.replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:=[^;]*)?;\s*/)
    for (let nIdx = 0; nIdx < aKeys.length; nIdx++) {
        aKeys[nIdx] = decodeURIComponent(aKeys[nIdx])
    }
    return aKeys
}