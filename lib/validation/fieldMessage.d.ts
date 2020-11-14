import { BaseClass } from "../entity/serialize";
export interface ValidationInitOpsType<ExtendType> {
    /**
     * 是否显示所有提示语
     */
    isShowAll?: boolean;
    /**
     * 上一次的字段提示对象（主要用于初始化时合并对象）
     */
    oldItem?: FieldMessageItem<ExtendType>;
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
export declare class FieldMessageItem<ExtendType = any> {
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
    extend: ExtendType;
    /**
     * 初始化，重新设置fieldItems中的属性
     */
    init(ops: ValidationInitOpsType<ExtendType>): this;
}
/**
 * 字段信息提示实体类。把类似“表单验证”的场景通过一个统一的实体类来表现，方便js代码去读取与管理这些状态与信息。
 * 比如：如果一个输入项校验不通过，会涉及到这些数据的变化：是否验证通过、错误提示消息、是否只显示当前这一个错误消息等、是否需要清空其它错误消息等。
 * 示例用法：
 * const model = new FieldMessageModel()
 * model.itemList = []
 * const item = new FieldMessageItem()
 * item.isPassed = false
 * item.fieldItems = {
 * name: {
 *     isShow: false,
 *     msg: ""
 * }
 * 当数据化生变化时，要做的只是更新这个对象中的具体字段状态即可，业务代码中根据这些状态信息统一去显示页面。
 *
*}
model.itemList.push(item)
 *
 */
export declare class FieldMessageModel<ExtendType = any> extends BaseClass {
    /**
     * 是否itemList中的所有的字段提示列表均已验证通过
     */
    get isPassed(): boolean;
    /**
     * 字段提示列表
     */
    itemList: FieldMessageItem<ExtendType>[];
    /**
     * 根据id返回指定的字段提示项
     */
    getItem(id: string): FieldMessageItem<ExtendType> | null;
    toJSON(): {
        isPassed: boolean;
        itemList: FieldMessageItem<ExtendType>[];
    };
}
/**
 * 判断FieldMessageModel是否验证通过
 */
export declare function isPassed<ExtendType>(model: FieldMessageModel<ExtendType>): boolean;
/**
 * 根据id返回FieldMessageModel中对应的FieldMessageItem
 */
export declare function getItem<ExtendType>(model: FieldMessageModel<ExtendType>, id: string): FieldMessageItem<ExtendType> | null;
//# sourceMappingURL=fieldMessage.d.ts.map