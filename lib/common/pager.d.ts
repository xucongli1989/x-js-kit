import { PagerInfoType } from "../entity/pager-info";
/**
 * 根据总数和每页最多显示的条数，获取分页信息
 */
export declare function createPagerInfo(totalCount: number, pageSize: number, pageIndex: number): PagerInfoType;
/**
 * 获取某一页的起始索引值（从 0 开始）
 */
export declare function getPageStartIndex(pageSize: number, pageIndex: number): number;
//# sourceMappingURL=pager.d.ts.map