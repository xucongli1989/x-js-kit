import * as regexConst from "../constant/regex"

/**
 * 判断是否为email
 */
export const isEmail = (val: string) => {
    return regexConst.email.test(val);
}
/**
 * 判断是否全为英文字符（a-zA-Z）
 */
export const isAllEnglish = (val: string) => {
    return regexConst.allEnglish.test(val);
}
/**
 * 判断是否全为数字字符（0-9）
 */
export const isAllNumber = (val: string) => {
    return regexConst.allNumber.test(val);
}