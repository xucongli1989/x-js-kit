"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItem = getItem;
exports.setItem = setItem;
exports.hasItem = hasItem;
exports.removeItem = removeItem;
exports.keys = keys;

var _lib = require("./lib");

//reference：https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie

/**
 * 获取cookie内容
 * @param sKey cookie键名
 * @returns 内容
 */
function getItem(sKey) {
  if (!_lib.document) {
    return null;
  }

  return decodeURIComponent(_lib.document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}
/**
 * 设置cookie内容
 * @param sKey 键名
 * @param sValue 值
 * @param vEnd 到期时间（可为Number/String/Date对象，若为Number，则设置的是max-age；若为String或Date，则设置的是整个expires）
 * @param sPath 路径（默认/）
 * @param sDomain 域名（默认""）
 * @param bSecure 是否只会被https传输（默认false）
 * @returns 是否设置成功
 */


function setItem(sKey, sValue, vEnd) {
  var sPath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "/";
  var sDomain = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
  var bSecure = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  if (!_lib.document) {
    return false;
  }

  if (!sKey || /^(?:expires|max-age|path|domain|secure)$/i.test(sKey)) {
    return false;
  }

  var sExpires = "";

  if (vEnd) {
    switch (vEnd.constructor) {
      case Number:
        sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
        break;

      case String:
        sExpires = "; expires=" + vEnd;
        break;

      case Date:
        sExpires = "; expires=" + vEnd.toUTCString();
        break;
    }
  }

  _lib.document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
  return true;
}
/**
 * 是否包含某个cookie
 * @param sKey 键名
 * @returns 是否包含
 */


function hasItem(sKey) {
  if (!_lib.document) {
    return false;
  }

  return new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=").test(_lib.document.cookie);
}
/**
 * 删除cookie
 * @param sKey 键名
 * @param sPath 路径（默认/）
 * @param sDomain 域名（默认""）
 * @returns 是否删除成功
 */


function removeItem(sKey) {
  var sPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
  var sDomain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  if (!_lib.document) {
    return false;
  }

  if (!sKey || !hasItem(sKey)) {
    return false;
  }

  _lib.document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
  return true;
}
/**
 * 获取当前cookie的全部键名
 * @returns 所有键名
 */


function keys() {
  if (!_lib.document) {
    return [];
  }

  var aKeys = _lib.document.cookie.replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:=[^;]*)?;\s*/);

  for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
    aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
  }

  return aKeys;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vY29va2llLnRzIl0sIm5hbWVzIjpbImdldEl0ZW0iLCJzS2V5IiwiZG9jdW1lbnQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb29raWUiLCJyZXBsYWNlIiwiUmVnRXhwIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2V0SXRlbSIsInNWYWx1ZSIsInZFbmQiLCJzUGF0aCIsInNEb21haW4iLCJiU2VjdXJlIiwidGVzdCIsInNFeHBpcmVzIiwiY29uc3RydWN0b3IiLCJOdW1iZXIiLCJJbmZpbml0eSIsIlN0cmluZyIsIkRhdGUiLCJ0b1VUQ1N0cmluZyIsImhhc0l0ZW0iLCJyZW1vdmVJdGVtIiwia2V5cyIsImFLZXlzIiwic3BsaXQiLCJuSWR4IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxPQUFULENBQWlCQyxJQUFqQixFQUE4QztBQUNqRCxNQUFJLENBQUNDLGFBQUwsRUFBZTtBQUNYLFdBQU8sSUFBUDtBQUNIOztBQUNELFNBQU9DLGtCQUFrQixDQUFDRCxjQUFTRSxNQUFULENBQWdCQyxPQUFoQixDQUF3QixJQUFJQyxNQUFKLENBQVcscUJBQXFCQyxrQkFBa0IsQ0FBQ04sSUFBRCxDQUFsQixDQUF5QkksT0FBekIsQ0FBaUMsU0FBakMsRUFBNEMsTUFBNUMsQ0FBckIsR0FBMkUsNkJBQXRGLENBQXhCLEVBQThJLElBQTlJLENBQUQsQ0FBbEIsSUFBMkssSUFBbEw7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTRyxPQUFULENBQWlCUCxJQUFqQixFQUErQlEsTUFBL0IsRUFBK0NDLElBQS9DLEVBQTJKO0FBQUEsTUFBOUVDLEtBQThFLHVFQUE5RCxHQUE4RDtBQUFBLE1BQXpEQyxPQUF5RCx1RUFBdkMsRUFBdUM7QUFBQSxNQUFuQ0MsT0FBbUMs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UDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZG9jdW1lbnQgfSBmcm9tIFwiLi9saWJcIlxyXG5cclxuLy9yZWZlcmVuY2XvvJpodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy96aC1DTi9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvY29va2llXHJcblxyXG4vKipcclxuICog6I635Y+WY29va2ll5YaF5a65XHJcbiAqIEBwYXJhbSBzS2V5IGNvb2tpZemUruWQjVxyXG4gKiBAcmV0dXJucyDlhoXlrrlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtKHNLZXk6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgaWYgKCFkb2N1bWVudCkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoPzooPzpefC4qOylcXFxccypcIiArIGVuY29kZVVSSUNvbXBvbmVudChzS2V5KS5yZXBsYWNlKC9bLS4rKl0vZywgXCJcXFxcJCZcIikgKyBcIlxcXFxzKlxcXFw9XFxcXHMqKFteO10qKS4qJCl8Xi4qJFwiKSwgXCIkMVwiKSkgfHwgbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOiuvue9rmNvb2tpZeWGheWuuVxyXG4gKiBAcGFyYW0gc0tleSDplK7lkI1cclxuICogQHBhcmFtIHNWYWx1ZSDlgLxcclxuICogQHBhcmFtIHZFbmQg5Yiw5pyf5pe26Ze077yI5Y+v5Li6TnVtYmVyL1N0cmluZy9EYXRl5a+56LGh77yM6Iul5Li6TnVtYmVy77yM5YiZ6K6+572u55qE5pivbWF4LWFnZe+8m+iLpeS4ulN0cmluZ+aIlkRhdGXvvIzliJnorr7nva7nmoTmmK/mlbTkuKpleHBpcmVz77yJXHJcbiAqIEBwYXJhbSBzUGF0aCDot6/lvoTvvIjpu5jorqQv77yJXHJcbiAqIEBwYXJhbSBzRG9tYWluIOWfn+WQje+8iOm7mOiupFwiXCLvvIlcclxuICogQHBhcmFtIGJTZWN1cmUg5piv5ZCm5Y+q5Lya6KKraHR0cHPkvKDovpPvvIjpu5jorqRmYWxzZe+8iVxyXG4gKiBAcmV0dXJucyDmmK/lkKborr7nva7miJDlip9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRJdGVtKHNLZXk6IHN0cmluZywgc1ZhbHVlOiBzdHJpbmcsIHZFbmQ6IG51bWJlciB8IHN0cmluZyB8IERhdGUsIHNQYXRoOiBzdHJpbmcgPSBcIi9cIiwgc0RvbWFpbjogc3RyaW5nID0gXCJcIiwgYlNlY3VyZTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWRvY3VtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiAoIXNLZXkgfHwgL14oPzpleHBpcmVzfG1heC1hZ2V8cGF0aHxkb21haW58c2VjdXJlKSQvaS50ZXN0KHNLZXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBsZXQgc0V4cGlyZXMgPSBcIlwiXHJcbiAgICBpZiAodkVuZCkge1xyXG4gICAgICAgIHN3aXRjaCAodkVuZC5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICBjYXNlIE51bWJlcjpcclxuICAgICAgICAgICAgICAgIHNFeHBpcmVzID0gdkVuZCA9PT0gSW5maW5pdHkgPyBcIjsgZXhwaXJlcz1GcmksIDMxIERlYyA5OTk5IDIzOjU5OjU5IEdNVFwiIDogXCI7IG1heC1hZ2U9XCIgKyB2RW5kXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIFN0cmluZzpcclxuICAgICAgICAgICAgICAgIHNFeHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyB2RW5kXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIERhdGU6XHJcbiAgICAgICAgICAgICAgICBzRXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgKHZFbmQgYXMgRGF0ZSkudG9VVENTdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQoc0tleSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzVmFsdWUpICsgc0V4cGlyZXMgKyAoc0RvbWFpbiA/IFwiOyBkb21haW49XCIgKyBzRG9tYWluIDogXCJcIikgKyAoc1BhdGggPyBcIjsgcGF0aD1cIiArIHNQYXRoIDogXCJcIikgKyAoYlNlY3VyZSA/IFwiOyBzZWN1cmVcIiA6IFwiXCIpXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG4vKipcclxuICog5piv5ZCm5YyF5ZCr5p+Q5LiqY29va2llXHJcbiAqIEBwYXJhbSBzS2V5IOmUruWQjVxyXG4gKiBAcmV0dXJucyDmmK/lkKbljIXlkKtcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNJdGVtKHNLZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFkb2N1bWVudCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChuZXcgUmVnRXhwKFwiKD86Xnw7XFxcXHMqKVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpLnJlcGxhY2UoL1stLisqXS9nLCBcIlxcXFwkJlwiKSArIFwiXFxcXHMqXFxcXD1cIikpLnRlc3QoZG9jdW1lbnQuY29va2llKVxyXG59XHJcblxyXG4vKipcclxuICog5Yig6ZmkY29va2llXHJcbiAqIEBwYXJhbSBzS2V5IOmUruWQjVxyXG4gKiBAcGFyYW0gc1BhdGgg6Lev5b6E77yI6buY6K6kL++8iVxyXG4gKiBAcGFyYW0gc0RvbWFpbiDln5/lkI3vvIjpu5jorqRcIlwi77yJXHJcbiAqIEByZXR1cm5zIOaYr+WQpuWIoOmZpOaIkOWKn1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oc0tleTogc3RyaW5nLCBzUGF0aDogc3RyaW5nID0gXCIvXCIsIHNEb21haW46IHN0cmluZyA9IFwiXCIpOiBib29sZWFuIHtcclxuICAgIGlmICghZG9jdW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlmICghc0tleSB8fCAhaGFzSXRlbShzS2V5KSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuY29va2llID0gZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpICsgXCI9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UXCIgKyAoc0RvbWFpbiA/IFwiOyBkb21haW49XCIgKyBzRG9tYWluIDogXCJcIikgKyAoc1BhdGggPyBcIjsgcGF0aD1cIiArIHNQYXRoIDogXCJcIilcclxuICAgIHJldHVybiB0cnVlXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluW9k+WJjWNvb2tpZeeahOWFqOmDqOmUruWQjVxyXG4gKiBAcmV0dXJucyDmiYDmnInplK7lkI1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBrZXlzKCk6IHN0cmluZ1tdIHtcclxuICAgIGlmICghZG9jdW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGNvbnN0IGFLZXlzID0gZG9jdW1lbnQuY29va2llLnJlcGxhY2UoLygoPzpefFxccyo7KVtePV0rKSg/PTt8JCl8Xlxccyp8XFxzKig/Oj1bXjtdKik/KD86XFwxfCQpL2csIFwiXCIpLnNwbGl0KC9cXHMqKD86PVteO10qKT87XFxzKi8pXHJcbiAgICBmb3IgKGxldCBuSWR4ID0gMDsgbklkeCA8IGFLZXlzLmxlbmd0aDsgbklkeCsrKSB7XHJcbiAgICAgICAgYUtleXNbbklkeF0gPSBkZWNvZGVVUklDb21wb25lbnQoYUtleXNbbklkeF0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYUtleXNcclxufSJdfQ==