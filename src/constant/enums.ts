import { convertEnumToList } from "../common/enumTool"

/**
 * 表单类型枚举
 */
export enum FormTypeEnum {
    /**
     * 无
     */
    NONE,
    /**
     * 添加
     */
    ADD,
    /**
     * 修改
     */
    UPDATE
}

/**
 * 是否类型枚举
 */
export enum YesOrNoEnum {
    是 = "是",
    否 = "否"
}

export const YesOrNoEnumList = convertEnumToList(YesOrNoEnum)
