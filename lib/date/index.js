"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var format = _interopRequireWildcard(require("./format"));

var convert = _interopRequireWildcard(require("./convert"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbImZvcm1hdCIsImNvbnZlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O2VBRWU7QUFDWDs7O0FBR0FBLEVBQUFBLE1BQU0sRUFBTkEsTUFKVzs7QUFLWDs7O0FBR0FDLEVBQUFBLE9BQU8sRUFBUEE7QUFSVyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZm9ybWF0IGZyb20gXCIuL2Zvcm1hdFwiXHJcbmltcG9ydCAqIGFzIGNvbnZlcnQgZnJvbSBcIi4vY29udmVydFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAvKipcclxuICAgICAqIOagvOW8j+WMluebuOWFs1xyXG4gICAgICovXHJcbiAgICBmb3JtYXQsXHJcbiAgICAvKipcclxuICAgICAqIOi9rOaNouebuOWFs1xyXG4gICAgICovXHJcbiAgICBjb252ZXJ0XHJcbn0iXX0=