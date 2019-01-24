import * as data from "./data";
/**
   * 是否包含名key
   * @param json json对象
   * @param keyName key名
   * @returns 判断结果
   */
export const hasKey = (json, keyName) => {
    if (!json) {
        return false;
    }
    return Object.keys(json).includes(keyName);
};
/**
 * 是否包含值value
 * @param  json json对象
 * @param keyValue value值
 * @returns 判断结果
 */
export const hasValue = (json, keyValue) => {
    if (!json) {
        return false;
    }
    let r = false;
    for (var k in json) {
        if (json[k] === keyValue) {
            r = true;
            break;
        }
    }
    return r;
};
/**
 * json对象转成param形式的字符串，如{a:1,b:2,c:[3,4,5]}=>"a=1&b=2&c=3&c=4&c=5"
 * @param  json 待转换的json数据源
 * @returns 转换结果
 */
export const toParams = (json) => {
    if (!json)
        return "";
    let arr = [], temp = "";
    for (let m in json) {
        if (data.isArray(json[m])) {
            temp = json[m].join("&" + m + "=");
        }
        else {
            temp = json[m];
        }
        arr.push(m + "=" + temp);
    }
    return arr.join("&");
};
