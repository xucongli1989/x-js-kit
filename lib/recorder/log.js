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
    value: function info(str, option) {
      console.info(str, option);
    }
  }, {
    key: "infoAsync",
    value: function infoAsync(str, option) {
      console.info(str, option);
      return Promise.resolve();
    }
  }, {
    key: "warn",
    value: function warn(str, option) {
      console.warn(str, option);
    }
  }, {
    key: "warnAsync",
    value: function warnAsync(str, option) {
      console.warn(str, option);
      return Promise.resolve();
    }
  }, {
    key: "error",
    value: function error(str, option) {
      console.error(str, option);
    }
  }, {
    key: "errorAsync",
    value: function errorAsync(str, option) {
      console.error(str, option);
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

      if (!content) {
        return;
      }

      var str = (0, _data.isString)(content) ? content : JSON.stringify(content);
      var logFunc = getLogRecorder(level, false);
      logFunc(str, option);
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

      if (!content) {
        return Promise.resolve();
      }

      var str = (0, _data.isString)(content) ? content : JSON.stringify(content);
      var logFunc = getLogRecorder(level, true);
      return logFunc(str, option);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWNvcmRlci9sb2cudHMiXSwibmFtZXMiOlsiTGV2ZWxUeXBlRW51bSIsImRlZmF1bHRMb2dSZWNvcmRlciIsInN0ciIsIm9wdGlvbiIsImNvbnNvbGUiLCJpbmZvIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ3YXJuIiwiZXJyb3IiLCJnZXRMb2dSZWNvcmRlciIsImxldmVsIiwiaXNBc3luYyIsImZ1biIsImluZm9Bc3luYyIsIndhcm5Bc3luYyIsImVycm9yQXN5bmMiLCJMb2dnZXJIZWxwZXIiLCJjb250ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZ0Z1bmMiLCJ3cml0ZSIsIndyaXRlQXN5bmMiLCJsb2dnZXIiLCJzZXRMb2dnZXJSZWNvcmRlciIsImxvZ1JlY29yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztBQUdBOzs7SUFHWUEsYTtBQU1aOzs7Ozs7V0FOWUEsYTtBQUFBQSxFQUFBQSxhO0FBQUFBLEVBQUFBLGE7QUFBQUEsRUFBQUEsYTtHQUFBQSxhLDZCQUFBQSxhOztBQThDWjs7O0FBR0EsSUFBSUMsa0JBQW1DLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx5QkFDakNDLEdBRGlDLEVBQ3BCQyxNQURvQixFQUNLO0FBQ3ZDQyxNQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYUgsR0FBYixFQUFrQkMsTUFBbEI7QUFDSDtBQUhxQztBQUFBO0FBQUEsOEJBSTVCRCxHQUo0QixFQUlmQyxNQUplLEVBSVU7QUFDNUNDLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhSCxHQUFiLEVBQWtCQyxNQUFsQjtBQUNBLGFBQU9HLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQ0g7QUFQcUM7QUFBQTtBQUFBLHlCQVFqQ0wsR0FSaUMsRUFRcEJDLE1BUm9CLEVBUUs7QUFDdkNDLE1BQUFBLE9BQU8sQ0FBQ0ksSUFBUixDQUFhTixHQUFiLEVBQWtCQyxNQUFsQjtBQUNIO0FBVnFDO0FB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bnQiOlsiaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tIFwiLi4vY29tbW9uL2RhdGFcIlxyXG5pbXBvcnQgeyBBbnlLZXlWYWx1ZVR5cGUgfSBmcm9tIFwiLi4vZGVjbGFyYXRpb24vY29tbW9uXCJcclxuXHJcbi8qKlxyXG4gKiDml6Xlv5fnuqfliKvnsbvlnotcclxuICovXHJcbmV4cG9ydCBlbnVtIExldmVsVHlwZUVudW0ge1xyXG4gICAgXCJpbmZvXCIgPSBcImluZm9cIixcclxuICAgIFwid2FyblwiID0gXCJ3YXJuXCIsXHJcbiAgICBcImVycm9yXCIgPSBcImVycm9yXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIOaXpeW/l+WGheWuueexu+Wei1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29udGVudFR5cGUgPSBvYmplY3QgfCBzdHJpbmdcclxuXHJcbi8qKlxyXG4gKiDlvILmraXml6Xlv5fov5Tlm57nsbvlnotcclxuICovXHJcbmV4cG9ydCB0eXBlIFByb21pc2VUeXBlID0gUHJvbWlzZTx2b2lkPiB8IFByb21pc2U8e30+XHJcblxyXG4vKipcclxuICog5pel5b+X6K6w5b2V5Zmo5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExvZ1JlY29yZGVyVHlwZSB7XHJcbiAgICAvKipcclxuICAgICAqIOS4gOiIrOaXpeW/l1xyXG4gICAgICovXHJcbiAgICBpbmZvKHN0cjogc3RyaW5nLCBvcHRpb246IEFueUtleVZhbHVlVHlwZSk6IHZvaWRcclxuICAgIC8qKlxyXG4gICAgICog5LiA6Iis5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKi9cclxuICAgIGluZm9Bc3luYyhzdHI6IHN0cmluZywgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpOiBQcm9taXNlVHlwZVxyXG4gICAgLyoqXHJcbiAgICAgKiDorablkYrml6Xlv5dcclxuICAgICAqL1xyXG4gICAgd2FybihzdHI6IHN0cmluZywgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpOiB2b2lkXHJcbiAgICAvKipcclxuICAgICAqIOitpuWRiuaXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICovXHJcbiAgICB3YXJuQXN5bmMoc3RyOiBzdHJpbmcsIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKTogUHJvbWlzZVR5cGVcclxuICAgIC8qKlxyXG4gICAgICog6ZSZ6K+v5pel5b+XXHJcbiAgICAgKi9cclxuICAgIGVycm9yKHN0cjogc3RyaW5nLCBvcHRpb246IEFueUtleVZhbHVlVHlwZSk6IHZvaWRcclxuICAgIC8qKlxyXG4gICAgICog6ZSZ6K+v5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKi9cclxuICAgIGVycm9yQXN5bmMoc3RyOiBzdHJpbmcsIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKTogUHJvbWlzZVR5cGVcclxufVxyXG5cclxuLyoqXHJcbiAqIOW9k+WJjem7mOiupOeahOaXpeW/l+iusOW9leWZqO+8iOm7mOiupOS4undpbmRvdy5jb25zb2xl77yJXHJcbiAqL1xyXG5sZXQgZGVmYXVsdExvZ1JlY29yZGVyOiBMb2dSZWNvcmRlclR5cGUgPSBuZXcgY2xhc3Mge1xyXG4gICAgaW5mbyhzdHI6IHN0cmluZywgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oc3RyLCBvcHRpb24pXHJcbiAgICB9XHJcbiAgICBpbmZvQXN5bmMoc3RyOiBzdHJpbmcsIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKHN0ciwgb3B0aW9uKVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgfVxyXG4gICAgd2FybihzdHI6IHN0cmluZywgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oc3RyLCBvcHRpb24pXHJcbiAgICB9XHJcbiAgICB3YXJuQXN5bmMoc3RyOiBzdHJpbmcsIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKHN0ciwgb3B0aW9uKVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgfVxyXG4gICAgZXJyb3Ioc3RyOiBzdHJpbmcsIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihzdHIsIG9wdGlvbilcclxuICAgIH1cclxuICAgIGVycm9yQXN5bmMoc3RyOiBzdHJpbmcsIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihzdHIsIG9wdGlvbilcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOagueaNruaXpeW/l+e6p+WIq+i/lOWbnuWvueW6lOeahOaXpeW/l+iusOW9leWHveaVsFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TG9nUmVjb3JkZXIobGV2ZWw6IExldmVsVHlwZUVudW0sIGlzQXN5bmM6IGJvb2xlYW4pOiAoc3RyOiBzdHJpbmcsIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlKSA9PiB2b2lkIHwgKChzdHI6IHN0cmluZywgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUpID0+IFByb21pc2VUeXBlKSB7XHJcbiAgICBpZiAoaXNBc3luYykge1xyXG4gICAgICAgIGxldCBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIuaW5mb0FzeW5jXHJcbiAgICAgICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIExldmVsVHlwZUVudW0uaW5mbzpcclxuICAgICAgICAgICAgICAgIGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci5pbmZvQXN5bmNcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExldmVsVHlwZUVudW0ud2FybjpcclxuICAgICAgICAgICAgICAgIGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci53YXJuQXN5bmNcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExldmVsVHlwZUVudW0uZXJyb3I6XHJcbiAgICAgICAgICAgICAgICBmdW4gPSBkZWZhdWx0TG9nUmVjb3JkZXIuZXJyb3JBc3luY1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW4gYXMgYW55XHJcbiAgICB9XHJcbiAgICBsZXQgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLmluZm9cclxuICAgIHN3aXRjaCAobGV2ZWwpIHtcclxuICAgICAgICBjYXNlIExldmVsVHlwZUVudW0uaW5mbzpcclxuICAgICAgICAgICAgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLmluZm9cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMZXZlbFR5cGVFbnVtLndhcm46XHJcbiAgICAgICAgICAgIGZ1biA9IGRlZmF1bHRMb2dSZWNvcmRlci53YXJuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTGV2ZWxUeXBlRW51bS5lcnJvcjpcclxuICAgICAgICAgICAgZnVuID0gZGVmYXVsdExvZ1JlY29yZGVyLmVycm9yXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1biBhcyBhbnlcclxufVxyXG5cclxuY2xhc3MgTG9nZ2VySGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICog5YaZ5pel5b+XXHJcbiAgICAgKiBAcGFyYW0gbGV2ZWwg5pel5b+X57qn5YirXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqIEBwYXJhbSBvcHRpb24g6Ieq5a6a5LmJ6YCJ6aG5XHJcbiAgICAgKi9cclxuICAgIHdyaXRlKGxldmVsOiBMZXZlbFR5cGVFbnVtLCBjb250ZW50OiBDb250ZW50VHlwZSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUgPSB7fSkge1xyXG4gICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3RyID0gKGlzU3RyaW5nKGNvbnRlbnQpID8gY29udGVudCA6IEpTT04uc3RyaW5naWZ5KGNvbnRlbnQpKSBhcyBzdHJpbmdcclxuICAgICAgICBjb25zdCBsb2dGdW5jID0gZ2V0TG9nUmVjb3JkZXIobGV2ZWwsIGZhbHNlKVxyXG4gICAgICAgIGxvZ0Z1bmMoc3RyLCBvcHRpb24pXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWGmeaXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICogQHBhcmFtIGxldmVsIOaXpeW/l+e6p+WIq1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uIOiHquWumuS5iemAiemhuVxyXG4gICAgICovXHJcbiAgICB3cml0ZUFzeW5jKGxldmVsOiBMZXZlbFR5cGVFbnVtLCBjb250ZW50OiBDb250ZW50VHlwZSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUgPSB7fSkge1xyXG4gICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3RyID0gKGlzU3RyaW5nKGNvbnRlbnQpID8gY29udGVudCA6IEpTT04uc3RyaW5naWZ5KGNvbnRlbnQpKSBhcyBzdHJpbmdcclxuICAgICAgICBjb25zdCBsb2dGdW5jID0gZ2V0TG9nUmVjb3JkZXIobGV2ZWwsIHRydWUpXHJcbiAgICAgICAgcmV0dXJuIDxQcm9taXNlVHlwZT4obG9nRnVuYyhzdHIsIG9wdGlvbikgYXMgYW55KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ5LiA6Iis5pel5b+XXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqIEBwYXJhbSBvcHRpb24g6Ieq5a6a5LmJ6YCJ6aG5XHJcbiAgICAgKi9cclxuICAgIGluZm8oY29udGVudDogQ29udGVudFR5cGUsIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlID0ge30pIHtcclxuICAgICAgICB0aGlzLndyaXRlKExldmVsVHlwZUVudW0uaW5mbywgY29udGVudCwgb3B0aW9uKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ5LiA6Iis5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqIEBwYXJhbSBvcHRpb24g6Ieq5a6a5LmJ6YCJ6aG5XHJcbiAgICAgKi9cclxuICAgIGluZm9Bc3luYyhjb250ZW50OiBDb250ZW50VHlwZSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlQXN5bmMoTGV2ZWxUeXBlRW51bS5pbmZvLCBjb250ZW50LCBvcHRpb24pXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqICDlhpnorablkYrml6Xlv5dcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICogQHBhcmFtIG9wdGlvbiDoh6rlrprkuYnpgInpoblcclxuICAgICAqL1xyXG4gICAgd2Fybihjb250ZW50OiBDb250ZW50VHlwZSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUgPSB7fSkge1xyXG4gICAgICAgIHRoaXMud3JpdGUoTGV2ZWxUeXBlRW51bS53YXJuLCBjb250ZW50LCBvcHRpb24pXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqICDlhpnorablkYrml6Xlv5fvvIjlvILmraXvvIlcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICogQHBhcmFtIG9wdGlvbiDoh6rlrprkuYnpgInpoblcclxuICAgICAqL1xyXG4gICAgd2FybkFzeW5jKGNvbnRlbnQ6IENvbnRlbnRUeXBlLCBvcHRpb246IEFueUtleVZhbHVlVHlwZSA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVBc3luYyhMZXZlbFR5cGVFbnVtLndhcm4sIGNvbnRlbnQsIG9wdGlvbilcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogIOWGmemUmeivr+aXpeW/l1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uIOiHquWumuS5iemAiemhuVxyXG4gICAgICovXHJcbiAgICBlcnJvcihjb250ZW50OiBDb250ZW50VHlwZSwgb3B0aW9uOiBBbnlLZXlWYWx1ZVR5cGUgPSB7fSkge1xyXG4gICAgICAgIHRoaXMud3JpdGUoTGV2ZWxUeXBlRW51bS5lcnJvciwgY29udGVudCwgb3B0aW9uKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ6ZSZ6K+v5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqIEBwYXJhbSBvcHRpb24g6Ieq5a6a5LmJ6YCJ6aG5XHJcbiAgICAgKi9cclxuICAgIGVycm9yQXN5bmMoY29udGVudDogQ29udGVudFR5cGUsIG9wdGlvbjogQW55S2V5VmFsdWVUeXBlID0ge30pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZUFzeW5jKExldmVsVHlwZUVudW0uZXJyb3IsIGNvbnRlbnQsIG9wdGlvbilcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOW9k+WJjeaXpeW/l+W3peWFt+exu1xyXG4gKi9cclxuZXhwb3J0IGxldCBsb2dnZXI6IExvZ2dlckhlbHBlciA9IG5ldyBMb2dnZXJIZWxwZXIoKVxyXG5cclxuLyoqXHJcbiAqIOmHjeaWsOiuvue9rum7mOiupOeahOaXpeW/l+iusOW9leWZqFxyXG4gKiBAcGFyYW0gbG9nUmVjb3JkZXIg5paw55qE5pel5b+X6K6w5b2V5Zmo77yI6buY6K6k55qE5pel5b+X6K6w5b2V5Zmo5Li6d2luZG93LmNvbnNvbGXvvIlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2dnZXJSZWNvcmRlcihsb2dSZWNvcmRlcjogTG9nUmVjb3JkZXJUeXBlKSB7XHJcbiAgICBkZWZhdWx0TG9nUmVjb3JkZXIgPSBsb2dSZWNvcmRlclxyXG59Il19