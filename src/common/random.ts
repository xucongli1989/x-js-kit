/**
 * 生成字符长度为22的随机字符串（如：i8ejoqjq3khibr89soi31t）
 */
export function create() {
    let str = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    if (str.length < 22) {
        return str.padEnd(22, "0")
    }
    return str.substr(0, 22)
}