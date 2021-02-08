/* eslint-disable import/no-default-export */
import * as localStorage from "./localStorage"

export default {
    /**
     * 带过期时间的缓存（就是浏览器中的localStorage，只是在value的结构中设置了指定的节点来表明什么时候过期，如果过期，则不返回该数据）
     */
    localStorage
}
