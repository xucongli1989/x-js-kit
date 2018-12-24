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
export const http = /^http:\/\//
/**
 * 以【https://】开头
 */
export const https = /^https:\/\//
/**
 * 以【http://】或【https://】开头
 */
export const httpOrHttps = /^https?:\/\//
/**
 * 包含整数或浮点数
 */
export const partNumber = /\d+(\.\d+)?/