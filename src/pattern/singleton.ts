const classIdSymbol = Symbol("class-id")

/**
 * 获取指定类的单个实例
 * @param className 类的名字
 */
export function getInstance<T>(ClassName: new () => T): T {
    const obj = (ClassName as any)[classIdSymbol] as T
    if (typeof (obj) != 'undefined') {
        return obj
    }
    const newObj = new ClassName()
    Object.defineProperty(ClassName, classIdSymbol, {
        value: newObj
    })
    return newObj
}