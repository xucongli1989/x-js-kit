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

    _defineProperty(this, "reffer", "");

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
      this.reffer = _lib.document.referrer; //数据

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWNvcmRlci9kb20udHMiXSwibmFtZXMiOlsiRE9NRGF0YVJlY29yZGVyIiwidW5kZWZpbmVkIiwiZG9jdW1lbnQiLCJFcnJvciIsIndpbiIsImdsb2JhbE9iamVjdCIsInVybCIsImxvY2F0aW9uIiwiaHJlZiIsInJlZmZlciIsInJlZmVycmVyIiwiYXR0cktleU5hbWUiLCJhdHRyUHJlZml4IiwiYXR0clZhbHVlTmFtZSIsImF0dHJUeHROYW1lIiwiYXR0ckh0bWxOYW1lIiwiYXR0ckNvdW50TmFtZSIsImVsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiZm9yRWFjaCIsIm5vZGUiLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJ2YWx1ZSIsImhhc0F0dHJpYnV0ZSIsInB1c2giLCJpbm5lclRleHQiLCJpbm5lckhUTUwiLCJwYXJzZUludCIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7OztJQVVhQSxlOzs7O2lDQUlLLEU7O29DQUlHLEU7O2dDQUlKLEU7O3dDQUlBLFE7O21DQUlrQyxFOztvQ0FJVEMsUzs7Ozs7O0FBQ3RDOzs7MkJBR087QUFBQTs7QUFDSDtBQUNBLFVBQUksQ0FBQ0MsYUFBTCxFQUFlO0FBQ1gsY0FBTSxJQUFJQyxLQUFKLENBQVUsd0JBQVYsQ0FBTjtBQUNILE9BSkUsQ0FLSDs7O0FBQ0EsVUFBTUMsR0FBRyxHQUFHQyxpQkFBWjtBQUNBLFdBQUtDLEdBQUwsR0FBV0YsR0FBRyxDQUFDRyxRQUFKLENBQWFDLElBQXhCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjUCxjQUFTUSxRQUF2QixDQVJHLENBU0g7O0FBQ0EsVUFBTUMsV0FBVyxhQUFNLEtBQUtDLFVBQVgsUUFBakI7QUFDQSxVQUFNQyxhQUFhLGFBQU0sS0FBS0QsVUFBWCxRQUFuQjtBQUNBLFVBQU1FLFdBQVcsYUFBTSxLQUFLRixVQUFYLFFBQWpCO0FBQ0EsVUFBTUcsWUFBWSxhQUFNLEtBQUtILFVBQVgsU0FBbEI7QUFDQSxVQUFNSSxhQUFhLGFBQU0sS0FBS0osVUFBWCxVQUFuQjs7QUFDQSxVQUFNSyxJQUFJLEdBQUdmLGNBQVNnQixnQkFBVCxZQUE4QlAsV0FBOUIsT0FBYjs7QUFDQSxVQUFJLENBQUNNLElBQUQsSUFBUyxDQUFDQSxJQUFJLENBQUNFLE1BQW5CLEVBQTJCO0FBQ3ZCLGVBQU8sSUFBUDtBQUNIOztBQUNERixNQUFBQSxJQUFJLENBQUNHLE9BQUwsQ0FBYSxVQUFBQyxJQUFJLEVBQUk7QUFDakIsWUFBTUMsR0FBRyxHQUFHLENBQUNELElBQUksQ0FBQ0UsWUFBTCxDQUFrQlosV0FBbEIsS0FBa0MsRUFBbkMsRUFBdUNhLFdBQXZDLEdBQXFEQyxJQUFyRCxFQUFaOztBQUNBLFlBQUksQ0FBQ0gsR0FBTCxFQUFVO0FBQ047QUFDSDs7QUFDRCxRQUFBLEtBQUksQ0FBQ0ksS0FBTCxDQUFXSixHQUFYLElBQWtCLEtBQUksQ0FBQ0ksS0FBTCxDQUFXSixHQUFYLEtBQW1CLEVBQXJDLENBTGlCLENBTWpCOztBQUNBLFlBQUlELElBQUksQ0FBQ00sWUFBTCxDQUFrQmQsYUFBbEIsQ0FBSixFQUFzQztBQUNsQyxVQUFBLEtBQUksQ0FBQ2EsS0FBTCxDQUFXSixHQUFYLEVBQWdCTSxJQUFoQixDQUFxQixDQUFDUCxJQUFJLENBQUNFLFlBQUwsQ0FBa0JWLGFBQWxCLEtBQW9DLEVBQXJDLEVBQXlDWSxJQUF6QyxFQUFyQjs7QUFDQTtBQUNILFNBVmdCLENBV2pCOzs7QUFDQSxZQUFJSixJQUFJLENBQUNNLFlBQUwsQ0FBa0JiLFdBQWxCLENBQUosRUFBb0M7QUFDaEMsVUFBQSxLQUFJLENBQUNZLEtBQUwsQ0FBV0osR0FBWCxFQUFnQk0sSUFBaEIsQ0FBcUIsQ0FBRVAsSUFBRCxDQUFzQlEsU0FBdEIsSUFBbUMsRUFBcEMsRUFBd0NKLElBQXhDLEVBQXJCOztBQUNBO0FBQ0gsU0FmZ0IsQ0FnQmpCOzs7QUFDQSxZQUFJSixJQUFJLENBQUNNLFlBQUwsQ0FBa0JaLFlBQWxCLENBQUosRUFBcUM7QUFDakMsVUFBQSxLQUFJLENBQUNXLEtBQUwsQ0FBV0osR0FBWCxFQUFnQk0sSUFBaEIsQ0FBcUIsQ0FBRVAsSUFBRCxDQUFzQlMsU0FBdEIsSUFBbUMsRUFBcEMsRUFBd0NMLElBQXhDLEVBQXJCOztBQUNBO0FBQ0gsU0FwQmdCLENBcUJqQjs7O0FBQ0EsWUFBSUosSUFBSSxDQUFDTSxZQUFMLENBQWtCWCxhQUFsQixDQUFKLEVBQXNDO0FBQ2xDLFVBQUEsS0FBSSxDQUFDVSxLQUFMLENBQVdKLEdBQVgsRUFBZ0IsQ0FBaEIsSUFBcUIsQ0FBQ1MsUUFBUSxDQUFDLEtBQUksQ0FBQ0wsS0FBTCxDQUFXSixHQUFYLEVBQWdCLENBQWhCLEtBQXNCLEdBQXZCLENBQVIsR0FBc0MsQ0FBdkMsRUFBMENVLFFBQTFDLEVBQXJCO0FBQ0E7QUFDSCxTQXpCZ0IsQ0EwQmpCOzs7QUFDQSxRQUFBLEtBQUksQ0FBQ04sS0FBTCxDQUFXSixHQUFYLEVBQWdCTSxJQUFoQixDQUFxQixHQUFyQjtBQUNILE9BNUJEO0FBNkJBLGFBQU8sSUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZG9jdW1lbnQsIGdsb2JhbE9iamVjdCB9IGZyb20gXCIuLi9jb21tb24vbGliXCJcclxuaW1wb3J0IHsgQW55S2V5VmFsdWVUeXBlIH0gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbW1vblwiXHJcblxyXG4vKipcclxuICogRE9N5pWw5o2u5pS26ZuG6K6w5b2V5Zmo57G744CC55So5LqO5om56YeP5pS26ZuGRE9N5YWD57Sg55qE5bGe5oCn5L+h5oGv77yM5bm25bCG6L+Z5Lqb5bGe5oCn5YaF5a655a2Y5pS+5Yiw5LiA5Liq5a+56LGh5Lit44CCXHJcbiAqIOekuuS+i++8mjxkaXYganNraXQta2V5PVwibmFtZVwiIGpza2l0LXZhbD1cInRlc3RcIj48L2Rpdj7vvIzliJnmnIDnu4jkvJrmiorjgJBuYW1l44CR5LiO44CQdGVzdOOAkeS/neWtmOWIsOS4gOS4quWvueixoeS4reOAglxyXG4gKiDor7TmmI7vvJpqc2tpdC1rZXnlsZ7mgKfkuLrmraTmlbDmja7nmoTmoIfor4ZrZXnvvIx2YWx1ZeeahOWAvOS4uu+8mlxyXG4gKiAx77ya5aaC5p6c5q2kRE9N5pyJanNraXQtdmFs5bGe5oCn77yM5YiZ5Lya6K6w5b2V6K+l5bGe5oCn55qE5YC8XHJcbiAqIDLvvJrlpoLmnpzmraRET03mnIlqc2tpdC10eHTlsZ7mgKfvvIzliJnkvJrorrDlvZXor6VET03nmoRpbm5lclRleHRcclxuICogM++8muWmguaenOatpERPTeaciWpza2l0LWh0bWzlsZ7mgKfvvIzliJnkvJrorrDlvZXor6VET03nmoRpbm5lckhUTUxcclxuICogNO+8muWmguaenOatpERPTeaciWpza2l0LWNvdW505bGe5oCn77yM5YiZ5Lya6K6w5b2V5LiO6K+lRE9N55u45ZCM44CQanNraXQta2V544CR55qERE9N5YWD57Sg55qE5Ye6546w5qyh5pWwXHJcbiAqIDXvvJrlpoLmnpzmraRET03lj6rmnIlqc2tpdC1rZXnlsZ7mgKfvvIzliJnkvJrpu5jorqTorrDlvZXkuIDkuKrmoIforrDkuLpcIjFcIlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERPTURhdGFSZWNvcmRlciB7XHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjXVybOWcsOWdgFxyXG4gICAgICovXHJcbiAgICB1cmw6IHN0cmluZyA9IFwiXCJcclxuICAgIC8qKlxyXG4gICAgICog5p2l5rqQdXJs5Zyw5Z2AXHJcbiAgICAgKi9cclxuICAgIHJlZmZlcjogc3RyaW5nID0gXCJcIlxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDmja7moIfor4ZcclxuICAgICAqL1xyXG4gICAgaWQ6IHN0cmluZyA9IFwiXCJcclxuICAgIC8qKlxyXG4gICAgICogRE9N5YWD57Sg5bGe5oCn5YmN57yA77yM6buY6K6k5Li677yaanNraXQtXHJcbiAgICAgKi9cclxuICAgIGF0dHJQcmVmaXggPSBcImpza2l0LVwiXHJcbiAgICAvKipcclxuICAgICAqIOaVsOaNruWAvO+8iOmUruWAvOWvueeahOW9ouW8j++8iVxyXG4gICAgICovXHJcbiAgICByZWFkb25seSB2YWx1ZTogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nW10gfSA9IHt9XHJcbiAgICAvKipcclxuICAgICAqIOaJqeWxleiHquWumuS5ieaVsOaNrlxyXG4gICAgICovXHJcbiAgICBleHRlbmQ6IEFueUtleVZhbHVlVHlwZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZFxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAvL+eOr+Wig+agoemqjFxyXG4gICAgICAgIGlmICghZG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdW1lbnQgaXMgbm90IGZvdW5kIVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WfuuacrOWxnuaAp1xyXG4gICAgICAgIGNvbnN0IHdpbiA9IGdsb2JhbE9iamVjdCBhcyBXaW5kb3dcclxuICAgICAgICB0aGlzLnVybCA9IHdpbi5sb2NhdGlvbi5ocmVmXHJcbiAgICAgICAgdGhpcy5yZWZmZXIgPSBkb2N1bWVudC5yZWZlcnJlclxyXG4gICAgICAgIC8v5pWw5o2uXHJcbiAgICAgICAgY29uc3QgYXR0cktleU5hbWUgPSBgJHt0aGlzLmF0dHJQcmVmaXh9a2V5YFxyXG4gICAgICAgIGNvbnN0IGF0dHJWYWx1ZU5hbWUgPSBgJHt0aGlzLmF0dHJQcmVmaXh9dmFsYFxyXG4gICAgICAgIGNvbnN0IGF0dHJUeHROYW1lID0gYCR7dGhpcy5hdHRyUHJlZml4fXR4dGBcclxuICAgICAgICBjb25zdCBhdHRySHRtbE5hbWUgPSBgJHt0aGlzLmF0dHJQcmVmaXh9aHRtbGBcclxuICAgICAgICBjb25zdCBhdHRyQ291bnROYW1lID0gYCR7dGhpcy5hdHRyUHJlZml4fWNvdW50YFxyXG4gICAgICAgIGNvbnN0IGVsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHthdHRyS2V5TmFtZX1dYClcclxuICAgICAgICBpZiAoIWVsZXMgfHwgIWVsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJLZXlOYW1lKSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxyXG4gICAgICAgICAgICBpZiAoIWtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy52YWx1ZVtrZXldID0gdGhpcy52YWx1ZVtrZXldIHx8IFtdXHJcbiAgICAgICAgICAgIC8v5aaC5p6c5a2Y5ZyoanNraXQtdmFs5bGe5oCn77yM5YiZ6K6w5b2V5q2k5bGe5oCn5YC8XHJcbiAgICAgICAgICAgIGlmIChub2RlLmhhc0F0dHJpYnV0ZShhdHRyVmFsdWVOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZVtrZXldLnB1c2goKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJWYWx1ZU5hbWUpIHx8IFwiXCIpLnRyaW0oKSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5a2Y5ZyoanNraXQtdHh05bGe5oCn77yM5YiZ6K6w5b2V5q2k6IqC54K555qEaW5uZXJUZXh05YC8XHJcbiAgICAgICAgICAgIGlmIChub2RlLmhhc0F0dHJpYnV0ZShhdHRyVHh0TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVba2V5XS5wdXNoKCgobm9kZSBhcyBIVE1MRWxlbWVudCkuaW5uZXJUZXh0IHx8IFwiXCIpLnRyaW0oKSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5a2Y5ZyoanNraXQtaHRtbOWxnuaAp++8jOWImeiusOW9leatpOiKgueCueeahGlubmVySFRNTOWAvFxyXG4gICAgICAgICAgICBpZiAobm9kZS5oYXNBdHRyaWJ1dGUoYXR0ckh0bWxOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZVtrZXldLnB1c2goKChub2RlIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgfHwgXCJcIikudHJpbSgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/lpoLmnpzlrZjlnKhqc2tpdC1jb3VudOWxnuaAp++8jOWImee7n+iuoei/meS6m+WxnuaAp+WFg+e0oOeahOS4quaVsFxyXG4gICAgICAgICAgICBpZiAobm9kZS5oYXNBdHRyaWJ1dGUoYXR0ckNvdW50TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVba2V5XVswXSA9IChwYXJzZUludCh0aGlzLnZhbHVlW2tleV1bMF0gfHwgXCIwXCIpICsgMSkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/lpoLmnpzkuI3lrZjlnKjlhbblroPlsZ7mgKfvvIzliJnnm7TmjqXorrDlvZXkuIDkuKrmoIforrBcclxuICAgICAgICAgICAgdGhpcy52YWx1ZVtrZXldLnB1c2goXCIxXCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG59Il19