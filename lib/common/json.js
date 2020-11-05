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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vanNvbi50cyJdLCJuYW1lcyI6WyJoYXNLZXkiLCJqc29uIiwia2V5TmFtZSIsIk9iamVjdCIsImtleXMiLCJpbmNsdWRlcyIsImhhc1ZhbHVlIiwia2V5VmFsdWUiLCJyIiwiayIsInRvUGFyYW1zIiwiYXJyIiwidGVtcCIsIm0iLCJqb2luIiwicHVzaCIsInRvT2JqZWN0IiwicmVzdWx0IiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0EsTUFBVCxDQUFnQkMsSUFBaEIsRUFBdUNDLE9BQXZDLEVBQXdEO0FBQzNELE1BQUksQ0FBQ0QsSUFBTCxFQUFXO0FBQ1AsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsU0FBT0UsTUFBTSxDQUFDQyxJQUFQLENBQVlILElBQVosRUFBa0JJLFFBQWxCLENBQTJCSCxPQUEzQixDQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNJLFFBQVQsQ0FBa0JMLElBQWxCLEVBQXlDTSxRQUF6QyxFQUF3RDtBQUMzRCxNQUFJLENBQUNOLElBQUwsRUFBVztBQUNQLFdBQU8sS0FBUDtBQUNIOztBQUNELE1BQUlPLENBQUMsR0FBRyxLQUFSOztBQUNBLE9BQUssSUFBTUMsQ0FBWCxJQUFnQlIsSUFBaEIsRUFBc0I7QUFDbEIsUUFBSUEsSUFBSSxDQUFDUSxDQUFELENBQUosS0FBWUYsUUFBaEIsRUFBMEI7QUFDdEJDLE1BQUFBLENBQUMsR0FBRyxJQUFKO0FBQ0E7QUFDSDtBQUNKOztBQUNELFNBQU9BLENBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNFLFFBQVQsQ0FBa0JULElBQWxCLEVBQXlDO0FBQzVDLE1BQUksQ0FBQ0EsSUFBTCxFQUFXLE9BQU8sRUFBUDtBQUNYLE1BQU1VLEdBQUcsR0FBRyxFQUFaO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsT0FBSyxJQUFNQyxDQUFYLElBQWdCWixJQUFoQixFQUFzQjtBQUNsQixRQUFJLG1CQUFRQSxJQUFJLENBQUNZLENBQUQsQ0FBWixDQUFKLEVBQXNCO0FBQ2xCRCxNQUFBQSxJQUFJLEdBQUdYLElBQUksQ0FBQ1ksQ0FBRCxDQUFKLENBQVFDLElBQVIsQ0FBYSxNQUFNRCxDQUFOLEdBQVUsR0FBdkIsQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNIRCxNQUFBQSxJQUFJLEdBQUdYLElBQUksQ0FBQ1ksQ0FBRCxDQUFYO0FBQ0g7O0FBQ0RGLElBQUFBLEdBQUcsQ0FBQ0ksSUFBSixDQUFTRixDQUFDLEdBQUcsR0FBSixHQUFVRCxJQUFuQjtBQUNIOztBQUNELFNBQU9ELEdBQUcsQ0FBQ0csSUFBSixDQUFTLEdBQVQsQ0FBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNFLFFBQVQsQ0FBcUJmLElBQXJCLEVBQTZDO0FBQ2hELE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1AsV0FBTyxJQUFQO0FBQ0g7O0FBQ0QsTUFBSWdCLE1BQWdCLEdBQUcsSUFBdkI7O0FBQ0EsTUFBSTtBQUNBQSxJQUFBQSxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXbEIsSUFBWCxDQUFUO0FBQ0gsR0FGRCxDQUVFLGdCQUFNLENBQ0o7QUFDSDs7QUFDRCxTQUFPZ0IsTUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW55S2V5VmFsdWVUeXBlIH0gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbW1vblwiXHJcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi9kYXRhXCJcclxuXHJcbi8qKlxyXG4gICAqIOaYr+WQpuWMheWQq+WQjWtleVxyXG4gICAqIEBwYXJhbSBqc29uIGpzb27lr7nosaFcclxuICAgKiBAcGFyYW0ga2V5TmFtZSBrZXnlkI1cclxuICAgKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc0tleShqc29uOiBBbnlLZXlWYWx1ZVR5cGUsIGtleU5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKCFqc29uKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoanNvbikuaW5jbHVkZXMoa2V5TmFtZSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOaYr+WQpuWMheWQq+WAvHZhbHVlXHJcbiAqIEBwYXJhbSAganNvbiBqc29u5a+56LGhXHJcbiAqIEBwYXJhbSBrZXlWYWx1ZSB2YWx1ZeWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNWYWx1ZShqc29uOiBBbnlLZXlWYWx1ZVR5cGUsIGtleVZhbHVlOiBhbnkpIHtcclxuICAgIGlmICghanNvbikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgbGV0IHIgPSBmYWxzZVxyXG4gICAgZm9yIChjb25zdCBrIGluIGpzb24pIHtcclxuICAgICAgICBpZiAoanNvbltrXSA9PT0ga2V5VmFsdWUpIHtcclxuICAgICAgICAgICAgciA9IHRydWVcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gclxyXG59XHJcblxyXG4vKipcclxuICoganNvbuWvueixoei9rOaIkHBhcmFt5b2i5byP55qE5a2X56ym5Liy77yM5aaCe2E6MSxiOjIsYzpbMyw0LDVdfT0+XCJhPTEmYj0yJmM9MyZjPTQmYz01XCJcclxuICogQHBhcmFtICBqc29uIOW+hei9rOaNoueahGpzb27mlbDmja7mupBcclxuICogQHJldHVybnMg6L2s5o2i57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9QYXJhbXMoanNvbjogQW55S2V5VmFsdWVUeXBlKSB7XHJcbiAgICBpZiAoIWpzb24pIHJldHVybiBcIlwiO1xyXG4gICAgY29uc3QgYXJyID0gW11cclxuICAgIGxldCB0ZW1wID0gXCJcIjtcclxuICAgIGZvciAoY29uc3QgbSBpbiBqc29uKSB7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkoanNvblttXSkpIHtcclxuICAgICAgICAgICAgdGVtcCA9IGpzb25bbV0uam9pbihcIiZcIiArIG0gKyBcIj1cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGVtcCA9IGpzb25bbV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyci5wdXNoKG0gKyBcIj1cIiArIHRlbXApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyci5qb2luKFwiJlwiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWwhmpzb27lrZfnrKbkuLLovazmjaLkuLrlr7nosaHvvIzlpoLmnpzovazmjaLlpLHotKXvvIzliJnov5Tlm55udWxsXHJcbiAqIEBwYXJhbSBqc29uIGpzb27lrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b09iamVjdDxUPihqc29uOiBzdHJpbmcpOiBUIHwgbnVsbCB7XHJcbiAgICBpZiAoIWpzb24pIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdDogVCB8IG51bGwgPSBudWxsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UoanNvbilcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn0iXX0=