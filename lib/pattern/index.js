"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var strategy = _interopRequireWildcard(require("./strategy"));

var singleton = _interopRequireWildcard(require("./singleton"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  /**
   * 策略模式
   */
  strategy: strategy,

  /**
   * 单例模式
   */
  singleton: singleton
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXR0ZXJuL2luZGV4LnRzIl0sIm5hbWVzIjpbInN0cmF0ZWd5Iiwic2luZ2xldG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O2VBRWU7QUFDWDs7O0FBR0FBLEVBQUFBLFFBQVEsRUFBUkEsUUFKVzs7QUFLWDs7O0FBR0FDLEVBQUFBLFNBQVMsRUFBVEE7QUFSVyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc3RyYXRlZ3kgZnJvbSBcIi4vc3RyYXRlZ3lcIlxyXG5pbXBvcnQgKiBhcyBzaW5nbGV0b24gZnJvbSBcIi4vc2luZ2xldG9uXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8qKlxyXG4gICAgICog562W55Wl5qih5byPXHJcbiAgICAgKi9cclxuICAgIHN0cmF0ZWd5LFxyXG4gICAgLyoqXHJcbiAgICAgKiDljZXkvovmqKHlvI9cclxuICAgICAqL1xyXG4gICAgc2luZ2xldG9uXHJcbn0iXX0=