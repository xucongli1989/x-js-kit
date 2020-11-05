"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var regexConst = _interopRequireWildcard(require("./regex"));

var map = _interopRequireWildcard(require("./map"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  /**
   * 正则常量
   */
  regexConst: regexConst,

  /**
   * key/value常量
   */
  map: map
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudC9pbmRleC50cyJdLCJuYW1lcyI6WyJyZWdleENvbnN0IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O2VBRWU7QUFDWDtBQUNKO0FBQ0E7QUFDSUEsRUFBQUEsVUFBVSxFQUFWQSxVQUpXOztBQUtYO0FBQ0o7QUFDQTtBQUNJQyxFQUFBQSxHQUFHLEVBQUhBO0FBUlcsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJlZ2V4Q29uc3QgZnJvbSBcIi4vcmVnZXhcIlxyXG5pbXBvcnQgKiBhcyBtYXAgZnJvbSBcIi4vbWFwXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8qKlxyXG4gICAgICog5q2j5YiZ5bi46YePXHJcbiAgICAgKi9cclxuICAgIHJlZ2V4Q29uc3QsXHJcbiAgICAvKipcclxuICAgICAqIGtleS92YWx1ZeW4uOmHj1xyXG4gICAgICovXHJcbiAgICBtYXBcclxufSJdfQ==