import { BaseClass } from "../entity/serialize"

export interface ValidationInitOpsType<ExtendType> {
    /**
     * 是否显示所有提示语
     */
    isShowAll?: boolean
    /**
     * 上一次的字段提示对象（主要用于初始化时合并对象）
     */
    oldItem?: FieldMessageItem<ExtendType>
    /**
     * 需要显示提示语的字段
     */
    needShowFields?: string[]
    /**
     * 不需要显示提示语的字段
     */
    unNeedShowFields?: string[]
}

export interface FieldItemType {
    /**
     * 提示语
     */
    msg: string
    /**
     * 是否显示
     */
    isShow: boolean
}

/**
 * 每一项的具体提示类
 */
export class FieldMessageItem<ExtendType = any> {
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
     * 扩展字段
     */
    extend: ExtendType = undefined as any
    /**
     * 初始化，重新设置fieldItems中的属性
     */
    init(ops: ValidationInitOpsType<ExtendType>) {
        if (!ops) {
            return this
        }
        Object.keys(this.fieldItems).forEach((k) => {
            //如果isShowAll有值，则将所有字段的isShow设置为该值
            if (ops && typeof ops.isShowAll == "boolean") {
                this.fieldItems[k].isShow = ops.isShowAll
                return
            }
            //如果原有的验证对象中的字段：【needShowFields包含该字段时，则isShow设置为true】，【unNeedShowFields包含该字段时，则isShow设置为false】
            let oldShowValue = !!(ops.oldItem && ops.oldItem.fieldItems[k].isShow)
            if ((ops.needShowFields || []).includes(k)) {
                oldShowValue = true
            }
            if ((ops.unNeedShowFields || []).includes(k)) {
                oldShowValue = false
            }
            this.fieldItems[k].isShow = oldShowValue
        })
        return this
    }
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
export class FieldMessageModel<ExtendType = any> extends BaseClass {
    /**
     * 是否itemList中的所有的字段提示列表均已验证通过
     */
    get isPassed(): boolean {
        return isPassed(this)
    }
    /**
     * 字段提示列表
     */
    itemList: FieldMessageItem<ExtendType>[] = []
    /**
     * 根据id返回指定的字段提示项
     */
    getItem(id: string): FieldMessageItem<ExtendType> | null {
        return getItem(this, id)
    }
    toJSON() {
        return {
            isPassed: this.isPassed,
            itemList: this.itemList
        }
    }
}

/**
 * 判断FieldMessageModel是否验证通过
 */
export function isPassed<ExtendType>(model: FieldMessageModel<ExtendType>) {
    if (!model.itemList.length) {
        return true
    }
    return !model.itemList.find((k) => !k.isPassed)
}

/**
 * 根据id返回FieldMessageModel中对应的FieldMessageItem
 */
export function getItem<ExtendType>(model: FieldMessageModel<ExtendType>, id: string): FieldMessageItem<ExtendType> | null {
    return model.itemList.find((k) => k.id == id) || null
}
