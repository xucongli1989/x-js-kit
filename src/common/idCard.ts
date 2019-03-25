import { isChinaIDCard } from "../check/common"
import { CNIDCardEntity } from "../entity/idCard"

/**
 * 将字符串转为中国大陆身份证实体
 */
export function toCNIDCardEntity(str: string): CNIDCardEntity | null {
    let result: CNIDCardEntity = null as any
    if (!isChinaIDCard(str)) {
        return result
    }
    result = new CNIDCardEntity()
    result.len = str.length as any
    if (result.len == 15) {
        result.birthday = "19" + str.substr(6, 6)
    } else {
        result.birthday = str.substr(6, 8)
    }
    result.birthday = result.birthday.substr(0, 4) + "-" + result.birthday.substr(4, 2) + "-" + result.birthday.substr(6, 2)
    return result
}