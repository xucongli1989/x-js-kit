"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasKey = hasKey;
exports.hasValue = hasValue;
exports.toParams = toParams;
exports.toObject = toObject;
exports.objToString = objToString;

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
 * 将json字符串转换为对象。如果转换失败，则返回null；如果已经是对象，则直接返回该对象。
 * @param json json字符串
 */


function toObject(json) {
  //如果已经是对象，则直接返回
  if ((0, _data.isObject)(json)) {
    return json;
  }

  if (!json) {
    return null;
  }

  var result = null;

  try {
    //去前后空白
    json = json.trim(); //花括号对象去前后空白

    json = json.replace(/^{\s+/, "{").replace(/\s+}$/, "}"); //数组对象去前后空白

    json = json.replace(/^\[\s+/, "[").replace(/\s+]$/, "]");
    result = JSON.parse(json);
  } catch (_unused) {//
  }

  return result;
}
/**
 * 将对象转换为字符串。如果已经是字符串，则直接返回该字符串。
 */


function objToString(obj) {
  if ((0, _data.isString)(obj)) {
    return obj;
  }

  try {
    return JSON.stringify(obj);
  } catch (_unused2) {
    return "";
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vanNvbi50cyJdLCJuYW1lcyI6WyJoYXNLZXkiLCJqc29uIiwia2V5TmFtZSIsIk9iamVjdCIsImtleXMiLCJpbmNsdWRlcyIsImhhc1ZhbHVlIiwia2V5VmFsdWUiLCJyIiwiayIsInRvUGFyYW1zIiwiYXJyIiwibSIsInZhbHVlIiwidGVtcCIsImpvaW4iLCJwdXNoIiwidG9PYmplY3QiLCJyZXN1bHQiLCJ0cmltIiwicmVwbGFjZSIsIkpTT04iLCJwYXJzZSIsIm9ialRvU3RyaW5nIiwib2JqIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLE1BQVQsQ0FBZ0JDLElBQWhCLEVBQXVDQyxPQUF2QyxFQUF3RDtBQUMzRCxNQUFJLENBQUNELElBQUwsRUFBVztBQUNQLFdBQU8sS0FBUDtBQUNIOztBQUNELFNBQU9FLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxJQUFaLEVBQWtCSSxRQUFsQixDQUEyQkgsT0FBM0IsQ0FBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTSSxRQUFULENBQWtCTCxJQUFsQixFQUF5Q00sUUFBekMsRUFBd0Q7QUFDM0QsTUFBSSxDQUFDTixJQUFMLEVBQVc7QUFDUCxXQUFPLEtBQVA7QUFDSDs7QUFDRCxNQUFJTyxDQUFDLEdBQUcsS0FBUjs7QUFDQSxPQUFLLElBQU1DLENBQVgsSUFBZ0JSLElBQWhCLEVBQXNCO0FBQ2xCLFFBQUlBLElBQUksQ0FBQ1EsQ0FBRCxDQUFKLEtBQVlGLFFBQWhCLEVBQTBCO0FBQ3RCQyxNQUFBQSxDQUFDLEdBQUcsSUFBSjtBQUNBO0FBQ0g7QUFDSjs7QUFDRCxTQUFPQSxDQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTRSxRQUFULENBQWtCVCxJQUFsQixFQUF5QztBQUM1QyxNQUFJLENBQUNBLElBQUwsRUFBVyxPQUFPLEVBQVA7QUFDWCxNQUFNVSxHQUFHLEdBQUcsRUFBWjs7QUFDQSxPQUFLLElBQU1DLENBQVgsSUFBZ0JYLElBQWhCLEVBQXNCO0FBQ2xCLFFBQU1ZLEtBQUssR0FBR1osSUFBSSxDQUFDVyxDQUFELENBQWxCOztBQUNBLFFBQUksNkJBQWtCQyxLQUFsQixLQUE2QixvQkFBU0EsS0FBVCxLQUFtQiw4QkFBbUJBLEtBQW5CLENBQXBELEVBQWdGO0FBQzVFO0FBQ0g7O0FBQ0QsUUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsUUFBSSxtQkFBUUQsS0FBUixDQUFKLEVBQW9CO0FBQ2hCQyxNQUFBQSxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsSUFBTixDQUFXLE1BQU1ILENBQU4sR0FBVSxHQUFyQixDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0hFLE1BQUFBLElBQUksR0FBR0QsS0FBUDtBQUNIOztBQUNERixJQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBU0osQ0FBQyxHQUFHLEdBQUosR0FBVUUsSUFBbkI7QUFDSDs7QUFDRCxTQUFPSCxHQUFHLENBQUNJLElBQUosQ0FBUyxHQUFULENBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTRSxRQUFULENBQXFCaEIsSUFBckIsRUFBMEM7QUFDN0M7QUFDQSxNQUFJLG9CQUFTQSxJQUFULENBQUosRUFBb0I7QUFDaEIsV0FBT0EsSUFBUDtBQUNIOztBQUVELE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1AsV0FBTyxJQUFQO0FBQ0g7O0FBRUQsTUFBSWlCLE1BQWdCLEdBQUcsSUFBdkI7O0FBQ0EsTUFBSTtBQUNBO0FBQ0FqQixJQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ2tCLElBQUwsRUFBUCxDQUZBLENBR0E7O0FBQ0FsQixJQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ21CLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLEdBQXRCLEVBQTJCQSxPQUEzQixDQUFtQyxPQUFuQyxFQUE0QyxHQUE1QyxDQUFQLENBSkEsQ0FLQTs7QUFDQW5CLElBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDbUIsT0FBTCxDQUFhLFFBQWIsRUFBdUIsR0FBdkIsRUFBNEJBLE9BQTVCLENBQW9DLE9BQXBDLEVBQTZDLEdBQTdDLENBQVA7QUFDQUYsSUFBQUEsTUFBTSxHQUFHRyxJQUFJLENBQUNDLEtBQUwsQ0FBV3JCLElBQVgsQ0FBVDtBQUNILEdBUkQsQ0FRRSxnQkFBTSxDQUNKO0FBQ0g7O0FBQ0QsU0FBT2lCLE1BQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0ssV0FBVCxDQUFxQkMsR0FBckIsRUFBK0I7QUFDbEMsTUFBSSxvQkFBU0EsR0FBVCxDQUFKLEVBQW1CO0FBQ2YsV0FBT0EsR0FBUDtBQUNIOztBQUVELE1BQUk7QUFDQSxXQUFPSCxJQUFJLENBQUNJLFNBQUwsQ0FBZUQsR0FBZixDQUFQO0FBQ0gsR0FGRCxDQUVFLGlCQUFNO0FBQ0osV0FBTyxFQUFQO0FBQ0g7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFueUtleVZhbHVlVHlwZSB9IGZyb20gXCIuLi9kZWNsYXJhdGlvbi9jb21tb25cIlxyXG5pbXBvcnQgeyBpc0FycmF5LCBpc051bGxPclVuZGVmaW5lZCwgaXNOdWxsT3JXaGl0ZVNwYWNlLCBpc09iamVjdCwgaXNTdHJpbmcgfSBmcm9tIFwiLi9kYXRhXCJcclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbljIXlkKvlkI1rZXlcclxuICogQHBhcmFtIGpzb24ganNvbuWvueixoVxyXG4gKiBAcGFyYW0ga2V5TmFtZSBrZXnlkI1cclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGFzS2V5KGpzb246IEFueUtleVZhbHVlVHlwZSwga2V5TmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWpzb24pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhqc29uKS5pbmNsdWRlcyhrZXlOYW1lKVxyXG59XHJcblxyXG4vKipcclxuICog5piv5ZCm5YyF5ZCr5YC8dmFsdWVcclxuICogQHBhcmFtICBqc29uIGpzb27lr7nosaFcclxuICogQHBhcmFtIGtleVZhbHVlIHZhbHVl5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc1ZhbHVlKGpzb246IEFueUtleVZhbHVlVHlwZSwga2V5VmFsdWU6IGFueSkge1xyXG4gICAgaWYgKCFqc29uKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBsZXQgciA9IGZhbHNlXHJcbiAgICBmb3IgKGNvbnN0IGsgaW4ganNvbikge1xyXG4gICAgICAgIGlmIChqc29uW2tdID09PSBrZXlWYWx1ZSkge1xyXG4gICAgICAgICAgICByID0gdHJ1ZVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBqc29u5a+56LGh6L2s5oiQcGFyYW3lvaLlvI/nmoTlrZfnrKbkuLLvvIzlpoJ7YToxLGI6MixjOlszLDQsNV19PT5cImE9MSZiPTImYz0zJmM9NCZjPTVcIlxyXG4gKiBAcGFyYW0gIGpzb24g5b6F6L2s5o2i55qEanNvbuaVsOaNrua6kFxyXG4gKiBAcmV0dXJucyDovazmjaLnu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1BhcmFtcyhqc29uOiBBbnlLZXlWYWx1ZVR5cGUpIHtcclxuICAgIGlmICghanNvbikgcmV0dXJuIFwiXCJcclxuICAgIGNvbnN0IGFyciA9IFtdXHJcbiAgICBmb3IgKGNvbnN0IG0gaW4ganNvbikge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0ganNvblttXVxyXG4gICAgICAgIGlmIChpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkgfHwgKGlzU3RyaW5nKHZhbHVlKSAmJiBpc051bGxPcldoaXRlU3BhY2UodmFsdWUpKSkge1xyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGVtcCA9IFwiXCJcclxuICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGVtcCA9IHZhbHVlLmpvaW4oXCImXCIgKyBtICsgXCI9XCIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGVtcCA9IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyci5wdXNoKG0gKyBcIj1cIiArIHRlbXApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyLmpvaW4oXCImXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIZqc29u5a2X56ym5Liy6L2s5o2i5Li65a+56LGh44CC5aaC5p6c6L2s5o2i5aSx6LSl77yM5YiZ6L+U5ZuebnVsbO+8m+WmguaenOW3sue7j+aYr+Wvueixoe+8jOWImeebtOaOpei/lOWbnuivpeWvueixoeOAglxyXG4gKiBAcGFyYW0ganNvbiBqc29u5a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9PYmplY3Q8VD4oanNvbjogYW55KTogVCB8IG51bGwge1xyXG4gICAgLy/lpoLmnpzlt7Lnu4/mmK/lr7nosaHvvIzliJnnm7TmjqXov5Tlm55cclxuICAgIGlmIChpc09iamVjdChqc29uKSkge1xyXG4gICAgICAgIHJldHVybiBqc29uXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFqc29uKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVzdWx0OiBUIHwgbnVsbCA9IG51bGxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy/ljrvliY3lkI7nqbrnmb1cclxuICAgICAgICBqc29uID0ganNvbi50cmltKClcclxuICAgICAgICAvL+iKseaLrOWPt+WvueixoeWOu+WJjeWQjuepuueZvVxyXG4gICAgICAgIGpzb24gPSBqc29uLnJlcGxhY2UoL157XFxzKy8sIFwie1wiKS5yZXBsYWNlKC9cXHMrfSQvLCBcIn1cIilcclxuICAgICAgICAvL+aVsOe7hOWvueixoeWOu+WJjeWQjuepuueZvVxyXG4gICAgICAgIGpzb24gPSBqc29uLnJlcGxhY2UoL15cXFtcXHMrLywgXCJbXCIpLnJlcGxhY2UoL1xccytdJC8sIFwiXVwiKVxyXG4gICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UoanNvbilcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIblr7nosaHovazmjaLkuLrlrZfnrKbkuLLjgILlpoLmnpzlt7Lnu4/mmK/lrZfnrKbkuLLvvIzliJnnm7TmjqXov5Tlm57or6XlrZfnrKbkuLLjgIJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvYmpUb1N0cmluZyhvYmo6IGFueSkge1xyXG4gICAgaWYgKGlzU3RyaW5nKG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxufVxyXG4iXX0=