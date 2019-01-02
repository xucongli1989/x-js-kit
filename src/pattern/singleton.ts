const classIdSymbol = Symbol()

/**
 * 获取指定类的单个实例
 * @param className 类的名字
 */
export const getInstance = <T>(className: new () => T): T => {
    const symList = Object.getOwnPropertySymbols(className)
    if (symList && symList.length) {
        const obj = symList.find(k => k === classIdSymbol)
        if (obj) {
            return (className as any)[obj] as T
        }
    }
    const newObj = new className()
    Object.defineProperty(className, classIdSymbol, {
        value: newObj
    })
    return newObj
}