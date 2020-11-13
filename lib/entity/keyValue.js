"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyNameValue = exports.KeyValue = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 键值对实体
 */
var KeyValue = function KeyValue(key, value, extend) {
  _classCallCheck(this, KeyValue);

  _defineProperty(this, "key", "");

  _defineProperty(this, "value", void 0);

  _defineProperty(this, "extend", void 0);

  this.key = key;
  this.value = value;
  this.extend = extend;
}
/**
 * 键名
 */
;
/**
 * 键名值对实体
 */


exports.KeyValue = KeyValue;

var KeyNameValue = function KeyNameValue(key, name, value, extend) {
  _classCallCheck(this, KeyNameValue);

  _defineProperty(this, "key", "");

  _defineProperty(this, "name", "");

  _defineProperty(this, "value", void 0);

  _defineProperty(this, "extend", void 0);

  this.key = key;
  this.name = name;
  this.value = value;
  this.extend = extend;
}
/**
 * 键名
 */
;

exports.KeyNameValue = KeyNameValue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkva2V5VmFsdWUudHMiXSwibmFtZXMiOlsiS2V5VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsImV4dGVuZCIsIktleU5hbWVWYWx1ZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBQ2FBLFEsR0FDVCxrQkFBWUMsR0FBWixFQUF5QkMsS0FBekIsRUFBMkNDLE1BQTNDLEVBQWdFO0FBQUE7O0FBQUEsK0JBUWxELEVBUmtEOztBQUFBOztBQUFBOztBQUM1RCxPQUFLRixHQUFMLEdBQVdBLEdBQVg7QUFDQSxPQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDSDtBQUNEO0FBQ0o7QUFDQTs7QUFZQTtBQUNBO0FBQ0E7Ozs7O0lBQ2FDLFksR0FDVCxzQkFBWUgsR0FBWixFQUF5QkksSUFBekIsRUFBdUNILEtBQXZDLEVBQXlEQyxNQUF6RCxFQUE4RTtBQUFBOztBQUFBLCtCQVNoRSxFQVRnRTs7QUFBQSxnQ0FhL0QsRUFiK0Q7O0FBQUE7O0FBQUE7O0FBQzFFLE9BQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLE9BQUtJLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtILEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNIO0FBQ0Q7QUFDSjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmUruWAvOWvueWunuS9k1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEtleVZhbHVlPFZhbHVlVHlwZSA9IGFueSwgRXh0ZW5kVHlwZSA9IGFueT4ge1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHZhbHVlOiBWYWx1ZVR5cGUsIGV4dGVuZD86IEV4dGVuZFR5cGUpIHtcclxuICAgICAgICB0aGlzLmtleSA9IGtleVxyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxyXG4gICAgICAgIHRoaXMuZXh0ZW5kID0gZXh0ZW5kXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmUruWQjVxyXG4gICAgICovXHJcbiAgICBrZXk6IHN0cmluZyA9IFwiXCJcclxuICAgIC8qKlxyXG4gICAgICogdmFsdWXlgLxcclxuICAgICAqL1xyXG4gICAgdmFsdWU6IFZhbHVlVHlwZVxyXG4gICAgLyoqXHJcbiAgICAgKiDmianlsZXlsZ7mgKdcclxuICAgICAqL1xyXG4gICAgZXh0ZW5kPzogRXh0ZW5kVHlwZVxyXG59XHJcblxyXG4vKipcclxuICog6ZSu5ZCN5YC85a+55a6e5L2TXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgS2V5TmFtZVZhbHVlPFZhbHVlVHlwZSA9IGFueSwgRXh0ZW5kVHlwZSA9IGFueT4ge1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIG5hbWU6IHN0cmluZywgdmFsdWU6IFZhbHVlVHlwZSwgZXh0ZW5kPzogRXh0ZW5kVHlwZSkge1xyXG4gICAgICAgIHRoaXMua2V5ID0ga2V5XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxyXG4gICAgICAgIHRoaXMuZXh0ZW5kID0gZXh0ZW5kXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmUruWQjVxyXG4gICAgICovXHJcbiAgICBrZXk6IHN0cmluZyA9IFwiXCJcclxuICAgIC8qKlxyXG4gICAgICogbmFtZeWQjVxyXG4gICAgICovXHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAvKipcclxuICAgICAqIHZhbHVl5YC8XHJcbiAgICAgKi9cclxuICAgIHZhbHVlOiBWYWx1ZVR5cGVcclxuICAgIC8qKlxyXG4gICAgICog5omp5bGV5bGe5oCnXHJcbiAgICAgKi9cclxuICAgIGV4dGVuZD86IEV4dGVuZFR5cGVcclxufSJdfQ==