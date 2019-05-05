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
    key: "log",
    value: function log(str) {
      console.log(str);
    }
  }, {
    key: "logAsync",
    value: function logAsync(str) {
      console.log(str);
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
    var _fun = defaultLogRecorder.logAsync;

    switch (level) {
      case LevelTypeEnum.info:
        _fun = defaultLogRecorder.logAsync;
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

  var fun = defaultLogRecorder.log;

  switch (level) {
    case LevelTypeEnum.info:
      fun = defaultLogRecorder.log;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvbG9nLnRzIl0sIm5hbWVzIjpbIkxldmVsVHlwZUVudW0iLCJkZWZhdWx0TG9nUmVjb3JkZXIiLCJzdHIiLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ3YXJuIiwiZXJyb3IiLCJnZXRMb2dSZWNvcmRlciIsImxldmVsIiwiaXNBc3luYyIsImZ1biIsImxvZ0FzeW5jIiwiaW5mbyIsIndhcm5Bc3luYyIsImVycm9yQXN5bmMiLCJMb2dnZXJIZWxwZXIiLCJjb250ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZ0Z1bmMiLCJ3cml0ZSIsIndyaXRlQXN5bmMiLCJsb2dnZXIiLCJzZXRMb2dnZXJSZWNvcmRlciIsImxvZ1JlY29yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBOzs7SUFHWUEsYTtBQUVaOzs7Ozs7V0FGWUEsYTtBQUFBQSxFQUFBQSxhLENBQUFBLGE7QUFBQUEsRUFBQUEsYSxDQUFBQSxhO0FBQUFBLEVBQUFBLGEsQ0FBQUEsYTtHQUFBQSxhLDZCQUFBQSxhOztBQTBDWjs7O0FBR0EsSUFBSUMsa0JBQW1DLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx3QkFDbENDLEdBRGtDLEVBQ3JCO0FBQ2JDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0g7QUFIcUM7QUFBQTtBQUFBLDZCQUk3QkEsR0FKNkIsRUFJaEI7QUFDbEJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0EsYUFBT0csT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDSDtBQVBxQztBQUFBO0FBQUEseUJBUWpDSixHQVJpQyxFQVFwQjtBQUNkQyxNQUFBQSxPQUFPLENBQUNJLElBQVIsQ0FBYUwsR0FBYjtBQUNIO0FBVnFDO0FBQUE7QUFBQSw4QkFXNUJBLEdBWDRCLEVBV2Y7QUFDbkJDLE1BQUFBLE9BQU8sQ0FBQ0ksSUFBUixD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OzhCQUlVQSxPLEVBQXNCO0FBQzVCLGFBQU8sS0FBS0ssVUFBTCxDQUFnQnZCLGFBQWEsQ0FBQ08sSUFBOUIsRUFBb0NXLE9BQXBDLENBQVA7QUFDSDtBQUNEOzs7Ozs7OzBCQUlNQSxPLEVBQXNCO0FBQ3hCLFdBQUtJLEtBQUwsQ0FBV3RCLGFBQWEsQ0FBQ1EsS0FBekIsRUFBZ0NVLE9BQWhDO0FBQ0g7QUFDRDs7Ozs7OzsrQkFJV0EsTyxFQUFzQjtBQUM3QixhQUFPLEtBQUtLLFVBQUwsQ0FBZ0J2QixhQUFhLENBQUNRLEtBQTlCLEVBQXFDVSxPQUFyQyxDQUFQO0FBQ0g7Ozs7O0FBR0w7Ozs7O0FBR08sSUFBSU0sTUFBb0IsR0FBRyxJQUFJUCxZQUFKLEVBQTNCO0FBRVA7Ozs7Ozs7QUFJTyxTQUFTUSxpQkFBVCxDQUEyQkMsV0FBM0IsRUFBeUQ7QUFDNUR6QixFQUFBQSxrQkFBa0IsR0FBR3lCLFdBQXJCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCIuLi9jb21tb24vZGF0YVwiXHJcblxyXG4vKipcclxuICog5pel5b+X57qn5Yir57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgZW51bSBMZXZlbFR5cGVFbnVtIHsgXCJpbmZvXCIsIFwid2FyblwiLCBcImVycm9yXCIgfVxyXG5cclxuLyoqXHJcbiAqIOaXpeW/l+WGheWuueexu+Wei1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29udGVudFR5cGUgPSBvYmplY3QgfCBzdHJpbmdcclxuXHJcbi8qKlxyXG4gKiDlvILmraXml6Xlv5fov5Tlm57nsbvlnotcclxuICovXHJcbmV4cG9ydCB0eXBlIFByb21pc2VUeXBlID0gUHJvbWlzZTx2b2lkPiB8IFByb21pc2U8e30+XHJcblxyXG4vKipcclxuICog5pel5b+X6K6w5b2V5Zmo5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExvZ1JlY29yZGVyVHlwZSB7XHJcbiAgICAvKipcclxuICAgICAqIOS4gOiIrOaXpeW/l1xyXG4gICAgICovXHJcbiAgICBsb2coc3RyOiBzdHJpbmcpOiB2b2lkXHJcbiAgICAvKipcclxuICAgICAqIOS4gOiIrOaXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICovXHJcbiAgICBsb2dBc3luYyhzdHI6IHN0cmluZyk6IFByb21pc2VUeXBlXHJcbiAgICAvKipcclxuICAgICAqIOitpuWRiuaXpeW/l1xyXG4gICAgICovXHJcbiAgICB3YXJuKHN0cjogc3RyaW5nKTogdm9pZFxyXG4gICAgLyoqXHJcbiAgICAgKiDorablkYrml6Xlv5fvvIjlvILmraXvvIlcclxuICAgICAqL1xyXG4gICAgd2FybkFzeW5jKHN0cjogc3RyaW5nKTogUHJvbWlzZVR5cGVcclxuICAgIC8qKlxyXG4gICAgICog6ZSZ6K+v5pel5b+XXHJcbiAgICAgKi9cclxuICAgIGVycm9yKHN0cjogc3RyaW5nKTogdm9pZFxyXG4gICAgLyoqXHJcbiAgICAgKiDplJnor6/ml6Xlv5fvvIjlvILmraXvvIlcclxuICAgICAqL1xyXG4gICAgZXJyb3JBc3luYyhzdHI6IHN0cmluZyk6IFByb21pc2VUeXBlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlvZPliY3pu5jorqTnmoTml6Xlv5forrDlvZXlmajvvIjpu5jorqTkuLp3aW5kb3cuY29uc29sZe+8iVxyXG4gKi9cclxubGV0IGRlZmF1bHRMb2dSZWNvcmRlcjogTG9nUmVjb3JkZXJUeXBlID0gbmV3IGNsYXNzIHtcclxuICAgIGxvZyhzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0cilcclxuICAgIH1cclxuICAgIGxvZ0FzeW5jKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyKVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgfVxyXG4gICAgd2FybihzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihzdHIpXHJcbiAgICB9XHJcbiAgICB3YXJuQXN5bmMoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oc3RyKVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgfVxyXG4gICAgZXJyb3Ioc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKHN0cilcclxuICAgIH1cclxuICAgIGVycm9yQXN5bmMoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKHN0cilcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOagueaNruaXpeW/l+e6p+WIq+i/lOWbnuWvueW6lOeahOaXpeW/l+iusOW9leWHveaVsFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TG9nUmVjb3JkZXIobGV2ZWw6IExldmVsVHlwZUVudW0sIGlzQXN5bmM6IGJvb2xlYW4pOiAoc3RyOiBzdHJpbmcpID0+IHZvaWQgfCAoKHN0cjogc3RyaW5nKSA9PiBQcm9taXNlVHlwZSkge1xyXG4gICAgaWYgKGlzQXN5bmMpIHtcclxuICAgICAgICBsZXQgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLmxvZ0FzeW5jXHJcbiAgICAgICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIExldmVsVHlwZUVudW0uaW5mbzpcclxuICAgICAgICAgICAgICAgIGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci5sb2dBc3luY1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTGV2ZWxUeXBlRW51bS53YXJuOlxyXG4gICAgICAgICAgICAgICAgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLndhcm5Bc3luY1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTGV2ZWxUeXBlRW51bS5lcnJvcjpcclxuICAgICAgICAgICAgICAgIGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci5lcnJvckFzeW5jXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZ1biBhcyBhbnlcclxuICAgIH1cclxuICAgIGxldCBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIubG9nXHJcbiAgICBzd2l0Y2ggKGxldmVsKSB7XHJcbiAgICAgICAgY2FzZSBMZXZlbFR5cGVFbnVtLmluZm86XHJcbiAgICAgICAgICAgIGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci5sb2dcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMZXZlbFR5cGVFbnVtLndhcm46XHJcbiAgICAgICAgICAgIGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci53YXJuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTGV2ZWxUeXBlRW51bS5lcnJvcjpcclxuICAgICAgICAgICAgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLmVycm9yXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1biBhcyBhbnlcclxufVxyXG5cclxuY2xhc3MgTG9nZ2VySGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICog5YaZ5pel5b+XXHJcbiAgICAgKiBAcGFyYW0gbGV2ZWwg5pel5b+X57qn5YirXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqL1xyXG4gICAgd3JpdGUobGV2ZWw6IExldmVsVHlwZUVudW0sIGNvbnRlbnQ6IENvbnRlbnRUeXBlKSB7XHJcbiAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdHIgPSAoaXNTdHJpbmcoY29udGVudCkgPyBjb250ZW50IDogSlNPTi5zdHJpbmdpZnkoY29udGVudCkpIGFzIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IGxvZ0Z1bmMgPSBnZXRMb2dSZWNvcmRlcihsZXZlbCwgZmFsc2UpXHJcbiAgICAgICAgbG9nRnVuYyhzdHIpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWGmeaXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICogQHBhcmFtIGxldmVsIOaXpeW/l+e6p+WIq1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHdyaXRlQXN5bmMobGV2ZWw6IExldmVsVHlwZUVudW0sIGNvbnRlbnQ6IENvbnRlbnRUeXBlKSB7XHJcbiAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdHIgPSAoaXNTdHJpbmcoY29udGVudCkgPyBjb250ZW50IDogSlNPTi5zdHJpbmdpZnkoY29udGVudCkpIGFzIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IGxvZ0Z1bmMgPSBnZXRMb2dSZWNvcmRlcihsZXZlbCwgdHJ1ZSlcclxuICAgICAgICByZXR1cm4gPFByb21pc2VUeXBlPihsb2dGdW5jKHN0cikgYXMgYW55KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ5LiA6Iis5pel5b+XXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqL1xyXG4gICAgaW5mbyhjb250ZW50OiBDb250ZW50VHlwZSkge1xyXG4gICAgICAgIHRoaXMud3JpdGUoTGV2ZWxUeXBlRW51bS5pbmZvLCBjb250ZW50KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ5LiA6Iis5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqL1xyXG4gICAgaW5mb0FzeW5jKGNvbnRlbnQ6IENvbnRlbnRUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVBc3luYyhMZXZlbFR5cGVFbnVtLmluZm8sIGNvbnRlbnQpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqICDlhpnorablkYrml6Xlv5dcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICovXHJcbiAgICB3YXJuKGNvbnRlbnQ6IENvbnRlbnRUeXBlKSB7XHJcbiAgICAgICAgdGhpcy53cml0ZShMZXZlbFR5cGVFbnVtLndhcm4sIGNvbnRlbnQpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqICDlhpnorablkYrml6Xlv5fvvIjlvILmraXvvIlcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICovXHJcbiAgICB3YXJuQXN5bmMoY29udGVudDogQ29udGVudFR5cGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZUFzeW5jKExldmVsVHlwZUVudW0ud2FybiwgY29udGVudClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogIOWGmemUmeivr+aXpeW/l1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKi9cclxuICAgIGVycm9yKGNvbnRlbnQ6IENvbnRlbnRUeXBlKSB7XHJcbiAgICAgICAgdGhpcy53cml0ZShMZXZlbFR5cGVFbnVtLmVycm9yLCBjb250ZW50KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ6ZSZ6K+v5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqL1xyXG4gICAgZXJyb3JBc3luYyhjb250ZW50OiBDb250ZW50VHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlQXN5bmMoTGV2ZWxUeXBlRW51bS5lcnJvciwgY29udGVudClcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOW9k+WJjeaXpeW/l+W3peWFt+exu1xyXG4gKi9cclxuZXhwb3J0IGxldCBsb2dnZXI6IExvZ2dlckhlbHBlciA9IG5ldyBMb2dnZXJIZWxwZXIoKVxyXG5cclxuLyoqXHJcbiAqIOmHjeaWsOiuvue9rum7mOiupOeahOaXpeW/l+iusOW9leWZqFxyXG4gKiBAcGFyYW0gbG9nUmVjb3JkZXIg5paw55qE5pel5b+X6K6w5b2V5Zmo77yI6buY6K6k55qE5pel5b+X6K6w5b2V5Zmo5Li6d2luZG93LmNvbnNvbGXvvIlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2dnZXJSZWNvcmRlcihsb2dSZWNvcmRlcjogTG9nUmVjb3JkZXJUeXBlKSB7XHJcbiAgICBkZWZhdWx0TG9nUmVjb3JkZXIgPSBsb2dSZWNvcmRlclxyXG59Il19