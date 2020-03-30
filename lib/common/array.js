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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vYXJyYXkudHMiXSwibmFtZXMiOlsic3BsaXRBcnJheSIsImFyciIsInN0ZXBDb3VudCIsImxlbmd0aCIsImFyckxlbiIsIm5ld0FycmF5IiwibWF4Q291bnQiLCJNYXRoIiwiY2VpbCIsInN0YXJ0SW5kZXgiLCJpIiwic2xpY2UiLCJ1bmlxdWUiLCJBcnJheSIsImZyb20iLCJTZXQiLCJ1bmlvbiIsImFycjEiLCJhcnIyIiwiYTEiLCJhMiIsImludGVyc2VjdCIsImZpbHRlciIsIngiLCJpbmNsdWRlcyIsImRpZmYiLCJkaWZmMSIsImRpZmYyIiwibWFwIiwiZm4iLCJyZXN1bHQiLCJ0ZW1wIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBS08sU0FBU0EsVUFBVCxDQUF1QkMsR0FBdkIsRUFBaUNDLFNBQWpDLEVBQTJEO0FBQzlELE1BQUksQ0FBQ0QsR0FBRCxJQUFRLENBQUNBLEdBQUcsQ0FBQ0UsTUFBYixJQUF1QkQsU0FBUyxJQUFJLENBQXhDLEVBQTJDO0FBQ3ZDLFdBQU8sRUFBUDtBQUNIOztBQUNELE1BQU1FLE1BQU0sR0FBR0gsR0FBRyxDQUFDRSxNQUFuQjs7QUFDQSxNQUFJQyxNQUFNLElBQUlGLFNBQWQsRUFBeUI7QUFDckIsV0FBTyxDQUFDRCxHQUFELENBQVA7QUFDSDs7QUFDRCxNQUFNSSxRQUFlLEdBQUcsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVSixNQUFNLEdBQUdGLFNBQW5CLENBQWpCO0FBQ0EsTUFBSU8sVUFBVSxHQUFHLENBQWpCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osUUFBcEIsRUFBOEJJLENBQUMsRUFBL0IsRUFBbUM7QUFDL0JMLElBQUFBLFFBQVEsQ0FBQ0ssQ0FBRCxDQUFSLEdBQWNULEdBQUcsQ0FBQ1UsS0FBSixDQUFVRixVQUFWLEVBQXNCLENBQUNDLENBQUMsR0FBRyxDQUFMLElBQVVSLFNBQWhDLENBQWQ7QUFDQU8sSUFBQUEsVUFBVSxJQUFJUCxTQUFkO0FBQ0g7O0FBQ0QsU0FBT0csUUFBUDtBQUNIO0FBRUQ7Ozs7OztBQUlPLFNBQVNPLE1BQVQsQ0FBbUJYLEdBQW5CLEVBQWtDO0FBQ3JDLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsU0FBT1ksS0FBSyxDQUFDQyxJQUFOLENBQVcsSUFBSUMsR0FBSixDQUFRZCxHQUFSLENBQVgsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTZSxLQUFULENBQWtCQyxJQUFsQixFQUE2QkMsSUFBN0IsRUFBNkM7QUFDaEQsTUFBTUMsRUFBRSxHQUFHRixJQUFJLElBQUksRUFBbkI7QUFBQSxNQUF1QkcsRUFBRSxHQUFHRixJQUFJLElBQUksRUFBcEM7QUFDQSxzQ0FBV0MsRUFBWCxzQkFBa0JDLEVBQWxCO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNDLFNBQVQsQ0FBc0JKLElBQXRCLEVBQWlDQyxJQUFqQyxFQUFpRDtBQUNwRCxNQUFNQyxFQUFFLEdBQUdGLElBQUksSUFBSSxFQUFuQjtBQUFBLE1BQXVCRyxFQUFFLEdBQUdGLElBQUksSUFBSSxFQUFwQztBQUNBLFNBQU9OLE1BQU0sQ0FBQ08sRUFBRSxDQUFDRyxNQUFILENBQVUsVUFBQUMsQ0FBQztBQUFBLFdBQUlILEVBQUUsQ0FBQ0ksUUFBSCxDQUFZRCxDQUFaLENBQUo7QUFBQSxHQUFYLENBQUQsQ0FBYjtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTRSxJQUFULENBQWlCUixJQUFqQixFQUE0QkMsSUFBNUIsRUFBNEM7QUFDL0MsTUFBTUMsRUFBRSxHQUFHRixJQUFJLElBQUksRUFBbkI7QUFBQSxNQUF1QkcsRUFBRSxHQUFHRixJQUFJLElBQUksRUFBcEM7QUFDQSxNQUFNUSxLQUFLLEdBQUdQLEVBQUUsQ0FBQ0csTUFBSCxDQUFVLFVBQUFDLENBQUM7QUFBQSxXQUFJLENBQUNILEVBQUUsQ0FBQ0ksUUFBSCxDQUFZRCxDQUFaLENBQUw7QUFBQSxHQUFYLENBQWQ7QUFDQSxNQUFNSSxLQUFLLEdBQUdQLEVBQUUsQ0FBQ0UsTUFBSCxDQUFVLFVBQUFDLENBQUM7QUFBQSxXQUFJLENBQUNKLEVBQUUsQ0FBQ0ssUUFBSCxDQUFZRCxDQUFaLENBQUw7QUFBQSxHQUFYLENBQWQ7QUFDQSxTQUFPWCxNQUFNLDhCQUFLYyxLQUFMLHNCQUFlQyxLQUFmLEdBQWI7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU0MsR0FBVCxDQUFnQjNCLEdBQWhCLEVBQTRCNEIsRUFBNUIsRUFBd0Y7QUFDM0YsTUFBSSxDQUFDNUIsR0FBRCxJQUFRLENBQUM0QixFQUFiLEVBQWlCO0FBQ2IsV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsTUFBTUMsTUFBVyxHQUFHLEVBQXBCO0FBQ0EsTUFBSUMsSUFBSjs7QUFDQSxPQUFLLElBQUlyQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVCxHQUFHLENBQUNFLE1BQXhCLEVBQWdDTyxDQUFDLEVBQWpDLEVBQXFDO0FBQ2pDcUIsSUFBQUEsSUFBSSxHQUFHRixFQUFFLENBQUM1QixHQUFHLENBQUNTLENBQUQsQ0FBSixFQUFTQSxDQUFULENBQVQ7O0FBQ0EsUUFBSXFCLElBQUksSUFBSSxJQUFSLElBQWdCLE9BQVFBLElBQVIsSUFBaUIsV0FBckMsRUFBa0Q7QUFDOUM7QUFDSDs7QUFDREQsSUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVlELElBQVo7QUFDSDs7QUFDRCxTQUFPRCxNQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5bCG5LiA5Liq5pWw57uE5ouG5YiG5Li65aSa5Liq5pWw57uEXHJcbiAqIEBwYXJhbSBhcnIg5Y6f5pWw57uEXHJcbiAqIEBwYXJhbSBzdGVwQ291bnQg5ouG5YiG5ZCO77yM5q+P5Liq5pWw57uE5pyA5aSa5YyF5ZCr55qE6aG55pWw6YePXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRBcnJheTxUPihhcnI6IFRbXSwgc3RlcENvdW50OiBudW1iZXIpOiBUW11bXSB7XHJcbiAgICBpZiAoIWFyciB8fCAhYXJyLmxlbmd0aCB8fCBzdGVwQ291bnQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gICAgY29uc3QgYXJyTGVuID0gYXJyLmxlbmd0aFxyXG4gICAgaWYgKGFyckxlbiA8PSBzdGVwQ291bnQpIHtcclxuICAgICAgICByZXR1cm4gW2Fycl1cclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0FycmF5OiBUW11bXSA9IFtdXHJcbiAgICBjb25zdCBtYXhDb3VudCA9IE1hdGguY2VpbChhcnJMZW4gLyBzdGVwQ291bnQpXHJcbiAgICBsZXQgc3RhcnRJbmRleCA9IDBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4Q291bnQ7IGkrKykge1xyXG4gICAgICAgIG5ld0FycmF5W2ldID0gYXJyLnNsaWNlKHN0YXJ0SW5kZXgsIChpICsgMSkgKiBzdGVwQ291bnQpXHJcbiAgICAgICAgc3RhcnRJbmRleCArPSBzdGVwQ291bnRcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdBcnJheVxyXG59XHJcblxyXG4vKipcclxuICog5Y675o6JYXJyYXnkuK3nmoTph43lpI3poblcclxuICogQHBhcmFtIGFyciDpnIDopoHljrvph43nmoTmlbDnu4RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWU8VD4oYXJyOiBUW10pOiBUW10ge1xyXG4gICAgaWYgKCFhcnIpIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWQiOW5tuS4pOS4quaVsOe7hO+8iOacquWOu+mHje+8iVxyXG4gKiBAcGFyYW0gYXJyMSDmlbDnu4QxXHJcbiAqIEBwYXJhbSBhcnIyIOaVsOe7hDJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmlvbjxUPihhcnIxOiBUW10sIGFycjI6IFRbXSk6IFRbXSB7XHJcbiAgICBjb25zdCBhMSA9IGFycjEgfHwgW10sIGEyID0gYXJyMiB8fCBbXVxyXG4gICAgcmV0dXJuIFsuLi5hMSwgLi4uYTJdXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5bkuKTkuKrmlbDnu4TnmoTkuqTpm4bvvIjlt7Lljrvph43vvIlcclxuICogQHBhcmFtIGFycjEg5pWw57uEMVxyXG4gKiBAcGFyYW0gYXJyMiDmlbDnu4QyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0PFQ+KGFycjE6IFRbXSwgYXJyMjogVFtdKTogVFtdIHtcclxuICAgIGNvbnN0IGExID0gYXJyMSB8fCBbXSwgYTIgPSBhcnIyIHx8IFtdXHJcbiAgICByZXR1cm4gdW5pcXVlKGExLmZpbHRlcih4ID0+IGEyLmluY2x1ZGVzKHgpKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluS4pOS4quaVsOe7hOeahOW3rumbhu+8iOW3suWOu+mHje+8iVxyXG4gKiBAcGFyYW0gYXJyMSDmlbDnu4QxXHJcbiAqIEBwYXJhbSBhcnIyIOaVsOe7hDJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWZmPFQ+KGFycjE6IFRbXSwgYXJyMjogVFtdKTogVFtdIHtcclxuICAgIGNvbnN0IGExID0gYXJyMSB8fCBbXSwgYTIgPSBhcnIyIHx8IFtdXHJcbiAgICBjb25zdCBkaWZmMSA9IGExLmZpbHRlcih4ID0+ICFhMi5pbmNsdWRlcyh4KSlcclxuICAgIGNvbnN0IGRpZmYyID0gYTIuZmlsdGVyKHggPT4gIWExLmluY2x1ZGVzKHgpKVxyXG4gICAgcmV0dXJuIHVuaXF1ZShbLi4uZGlmZjEsIC4uLmRpZmYyXSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOmBjeWOhuaMh+WumuaVsOe7hOW5tui/lOWbnuS4gOS4quaWsOaVsOe7hO+8iOS4juWOn+eUn21hcOS4jeS4gOagt+eahOWcsOaWueaYr++8muWOn+eUn21hcOS4reacqui/h+a7pG51bGzlkox1bmRlZmluZWTvvIzogIzmraTmlrnms5XkvJrov4fmu6TvvIlcclxuICogQHBhcmFtIGFyciDpnIDopoHpgY3ljobnmoTmlbDnu4RcclxuICogQHBhcmFtIGZuIOWkhOeQhuWHveaVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcDxUPihhcnI6IGFueVtdLCBmbjogKGl0ZW06IGFueSwgaWR4PzogbnVtYmVyKSA9PiBUIHwgbnVsbCB8IHVuZGVmaW5lZCk6IFRbXSB7XHJcbiAgICBpZiAoIWFyciB8fCAhZm4pIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdDogVFtdID0gW11cclxuICAgIGxldCB0ZW1wOiBUIHwgbnVsbCB8IHVuZGVmaW5lZFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0ZW1wID0gZm4oYXJyW2ldLCBpKVxyXG4gICAgICAgIGlmICh0ZW1wID09IG51bGwgfHwgdHlwZW9mICh0ZW1wKSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQucHVzaCh0ZW1wKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59Il19