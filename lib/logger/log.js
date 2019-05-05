"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLoggerRecorder = setLoggerRecorder;
exports.logger = exports.LevelTypeEnum = void 0;

var _data = require("../common/data");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 日志级别类型
 */
var LevelTypeEnum;
/**
 * 日志内容类型
 */

exports.LevelTypeEnum = LevelTypeEnum;

(function (LevelTypeEnum) {
  LevelTypeEnum[LevelTypeEnum["info"] = 0] = "info";
  LevelTypeEnum[LevelTypeEnum["warn"] = 1] = "warn";
  LevelTypeEnum[LevelTypeEnum["error"] = 2] = "error";
})(LevelTypeEnum || (exports.LevelTypeEnum = LevelTypeEnum = {}));

/**
 * 当前默认的日志记录器（默认为window.console）
 */
var defaultLogRecorder = new (
/*#__PURE__*/
function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "info",
    value: function info(str) {
      console.info(str);
    }
  }, {
    key: "infoAsync",
    value: function infoAsync(str) {
      console.info(str);
      return Promise.resolve();
    }
  }, {
    key: "warn",
    value: function warn(str) {
      console.warn(str);
    }
  }, {
    key: "warnAsync",
    value: function warnAsync(str) {
      console.warn(str);
      return Promise.resolve();
    }
  }, {
    key: "error",
    value: function error(str) {
      console.error(str);
    }
  }, {
    key: "errorAsync",
    value: function errorAsync(str) {
      console.error(str);
      return Promise.resolve();
    }
  }]);

  return _class;
}())();
/**
 * 根据日志级别返回对应的日志记录函数
 */

function getLogRecorder(level, isAsync) {
  if (isAsync) {
    var _fun = defaultLogRecorder.infoAsync;

    switch (level) {
      case LevelTypeEnum.info:
        _fun = defaultLogRecorder.infoAsync;
        break;

      case LevelTypeEnum.warn:
        _fun = defaultLogRecorder.warnAsync;
        break;

      case LevelTypeEnum.error:
        _fun = defaultLogRecorder.errorAsync;
        break;
    }

    return _fun;
  }

  var fun = defaultLogRecorder.info;

  switch (level) {
    case LevelTypeEnum.info:
      fun = defaultLogRecorder.info;
      break;

    case LevelTypeEnum.warn:
      fun = defaultLogRecorder.warn;
      break;

    case LevelTypeEnum.error:
      fun = defaultLogRecorder.error;
      break;
  }

  return fun;
}

var LoggerHelper =
/*#__PURE__*/
function () {
  function LoggerHelper() {
    _classCallCheck(this, LoggerHelper);
  }

  _createClass(LoggerHelper, [{
    key: "write",

    /**
     * 写日志
     * @param level 日志级别
     * @param content 日志内容
     */
    value: function write(level, content) {
      if (!content) {
        return;
      }

      var str = (0, _data.isString)(content) ? content : JSON.stringify(content);
      var logFunc = getLogRecorder(level, false);
      logFunc(str);
    }
    /**
     * 写日志（异步）
     * @param level 日志级别
     * @param content 日志内容
     */

  }, {
    key: "writeAsync",
    value: function writeAsync(level, content) {
      if (!content) {
        return Promise.resolve();
      }

      var str = (0, _data.isString)(content) ? content : JSON.stringify(content);
      var logFunc = getLogRecorder(level, true);
      return logFunc(str);
    }
    /**
     *  写一般日志
     * @param content 日志内容
     */

  }, {
    key: "info",
    value: function info(content) {
      this.write(LevelTypeEnum.info, content);
    }
    /**
     *  写一般日志（异步）
     * @param content 日志内容
     */

  }, {
    key: "infoAsync",
    value: function infoAsync(content) {
      return this.writeAsync(LevelTypeEnum.info, content);
    }
    /**
     *  写警告日志
     * @param content 日志内容
     */

  }, {
    key: "warn",
    value: function warn(content) {
      this.write(LevelTypeEnum.warn, content);
    }
    /**
     *  写警告日志（异步）
     * @param content 日志内容
     */

  }, {
    key: "warnAsync",
    value: function warnAsync(content) {
      return this.writeAsync(LevelTypeEnum.warn, content);
    }
    /**
     *  写错误日志
     * @param content 日志内容
     */

  }, {
    key: "error",
    value: function error(content) {
      this.write(LevelTypeEnum.error, content);
    }
    /**
     *  写错误日志（异步）
     * @param content 日志内容
     */

  }, {
    key: "errorAsync",
    value: function errorAsync(content) {
      return this.writeAsync(LevelTypeEnum.error, content);
    }
  }]);

  return LoggerHelper;
}();
/**
 * 当前日志工具类
 */


var logger = new LoggerHelper();
/**
 * 重新设置默认的日志记录器
 * @param logRecorder 新的日志记录器（默认的日志记录器为window.console）
 */

exports.logger = logger;

function setLoggerRecorder(logRecorder) {
  defaultLogRecorder = logRecorder;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvbG9nLnRzIl0sIm5hbWVzIjpbIkxldmVsVHlwZUVudW0iLCJkZWZhdWx0TG9nUmVjb3JkZXIiLCJzdHIiLCJjb25zb2xlIiwiaW5mbyIsIlByb21pc2UiLCJyZXNvbHZlIiwid2FybiIsImVycm9yIiwiZ2V0TG9nUmVjb3JkZXIiLCJsZXZlbCIsImlzQXN5bmMiLCJmdW4iLCJpbmZvQXN5bmMiLCJ3YXJuQXN5bmMiLCJlcnJvckFzeW5jIiwiTG9nZ2VySGVscGVyIiwiY29udGVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2dGdW5jIiwid3JpdGUiLCJ3cml0ZUFzeW5jIiwibG9nZ2VyIiwic2V0TG9nZ2VyUmVjb3JkZXIiLCJsb2dSZWNvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQTs7O0lBR1lBLGE7QUFFWjs7Ozs7O1dBRllBLGE7QUFBQUEsRUFBQUEsYSxDQUFBQSxhO0FBQUFBLEVBQUFBLGEsQ0FBQUEsYTtBQUFBQSxFQUFBQSxhLENBQUFBLGE7R0FBQUEsYSw2QkFBQUEsYTs7QUEwQ1o7OztBQUdBLElBQUlDLGtCQUFtQyxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEseUJBQ2pDQyxHQURpQyxFQUNwQjtBQUNkQyxNQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYUYsR0FBYjtBQUNIO0FBSHFDO0FBQUE7QUFBQSw4QkFJNUJBLEdBSjRCLEVBSWY7QUFDbkJDLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhRixHQUFiO0FBQ0EsYUFBT0csT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDSDtBQVBxQztBQUFBO0FBQUEseUJBUWpDSixHQVJpQyxFQVFwQjtBQUNkQyxNQUFBQSxPQUFPLENBQUNJLElBQVIsQ0FBYUwsR0FBYjtBQUNIO0FBVnFDO0FBQUE7QUFBQSw4QkFXNUJBLEdBWDRCLEVBV2Y7QUFDbkJDLE1BQUFBLE9BQU8sQ0FBQ0ksSUFBUixDQUFhTCxH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RUFBc0I7QUFDNUIsYUFBTyxLQUFLSyxVQUFMLENBQWdCdEIsYUFBYSxDQUFDTyxJQUE5QixFQUFvQ1UsT0FBcEMsQ0FBUDtBQUNIO0FBQ0Q7Ozs7Ozs7MEJBSU1BLE8sRUFBc0I7QUFDeEIsV0FBS0ksS0FBTCxDQUFXckIsYUFBYSxDQUFDUSxLQUF6QixFQUFnQ1MsT0FBaEM7QUFDSDtBQUNEOzs7Ozs7OytCQUlXQSxPLEVBQXNCO0FBQzdCLGFBQU8sS0FBS0ssVUFBTCxDQUFnQnRCLGFBQWEsQ0FBQ1EsS0FBOUIsRUFBcUNTLE9BQXJDLENBQVA7QUFDSDs7Ozs7QUFHTDs7Ozs7QUFHTyxJQUFJTSxNQUFvQixHQUFHLElBQUlQLFlBQUosRUFBM0I7QUFFUDs7Ozs7OztBQUlPLFNBQVNRLGlCQUFULENBQTJCQyxXQUEzQixFQUF5RDtBQUM1RHhCLEVBQUFBLGtCQUFrQixHQUFHd0IsV0FBckI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSBcIi4uL2NvbW1vbi9kYXRhXCJcclxuXHJcbi8qKlxyXG4gKiDml6Xlv5fnuqfliKvnsbvlnotcclxuICovXHJcbmV4cG9ydCBlbnVtIExldmVsVHlwZUVudW0geyBcImluZm9cIiwgXCJ3YXJuXCIsIFwiZXJyb3JcIiB9XHJcblxyXG4vKipcclxuICog5pel5b+X5YaF5a6557G75Z6LXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb250ZW50VHlwZSA9IG9iamVjdCB8IHN0cmluZ1xyXG5cclxuLyoqXHJcbiAqIOW8guatpeaXpeW/l+i/lOWbnuexu+Wei1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgUHJvbWlzZVR5cGUgPSBQcm9taXNlPHZvaWQ+IHwgUHJvbWlzZTx7fT5cclxuXHJcbi8qKlxyXG4gKiDml6Xlv5forrDlvZXlmajmjqXlj6NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9nUmVjb3JkZXJUeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICog5LiA6Iis5pel5b+XXHJcbiAgICAgKi9cclxuICAgIGluZm8oc3RyOiBzdHJpbmcpOiB2b2lkXHJcbiAgICAvKipcclxuICAgICAqIOS4gOiIrOaXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICovXHJcbiAgICBpbmZvQXN5bmMoc3RyOiBzdHJpbmcpOiBQcm9taXNlVHlwZVxyXG4gICAgLyoqXHJcbiAgICAgKiDorablkYrml6Xlv5dcclxuICAgICAqL1xyXG4gICAgd2FybihzdHI6IHN0cmluZyk6IHZvaWRcclxuICAgIC8qKlxyXG4gICAgICog6K2m5ZGK5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKi9cclxuICAgIHdhcm5Bc3luYyhzdHI6IHN0cmluZyk6IFByb21pc2VUeXBlXHJcbiAgICAvKipcclxuICAgICAqIOmUmeivr+aXpeW/l1xyXG4gICAgICovXHJcbiAgICBlcnJvcihzdHI6IHN0cmluZyk6IHZvaWRcclxuICAgIC8qKlxyXG4gICAgICog6ZSZ6K+v5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKi9cclxuICAgIGVycm9yQXN5bmMoc3RyOiBzdHJpbmcpOiBQcm9taXNlVHlwZVxyXG59XHJcblxyXG4vKipcclxuICog5b2T5YmN6buY6K6k55qE5pel5b+X6K6w5b2V5Zmo77yI6buY6K6k5Li6d2luZG93LmNvbnNvbGXvvIlcclxuICovXHJcbmxldCBkZWZhdWx0TG9nUmVjb3JkZXI6IExvZ1JlY29yZGVyVHlwZSA9IG5ldyBjbGFzcyB7XHJcbiAgICBpbmZvKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKHN0cilcclxuICAgIH1cclxuICAgIGluZm9Bc3luYyhzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhzdHIpXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICB9XHJcbiAgICB3YXJuKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKHN0cilcclxuICAgIH1cclxuICAgIHdhcm5Bc3luYyhzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihzdHIpXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICB9XHJcbiAgICBlcnJvcihzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3Ioc3RyKVxyXG4gICAgfVxyXG4gICAgZXJyb3JBc3luYyhzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3Ioc3RyKVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5qC55o2u5pel5b+X57qn5Yir6L+U5Zue5a+55bqU55qE5pel5b+X6K6w5b2V5Ye95pWwXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRMb2dSZWNvcmRlcihsZXZlbDogTGV2ZWxUeXBlRW51bSwgaXNBc3luYzogYm9vbGVhbik6IChzdHI6IHN0cmluZykgPT4gdm9pZCB8ICgoc3RyOiBzdHJpbmcpID0+IFByb21pc2VUeXBlKSB7XHJcbiAgICBpZiAoaXNBc3luYykge1xyXG4gICAgICAgIGxldCBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIuaW5mb0FzeW5jXHJcbiAgICAgICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIExldmVsVHlwZUVudW0uaW5mbzpcclxuICAgICAgICAgICAgICAgIGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci5pbmZvQXN5bmNcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExldmVsVHlwZUVudW0ud2FybjpcclxuICAgICAgICAgICAgICAgIGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci53YXJuQXN5bmNcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExldmVsVHlwZUVudW0uZXJyb3I6XHJcbiAgICAgICAgICAgICAgICBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIuZXJyb3JBc3luY1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW4gYXMgYW55XHJcbiAgICB9XHJcbiAgICBsZXQgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLmluZm9cclxuICAgIHN3aXRjaCAobGV2ZWwpIHtcclxuICAgICAgICBjYXNlIExldmVsVHlwZUVudW0uaW5mbzpcclxuICAgICAgICAgICAgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLmluZm9cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMZXZlbFR5cGVFbnVtLndhcm46XHJcbiAgICAgICAgICAgIGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci53YXJuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTGV2ZWxUeXBlRW51bS5lcnJvcjpcclxuICAgICAgICAgICAgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLmVycm9yXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1biBhcyBhbnlcclxufVxyXG5cclxuY2xhc3MgTG9nZ2VySGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICog5YaZ5pel5b+XXHJcbiAgICAgKiBAcGFyYW0gbGV2ZWwg5pel5b+X57qn5YirXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqL1xyXG4gICAgd3JpdGUobGV2ZWw6IExldmVsVHlwZUVudW0sIGNvbnRlbnQ6IENvbnRlbnRUeXBlKSB7XHJcbiAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdHIgPSAoaXNTdHJpbmcoY29udGVudCkgPyBjb250ZW50IDogSlNPTi5zdHJpbmdpZnkoY29udGVudCkpIGFzIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IGxvZ0Z1bmMgPSBnZXRMb2dSZWNvcmRlcihsZXZlbCwgZmFsc2UpXHJcbiAgICAgICAgbG9nRnVuYyhzdHIpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWGmeaXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICogQHBhcmFtIGxldmVsIOaXpeW/l+e6p+WIq1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHdyaXRlQXN5bmMobGV2ZWw6IExldmVsVHlwZUVudW0sIGNvbnRlbnQ6IENvbnRlbnRUeXBlKSB7XHJcbiAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdHIgPSAoaXNTdHJpbmcoY29udGVudCkgPyBjb250ZW50IDogSlNPTi5zdHJpbmdpZnkoY29udGVudCkpIGFzIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IGxvZ0Z1bmMgPSBnZXRMb2dSZWNvcmRlcihsZXZlbCwgdHJ1ZSlcclxuICAgICAgICByZXR1cm4gPFByb21pc2VUeXBlPihsb2dGdW5jKHN0cikgYXMgYW55KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ5LiA6Iis5pel5b+XXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqL1xyXG4gICAgaW5mbyhjb250ZW50OiBDb250ZW50VHlwZSkge1xyXG4gICAgICAgIHRoaXMud3JpdGUoTGV2ZWxUeXBlRW51bS5pbmZvLCBjb250ZW50KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ5LiA6Iis5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqL1xyXG4gICAgaW5mb0FzeW5jKGNvbnRlbnQ6IENvbnRlbnRUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVBc3luYyhMZXZlbFR5cGVFbnVtLmluZm8sIGNvbnRlbnQpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqICDlhpnorablkYrml6Xlv5dcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICovXHJcbiAgICB3YXJuKGNvbnRlbnQ6IENvbnRlbnRUeXBlKSB7XHJcbiAgICAgICAgdGhpcy53cml0ZShMZXZlbFR5cGVFbnVtLndhcm4sIGNvbnRlbnQpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqICDlhpnorablkYrml6Xlv5fvvIjlvILmraXvvIlcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICovXHJcbiAgICB3YXJuQXN5bmMoY29udGVudDogQ29udGVudFR5cGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZUFzeW5jKExldmVsVHlwZUVudW0ud2FybiwgY29udGVudClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogIOWGmemUmeivr+aXpeW/l1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKi9cclxuICAgIGVycm9yKGNvbnRlbnQ6IENvbnRlbnRUeXBlKSB7XHJcbiAgICAgICAgdGhpcy53cml0ZShMZXZlbFR5cGVFbnVtLmVycm9yLCBjb250ZW50KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ6ZSZ6K+v5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqL1xyXG4gICAgZXJyb3JBc3luYyhjb250ZW50OiBDb250ZW50VHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlQXN5bmMoTGV2ZWxUeXBlRW51bS5lcnJvciwgY29udGVudClcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOW9k+WJjeaXpeW/l+W3peWFt+exu1xyXG4gKi9cclxuZXhwb3J0IGxldCBsb2dnZXI6IExvZ2dlckhlbHBlciA9IG5ldyBMb2dnZXJIZWxwZXIoKVxyXG5cclxuLyoqXHJcbiAqIOmHjeaWsOiuvue9rum7mOiupOeahOaXpeW/l+iusOW9leWZqFxyXG4gKiBAcGFyYW0gbG9nUmVjb3JkZXIg5paw55qE5pel5b+X6K6w5b2V5Zmo77yI6buY6K6k55qE5pel5b+X6K6w5b2V5Zmo5Li6d2luZG93LmNvbnNvbGXvvIlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2dnZXJSZWNvcmRlcihsb2dSZWNvcmRlcjogTG9nUmVjb3JkZXJUeXBlKSB7XHJcbiAgICBkZWZhdWx0TG9nUmVjb3JkZXIgPSBsb2dSZWNvcmRlclxyXG59Il19