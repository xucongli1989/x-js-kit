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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vZGF0YS50cyJdLCJuYW1lcyI6WyJpc0FycmF5Iiwib2JqIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiaXNOdW1iZXIiLCJ2YWwiLCJpc05hTiIsImlzT2JqZWN0IiwiaXNOdWxsT3JFbXB0eSIsImlzTnVsbE9yV2hpdGVTcGFjZSIsImlzRnVuY3Rpb24iLCJpc1N0cmluZyIsIlN0cmluZyIsImlzQm9vbGVhbiIsInRlc3QiLCJpc1VuZGVmaW5lZCIsInVuZGVmaW5lZCIsImlzVXBwZXIiLCJ0b1VwcGVyQ2FzZSIsImlzTG93ZXIiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7QUFHTyxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUEyQjtBQUM5QixNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOLFdBQU8sS0FBUDtBQUNIOztBQUNELFNBQU9DLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLElBQTFCLENBQStCSixHQUEvQixNQUF3QyxnQkFBL0M7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU0ssUUFBVCxDQUFrQkMsR0FBbEIsRUFBd0M7QUFDM0MsU0FBTyxDQUFDLE9BQVFBLEdBQVIsS0FBaUIsUUFBakIsSUFBNkIsT0FBUUEsR0FBUixLQUFpQixRQUEvQyxLQUE0REEsR0FBRyxLQUFLLEVBQXBFLElBQTBFLENBQUNDLEtBQUssQ0FBQ0QsR0FBRCxDQUF2RjtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTRSxRQUFULENBQWtCRixHQUFsQixFQUE0QjtBQUMvQixTQUFPQSxHQUFHLElBQUksUUFBT0EsR0FBUCxNQUFlLFFBQTdCO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNHLGFBQVQsQ0FBdUJILEdBQXZCLEVBQTJDO0FBQzlDLFNBQU8sU0FBU0EsR0FBVCxJQUFnQkEsR0FBRyxLQUFLLEVBQS9CO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNJLGtCQUFULENBQTRCSixHQUE1QixFQUFnRDtBQUNuRCxNQUFJQSxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNkLFdBQU8sSUFBUDtBQUNIOztBQUNELFNBQU9HLGFBQWEsQ0FBQyxrQkFBS0gsR0FBTCxDQUFELENBQXBCO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNLLFVBQVQsQ0FBb0JMLEdBQXBCLEVBQThCO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUwsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JFLEdBQS9CLEtBQXVDLG1CQUFyRDtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTTSxRQUFULENBQWtCTixHQUFsQixFQUE0QjtBQUMvQixTQUFPLE9BQU9BLEdBQVAsSUFBYyxRQUFkLElBQTBCQSxHQUFHLFlBQVlPLE1BQWhEO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNDLFNBQVQsQ0FBbUJSLEdBQW5CLEVBQWdDO0FBQ25DLFNBQU8sZ0JBQWdCUyxJQUFoQixDQUFxQlQsR0FBckIsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTVSxXQUFULENBQXFCVixHQUFyQixFQUErQjtBQUNsQyxTQUFPQSxHQUFHLEtBQUtXLFNBQVIsSUFBcUIsT0FBUVgsR0FBUixLQUFpQixXQUE3QztBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTWSxPQUFULENBQWlCWixHQUFqQixFQUE4QjtBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ2EsV0FBSixPQUFzQmIsR0FBcEM7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU2MsT0FBVCxDQUFpQmQsR0FBakIsRUFBOEI7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNlLFdBQUosT0FBc0JmLEdBQXBDO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4vc3RyaW5nXCJcclxuXHJcbi8qKlxyXG4gKiDliKTmlq1vYmrmmK/lkKbkuLrmlbDnu4RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KG9iajogYW55KSB7XHJcbiAgICBpZiAoIW9iaikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCJcclxufVxyXG5cclxuLyoqXHJcbiAgKiDliKTmlq12YWzmmK/lkKbkuLrmlbDlrZdcclxuICAqIEBwYXJhbSB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAgKiBAcmV0dXJucyAg5Yik5pat57uT5p6cXHJcbiAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbDogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiAodmFsKSA9PT0gJ251bWJlcicgfHwgdHlwZW9mICh2YWwpID09PSAnc3RyaW5nJykgJiYgdmFsICE9PSAnJyAmJiAhaXNOYU4odmFsIGFzIGFueSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaMh+WumuWAvOaYr+WQpuS4uuS4gOS4quWvueixoVxyXG4gKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMgIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbDogYW55KSB7XHJcbiAgICByZXR1cm4gdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnXHJcbn1cclxuXHJcbi8qKlxyXG4qIOWIpOaWreaMh+WumuWAvOS4um51bGzmiJbkuLrnqbrlrZfnrKbkuLJcclxuKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbE9yRW1wdHkodmFsOiBudWxsIHwgc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbnVsbCA9PT0gdmFsIHx8IHZhbCA9PT0gXCJcIlxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5oyH5a6a5YC85Li6bnVsbO+8jOaIluS4uuepuuWtl+espuS4su+8jOaIluS4uuepuueZveWtl+espuS4slxyXG4gKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsT3JXaGl0ZVNwYWNlKHZhbDogbnVsbCB8IHN0cmluZykge1xyXG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNOdWxsT3JFbXB0eSh0cmltKHZhbCkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mjIflrprlgLzmmK/lkKbkuLpmdW5jdGlvblxyXG4gKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWw6IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PSAnW29iamVjdCBGdW5jdGlvbl0nXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mjIflrprlgLzmmK/lkKbkuLpTdHJpbmdcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbDogYW55KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PSAnc3RyaW5nJyB8fCB2YWwgaW5zdGFuY2VvZiBTdHJpbmdcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaMh+WumuWtl+espuS4suaYr+WQpuS4ulwidHJ1ZVwi5oiWXCJmYWxzZVwiXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4odmFsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAvXnRydWV8ZmFsc2UkL2kudGVzdCh2YWwpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mjIflrprlgLzmmK/lkKbkuLp1bmRlZmluZWRcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbDogYW55KSB7XHJcbiAgICByZXR1cm4gdmFsID09PSB1bmRlZmluZWQgfHwgdHlwZW9mICh2YWwpID09PSBcInVuZGVmaW5lZFwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjIflrprlgLzmmK/lkKblhajpg6jkuLrlpKflhplcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVXBwZXIodmFsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB2YWwgJiYgdmFsLnRvVXBwZXJDYXNlKCkgPT09IHZhbFxyXG59XHJcblxyXG4vKipcclxuICog5oyH5a6a5YC85piv5ZCm5YWo6YOo5Li65bCP5YaZXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xvd2VyKHZhbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdmFsICYmIHZhbC50b0xvd2VyQ2FzZSgpID09PSB2YWxcclxufSJdfQ==