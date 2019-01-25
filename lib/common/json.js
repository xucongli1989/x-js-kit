"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toParams = exports.hasValue = exports.hasKey = void 0;

var data = _interopRequireWildcard(require("./data"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
   * 是否包含名key
   * @param json json对象
   * @param keyName key名
   * @returns 判断结果
   */
var hasKey = function hasKey(json, keyName) {
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


exports.hasKey = hasKey;

var hasValue = function hasValue(json, keyValue) {
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
};
/**
 * json对象转成param形式的字符串，如{a:1,b:2,c:[3,4,5]}=>"a=1&b=2&c=3&c=4&c=5"
 * @param  json 待转换的json数据源
 * @returns 转换结果
 */


exports.hasValue = hasValue;

var toParams = function toParams(json) {
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
};

exports.toParams = toParams;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vanNvbi50cyJdLCJuYW1lcyI6WyJoYXNLZXkiLCJqc29uIiwia2V5TmFtZSIsIk9iamVjdCIsImtleXMiLCJpbmNsdWRlcyIsImhhc1ZhbHVlIiwia2V5VmFsdWUiLCJyIiwiayIsInRvUGFyYW1zIiwiYXJyIiwidGVtcCIsIm0iLCJkYXRhIiwiaXNBcnJheSIsImpvaW4iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBTU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsSUFBRCxFQUF3QkMsT0FBeEIsRUFBNEM7QUFDOUQsTUFBSSxDQUFDRCxJQUFMLEVBQVc7QUFDUCxXQUFPLEtBQVA7QUFDSDs7QUFDRCxTQUFPRSxNQUFNLENBQUNDLElBQVAsQ0FBWUgsSUFBWixFQUFrQkksUUFBbEIsQ0FBMkJILE9BQTNCLENBQVA7QUFDSCxDQUxNO0FBT1A7Ozs7Ozs7Ozs7QUFNTyxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDTCxJQUFELEVBQXdCTSxRQUF4QixFQUEwQztBQUM5RCxNQUFJLENBQUNOLElBQUwsRUFBVztBQUNQLFdBQU8sS0FBUDtBQUNIOztBQUNELE1BQUlPLENBQUMsR0FBRyxLQUFSOztBQUNBLE9BQUssSUFBSUMsQ0FBVCxJQUFjUixJQUFkLEVBQW9CO0FBQ2hCLFFBQUlBLElBQUksQ0FBQ1EsQ0FBRCxDQUFKLEtBQVlGLFFBQWhCLEVBQTBCO0FBQ3RCQyxNQUFBQSxDQUFDLEdBQUcsSUFBSjtBQUNBO0FBQ0g7QUFDSjs7QUFDRCxTQUFPQSxDQUFQO0FBQ0gsQ0FaTTtBQWNQOzs7Ozs7Ozs7QUFLTyxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDVCxJQUFELEVBQTJCO0FBQy9DLE1BQUksQ0FBQ0EsSUFBTCxFQUFXLE9BQU8sRUFBUDtBQUNYLE1BQUlVLEdBQUcsR0FBRyxFQUFWO0FBQUEsTUFBY0MsSUFBSSxHQUFHLEVBQXJCOztBQUNBLE9BQUssSUFBSUMsQ0FBVCxJQUFjWixJQUFkLEVBQW9CO0FBQ2hCLFFBQUlhLElBQUksQ0FBQ0MsT0FBTCxDQUFhZCxJQUFJLENBQUNZLENBQUQsQ0FBakIsQ0FBSixFQUEyQjtBQUN2QkQsTUFBQUEsSUFBSSxHQUFHWCxJQUFJLENBQUNZLENBQUQsQ0FBSixDQUFRRyxJQUFSLENBQWEsTUFBTUgsQ0FBTixHQUFVLEdBQXZCLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSEQsTUFBQUEsSUFBSSxHQUFHWCxJQUFJLENBQUNZLENBQUQsQ0FBWDtBQUNIOztBQUNERixJQUFBQSxHQUFHLENBQUNNLElBQUosQ0FBU0osQ0FBQyxHQUFHLEdBQUosR0FBVUQsSUFBbkI7QUFDSDs7QUFDRCxTQUFPRCxHQUFHLENBQUNLLElBQUosQ0FBUyxHQUFULENBQVA7QUFDSCxDQVpNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW55S2V5VmFsdWVUeXBlIH0gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbW1vblwiXHJcbmltcG9ydCAqIGFzIGRhdGEgZnJvbSBcIi4vZGF0YVwiXHJcblxyXG4vKipcclxuICAgKiDmmK/lkKbljIXlkKvlkI1rZXlcclxuICAgKiBAcGFyYW0ganNvbiBqc29u5a+56LGhXHJcbiAgICogQHBhcmFtIGtleU5hbWUga2V55ZCNXHJcbiAgICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAgICovXHJcbmV4cG9ydCBjb25zdCBoYXNLZXkgPSAoanNvbjogQW55S2V5VmFsdWVUeXBlLCBrZXlOYW1lOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICghanNvbikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGpzb24pLmluY2x1ZGVzKGtleU5hbWUpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbljIXlkKvlgLx2YWx1ZVxyXG4gKiBAcGFyYW0gIGpzb24ganNvbuWvueixoVxyXG4gKiBAcGFyYW0ga2V5VmFsdWUgdmFsdWXlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaGFzVmFsdWUgPSAoanNvbjogQW55S2V5VmFsdWVUeXBlLCBrZXlWYWx1ZTogYW55KSA9PiB7XHJcbiAgICBpZiAoIWpzb24pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGxldCByID0gZmFsc2VcclxuICAgIGZvciAodmFyIGsgaW4ganNvbikge1xyXG4gICAgICAgIGlmIChqc29uW2tdID09PSBrZXlWYWx1ZSkge1xyXG4gICAgICAgICAgICByID0gdHJ1ZVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBqc29u5a+56LGh6L2s5oiQcGFyYW3lvaLlvI/nmoTlrZfnrKbkuLLvvIzlpoJ7YToxLGI6MixjOlszLDQsNV19PT5cImE9MSZiPTImYz0zJmM9NCZjPTVcIlxyXG4gKiBAcGFyYW0gIGpzb24g5b6F6L2s5o2i55qEanNvbuaVsOaNrua6kFxyXG4gKiBAcmV0dXJucyDovazmjaLnu5PmnpxcclxuICovXHJcbmV4cG9ydCBjb25zdCB0b1BhcmFtcyA9IChqc29uOiBBbnlLZXlWYWx1ZVR5cGUpID0+IHtcclxuICAgIGlmICghanNvbikgcmV0dXJuIFwiXCI7XHJcbiAgICBsZXQgYXJyID0gW10sIHRlbXAgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgbSBpbiBqc29uKSB7XHJcbiAgICAgICAgaWYgKGRhdGEuaXNBcnJheShqc29uW21dKSkge1xyXG4gICAgICAgICAgICB0ZW1wID0ganNvblttXS5qb2luKFwiJlwiICsgbSArIFwiPVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZW1wID0ganNvblttXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXJyLnB1c2gobSArIFwiPVwiICsgdGVtcCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyLmpvaW4oXCImXCIpO1xyXG59Il19