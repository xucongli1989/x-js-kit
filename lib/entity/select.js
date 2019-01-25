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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvc2VsZWN0LnRzIl0sIm5hbWVzIjpbIlNlbGVjdEl0ZW0iLCJ0ZXh0IiwidmFsdWUiLCJpc1NlbGVjdGVkIiwiZXh0ZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7SUFHYUEsVSxHQUNULG9CQUFZQyxJQUFaLEVBQTBCQyxLQUExQixFQUFpRjtBQUFBLE1BQTNDQyxVQUEyQyx1RUFBckIsS0FBcUI7QUFBQSxNQUFkQyxNQUFjOztBQUFBOztBQUFBLGdDQVNsRSxFQVRrRTs7QUFBQSxzQ0FhcEUsS0Fib0U7O0FBQUE7O0FBQUE7O0FBQzdFLE9BQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsT0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDkuIvmi4nmoYblrp7kvZNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZywgdmFsdWU6IGFueSwgaXNTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlLCBleHRlbmQ/OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gaXNTZWxlY3RlZFxyXG4gICAgICAgIHRoaXMuZXh0ZW5kID0gZXh0ZW5kXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaWh+acrOWQjVxyXG4gICAgICovXHJcbiAgICB0ZXh0OiBzdHJpbmcgPSBcIlwiXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuW3sumAieS4rVxyXG4gICAgICovXHJcbiAgICBpc1NlbGVjdGVkID0gZmFsc2VcclxuICAgIC8qKlxyXG4gICAgICogdmFsdWXlgLxcclxuICAgICAqL1xyXG4gICAgdmFsdWU6IGFueVxyXG4gICAgLyoqXHJcbiAgICAgKiDmianlsZXlsZ7mgKdcclxuICAgICAqL1xyXG4gICAgZXh0ZW5kOiBhbnlcclxufSJdfQ==