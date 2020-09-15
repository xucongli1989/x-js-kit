import { KeyValue } from "../entity/keyValue";
/**
 * url分隔的类型
 */
export interface UrlSplitByQueryType {
    /**
     * 域名主机等主体部分
     */
    hostPart: string;
    /**
     * 查询字符串部分
     */
    queryPart: string;
    /**
     * 结尾的hash部分
     */
    hashPart: string;
}
/**
 * 将url字符串以查询串分隔后，提取成三个部分（也就是以字符?和字符#中间的字符串为界限分隔）
 * 注意：边界不包含字符?或#
 * @param url url字符串
 */
export declare function splitUrlByQueryInfo(url: string): UrlSplitByQueryType;
/**
 * 将url拆分对象合并成完整的url
 */
export declare function mergeUrlBySplitQueryInfo(splitInfo: UrlSplitByQueryType): string;
/**
 * 将查询串转换为key value数组（注意：若key重复，只处理第一个）
 * @param queryString 查询字符串，如：a=b&c=d
 */
export declare function convertQueryStringToKeyValueArray(queryString: string): KeyValue<string>[];
/**
 * 将查询串的key value数组转换成普通的字符串，如：a=b&c=d（注意：若key重复，只处理第一个）
 * @param arr key value数组
 */
export declare function convertKeyValueArrayToQueryString(arr: KeyValue<string>[]): string;
/**
 * 在url后面追加查询字符串，若其中key已存在，则覆盖
 * @param url url地址，如location.href
 * @param queryString 要追加的查询串，如："a=123&b=456"
 */
export declare function appendQueryString(url: string, queryString: string): string;
/**
 * 从查询串中获取指定参数
 * @param search 查询串，如：location.search
 * @param paramName 参数名
 */
export declare function getUrlParameter(search: string, paramName: string): string;
//# sourceMappingURL=url.d.ts.map