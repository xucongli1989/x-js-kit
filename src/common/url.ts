/**
 * 在url后面追加查询字符串
 */
export function appendQueryString(url: string, queryString: string) {
    if (!url) {
        return ""
    }
    if (!queryString) {
        return url
    }
    return `${url}${url.includes("?") ? "&" : "?"}${queryString}`
}

/**
 * 从查询串中获取指定参数
 * @param search 查询串，如：location.search
 */
export function getUrlParameter(search: string, name: string) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}