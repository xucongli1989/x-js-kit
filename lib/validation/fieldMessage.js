"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPassed = isPassed;
exports.getItem = _getItem;
exports.FieldMessageModel = exports.FieldMessageItem = void 0;

var _serialize = require("../entity/serialize");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
 * 字段信息提示实体类。把类似“表单验证”的场景通过一个统一的实体类来表现，方便js代码去读取与管理这些状态与信息。
 * 比如：如果一个输入项校验不通过，会涉及到这些数据的变化：是否验证通过、错误提示消息、是否只显示当前这一个错误消息等、是否需要清空其它错误消息等。
 * 示例用法：
 * const model = new FieldMessageModel()
 * model.itemList = []
 * const item = new FieldMessageItem()
 * item.isPassed = false
 * item.fieldItems = {
 * name: {
 *     isShow: false,
 *     msg: ""
 * }
 * 当数据化生变化时，要做的只是更新这个对象中的具体字段状态即可，业务代码中根据这些状态信息统一去显示页面。
 * 
*}
model.itemList.push(item)
 * 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0aW9uL2ZpZWxkTWVzc2FnZS50cyJdLCJuYW1lcyI6WyJGaWVsZE1lc3NhZ2VJdGVtIiwib3BzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkSXRlbXMiLCJmb3JFYWNoIiwiayIsImlzU2hvd0FsbCIsImlzU2hvdyIsIm9sZFNob3dWYWx1ZSIsIm9sZEl0ZW0iLCJuZWVkU2hvd0ZpZWxkcyIsImluY2x1ZGVzIiwidW5OZWVkU2hvd0ZpZWxkcyIsImlzUGFzc2VkIiwibW9kZWwiLCJpdGVtTGlzdCIsImxlbmd0aCIsImZpbmQiLCJnZXRJdGVtIiwiaWQiLCJGaWVsZE1lc3NhZ2VNb2RlbCIsIkJhc2VDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0E7QUFDQTtJQUNhQSxnQjs7OztnQ0FJSSxFOztzQ0FJTyxJOzt3Q0FJNEIsRTs7Ozs7Ozs7QUFLaEQ7QUFDSjtBQUNBO3lCQUNTQyxHLEVBQTRCO0FBQUE7O0FBQzdCLFVBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sZUFBTyxJQUFQO0FBQ0g7O0FBQ0RDLE1BQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtDLFVBQWpCLEVBQTZCQyxPQUE3QixDQUFxQyxVQUFBQyxDQUFDLEVBQUk7QUFDdEM7QUFDQSxZQUFJTCxHQUFHLElBQUksT0FBUUEsR0FBRyxDQUFDTSxTQUFaLElBQTBCLFNBQXJDLEVBQWdEO0FBQzVDLFVBQUEsS0FBSSxDQUFDSCxVQUFMLENBQWdCRSxDQUFoQixFQUFtQkUsTUFBbkIsR0FBNEJQLEdBQUcsQ0FBQ00sU0FBaEM7QUFDQTtBQUNILFNBTHFDLENBTXRDOzs7QUFDQSxZQUFJRSxZQUFZLEdBQUcsQ0FBQyxFQUFFUixHQUFHLENBQUNTLE9BQUosSUFBZVQsR0FBRyxDQUFDUyxPQUFKLENBQVlOLFVBQVosQ0FBdUJFLENBQXZCLEVBQTBCRSxNQUEzQyxDQUFwQjs7QUFDQSxZQUFJLENBQUNQLEdBQUcsQ0FBQ1UsY0FBSixJQUFzQixFQUF2QixFQUEyQkMsUUFBM0IsQ0FBb0NOLENBQXBDLENBQUosRUFBNEM7QUFDeENHLFVBQUFBLFlBQVksR0FBRyxJQUFmO0FBQ0g7O0FBQ0QsWUFBSSxDQUFDUixHQUFHLENBQUNZLGdCQUFKLElBQXdCLEVBQXpCLEVBQTZCRCxRQUE3QixDQUFzQ04sQ0FBdEMsQ0FBSixFQUE4QztBQUMxQ0csVUFBQUEsWUFBWSxHQUFHLEtBQWY7QUFDSDs7QUFDRCxRQUFBLEtBQUksQ0FBQ0wsVUFBTCxDQUFnQkUsQ0FBaEIsRUFBbUJFLE1BQW5CLEdBQTRCQyxZQUE1QjtBQUNILE9BZkQ7QUFnQkEsYUFBTyxJQUFQO0FBQ0g7Ozs7O0FBR0w7QUFDQTtBQUNBOzs7OztBQUNPLFNBQVNLLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQTRDO0FBQy9DLE1BQUksQ0FBQ0EsS0FBSyxDQUFDQyxRQUFOLENBQWVDLE1BQXBCLEVBQTRCO0FBQ3hCLFdBQU8sSUFBUDtBQUNIOztBQUNELFNBQU8sQ0FBQ0YsS0FBSyxDQUFDQyxRQUFOLENBQWVFLElBQWYsQ0FBb0IsVUFBQVosQ0FBQztBQUFBLFdBQUksQ0FBQ0EsQ0FBQyxDQUFDUSxRQUFQO0FBQUEsR0FBckIsQ0FBUjtBQUNIO0FBRUQ7QUFDQTtBQUNBOzs7QUFDTyxTQUFTSyxRQUFULENBQWlCSixLQUFqQixFQUEyQ0ssRUFBM0MsRUFBZ0Y7QUFDbkYsU0FBT0wsS0FBSyxDQUFDQyxRQUFOLENBQWVFLElBQWYsQ0FBb0IsVUFBQVosQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ2MsRUFBRixJQUFRQSxFQUFaO0FBQUEsR0FBckIsS0FBd0MsSUFBL0M7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7SUFDYUMsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Z0VBVXNCLEU7Ozs7Ozs7O0FBQy9CO0FBQ0o7QUFDQTs0QkFDWUQsRSxFQUFxQztBQUN6QyxhQUFPRCxRQUFPLENBQUMsSUFBRCxFQUFPQyxFQUFQLENBQWQ7QUFDSDs7OzZCQUNRO0FBQ0wsYUFBTztBQUNITixRQUFBQSxRQUFRLEVBQUUsS0FBS0EsUUFEWjtBQUVIRSxRQUFBQSxRQUFRLEVBQUUsS0FBS0E7QUFGWixPQUFQO0FBSUg7Ozs7QUFyQkQ7QUFDSjtBQUNBO3dCQUM0QjtBQUNwQixhQUFPRixRQUFRLENBQUMsSUFBRCxDQUFmO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7Ozs7O0VBVHVDUSxvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDbGFzcyB9IGZyb20gXCIuLi9lbnRpdHkvc2VyaWFsaXplXCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvbkluaXRPcHNUeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5pi+56S65omA5pyJ5o+Q56S66K+tXHJcbiAgICAgKi9cclxuICAgIGlzU2hvd0FsbD86IGJvb2xlYW5cclxuICAgIC8qKlxyXG4gICAgICog5LiK5LiA5qyh55qE5a2X5q615o+Q56S65a+56LGh77yI5Li76KaB55So5LqO5Yid5aeL5YyW5pe25ZCI5bm25a+56LGh77yJXHJcbiAgICAgKi9cclxuICAgIG9sZEl0ZW0/OiBGaWVsZE1lc3NhZ2VJdGVtXHJcbiAgICAvKipcclxuICAgICAqIOmcgOimgeaYvuekuuaPkOekuuivreeahOWtl+autVxyXG4gICAgICovXHJcbiAgICBuZWVkU2hvd0ZpZWxkcz86IHN0cmluZ1tdXHJcbiAgICAvKipcclxuICAgICAqIOS4jemcgOimgeaYvuekuuaPkOekuuivreeahOWtl+autVxyXG4gICAgICovXHJcbiAgICB1bk5lZWRTaG93RmllbGRzPzogc3RyaW5nW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEl0ZW1UeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICog5o+Q56S66K+tXHJcbiAgICAgKi9cclxuICAgIG1zZzogc3RyaW5nLFxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmmL7npLpcclxuICAgICAqL1xyXG4gICAgaXNTaG93OiBib29sZWFuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmr4/kuIDpobnnmoTlhbfkvZPmj5DnpLrnsbtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaWVsZE1lc3NhZ2VJdGVtIHtcclxuICAgIC8qKlxyXG4gICAgICog5ZSv5LiAaWTmoIfor4ZcclxuICAgICAqL1xyXG4gICAgaWQ6IHN0cmluZyA9IFwiXCJcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm6aqM6K+B6YCa6L+HXHJcbiAgICAgKi9cclxuICAgIGlzUGFzc2VkOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgLyoqXHJcbiAgICAgKiDpnIDopoHpqozor4HnmoTlhbfkvZPlrZfmrrXkv6Hmga9cclxuICAgICAqL1xyXG4gICAgZmllbGRJdGVtczogeyBbbmFtZTogc3RyaW5nXTogRmllbGRJdGVtVHlwZSB9ID0ge31cclxuICAgIC8qKlxyXG4gICAgICog5omp5bGV5a2X5q61XHJcbiAgICAgKi9cclxuICAgIGV4dGVuZDogYW55XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlu+8jOmHjeaWsOiuvue9rmZpZWxkSXRlbXPkuK3nmoTlsZ7mgKdcclxuICAgICAqL1xyXG4gICAgaW5pdChvcHM6IFZhbGlkYXRpb25Jbml0T3BzVHlwZSkge1xyXG4gICAgICAgIGlmICghb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZpZWxkSXRlbXMpLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgICAgIC8v5aaC5p6caXNTaG93QWxs5pyJ5YC877yM5YiZ5bCG5omA5pyJ5a2X5q6155qEaXNTaG936K6+572u5Li66K+l5YC8XHJcbiAgICAgICAgICAgIGlmIChvcHMgJiYgdHlwZW9mIChvcHMuaXNTaG93QWxsKSA9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRJdGVtc1trXS5pc1Nob3cgPSBvcHMuaXNTaG93QWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5Y6f5pyJ55qE6aqM6K+B5a+56LGh5Lit55qE5a2X5q6177ya44CQbmVlZFNob3dGaWVsZHPljIXlkKvor6XlrZfmrrXml7bvvIzliJlpc1Nob3forr7nva7kuLp0cnVl44CR77yM44CQdW5OZWVkU2hvd0ZpZWxkc+WMheWQq+ivpeWtl+auteaXtu+8jOWImWlzU2hvd+iuvue9ruS4umZhbHNl44CRXHJcbiAgICAgICAgICAgIGxldCBvbGRTaG93VmFsdWUgPSAhIShvcHMub2xkSXRlbSAmJiBvcHMub2xkSXRlbS5maWVsZEl0ZW1zW2tdLmlzU2hvdylcclxuICAgICAgICAgICAgaWYgKChvcHMubmVlZFNob3dGaWVsZHMgfHwgW10pLmluY2x1ZGVzKGspKSB7XHJcbiAgICAgICAgICAgICAgICBvbGRTaG93VmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgob3BzLnVuTmVlZFNob3dGaWVsZHMgfHwgW10pLmluY2x1ZGVzKGspKSB7XHJcbiAgICAgICAgICAgICAgICBvbGRTaG93VmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmZpZWxkSXRlbXNba10uaXNTaG93ID0gb2xkU2hvd1ZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5Yik5patRmllbGRNZXNzYWdlTW9kZWzmmK/lkKbpqozor4HpgJrov4dcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Bhc3NlZChtb2RlbDogRmllbGRNZXNzYWdlTW9kZWwpIHtcclxuICAgIGlmICghbW9kZWwuaXRlbUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJldHVybiAhbW9kZWwuaXRlbUxpc3QuZmluZChrID0+ICFrLmlzUGFzc2VkKVxyXG59XHJcblxyXG4vKipcclxuICog5qC55o2uaWTov5Tlm55GaWVsZE1lc3NhZ2VNb2RlbOS4reWvueW6lOeahEZpZWxkTWVzc2FnZUl0ZW1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtKG1vZGVsOiBGaWVsZE1lc3NhZ2VNb2RlbCwgaWQ6IHN0cmluZyk6IEZpZWxkTWVzc2FnZUl0ZW0gfCBudWxsIHtcclxuICAgIHJldHVybiBtb2RlbC5pdGVtTGlzdC5maW5kKGsgPT4gay5pZCA9PSBpZCkgfHwgbnVsbFxyXG59XHJcblxyXG4vKipcclxuICog5a2X5q615L+h5oGv5o+Q56S65a6e5L2T57G744CC5oqK57G75Ly84oCc6KGo5Y2V6aqM6K+B4oCd55qE5Zy65pmv6YCa6L+H5LiA5Liq57uf5LiA55qE5a6e5L2T57G75p2l6KGo546w77yM5pa55L6/anPku6PnoIHljrvor7vlj5bkuI7nrqHnkIbov5nkupvnirbmgIHkuI7kv6Hmga/jgIJcclxuICog5q+U5aaC77ya5aaC5p6c5LiA5Liq6L6T5YWl6aG55qCh6aqM5LiN6YCa6L+H77yM5Lya5raJ5Y+K5Yiw6L+Z5Lqb5pWw5o2u55qE5Y+Y5YyW77ya5piv5ZCm6aqM6K+B6YCa6L+H44CB6ZSZ6K+v5o+Q56S65raI5oGv44CB5piv5ZCm5Y+q5pi+56S65b2T5YmN6L+Z5LiA5Liq6ZSZ6K+v5raI5oGv562J44CB5piv5ZCm6ZyA6KaB5riF56m65YW25a6D6ZSZ6K+v5raI5oGv562J44CCXHJcbiAqIOekuuS+i+eUqOazle+8mlxyXG4gKiBjb25zdCBtb2RlbCA9IG5ldyBGaWVsZE1lc3NhZ2VNb2RlbCgpXHJcbiAqIG1vZGVsLml0ZW1MaXN0ID0gW11cclxuICogY29uc3QgaXRlbSA9IG5ldyBGaWVsZE1lc3NhZ2VJdGVtKClcclxuICogaXRlbS5pc1Bhc3NlZCA9IGZhbHNlXHJcbiAqIGl0ZW0uZmllbGRJdGVtcyA9IHtcclxuICogbmFtZToge1xyXG4gKiAgICAgaXNTaG93OiBmYWxzZSxcclxuICogICAgIG1zZzogXCJcIlxyXG4gKiB9XHJcbiAqIOW9k+aVsOaNruWMlueUn+WPmOWMluaXtu+8jOimgeWBmueahOWPquaYr+abtOaWsOi/meS4quWvueixoeS4reeahOWFt+S9k+Wtl+auteeKtuaAgeWNs+WPr++8jOS4muWKoeS7o+eggeS4reagueaNrui/meS6m+eKtuaAgeS/oeaBr+e7n+S4gOWOu+aYvuekuumhtemdouOAglxyXG4gKiBcclxuKn1cclxubW9kZWwuaXRlbUxpc3QucHVzaChpdGVtKVxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaWVsZE1lc3NhZ2VNb2RlbCBleHRlbmRzIEJhc2VDbGFzcyB7XHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpml0ZW1MaXN05Lit55qE5omA5pyJ55qE5a2X5q615o+Q56S65YiX6KGo5Z2H5bey6aqM6K+B6YCa6L+HXHJcbiAgICAgKi9cclxuICAgIGdldCBpc1Bhc3NlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gaXNQYXNzZWQodGhpcylcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5a2X5q615o+Q56S65YiX6KGoXHJcbiAgICAgKi9cclxuICAgIGl0ZW1MaXN0OiBGaWVsZE1lc3NhZ2VJdGVtW10gPSBbXVxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja5pZOi/lOWbnuaMh+WumueahOWtl+auteaPkOekuumhuVxyXG4gICAgICovXHJcbiAgICBnZXRJdGVtKGlkOiBzdHJpbmcpOiBGaWVsZE1lc3NhZ2VJdGVtIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIGdldEl0ZW0odGhpcywgaWQpXHJcbiAgICB9XHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXNQYXNzZWQ6IHRoaXMuaXNQYXNzZWQsXHJcbiAgICAgICAgICAgIGl0ZW1MaXN0OiB0aGlzLml0ZW1MaXN0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19