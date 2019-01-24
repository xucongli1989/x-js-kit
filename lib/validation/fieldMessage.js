/**
 * 每一项的具体提示类
 */
export class FieldMessageItem {
    constructor() {
        /**
         * 唯一id标识
         */
        this.id = "";
        /**
         * 是否验证通过
         */
        this.isPassed = true;
        /**
         * 需要验证的具体字段信息
         */
        this.fieldItems = {};
    }
    /**
     * 初始化，重新设置fieldItems中的属性
     */
    init(ops) {
        if (!ops) {
            return this;
        }
        Object.keys(this.fieldItems).forEach(k => {
            //如果isShowAll有值，则将所有字段的isShow设置为该值
            if (ops && typeof (ops.isShowAll) == 'boolean') {
                this.fieldItems[k].isShow = ops.isShowAll;
                return;
            }
            //如果原有的验证对象中的字段：【needShowFields包含该字段时，则isShow设置为true】，【unNeedShowFields包含该字段时，则isShow设置为false】
            let oldShowValue = !!(ops.oldItem && ops.oldItem.fieldItems[k].isShow);
            if ((ops.needShowFields || []).includes(k)) {
                oldShowValue = true;
            }
            if ((ops.unNeedShowFields || []).includes(k)) {
                oldShowValue = false;
            }
            this.fieldItems[k].isShow = oldShowValue;
        });
        return this;
    }
}
/**
 * 字段信息提示类
 */
export class FieldMessageModel {
    constructor() {
        /**
         * 字段提示列表
         */
        this.itemList = [];
    }
    /**
     * 是否itemList中的所有的字段提示列表均已验证通过
     */
    get isPassed() {
        if (!this.itemList.length) {
            return true;
        }
        return !this.itemList.find(k => !k.isPassed);
    }
    /**
     * 根据id返回指定的字段提示项
     */
    getItem(id) {
        return this.itemList.find(k => k.id == id) || null;
    }
}
