export interface ValidationInitOpsType {
    /**
     * 是否显示所有提示语
     */
    isShowAllMsg?: boolean;
    /**
     * 上一次的验证对象
     */
    oldFieldMessageItem?: FieldMessageItem;
    /**
     * 需要显示提示语的字段
     */
    needShowMsgFields?: string[];
    /**
     * 不需要显示提示语的字段
     */
    unNeedShowMsgFields?: string[];
}
export interface FieldItemType {
    /**
     * 提示语
     */
    msg: string;
    /**
     * 是否显示
     */
    isShow: boolean;
}
export declare class FieldMessageItem {
    /**
     * 唯一id标识
     */
    id: string;
    /**
     * 是否验证通过
     */
    isPassed: boolean;
    /**
     * 需要验证的具体字段信息
     */
    fieldItems: {
        [name: string]: FieldItemType;
    };
    /**
     * 自定义扩展信息
     */
    extend: {
        [name: string]: any;
    };
    /**
     * 初始化，重新设置fieldItems的信息
     */
    init(ops: ValidationInitOpsType): this;
}
/**
 * 表单验证类
 */
export declare class FieldMessageModel {
    /**
     * 是否所有验证列表均已验证通过
     */
    readonly isPassed: boolean;
    /**
     * 验证列表
     */
    fieldMessageItemList: FieldMessageItem[];
    /**
     * 根据id返回指定的验证项
     */
    getFieldMessageItem(id: string): FieldMessageItem | null;
}
