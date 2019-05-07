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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vZGF0YS50cyJdLCJuYW1lcyI6WyJpc0FycmF5Iiwib2JqIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiaXNOdW1iZXIiLCJ2YWwiLCJpc05hTiIsImlzT2JqZWN0IiwiaXNOdWxsT3JFbXB0eSIsImlzTnVsbE9yV2hpdGVTcGFjZSIsImlzRnVuY3Rpb24iLCJpc1N0cmluZyIsIlN0cmluZyIsImlzQm9vbGVhbiIsInRlc3QiLCJpc1VuZGVmaW5lZCIsInVuZGVmaW5lZCIsImlzVXBwZXIiLCJ0b1VwcGVyQ2FzZSIsImlzTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImlzRGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7O0FBR08sU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBMkI7QUFDOUIsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixXQUFPLEtBQVA7QUFDSDs7QUFDRCxTQUFPQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQkosR0FBL0IsTUFBd0MsZ0JBQS9DO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNLLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQXdDO0FBQzNDLFNBQU8sQ0FBQyxPQUFRQSxHQUFSLEtBQWlCLFFBQWpCLElBQTZCLE9BQVFBLEdBQVIsS0FBaUIsUUFBL0MsS0FBNERBLEdBQUcsS0FBSyxFQUFwRSxJQUEwRSxDQUFDQyxLQUFLLENBQUNELEdBQUQsQ0FBdkY7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU0UsUUFBVCxDQUFrQkYsR0FBbEIsRUFBNEI7QUFDL0IsU0FBT0EsR0FBRyxJQUFJLFFBQU9BLEdBQVAsTUFBZSxRQUE3QjtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTRyxhQUFULENBQXVCSCxHQUF2QixFQUEyQztBQUM5QyxTQUFPLFNBQVNBLEdBQVQsSUFBZ0JBLEdBQUcsS0FBSyxFQUEvQjtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTSSxrQkFBVCxDQUE0QkosR0FBNUIsRUFBZ0Q7QUFDbkQsTUFBSUEsR0FBRyxLQUFLLElBQVosRUFBa0I7QUFDZCxXQUFPLElBQVA7QUFDSDs7QUFDRCxTQUFPRyxhQUFhLENBQUMsa0JBQUtILEdBQUwsQ0FBRCxDQUFwQjtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTSyxVQUFULENBQW9CTCxHQUFwQixFQUE4QjtBQUNqQyxTQUFPQSxHQUFHLElBQUlMLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLElBQTFCLENBQStCRSxHQUEvQixLQUF1QyxtQkFBckQ7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU00sUUFBVCxDQUFrQk4sR0FBbEIsRUFBNEI7QUFDL0IsU0FBTyxPQUFPQSxHQUFQLElBQWMsUUFBZCxJQUEwQkEsR0FBRyxZQUFZTyxNQUFoRDtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTQyxTQUFULENBQW1CUixHQUFuQixFQUFnQztBQUNuQyxTQUFPLGdCQUFnQlMsSUFBaEIsQ0FBcUJULEdBQXJCLENBQVA7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU1UsV0FBVCxDQUFxQlYsR0FBckIsRUFBK0I7QUFDbEMsU0FBT0EsR0FBRyxLQUFLVyxTQUFSLElBQXFCLE9BQVFYLEdBQVIsS0FBaUIsV0FBN0M7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU1ksT0FBVCxDQUFpQlosR0FBakIsRUFBOEI7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNhLFdBQUosT0FBc0JiLEdBQXBDO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNjLE9BQVQsQ0FBaUJkLEdBQWpCLEVBQThCO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDZSxXQUFKLE9BQXNCZixHQUFwQztBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTZ0IsTUFBVCxDQUFnQmhCLEdBQWhCLEVBQTBCO0FBQzdCLFNBQU9BLEdBQUcsSUFBSUwsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JFLEdBQS9CLE1BQXdDLGVBQS9DLElBQWtFLENBQUNDLEtBQUssQ0FBQ0QsR0FBRCxDQUEvRTtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJpbSB9IGZyb20gXCIuL3N0cmluZ1wiXHJcblxyXG4vKipcclxuICog5Yik5patb2Jq5piv5ZCm5Li65pWw57uEXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheShvYmo6IGFueSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiXHJcbn1cclxuXHJcbi8qKlxyXG4gICog5Yik5patdmFs5piv5ZCm5Li65pWw5a2XXHJcbiAgKiBAcGFyYW0gdmFsIOimgeWIpOaWreeahOWAvFxyXG4gICogQHJldHVybnMgIOWIpOaWree7k+aenFxyXG4gICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih2YWw6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgKHZhbCkgPT09ICdudW1iZXInIHx8IHR5cGVvZiAodmFsKSA9PT0gJ3N0cmluZycpICYmIHZhbCAhPT0gJycgJiYgIWlzTmFOKHZhbCBhcyBhbnkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mjIflrprlgLzmmK/lkKbkuLrkuIDkuKrlr7nosaFcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zICDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWw6IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0J1xyXG59XHJcblxyXG4vKipcclxuKiDliKTmlq3mjIflrprlgLzkuLpudWxs5oiW5Li656m65a2X56ym5LiyXHJcbiogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bGxPckVtcHR5KHZhbDogbnVsbCB8IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG51bGwgPT09IHZhbCB8fCB2YWwgPT09IFwiXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaMh+WumuWAvOS4um51bGzvvIzmiJbkuLrnqbrlrZfnrKbkuLLvvIzmiJbkuLrnqbrnmb3lrZfnrKbkuLJcclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbE9yV2hpdGVTcGFjZSh2YWw6IG51bGwgfCBzdHJpbmcpIHtcclxuICAgIGlmICh2YWwgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzTnVsbE9yRW1wdHkodHJpbSh2YWwpKVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5oyH5a6a5YC85piv5ZCm5Li6ZnVuY3Rpb25cclxuICogQHBhcmFtICB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsOiBhbnkpIHtcclxuICAgIHJldHVybiB2YWwgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5oyH5a6a5YC85piv5ZCm5Li6U3RyaW5nXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyh2YWw6IGFueSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT0gJ3N0cmluZycgfHwgdmFsIGluc3RhbmNlb2YgU3RyaW5nXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mjIflrprlrZfnrKbkuLLmmK/lkKbkuLpcInRydWVcIuaIllwiZmFsc2VcIlxyXG4gKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuKHZhbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gL150cnVlfGZhbHNlJC9pLnRlc3QodmFsKVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5oyH5a6a5YC85piv5ZCm5Li6dW5kZWZpbmVkXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWw6IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbCA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiAodmFsKSA9PT0gXCJ1bmRlZmluZWRcIlxyXG59XHJcblxyXG4vKipcclxuICog5oyH5a6a5YC85piv5ZCm5YWo6YOo5Li65aSn5YaZXHJcbiAqIEBwYXJhbSAgdmFsIOimgeWIpOaWreeahOWAvFxyXG4gKiBAcmV0dXJucyDliKTmlq3nu5PmnpxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VwcGVyKHZhbDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdmFsICYmIHZhbC50b1VwcGVyQ2FzZSgpID09PSB2YWxcclxufVxyXG5cclxuLyoqXHJcbiAqIOaMh+WumuWAvOaYr+WQpuWFqOmDqOS4uuWwj+WGmVxyXG4gKiBAcGFyYW0gIHZhbCDopoHliKTmlq3nmoTlgLxcclxuICogQHJldHVybnMg5Yik5pat57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNMb3dlcih2YWw6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHZhbCAmJiB2YWwudG9Mb3dlckNhc2UoKSA9PT0gdmFsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmjIflrprlgLzmmK/lkKbkuLpEYXRl5a+56LGhXHJcbiAqIEBwYXJhbSB2YWwg6KaB5Yik5pat55qE5YC8XHJcbiAqIEByZXR1cm5zIOWIpOaWree7k+aenFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWw6IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gXCJbb2JqZWN0IERhdGVdXCIgJiYgIWlzTmFOKHZhbClcclxufSJdfQ==