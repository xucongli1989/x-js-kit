export interface AppendElementToLimitContainerResultType {
    /**
     * 子元素是否超出最大范围
     */
    isOverflow: boolean
}

/**
 * 在指定容器的末尾追加一个子元素，并且限制此容器内的子元素的最大数量。如果超出最大数量，则显示一个占位元素
 * 应用场景：一个 div 需要实时显示无数条日志，每条日志占用一行，当日志过多时，限制显示的数量，并展示一个【更多】按钮供用户单击查看完整日志
 * @param containerElement 外层容器
 * @param subElement 子元素
 * @param maxCount 最大子元素数量
 * @param ellipsisElement 当子元素超过最大数量时，显示一个省略占位元素，如：<p>...</p>
 */
export function appendElementToLimitContainer(containerElement: HTMLElement, subElement: HTMLElement, maxCount: number, ellipsisElement: HTMLElement): AppendElementToLimitContainerResultType {
    const result = {} as AppendElementToLimitContainerResultType
    result.isOverflow = false
    if (!containerElement || !subElement) {
        return result
    }
    const conEle = containerElement as HTMLElement & {
        /**
         * 范围边界元素
         */
        // eslint-disable-next-line camelcase
        _x_js_kit_limit_edge_index: number
        /**
         * 是否已插入省略占位元素
         */
        // eslint-disable-next-line camelcase
        _x_js_kit_limit_inserted_ellipsis: boolean
    }
    conEle.appendChild(subElement)
    //超出范围
    if (conEle._x_js_kit_limit_edge_index > 0) {
        if (!conEle._x_js_kit_limit_inserted_ellipsis) {
            conEle.insertBefore(ellipsisElement, conEle.childNodes[conEle._x_js_kit_limit_edge_index])
            conEle._x_js_kit_limit_inserted_ellipsis = true
        }
        conEle.removeChild(conEle.childNodes[conEle._x_js_kit_limit_edge_index + 1])
        result.isOverflow = true
        return result
    }
    //正常范围
    const childLength = containerElement.childNodes.length
    if (childLength == maxCount) {
        conEle._x_js_kit_limit_edge_index = Math.ceil(childLength / 2)
    }
    return result
}
