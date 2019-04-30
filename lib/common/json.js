"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasKey = hasKey;
exports.hasValue = hasValue;
exports.toParams = toParams;

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
  var arr = [],
      temp = "";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vanNvbi50cyJdLCJuYW1lcyI6WyJoYXNLZXkiLCJqc29uIiwia2V5TmFtZSIsIk9iamVjdCIsImtleXMiLCJpbmNsdWRlcyIsImhhc1ZhbHVlIiwia2V5VmFsdWUiLCJyIiwiayIsInRvUGFyYW1zIiwiYXJyIiwidGVtcCIsIm0iLCJqb2luIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBRUE7Ozs7OztBQU1PLFNBQVNBLE1BQVQsQ0FBZ0JDLElBQWhCLEVBQXVDQyxPQUF2QyxFQUF3RDtBQUMzRCxNQUFJLENBQUNELElBQUwsRUFBVztBQUNQLFdBQU8sS0FBUDtBQUNIOztBQUNELFNBQU9FLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxJQUFaLEVBQWtCSSxRQUFsQixDQUEyQkgsT0FBM0IsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7O0FBTU8sU0FBU0ksUUFBVCxDQUFrQkwsSUFBbEIsRUFBeUNNLFFBQXpDLEVBQXdEO0FBQzNELE1BQUksQ0FBQ04sSUFBTCxFQUFXO0FBQ1AsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsTUFBSU8sQ0FBQyxHQUFHLEtBQVI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFULElBQWNSLElBQWQsRUFBb0I7QUFDaEIsUUFBSUEsSUFBSSxDQUFDUSxDQUFELENBQUosS0FBWUYsUUFBaEIsRUFBMEI7QUFDdEJDLE1BQUFBLENBQUMsR0FBRyxJQUFKO0FBQ0E7QUFDSDtBQUNKOztBQUNELFNBQU9BLENBQVA7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU0UsUUFBVCxDQUFrQlQsSUFBbEIsRUFBeUM7QUFDNUMsTUFBSSxDQUFDQSxJQUFMLEVBQVcsT0FBTyxFQUFQO0FBQ1gsTUFBSVUsR0FBRyxHQUFHLEVBQVY7QUFBQSxNQUFjQyxJQUFJLEdBQUcsRUFBckI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFULElBQWNaLElBQWQsRUFBb0I7QUFDaEIsUUFBSSxtQkFBUUEsSUFBSSxDQUFDWSxDQUFELENBQVosQ0FBSixFQUFzQjtBQUNsQkQsTUFBQUEsSUFBSSxHQUFHWCxJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRQyxJQUFSLENBQWEsTUFBTUQsQ0FBTixHQUFVLEdBQXZCLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSEQsTUFBQUEsSUFBSSxHQUFHWCxJQUFJLENBQUNZLENBQUQsQ0FBWDtBQUNIOztBQUNERixJQUFBQSxHQUFHLENBQUNJLElBQUosQ0FBU0YsQ0FBQyxHQUFHLEdBQUosR0FBVUQsSUFBbkI7QUFDSDs7QUFDRCxTQUFPRCxHQUFHLENBQUNHLElBQUosQ0FBUyxHQUFULENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFueUtleVZhbHVlVHlwZSB9IGZyb20gXCIuLi9kZWNsYXJhdGlvbi9jb21tb25cIlxyXG5pbXBvcnQge2lzQXJyYXl9IGZyb20gXCIuL2RhdGFcIlxyXG5cclxuLyoqXHJcbiAgICog5piv5ZCm5YyF5ZCr5ZCNa2V5XHJcbiAgICogQHBhcmFtIGpzb24ganNvbuWvueixoVxyXG4gICAqIEBwYXJhbSBrZXlOYW1lIGtleeWQjVxyXG4gICAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gICAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGFzS2V5KGpzb246IEFueUtleVZhbHVlVHlwZSwga2V5TmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWpzb24pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhqc29uKS5pbmNsdWRlcyhrZXlOYW1lKVxyXG59XHJcblxyXG4vKipcclxuICog5piv5ZCm5YyF5ZCr5YC8dmFsdWVcclxuICogQHBhcmFtICBqc29uIGpzb27lr7nosaFcclxuICogQHBhcmFtIGtleVZhbHVlIHZhbHVl5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc1ZhbHVlKGpzb246IEFueUtleVZhbHVlVHlwZSwga2V5VmFsdWU6IGFueSkge1xyXG4gICAgaWYgKCFqc29uKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBsZXQgciA9IGZhbHNlXHJcbiAgICBmb3IgKHZhciBrIGluIGpzb24pIHtcclxuICAgICAgICBpZiAoanNvbltrXSA9PT0ga2V5VmFsdWUpIHtcclxuICAgICAgICAgICAgciA9IHRydWVcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gclxyXG59XHJcblxyXG4vKipcclxuICoganNvbuWvueixoei9rOaIkHBhcmFt5b2i5byP55qE5a2X56ym5Liy77yM5aaCe2E6MSxiOjIsYzpbMyw0LDVdfT0+XCJhPTEmYj0yJmM9MyZjPTQmYz01XCJcclxuICogQHBhcmFtICBqc29uIOW+hei9rOaNoueahGpzb27mlbDmja7mupBcclxuICogQHJldHVybnMg6L2s5o2i57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9QYXJhbXMoanNvbjogQW55S2V5VmFsdWVUeXBlKSB7XHJcbiAgICBpZiAoIWpzb24pIHJldHVybiBcIlwiO1xyXG4gICAgbGV0IGFyciA9IFtdLCB0ZW1wID0gXCJcIjtcclxuICAgIGZvciAobGV0IG0gaW4ganNvbikge1xyXG4gICAgICAgIGlmIChpc0FycmF5KGpzb25bbV0pKSB7XHJcbiAgICAgICAgICAgIHRlbXAgPSBqc29uW21dLmpvaW4oXCImXCIgKyBtICsgXCI9XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRlbXAgPSBqc29uW21dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcnIucHVzaChtICsgXCI9XCIgKyB0ZW1wKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnIuam9pbihcIiZcIik7XHJcbn0iXX0=