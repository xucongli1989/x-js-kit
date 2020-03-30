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

var Strategy = /*#__PURE__*/function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXR0ZXJuL3N0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbIlN0cmF0ZWd5SXRlbSIsIm5hbWUiLCJjb250ZXh0IiwiaGFuZGxlciIsIlN0cmF0ZWd5IiwiX3N0cmF0ZWd5TGlzdCIsInB1c2giLCJmb3JFYWNoIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztJQUdhQSxZLEdBQ1Qsc0JBQVlDLElBQVosRUFBMEJDLE9BQTFCLEVBQXdDQyxPQUF4QyxFQUErRTtBQUFBOztBQUFBLGdDQUtoRSxFQUxnRTs7QUFBQTs7QUFBQTs7QUFDM0UsT0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0gsQztBQU1MOzs7Ozs7O0lBR2FDLFE7Ozs7MkNBSStCLEU7Ozs7Ozs7O0FBS3hDOzs7d0JBR0lELE8sRUFBMEQ7QUFBQSxVQUFuQkYsSUFBbUIsdUVBQUosRUFBSTs7QUFDMUQsV0FBS0ksYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBSU4sWUFBSixDQUFpQkMsSUFBakIsRUFBdUIsS0FBS0MsT0FBNUIsRUFBcUNDLE9BQXJDLENBQXhCOztBQUNBLGFBQU8sSUFBUDtBQUNIO0FBQ0Q7Ozs7Ozs4QkFHVTtBQUNOLFdBQUtFLGFBQUwsQ0FBbUJFLE9BQW5CLENBQTJCLFVBQUFDLElBQUksRUFBSTtBQUMvQkEsUUFBQUEsSUFBSSxDQUFDTCxPQUFMLENBQWFLLElBQWI7QUFDSCxPQUZEO0FBR0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog562W55Wl6aG5XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RyYXRlZ3lJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY29udGV4dDogYW55LCBoYW5kbGVyOiAoaXRlbTogU3RyYXRlZ3lJdGVtKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcclxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyXHJcbiAgICB9XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIlwiXHJcbiAgICBjb250ZXh0OiBhbnlcclxuICAgIGhhbmRsZXI6IChpdGVtOiBTdHJhdGVneUl0ZW0pID0+IHZvaWRcclxufVxyXG5cclxuLyoqXHJcbiAqIOetlueVpeeuoeeQhuexu1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0cmF0ZWd5IHtcclxuICAgIC8qKlxyXG4gICAgICog562W55Wl5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3N0cmF0ZWd5TGlzdDogU3RyYXRlZ3lJdGVtW10gPSBbXVxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIrkuIvmlofvvIznlKjkuo7lpJrkuKrnrZbnlaXkuYvpl7TnmoTmlbDmja7lhbHkuqtcclxuICAgICAqL1xyXG4gICAgY29udGV4dDogYW55XHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOS4gOS4quetlueVpemhuSBcclxuICAgICAqL1xyXG4gICAgYWRkKGhhbmRsZXI6IChpdGVtOiBTdHJhdGVneUl0ZW0pID0+IHZvaWQsIG5hbWU6IHN0cmluZyA9IFwiXCIpIHtcclxuICAgICAgICB0aGlzLl9zdHJhdGVneUxpc3QucHVzaChuZXcgU3RyYXRlZ3lJdGVtKG5hbWUsIHRoaXMuY29udGV4dCwgaGFuZGxlcikpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5omn6KGM562W55Wl5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIGV4ZWN1dGUoKSB7XHJcbiAgICAgICAgdGhpcy5fc3RyYXRlZ3lMaXN0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uaGFuZGxlcihpdGVtKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iXX0=