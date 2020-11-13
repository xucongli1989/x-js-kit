/**
 * 下拉框实体
 */
export declare class SelectItem<ValueType, ExtendType> {
    constructor(text: string, value: ValueType, isSelected?: boolean, extend?: ExtendType);
    /**
     * 文本名
     */
    text: string;
    /**
     * 是否已选中
     */
    isSelected: boolean;
    /**
     * value值
     */
    value: ValueType;
    /**
     * 扩展属性
     */
    extend?: ExtendType;
}
//# sourceMappingURL=select.d.ts.map