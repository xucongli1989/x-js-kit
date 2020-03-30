"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPassed = isPassed;
exports.getItem = _getItem;
exports.FieldMessageModel = exports.FieldMessageItem = void 0;

var _serialize = require("../entity/serialize");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 每一项的具体提示类
 */
var FieldMessageItem = /*#__PURE__*/function () {
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
 * 判断FieldMessageModel是否验证通过
 */


exports.FieldMessageItem = FieldMessageItem;

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
/**
 * 字段信息提示类
 */


var FieldMessageModel = /*#__PURE__*/function (_BaseClass) {
  _inherits(FieldMessageModel, _BaseClass);

  var _super = _createSuper(FieldMessageModel);

  function FieldMessageModel() {
    var _this2;

    _classCallCheck(this, FieldMessageModel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));

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

exports.FieldMessageModel = FieldMessageModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0aW9uL2ZpZWxkTWVzc2FnZS50cyJdLCJuYW1lcyI6WyJGaWVsZE1lc3NhZ2VJdGVtIiwib3BzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkSXRlbXMiLCJmb3JFYWNoIiwiayIsImlzU2hvd0FsbCIsImlzU2hvdyIsIm9sZFNob3dWYWx1ZSIsIm9sZEl0ZW0iLCJuZWVkU2hvd0ZpZWxkcyIsImluY2x1ZGVzIiwidW5OZWVkU2hvd0ZpZWxkcyIsImlzUGFzc2VkIiwibW9kZWwiLCJpdGVtTGlzdCIsImxlbmd0aCIsImZpbmQiLCJnZXRJdGVtIiwiaWQiLCJGaWVsZE1lc3NhZ2VNb2RlbCIsIkJhc2VDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBOzs7SUFHYUEsZ0I7Ozs7Z0NBSUksRTs7c0NBSU8sSTs7d0NBSTRCLEU7Ozs7Ozs7O0FBS2hEOzs7eUJBR0tDLEcsRUFBNEI7QUFBQTs7QUFDN0IsVUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixlQUFPLElBQVA7QUFDSDs7QUFDREMsTUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0MsVUFBakIsRUFBNkJDLE9BQTdCLENBQXFDLFVBQUFDLENBQUMsRUFBSTtBQUN0QztBQUNBLFlBQUlMLEdBQUcsSUFBSSxPQUFRQSxHQUFHLENBQUNNLFNBQVosSUFBMEIsU0FBckMsRUFBZ0Q7QUFDNUMsVUFBQSxLQUFJLENBQUNILFVBQUwsQ0FBZ0JFLENBQWhCLEVBQW1CRSxNQUFuQixHQUE0QlAsR0FBRyxDQUFDTSxTQUFoQztBQUNBO0FBQ0gsU0FMcUMsQ0FNdEM7OztBQUNBLFlBQUlFLFlBQVksR0FBRyxDQUFDLEVBQUVSLEdBQUcsQ0FBQ1MsT0FBSixJQUFlVCxHQUFHLENBQUNTLE9BQUosQ0FBWU4sVUFBWixDQUF1QkUsQ0FBdkIsRUFBMEJFLE1BQTNDLENBQXBCOztBQUNBLFlBQUksQ0FBQ1AsR0FBRyxDQUFDVSxjQUFKLElBQXNCLEVBQXZCLEVBQTJCQyxRQUEzQixDQUFvQ04sQ0FBcEMsQ0FBSixFQUE0QztBQUN4Q0csVUFBQUEsWUFBWSxHQUFHLElBQWY7QUFDSDs7QUFDRCxZQUFJLENBQUNSLEdBQUcsQ0FBQ1ksZ0JBQUosSUFBd0IsRUFBekIsRUFBNkJELFFBQTdCLENBQXNDTixDQUF0QyxDQUFKLEVBQThDO0FBQzFDRyxVQUFBQSxZQUFZLEdBQUcsS0FBZjtBQUNIOztBQUNELFFBQUEsS0FBSSxDQUFDTCxVQUFMLENBQWdCRSxDQUFoQixFQUFtQkUsTUFBbkIsR0FBNEJDLFlBQTVCO0FBQ0gsT0FmRDtBQWdCQSxhQUFPLElBQVA7QUFDSDs7Ozs7QUFHTDs7Ozs7OztBQUdPLFNBQVNLLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQTRDO0FBQy9DLE1BQUksQ0FBQ0EsS0FBSyxDQUFDQyxRQUFOLENBQWVDLE1BQXBCLEVBQTRCO0FBQ3hCLFdBQU8sSUFBUDtBQUNIOztBQUNELFNBQU8sQ0FBQ0YsS0FBSyxDQUFDQyxRQUFOLENBQWVFLElBQWYsQ0FBb0IsVUFBQVosQ0FBQztBQUFBLFdBQUksQ0FBQ0EsQ0FBQyxDQUFDUSxRQUFQO0FBQUEsR0FBckIsQ0FBUjtBQUNIO0FBRUQ7Ozs7O0FBR08sU0FBU0ssUUFBVCxDQUFpQkosS0FBakIsRUFBMkNLLEVBQTNDLEVBQWdGO0FBQ25GLFNBQU9MLEtBQUssQ0FBQ0MsUUFBTixDQUFlRSxJQUFmLENBQW9CLFVBQUFaLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNjLEVBQUYsSUFBUUEsRUFBWjtBQUFBLEdBQXJCLEtBQXdDLElBQS9DO0FBQ0g7QUFFRDs7Ozs7SUFHYUMsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Z0VBVXNCLEU7Ozs7Ozs7O0FBQy9COzs7NEJBR1FELEUsRUFBcUM7QUFDekMsYUFBT0QsUUFBTyxDQUFDLElBQUQsRUFBT0MsRUFBUCxDQUFkO0FBQ0g7Ozs2QkFDUTtBQUNMLGFBQU87QUFDSE4sUUFBQUEsUUFBUSxFQUFFLEtBQUtBLFFBRFo7QUFFSEUsUUFBQUEsUUFBUSxFQUFFLEtBQUtBO0FBRlosT0FBUDtBQUlIOzs7O0FBckJEOzs7d0JBR3dCO0FBQ3BCLGFBQU9GLFFBQVEsQ0FBQyxJQUFELENBQWY7QUFDSDtBQUNEOzs7Ozs7O0VBUG1DUSxvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDbGFzcyB9IGZyb20gXCIuLi9lbnRpdHkvc2VyaWFsaXplXCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvbkluaXRPcHNUeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5pi+56S65omA5pyJ5o+Q56S66K+tXHJcbiAgICAgKi9cclxuICAgIGlzU2hvd0FsbD86IGJvb2xlYW5cclxuICAgIC8qKlxyXG4gICAgICog5LiK5LiA5qyh55qE5a2X5q615o+Q56S65a+56LGh77yI5Li76KaB55So5LqO5Yid5aeL5YyW5pe25ZCI5bm25a+56LGh77yJXHJcbiAgICAgKi9cclxuICAgIG9sZEl0ZW0/OiBGaWVsZE1lc3NhZ2VJdGVtXHJcbiAgICAvKipcclxuICAgICAqIOmcgOimgeaYvuekuuaPkOekuuivreeahOWtl+autVxyXG4gICAgICovXHJcbiAgICBuZWVkU2hvd0ZpZWxkcz86IHN0cmluZ1tdXHJcbiAgICAvKipcclxuICAgICAqIOS4jemcgOimgeaYvuekuuaPkOekuuivreeahOWtl+autVxyXG4gICAgICovXHJcbiAgICB1bk5lZWRTaG93RmllbGRzPzogc3RyaW5nW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEl0ZW1UeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICog5o+Q56S66K+tXHJcbiAgICAgKi9cclxuICAgIG1zZzogc3RyaW5nLFxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmmL7npLpcclxuICAgICAqL1xyXG4gICAgaXNTaG93OiBib29sZWFuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmr4/kuIDpobnnmoTlhbfkvZPmj5DnpLrnsbtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaWVsZE1lc3NhZ2VJdGVtIHtcclxuICAgIC8qKlxyXG4gICAgICog5ZSv5LiAaWTmoIfor4ZcclxuICAgICAqL1xyXG4gICAgaWQ6IHN0cmluZyA9IFwiXCJcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm6aqM6K+B6YCa6L+HXHJcbiAgICAgKi9cclxuICAgIGlzUGFzc2VkOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgLyoqXHJcbiAgICAgKiDpnIDopoHpqozor4HnmoTlhbfkvZPlrZfmrrXkv6Hmga9cclxuICAgICAqL1xyXG4gICAgZmllbGRJdGVtczogeyBbbmFtZTogc3RyaW5nXTogRmllbGRJdGVtVHlwZSB9ID0ge31cclxuICAgIC8qKlxyXG4gICAgICog5omp5bGV5a2X5q61XHJcbiAgICAgKi9cclxuICAgIGV4dGVuZDogYW55XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlu+8jOmHjeaWsOiuvue9rmZpZWxkSXRlbXPkuK3nmoTlsZ7mgKdcclxuICAgICAqL1xyXG4gICAgaW5pdChvcHM6IFZhbGlkYXRpb25Jbml0T3BzVHlwZSkge1xyXG4gICAgICAgIGlmICghb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZpZWxkSXRlbXMpLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgICAgIC8v5aaC5p6caXNTaG93QWxs5pyJ5YC877yM5YiZ5bCG5omA5pyJ5a2X5q6155qEaXNTaG936K6+572u5Li66K+l5YC8XHJcbiAgICAgICAgICAgIGlmIChvcHMgJiYgdHlwZW9mIChvcHMuaXNTaG93QWxsKSA9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRJdGVtc1trXS5pc1Nob3cgPSBvcHMuaXNTaG93QWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5Y6f5pyJ55qE6aqM6K+B5a+56LGh5Lit55qE5a2X5q6177ya44CQbmVlZFNob3dGaWVsZHPljIXlkKvor6XlrZfmrrXml7bvvIzliJlpc1Nob3forr7nva7kuLp0cnVl44CR77yM44CQdW5OZWVkU2hvd0ZpZWxkc+WMheWQq+ivpeWtl+auteaXtu+8jOWImWlzU2hvd+iuvue9ruS4umZhbHNl44CRXHJcbiAgICAgICAgICAgIGxldCBvbGRTaG93VmFsdWUgPSAhIShvcHMub2xkSXRlbSAmJiBvcHMub2xkSXRlbS5maWVsZEl0ZW1zW2tdLmlzU2hvdylcclxuICAgICAgICAgICAgaWYgKChvcHMubmVlZFNob3dGaWVsZHMgfHwgW10pLmluY2x1ZGVzKGspKSB7XHJcbiAgICAgICAgICAgICAgICBvbGRTaG93VmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgob3BzLnVuTmVlZFNob3dGaWVsZHMgfHwgW10pLmluY2x1ZGVzKGspKSB7XHJcbiAgICAgICAgICAgICAgICBvbGRTaG93VmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmZpZWxkSXRlbXNba10uaXNTaG93ID0gb2xkU2hvd1ZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5patRmllbGRNZXNzYWdlTW9kZWzmmK/lkKbpqozor4HpgJrov4dcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Bhc3NlZChtb2RlbDogRmllbGRNZXNzYWdlTW9kZWwpIHtcclxuICAgIGlmICghbW9kZWwuaXRlbUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJldHVybiAhbW9kZWwuaXRlbUxpc3QuZmluZChrID0+ICFrLmlzUGFzc2VkKVxyXG59XHJcblxyXG4vKipcclxuICog5qC55o2uaWTov5Tlm55GaWVsZE1lc3NhZ2VNb2RlbOS4reWvueW6lOeahEZpZWxkTWVzc2FnZUl0ZW1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtKG1vZGVsOiBGaWVsZE1lc3NhZ2VNb2RlbCwgaWQ6IHN0cmluZyk6IEZpZWxkTWVzc2FnZUl0ZW0gfCBudWxsIHtcclxuICAgIHJldHVybiBtb2RlbC5pdGVtTGlzdC5maW5kKGsgPT4gay5pZCA9PSBpZCkgfHwgbnVsbFxyXG59XHJcblxyXG4vKipcclxuICog5a2X5q615L+h5oGv5o+Q56S657G7XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmllbGRNZXNzYWdlTW9kZWwgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKZpdGVtTGlzdOS4reeahOaJgOacieeahOWtl+auteaPkOekuuWIl+ihqOWdh+W3sumqjOivgemAmui/h1xyXG4gICAgICovXHJcbiAgICBnZXQgaXNQYXNzZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGlzUGFzc2VkKHRoaXMpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWtl+auteaPkOekuuWIl+ihqFxyXG4gICAgICovXHJcbiAgICBpdGVtTGlzdDogRmllbGRNZXNzYWdlSXRlbVtdID0gW11cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2uaWTov5Tlm57mjIflrprnmoTlrZfmrrXmj5DnpLrpoblcclxuICAgICAqL1xyXG4gICAgZ2V0SXRlbShpZDogc3RyaW5nKTogRmllbGRNZXNzYWdlSXRlbSB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiBnZXRJdGVtKHRoaXMsIGlkKVxyXG4gICAgfVxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzUGFzc2VkOiB0aGlzLmlzUGFzc2VkLFxyXG4gICAgICAgICAgICBpdGVtTGlzdDogdGhpcy5pdGVtTGlzdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==