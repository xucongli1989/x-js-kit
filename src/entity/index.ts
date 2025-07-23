/* eslint-disable import/no-default-export */
import * as idCard from "./idCard"
import * as keyValue from "./keyValue"
import * as select from "./select"
import * as serialize from "./serialize"
import * as message from "./message"
import * as methodResult from "./method-result"
import * as fileInfo from "./file-info"

export default {
    /**
     * 证件实体
     */
    idCard,
    /**
     * key/value实体
     */
    keyValue,
    /**
     * 下拉框相关实体
     */
    select,
    /**
     * 序列化相关
     */
    serialize,
    /**
     * 消息提示实体
     */
    message,
    /**
     * 方法结果实体
     */
    methodResult,
    /**
     * 文件相关
     */
    fileInfo
}
