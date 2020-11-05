"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var string = _interopRequireWildcard(require("./string"));

var array = _interopRequireWildcard(require("./array"));

var convert = _interopRequireWildcard(require("./convert"));

var cookie = _interopRequireWildcard(require("./cookie"));

var json = _interopRequireWildcard(require("./json"));

var data = _interopRequireWildcard(require("./data"));

var enumTool = _interopRequireWildcard(require("./enumTool"));

var idCard = _interopRequireWildcard(require("./idCard"));

var image = _interopRequireWildcard(require("./image"));

var lib = _interopRequireWildcard(require("./lib"));

var random = _interopRequireWildcard(require("./random"));

var url = _interopRequireWildcard(require("./url"));

var regexp = _interopRequireWildcard(require("./regexp"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  /**
   * 字符串操作
   */
  string: string,

  /**
   * 数组操作
   */
  array: array,

  /**
   * 数据类型转换操作
   */
  convert: convert,

  /**
   * cookie操作相关
   */
  cookie: cookie,

  /**
   * json操作
   */
  json: json,

  /**
   * 数据类型判断
   */
  data: data,

  /**
   * 枚举工具类
   */
  enumTool: enumTool,

  /**
   * 证件相关
   */
  idCard: idCard,

  /**
   * 图片操作相关
   */
  image: image,

  /**
   * 其它常用方法
   */
  lib: lib,

  /**
   * 随机字符串相关
   */
  random: random,

  /**
   * url操作
   */
  url: url,

  /**
   * 正则操作
   */
  regexp: regexp
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vaW5kZXgudHMiXSwibmFtZXMiOlsic3RyaW5nIiwiYXJyYXkiLCJjb252ZXJ0IiwiY29va2llIiwianNvbiIsImRhdGEiLCJlbnVtVG9vbCIsImlkQ2FyZCIsImltYWdlIiwibGliIiwicmFuZG9tIiwidXJsIiwicmVnZXhwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O2VBRWU7QUFDWDtBQUNKO0FBQ0E7QUFDSUEsRUFBQUEsTUFBTSxFQUFOQSxNQUpXOztBQUtYO0FBQ0o7QUFDQTtBQUNJQyxFQUFBQSxLQUFLLEVBQUxBLEtBUlc7O0FBU1g7QUFDSjtBQUNBO0FBQ0lDLEVBQUFBLE9BQU8sRUFBUEEsT0FaVzs7QUFhWDtBQUNKO0FBQ0E7QUFDSUMsRUFBQUEsTUFBTSxFQUFOQSxNQWhCVzs7QUFpQlg7QUFDSjtBQUNBO0FBQ0lDLEVBQUFBLElBQUksRUFBSkEsSUFwQlc7O0FBcUJYO0FBQ0o7QUFDQTtBQUNJQyxFQUFBQSxJQUFJLEVBQUpBLElBeEJXOztBQXlCWDtBQUNKO0FBQ0E7QUFDSUMsRUFBQUEsUUFBUSxFQUFSQSxRQTVCVzs7QUE2Qlg7QUFDSjtBQUNBO0FBQ0lDLEVBQUFBLE1BQU0sRUFBTkEsTUFoQ1c7O0FBaUNYO0FBQ0o7QUFDQTtBQUNJQyxFQUFBQSxLQUFLLEVBQUxBLEtBcENXOztBQXFDWDtBQUNKO0FBQ0E7QUFDSUMsRUFBQUEsR0FBRyxFQUFIQSxHQXhDVzs7QUF5Q1g7QUFDSjtBQUNBO0FBQ0lDLEVBQUFBLE1BQU0sRUFBTkEsTUE1Q1c7O0FBNkNYO0FBQ0o7QUFDQTtBQUNJQyxFQUFBQSxHQUFHLEVBQUhBLEdBaERXOztBQWlEWDtBQUNKO0FBQ0E7QUFDSUMsRUFBQUEsTUFBTSxFQUFOQTtBQXBEVyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc3RyaW5nIGZyb20gXCIuL3N0cmluZ1wiXHJcbmltcG9ydCAqIGFzIGFycmF5IGZyb20gXCIuL2FycmF5XCJcclxuaW1wb3J0ICogYXMgY29udmVydCBmcm9tIFwiLi9jb252ZXJ0XCJcclxuaW1wb3J0ICogYXMgY29va2llIGZyb20gXCIuL2Nvb2tpZVwiXHJcbmltcG9ydCAqIGFzIGpzb24gZnJvbSBcIi4vanNvblwiXHJcbmltcG9ydCAqIGFzIGRhdGEgZnJvbSBcIi4vZGF0YVwiXHJcbmltcG9ydCAqIGFzIGVudW1Ub29sIGZyb20gXCIuL2VudW1Ub29sXCJcclxuaW1wb3J0ICogYXMgaWRDYXJkIGZyb20gXCIuL2lkQ2FyZFwiXHJcbmltcG9ydCAqIGFzIGltYWdlIGZyb20gXCIuL2ltYWdlXCJcclxuaW1wb3J0ICogYXMgbGliIGZyb20gXCIuL2xpYlwiXHJcbmltcG9ydCAqIGFzIHJhbmRvbSBmcm9tIFwiLi9yYW5kb21cIlxyXG5pbXBvcnQgKiBhcyB1cmwgZnJvbSBcIi4vdXJsXCJcclxuaW1wb3J0ICogYXMgcmVnZXhwIGZyb20gXCIuL3JlZ2V4cFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAvKipcclxuICAgICAqIOWtl+espuS4suaTjeS9nFxyXG4gICAgICovXHJcbiAgICBzdHJpbmcsXHJcbiAgICAvKipcclxuICAgICAqIOaVsOe7hOaTjeS9nFxyXG4gICAgICovXHJcbiAgICBhcnJheSxcclxuICAgIC8qKlxyXG4gICAgICog5pWw5o2u57G75Z6L6L2s5o2i5pON5L2cXHJcbiAgICAgKi9cclxuICAgIGNvbnZlcnQsXHJcbiAgICAvKipcclxuICAgICAqIGNvb2tpZeaTjeS9nOebuOWFs1xyXG4gICAgICovXHJcbiAgICBjb29raWUsXHJcbiAgICAvKipcclxuICAgICAqIGpzb27mk43kvZxcclxuICAgICAqL1xyXG4gICAganNvbixcclxuICAgIC8qKlxyXG4gICAgICog5pWw5o2u57G75Z6L5Yik5patXHJcbiAgICAgKi9cclxuICAgIGRhdGEsXHJcbiAgICAvKipcclxuICAgICAqIOaemuS4vuW3peWFt+exu1xyXG4gICAgICovXHJcbiAgICBlbnVtVG9vbCxcclxuICAgIC8qKlxyXG4gICAgICog6K+B5Lu255u45YWzXHJcbiAgICAgKi9cclxuICAgIGlkQ2FyZCxcclxuICAgIC8qKlxyXG4gICAgICog5Zu+54mH5pON5L2c55u45YWzXHJcbiAgICAgKi9cclxuICAgIGltYWdlLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlhbblroPluLjnlKjmlrnms5VcclxuICAgICAqL1xyXG4gICAgbGliLFxyXG4gICAgLyoqXHJcbiAgICAgKiDpmo/mnLrlrZfnrKbkuLLnm7jlhbNcclxuICAgICAqL1xyXG4gICAgcmFuZG9tLFxyXG4gICAgLyoqXHJcbiAgICAgKiB1cmzmk43kvZxcclxuICAgICAqL1xyXG4gICAgdXJsLFxyXG4gICAgLyoqXHJcbiAgICAgKiDmraPliJnmk43kvZxcclxuICAgICAqL1xyXG4gICAgcmVnZXhwXHJcbn0iXX0=