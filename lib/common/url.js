"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendQueryString = appendQueryString;
exports.getUrlParameter = getUrlParameter;

/**
 * 在url后面追加查询字符串
 */
function appendQueryString(url, queryString) {
  if (!url) {
    return "";
  }

  if (!queryString) {
    return url;
  }

  return "".concat(url).concat(url.includes("?") ? "&" : "?").concat(queryString);
}
/**
 * 从查询串中获取指定参数
 * @param search 查询串，如：location.search
 */


function getUrlParameter(search, name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vdXJsLnRzIl0sIm5hbWVzIjpbImFwcGVuZFF1ZXJ5U3RyaW5nIiwidXJsIiwicXVlcnlTdHJpbmciLCJpbmNsdWRlcyIsImdldFVybFBhcmFtZXRlciIsInNlYXJjaCIsIm5hbWUiLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyIsImRlY29kZVVSSUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O0FBR08sU0FBU0EsaUJBQVQsQ0FBMkJDLEdBQTNCLEVBQXdDQyxXQUF4QyxFQUE2RDtBQUNoRSxNQUFJLENBQUNELEdBQUwsRUFBVTtBQUNOLFdBQU8sRUFBUDtBQUNIOztBQUNELE1BQUksQ0FBQ0MsV0FBTCxFQUFrQjtBQUNkLFdBQU9ELEdBQVA7QUFDSDs7QUFDRCxtQkFBVUEsR0FBVixTQUFnQkEsR0FBRyxDQUFDRSxRQUFKLENBQWEsR0FBYixJQUFvQixHQUFwQixHQUEwQixHQUExQyxTQUFnREQsV0FBaEQ7QUFDSDtBQUVEOzs7Ozs7QUFJTyxTQUFTRSxlQUFULENBQXlCQyxNQUF6QixFQUF5Q0MsSUFBekMsRUFBdUQ7QUFDMURBLEVBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDQyxPQUFMLENBQWEsTUFBYixFQUFxQixLQUFyQixFQUE0QkEsT0FBNUIsQ0FBb0MsTUFBcEMsRUFBNEMsS0FBNUMsQ0FBUDtBQUNBLE1BQUlDLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVcsV0FBV0gsSUFBWCxHQUFrQixXQUE3QixDQUFaO0FBQ0EsTUFBSUksT0FBTyxHQUFHRixLQUFLLENBQUNHLElBQU4sQ0FBV04sTUFBWCxDQUFkO0FBQ0EsU0FBT0ssT0FBTyxLQUFLLElBQVosR0FBbUIsRUFBbkIsR0FBd0JFLGtCQUFrQixDQUFDRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdILE9BQVgsQ0FBbUIsS0FBbkIsRUFBMEIsR0FBMUIsQ0FBRCxDQUFqRDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWcqHVybOWQjumdoui/veWKoOafpeivouWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFF1ZXJ5U3RyaW5nKHVybDogc3RyaW5nLCBxdWVyeVN0cmluZzogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXF1ZXJ5U3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHVybFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAke3VybH0ke3VybC5pbmNsdWRlcyhcIj9cIikgPyBcIiZcIiA6IFwiP1wifSR7cXVlcnlTdHJpbmd9YFxyXG59XHJcblxyXG4vKipcclxuICog5LuO5p+l6K+i5Liy5Lit6I635Y+W5oyH5a6a5Y+C5pWwXHJcbiAqIEBwYXJhbSBzZWFyY2gg5p+l6K+i5Liy77yM5aaC77yabG9jYXRpb24uc2VhcmNoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVyKHNlYXJjaDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtdLywgJ1xcXFxbJykucmVwbGFjZSgvW1xcXV0vLCAnXFxcXF0nKTtcclxuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ1tcXFxcPyZdJyArIG5hbWUgKyAnPShbXiYjXSopJyk7XHJcbiAgICB2YXIgcmVzdWx0cyA9IHJlZ2V4LmV4ZWMoc2VhcmNoKTtcclxuICAgIHJldHVybiByZXN1bHRzID09PSBudWxsID8gJycgOiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1sxXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XHJcbn0iXX0=