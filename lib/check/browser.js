"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIE = isIE;
exports.isExtraSmall = isExtraSmall;
exports.isSmall = isSmall;
exports.isMedium = isMedium;
exports.isLarge = isLarge;
exports.isExtraLarge = isExtraLarge;

var _lib = require("../common/lib");

var _browser = require("../device/browser");

/**
 * 判断是否为IE浏览器（仅支持<=IE 11）
 * @param version 具体的IE版本号
 * @param userAgent 浏览器代理字符串，若不指定，则取navigator.userAgent
 */
function isIE(version, userAgent) {
  var ua = userAgent || "";

  if ((0, _lib.isBowser)() && !ua) {
    ua = (0, _lib.getGlobalObject)().navigator.userAgent;
  }

  if (!ua) {
    throw new Error("You must set userAgent in this method.");
  }

  if (!version) {
    return /msie/i.test(ua) || !!ua.match(/Trident\/7\./i);
  }

  if (version == 11) {
    return !!ua.match(/Trident\/7\./i);
  }

  return (ua.match(new RegExp("MSIE\\s+(\\d+)", "i")) || [])[1] == version.toString();
}
/**
 * 是否非常小的宽度
 */


function isExtraSmall() {
  return (0, _browser.getWidthType)() == _browser.BrowserWidthTypeEnum.ExtraSmall;
}
/**
 * 是否小的宽度
 */


function isSmall() {
  return (0, _browser.getWidthType)() == _browser.BrowserWidthTypeEnum.Small;
}
/**
 * 是否中等宽度
 */


function isMedium() {
  return (0, _browser.getWidthType)() == _browser.BrowserWidthTypeEnum.Medium;
}
/**
 * 是否大的宽度
 */


function isLarge() {
  return (0, _browser.getWidthType)() == _browser.BrowserWidthTypeEnum.Large;
}
/**
 * 是否非常大的宽度
 */


function isExtraLarge() {
  return (0, _browser.getWidthType)() == _browser.BrowserWidthTypeEnum.ExtraLarge;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVjay9icm93c2VyLnRzIl0sIm5hbWVzIjpbImlzSUUiLCJ2ZXJzaW9uIiwidXNlckFnZW50IiwidWEiLCJuYXZpZ2F0b3IiLCJFcnJvciIsInRlc3QiLCJtYXRjaCIsIlJlZ0V4cCIsInRvU3RyaW5nIiwiaXNFeHRyYVNtYWxsIiwiQnJvd3NlcldpZHRoVHlwZUVudW0iLCJFeHRyYVNtYWxsIiwiaXNTbWFsbCIsIlNtYWxsIiwiaXNNZWRpdW0iLCJNZWRpdW0iLCJpc0xhcmdlIiwiTGFyZ2UiLCJpc0V4dHJhTGFyZ2UiLCJFeHRyYUxhcmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7QUFLTyxTQUFTQSxJQUFULENBQWNDLE9BQWQsRUFBZ0NDLFNBQWhDLEVBQTZEO0FBQ2hFLE1BQUlDLEVBQUUsR0FBR0QsU0FBUyxJQUFJLEVBQXRCOztBQUNBLE1BQUksd0JBQWMsQ0FBQ0MsRUFBbkIsRUFBdUI7QUFDbkJBLElBQUFBLEVBQUUsR0FBWSwyQkFBVCxDQUE0QkMsU0FBNUIsQ0FBc0NGLFNBQTNDO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDQyxFQUFMLEVBQVM7QUFDTCxVQUFNLElBQUlFLEtBQUosQ0FBVSx3Q0FBVixDQUFOO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDSixPQUFMLEVBQWM7QUFDVixXQUFPLFFBQVFLLElBQVIsQ0FBYUgsRUFBYixLQUFvQixDQUFDLENBQUNBLEVBQUUsQ0FBQ0ksS0FBSCxDQUFTLGVBQVQsQ0FBN0I7QUFDSDs7QUFDRCxNQUFJTixPQUFPLElBQUksRUFBZixFQUFtQjtBQUNmLFdBQU8sQ0FBQyxDQUFDRSxFQUFFLENBQUNJLEtBQUgsQ0FBUyxlQUFULENBQVQ7QUFDSDs7QUFDRCxTQUFPLENBQUNKLEVBQUUsQ0FBQ0ksS0FBSCxDQUFTLElBQUlDLE1BQUosQ0FBVyxnQkFBWCxFQUE2QixHQUE3QixDQUFULEtBQStDLEVBQWhELEVBQW9ELENBQXBELEtBQTBEUCxPQUFPLENBQUNRLFFBQVIsRUFBakU7QUFDSDtBQUVEOzs7OztBQUdPLFNBQVNDLFlBQVQsR0FBd0I7QUFDM0IsU0FBTyxnQ0FBa0JDLDhCQUFxQkMsVUFBOUM7QUFDSDtBQUVEOzs7OztBQUdPLFNBQVNDLE9BQVQsR0FBbUI7QUFDdEIsU0FBTyxnQ0FBa0JGLDhCQUFxQkcsS0FBOUM7QUFDSDtBQUVEOzs7OztBQUdPLFNBQVNDLFFBQVQsR0FBb0I7QUFDdkIsU0FBTyxnQ0FBa0JKLDhCQUFxQkssTUFBOUM7QUFDSDtBQUVEOzs7OztBQUdPLFNBQVNDLE9BQVQsR0FBbUI7QUFDdEIsU0FBTyxnQ0FBa0JOLDhCQUFxQk8sS0FBOUM7QUFDSDtBQUVEOzs7OztBQUdPLFNBQVNDLFlBQVQsR0FBd0I7QUFDM0IsU0FBTyxnQ0FBa0JSLDhCQUFxQlMsVUFBOUM7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzQm93c2VyLCBnZXRHbG9iYWxPYmplY3QgfSBmcm9tIFwiLi4vY29tbW9uL2xpYlwiXHJcbmltcG9ydCB7IGdldFdpZHRoVHlwZSwgQnJvd3NlcldpZHRoVHlwZUVudW0gfSBmcm9tIFwiLi4vZGV2aWNlL2Jyb3dzZXJcIlxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4uklF5rWP6KeI5Zmo77yI5LuF5pSv5oyBPD1JRSAxMe+8iVxyXG4gKiBAcGFyYW0gdmVyc2lvbiDlhbfkvZPnmoRJReeJiOacrOWPt1xyXG4gKiBAcGFyYW0gdXNlckFnZW50IOa1j+iniOWZqOS7o+eQhuWtl+espuS4su+8jOiLpeS4jeaMh+Wumu+8jOWImeWPlm5hdmlnYXRvci51c2VyQWdlbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0lFKHZlcnNpb24/OiBudW1iZXIsIHVzZXJBZ2VudD86IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHVhID0gdXNlckFnZW50IHx8IFwiXCJcclxuICAgIGlmIChpc0Jvd3NlcigpICYmICF1YSkge1xyXG4gICAgICAgIHVhID0gKDxXaW5kb3c+Z2V0R2xvYmFsT2JqZWN0KCkpLm5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgIH1cclxuICAgIGlmICghdWEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBzZXQgdXNlckFnZW50IGluIHRoaXMgbWV0aG9kLlwiKVxyXG4gICAgfVxyXG4gICAgaWYgKCF2ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIC9tc2llL2kudGVzdCh1YSkgfHwgISF1YS5tYXRjaCgvVHJpZGVudFxcLzdcXC4vaSlcclxuICAgIH1cclxuICAgIGlmICh2ZXJzaW9uID09IDExKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdWEubWF0Y2goL1RyaWRlbnRcXC83XFwuL2kpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKHVhLm1hdGNoKG5ldyBSZWdFeHAoXCJNU0lFXFxcXHMrKFxcXFxkKylcIiwgXCJpXCIpKSB8fCBbXSlbMV0gPT0gdmVyc2lvbi50b1N0cmluZygpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbpnZ7luLjlsI/nmoTlrr3luqZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0V4dHJhU21hbGwoKSB7XHJcbiAgICByZXR1cm4gZ2V0V2lkdGhUeXBlKCkgPT0gQnJvd3NlcldpZHRoVHlwZUVudW0uRXh0cmFTbWFsbFxyXG59XHJcblxyXG4vKipcclxuICog5piv5ZCm5bCP55qE5a695bqmXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTbWFsbCgpIHtcclxuICAgIHJldHVybiBnZXRXaWR0aFR5cGUoKSA9PSBCcm93c2VyV2lkdGhUeXBlRW51bS5TbWFsbFxyXG59XHJcblxyXG4vKipcclxuICog5piv5ZCm5Lit562J5a695bqmXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNNZWRpdW0oKSB7XHJcbiAgICByZXR1cm4gZ2V0V2lkdGhUeXBlKCkgPT0gQnJvd3NlcldpZHRoVHlwZUVudW0uTWVkaXVtXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmmK/lkKblpKfnmoTlrr3luqZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xhcmdlKCkge1xyXG4gICAgcmV0dXJuIGdldFdpZHRoVHlwZSgpID09IEJyb3dzZXJXaWR0aFR5cGVFbnVtLkxhcmdlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbpnZ7luLjlpKfnmoTlrr3luqZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0V4dHJhTGFyZ2UoKSB7XHJcbiAgICByZXR1cm4gZ2V0V2lkdGhUeXBlKCkgPT0gQnJvd3NlcldpZHRoVHlwZUVudW0uRXh0cmFMYXJnZVxyXG59Il19