/**
 * 下拉框实体
 */
export class SelectItem<ValueType, ExtendType> {
    constructor(text: string, value: ValueType, isSelected: boolean = false, extend?: ExtendType) {
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
    value: ValueType
    /**
     * 扩展属性
     */
    extend?: ExtendType
}