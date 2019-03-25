/**
 * 完整的电子邮箱地址
 */
export const email = /^\w+((-\w+)|(\.\w+))*\@[a-z0-9]+((\.|-)[a-z0-9]+)*\.[a-z0-9]+$/
/**
 * 全部是英文字母
 */
export const allEnglish = /^[a-zA-Z]+$/
/**
 * 全部是数字
 */
export const allNumber = /^[0-9]+$/
/**
 * 以【http://】开头
 */
export const http = /^http:\/\//i
/**
 * 以【https://】开头
 */
export const https = /^https:\/\//i
/**
 * 以【http://】或【https://】开头
 */
export const httpOrHttps = /^https?:\/\//i
/**
 * 包含整数或浮点数
 */
export const partNumber = /\d+(\.\d+)?/
/**
 * 中国大陆手机号
 */
export const cnMobile = /^1\d{10}$/
/**
 * html左右空白字符
 */
export const htmlLeftRightBlank = /^((\s+)|((<br\/?>)+)|((nbsp;)+))|((\s+)|((<br\/?>)+)|((nbsp;)+))$/gi
/**
 * 中国大陆身份证（18、15位）
 */
export const chinaIDCard = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/