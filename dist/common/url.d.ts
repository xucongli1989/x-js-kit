/**
 * 在url后面追加查询字符串
 * @param urlStr url地址，如location.href
 * @param queryString 要追加的查询串，如："a=123&b=456"
 */
export declare function appendQueryString(urlStr: string, queryString: string): string;
/**
 * 从查询串中获取指定参数
 * @param search 查询串，如：location.search
 * @param paramName 参数名
 */
export declare function getUrlParameter(search: string, paramName: string): string;
//# sourceMappingURL=url.d.ts.map