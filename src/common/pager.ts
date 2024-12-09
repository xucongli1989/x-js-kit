import { PagerInfoType } from "../entity/pager-info"

/**
 * 根据总数和每页最多显示的条数，获取分页信息
 */
export function createPagerInfo(totalCount: number, pageSize: number, pageIndex: number) {
    const pagerInfo: PagerInfoType = {} as any
    if (totalCount <= 0 || pageSize <= 0) {
        return pagerInfo
    }
    pagerInfo.pageSize = pageSize
    pagerInfo.recordCount = totalCount
    pagerInfo.pageCount = Math.ceil((totalCount * 1.0) / pageSize)
    if (pageIndex <= 0) {
        pageIndex = 1
    }
    if (pageIndex > pagerInfo.pageCount) {
        pageIndex = pagerInfo.pageCount
    }
    pagerInfo.pageIndex = pageIndex
    pagerInfo.startIndex = (pagerInfo.pageIndex - 1) * pagerInfo.pageSize
    pagerInfo.endIndex = pagerInfo.pageIndex * pagerInfo.pageSize - 1
    if (pagerInfo.endIndex > totalCount - 1) {
        pagerInfo.endIndex = totalCount - 1
    }
    return pagerInfo
}
