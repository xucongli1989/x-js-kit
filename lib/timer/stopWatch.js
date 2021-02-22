"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/no-default-export */

/**
 * 定时器，提供开始计时与结束计时方法，最终会计算出这两个时间的差。
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
    key: "value",
    get:
    /**
     * 间隔的毫秒数
     */
    function get() {
      return this._value;
    }
    /**
     * 开始计时
     */

  }, {
    key: "start",
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
  }]);

  return StopWatch;
}();

exports.default = StopWatch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aW1lci9zdG9wV2F0Y2gudHMiXSwibmFtZXMiOlsiU3RvcFdhdGNoIiwiRGF0ZSIsIl92YWx1ZSIsIl9zdGFydEZsYWciLCJfc3RvcEZsYWciLCJFcnJvciIsIl9kYXRlIiwidmFsdWVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0lBQ3FCQSxTOzs7O21DQUNELElBQUlDLElBQUosRTs7b0NBQ0MsQzs7d0NBQ0ksSzs7dUNBQ0QsSzs7Ozs7O0FBQ3BCO0FBQ0o7QUFDQTtBQUNJLG1CQUFZO0FBQ1IsYUFBTyxLQUFLQyxNQUFaO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7Ozs7V0FDSSxpQkFBUTtBQUNKLFVBQUksS0FBS0MsVUFBTCxJQUFtQixLQUFLQyxTQUE1QixFQUF1QztBQUNuQyxjQUFNLElBQUlDLEtBQUosQ0FBVSx3RUFBVixDQUFOO0FBQ0g7O0FBQ0QsV0FBS0YsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFdBQUtHLEtBQUwsR0FBYSxJQUFJTCxJQUFKLEVBQWI7QUFDQSxhQUFPLElBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTs7OztXQUNJLGdCQUFPO0FBQ0gsVUFBSSxLQUFLRyxTQUFULEVBQW9CO0FBQ2hCLGNBQU0sSUFBSUMsS0FBSixDQUFVLDREQUFWLENBQU47QUFDSDs7QUFDRCxXQUFLRCxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBS0YsTUFBTCxHQUFjLElBQUlELElBQUosR0FBV00sT0FBWCxLQUF1QixLQUFLRCxLQUFMLENBQVdDLE9BQVgsRUFBckM7QUFDQSxhQUFPLElBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1kZWZhdWx0LWV4cG9ydCAqL1xyXG4vKipcclxuICog5a6a5pe25Zmo77yM5o+Q5L6b5byA5aeL6K6h5pe25LiO57uT5p2f6K6h5pe25pa55rOV77yM5pyA57uI5Lya6K6h566X5Ye66L+Z5Lik5Liq5pe26Ze055qE5beu44CCXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9wV2F0Y2gge1xyXG4gICAgcHJpdmF0ZSBfZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHByaXZhdGUgX3ZhbHVlID0gMFxyXG4gICAgcHJpdmF0ZSBfc3RhcnRGbGFnID0gZmFsc2VcclxuICAgIHByaXZhdGUgX3N0b3BGbGFnID0gZmFsc2VcclxuICAgIC8qKlxyXG4gICAgICog6Ze06ZqU55qE5q+r56eS5pWwXHJcbiAgICAgKi9cclxuICAgIGdldCB2YWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeL6K6h5pe2XHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydEZsYWcgfHwgdGhpcy5fc3RvcEZsYWcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbm5vdCBjYWxsICdzdGFydCcgYmVjYXVzZSB0aGlzIG9iamVjdCBoYXMgYmVlbiBzdGFydGVkIG9yIHN0b3B0IVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdGFydEZsYWcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLorqHml7ZcclxuICAgICAqL1xyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RvcEZsYWcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbm5vdCBjYWxsICdzdG9wJyBiZWNhdXNlIHRoaXMgb2JqZWN0IGhhcyBiZWVuIHN0b3B0IVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdG9wRmxhZyA9IHRydWVcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpIC0gdGhpcy5fZGF0ZS52YWx1ZU9mKClcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG59XHJcbiJdfQ==