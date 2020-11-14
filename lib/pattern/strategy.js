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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXR0ZXJuL3N0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbIlN0cmF0ZWd5SXRlbSIsIm5hbWUiLCJjb250ZXh0IiwiaGFuZGxlciIsIlN0cmF0ZWd5IiwiX3N0cmF0ZWd5TGlzdCIsInB1c2giLCJmb3JFYWNoIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBQ2FBLFksR0FDVCxzQkFBWUMsSUFBWixFQUEwQkMsT0FBMUIsRUFBZ0RDLE9BQWhELEVBQW9HO0FBQUE7O0FBQUEsZ0NBS3JGLEVBTHFGOztBQUFBOztBQUFBOztBQUNoRyxPQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxPQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDSCxDO0FBTUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7SUFDYUMsUTs7OzsyQ0FJNEMsRTs7cUNBSTlCLEk7Ozs7OztBQUN2QjtBQUNKO0FBQ0E7d0JBQ1FELE8sRUFBdUU7QUFBQSxVQUFuQkYsSUFBbUIsdUVBQUosRUFBSTs7QUFDdkUsV0FBS0ksYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBSU4sWUFBSixDQUFpQkMsSUFBakIsRUFBdUIsS0FBS0MsT0FBNUIsRUFBcUNDLE9BQXJDLENBQXhCOztBQUNBLGFBQU8sSUFBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBOzs7OzhCQUNjO0FBQ04sV0FBS0UsYUFBTCxDQUFtQkUsT0FBbkIsQ0FBMkIsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pDQSxRQUFBQSxJQUFJLENBQUNMLE9BQUwsQ0FBYUssSUFBYjtBQUNILE9BRkQ7QUFHSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDnrZbnlaXpoblcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdHJhdGVneUl0ZW08Q29udGV4dFR5cGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY29udGV4dDogQ29udGV4dFR5cGUsIGhhbmRsZXI6IChpdGVtOiBTdHJhdGVneUl0ZW08Q29udGV4dFR5cGU+KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcclxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyXHJcbiAgICB9XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIlwiXHJcbiAgICBjb250ZXh0OiBDb250ZXh0VHlwZVxyXG4gICAgaGFuZGxlcjogKGl0ZW06IFN0cmF0ZWd5SXRlbTxDb250ZXh0VHlwZT4pID0+IHZvaWRcclxufVxyXG5cclxuLyoqXHJcbiAqIOetlueVpeeuoeeQhuexu++8jOeUqOS6juS4gOasoeaAp+aJp+ihjOWkmuasoeetlueVpeaWueazleOAglxyXG4gKiDkvb/nlKjmlrnms5XvvJpjb25zdCBzdHJhdGVneSA9IG5ldyBTdHJhdGVneSgpXHJcbiAqIHN0cmF0ZWd5LmFkZChpdGVtID0+IHsuLi59KS5hZGQoaXRlbSA9PiB7Li4ufSkuYWRkKGl0ZW0gPT4gey4uLn0pLmV4ZWN1dGUoKVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0cmF0ZWd5PENvbnRleHRUeXBlID0gYW55PiB7XHJcbiAgICAvKipcclxuICAgICAqIOetlueVpeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9zdHJhdGVneUxpc3Q6IFN0cmF0ZWd5SXRlbTxDb250ZXh0VHlwZT5bXSA9IFtdXHJcbiAgICAvKipcclxuICAgICAqIOS4iuS4i+aWh++8jOeUqOS6juWkmuS4quetlueVpeS5i+mXtOeahOaVsOaNruWFseS6q1xyXG4gICAgICovXHJcbiAgICBjb250ZXh0OiBDb250ZXh0VHlwZSA9IG51bGwgYXMgYW55XHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOS4gOS4quetlueVpemhuVxyXG4gICAgICovXHJcbiAgICBhZGQoaGFuZGxlcjogKGl0ZW06IFN0cmF0ZWd5SXRlbTxDb250ZXh0VHlwZT4pID0+IHZvaWQsIG5hbWU6IHN0cmluZyA9IFwiXCIpIHtcclxuICAgICAgICB0aGlzLl9zdHJhdGVneUxpc3QucHVzaChuZXcgU3RyYXRlZ3lJdGVtKG5hbWUsIHRoaXMuY29udGV4dCwgaGFuZGxlcikpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5omn6KGM562W55Wl5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIGV4ZWN1dGUoKSB7XHJcbiAgICAgICAgdGhpcy5fc3RyYXRlZ3lMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5oYW5kbGVyKGl0ZW0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXX0=