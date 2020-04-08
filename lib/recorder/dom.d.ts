import { AnyKeyValueType } from "../declaration/common";
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
        [name: string]: string[] | number;
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