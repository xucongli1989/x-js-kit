"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItem = getItem;
exports.setItem = setItem;
exports.removeItem = removeItem;
exports.hasItem = hasItem;
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

  if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
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
 * 获取当前cookie的全部键名
 * @returns 所有键名
 */


function keys() {
  if (!_lib.document) {
    return [];
  }

  var aKeys = _lib.document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);

  for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
    aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
  }

  return aKeys;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vY29va2llLnRzIl0sIm5hbWVzIjpbImdldEl0ZW0iLCJzS2V5IiwiZG9jdW1lbnQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb29raWUiLCJyZXBsYWNlIiwiUmVnRXhwIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2V0SXRlbSIsInNWYWx1ZSIsInZFbmQiLCJzUGF0aCIsInNEb21haW4iLCJiU2VjdXJlIiwidGVzdCIsInNFeHBpcmVzIiwiY29uc3RydWN0b3IiLCJOdW1iZXIiLCJJbmZpbml0eSIsIlN0cmluZyIsIkRhdGUiLCJ0b1VUQ1N0cmluZyIsInJlbW92ZUl0ZW0iLCJoYXNJdGVtIiwia2V5cyIsImFLZXlzIiwic3BsaXQiLCJuSWR4IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBOzs7OztBQUtPLFNBQVNBLE9BQVQsQ0FBaUJDLElBQWpCLEVBQThDO0FBQ2pELE1BQUksQ0FBQ0MsYUFBTCxFQUFlO0FBQ1gsV0FBTyxJQUFQO0FBQ0g7O0FBQ0QsU0FBT0Msa0JBQWtCLENBQUNELGNBQVNFLE1BQVQsQ0FBZ0JDLE9BQWhCLENBQXdCLElBQUlDLE1BQUosQ0FBVyxxQkFBcUJDLGtCQUFrQixDQUFDTixJQUFELENBQWxCLENBQXlCSSxPQUF6QixDQUFpQyxTQUFqQyxFQUE0QyxNQUE1QyxDQUFyQixHQUEyRSw2QkFBdEYsQ0FBeEIsRUFBOEksSUFBOUksQ0FBRCxDQUFsQixJQUEySyxJQUFsTDtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7OztBQVVPLFNBQVNHLE9BQVQsQ0FBaUJQLElBQWpCLEVBQStCUSxNQUEvQixFQUErQ0MsSUFBL0MsRUFBMko7QUFBQSxNQUE5RUMsS0FBOEUsdUVBQTlELEdBQThEO0FBQUEsTUFBekRDLE9BQXlELHVFQUF2QyxFQUF1QztBQUFBLE1BQW5DQyxPQUFtQyx1RUFBaEIsS0FBZ0I7O0FBQzlKLE1BQUksQ0FBQ1gsYUFBTCxFQUFlO0FBQ1gsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDRCxJQUFELElBQVMsNkNBQTZDYSxJQUE3QyxDQUFrRGIsSUFBbEQsQ0FBYixFQUFzRTtBQUNsRSxXQUFPLEtBQVA7QUFDSDs7QUFDRCxNQUFJYyxRQUFRLEdBQUcsRUFBZjs7QUFDQSxNQUFJTCxJQUFKLEVBQVU7QUFDTixZQUFRQSxJQUFJLENBQUNNLFdBQWI7QUFDSSxXQUFLQyxNQUFMO0FBQ0lGLFFBQUFBLFFBQVEsR0FBR0wsSUFBSSxLQUFLUSxRQUFULEdBQW9CLHlDQUFwQixHQUFnRSxlQUFlUixJQUExRjtBQUNBOztBQUNKLFdBQUtTLE1BQUw7QUFDSUosUUFBQUEsUUFBUSxHQUFHLGVBQWVMLElBQTFCO0FBQ0E7O0FBQ0osV0FBS1UsSUFBTDtBQUNJTCxRQUFBQSxRQUFRLEdBQUcsZUFBZ0JMLElBQUQsQ0FBZVcsV0FBZixFQUExQjtBQUNBO0FBVFI7QUFXSDs7QUFDRG5CLGdCQUFTRSxNQUFULEdBQWtCRyxrQkFBa0IsQ0FBQ04sSUFBRCxDQUFsQixHQUEyQixHQUEzQixHQUFpQ00sa0JBQWtCLENBQUNFLE1BQUQsQ0FBbkQsR0FBOERNLFFBQTlELElBQTBFSCxPQUFPLEdBQUcsY0FBY0EsT0FBakIsR0FBMkIsRUFBNUcsS0FBbUhELEtBQUssR0FBRyxZQUFZQSxLQUFmLEdBQXVCLEVBQS9JLEtBQXNKRSxPQUFPLEdBQUcsVUFBSCxHQUFnQixFQUE3SyxDQUFsQjtBQUNBLFNBQU8sSUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7OztBQU9PLFNBQVNTLFVBQVQsQ0FBb0JyQixJQUFwQixFQUFzRjtBQUFBLE1BQXBEVSxLQUFvRCx1RUFBcEMsR0FBb0M7QUFBQSxNQUEvQkMsT0FBK0IsdUVBQWIsRUFBYTs7QUFDekYsTUFBSSxDQUFDVixhQUFMLEVBQWU7QUFDWCxXQUFPLEtBQVA7QUFDSDs7QUFDRCxNQUFJLENBQUNELElBQUQsSUFBUyxDQUFDc0IsT0FBTyxDQUFDdEIsSUFBRCxDQUFyQixFQUE2QjtBQUN6QixXQUFPLEtBQVA7QUFDSDs7QUFDREMsZ0JBQVNFLE1BQVQsR0FBa0JHLGtCQUFrQixDQUFDTixJQUFELENBQWxCLEdBQTJCLDBDQUEzQixJQUF5RVcsT0FBTyxHQUFHLGNBQWNBLE9BQWpCLEdBQTJCLEVBQTNHLEtBQWtIRCxLQUFLLEdBQUcsWUFBWUEsS0FBZixHQUF1QixFQUE5SSxDQUFsQjtBQUNBLFNBQU8sSUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7QUFLTyxTQUFTWSxPQUFULENBQWlCdEIsSUFBakIsRUFBd0M7QUFDM0MsTUFBSSxDQUFDQyxhQUFMLEVBQWU7QUFDWCxXQUFPLEtBQVA7QUFDSDs7QUFDRCxTQUFRLElBQUlJLE1BQUosQ0FBVyxnQkFBZ0JDLGtCQUFrQixDQUFDTixJQUFELENBQWxCLENBQXlCSSxPQUF6QixDQUFpQyxTQUFqQyxFQUE0QyxNQUE1QyxDQUFoQixHQUFzRSxTQUFqRixDQUFELENBQThGUyxJQUE5RixDQUFtR1osY0FBU0UsTUFBNUcsQ0FBUDtBQUNIO0FBRUQ7Ozs7OztBQUlPLFNBQVNvQixJQUFULEdBQTBCO0FBQzdCLE1BQUksQ0FBQ3RCLGFBQUwsRUFBZTtBQUNYLFdBQU8sRUFBUDtBQUNIOztBQUNELE1BQUl1QixLQUFLLEdBQUd2QixjQUFTRSxNQUFULENBQWdCQyxPQUFoQixDQUF3Qix5REFBeEIsRUFBbUYsRUFBbkYsRUFBdUZxQixLQUF2RixDQUE2RixxQkFBN0YsQ0FBWjs7QUFDQSxPQUFLLElBQUlDLElBQUksR0FBRyxDQUFoQixFQUFtQkEsSUFBSSxHQUFHRixLQUFLLENBQUNHLE1BQWhDLEVBQXdDRCxJQUFJLEVBQTVDLEVBQWdEO0FBQzVDRixJQUFBQSxLQUFLLENBQUNFLElBQUQsQ0FBTCxHQUFjeEIsa0JBQWtCLENBQUNzQixLQUFLLENBQUNFLElBQUQsQ0FBTixDQUFoQztBQUNIOztBQUNELFNBQU9GLEtBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRvY3VtZW50IH0gZnJvbSBcIi4vbGliXCJcclxuXHJcbi8vcmVmZXJlbmNl77yaaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvemgtQ04vZG9jcy9XZWIvQVBJL0RvY3VtZW50L2Nvb2tpZVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPlmNvb2tpZeWGheWuuVxyXG4gKiBAcGFyYW0gc0tleSBjb29raWXplK7lkI1cclxuICogQHJldHVybnMg5YaF5a65XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbShzS2V5OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIGlmICghZG9jdW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKD86KD86XnwuKjspXFxcXHMqXCIgKyBlbmNvZGVVUklDb21wb25lbnQoc0tleSkucmVwbGFjZSgvWy0uKypdL2csIFwiXFxcXCQmXCIpICsgXCJcXFxccypcXFxcPVxcXFxzKihbXjtdKikuKiQpfF4uKiRcIiksIFwiJDFcIikpIHx8IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDorr7nva5jb29raWXlhoXlrrlcclxuICogQHBhcmFtIHNLZXkg6ZSu5ZCNXHJcbiAqIEBwYXJhbSBzVmFsdWUg5YC8XHJcbiAqIEBwYXJhbSB2RW5kIOWIsOacn+aXtumXtO+8iOWPr+S4uk51bWJlci9TdHJpbmcvRGF0ZeWvueixoe+8jOiLpeS4uk51bWJlcu+8jOWImeiuvue9rueahOaYr21heC1hZ2XvvJvoi6XkuLpTdHJpbmfmiJZEYXRl77yM5YiZ6K6+572u55qE5piv5pW05LiqZXhwaXJlc++8iVxyXG4gKiBAcGFyYW0gc1BhdGgg6Lev5b6E77yI6buY6K6kL++8iVxyXG4gKiBAcGFyYW0gc0RvbWFpbiDln5/lkI3vvIjpu5jorqRcIlwi77yJXHJcbiAqIEBwYXJhbSBiU2VjdXJlIOaYr+WQpuWPquS8muiiq2h0dHBz5Lyg6L6T77yI6buY6K6kZmFsc2XvvIlcclxuICogQHJldHVybnMg5piv5ZCm6K6+572u5oiQ5YqfXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0SXRlbShzS2V5OiBzdHJpbmcsIHNWYWx1ZTogc3RyaW5nLCB2RW5kOiBudW1iZXIgfCBzdHJpbmcgfCBEYXRlLCBzUGF0aDogc3RyaW5nID0gXCIvXCIsIHNEb21haW46IHN0cmluZyA9IFwiXCIsIGJTZWN1cmU6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFkb2N1bWVudCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKCFzS2V5IHx8IC9eKD86ZXhwaXJlc3xtYXhcXC1hZ2V8cGF0aHxkb21haW58c2VjdXJlKSQvaS50ZXN0KHNLZXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBsZXQgc0V4cGlyZXMgPSBcIlwiXHJcbiAgICBpZiAodkVuZCkge1xyXG4gICAgICAgIHN3aXRjaCAodkVuZC5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICBjYXNlIE51bWJlcjpcclxuICAgICAgICAgICAgICAgIHNFeHBpcmVzID0gdkVuZCA9PT0gSW5maW5pdHkgPyBcIjsgZXhwaXJlcz1GcmksIDMxIERlYyA5OTk5IDIzOjU5OjU5IEdNVFwiIDogXCI7IG1heC1hZ2U9XCIgKyB2RW5kXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIFN0cmluZzpcclxuICAgICAgICAgICAgICAgIHNFeHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyB2RW5kXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIERhdGU6XHJcbiAgICAgICAgICAgICAgICBzRXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgKHZFbmQgYXMgRGF0ZSkudG9VVENTdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQoc0tleSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzVmFsdWUpICsgc0V4cGlyZXMgKyAoc0RvbWFpbiA/IFwiOyBkb21haW49XCIgKyBzRG9tYWluIDogXCJcIikgKyAoc1BhdGggPyBcIjsgcGF0aD1cIiArIHNQYXRoIDogXCJcIikgKyAoYlNlY3VyZSA/IFwiOyBzZWN1cmVcIiA6IFwiXCIpXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG4vKipcclxuICog5Yig6ZmkY29va2llXHJcbiAqIEBwYXJhbSBzS2V5IOmUruWQjVxyXG4gKiBAcGFyYW0gc1BhdGgg6Lev5b6E77yI6buY6K6kL++8iVxyXG4gKiBAcGFyYW0gc0RvbWFpbiDln5/lkI3vvIjpu5jorqRcIlwi77yJXHJcbiAqIEByZXR1cm5zIOaYr+WQpuWIoOmZpOaIkOWKn1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oc0tleTogc3RyaW5nLCBzUGF0aDogc3RyaW5nID0gXCIvXCIsIHNEb21haW46IHN0cmluZyA9IFwiXCIpOiBib29sZWFuIHtcclxuICAgIGlmICghZG9jdW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlmICghc0tleSB8fCAhaGFzSXRlbShzS2V5KSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuY29va2llID0gZW5jb2RlVVJJQ29tcG9uZW50KHNLZXkpICsgXCI9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UXCIgKyAoc0RvbWFpbiA/IFwiOyBkb21haW49XCIgKyBzRG9tYWluIDogXCJcIikgKyAoc1BhdGggPyBcIjsgcGF0aD1cIiArIHNQYXRoIDogXCJcIilcclxuICAgIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmmK/lkKbljIXlkKvmn5DkuKpjb29raWVcclxuICogQHBhcmFtIHNLZXkg6ZSu5ZCNXHJcbiAqIEByZXR1cm5zIOaYr+WQpuWMheWQq1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc0l0ZW0oc0tleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWRvY3VtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKG5ldyBSZWdFeHAoXCIoPzpefDtcXFxccyopXCIgKyBlbmNvZGVVUklDb21wb25lbnQoc0tleSkucmVwbGFjZSgvWy0uKypdL2csIFwiXFxcXCQmXCIpICsgXCJcXFxccypcXFxcPVwiKSkudGVzdChkb2N1bWVudC5jb29raWUpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5blvZPliY1jb29raWXnmoTlhajpg6jplK7lkI1cclxuICogQHJldHVybnMg5omA5pyJ6ZSu5ZCNXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24ga2V5cygpOiBzdHJpbmdbXSB7XHJcbiAgICBpZiAoIWRvY3VtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgICBsZXQgYUtleXMgPSBkb2N1bWVudC5jb29raWUucmVwbGFjZSgvKCg/Ol58XFxzKjspW15cXD1dKykoPz07fCQpfF5cXHMqfFxccyooPzpcXD1bXjtdKik/KD86XFwxfCQpL2csIFwiXCIpLnNwbGl0KC9cXHMqKD86XFw9W147XSopPztcXHMqLylcclxuICAgIGZvciAobGV0IG5JZHggPSAwOyBuSWR4IDwgYUtleXMubGVuZ3RoOyBuSWR4KyspIHtcclxuICAgICAgICBhS2V5c1tuSWR4XSA9IGRlY29kZVVSSUNvbXBvbmVudChhS2V5c1tuSWR4XSlcclxuICAgIH1cclxuICAgIHJldHVybiBhS2V5c1xyXG59Il19