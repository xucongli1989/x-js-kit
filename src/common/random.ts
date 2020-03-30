let _id = 0

/**
 * 生成字符长度为22的随机字符串（如：i8ejoqjq3khibr89soi31t）
 */
export function create() {
    const str = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
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
    const str = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16)
    })
    return str
}

/**
 * 在min（含）与max（含）之间生成一个随机整数
 * @param min 最小值
 * @param max 最大值
 */
export function range(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
}

/**
 * 返回一个自增加1的数字（第一次调用时返回1，往后每调用一次加1）
 */
export function id() {
    return ++_id
}