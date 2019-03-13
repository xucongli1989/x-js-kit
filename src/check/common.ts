import * as regexConst from "../constant/regex"

/**
 * 判断是否为email
 */
export function isEmail(val: string) {
    return regexConst.email.test(val);
}
/**
 * 判断是否全为英文字符（a-zA-Z）
 */
export function isAllEnglish(val: string) {
    return regexConst.allEnglish.test(val);
}
/**
 * 判断是否全为数字字符（0-9）
 */
export function isAllNumber(val: string) {
    return regexConst.allNumber.test(val);
}
/**
 * 判断是否为中国大陆手机号（只考虑以1开头的11位数字即可）
 */
export function isCNMobile(val: string) {
    return regexConst.cnMobile.test(val)
}