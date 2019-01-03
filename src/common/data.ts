/**
 * 判断obj是否为数组
 */
export const isArray = (obj: any) => {
    if(!obj){
        return false
    }
    return Object.prototype.toString.call(obj) === "[object Array]";
}