"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unique = exports.splitArray = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * 将一个数组拆分为多个数组
 * @param arr 原数组
 * @param stepCount 拆分后，每个数组最多包含的项数量
 */
var splitArray = function splitArray(arr, stepCount) {
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
};
/**
 * 去掉array中的重复项
 * @param arr 需要去重的数组
 */


exports.splitArray = splitArray;

var unique = function unique(arr) {
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
};

exports.unique = unique;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vYXJyYXkudHMiXSwibmFtZXMiOlsic3BsaXRBcnJheSIsImFyciIsInN0ZXBDb3VudCIsImxlbmd0aCIsImFyckxlbiIsIm5ld0FycmF5IiwibWF4Q291bnQiLCJNYXRoIiwiY2VpbCIsInN0YXJ0SW5kZXgiLCJpIiwic2xpY2UiLCJ1bmlxdWUiLCJuZXdBcnIiLCJkdXBsaWNhdGVJZHgiLCJpZHhMZW5ndGgiLCJwdXNoIiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFLTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFJQyxHQUFKLEVBQWNDLFNBQWQsRUFBMkM7QUFDakUsTUFBSSxDQUFDRCxHQUFELElBQVEsQ0FBQ0EsR0FBRyxDQUFDRSxNQUFiLElBQXVCRCxTQUFTLElBQUksQ0FBeEMsRUFBMkM7QUFDdkMsV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsTUFBTUUsTUFBTSxHQUFHSCxHQUFHLENBQUNFLE1BQW5COztBQUNBLE1BQUlDLE1BQU0sSUFBSUYsU0FBZCxFQUF5QjtBQUNyQixXQUFPLENBQUNELEdBQUQsQ0FBUDtBQUNIOztBQUNELE1BQU1JLFFBQWUsR0FBRyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVKLE1BQU0sR0FBR0YsU0FBbkIsQ0FBakI7QUFDQSxNQUFJTyxVQUFVLEdBQUcsQ0FBakI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixRQUFwQixFQUE4QkksQ0FBQyxFQUEvQixFQUFtQztBQUMvQkwsSUFBQUEsUUFBUSxDQUFDSyxDQUFELENBQVIsR0FBY1QsR0FBRyxDQUFDVSxLQUFKLENBQVVGLFVBQVYsRUFBc0IsQ0FBQ0MsQ0FBQyxHQUFHLENBQUwsSUFBVVIsU0FBaEMsQ0FBZDtBQUNBTyxJQUFBQSxVQUFVLElBQUlQLFNBQWQ7QUFDSDs7QUFDRCxTQUFPRyxRQUFQO0FBQ0gsQ0FoQk07QUFrQlA7Ozs7Ozs7O0FBSU8sSUFBTU8sTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBSVgsR0FBSixFQUFzQjtBQUN4QyxNQUFJLENBQUNBLEdBQUQsSUFBUUEsR0FBRyxDQUFDRSxNQUFKLElBQWMsQ0FBMUIsRUFBNkI7QUFDekIsV0FBT0YsR0FBUDtBQUNIOztBQUNELE1BQUlZLE1BQU0sc0JBQU9aLEdBQVAsQ0FBVjtBQUFBLE1BQXVCYSxZQUFZLEdBQUcsRUFBdEM7QUFBQSxNQUEwQ0MsU0FBUyxHQUFHLENBQXREOztBQUNBLE9BQUssSUFBSUwsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0csTUFBTSxDQUFDVixNQUEzQixFQUFtQ08sQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxRQUFJRyxNQUFNLENBQUNILENBQUQsQ0FBTixLQUFjRyxNQUFNLENBQUNILENBQUMsR0FBRyxDQUFMLENBQXhCLEVBQWlDO0FBQzdCSyxNQUFBQSxTQUFTLEdBQUdELFlBQVksQ0FBQ0UsSUFBYixDQUFrQk4sQ0FBbEIsQ0FBWjtBQUNIO0FBQ0o7O0FBQ0QsTUFBSUssU0FBUyxHQUFHLENBQWhCLEVBQW1CO0FBQ2YsV0FBT0EsU0FBUyxFQUFoQixFQUFvQjtBQUNoQkYsTUFBQUEsTUFBTSxDQUFDSSxNQUFQLENBQWNILFlBQVksQ0FBQ0MsU0FBRCxDQUExQixFQUF1QyxDQUF2QztBQUNIO0FBQ0o7O0FBQ0QsU0FBT0YsTUFBUDtBQUNILENBaEJNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWwhuS4gOS4quaVsOe7hOaLhuWIhuS4uuWkmuS4quaVsOe7hFxyXG4gKiBAcGFyYW0gYXJyIOWOn+aVsOe7hFxyXG4gKiBAcGFyYW0gc3RlcENvdW50IOaLhuWIhuWQju+8jOavj+S4quaVsOe7hOacgOWkmuWMheWQq+eahOmhueaVsOmHj1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNwbGl0QXJyYXkgPSA8VD4oYXJyOiBUW10sIHN0ZXBDb3VudDogbnVtYmVyKTogVFtdW10gPT4ge1xyXG4gICAgaWYgKCFhcnIgfHwgIWFyci5sZW5ndGggfHwgc3RlcENvdW50IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGNvbnN0IGFyckxlbiA9IGFyci5sZW5ndGhcclxuICAgIGlmIChhcnJMZW4gPD0gc3RlcENvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIFthcnJdXHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdBcnJheTogVFtdW10gPSBbXVxyXG4gICAgY29uc3QgbWF4Q291bnQgPSBNYXRoLmNlaWwoYXJyTGVuIC8gc3RlcENvdW50KVxyXG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heENvdW50OyBpKyspIHtcclxuICAgICAgICBuZXdBcnJheVtpXSA9IGFyci5zbGljZShzdGFydEluZGV4LCAoaSArIDEpICogc3RlcENvdW50KVxyXG4gICAgICAgIHN0YXJ0SW5kZXggKz0gc3RlcENvdW50XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3QXJyYXlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWOu+aOiWFycmF55Lit55qE6YeN5aSN6aG5XHJcbiAqIEBwYXJhbSBhcnIg6ZyA6KaB5Y676YeN55qE5pWw57uEXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdW5pcXVlID0gPFQ+KGFycjogVFtdKTogVFtdID0+IHtcclxuICAgIGlmICghYXJyIHx8IGFyci5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3QXJyID0gWy4uLmFycl0sIGR1cGxpY2F0ZUlkeCA9IFtdLCBpZHhMZW5ndGggPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuZXdBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobmV3QXJyW2ldID09PSBuZXdBcnJbaSAtIDFdKSB7XHJcbiAgICAgICAgICAgIGlkeExlbmd0aCA9IGR1cGxpY2F0ZUlkeC5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpZHhMZW5ndGggPiAwKSB7XHJcbiAgICAgICAgd2hpbGUgKGlkeExlbmd0aC0tKSB7XHJcbiAgICAgICAgICAgIG5ld0Fyci5zcGxpY2UoZHVwbGljYXRlSWR4W2lkeExlbmd0aF0sIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuZXdBcnJcclxufSJdfQ==