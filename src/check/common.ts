/**
 * 判断是否为email
 */
export const isEmail = (val: string) => {
    return /^\w+((-\w+)|(\.\w+))*\@[a-z0-9]+((\.|-)[a-z0-9]+)*\.[a-z0-9]+$/.test(val);
}
/**
 * 判断是否全为英文字符（a-zA-Z）
 */
export const isAllEnglish = (val: string) => {
    return /^[a-zA-Z]+$/.test(val);
}
/**
 * 判断是否全为数字字符（0-9）
 */
export const isNumber = (val: string) => {
    return /^[0-9]+$/.test(val);
}