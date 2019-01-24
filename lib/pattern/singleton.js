const classIdSymbol = Symbol();
/**
 * 获取指定类的单个实例
 * @param className 类的名字
 */
export const getInstance = (className) => {
    const obj = className[classIdSymbol];
    if (typeof (obj) != 'undefined') {
        return obj;
    }
    const newObj = new className();
    Object.defineProperty(className, classIdSymbol, {
        value: newObj
    });
    return newObj;
};
