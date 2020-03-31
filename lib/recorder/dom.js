"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMDataRecorder = void 0;

var _lib = require("../common/lib");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * DOM数据收集记录器类。用于批量收集DOM元素的属性信息，并将这些属性内容存放到一个对象中。
 * 示例：<div jskit-key="name" jskit-val="test"></div>，则最终会把【name】与【test】保存到一个对象中。
 * 说明：jskit-key属性为此数据的标识key，value的值为：
 * 1：如果此DOM有jskit-val属性，则会记录该属性的值
 * 2：如果此DOM有jskit-txt属性，则会记录该DOM的innerText
 * 3：如果此DOM有jskit-html属性，则会记录该DOM的innerHTML
 * 4：如果此DOM有jskit-count属性，则会记录与该DOM相同【jskit-key】的DOM元素的出现次数
 * 5：如果此DOM只有jskit-key属性，则会默认记录一个标记为"1"
 */
var DOMDataRecorder = /*#__PURE__*/function () {
  function DOMDataRecorder() {
    _classCallCheck(this, DOMDataRecorder);

    _defineProperty(this, "url", "");

    _defineProperty(this, "refer", "");

    _defineProperty(this, "id", "");

    _defineProperty(this, "attrPrefix", "jskit-");

    _defineProperty(this, "value", {});

    _defineProperty(this, "extend", undefined);
  }

  _createClass(DOMDataRecorder, [{
    key: "init",

    /**
     * 初始化
     */
    value: function init() {
      var _this = this;

      //环境校验
      if (!_lib.document) {
        throw new Error("Document is not found!");
      } //基本属性


      var win = _lib.globalObject;
      this.url = win.location.href;
      this.refer = _lib.document.referrer; //数据

      var attrKeyName = "".concat(this.attrPrefix, "key");
      var attrValueName = "".concat(this.attrPrefix, "val");
      var attrTxtName = "".concat(this.attrPrefix, "txt");
      var attrHtmlName = "".concat(this.attrPrefix, "html");
      var attrCountName = "".concat(this.attrPrefix, "count");

      var eles = _lib.document.querySelectorAll("[".concat(attrKeyName, "]"));

      if (!eles || !eles.length) {
        return this;
      }

      eles.forEach(function (node) {
        var key = (node.getAttribute(attrKeyName) || "").toLowerCase().trim();

        if (!key) {
          return;
        }

        _this.value[key] = _this.value[key] || []; //如果存在jskit-val属性，则记录此属性值

        if (node.hasAttribute(attrValueName)) {
          _this.value[key].push((node.getAttribute(attrValueName) || "").trim());

          return;
        } //如果存在jskit-txt属性，则记录此节点的innerText值


        if (node.hasAttribute(attrTxtName)) {
          _this.value[key].push((node.innerText || "").trim());

          return;
        } //如果存在jskit-html属性，则记录此节点的innerHTML值


        if (node.hasAttribute(attrHtmlName)) {
          _this.value[key].push((node.innerHTML || "").trim());

          return;
        } //如果存在jskit-count属性，则统计这些属性元素的个数


        if (node.hasAttribute(attrCountName)) {
          _this.value[key][0] = (parseInt(_this.value[key][0] || "0") + 1).toString();
          return;
        } //如果不存在其它属性，则直接记录一个标记


        _this.value[key].push("1");
      });
      return this;
    }
  }]);

  return DOMDataRecorder;
}();

exports.DOMDataRecorder = DOMDataRecorder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWNvcmRlci9kb20udHMiXSwibmFtZXMiOlsiRE9NRGF0YVJlY29yZGVyIiwidW5kZWZpbmVkIiwiZG9jdW1lbnQiLCJFcnJvciIsIndpbiIsImdsb2JhbE9iamVjdCIsInVybCIsImxvY2F0aW9uIiwiaHJlZiIsInJlZmVyIiwicmVmZXJyZXIiLCJhdHRyS2V5TmFtZSIsImF0dHJQcmVmaXgiLCJhdHRyVmFsdWVOYW1lIiwiYXR0clR4dE5hbWUiLCJhdHRySHRtbE5hbWUiLCJhdHRyQ291bnROYW1lIiwiZWxlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJmb3JFYWNoIiwibm9kZSIsImtleSIsImdldEF0dHJpYnV0ZSIsInRvTG93ZXJDYXNlIiwidHJpbSIsInZhbHVlIiwiaGFzQXR0cmlidXRlIiwicHVzaCIsImlubmVyVGV4dCIsImlubmVySFRNTCIsInBhcnNlSW50IiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7O0lBVWFBLGU7Ozs7aUNBSUssRTs7bUNBSUUsRTs7Z0NBSUgsRTs7d0NBSUEsUTs7bUNBSWtDLEU7O29DQUlUQyxTOzs7Ozs7QUFDdEM7OzsyQkFHTztBQUFBOztBQUNIO0FBQ0EsVUFBSSxDQUFDQyxhQUFMLEVBQWU7QUFDWCxjQUFNLElBQUlDLEtBQUosQ0FBVSx3QkFBVixDQUFOO0FBQ0gsT0FKRSxDQUtIOzs7QUFDQSxVQUFNQyxHQUFHLEdBQUdDLGlCQUFaO0FBQ0EsV0FBS0MsR0FBTCxHQUFXRixHQUFHLENBQUNHLFFBQUosQ0FBYUMsSUFBeEI7QUFDQSxXQUFLQyxLQUFMLEdBQWFQLGNBQVNRLFFBQXRCLENBUkcsQ0FTSDs7QUFDQSxVQUFNQyxXQUFXLGFBQU0sS0FBS0MsVUFBWCxRQUFqQjtBQUNBLFVBQU1DLGFBQWEsYUFBTSxLQUFLRCxVQUFYLFFBQW5CO0FBQ0EsVUFBTUUsV0FBVyxhQUFNLEtBQUtGLFVBQVgsUUFBakI7QUFDQSxVQUFNRyxZQUFZLGFBQU0sS0FBS0gsVUFBWCxTQUFsQjtBQUNBLFVBQU1JLGFBQWEsYUFBTSxLQUFLSixVQUFYLFVBQW5COztBQUNBLFVBQU1LLElBQUksR0FBR2YsY0FBU2dCLGdCQUFULFlBQThCUCxXQUE5QixPQUFiOztBQUNBLFVBQUksQ0FBQ00sSUFBRCxJQUFTLENBQUNBLElBQUksQ0FBQ0UsTUFBbkIsRUFBMkI7QUFDdkIsZUFBTyxJQUFQO0FBQ0g7O0FBQ0RGLE1BQUFBLElBQUksQ0FBQ0csT0FBTCxDQUFhLFVBQUFDLElBQUksRUFBSTtBQUNqQixZQUFNQyxHQUFHLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDRSxZQUFMLENBQWtCWixXQUFsQixLQUFrQyxFQUFuQyxFQUF1Q2EsV0FBdkMsR0FBcURDLElBQXJELEVBQVo7O0FBQ0EsWUFBSSxDQUFDSCxHQUFMLEVBQVU7QUFDTjtBQUNIOztBQUNELFFBQUEsS0FBSSxDQUFDSSxLQUFMLENBQVdKLEdBQVgsSUFBa0IsS0FBSSxDQUFDSSxLQUFMLENBQVdKLEdBQVgsS0FBbUIsRUFBckMsQ0FMaUIsQ0FNakI7O0FBQ0EsWUFBSUQsSUFBSSxDQUFDTSxZQUFMLENBQWtCZCxhQUFsQixDQUFKLEVBQXNDO0FBQ2xDLFVBQUEsS0FBSSxDQUFDYSxLQUFMLENBQVdKLEdBQVgsRUFBZ0JNLElBQWhCLENBQXFCLENBQUNQLElBQUksQ0FBQ0UsWUFBTCxDQUFrQlYsYUFBbEIsS0FBb0MsRUFBckMsRUFBeUNZLElBQXpDLEVBQXJCOztBQUNBO0FBQ0gsU0FWZ0IsQ0FXakI7OztBQUNBLFlBQUlKLElBQUksQ0FBQ00sWUFBTCxDQUFrQmIsV0FBbEIsQ0FBSixFQUFvQztBQUNoQyxVQUFBLEtBQUksQ0FBQ1ksS0FBTCxDQUFXSixHQUFYLEVBQWdCTSxJQUFoQixDQUFxQixDQUFFUCxJQUFELENBQXNCUSxTQUF0QixJQUFtQyxFQUFwQyxFQUF3Q0osSUFBeEMsRUFBckI7O0FBQ0E7QUFDSCxTQWZnQixDQWdCakI7OztBQUNBLFlBQUlKLElBQUksQ0FBQ00sWUFBTCxDQUFrQlosWUFBbEIsQ0FBSixFQUFxQztBQUNqQyxVQUFBLEtBQUksQ0FBQ1csS0FBTCxDQUFXSixHQUFYLEVBQWdCTSxJQUFoQixDQUFxQixDQUFFUCxJQUFELENBQXNCUyxTQUF0QixJQUFtQyxFQUFwQyxFQUF3Q0wsSUFBeEMsRUFBckI7O0FBQ0E7QUFDSCxTQXBCZ0IsQ0FxQmpCOzs7QUFDQSxZQUFJSixJQUFJLENBQUNNLFlBQUwsQ0FBa0JYLGFBQWxCLENBQUosRUFBc0M7QUFDbEMsVUFBQSxLQUFJLENBQUNVLEtBQUwsQ0FBV0osR0FBWCxFQUFnQixDQUFoQixJQUFxQixDQUFDUyxRQUFRLENBQUMsS0FBSSxDQUFDTCxLQUFMLENBQVdKLEdBQVgsRUFBZ0IsQ0FBaEIsS0FBc0IsR0FBdkIsQ0FBUixHQUFzQyxDQUF2QyxFQUEwQ1UsUUFBMUMsRUFBckI7QUFDQTtBQUNILFNBekJnQixDQTBCakI7OztBQUNBLFFBQUEsS0FBSSxDQUFDTixLQUFMLENBQVdKLEdBQVgsRUFBZ0JNLElBQWhCLENBQXFCLEdBQXJCO0FBQ0gsT0E1QkQ7QUE2QkEsYUFBTyxJQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkb2N1bWVudCwgZ2xvYmFsT2JqZWN0IH0gZnJvbSBcIi4uL2NvbW1vbi9saWJcIlxyXG5pbXBvcnQgeyBBbnlLZXlWYWx1ZVR5cGUgfSBmcm9tIFwiLi4vZGVjbGFyYXRpb24vY29tbW9uXCJcclxuXHJcbi8qKlxyXG4gKiBET03mlbDmja7mlLbpm4borrDlvZXlmajnsbvjgILnlKjkuo7mibnph4/mlLbpm4ZET03lhYPntKDnmoTlsZ7mgKfkv6Hmga/vvIzlubblsIbov5nkupvlsZ7mgKflhoXlrrnlrZjmlL7liLDkuIDkuKrlr7nosaHkuK3jgIJcclxuICog56S65L6L77yaPGRpdiBqc2tpdC1rZXk9XCJuYW1lXCIganNraXQtdmFsPVwidGVzdFwiPjwvZGl2Pu+8jOWImeacgOe7iOS8muaKiuOAkG5hbWXjgJHkuI7jgJB0ZXN044CR5L+d5a2Y5Yiw5LiA5Liq5a+56LGh5Lit44CCXHJcbiAqIOivtOaYju+8mmpza2l0LWtleeWxnuaAp+S4uuatpOaVsOaNrueahOagh+ivhmtlee+8jHZhbHVl55qE5YC85Li677yaXHJcbiAqIDHvvJrlpoLmnpzmraRET03mnIlqc2tpdC12YWzlsZ7mgKfvvIzliJnkvJrorrDlvZXor6XlsZ7mgKfnmoTlgLxcclxuICogMu+8muWmguaenOatpERPTeaciWpza2l0LXR4dOWxnuaAp++8jOWImeS8muiusOW9leivpURPTeeahGlubmVyVGV4dFxyXG4gKiAz77ya5aaC5p6c5q2kRE9N5pyJanNraXQtaHRtbOWxnuaAp++8jOWImeS8muiusOW9leivpURPTeeahGlubmVySFRNTFxyXG4gKiA077ya5aaC5p6c5q2kRE9N5pyJanNraXQtY291bnTlsZ7mgKfvvIzliJnkvJrorrDlvZXkuI7or6VET03nm7jlkIzjgJBqc2tpdC1rZXnjgJHnmoRET03lhYPntKDnmoTlh7rnjrDmrKHmlbBcclxuICogNe+8muWmguaenOatpERPTeWPquaciWpza2l0LWtleeWxnuaAp++8jOWImeS8mum7mOiupOiusOW9leS4gOS4quagh+iusOS4ulwiMVwiXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRE9NRGF0YVJlY29yZGVyIHtcclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmNdXJs5Zyw5Z2AXHJcbiAgICAgKi9cclxuICAgIHVybDogc3RyaW5nID0gXCJcIlxyXG4gICAgLyoqXHJcbiAgICAgKiDmnaXmupB1cmzlnLDlnYBcclxuICAgICAqL1xyXG4gICAgcmVmZXI6IHN0cmluZyA9IFwiXCJcclxuICAgIC8qKlxyXG4gICAgICog5pWw5o2u5qCH6K+GXHJcbiAgICAgKi9cclxuICAgIGlkOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAvKipcclxuICAgICAqIERPTeWFg+e0oOWxnuaAp+WJjee8gO+8jOm7mOiupOS4uu+8mmpza2l0LVxyXG4gICAgICovXHJcbiAgICBhdHRyUHJlZml4ID0gXCJqc2tpdC1cIlxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDmja7lgLzvvIjplK7lgLzlr7nnmoTlvaLlvI/vvIlcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgdmFsdWU6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZ1tdIH0gPSB7fVxyXG4gICAgLyoqXHJcbiAgICAgKiDmianlsZXoh6rlrprkuYnmlbDmja5cclxuICAgICAqL1xyXG4gICAgZXh0ZW5kOiBBbnlLZXlWYWx1ZVR5cGUgfCB1bmRlZmluZWQgPSB1bmRlZmluZWRcclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgLy/njq/looPmoKHpqoxcclxuICAgICAgICBpZiAoIWRvY3VtZW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3VtZW50IGlzIG5vdCBmb3VuZCFcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ln7rmnKzlsZ7mgKdcclxuICAgICAgICBjb25zdCB3aW4gPSBnbG9iYWxPYmplY3QgYXMgV2luZG93XHJcbiAgICAgICAgdGhpcy51cmwgPSB3aW4ubG9jYXRpb24uaHJlZlxyXG4gICAgICAgIHRoaXMucmVmZXIgPSBkb2N1bWVudC5yZWZlcnJlclxyXG4gICAgICAgIC8v5pWw5o2uXHJcbiAgICAgICAgY29uc3QgYXR0cktleU5hbWUgPSBgJHt0aGlzLmF0dHJQcmVmaXh9a2V5YFxyXG4gICAgICAgIGNvbnN0IGF0dHJWYWx1ZU5hbWUgPSBgJHt0aGlzLmF0dHJQcmVmaXh9dmFsYFxyXG4gICAgICAgIGNvbnN0IGF0dHJUeHROYW1lID0gYCR7dGhpcy5hdHRyUHJlZml4fXR4dGBcclxuICAgICAgICBjb25zdCBhdHRySHRtbE5hbWUgPSBgJHt0aGlzLmF0dHJQcmVmaXh9aHRtbGBcclxuICAgICAgICBjb25zdCBhdHRyQ291bnROYW1lID0gYCR7dGhpcy5hdHRyUHJlZml4fWNvdW50YFxyXG4gICAgICAgIGNvbnN0IGVsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHthdHRyS2V5TmFtZX1dYClcclxuICAgICAgICBpZiAoIWVsZXMgfHwgIWVsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJLZXlOYW1lKSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxyXG4gICAgICAgICAgICBpZiAoIWtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy52YWx1ZVtrZXldID0gdGhpcy52YWx1ZVtrZXldIHx8IFtdXHJcbiAgICAgICAgICAgIC8v5aaC5p6c5a2Y5ZyoanNraXQtdmFs5bGe5oCn77yM5YiZ6K6w5b2V5q2k5bGe5oCn5YC8XHJcbiAgICAgICAgICAgIGlmIChub2RlLmhhc0F0dHJpYnV0ZShhdHRyVmFsdWVOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZVtrZXldLnB1c2goKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJWYWx1ZU5hbWUpIHx8IFwiXCIpLnRyaW0oKSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5a2Y5ZyoanNraXQtdHh05bGe5oCn77yM5YiZ6K6w5b2V5q2k6IqC54K555qEaW5uZXJUZXh05YC8XHJcbiAgICAgICAgICAgIGlmIChub2RlLmhhc0F0dHJpYnV0ZShhdHRyVHh0TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVba2V5XS5wdXNoKCgobm9kZSBhcyBIVE1MRWxlbWVudCkuaW5uZXJUZXh0IHx8IFwiXCIpLnRyaW0oKSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5a2Y5ZyoanNraXQtaHRtbOWxnuaAp++8jOWImeiusOW9leatpOiKgueCueeahGlubmVySFRNTOWAvFxyXG4gICAgICAgICAgICBpZiAobm9kZS5oYXNBdHRyaWJ1dGUoYXR0ckh0bWxOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZVtrZXldLnB1c2goKChub2RlIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgfHwgXCJcIikudHJpbSgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/lpoLmnpzlrZjlnKhqc2tpdC1jb3VudOWxnuaAp++8jOWImee7n+iuoei/meS6m+WxnuaAp+WFg+e0oOeahOS4quaVsFxyXG4gICAgICAgICAgICBpZiAobm9kZS5oYXNBdHRyaWJ1dGUoYXR0ckNvdW50TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVba2V5XVswXSA9IChwYXJzZUludCh0aGlzLnZhbHVlW2tleV1bMF0gfHwgXCIwXCIpICsgMSkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/lpoLmnpzkuI3lrZjlnKjlhbblroPlsZ7mgKfvvIzliJnnm7TmjqXorrDlvZXkuIDkuKrmoIforrBcclxuICAgICAgICAgICAgdGhpcy52YWx1ZVtrZXldLnB1c2goXCIxXCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG59Il19