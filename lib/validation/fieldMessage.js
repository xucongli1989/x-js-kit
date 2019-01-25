"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
      return this.itemList.find(function (k) {
        return k.id == id;
      }) || null;
    }
  }, {
    key: "isPassed",

    /**
     * 是否itemList中的所有的字段提示列表均已验证通过
     */
    get: function get() {
      if (!this.itemList.length) {
        return true;
      }

      return !this.itemList.find(function (k) {
        return !k.isPassed;
      });
    }
    /**
     * 字段提示列表
     */

  }]);

  return FieldMessageModel;
}();

exports.FieldMessageModel = FieldMessageModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0aW9uL2ZpZWxkTWVzc2FnZS50cyJdLCJuYW1lcyI6WyJGaWVsZE1lc3NhZ2VJdGVtIiwib3BzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkSXRlbXMiLCJmb3JFYWNoIiwiayIsImlzU2hvd0FsbCIsImlzU2hvdyIsIm9sZFNob3dWYWx1ZSIsIm9sZEl0ZW0iLCJuZWVkU2hvd0ZpZWxkcyIsImluY2x1ZGVzIiwidW5OZWVkU2hvd0ZpZWxkcyIsIkZpZWxkTWVzc2FnZU1vZGVsIiwiaWQiLCJpdGVtTGlzdCIsImZpbmQiLCJsZW5ndGgiLCJpc1Bhc3NlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBOzs7SUFHYUEsZ0I7Ozs7OztnQ0FJSSxFOztzQ0FJTyxJOzt3Q0FJNEIsRTs7Ozs7Ozs7QUFLaEQ7Ozt5QkFHS0MsRyxFQUE0QjtBQUFBOztBQUM3QixVQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOLGVBQU8sSUFBUDtBQUNIOztBQUNEQyxNQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLQyxVQUFqQixFQUE2QkMsT0FBN0IsQ0FBcUMsVUFBQUMsQ0FBQyxFQUFJO0FBQ3RDO0FBQ0EsWUFBSUwsR0FBRyxJQUFJLE9BQVFBLEdBQUcsQ0FBQ00sU0FBWixJQUEwQixTQUFyQyxFQUFnRDtBQUM1QyxVQUFBLEtBQUksQ0FBQ0gsVUFBTCxDQUFnQkUsQ0FBaEIsRUFBbUJFLE1BQW5CLEdBQTRCUCxHQUFHLENBQUNNLFNBQWhDO0FBQ0E7QUFDSCxTQUxxQyxDQU10Qzs7O0FBQ0EsWUFBSUUsWUFBWSxHQUFHLENBQUMsRUFBRVIsR0FBRyxDQUFDUyxPQUFKLElBQWVULEdBQUcsQ0FBQ1MsT0FBSixDQUFZTixVQUFaLENBQXVCRSxDQUF2QixFQUEwQkUsTUFBM0MsQ0FBcEI7O0FBQ0EsWUFBSSxDQUFDUCxHQUFHLENBQUNVLGNBQUosSUFBc0IsRUFBdkIsRUFBMkJDLFFBQTNCLENBQW9DTixDQUFwQyxDQUFKLEVBQTRDO0FBQ3hDRyxVQUFBQSxZQUFZLEdBQUcsSUFBZjtBQUNIOztBQUNELFlBQUksQ0FBQ1IsR0FBRyxDQUFDWSxnQkFBSixJQUF3QixFQUF6QixFQUE2QkQsUUFBN0IsQ0FBc0NOLENBQXRDLENBQUosRUFBOEM7QUFDMUNHLFVBQUFBLFlBQVksR0FBRyxLQUFmO0FBQ0g7O0FBQ0QsUUFBQSxLQUFJLENBQUNMLFVBQUwsQ0FBZ0JFLENBQWhCLEVBQW1CRSxNQUFuQixHQUE0QkMsWUFBNUI7QUFDSCxPQWZEO0FBZ0JBLGFBQU8sSUFBUDtBQUNIOzs7OztBQUdMOzs7Ozs7O0lBR2FLLGlCOzs7Ozs7c0NBYXNCLEU7Ozs7OztBQUMvQjs7OzRCQUdRQyxFLEVBQXFDO0FBQ3pDLGFBQU8sS0FBS0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CLFVBQUFYLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNTLEVBQUYsSUFBUUEsRUFBWjtBQUFBLE9BQXBCLEtBQXVDLElBQTlDO0FBQ0g7Ozs7QUFsQkQ7Ozt3QkFHd0I7QUFDcEIsVUFBSSxDQUFDLEtBQUtDLFFBQUwsQ0FBY0UsTUFBbkIsRUFBMkI7QUFDdkIsZUFBTyxJQUFQO0FBQ0g7O0FBQ0QsYUFBTyxDQUFDLEtBQUtGLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixVQUFBWCxDQUFDO0FBQUEsZUFBSSxDQUFDQSxDQUFDLENBQUNhLFFBQVA7QUFBQSxPQUFwQixDQUFSO0FBQ0g7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvbkluaXRPcHNUeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5pi+56S65omA5pyJ5o+Q56S66K+tXHJcbiAgICAgKi9cclxuICAgIGlzU2hvd0FsbD86IGJvb2xlYW5cclxuICAgIC8qKlxyXG4gICAgICog5LiK5LiA5qyh55qE5a2X5q615o+Q56S65a+56LGh77yI5Li76KaB55So5LqO5Yid5aeL5YyW5pe25ZCI5bm25a+56LGh77yJXHJcbiAgICAgKi9cclxuICAgIG9sZEl0ZW0/OiBGaWVsZE1lc3NhZ2VJdGVtXHJcbiAgICAvKipcclxuICAgICAqIOmcgOimgeaYvuekuuaPkOekuuivreeahOWtl+autVxyXG4gICAgICovXHJcbiAgICBuZWVkU2hvd0ZpZWxkcz86IHN0cmluZ1tdXHJcbiAgICAvKipcclxuICAgICAqIOS4jemcgOimgeaYvuekuuaPkOekuuivreeahOWtl+autVxyXG4gICAgICovXHJcbiAgICB1bk5lZWRTaG93RmllbGRzPzogc3RyaW5nW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWVsZEl0ZW1UeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICog5o+Q56S66K+tXHJcbiAgICAgKi9cclxuICAgIG1zZzogc3RyaW5nLFxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmmL7npLpcclxuICAgICAqL1xyXG4gICAgaXNTaG93OiBib29sZWFuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmr4/kuIDpobnnmoTlhbfkvZPmj5DnpLrnsbtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaWVsZE1lc3NhZ2VJdGVtIHtcclxuICAgIC8qKlxyXG4gICAgICog5ZSv5LiAaWTmoIfor4ZcclxuICAgICAqL1xyXG4gICAgaWQ6IHN0cmluZyA9IFwiXCJcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm6aqM6K+B6YCa6L+HXHJcbiAgICAgKi9cclxuICAgIGlzUGFzc2VkOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgLyoqXHJcbiAgICAgKiDpnIDopoHpqozor4HnmoTlhbfkvZPlrZfmrrXkv6Hmga9cclxuICAgICAqL1xyXG4gICAgZmllbGRJdGVtczogeyBbbmFtZTogc3RyaW5nXTogRmllbGRJdGVtVHlwZSB9ID0ge31cclxuICAgIC8qKlxyXG4gICAgICog5omp5bGV5a2X5q61XHJcbiAgICAgKi9cclxuICAgIGV4dGVuZDogYW55XHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlu+8jOmHjeaWsOiuvue9rmZpZWxkSXRlbXPkuK3nmoTlsZ7mgKdcclxuICAgICAqL1xyXG4gICAgaW5pdChvcHM6IFZhbGlkYXRpb25Jbml0T3BzVHlwZSkge1xyXG4gICAgICAgIGlmICghb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZpZWxkSXRlbXMpLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgICAgIC8v5aaC5p6caXNTaG93QWxs5pyJ5YC877yM5YiZ5bCG5omA5pyJ5a2X5q6155qEaXNTaG936K6+572u5Li66K+l5YC8XHJcbiAgICAgICAgICAgIGlmIChvcHMgJiYgdHlwZW9mIChvcHMuaXNTaG93QWxsKSA9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRJdGVtc1trXS5pc1Nob3cgPSBvcHMuaXNTaG93QWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5Y6f5pyJ55qE6aqM6K+B5a+56LGh5Lit55qE5a2X5q6177ya44CQbmVlZFNob3dGaWVsZHPljIXlkKvor6XlrZfmrrXml7bvvIzliJlpc1Nob3forr7nva7kuLp0cnVl44CR77yM44CQdW5OZWVkU2hvd0ZpZWxkc+WMheWQq+ivpeWtl+auteaXtu+8jOWImWlzU2hvd+iuvue9ruS4umZhbHNl44CRXHJcbiAgICAgICAgICAgIGxldCBvbGRTaG93VmFsdWUgPSAhIShvcHMub2xkSXRlbSAmJiBvcHMub2xkSXRlbS5maWVsZEl0ZW1zW2tdLmlzU2hvdylcclxuICAgICAgICAgICAgaWYgKChvcHMubmVlZFNob3dGaWVsZHMgfHwgW10pLmluY2x1ZGVzKGspKSB7XHJcbiAgICAgICAgICAgICAgICBvbGRTaG93VmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgob3BzLnVuTmVlZFNob3dGaWVsZHMgfHwgW10pLmluY2x1ZGVzKGspKSB7XHJcbiAgICAgICAgICAgICAgICBvbGRTaG93VmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmZpZWxkSXRlbXNba10uaXNTaG93ID0gb2xkU2hvd1ZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5a2X5q615L+h5oGv5o+Q56S657G7XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmllbGRNZXNzYWdlTW9kZWwge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKZpdGVtTGlzdOS4reeahOaJgOacieeahOWtl+auteaPkOekuuWIl+ihqOWdh+W3sumqjOivgemAmui/h1xyXG4gICAgICovXHJcbiAgICBnZXQgaXNQYXNzZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1MaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gIXRoaXMuaXRlbUxpc3QuZmluZChrID0+ICFrLmlzUGFzc2VkKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlrZfmrrXmj5DnpLrliJfooahcclxuICAgICAqL1xyXG4gICAgaXRlbUxpc3Q6IEZpZWxkTWVzc2FnZUl0ZW1bXSA9IFtdXHJcbiAgICAvKipcclxuICAgICAqIOagueaNrmlk6L+U5Zue5oyH5a6a55qE5a2X5q615o+Q56S66aG5XHJcbiAgICAgKi9cclxuICAgIGdldEl0ZW0oaWQ6IHN0cmluZyk6IEZpZWxkTWVzc2FnZUl0ZW0gfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtTGlzdC5maW5kKGsgPT4gay5pZCA9PSBpZCkgfHwgbnVsbFxyXG4gICAgfVxyXG59Il19