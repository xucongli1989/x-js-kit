/**
 * 序列化基类（解决getter的JSON.stringify无效的问题）
 */
export class BaseClass {
    toJSON() {
        const jsonObj = Object.assign({}, this) as any
        const proto = Object.getPrototypeOf(this)
        for (const key of Object.getOwnPropertyNames(proto)) {
            const desc = Object.getOwnPropertyDescriptor(proto, key)
            const hasGetter = desc && typeof desc.get === 'function'
            if (hasGetter) {
                jsonObj[key] = (this as any)[key]
            }
        }
        return jsonObj
    }
}