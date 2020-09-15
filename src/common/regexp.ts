/**
 * 将字符串中的关键字符进行编码，以避免在传给Regex时，这些字符被当成正则中的关键字处理
 */
export function escapeReg(str: string) {
    if (!str) {
        return ""
    }
    return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}