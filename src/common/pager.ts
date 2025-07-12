import { PagerInfoType } from "../entity/pager-info"

/**
 * 根据总数和每页最多显示的条数，获取分页信息
 */
export function createPagerInfo(totalCount: number, pageSize: number, pageIndex: number) {
    if (pageSize <= 0) {
        pageSize = 10
    }
    if (pageIndex <= 0) {
        pageIndex = 1
    }

    const pagerInfo: PagerInfoType = {} as any
    pagerInfo.pageIndex = pageIndex
    pagerInfo.startIndex = -1
    pagerInfo.endIndex = -1
    pagerInfo.pageSize = pageSize
    pagerInfo.recordCount = totalCount
    pagerInfo.pageCount = Math.ceil((totalCount * 1.0) / pageSize)
    if (!pagerInfo.pageCount) {
        return pagerInfo
    }

    if (pagerInfo.pageIndex > pagerInfo.pageCount) {
        pagerInfo.pageIndex = pagerInfo.pageCount
    }
    pagerInfo.startIndex = (pagerInfo.pageIndex - 1) * pagerInfo.pageSize
    pagerInfo.endIndex = pagerInfo.pageIndex * pagerInfo.pageSize - 1
    if (pagerInfo.endIndex > totalCount - 1) {
        pagerInfo.endIndex = totalCount - 1
    }
    return pagerInfo
}

/**
 * 获取某一页的起始索引值（从 0 开始）
 */
export function getPageStartIndex(pageSize: number, pageIndex: number) {
    return (pageIndex - 1) * pageSize
}
