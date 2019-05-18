const ImageSrcReg = /(<img\s+[^>]*)(src)(=[^>]*>)/gi

/**
 * 替换html中所有img标签的src标签名称
 * 如：<img src="http://www.a.com/a.jpg"/> ==> <img data-src="http://www.a.com/a.jpg"/>
 * @param html html字符串
 * @param newAttrName 新的替代src的属性名，默认为data-src
 * @returns 新的html字符串
 */
export function replaceImgSrc(html: string, newAttrName: string = "data-src"): string {
    if (!html) {
        return ""
    }
    return html.replace(ImageSrcReg, `$1${newAttrName}$3`)
}