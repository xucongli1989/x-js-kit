"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPassed = isPassed;
exports.getItem = _getItem;
exports.FieldMessageModel = exports.FieldMessageItem = void 0;

var _serialize = require("../entity/serialize");

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
    value:
    /**
     * 初始化，重新设置fieldItems中的属性
     */
    function init(ops) {
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
    key: "isPassed",
    get:
    /**
     * 是否itemList中的所有的字段提示列表均已验证通过
     */
    function get() {
      return isPassed(this);
    }
    /**
     * 字段提示列表
     */

  }, {
    key: "getItem",
    value:
    /**
     * 根据id返回指定的字段提示项
     */
    function getItem(id) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0aW9uL2ZpZWxkTWVzc2FnZS50cyJdLCJuYW1lcyI6WyJGaWVsZE1lc3NhZ2VJdGVtIiwidW5kZWZpbmVkIiwib3BzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkSXRlbXMiLCJmb3JFYWNoIiwiayIsImlzU2hvd0FsbCIsImlzU2hvdyIsIm9sZFNob3dWYWx1ZSIsIm9sZEl0ZW0iLCJuZWVkU2hvd0ZpZWxkcyIsImluY2x1ZGVzIiwidW5OZWVkU2hvd0ZpZWxkcyIsIkZpZWxkTWVzc2FnZU1vZGVsIiwiaXNQYXNzZWQiLCJpZCIsImdldEl0ZW0iLCJpdGVtTGlzdCIsIkJhc2VDbGFzcyIsIm1vZGVsIiwibGVuZ3RoIiwiZmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0E7QUFDQTtJQUNhQSxnQjs7OztnQ0FJSSxFOztzQ0FJTyxJOzt3Q0FJNEIsRTs7b0NBSTNCQyxTOzs7Ozs7QUFDckI7QUFDSjtBQUNBO0FBQ0ksa0JBQUtDLEdBQUwsRUFBNkM7QUFBQTs7QUFDekMsVUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixlQUFPLElBQVA7QUFDSDs7QUFDREMsTUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0MsVUFBakIsRUFBNkJDLE9BQTdCLENBQXFDLFVBQUNDLENBQUQsRUFBTztBQUN4QztBQUNBLFlBQUlMLEdBQUcsSUFBSSxPQUFPQSxHQUFHLENBQUNNLFNBQVgsSUFBd0IsU0FBbkMsRUFBOEM7QUFDMUMsVUFBQSxLQUFJLENBQUNILFVBQUwsQ0FBZ0JFLENBQWhCLEVBQW1CRSxNQUFuQixHQUE0QlAsR0FBRyxDQUFDTSxTQUFoQztBQUNBO0FBQ0gsU0FMdUMsQ0FNeEM7OztBQUNBLFlBQUlFLFlBQVksR0FBRyxDQUFDLEVBQUVSLEdBQUcsQ0FBQ1MsT0FBSixJQUFlVCxHQUFHLENBQUNTLE9BQUosQ0FBWU4sVUFBWixDQUF1QkUsQ0FBdkIsRUFBMEJFLE1BQTNDLENBQXBCOztBQUNBLFlBQUksQ0FBQ1AsR0FBRyxDQUFDVSxjQUFKLElBQXNCLEVBQXZCLEVBQTJCQyxRQUEzQixDQUFvQ04sQ0FBcEMsQ0FBSixFQUE0QztBQUN4Q0csVUFBQUEsWUFBWSxHQUFHLElBQWY7QUFDSDs7QUFDRCxZQUFJLENBQUNSLEdBQUcsQ0FBQ1ksZ0JBQUosSUFBd0IsRUFBekIsRUFBNkJELFFBQTdCLENBQXNDTixDQUF0QyxDQUFKLEVBQThDO0FBQzFDRyxVQUFBQSxZQUFZLEdBQUcsS0FBZjtBQUNIOztBQUNELFFBQUEsS0FBSSxDQUFDTCxVQUFMLENBQWdCRSxDQUFoQixFQUFtQkUsTUFBbkIsR0FBNEJDLFlBQTVCO0FBQ0gsT0FmRDtBQWdCQSxhQUFPLElBQVA7QUFDSDs7Ozs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7SUFDYUssaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Z0VBVWtDLEU7Ozs7Ozs7O0FBVDNDO0FBQ0o7QUFDQTtBQUNJLG1CQUF3QjtBQUNwQixhQUFPQyxRQUFRLENBQUMsSUFBRCxDQUFmO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7Ozs7O0FBRUk7QUFDSjtBQUNBO0FBQ0kscUJBQVFDLEVBQVIsRUFBeUQ7QUFDckQsYUFBT0MsUUFBTyxDQUFDLElBQUQsRUFBT0QsRUFBUCxDQUFkO0FBQ0g7OztXQUNELGtCQUFTO0FBQ0wsYUFBTztBQUNIRCxRQUFBQSxRQUFRLEVBQUUsS0FBS0EsUUFEWjtBQUVIRyxRQUFBQSxRQUFRLEVBQUUsS0FBS0E7QUFGWixPQUFQO0FBSUg7Ozs7RUF0Qm9EQyxvQjtBQXlCekQ7QUFDQTtBQUNBOzs7OztBQUNPLFNBQVNKLFFBQVQsQ0FBOEJLLEtBQTlCLEVBQW9FO0FBQ3ZFLE1BQUksQ0FBQ0EsS0FBSyxDQUFDRixRQUFOLENBQWVHLE1BQXBCLEVBQTRCO0FBQ3hCLFdBQU8sSUFBUDtBQUNIOztBQUNELFNBQU8sQ0FBQ0QsS0FBSyxDQUFDRixRQUFOLENBQWVJLElBQWYsQ0FBb0IsVUFBQ2hCLENBQUQ7QUFBQSxXQUFPLENBQUNBLENBQUMsQ0FBQ1MsUUFBVjtBQUFBLEdBQXBCLENBQVI7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0UsUUFBVCxDQUE2QkcsS0FBN0IsRUFBbUVKLEVBQW5FLEVBQW9IO0FBQ3ZILFNBQU9JLEtBQUssQ0FBQ0YsUUFBTixDQUFlSSxJQUFmLENBQW9CLFVBQUNoQixDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDVSxFQUFGLElBQVFBLEVBQWY7QUFBQSxHQUFwQixLQUEwQyxJQUFqRDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNsYXNzIH0gZnJvbSBcIi4uL2VudGl0eS9zZXJpYWxpemVcIlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9uSW5pdE9wc1R5cGU8RXh0ZW5kVHlwZT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmmL7npLrmiYDmnInmj5DnpLror61cclxuICAgICAqL1xyXG4gICAgaXNTaG93QWxsPzogYm9vbGVhblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIrkuIDmrKHnmoTlrZfmrrXmj5DnpLrlr7nosaHvvIjkuLvopoHnlKjkuo7liJ3lp4vljJbml7blkIjlubblr7nosaHvvIlcclxuICAgICAqL1xyXG4gICAgb2xkSXRlbT86IEZpZWxkTWVzc2FnZUl0ZW08RXh0ZW5kVHlwZT5cclxuICAgIC8qKlxyXG4gICAgICog6ZyA6KaB5pi+56S65o+Q56S66K+t55qE5a2X5q61XHJcbiAgICAgKi9cclxuICAgIG5lZWRTaG93RmllbGRzPzogc3RyaW5nW11cclxuICAgIC8qKlxyXG4gICAgICog5LiN6ZyA6KaB5pi+56S65o+Q56S66K+t55qE5a2X5q61XHJcbiAgICAgKi9cclxuICAgIHVuTmVlZFNob3dGaWVsZHM/OiBzdHJpbmdbXVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkSXRlbVR5cGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmj5DnpLror61cclxuICAgICAqL1xyXG4gICAgbXNnOiBzdHJpbmdcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5pi+56S6XHJcbiAgICAgKi9cclxuICAgIGlzU2hvdzogYm9vbGVhblxyXG59XHJcblxyXG4vKipcclxuICog5q+P5LiA6aG555qE5YW35L2T5o+Q56S657G7XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmllbGRNZXNzYWdlSXRlbTxFeHRlbmRUeXBlID0gYW55PiB7XHJcbiAgICAvKipcclxuICAgICAqIOWUr+S4gGlk5qCH6K+GXHJcbiAgICAgKi9cclxuICAgIGlkOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpumqjOivgemAmui/h1xyXG4gICAgICovXHJcbiAgICBpc1Bhc3NlZDogYm9vbGVhbiA9IHRydWVcclxuICAgIC8qKlxyXG4gICAgICog6ZyA6KaB6aqM6K+B55qE5YW35L2T5a2X5q615L+h5oGvXHJcbiAgICAgKi9cclxuICAgIGZpZWxkSXRlbXM6IHsgW25hbWU6IHN0cmluZ106IEZpZWxkSXRlbVR5cGUgfSA9IHt9XHJcbiAgICAvKipcclxuICAgICAqIOaJqeWxleWtl+autVxyXG4gICAgICovXHJcbiAgICBleHRlbmQ6IEV4dGVuZFR5cGUgPSB1bmRlZmluZWQgYXMgYW55XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlu+8jOmHjeaWsOiuvue9rmZpZWxkSXRlbXPkuK3nmoTlsZ7mgKdcclxuICAgICAqL1xyXG4gICAgaW5pdChvcHM6IFZhbGlkYXRpb25Jbml0T3BzVHlwZTxFeHRlbmRUeXBlPikge1xyXG4gICAgICAgIGlmICghb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmllbGRJdGVtcykuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgICAgICAvL+WmguaenGlzU2hvd0FsbOacieWAvO+8jOWImeWwhuaJgOacieWtl+auteeahGlzU2hvd+iuvue9ruS4uuivpeWAvFxyXG4gICAgICAgICAgICBpZiAob3BzICYmIHR5cGVvZiBvcHMuaXNTaG93QWxsID09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkSXRlbXNba10uaXNTaG93ID0gb3BzLmlzU2hvd0FsbFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/lpoLmnpzljp/mnInnmoTpqozor4Hlr7nosaHkuK3nmoTlrZfmrrXvvJrjgJBuZWVkU2hvd0ZpZWxkc+WMheWQq+ivpeWtl+auteaXtu+8jOWImWlzU2hvd+iuvue9ruS4unRydWXjgJHvvIzjgJB1bk5lZWRTaG93RmllbGRz5YyF5ZCr6K+l5a2X5q615pe277yM5YiZaXNTaG936K6+572u5Li6ZmFsc2XjgJFcclxuICAgICAgICAgICAgbGV0IG9sZFNob3dWYWx1ZSA9ICEhKG9wcy5vbGRJdGVtICYmIG9wcy5vbGRJdGVtLmZpZWxkSXRlbXNba10uaXNTaG93KVxyXG4gICAgICAgICAgICBpZiAoKG9wcy5uZWVkU2hvd0ZpZWxkcyB8fCBbXSkuaW5jbHVkZXMoaykpIHtcclxuICAgICAgICAgICAgICAgIG9sZFNob3dWYWx1ZSA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKG9wcy51bk5lZWRTaG93RmllbGRzIHx8IFtdKS5pbmNsdWRlcyhrKSkge1xyXG4gICAgICAgICAgICAgICAgb2xkU2hvd1ZhbHVlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmZpZWxkSXRlbXNba10uaXNTaG93ID0gb2xkU2hvd1ZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5a2X5q615L+h5oGv5o+Q56S65a6e5L2T57G744CC5oqK57G75Ly84oCc6KGo5Y2V6aqM6K+B4oCd55qE5Zy65pmv6YCa6L+H5LiA5Liq57uf5LiA55qE5a6e5L2T57G75p2l6KGo546w77yM5pa55L6/anPku6PnoIHljrvor7vlj5bkuI7nrqHnkIbov5nkupvnirbmgIHkuI7kv6Hmga/jgIJcclxuICog5q+U5aaC77ya5aaC5p6c5LiA5Liq6L6T5YWl6aG55qCh6aqM5LiN6YCa6L+H77yM5Lya5raJ5Y+K5Yiw6L+Z5Lqb5pWw5o2u55qE5Y+Y5YyW77ya5piv5ZCm6aqM6K+B6YCa6L+H44CB6ZSZ6K+v5o+Q56S65raI5oGv44CB5piv5ZCm5Y+q5pi+56S65b2T5YmN6L+Z5LiA5Liq6ZSZ6K+v5raI5oGv562J44CB5piv5ZCm6ZyA6KaB5riF56m65YW25a6D6ZSZ6K+v5raI5oGv562J44CCXHJcbiAqIOekuuS+i+eUqOazle+8mlxyXG4gKiBjb25zdCBtb2RlbCA9IG5ldyBGaWVsZE1lc3NhZ2VNb2RlbCgpXHJcbiAqIG1vZGVsLml0ZW1MaXN0ID0gW11cclxuICogY29uc3QgaXRlbSA9IG5ldyBGaWVsZE1lc3NhZ2VJdGVtKClcclxuICogaXRlbS5pc1Bhc3NlZCA9IGZhbHNlXHJcbiAqIGl0ZW0uZmllbGRJdGVtcyA9IHtcclxuICogbmFtZToge1xyXG4gKiAgICAgaXNTaG93OiBmYWxzZSxcclxuICogICAgIG1zZzogXCJcIlxyXG4gKiB9XHJcbiAqIOW9k+aVsOaNruWMlueUn+WPmOWMluaXtu+8jOimgeWBmueahOWPquaYr+abtOaWsOi/meS4quWvueixoeS4reeahOWFt+S9k+Wtl+auteeKtuaAgeWNs+WPr++8jOS4muWKoeS7o+eggeS4reagueaNrui/meS6m+eKtuaAgeS/oeaBr+e7n+S4gOWOu+aYvuekuumhtemdouOAglxyXG4gKlxyXG4qfVxyXG5tb2RlbC5pdGVtTGlzdC5wdXNoKGl0ZW0pXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmllbGRNZXNzYWdlTW9kZWw8RXh0ZW5kVHlwZSA9IGFueT4gZXh0ZW5kcyBCYXNlQ2xhc3Mge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKZpdGVtTGlzdOS4reeahOaJgOacieeahOWtl+auteaPkOekuuWIl+ihqOWdh+W3sumqjOivgemAmui/h1xyXG4gICAgICovXHJcbiAgICBnZXQgaXNQYXNzZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGlzUGFzc2VkKHRoaXMpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWtl+auteaPkOekuuWIl+ihqFxyXG4gICAgICovXHJcbiAgICBpdGVtTGlzdDogRmllbGRNZXNzYWdlSXRlbTxFeHRlbmRUeXBlPltdID0gW11cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2uaWTov5Tlm57mjIflrprnmoTlrZfmrrXmj5DnpLrpoblcclxuICAgICAqL1xyXG4gICAgZ2V0SXRlbShpZDogc3RyaW5nKTogRmllbGRNZXNzYWdlSXRlbTxFeHRlbmRUeXBlPiB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiBnZXRJdGVtKHRoaXMsIGlkKVxyXG4gICAgfVxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzUGFzc2VkOiB0aGlzLmlzUGFzc2VkLFxyXG4gICAgICAgICAgICBpdGVtTGlzdDogdGhpcy5pdGVtTGlzdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWrUZpZWxkTWVzc2FnZU1vZGVs5piv5ZCm6aqM6K+B6YCa6L+HXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQYXNzZWQ8RXh0ZW5kVHlwZT4obW9kZWw6IEZpZWxkTWVzc2FnZU1vZGVsPEV4dGVuZFR5cGU+KSB7XHJcbiAgICBpZiAoIW1vZGVsLml0ZW1MaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gIW1vZGVsLml0ZW1MaXN0LmZpbmQoKGspID0+ICFrLmlzUGFzc2VkKVxyXG59XHJcblxyXG4vKipcclxuICog5qC55o2uaWTov5Tlm55GaWVsZE1lc3NhZ2VNb2RlbOS4reWvueW6lOeahEZpZWxkTWVzc2FnZUl0ZW1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtPEV4dGVuZFR5cGU+KG1vZGVsOiBGaWVsZE1lc3NhZ2VNb2RlbDxFeHRlbmRUeXBlPiwgaWQ6IHN0cmluZyk6IEZpZWxkTWVzc2FnZUl0ZW08RXh0ZW5kVHlwZT4gfCBudWxsIHtcclxuICAgIHJldHVybiBtb2RlbC5pdGVtTGlzdC5maW5kKChrKSA9PiBrLmlkID09IGlkKSB8fCBudWxsXHJcbn1cclxuIl19