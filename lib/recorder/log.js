"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLoggerRecorder = setLoggerRecorder;
exports.logger = exports.LevelTypeEnum = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWNvcmRlci9sb2cudHMiXSwibmFtZXMiOlsiTGV2ZWxUeXBlRW51bSIsIkRlZmF1bHRMb2dSZWNvcmRlckNsYXNzIiwiY29udGVudCIsIm9wdGlvbiIsImNvbnNvbGUiLCJpbmZvIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ3YXJuIiwiZXJyb3IiLCJkZWZhdWx0TG9nUmVjb3JkZXIiLCJnZXRMb2dSZWNvcmRlciIsImxldmVsIiwiaXNBc3luYyIsImZ1biIsImluZm9Bc3luYyIsIndhcm5Bc3luYyIsImVycm9yQXN5bmMiLCJMb2dnZXJIZWxwZXIiLCJsb2dGdW5jIiwid3JpdGUiLCJ3cml0ZUFzeW5jIiwibG9nZ2VyIiwic2V0TG9nZ2VyUmVjb3JkZXIiLCJsb2dSZWNvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR1lBLGE7QUFNWjs7Ozs7O1dBTllBLGE7QUFBQUEsRUFBQUEsYTtBQUFBQSxFQUFBQSxhO0FBQUFBLEVBQUFBLGE7R0FBQUEsYSw2QkFBQUEsYTs7SUF5Q05DLHVCOzs7Ozs7O3lCQUNHQyxPLEVBQWNDLE0sRUFBeUI7QUFDeENDLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhSCxPQUFiLEVBQXNCQyxNQUF0QjtBQUNIOzs7OEJBQ1NELE8sRUFBY0MsTSxFQUF5QjtBQUM3Q0MsTUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWFILE9BQWIsRUFBc0JDLE1BQXRCO0FBQ0EsYUFBT0csT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDSDs7O3lCQUNJTCxPLEVBQWNDLE0sRUFBeUI7QUFDeENDLE1BQUFBLE9BQU8sQ0FBQ0ksSUFBUixDQUFhTixPQUFiLEVBQXNCQyxNQUF0QjtBQUNIOzs7OEJBQ1NELE8sRUFBY0MsTSxFQUF5QjtBQUM3Q0MsTUFBQUEsT0FBTyxDQUFDSSxJQUFSLENBQWFOLE9BQWIsRUFBc0JDLE1BQXRCO0FBQ0EsYUFBT0csT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDSDs7OzBCQUNLTCxPLEVBQWNDLE0sRUFBeUI7QUFDekNDLE1BQUFBLE9BQU8sQ0FBQ0ssS0FBUixDQUFjUCxPQUFkLEVBQXVCQyxNQUF2QjtBQUNIOzs7K0JBQ1VELE8sRUFBY0MsTSxFQUF5QjtBQUM5Q0MsTUFBQUEsT0FBTyxDQUFDSyxLQUFSLENBQWNQLE9BQWQsRUFBdUJDLE1BQXZCO0FBQ0EsYUFBT0csT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDSDs7Ozs7QUFHTDs7Ozs7QUFHQSxJQUFJRyxrQkFBbUMsR0FBRyxJQUFJVCx1QkFBSixFQUExQztBQUVBOzs7O0FBR0EsU0FBU1UsY0FBVCxDQUF3QkMsS0FBeEIsRUFBOENDLE9BQTlDLEVBQW9LO0FBQ2hLLE1BQUlBLE9BQUosRUFBYTtBQUNULFFBQUlDLElBQUcsR0FBR0osa0JBQWtCLENBQUNLLFNBQTdCOztBQUNBLFlBQVFILEtBQVI7QUFDSSxXQUFLWixhQUFhLENBQUNLLElBQW5CO0FBQ0lTLFFBQUFBLElBQUcsR0FBR0osa0JBQWtCLENBQUNLLFNBQXpCO0FBQ0E7O0FBQ0osV0FBS2YsYUFBYSxDQUFDUSxJQUFuQjtBQUNJTSxRQUFBQSxJQUFHLEdBQUdKLGtCQUFrQixDQUFDTSxTQUF6QjtBQUNBOztBQUNKLFdBQUtoQixhQUFhLENBQUNTLEtBQW5CO0FBQ0lLLFFBQUFBLElBQUcsR0FBR0osa0JBQWtCLENBQUNPLFVBQXpCO0FBQ0E7QUFUUjs7QUFXQSxXQUFPSCxJQUFQO0FBQ0g7O0FBQ0QsTUFBSUEsR0FBRyxHQUFHSixrQkFBa0IsQ0FBQ0wsSUFBN0I7O0FBQ0EsVUFBUU8sS0FBUjtBQUNJLFNBQUtaLGFBQWEsQ0FBQ0ssSUFBbkI7QUFDSVMsTUFBQUEsR0FBRyxHQUFHSixrQkFBa0IsQ0FBQ0wsSUFBekI7QUFDQTs7QUFDSixTQUFLTCxhQUFhLENBQUNRLElBQW5CO0FBQ0lNLE1BQUFBLEdBQUcsR0FBR0osa0JBQWtCLENBQUNGLElBQXpCO0FBQ0E7O0FBQ0osU0FBS1IsYUFBYSxDQUFDUyxLQUFuQjtBQUNJSyxNQUFBQSxHQUFHLEdBQUdKLGtCQUFrQixDQUFDRCxLQUF6QjtBQUNBO0FBVFI7O0FBV0EsU0FBT0ssR0FBUDtBQUNIOztJQUVLSSxZOzs7Ozs7OztBQUNGOzs7Ozs7MEJBTU1OLEssRUFBc0JWLE8sRUFBNEM7QUFBQSxVQUE5QkMsTUFBOEIsdUVBQUosRUFBSTtBQUNwRSxVQUFNZ0IsT0FBTyxHQUFHUixjQUFjLENBQUNDLEtBQUQsRUFBUSxLQUFSLENBQTlCO0FBQ0FPLE1BQUFBLE9BQU8sQ0FBQ2pCLE9BQUQsRUFBVUMsTUFBVixDQUFQO0FBQ0g7QUFDRDs7Ozs7Ozs7OytCQU1XUyxLLEVBQXNCVixPLEVBQTRDO0FBQUEsVUFBOUJDLE1BQThCLHVFQUFKLEVBQUk7QUFDekUsVUFBTWdCLE9BQU8sR0FBR1IsY0FBYyxDQUFDQyxLQUFELEVBQVEsSUFBUixDQUE5QjtBQUNBLGFBQXFCTyxPQUFPLENBQUNqQixPQUFELEVBQVVDLE1BQVYsQ0FBNUI7QUFDSDtBQUNEOzs7Ozs7Ozt5QkFLS0QsTyxFQUE0QztBQUFBLFVBQTlCQyxNQUE4Qix1RUFBSixFQUFJO0FBQzdDLFdBQUtpQixLQUFMLENBQVdwQixhQUFhLENBQUNLLElBQXpCLEVBQStCSCxPQUEvQixFQUF3Q0MsTUFBeEM7QUFDSDtBQUNEOzs7Ozs7Ozs4QkFLVUQsTyxFQUE0QztBQUFBLFVBQTlCQyxNQUE4Qix1RUFBSixFQUFJO0FBQ2xELGFBQU8sS0FBS2tCLFVBQUwsQ0FBZ0JyQixhQUFhLENBQUNLLElBQTlCLEVBQW9DSCxPQUFwQyxFQUE2Q0MsTUFBN0MsQ0FBUDtBQUNIO0FBQ0Q7Ozs7Ozs7O3lCQUtLRCxPLEVBQTRDO0FBQUEsVUFBOUJDLE1BQThCLHVFQUFKLEVBQUk7QUFDN0MsV0FBS2lCLEtBQUwsQ0FBV3BCLGFBQWEsQ0FBQ1EsSUFBekIsRUFBK0JOLE9BQS9CLEVBQXdDQyxNQUF4QztBQUNIO0FBQ0Q7Ozs7Ozs7OzhCQUtVRCxPLEVBQTRDO0FBQUEsVUFBOUJDLE1BQThCLHVFQUFKLEVBQUk7QUFDbEQsYUFBTyxLQUFLa0IsVUFBTCxDQUFnQnJCLGFBQWEsQ0FBQ1EsSUFBOUIsRUFBb0NOLE9BQXBDLEVBQTZDQyxNQUE3QyxDQUFQO0FBQ0g7QUFDRDs7Ozs7Ozs7MEJBS01ELE8sRUFBNEM7QUFBQSxVQUE5QkMsTUFBOEIsdUVBQUosRUFBSTtBQUM5QyxXQUFLaUIsS0FBTCxDQUFXcEIsYUFBYSxDQUFDUyxLQUF6QixFQUFnQ1AsT0FBaEMsRUFBeUNDLE1BQXpDO0FBQ0g7QUFDRDs7Ozs7Ozs7K0JBS1dELE8sRUFBNEM7QUFBQSxVQUE5QkMsTUFBOEIsdUVBQUosRUFBSTtBQUNuRCxhQUFPLEtBQUtrQixVQUFMLENBQWdCckIsYUFBYSxDQUFDUyxLQUE5QixFQUFxQ1AsT0FBckMsRUFBOENDLE1BQTlDLENBQVA7QUFDSDs7Ozs7QUFHTDs7Ozs7QUFHTyxJQUFNbUIsTUFBb0IsR0FBRyxJQUFJSixZQUFKLEVBQTdCO0FBRVA7Ozs7Ozs7QUFJTyxTQUFTSyxpQkFBVCxDQUEyQkMsV0FBM0IsRUFBeUQ7QUFDNURkLEVBQUFBLGtCQUFrQixHQUFHYyxXQUFyQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW55S2V5VmFsdWVUeXBlIH0gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbW1vblwiXHJcblxyXG4vKipcclxuICog5pel5b+X57qn5Yir57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgZW51bSBMZXZlbFR5cGVFbnVtIHtcclxuICAgIFwiaW5mb1wiID0gXCJpbmZvXCIsXHJcbiAgICBcIndhcm5cIiA9IFwid2FyblwiLFxyXG4gICAgXCJlcnJvclwiID0gXCJlcnJvclwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlvILmraXml6Xlv5fov5Tlm57nsbvlnotcclxuICovXHJcbmV4cG9ydCB0eXBlIFByb21pc2VUeXBlID0gUHJvbWlzZTx2b2lkPiB8IFByb21pc2U8e30+XHJcblxyXG4vKipcclxuICog5pel5b+X6K6w5b2V5Zmo5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExvZ1JlY29yZGVyVHlwZSB7XHJcbiAgICAvKipcclxuICAgICAqIOS4gOiIrOaXpeW/l1xyXG4gICAgICovXHJcbiAgICBpbmZvKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpOiB2b2lkXHJcbiAgICAvKipcclxuICAgICAqIOS4gOiIrOaXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICovXHJcbiAgICBpbmZvQXN5bmMoY29udGVudDogYW55LCBvcHRpb246IEFueUtleVZhbHVlVHlwZSk6IFByb21pc2VUeXBlXHJcbiAgICAvKipcclxuICAgICAqIOitpuWRiuaXpeW/l1xyXG4gICAgICovXHJcbiAgICB3YXJuKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpOiB2b2lkXHJcbiAgICAvKipcclxuICAgICAqIOitpuWRiuaXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICovXHJcbiAgICB3YXJuQXN5bmMoY29udGVudDogYW55LCBvcHRpb246IEFueUtleVZhbHVlVHlwZSk6IFByb21pc2VUeXBlXHJcbiAgICAvKipcclxuICAgICAqIOmUmeivr+aXpeW/l1xyXG4gICAgICovXHJcbiAgICBlcnJvcihjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKTogdm9pZFxyXG4gICAgLyoqXHJcbiAgICAgKiDplJnor6/ml6Xlv5fvvIjlvILmraXvvIlcclxuICAgICAqL1xyXG4gICAgZXJyb3JBc3luYyhjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKTogUHJvbWlzZVR5cGVcclxufVxyXG5cclxuY2xhc3MgRGVmYXVsdExvZ1JlY29yZGVyQ2xhc3Mge1xyXG4gICAgaW5mbyhjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKGNvbnRlbnQsIG9wdGlvbilcclxuICAgIH1cclxuICAgIGluZm9Bc3luYyhjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKGNvbnRlbnQsIG9wdGlvbilcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcclxuICAgIH1cclxuICAgIHdhcm4oY29udGVudDogYW55LCBvcHRpb246IEFueUtleVZhbHVlVHlwZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybihjb250ZW50LCBvcHRpb24pXHJcbiAgICB9XHJcbiAgICB3YXJuQXN5bmMoY29udGVudDogYW55LCBvcHRpb246IEFueUtleVZhbHVlVHlwZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybihjb250ZW50LCBvcHRpb24pXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICB9XHJcbiAgICBlcnJvcihjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihjb250ZW50LCBvcHRpb24pXHJcbiAgICB9XHJcbiAgICBlcnJvckFzeW5jKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGNvbnRlbnQsIG9wdGlvbilcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOW9k+WJjem7mOiupOeahOaXpeW/l+iusOW9leWZqO+8iOm7mOiupOS4undpbmRvdy5jb25zb2xl77yJXHJcbiAqL1xyXG5sZXQgZGVmYXVsdExvZ1JlY29yZGVyOiBMb2dSZWNvcmRlclR5cGUgPSBuZXcgRGVmYXVsdExvZ1JlY29yZGVyQ2xhc3MoKVxyXG5cclxuLyoqXHJcbiAqIOagueaNruaXpeW/l+e6p+WIq+i/lOWbnuWvueW6lOeahOaXpeW/l+iusOW9leWHveaVsFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TG9nUmVjb3JkZXIobGV2ZWw6IExldmVsVHlwZUVudW0sIGlzQXN5bmM6IGJvb2xlYW4pOiAob2JqOiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKSA9PiB2b2lkIHwgKChvYmo6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpID0+IFByb21pc2VUeXBlKSB7XHJcbiAgICBpZiAoaXNBc3luYykge1xyXG4gICAgICAgIGxldCBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIuaW5mb0FzeW5jXHJcbiAgICAgICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIExldmVsVHlwZUVudW0uaW5mbzpcclxuICAgICAgICAgICAgICAgIGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci5pbmZvQXN5bmNcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExldmVsVHlwZUVudW0ud2FybjpcclxuICAgICAgICAgICAgICAgIGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci53YXJuQXN5bmNcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExldmVsVHlwZUVudW0uZXJyb3I6XHJcbiAgICAgICAgICAgICAgICBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIuZXJyb3JBc3luY1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW4gYXMgYW55XHJcbiAgICB9XHJcbiAgICBsZXQgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLmluZm9cclxuICAgIHN3aXRjaCAobGV2ZWwpIHtcclxuICAgICAgICBjYXNlIExldmVsVHlwZUVudW0uaW5mbzpcclxuICAgICAgICAgICAgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLmluZm9cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMZXZlbFR5cGVFbnVtLndhcm46XHJcbiAgICAgICAgICAgIGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci53YXJuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTGV2ZWxUeXBlRW51bS5lcnJvcjpcclxuICAgICAgICAgICAgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLmVycm9yXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1biBhcyBhbnlcclxufVxyXG5cclxuY2xhc3MgTG9nZ2VySGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICog5YaZ5pel5b+XXHJcbiAgICAgKiBAcGFyYW0gbGV2ZWwg5pel5b+X57qn5YirXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqIEBwYXJhbSBvcHRpb24g6Ieq5a6a5LmJ6YCJ6aG5XHJcbiAgICAgKi9cclxuICAgIHdyaXRlKGxldmVsOiBMZXZlbFR5cGVFbnVtLCBjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlID0ge30pIHtcclxuICAgICAgICBjb25zdCBsb2dGdW5jID0gZ2V0TG9nUmVjb3JkZXIobGV2ZWwsIGZhbHNlKVxyXG4gICAgICAgIGxvZ0Z1bmMoY29udGVudCwgb3B0aW9uKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlhpnml6Xlv5fvvIjlvILmraXvvIlcclxuICAgICAqIEBwYXJhbSBsZXZlbCDml6Xlv5fnuqfliKtcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICogQHBhcmFtIG9wdGlvbiDoh6rlrprkuYnpgInpoblcclxuICAgICAqL1xyXG4gICAgd3JpdGVBc3luYyhsZXZlbDogTGV2ZWxUeXBlRW51bSwgY29udGVudDogYW55LCBvcHRpb246IEFueUtleVZhbHVlVHlwZSA9IHt9KSB7XHJcbiAgICAgICAgY29uc3QgbG9nRnVuYyA9IGdldExvZ1JlY29yZGVyKGxldmVsLCB0cnVlKVxyXG4gICAgICAgIHJldHVybiA8UHJvbWlzZVR5cGU+KGxvZ0Z1bmMoY29udGVudCwgb3B0aW9uKSBhcyBhbnkpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqICDlhpnkuIDoiKzml6Xlv5dcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICogQHBhcmFtIG9wdGlvbiDoh6rlrprkuYnpgInpoblcclxuICAgICAqL1xyXG4gICAgaW5mbyhjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlID0ge30pIHtcclxuICAgICAgICB0aGlzLndyaXRlKExldmVsVHlwZUVudW0uaW5mbywgY29udGVudCwgb3B0aW9uKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ5LiA6Iis5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqIEBwYXJhbSBvcHRpb24g6Ieq5a6a5LmJ6YCJ6aG5XHJcbiAgICAgKi9cclxuICAgIGluZm9Bc3luYyhjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlID0ge30pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZUFzeW5jKExldmVsVHlwZUVudW0uaW5mbywgY29udGVudCwgb3B0aW9uKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ6K2m5ZGK5pel5b+XXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqIEBwYXJhbSBvcHRpb24g6Ieq5a6a5LmJ6YCJ6aG5XHJcbiAgICAgKi9cclxuICAgIHdhcm4oY29udGVudDogYW55LCBvcHRpb246IEFueUtleVZhbHVlVHlwZSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy53cml0ZShMZXZlbFR5cGVFbnVtLndhcm4sIGNvbnRlbnQsIG9wdGlvbilcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogIOWGmeitpuWRiuaXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uIOiHquWumuS5iemAiemhuVxyXG4gICAgICovXHJcbiAgICB3YXJuQXN5bmMoY29udGVudDogYW55LCBvcHRpb246IEFueUtleVZhbHVlVHlwZSA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVBc3luYyhMZXZlbFR5cGVFbnVtLndhcm4sIGNvbnRlbnQsIG9wdGlvbilcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogIOWGmemUmeivr+aXpeW/l1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uIOiHquWumuS5iemAiemhuVxyXG4gICAgICovXHJcbiAgICBlcnJvcihjb250ZW50OiBhbnksIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlID0ge30pIHtcclxuICAgICAgICB0aGlzLndyaXRlKExldmVsVHlwZUVudW0uZXJyb3IsIGNvbnRlbnQsIG9wdGlvbilcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogIOWGmemUmeivr+aXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uIOiHquWumuS5iemAiemhuVxyXG4gICAgICovXHJcbiAgICBlcnJvckFzeW5jKGNvbnRlbnQ6IGFueSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlQXN5bmMoTGV2ZWxUeXBlRW51bS5lcnJvciwgY29udGVudCwgb3B0aW9uKVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5b2T5YmN5pel5b+X5bel5YW357G7XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9nZ2VyOiBMb2dnZXJIZWxwZXIgPSBuZXcgTG9nZ2VySGVscGVyKClcclxuXHJcbi8qKlxyXG4gKiDph43mlrDorr7nva7pu5jorqTnmoTml6Xlv5forrDlvZXlmahcclxuICogQHBhcmFtIGxvZ1JlY29yZGVyIOaWsOeahOaXpeW/l+iusOW9leWZqO+8iOm7mOiupOeahOaXpeW/l+iusOW9leWZqOS4undpbmRvdy5jb25zb2xl77yJXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9nZ2VyUmVjb3JkZXIobG9nUmVjb3JkZXI6IExvZ1JlY29yZGVyVHlwZSkge1xyXG4gICAgZGVmYXVsdExvZ1JlY29yZGVyID0gbG9nUmVjb3JkZXJcclxufSJdfQ==