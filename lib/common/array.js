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

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vYXJyYXkudHMiXSwibmFtZXMiOlsic3BsaXRBcnJheSIsImFyciIsInN0ZXBDb3VudCIsImxlbmd0aCIsImFyckxlbiIsIm5ld0FycmF5IiwibWF4Q291bnQiLCJNYXRoIiwiY2VpbCIsInN0YXJ0SW5kZXgiLCJpIiwic2xpY2UiLCJ1bmlxdWUiLCJBcnJheSIsImZyb20iLCJTZXQiLCJ1bmlvbiIsImFycjEiLCJhcnIyIiwiYTEiLCJhMiIsImludGVyc2VjdCIsImZpbHRlciIsIngiLCJpbmNsdWRlcyIsImRpZmYiLCJkaWZmMSIsImRpZmYyIiwibWFwIiwiZm4iLCJyZXN1bHQiLCJ0ZW1wIiwicHVzaCIsImNyZWF0ZU51bWJlckFycmF5Iiwic3RhcnRWYWx1ZSIsImVuZFZhbHVlIiwic3RlcCIsInN0ZXBWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUtPLFNBQVNBLFVBQVQsQ0FBdUJDLEdBQXZCLEVBQWlDQyxTQUFqQyxFQUEyRDtBQUM5RCxNQUFJLENBQUNELEdBQUQsSUFBUSxDQUFDQSxHQUFHLENBQUNFLE1BQWIsSUFBdUJELFNBQVMsSUFBSSxDQUF4QyxFQUEyQztBQUN2QyxXQUFPLEVBQVA7QUFDSDs7QUFDRCxNQUFNRSxNQUFNLEdBQUdILEdBQUcsQ0FBQ0UsTUFBbkI7O0FBQ0EsTUFBSUMsTUFBTSxJQUFJRixTQUFkLEVBQXlCO0FBQ3JCLFdBQU8sQ0FBQ0QsR0FBRCxDQUFQO0FBQ0g7O0FBQ0QsTUFBTUksUUFBZSxHQUFHLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUosTUFBTSxHQUFHRixTQUFuQixDQUFqQjtBQUNBLE1BQUlPLFVBQVUsR0FBRyxDQUFqQjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLFFBQXBCLEVBQThCSSxDQUFDLEVBQS9CLEVBQW1DO0FBQy9CTCxJ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QVo7QUFDSDs7QUFDRCxNQUFNbkMsR0FBRyxHQUFHLEVBQVo7O0FBQ0EsT0FBSyxJQUFJUyxDQUFDLEdBQUd3QixVQUFiLEVBQXlCeEIsQ0FBQyxJQUFJeUIsUUFBOUIsRUFBd0N6QixDQUFDLElBQUkyQixTQUE3QyxFQUF3RDtBQUNwRHBDLElBQUFBLEdBQUcsQ0FBQytCLElBQUosQ0FBU3RCLENBQVQ7QUFDSDs7QUFDRCxTQUFPVCxHQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5bCG5LiA5Liq5pWw57uE5ouG5YiG5Li65aSa5Liq5pWw57uEXHJcbiAqIEBwYXJhbSBhcnIg5Y6f5pWw57uEXHJcbiAqIEBwYXJhbSBzdGVwQ291bnQg5ouG5YiG5ZCO77yM5q+P5Liq5pWw57uE5pyA5aSa5YyF5ZCr55qE6aG55pWw6YePXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRBcnJheTxUPihhcnI6IFRbXSwgc3RlcENvdW50OiBudW1iZXIpOiBUW11bXSB7XHJcbiAgICBpZiAoIWFyciB8fCAhYXJyLmxlbmd0aCB8fCBzdGVwQ291bnQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gICAgY29uc3QgYXJyTGVuID0gYXJyLmxlbmd0aFxyXG4gICAgaWYgKGFyckxlbiA8PSBzdGVwQ291bnQpIHtcclxuICAgICAgICByZXR1cm4gW2Fycl1cclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0FycmF5OiBUW11bXSA9IFtdXHJcbiAgICBjb25zdCBtYXhDb3VudCA9IE1hdGguY2VpbChhcnJMZW4gLyBzdGVwQ291bnQpXHJcbiAgICBsZXQgc3RhcnRJbmRleCA9IDBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4Q291bnQ7IGkrKykge1xyXG4gICAgICAgIG5ld0FycmF5W2ldID0gYXJyLnNsaWNlKHN0YXJ0SW5kZXgsIChpICsgMSkgKiBzdGVwQ291bnQpXHJcbiAgICAgICAgc3RhcnRJbmRleCArPSBzdGVwQ291bnRcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdBcnJheVxyXG59XHJcblxyXG4vKipcclxuICog5Y675o6JYXJyYXnkuK3nmoTph43lpI3poblcclxuICogQHBhcmFtIGFyciDpnIDopoHljrvph43nmoTmlbDnu4RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWU8VD4oYXJyOiBUW10pOiBUW10ge1xyXG4gICAgaWYgKCFhcnIpIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWQiOW5tuS4pOS4quaVsOe7hO+8iOacquWOu+mHje+8iVxyXG4gKiBAcGFyYW0gYXJyMSDmlbDnu4QxXHJcbiAqIEBwYXJhbSBhcnIyIOaVsOe7hDJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmlvbjxUPihhcnIxOiBUW10sIGFycjI6IFRbXSk6IFRbXSB7XHJcbiAgICBjb25zdCBhMSA9IGFycjEgfHwgW10sIGEyID0gYXJyMiB8fCBbXVxyXG4gICAgcmV0dXJuIFsuLi5hMSwgLi4uYTJdXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5bkuKTkuKrmlbDnu4TnmoTkuqTpm4bvvIjlt7Lljrvph43vvIlcclxuICogQHBhcmFtIGFycjEg5pWw57uEMVxyXG4gKiBAcGFyYW0gYXJyMiDmlbDnu4QyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0PFQ+KGFycjE6IFRbXSwgYXJyMjogVFtdKTogVFtdIHtcclxuICAgIGNvbnN0IGExID0gYXJyMSB8fCBbXSwgYTIgPSBhcnIyIHx8IFtdXHJcbiAgICByZXR1cm4gdW5pcXVlKGExLmZpbHRlcih4ID0+IGEyLmluY2x1ZGVzKHgpKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluS4pOS4quaVsOe7hOeahOW3rumbhu+8iOW3suWOu+mHje+8iVxyXG4gKiBAcGFyYW0gYXJyMSDmlbDnu4QxXHJcbiAqIEBwYXJhbSBhcnIyIOaVsOe7hDJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWZmPFQ+KGFycjE6IFRbXSwgYXJyMjogVFtdKTogVFtdIHtcclxuICAgIGNvbnN0IGExID0gYXJyMSB8fCBbXSwgYTIgPSBhcnIyIHx8IFtdXHJcbiAgICBjb25zdCBkaWZmMSA9IGExLmZpbHRlcih4ID0+ICFhMi5pbmNsdWRlcyh4KSlcclxuICAgIGNvbnN0IGRpZmYyID0gYTIuZmlsdGVyKHggPT4gIWExLmluY2x1ZGVzKHgpKVxyXG4gICAgcmV0dXJuIHVuaXF1ZShbLi4uZGlmZjEsIC4uLmRpZmYyXSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOmBjeWOhuaMh+WumuaVsOe7hOW5tui/lOWbnuS4gOS4quaWsOaVsOe7hO+8iOS4juWOn+eUn21hcOS4jeS4gOagt+eahOWcsOaWueaYr++8muWOn+eUn21hcOS4reacqui/h+a7pG51bGzlkox1bmRlZmluZWTvvIzogIzmraTmlrnms5XkvJrov4fmu6TvvIlcclxuICogQHBhcmFtIGFyciDpnIDopoHpgY3ljobnmoTmlbDnu4RcclxuICogQHBhcmFtIGZuIOWkhOeQhuWHveaVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcDxUPihhcnI6IGFueVtdLCBmbjogKGl0ZW06IGFueSwgaWR4PzogbnVtYmVyKSA9PiBUIHwgbnVsbCB8IHVuZGVmaW5lZCk6IFRbXSB7XHJcbiAgICBpZiAoIWFyciB8fCAhZm4pIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdDogVFtdID0gW11cclxuICAgIGxldCB0ZW1wOiBUIHwgbnVsbCB8IHVuZGVmaW5lZFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0ZW1wID0gZm4oYXJyW2ldLCBpKVxyXG4gICAgICAgIGlmICh0ZW1wID09IG51bGwgfHwgdHlwZW9mICh0ZW1wKSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQucHVzaCh0ZW1wKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG4vKipcclxuICog5qC55o2u6LW35aeL5YC85ZKM57uI54K55YC85Yib5bu65LiA5Liq5pWw57uE77yM5aaC77yaWzEsMiwzLDQuLi4uXVxyXG4gKiBAcGFyYW0gc3RhcnRWYWx1ZSDotbflp4vlgLzvvIjljIXlkKvvvIlcclxuICogQHBhcmFtIGVuZFZhbHVlIOe7iOeCueWAvO+8iOWMheWQq++8iVxyXG4gKiBAcGFyYW0gc3RlcCDmraXplb/vvIzpu5jorqTkuLogMVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU51bWJlckFycmF5KHN0YXJ0VmFsdWU6IG51bWJlciwgZW5kVmFsdWU6IG51bWJlciwgc3RlcD86IG51bWJlcikge1xyXG4gICAgbGV0IHN0ZXBWYWx1ZSA9IDFcclxuICAgIGlmIChzdGVwKSB7XHJcbiAgICAgICAgc3RlcFZhbHVlID0gc3RlcFxyXG4gICAgfVxyXG4gICAgY29uc3QgYXJyID0gW10gYXMgbnVtYmVyW11cclxuICAgIGZvciAobGV0IGkgPSBzdGFydFZhbHVlOyBpIDw9IGVuZFZhbHVlOyBpICs9IHN0ZXBWYWx1ZSkge1xyXG4gICAgICAgIGFyci5wdXNoKGkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyXHJcbn0iXX0=