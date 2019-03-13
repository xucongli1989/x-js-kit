"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasKey = hasKey;
exports.hasValue = hasValue;
exports.toParams = toParams;

var data = _interopRequireWildcard(require("./data"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
    if (data.isArray(json[m])) {
      temp = json[m].join("&" + m + "=");
    } else {
      temp = json[m];
    }

    arr.push(m + "=" + temp);
  }

  return arr.join("&");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vanNvbi50cyJdLCJuYW1lcyI6WyJoYXNLZXkiLCJqc29uIiwia2V5TmFtZSIsIk9iamVjdCIsImtleXMiLCJpbmNsdWRlcyIsImhhc1ZhbHVlIiwia2V5VmFsdWUiLCJyIiwiayIsInRvUGFyYW1zIiwiYXJyIiwidGVtcCIsIm0iLCJkYXRhIiwiaXNBcnJheSIsImpvaW4iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFNTyxTQUFTQSxNQUFULENBQWdCQyxJQUFoQixFQUF1Q0MsT0FBdkMsRUFBd0Q7QUFDM0QsTUFBSSxDQUFDRCxJQUFMLEVBQVc7QUFDUCxXQUFPLEtBQVA7QUFDSDs7QUFDRCxTQUFPRSxNQUFNLENBQUNDLElBQVAsQ0FBWUgsSUFBWixFQUFrQkksUUFBbEIsQ0FBMkJILE9BQTNCLENBQVA7QUFDSDtBQUVEOzs7Ozs7OztBQU1PLFNBQVNJLFFBQVQsQ0FBa0JMLElBQWxCLEVBQXlDTSxRQUF6QyxFQUF3RDtBQUMzRCxNQUFJLENBQUNOLElBQUwsRUFBVztBQUNQLFdBQU8sS0FBUDtBQUNIOztBQUNELE1BQUlPLENBQUMsR0FBRyxLQUFSOztBQUNBLE9BQUssSUFBSUMsQ0FBVCxJQUFjUixJQUFkLEVBQW9CO0FBQ2hCLFFBQUlBLElBQUksQ0FBQ1EsQ0FBRCxDQUFKLEtBQVlGLFFBQWhCLEVBQTBCO0FBQ3RCQyxNQUFBQSxDQUFDLEdBQUcsSUFBSjtBQUNBO0FBQ0g7QUFDSjs7QUFDRCxTQUFPQSxDQUFQO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNFLFFBQVQsQ0FBa0JULElBQWxCLEVBQXlDO0FBQzVDLE1BQUksQ0FBQ0EsSUFBTCxFQUFXLE9BQU8sRUFBUDtBQUNYLE1BQUlVLEdBQUcsR0FBRyxFQUFWO0FBQUEsTUFBY0MsSUFBSSxHQUFHLEVBQXJCOztBQUNBLE9BQUssSUFBSUMsQ0FBVCxJQUFjWixJQUFkLEVBQW9CO0FBQ2hCLFFBQUlhLElBQUksQ0FBQ0MsT0FBTCxDQUFhZCxJQUFJLENBQUNZLENBQUQsQ0FBakIsQ0FBSixFQUEyQjtBQUN2QkQsTUFBQUEsSUFBSSxHQUFHWCxJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRRyxJQUFSLENBQWEsTUFBTUgsQ0FBTixHQUFVLEdBQXZCLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSEQsTUFBQUEsSUFBSSxHQUFHWCxJQUFJLENBQUNZLENBQUQsQ0FBWDtBQUNIOztBQUNERixJQUFBQSxHQUFHLENBQUNNLElBQUosQ0FBU0osQ0FBQyxHQUFHLEdBQUosR0FBVUQsSUFBbkI7QUFDSDs7QUFDRCxTQUFPRCxHQUFHLENBQUNLLElBQUosQ0FBUyxHQUFULENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFueUtleVZhbHVlVHlwZSB9IGZyb20gXCIuLi9kZWNsYXJhdGlvbi9jb21tb25cIlxyXG5pbXBvcnQgKiBhcyBkYXRhIGZyb20gXCIuL2RhdGFcIlxyXG5cclxuLyoqXHJcbiAgICog5piv5ZCm5YyF5ZCr5ZCNa2V5XHJcbiAgICogQHBhcmFtIGpzb24ganNvbuWvueixoVxyXG4gICAqIEBwYXJhbSBrZXlOYW1lIGtleeWQjVxyXG4gICAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gICAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGFzS2V5KGpzb246IEFueUtleVZhbHVlVHlwZSwga2V5TmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWpzb24pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhqc29uKS5pbmNsdWRlcyhrZXlOYW1lKVxyXG59XHJcblxyXG4vKipcclxuICog5piv5ZCm5YyF5ZCr5YC8dmFsdWVcclxuICogQHBhcmFtICBqc29uIGpzb27lr7nosaFcclxuICogQHBhcmFtIGtleVZhbHVlIHZhbHVl5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc1ZhbHVlKGpzb246IEFueUtleVZhbHVlVHlwZSwga2V5VmFsdWU6IGFueSkge1xyXG4gICAgaWYgKCFqc29uKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBsZXQgciA9IGZhbHNlXHJcbiAgICBmb3IgKHZhciBrIGluIGpzb24pIHtcclxuICAgICAgICBpZiAoanNvbltrXSA9PT0ga2V5VmFsdWUpIHtcclxuICAgICAgICAgICAgciA9IHRydWVcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gclxyXG59XHJcblxyXG4vKipcclxuICoganNvbuWvueixoei9rOaIkHBhcmFt5b2i5byP55qE5a2X56ym5Liy77yM5aaCe2E6MSxiOjIsYzpbMyw0LDVdfT0+XCJhPTEmYj0yJmM9MyZjPTQmYz01XCJcclxuICogQHBhcmFtICBqc29uIOW+hei9rOaNoueahGpzb27mlbDmja7mupBcclxuICogQHJldHVybnMg6L2s5o2i57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9QYXJhbXMoanNvbjogQW55S2V5VmFsdWVUeXBlKSB7XHJcbiAgICBpZiAoIWpzb24pIHJldHVybiBcIlwiO1xyXG4gICAgbGV0IGFyciA9IFtdLCB0ZW1wID0gXCJcIjtcclxuICAgIGZvciAobGV0IG0gaW4ganNvbikge1xyXG4gICAgICAgIGlmIChkYXRhLmlzQXJyYXkoanNvblttXSkpIHtcclxuICAgICAgICAgICAgdGVtcCA9IGpzb25bbV0uam9pbihcIiZcIiArIG0gKyBcIj1cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGVtcCA9IGpzb25bbV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyci5wdXNoKG0gKyBcIj1cIiArIHRlbXApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyci5qb2luKFwiJlwiKTtcclxufSJdfQ==