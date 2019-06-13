"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var _string = require("./string");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  return (typeof val === 'number' || typeof val === 'string') && val !== '' && !isNaN(val);
}
/**
 * 判断指定值是否为一个对象
 * @param  val 要判断的值
 * @returns  判断结果
 */


function isObject(val) {
  return val && _typeof(val) === 'object';
}
/**
* 判断指定值为null或为空字符串
* @param  val 要判断的值
* @returns 判断结果
*/


function isNullOrEmpty(val) {
  return null === val || val === "";
}
/**
 * 判断指定值为null，或为空字符串，或为空白字符串
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isNullOrWhiteSpace(val) {
  if (val === null) {
    return true;
  }

  return isNullOrEmpty((0, _string.trim)(val));
}
/**
 * 判断指定值是否为function
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isFunction(val) {
  return val && Object.prototype.toString.call(val) == '[object Function]';
}
/**
 * 判断指定值是否为String
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isString(val) {
  return typeof val == 'string' || val instanceof String;
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
  return val && val.toUpperCase() === val;
}
/**
 * 指定值是否全部为小写
 * @param  val 要判断的值
 * @returns 判断结果
 */


function isLower(val) {
  return val && val.toLowerCase() === val;
}
/**
 * 指定值是否为Date对象
 * @param val 要判断的值
 * @returns 判断结果
 */


function isDate(val) {
  return val && Object.prototype.toString.call(val) === "[object Date]" && !isNaN(val);
}
/**
 * 指定值是否为Error对象
 * @param val 要判断的值
 * @returns 判断结果
 */


function isError(val) {
  return val && val instanceof Error;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vZGF0YS50cyJdLCJuYW1lcyI6WyJpc0FycmF5Iiwib2JqIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiaXNOdW1iZXIiLCJ2YWwiLCJpc05hTiIsImlzT2JqZWN0IiwiaXNOdWxsT3JFbXB0eSIsImlzTnVsbE9yV2hpdGVTcGFjZSIsImlzRnVuY3Rpb24iLCJpc1N0cmluZyIsIlN0cmluZyIsImlzQm9vbGVhbiIsInRlc3QiLCJpc1VuZGVmaW5lZCIsInVuZGVmaW5lZCIsImlzVXBwZXIiLCJ0b1VwcGVyQ2FzZSIsImlzTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImlzRGF0ZSIsImlzRXJyb3IiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7OztBQUdPLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQTJCO0FBQzlCLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsU0FBT0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JKLEdBQS9CLE1BQXdDLGdCQUEvQztBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTSyxRQUFULENBQWtCQyxHQUFsQixFQUF3QztBQUMzQyxTQUFPLENBQUMsT0FBUUEsR0FBUixLQUFpQixRQUFqQixJQUE2QixPQUFRQSxHQUFSLEtBQWlCLFFBQS9DLEtBQTREQSxHQUFHLEtBQUssRUFBcEUsSUFBMEUsQ0FBQ0MsS0FBSyxDQUFDRCxHQUFELENBQXZGO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNFLFFBQVQsQ0FBa0JGLEdBQWxCLEVBQTRCO0FBQy9CLFNBQU9BLEdBQUcsSUFBSSxRQUFPQSxHQUFQLE1BQWUsUUFBN0I7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU0csYUFBVCxDQUF1QkgsR0FBdkIsRUFBMkM7QUFDOUMsU0FBTyxTQUFTQSxHQUFULElBQWdCQSxHQUFHLEtBQUssRUFBL0I7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU0ksa0JBQVQsQ0FBNEJKLEdBQTVCLEVBQWdEO0FBQ25ELE1BQUlBLEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQ2QsV0FBTyxJQUFQO0FBQ0g7O0FBQ0QsU0FBT0csYUFBYSxDQUFDLGtCQUFLSCxHQUFMLENBQUQsQ0FBcEI7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU0ssVUFBVCxDQUFvQkwsR0FBcEIsRUFBOEI7QUFDakMsU0FBT0EsR0FBRyxJQUFJTCxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQkUsR0FBL0IsS0FBdUMsbUJBQXJEO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNNLFFBQVQsQ0FBa0JOLEdBQWxCLEVBQTRCO0FBQy9CLFNBQU8sT0FBT0EsR0FBUCxJQUFjLFFBQWQsSUFBMEJBLEdBQUcsWUFBWU8sTUFBaEQ7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU0MsU0FBVCxDQUFtQlIsR0FBbkIsRUFBZ0M7QUFDbkMsU0FBTyxnQkFBZ0JTLElBQWhCLENBQXFCVCxHQUFyQixDQUFQO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNVLFdBQVQsQ0FBcUJWLEdBQXJCLEVBQStCO0FBQ2xDLFNBQU9BLEdBQUcsS0FBS1csU0FBUixJQUFxQixPQUFRWCxHQUFSLEtBQWlCLFdBQTdDO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNZLE9BQVQsQ0FBaUJaLEdBQWpCLEVBQThCO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDYSxXQUFKLE9BQXNCYixHQUFwQztBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTYyxPQUFULENBQWlCZCxHQUFqQixFQUE4QjtBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ2UsV0FBSixPQUFzQmYsR0FBcEM7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU2dCLE1BQVQsQ0FBZ0JoQixHQUFoQixFQUEwQjtBQUM3QixTQUFPQSxHQUFHLElBQUlMLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLElBQTFCLENBQStCRSxHQUEvQixNQUF3QyxlQUEvQyxJQUFrRSxDQUFDQyxLQUFLLENBQUNELEdBQUQsQ0FBL0U7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU2lCLE9BQVQsQ0FBaUJqQixHQUFqQixFQUEyQjtBQUM5QixTQUFPQSxHQUFHLElBQUlBLEdBQUcsWUFBWWtCLEtBQTdCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4vc3RyaW5nXCJcclxuXHJcbi8qKlxyXG4gKiDliKTmlq1vYmrmmK/lkKbkuLrmlbDnu4RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KG9iajogYW55KSB7XHJcbiAgICBpZiAoIW9iaikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCJcclxufVxyXG5cclxuLyoqXHJcbiAgKiDliKTmlq12YWzmmK/lkKbkuLrmlbDlrZdcclxuICAqIEBwYXJhbSB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAgKiBAcmV0dXJucyAg5Yik5pat57uT5p6cXHJcbiAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbDogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiAodmFsKSA9PT0gJ251bWJlcicgfHwgdHlwZW9mICh2YWwpID09PSAnc3RyaW5nJykgJiYgdmFsICE9PSAnJyAmJiAhaXNOYU4odmFsIGFzIGFueSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaMh+WumuWAvOaYr+WQpuS4uuS4gOS4quWvueixoVxyXG4gKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMgIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbDogYW55KSB7XHJcbiAgICByZXR1cm4gdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnXHJcbn1cclxuXHJcbi8qKlxyXG4qIOWIpOaWreaMh+WumuWAvOS4um51bGzmiJbkuLrnqbrlrZfnrKbkuLJcclxuKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbE9yRW1wdHkodmFsOiBudWxsIHwgc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbnVsbCA9PT0gdmFsIHx8IHZhbCA9PT0gXCJcIlxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5oyH5a6a5YC85Li6bnVsbO+8jOaIluS4uuepuuWtl+espuS4su+8jOaIluS4uuepuueZveWtl+espuS4slxyXG4gKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsT3JXaGl0ZVNwYWNlKHZhbDogbnVsbCB8IHN0cmluZykge1xyXG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNOdWxsT3JFbXB0eSh0cmltKHZhbCkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mjIflrprlgLzmmK/lkKbkuLpmdW5jdGlvblxyXG4gKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWw6IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PSAnW29iamVjdCBGdW5jdGlvbl0nXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mjIflrprlgLzmmK/lkKbkuLpTdHJpbmdcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbDogYW55KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PSAnc3RyaW5nJyB8fCB2YWwgaW5zdGFuY2VvZiBTdHJpbmdcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaMh+WumuWtl+espuS4suaYr+WQpuS4ulwidHJ1ZVwi5oiWXCJmYWxzZVwiXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4odmFsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAvXnRydWV8ZmFsc2UkL2kudGVzdCh2YWwpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mjIflrprlgLzmmK/lkKbkuLp1bmRlZmluZWRcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbDogYW55KSB7XHJcbiAgICByZXR1cm4gdmFsID09PSB1bmRlZmluZWQgfHwgdHlwZW9mICh2YWwpID09PSBcInVuZGVmaW5lZFwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjIflrprlgLzmmK/lkKblhajpg6jkuLrlpKflhplcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVXBwZXIodmFsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB2YWwgJiYgdmFsLnRvVXBwZXJDYXNlKCkgPT09IHZhbFxyXG59XHJcblxyXG4vKipcclxuICog5oyH5a6a5YC85piv5ZCm5YWo6YOo5Li65bCP5YaZXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xvd2VyKHZhbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdmFsICYmIHZhbC50b0xvd2VyQ2FzZSgpID09PSB2YWxcclxufVxyXG5cclxuLyoqXHJcbiAqIOaMh+WumuWAvOaYr+WQpuS4ukRhdGXlr7nosaFcclxuICogQHBhcmFtIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKHZhbDogYW55KSB7XHJcbiAgICByZXR1cm4gdmFsICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSBcIltvYmplY3QgRGF0ZV1cIiAmJiAhaXNOYU4odmFsKVxyXG59XHJcblxyXG4vKipcclxuICog5oyH5a6a5YC85piv5ZCm5Li6RXJyb3Llr7nosaFcclxuICogQHBhcmFtIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNFcnJvcih2YWw6IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbCAmJiB2YWwgaW5zdGFuY2VvZiBFcnJvclxyXG59Il19