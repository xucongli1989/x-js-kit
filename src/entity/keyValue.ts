/**
 * 键值对实体
 */
export class KeyValue<ValueType = any, ExtendType = any> {
    constructor(key: string, value: ValueType, extend?: ExtendType) {
        this.key = key
        this.value = value
        this.extend = extend
    }
    /**
     * 键名
     */
    key: string = ""
    /**
     * value值
     */
    value: ValueType
    /**
     * 扩展属性
     */
    extend?: ExtendType
}

/**
 * 键名值对实体
 */
export class KeyNameValue<ValueType = any, ExtendType = any> {
    constructor(key: string, name: string, value: ValueType, extend?: ExtendType) {
        this.key = key
        this.name = name
        this.value = value
        this.extend = extend
    }
    /**
     * 键名
     */
    key: string = ""
    /**
     * name名
     */
    name: string = ""
    /**
     * value值
     */
    value: ValueType
    /**
     * 扩展属性
     */
    extend?: ExtendType
}