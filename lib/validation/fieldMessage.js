"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPassed = isPassed;
exports.getItem = _getItem;
exports.FieldMessageModel = exports.FieldMessageItem = void 0;

var _serialize = require("../entity/serialize");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 每一项的具体提示类
 */
var FieldMessageItem =
/*#__PURE__*/
function () {
  function FieldMessageItem() {
    _classCallCheck(this, FieldMessageItem);

    _defineProperty(this, "id", "");

    _defineProperty(this, "isPassed", true);

    _defineProperty(this, "fieldItems", {});

    _defineProperty(this, "extend", void 0);
  }

  _createClass(FieldMessageItem, [{
    key: "init",

    /**
     * 初始化，重新设置fieldItems中的属性
     */
    value: function init(ops) {
      var _this = this;

      if (!ops) {
        return this;
      }

      Object.keys(this.fieldItems).forEach(function (k) {
        //如果isShowAll有值，则将所有字段的isShow设置为该值
        if (ops && typeof ops.isShowAll == 'boolean') {
          _this.fieldItems[k].isShow = ops.isShowAll;
          return;
        } //如果原有的验证对象中的字段：【needShowFields包含该字段时，则isShow设置为true】，【unNeedShowFields包含该字段时，则isShow设置为false】


        var oldShowValue = !!(ops.oldItem && ops.oldItem.fieldItems[k].isShow);

        if ((ops.needShowFields || []).includes(k)) {
          oldShowValue = true;
        }

        if ((ops.unNeedShowFields || []).includes(k)) {
          oldShowValue = false;
        }

        _this.fieldItems[k].isShow = oldShowValue;
      });
      return this;
    }
  }]);

  return FieldMessageItem;
}();
/**
 * 字段信息提示类
 */


exports.FieldMessageItem = FieldMessageItem;

var FieldMessageModel =
/*#__PURE__*/
function (_BaseClass) {
  _inherits(FieldMessageModel, _BaseClass);

  function FieldMessageModel() {
    var _getPrototypeOf2;

    var _this2;

    _classCallCheck(this, FieldMessageModel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FieldMessageModel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "itemList", []);

    return _this2;
  }

  _createClass(FieldMessageModel, [{
    key: "getItem",

    /**
     * 根据id返回指定的字段提示项
     */
    value: function getItem(id) {
      return _getItem(this, id);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        isPassed: this.isPassed,
        itemList: this.itemList
      };
    }
  }, {
    key: "isPassed",

    /**
     * 是否itemList中的所有的字段提示列表均已验证通过
     */
    get: function get() {
      return isPassed(this);
    }
    /**
     * 字段提示列表
     */

  }]);

  return FieldMessageModel;
}(_serialize.BaseClass);
/**
 * 判断FieldMessageModel是否验证通过
 */


exports.FieldMessageModel = FieldMessageModel;

function isPassed(model) {
  if (!model.itemList.length) {
    return true;
  }

  return !model.itemList.find(function (k) {
    return !k.isPassed;
  });
}
/**
 * 根据id返回FieldMessageModel中对应的FieldMessageItem
 */


function _getItem(model, id) {
  return model.itemList.find(function (k) {
    return k.id == id;
  }) || null;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0aW9uL2ZpZWxkTWVzc2FnZS50cyJdLCJuYW1lcyI6WyJGaWVsZE1lc3NhZ2VJdGVtIiwib3BzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkSXRlbXMiLCJmb3JFYWNoIiwiayIsImlzU2hvd0FsbCIsImlzU2hvdyIsIm9sZFNob3dWYWx1ZSIsIm9sZEl0ZW0iLCJuZWVkU2hvd0ZpZWxkcyIsImluY2x1ZGVzIiwidW5OZWVkU2hvd0ZpZWxkcyIsIkZpZWxkTWVzc2FnZU1vZGVsIiwiaWQiLCJnZXRJdGVtIiwiaXNQYXNzZWQiLCJpdGVtTGlzdCIsIkJhc2VDbGFzcyIsIm1vZGVsIiwibGVuZ3RoIiwiZmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7OztJQUdhQSxnQjs7Ozs7O2dDQUlJLEU7O3NDQUlPLEk7O3dDQUk0QixFOzs7Ozs7OztBQUtoRDs7O3lCQUdLQyxHLEVBQTRCO0FBQUE7O0FBQzdCLFVBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sZUFBTyxJQUFQO0FBQ0g7O0FBQ0RDLE1BQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtDLFVBQWpCLEVBQTZCQyxPQUE3QixDQUFxQyxVQUFBQyxDQUFDLEVBQUk7QUFDdEM7QUFDQSxZQUFJTCxHQUFHLElBQUksT0FBUUEsR0FBRyxDQUFDTSxTQUFaLElBQTBCLFNBQXJDLEVBQWdEO0FBQzVDLFVBQUEsS0FBSSxDQUFDSCxVQUFMLENBQWdCRSxDQUFoQixFQUFtQkUsTUFBbkIsR0FBNEJQLEdBQUcsQ0FBQ00sU0FBaEM7QUFDQTtBQUNILFNBTHFDLENBTXRDOzs7QUFDQSxZQUFJRSxZQUFZLEdBQUcsQ0FBQyxFQUFFUixHQUFHLENBQUNTLE9BQUosSUFBZVQsR0FBRyxDQUFDUyxPQUFKLENBQVlOLFVBQVosQ0FBdUJFLENBQXZCLEVBQTBCRSxNQUEzQyxDQUFwQjs7QUFDQSxZQUFJLENBQUNQLEdBQUcsQ0FBQ1UsY0FBSixJQUFzQixFQUF2QixFQUEyQkMsUUFBM0IsQ0FBb0NOLENBQXBDLENBQUosRUFBNEM7QUFDeENHLFVBQUFBLFlBQVksR0FBRyxJQUFmO0FBQ0g7O0FBQ0QsWUFBSSxDQUFDUixHQUFHLENBQUNZLGdCQUFKLElBQXdCLEVBQXpCLEVBQTZCRCxRQUE3QixDQUFzQ04sQ0FBdEMsQ0FBSixFQUE4QztBQUMxQ0csVUFBQUEsWUFBWSxHQUFHLEtBQWY7QUFDSDs7QUFDRCxRQUFBLEtBQUksQ0FBQ0wsVUFBTCxDQUFnQkUsQ0FBaEIsRUFBbUJFLE1BQW5CLEdBQTRCQyxZQUE1QjtBQUNILE9BZkQ7QUFnQkEsYUFBTyxJQUFQO0FBQ0g7Ozs7O0FBR0w7Ozs7Ozs7SUFHYUssaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztnRUFVc0IsRTs7Ozs7Ozs7QUFDL0I7Ozs0QkFHUUMsRSxFQUFxQztBQUN6QyxhQUFPQyxRQUFPLENBQUMsSUFBRCxFQUFPRCxFQUFQLENBQWQ7QUFDSDs7OzZCQUNRO0FBQ0wsYUFBTztBQUNIRSxRQUFBQSxRQUFRLEVBQUUsS0FBS0EsUUFEWjtBQUVIQyxRQUFBQSxRQUFRLEVBQUUsS0FBS0E7QUFGWixPQUFQO0FBSUg7Ozs7QUFyQkQ7Ozt3QkFHd0I7QUFDcEIsYUFBT0QsUUFBUSxDQUFDLElBQUQsQ0FBZjtBQUNIO0FBQ0Q7Ozs7Ozs7RUFQbUNFLG9CO0FBeUJ2Qzs7Ozs7OztBQUdPLFNBQVNGLFFBQVQsQ0FBa0JHLEtBQWxCLEVBQTRDO0FBQy9DLE1BQUksQ0FBQ0EsS0FBSyxDQUFDRixRQUFOLENBQWVHLE1BQXBCLEVBQTRCO0FBQ3hCLFdBQU8sSUFBUDtBQUNIOztBQUNELFNBQU8sQ0FBQ0QsS0FBSyxDQUFDRixRQUFOLENBQWVJLElBQWYsQ0FBb0IsVUFBQWhCLENBQUM7QUFBQSxXQUFJLENBQUNBLENBQUMsQ0FBQ1csUUFBUDtBQUFBLEdBQXJCLENBQVI7QUFDSDtBQUVEOzs7OztBQUdPLFNBQVNELFFBQVQsQ0FBaUJJLEtBQWpCLEVBQTJDTCxFQUEzQyxFQUFnRjtBQUNuRixTQUFPSyxLQUFLLENBQUNGLFFBQU4sQ0FBZUksSUFBZixDQUFvQixVQUFBaEIsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ1MsRUFBRixJQUFRQSxFQUFaO0FBQUEsR0FBckIsS0FBd0MsSUFBL0M7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDbGFzcyB9IGZyb20gXCIuLi9lbnRpdHkvc2VyaWFsaXplXCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvbkluaXRPcHNUeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5pi+56S65omA5pyJ5o+Q56S66K+tXHJcbiAgICAgKi9cclxuICAgIGlzU2hvd0FsbD86IGJvb2xlYW5cclxuICAgIC8qKlxyXG4gICAgICog5LiK5LiA5qyh55qE5a2X5q615o+Q56S65a+56LGh77yI5Li76KaB55So5LqO5Yid5aeL5YyW5pe25ZCI5bm25a+56LGh77yJXHJcbiAgICAgKi9cclxuICAgIG9sZEl0ZW0/OiBGaWVsZE1lc3NhZ2VJdGVtXHJcbiAgICAvKipcclxuICAgICAqIOmcgOimgeaYvuekuuaPkOekuuivreeahOWtl+autVxyXG4gICAgICovXHJcbiAgICBuZWVkU2hvd0ZpZWxkcz86IHN0cmluZ1tdXHJcbiAgICAvKipcclxuICAgICAqIOS4jemcgOimgeaYvuekuuaPkOekuuivreeahOWtl+autVxyXG4gICAgICovXHJcbiAgICB1bk5lZWRTaG93RmllbGRzPzogc3RyaW5nW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEl0ZW1UeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICog5o+Q56S66K+tXHJcbiAgICAgKi9cclxuICAgIG1zZzogc3RyaW5nLFxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmmL7npLpcclxuICAgICAqL1xyXG4gICAgaXNTaG93OiBib29sZWFuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmr4/kuIDpobnnmoTlhbfkvZPmj5DnpLrnsbtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaWVsZE1lc3NhZ2VJdGVtIHtcclxuICAgIC8qKlxyXG4gICAgICog5ZSv5LiAaWTmoIfor4ZcclxuICAgICAqL1xyXG4gICAgaWQ6IHN0cmluZyA9IFwiXCJcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm6aqM6K+B6YCa6L+HXHJcbiAgICAgKi9cclxuICAgIGlzUGFzc2VkOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgLyoqXHJcbiAgICAgKiDpnIDopoHpqozor4HnmoTlhbfkvZPlrZfmrrXkv6Hmga9cclxuICAgICAqL1xyXG4gICAgZmllbGRJdGVtczogeyBbbmFtZTogc3RyaW5nXTogRmllbGRJdGVtVHlwZSB9ID0ge31cclxuICAgIC8qKlxyXG4gICAgICog5omp5bGV5a2X5q61XHJcbiAgICAgKi9cclxuICAgIGV4dGVuZDogYW55XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlu+8jOmHjeaWsOiuvue9rmZpZWxkSXRlbXPkuK3nmoTlsZ7mgKdcclxuICAgICAqL1xyXG4gICAgaW5pdChvcHM6IFZhbGlkYXRpb25Jbml0T3BzVHlwZSkge1xyXG4gICAgICAgIGlmICghb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZpZWxkSXRlbXMpLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgICAgIC8v5aaC5p6caXNTaG93QWxs5pyJ5YC877yM5YiZ5bCG5omA5pyJ5a2X5q6155qEaXNTaG936K6+572u5Li66K+l5YC8XHJcbiAgICAgICAgICAgIGlmIChvcHMgJiYgdHlwZW9mIChvcHMuaXNTaG93QWxsKSA9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRJdGVtc1trXS5pc1Nob3cgPSBvcHMuaXNTaG93QWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5Y6f5pyJ55qE6aqM6K+B5a+56LGh5Lit55qE5a2X5q6177ya44CQbmVlZFNob3dGaWVsZHPljIXlkKvor6XlrZfmrrXml7bvvIzliJlpc1Nob3forr7nva7kuLp0cnVl44CR77yM44CQdW5OZWVkU2hvd0ZpZWxkc+WMheWQq+ivpeWtl+auteaXtu+8jOWImWlzU2hvd+iuvue9ruS4umZhbHNl44CRXHJcbiAgICAgICAgICAgIGxldCBvbGRTaG93VmFsdWUgPSAhIShvcHMub2xkSXRlbSAmJiBvcHMub2xkSXRlbS5maWVsZEl0ZW1zW2tdLmlzU2hvdylcclxuICAgICAgICAgICAgaWYgKChvcHMubmVlZFNob3dGaWVsZHMgfHwgW10pLmluY2x1ZGVzKGspKSB7XHJcbiAgICAgICAgICAgICAgICBvbGRTaG93VmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgob3BzLnVuTmVlZFNob3dGaWVsZHMgfHwgW10pLmluY2x1ZGVzKGspKSB7XHJcbiAgICAgICAgICAgICAgICBvbGRTaG93VmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmZpZWxkSXRlbXNba10uaXNTaG93ID0gb2xkU2hvd1ZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5a2X5q615L+h5oGv5o+Q56S657G7XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmllbGRNZXNzYWdlTW9kZWwgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKZpdGVtTGlzdOS4reeahOaJgOacieeahOWtl+auteaPkOekuuWIl+ihqOWdh+W3sumqjOivgemAmui/h1xyXG4gICAgICovXHJcbiAgICBnZXQgaXNQYXNzZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGlzUGFzc2VkKHRoaXMpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWtl+auteaPkOekuuWIl+ihqFxyXG4gICAgICovXHJcbiAgICBpdGVtTGlzdDogRmllbGRNZXNzYWdlSXRlbVtdID0gW11cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2uaWTov5Tlm57mjIflrprnmoTlrZfmrrXmj5DnpLrpoblcclxuICAgICAqL1xyXG4gICAgZ2V0SXRlbShpZDogc3RyaW5nKTogRmllbGRNZXNzYWdlSXRlbSB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiBnZXRJdGVtKHRoaXMsIGlkKVxyXG4gICAgfVxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzUGFzc2VkOiB0aGlzLmlzUGFzc2VkLFxyXG4gICAgICAgICAgICBpdGVtTGlzdDogdGhpcy5pdGVtTGlzdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWrUZpZWxkTWVzc2FnZU1vZGVs5piv5ZCm6aqM6K+B6YCa6L+HXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQYXNzZWQobW9kZWw6IEZpZWxkTWVzc2FnZU1vZGVsKSB7XHJcbiAgICBpZiAoIW1vZGVsLml0ZW1MaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gIW1vZGVsLml0ZW1MaXN0LmZpbmQoayA9PiAhay5pc1Bhc3NlZClcclxufVxyXG5cclxuLyoqXHJcbiAqIOagueaNrmlk6L+U5ZueRmllbGRNZXNzYWdlTW9kZWzkuK3lr7nlupTnmoRGaWVsZE1lc3NhZ2VJdGVtXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbShtb2RlbDogRmllbGRNZXNzYWdlTW9kZWwsIGlkOiBzdHJpbmcpOiBGaWVsZE1lc3NhZ2VJdGVtIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gbW9kZWwuaXRlbUxpc3QuZmluZChrID0+IGsuaWQgPT0gaWQpIHx8IG51bGxcclxufSJdfQ==