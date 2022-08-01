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

var dom = _interopRequireWildcard(require("./dom"));

var color = _interopRequireWildcard(require("./color"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable import/no-default-export */
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
  regexp: regexp,

  /**
   * dom 操作
   */
  dom: dom,

  /**
   * 颜色相关
   */
  color: color
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vaW5kZXgudHMiXSwibmFtZXMiOlsic3RyaW5nIiwiYXJyYXkiLCJjb252ZXJ0IiwiY29va2llIiwianNvbiIsImRhdGEiLCJlbnVtVG9vbCIsImlkQ2FyZCIsImltYWdlIiwibGliIiwicmFuZG9tIiwidXJsIiwicmVnZXhwIiwiZG9tIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFmQTtlQWlCZTtBQUNYO0FBQ0o7QUFDQTtBQUNJQSxFQUFBQSxNQUFNLEVBQU5BLE1BSlc7O0FBS1g7QUFDSjtBQUNBO0FBQ0lDLEVBQUFBLEtBQUssRUFBTEEsS0FSVzs7QUFTWDtBQUNKO0FBQ0E7QUFDSUMsRUFBQUEsT0FBTyxFQUFQQSxPQVpXOztBQWFYO0FBQ0o7QUFDQTtBQUNJQyxFQUFBQSxNQUFNLEVBQU5BLE1BaEJXOztBQWlCWDtBQUNKO0FBQ0E7QUFDSUMsRUFBQUEsSUFBSSxFQUFKQSxJQXBCVzs7QUFxQlg7QUFDSjtBQUNBO0FBQ0lDLEVBQUFBLElBQUksRUFBSkEsSUF4Qlc7O0FBeUJYO0FBQ0o7QUFDQTtBQUNJQyxFQUFBQSxRQUFRLEVBQVJBLFFBNUJXOztBQTZCWDtBQUNKO0FBQ0E7QUFDSUMsRUFBQUEsTUFBTSxFQUFOQSxNQWhDVzs7QUFpQ1g7QUFDSjtBQUNBO0FBQ0lDLEVBQUFBLEtBQUssRUFBTEEsS0FwQ1c7O0FBcUNYO0FBQ0o7QUFDQTtBQUNJQyxFQUFBQSxHQUFHLEVBQUhBLEdBeENXOztBQXlDWDtBQUNKO0FBQ0E7QUFDSUMsRUFBQUEsTUFBTSxFQUFOQSxNQTVDVzs7QUE2Q1g7QUFDSjtBQUNBO0FBQ0lDLEVBQUFBLEdBQUcsRUFBSEEsR0FoRFc7O0FBaURYO0FBQ0o7QUFDQTtBQUNJQyxFQUFBQSxNQUFNLEVBQU5BLE1BcERXOztBQXFEWDtBQUNKO0FBQ0E7QUFDSUMsRUFBQUEsR0FBRyxFQUFIQSxHQXhEVzs7QUF5RFg7QUFDSjtBQUNBO0FBQ0lDLEVBQUFBLEtBQUssRUFBTEE7QUE1RFcsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1kZWZhdWx0LWV4cG9ydCAqL1xyXG5pbXBvcnQgKiBhcyBzdHJpbmcgZnJvbSBcIi4vc3RyaW5nXCJcclxuaW1wb3J0ICogYXMgYXJyYXkgZnJvbSBcIi4vYXJyYXlcIlxyXG5pbXBvcnQgKiBhcyBjb252ZXJ0IGZyb20gXCIuL2NvbnZlcnRcIlxyXG5pbXBvcnQgKiBhcyBjb29raWUgZnJvbSBcIi4vY29va2llXCJcclxuaW1wb3J0ICogYXMganNvbiBmcm9tIFwiLi9qc29uXCJcclxuaW1wb3J0ICogYXMgZGF0YSBmcm9tIFwiLi9kYXRhXCJcclxuaW1wb3J0ICogYXMgZW51bVRvb2wgZnJvbSBcIi4vZW51bVRvb2xcIlxyXG5pbXBvcnQgKiBhcyBpZENhcmQgZnJvbSBcIi4vaWRDYXJkXCJcclxuaW1wb3J0ICogYXMgaW1hZ2UgZnJvbSBcIi4vaW1hZ2VcIlxyXG5pbXBvcnQgKiBhcyBsaWIgZnJvbSBcIi4vbGliXCJcclxuaW1wb3J0ICogYXMgcmFuZG9tIGZyb20gXCIuL3JhbmRvbVwiXHJcbmltcG9ydCAqIGFzIHVybCBmcm9tIFwiLi91cmxcIlxyXG5pbXBvcnQgKiBhcyByZWdleHAgZnJvbSBcIi4vcmVnZXhwXCJcclxuaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL2RvbVwiXHJcbmltcG9ydCAqIGFzIGNvbG9yIGZyb20gXCIuL2NvbG9yXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8qKlxyXG4gICAgICog5a2X56ym5Liy5pON5L2cXHJcbiAgICAgKi9cclxuICAgIHN0cmluZyxcclxuICAgIC8qKlxyXG4gICAgICog5pWw57uE5pON5L2cXHJcbiAgICAgKi9cclxuICAgIGFycmF5LFxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDmja7nsbvlnovovazmjaLmk43kvZxcclxuICAgICAqL1xyXG4gICAgY29udmVydCxcclxuICAgIC8qKlxyXG4gICAgICogY29va2ll5pON5L2c55u45YWzXHJcbiAgICAgKi9cclxuICAgIGNvb2tpZSxcclxuICAgIC8qKlxyXG4gICAgICoganNvbuaTjeS9nFxyXG4gICAgICovXHJcbiAgICBqc29uLFxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDmja7nsbvlnovliKTmlq1cclxuICAgICAqL1xyXG4gICAgZGF0YSxcclxuICAgIC8qKlxyXG4gICAgICog5p6a5Li+5bel5YW357G7XHJcbiAgICAgKi9cclxuICAgIGVudW1Ub29sLFxyXG4gICAgLyoqXHJcbiAgICAgKiDor4Hku7bnm7jlhbNcclxuICAgICAqL1xyXG4gICAgaWRDYXJkLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlm77niYfmk43kvZznm7jlhbNcclxuICAgICAqL1xyXG4gICAgaW1hZ2UsXHJcbiAgICAvKipcclxuICAgICAqIOWFtuWug+W4uOeUqOaWueazlVxyXG4gICAgICovXHJcbiAgICBsaWIsXHJcbiAgICAvKipcclxuICAgICAqIOmaj+acuuWtl+espuS4suebuOWFs1xyXG4gICAgICovXHJcbiAgICByYW5kb20sXHJcbiAgICAvKipcclxuICAgICAqIHVybOaTjeS9nFxyXG4gICAgICovXHJcbiAgICB1cmwsXHJcbiAgICAvKipcclxuICAgICAqIOato+WImeaTjeS9nFxyXG4gICAgICovXHJcbiAgICByZWdleHAsXHJcbiAgICAvKipcclxuICAgICAqIGRvbSDmk43kvZxcclxuICAgICAqL1xyXG4gICAgZG9tLFxyXG4gICAgLyoqXHJcbiAgICAgKiDpopzoibLnm7jlhbNcclxuICAgICAqL1xyXG4gICAgY29sb3JcclxufVxyXG4iXX0=