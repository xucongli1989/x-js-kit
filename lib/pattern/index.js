"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var strategy = _interopRequireWildcard(require("./strategy"));

var singleton = _interopRequireWildcard(require("./singleton"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXR0ZXJuL2luZGV4LnRzIl0sIm5hbWVzIjpbInN0cmF0ZWd5Iiwic2luZ2xldG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7ZUFFZTtBQUNYOzs7QUFHQUEsRUFBQUEsUUFBUSxFQUFSQSxRQUpXOztBQUtYOzs7QUFHQUMsRUFBQUEsU0FBUyxFQUFUQTtBQVJXLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzdHJhdGVneSBmcm9tIFwiLi9zdHJhdGVneVwiXHJcbmltcG9ydCAqIGFzIHNpbmdsZXRvbiBmcm9tIFwiLi9zaW5nbGV0b25cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDnrZbnlaXmqKHlvI9cclxuICAgICAqL1xyXG4gICAgc3RyYXRlZ3ksXHJcbiAgICAvKipcclxuICAgICAqIOWNleS+i+aooeW8j1xyXG4gICAgICovXHJcbiAgICBzaW5nbGV0b25cclxufSJdfQ==