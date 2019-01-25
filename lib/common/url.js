"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendQueryString = void 0;

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

exports.appendQueryString = appendQueryString;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vdXJsLnRzIl0sIm5hbWVzIjpbImFwcGVuZFF1ZXJ5U3RyaW5nIiwidXJsIiwicXVlcnlTdHJpbmciLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFHTyxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEdBQUQsRUFBY0MsV0FBZCxFQUFzQztBQUNuRSxNQUFJLENBQUNELEdBQUwsRUFBVTtBQUNOLFdBQU8sRUFBUDtBQUNIOztBQUNELE1BQUksQ0FBQ0MsV0FBTCxFQUFrQjtBQUNkLFdBQU9ELEdBQVA7QUFDSDs7QUFDRCxtQkFBVUEsR0FBVixTQUFnQkEsR0FBRyxDQUFDRSxRQUFKLENBQWEsR0FBYixJQUFvQixHQUFwQixHQUEwQixHQUExQyxTQUFnREQsV0FBaEQ7QUFDSCxDQVJNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWcqHVybOWQjumdoui/veWKoOafpeivouWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFwcGVuZFF1ZXJ5U3RyaW5nID0gKHVybDogc3RyaW5nLCBxdWVyeVN0cmluZzogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICBpZiAoIXF1ZXJ5U3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHVybFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAke3VybH0ke3VybC5pbmNsdWRlcyhcIj9cIikgPyBcIiZcIiA6IFwiP1wifSR7cXVlcnlTdHJpbmd9YFxyXG59Il19