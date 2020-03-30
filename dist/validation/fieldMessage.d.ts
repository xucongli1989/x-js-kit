import { BaseClass } from "../entity/serialize";
export interface ValidationInitOpsType {
    /**
     * 是否显示所有提示语
     */
    isShowAll?: boolean;
    /**
     * 上一次的字段提示对象（主要用于初始化时合并对象）
     */
    oldItem?: FieldMessageItem;
    /**
     * 需要显示提示语的字段
     */
    needShowFields?: string[];
    /**
     * 不需要显示提示语的字段
     */
    unNeedShowFields?: string[];
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
/**
 * 每一项的具体提示类
 */
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
     * 扩展字段
     */
    extend: any;
    /**
     * 初始化，重新设置fieldItems中的属性
     */
    init(ops: ValidationInitOpsType): this;
}
/**
 * 判断FieldMessageModel是否验证通过
 */
export declare function isPassed(model: FieldMessageModel): boolean;
/**
 * 根据id返回FieldMessageModel中对应的FieldMessageItem
 */
export declare function getItem(model: FieldMessageModel, id: string): FieldMessageItem | null;
/**
 * 字段信息提示类
 */
export declare class FieldMessageModel extends BaseClass {
    /**
     * 是否itemList中的所有的字段提示列表均已验证通过
     */
    get isPassed(): boolean;
    /**
     * 字段提示列表
     */
    itemList: FieldMessageItem[];
    /**
     * 根据id返回指定的字段提示项
     */
    getItem(id: string): FieldMessageItem | null;
    toJSON(): {
        isPassed: boolean;
        itemList: FieldMessageItem[];
    };
}
//# sourceMappingURL=fieldMessage.d.ts.map