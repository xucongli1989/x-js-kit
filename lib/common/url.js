"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUrlParameter = exports.appendQueryString = void 0;

/**
 * 在url后面追加查询字符串
 */
var appendQueryString = function appendQueryString(url, queryString) {
  if (!url) {
    return "";
  }

  if (!queryString) {
    return url;
  }

  return "".concat(url).concat(url.includes("?") ? "&" : "?").concat(queryString);
};
/**
 * 从查询串中获取指定参数
 * @param search 查询串，如：location.search
 */


exports.appendQueryString = appendQueryString;

var getUrlParameter = function getUrlParameter(search, name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

exports.getUrlParameter = getUrlParameter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vdXJsLnRzIl0sIm5hbWVzIjpbImFwcGVuZFF1ZXJ5U3RyaW5nIiwidXJsIiwicXVlcnlTdHJpbmciLCJpbmNsdWRlcyIsImdldFVybFBhcmFtZXRlciIsInNlYXJjaCIsIm5hbWUiLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFHTyxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEdBQUQsRUFBY0MsV0FBZCxFQUFzQztBQUNuRSxNQUFJLENBQUNELEdBQUwsRUFBVTtBQUNOLFdBQU8sRUFBUDtBQUNIOztBQUNELE1BQUksQ0FBQ0MsV0FBTCxFQUFrQjtBQUNkLFdBQU9ELEdBQVA7QUFDSDs7QUFDRCxtQkFBVUEsR0FBVixTQUFnQkEsR0FBRyxDQUFDRSxRQUFKLENBQWEsR0FBYixJQUFvQixHQUFwQixHQUEwQixHQUExQyxTQUFnREQsV0FBaEQ7QUFDSCxDQVJNO0FBVVA7Ozs7Ozs7O0FBSU8sSUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxNQUFELEVBQWlCQyxJQUFqQixFQUFrQztBQUM3REEsRUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNDLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLEtBQXJCLEVBQTRCQSxPQUE1QixDQUFvQyxNQUFwQyxFQUE0QyxLQUE1QyxDQUFQO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLElBQUlDLE1BQUosQ0FBVyxXQUFXSCxJQUFYLEdBQWtCLFdBQTdCLENBQVo7QUFDQSxNQUFJSSxPQUFPLEdBQUdGLEtBQUssQ0FBQ0csSUFBTixDQUFXTixNQUFYLENBQWQ7QUFDQSxTQUFPSyxPQUFPLEtBQUssSUFBWixHQUFtQixFQUFuQixHQUF3QkUsa0JBQWtCLENBQUNGLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0gsT0FBWCxDQUFtQixLQUFuQixFQUEwQixHQUExQixDQUFELENBQWpEO0FBQ0gsQ0FMTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlnKh1cmzlkI7pnaLov73liqDmn6Xor6LlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBjb25zdCBhcHBlbmRRdWVyeVN0cmluZyA9ICh1cmw6IHN0cmluZywgcXVlcnlTdHJpbmc6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKCFxdWVyeVN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB1cmxcclxuICAgIH1cclxuICAgIHJldHVybiBgJHt1cmx9JHt1cmwuaW5jbHVkZXMoXCI/XCIpID8gXCImXCIgOiBcIj9cIn0ke3F1ZXJ5U3RyaW5nfWBcclxufVxyXG5cclxuLyoqXHJcbiAqIOS7juafpeivouS4suS4reiOt+WPluaMh+WumuWPguaVsFxyXG4gKiBAcGFyYW0gc2VhcmNoIOafpeivouS4su+8jOWmgu+8mmxvY2F0aW9uLnNlYXJjaFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFVybFBhcmFtZXRlciA9IChzZWFyY2g6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXS8sICdcXFxcWycpLnJlcGxhY2UoL1tcXF1dLywgJ1xcXFxdJyk7XHJcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdbXFxcXD8mXScgKyBuYW1lICsgJz0oW14mI10qKScpO1xyXG4gICAgdmFyIHJlc3VsdHMgPSByZWdleC5leGVjKHNlYXJjaCk7XHJcbiAgICByZXR1cm4gcmVzdWx0cyA9PT0gbnVsbCA/ICcnIDogZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMV0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG59Il19