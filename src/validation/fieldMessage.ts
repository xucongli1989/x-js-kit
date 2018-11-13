export interface ValidationInitOpsType {
    /**
     * 是否显示所有提示语
     */
    isShowAllMsg?: boolean
    /**
     * 上一次的验证对象
     */
    oldFieldMessageItem?: FieldMessageItem
    /**
     * 需要显示提示语的字段
     */
    needShowMsgFields?: string[]
    /**
     * 不需要显示提示语的字段
     */
    unNeedShowMsgFields?: string[]
}
export interface FieldItemType {
    /**
     * 提示语
     */
    msg: string,
    /**
     * 是否显示
     */
    isShow: boolean
}


export class FieldMessageItem {
    /**
     * 唯一id标识
     */
    id: string = ""
    /**
     * 是否验证通过
     */
    isPassed: boolean = true
    /**
     * 需要验证的具体字段信息
     */
    fieldItems: { [name: string]: FieldItemType } = {}
    /**
     * 自定义扩展信息
     */
    extend: { [name: string]: any } = {}
    /**
     * 初始化，重新设置fieldItems的信息
     */
    init(ops: ValidationInitOpsType) {
        if (!ops) {
            return this;
        }
        Object.keys(this.fieldItems).forEach(k => {
            //如果isShowAllMsg有值，则将所有字段的isShow设置为该值
            if (ops && typeof (ops.isShowAllMsg) == 'boolean') {
                this.fieldItems[k].isShow = ops.isShowAllMsg;
                return;
            }
            //如果原有的验证对象中的字段：【needShowMsgFields包含该字段时，则isShow设置为true】，【unNeedShowMsgFields包含该字段时，则isShow设置为false】
            let oldShowValue = !!(ops.oldFieldMessageItem && ops.oldFieldMessageItem.fieldItems[k].isShow)
            if ((ops.needShowMsgFields || []).includes(k)) {
                oldShowValue = true;
            }
            if ((ops.unNeedShowMsgFields || []).includes(k)) {
                oldShowValue = false;
            }
            this.fieldItems[k].isShow = oldShowValue;
        });
        return this;
    }
}

/**
 * 表单验证类
 */
export class FieldMessageModel {
    /**
     * 是否所有验证列表均已验证通过
     */
    get isPassed(): boolean {
        if (!this.fieldMessageItemList.length) {
            return true
        }
        return !this.fieldMessageItemList.find(k => !k.isPassed)
    }
    /**
     * 验证列表
     */
    fieldMessageItemList: FieldMessageItem[] = []
    /**
     * 根据id返回指定的验证项
     */
    getFieldMessageItem(id: string): FieldMessageItem | null {
        return this.fieldMessageItemList.find(k => k.id == id) || null
    }
}