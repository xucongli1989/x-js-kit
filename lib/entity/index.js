"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var idCard = _interopRequireWildcard(require("./idCard"));

var keyValue = _interopRequireWildcard(require("./keyValue"));

var select = _interopRequireWildcard(require("./select"));

var serialize = _interopRequireWildcard(require("./serialize"));

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
  select: select,

  /**
   * 序列化相关
   */
  serialize: serialize
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvaW5kZXgudHMiXSwibmFtZXMiOlsiaWRDYXJkIiwia2V5VmFsdWUiLCJzZWxlY3QiLCJzZXJpYWxpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztlQUVlO0FBQ1g7OztBQUdBQSxFQUFBQSxNQUFNLEVBQU5BLE1BSlc7O0FBS1g7OztBQUdBQyxFQUFBQSxRQUFRLEVBQVJBLFFBUlc7O0FBU1g7OztBQUdBQyxFQUFBQSxNQUFNLEVBQU5BLE1BWlc7O0FBYVg7OztBQUdBQyxFQUFBQSxTQUFTLEVBQVRBO0FBaEJXLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBpZENhcmQgZnJvbSBcIi4vaWRDYXJkXCJcclxuaW1wb3J0ICogYXMga2V5VmFsdWUgZnJvbSBcIi4va2V5VmFsdWVcIlxyXG5pbXBvcnQgKiBhcyBzZWxlY3QgZnJvbSBcIi4vc2VsZWN0XCJcclxuaW1wb3J0ICogYXMgc2VyaWFsaXplIGZyb20gXCIuL3NlcmlhbGl6ZVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAvKipcclxuICAgICAqIOivgeS7tuWunuS9k1xyXG4gICAgICovXHJcbiAgICBpZENhcmQsXHJcbiAgICAvKipcclxuICAgICAqIGtleS92YWx1ZeWunuS9k1xyXG4gICAgICovXHJcbiAgICBrZXlWYWx1ZSxcclxuICAgIC8qKlxyXG4gICAgICog5LiL5ouJ5qGG55u45YWz5a6e5L2TXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdCxcclxuICAgIC8qKlxyXG4gICAgICog5bqP5YiX5YyW55u45YWzXHJcbiAgICAgKi9cclxuICAgIHNlcmlhbGl6ZVxyXG59Il19