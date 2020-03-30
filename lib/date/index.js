"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var format = _interopRequireWildcard(require("./format"));

var convert = _interopRequireWildcard(require("./convert"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  /**
   * 格式化相关
   */
  format: format,

  /**
   * 转换相关
   */
  convert: convert
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbImZvcm1hdCIsImNvbnZlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7ZUFFZTtBQUNYOzs7QUFHQUEsRUFBQUEsTUFBTSxFQUFOQSxNQUpXOztBQUtYOzs7QUFHQUMsRUFBQUEsT0FBTyxFQUFQQTtBQVJXLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmb3JtYXQgZnJvbSBcIi4vZm9ybWF0XCJcclxuaW1wb3J0ICogYXMgY29udmVydCBmcm9tIFwiLi9jb252ZXJ0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8qKlxyXG4gICAgICog5qC85byP5YyW55u45YWzXHJcbiAgICAgKi9cclxuICAgIGZvcm1hdCxcclxuICAgIC8qKlxyXG4gICAgICog6L2s5o2i55u45YWzXHJcbiAgICAgKi9cclxuICAgIGNvbnZlcnRcclxufSJdfQ==