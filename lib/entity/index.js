"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var idCard = _interopRequireWildcard(require("./idCard"));

var keyValue = _interopRequireWildcard(require("./keyValue"));

var select = _interopRequireWildcard(require("./select"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
  select: select
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvaW5kZXgudHMiXSwibmFtZXMiOlsiaWRDYXJkIiwia2V5VmFsdWUiLCJzZWxlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztlQUdlO0FBQ1g7OztBQUdBQSxFQUFBQSxNQUFNLEVBQU5BLE1BSlc7O0FBS1g7OztBQUdBQyxFQUFBQSxRQUFRLEVBQVJBLFFBUlc7O0FBU1g7OztBQUdBQyxFQUFBQSxNQUFNLEVBQU5BO0FBWlcsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGlkQ2FyZCBmcm9tIFwiLi9pZENhcmRcIlxyXG5pbXBvcnQgKiBhcyBrZXlWYWx1ZSBmcm9tIFwiLi9rZXlWYWx1ZVwiXHJcbmltcG9ydCAqIGFzIHNlbGVjdCBmcm9tIFwiLi9zZWxlY3RcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8qKlxyXG4gICAgICog6K+B5Lu25a6e5L2TXHJcbiAgICAgKi9cclxuICAgIGlkQ2FyZCxcclxuICAgIC8qKlxyXG4gICAgICoga2V5L3ZhbHVl5a6e5L2TXHJcbiAgICAgKi9cclxuICAgIGtleVZhbHVlLFxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIvmi4nmoYbnm7jlhbPlrp7kvZNcclxuICAgICAqL1xyXG4gICAgc2VsZWN0XHJcbn0iXX0=