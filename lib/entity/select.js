/**
 * 下拉框实体
 */
export class SelectItem {
    constructor(text, value, isSelected = false, extend) {
        /**
         * 文本名
         */
        this.text = "";
        /**
         * 是否已选中
         */
        this.isSelected = false;
        this.text = text;
        this.value = value;
        this.isSelected = isSelected;
        this.extend = extend;
    }
}
