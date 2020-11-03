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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0aW9uL2ZpZWxkTWVzc2FnZS50cyJdLCJuYW1lcyI6WyJGaWVsZE1lc3NhZ2VJdGVtIiwib3BzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkSXRlbXMiLCJmb3JFYWNoIiwiayIsImlzU2hvd0FsbCIsImlzU2hvdyIsIm9sZFNob3dWYWx1ZSIsIm9sZEl0ZW0iLCJuZWVkU2hvd0ZpZWxkcyIsImluY2x1ZGVzIiwidW5OZWVkU2hvd0ZpZWxkcyIsImlzUGFzc2VkIiwibW9kZWwiLCJpdGVtTGlzdCIsImxlbmd0aCIsImZpbmQiLCJnZXRJdGVtIiwiaWQiLCJGaWVsZE1lc3NhZ2VNb2RlbCIsIkJhc2VDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBOzs7SUFHYUEsZ0I7Ozs7Z0NBSUksRTs7c0NBSU8sSTs7d0NBSTRCLEU7Ozs7Ozs7O0FBS2hEOzs7eUJBR0tDLEcsRUFBNEI7QUFBQTs7QUFDN0IsVUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixlQUFPLElBQVA7QUFDSDs7QUFDREMsTUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0MsVUFBakIsRUFBNkJDLE9BQTdCLENBQXFDLFVBQUFDLENBQUMsRUFBSTtBQUN0QztBQUNBLFlBQUlMLEdBQUcsSUFBSSxPQUFRQSxHQUFHLENBQUNNLFNBQVosSUFBMEIsU0FBckMsRUFBZ0Q7QUFDNUMsVUFBQSxLQUFJLENBQUNILFVBQUwsQ0FBZ0JFLENBQWhCLEVBQW1CRSxNQUFuQixHQUE0QlAsR0FBRyxDQUFDTSxTQUFoQztBQUNBO0FBQ0gsU0FMcUMsQ0FNdEM7OztBQUNBLFlBQUlFLFlBQVksR0FBRyxDQUFDLEVBQUVSLEdBQUcsQ0FBQ1MsT0FBSixJQUFlVCxHQUFHLENBQUNTLE9BQUosQ0FBWU4sVUFBWixDQUF1QkUsQ0FBdkIsRUFBMEJFLE1BQTNDLENBQXBCOztBQUNBLFlBQUksQ0FBQ1AsR0FBRyxDQUFDVSxjQUFKLElBQXNCLEVBQXZCLEVBQTJCQyxRQUEzQixDQUFvQ04sQ0FBcEMsQ0FBSixFQUE0QztBQUN4Q0csVUFBQUEsWUFBWSxHQUFHLElBQWY7QUFDSDs7QUFDRCxZQUFJLENBQUNSLEdBQUcsQ0FBQ1ksZ0JBQUosSUFBd0IsRUFBekIsRUFBNkJELFFBQTdCLENBQXNDTixDQUF0QyxDQUFKLEVBQThDO0FBQzFDRyxVQUFBQSxZQUFZLEdBQUcsS0FBZjtBQUNIOztBQUNELFFBQUEsS0FBSSxDQUFDTCxVQUFMLENBQWdCRSxDQUFoQixFQUFtQkUsTUFBbkIsR0FBNEJDLFlBQTVCO0FBQ0gsT0FmRDtBQWdCQSxhQUFPLElBQVA7QUFDSDs7Ozs7QUFHTDs7Ozs7OztBQUdPLFNBQVNLLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQTRDO0FBQy9DLE1BQUksQ0FBQ0EsS0FBSyxDQUFDQyxRQUFOLENBQWVDLE1BQXBCLEVBQTRCO0FBQ3hCLFdBQU8sSUFBUDtBQUNIOztBQUNELFNBQU8sQ0FBQ0YsS0FBSyxDQUFDQyxRQUFOLENBQWVFLElBQWYsQ0FBb0IsVUFBQVosQ0FBQztBQUFBLFdBQUksQ0FBQ0EsQ0FBQyxDQUFDUSxRQUFQO0FBQUEsR0FBckIsQ0FBUjtBQUNIO0FBRUQ7Ozs7O0FBR08sU0FBU0ssUUFBVCxDQUFpQkosS0FBakIsRUFBMkNLLEVBQTNDLEVBQWdGO0FBQ25GLFNBQU9MLEtBQUssQ0FBQ0MsUUFBTixDQUFlRSxJQUFmLENBQW9CLFVBQUFaLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNjLEVBQUYsSUFBUUEsRUFBWjtBQUFBLEdBQXJCLEtBQXdDLElBQS9DO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUJhQyxpQjs7Ozs7Ozs7Ozs7Ozs7OztnRUFVc0IsRTs7Ozs7Ozs7QUFDL0I7Ozs0QkFHUUQsRSxFQUFxQztBQUN6QyxhQUFPRCxRQUFPLENBQUMsSUFBRCxFQUFPQyxFQUFQLENBQWQ7QUFDSDs7OzZCQUNRO0FBQ0wsYUFBTztBQUNITixRQUFBQSxRQUFRLEVBQUUsS0FBS0EsUUFEWjtBQUVIRSxRQUFBQSxRQUFRLEVBQUUsS0FBS0E7QUFGWixPQUFQO0FBSUg7Ozs7QUFyQkQ7Ozt3QkFHd0I7QUFDcEIsYUFBT0YsUUFBUSxDQUFDLElBQUQsQ0FBZjtBQUNIO0FBQ0Q7Ozs7Ozs7RUFQbUNRLG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNsYXNzIH0gZnJvbSBcIi4uL2VudGl0eS9zZXJpYWxpemVcIlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9uSW5pdE9wc1R5cGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmmL7npLrmiYDmnInmj5DnpLror61cclxuICAgICAqL1xyXG4gICAgaXNTaG93QWxsPzogYm9vbGVhblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIrkuIDmrKHnmoTlrZfmrrXmj5DnpLrlr7nosaHvvIjkuLvopoHnlKjkuo7liJ3lp4vljJbml7blkIjlubblr7nosaHvvIlcclxuICAgICAqL1xyXG4gICAgb2xkSXRlbT86IEZpZWxkTWVzc2FnZUl0ZW1cclxuICAgIC8qKlxyXG4gICAgICog6ZyA6KaB5pi+56S65o+Q56S66K+t55qE5a2X5q61XHJcbiAgICAgKi9cclxuICAgIG5lZWRTaG93RmllbGRzPzogc3RyaW5nW11cclxuICAgIC8qKlxyXG4gICAgICog5LiN6ZyA6KaB5pi+56S65o+Q56S66K+t55qE5a2X5q61XHJcbiAgICAgKi9cclxuICAgIHVuTmVlZFNob3dGaWVsZHM/OiBzdHJpbmdbXVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkSXRlbVR5cGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmj5DnpLror61cclxuICAgICAqL1xyXG4gICAgbXNnOiBzdHJpbmcsXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuaYvuekulxyXG4gICAgICovXHJcbiAgICBpc1Nob3c6IGJvb2xlYW5cclxufVxyXG5cclxuLyoqXHJcbiAqIOavj+S4gOmhueeahOWFt+S9k+aPkOekuuexu1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZpZWxkTWVzc2FnZUl0ZW0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDllK/kuIBpZOagh+ivhlxyXG4gICAgICovXHJcbiAgICBpZDogc3RyaW5nID0gXCJcIlxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbpqozor4HpgJrov4dcclxuICAgICAqL1xyXG4gICAgaXNQYXNzZWQ6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICAvKipcclxuICAgICAqIOmcgOimgemqjOivgeeahOWFt+S9k+Wtl+auteS/oeaBr1xyXG4gICAgICovXHJcbiAgICBmaWVsZEl0ZW1zOiB7IFtuYW1lOiBzdHJpbmddOiBGaWVsZEl0ZW1UeXBlIH0gPSB7fVxyXG4gICAgLyoqXHJcbiAgICAgKiDmianlsZXlrZfmrrVcclxuICAgICAqL1xyXG4gICAgZXh0ZW5kOiBhbnlcclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW77yM6YeN5paw6K6+572uZmllbGRJdGVtc+S4reeahOWxnuaAp1xyXG4gICAgICovXHJcbiAgICBpbml0KG9wczogVmFsaWRhdGlvbkluaXRPcHNUeXBlKSB7XHJcbiAgICAgICAgaWYgKCFvcHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmllbGRJdGVtcykuZm9yRWFjaChrID0+IHtcclxuICAgICAgICAgICAgLy/lpoLmnpxpc1Nob3dBbGzmnInlgLzvvIzliJnlsIbmiYDmnInlrZfmrrXnmoRpc1Nob3forr7nva7kuLror6XlgLxcclxuICAgICAgICAgICAgaWYgKG9wcyAmJiB0eXBlb2YgKG9wcy5pc1Nob3dBbGwpID09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZEl0ZW1zW2tdLmlzU2hvdyA9IG9wcy5pc1Nob3dBbGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/lpoLmnpzljp/mnInnmoTpqozor4Hlr7nosaHkuK3nmoTlrZfmrrXvvJrjgJBuZWVkU2hvd0ZpZWxkc+WMheWQq+ivpeWtl+auteaXtu+8jOWImWlzU2hvd+iuvue9ruS4unRydWXjgJHvvIzjgJB1bk5lZWRTaG93RmllbGRz5YyF5ZCr6K+l5a2X5q615pe277yM5YiZaXNTaG936K6+572u5Li6ZmFsc2XjgJFcclxuICAgICAgICAgICAgbGV0IG9sZFNob3dWYWx1ZSA9ICEhKG9wcy5vbGRJdGVtICYmIG9wcy5vbGRJdGVtLmZpZWxkSXRlbXNba10uaXNTaG93KVxyXG4gICAgICAgICAgICBpZiAoKG9wcy5uZWVkU2hvd0ZpZWxkcyB8fCBbXSkuaW5jbHVkZXMoaykpIHtcclxuICAgICAgICAgICAgICAgIG9sZFNob3dWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKChvcHMudW5OZWVkU2hvd0ZpZWxkcyB8fCBbXSkuaW5jbHVkZXMoaykpIHtcclxuICAgICAgICAgICAgICAgIG9sZFNob3dWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRJdGVtc1trXS5pc1Nob3cgPSBvbGRTaG93VmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq1GaWVsZE1lc3NhZ2VNb2RlbOaYr+WQpumqjOivgemAmui/h1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUGFzc2VkKG1vZGVsOiBGaWVsZE1lc3NhZ2VNb2RlbCkge1xyXG4gICAgaWYgKCFtb2RlbC5pdGVtTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICFtb2RlbC5pdGVtTGlzdC5maW5kKGsgPT4gIWsuaXNQYXNzZWQpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmoLnmja5pZOi/lOWbnkZpZWxkTWVzc2FnZU1vZGVs5Lit5a+55bqU55qERmllbGRNZXNzYWdlSXRlbVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW0obW9kZWw6IEZpZWxkTWVzc2FnZU1vZGVsLCBpZDogc3RyaW5nKTogRmllbGRNZXNzYWdlSXRlbSB8IG51bGwge1xyXG4gICAgcmV0dXJuIG1vZGVsLml0ZW1MaXN0LmZpbmQoayA9PiBrLmlkID09IGlkKSB8fCBudWxsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlrZfmrrXkv6Hmga/mj5DnpLrlrp7kvZPnsbvjgILmiornsbvkvLzigJzooajljZXpqozor4HigJ3nmoTlnLrmma/pgJrov4fkuIDkuKrnu5/kuIDnmoTlrp7kvZPnsbvmnaXooajnjrDvvIzmlrnkvr9qc+S7o+eggeWOu+ivu+WPluS4jueuoeeQhui/meS6m+eKtuaAgeS4juS/oeaBr+OAglxyXG4gKiDmr5TlpoLvvJrlpoLmnpzkuIDkuKrovpPlhaXpobnmoKHpqozkuI3pgJrov4fvvIzkvJrmtonlj4rliLDov5nkupvmlbDmja7nmoTlj5jljJbvvJrmmK/lkKbpqozor4HpgJrov4fjgIHplJnor6/mj5DnpLrmtojmga/jgIHmmK/lkKblj6rmmL7npLrlvZPliY3ov5nkuIDkuKrplJnor6/mtojmga/nrYnjgIHmmK/lkKbpnIDopoHmuIXnqbrlhbblroPplJnor6/mtojmga/nrYnjgIJcclxuICog56S65L6L55So5rOV77yaXHJcbiAqIGNvbnN0IG1vZGVsID0gbmV3IEZpZWxkTWVzc2FnZU1vZGVsKClcclxuICogbW9kZWwuaXRlbUxpc3QgPSBbXVxyXG4gKiBjb25zdCBpdGVtID0gbmV3IEZpZWxkTWVzc2FnZUl0ZW0oKVxyXG4gKiBpdGVtLmlzUGFzc2VkID0gZmFsc2VcclxuICogaXRlbS5maWVsZEl0ZW1zID0ge1xyXG4gKiBuYW1lOiB7XHJcbiAqICAgICBpc1Nob3c6IGZhbHNlLFxyXG4gKiAgICAgbXNnOiBcIlwiXHJcbiAqIH1cclxuICog5b2T5pWw5o2u5YyW55Sf5Y+Y5YyW5pe277yM6KaB5YGa55qE5Y+q5piv5pu05paw6L+Z5Liq5a+56LGh5Lit55qE5YW35L2T5a2X5q6154q25oCB5Y2z5Y+v77yM5Lia5Yqh5Luj56CB5Lit5qC55o2u6L+Z5Lqb54q25oCB5L+h5oGv57uf5LiA5Y675pi+56S66aG16Z2i44CCXHJcbiAqIFxyXG4qfVxyXG5tb2RlbC5pdGVtTGlzdC5wdXNoKGl0ZW0pXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZpZWxkTWVzc2FnZU1vZGVsIGV4dGVuZHMgQmFzZUNsYXNzIHtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCmaXRlbUxpc3TkuK3nmoTmiYDmnInnmoTlrZfmrrXmj5DnpLrliJfooajlnYflt7Lpqozor4HpgJrov4dcclxuICAgICAqL1xyXG4gICAgZ2V0IGlzUGFzc2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBpc1Bhc3NlZCh0aGlzKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlrZfmrrXmj5DnpLrliJfooahcclxuICAgICAqL1xyXG4gICAgaXRlbUxpc3Q6IEZpZWxkTWVzc2FnZUl0ZW1bXSA9IFtdXHJcbiAgICAvKipcclxuICAgICAqIOagueaNrmlk6L+U5Zue5oyH5a6a55qE5a2X5q615o+Q56S66aG5XHJcbiAgICAgKi9cclxuICAgIGdldEl0ZW0oaWQ6IHN0cmluZyk6IEZpZWxkTWVzc2FnZUl0ZW0gfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gZ2V0SXRlbSh0aGlzLCBpZClcclxuICAgIH1cclxuICAgIHRvSlNPTigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpc1Bhc3NlZDogdGhpcy5pc1Bhc3NlZCxcclxuICAgICAgICAgICAgaXRlbUxpc3Q6IHRoaXMuaXRlbUxpc3RcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=