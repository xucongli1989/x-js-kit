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

var idCard = _interopRequireWildcard(require("./idCard"));

var image = _interopRequireWildcard(require("./image"));

var lib = _interopRequireWildcard(require("./lib"));

var random = _interopRequireWildcard(require("./random"));

var url = _interopRequireWildcard(require("./url"));

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
  url: url
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vaW5kZXgudHMiXSwibmFtZXMiOlsic3RyaW5nIiwiYXJyYXkiLCJjb252ZXJ0IiwiY29va2llIiwianNvbiIsImRhdGEiLCJpZENhcmQiLCJpbWFnZSIsImxpYiIsInJhbmRvbSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztlQUVlO0FBQ1g7OztBQUdBQSxFQUFBQSxNQUFNLEVBQU5BLE1BSlc7O0FBS1g7OztBQUdBQyxFQUFBQSxLQUFLLEVBQUxBLEtBUlc7O0FBU1g7OztBQUdBQyxFQUFBQSxPQUFPLEVBQVBBLE9BWlc7O0FBYVg7OztBQUdBQyxFQUFBQSxNQUFNLEVBQU5BLE1BaEJXOztBQWlCWDs7O0FBR0FDLEVBQUFBLElBQUksRUFBSkEsSUFwQlc7O0FBcUJYOzs7QUFHQUMsRUFBQUEsSUFBSSxFQUFKQSxJQXhCVzs7QUF5Qlg7OztBQUdBQyxFQUFBQSxNQUFNLEVBQU5BLE1BNUJXOztBQTZCWDs7O0FBR0FDLEVBQUFBLEtBQUssRUFBTEEsS0FoQ1c7O0FBaUNYOzs7QUFHQUMsRUFBQUEsR0FBRyxFQUFIQSxHQXBDVzs7QUFxQ1g7OztBQUdBQyxFQUFBQSxNQUFNLEVBQU5BLE1BeENXOztBQXlDWDs7O0FBR0FDLEVBQUFBLEdBQUcsRUFBSEE7QUE1Q1csQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHN0cmluZyBmcm9tIFwiLi9zdHJpbmdcIlxyXG5pbXBvcnQgKiBhcyBhcnJheSBmcm9tIFwiLi9hcnJheVwiXHJcbmltcG9ydCAqIGFzIGNvbnZlcnQgZnJvbSBcIi4vY29udmVydFwiXHJcbmltcG9ydCAqIGFzIGNvb2tpZSBmcm9tIFwiLi9jb29raWVcIlxyXG5pbXBvcnQgKiBhcyBqc29uIGZyb20gXCIuL2pzb25cIlxyXG5pbXBvcnQgKiBhcyBkYXRhIGZyb20gXCIuL2RhdGFcIlxyXG5pbXBvcnQgKiBhcyBpZENhcmQgZnJvbSBcIi4vaWRDYXJkXCJcclxuaW1wb3J0ICogYXMgaW1hZ2UgZnJvbSBcIi4vaW1hZ2VcIlxyXG5pbXBvcnQgKiBhcyBsaWIgZnJvbSBcIi4vbGliXCJcclxuaW1wb3J0ICogYXMgcmFuZG9tIGZyb20gXCIuL3JhbmRvbVwiXHJcbmltcG9ydCAqIGFzIHVybCBmcm9tIFwiLi91cmxcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlrZfnrKbkuLLmk43kvZxcclxuICAgICAqL1xyXG4gICAgc3RyaW5nLFxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDnu4Tmk43kvZxcclxuICAgICAqL1xyXG4gICAgYXJyYXksXHJcbiAgICAvKipcclxuICAgICAqIOaVsOaNruexu+Wei+i9rOaNouaTjeS9nFxyXG4gICAgICovXHJcbiAgICBjb252ZXJ0LFxyXG4gICAgLyoqXHJcbiAgICAgKiBjb29raWXmk43kvZznm7jlhbNcclxuICAgICAqL1xyXG4gICAgY29va2llLFxyXG4gICAgLyoqXHJcbiAgICAgKiBqc29u5pON5L2cXHJcbiAgICAgKi9cclxuICAgIGpzb24sXHJcbiAgICAvKipcclxuICAgICAqIOaVsOaNruexu+Wei+WIpOaWrVxyXG4gICAgICovXHJcbiAgICBkYXRhLFxyXG4gICAgLyoqXHJcbiAgICAgKiDor4Hku7bnm7jlhbNcclxuICAgICAqL1xyXG4gICAgaWRDYXJkLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlm77niYfmk43kvZznm7jlhbNcclxuICAgICAqL1xyXG4gICAgaW1hZ2UsXHJcbiAgICAvKipcclxuICAgICAqIOWFtuWug+W4uOeUqOaWueazlVxyXG4gICAgICovXHJcbiAgICBsaWIsXHJcbiAgICAvKipcclxuICAgICAqIOmaj+acuuWtl+espuS4suebuOWFs1xyXG4gICAgICovXHJcbiAgICByYW5kb20sXHJcbiAgICAvKipcclxuICAgICAqIHVybOaTjeS9nFxyXG4gICAgICovXHJcbiAgICB1cmxcclxufSJdfQ==