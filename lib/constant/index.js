"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var regexConst = _interopRequireWildcard(require("./regex"));

var map = _interopRequireWildcard(require("./map"));

var enums = _interopRequireWildcard(require("./enums"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable import/no-default-export */
var _default = {
  /**
   * 正则常量
   */
  regexConst: regexConst,

  /**
   * key/value常量
   */
  map: map,

  /**
   * 枚举常量
   */
  enums: enums
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudC9pbmRleC50cyJdLCJuYW1lcyI6WyJyZWdleENvbnN0IiwibWFwIiwiZW51bXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFIQTtlQUtlO0FBQ1g7QUFDSjtBQUNBO0FBQ0lBLEVBQUFBLFVBQVUsRUFBVkEsVUFKVzs7QUFLWDtBQUNKO0FBQ0E7QUFDSUMsRUFBQUEsR0FBRyxFQUFIQSxHQVJXOztBQVNYO0FBQ0o7QUFDQTtBQUNJQyxFQUFBQSxLQUFLLEVBQUxBO0FBWlcsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1kZWZhdWx0LWV4cG9ydCAqL1xyXG5pbXBvcnQgKiBhcyByZWdleENvbnN0IGZyb20gXCIuL3JlZ2V4XCJcclxuaW1wb3J0ICogYXMgbWFwIGZyb20gXCIuL21hcFwiXHJcbmltcG9ydCAqIGFzIGVudW1zIGZyb20gXCIuL2VudW1zXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8qKlxyXG4gICAgICog5q2j5YiZ5bi46YePXHJcbiAgICAgKi9cclxuICAgIHJlZ2V4Q29uc3QsXHJcbiAgICAvKipcclxuICAgICAqIGtleS92YWx1ZeW4uOmHj1xyXG4gICAgICovXHJcbiAgICBtYXAsXHJcbiAgICAvKipcclxuICAgICAqIOaemuS4vuW4uOmHj1xyXG4gICAgICovXHJcbiAgICBlbnVtc1xyXG59XHJcbiJdfQ==