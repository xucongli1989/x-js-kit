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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vYXJyYXkudHMiXSwibmFtZXMiOlsic3BsaXRBcnJheSIsImFyciIsInN0ZXBDb3VudCIsImxlbmd0aCIsImFyckxlbiIsIm5ld0FycmF5IiwibWF4Q291bnQiLCJNYXRoIiwiY2VpbCIsInN0YXJ0SW5kZXgiLCJpIiwic2xpY2UiLCJ1bmlxdWUiLCJBcnJheSIsImZyb20iLCJTZXQiLCJ1bmlvbiIsImFycjEiLCJhcnIyIiwiYTEiLCJhMiIsImludGVyc2VjdCIsImZpbHRlciIsIngiLCJpbmNsdWRlcyIsImRpZmYiLCJkaWZmMSIsImRpZmYyIiwibWFwIiwiZm4iLCJyZXN1bHQiLCJ0ZW1wIiwicHVzaCIsImNyZWF0ZU51bWJlckFycmF5Iiwic3RhcnRWYWx1ZSIsImVuZFZhbHVlIiwic3RlcCIsInN0ZXBWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxVQUFULENBQXVCQyxHQUF2QixFQUFpQ0MsU0FBakMsRUFBMkQ7QUFDOUQsTUFBSSxDQUFDRCxHQUFELElBQVEsQ0FBQ0EsR0FBRyxDQUFDRSxNQUFiLElBQXVCRCxTQUFTLElBQUksQ0FBeEMsRUFBMkM7QUFDdkMsV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsTUFBTUUsTUFBTSxHQUFHSCxHQUFHLENBQUNFLE1BQW5COztBQUNBLE1BQUlDLE1BQU0sSUFBSUYsU0FBZCxFQUF5QjtBQUNyQixXQUFPLENBQUNELEdBQUQsQ0FBUDtBQUNIOztBQUNELE1BQU1JLFFBQWUsR0FBRyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVKLE1BQU0sR0FBR0YsU0FBbkIsQ0FBakI7QUFDQSxNQUFJTyxVQUFVLEdBQUcsQ0FBakI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixRQUFwQixFQUE4QkksQ0FBQyxFQUEvQixFQUFtQztBQUMvQkwsSUFBQUEsUUFBUSxDQUFDSyxDQUFELENBQVIsR0FBY1QsR0FBRyxDQUFDVSxLQUFKLENBQVVGLFVBQVYsRUFBc0IsQ0FBQ0MsQ0FBQyxHQUFHLENBQUwsSUFBVVIsU0FBaEMsQ0FBZDtBQUNBTyxJQUFBQSxVQUFVLElBQUlQLFNBQWQ7QUFDSDs7QUFDRCxTQUFPRyxRQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU08sTUFBVCxDQUFtQlgsR0FBbkIsRUFBa0M7QUFDckMsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixXQUFPLEVBQVA7QUFDSDs7QUFDRCxTQUFPWSxLQUFLLENBQUNDLElBQU4sQ0FBVyxJQUFJQyxHQUFKLENBQVFkLEdBQVIsQ0FBWCxDQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTZSxLQUFULENBQWtCQyxJQUFsQixFQUE2QkMsSUFBN0IsRUFBNkM7QUFDaEQsTUFBTUMsRUFBRSxHQUFHRixJQUFJLElBQUksRUFBbkI7QUFBQSxNQUNJRyxFQUFFLEdBQUdGLElBQUksSUFBSSxFQURqQjtBQUVBLHNDQUFXQyxFQUFYLHNCQUFrQkMsRUFBbEI7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNDLFNBQVQsQ0FBc0JKLElBQXRCLEVBQWlDQyxJQUFqQyxFQUFpRDtBQUNwRCxNQUFNQyxFQUFFLEdBQUdGLElBQUksSUFBSSxFQUFuQjtBQUFBLE1BQ0lHLEVBQUUsR0FBR0YsSUFBSSxJQUFJLEVBRGpCO0FBRUEsU0FBT04sTUFBTSxDQUFDTyxFQUFFLENBQUNHLE1BQUgsQ0FBVSxVQUFDQyxDQUFEO0FBQUEsV0FBT0gsRUFBRSxDQUFDSSxRQUFILENBQVlELENBQVosQ0FBUDtBQUFBLEdBQVYsQ0FBRCxDQUFiO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTRSxJQUFULENBQWlCUixJQUFqQixFQUE0QkMsSUFBNUIsRUFBNEM7QUFDL0MsTUFBTUMsRUFBRSxHQUFHRixJQUFJLElBQUksRUFBbkI7QUFBQSxNQUNJRyxFQUFFLEdBQUdGLElBQUksSUFBSSxFQURqQjtBQUVBLE1BQU1RLEtBQUssR0FBR1AsRUFBRSxDQUFDRyxNQUFILENBQVUsVUFBQ0MsQ0FBRDtBQUFBLFdBQU8sQ0FBQ0gsRUFBRSxDQUFDSSxRQUFILENBQVlELENBQVosQ0FBUjtBQUFBLEdBQVYsQ0FBZDtBQUNBLE1BQU1JLEtBQUssR0FBR1AsRUFBRSxDQUFDRSxNQUFILENBQVUsVUFBQ0MsQ0FBRDtBQUFBLFdBQU8sQ0FBQ0osRUFBRSxDQUFDSyxRQUFILENBQVlELENBQVosQ0FBUjtBQUFBLEdBQVYsQ0FBZDtBQUNBLFNBQU9YLE1BQU0sOEJBQUtjLEtBQUwsc0JBQWVDLEtBQWYsR0FBYjtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0MsR0FBVCxDQUFpRDNCLEdBQWpELEVBQW9FNEIsRUFBcEUsRUFBeUo7QUFDNUosTUFBSSxDQUFDNUIsR0FBRCxJQUFRLENBQUM0QixFQUFiLEVBQWlCO0FBQ2IsV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsTUFBTUMsTUFBb0IsR0FBRyxFQUE3QjtBQUNBLE1BQUlDLElBQUo7O0FBQ0EsT0FBSyxJQUFJckIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1QsR0FBRyxDQUFDRSxNQUF4QixFQUFnQ08sQ0FBQyxFQUFqQyxFQUFxQztBQUNqQ3FCLElBQUFBLElBQUksR0FBR0YsRUFBRSxDQUFDNUIsR0FBRyxDQUFDUyxDQUFELENBQUosRUFBU0EsQ0FBVCxDQUFUOztBQUNBLFFBQUlxQixJQUFJLElBQUksSUFBUixJQUFnQixPQUFPQSxJQUFQLElBQWUsV0FBbkMsRUFBZ0Q7QUFDNUM7QUFDSDs7QUFDREQsSUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVlELElBQVo7QUFDSDs7QUFDRCxTQUFPRCxNQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNHLGlCQUFULENBQTJCQyxVQUEzQixFQUErQ0MsUUFBL0MsRUFBaUVDLElBQWpFLEVBQWdGO0FBQ25GLE1BQUlDLFNBQVMsR0FBRyxDQUFoQjs7QUFDQSxNQUFJRCxJQUFKLEVBQVU7QUFDTkMsSUFBQUEsU0FBUyxHQUFHRCxJQUFaO0FBQ0g7O0FBQ0QsTUFBTW5DLEdBQUcsR0FBRyxFQUFaOztBQUNBLE9BQUssSUFBSVMsQ0FBQyxHQUFHd0IsVUFBYixFQUF5QnhCLENBQUMsSUFBSXlCLFFBQTlCLEVBQXdDekIsQ0FBQyxJQUFJMkIsU0FBN0MsRUFBd0Q7QUFDcERwQyxJQUFBQSxHQUFHLENBQUMrQixJQUFKLENBQVN0QixDQUFUO0FBQ0g7O0FBQ0QsU0FBT1QsR0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWwhuS4gOS4quaVsOe7hOaLhuWIhuS4uuWkmuS4quaVsOe7hFxyXG4gKiBAcGFyYW0gYXJyIOWOn+aVsOe7hFxyXG4gKiBAcGFyYW0gc3RlcENvdW50IOaLhuWIhuWQju+8jOavj+S4quaVsOe7hOacgOWkmuWMheWQq+eahOmhueaVsOmHj1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0QXJyYXk8VD4oYXJyOiBUW10sIHN0ZXBDb3VudDogbnVtYmVyKTogVFtdW10ge1xyXG4gICAgaWYgKCFhcnIgfHwgIWFyci5sZW5ndGggfHwgc3RlcENvdW50IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGNvbnN0IGFyckxlbiA9IGFyci5sZW5ndGhcclxuICAgIGlmIChhcnJMZW4gPD0gc3RlcENvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIFthcnJdXHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdBcnJheTogVFtdW10gPSBbXVxyXG4gICAgY29uc3QgbWF4Q291bnQgPSBNYXRoLmNlaWwoYXJyTGVuIC8gc3RlcENvdW50KVxyXG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heENvdW50OyBpKyspIHtcclxuICAgICAgICBuZXdBcnJheVtpXSA9IGFyci5zbGljZShzdGFydEluZGV4LCAoaSArIDEpICogc3RlcENvdW50KVxyXG4gICAgICAgIHN0YXJ0SW5kZXggKz0gc3RlcENvdW50XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3QXJyYXlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+aOiWFycmF55Lit55qE6YeN5aSN6aG5XHJcbiAqIEBwYXJhbSBhcnIg6ZyA6KaB5Y676YeN55qE5pWw57uEXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlPFQ+KGFycjogVFtdKTogVFtdIHtcclxuICAgIGlmICghYXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFycikpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlkIjlubbkuKTkuKrmlbDnu4TvvIjmnKrljrvph43vvIlcclxuICogQHBhcmFtIGFycjEg5pWw57uEMVxyXG4gKiBAcGFyYW0gYXJyMiDmlbDnu4QyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5pb248VD4oYXJyMTogVFtdLCBhcnIyOiBUW10pOiBUW10ge1xyXG4gICAgY29uc3QgYTEgPSBhcnIxIHx8IFtdLFxyXG4gICAgICAgIGEyID0gYXJyMiB8fCBbXVxyXG4gICAgcmV0dXJuIFsuLi5hMSwgLi4uYTJdXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5bkuKTkuKrmlbDnu4TnmoTkuqTpm4bvvIjlt7Lljrvph43vvIlcclxuICogQHBhcmFtIGFycjEg5pWw57uEMVxyXG4gKiBAcGFyYW0gYXJyMiDmlbDnu4QyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0PFQ+KGFycjE6IFRbXSwgYXJyMjogVFtdKTogVFtdIHtcclxuICAgIGNvbnN0IGExID0gYXJyMSB8fCBbXSxcclxuICAgICAgICBhMiA9IGFycjIgfHwgW11cclxuICAgIHJldHVybiB1bmlxdWUoYTEuZmlsdGVyKCh4KSA9PiBhMi5pbmNsdWRlcyh4KSkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5bkuKTkuKrmlbDnu4TnmoTlt67pm4bvvIjlt7Lljrvph43vvIlcclxuICogQHBhcmFtIGFycjEg5pWw57uEMVxyXG4gKiBAcGFyYW0gYXJyMiDmlbDnu4QyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlmZjxUPihhcnIxOiBUW10sIGFycjI6IFRbXSk6IFRbXSB7XHJcbiAgICBjb25zdCBhMSA9IGFycjEgfHwgW10sXHJcbiAgICAgICAgYTIgPSBhcnIyIHx8IFtdXHJcbiAgICBjb25zdCBkaWZmMSA9IGExLmZpbHRlcigoeCkgPT4gIWEyLmluY2x1ZGVzKHgpKVxyXG4gICAgY29uc3QgZGlmZjIgPSBhMi5maWx0ZXIoKHgpID0+ICFhMS5pbmNsdWRlcyh4KSlcclxuICAgIHJldHVybiB1bmlxdWUoWy4uLmRpZmYxLCAuLi5kaWZmMl0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpgY3ljobmjIflrprmlbDnu4Tlubbov5Tlm57kuIDkuKrmlrDmlbDnu4TvvIjkuI7ljp/nlJ9tYXDkuI3kuIDmoLfnmoTlnLDmlrnmmK/vvJrljp/nlJ9tYXDkuK3mnKrov4fmu6RudWxs5ZKMdW5kZWZpbmVk77yM6ICM5q2k5pa55rOV5Lya6L+H5ruk77yJXHJcbiAqIEBwYXJhbSBhcnIg6ZyA6KaB6YGN5Y6G55qE5pWw57uEXHJcbiAqIEBwYXJhbSBmbiDlpITnkIblh73mlbBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXA8VGFyZ2V0VHlwZSA9IGFueSwgU291cmNlVHlwZSA9IGFueT4oYXJyOiBTb3VyY2VUeXBlW10sIGZuOiAoaXRlbTogU291cmNlVHlwZSwgaWR4PzogbnVtYmVyKSA9PiBUYXJnZXRUeXBlIHwgbnVsbCB8IHVuZGVmaW5lZCk6IFRhcmdldFR5cGVbXSB7XHJcbiAgICBpZiAoIWFyciB8fCAhZm4pIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdDogVGFyZ2V0VHlwZVtdID0gW11cclxuICAgIGxldCB0ZW1wOiBUYXJnZXRUeXBlIHwgbnVsbCB8IHVuZGVmaW5lZFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0ZW1wID0gZm4oYXJyW2ldLCBpKVxyXG4gICAgICAgIGlmICh0ZW1wID09IG51bGwgfHwgdHlwZW9mIHRlbXAgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQucHVzaCh0ZW1wKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG4vKipcclxuICog5qC55o2u6LW35aeL5YC85ZKM57uI54K55YC85Yib5bu65LiA5Liq5pWw57uE77yM5aaC77yaWzEsMiwzLDQuLi4uXVxyXG4gKiBAcGFyYW0gc3RhcnRWYWx1ZSDotbflp4vlgLzvvIjljIXlkKvvvIlcclxuICogQHBhcmFtIGVuZFZhbHVlIOe7iOeCueWAvO+8iOWMheWQq++8iVxyXG4gKiBAcGFyYW0gc3RlcCDmraXplb/vvIzpu5jorqTkuLogMVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU51bWJlckFycmF5KHN0YXJ0VmFsdWU6IG51bWJlciwgZW5kVmFsdWU6IG51bWJlciwgc3RlcD86IG51bWJlcikge1xyXG4gICAgbGV0IHN0ZXBWYWx1ZSA9IDFcclxuICAgIGlmIChzdGVwKSB7XHJcbiAgICAgICAgc3RlcFZhbHVlID0gc3RlcFxyXG4gICAgfVxyXG4gICAgY29uc3QgYXJyID0gW10gYXMgbnVtYmVyW11cclxuICAgIGZvciAobGV0IGkgPSBzdGFydFZhbHVlOyBpIDw9IGVuZFZhbHVlOyBpICs9IHN0ZXBWYWx1ZSkge1xyXG4gICAgICAgIGFyci5wdXNoKGkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyXHJcbn1cclxuIl19