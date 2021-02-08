"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLoggerRecorder = setLoggerRecorder;
exports.logger = exports.LevelTypeEnum = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable class-methods-use-this */

/**
 * 日志级别类型
 */
var LevelTypeEnum;
/**
 * 异步日志返回类型
 */

exports.LevelTypeEnum = LevelTypeEnum;

(function (LevelTypeEnum) {
  LevelTypeEnum["info"] = "info";
  LevelTypeEnum["warn"] = "warn";
  LevelTypeEnum["error"] = "error";
})(LevelTypeEnum || (exports.LevelTypeEnum = LevelTypeEnum = {}));

var DefaultLogRecorderClass = /*#__PURE__*/function () {
  function DefaultLogRecorderClass() {
    _classCallCheck(this, DefaultLogRecorderClass);
  }

  _createClass(DefaultLogRecorderClass, [{
    key: "info",
    value: function info(content, option) {
      console.info(content, option);
    }
  }, {
    key: "infoAsync",
    value: function infoAsync(content, option) {
      console.info(content, option);
      return Promise.resolve();
    }
  }, {
    key: "warn",
    value: function warn(content, option) {
      console.warn(content, option);
    }
  }, {
    key: "warnAsync",
    value: function warnAsync(content, option) {
      console.warn(content, option);
      return Promise.resolve();
    }
  }, {
    key: "error",
    value: function error(content, option) {
      console.error(content, option);
    }
  }, {
    key: "errorAsync",
    value: function errorAsync(content, option) {
      console.error(content, option);
      return Promise.resolve();
    }
  }]);

  return DefaultLogRecorderClass;
}();
/**
 * 当前默认的日志记录器（默认为window.console）
 */


var defaultLogRecorder = new DefaultLogRecorderClass();
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

var LoggerHelper = /*#__PURE__*/function () {
  function LoggerHelper() {
    _classCallCheck(this, LoggerHelper);
  }

  _createClass(LoggerHelper, [{
    key: "write",

    /**
     * 写日志
     * @param level 日志级别
     * @param content 日志内容
     * @param option 自定义选项
     */
    value: function write(level, content) {
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var logFunc = getLogRecorder(level, false);
      logFunc(content, option);
    }
    /**
     * 写日志（异步）
     * @param level 日志级别
     * @param content 日志内容
     * @param option 自定义选项
     */

  }, {
    key: "writeAsync",
    value: function writeAsync(level, content) {
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var logFunc = getLogRecorder(level, true);
      return logFunc(content, option);
    }
    /**
     *  写一般日志
     * @param content 日志内容
     * @param option 自定义选项
     */

  }, {
    key: "info",
    value: function info(content) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.write(LevelTypeEnum.info, content, option);
    }
    /**
     *  写一般日志（异步）
     * @param content 日志内容
     * @param option 自定义选项
     */

  }, {
    key: "infoAsync",
    value: function infoAsync(content) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.writeAsync(LevelTypeEnum.info, content, option);
    }
    /**
     *  写警告日志
     * @param content 日志内容
     * @param option 自定义选项
     */

  }, {
    key: "warn",
    value: function warn(content) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.write(LevelTypeEnum.warn, content, option);
    }
    /**
     *  写警告日志（异步）
     * @param content 日志内容
     * @param option 自定义选项
     */

  }, {
    key: "warnAsync",
    value: function warnAsync(content) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.writeAsync(LevelTypeEnum.warn, content, option);
    }
    /**
     *  写错误日志
     * @param content 日志内容
     * @param option 自定义选项
     */

  }, {
    key: "error",
    value: function error(content) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.write(LevelTypeEnum.error, content, option);
    }
    /**
     *  写错误日志（异步）
     * @param content 日志内容
     * @param option 自定义选项
     */

  }, {
    key: "errorAsync",
    value: function errorAsync(content) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.writeAsync(LevelTypeEnum.error, content, option);
    }
  }]);

  return LoggerHelper;
}();
/**
 * 当前日志工具类，把类型为【信息、警告、错误】的日志统一起来。
 * 默认的记录器为全局的console，也可以自定义日志记录器，只需要实现相应的接口即可。
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWNvcmRlci9sb2cudHMiXSwibmFtZXMiOlsiTGV2ZWxUeXBlRW51bSIsIkRlZmF1bHRMb2dSZWNvcmRlckNsYXNzIiwiY29udGVudCIsIm9wdGlvbiIsImNvbnNvbGUiLCJpbmZvIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ3YXJuIiwiZXJyb3IiLCJkZWZhdWx0TG9nUmVjb3JkZXIiLCJnZXRMb2dSZWNvcmRlciIsImxldmVsIiwiaXNBc3luYyIsImZ1biIsImluZm9Bc3luYyIsIndhcm5Bc3luYyIsImVycm9yQXN5bmMiLCJMb2dnZXJIZWxwZXIiLCJsb2dGdW5jIiwid3JpdGUiLCJ3cml0ZUFzeW5jIiwibG9nZ2VyIiwic2V0TG9nZ2VyUmVjb3JkZXIiLCJsb2dSZWNvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQTtBQUNBO0FBQ0E7SUFDWUEsYTtBQU1aO0FBQ0E7QUFDQTs7OztXQVJZQSxhO0FBQUFBLEVBQUFBLGE7QUFBQUEsRUFBQUEsYTtBQUFBQSxFQUFBQSxhO0dBQUFBLGEsNkJBQUFBLGE7O0lBeUNOQyx1Qjs7Ozs7Ozt5QkFDR0MsTyxFQUFjQyxNLEVBQXlCO0FBQ3hDQyxNQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYUgsT0FBYixFQUFzQkMsTUFBdEI7QUFDSDs7OzhCQUNTRCxPLEVBQWNDLE0sRUFBeUI7QUFDN0NDLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhSCxPQUFiLEVBQXNCQyxNQUF0QjtBQUNBLGFBQU9HLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQ0g7Ozt5QkFDSUwsTyxFQUFjQyxNLEVBQXlCO0FBQ3hDQyxNQUFBQSxPQUFPLENBQUNJLElBQVIsQ0FBYU4sT0FBYixFQUFzQkMsTUFBdEI7QUFDSDs7OzhCQUNTRCxPLEVBQWNDLE0sRUFBeUI7QUFDN0NDLE1BQUFBLE9BQU8sQ0FBQ0ksSUFBUixDQUFhTixPQUFiLEVBQXNCQyxNQUF0QjtBQUNBLGFBQU9HLE9BQU8sQ0FBQ0Ms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RUFBK0JOLE9BQS9CLEVBQXdDQyxNQUF4QztBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7Ozs4QkFDY0QsTyxFQUE0QztBQUFBLFVBQTlCQyxNQUE4Qix1RUFBSixFQUFJO0FBQ2xELGFBQU8sS0FBS2tCLFVBQUwsQ0FBZ0JyQixhQUFhLENBQUNRLElBQTlCLEVBQW9DTixPQUFwQyxFQUE2Q0MsTUFBN0MsQ0FBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7OzswQkFDVUQsTyxFQUE0QztBQUFBLFVBQTlCQyxNQUE4Qix1RUFBSixFQUFJO0FBQzlDLFdBQUtpQixLQUFMLENBQVdwQixhQUFhLENBQUNTLEtBQXpCLEVBQWdDUCxPQUFoQyxFQUF5Q0MsTUFBekM7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7K0JBQ2VELE8sRUFBNEM7QUFBQSxVQUE5QkMsTUFBOEIsdUVBQUosRUFBSTtBQUNuRCxhQUFPLEtBQUtrQixVQUFMLENBQWdCckIsYUFBYSxDQUFDUyxLQUE5QixFQUFxQ1AsT0FBckMsRUFBOENDLE1BQTlDLENBQVA7QUFDSDs7Ozs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTW1CLE1BQW9CLEdBQUcsSUFBSUosWUFBSixFQUE3QjtBQUVQO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sU0FBU0ssaUJBQVQsQ0FBMkJDLFdBQTNCLEVBQXlEO0FBQzVEZCxFQUFBQSxrQkFBa0IsR0FBR2MsV0FBckI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cclxuaW1wb3J0IHsgQW55S2V5VmFsdWVUeXBlIH0gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbW1vblwiXHJcblxyXG4vKipcclxuICog5pel5b+X57qn5Yir57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgZW51bSBMZXZlbFR5cGVFbnVtIHtcclxuICAgIFwiaW5mb1wiID0gXCJpbmZvXCIsXHJcbiAgICBcIndhcm5cIiA9IFwid2FyblwiLFxyXG4gICAgXCJlcnJvclwiID0gXCJlcnJvclwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlvILmraXml6Xlv5fov5Tlm57nsbvlnotcclxuICovXHJcbmV4cG9ydCB0eXBlIFByb21pc2VUeXBlID0gUHJvbWlzZTx2b2lkPiB8IFByb21pc2U8dW5rbm93bj5cclxuXHJcbi8qKlxyXG4gKiDml6Xlv5forrDlvZXlmajmjqXlj6NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9nUmVjb3JkZXJUeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICog5LiA6Iis5pel5b+XXHJcbiAgICAgKi9cclxuICAgIGluZm8oY29udGVudDogYW55LCBvcHRpb246IEFueUtleVZhbHVlVHlwZSk6IHZvaWRcclxuICAgIC8qKlxyXG4gICAgICog5LiA6Iis5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKi9cclxuICAgIGluZm9Bc3luYyhjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKTogUHJvbWlzZVR5cGVcclxuICAgIC8qKlxyXG4gICAgICog6K2m5ZGK5pel5b+XXHJcbiAgICAgKi9cclxuICAgIHdhcm4oY29udGVudDogYW55LCBvcHRpb246IEFueUtleVZhbHVlVHlwZSk6IHZvaWRcclxuICAgIC8qKlxyXG4gICAgICog6K2m5ZGK5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKi9cclxuICAgIHdhcm5Bc3luYyhjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKTogUHJvbWlzZVR5cGVcclxuICAgIC8qKlxyXG4gICAgICog6ZSZ6K+v5pel5b+XXHJcbiAgICAgKi9cclxuICAgIGVycm9yKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpOiB2b2lkXHJcbiAgICAvKipcclxuICAgICAqIOmUmeivr+aXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICovXHJcbiAgICBlcnJvckFzeW5jKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpOiBQcm9taXNlVHlwZVxyXG59XHJcblxyXG5jbGFzcyBEZWZhdWx0TG9nUmVjb3JkZXJDbGFzcyB7XHJcbiAgICBpbmZvKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oY29udGVudCwgb3B0aW9uKVxyXG4gICAgfVxyXG4gICAgaW5mb0FzeW5jKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oY29udGVudCwgb3B0aW9uKVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgfVxyXG4gICAgd2Fybihjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGNvbnRlbnQsIG9wdGlvbilcclxuICAgIH1cclxuICAgIHdhcm5Bc3luYyhjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGNvbnRlbnQsIG9wdGlvbilcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcclxuICAgIH1cclxuICAgIGVycm9yKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGNvbnRlbnQsIG9wdGlvbilcclxuICAgIH1cclxuICAgIGVycm9yQXN5bmMoY29udGVudDogYW55LCBvcHRpb246IEFueUtleVZhbHVlVHlwZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoY29udGVudCwgb3B0aW9uKVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5b2T5YmN6buY6K6k55qE5pel5b+X6K6w5b2V5Zmo77yI6buY6K6k5Li6d2luZG93LmNvbnNvbGXvvIlcclxuICovXHJcbmxldCBkZWZhdWx0TG9nUmVjb3JkZXI6IExvZ1JlY29yZGVyVHlwZSA9IG5ldyBEZWZhdWx0TG9nUmVjb3JkZXJDbGFzcygpXHJcblxyXG4vKipcclxuICog5qC55o2u5pel5b+X57qn5Yir6L+U5Zue5a+55bqU55qE5pel5b+X6K6w5b2V5Ye95pWwXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRMb2dSZWNvcmRlcihsZXZlbDogTGV2ZWxUeXBlRW51bSwgaXNBc3luYzogYm9vbGVhbik6IChvYmo6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpID0+IHZvaWQgfCAoKG9iajogYW55LCBvcHRpb246IEFueUtleVZhbHVlVHlwZSkgPT4gUHJvbWlzZVR5cGUpIHtcclxuICAgIGlmIChpc0FzeW5jKSB7XHJcbiAgICAgICAgbGV0IGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci5pbmZvQXN5bmNcclxuICAgICAgICBzd2l0Y2ggKGxldmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTGV2ZWxUeXBlRW51bS5pbmZvOlxyXG4gICAgICAgICAgICAgICAgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLmluZm9Bc3luY1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBMZXZlbFR5cGVFbnVtLndhcm46XHJcbiAgICAgICAgICAgICAgICBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIud2FybkFzeW5jXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIExldmVsVHlwZUVudW0uZXJyb3I6XHJcbiAgICAgICAgICAgICAgICBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIuZXJyb3JBc3luY1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZ1biBhcyBhbnlcclxuICAgIH1cclxuICAgIGxldCBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIuaW5mb1xyXG4gICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgIGNhc2UgTGV2ZWxUeXBlRW51bS5pbmZvOlxyXG4gICAgICAgICAgICBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIuaW5mb1xyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgTGV2ZWxUeXBlRW51bS53YXJuOlxyXG4gICAgICAgICAgICBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIud2FyblxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgTGV2ZWxUeXBlRW51bS5lcnJvcjpcclxuICAgICAgICAgICAgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLmVycm9yXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuIGFzIGFueVxyXG59XHJcblxyXG5jbGFzcyBMb2dnZXJIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlhpnml6Xlv5dcclxuICAgICAqIEBwYXJhbSBsZXZlbCDml6Xlv5fnuqfliKtcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICogQHBhcmFtIG9wdGlvbiDoh6rlrprkuYnpgInpoblcclxuICAgICAqL1xyXG4gICAgd3JpdGUobGV2ZWw6IExldmVsVHlwZUVudW0sIGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IGxvZ0Z1bmMgPSBnZXRMb2dSZWNvcmRlcihsZXZlbCwgZmFsc2UpXHJcbiAgICAgICAgbG9nRnVuYyhjb250ZW50LCBvcHRpb24pXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWGmeaXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICogQHBhcmFtIGxldmVsIOaXpeW/l+e6p+WIq1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uIOiHquWumuS5iemAiemhuVxyXG4gICAgICovXHJcbiAgICB3cml0ZUFzeW5jKGxldmVsOiBMZXZlbFR5cGVFbnVtLCBjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlID0ge30pIHtcclxuICAgICAgICBjb25zdCBsb2dGdW5jID0gZ2V0TG9nUmVjb3JkZXIobGV2ZWwsIHRydWUpXHJcbiAgICAgICAgcmV0dXJuIDxQcm9taXNlVHlwZT4obG9nRnVuYyhjb250ZW50LCBvcHRpb24pIGFzIGFueSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogIOWGmeS4gOiIrOaXpeW/l1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uIOiHquWumuS5iemAiemhuVxyXG4gICAgICovXHJcbiAgICBpbmZvKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUgPSB7fSkge1xyXG4gICAgICAgIHRoaXMud3JpdGUoTGV2ZWxUeXBlRW51bS5pbmZvLCBjb250ZW50LCBvcHRpb24pXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqICDlhpnkuIDoiKzml6Xlv5fvvIjlvILmraXvvIlcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICogQHBhcmFtIG9wdGlvbiDoh6rlrprkuYnpgInpoblcclxuICAgICAqL1xyXG4gICAgaW5mb0FzeW5jKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlQXN5bmMoTGV2ZWxUeXBlRW51bS5pbmZvLCBjb250ZW50LCBvcHRpb24pXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqICDlhpnorablkYrml6Xlv5dcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICogQHBhcmFtIG9wdGlvbiDoh6rlrprkuYnpgInpoblcclxuICAgICAqL1xyXG4gICAgd2Fybihjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlID0ge30pIHtcclxuICAgICAgICB0aGlzLndyaXRlKExldmVsVHlwZUVudW0ud2FybiwgY29udGVudCwgb3B0aW9uKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ6K2m5ZGK5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqIEBwYXJhbSBvcHRpb24g6Ieq5a6a5LmJ6YCJ6aG5XHJcbiAgICAgKi9cclxuICAgIHdhcm5Bc3luYyhjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlID0ge30pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZUFzeW5jKExldmVsVHlwZUVudW0ud2FybiwgY29udGVudCwgb3B0aW9uKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ6ZSZ6K+v5pel5b+XXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqIEBwYXJhbSBvcHRpb24g6Ieq5a6a5LmJ6YCJ6aG5XHJcbiAgICAgKi9cclxuICAgIGVycm9yKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUgPSB7fSkge1xyXG4gICAgICAgIHRoaXMud3JpdGUoTGV2ZWxUeXBlRW51bS5lcnJvciwgY29udGVudCwgb3B0aW9uKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ6ZSZ6K+v5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqIEBwYXJhbSBvcHRpb24g6Ieq5a6a5LmJ6YCJ6aG5XHJcbiAgICAgKi9cclxuICAgIGVycm9yQXN5bmMoY29udGVudDogYW55LCBvcHRpb246IEFueUtleVZhbHVlVHlwZSA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVBc3luYyhMZXZlbFR5cGVFbnVtLmVycm9yLCBjb250ZW50LCBvcHRpb24pXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlvZPliY3ml6Xlv5flt6XlhbfnsbvvvIzmiornsbvlnovkuLrjgJDkv6Hmga/jgIHorablkYrjgIHplJnor6/jgJHnmoTml6Xlv5fnu5/kuIDotbfmnaXjgIJcclxuICog6buY6K6k55qE6K6w5b2V5Zmo5Li65YWo5bGA55qEY29uc29sZe+8jOS5n+WPr+S7peiHquWumuS5ieaXpeW/l+iusOW9leWZqO+8jOWPqumcgOimgeWunueOsOebuOW6lOeahOaOpeWPo+WNs+WPr+OAglxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvZ2dlcjogTG9nZ2VySGVscGVyID0gbmV3IExvZ2dlckhlbHBlcigpXHJcblxyXG4vKipcclxuICog6YeN5paw6K6+572u6buY6K6k55qE5pel5b+X6K6w5b2V5ZmoXHJcbiAqIEBwYXJhbSBsb2dSZWNvcmRlciDmlrDnmoTml6Xlv5forrDlvZXlmajvvIjpu5jorqTnmoTml6Xlv5forrDlvZXlmajkuLp3aW5kb3cuY29uc29sZe+8iVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldExvZ2dlclJlY29yZGVyKGxvZ1JlY29yZGVyOiBMb2dSZWNvcmRlclR5cGUpIHtcclxuICAgIGRlZmF1bHRMb2dSZWNvcmRlciA9IGxvZ1JlY29yZGVyXHJcbn1cclxuIl19