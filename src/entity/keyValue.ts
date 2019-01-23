/**
 * 键值对实体
 */
export class KeyValue {
    constructor(key: string, value: any, extend?: any) {
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
    value: any
    /**
     * 扩展属性
     */
    extend: any
}

/**
 * 键名值对实体
 */
export class KeyNameValue {
    constructor(key: string, name: string, value: any, extend?: any) {
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
    value: any
    /**
     * 扩展属性
     */
    extend: any
}