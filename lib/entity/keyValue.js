/**
 * 键值对实体
 */
export class KeyValue {
    constructor(key, value, extend) {
        /**
         * 键名
         */
        this.key = "";
        this.key = key;
        this.value = value;
        this.extend = extend;
    }
}
/**
 * 键名值对实体
 */
export class KeyNameValue {
    constructor(key, name, value, extend) {
        /**
         * 键名
         */
        this.key = "";
        /**
         * name名
         */
        this.name = "";
        this.key = key;
        this.name = name;
        this.value = value;
        this.extend = extend;
    }
}
