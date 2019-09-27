"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasKey = hasKey;
exports.hasValue = hasValue;
exports.toParams = toParams;

var _data = require("./data");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vanNvbi50cyJdLCJuYW1lcyI6WyJoYXNLZXkiLCJqc29uIiwia2V5TmFtZSIsIk9iamVjdCIsImtleXMiLCJpbmNsdWRlcyIsImhhc1ZhbHVlIiwia2V5VmFsdWUiLCJyIiwiayIsInRvUGFyYW1zIiwiYXJyIiwidGVtcCIsIm0iLCJqb2luIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBUU8sU0FBU0EsTUFBVCxDQUFnQkMsSUFBaEIsRUFBdUNDLE9BQXZDLEVBQXdEO0FBQzNELE1BQUksQ0FBQ0QsSUFBTCxFQUFXO0FBQ1AsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsU0FBT0UsTUFBTSxDQUFDQyxJQUFQLENBQVlILElBQVosRUFBa0JJLFFBQWxCLENBQTJCSCxPQUEzQixDQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7QUFNTyxTQUFTSSxRQUFULENBQWtCTCxJQUFsQixFQUF5Q00sUUFBekMsRUFBd0Q7QUFDM0QsTUFBSSxDQUFDTixJQUFMLEVBQVc7QUFDUCxXQUFPLEtBQVA7QUFDSDs7QUFDRCxNQUFJTyxDQUFDLEdBQUcsS0FBUjs7QUFDQSxPQUFLLElBQUlDLENBQVQsSUFBY1IsSUFBZCxFQUFvQjtBQUNoQixRQUFJQSxJQUFJLENBQUNRLENBQUQsQ0FBSixLQUFZRixRQUFoQixFQUEwQjtBQUN0QkMsTUFBQUEsQ0FBQyxHQUFHLElBQUo7QUFDQTtBQUNIO0FBQ0o7O0FBQ0QsU0FBT0EsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTRSxRQUFULENBQWtCVCxJQUFsQixFQUF5QztBQUM1QyxNQUFJLENBQUNBLElBQUwsRUFBVyxPQUFPLEVBQVA7QUFDWCxNQUFJVSxHQUFHLEdBQUcsRUFBVjtBQUFBLE1BQWNDLElBQUksR0FBRyxFQUFyQjs7QUFDQSxPQUFLLElBQUlDLENBQVQsSUFBY1osSUFBZCxFQUFvQjtBQUNoQixRQUFJLG1CQUFRQSxJQUFJLENBQUNZLENBQUQsQ0FBWixDQUFKLEVBQXNCO0FBQ2xCRCxNQUFBQSxJQUFJLEdBQUdYLElBQUksQ0FBQ1ksQ0FBRCxDQUFKLENBQVFDLElBQVIsQ0FBYSxNQUFNRCxDQUFOLEdBQVUsR0FBdkIsQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNIRCxNQUFBQSxJQUFJLEdBQUdYLElBQUksQ0FBQ1ksQ0FBRCxDQUFYO0FBQ0g7O0FBQ0RGLElBQUFBLEdBQUcsQ0FBQ0ksSUFBSixDQUFTRixDQUFDLEdBQUcsR0FBSixHQUFVRCxJQUFuQjtBQUNIOztBQUNELFNBQU9ELEdBQUcsQ0FBQ0csSUFBSixDQUFTLEdBQVQsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW55S2V5VmFsdWVUeXBlIH0gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbW1vblwiXHJcbmltcG9ydCB7aXNBcnJheX0gZnJvbSBcIi4vZGF0YVwiXHJcblxyXG4vKipcclxuICAgKiDmmK/lkKbljIXlkKvlkI1rZXlcclxuICAgKiBAcGFyYW0ganNvbiBqc29u5a+56LGhXHJcbiAgICogQHBhcmFtIGtleU5hbWUga2V55ZCNXHJcbiAgICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAgICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNLZXkoanNvbjogQW55S2V5VmFsdWVUeXBlLCBrZXlOYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmICghanNvbikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGpzb24pLmluY2x1ZGVzKGtleU5hbWUpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbljIXlkKvlgLx2YWx1ZVxyXG4gKiBAcGFyYW0gIGpzb24ganNvbuWvueixoVxyXG4gKiBAcGFyYW0ga2V5VmFsdWUgdmFsdWXlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGFzVmFsdWUoanNvbjogQW55S2V5VmFsdWVUeXBlLCBrZXlWYWx1ZTogYW55KSB7XHJcbiAgICBpZiAoIWpzb24pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGxldCByID0gZmFsc2VcclxuICAgIGZvciAodmFyIGsgaW4ganNvbikge1xyXG4gICAgICAgIGlmIChqc29uW2tdID09PSBrZXlWYWx1ZSkge1xyXG4gICAgICAgICAgICByID0gdHJ1ZVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBqc29u5a+56LGh6L2s5oiQcGFyYW3lvaLlvI/nmoTlrZfnrKbkuLLvvIzlpoJ7YToxLGI6MixjOlszLDQsNV19PT5cImE9MSZiPTImYz0zJmM9NCZjPTVcIlxyXG4gKiBAcGFyYW0gIGpzb24g5b6F6L2s5o2i55qEanNvbuaVsOaNrua6kFxyXG4gKiBAcmV0dXJucyDovazmjaLnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1BhcmFtcyhqc29uOiBBbnlLZXlWYWx1ZVR5cGUpIHtcclxuICAgIGlmICghanNvbikgcmV0dXJuIFwiXCI7XHJcbiAgICBsZXQgYXJyID0gW10sIHRlbXAgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgbSBpbiBqc29uKSB7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkoanNvblttXSkpIHtcclxuICAgICAgICAgICAgdGVtcCA9IGpzb25bbV0uam9pbihcIiZcIiArIG0gKyBcIj1cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGVtcCA9IGpzb25bbV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyci5wdXNoKG0gKyBcIj1cIiArIHRlbXApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyci5qb2luKFwiJlwiKTtcclxufSJdfQ==