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

export enum RangeTextTypeEnum {
    页面范围 = "页面范围",
    工作表范围 = "工作表范围",
    字符范围 = "字符范围",
    文本位置范围 = "文本位置范围"
}

export const YesOrNoEnumList = convertEnumToList(YesOrNoEnum)
