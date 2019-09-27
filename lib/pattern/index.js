"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var strategy = _interopRequireWildcard(require("./strategy"));

var singleton = _interopRequireWildcard(require("./singleton"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXR0ZXJuL2luZGV4LnRzIl0sIm5hbWVzIjpbInN0cmF0ZWd5Iiwic2luZ2xldG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztlQUVlO0FBQ1g7OztBQUdBQSxFQUFBQSxRQUFRLEVBQVJBLFFBSlc7O0FBS1g7OztBQUdBQyxFQUFBQSxTQUFTLEVBQVRBO0FBUlcsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHN0cmF0ZWd5IGZyb20gXCIuL3N0cmF0ZWd5XCJcclxuaW1wb3J0ICogYXMgc2luZ2xldG9uIGZyb20gXCIuL3NpbmdsZXRvblwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAvKipcclxuICAgICAqIOetlueVpeaooeW8j1xyXG4gICAgICovXHJcbiAgICBzdHJhdGVneSxcclxuICAgIC8qKlxyXG4gICAgICog5Y2V5L6L5qih5byPXHJcbiAgICAgKi9cclxuICAgIHNpbmdsZXRvblxyXG59Il19