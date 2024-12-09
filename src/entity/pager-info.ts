/**
 * 分页类型
 */
export interface PagerInfoType {
    /**
     * 当前为第几页，从 1 开始
     */
    pageIndex: number
    /**
     * 当前页面数据开始位置索引（从 0 开始，且包含此项）
     */
    startIndex: number
    /**
     * 当前页面数据结束位置索引（从 0 开始，且包含此项）
     */
    endIndex: number
    /**
     * 每页最多显示几条数据
     */
    pageSize: number
    /**
     * 记录总数
     */
    recordCount: number
    /**
     * 共有多少页
     */
    pageCount: number
}