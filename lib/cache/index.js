"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var localStorage = _interopRequireWildcard(require("./localStorage"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  /**
   * 带过期时间的缓存（就是浏览器中的localStorage，只是在value的结构中设置了指定的节点来表明什么时候过期，如果过期，则不返回该数据）
   */
  localStorage: localStorage
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWNoZS9pbmRleC50cyJdLCJuYW1lcyI6WyJsb2NhbFN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O2VBQ2U7QUFDWDs7O0FBR0FBLEVBQUFBLFlBQVksRUFBWkE7QUFKVyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgIGxvY2FsU3RvcmFnZSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAvKipcclxuICAgICAqIOW4pui/h+acn+aXtumXtOeahOe8k+WtmO+8iOWwseaYr+a1j+iniOWZqOS4reeahGxvY2FsU3RvcmFnZe+8jOWPquaYr+WcqHZhbHVl55qE57uT5p6E5Lit6K6+572u5LqG5oyH5a6a55qE6IqC54K55p2l6KGo5piO5LuA5LmI5pe25YCZ6L+H5pyf77yM5aaC5p6c6L+H5pyf77yM5YiZ5LiN6L+U5Zue6K+l5pWw5o2u77yJXHJcbiAgICAgKi9cclxuICAgIGxvY2FsU3RvcmFnZVxyXG59Il19