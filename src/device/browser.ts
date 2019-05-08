import { globalObject, document } from "../common/lib"

/**
 * 浏览器宽度类别枚举
 */
export enum BrowserWidthTypeEnum {
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
export function size(): { width: number, height: number } {
    return {
        width: (<Window>globalObject).innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: (<Window>globalObject).innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
}

/**
 * 返回当前浏览器窗口的宽度类型
 */
export function getWidthType(): BrowserWidthTypeEnum {
    const width = size().width
    if (width < 576) {
        return BrowserWidthTypeEnum.ExtraSmall
    }
    if (width >= 576 && width < 768) {
        return BrowserWidthTypeEnum.Small
    }
    if (width >= 768 && width < 992) {
        return BrowserWidthTypeEnum.Medium
    }
    if (width >= 992 && width < 1200) {
        return BrowserWidthTypeEnum.Large
    }
    return BrowserWidthTypeEnum.ExtraLarge
}