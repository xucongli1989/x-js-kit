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
var StopWatch =
/*#__PURE__*/
function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aW1lci9zdG9wV2F0Y2gudHMiXSwibmFtZXMiOlsiU3RvcFdhdGNoIiwiRGF0ZSIsIl9zdGFydEZsYWciLCJfc3RvcEZsYWciLCJFcnJvciIsIl9kYXRlIiwiX3ZhbHVlIiwidmFsdWVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztJQUdxQkEsUzs7Ozs7O21DQUNELElBQUlDLElBQUosRTs7b0NBQ0MsQzs7d0NBQ0ksSzs7dUNBQ0QsSzs7Ozs7O0FBT3BCOzs7NEJBR1E7QUFDSixVQUFJLEtBQUtDLFVBQUwsSUFBbUIsS0FBS0MsU0FBNUIsRUFBdUM7QUFDbkMsY0FBTSxJQUFJQyxLQUFKLENBQVUsd0VBQVYsQ0FBTjtBQUNIOztBQUNELFdBQUtGLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxXQUFLRyxLQUFMLEdBQWEsSUFBSUosSUFBSixFQUFiO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFDRDs7Ozs7OzJCQUdPO0FBQ0gsVUFBSSxLQUFLRSxTQUFULEVBQW9CO0FBQ2hCLGNBQU0sSUFBSUMsS0FBSixDQUFVLDREQUFWLENBQU47QUFDSDs7QUFDRCxXQUFLRCxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBS0csTUFBTCxHQUFjLElBQUlMLElBQUosR0FBV00sT0FBWCxLQUF1QixLQUFLRixLQUFMLENBQVdFLE9BQVgsRUFBckM7QUFDQSxhQUFPLElBQVA7QUFDSDs7OztBQTNCRDs7O3dCQUdZO0FBQ1IsYUFBTyxLQUFLRCxNQUFaO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5a6a5pe25ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9wV2F0Y2gge1xyXG4gICAgcHJpdmF0ZSBfZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHByaXZhdGUgX3ZhbHVlID0gMFxyXG4gICAgcHJpdmF0ZSBfc3RhcnRGbGFnID0gZmFsc2VcclxuICAgIHByaXZhdGUgX3N0b3BGbGFnID0gZmFsc2VcclxuICAgIC8qKlxyXG4gICAgICog6Ze06ZqU55qE5q+r56eS5pWwXHJcbiAgICAgKi9cclxuICAgIGdldCB2YWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeL6K6h5pe2XHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydEZsYWcgfHwgdGhpcy5fc3RvcEZsYWcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbm5vdCBjYWxsICdzdGFydCcgYmVjYXVzZSB0aGlzIG9iamVjdCBoYXMgYmVlbiBzdGFydGVkIG9yIHN0b3B0IVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdGFydEZsYWcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLorqHml7ZcclxuICAgICAqL1xyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RvcEZsYWcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbm5vdCBjYWxsICdzdG9wJyBiZWNhdXNlIHRoaXMgb2JqZWN0IGhhcyBiZWVuIHN0b3B0IVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdG9wRmxhZyA9IHRydWVcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpIC0gdGhpcy5fZGF0ZS52YWx1ZU9mKClcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG59Il19