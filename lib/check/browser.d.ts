/**
 * 判断是否为IE浏览器（仅支持<=IE 11）
 * @param version 具体的IE版本号
 * @param userAgent 浏览器代理字符串，若不指定，则取navigator.userAgent
 */
export declare function isIE(version?: number, userAgent?: string): boolean;
/**
 * 是否非常小的宽度
 */
export declare function isExtraSmall(): boolean;
/**
 * 是否小的宽度
 */
export declare function isSmall(): boolean;
/**
 * 是否中等宽度
 */
export declare function isMedium(): boolean;
/**
 * 是否大的宽度
 */
export declare function isLarge(): boolean;
/**
 * 是否非常大的宽度
 */
export declare function isExtraLarge(): boolean;
/**
 * 当前网页是否通过F5刷新、重新加载按钮或location.reload()方法加载进来的
 * 判断方法：performance.navigation.type == 1
 */
export declare function isReload(): boolean;
//# sourceMappingURL=browser.d.ts.map