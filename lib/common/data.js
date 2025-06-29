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
exports.isNullOrUndefined = isNullOrUndefined;
exports.isUpper = isUpper;
exports.isLower = isLower;
exports.isDate = isDate;
exports.isError = isError;
exports.isIn = isIn;
exports.isInIgnoreCase = isInIgnoreCase;
exports.isURL = isURL;

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
 * 判断指定值是否为 null 或 undefined
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isNullOrUndefined(val) {
  return isNull(val) || isUndefined(val);
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
/**
 * 判断一个字符串是否为 URL
 */


function isURL(value) {
  if (!value) {
    return false;
  }

  if (/\s/.test(value)) {
    return false;
  }

  try {
    // eslint-disable-next-line no-new
    new URL(value);
    return true;
  } catch (_unused) {
    return false;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vZGF0YS50cyJdLCJuYW1lcyI6WyJpc051bGwiLCJvYmoiLCJpc0FycmF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiaXNOdW1iZXIiLCJ2YWwiLCJpc05hTiIsImlzT2JqZWN0IiwiaXNOdWxsT3JFbXB0eSIsImlzVW5kZWZpbmVkIiwiaXNOdWxsT3JXaGl0ZVNwYWNlIiwiaXNGdW5jdGlvbiIsImlzU3RyaW5nIiwiU3RyaW5nIiwiaXNCb29sZWFuIiwidGVzdCIsInVuZGVmaW5lZCIsImlzTnVsbE9yVW5kZWZpbmVkIiwiaXNVcHBlciIsInRvVXBwZXJDYXNlIiwiaXNMb3dlciIsInRvTG93ZXJDYXNlIiwiaXNEYXRlIiwiaXNFcnJvciIsIkVycm9yIiwiaXNJbiIsInZhbHVlIiwiYXJncyIsImxlbmd0aCIsImluY2x1ZGVzIiwiaXNJbklnbm9yZUNhc2UiLCJmaW5kIiwiayIsImlzVVJMIiwiVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQTBCO0FBQzdCLFNBQU9BLEdBQUcsS0FBSyxJQUFmO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNDLE9BQVQsQ0FBaUJELEdBQWpCLEVBQTJCO0FBQzlCLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsU0FBT0UsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JMLEdBQS9CLE1BQXdDLGdCQUEvQztBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU00sUUFBVCxDQUFrQkMsR0FBbEIsRUFBNEI7QUFDL0IsU0FBTyxDQUFDLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCLE9BQU9BLEdBQVAsS0FBZSxRQUEzQyxLQUF3REEs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eyB0cmltIH0gZnJvbSBcIi4vc3RyaW5nXCJcclxuXHJcbi8qKlxyXG4gKiDliKTmlq1vYmrmmK/lkKbkuLpudWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKG9iajogYW55KSB7XHJcbiAgICByZXR1cm4gb2JqID09PSBudWxsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq1vYmrmmK/lkKbkuLrmlbDnu4RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KG9iajogYW55KSB7XHJcbiAgICBpZiAoIW9iaikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWrXZhbOaYr+WQpuS4uuaVsOWtl1xyXG4gKiBAcGFyYW0gdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyAg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsOiBhbnkpIHtcclxuICAgIHJldHVybiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKSAmJiB2YWwgIT09IFwiXCIgJiYgIWlzTmFOKHZhbCBhcyBhbnkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mjIflrprlgLzmmK/lkKbkuLrkuIDkuKrlr7nosaFcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zICDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWw6IGFueSkge1xyXG4gICAgcmV0dXJuICEhKHZhbCAmJiB0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5oyH5a6a5YC85Li6bnVsbOaIlnVuZGVmaW5lZOaIllwiXCJcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbE9yRW1wdHkodmFsOiBhbnkpIHtcclxuICAgIHJldHVybiBpc1VuZGVmaW5lZCh2YWwpIHx8IGlzTnVsbCh2YWwpIHx8IHZhbCA9PT0gXCJcIlxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5oyH5a6a5YC85Li6bnVsbOaIlnVuZGVmaW5lZOaIllwiXCLmiJbnqbrnmb3lrZfnrKbkuLJcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbE9yV2hpdGVTcGFjZSh2YWw6IGFueSkge1xyXG4gICAgcmV0dXJuIGlzVW5kZWZpbmVkKHZhbCkgfHwgaXNOdWxsKHZhbCkgfHwgdHJpbSh2YWwpID09PSBcIlwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mjIflrprlgLzmmK/lkKbkuLpmdW5jdGlvblxyXG4gKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWw6IGFueSkge1xyXG4gICAgcmV0dXJuICEhKHZhbCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PSBcIltvYmplY3QgRnVuY3Rpb25dXCIpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mjIflrprlgLzmmK/lkKbkuLpTdHJpbmdcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbDogYW55KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PSBcInN0cmluZ1wiIHx8IHZhbCBpbnN0YW5jZW9mIFN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5oyH5a6a5a2X56ym5Liy5piv5ZCm5Li6XCJ0cnVlXCLmiJZcImZhbHNlXCJcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbih2YWw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIC9edHJ1ZXxmYWxzZSQvaS50ZXN0KHZhbClcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaMh+WumuWAvOaYr+WQpuS4unVuZGVmaW5lZFxyXG4gKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsOiBhbnkpIHtcclxuICAgIHJldHVybiB2YWwgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdmFsID09PSBcInVuZGVmaW5lZFwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mjIflrprlgLzmmK/lkKbkuLogbnVsbCDmiJYgdW5kZWZpbmVkXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZCh2YWw6IGFueSkge1xyXG4gICAgcmV0dXJuIGlzTnVsbCh2YWwpIHx8IGlzVW5kZWZpbmVkKHZhbClcclxufVxyXG5cclxuLyoqXHJcbiAqIOaMh+WumuWAvOaYr+WQpuWFqOmDqOS4uuWkp+WGmVxyXG4gKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNVcHBlcih2YWw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICEhKHZhbCAmJiB2YWwudG9VcHBlckNhc2UoKSA9PT0gdmFsKVxyXG59XHJcblxyXG4vKipcclxuICog5oyH5a6a5YC85piv5ZCm5YWo6YOo5Li65bCP5YaZXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xvd2VyKHZhbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gISEodmFsICYmIHZhbC50b0xvd2VyQ2FzZSgpID09PSB2YWwpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjIflrprlgLzmmK/lkKbkuLpEYXRl5a+56LGhXHJcbiAqIEBwYXJhbSB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWw6IGFueSkge1xyXG4gICAgcmV0dXJuICEhKHZhbCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gXCJbb2JqZWN0IERhdGVdXCIgJiYgIWlzTmFOKHZhbCkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjIflrprlgLzmmK/lkKbkuLpFcnJvcuWvueixoVxyXG4gKiBAcGFyYW0gdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Vycm9yKHZhbDogYW55KSB7XHJcbiAgICByZXR1cm4gISEodmFsICYmIHZhbCBpbnN0YW5jZW9mIEVycm9yKVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5patdmFsdWXlgLzlnKjlkI7pnaLnmoTlj4LmlbDkuK3mmK/lkKblrZjlnKhcclxuICogQHBhcmFtIHZhbHVlIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcGFyYW0gYXJncyDlj4LmlbDliJfooahcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0luPFQ+KHZhbHVlOiBULCAuLi5hcmdzOiBUW10pOiBib29sZWFuIHtcclxuICAgIGlmICghYXJncyB8fCAhYXJncy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiBhcmdzLmluY2x1ZGVzKHZhbHVlKVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5a2X56ym5LiydmFsdWXlgLzlnKjlkI7pnaLnmoTlj4LmlbDkuK3mmK/lkKblrZjlnKjvvIjlv73nlaXlpKflsI/lhpnvvIlcclxuICogQHBhcmFtIHZhbHVlIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcGFyYW0gYXJncyDlj4LmlbDliJfooahcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0luSWdub3JlQ2FzZSh2YWx1ZTogc3RyaW5nLCAuLi5hcmdzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFhcmdzIHx8ICFhcmdzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gYXJncy5pbmNsdWRlcyh2YWx1ZSlcclxuICAgIH1cclxuICAgIHJldHVybiAhIWFyZ3MuZmluZCgoaykgPT4gKGsgfHwgXCJcIikudG9VcHBlckNhc2UoKSA9PT0gdmFsdWUudG9VcHBlckNhc2UoKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreS4gOS4quWtl+espuS4suaYr+WQpuS4uiBVUkxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VSTCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAoL1xccy8udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xyXG4gICAgICAgIG5ldyBVUkwodmFsdWUpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG59XHJcbiJdfQ==