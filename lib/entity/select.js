"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectItem = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 下拉框实体
 */
var SelectItem = function SelectItem(text, value) {
  var isSelected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var extend = arguments.length > 3 ? arguments[3] : undefined;

  _classCallCheck(this, SelectItem);

  _defineProperty(this, "text", "");

  _defineProperty(this, "isSelected", false);

  _defineProperty(this, "value", void 0);

  _defineProperty(this, "extend", void 0);

  this.text = text;
  this.value = value;
  this.isSelected = isSelected;
  this.extend = extend;
}
/**
 * 文本名
 */
;

exports.SelectItem = SelectItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvc2VsZWN0LnRzIl0sIm5hbWVzIjpbIlNlbGVjdEl0ZW0iLCJ0ZXh0IiwidmFsdWUiLCJpc1NlbGVjdGVkIiwiZXh0ZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtJQUNhQSxVLEdBQ1Qsb0JBQVlDLElBQVosRUFBMEJDLEtBQTFCLEVBQThGO0FBQUEsTUFBbERDLFVBQWtELHVFQUE1QixLQUE0QjtBQUFBLE1BQXJCQyxNQUFxQjs7QUFBQTs7QUFBQSxnQ0FTL0UsRUFUK0U7O0FBQUEsc0NBYWpGLEtBYmlGOztBQUFBOztBQUFBOztBQUMxRixPQUFLSCxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLE9BQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNIO0FBQ0Q7QUFDSjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOS4i+aLieahhuWunuS9k1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNlbGVjdEl0ZW08VmFsdWVUeXBlLCBFeHRlbmRUeXBlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcsIHZhbHVlOiBWYWx1ZVR5cGUsIGlzU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZSwgZXh0ZW5kPzogRXh0ZW5kVHlwZSkge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHRcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVcclxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBpc1NlbGVjdGVkXHJcbiAgICAgICAgdGhpcy5leHRlbmQgPSBleHRlbmRcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5paH5pys5ZCNXHJcbiAgICAgKi9cclxuICAgIHRleHQ6IHN0cmluZyA9IFwiXCJcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5bey6YCJ5LitXHJcbiAgICAgKi9cclxuICAgIGlzU2VsZWN0ZWQgPSBmYWxzZVxyXG4gICAgLyoqXHJcbiAgICAgKiB2YWx1ZeWAvFxyXG4gICAgICovXHJcbiAgICB2YWx1ZTogVmFsdWVUeXBlXHJcbiAgICAvKipcclxuICAgICAqIOaJqeWxleWxnuaAp1xyXG4gICAgICovXHJcbiAgICBleHRlbmQ/OiBFeHRlbmRUeXBlXHJcbn0iXX0=