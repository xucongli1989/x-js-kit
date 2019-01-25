"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Strategy = exports.StrategyItem = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 策略项
 */
var StrategyItem = function StrategyItem(name, context, handler) {
  _classCallCheck(this, StrategyItem);

  _defineProperty(this, "name", "");

  _defineProperty(this, "context", void 0);

  _defineProperty(this, "handler", void 0);

  this.name = name;
  this.context = context;
  this.handler = handler;
};
/**
 * 策略管理类
 */


exports.StrategyItem = StrategyItem;

var Strategy =
/*#__PURE__*/
function () {
  function Strategy() {
    _classCallCheck(this, Strategy);

    _defineProperty(this, "_strategyList", []);

    _defineProperty(this, "context", void 0);
  }

  _createClass(Strategy, [{
    key: "add",

    /**
     * 添加一个策略项 
     */
    value: function add(handler) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

      this._strategyList.push(new StrategyItem(name, this.context, handler));

      return this;
    }
    /**
     * 执行策略列表
     */

  }, {
    key: "execute",
    value: function execute() {
      this._strategyList.forEach(function (item) {
        item.handler(item);
      });
    }
  }]);

  return Strategy;
}();

exports.Strategy = Strategy;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXR0ZXJuL3N0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbIlN0cmF0ZWd5SXRlbSIsIm5hbWUiLCJjb250ZXh0IiwiaGFuZGxlciIsIlN0cmF0ZWd5IiwiX3N0cmF0ZWd5TGlzdCIsInB1c2giLCJmb3JFYWNoIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztJQUdhQSxZLEdBQ1Qsc0JBQVlDLElBQVosRUFBMEJDLE9BQTFCLEVBQXdDQyxPQUF4QyxFQUErRTtBQUFBOztBQUFBLGdDQUtoRSxFQUxnRTs7QUFBQTs7QUFBQTs7QUFDM0UsT0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0gsQztBQU1MOzs7Ozs7O0lBR2FDLFE7Ozs7OzsyQ0FJK0IsRTs7Ozs7Ozs7QUFLeEM7Ozt3QkFHSUQsTyxFQUEwRDtBQUFBLFVBQW5CRixJQUFtQix1RUFBSixFQUFJOztBQUMxRCxXQUFLSSxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUFJTixZQUFKLENBQWlCQyxJQUFqQixFQUF1QixLQUFLQyxPQUE1QixFQUFxQ0MsT0FBckMsQ0FBeEI7O0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFDRDs7Ozs7OzhCQUdVO0FBQ04sV0FBS0UsYUFBTCxDQUFtQkUsT0FBbkIsQ0FBMkIsVUFBQUMsSUFBSSxFQUFJO0FBQy9CQSxRQUFBQSxJQUFJLENBQUNMLE9BQUwsQ0FBYUssSUFBYjtBQUNILE9BRkQ7QUFHSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDnrZbnlaXpoblcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdHJhdGVneUl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjb250ZXh0OiBhbnksIGhhbmRsZXI6IChpdGVtOiBTdHJhdGVneUl0ZW0pID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxyXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXJcclxuICAgIH1cclxuICAgIG5hbWU6IHN0cmluZyA9IFwiXCJcclxuICAgIGNvbnRleHQ6IGFueVxyXG4gICAgaGFuZGxlcjogKGl0ZW06IFN0cmF0ZWd5SXRlbSkgPT4gdm9pZFxyXG59XHJcblxyXG4vKipcclxuICog562W55Wl566h55CG57G7XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RyYXRlZ3kge1xyXG4gICAgLyoqXHJcbiAgICAgKiDnrZbnlaXliJfooahcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfc3RyYXRlZ3lMaXN0OiBTdHJhdGVneUl0ZW1bXSA9IFtdXHJcbiAgICAvKipcclxuICAgICAqIOS4iuS4i+aWh++8jOeUqOS6juWkmuS4quetlueVpeS5i+mXtOeahOaVsOaNruWFseS6q1xyXG4gICAgICovXHJcbiAgICBjb250ZXh0OiBhbnlcclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5LiA5Liq562W55Wl6aG5IFxyXG4gICAgICovXHJcbiAgICBhZGQoaGFuZGxlcjogKGl0ZW06IFN0cmF0ZWd5SXRlbSkgPT4gdm9pZCwgbmFtZTogc3RyaW5nID0gXCJcIikge1xyXG4gICAgICAgIHRoaXMuX3N0cmF0ZWd5TGlzdC5wdXNoKG5ldyBTdHJhdGVneUl0ZW0obmFtZSwgdGhpcy5jb250ZXh0LCBoYW5kbGVyKSlcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmiafooYznrZbnlaXliJfooahcclxuICAgICAqL1xyXG4gICAgZXhlY3V0ZSgpIHtcclxuICAgICAgICB0aGlzLl9zdHJhdGVneUxpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5oYW5kbGVyKGl0ZW0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdfQ==