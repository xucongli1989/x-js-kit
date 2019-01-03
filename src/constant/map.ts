import { AnyKeyValueType } from "../declaration/common"

/**
* html转义实体
*/
export const htmlEntityMap: AnyKeyValueType = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
}