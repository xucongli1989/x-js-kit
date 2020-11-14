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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aW1lci9zdG9wV2F0Y2gudHMiXSwibmFtZXMiOlsiU3RvcFdhdGNoIiwiRGF0ZSIsIl9zdGFydEZsYWciLCJfc3RvcEZsYWciLCJFcnJvciIsIl9kYXRlIiwiX3ZhbHVlIiwidmFsdWVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0lBQ3FCQSxTOzs7O21DQUNELElBQUlDLElBQUosRTs7b0NBQ0MsQzs7d0NBQ0ksSzs7dUNBQ0QsSzs7Ozs7O0FBT3BCO0FBQ0o7QUFDQTs0QkFDWTtBQUNKLFVBQUksS0FBS0MsVUFBTCxJQUFtQixLQUFLQyxTQUE1QixFQUF1QztBQUNuQyxjQUFNLElBQUlDLEtBQUosQ0FBVSx3RUFBVixDQUFOO0FBQ0g7O0FBQ0QsV0FBS0YsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFdBQUtHLEtBQUwsR0FBYSxJQUFJSixJQUFKLEVBQWI7QUFDQSxhQUFPLElBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTs7OzsyQkFDVztBQUNILFVBQUksS0FBS0UsU0FBVCxFQUFvQjtBQUNoQixjQUFNLElBQUlDLEtBQUosQ0FBVSw0REFBVixDQUFOO0FBQ0g7O0FBQ0QsV0FBS0QsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFdBQUtHLE1BQUwsR0FBYyxJQUFJTCxJQUFKLEdBQVdNLE9BQVgsS0FBdUIsS0FBS0YsS0FBTCxDQUFXRSxPQUFYLEVBQXJDO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7Ozs7QUEzQkQ7QUFDSjtBQUNBO3dCQUNnQjtBQUNSLGFBQU8sS0FBS0QsTUFBWjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWRlZmF1bHQtZXhwb3J0ICovXHJcbi8qKlxyXG4gKiDlrprml7blmajvvIzmj5DkvpvlvIDlp4vorqHml7bkuI7nu5PmnZ/orqHml7bmlrnms5XvvIzmnIDnu4jkvJrorqHnrpflh7rov5nkuKTkuKrml7bpl7TnmoTlt67jgIJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3BXYXRjaCB7XHJcbiAgICBwcml2YXRlIF9kYXRlID0gbmV3IERhdGUoKVxyXG4gICAgcHJpdmF0ZSBfdmFsdWUgPSAwXHJcbiAgICBwcml2YXRlIF9zdGFydEZsYWcgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfc3RvcEZsYWcgPSBmYWxzZVxyXG4gICAgLyoqXHJcbiAgICAgKiDpl7TpmpTnmoTmr6vnp5LmlbBcclxuICAgICAqL1xyXG4gICAgZ2V0IHZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4vorqHml7ZcclxuICAgICAqL1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0RmxhZyB8fCB0aGlzLl9zdG9wRmxhZykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2Fubm90IGNhbGwgJ3N0YXJ0JyBiZWNhdXNlIHRoaXMgb2JqZWN0IGhhcyBiZWVuIHN0YXJ0ZWQgb3Igc3RvcHQhXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0YXJ0RmxhZyA9IHRydWVcclxuICAgICAgICB0aGlzLl9kYXRlID0gbmV3IERhdGUoKVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWBnOatouiuoeaXtlxyXG4gICAgICovXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdG9wRmxhZykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2Fubm90IGNhbGwgJ3N0b3AnIGJlY2F1c2UgdGhpcyBvYmplY3QgaGFzIGJlZW4gc3RvcHQhXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0b3BGbGFnID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbmV3IERhdGUoKS52YWx1ZU9mKCkgLSB0aGlzLl9kYXRlLnZhbHVlT2YoKVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbn1cclxuIl19