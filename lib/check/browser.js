"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIE = isIE;

var _lib = require("../common/lib");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVjay9icm93c2VyLnRzIl0sIm5hbWVzIjpbImlzSUUiLCJ2ZXJzaW9uIiwidXNlckFnZW50IiwidWEiLCJuYXZpZ2F0b3IiLCJFcnJvciIsInRlc3QiLCJtYXRjaCIsIlJlZ0V4cCIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7O0FBS08sU0FBU0EsSUFBVCxDQUFjQyxPQUFkLEVBQWdDQyxTQUFoQyxFQUE2RDtBQUNoRSxNQUFJQyxFQUFFLEdBQUdELFNBQVMsSUFBSSxFQUF0Qjs7QUFDQSxNQUFJLHdCQUFjLENBQUNDLEVBQW5CLEVBQXVCO0FBQ25CQSxJQUFBQSxFQUFFLEdBQVksMkJBQVQsQ0FBNEJDLFNBQTVCLENBQXNDRixTQUEzQztBQUNIOztBQUNELE1BQUksQ0FBQ0MsRUFBTCxFQUFTO0FBQ0wsVUFBTSxJQUFJRSxLQUFKLENBQVUsd0NBQVYsQ0FBTjtBQUNIOztBQUNELE1BQUksQ0FBQ0osT0FBTCxFQUFjO0FBQ1YsV0FBTyxRQUFRSyxJQUFSLENBQWFILEVBQWIsS0FBb0IsQ0FBQyxDQUFDQSxFQUFFLENBQUNJLEtBQUgsQ0FBUyxlQUFULENBQTdCO0FBQ0g7O0FBQ0QsTUFBSU4sT0FBTyxJQUFJLEVBQWYsRUFBbUI7QUFDZixXQUFPLENBQUMsQ0FBQ0UsRUFBRSxDQUFDSSxLQUFILENBQVMsZUFBVCxDQUFUO0FBQ0g7O0FBQ0QsU0FBTyxDQUFDSixFQUFFLENBQUNJLEtBQUgsQ0FBUyxJQUFJQyxNQUFKLENBQVcsZ0JBQVgsRUFBNkIsR0FBN0IsQ0FBVCxLQUErQyxFQUFoRCxFQUFvRCxDQUFwRCxLQUEwRFAsT0FBTyxDQUFDUSxRQUFSLEVBQWpFO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0Jvd3NlciwgZ2V0R2xvYmFsT2JqZWN0IH0gZnJvbSBcIi4uL2NvbW1vbi9saWJcIlxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4uklF5rWP6KeI5Zmo77yI5LuF5pSv5oyBPD1JRSAxMe+8iVxyXG4gKiBAcGFyYW0gdmVyc2lvbiDlhbfkvZPnmoRJReeJiOacrOWPt1xyXG4gKiBAcGFyYW0gdXNlckFnZW50IOa1j+iniOWZqOS7o+eQhuWtl+espuS4su+8jOiLpeS4jeaMh+Wumu+8jOWImeWPlm5hdmlnYXRvci51c2VyQWdlbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0lFKHZlcnNpb24/OiBudW1iZXIsIHVzZXJBZ2VudD86IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHVhID0gdXNlckFnZW50IHx8IFwiXCJcclxuICAgIGlmIChpc0Jvd3NlcigpICYmICF1YSkge1xyXG4gICAgICAgIHVhID0gKDxXaW5kb3c+Z2V0R2xvYmFsT2JqZWN0KCkpLm5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgIH1cclxuICAgIGlmICghdWEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBzZXQgdXNlckFnZW50IGluIHRoaXMgbWV0aG9kLlwiKVxyXG4gICAgfVxyXG4gICAgaWYgKCF2ZXJzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIC9tc2llL2kudGVzdCh1YSkgfHwgISF1YS5tYXRjaCgvVHJpZGVudFxcLzdcXC4vaSlcclxuICAgIH1cclxuICAgIGlmICh2ZXJzaW9uID09IDExKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdWEubWF0Y2goL1RyaWRlbnRcXC83XFwuL2kpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKHVhLm1hdGNoKG5ldyBSZWdFeHAoXCJNU0lFXFxcXHMrKFxcXFxkKylcIiwgXCJpXCIpKSB8fCBbXSlbMV0gPT0gdmVyc2lvbi50b1N0cmluZygpXHJcbn0iXX0=