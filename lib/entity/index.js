"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var idCard = _interopRequireWildcard(require("./idCard"));

var keyValue = _interopRequireWildcard(require("./keyValue"));

var select = _interopRequireWildcard(require("./select"));

var serialize = _interopRequireWildcard(require("./serialize"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  /**
   * 证件实体
   */
  idCard: idCard,

  /**
   * key/value实体
   */
  keyValue: keyValue,

  /**
   * 下拉框相关实体
   */
  select: select,

  /**
   * 序列化相关
   */
  serialize: serialize
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvaW5kZXgudHMiXSwibmFtZXMiOlsiaWRDYXJkIiwia2V5VmFsdWUiLCJzZWxlY3QiLCJzZXJpYWxpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O2VBRWU7QUFDWDs7O0FBR0FBLEVBQUFBLE1BQU0sRUFBTkEsTUFKVzs7QUFLWDs7O0FBR0FDLEVBQUFBLFFBQVEsRUFBUkEsUUFSVzs7QUFTWDs7O0FBR0FDLEVBQUFBLE1BQU0sRUFBTkEsTUFaVzs7QUFhWDs7O0FBR0FDLEVBQUFBLFNBQVMsRUFBVEE7QUFoQlcsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGlkQ2FyZCBmcm9tIFwiLi9pZENhcmRcIlxyXG5pbXBvcnQgKiBhcyBrZXlWYWx1ZSBmcm9tIFwiLi9rZXlWYWx1ZVwiXHJcbmltcG9ydCAqIGFzIHNlbGVjdCBmcm9tIFwiLi9zZWxlY3RcIlxyXG5pbXBvcnQgKiBhcyBzZXJpYWxpemUgZnJvbSBcIi4vc2VyaWFsaXplXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8qKlxyXG4gICAgICog6K+B5Lu25a6e5L2TXHJcbiAgICAgKi9cclxuICAgIGlkQ2FyZCxcclxuICAgIC8qKlxyXG4gICAgICoga2V5L3ZhbHVl5a6e5L2TXHJcbiAgICAgKi9cclxuICAgIGtleVZhbHVlLFxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIvmi4nmoYbnm7jlhbPlrp7kvZNcclxuICAgICAqL1xyXG4gICAgc2VsZWN0LFxyXG4gICAgLyoqXHJcbiAgICAgKiDluo/liJfljJbnm7jlhbNcclxuICAgICAqL1xyXG4gICAgc2VyaWFsaXplXHJcbn0iXX0=