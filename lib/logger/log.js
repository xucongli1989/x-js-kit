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
  LevelTypeEnum["info"] = "info";
  LevelTypeEnum["warn"] = "warn";
  LevelTypeEnum["error"] = "error";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvbG9nLnRzIl0sIm5hbWVzIjpbIkxldmVsVHlwZUVudW0iLCJkZWZhdWx0TG9nUmVjb3JkZXIiLCJzdHIiLCJjb25zb2xlIiwiaW5mbyIsIlByb21pc2UiLCJyZXNvbHZlIiwid2FybiIsImVycm9yIiwiZ2V0TG9nUmVjb3JkZXIiLCJsZXZlbCIsImlzQXN5bmMiLCJmdW4iLCJpbmZvQXN5bmMiLCJ3YXJuQXN5bmMiLCJlcnJvckFzeW5jIiwiTG9nZ2VySGVscGVyIiwiY29udGVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2dGdW5jIiwid3JpdGUiLCJ3cml0ZUFzeW5jIiwibG9nZ2VyIiwic2V0TG9nZ2VyUmVjb3JkZXIiLCJsb2dSZWNvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQTs7O0lBR1lBLGE7QUFNWjs7Ozs7O1dBTllBLGE7QUFBQUEsRUFBQUEsYTtBQUFBQSxFQUFBQSxhO0FBQUFBLEVBQUFBLGE7R0FBQUEsYSw2QkFBQUEsYTs7QUE4Q1o7OztBQUdBLElBQUlDLGtCQUFtQyxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEseUJBQ2pDQyxHQURpQyxFQUNwQjtBQUNkQyxNQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYUYsR0FBYjtBQUNIO0FBSHFDO0FBQUE7QUFBQSw4QkFJNUJBLEdBSjRCLEVBSWY7QUFDbkJDLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhRixHQUFiO0FBQ0EsYUFBT0csT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDSDtBQVBxQztBQUFBO0FBQUEseUJBUWpDSixHQVJpQyxFQVFwQjtBQUNkQyxNQUFBQSxPQUFPLENBQUNJLElBQVIsQ0FBYUwsR0FBYjtBQUNIO0FBVnFDO0FBQUE7QUFBQSw4QkFXNUJBLEdBWDRCLEVBV2Y7QUFDbkJDLE1BQUFBLE9BQU8sQ0FBQ0ksSUFBUixDQUFhTCxHQUFiO0FBQ0EsYUFBT0csT0FBTyxDQUFD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QUFMLENBQWdCdEIsYUFBYSxDQUFDTyxJQUE5QixFQUFvQ1UsT0FBcEMsQ0FBUDtBQUNIO0FBQ0Q7Ozs7Ozs7MEJBSU1BLE8sRUFBc0I7QUFDeEIsV0FBS0ksS0FBTCxDQUFXckIsYUFBYSxDQUFDUSxLQUF6QixFQUFnQ1MsT0FBaEM7QUFDSDtBQUNEOzs7Ozs7OytCQUlXQSxPLEVBQXNCO0FBQzdCLGFBQU8sS0FBS0ssVUFBTCxDQUFnQnRCLGFBQWEsQ0FBQ1EsS0FBOUIsRUFBcUNTLE9BQXJDLENBQVA7QUFDSDs7Ozs7QUFHTDs7Ozs7QUFHTyxJQUFJTSxNQUFvQixHQUFHLElBQUlQLFlBQUosRUFBM0I7QUFFUDs7Ozs7OztBQUlPLFNBQVNRLGlCQUFULENBQTJCQyxXQUEzQixFQUF5RDtBQUM1RHhCLEVBQUFBLGtCQUFrQixHQUFHd0IsV0FBckI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSBcIi4uL2NvbW1vbi9kYXRhXCJcclxuXHJcbi8qKlxyXG4gKiDml6Xlv5fnuqfliKvnsbvlnotcclxuICovXHJcbmV4cG9ydCBlbnVtIExldmVsVHlwZUVudW0ge1xyXG4gICAgXCJpbmZvXCIgPSBcImluZm9cIixcclxuICAgIFwid2FyblwiID0gXCJ3YXJuXCIsXHJcbiAgICBcImVycm9yXCIgPSBcImVycm9yXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIOaXpeW/l+WGheWuueexu+Wei1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29udGVudFR5cGUgPSBvYmplY3QgfCBzdHJpbmdcclxuXHJcbi8qKlxyXG4gKiDlvILmraXml6Xlv5fov5Tlm57nsbvlnotcclxuICovXHJcbmV4cG9ydCB0eXBlIFByb21pc2VUeXBlID0gUHJvbWlzZTx2b2lkPiB8IFByb21pc2U8e30+XHJcblxyXG4vKipcclxuICog5pel5b+X6K6w5b2V5Zmo5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExvZ1JlY29yZGVyVHlwZSB7XHJcbiAgICAvKipcclxuICAgICAqIOS4gOiIrOaXpeW/l1xyXG4gICAgICovXHJcbiAgICBpbmZvKHN0cjogc3RyaW5nKTogdm9pZFxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIDoiKzml6Xlv5fvvIjlvILmraXvvIlcclxuICAgICAqL1xyXG4gICAgaW5mb0FzeW5jKHN0cjogc3RyaW5nKTogUHJvbWlzZVR5cGVcclxuICAgIC8qKlxyXG4gICAgICog6K2m5ZGK5pel5b+XXHJcbiAgICAgKi9cclxuICAgIHdhcm4oc3RyOiBzdHJpbmcpOiB2b2lkXHJcbiAgICAvKipcclxuICAgICAqIOitpuWRiuaXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICovXHJcbiAgICB3YXJuQXN5bmMoc3RyOiBzdHJpbmcpOiBQcm9taXNlVHlwZVxyXG4gICAgLyoqXHJcbiAgICAgKiDplJnor6/ml6Xlv5dcclxuICAgICAqL1xyXG4gICAgZXJyb3Ioc3RyOiBzdHJpbmcpOiB2b2lkXHJcbiAgICAvKipcclxuICAgICAqIOmUmeivr+aXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICovXHJcbiAgICBlcnJvckFzeW5jKHN0cjogc3RyaW5nKTogUHJvbWlzZVR5cGVcclxufVxyXG5cclxuLyoqXHJcbiAqIOW9k+WJjem7mOiupOeahOaXpeW/l+iusOW9leWZqO+8iOm7mOiupOS4undpbmRvdy5jb25zb2xl77yJXHJcbiAqL1xyXG5sZXQgZGVmYXVsdExvZ1JlY29yZGVyOiBMb2dSZWNvcmRlclR5cGUgPSBuZXcgY2xhc3Mge1xyXG4gICAgaW5mbyhzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhzdHIpXHJcbiAgICB9XHJcbiAgICBpbmZvQXN5bmMoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oc3RyKVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgfVxyXG4gICAgd2FybihzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihzdHIpXHJcbiAgICB9XHJcbiAgICB3YXJuQXN5bmMoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oc3RyKVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgfVxyXG4gICAgZXJyb3Ioc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKHN0cilcclxuICAgIH1cclxuICAgIGVycm9yQXN5bmMoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKHN0cilcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOagueaNruaXpeW/l+e6p+WIq+i/lOWbnuWvueW6lOeahOaXpeW/l+iusOW9leWHveaVsFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TG9nUmVjb3JkZXIobGV2ZWw6IExldmVsVHlwZUVudW0sIGlzQXN5bmM6IGJvb2xlYW4pOiAoc3RyOiBzdHJpbmcpID0+IHZvaWQgfCAoKHN0cjogc3RyaW5nKSA9PiBQcm9taXNlVHlwZSkge1xyXG4gICAgaWYgKGlzQXN5bmMpIHtcclxuICAgICAgICBsZXQgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLmluZm9Bc3luY1xyXG4gICAgICAgIHN3aXRjaCAobGV2ZWwpIHtcclxuICAgICAgICAgICAgY2FzZSBMZXZlbFR5cGVFbnVtLmluZm86XHJcbiAgICAgICAgICAgICAgICBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIuaW5mb0FzeW5jXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMZXZlbFR5cGVFbnVtLndhcm46XHJcbiAgICAgICAgICAgICAgICBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIud2FybkFzeW5jXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMZXZlbFR5cGVFbnVtLmVycm9yOlxyXG4gICAgICAgICAgICAgICAgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLmVycm9yQXN5bmNcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnVuIGFzIGFueVxyXG4gICAgfVxyXG4gICAgbGV0IGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci5pbmZvXHJcbiAgICBzd2l0Y2ggKGxldmVsKSB7XHJcbiAgICAgICAgY2FzZSBMZXZlbFR5cGVFbnVtLmluZm86XHJcbiAgICAgICAgICAgIGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci5pbmZvXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTGV2ZWxUeXBlRW51bS53YXJuOlxyXG4gICAgICAgICAgICBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIud2FyblxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExldmVsVHlwZUVudW0uZXJyb3I6XHJcbiAgICAgICAgICAgIGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci5lcnJvclxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBmdW4gYXMgYW55XHJcbn1cclxuXHJcbmNsYXNzIExvZ2dlckhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIOWGmeaXpeW/l1xyXG4gICAgICogQHBhcmFtIGxldmVsIOaXpeW/l+e6p+WIq1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHdyaXRlKGxldmVsOiBMZXZlbFR5cGVFbnVtLCBjb250ZW50OiBDb250ZW50VHlwZSkge1xyXG4gICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3RyID0gKGlzU3RyaW5nKGNvbnRlbnQpID8gY29udGVudCA6IEpTT04uc3RyaW5naWZ5KGNvbnRlbnQpKSBhcyBzdHJpbmdcclxuICAgICAgICBjb25zdCBsb2dGdW5jID0gZ2V0TG9nUmVjb3JkZXIobGV2ZWwsIGZhbHNlKVxyXG4gICAgICAgIGxvZ0Z1bmMoc3RyKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlhpnml6Xlv5fvvIjlvILmraXvvIlcclxuICAgICAqIEBwYXJhbSBsZXZlbCDml6Xlv5fnuqfliKtcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICovXHJcbiAgICB3cml0ZUFzeW5jKGxldmVsOiBMZXZlbFR5cGVFbnVtLCBjb250ZW50OiBDb250ZW50VHlwZSkge1xyXG4gICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3RyID0gKGlzU3RyaW5nKGNvbnRlbnQpID8gY29udGVudCA6IEpTT04uc3RyaW5naWZ5KGNvbnRlbnQpKSBhcyBzdHJpbmdcclxuICAgICAgICBjb25zdCBsb2dGdW5jID0gZ2V0TG9nUmVjb3JkZXIobGV2ZWwsIHRydWUpXHJcbiAgICAgICAgcmV0dXJuIDxQcm9taXNlVHlwZT4obG9nRnVuYyhzdHIpIGFzIGFueSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogIOWGmeS4gOiIrOaXpeW/l1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKi9cclxuICAgIGluZm8oY29udGVudDogQ29udGVudFR5cGUpIHtcclxuICAgICAgICB0aGlzLndyaXRlKExldmVsVHlwZUVudW0uaW5mbywgY29udGVudClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogIOWGmeS4gOiIrOaXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKi9cclxuICAgIGluZm9Bc3luYyhjb250ZW50OiBDb250ZW50VHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlQXN5bmMoTGV2ZWxUeXBlRW51bS5pbmZvLCBjb250ZW50KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ6K2m5ZGK5pel5b+XXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqL1xyXG4gICAgd2Fybihjb250ZW50OiBDb250ZW50VHlwZSkge1xyXG4gICAgICAgIHRoaXMud3JpdGUoTGV2ZWxUeXBlRW51bS53YXJuLCBjb250ZW50KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ6K2m5ZGK5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqL1xyXG4gICAgd2FybkFzeW5jKGNvbnRlbnQ6IENvbnRlbnRUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVBc3luYyhMZXZlbFR5cGVFbnVtLndhcm4sIGNvbnRlbnQpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqICDlhpnplJnor6/ml6Xlv5dcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICovXHJcbiAgICBlcnJvcihjb250ZW50OiBDb250ZW50VHlwZSkge1xyXG4gICAgICAgIHRoaXMud3JpdGUoTGV2ZWxUeXBlRW51bS5lcnJvciwgY29udGVudClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogIOWGmemUmeivr+aXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKi9cclxuICAgIGVycm9yQXN5bmMoY29udGVudDogQ29udGVudFR5cGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZUFzeW5jKExldmVsVHlwZUVudW0uZXJyb3IsIGNvbnRlbnQpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlvZPliY3ml6Xlv5flt6XlhbfnsbtcclxuICovXHJcbmV4cG9ydCBsZXQgbG9nZ2VyOiBMb2dnZXJIZWxwZXIgPSBuZXcgTG9nZ2VySGVscGVyKClcclxuXHJcbi8qKlxyXG4gKiDph43mlrDorr7nva7pu5jorqTnmoTml6Xlv5forrDlvZXlmahcclxuICogQHBhcmFtIGxvZ1JlY29yZGVyIOaWsOeahOaXpeW/l+iusOW9leWZqO+8iOm7mOiupOeahOaXpeW/l+iusOW9leWZqOS4undpbmRvdy5jb25zb2xl77yJXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9nZ2VyUmVjb3JkZXIobG9nUmVjb3JkZXI6IExvZ1JlY29yZGVyVHlwZSkge1xyXG4gICAgZGVmYXVsdExvZ1JlY29yZGVyID0gbG9nUmVjb3JkZXJcclxufSJdfQ==