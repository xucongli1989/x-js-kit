"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLogger = setLogger;
exports.logger = exports.LevelTypeEnum = void 0;

var _data = require("../common/data");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
 * 默认的日志记录器
 */
var ConsoleLogger =
/*#__PURE__*/
function () {
  function ConsoleLogger() {
    _classCallCheck(this, ConsoleLogger);
  }

  _createClass(ConsoleLogger, [{
    key: "write",
    value: function write(level, content) {
      var str = (0, _data.isString)(content) ? content : JSON.stringify(content);

      switch (level) {
        case LevelTypeEnum.info:
          console.log(str);
          break;

        case LevelTypeEnum.warn:
          console.warn(str);
          break;

        case LevelTypeEnum.error:
          console.error(str);
          break;
      }
    }
  }, {
    key: "writeAsync",
    value: function () {
      var _writeAsync = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(level, content) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = this;
                _context.t1 = level;
                _context.next = 4;
                return content;

              case 4:
                _context.t2 = _context.sent;

                _context.t0.write.call(_context.t0, _context.t1, _context.t2);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function writeAsync(_x, _x2) {
        return _writeAsync.apply(this, arguments);
      }

      return writeAsync;
    }()
  }, {
    key: "info",
    value: function info(content) {
      this.write(LevelTypeEnum.info, content);
    }
  }, {
    key: "infoAsync",
    value: function () {
      var _infoAsync = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(content) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.writeAsync(LevelTypeEnum.info, content));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function infoAsync(_x3) {
        return _infoAsync.apply(this, arguments);
      }

      return infoAsync;
    }()
  }, {
    key: "warn",
    value: function warn(content) {
      this.write(LevelTypeEnum.warn, content);
    }
  }, {
    key: "warnAsync",
    value: function () {
      var _warnAsync = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(content) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.writeAsync(LevelTypeEnum.warn, content));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function warnAsync(_x4) {
        return _warnAsync.apply(this, arguments);
      }

      return warnAsync;
    }()
  }, {
    key: "error",
    value: function error(content) {
      this.write(LevelTypeEnum.error, content);
    }
  }, {
    key: "errorAsync",
    value: function () {
      var _errorAsync = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(content) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.writeAsync(LevelTypeEnum.error, content));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function errorAsync(_x5) {
        return _errorAsync.apply(this, arguments);
      }

      return errorAsync;
    }()
  }]);

  return ConsoleLogger;
}();
/**
 * 当前日志记录器
 */


var logger = new ConsoleLogger();
/**
 * 设置日志记录器
 * @param log 自定义的日志记录器
 */

exports.logger = logger;

function setLogger(log) {
  exports.logger = logger = log;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvbG9nLnRzIl0sIm5hbWVzIjpbIkxldmVsVHlwZUVudW0iLCJDb25zb2xlTG9nZ2VyIiwibGV2ZWwiLCJjb250ZW50Iiwic3RyIiwiSlNPTiIsInN0cmluZ2lmeSIsImluZm8iLCJjb25zb2xlIiwibG9nIiwid2FybiIsImVycm9yIiwid3JpdGUiLCJ3cml0ZUFzeW5jIiwibG9nZ2VyIiwic2V0TG9nZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR1lBLGE7QUFFWjs7Ozs7O1dBRllBLGE7QUFBQUEsRUFBQUEsYSxDQUFBQSxhO0FBQUFBLEVBQUFBLGEsQ0FBQUEsYTtBQUFBQSxFQUFBQSxhLENBQUFBLGE7R0FBQUEsYSw2QkFBQUEsYTs7QUF1RFo7OztJQUdNQyxhOzs7Ozs7Ozs7MEJBQ0lDLEssRUFBc0JDLE8sRUFBc0I7QUFDOUMsVUFBTUMsR0FBRyxHQUFHLG9CQUFTRCxPQUFULElBQW9CQSxPQUFwQixHQUE4QkUsSUFBSSxDQUFDQyxTQUFMLENBQWVILE9BQWYsQ0FBMUM7O0FBQ0EsY0FBUUQsS0FBUjtBQUNJLGFBQUtGLGFBQWEsQ0FBQ08sSUFBbkI7QUFDSUMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLEdBQVo7QUFDQTs7QUFDSixhQUFLSixhQUFhLENBQUNVLElBQW5CO0FBQ0lGLFVBQUFBLE9BQU8sQ0FBQ0UsSUFBUixDQUFhTixHQUFiO0FBQ0E7O0FBQ0osYUFBS0osYUFBYSxDQUFDVyxLQUFuQjtBQUNJSCxVQUFBQSxPQUFPLENBQUNHLEtBQVIsQ0FBY1AsR0FBZDtBQUNBO0FBVFI7QUFXSDs7Ozs7OytDQUNnQkYsSyxFQUFzQkMsTzs7Ozs7OEJBQ25DLEk7OEJBQVdELEs7O3VCQUFhQyxPOzs7Ozs0QkFBbkJTLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFFSlQsTyxFQUFzQjtBQUN2QixXQUFLUyxLQUFMLENBQVdaLGFBQWEsQ0FBQ08sSUFBekIsRUFBK0JKLE9BQS9CO0FBQ0g7Ozs7OztnREFDZUEsTzs7Ozs7a0RBQ0wsS0FBS1UsVUFBTCxDQUFnQmIsYUFBYSxDQUFDTyxJQUE5QixFQUFvQ0osT0FBcEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQUVOQSxPLEVBQXNCO0FBQ3ZCLFdBQUtTLEtBQUwsQ0FBV1osYUFBYSxDQUFDVSxJQUF6QixFQUErQlAsT0FBL0I7QUFDSDs7Ozs7O2dEQUNlQSxPOzs7OztrREFDTCxLQUFLVSxVQUFMLENBQWdCYixhQUFhLENBQUNVLElBQTlCLEVBQW9DUCxPQUFwQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRUxBLE8sRUFBc0I7QUFDeEIsV0FBS1MsS0FBTCxDQUFXWixhQUFhLENBQUNXLEtBQXpCLEVBQWdDUixPQUFoQztBQUNIOzs7Ozs7Z0RBQ2dCQSxPOzs7OztrREFDTixLQUFLVSxVQUFMLENBQWdCYixhQUFhLENBQUNXLEtBQTlCLEVBQXFDUixPQUFyQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlmOzs7OztBQUdPLElBQUlXLE1BQWUsR0FBRyxJQUFJYixhQUFKLEVBQXRCO0FBRVA7Ozs7Ozs7QUFJTyxTQUFTYyxTQUFULENBQW1CTixHQUFuQixFQUFpQztBQUNwQyxtQkFBQUssTUFBTSxHQUFHTCxHQUFUO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCIuLi9jb21tb24vZGF0YVwiXHJcblxyXG4vKipcclxuICog5pel5b+X57qn5Yir57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgZW51bSBMZXZlbFR5cGVFbnVtIHsgXCJpbmZvXCIsIFwid2FyblwiLCBcImVycm9yXCIgfVxyXG5cclxuLyoqXHJcbiAqIOaXpeW/l+WGheWuueexu+Wei1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29udGVudFR5cGUgPSBvYmplY3QgfCBzdHJpbmdcclxuXHJcbi8qKlxyXG4gKiDml6Xlv5forrDlvZXlmajmjqXlj6NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9nVHlwZSB7XHJcbiAgICAvKipcclxuICAgICAqIOWGmeaXpeW/l1xyXG4gICAgICogQHBhcmFtIGxldmVsIOaXpeW/l+e6p+WIq1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHdyaXRlKGxldmVsOiBMZXZlbFR5cGVFbnVtLCBjb250ZW50OiBDb250ZW50VHlwZSk6IHZvaWRcclxuICAgIC8qKlxyXG4gICAgICog5YaZ5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKiBAcGFyYW0gbGV2ZWwg5pel5b+X57qn5YirXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqL1xyXG4gICAgd3JpdGVBc3luYyhsZXZlbDogTGV2ZWxUeXBlRW51bSwgY29udGVudDogUHJvbWlzZTxvYmplY3QgfCBzdHJpbmc+KTogUHJvbWlzZTx2b2lkPlxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ5LiA6Iis5pel5b+XXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqL1xyXG4gICAgaW5mbyhjb250ZW50OiBDb250ZW50VHlwZSk6IHZvaWRcclxuICAgIC8qKlxyXG4gICAgICogIOWGmeS4gOiIrOaXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKi9cclxuICAgIGluZm9Bc3luYyhjb250ZW50OiBQcm9taXNlPG9iamVjdCB8IHN0cmluZz4pOiBQcm9taXNlPHZvaWQ+XHJcbiAgICAvKipcclxuICAgICAqICDlhpnorablkYrml6Xlv5dcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICovXHJcbiAgICB3YXJuKGNvbnRlbnQ6IENvbnRlbnRUeXBlKTogdm9pZFxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ6K2m5ZGK5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqL1xyXG4gICAgd2FybkFzeW5jKGNvbnRlbnQ6IFByb21pc2U8b2JqZWN0IHwgc3RyaW5nPik6IFByb21pc2U8dm9pZD5cclxuICAgIC8qKlxyXG4gICAgICogIOWGmemUmeivr+aXpeW/l1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKi9cclxuICAgIGVycm9yKGNvbnRlbnQ6IENvbnRlbnRUeXBlKTogdm9pZFxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YaZ6ZSZ6K+v5pel5b+X77yI5byC5q2l77yJXHJcbiAgICAgKiBAcGFyYW0gY29udGVudCDml6Xlv5flhoXlrrlcclxuICAgICAqL1xyXG4gICAgZXJyb3JBc3luYyhjb250ZW50OiBQcm9taXNlPG9iamVjdCB8IHN0cmluZz4pOiBQcm9taXNlPHZvaWQ+XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpu5jorqTnmoTml6Xlv5forrDlvZXlmahcclxuICovXHJcbmNsYXNzIENvbnNvbGVMb2dnZXIgaW1wbGVtZW50cyBMb2dUeXBlIHtcclxuICAgIHdyaXRlKGxldmVsOiBMZXZlbFR5cGVFbnVtLCBjb250ZW50OiBDb250ZW50VHlwZSkge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IGlzU3RyaW5nKGNvbnRlbnQpID8gY29udGVudCA6IEpTT04uc3RyaW5naWZ5KGNvbnRlbnQpXHJcbiAgICAgICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIExldmVsVHlwZUVudW0uaW5mbzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0cilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExldmVsVHlwZUVudW0ud2FybjpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihzdHIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMZXZlbFR5cGVFbnVtLmVycm9yOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihzdHIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyB3cml0ZUFzeW5jKGxldmVsOiBMZXZlbFR5cGVFbnVtLCBjb250ZW50OiBQcm9taXNlPG9iamVjdCB8IHN0cmluZz4pIHtcclxuICAgICAgICB0aGlzLndyaXRlKGxldmVsLCBhd2FpdCBjb250ZW50KVxyXG4gICAgfVxyXG4gICAgaW5mbyhjb250ZW50OiBDb250ZW50VHlwZSkge1xyXG4gICAgICAgIHRoaXMud3JpdGUoTGV2ZWxUeXBlRW51bS5pbmZvLCBjb250ZW50KVxyXG4gICAgfVxyXG4gICAgYXN5bmMgaW5mb0FzeW5jKGNvbnRlbnQ6IFByb21pc2U8b2JqZWN0IHwgc3RyaW5nPikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlQXN5bmMoTGV2ZWxUeXBlRW51bS5pbmZvLCBjb250ZW50KVxyXG4gICAgfVxyXG4gICAgd2Fybihjb250ZW50OiBDb250ZW50VHlwZSkge1xyXG4gICAgICAgIHRoaXMud3JpdGUoTGV2ZWxUeXBlRW51bS53YXJuLCBjb250ZW50KVxyXG4gICAgfVxyXG4gICAgYXN5bmMgd2FybkFzeW5jKGNvbnRlbnQ6IFByb21pc2U8b2JqZWN0IHwgc3RyaW5nPikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlQXN5bmMoTGV2ZWxUeXBlRW51bS53YXJuLCBjb250ZW50KVxyXG4gICAgfVxyXG4gICAgZXJyb3IoY29udGVudDogQ29udGVudFR5cGUpIHtcclxuICAgICAgICB0aGlzLndyaXRlKExldmVsVHlwZUVudW0uZXJyb3IsIGNvbnRlbnQpXHJcbiAgICB9XHJcbiAgICBhc3luYyBlcnJvckFzeW5jKGNvbnRlbnQ6IFByb21pc2U8b2JqZWN0IHwgc3RyaW5nPikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlQXN5bmMoTGV2ZWxUeXBlRW51bS5lcnJvciwgY29udGVudClcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOW9k+WJjeaXpeW/l+iusOW9leWZqFxyXG4gKi9cclxuZXhwb3J0IGxldCBsb2dnZXI6IExvZ1R5cGUgPSBuZXcgQ29uc29sZUxvZ2dlcigpXHJcblxyXG4vKipcclxuICog6K6+572u5pel5b+X6K6w5b2V5ZmoXHJcbiAqIEBwYXJhbSBsb2cg6Ieq5a6a5LmJ55qE5pel5b+X6K6w5b2V5ZmoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9nZ2VyKGxvZzogTG9nVHlwZSkge1xyXG4gICAgbG9nZ2VyID0gbG9nXHJcbn0iXX0=