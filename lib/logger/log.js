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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvbG9nLnRzIl0sIm5hbWVzIjpbIkxldmVsVHlwZUVudW0iLCJDb25zb2xlTG9nZ2VyIiwibGV2ZWwiLCJjb250ZW50Iiwic3RyIiwiSlNPTiIsInN0cmluZ2lmeSIsImluZm8iLCJjb25zb2xlIiwibG9nIiwid2FybiIsImVycm9yIiwid3JpdGUiLCJsb2dnZXIiLCJzZXRMb2dnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHWUEsYTtBQUVaOzs7Ozs7V0FGWUEsYTtBQUFBQSxFQUFBQSxhLENBQUFBLGE7QUFBQUEsRUFBQUEsYSxDQUFBQSxhO0FBQUFBLEVBQUFBLGEsQ0FBQUEsYTtHQUFBQSxhLDZCQUFBQSxhOztBQXlCWjs7O0lBR01DLGE7Ozs7Ozs7OzswQkFDSUMsSyxFQUFzQkMsTyxFQUFzQjtBQUM5QyxVQUFNQyxHQUFHLEdBQUcsb0JBQVNELE9BQVQsSUFBb0JBLE9BQXBCLEdBQThCRSxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsT0FBZixDQUExQzs7QUFDQSxjQUFRRCxLQUFSO0FBQ0ksYUFBS0YsYUFBYSxDQUFDTyxJQUFuQjtBQUNJQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsR0FBWjtBQUNBOztBQUNKLGFBQUtKLGFBQWEsQ0FBQ1UsSUFBbkI7QUFDSUYsVUFBQUEsT0FBTyxDQUFDRSxJQUFSLENBQWFOLEdBQWI7QUFDQTs7QUFDSixhQUFLSixhQUFhLENBQUNXLEtBQW5CO0FBQ0lILFVBQUFBLE9BQU8sQ0FBQ0csS0FBUixDQUFjUCxHQUFkO0FBQ0E7QUFUUjtBQVdIOzs7Ozs7K0NBQ2dCRixLLEVBQXNCQyxPOzs7Ozs4QkFDbkMsSTs4QkFBV0QsSzs7dUJBQWFDLE87Ozs7OzRCQUFuQlMsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYjs7Ozs7QUFHTyxJQUFJQyxNQUFlLEdBQUcsSUFBSVosYUFBSixFQUF0QjtBQUVQOzs7Ozs7O0FBSU8sU0FBU2EsU0FBVCxDQUFtQkwsR0FBbkIsRUFBaUM7QUFDcEMsbUJBQUFJLE1BQU0sR0FBR0osR0FBVDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tIFwiLi4vY29tbW9uL2RhdGFcIlxyXG5cclxuLyoqXHJcbiAqIOaXpeW/l+e6p+WIq+exu+Wei1xyXG4gKi9cclxuZXhwb3J0IGVudW0gTGV2ZWxUeXBlRW51bSB7IFwiaW5mb1wiLCBcIndhcm5cIiwgXCJlcnJvclwiIH1cclxuXHJcbi8qKlxyXG4gKiDml6Xlv5flhoXlrrnnsbvlnotcclxuICovXHJcbmV4cG9ydCB0eXBlIENvbnRlbnRUeXBlID0gb2JqZWN0IHwgc3RyaW5nXHJcblxyXG4vKipcclxuICog5pel5b+X6K6w5b2V5Zmo5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExvZ1R5cGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlhpnml6Xlv5dcclxuICAgICAqIEBwYXJhbSBsZXZlbCDml6Xlv5fnuqfliKtcclxuICAgICAqIEBwYXJhbSBjb250ZW50IOaXpeW/l+WGheWuuVxyXG4gICAgICovXHJcbiAgICB3cml0ZShsZXZlbDogTGV2ZWxUeXBlRW51bSwgY29udGVudDogQ29udGVudFR5cGUpOiB2b2lkXHJcbiAgICAvKipcclxuICAgICAqIOWGmeaXpeW/l++8iOW8guatpe+8iVxyXG4gICAgICogQHBhcmFtIGxldmVsIOaXpeW/l+e6p+WIq1xyXG4gICAgICogQHBhcmFtIGNvbnRlbnQg5pel5b+X5YaF5a65XHJcbiAgICAgKi9cclxuICAgIHdyaXRlQXN5bmMobGV2ZWw6IExldmVsVHlwZUVudW0sIGNvbnRlbnQ6IFByb21pc2U8b2JqZWN0IHwgc3RyaW5nPik6IFByb21pc2U8dm9pZD5cclxufVxyXG5cclxuLyoqXHJcbiAqIOm7mOiupOeahOaXpeW/l+iusOW9leWZqFxyXG4gKi9cclxuY2xhc3MgQ29uc29sZUxvZ2dlciBpbXBsZW1lbnRzIExvZ1R5cGUge1xyXG4gICAgd3JpdGUobGV2ZWw6IExldmVsVHlwZUVudW0sIGNvbnRlbnQ6IENvbnRlbnRUeXBlKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gaXNTdHJpbmcoY29udGVudCkgPyBjb250ZW50IDogSlNPTi5zdHJpbmdpZnkoY29udGVudClcclxuICAgICAgICBzd2l0Y2ggKGxldmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTGV2ZWxUeXBlRW51bS5pbmZvOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RyKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTGV2ZWxUeXBlRW51bS53YXJuOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHN0cilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExldmVsVHlwZUVudW0uZXJyb3I6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHN0cilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHdyaXRlQXN5bmMobGV2ZWw6IExldmVsVHlwZUVudW0sIGNvbnRlbnQ6IFByb21pc2U8b2JqZWN0IHwgc3RyaW5nPikge1xyXG4gICAgICAgIHRoaXMud3JpdGUobGV2ZWwsIGF3YWl0IGNvbnRlbnQpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlvZPliY3ml6Xlv5forrDlvZXlmahcclxuICovXHJcbmV4cG9ydCBsZXQgbG9nZ2VyOiBMb2dUeXBlID0gbmV3IENvbnNvbGVMb2dnZXIoKVxyXG5cclxuLyoqXHJcbiAqIOiuvue9ruaXpeW/l+iusOW9leWZqFxyXG4gKiBAcGFyYW0gbG9nIOiHquWumuS5ieeahOaXpeW/l+iusOW9leWZqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldExvZ2dlcihsb2c6IExvZ1R5cGUpIHtcclxuICAgIGxvZ2dlciA9IGxvZ1xyXG59Il19