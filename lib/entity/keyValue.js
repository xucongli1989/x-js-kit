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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkva2V5VmFsdWUudHMiXSwibmFtZXMiOlsiS2V5VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsImV4dGVuZCIsIktleU5hbWVWYWx1ZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7OztJQUdhQSxRLEdBQ1Qsa0JBQVlDLEdBQVosRUFBeUJDLEtBQXpCLEVBQXFDQyxNQUFyQyxFQUFtRDtBQUFBOztBQUFBLCtCQVFyQyxFQVJxQzs7QUFBQTs7QUFBQTs7QUFDL0MsT0FBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsT0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7QUFDRDs7OztBQWNKOzs7Ozs7O0lBR2FDLFksR0FDVCxzQkFBWUgsR0FBWixFQUF5QkksSUFBekIsRUFBdUNILEtBQXZDLEVBQW1EQyxNQUFuRCxFQUFpRTtBQUFBOztBQUFBLCtCQVNuRCxFQVRtRDs7QUFBQSxnQ0FhbEQsRUFia0Q7O0FBQUE7O0FBQUE7O0FBQzdELE9BQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLE9BQUtJLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtILEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNIO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6ZSu5YC85a+55a6e5L2TXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgS2V5VmFsdWUge1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGV4dGVuZD86IGFueSkge1xyXG4gICAgICAgIHRoaXMua2V5ID0ga2V5XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXHJcbiAgICAgICAgdGhpcy5leHRlbmQgPSBleHRlbmRcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6ZSu5ZCNXHJcbiAgICAgKi9cclxuICAgIGtleTogc3RyaW5nID0gXCJcIlxyXG4gICAgLyoqXHJcbiAgICAgKiB2YWx1ZeWAvFxyXG4gICAgICovXHJcbiAgICB2YWx1ZTogYW55XHJcbiAgICAvKipcclxuICAgICAqIOaJqeWxleWxnuaAp1xyXG4gICAgICovXHJcbiAgICBleHRlbmQ6IGFueVxyXG59XHJcblxyXG4vKipcclxuICog6ZSu5ZCN5YC85a+55a6e5L2TXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgS2V5TmFtZVZhbHVlIHtcclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGV4dGVuZD86IGFueSkge1xyXG4gICAgICAgIHRoaXMua2V5ID0ga2V5XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxyXG4gICAgICAgIHRoaXMuZXh0ZW5kID0gZXh0ZW5kXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmUruWQjVxyXG4gICAgICovXHJcbiAgICBrZXk6IHN0cmluZyA9IFwiXCJcclxuICAgIC8qKlxyXG4gICAgICogbmFtZeWQjVxyXG4gICAgICovXHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAvKipcclxuICAgICAqIHZhbHVl5YC8XHJcbiAgICAgKi9cclxuICAgIHZhbHVlOiBhbnlcclxuICAgIC8qKlxyXG4gICAgICog5omp5bGV5bGe5oCnXHJcbiAgICAgKi9cclxuICAgIGV4dGVuZDogYW55XHJcbn0iXX0=