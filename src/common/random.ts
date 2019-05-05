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

/**
 * 生成UUID（如：24ff0a46-81c1-431b-a3de-68440bbc3045）
 */
export function uuid() {
    //https://github.com/simongong/js-stackoverflow-highest-votes/blob/master/questions1-10/how-to-create-a-UUID-in-javascript.md
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        let r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16)
    })
    return uuid
}