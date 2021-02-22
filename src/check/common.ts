import * as regexConst from "../constant/regex"

/**
 * 判断是否为email
 */
export function isEmail(val: string) {
    return regexConst.email.test(val)
}
/**
 * 判断是否全为英文字符（a-zA-Z）
 */
export function isAllEnglish(val: string) {
    return regexConst.allEnglish.test(val)
}
/**
 * 判断是否全为数字字符（0-9）
 */
export function isAllNumber(val: string) {
    return regexConst.allNumber.test(val)
}
/**
 * 判断是否为中国大陆手机号（只考虑以1开头的11位数字即可）
 */
export function isCNMobile(val: string) {
    return regexConst.cnMobile.test(val)
}
/**
 * 判断是否为中国大陆身份证号码
 */
export function isChinaIDCard(val: string) {
    return regexConst.chinaIDCard.test(val)
}
/**
 * 判断键盘按键的keyCode是否为字母和数字
 */
export function isAlphaNumericKeyCode(keyCode: number) {
    return (keyCode >= 65 && keyCode <= 90) || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)
}
/**
 * 判断字符串中是否包含中文字符
 */
export function hasChineseWord(str: string) {
    return regexConst.chineseChar.test(str)
}
