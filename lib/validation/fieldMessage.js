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
        if (ops && typeof ops.isShowAll == "boolean") {
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


exports.FieldMessageItem = FieldMessageItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0aW9uL2ZpZWxkTWVzc2FnZS50cyJdLCJuYW1lcyI6WyJGaWVsZE1lc3NhZ2VJdGVtIiwidW5kZWZpbmVkIiwib3BzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkSXRlbXMiLCJmb3JFYWNoIiwiayIsImlzU2hvd0FsbCIsImlzU2hvdyIsIm9sZFNob3dWYWx1ZSIsIm9sZEl0ZW0iLCJuZWVkU2hvd0ZpZWxkcyIsImluY2x1ZGVzIiwidW5OZWVkU2hvd0ZpZWxkcyIsIkZpZWxkTWVzc2FnZU1vZGVsIiwiaWQiLCJnZXRJdGVtIiwiaXNQYXNzZWQiLCJpdGVtTGlzdCIsIkJhc2VDbGFzcyIsIm1vZGVsIiwibGVuZ3RoIiwiZmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0E7QUFDQTtJQUNhQSxnQjs7OztnQ0FJSSxFOztzQ0FJTyxJOzt3Q0FJNEIsRTs7b0NBSTNCQyxTOzs7Ozs7QUFDckI7QUFDSjtBQUNBO3lCQUNTQyxHLEVBQXdDO0FBQUE7O0FBQ3pDLFVBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sZUFBTyxJQUFQO0FBQ0g7O0FBQ0RDLE1BQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtDLFVBQWpCLEVBQTZCQyxPQUE3QixDQUFxQyxVQUFDQyxDQUFELEVBQU87QUFDeEM7QUFDQSxZQUFJTCxHQUFHLElBQUksT0FBT0EsR0FBRyxDQUFDTSxTQUFYLElBQXdCLFNBQW5DLEVBQThDO0FBQzFDLFVBQUEsS0FBSSxDQUFDSCxVQUFMLENBQWdCRSxDQUFoQixFQUFtQkUsTUFBbkIsR0FBNEJQLEdBQUcsQ0FBQ00sU0FBaEM7QUFDQTtBQUNILFNBTHVDLENBTXhDOzs7QUFDQSxZQUFJRSxZQUFZLEdBQUcsQ0FBQyxFQUFFUixHQUFHLENBQUNTLE9BQUosSUFBZVQsR0FBRyxDQUFDUyxPQUFKLENBQVlOLFVBQVosQ0FBdUJFLENBQXZCLEVBQTBCRSxNQUEzQyxDQUFwQjs7QUFDQSxZQUFJLENBQUNQLEdBQUcsQ0FBQ1UsY0FBSixJQUFzQixFQUF2QixFQUEyQkMsUUFBM0IsQ0FBb0NOLENBQXBDLENBQUosRUFBNEM7QUFDeENHLFVBQUFBLFlBQVksR0FBRyxJQUFmO0FBQ0g7O0FBQ0QsWUFBSSxDQUFDUixHQUFHLENBQUNZLGdCQUFKLElBQXdCLEVBQXpCLEVBQTZCRCxRQUE3QixDQUFzQ04sQ0FBdEMsQ0FBSixFQUE4QztBQUMxQ0csVUFBQUEsWUFBWSxHQUFHLEtBQWY7QUFDSDs7QUFDRCxRQUFBLEtBQUksQ0FBQ0wsVUFBTCxDQUFnQkUsQ0FBaEIsRUFBbUJFLE1BQW5CLEdBQTRCQyxZQUE1QjtBQUNILE9BZkQ7QUFnQkEsYUFBTyxJQUFQO0FBQ0g7Ozs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0lBQ2FLLGlCOzs7Ozs7Ozs7Ozs7Ozs7O2dFQVVrQyxFOzs7Ozs7OztBQUMzQztBQUNKO0FBQ0E7NEJBQ1lDLEUsRUFBaUQ7QUFDckQsYUFBT0MsUUFBTyxDQUFDLElBQUQsRUFBT0QsRUFBUCxDQUFkO0FBQ0g7Ozs2QkFDUTtBQUNMLGFBQU87QUFDSEUsUUFBQUEsUUFBUSxFQUFFLEtBQUtBLFFBRFo7QUFFSEMsUUFBQUEsUUFBUSxFQUFFLEtBQUtBO0FBRlosT0FBUDtBQUlIOzs7O0FBckJEO0FBQ0o7QUFDQTt3QkFDNEI7QUFDcEIsYUFBT0QsUUFBUSxDQUFDLElBQUQsQ0FBZjtBQUNIO0FBQ0Q7QUFDSjtBQUNBOzs7OztFQVR5REUsb0I7QUF5QnpEO0FBQ0E7QUFDQTs7Ozs7QUFDTyxTQUFTRixRQUFULENBQThCRyxLQUE5QixFQUFvRTtBQUN2RSxNQUFJLENBQUNBLEtBQUssQ0FBQ0YsUUFBTixDQUFlRyxNQUFwQixFQUE0QjtBQUN4QixXQUFPLElBQVA7QUFDSDs7QUFDRCxTQUFPLENBQUNELEtBQUssQ0FBQ0YsUUFBTixDQUFlSSxJQUFmLENBQW9CLFVBQUNoQixDQUFEO0FBQUEsV0FBTyxDQUFDQSxDQUFDLENBQUNXLFFBQVY7QUFBQSxHQUFwQixDQUFSO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNELFFBQVQsQ0FBNkJJLEtBQTdCLEVBQW1FTCxFQUFuRSxFQUFvSDtBQUN2SCxTQUFPSyxLQUFLLENBQUNGLFFBQU4sQ0FBZUksSUFBZixDQUFvQixVQUFDaEIsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ1MsRUFBRixJQUFRQSxFQUFmO0FBQUEsR0FBcEIsS0FBMEMsSUFBakQ7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDbGFzcyB9IGZyb20gXCIuLi9lbnRpdHkvc2VyaWFsaXplXCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvbkluaXRPcHNUeXBlPEV4dGVuZFR5cGU+IHtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5pi+56S65omA5pyJ5o+Q56S66K+tXHJcbiAgICAgKi9cclxuICAgIGlzU2hvd0FsbD86IGJvb2xlYW5cclxuICAgIC8qKlxyXG4gICAgICog5LiK5LiA5qyh55qE5a2X5q615o+Q56S65a+56LGh77yI5Li76KaB55So5LqO5Yid5aeL5YyW5pe25ZCI5bm25a+56LGh77yJXHJcbiAgICAgKi9cclxuICAgIG9sZEl0ZW0/OiBGaWVsZE1lc3NhZ2VJdGVtPEV4dGVuZFR5cGU+XHJcbiAgICAvKipcclxuICAgICAqIOmcgOimgeaYvuekuuaPkOekuuivreeahOWtl+autVxyXG4gICAgICovXHJcbiAgICBuZWVkU2hvd0ZpZWxkcz86IHN0cmluZ1tdXHJcbiAgICAvKipcclxuICAgICAqIOS4jemcgOimgeaYvuekuuaPkOekuuivreeahOWtl+autVxyXG4gICAgICovXHJcbiAgICB1bk5lZWRTaG93RmllbGRzPzogc3RyaW5nW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEl0ZW1UeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICog5o+Q56S66K+tXHJcbiAgICAgKi9cclxuICAgIG1zZzogc3RyaW5nXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuaYvuekulxyXG4gICAgICovXHJcbiAgICBpc1Nob3c6IGJvb2xlYW5cclxufVxyXG5cclxuLyoqXHJcbiAqIOavj+S4gOmhueeahOWFt+S9k+aPkOekuuexu1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZpZWxkTWVzc2FnZUl0ZW08RXh0ZW5kVHlwZSA9IGFueT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDllK/kuIBpZOagh+ivhlxyXG4gICAgICovXHJcbiAgICBpZDogc3RyaW5nID0gXCJcIlxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbpqozor4HpgJrov4dcclxuICAgICAqL1xyXG4gICAgaXNQYXNzZWQ6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICAvKipcclxuICAgICAqIOmcgOimgemqjOivgeeahOWFt+S9k+Wtl+auteS/oeaBr1xyXG4gICAgICovXHJcbiAgICBmaWVsZEl0ZW1zOiB7IFtuYW1lOiBzdHJpbmddOiBGaWVsZEl0ZW1UeXBlIH0gPSB7fVxyXG4gICAgLyoqXHJcbiAgICAgKiDmianlsZXlrZfmrrVcclxuICAgICAqL1xyXG4gICAgZXh0ZW5kOiBFeHRlbmRUeXBlID0gdW5kZWZpbmVkIGFzIGFueVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbvvIzph43mlrDorr7nva5maWVsZEl0ZW1z5Lit55qE5bGe5oCnXHJcbiAgICAgKi9cclxuICAgIGluaXQob3BzOiBWYWxpZGF0aW9uSW5pdE9wc1R5cGU8RXh0ZW5kVHlwZT4pIHtcclxuICAgICAgICBpZiAoIW9wcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZpZWxkSXRlbXMpLmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgLy/lpoLmnpxpc1Nob3dBbGzmnInlgLzvvIzliJnlsIbmiYDmnInlrZfmrrXnmoRpc1Nob3forr7nva7kuLror6XlgLxcclxuICAgICAgICAgICAgaWYgKG9wcyAmJiB0eXBlb2Ygb3BzLmlzU2hvd0FsbCA9PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZEl0ZW1zW2tdLmlzU2hvdyA9IG9wcy5pc1Nob3dBbGxcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5Y6f5pyJ55qE6aqM6K+B5a+56LGh5Lit55qE5a2X5q6177ya44CQbmVlZFNob3dGaWVsZHPljIXlkKvor6XlrZfmrrXml7bvvIzliJlpc1Nob3forr7nva7kuLp0cnVl44CR77yM44CQdW5OZWVkU2hvd0ZpZWxkc+WMheWQq+ivpeWtl+auteaXtu+8jOWImWlzU2hvd+iuvue9ruS4umZhbHNl44CRXHJcbiAgICAgICAgICAgIGxldCBvbGRTaG93VmFsdWUgPSAhIShvcHMub2xkSXRlbSAmJiBvcHMub2xkSXRlbS5maWVsZEl0ZW1zW2tdLmlzU2hvdylcclxuICAgICAgICAgICAgaWYgKChvcHMubmVlZFNob3dGaWVsZHMgfHwgW10pLmluY2x1ZGVzKGspKSB7XHJcbiAgICAgICAgICAgICAgICBvbGRTaG93VmFsdWUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKChvcHMudW5OZWVkU2hvd0ZpZWxkcyB8fCBbXSkuaW5jbHVkZXMoaykpIHtcclxuICAgICAgICAgICAgICAgIG9sZFNob3dWYWx1ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5maWVsZEl0ZW1zW2tdLmlzU2hvdyA9IG9sZFNob3dWYWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWtl+auteS/oeaBr+aPkOekuuWunuS9k+exu+OAguaKiuexu+S8vOKAnOihqOWNlemqjOivgeKAneeahOWcuuaZr+mAmui/h+S4gOS4que7n+S4gOeahOWunuS9k+exu+adpeihqOeOsO+8jOaWueS+v2pz5Luj56CB5Y676K+75Y+W5LiO566h55CG6L+Z5Lqb54q25oCB5LiO5L+h5oGv44CCXHJcbiAqIOavlOWmgu+8muWmguaenOS4gOS4qui+k+WFpemhueagoemqjOS4jemAmui/h++8jOS8mua2ieWPiuWIsOi/meS6m+aVsOaNrueahOWPmOWMlu+8muaYr+WQpumqjOivgemAmui/h+OAgemUmeivr+aPkOekuua2iOaBr+OAgeaYr+WQpuWPquaYvuekuuW9k+WJjei/meS4gOS4qumUmeivr+a2iOaBr+etieOAgeaYr+WQpumcgOimgea4heepuuWFtuWug+mUmeivr+a2iOaBr+etieOAglxyXG4gKiDnpLrkvovnlKjms5XvvJpcclxuICogY29uc3QgbW9kZWwgPSBuZXcgRmllbGRNZXNzYWdlTW9kZWwoKVxyXG4gKiBtb2RlbC5pdGVtTGlzdCA9IFtdXHJcbiAqIGNvbnN0IGl0ZW0gPSBuZXcgRmllbGRNZXNzYWdlSXRlbSgpXHJcbiAqIGl0ZW0uaXNQYXNzZWQgPSBmYWxzZVxyXG4gKiBpdGVtLmZpZWxkSXRlbXMgPSB7XHJcbiAqIG5hbWU6IHtcclxuICogICAgIGlzU2hvdzogZmFsc2UsXHJcbiAqICAgICBtc2c6IFwiXCJcclxuICogfVxyXG4gKiDlvZPmlbDmja7ljJbnlJ/lj5jljJbml7bvvIzopoHlgZrnmoTlj6rmmK/mm7TmlrDov5nkuKrlr7nosaHkuK3nmoTlhbfkvZPlrZfmrrXnirbmgIHljbPlj6/vvIzkuJrliqHku6PnoIHkuK3moLnmja7ov5nkupvnirbmgIHkv6Hmga/nu5/kuIDljrvmmL7npLrpobXpnaLjgIJcclxuICogXHJcbip9XHJcbm1vZGVsLml0ZW1MaXN0LnB1c2goaXRlbSlcclxuICogXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmllbGRNZXNzYWdlTW9kZWw8RXh0ZW5kVHlwZSA9IGFueT4gZXh0ZW5kcyBCYXNlQ2xhc3Mge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKZpdGVtTGlzdOS4reeahOaJgOacieeahOWtl+auteaPkOekuuWIl+ihqOWdh+W3sumqjOivgemAmui/h1xyXG4gICAgICovXHJcbiAgICBnZXQgaXNQYXNzZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGlzUGFzc2VkKHRoaXMpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWtl+auteaPkOekuuWIl+ihqFxyXG4gICAgICovXHJcbiAgICBpdGVtTGlzdDogRmllbGRNZXNzYWdlSXRlbTxFeHRlbmRUeXBlPltdID0gW11cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2uaWTov5Tlm57mjIflrprnmoTlrZfmrrXmj5DnpLrpoblcclxuICAgICAqL1xyXG4gICAgZ2V0SXRlbShpZDogc3RyaW5nKTogRmllbGRNZXNzYWdlSXRlbTxFeHRlbmRUeXBlPiB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiBnZXRJdGVtKHRoaXMsIGlkKVxyXG4gICAgfVxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzUGFzc2VkOiB0aGlzLmlzUGFzc2VkLFxyXG4gICAgICAgICAgICBpdGVtTGlzdDogdGhpcy5pdGVtTGlzdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWrUZpZWxkTWVzc2FnZU1vZGVs5piv5ZCm6aqM6K+B6YCa6L+HXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQYXNzZWQ8RXh0ZW5kVHlwZT4obW9kZWw6IEZpZWxkTWVzc2FnZU1vZGVsPEV4dGVuZFR5cGU+KSB7XHJcbiAgICBpZiAoIW1vZGVsLml0ZW1MaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gIW1vZGVsLml0ZW1MaXN0LmZpbmQoKGspID0+ICFrLmlzUGFzc2VkKVxyXG59XHJcblxyXG4vKipcclxuICog5qC55o2uaWTov5Tlm55GaWVsZE1lc3NhZ2VNb2RlbOS4reWvueW6lOeahEZpZWxkTWVzc2FnZUl0ZW1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtPEV4dGVuZFR5cGU+KG1vZGVsOiBGaWVsZE1lc3NhZ2VNb2RlbDxFeHRlbmRUeXBlPiwgaWQ6IHN0cmluZyk6IEZpZWxkTWVzc2FnZUl0ZW08RXh0ZW5kVHlwZT4gfCBudWxsIHtcclxuICAgIHJldHVybiBtb2RlbC5pdGVtTGlzdC5maW5kKChrKSA9PiBrLmlkID09IGlkKSB8fCBudWxsXHJcbn1cclxuIl19