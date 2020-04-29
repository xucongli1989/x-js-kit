/**
 * 浏览器宽度类别枚举
 */
export declare enum BrowserWidthTypeEnum {
    /**
     * 非常小（<576px）
     */
    "ExtraSmall" = "ExtraSmall",
    /**
     * 小（≥576px 且 <768px）
     */
    "Small" = "Small",
    /**
     * 中（≥768px 且 <992px）
     */
    "Medium" = "Medium",
    /**
     * 大（≥992px 且 <1200px）
     */
    "Large" = "Large",
    /**
     * 非常大（≥1200px）
     */
    "ExtraLarge" = "ExtraLarge"
}
/**
 * 获取当前浏览器窗口的大小，如：{"width": 1024,"height": 768}
 */
export declare function size(): {
    width: number;
    height: number;
};
/**
 * 返回当前浏览器窗口的宽度类型
 */
export declare function getWidthType(): BrowserWidthTypeEnum;
//# sourceMappingURL=browser.d.ts.map