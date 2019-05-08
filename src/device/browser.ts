import { globalObject, document } from "../common/lib"

/**
 * 获取当前浏览器窗口的大小
 */
export function size(): { width: number, height: number } {
    return {
        width: (<Window>globalObject).innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: (<Window>globalObject).innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
}