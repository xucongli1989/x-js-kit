"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Strategy = exports.StrategyItem = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/static-property-placement */

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
 * 策略管理类，用于一次性执行多次策略方法。
 * 使用方法：const strategy = new Strategy()
 * strategy.add(item => {...}).add(item => {...}).add(item => {...}).execute()
 */


exports.StrategyItem = StrategyItem;

var Strategy = /*#__PURE__*/function () {
  function Strategy() {
    _classCallCheck(this, Strategy);

    _defineProperty(this, "_strategyList", []);

    _defineProperty(this, "context", null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXR0ZXJuL3N0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbIlN0cmF0ZWd5SXRlbSIsIm5hbWUiLCJjb250ZXh0IiwiaGFuZGxlciIsIlN0cmF0ZWd5IiwiX3N0cmF0ZWd5TGlzdCIsInB1c2giLCJmb3JFYWNoIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0lBQ2FBLFksR0FDVCxzQkFBWUMsSUFBWixFQUEwQkMsT0FBMUIsRUFBZ0RDLE9BQWhELEVBQW9HO0FBQUE7O0FBQUEsZ0NBS3JGLEVBTHFGOztBQUFBOztBQUFBOztBQUNoRyxPQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxPQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDSCxDO0FBTUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7SUFDYUMsUTs7OzsyQ0FJNEMsRTs7cUNBSTlCLEk7Ozs7OztBQUN2QjtBQUNKO0FBQ0E7d0JBQ1FELE8sRUFBdUU7QUFBQSxVQUFuQkYsSUFBbUIsdUVBQUosRUFBSTs7QUFDdkUsV0FBS0ksYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBSU4sWUFBSixDQUFpQkMsSUFBakIsRUFBdUIsS0FBS0MsT0FBNUIsRUFBcUNDLE9BQXJDLENBQXhCOztBQUNBLGFBQU8sSUFBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBOzs7OzhCQUNjO0FBQ04sV0FBS0UsYUFBTCxDQUFtQkUsT0FBbkIsQ0FBMkIsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pDQSxRQUFBQSxJQUFJLENBQUNMLE9BQUwsQ0FBYUssSUFBYjtBQUNILE9BRkQ7QUFHSCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3N0YXRpYy1wcm9wZXJ0eS1wbGFjZW1lbnQgKi9cclxuLyoqXHJcbiAqIOetlueVpemhuVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0cmF0ZWd5SXRlbTxDb250ZXh0VHlwZT4ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjb250ZXh0OiBDb250ZXh0VHlwZSwgaGFuZGxlcjogKGl0ZW06IFN0cmF0ZWd5SXRlbTxDb250ZXh0VHlwZT4pID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxyXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXJcclxuICAgIH1cclxuICAgIG5hbWU6IHN0cmluZyA9IFwiXCJcclxuICAgIGNvbnRleHQ6IENvbnRleHRUeXBlXHJcbiAgICBoYW5kbGVyOiAoaXRlbTogU3RyYXRlZ3lJdGVtPENvbnRleHRUeXBlPikgPT4gdm9pZFxyXG59XHJcblxyXG4vKipcclxuICog562W55Wl566h55CG57G777yM55So5LqO5LiA5qyh5oCn5omn6KGM5aSa5qyh562W55Wl5pa55rOV44CCXHJcbiAqIOS9v+eUqOaWueazle+8mmNvbnN0IHN0cmF0ZWd5ID0gbmV3IFN0cmF0ZWd5KClcclxuICogc3RyYXRlZ3kuYWRkKGl0ZW0gPT4gey4uLn0pLmFkZChpdGVtID0+IHsuLi59KS5hZGQoaXRlbSA9PiB7Li4ufSkuZXhlY3V0ZSgpXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RyYXRlZ3k8Q29udGV4dFR5cGUgPSBhbnk+IHtcclxuICAgIC8qKlxyXG4gICAgICog562W55Wl5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3N0cmF0ZWd5TGlzdDogU3RyYXRlZ3lJdGVtPENvbnRleHRUeXBlPltdID0gW11cclxuICAgIC8qKlxyXG4gICAgICog5LiK5LiL5paH77yM55So5LqO5aSa5Liq562W55Wl5LmL6Ze055qE5pWw5o2u5YWx5LqrXHJcbiAgICAgKi9cclxuICAgIGNvbnRleHQ6IENvbnRleHRUeXBlID0gbnVsbCBhcyBhbnlcclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5LiA5Liq562W55Wl6aG5XHJcbiAgICAgKi9cclxuICAgIGFkZChoYW5kbGVyOiAoaXRlbTogU3RyYXRlZ3lJdGVtPENvbnRleHRUeXBlPikgPT4gdm9pZCwgbmFtZTogc3RyaW5nID0gXCJcIikge1xyXG4gICAgICAgIHRoaXMuX3N0cmF0ZWd5TGlzdC5wdXNoKG5ldyBTdHJhdGVneUl0ZW0obmFtZSwgdGhpcy5jb250ZXh0LCBoYW5kbGVyKSlcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmiafooYznrZbnlaXliJfooahcclxuICAgICAqL1xyXG4gICAgZXhlY3V0ZSgpIHtcclxuICAgICAgICB0aGlzLl9zdHJhdGVneUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmhhbmRsZXIoaXRlbSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==