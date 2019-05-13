"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPassed = isPassed;
exports.getItem = _getItem;
exports.FieldMessageModel = exports.FieldMessageItem = void 0;

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
function () {
  function FieldMessageModel() {
    _classCallCheck(this, FieldMessageModel);

    _defineProperty(this, "itemList", []);
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
}();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0aW9uL2ZpZWxkTWVzc2FnZS50cyJdLCJuYW1lcyI6WyJGaWVsZE1lc3NhZ2VJdGVtIiwib3BzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkSXRlbXMiLCJmb3JFYWNoIiwiayIsImlzU2hvd0FsbCIsImlzU2hvdyIsIm9sZFNob3dWYWx1ZSIsIm9sZEl0ZW0iLCJuZWVkU2hvd0ZpZWxkcyIsImluY2x1ZGVzIiwidW5OZWVkU2hvd0ZpZWxkcyIsIkZpZWxkTWVzc2FnZU1vZGVsIiwiaWQiLCJnZXRJdGVtIiwiaXNQYXNzZWQiLCJtb2RlbCIsIml0ZW1MaXN0IiwibGVuZ3RoIiwiZmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkE7OztJQUdhQSxnQjs7Ozs7O2dDQUlJLEU7O3NDQUlPLEk7O3dDQUk0QixFOzs7Ozs7OztBQUtoRDs7O3lCQUdLQyxHLEVBQTRCO0FBQUE7O0FBQzdCLFVBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sZUFBTyxJQUFQO0FBQ0g7O0FBQ0RDLE1BQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtDLFVBQWpCLEVBQTZCQyxPQUE3QixDQUFxQyxVQUFBQyxDQUFDLEVBQUk7QUFDdEM7QUFDQSxZQUFJTCxHQUFHLElBQUksT0FBUUEsR0FBRyxDQUFDTSxTQUFaLElBQTBCLFNBQXJDLEVBQWdEO0FBQzVDLFVBQUEsS0FBSSxDQUFDSCxVQUFMLENBQWdCRSxDQUFoQixFQUFtQkUsTUFBbkIsR0FBNEJQLEdBQUcsQ0FBQ00sU0FBaEM7QUFDQTtBQUNILFNBTHFDLENBTXRDOzs7QUFDQSxZQUFJRSxZQUFZLEdBQUcsQ0FBQyxFQUFFUixHQUFHLENBQUNTLE9BQUosSUFBZVQsR0FBRyxDQUFDUyxPQUFKLENBQVlOLFVBQVosQ0FBdUJFLENBQXZCLEVBQTBCRSxNQUEzQyxDQUFwQjs7QUFDQSxZQUFJLENBQUNQLEdBQUcsQ0FBQ1UsY0FBSixJQUFzQixFQUF2QixFQUEyQkMsUUFBM0IsQ0FBb0NOLENBQXBDLENBQUosRUFBNEM7QUFDeENHLFVBQUFBLFlBQVksR0FBRyxJQUFmO0FBQ0g7O0FBQ0QsWUFBSSxDQUFDUixHQUFHLENBQUNZLGdCQUFKLElBQXdCLEVBQXpCLEVBQTZCRCxRQUE3QixDQUFzQ04sQ0FBdEMsQ0FBSixFQUE4QztBQUMxQ0csVUFBQUEsWUFBWSxHQUFHLEtBQWY7QUFDSDs7QUFDRCxRQUFBLEtBQUksQ0FBQ0wsVUFBTCxDQUFnQkUsQ0FBaEIsRUFBbUJFLE1BQW5CLEdBQTRCQyxZQUE1QjtBQUNILE9BZkQ7QUFnQkEsYUFBTyxJQUFQO0FBQ0g7Ozs7O0FBR0w7Ozs7Ozs7SUFHYUssaUI7Ozs7OztzQ0FVc0IsRTs7Ozs7O0FBQy9COzs7NEJBR1FDLEUsRUFBcUM7QUFDekMsYUFBT0MsUUFBTyxDQUFDLElBQUQsRUFBT0QsRUFBUCxDQUFkO0FBQ0g7Ozs7QUFmRDs7O3dCQUd3QjtBQUNwQixhQUFPRSxRQUFRLENBQUMsSUFBRCxDQUFmO0FBQ0g7QUFDRDs7Ozs7Ozs7QUFZSjs7Ozs7OztBQUdPLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQTRDO0FBQy9DLE1BQUksQ0FBQ0EsS0FBSyxDQUFDQyxRQUFOLENBQWVDLE1BQXBCLEVBQTRCO0FBQ3hCLFdBQU8sSUFBUDtBQUNIOztBQUNELFNBQU8sQ0FBQ0YsS0FBSyxDQUFDQyxRQUFOLENBQWVFLElBQWYsQ0FBb0IsVUFBQWYsQ0FBQztBQUFBLFdBQUksQ0FBQ0EsQ0FBQyxDQUFDVyxRQUFQO0FBQUEsR0FBckIsQ0FBUjtBQUNIO0FBRUQ7Ozs7O0FBR08sU0FBU0QsUUFBVCxDQUFpQkUsS0FBakIsRUFBMkNILEVBQTNDLEVBQWdGO0FBQ25GLFNBQU9HLEtBQUssQ0FBQ0MsUUFBTixDQUFlRSxJQUFmLENBQW9CLFVBQUFmLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNTLEVBQUYsSUFBUUEsRUFBWjtBQUFBLEdBQXJCLEtBQXdDLElBQS9DO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb25Jbml0T3BzVHlwZSB7XHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuaYvuekuuaJgOacieaPkOekuuivrVxyXG4gICAgICovXHJcbiAgICBpc1Nob3dBbGw/OiBib29sZWFuXHJcbiAgICAvKipcclxuICAgICAqIOS4iuS4gOasoeeahOWtl+auteaPkOekuuWvueixoe+8iOS4u+imgeeUqOS6juWIneWni+WMluaXtuWQiOW5tuWvueixoe+8iVxyXG4gICAgICovXHJcbiAgICBvbGRJdGVtPzogRmllbGRNZXNzYWdlSXRlbVxyXG4gICAgLyoqXHJcbiAgICAgKiDpnIDopoHmmL7npLrmj5DnpLror63nmoTlrZfmrrVcclxuICAgICAqL1xyXG4gICAgbmVlZFNob3dGaWVsZHM/OiBzdHJpbmdbXVxyXG4gICAgLyoqXHJcbiAgICAgKiDkuI3pnIDopoHmmL7npLrmj5DnpLror63nmoTlrZfmrrVcclxuICAgICAqL1xyXG4gICAgdW5OZWVkU2hvd0ZpZWxkcz86IHN0cmluZ1tdXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRJdGVtVHlwZSB7XHJcbiAgICAvKipcclxuICAgICAqIOaPkOekuuivrVxyXG4gICAgICovXHJcbiAgICBtc2c6IHN0cmluZyxcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5pi+56S6XHJcbiAgICAgKi9cclxuICAgIGlzU2hvdzogYm9vbGVhblxyXG59XHJcblxyXG4vKipcclxuICog5q+P5LiA6aG555qE5YW35L2T5o+Q56S657G7XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmllbGRNZXNzYWdlSXRlbSB7XHJcbiAgICAvKipcclxuICAgICAqIOWUr+S4gGlk5qCH6K+GXHJcbiAgICAgKi9cclxuICAgIGlkOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpumqjOivgemAmui/h1xyXG4gICAgICovXHJcbiAgICBpc1Bhc3NlZDogYm9vbGVhbiA9IHRydWVcclxuICAgIC8qKlxyXG4gICAgICog6ZyA6KaB6aqM6K+B55qE5YW35L2T5a2X5q615L+h5oGvXHJcbiAgICAgKi9cclxuICAgIGZpZWxkSXRlbXM6IHsgW25hbWU6IHN0cmluZ106IEZpZWxkSXRlbVR5cGUgfSA9IHt9XHJcbiAgICAvKipcclxuICAgICAqIOaJqeWxleWtl+autVxyXG4gICAgICovXHJcbiAgICBleHRlbmQ6IGFueVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbvvIzph43mlrDorr7nva5maWVsZEl0ZW1z5Lit55qE5bGe5oCnXHJcbiAgICAgKi9cclxuICAgIGluaXQob3BzOiBWYWxpZGF0aW9uSW5pdE9wc1R5cGUpIHtcclxuICAgICAgICBpZiAoIW9wcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5maWVsZEl0ZW1zKS5mb3JFYWNoKGsgPT4ge1xyXG4gICAgICAgICAgICAvL+WmguaenGlzU2hvd0FsbOacieWAvO+8jOWImeWwhuaJgOacieWtl+auteeahGlzU2hvd+iuvue9ruS4uuivpeWAvFxyXG4gICAgICAgICAgICBpZiAob3BzICYmIHR5cGVvZiAob3BzLmlzU2hvd0FsbCkgPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkSXRlbXNba10uaXNTaG93ID0gb3BzLmlzU2hvd0FsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+WmguaenOWOn+acieeahOmqjOivgeWvueixoeS4reeahOWtl+aute+8muOAkG5lZWRTaG93RmllbGRz5YyF5ZCr6K+l5a2X5q615pe277yM5YiZaXNTaG936K6+572u5Li6dHJ1ZeOAke+8jOOAkHVuTmVlZFNob3dGaWVsZHPljIXlkKvor6XlrZfmrrXml7bvvIzliJlpc1Nob3forr7nva7kuLpmYWxzZeOAkVxyXG4gICAgICAgICAgICBsZXQgb2xkU2hvd1ZhbHVlID0gISEob3BzLm9sZEl0ZW0gJiYgb3BzLm9sZEl0ZW0uZmllbGRJdGVtc1trXS5pc1Nob3cpXHJcbiAgICAgICAgICAgIGlmICgob3BzLm5lZWRTaG93RmllbGRzIHx8IFtdKS5pbmNsdWRlcyhrKSkge1xyXG4gICAgICAgICAgICAgICAgb2xkU2hvd1ZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKG9wcy51bk5lZWRTaG93RmllbGRzIHx8IFtdKS5pbmNsdWRlcyhrKSkge1xyXG4gICAgICAgICAgICAgICAgb2xkU2hvd1ZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5maWVsZEl0ZW1zW2tdLmlzU2hvdyA9IG9sZFNob3dWYWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWtl+auteS/oeaBr+aPkOekuuexu1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZpZWxkTWVzc2FnZU1vZGVsIHtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCmaXRlbUxpc3TkuK3nmoTmiYDmnInnmoTlrZfmrrXmj5DnpLrliJfooajlnYflt7Lpqozor4HpgJrov4dcclxuICAgICAqL1xyXG4gICAgZ2V0IGlzUGFzc2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBpc1Bhc3NlZCh0aGlzKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlrZfmrrXmj5DnpLrliJfooahcclxuICAgICAqL1xyXG4gICAgaXRlbUxpc3Q6IEZpZWxkTWVzc2FnZUl0ZW1bXSA9IFtdXHJcbiAgICAvKipcclxuICAgICAqIOagueaNrmlk6L+U5Zue5oyH5a6a55qE5a2X5q615o+Q56S66aG5XHJcbiAgICAgKi9cclxuICAgIGdldEl0ZW0oaWQ6IHN0cmluZyk6IEZpZWxkTWVzc2FnZUl0ZW0gfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gZ2V0SXRlbSh0aGlzLCBpZClcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWrUZpZWxkTWVzc2FnZU1vZGVs5piv5ZCm6aqM6K+B6YCa6L+HXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQYXNzZWQobW9kZWw6IEZpZWxkTWVzc2FnZU1vZGVsKSB7XHJcbiAgICBpZiAoIW1vZGVsLml0ZW1MaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gIW1vZGVsLml0ZW1MaXN0LmZpbmQoayA9PiAhay5pc1Bhc3NlZClcclxufVxyXG5cclxuLyoqXHJcbiAqIOagueaNrmlk6L+U5ZueRmllbGRNZXNzYWdlTW9kZWzkuK3lr7nlupTnmoRGaWVsZE1lc3NhZ2VJdGVtXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbShtb2RlbDogRmllbGRNZXNzYWdlTW9kZWwsIGlkOiBzdHJpbmcpOiBGaWVsZE1lc3NhZ2VJdGVtIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gbW9kZWwuaXRlbUxpc3QuZmluZChrID0+IGsuaWQgPT0gaWQpIHx8IG51bGxcclxufSJdfQ==