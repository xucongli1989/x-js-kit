"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitArray = splitArray;
exports.unique = unique;
exports.union = union;
exports.intersect = intersect;
exports.diff = diff;
exports.map = map;
exports.createNumberArray = createNumberArray;
exports.isNullOrEmpty = isNullOrEmpty;
exports.isNotNullOrEmpty = isNotNullOrEmpty;
exports.isAnyNullOrEmpty = isAnyNullOrEmpty;
exports.isAnyNotNullOrEmpty = isAnyNotNullOrEmpty;
exports.isAllNullOrEmpty = isAllNullOrEmpty;
exports.isAllNotNullOrEmpty = isAllNotNullOrEmpty;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * 将一个数组拆分为多个数组
 * @param arr 原数组
 * @param stepCount 拆分后，每个数组最多包含的项数量
 */
function splitArray(arr, stepCount) {
  if (!arr || !arr.length || stepCount <= 0) {
    return [];
  }

  var arrLen = arr.length;

  if (arrLen <= stepCount) {
    return [arr];
  }

  var newArray = [];
  var maxCount = Math.ceil(arrLen / stepCount);
  var startIndex = 0;

  for (var i = 0; i < maxCount; i++) {
    newArray[i] = arr.slice(startIndex, (i + 1) * stepCount);
    startIndex += stepCount;
  }

  return newArray;
}
/**
 * 去掉array中的重复项
 * @param arr 需要去重的数组
 */


function unique(arr) {
  if (!arr) {
    return [];
  }

  return Array.from(new Set(arr));
}
/**
 * 合并两个数组（未去重）
 * @param arr1 数组1
 * @param arr2 数组2
 */


function union(arr1, arr2) {
  var a1 = arr1 || [];
  var a2 = arr2 || [];
  return [].concat(_toConsumableArray(a1), _toConsumableArray(a2));
}
/**
 * 获取两个数组的交集（已去重）
 * @param arr1 数组1
 * @param arr2 数组2
 */


function intersect(arr1, arr2) {
  var a1 = arr1 || [];
  var a2 = arr2 || [];
  return unique(a1.filter(function (x) {
    return a2.includes(x);
  }));
}
/**
 * 获取两个数组的差集（已去重）
 * @param arr1 数组1
 * @param arr2 数组2
 */


function diff(arr1, arr2) {
  var a1 = arr1 || [];
  var a2 = arr2 || [];
  var diff1 = a1.filter(function (x) {
    return !a2.includes(x);
  });
  var diff2 = a2.filter(function (x) {
    return !a1.includes(x);
  });
  return unique([].concat(_toConsumableArray(diff1), _toConsumableArray(diff2)));
}
/**
 * 遍历指定数组并返回一个新数组（与原生map不一样的地方是：原生map中未过滤null和undefined，而此方法会过滤）
 * @param arr 需要遍历的数组
 * @param fn 处理函数
 */


function map(arr, fn) {
  if (!arr || !fn) {
    return [];
  }

  var result = [];
  var temp;

  for (var i = 0; i < arr.length; i++) {
    temp = fn(arr[i], i);

    if (temp == null || typeof temp == "undefined") {
      continue;
    }

    result.push(temp);
  }

  return result;
}
/**
 * 根据起始值和终点值创建一个数组，如：[1,2,3,4....]
 * @param startValue 起始值（包含）
 * @param endValue 终点值（包含）
 * @param step 步长，默认为 1
 */


function createNumberArray(startValue, endValue, step) {
  var stepValue = 1;

  if (step) {
    stepValue = step;
  }

  var arr = [];

  for (var i = startValue; i <= endValue; i += stepValue) {
    arr.push(i);
  }

  return arr;
}
/**
 * 判断数组是否为空
 */


function isNullOrEmpty(arr) {
  return !arr || arr.length == 0;
}
/**
 * 判断数组不为空
 */


function isNotNullOrEmpty(arr) {
  return !isNullOrEmpty(arr);
}
/**
 * 判断参数数组中是否至少有一个数组为空
 */


function isAnyNullOrEmpty() {
  for (var _len = arguments.length, arrs = new Array(_len), _key = 0; _key < _len; _key++) {
    arrs[_key] = arguments[_key];
  }

  if (!arrs || arrs.length == 0) {
    return true;
  }

  return arrs.some(function (k) {
    return isNullOrEmpty(k);
  });
}
/**
 * 判断参数数组中是否至少有一个数组不为空
 */


function isAnyNotNullOrEmpty() {
  for (var _len2 = arguments.length, arrs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    arrs[_key2] = arguments[_key2];
  }

  if (!arrs || arrs.length == 0) {
    return false;
  }

  return arrs.some(function (k) {
    return isNotNullOrEmpty(k);
  });
}
/**
 * 判断参数数组中是否所有的数组都为空
 */


function isAllNullOrEmpty() {
  for (var _len3 = arguments.length, arrs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    arrs[_key3] = arguments[_key3];
  }

  if (!arrs || arrs.length == 0) {
    return true;
  }

  return arrs.every(function (k) {
    return isNullOrEmpty(k);
  });
}
/**
 * 判断参数数组中是否所有的数组都不为空
 */


function isAllNotNullOrEmpty() {
  for (var _len4 = arguments.length, arrs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    arrs[_key4] = arguments[_key4];
  }

  if (!arrs || arrs.length == 0) {
    return false;
  }

  return arrs.every(function (k) {
    return isNotNullOrEmpty(k);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vYXJyYXkudHMiXSwibmFtZXMiOlsic3BsaXRBcnJheSIsImFyciIsInN0ZXBDb3VudCIsImxlbmd0aCIsImFyckxlbiIsIm5ld0FycmF5IiwibWF4Q291bnQiLCJNYXRoIiwiY2VpbCIsInN0YXJ0SW5kZXgiLCJpIiwic2xpY2UiLCJ1bmlxdWUiLCJBcnJheSIsImZyb20iLCJTZXQiLCJ1bmlvbiIsImFycjEiLCJhcnIyIiwiYTEiLCJhMiIsImludGVyc2VjdCIsImZpbHRlciIsIngiLCJpbmNsdWRlcyIsImRpZmYiLCJkaWZmMSIsImRpZmYyIiwibWFwIiwiZm4iLCJyZXN1bHQiLCJ0ZW1wIiwicHVzaCIsImNyZWF0ZU51bWJlckFycmF5Iiwic3RhcnRWYWx1ZSIsImVuZFZhbHVlIiwic3RlcCIsInN0ZXBWYWx1ZSIsImlzTnVsbE9yRW1wdHkiLCJpc05vdE51bGxPckVtcHR5IiwiaXNBbnlOdWxsT3JFbXB0eSIsImFycnMiLCJzb21lIiwiayIsImlzQW55Tm90TnVsbE9yRW1wdHkiLCJpc0FsbE51bGxPckVtcHR5IiwiZXZlcnkiLCJpc0FsbE5vdE51bGxPckVtcHR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLFVBQVQsQ0FBdUJDLEdBQXZCLEVBQWlDQyxTQUFqQyxFQUEyRDtBQUM5RCxNQUFJLENBQUNELEdBQUQsSUFBUSxDQUFDQSxHQUFHLENBQUNFLE1BQWIsSUFBdUJELFNBQVMsSUFBSSxDQUF4QyxFQUEyQztBQUN2QyxXQUFPLEVBQVA7QUFDSDs7QUFDRCxNQUFNRSxNQUFNLEdBQUdILEdBQUcsQ0FBQ0UsTUFBbkI7O0FBQ0EsTUFBSUMsTUFBTSxJQUFJRixTQUFkLEVBQXlCO0FBQ3JCLFdBQU8sQ0FBQ0QsR0FBRCxDQUFQO0FBQ0g7O0FBQ0QsTUFBTUksUUFBZSxHQUFHLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxH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SyxDQUFELENBQXBCO0FBQUEsR0FBVixDQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNDLG1CQUFULEdBQStDO0FBQUEscUNBQWZILElBQWU7QUFBZkEsSUFBQUEsSUFBZTtBQUFBOztBQUNsRCxNQUFJLENBQUNBLElBQUQsSUFBU0EsSUFBSSxDQUFDdEMsTUFBTCxJQUFlLENBQTVCLEVBQStCO0FBQzNCLFdBQU8sS0FBUDtBQUNIOztBQUNELFNBQU9zQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxVQUFDQyxDQUFEO0FBQUEsV0FBT0osZ0JBQWdCLENBQUNJLENBQUQsQ0FBdkI7QUFBQSxHQUFWLENBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0UsZ0JBQVQsR0FBNEM7QUFBQSxxQ0FBZkosSUFBZTtBQUFmQSxJQUFBQSxJQUFlO0FBQUE7O0FBQy9DLE1BQUksQ0FBQ0EsSUFBRCxJQUFTQSxJQUFJLENBQUN0QyxNQUFMLElBQWUsQ0FBNUIsRUFBK0I7QUFDM0IsV0FBTyxJQUFQO0FBQ0g7O0FBQ0QsU0FBT3NDLElBQUksQ0FBQ0ssS0FBTCxDQUFXLFVBQUNILENBQUQ7QUFBQSxXQUFPTCxhQUFhLENBQUNLLENBQUQsQ0FBcEI7QUFBQSxHQUFYLENBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0ksbUJBQVQsR0FBK0M7QUFBQSxxQ0FBZk4sSUFBZTtBQUFmQSxJQUFBQSxJQUFlO0FBQUE7O0FBQ2xELE1BQUksQ0FBQ0EsSUFBRCxJQUFTQSxJQUFJLENBQUN0QyxNQUFMLElBQWUsQ0FBNUIsRUFBK0I7QUFDM0IsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsU0FBT3NDLElBQUksQ0FBQ0ssS0FBTCxDQUFXLFVBQUNILENBQUQ7QUFBQSxXQUFPSixnQkFBZ0IsQ0FBQ0ksQ0FBRCxDQUF2QjtBQUFBLEdBQVgsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWwhuS4gOS4quaVsOe7hOaLhuWIhuS4uuWkmuS4quaVsOe7hFxyXG4gKiBAcGFyYW0gYXJyIOWOn+aVsOe7hFxyXG4gKiBAcGFyYW0gc3RlcENvdW50IOaLhuWIhuWQju+8jOavj+S4quaVsOe7hOacgOWkmuWMheWQq+eahOmhueaVsOmHj1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0QXJyYXk8VD4oYXJyOiBUW10sIHN0ZXBDb3VudDogbnVtYmVyKTogVFtdW10ge1xyXG4gICAgaWYgKCFhcnIgfHwgIWFyci5sZW5ndGggfHwgc3RlcENvdW50IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGNvbnN0IGFyckxlbiA9IGFyci5sZW5ndGhcclxuICAgIGlmIChhcnJMZW4gPD0gc3RlcENvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIFthcnJdXHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdBcnJheTogVFtdW10gPSBbXVxyXG4gICAgY29uc3QgbWF4Q291bnQgPSBNYXRoLmNlaWwoYXJyTGVuIC8gc3RlcENvdW50KVxyXG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heENvdW50OyBpKyspIHtcclxuICAgICAgICBuZXdBcnJheVtpXSA9IGFyci5zbGljZShzdGFydEluZGV4LCAoaSArIDEpICogc3RlcENvdW50KVxyXG4gICAgICAgIHN0YXJ0SW5kZXggKz0gc3RlcENvdW50XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3QXJyYXlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+aOiWFycmF55Lit55qE6YeN5aSN6aG5XHJcbiAqIEBwYXJhbSBhcnIg6ZyA6KaB5Y676YeN55qE5pWw57uEXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlPFQ+KGFycjogVFtdKTogVFtdIHtcclxuICAgIGlmICghYXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFycikpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlkIjlubbkuKTkuKrmlbDnu4TvvIjmnKrljrvph43vvIlcclxuICogQHBhcmFtIGFycjEg5pWw57uEMVxyXG4gKiBAcGFyYW0gYXJyMiDmlbDnu4QyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5pb248VD4oYXJyMTogVFtdLCBhcnIyOiBUW10pOiBUW10ge1xyXG4gICAgY29uc3QgYTEgPSBhcnIxIHx8IFtdXHJcbiAgICBjb25zdCBhMiA9IGFycjIgfHwgW11cclxuICAgIHJldHVybiBbLi4uYTEsIC4uLmEyXVxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5Lik5Liq5pWw57uE55qE5Lqk6ZuG77yI5bey5Y676YeN77yJXHJcbiAqIEBwYXJhbSBhcnIxIOaVsOe7hDFcclxuICogQHBhcmFtIGFycjIg5pWw57uEMlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdDxUPihhcnIxOiBUW10sIGFycjI6IFRbXSk6IFRbXSB7XHJcbiAgICBjb25zdCBhMSA9IGFycjEgfHwgW11cclxuICAgIGNvbnN0IGEyID0gYXJyMiB8fCBbXVxyXG4gICAgcmV0dXJuIHVuaXF1ZShhMS5maWx0ZXIoKHgpID0+IGEyLmluY2x1ZGVzKHgpKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluS4pOS4quaVsOe7hOeahOW3rumbhu+8iOW3suWOu+mHje+8iVxyXG4gKiBAcGFyYW0gYXJyMSDmlbDnu4QxXHJcbiAqIEBwYXJhbSBhcnIyIOaVsOe7hDJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWZmPFQ+KGFycjE6IFRbXSwgYXJyMjogVFtdKTogVFtdIHtcclxuICAgIGNvbnN0IGExID0gYXJyMSB8fCBbXVxyXG4gICAgY29uc3QgYTIgPSBhcnIyIHx8IFtdXHJcbiAgICBjb25zdCBkaWZmMSA9IGExLmZpbHRlcigoeCkgPT4gIWEyLmluY2x1ZGVzKHgpKVxyXG4gICAgY29uc3QgZGlmZjIgPSBhMi5maWx0ZXIoKHgpID0+ICFhMS5pbmNsdWRlcyh4KSlcclxuICAgIHJldHVybiB1bmlxdWUoWy4uLmRpZmYxLCAuLi5kaWZmMl0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpgY3ljobmjIflrprmlbDnu4Tlubbov5Tlm57kuIDkuKrmlrDmlbDnu4TvvIjkuI7ljp/nlJ9tYXDkuI3kuIDmoLfnmoTlnLDmlrnmmK/vvJrljp/nlJ9tYXDkuK3mnKrov4fmu6RudWxs5ZKMdW5kZWZpbmVk77yM6ICM5q2k5pa55rOV5Lya6L+H5ruk77yJXHJcbiAqIEBwYXJhbSBhcnIg6ZyA6KaB6YGN5Y6G55qE5pWw57uEXHJcbiAqIEBwYXJhbSBmbiDlpITnkIblh73mlbBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXA8VGFyZ2V0VHlwZSA9IGFueSwgU291cmNlVHlwZSA9IGFueT4oYXJyOiBTb3VyY2VUeXBlW10sIGZuOiAoaXRlbTogU291cmNlVHlwZSwgaWR4PzogbnVtYmVyKSA9PiBUYXJnZXRUeXBlIHwgbnVsbCB8IHVuZGVmaW5lZCk6IFRhcmdldFR5cGVbXSB7XHJcbiAgICBpZiAoIWFyciB8fCAhZm4pIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdDogVGFyZ2V0VHlwZVtdID0gW11cclxuICAgIGxldCB0ZW1wOiBUYXJnZXRUeXBlIHwgbnVsbCB8IHVuZGVmaW5lZFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0ZW1wID0gZm4oYXJyW2ldLCBpKVxyXG4gICAgICAgIGlmICh0ZW1wID09IG51bGwgfHwgdHlwZW9mIHRlbXAgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQucHVzaCh0ZW1wKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG4vKipcclxuICog5qC55o2u6LW35aeL5YC85ZKM57uI54K55YC85Yib5bu65LiA5Liq5pWw57uE77yM5aaC77yaWzEsMiwzLDQuLi4uXVxyXG4gKiBAcGFyYW0gc3RhcnRWYWx1ZSDotbflp4vlgLzvvIjljIXlkKvvvIlcclxuICogQHBhcmFtIGVuZFZhbHVlIOe7iOeCueWAvO+8iOWMheWQq++8iVxyXG4gKiBAcGFyYW0gc3RlcCDmraXplb/vvIzpu5jorqTkuLogMVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU51bWJlckFycmF5KHN0YXJ0VmFsdWU6IG51bWJlciwgZW5kVmFsdWU6IG51bWJlciwgc3RlcD86IG51bWJlcikge1xyXG4gICAgbGV0IHN0ZXBWYWx1ZSA9IDFcclxuICAgIGlmIChzdGVwKSB7XHJcbiAgICAgICAgc3RlcFZhbHVlID0gc3RlcFxyXG4gICAgfVxyXG4gICAgY29uc3QgYXJyID0gW10gYXMgbnVtYmVyW11cclxuICAgIGZvciAobGV0IGkgPSBzdGFydFZhbHVlOyBpIDw9IGVuZFZhbHVlOyBpICs9IHN0ZXBWYWx1ZSkge1xyXG4gICAgICAgIGFyci5wdXNoKGkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mlbDnu4TmmK/lkKbkuLrnqbpcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bGxPckVtcHR5KGFycjogYW55W10pIHtcclxuICAgIHJldHVybiAhYXJyIHx8IGFyci5sZW5ndGggPT0gMFxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5pWw57uE5LiN5Li656m6XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOb3ROdWxsT3JFbXB0eShhcnI6IGFueVtdKSB7XHJcbiAgICByZXR1cm4gIWlzTnVsbE9yRW1wdHkoYXJyKVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5Y+C5pWw5pWw57uE5Lit5piv5ZCm6Iez5bCR5pyJ5LiA5Liq5pWw57uE5Li656m6XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNBbnlOdWxsT3JFbXB0eSguLi5hcnJzOiBhbnlbXVtdKSB7XHJcbiAgICBpZiAoIWFycnMgfHwgYXJycy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJycy5zb21lKChrKSA9PiBpc051bGxPckVtcHR5KGspKVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5Y+C5pWw5pWw57uE5Lit5piv5ZCm6Iez5bCR5pyJ5LiA5Liq5pWw57uE5LiN5Li656m6XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNBbnlOb3ROdWxsT3JFbXB0eSguLi5hcnJzOiBhbnlbXVtdKSB7XHJcbiAgICBpZiAoIWFycnMgfHwgYXJycy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycnMuc29tZSgoaykgPT4gaXNOb3ROdWxsT3JFbXB0eShrKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreWPguaVsOaVsOe7hOS4reaYr+WQpuaJgOacieeahOaVsOe7hOmDveS4uuepulxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQWxsTnVsbE9yRW1wdHkoLi4uYXJyczogYW55W11bXSkge1xyXG4gICAgaWYgKCFhcnJzIHx8IGFycnMubGVuZ3RoID09IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycnMuZXZlcnkoKGspID0+IGlzTnVsbE9yRW1wdHkoaykpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3lj4LmlbDmlbDnu4TkuK3mmK/lkKbmiYDmnInnmoTmlbDnu4Tpg73kuI3kuLrnqbpcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FsbE5vdE51bGxPckVtcHR5KC4uLmFycnM6IGFueVtdW10pIHtcclxuICAgIGlmICghYXJycyB8fCBhcnJzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJycy5ldmVyeSgoaykgPT4gaXNOb3ROdWxsT3JFbXB0eShrKSlcclxufVxyXG4iXX0=