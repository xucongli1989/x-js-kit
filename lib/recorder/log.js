"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLoggerRecorder = setLoggerRecorder;
exports.logger = exports.LevelTypeEnum = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWNvcmRlci9sb2cudHMiXSwibmFtZXMiOlsiTGV2ZWxUeXBlRW51bSIsImRlZmF1bHRMb2dSZWNvcmRlciIsImNvbnRlbnQiLCJvcHRpb24iLCJjb25zb2xlIiwiaW5mbyIsIlByb21pc2UiLCJyZXNvbHZlIiwid2FybiIsImVycm9yIiwiZ2V0TG9nUmVjb3JkZXIiLCJsZXZlbCIsImlzQXN5bmMiLCJmdW4iLCJpbmZvQXN5bmMiLCJ3YXJuQXN5bmMiLCJlcnJvckFzeW5jIiwiTG9nZ2VySGVscGVyIiwibG9nRnVuYyIsIndyaXRlIiwid3JpdGVBc3luYyIsImxvZ2dlciIsInNldExvZ2dlclJlY29yZGVyIiwibG9nUmVjb3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBS1lBLGE7QUFNWjs7Ozs7O1dBTllBLGE7QUFBQUEsRUFBQUEsYTtBQUFBQSxFQUFBQSxhO0FBQUFBLEVBQUFBLGE7R0FBQUEsYSw2QkFBQUEsYTs7QUF5Q1o7OztBQUdBLElBQUlDLGtCQUFtQyxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEseUJBQ2pDQyxPQURpQyxFQUNuQkMsTUFEbUIsRUFDTTtBQUN4Q0MsTUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWFILE9BQWIsRUFBc0JDLE1BQXRCO0FBQ0g7QUFIcUM7QUFBQTtBQUFBLDhCQUk1QkQsT0FKNEIsRUFJZEMsTUFKYyxFQUlXO0FBQzdDQyxNQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYUgsT0FBYixFQUFzQkMsTUFBdEI7QUFDQSxhQUFPRyxPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNIO0FBUHFDO0FBQUE7QUFBQSx5QkFRakNMLE9BUmlDLEVBUW5CQyxNQVJtQixFQVFNO0FBQ3hDQyxNQUFBQSxPQUFPLENBQUNJLElBQVIsQ0FBYU4sT0FBYixFQUFzQkMsTUFBdEI7QUFDSDtBQVZxQztBQUFBO0FBQUEsOEJBVzVCRCxPQVg0QixFQVdkQyxNQVhjLEVBV1c7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QS9CLEVBQXdDQyxNQUF4QztBQUNIO0FBQ0Q7Ozs7Ozs7OzhCQUtVRCxPLEVBQTRDO0FBQUEsVUFBOUJDLE1BQThCLHVFQUFKLEVBQUk7QUFDbEQsYUFBTyxLQUFLaUIsVUFBTCxDQUFnQnBCLGFBQWEsQ0FBQ1EsSUFBOUIsRUFBb0NOLE9BQXBDLEVBQTZDQyxNQUE3QyxDQUFQO0FBQ0g7QUFDRDs7Ozs7Ozs7MEJBS01ELE8sRUFBNEM7QUFBQSxVQUE5QkMsTUFBOEIsdUVBQUosRUFBSTtBQUM5QyxXQUFLZ0IsS0FBTCxDQUFXbkIsYUFBYSxDQUFDUyxLQUF6QixFQUFnQ1AsT0FBaEMsRUFBeUNDLE1BQXpDO0FBQ0g7QUFDRDs7Ozs7Ozs7K0JBS1dELE8sRUFBNEM7QUFBQSxVQUE5QkMsTUFBOEIsdUVBQUosRUFBSTtBQUNuRCxhQUFPLEtBQUtpQixVQUFMLENBQWdCcEIsYUFBYSxDQUFDUyxLQUE5QixFQUFxQ1AsT0FBckMsRUFBOENDLE1BQTlDLENBQVA7QUFDSDs7Ozs7QUFHTDs7Ozs7QUFHTyxJQUFJa0IsTUFBb0IsR0FBRyxJQUFJSixZQUFKLEVBQTNCO0FBRVA7Ozs7Ozs7QUFJTyxTQUFTSyxpQkFBVCxDQUEyQkMsV0FBM0IsRUFBeUQ7QUFDNUR0QixFQUFBQSxrQkFBa0IsR0FBR3NCLFdBQXJCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbnlLZXlWYWx1ZVR5cGUgfSBmcm9tIFwiLi4vZGVjbGFyYXRpb24vY29tbW9uXCJcclxuXHJcbi8qKlxyXG4gKiDml6Xlv5fnuqfliKvnsbvlnotcclxuICovXHJcbmV4cG9ydCBlbnVtIExldmVsVHlwZUVudW0ge1xyXG4gICAgXCJpbmZvXCIgPSBcImluZm9cIixcclxuICAgIFwid2FyblwiID0gXCJ3YXJuXCIsXHJcbiAgICBcImVycm9yXCIgPSBcImVycm9yXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIOW8guatpeaXpeW/l+i/lOWbnuexu+Wei1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgUHJvbWlzZVR5cGUgPSBQcm9taXNlPHZvaWQ+IHwgUHJvbWlzZTx7fT5cclxuXHJcbi8qKlxyXG4gKiDml6Xlv5forrDlvZXlmajmjqXlj6NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9nUmVjb3JkZXJUeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICog5LiA6Iis5pel5b+XXHJcbiAgICAgKi9cclxuICAgIGluZm8oY29udGVudDogYW55LCBvcHRpb246IEFueUtleVZhbHVlVHlwZSk6IHZvaWRcclxuICAgIC8qKlxyXG4gICAgICog5LiA6Iis5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKi9cclxuICAgIGluZm9Bc3luYyhjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKTogUHJvbWlzZVR5cGVcclxuICAgIC8qKlxyXG4gICAgICog6K2m5ZGK5pel5b+XXHJcbiAgICAgKi9cclxuICAgIHdhcm4oY29udGVudDogYW55LCBvcHRpb246IEFueUtleVZhbHVlVHlwZSk6IHZvaWRcclxuICAgIC8qKlxyXG4gICAgICog6K2m5ZGK5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKi9cclxuICAgIHdhcm5Bc3luYyhjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKTogUHJvbWlzZVR5cGVcclxuICAgIC8qKlxyXG4gICAgICog6ZSZ6K+v5pel5b+XXHJcbiAgICAgKi9cclxuICAgIGVycm9yKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpOiB2b2lkXHJcbiAgICAvKipcclxuICAgICAqIOmUmeivr+aXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICovXHJcbiAgICBlcnJvckFzeW5jKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpOiBQcm9taXNlVHlwZVxyXG59XHJcblxyXG4vKipcclxuICog5b2T5YmN6buY6K6k55qE5pel5b+X6K6w5b2V5Zmo77yI6buY6K6k5Li6d2luZG93LmNvbnNvbGXvvIlcclxuICovXHJcbmxldCBkZWZhdWx0TG9nUmVjb3JkZXI6IExvZ1JlY29yZGVyVHlwZSA9IG5ldyBjbGFzcyB7XHJcbiAgICBpbmZvKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oY29udGVudCwgb3B0aW9uKVxyXG4gICAgfVxyXG4gICAgaW5mb0FzeW5jKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oY29udGVudCwgb3B0aW9uKVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgfVxyXG4gICAgd2Fybihjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGNvbnRlbnQsIG9wdGlvbilcclxuICAgIH1cclxuICAgIHdhcm5Bc3luYyhjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGNvbnRlbnQsIG9wdGlvbilcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcclxuICAgIH1cclxuICAgIGVycm9yKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGNvbnRlbnQsIG9wdGlvbilcclxuICAgIH1cclxuICAgIGVycm9yQXN5bmMoY29udGVudDogYW55LCBvcHRpb246IEFueUtleVZhbHVlVHlwZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoY29udGVudCwgb3B0aW9uKVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5qC55o2u5pel5b+X57qn5Yir6L+U5Zue5a+55bqU55qE5pel5b+X6K6w5b2V5Ye95pWwXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRMb2dSZWNvcmRlcihsZXZlbDogTGV2ZWxUeXBlRW51bSwgaXNBc3luYzogYm9vbGVhbik6IChvYmo6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpID0+IHZvaWQgfCAoKG9iajogYW55LCBvcHRpb246IEFueUtleVZhbHVlVHlwZSkgPT4gUHJvbWlzZVR5cGUpIHtcclxuICAgIGlmIChpc0FzeW5jKSB7XHJcbiAgICAgICAgbGV0IGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci5pbmZvQXN5bmNcclxuICAgICAgICBzd2l0Y2ggKGxldmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTGV2ZWxUeXBlRW51bS5pbmZvOlxyXG4gICAgICAgICAgICAgICAgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLmluZm9Bc3luY1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTGV2ZWxUeXBlRW51bS53YXJuOlxyXG4gICAgICAgICAgICAgICAgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLndhcm5Bc3luY1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTGV2ZWxUeXBlRW51bS5lcnJvcjpcclxuICAgICAgICAgICAgICAgIGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci5lcnJvckFzeW5jXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZ1biBhcyBhbnlcclxuICAgIH1cclxuICAgIGxldCBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIuaW5mb1xyXG4gICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgIGNhc2UgTGV2ZWxUeXBlRW51bS5pbmZvOlxyXG4gICAgICAgICAgICBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIuaW5mb1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExldmVsVHlwZUVudW0ud2FybjpcclxuICAgICAgICAgICAgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLndhcm5cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMZXZlbFR5cGVFbnVtLmVycm9yOlxyXG4gICAgICAgICAgICBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIuZXJyb3JcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuIGFzIGFueVxyXG59XHJcblxyXG5jbGFzcyBMb2dnZXJIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlhpnml6Xlv5dcclxuICAgICAqIEBwYXJhbSBsZXZlbCDml6Xlv5fnuqfliKtcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICogQHBhcmFtIG9wdGlvbiDoh6rlrprkuYnpgInpoblcclxuICAgICAqL1xyXG4gICAgd3JpdGUobGV2ZWw6IExldmVsVHlwZUVudW0sIGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IGxvZ0Z1bmMgPSBnZXRMb2dSZWNvcmRlcihsZXZlbCwgZmFsc2UpXHJcbiAgICAgICAgbG9nRnVuYyhjb250ZW50LCBvcHRpb24pXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWGmeaXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICogQHBhcmFtIGxldmVsIOaXpeW/l+e6p+WIq1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uIOiHquWumuS5iemAiemhuVxyXG4gICAgICovXHJcbiAgICB3cml0ZUFzeW5jKGxldmVsOiBMZXZlbFR5cGVFbnVtLCBjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlID0ge30pIHtcclxuICAgICAgICBjb25zdCBsb2dGdW5jID0gZ2V0TG9nUmVjb3JkZXIobGV2ZWwsIHRydWUpXHJcbiAgICAgICAgcmV0dXJuIDxQcm9taXNlVHlwZT4obG9nRnVuYyhjb250ZW50LCBvcHRpb24pIGFzIGFueSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogIOWGmeS4gOiIrOaXpeW/l1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uIOiHquWumuS5iemAiemhuVxyXG4gICAgICovXHJcbiAgICBpbmZvKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUgPSB7fSkge1xyXG4gICAgICAgIHRoaXMud3JpdGUoTGV2ZWxUeXBlRW51bS5pbmZvLCBjb250ZW50LCBvcHRpb24pXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqICDlhpnkuIDoiKzml6Xlv5fvvIjlvILmraXvvIlcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICogQHBhcmFtIG9wdGlvbiDoh6rlrprkuYnpgInpoblcclxuICAgICAqL1xyXG4gICAgaW5mb0FzeW5jKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlQXN5bmMoTGV2ZWxUeXBlRW51bS5pbmZvLCBjb250ZW50LCBvcHRpb24pXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqICDlhpnorablkYrml6Xlv5dcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICogQHBhcmFtIG9wdGlvbiDoh6rlrprkuYnpgInpoblcclxuICAgICAqL1xyXG4gICAgd2Fybihjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlID0ge30pIHtcclxuICAgICAgICB0aGlzLndyaXRlKExldmVsVHlwZUVudW0ud2FybiwgY29udGVudCwgb3B0aW9uKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ6K2m5ZGK5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqIEBwYXJhbSBvcHRpb24g6Ieq5a6a5LmJ6YCJ6aG5XHJcbiAgICAgKi9cclxuICAgIHdhcm5Bc3luYyhjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlID0ge30pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZUFzeW5jKExldmVsVHlwZUVudW0ud2FybiwgY29udGVudCwgb3B0aW9uKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ6ZSZ6K+v5pel5b+XXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqIEBwYXJhbSBvcHRpb24g6Ieq5a6a5LmJ6YCJ6aG5XHJcbiAgICAgKi9cclxuICAgIGVycm9yKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUgPSB7fSkge1xyXG4gICAgICAgIHRoaXMud3JpdGUoTGV2ZWxUeXBlRW51bS5lcnJvciwgY29udGVudCwgb3B0aW9uKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ6ZSZ6K+v5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqIEBwYXJhbSBvcHRpb24g6Ieq5a6a5LmJ6YCJ6aG5XHJcbiAgICAgKi9cclxuICAgIGVycm9yQXN5bmMoY29udGVudDogYW55LCBvcHRpb246IEFueUtleVZhbHVlVHlwZSA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVBc3luYyhMZXZlbFR5cGVFbnVtLmVycm9yLCBjb250ZW50LCBvcHRpb24pXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlvZPliY3ml6Xlv5flt6XlhbfnsbtcclxuICovXHJcbmV4cG9ydCBsZXQgbG9nZ2VyOiBMb2dnZXJIZWxwZXIgPSBuZXcgTG9nZ2VySGVscGVyKClcclxuXHJcbi8qKlxyXG4gKiDph43mlrDorr7nva7pu5jorqTnmoTml6Xlv5forrDlvZXlmahcclxuICogQHBhcmFtIGxvZ1JlY29yZGVyIOaWsOeahOaXpeW/l+iusOW9leWZqO+8iOm7mOiupOeahOaXpeW/l+iusOW9leWZqOS4undpbmRvdy5jb25zb2xl77yJXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9nZ2VyUmVjb3JkZXIobG9nUmVjb3JkZXI6IExvZ1JlY29yZGVyVHlwZSkge1xyXG4gICAgZGVmYXVsdExvZ1JlY29yZGVyID0gbG9nUmVjb3JkZXJcclxufSJdfQ==