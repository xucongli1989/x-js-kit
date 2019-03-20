"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitArray = splitArray;
exports.unique = unique;
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
  if (!arr || arr.length <= 1) {
    return arr;
  }

  var newArr = _toConsumableArray(arr),
      duplicateIdx = [],
      idxLength = 0;

  for (var i = 1; i < newArr.length; i++) {
    if (newArr[i] === newArr[i - 1]) {
      idxLength = duplicateIdx.push(i);
    }
  }

  if (idxLength > 0) {
    while (idxLength--) {
      newArr.splice(duplicateIdx[idxLength], 1);
    }
  }

  return newArr;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vYXJyYXkudHMiXSwibmFtZXMiOlsic3BsaXRBcnJheSIsImFyciIsInN0ZXBDb3VudCIsImxlbmd0aCIsImFyckxlbiIsIm5ld0FycmF5IiwibWF4Q291bnQiLCJNYXRoIiwiY2VpbCIsInN0YXJ0SW5kZXgiLCJpIiwic2xpY2UiLCJ1bmlxdWUiLCJuZXdBcnIiLCJkdXBsaWNhdGVJZHgiLCJpZHhMZW5ndGgiLCJwdXNoIiwic3BsaWNlIiwibWFwIiwiZm4iLCJyZXN1bHQiLCJ0ZW1wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUtPLFNBQVNBLFVBQVQsQ0FBdUJDLEdBQXZCLEVBQWlDQyxTQUFqQyxFQUEyRDtBQUM5RCxNQUFJLENBQUNELEdBQUQsSUFBUSxDQUFDQSxHQUFHLENBQUNFLE1BQWIsSUFBdUJELFNBQVMsSUFBSSxDQUF4QyxFQUEyQztBQUN2QyxXQUFPLEVBQVA7QUFDSDs7QUFDRCxNQUFNRSxNQUFNLEdBQUdILEdBQUcsQ0FBQ0UsTUFBbkI7O0FBQ0EsTUFBSUMsTUFBTSxJQUFJRixTQUFkLEVBQXlCO0FBQ3JCLFdBQU8sQ0FBQ0QsR0FBRCxDQUFQO0FBQ0g7O0FBQ0QsTUFBTUksUUFBZSxHQUFHLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUosTUFBTSxHQUFHRixTQUFuQixDQUFqQjtBQUNBLE1BQUlPLFVBQVUsR0FBRyxDQUFqQjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLFFBQXBCLEVBQThCSSxDQUFDLEVBQS9CLEVBQW1DO0FBQy9CTCxJQUFBQSxRQUFRLENBQUNLLENBQUQsQ0FBUixHQUFjVCxHQUFHLENBQUNVLEtBQUosQ0FBVUYsVUFBVixFQUFzQixDQUFDQyxDQUFDLEdBQUcsQ0FBTCxJQUFVUixTQUFoQyxDQUFkO0FBQ0FPLElBQUFBLFVBQVUsSUFBSVAsU0FBZDtBQUNIOztBQUNELFNBQU9HLFFBQVA7QUFDSDtBQUVEOzs7Ozs7QUFJTyxTQUFTTyxNQUFULENBQW1CWCxHQUFuQixFQUFrQztBQUNyQyxNQUFJLENBQUNBLEdBQUQsSUFBUUEsR0FBRyxDQUFDRSxNQUFKLElBQWMsQ0FBMUIsRUFBNkI7QUFDekIsV0FBT0YsR0FBUDtBQUNIOztBQUNELE1BQUlZLE1BQU0sc0JBQU9aLEdBQVAsQ0FBVjtBQUFBLE1BQXVCYSxZQUFZLEdBQUcsRUFBdEM7QUFBQSxNQUEwQ0MsU0FBUyxHQUFHLENBQXREOztBQUNBLE9BQUssSUFBSUwsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0csTUFBTSxDQUFDVixNQUEzQixFQUFtQ08sQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxRQUFJRyxNQUFNLENBQUNILENBQUQsQ0FBTixLQUFjRyxNQUFNLENBQUNILENBQUMsR0FBRyxDQUFMLENBQXhCLEVBQWlDO0FBQzdCSyxNQUFBQSxTQUFTLEdBQUdELFlBQVksQ0FBQ0UsSUFBYixDQUFrQk4sQ0FBbEIsQ0FBWjtBQUNIO0FBQ0o7O0FBQ0QsTUFBSUssU0FBUyxHQUFHLENBQWhCLEVBQW1CO0FBQ2YsV0FBT0EsU0FBUyxFQUFoQixFQUFvQjtBQUNoQkYsTUFBQUEsTUFBTSxDQUFDSSxNQUFQLENBQWNILFlBQVksQ0FBQ0MsU0FBRCxDQUExQixFQUF1QyxDQUF2QztBQUNIO0FBQ0o7O0FBQ0QsU0FBT0YsTUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTSyxHQUFULENBQWdCakIsR0FBaEIsRUFBNEJrQixFQUE1QixFQUF3RjtBQUMzRixNQUFJLENBQUNsQixHQUFELElBQVEsQ0FBQ2tCLEVBQWIsRUFBaUI7QUFDYixXQUFPLEVBQVA7QUFDSDs7QUFDRCxNQUFJQyxNQUFXLEdBQUcsRUFBbEI7QUFBQSxNQUFzQkMsSUFBdEI7O0FBQ0EsT0FBSyxJQUFJWCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVCxHQUFHLENBQUNFLE1BQXhCLEVBQWdDTyxDQUFDLEVBQWpDLEVBQXFDO0FBQ2pDVyxJQUFBQSxJQUFJLEdBQUdGLEVBQUUsQ0FBQ2xCLEdBQUcsQ0FBQ1MsQ0FBRCxDQUFKLEVBQVNBLENBQVQsQ0FBVDs7QUFDQSxRQUFJVyxJQUFJLElBQUksSUFBUixJQUFnQixPQUFRQSxJQUFSLElBQWlCLFdBQXJDLEVBQWtEO0FBQzlDO0FBQ0g7O0FBQ0RELElBQUFBLE1BQU0sQ0FBQ0osSUFBUCxDQUFZSyxJQUFaO0FBQ0g7O0FBQ0QsU0FBT0QsTUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWwhuS4gOS4quaVsOe7hOaLhuWIhuS4uuWkmuS4quaVsOe7hFxyXG4gKiBAcGFyYW0gYXJyIOWOn+aVsOe7hFxyXG4gKiBAcGFyYW0gc3RlcENvdW50IOaLhuWIhuWQju+8jOavj+S4quaVsOe7hOacgOWkmuWMheWQq+eahOmhueaVsOmHj1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0QXJyYXk8VD4oYXJyOiBUW10sIHN0ZXBDb3VudDogbnVtYmVyKTogVFtdW10ge1xyXG4gICAgaWYgKCFhcnIgfHwgIWFyci5sZW5ndGggfHwgc3RlcENvdW50IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGNvbnN0IGFyckxlbiA9IGFyci5sZW5ndGhcclxuICAgIGlmIChhcnJMZW4gPD0gc3RlcENvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIFthcnJdXHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdBcnJheTogVFtdW10gPSBbXVxyXG4gICAgY29uc3QgbWF4Q291bnQgPSBNYXRoLmNlaWwoYXJyTGVuIC8gc3RlcENvdW50KVxyXG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heENvdW50OyBpKyspIHtcclxuICAgICAgICBuZXdBcnJheVtpXSA9IGFyci5zbGljZShzdGFydEluZGV4LCAoaSArIDEpICogc3RlcENvdW50KVxyXG4gICAgICAgIHN0YXJ0SW5kZXggKz0gc3RlcENvdW50XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3QXJyYXlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+aOiWFycmF55Lit55qE6YeN5aSN6aG5XHJcbiAqIEBwYXJhbSBhcnIg6ZyA6KaB5Y676YeN55qE5pWw57uEXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlPFQ+KGFycjogVFtdKTogVFtdIHtcclxuICAgIGlmICghYXJyIHx8IGFyci5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3QXJyID0gWy4uLmFycl0sIGR1cGxpY2F0ZUlkeCA9IFtdLCBpZHhMZW5ndGggPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuZXdBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobmV3QXJyW2ldID09PSBuZXdBcnJbaSAtIDFdKSB7XHJcbiAgICAgICAgICAgIGlkeExlbmd0aCA9IGR1cGxpY2F0ZUlkeC5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpZHhMZW5ndGggPiAwKSB7XHJcbiAgICAgICAgd2hpbGUgKGlkeExlbmd0aC0tKSB7XHJcbiAgICAgICAgICAgIG5ld0Fyci5zcGxpY2UoZHVwbGljYXRlSWR4W2lkeExlbmd0aF0sIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuZXdBcnJcclxufVxyXG5cclxuLyoqXHJcbiAqIOmBjeWOhuaMh+WumuaVsOe7hOW5tui/lOWbnuS4gOS4quaWsOaVsOe7hO+8iOS4juWOn+eUn21hcOS4jeS4gOagt+eahOWcsOaWueaYr++8muWOn+eUn21hcOS4reacqui/h+a7pG51bGzlkox1bmRlZmluZWTvvIzogIzmraTmlrnms5XkvJrov4fmu6TvvIlcclxuICogQHBhcmFtIGFyciDpnIDopoHpgY3ljobnmoTmlbDnu4RcclxuICogQHBhcmFtIGZuIOWkhOeQhuWHveaVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcDxUPihhcnI6IGFueVtdLCBmbjogKGl0ZW06IGFueSwgaWR4PzogbnVtYmVyKSA9PiBUIHwgbnVsbCB8IHVuZGVmaW5lZCk6IFRbXSB7XHJcbiAgICBpZiAoIWFyciB8fCAhZm4pIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGxldCByZXN1bHQ6IFRbXSA9IFtdLCB0ZW1wOiBUIHwgbnVsbCB8IHVuZGVmaW5lZFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0ZW1wID0gZm4oYXJyW2ldLCBpKVxyXG4gICAgICAgIGlmICh0ZW1wID09IG51bGwgfHwgdHlwZW9mICh0ZW1wKSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQucHVzaCh0ZW1wKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59Il19