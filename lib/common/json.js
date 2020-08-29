"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasKey = hasKey;
exports.hasValue = hasValue;
exports.toParams = toParams;
exports.toObject = toObject;

var _data = require("./data");

/**
   * 是否包含名key
   * @param json json对象
   * @param keyName key名
   * @returns 判断结果
   */
function hasKey(json, keyName) {
  if (!json) {
    return false;
  }

  return Object.keys(json).includes(keyName);
}
/**
 * 是否包含值value
 * @param  json json对象
 * @param keyValue value值
 * @returns 判断结果
 */


function hasValue(json, keyValue) {
  if (!json) {
    return false;
  }

  var r = false;

  for (var k in json) {
    if (json[k] === keyValue) {
      r = true;
      break;
    }
  }

  return r;
}
/**
 * json对象转成param形式的字符串，如{a:1,b:2,c:[3,4,5]}=>"a=1&b=2&c=3&c=4&c=5"
 * @param  json 待转换的json数据源
 * @returns 转换结果
 */


function toParams(json) {
  if (!json) return "";
  var arr = [];
  var temp = "";

  for (var m in json) {
    if ((0, _data.isArray)(json[m])) {
      temp = json[m].join("&" + m + "=");
    } else {
      temp = json[m];
    }

    arr.push(m + "=" + temp);
  }

  return arr.join("&");
}
/**
 * 将json字符串转换为对象，如果转换失败，则返回null
 * @param json json字符串
 */


function toObject(json) {
  if (!json) {
    return null;
  }

  var result = null;

  try {
    result = JSON.parse(json);
  } catch (_unused) {//
  }

  return result;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vanNvbi50cyJdLCJuYW1lcyI6WyJoYXNLZXkiLCJqc29uIiwia2V5TmFtZSIsIk9iamVjdCIsImtleXMiLCJpbmNsdWRlcyIsImhhc1ZhbHVlIiwia2V5VmFsdWUiLCJyIiwiayIsInRvUGFyYW1zIiwiYXJyIiwidGVtcCIsIm0iLCJqb2luIiwicHVzaCIsInRvT2JqZWN0IiwicmVzdWx0IiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7O0FBRUE7Ozs7OztBQU1PLFNBQVNBLE1BQVQsQ0FBZ0JDLElBQWhCLEVBQXVDQyxPQUF2QyxFQUF3RDtBQUMzRCxNQUFJLENBQUNELElBQUwsRUFBVztBQUNQLFdBQU8sS0FBUDtBQUNIOztBQUNELFNBQU9FLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxJQUFaLEVBQWtCSSxRQUFsQixDQUEyQkgsT0FBM0IsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU0ksUUFBVCxDQUFrQkwsSUFBbEIsRUFBeUNNLFFBQXpDLEVBQXdEO0FBQzNELE1BQUksQ0FBQ04sSUFBTCxFQUFXO0FBQ1AsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsTUFBSU8sQ0FBQyxHQUFHLEtBQVI7O0FBQ0EsT0FBSyxJQUFNQyxDQUFYLElBQWdCUixJQUFoQixFQUFzQjtBQUNsQixRQUFJQSxJQUFJLENBQUNRLENBQUQsQ0FBSixLQUFZRixRQUFoQixFQUEwQjtBQUN0QkMsTUFBQUEsQ0FBQyxHQUFHLElBQUo7QUFDQTtBQUNIO0FBQ0o7O0FBQ0QsU0FBT0EsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTRSxRQUFULENBQWtCVCxJQUFsQixFQUF5QztBQUM1QyxNQUFJLENBQUNBLElBQUwsRUFBVyxPQUFPLEVBQVA7QUFDWCxNQUFNVSxHQUFHLEdBQUcsRUFBWjtBQUNBLE1BQUlDLElBQUksR0FBRyxFQUFYOztBQUNBLE9BQUssSUFBTUMsQ0FBWCxJQUFnQlosSUFBaEIsRUFBc0I7QUFDbEIsUUFBSSxtQkFBUUEsSUFBSSxDQUFDWSxDQUFELENBQVosQ0FBSixFQUFzQjtBQUNsQkQsTUFBQUEsSUFBSSxHQUFHWCxJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRQyxJQUFSLENBQWEsTUFBTUQsQ0FBTixHQUFVLEdBQXZCLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSEQsTUFBQUEsSUFBSSxHQUFHWCxJQUFJLENBQUNZLENBQUQsQ0FBWDtBQUNIOztBQUNERixJQUFBQSxHQUFHLENBQUNJLElBQUosQ0FBU0YsQ0FBQyxHQUFHLEdBQUosR0FBVUQsSUFBbkI7QUFDSDs7QUFDRCxTQUFPRCxHQUFHLENBQUNHLElBQUosQ0FBUyxHQUFULENBQVA7QUFDSDtBQUVEOzs7Ozs7QUFJTyxTQUFTRSxRQUFULENBQXFCZixJQUFyQixFQUE2QztBQUNoRCxNQUFJLENBQUNBLElBQUwsRUFBVztBQUNQLFdBQU8sSUFBUDtBQUNIOztBQUNELE1BQUlnQixNQUFnQixHQUFHLElBQXZCOztBQUNBLE1BQUk7QUFDQUEsSUFBQUEsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV2xCLElBQVgsQ0FBVDtBQUNILEdBRkQsQ0FFRSxnQkFBTSxDQUNKO0FBQ0g7O0FBQ0QsU0FBT2dCLE1BQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFueUtleVZhbHVlVHlwZSB9IGZyb20gXCIuLi9kZWNsYXJhdGlvbi9jb21tb25cIlxyXG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4vZGF0YVwiXHJcblxyXG4vKipcclxuICAgKiDmmK/lkKbljIXlkKvlkI1rZXlcclxuICAgKiBAcGFyYW0ganNvbiBqc29u5a+56LGhXHJcbiAgICogQHBhcmFtIGtleU5hbWUga2V55ZCNXHJcbiAgICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAgICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNLZXkoanNvbjogQW55S2V5VmFsdWVUeXBlLCBrZXlOYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmICghanNvbikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGpzb24pLmluY2x1ZGVzKGtleU5hbWUpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbljIXlkKvlgLx2YWx1ZVxyXG4gKiBAcGFyYW0gIGpzb24ganNvbuWvueixoVxyXG4gKiBAcGFyYW0ga2V5VmFsdWUgdmFsdWXlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGFzVmFsdWUoanNvbjogQW55S2V5VmFsdWVUeXBlLCBrZXlWYWx1ZTogYW55KSB7XHJcbiAgICBpZiAoIWpzb24pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGxldCByID0gZmFsc2VcclxuICAgIGZvciAoY29uc3QgayBpbiBqc29uKSB7XHJcbiAgICAgICAgaWYgKGpzb25ba10gPT09IGtleVZhbHVlKSB7XHJcbiAgICAgICAgICAgIHIgPSB0cnVlXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJcclxufVxyXG5cclxuLyoqXHJcbiAqIGpzb27lr7nosaHovazmiJBwYXJhbeW9ouW8j+eahOWtl+espuS4su+8jOWmgnthOjEsYjoyLGM6WzMsNCw1XX09PlwiYT0xJmI9MiZjPTMmYz00JmM9NVwiXHJcbiAqIEBwYXJhbSAganNvbiDlvoXovazmjaLnmoRqc29u5pWw5o2u5rqQXHJcbiAqIEByZXR1cm5zIOi9rOaNoue7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvUGFyYW1zKGpzb246IEFueUtleVZhbHVlVHlwZSkge1xyXG4gICAgaWYgKCFqc29uKSByZXR1cm4gXCJcIjtcclxuICAgIGNvbnN0IGFyciA9IFtdXHJcbiAgICBsZXQgdGVtcCA9IFwiXCI7XHJcbiAgICBmb3IgKGNvbnN0IG0gaW4ganNvbikge1xyXG4gICAgICAgIGlmIChpc0FycmF5KGpzb25bbV0pKSB7XHJcbiAgICAgICAgICAgIHRlbXAgPSBqc29uW21dLmpvaW4oXCImXCIgKyBtICsgXCI9XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRlbXAgPSBqc29uW21dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcnIucHVzaChtICsgXCI9XCIgKyB0ZW1wKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnIuam9pbihcIiZcIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIZqc29u5a2X56ym5Liy6L2s5o2i5Li65a+56LGh77yM5aaC5p6c6L2s5o2i5aSx6LSl77yM5YiZ6L+U5ZuebnVsbFxyXG4gKiBAcGFyYW0ganNvbiBqc29u5a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9PYmplY3Q8VD4oanNvbjogc3RyaW5nKTogVCB8IG51bGwge1xyXG4gICAgaWYgKCFqc29uKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGxldCByZXN1bHQ6IFQgfCBudWxsID0gbnVsbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKGpzb24pXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59Il19