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
  var a1 = arr1 || [],
      a2 = arr2 || [];
  return [].concat(_toConsumableArray(a1), _toConsumableArray(a2));
}
/**
 * 获取两个数组的交集（已去重）
 * @param arr1 数组1
 * @param arr2 数组2
 */


function intersect(arr1, arr2) {
  var a1 = arr1 || [],
      a2 = arr2 || [];
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
  var a1 = arr1 || [],
      a2 = arr2 || [];
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

    if (temp == null || typeof temp == 'undefined') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vYXJyYXkudHMiXSwibmFtZXMiOlsic3BsaXRBcnJheSIsImFyciIsInN0ZXBDb3VudCIsImxlbmd0aCIsImFyckxlbiIsIm5ld0FycmF5IiwibWF4Q291bnQiLCJNYXRoIiwiY2VpbCIsInN0YXJ0SW5kZXgiLCJpIiwic2xpY2UiLCJ1bmlxdWUiLCJBcnJheSIsImZyb20iLCJTZXQiLCJ1bmlvbiIsImFycjEiLCJhcnIyIiwiYTEiLCJhMiIsImludGVyc2VjdCIsImZpbHRlciIsIngiLCJpbmNsdWRlcyIsImRpZmYiLCJkaWZmMSIsImRpZmYyIiwibWFwIiwiZm4iLCJyZXN1bHQiLCJ0ZW1wIiwicHVzaCIsImNyZWF0ZU51bWJlckFycmF5Iiwic3RhcnRWYWx1ZSIsImVuZFZhbHVlIiwic3RlcCIsInN0ZXBWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxVQUFULENBQXVCQyxHQUF2QixFQUFpQ0MsU0FBakMsRUFBMkQ7QUFDOUQsTUFBSSxDQUFDRCxHQUFELElBQVEsQ0FBQ0EsR0FBRyxDQUFDRSxNQUFiLElBQXVCRCxTQUFTLElBQUksQ0FBeEMsRUFBMkM7QUFDdkMsV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsTUFBTUUsTUFBTSxHQUFHSCxHQUFHLENBQUNFLE1BQW5COztBQUNBLE1BQUlDLE1BQU0sSUFBSUYsU0FBZCxFQUF5QjtBQUNyQixXQUFPLENBQUNELEdBQUQsQ0FBUDtBQUNIOztBQUNELE1BQU1JLFFBQWUsR0FBRyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVKLE1BQU0sR0FBR0YsU0FBbkIsQ0FBakI7QUFDQSxNQUFJTyxVQUFVLEdBQUcsQ0FBakI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixRQUFwQixFQUE4QkksQ0FBQyxFQUEv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VUFBM0IsRUFBK0NDLFFBQS9DLEVBQWlFQyxJQUFqRSxFQUFnRjtBQUNuRixNQUFJQyxTQUFTLEdBQUcsQ0FBaEI7O0FBQ0EsTUFBSUQsSUFBSixFQUFVO0FBQ05DLElBQUFBLFNBQVMsR0FBR0QsSUFBWjtBQUNIOztBQUNELE1BQU1uQyxHQUFHLEdBQUcsRUFBWjs7QUFDQSxPQUFLLElBQUlTLENBQUMsR0FBR3dCLFVBQWIsRUFBeUJ4QixDQUFDLElBQUl5QixRQUE5QixFQUF3Q3pCLENBQUMsSUFBSTJCLFNBQTdDLEVBQXdEO0FBQ3BEcEMsSUFBQUEsR0FBRyxDQUFDK0IsSUFBSixDQUFTdEIsQ0FBVDtBQUNIOztBQUNELFNBQU9ULEdBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlsIbkuIDkuKrmlbDnu4Tmi4bliIbkuLrlpJrkuKrmlbDnu4RcclxuICogQHBhcmFtIGFyciDljp/mlbDnu4RcclxuICogQHBhcmFtIHN0ZXBDb3VudCDmi4bliIblkI7vvIzmr4/kuKrmlbDnu4TmnIDlpJrljIXlkKvnmoTpobnmlbDph49cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGxpdEFycmF5PFQ+KGFycjogVFtdLCBzdGVwQ291bnQ6IG51bWJlcik6IFRbXVtdIHtcclxuICAgIGlmICghYXJyIHx8ICFhcnIubGVuZ3RoIHx8IHN0ZXBDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgICBjb25zdCBhcnJMZW4gPSBhcnIubGVuZ3RoXHJcbiAgICBpZiAoYXJyTGVuIDw9IHN0ZXBDb3VudCkge1xyXG4gICAgICAgIHJldHVybiBbYXJyXVxyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3QXJyYXk6IFRbXVtdID0gW11cclxuICAgIGNvbnN0IG1heENvdW50ID0gTWF0aC5jZWlsKGFyckxlbiAvIHN0ZXBDb3VudClcclxuICAgIGxldCBzdGFydEluZGV4ID0gMFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgbmV3QXJyYXlbaV0gPSBhcnIuc2xpY2Uoc3RhcnRJbmRleCwgKGkgKyAxKSAqIHN0ZXBDb3VudClcclxuICAgICAgICBzdGFydEluZGV4ICs9IHN0ZXBDb3VudFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld0FycmF5XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrvmjolhcnJheeS4reeahOmHjeWkjemhuVxyXG4gKiBAcGFyYW0gYXJyIOmcgOimgeWOu+mHjeeahOaVsOe7hFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZTxUPihhcnI6IFRbXSk6IFRbXSB7XHJcbiAgICBpZiAoIWFycikge1xyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnIpKVxyXG59XHJcblxyXG4vKipcclxuICog5ZCI5bm25Lik5Liq5pWw57uE77yI5pyq5Y676YeN77yJXHJcbiAqIEBwYXJhbSBhcnIxIOaVsOe7hDFcclxuICogQHBhcmFtIGFycjIg5pWw57uEMlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVuaW9uPFQ+KGFycjE6IFRbXSwgYXJyMjogVFtdKTogVFtdIHtcclxuICAgIGNvbnN0IGExID0gYXJyMSB8fCBbXSwgYTIgPSBhcnIyIHx8IFtdXHJcbiAgICByZXR1cm4gWy4uLmExLCAuLi5hMl1cclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluS4pOS4quaVsOe7hOeahOS6pOmbhu+8iOW3suWOu+mHje+8iVxyXG4gKiBAcGFyYW0gYXJyMSDmlbDnu4QxXHJcbiAqIEBwYXJhbSBhcnIyIOaVsOe7hDJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnNlY3Q8VD4oYXJyMTogVFtdLCBhcnIyOiBUW10pOiBUW10ge1xyXG4gICAgY29uc3QgYTEgPSBhcnIxIHx8IFtdLCBhMiA9IGFycjIgfHwgW11cclxuICAgIHJldHVybiB1bmlxdWUoYTEuZmlsdGVyKHggPT4gYTIuaW5jbHVkZXMoeCkpKVxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5Lik5Liq5pWw57uE55qE5beu6ZuG77yI5bey5Y676YeN77yJXHJcbiAqIEBwYXJhbSBhcnIxIOaVsOe7hDFcclxuICogQHBhcmFtIGFycjIg5pWw57uEMlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmY8VD4oYXJyMTogVFtdLCBhcnIyOiBUW10pOiBUW10ge1xyXG4gICAgY29uc3QgYTEgPSBhcnIxIHx8IFtdLCBhMiA9IGFycjIgfHwgW11cclxuICAgIGNvbnN0IGRpZmYxID0gYTEuZmlsdGVyKHggPT4gIWEyLmluY2x1ZGVzKHgpKVxyXG4gICAgY29uc3QgZGlmZjIgPSBhMi5maWx0ZXIoeCA9PiAhYTEuaW5jbHVkZXMoeCkpXHJcbiAgICByZXR1cm4gdW5pcXVlKFsuLi5kaWZmMSwgLi4uZGlmZjJdKVxyXG59XHJcblxyXG4vKipcclxuICog6YGN5Y6G5oyH5a6a5pWw57uE5bm26L+U5Zue5LiA5Liq5paw5pWw57uE77yI5LiO5Y6f55SfbWFw5LiN5LiA5qC355qE5Zyw5pa55piv77ya5Y6f55SfbWFw5Lit5pyq6L+H5rukbnVsbOWSjHVuZGVmaW5lZO+8jOiAjOatpOaWueazleS8mui/h+a7pO+8iVxyXG4gKiBAcGFyYW0gYXJyIOmcgOimgemBjeWOhueahOaVsOe7hFxyXG4gKiBAcGFyYW0gZm4g5aSE55CG5Ye95pWwXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFwPFRhcmdldFR5cGUsIFNvdXJjZVR5cGU+KGFycjogU291cmNlVHlwZVtdLCBmbjogKGl0ZW06IFNvdXJjZVR5cGUsIGlkeD86IG51bWJlcikgPT4gVGFyZ2V0VHlwZSB8IG51bGwgfCB1bmRlZmluZWQpOiBUYXJnZXRUeXBlW10ge1xyXG4gICAgaWYgKCFhcnIgfHwgIWZuKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQ6IFRhcmdldFR5cGVbXSA9IFtdXHJcbiAgICBsZXQgdGVtcDogVGFyZ2V0VHlwZSB8IG51bGwgfCB1bmRlZmluZWRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGVtcCA9IGZuKGFycltpXSwgaSlcclxuICAgICAgICBpZiAodGVtcCA9PSBudWxsIHx8IHR5cGVvZiAodGVtcCkgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0LnB1c2godGVtcClcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuLyoqXHJcbiAqIOagueaNrui1t+Wni+WAvOWSjOe7iOeCueWAvOWIm+W7uuS4gOS4quaVsOe7hO+8jOWmgu+8mlsxLDIsMyw0Li4uLl1cclxuICogQHBhcmFtIHN0YXJ0VmFsdWUg6LW35aeL5YC877yI5YyF5ZCr77yJXHJcbiAqIEBwYXJhbSBlbmRWYWx1ZSDnu4jngrnlgLzvvIjljIXlkKvvvIlcclxuICogQHBhcmFtIHN0ZXAg5q2l6ZW/77yM6buY6K6k5Li6IDFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOdW1iZXJBcnJheShzdGFydFZhbHVlOiBudW1iZXIsIGVuZFZhbHVlOiBudW1iZXIsIHN0ZXA/OiBudW1iZXIpIHtcclxuICAgIGxldCBzdGVwVmFsdWUgPSAxXHJcbiAgICBpZiAoc3RlcCkge1xyXG4gICAgICAgIHN0ZXBWYWx1ZSA9IHN0ZXBcclxuICAgIH1cclxuICAgIGNvbnN0IGFyciA9IFtdIGFzIG51bWJlcltdXHJcbiAgICBmb3IgKGxldCBpID0gc3RhcnRWYWx1ZTsgaSA8PSBlbmRWYWx1ZTsgaSArPSBzdGVwVmFsdWUpIHtcclxuICAgICAgICBhcnIucHVzaChpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyclxyXG59Il19