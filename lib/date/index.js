"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var format = _interopRequireWildcard(require("./format"));

var convert = _interopRequireWildcard(require("./convert"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbImZvcm1hdCIsImNvbnZlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztlQUVlO0FBQ1g7OztBQUdBQSxFQUFBQSxNQUFNLEVBQU5BLE1BSlc7O0FBS1g7OztBQUdBQyxFQUFBQSxPQUFPLEVBQVBBO0FBUlcsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZvcm1hdCBmcm9tIFwiLi9mb3JtYXRcIlxyXG5pbXBvcnQgKiBhcyBjb252ZXJ0IGZyb20gXCIuL2NvbnZlcnRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmoLzlvI/ljJbnm7jlhbNcclxuICAgICAqL1xyXG4gICAgZm9ybWF0LFxyXG4gICAgLyoqXHJcbiAgICAgKiDovazmjaLnm7jlhbNcclxuICAgICAqL1xyXG4gICAgY29udmVydFxyXG59Il19