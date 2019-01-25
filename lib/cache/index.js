"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var localStorage = _interopRequireWildcard(require("./localStorage"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = {
  /**
   * 带过期时间的缓存（就是浏览器中的localStorage，只是在value的结构中设置了指定的节点来表明什么时候过期，如果过期，则不返回该数据）
   */
  localStorage: localStorage
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWNoZS9pbmRleC50cyJdLCJuYW1lcyI6WyJsb2NhbFN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUNlO0FBQ1g7OztBQUdBQSxFQUFBQSxZQUFZLEVBQVpBO0FBSlcsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzICBsb2NhbFN0b3JhZ2UgZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCJcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDluKbov4fmnJ/ml7bpl7TnmoTnvJPlrZjvvIjlsLHmmK/mtY/op4jlmajkuK3nmoRsb2NhbFN0b3JhZ2XvvIzlj6rmmK/lnKh2YWx1ZeeahOe7k+aehOS4reiuvue9ruS6huaMh+WumueahOiKgueCueadpeihqOaYjuS7gOS5iOaXtuWAmei/h+acn++8jOWmguaenOi/h+acn++8jOWImeS4jei/lOWbnuivpeaVsOaNru+8iVxyXG4gICAgICovXHJcbiAgICBsb2NhbFN0b3JhZ2VcclxufSJdfQ==