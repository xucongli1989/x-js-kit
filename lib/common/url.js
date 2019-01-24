/**
 * 在url后面追加查询字符串
 */
export const appendQueryString = (url, queryString) => {
    if (!url) {
        return "";
    }
    if (!queryString) {
        return url;
    }
    return `${url}${url.includes("?") ? "&" : "?"}${queryString}`;
};
