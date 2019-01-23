/**
 * 下拉框实体
 */
export class SelectItem {
    constructor(text: string, value: any, isSelected: boolean = false, extend?: any) {
        this.text = text
        this.value = value
        this.isSelected = isSelected
        this.extend = extend
    }
    /**
     * 文本名
     */
    text: string = ""
    /**
     * 是否已选中
     */
    isSelected = false
    /**
     * value值
     */
    value: any
    /**
     * 扩展属性
     */
    extend: any
}