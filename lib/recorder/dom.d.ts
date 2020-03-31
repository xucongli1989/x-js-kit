import { AnyKeyValueType } from "../declaration/common";
/**
 * DOM数据收集记录器类。用于批量收集DOM元素的属性信息，并将这些属性内容存放到一个对象中。
 * 示例：<div jskit-key="name" jskit-val="test"></div>，则最终会把【name】与【test】保存到一个对象中。
 * 说明：jskit-key属性为此数据的标识key，value的值为：
 * 1：如果此DOM有jskit-val属性，则会记录该属性的值
 * 2：如果此DOM有jskit-txt属性，则会记录该DOM的innerText
 * 3：如果此DOM有jskit-html属性，则会记录该DOM的innerHTML
 * 4：如果此DOM有jskit-count属性，则会记录与该DOM相同【jskit-key】的DOM元素的出现次数
 * 5：如果此DOM只有jskit-key属性，则会默认记录一个标记为"1"
 */
export declare class DOMDataRecorder {
    /**
     * 当前url地址
     */
    url: string;
    /**
     * 来源url地址
     */
    refer: string;
    /**
     * 数据标识
     */
    id: string;
    /**
     * DOM元素属性前缀，默认为：jskit-
     */
    attrPrefix: string;
    /**
     * 数据值（键值对的形式）
     */
    readonly value: {
        [name: string]: string[];
    };
    /**
     * 扩展自定义数据
     */
    extend: AnyKeyValueType | undefined;
    /**
     * 初始化
     */
    init(): this;
}
//# sourceMappingURL=dom.d.ts.map