/**
 * 在url后面追加查询字符串
 * @param urlStr url地址，如location.href
 * @param queryString 要追加的查询串，如："a=123&b=456"
 */
export function appendQueryString(urlStr: string, queryString: string) {
    let url = urlStr
    if (!url) {
        return ""
    }
    if (!queryString) {
        return url
    }
    let hash = ""
    const anchorIdx = url.indexOf('#')
    if (anchorIdx >= 0) {
        hash = url.substring(anchorIdx)
        url = url.substr(0, anchorIdx)
    }
    return `${url}${url.includes("?") ? "&" : "?"}${queryString}${hash}`
}

/**
 * 从查询串中获取指定参数
 * @param search 查询串，如：location.search
 * @param paramName 参数名
 */
export function getUrlParameter(search: string, paramName: string) {
    const name = paramName.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}