"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var common = _interopRequireWildcard(require("./common"));

var recorder = _interopRequireWildcard(require("./recorder"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable import/no-default-export */
var _default = {
  /**
   * 公共相关配置
   */
  common: common,

  /**
   * 记录器相关配置
   */
  recorder: recorder
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvaW5kZXgudHMiXSwibmFtZXMiOlsiY29tbW9uIiwicmVjb3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUNBOzs7Ozs7QUFGQTtlQUllO0FBQ1g7QUFDSjtBQUNBO0FBQ0lBLEVBQUFBLE1BQU0sRUFBTkEsTUFKVzs7QUFLWDtBQUNKO0FBQ0E7QUFDSUMsRUFBQUEsUUFBUSxFQUFSQTtBQVJXLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZGVmYXVsdC1leHBvcnQgKi9cclxuaW1wb3J0ICogYXMgY29tbW9uIGZyb20gXCIuL2NvbW1vblwiXHJcbmltcG9ydCAqIGFzIHJlY29yZGVyIGZyb20gXCIuL3JlY29yZGVyXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8qKlxyXG4gICAgICog5YWs5YWx55u45YWz6YWN572uXHJcbiAgICAgKi9cclxuICAgIGNvbW1vbixcclxuICAgIC8qKlxyXG4gICAgICog6K6w5b2V5Zmo55u45YWz6YWN572uXHJcbiAgICAgKi9cclxuICAgIHJlY29yZGVyXHJcbn1cclxuIl19