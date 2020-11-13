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

    _defineProperty(this, "extend", undefined);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0aW9uL2ZpZWxkTWVzc2FnZS50cyJdLCJuYW1lcyI6WyJGaWVsZE1lc3NhZ2VJdGVtIiwidW5kZWZpbmVkIiwib3BzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkSXRlbXMiLCJmb3JFYWNoIiwiayIsImlzU2hvd0FsbCIsImlzU2hvdyIsIm9sZFNob3dWYWx1ZSIsIm9sZEl0ZW0iLCJuZWVkU2hvd0ZpZWxkcyIsImluY2x1ZGVzIiwidW5OZWVkU2hvd0ZpZWxkcyIsImlzUGFzc2VkIiwibW9kZWwiLCJpdGVtTGlzdCIsImxlbmd0aCIsImZpbmQiLCJnZXRJdGVtIiwiaWQiLCJGaWVsZE1lc3NhZ2VNb2RlbCIsIkJhc2VDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0E7QUFDQTtJQUNhQSxnQjs7OztnQ0FJSSxFOztzQ0FJTyxJOzt3Q0FJNEIsRTs7b0NBSTNCQyxTOzs7Ozs7QUFDckI7QUFDSjtBQUNBO3lCQUNTQyxHLEVBQXdDO0FBQUE7O0FBQ3pDLFVBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sZUFBTyxJQUFQO0FBQ0g7O0FBQ0RDLE1BQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtDLFVBQWpCLEVBQTZCQyxPQUE3QixDQUFxQyxVQUFBQyxDQUFDLEVBQUk7QUFDdEM7QUFDQSxZQUFJTCxHQUFHLElBQUksT0FBUUEsR0FBRyxDQUFDTSxTQUFaLElBQTBCLFNBQXJDLEVBQWdEO0FBQzVDLFVBQUEsS0FBSSxDQUFDSCxVQUFMLENBQWdCRSxDQUFoQixFQUFtQkUsTUFBbkIsR0FBNEJQLEdBQUcsQ0FBQ00sU0FBaEM7QUFDQTtBQUNILFNBTHFDLENBTXRDOzs7QUFDQSxZQUFJRSxZQUFZLEdBQUcsQ0FBQyxFQUFFUixHQUFHLENBQUNTLE9BQUosSUFBZVQsR0FBRyxDQUFDUyxPQUFKLENBQVlOLFVBQVosQ0FBdUJFLENBQXZCLEVBQTBCRSxNQUEzQyxDQUFwQjs7QUFDQSxZQUFJLENBQUNQLEdBQUcsQ0FBQ1UsY0FBSixJQUFzQixFQUF2QixFQUEyQkMsUUFBM0IsQ0FBb0NOLENBQXBDLENBQUosRUFBNEM7QUFDeENHLFVBQUFBLFlBQVksR0FBRyxJQUFmO0FBQ0g7O0FBQ0QsWUFBSSxDQUFDUixHQUFHLENBQUNZLGdCQUFKLElBQXdCLEVBQXpCLEVBQTZCRCxRQUE3QixDQUFzQ04sQ0FBdEMsQ0FBSixFQUE4QztBQUMxQ0csVUFBQUEsWUFBWSxHQUFHLEtBQWY7QUFDSDs7QUFDRCxRQUFBLEtBQUksQ0FBQ0wsVUFBTCxDQUFnQkUsQ0FBaEIsRUFBbUJFLE1BQW5CLEdBQTRCQyxZQUE1QjtBQUNILE9BZkQ7QUFnQkEsYUFBTyxJQUFQO0FBQ0g7Ozs7O0FBR0w7QUFDQTtBQUNBOzs7OztBQUNPLFNBQVNLLFFBQVQsQ0FBOEJDLEtBQTlCLEVBQW9FO0FBQ3ZFLE1BQUksQ0FBQ0EsS0FBSyxDQUFDQyxRQUFOLENBQWVDLE1BQXBCLEVBQTRCO0FBQ3hCLFdBQU8sSUFBUDtBQUNIOztBQUNELFNBQU8sQ0FBQ0YsS0FBSyxDQUFDQyxRQUFOLENBQWVFLElBQWYsQ0FBb0IsVUFBQVosQ0FBQztBQUFBLFdBQUksQ0FBQ0EsQ0FBQyxDQUFDUSxRQUFQO0FBQUEsR0FBckIsQ0FBUjtBQUNIO0FBRUQ7QUFDQTtBQUNBOzs7QUFDTyxTQUFTSyxRQUFULENBQTZCSixLQUE3QixFQUFtRUssRUFBbkUsRUFBb0g7QUFDdkgsU0FBT0wsS0FBSyxDQUFDQyxRQUFOLENBQWVFLElBQWYsQ0FBb0IsVUFBQVosQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ2MsRUFBRixJQUFRQSxFQUFaO0FBQUEsR0FBckIsS0FBd0MsSUFBL0M7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7SUFDYUMsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Z0VBVWtDLEU7Ozs7Ozs7O0FBQzNDO0FBQ0o7QUFDQTs0QkFDWUQsRSxFQUFpRDtBQUNyRCxhQUFPRCxRQUFPLENBQUMsSUFBRCxFQUFPQyxFQUFQLENBQWQ7QUFDSDs7OzZCQUNRO0FBQ0wsYUFBTztBQUNITixRQUFBQSxRQUFRLEVBQUUsS0FBS0EsUUFEWjtBQUVIRSxRQUFBQSxRQUFRLEVBQUUsS0FBS0E7QUFGWixPQUFQO0FBSUg7Ozs7QUFyQkQ7QUFDSjtBQUNBO3dCQUM0QjtBQUNwQixhQUFPRixRQUFRLENBQUMsSUFBRCxDQUFmO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7Ozs7O0VBVHlEUSxvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDbGFzcyB9IGZyb20gXCIuLi9lbnRpdHkvc2VyaWFsaXplXCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvbkluaXRPcHNUeXBlPEV4dGVuZFR5cGU+IHtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5pi+56S65omA5pyJ5o+Q56S66K+tXHJcbiAgICAgKi9cclxuICAgIGlzU2hvd0FsbD86IGJvb2xlYW5cclxuICAgIC8qKlxyXG4gICAgICog5LiK5LiA5qyh55qE5a2X5q615o+Q56S65a+56LGh77yI5Li76KaB55So5LqO5Yid5aeL5YyW5pe25ZCI5bm25a+56LGh77yJXHJcbiAgICAgKi9cclxuICAgIG9sZEl0ZW0/OiBGaWVsZE1lc3NhZ2VJdGVtPEV4dGVuZFR5cGU+XHJcbiAgICAvKipcclxuICAgICAqIOmcgOimgeaYvuekuuaPkOekuuivreeahOWtl+autVxyXG4gICAgICovXHJcbiAgICBuZWVkU2hvd0ZpZWxkcz86IHN0cmluZ1tdXHJcbiAgICAvKipcclxuICAgICAqIOS4jemcgOimgeaYvuekuuaPkOekuuivreeahOWtl+autVxyXG4gICAgICovXHJcbiAgICB1bk5lZWRTaG93RmllbGRzPzogc3RyaW5nW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEl0ZW1UeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICog5o+Q56S66K+tXHJcbiAgICAgKi9cclxuICAgIG1zZzogc3RyaW5nLFxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmmL7npLpcclxuICAgICAqL1xyXG4gICAgaXNTaG93OiBib29sZWFuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmr4/kuIDpobnnmoTlhbfkvZPmj5DnpLrnsbtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaWVsZE1lc3NhZ2VJdGVtPEV4dGVuZFR5cGUgPSBhbnk+IHtcclxuICAgIC8qKlxyXG4gICAgICog5ZSv5LiAaWTmoIfor4ZcclxuICAgICAqL1xyXG4gICAgaWQ6IHN0cmluZyA9IFwiXCJcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm6aqM6K+B6YCa6L+HXHJcbiAgICAgKi9cclxuICAgIGlzUGFzc2VkOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgLyoqXHJcbiAgICAgKiDpnIDopoHpqozor4HnmoTlhbfkvZPlrZfmrrXkv6Hmga9cclxuICAgICAqL1xyXG4gICAgZmllbGRJdGVtczogeyBbbmFtZTogc3RyaW5nXTogRmllbGRJdGVtVHlwZSB9ID0ge31cclxuICAgIC8qKlxyXG4gICAgICog5omp5bGV5a2X5q61XHJcbiAgICAgKi9cclxuICAgIGV4dGVuZDogRXh0ZW5kVHlwZSA9IHVuZGVmaW5lZCBhcyBhbnlcclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW77yM6YeN5paw6K6+572uZmllbGRJdGVtc+S4reeahOWxnuaAp1xyXG4gICAgICovXHJcbiAgICBpbml0KG9wczogVmFsaWRhdGlvbkluaXRPcHNUeXBlPEV4dGVuZFR5cGU+KSB7XHJcbiAgICAgICAgaWYgKCFvcHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmllbGRJdGVtcykuZm9yRWFjaChrID0+IHtcclxuICAgICAgICAgICAgLy/lpoLmnpxpc1Nob3dBbGzmnInlgLzvvIzliJnlsIbmiYDmnInlrZfmrrXnmoRpc1Nob3forr7nva7kuLror6XlgLxcclxuICAgICAgICAgICAgaWYgKG9wcyAmJiB0eXBlb2YgKG9wcy5pc1Nob3dBbGwpID09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZEl0ZW1zW2tdLmlzU2hvdyA9IG9wcy5pc1Nob3dBbGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/lpoLmnpzljp/mnInnmoTpqozor4Hlr7nosaHkuK3nmoTlrZfmrrXvvJrjgJBuZWVkU2hvd0ZpZWxkc+WMheWQq+ivpeWtl+auteaXtu+8jOWImWlzU2hvd+iuvue9ruS4unRydWXjgJHvvIzjgJB1bk5lZWRTaG93RmllbGRz5YyF5ZCr6K+l5a2X5q615pe277yM5YiZaXNTaG936K6+572u5Li6ZmFsc2XjgJFcclxuICAgICAgICAgICAgbGV0IG9sZFNob3dWYWx1ZSA9ICEhKG9wcy5vbGRJdGVtICYmIG9wcy5vbGRJdGVtLmZpZWxkSXRlbXNba10uaXNTaG93KVxyXG4gICAgICAgICAgICBpZiAoKG9wcy5uZWVkU2hvd0ZpZWxkcyB8fCBbXSkuaW5jbHVkZXMoaykpIHtcclxuICAgICAgICAgICAgICAgIG9sZFNob3dWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKChvcHMudW5OZWVkU2hvd0ZpZWxkcyB8fCBbXSkuaW5jbHVkZXMoaykpIHtcclxuICAgICAgICAgICAgICAgIG9sZFNob3dWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRJdGVtc1trXS5pc1Nob3cgPSBvbGRTaG93VmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq1GaWVsZE1lc3NhZ2VNb2RlbOaYr+WQpumqjOivgemAmui/h1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUGFzc2VkPEV4dGVuZFR5cGU+KG1vZGVsOiBGaWVsZE1lc3NhZ2VNb2RlbDxFeHRlbmRUeXBlPikge1xyXG4gICAgaWYgKCFtb2RlbC5pdGVtTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICFtb2RlbC5pdGVtTGlzdC5maW5kKGsgPT4gIWsuaXNQYXNzZWQpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmoLnmja5pZOi/lOWbnkZpZWxkTWVzc2FnZU1vZGVs5Lit5a+55bqU55qERmllbGRNZXNzYWdlSXRlbVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW08RXh0ZW5kVHlwZT4obW9kZWw6IEZpZWxkTWVzc2FnZU1vZGVsPEV4dGVuZFR5cGU+LCBpZDogc3RyaW5nKTogRmllbGRNZXNzYWdlSXRlbTxFeHRlbmRUeXBlPiB8IG51bGwge1xyXG4gICAgcmV0dXJuIG1vZGVsLml0ZW1MaXN0LmZpbmQoayA9PiBrLmlkID09IGlkKSB8fCBudWxsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlrZfmrrXkv6Hmga/mj5DnpLrlrp7kvZPnsbvjgILmiornsbvkvLzigJzooajljZXpqozor4HigJ3nmoTlnLrmma/pgJrov4fkuIDkuKrnu5/kuIDnmoTlrp7kvZPnsbvmnaXooajnjrDvvIzmlrnkvr9qc+S7o+eggeWOu+ivu+WPluS4jueuoeeQhui/meS6m+eKtuaAgeS4juS/oeaBr+OAglxyXG4gKiDmr5TlpoLvvJrlpoLmnpzkuIDkuKrovpPlhaXpobnmoKHpqozkuI3pgJrov4fvvIzkvJrmtonlj4rliLDov5nkupvmlbDmja7nmoTlj5jljJbvvJrmmK/lkKbpqozor4HpgJrov4fjgIHplJnor6/mj5DnpLrmtojmga/jgIHmmK/lkKblj6rmmL7npLrlvZPliY3ov5nkuIDkuKrplJnor6/mtojmga/nrYnjgIHmmK/lkKbpnIDopoHmuIXnqbrlhbblroPplJnor6/mtojmga/nrYnjgIJcclxuICog56S65L6L55So5rOV77yaXHJcbiAqIGNvbnN0IG1vZGVsID0gbmV3IEZpZWxkTWVzc2FnZU1vZGVsKClcclxuICogbW9kZWwuaXRlbUxpc3QgPSBbXVxyXG4gKiBjb25zdCBpdGVtID0gbmV3IEZpZWxkTWVzc2FnZUl0ZW0oKVxyXG4gKiBpdGVtLmlzUGFzc2VkID0gZmFsc2VcclxuICogaXRlbS5maWVsZEl0ZW1zID0ge1xyXG4gKiBuYW1lOiB7XHJcbiAqICAgICBpc1Nob3c6IGZhbHNlLFxyXG4gKiAgICAgbXNnOiBcIlwiXHJcbiAqIH1cclxuICog5b2T5pWw5o2u5YyW55Sf5Y+Y5YyW5pe277yM6KaB5YGa55qE5Y+q5piv5pu05paw6L+Z5Liq5a+56LGh5Lit55qE5YW35L2T5a2X5q6154q25oCB5Y2z5Y+v77yM5Lia5Yqh5Luj56CB5Lit5qC55o2u6L+Z5Lqb54q25oCB5L+h5oGv57uf5LiA5Y675pi+56S66aG16Z2i44CCXHJcbiAqIFxyXG4qfVxyXG5tb2RlbC5pdGVtTGlzdC5wdXNoKGl0ZW0pXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZpZWxkTWVzc2FnZU1vZGVsPEV4dGVuZFR5cGUgPSBhbnk+IGV4dGVuZHMgQmFzZUNsYXNzIHtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCmaXRlbUxpc3TkuK3nmoTmiYDmnInnmoTlrZfmrrXmj5DnpLrliJfooajlnYflt7Lpqozor4HpgJrov4dcclxuICAgICAqL1xyXG4gICAgZ2V0IGlzUGFzc2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBpc1Bhc3NlZCh0aGlzKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlrZfmrrXmj5DnpLrliJfooahcclxuICAgICAqL1xyXG4gICAgaXRlbUxpc3Q6IEZpZWxkTWVzc2FnZUl0ZW08RXh0ZW5kVHlwZT5bXSA9IFtdXHJcbiAgICAvKipcclxuICAgICAqIOagueaNrmlk6L+U5Zue5oyH5a6a55qE5a2X5q615o+Q56S66aG5XHJcbiAgICAgKi9cclxuICAgIGdldEl0ZW0oaWQ6IHN0cmluZyk6IEZpZWxkTWVzc2FnZUl0ZW08RXh0ZW5kVHlwZT4gfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gZ2V0SXRlbSh0aGlzLCBpZClcclxuICAgIH1cclxuICAgIHRvSlNPTigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpc1Bhc3NlZDogdGhpcy5pc1Bhc3NlZCxcclxuICAgICAgICAgICAgaXRlbUxpc3Q6IHRoaXMuaXRlbUxpc3RcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=