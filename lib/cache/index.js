"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var localStorage = _interopRequireWildcard(require("./localStorage"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  /**
   * 带过期时间的缓存（就是浏览器中的localStorage，只是在value的结构中设置了指定的节点来表明什么时候过期，如果过期，则不返回该数据）
   */
  localStorage: localStorage
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWNoZS9pbmRleC50cyJdLCJuYW1lcyI6WyJsb2NhbFN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7ZUFDZTtBQUNYOzs7QUFHQUEsRUFBQUEsWUFBWSxFQUFaQTtBQUpXLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyAgbG9jYWxTdG9yYWdlIGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8qKlxyXG4gICAgICog5bim6L+H5pyf5pe26Ze055qE57yT5a2Y77yI5bCx5piv5rWP6KeI5Zmo5Lit55qEbG9jYWxTdG9yYWdl77yM5Y+q5piv5ZyodmFsdWXnmoTnu5PmnoTkuK3orr7nva7kuobmjIflrprnmoToioLngrnmnaXooajmmI7ku4DkuYjml7blgJnov4fmnJ/vvIzlpoLmnpzov4fmnJ/vvIzliJnkuI3ov5Tlm57or6XmlbDmja7vvIlcclxuICAgICAqL1xyXG4gICAgbG9jYWxTdG9yYWdlXHJcbn0iXX0=