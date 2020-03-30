/**
 * 获取cookie内容
 * @param sKey cookie键名
 * @returns 内容
 */
export declare function getItem(sKey: string): string | null;
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
export declare function setItem(sKey: string, sValue: string, vEnd: number | string | Date, sPath?: string, sDomain?: string, bSecure?: boolean): boolean;
/**
 * 是否包含某个cookie
 * @param sKey 键名
 * @returns 是否包含
 */
export declare function hasItem(sKey: string): boolean;
/**
 * 删除cookie
 * @param sKey 键名
 * @param sPath 路径（默认/）
 * @param sDomain 域名（默认""）
 * @returns 是否删除成功
 */
export declare function removeItem(sKey: string, sPath?: string, sDomain?: string): boolean;
/**
 * 获取当前cookie的全部键名
 * @returns 所有键名
 */
export declare function keys(): string[];
//# sourceMappingURL=cookie.d.ts.map