import { document, globalObject } from "../common/lib"
import { AnyKeyValueType } from "../declaration/common"

/**
 * key 的枚举值
 */
enum KeyTypeEnum {
    /**
     * 记录分组
     */
    group = "group",
    /**
     * 记录属性值
     */
    val = "val",
    /**
     * 记录innerText
     */
    txt = "txt",
    /**
     * 记录innerHTML
     */
    html = "html",
    /**
     * 记录次数
     */
    count = "count"
}


/**
 * DOM数据收集记录器类。用于批量收集DOM元素的属性信息，并将这些属性内容存放到一个对象中。
 * 示例：<div jskit-key="name" jskit-type="val" jskit-val="test"></div>，则最终会把【name】与【test】保存到一个对象中。
 * 说明：jskit-key属性为此数据的标识key，value的值为：
 * 1：如果此DOM的 jskit-type="val"，则会记录该属性的值
 * 2：如果此DOM的 jskit-type="txt"，则会记录该DOM的innerText
 * 3：如果此DOM的 jskit-type="html"，则会记录该DOM的innerHTML
 * 4：如果此DOM的 jskit-type="count"，则会记录与该DOM相同【jskit-key】的DOM元素的出现次数
 * 5：如果此DOM没有 jskit-type属性，则会默认记录一个标记为"1"
 */
export class DOMDataRecorder {
    /**
     * 当前url地址
     */
    url: string = ""
    /**
     * 来源url地址
     */
    refer: string = ""
    /**
     * 数据标识
     */
    id: string = ""
    /**
     * DOM元素属性前缀，默认为：jskit-
     */
    attrPrefix = "jskit-"
    /**
     * 数据值（键值对的形式）
     */
    readonly value: { [name: string]: string[] } = {}
    /**
     * 扩展自定义数据
     */
    extend: AnyKeyValueType | undefined = undefined
    /**
     * 初始化
     */
    init() {
        //环境校验
        if (!document) {
            throw new Error("Document is not found!")
        }
        //基本属性
        const win = globalObject as Window
        this.url = win.location.href
        this.refer = document.referrer
        //数据
        const attrKeyName = `${this.attrPrefix}key`
        const attrTypeName = `${this.attrPrefix}type`
        const eles = document.querySelectorAll(`[${attrKeyName}]`)
        if (!eles || !eles.length) {
            return this
        }
        eles.forEach(node => {
            const key = (node.getAttribute(attrKeyName) || "").toLowerCase().trim()
            if (!key) {
                return
            }
            const type = (node.getAttribute(attrTypeName) || "").toLowerCase().trim()
            this.value[key] = this.value[key] || []
            switch (type) {
                case KeyTypeEnum.txt:
                    break;
                case KeyTypeEnum.html:
                    break;
                case KeyTypeEnum.group:
                    break;
                case KeyTypeEnum.count:
                    break;
                case KeyTypeEnum.val:
                default:
                    break;
            }

            //如果存在jskit-val属性，则记录此属性值
            if (node.hasAttribute(attrValueName)) {
                this.value[key].push((node.getAttribute(attrValueName) || "").trim())
                return
            }
            //如果存在jskit-txt属性，则记录此节点的innerText值
            if (node.hasAttribute(attrTxtName)) {
                this.value[key].push(((node as HTMLElement).innerText || "").trim())
                return
            }
            //如果存在jskit-html属性，则记录此节点的innerHTML值
            if (node.hasAttribute(attrHtmlName)) {
                this.value[key].push(((node as HTMLElement).innerHTML || "").trim())
                return
            }
            //如果存在jskit-count属性，则统计这些属性元素的个数
            if (node.hasAttribute(attrCountName)) {
                this.value[key][0] = (parseInt(this.value[key][0] || "0") + 1).toString()
                return
            }
            //如果不存在其它属性，则直接记录一个标记
            this.value[key].push("1")
        })
        return this
    }
}