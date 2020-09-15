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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkva2V5VmFsdWUudHMiXSwibmFtZXMiOlsiS2V5VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsImV4dGVuZCIsIktleU5hbWVWYWx1ZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7OztJQUdhQSxRLEdBQ1Qsa0JBQVlDLEdBQVosRUFBeUJDLEtBQXpCLEVBQTJDQyxNQUEzQyxFQUF5RDtBQUFBOztBQUFBLCtCQVEzQyxFQVIyQzs7QUFBQTs7QUFBQTs7QUFDckQsT0FBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsT0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7QUFDRDs7OztBQWNKOzs7Ozs7O0lBR2FDLFksR0FDVCxzQkFBWUgsR0FBWixFQUF5QkksSUFBekIsRUFBdUNILEtBQXZDLEVBQW1EQyxNQUFuRCxFQUFpRTtBQUFBOztBQUFBLCtCQVNuRCxFQVRtRDs7QUFBQSxnQ0FhbEQsRUFia0Q7O0FBQUE7O0FBQUE7O0FBQzdELE9BQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLE9BQUtJLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtILEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNIO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6ZSu5YC85a+55a6e5L2TXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgS2V5VmFsdWU8VmFsdWVUeXBlID0gYW55PiB7XHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgdmFsdWU6IFZhbHVlVHlwZSwgZXh0ZW5kPzogYW55KSB7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXlcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVcclxuICAgICAgICB0aGlzLmV4dGVuZCA9IGV4dGVuZFxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDplK7lkI1cclxuICAgICAqL1xyXG4gICAga2V5OiBzdHJpbmcgPSBcIlwiXHJcbiAgICAvKipcclxuICAgICAqIHZhbHVl5YC8XHJcbiAgICAgKi9cclxuICAgIHZhbHVlOiBWYWx1ZVR5cGVcclxuICAgIC8qKlxyXG4gICAgICog5omp5bGV5bGe5oCnXHJcbiAgICAgKi9cclxuICAgIGV4dGVuZDogYW55XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDplK7lkI3lgLzlr7nlrp7kvZNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBLZXlOYW1lVmFsdWUge1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgZXh0ZW5kPzogYW55KSB7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXlcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXHJcbiAgICAgICAgdGhpcy5leHRlbmQgPSBleHRlbmRcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6ZSu5ZCNXHJcbiAgICAgKi9cclxuICAgIGtleTogc3RyaW5nID0gXCJcIlxyXG4gICAgLyoqXHJcbiAgICAgKiBuYW1l5ZCNXHJcbiAgICAgKi9cclxuICAgIG5hbWU6IHN0cmluZyA9IFwiXCJcclxuICAgIC8qKlxyXG4gICAgICogdmFsdWXlgLxcclxuICAgICAqL1xyXG4gICAgdmFsdWU6IGFueVxyXG4gICAgLyoqXHJcbiAgICAgKiDmianlsZXlsZ7mgKdcclxuICAgICAqL1xyXG4gICAgZXh0ZW5kOiBhbnlcclxufSJdfQ==