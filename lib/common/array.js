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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

  var result = [],
      temp;

  for (var i = 0; i < arr.length; i++) {
    temp = fn(arr[i], i);

    if (temp == null || typeof temp == 'undefined') {
      continue;
    }

    result.push(temp);
  }

  return result;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vYXJyYXkudHMiXSwibmFtZXMiOlsic3BsaXRBcnJheSIsImFyciIsInN0ZXBDb3VudCIsImxlbmd0aCIsImFyckxlbiIsIm5ld0FycmF5IiwibWF4Q291bnQiLCJNYXRoIiwiY2VpbCIsInN0YXJ0SW5kZXgiLCJpIiwic2xpY2UiLCJ1bmlxdWUiLCJBcnJheSIsImZyb20iLCJTZXQiLCJ1bmlvbiIsImFycjEiLCJhcnIyIiwiYTEiLCJhMiIsImludGVyc2VjdCIsImZpbHRlciIsIngiLCJpbmNsdWRlcyIsImRpZmYiLCJkaWZmMSIsImRpZmYyIiwibWFwIiwiZm4iLCJyZXN1bHQiLCJ0ZW1wIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFLTyxTQUFTQSxVQUFULENBQXVCQyxHQUF2QixFQUFpQ0MsU0FBakMsRUFBMkQ7QUFDOUQsTUFBSSxDQUFDRCxHQUFELElBQVEsQ0FBQ0EsR0FBRyxDQUFDRSxNQUFiLElBQXVCRCxTQUFTLElBQUksQ0FBeEMsRUFBMkM7QUFDdkMsV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsTUFBTUUsTUFBTSxHQUFHSCxHQUFHLENBQUNFLE1BQW5COztBQUNBLE1BQUlDLE1BQU0sSUFBSUYsU0FBZCxFQUF5QjtBQUNyQixXQUFPLENBQUNELEdBQUQsQ0FBUDtBQUNIOztBQUNELE1BQU1JLFFBQWUsR0FBRyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVKLE1BQU0sR0FBR0YsU0FBbkIsQ0FBakI7QUFDQSxNQUFJTyxVQUFVLEdBQUcsQ0FBakI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixRQUFwQixFQUE4QkksQ0FBQyxFQUEvQixFQUFtQztBQUMvQkwsSUFBQUEsUUFBUSxDQUFDSyxDQUFELENBQVIsR0FBY1QsR0FBRyxDQUFDVSxLQUFKLENBQVVGLFVBQVYsRUFBc0IsQ0FBQ0MsQ0FBQyxHQUFHLENBQUwsSUFBVVIsU0FBaEMsQ0FBZDtBQUNBTyxJQUFBQSxVQUFVLElBQUlQLFNBQWQ7QUFDSDs7QUFDRCxTQUFPRyxRQUFQO0FBQ0g7QUFFRDs7Ozs7O0FBSU8sU0FBU08sTUFBVCxDQUFtQlgsR0FBbkIsRUFBa0M7QUFDckMsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixXQUFPLEVBQVA7QUFDSDs7QUFDRCxTQUFPWSxLQUFLLENBQUNDLElBQU4sQ0FBVyxJQUFJQyxHQUFKLENBQVFkLEdBQVIsQ0FBWCxDQUFQO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNlLEtBQVQsQ0FBa0JDLElBQWxCLEVBQTZCQyxJQUE3QixFQUE2QztBQUNoRCxNQUFNQyxFQUFFLEdBQUdGLElBQUksSUFBSSxFQUFuQjtBQUFBLE1BQXVCRyxFQUFFLEdBQUdGLElBQUksSUFBSSxFQUFwQztBQUNBLHNDQUFXQyxFQUFYLHNCQUFrQkMsRUFBbEI7QUFDSDtBQUVEOzs7Ozs7O0FBS08sU0FBU0MsU0FBVCxDQUFzQkosSUFBdEIsRUFBaUNDLElBQWpDLEVBQWlEO0FBQ3BELE1BQU1DLEVBQUUsR0FBR0YsSUFBSSxJQUFJLEVBQW5CO0FBQUEsTUFBdUJHLEVBQUUsR0FBR0YsSUFBSSxJQUFJLEVBQXBDO0FBQ0EsU0FBT04sTUFBTSxDQUFDTyxFQUFFLENBQUNHLE1BQUgsQ0FBVSxVQUFBQyxDQUFDO0FBQUEsV0FBSUgsRUFBRSxDQUFDSSxRQUFILENBQVlELENBQVosQ0FBSjtBQUFBLEdBQVgsQ0FBRCxDQUFiO0FBQ0g7QUFFRDs7Ozs7OztBQUtPLFNBQVNFLElBQVQsQ0FBaUJSLElBQWpCLEVBQTRCQyxJQUE1QixFQUE0QztBQUMvQyxNQUFNQyxFQUFFLEdBQUdGLElBQUksSUFBSSxFQUFuQjtBQUFBLE1BQXVCRyxFQUFFLEdBQUdGLElBQUksSUFBSSxFQUFwQztBQUNBLE1BQU1RLEtBQUssR0FBR1AsRUFBRSxDQUFDRyxNQUFILENBQVUsVUFBQUMsQ0FBQztBQUFBLFdBQUksQ0FBQ0gsRUFBRSxDQUFDSSxRQUFILENBQVlELENBQVosQ0FBTDtBQUFBLEdBQVgsQ0FBZDtBQUNBLE1BQU1JLEtBQUssR0FBR1AsRUFBRSxDQUFDRSxNQUFILENBQVUsVUFBQUMsQ0FBQztBQUFBLFdBQUksQ0FBQ0osRUFBRSxDQUFDSyxRQUFILENBQVlELENBQVosQ0FBTDtBQUFBLEdBQVgsQ0FBZDtBQUNBLFNBQU9YLE1BQU0sOEJBQUtjLEtBQUwsc0JBQWVDLEtBQWYsR0FBYjtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTQyxHQUFULENBQWdCM0IsR0FBaEIsRUFBNEI0QixFQUE1QixFQUF3RjtBQUMzRixNQUFJLENBQUM1QixHQUFELElBQVEsQ0FBQzRCLEVBQWIsRUFBaUI7QUFDYixXQUFPLEVBQVA7QUFDSDs7QUFDRCxNQUFJQyxNQUFXLEdBQUcsRUFBbEI7QUFBQSxNQUFzQkMsSUFBdEI7O0FBQ0EsT0FBSyxJQUFJckIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1QsR0FBRyxDQUFDRSxNQUF4QixFQUFnQ08sQ0FBQyxFQUFqQyxFQUFxQztBQUNqQ3FCLElBQUFBLElBQUksR0FBR0YsRUFBRSxDQUFDNUIsR0FBRyxDQUFDUyxDQUFELENBQUosRUFBU0EsQ0FBVCxDQUFUOztBQUNBLFFBQUlxQixJQUFJLElBQUksSUFBUixJQUFnQixPQUFRQSxJQUFSLElBQWlCLFdBQXJDLEVBQWtEO0FBQzlDO0FBQ0g7O0FBQ0RELElBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZRCxJQUFaO0FBQ0g7O0FBQ0QsU0FBT0QsTUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWwhuS4gOS4quaVsOe7hOaLhuWIhuS4uuWkmuS4quaVsOe7hFxyXG4gKiBAcGFyYW0gYXJyIOWOn+aVsOe7hFxyXG4gKiBAcGFyYW0gc3RlcENvdW50IOaLhuWIhuWQju+8jOavj+S4quaVsOe7hOacgOWkmuWMheWQq+eahOmhueaVsOmHj1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0QXJyYXk8VD4oYXJyOiBUW10sIHN0ZXBDb3VudDogbnVtYmVyKTogVFtdW10ge1xyXG4gICAgaWYgKCFhcnIgfHwgIWFyci5sZW5ndGggfHwgc3RlcENvdW50IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGNvbnN0IGFyckxlbiA9IGFyci5sZW5ndGhcclxuICAgIGlmIChhcnJMZW4gPD0gc3RlcENvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIFthcnJdXHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdBcnJheTogVFtdW10gPSBbXVxyXG4gICAgY29uc3QgbWF4Q291bnQgPSBNYXRoLmNlaWwoYXJyTGVuIC8gc3RlcENvdW50KVxyXG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heENvdW50OyBpKyspIHtcclxuICAgICAgICBuZXdBcnJheVtpXSA9IGFyci5zbGljZShzdGFydEluZGV4LCAoaSArIDEpICogc3RlcENvdW50KVxyXG4gICAgICAgIHN0YXJ0SW5kZXggKz0gc3RlcENvdW50XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3QXJyYXlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+aOiWFycmF55Lit55qE6YeN5aSN6aG5XHJcbiAqIEBwYXJhbSBhcnIg6ZyA6KaB5Y676YeN55qE5pWw57uEXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlPFQ+KGFycjogVFtdKTogVFtdIHtcclxuICAgIGlmICghYXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFycikpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlkIjlubbkuKTkuKrmlbDnu4TvvIjmnKrljrvph43vvIlcclxuICogQHBhcmFtIGFycjEg5pWw57uEMVxyXG4gKiBAcGFyYW0gYXJyMiDmlbDnu4QyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5pb248VD4oYXJyMTogVFtdLCBhcnIyOiBUW10pOiBUW10ge1xyXG4gICAgY29uc3QgYTEgPSBhcnIxIHx8IFtdLCBhMiA9IGFycjIgfHwgW11cclxuICAgIHJldHVybiBbLi4uYTEsIC4uLmEyXVxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5Lik5Liq5pWw57uE55qE5Lqk6ZuG77yI5bey5Y676YeN77yJXHJcbiAqIEBwYXJhbSBhcnIxIOaVsOe7hDFcclxuICogQHBhcmFtIGFycjIg5pWw57uEMlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdDxUPihhcnIxOiBUW10sIGFycjI6IFRbXSk6IFRbXSB7XHJcbiAgICBjb25zdCBhMSA9IGFycjEgfHwgW10sIGEyID0gYXJyMiB8fCBbXVxyXG4gICAgcmV0dXJuIHVuaXF1ZShhMS5maWx0ZXIoeCA9PiBhMi5pbmNsdWRlcyh4KSkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5bkuKTkuKrmlbDnu4TnmoTlt67pm4bvvIjlt7Lljrvph43vvIlcclxuICogQHBhcmFtIGFycjEg5pWw57uEMVxyXG4gKiBAcGFyYW0gYXJyMiDmlbDnu4QyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlmZjxUPihhcnIxOiBUW10sIGFycjI6IFRbXSk6IFRbXSB7XHJcbiAgICBjb25zdCBhMSA9IGFycjEgfHwgW10sIGEyID0gYXJyMiB8fCBbXVxyXG4gICAgY29uc3QgZGlmZjEgPSBhMS5maWx0ZXIoeCA9PiAhYTIuaW5jbHVkZXMoeCkpXHJcbiAgICBjb25zdCBkaWZmMiA9IGEyLmZpbHRlcih4ID0+ICFhMS5pbmNsdWRlcyh4KSlcclxuICAgIHJldHVybiB1bmlxdWUoWy4uLmRpZmYxLCAuLi5kaWZmMl0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpgY3ljobmjIflrprmlbDnu4Tlubbov5Tlm57kuIDkuKrmlrDmlbDnu4TvvIjkuI7ljp/nlJ9tYXDkuI3kuIDmoLfnmoTlnLDmlrnmmK/vvJrljp/nlJ9tYXDkuK3mnKrov4fmu6RudWxs5ZKMdW5kZWZpbmVk77yM6ICM5q2k5pa55rOV5Lya6L+H5ruk77yJXHJcbiAqIEBwYXJhbSBhcnIg6ZyA6KaB6YGN5Y6G55qE5pWw57uEXHJcbiAqIEBwYXJhbSBmbiDlpITnkIblh73mlbBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXA8VD4oYXJyOiBhbnlbXSwgZm46IChpdGVtOiBhbnksIGlkeD86IG51bWJlcikgPT4gVCB8IG51bGwgfCB1bmRlZmluZWQpOiBUW10ge1xyXG4gICAgaWYgKCFhcnIgfHwgIWZuKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0OiBUW10gPSBbXSwgdGVtcDogVCB8IG51bGwgfCB1bmRlZmluZWRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGVtcCA9IGZuKGFycltpXSwgaSlcclxuICAgICAgICBpZiAodGVtcCA9PSBudWxsIHx8IHR5cGVvZiAodGVtcCkgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0LnB1c2godGVtcClcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxufSJdfQ==