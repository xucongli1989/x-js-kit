import { trim } from "./string"

/**
 * 判断obj是否为数组
 */
export function isArray(obj: any) {
    if (!obj) {
        return false
    }
    return Object.prototype.toString.call(obj) === "[object Array]"
}

/**
  * 判断val是否为数字
  * @param val 要判断的值
  * @returns  判断结果
  */
export function isNumber(val: number | string) {
    return (typeof (val) === 'number' || typeof (val) === 'string') && val !== '' && !isNaN(val as any)
}

/**
 * 判断指定值是否为一个对象
 * @param  val 要判断的值
 * @returns  判断结果
 */
export function isObject(val: any) {
    return val && typeof val === 'object'
}

/**
* 判断指定值为null或为空字符串
* @param  val 要判断的值
* @returns 判断结果
*/
export function isNullOrEmpty(val: null | string) {
    return null === val || val === ""
}

/**
 * 判断指定值为null，或为空字符串，或为空白字符串
 * @param  val 要判断的值
 * @returns 判断结果
 */
export function isNullOrWhiteSpace(val: null | string) {
    if (val === null) {
        return true
    }
    return isNullOrEmpty(trim(val))
}

/**
 * 判断指定值是否为function
 * @param  val 要判断的值
 * @returns 判断结果
 */
export function isFunction(val: any) {
    return val && Object.prototype.toString.call(val) == '[object Function]'
}

/**
 * 判断指定值是否为String
 * @param  val 要判断的值
 * @returns 判断结果
 */
export function isString(val: any) {
    return typeof val == 'string' || val instanceof String
}

/**
 * 判断指定字符串是否为"true"或"false"
 * @param  val 要判断的值
 * @returns 判断结果
 */
export function isBoolean(val: string) {
    return /^true|false$/i.test(val)
}

/**
 * 判断指定值是否为undefined
 * @param  val 要判断的值
 * @returns 判断结果
 */
export function isUndefined(val: any) {
    return val === undefined || typeof (val) === "undefined"
}

/**
 * 指定值是否全部为大写
 * @param  val 要判断的值
 * @returns 判断结果
 */
export function isUpper(val: string) {
    return val && val.toUpperCase() === val
}

/**
 * 指定值是否全部为小写
 * @param  val 要判断的值
 * @returns 判断结果
 */
export function isLower(val: string) {
    return val && val.toLowerCase() === val
}

/**
 * 指定值是否为Date对象
 * @param val 要判断的值
 * @returns 判断结果
 */
export function isDate(val: any) {
    return val && Object.prototype.toString.call(val) === "[object Date]" && !isNaN(val)
}