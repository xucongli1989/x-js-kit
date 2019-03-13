"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitArray = splitArray;
exports.unique = unique;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vYXJyYXkudHMiXSwibmFtZXMiOlsic3BsaXRBcnJheSIsImFyciIsInN0ZXBDb3VudCIsImxlbmd0aCIsImFyckxlbiIsIm5ld0FycmF5IiwibWF4Q291bnQiLCJNYXRoIiwiY2VpbCIsInN0YXJ0SW5kZXgiLCJpIiwic2xpY2UiLCJ1bmlxdWUiLCJuZXdBcnIiLCJkdXBsaWNhdGVJZHgiLCJpZHhMZW5ndGgiLCJwdXNoIiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBS08sU0FBU0EsVUFBVCxDQUF1QkMsR0FBdkIsRUFBaUNDLFNBQWpDLEVBQTJEO0FBQzlELE1BQUksQ0FBQ0QsR0FBRCxJQUFRLENBQUNBLEdBQUcsQ0FBQ0UsTUFBYixJQUF1QkQsU0FBUyxJQUFJLENBQXhDLEVBQTJDO0FBQ3ZDLFdBQU8sRUFBUDtBQUNIOztBQUNELE1BQU1FLE1BQU0sR0FBR0gsR0FBRyxDQUFDRSxNQUFuQjs7QUFDQSxNQUFJQyxNQUFNLElBQUlGLFNBQWQsRUFBeUI7QUFDckIsV0FBTyxDQUFDRCxHQUFELENBQVA7QUFDSDs7QUFDRCxNQUFNSSxRQUFlLEdBQUcsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVSixNQUFNLEdBQUdGLFNBQW5CLENBQWpCO0FBQ0EsTUFBSU8sVUFBVSxHQUFHLENBQWpCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osUUFBcEIsRUFBOEJJLENBQUMsRUFBL0IsRUFBbUM7QUFDL0JMLElBQUFBLFFBQVEsQ0FBQ0ssQ0FBRCxDQUFSLEdBQWNULEdBQUcsQ0FBQ1UsS0FBSixDQUFVRixVQUFWLEVBQXNCLENBQUNDLENBQUMsR0FBRyxDQUFMLElBQVVSLFNBQWhDLENBQWQ7QUFDQU8sSUFBQUEsVUFBVSxJQUFJUCxTQUFkO0FBQ0g7O0FBQ0QsU0FBT0csUUFBUDtBQUNIO0FBRUQ7Ozs7OztBQUlPLFNBQVNPLE1BQVQsQ0FBbUJYLEdBQW5CLEVBQWtDO0FBQ3JDLE1BQUksQ0FBQ0EsR0FBRCxJQUFRQSxHQUFHLENBQUNFLE1BQUosSUFBYyxDQUExQixFQUE2QjtBQUN6QixXQUFPRixHQUFQO0FBQ0g7O0FBQ0QsTUFBSVksTUFBTSxzQkFBT1osR0FBUCxDQUFWO0FBQUEsTUFBdUJhLFlBQVksR0FBRyxFQUF0QztBQUFBLE1BQTBDQyxTQUFTLEdBQUcsQ0FBdEQ7O0FBQ0EsT0FBSyxJQUFJTCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRyxNQUFNLENBQUNWLE1BQTNCLEVBQW1DTyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLFFBQUlHLE1BQU0sQ0FBQ0gsQ0FBRCxDQUFOLEtBQWNHLE1BQU0sQ0FBQ0gsQ0FBQyxHQUFHLENBQUwsQ0FBeEIsRUFBaUM7QUFDN0JLLE1BQUFBLFNBQVMsR0FBR0QsWUFBWSxDQUFDRSxJQUFiLENBQWtCTixDQUFsQixDQUFaO0FBQ0g7QUFDSjs7QUFDRCxNQUFJSyxTQUFTLEdBQUcsQ0FBaEIsRUFBbUI7QUFDZixXQUFPQSxTQUFTLEVBQWhCLEVBQW9CO0FBQ2hCRixNQUFBQSxNQUFNLENBQUNJLE1BQVAsQ0FBY0gsWUFBWSxDQUFDQyxTQUFELENBQTFCLEVBQXVDLENBQXZDO0FBQ0g7QUFDSjs7QUFDRCxTQUFPRixNQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5bCG5LiA5Liq5pWw57uE5ouG5YiG5Li65aSa5Liq5pWw57uEXHJcbiAqIEBwYXJhbSBhcnIg5Y6f5pWw57uEXHJcbiAqIEBwYXJhbSBzdGVwQ291bnQg5ouG5YiG5ZCO77yM5q+P5Liq5pWw57uE5pyA5aSa5YyF5ZCr55qE6aG55pWw6YePXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRBcnJheTxUPihhcnI6IFRbXSwgc3RlcENvdW50OiBudW1iZXIpOiBUW11bXSB7XHJcbiAgICBpZiAoIWFyciB8fCAhYXJyLmxlbmd0aCB8fCBzdGVwQ291bnQgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gICAgY29uc3QgYXJyTGVuID0gYXJyLmxlbmd0aFxyXG4gICAgaWYgKGFyckxlbiA8PSBzdGVwQ291bnQpIHtcclxuICAgICAgICByZXR1cm4gW2Fycl1cclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0FycmF5OiBUW11bXSA9IFtdXHJcbiAgICBjb25zdCBtYXhDb3VudCA9IE1hdGguY2VpbChhcnJMZW4gLyBzdGVwQ291bnQpXHJcbiAgICBsZXQgc3RhcnRJbmRleCA9IDBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4Q291bnQ7IGkrKykge1xyXG4gICAgICAgIG5ld0FycmF5W2ldID0gYXJyLnNsaWNlKHN0YXJ0SW5kZXgsIChpICsgMSkgKiBzdGVwQ291bnQpXHJcbiAgICAgICAgc3RhcnRJbmRleCArPSBzdGVwQ291bnRcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdBcnJheVxyXG59XHJcblxyXG4vKipcclxuICog5Y675o6JYXJyYXnkuK3nmoTph43lpI3poblcclxuICogQHBhcmFtIGFyciDpnIDopoHljrvph43nmoTmlbDnu4RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWU8VD4oYXJyOiBUW10pOiBUW10ge1xyXG4gICAgaWYgKCFhcnIgfHwgYXJyLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuICAgIGxldCBuZXdBcnIgPSBbLi4uYXJyXSwgZHVwbGljYXRlSWR4ID0gW10sIGlkeExlbmd0aCA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5ld0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChuZXdBcnJbaV0gPT09IG5ld0FycltpIC0gMV0pIHtcclxuICAgICAgICAgICAgaWR4TGVuZ3RoID0gZHVwbGljYXRlSWR4LnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGlkeExlbmd0aCA+IDApIHtcclxuICAgICAgICB3aGlsZSAoaWR4TGVuZ3RoLS0pIHtcclxuICAgICAgICAgICAgbmV3QXJyLnNwbGljZShkdXBsaWNhdGVJZHhbaWR4TGVuZ3RoXSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld0FyclxyXG59Il19