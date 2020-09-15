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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vaW5kZXgudHMiXSwibmFtZXMiOlsic3RyaW5nIiwiYXJyYXkiLCJjb252ZXJ0IiwiY29va2llIiwianNvbiIsImRhdGEiLCJlbnVtVG9vbCIsImlkQ2FyZCIsImltYWdlIiwibGliIiwicmFuZG9tIiwidXJsIiwicmVnZXhwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O2VBRWU7QUFDWDs7O0FBR0FBLEVBQUFBLE1BQU0sRUFBTkEsTUFKVzs7QUFLWDs7O0FBR0FDLEVBQUFBLEtBQUssRUFBTEEsS0FSVzs7QUFTWDs7O0FBR0FDLEVBQUFBLE9BQU8sRUFBUEEsT0FaVzs7QUFhWDs7O0FBR0FDLEVBQUFBLE1BQU0sRUFBTkEsTUFoQlc7O0FBaUJYOzs7QUFHQUMsRUFBQUEsSUFBSSxFQUFKQSxJQXBCVzs7QUFxQlg7OztBQUdBQyxFQUFBQSxJQUFJLEVBQUpBLElBeEJXOztBQXlCWDs7O0FBR0FDLEVBQUFBLFFBQVEsRUFBUkEsUUE1Qlc7O0FBNkJYOzs7QUFHQUMsRUFBQUEsTUFBTSxFQUFOQSxNQWhDVzs7QUFpQ1g7OztBQUdBQyxFQUFBQSxLQUFLLEVBQUxBLEtBcENXOztBQXFDWDs7O0FBR0FDLEVBQUFBLEdBQUcsRUFBSEEsR0F4Q1c7O0FBeUNYOzs7QUFHQUMsRUFBQUEsTUFBTSxFQUFOQSxNQTVDVzs7QUE2Q1g7OztBQUdBQyxFQUFBQSxHQUFHLEVBQUhBLEdBaERXOztBQWlEWDs7O0FBR0FDLEVBQUFBLE1BQU0sRUFBTkE7QUFwRFcsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHN0cmluZyBmcm9tIFwiLi9zdHJpbmdcIlxyXG5pbXBvcnQgKiBhcyBhcnJheSBmcm9tIFwiLi9hcnJheVwiXHJcbmltcG9ydCAqIGFzIGNvbnZlcnQgZnJvbSBcIi4vY29udmVydFwiXHJcbmltcG9ydCAqIGFzIGNvb2tpZSBmcm9tIFwiLi9jb29raWVcIlxyXG5pbXBvcnQgKiBhcyBqc29uIGZyb20gXCIuL2pzb25cIlxyXG5pbXBvcnQgKiBhcyBkYXRhIGZyb20gXCIuL2RhdGFcIlxyXG5pbXBvcnQgKiBhcyBlbnVtVG9vbCBmcm9tIFwiLi9lbnVtVG9vbFwiXHJcbmltcG9ydCAqIGFzIGlkQ2FyZCBmcm9tIFwiLi9pZENhcmRcIlxyXG5pbXBvcnQgKiBhcyBpbWFnZSBmcm9tIFwiLi9pbWFnZVwiXHJcbmltcG9ydCAqIGFzIGxpYiBmcm9tIFwiLi9saWJcIlxyXG5pbXBvcnQgKiBhcyByYW5kb20gZnJvbSBcIi4vcmFuZG9tXCJcclxuaW1wb3J0ICogYXMgdXJsIGZyb20gXCIuL3VybFwiXHJcbmltcG9ydCAqIGFzIHJlZ2V4cCBmcm9tIFwiLi9yZWdleHBcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlrZfnrKbkuLLmk43kvZxcclxuICAgICAqL1xyXG4gICAgc3RyaW5nLFxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDnu4Tmk43kvZxcclxuICAgICAqL1xyXG4gICAgYXJyYXksXHJcbiAgICAvKipcclxuICAgICAqIOaVsOaNruexu+Wei+i9rOaNouaTjeS9nFxyXG4gICAgICovXHJcbiAgICBjb252ZXJ0LFxyXG4gICAgLyoqXHJcbiAgICAgKiBjb29raWXmk43kvZznm7jlhbNcclxuICAgICAqL1xyXG4gICAgY29va2llLFxyXG4gICAgLyoqXHJcbiAgICAgKiBqc29u5pON5L2cXHJcbiAgICAgKi9cclxuICAgIGpzb24sXHJcbiAgICAvKipcclxuICAgICAqIOaVsOaNruexu+Wei+WIpOaWrVxyXG4gICAgICovXHJcbiAgICBkYXRhLFxyXG4gICAgLyoqXHJcbiAgICAgKiDmnprkuL7lt6XlhbfnsbtcclxuICAgICAqL1xyXG4gICAgZW51bVRvb2wsXHJcbiAgICAvKipcclxuICAgICAqIOivgeS7tuebuOWFs1xyXG4gICAgICovXHJcbiAgICBpZENhcmQsXHJcbiAgICAvKipcclxuICAgICAqIOWbvueJh+aTjeS9nOebuOWFs1xyXG4gICAgICovXHJcbiAgICBpbWFnZSxcclxuICAgIC8qKlxyXG4gICAgICog5YW25a6D5bi455So5pa55rOVXHJcbiAgICAgKi9cclxuICAgIGxpYixcclxuICAgIC8qKlxyXG4gICAgICog6ZqP5py65a2X56ym5Liy55u45YWzXHJcbiAgICAgKi9cclxuICAgIHJhbmRvbSxcclxuICAgIC8qKlxyXG4gICAgICogdXJs5pON5L2cXHJcbiAgICAgKi9cclxuICAgIHVybCxcclxuICAgIC8qKlxyXG4gICAgICog5q2j5YiZ5pON5L2cXHJcbiAgICAgKi9cclxuICAgIHJlZ2V4cFxyXG59Il19