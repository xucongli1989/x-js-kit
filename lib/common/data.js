"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNull = isNull;
exports.isArray = isArray;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isNullOrEmpty = isNullOrEmpty;
exports.isNullOrWhiteSpace = isNullOrWhiteSpace;
exports.isFunction = isFunction;
exports.isString = isString;
exports.isBoolean = isBoolean;
exports.isUndefined = isUndefined;
exports.isUpper = isUpper;
exports.isLower = isLower;
exports.isDate = isDate;
exports.isError = isError;
exports.isIn = isIn;
exports.isInIgnoreCase = isInIgnoreCase;

var _string = require("./string");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * 判断obj是否为null
 */
function isNull(obj) {
  return obj === null;
}
/**
 * 判断obj是否为数组
 */


function isArray(obj) {
  if (!obj) {
    return false;
  }

  return Object.prototype.toString.call(obj) === "[object Array]";
}
/**
 * 判断val是否为数字
 * @param val 要判断的值
 * @returns  判断结果
 */


function isNumber(val) {
  return (typeof val === "number" || typeof val === "string") && val !== "" && !isNaN(val);
}
/**
 * 判断指定值是否为一个对象
 * @param  val 要判断的值
 * @returns  判断结果
 */


function isObject(val) {
  return !!(val && _typeof(val) === "object");
}
/**
 * 判断指定值为null或undefined或""
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isNullOrEmpty(val) {
  return isUndefined(val) || isNull(val) || val === "";
}
/**
 * 判断指定值为null或undefined或""或空白字符串
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isNullOrWhiteSpace(val) {
  return isUndefined(val) || isNull(val) || (0, _string.trim)(val) === "";
}
/**
 * 判断指定值是否为function
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isFunction(val) {
  return !!(val && Object.prototype.toString.call(val) == "[object Function]");
}
/**
 * 判断指定值是否为String
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isString(val) {
  return typeof val == "string" || val instanceof String;
}
/**
 * 判断指定字符串是否为"true"或"false"
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isBoolean(val) {
  return /^true|false$/i.test(val);
}
/**
 * 判断指定值是否为undefined
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isUndefined(val) {
  return val === undefined || typeof val === "undefined";
}
/**
 * 指定值是否全部为大写
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isUpper(val) {
  return !!(val && val.toUpperCase() === val);
}
/**
 * 指定值是否全部为小写
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isLower(val) {
  return !!(val && val.toLowerCase() === val);
}
/**
 * 指定值是否为Date对象
 * @param val 要判断的值
 * @returns 判断结果
 */


function isDate(val) {
  return !!(val && Object.prototype.toString.call(val) === "[object Date]" && !isNaN(val));
}
/**
 * 指定值是否为Error对象
 * @param val 要判断的值
 * @returns 判断结果
 */


function isError(val) {
  return !!(val && val instanceof Error);
}
/**
 * 判断value值在后面的参数中是否存在
 * @param value 要判断的值
 * @param args 参数列表
 */


function isIn(value) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (!args || !args.length) {
    return false;
  }

  return args.includes(value);
}
/**
 * 判断字符串value值在后面的参数中是否存在（忽略大小写）
 * @param value 要判断的值
 * @param args 参数列表
 */


function isInIgnoreCase(value) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  if (!args || !args.length) {
    return false;
  }

  if (!isString(value)) {
    return args.includes(value);
  }

  return !!args.find(function (k) {
    return (k || "").toUpperCase() === value.toUpperCase();
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vZGF0YS50cyJdLCJuYW1lcyI6WyJpc051bGwiLCJvYmoiLCJpc0FycmF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiaXNOdW1iZXIiLCJ2YWwiLCJpc05hTiIsImlzT2JqZWN0IiwiaXNOdWxsT3JFbXB0eSIsImlzVW5kZWZpbmVkIiwiaXNOdWxsT3JXaGl0ZVNwYWNlIiwiaXNGdW5jdGlvbiIsImlzU3RyaW5nIiwiU3RyaW5nIiwiaXNCb29sZWFuIiwidGVzdCIsInVuZGVmaW5lZCIsImlzVXBwZXIiLCJ0b1VwcGVyQ2FzZSIsImlzTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImlzRGF0ZSIsImlzRXJyb3IiLCJFcnJvciIsImlzSW4iLCJ2YWx1ZSIsImFyZ3MiLCJsZW5ndGgiLCJpbmNsdWRlcyIsImlzSW5JZ25vcmVDYXNlIiwiZmluZCIsImsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQTBCO0FBQzdCLFNBQU9BLEdBQUcsS0FBSyxJQUFmO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNDLE9BQVQsQ0FBaUJELEdBQWpCLEVBQTJCO0FBQzlCLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsU0FBT0UsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JMLEdBQS9CLE1BQXdDLGdCQUEvQztBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU00sUUFBVCxDQUFrQkMsR0FBbEIsRUFBNEI7QUFDL0IsU0FBTyxDQUFDLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCLE9BQU9BLEdBQVAsS0FBZSxRQUEzQyxLQUF3REEsR0FBRyxLQUFLLEVBQWhFLElBQXNFLENBQUNDLEtBQUssQ0FB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Y0gsS0FBZCxDQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTSSxjQUFULENBQXdCSixLQUF4QixFQUFtRTtBQUFBLHFDQUF6QkMsSUFBeUI7QUFBekJBLElBQUFBLElBQXlCO0FBQUE7O0FBQ3RFLE1BQUksQ0FBQ0EsSUFBRCxJQUFTLENBQUNBLElBQUksQ0FBQ0MsTUFBbkIsRUFBMkI7QUFDdkIsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDZixRQUFRLENBQUNhLEtBQUQsQ0FBYixFQUFzQjtBQUNsQixXQUFPQyxJQUFJLENBQUNFLFFBQUwsQ0FBY0gsS0FBZCxDQUFQO0FBQ0g7O0FBQ0QsU0FBTyxDQUFDLENBQUNDLElBQUksQ0FBQ0ksSUFBTCxDQUFVLFVBQUNDLENBQUQ7QUFBQSxXQUFPLENBQUNBLENBQUMsSUFBSSxFQUFOLEVBQVViLFdBQVYsT0FBNEJPLEtBQUssQ0FBQ1AsV0FBTixFQUFuQztBQUFBLEdBQVYsQ0FBVDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJpbSB9IGZyb20gXCIuL3N0cmluZ1wiXHJcblxyXG4vKipcclxuICog5Yik5patb2Jq5piv5ZCm5Li6bnVsbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbChvYmo6IGFueSkge1xyXG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbFxyXG59XHJcblxyXG4vKipcclxuICog5Yik5patb2Jq5piv5ZCm5Li65pWw57uEXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheShvYmo6IGFueSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq12YWzmmK/lkKbkuLrmlbDlrZdcclxuICogQHBhcmFtIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMgIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbDogYW55KSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIikgJiYgdmFsICE9PSBcIlwiICYmICFpc05hTih2YWwgYXMgYW55KVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5oyH5a6a5YC85piv5ZCm5Li65LiA5Liq5a+56LGhXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyAg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsOiBhbnkpIHtcclxuICAgIHJldHVybiAhISh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaMh+WumuWAvOS4um51bGzmiJZ1bmRlZmluZWTmiJZcIlwiXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bGxPckVtcHR5KHZhbDogYW55KSB7XHJcbiAgICByZXR1cm4gaXNVbmRlZmluZWQodmFsKSB8fCBpc051bGwodmFsKSB8fCB2YWwgPT09IFwiXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaMh+WumuWAvOS4um51bGzmiJZ1bmRlZmluZWTmiJZcIlwi5oiW56m655m95a2X56ym5LiyXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bGxPcldoaXRlU3BhY2UodmFsOiBhbnkpIHtcclxuICAgIHJldHVybiBpc1VuZGVmaW5lZCh2YWwpIHx8IGlzTnVsbCh2YWwpIHx8IHRyaW0odmFsKSA9PT0gXCJcIlxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5oyH5a6a5YC85piv5ZCm5Li6ZnVuY3Rpb25cclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsOiBhbnkpIHtcclxuICAgIHJldHVybiAhISh2YWwgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5oyH5a6a5YC85piv5ZCm5Li6U3RyaW5nXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyh2YWw6IGFueSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT0gXCJzdHJpbmdcIiB8fCB2YWwgaW5zdGFuY2VvZiBTdHJpbmdcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaMh+WumuWtl+espuS4suaYr+WQpuS4ulwidHJ1ZVwi5oiWXCJmYWxzZVwiXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4odmFsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAvXnRydWV8ZmFsc2UkL2kudGVzdCh2YWwpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mjIflrprlgLzmmK/lkKbkuLp1bmRlZmluZWRcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbDogYW55KSB7XHJcbiAgICByZXR1cm4gdmFsID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHZhbCA9PT0gXCJ1bmRlZmluZWRcIlxyXG59XHJcblxyXG4vKipcclxuICog5oyH5a6a5YC85piv5ZCm5YWo6YOo5Li65aSn5YaZXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VwcGVyKHZhbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gISEodmFsICYmIHZhbC50b1VwcGVyQ2FzZSgpID09PSB2YWwpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjIflrprlgLzmmK/lkKblhajpg6jkuLrlsI/lhplcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTG93ZXIodmFsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAhISh2YWwgJiYgdmFsLnRvTG93ZXJDYXNlKCkgPT09IHZhbClcclxufVxyXG5cclxuLyoqXHJcbiAqIOaMh+WumuWAvOaYr+WQpuS4ukRhdGXlr7nosaFcclxuICogQHBhcmFtIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKHZhbDogYW55KSB7XHJcbiAgICByZXR1cm4gISEodmFsICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSBcIltvYmplY3QgRGF0ZV1cIiAmJiAhaXNOYU4odmFsKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOaMh+WumuWAvOaYr+WQpuS4ukVycm9y5a+56LGhXHJcbiAqIEBwYXJhbSB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRXJyb3IodmFsOiBhbnkpIHtcclxuICAgIHJldHVybiAhISh2YWwgJiYgdmFsIGluc3RhbmNlb2YgRXJyb3IpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq12YWx1ZeWAvOWcqOWQjumdoueahOWPguaVsOS4reaYr+WQpuWtmOWcqFxyXG4gKiBAcGFyYW0gdmFsdWUg6KaB5Yik5pat55qE5YC8XHJcbiAqIEBwYXJhbSBhcmdzIOWPguaVsOWIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW48VD4odmFsdWU6IFQsIC4uLmFyZ3M6IFRbXSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFhcmdzIHx8ICFhcmdzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyZ3MuaW5jbHVkZXModmFsdWUpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3lrZfnrKbkuLJ2YWx1ZeWAvOWcqOWQjumdoueahOWPguaVsOS4reaYr+WQpuWtmOWcqO+8iOW/veeVpeWkp+Wwj+WGme+8iVxyXG4gKiBAcGFyYW0gdmFsdWUg6KaB5Yik5pat55qE5YC8XHJcbiAqIEBwYXJhbSBhcmdzIOWPguaVsOWIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5JZ25vcmVDYXNlKHZhbHVlOiBzdHJpbmcsIC4uLmFyZ3M6IHN0cmluZ1tdKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWFyZ3MgfHwgIWFyZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiBhcmdzLmluY2x1ZGVzKHZhbHVlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICEhYXJncy5maW5kKChrKSA9PiAoayB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpID09PSB2YWx1ZS50b1VwcGVyQ2FzZSgpKVxyXG59XHJcbiJdfQ==