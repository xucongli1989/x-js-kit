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

  for (var m in json) {
    var value = json[m];

    if ((0, _data.isNullOrUndefined)(value) || (0, _data.isString)(value) && (0, _data.isNullOrWhiteSpace)(value)) {
      continue;
    }

    var temp = "";

    if ((0, _data.isArray)(value)) {
      temp = value.join("&" + m + "=");
    } else {
      temp = value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vanNvbi50cyJdLCJuYW1lcyI6WyJoYXNLZXkiLCJqc29uIiwia2V5TmFtZSIsIk9iamVjdCIsImtleXMiLCJpbmNsdWRlcyIsImhhc1ZhbHVlIiwia2V5VmFsdWUiLCJyIiwiayIsInRvUGFyYW1zIiwiYXJyIiwibSIsInZhbHVlIiwidGVtcCIsImpvaW4iLCJwdXNoIiwidG9PYmplY3QiLCJyZXN1bHQiLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxNQUFULENBQWdCQyxJQUFoQixFQUF1Q0MsT0FBdkMsRUFBd0Q7QUFDM0QsTUFBSSxDQUFDRCxJQUFMLEVBQVc7QUFDUCxXQUFPLEtBQVA7QUFDSDs7QUFDRCxTQUFPRSxNQUFNLENBQUNDLElBQVAsQ0FBWUgsSUFBWixFQUFrQkksUUFBbEIsQ0FBMkJILE9BQTNCLENBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0ksUUFBVCxDQUFrQkwsSUFBbEIsRUFBeUNNLFFBQXpDLEVBQXdEO0FBQzNELE1BQUksQ0FBQ04sSUFBTCxFQUFXO0FBQ1AsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsTUFBSU8sQ0FBQyxHQUFHLEtBQVI7O0FBQ0EsT0FBSyxJQUFNQyxDQUFYLElBQWdCUixJQUFoQixFQUFzQjtBQUNsQixRQUFJQSxJQUFJLENBQUNRLENBQUQsQ0FBSixLQUFZRixRQUFoQixFQUEwQjtBQUN0QkMsTUFBQUEsQ0FBQyxHQUFHLElBQUo7QUFDQTtBQUNIO0FBQ0o7O0FBQ0QsU0FBT0EsQ0FBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0UsUUFBVCxDQUFrQlQsSUFBbEIsRUFBeUM7QUFDNUMsTUFBSSxDQUFDQSxJQUFMLEVBQVcsT0FBTyxFQUFQO0FBQ1gsTUFBTVUsR0FBRyxHQUFHLEVBQVo7O0FBQ0EsT0FBSyxJQUFNQyxDQUFYLElBQWdCWCxJQUFoQixFQUFzQjtBQUNsQixRQUFNWSxLQUFLLEdBQUdaLElBQUksQ0FBQ1csQ0FBRCxDQUFsQjs7QUFDQSxRQUFJLDZCQUFrQkMsS0FBbEIsS0FBNkIsb0JBQVNBLEtBQVQsS0FBbUIsOEJBQW1CQSxLQUFuQixDQUFwRCxFQUFnRjtBQUM1RTtBQUNIOztBQUNELFFBQUlDLElBQUksR0FBRyxFQUFYOztBQUNBLFFBQUksbUJBQVFELEtBQVIsQ0FBSixFQUFvQjtBQUNoQkMsTUFBQUEsSUFBSSxHQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBVyxNQUFNSCxDQUFOLEdBQVUsR0FBckIsQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNIRSxNQUFBQSxJQUFJLEdBQUdELEtBQVA7QUFDSDs7QUFDREYsSUFBQUEsR0FBRyxDQUFDSyxJQUFKLENBQVNKLENBQUMsR0FBRyxHQUFKLEdBQVVFLElBQW5CO0FBQ0g7O0FBQ0QsU0FBT0gsR0FBRyxDQUFDSSxJQUFKLENBQVMsR0FBVCxDQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0UsUUFBVCxDQUFxQmhCLElBQXJCLEVBQTZDO0FBQ2hELE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1AsV0FBTyxJQUFQO0FBQ0g7O0FBQ0QsTUFBSWlCLE1BQWdCLEdBQUcsSUFBdkI7O0FBQ0EsTUFBSTtBQUNBQSxJQUFBQSxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXbkIsSUFBWCxDQUFUO0FBQ0gsR0FGRCxDQUVFLGdCQUFNLENBQ0o7QUFDSDs7QUFDRCxTQUFPaUIsTUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW55S2V5VmFsdWVUeXBlIH0gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbW1vblwiXHJcbmltcG9ydCB7IGlzQXJyYXksIGlzTnVsbE9yVW5kZWZpbmVkLCBpc051bGxPcldoaXRlU3BhY2UsIGlzU3RyaW5nIH0gZnJvbSBcIi4vZGF0YVwiXHJcblxyXG4vKipcclxuICog5piv5ZCm5YyF5ZCr5ZCNa2V5XHJcbiAqIEBwYXJhbSBqc29uIGpzb27lr7nosaFcclxuICogQHBhcmFtIGtleU5hbWUga2V55ZCNXHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc0tleShqc29uOiBBbnlLZXlWYWx1ZVR5cGUsIGtleU5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKCFqc29uKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoanNvbikuaW5jbHVkZXMoa2V5TmFtZSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOaYr+WQpuWMheWQq+WAvHZhbHVlXHJcbiAqIEBwYXJhbSAganNvbiBqc29u5a+56LGhXHJcbiAqIEBwYXJhbSBrZXlWYWx1ZSB2YWx1ZeWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNWYWx1ZShqc29uOiBBbnlLZXlWYWx1ZVR5cGUsIGtleVZhbHVlOiBhbnkpIHtcclxuICAgIGlmICghanNvbikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgbGV0IHIgPSBmYWxzZVxyXG4gICAgZm9yIChjb25zdCBrIGluIGpzb24pIHtcclxuICAgICAgICBpZiAoanNvbltrXSA9PT0ga2V5VmFsdWUpIHtcclxuICAgICAgICAgICAgciA9IHRydWVcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gclxyXG59XHJcblxyXG4vKipcclxuICoganNvbuWvueixoei9rOaIkHBhcmFt5b2i5byP55qE5a2X56ym5Liy77yM5aaCe2E6MSxiOjIsYzpbMyw0LDVdfT0+XCJhPTEmYj0yJmM9MyZjPTQmYz01XCJcclxuICogQHBhcmFtICBqc29uIOW+hei9rOaNoueahGpzb27mlbDmja7mupBcclxuICogQHJldHVybnMg6L2s5o2i57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9QYXJhbXMoanNvbjogQW55S2V5VmFsdWVUeXBlKSB7XHJcbiAgICBpZiAoIWpzb24pIHJldHVybiBcIlwiXHJcbiAgICBjb25zdCBhcnIgPSBbXVxyXG4gICAgZm9yIChjb25zdCBtIGluIGpzb24pIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGpzb25bbV1cclxuICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpIHx8IChpc1N0cmluZyh2YWx1ZSkgJiYgaXNOdWxsT3JXaGl0ZVNwYWNlKHZhbHVlKSkpIHtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRlbXAgPSBcIlwiXHJcbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRlbXAgPSB2YWx1ZS5qb2luKFwiJlwiICsgbSArIFwiPVwiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRlbXAgPSB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBhcnIucHVzaChtICsgXCI9XCIgKyB0ZW1wKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyci5qb2luKFwiJlwiKVxyXG59XHJcblxyXG4vKipcclxuICog5bCGanNvbuWtl+espuS4sui9rOaNouS4uuWvueixoe+8jOWmguaenOi9rOaNouWksei0pe+8jOWImei/lOWbnm51bGxcclxuICogQHBhcmFtIGpzb24ganNvbuWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRvT2JqZWN0PFQ+KGpzb246IHN0cmluZyk6IFQgfCBudWxsIHtcclxuICAgIGlmICghanNvbikge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0OiBUIHwgbnVsbCA9IG51bGxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShqc29uKVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG4iXX0=