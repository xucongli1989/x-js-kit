"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 定时器
 */
var StopWatch = /*#__PURE__*/function () {
  function StopWatch() {
    _classCallCheck(this, StopWatch);

    _defineProperty(this, "_date", new Date());

    _defineProperty(this, "_value", 0);

    _defineProperty(this, "_startFlag", false);

    _defineProperty(this, "_stopFlag", false);
  }

  _createClass(StopWatch, [{
    key: "start",

    /**
     * 开始计时
     */
    value: function start() {
      if (this._startFlag || this._stopFlag) {
        throw new Error("You cannot call 'start' because this object has been started or stopt!");
      }

      this._startFlag = true;
      this._date = new Date();
      return this;
    }
    /**
     * 停止计时
     */

  }, {
    key: "stop",
    value: function stop() {
      if (this._stopFlag) {
        throw new Error("You cannot call 'stop' because this object has been stopt!");
      }

      this._stopFlag = true;
      this._value = new Date().valueOf() - this._date.valueOf();
      return this;
    }
  }, {
    key: "value",

    /**
     * 间隔的毫秒数
     */
    get: function get() {
      return this._value;
    }
  }]);

  return StopWatch;
}();

exports.default = StopWatch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aW1lci9zdG9wV2F0Y2gudHMiXSwibmFtZXMiOlsiU3RvcFdhdGNoIiwiRGF0ZSIsIl9zdGFydEZsYWciLCJfc3RvcEZsYWciLCJFcnJvciIsIl9kYXRlIiwiX3ZhbHVlIiwidmFsdWVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztJQUdxQkEsUzs7OzttQ0FDRCxJQUFJQyxJQUFKLEU7O29DQUNDLEM7O3dDQUNJLEs7O3VDQUNELEs7Ozs7OztBQU9wQjs7OzRCQUdRO0FBQ0osVUFBSSxLQUFLQyxVQUFMLElBQW1CLEtBQUtDLFNBQTVCLEVBQXVDO0FBQ25DLGNBQU0sSUFBSUMsS0FBSixDQUFVLHdFQUFWLENBQU47QUFDSDs7QUFDRCxXQUFLRixVQUFMLEdBQWtCLElBQWxCO0FBQ0EsV0FBS0csS0FBTCxHQUFhLElBQUlKLElBQUosRUFBYjtBQUNBLGFBQU8sSUFBUDtBQUNIO0FBQ0Q7Ozs7OzsyQkFHTztBQUNILFVBQUksS0FBS0UsU0FBVCxFQUFvQjtBQUNoQixjQUFNLElBQUlDLEtBQUosQ0FBVSw0REFBVixDQUFOO0FBQ0g7O0FBQ0QsV0FBS0QsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFdBQUtHLE1BQUwsR0FBYyxJQUFJTCxJQUFKLEdBQVdNLE9BQVgsS0FBdUIsS0FBS0YsS0FBTCxDQUFXRSxPQUFYLEVBQXJDO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7Ozs7QUEzQkQ7Ozt3QkFHWTtBQUNSLGFBQU8sS0FBS0QsTUFBWjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWumuaXtuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcFdhdGNoIHtcclxuICAgIHByaXZhdGUgX2RhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICBwcml2YXRlIF92YWx1ZSA9IDBcclxuICAgIHByaXZhdGUgX3N0YXJ0RmxhZyA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9zdG9wRmxhZyA9IGZhbHNlXHJcbiAgICAvKipcclxuICAgICAqIOmXtOmalOeahOavq+enkuaVsFxyXG4gICAgICovXHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni+iuoeaXtlxyXG4gICAgICovXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnRGbGFnIHx8IHRoaXMuX3N0b3BGbGFnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjYW5ub3QgY2FsbCAnc3RhcnQnIGJlY2F1c2UgdGhpcyBvYmplY3QgaGFzIGJlZW4gc3RhcnRlZCBvciBzdG9wdCFcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3RhcnRGbGFnID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuX2RhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YGc5q2i6K6h5pe2XHJcbiAgICAgKi9cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0b3BGbGFnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjYW5ub3QgY2FsbCAnc3RvcCcgYmVjYXVzZSB0aGlzIG9iamVjdCBoYXMgYmVlbiBzdG9wdCFcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3RvcEZsYWcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKSAtIHRoaXMuX2RhdGUudmFsdWVPZigpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxufSJdfQ==