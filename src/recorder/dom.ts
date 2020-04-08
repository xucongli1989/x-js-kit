import { document, globalObject } from "../common/lib"
import { AnyKeyValueType } from "../declaration/common"

/**
 * key 的枚举值
 */
enum KeyTypeEnum {
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
 * DOM数据收集记录器类。用于批量收集DOM元素的属性信息，并将这些属性内容存放到一个对象中。jskit-key 属性必须要指定。
 * 示例：<div jskit-key="name" jskit-type="val" jskit-val="test"></div>，则最终会把【name】与【test】保存到一个对象中。
 * 具体说明：
 * 1：如果此DOM的 jskit-type="val"，则会记录属性 jskit-val 的值（这种情况，jskit-type 可以省略不用指定）
 * 2：如果此DOM的 jskit-type="txt"，则会记录该DOM的innerText
 * 3：如果此DOM的 jskit-type="html"，则会记录该DOM的innerHTML
 * 4：如果此DOM的 jskit-type="count"，则会记录与该DOM相同【jskit-key】的DOM元素的出现次数
 * 5：如果此DOM只有 jskit-key 属性，则会默认记录一个标记为"1"
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
    readonly value: { [name: string]: string[] | number } = {}
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
        const attrValueName = `${this.attrPrefix}val`
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

            //初始化
            if (type == KeyTypeEnum.count) {
                if (!this.value[key]) {
                    this.value[key] = 0
                }
            } else {
                this.value[key] = this.value[key] || []
            }

            //如果存在jskit-val属性，则记录此属性值
            if (node.hasAttribute(attrValueName)) {
                (this.value[key] as string[]).push((node.getAttribute(attrValueName) || "").trim())
                return
            }
            //记录此节点的innerText值
            if (type == KeyTypeEnum.txt) {
                (this.value[key] as string[]).push(((node as HTMLElement).innerText || "").trim())
                return
            }
            //记录此节点的innerHTML值
            if (type == KeyTypeEnum.html) {
                (this.value[key] as string[]).push(((node as HTMLElement).innerHTML || "").trim())
                return
            }
            //统计这些属性元素的个数
            if (type == KeyTypeEnum.count) {
                (this.value[key] as number) = (this.value[key] as number) + 1
                return
            }
            //如果不存在其它属性，则直接记录一个标记
            (this.value[key] as string[]).push("1")
        })
        return this
    }
}