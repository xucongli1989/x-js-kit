"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var localStorage = _interopRequireWildcard(require("./localStorage"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable import/no-default-export */
var _default = {
  /**
   * 带过期时间的缓存（就是浏览器中的localStorage，只是在value的结构中设置了指定的节点来表明什么时候过期，如果过期，则不返回该数据）
   */
  localStorage: localStorage
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWNoZS9pbmRleC50cyJdLCJuYW1lcyI6WyJsb2NhbFN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7QUFEQTtlQUdlO0FBQ1g7QUFDSjtBQUNBO0FBQ0lBLEVBQUFBLFlBQVksRUFBWkE7QUFKVyxDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWRlZmF1bHQtZXhwb3J0ICovXHJcbmltcG9ydCAqIGFzIGxvY2FsU3RvcmFnZSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDluKbov4fmnJ/ml7bpl7TnmoTnvJPlrZjvvIjlsLHmmK/mtY/op4jlmajkuK3nmoRsb2NhbFN0b3JhZ2XvvIzlj6rmmK/lnKh2YWx1ZeeahOe7k+aehOS4reiuvue9ruS6huaMh+WumueahOiKgueCueadpeihqOaYjuS7gOS5iOaXtuWAmei/h+acn++8jOWmguaenOi/h+acn++8jOWImeS4jei/lOWbnuivpeaVsOaNru+8iVxyXG4gICAgICovXHJcbiAgICBsb2NhbFN0b3JhZ2VcclxufVxyXG4iXX0=