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
 * key 的枚举值
 */
var KeyTypeEnum;
/**
 * DOM数据收集记录器类。用于批量收集DOM元素的属性信息，并将这些属性内容存放到一个对象中。jskit-key 属性必须要指定。
 * 示例：<div jskit-key="name" jskit-type="val" jskit-val="test"></div>，则最终会把【name】与【test】保存到一个对象中。
 * 具体说明：
 * 1：如果此DOM的 jskit-type="val"，则会记录属性 jskit-val 的值（这种情况，jskit-type 可以省略不用指定）
 * 2：如果此DOM的 jskit-type="txt"，则会记录该DOM的innerText
 * 3：如果此DOM的 jskit-type="html"，则会记录该DOM的innerHTML
 * 4：如果此DOM的 jskit-type="count"，则会记录与该DOM相同【jskit-key】的DOM元素的出现次数
 * 5：如果此DOM只有 jskit-key 属性，则会默认记录一个标记为"1"
 */

(function (KeyTypeEnum) {
  KeyTypeEnum["val"] = "val";
  KeyTypeEnum["txt"] = "txt";
  KeyTypeEnum["html"] = "html";
  KeyTypeEnum["count"] = "count";
})(KeyTypeEnum || (KeyTypeEnum = {}));

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
      var attrTypeName = "".concat(this.attrPrefix, "type");
      var attrValueName = "".concat(this.attrPrefix, "val");
      var eles = Array.from(_lib.document.querySelectorAll("[".concat(attrKeyName, "]")));

      if (!eles || !eles.length) {
        return this;
      }

      eles.forEach(function (node) {
        var key = (node.getAttribute(attrKeyName) || "").toLowerCase().trim();

        if (!key) {
          return;
        }

        var type = (node.getAttribute(attrTypeName) || "").toLowerCase().trim(); //初始化

        if (type == KeyTypeEnum.count) {
          if (!_this.value[key]) {
            _this.value[key] = 0;
          }
        } else {
          _this.value[key] = _this.value[key] || [];
        } //如果存在jskit-val属性，则记录此属性值


        if (node.hasAttribute(attrValueName)) {
          _this.value[key].push((node.getAttribute(attrValueName) || "").trim());

          return;
        } //记录此节点的innerText值


        if (type == KeyTypeEnum.txt) {
          _this.value[key].push((node.innerText || "").trim());

          return;
        } //记录此节点的innerHTML值


        if (type == KeyTypeEnum.html) {
          _this.value[key].push((node.innerHTML || "").trim());

          return;
        } //统计这些属性元素的个数


        if (type == KeyTypeEnum.count) {
          _this.value[key] = _this.value[key] + 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWNvcmRlci9kb20udHMiXSwibmFtZXMiOlsiS2V5VHlwZUVudW0iLCJET01EYXRhUmVjb3JkZXIiLCJ1bmRlZmluZWQiLCJkb2N1bWVudCIsIkVycm9yIiwid2luIiwiZ2xvYmFsT2JqZWN0IiwidXJsIiwibG9jYXRpb24iLCJocmVmIiwicmVmZXIiLCJyZWZlcnJlciIsImF0dHJLZXlOYW1lIiwiYXR0clByZWZpeCIsImF0dHJUeXBlTmFtZSIsImF0dHJWYWx1ZU5hbWUiLCJlbGVzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImZvckVhY2giLCJub2RlIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwidG9Mb3dlckNhc2UiLCJ0cmltIiwidHlwZSIsImNvdW50IiwidmFsdWUiLCJoYXNBdHRyaWJ1dGUiLCJwdXNoIiwidHh0IiwiaW5uZXJUZXh0IiwiaHRtbCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0lBQ0tBLFc7QUFvQkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1dBN0JLQSxXO0FBQUFBLEVBQUFBLFc7QUFBQUEsRUFBQUEsVztBQUFBQSxFQUFBQSxXO0FBQUFBLEVBQUFBLFc7R0FBQUEsVyxLQUFBQSxXOztJQThCUUMsZTs7OztpQ0FJSyxFOzttQ0FJRSxFOztnQ0FJSCxFOzt3Q0FJQSxROzttQ0FJMkMsRTs7b0NBSWxCQyxTOzs7Ozs7QUFDdEM7QUFDSjtBQUNBOzJCQUNXO0FBQUE7O0FBQ0g7QUFDQSxVQUFJLENBQUNDLGFBQUwsRUFBZTtBQUNYLGNBQU0sSUFBSUMsS0FBSixDQUFVLHdCQUFWLENBQU47QUFDSCxPQUpFLENBS0g7OztBQUNBLFVBQU1DLEdBQUcsR0FBR0MsaUJBQVo7QUFDQSxXQUFLQyxHQUFMLEdBQVdGLEdBQUcsQ0FBQ0csUUFBSixDQUFhQyxJQUF4QjtBQUNBLFdB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b21tb24vbGliXCJcclxuaW1wb3J0IHsgQW55S2V5VmFsdWVUeXBlIH0gZnJvbSBcIi4uL2RlY2xhcmF0aW9uL2NvbW1vblwiXHJcblxyXG4vKipcclxuICoga2V5IOeahOaemuS4vuWAvFxyXG4gKi9cclxuZW51bSBLZXlUeXBlRW51bSB7XHJcbiAgICAvKipcclxuICAgICAqIOiusOW9leWxnuaAp+WAvFxyXG4gICAgICovXHJcbiAgICB2YWwgPSBcInZhbFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDorrDlvZVpbm5lclRleHRcclxuICAgICAqL1xyXG4gICAgdHh0ID0gXCJ0eHRcIixcclxuICAgIC8qKlxyXG4gICAgICog6K6w5b2VaW5uZXJIVE1MXHJcbiAgICAgKi9cclxuICAgIGh0bWwgPSBcImh0bWxcIixcclxuICAgIC8qKlxyXG4gICAgICog6K6w5b2V5qyh5pWwXHJcbiAgICAgKi9cclxuICAgIGNvdW50ID0gXCJjb3VudFwiXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogRE9N5pWw5o2u5pS26ZuG6K6w5b2V5Zmo57G744CC55So5LqO5om56YeP5pS26ZuGRE9N5YWD57Sg55qE5bGe5oCn5L+h5oGv77yM5bm25bCG6L+Z5Lqb5bGe5oCn5YaF5a655a2Y5pS+5Yiw5LiA5Liq5a+56LGh5Lit44CCanNraXQta2V5IOWxnuaAp+W/hemhu+imgeaMh+WumuOAglxyXG4gKiDnpLrkvovvvJo8ZGl2IGpza2l0LWtleT1cIm5hbWVcIiBqc2tpdC10eXBlPVwidmFsXCIganNraXQtdmFsPVwidGVzdFwiPjwvZGl2Pu+8jOWImeacgOe7iOS8muaKiuOAkG5hbWXjgJHkuI7jgJB0ZXN044CR5L+d5a2Y5Yiw5LiA5Liq5a+56LGh5Lit44CCXHJcbiAqIOWFt+S9k+ivtOaYju+8mlxyXG4gKiAx77ya5aaC5p6c5q2kRE9N55qEIGpza2l0LXR5cGU9XCJ2YWxcIu+8jOWImeS8muiusOW9leWxnuaApyBqc2tpdC12YWwg55qE5YC877yI6L+Z56eN5oOF5Ya177yManNraXQtdHlwZSDlj6/ku6XnnIHnlaXkuI3nlKjmjIflrprvvIlcclxuICogMu+8muWmguaenOatpERPTeeahCBqc2tpdC10eXBlPVwidHh0XCLvvIzliJnkvJrorrDlvZXor6VET03nmoRpbm5lclRleHRcclxuICogM++8muWmguaenOatpERPTeeahCBqc2tpdC10eXBlPVwiaHRtbFwi77yM5YiZ5Lya6K6w5b2V6K+lRE9N55qEaW5uZXJIVE1MXHJcbiAqIDTvvJrlpoLmnpzmraRET03nmoQganNraXQtdHlwZT1cImNvdW50XCLvvIzliJnkvJrorrDlvZXkuI7or6VET03nm7jlkIzjgJBqc2tpdC1rZXnjgJHnmoRET03lhYPntKDnmoTlh7rnjrDmrKHmlbBcclxuICogNe+8muWmguaenOatpERPTeWPquaciSBqc2tpdC1rZXkg5bGe5oCn77yM5YiZ5Lya6buY6K6k6K6w5b2V5LiA5Liq5qCH6K6w5Li6XCIxXCJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBET01EYXRhUmVjb3JkZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY11cmzlnLDlnYBcclxuICAgICAqL1xyXG4gICAgdXJsOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAvKipcclxuICAgICAqIOadpea6kHVybOWcsOWdgFxyXG4gICAgICovXHJcbiAgICByZWZlcjogc3RyaW5nID0gXCJcIlxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDmja7moIfor4ZcclxuICAgICAqL1xyXG4gICAgaWQ6IHN0cmluZyA9IFwiXCJcclxuICAgIC8qKlxyXG4gICAgICogRE9N5YWD57Sg5bGe5oCn5YmN57yA77yM6buY6K6k5Li677yaanNraXQtXHJcbiAgICAgKi9cclxuICAgIGF0dHJQcmVmaXggPSBcImpza2l0LVwiXHJcbiAgICAvKipcclxuICAgICAqIOaVsOaNruWAvO+8iOmUruWAvOWvueeahOW9ouW8j++8iVxyXG4gICAgICovXHJcbiAgICByZWFkb25seSB2YWx1ZTogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nW10gfCBudW1iZXIgfSA9IHt9XHJcbiAgICAvKipcclxuICAgICAqIOaJqeWxleiHquWumuS5ieaVsOaNrlxyXG4gICAgICovXHJcbiAgICBleHRlbmQ6IEFueUtleVZhbHVlVHlwZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZFxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAvL+eOr+Wig+agoemqjFxyXG4gICAgICAgIGlmICghZG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdW1lbnQgaXMgbm90IGZvdW5kIVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WfuuacrOWxnuaAp1xyXG4gICAgICAgIGNvbnN0IHdpbiA9IGdsb2JhbE9iamVjdCBhcyBXaW5kb3dcclxuICAgICAgICB0aGlzLnVybCA9IHdpbi5sb2NhdGlvbi5ocmVmXHJcbiAgICAgICAgdGhpcy5yZWZlciA9IGRvY3VtZW50LnJlZmVycmVyXHJcbiAgICAgICAgLy/mlbDmja5cclxuICAgICAgICBjb25zdCBhdHRyS2V5TmFtZSA9IGAke3RoaXMuYXR0clByZWZpeH1rZXlgXHJcbiAgICAgICAgY29uc3QgYXR0clR5cGVOYW1lID0gYCR7dGhpcy5hdHRyUHJlZml4fXR5cGVgXHJcbiAgICAgICAgY29uc3QgYXR0clZhbHVlTmFtZSA9IGAke3RoaXMuYXR0clByZWZpeH12YWxgXHJcbiAgICAgICAgY29uc3QgZWxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cktleU5hbWV9XWApKVxyXG4gICAgICAgIGlmICghZWxlcyB8fCAhZWxlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSAobm9kZS5nZXRBdHRyaWJ1dGUoYXR0cktleU5hbWUpIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkudHJpbSgpXHJcbiAgICAgICAgICAgIGlmICgha2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJUeXBlTmFtZSkgfHwgXCJcIikudG9Mb3dlckNhc2UoKS50cmltKClcclxuXHJcbiAgICAgICAgICAgIC8v5Yid5aeL5YyWXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09IEtleVR5cGVFbnVtLmNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsdWVba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVba2V5XSA9IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVba2V5XSA9IHRoaXMudmFsdWVba2V5XSB8fCBbXVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+WmguaenOWtmOWcqGpza2l0LXZhbOWxnuaAp++8jOWImeiusOW9leatpOWxnuaAp+WAvFxyXG4gICAgICAgICAgICBpZiAobm9kZS5oYXNBdHRyaWJ1dGUoYXR0clZhbHVlTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICh0aGlzLnZhbHVlW2tleV0gYXMgc3RyaW5nW10pLnB1c2goKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJWYWx1ZU5hbWUpIHx8IFwiXCIpLnRyaW0oKSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6K6w5b2V5q2k6IqC54K555qEaW5uZXJUZXh05YC8XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09IEtleVR5cGVFbnVtLnR4dCkge1xyXG4gICAgICAgICAgICAgICAgKHRoaXMudmFsdWVba2V5XSBhcyBzdHJpbmdbXSkucHVzaCgoKG5vZGUgYXMgSFRNTEVsZW1lbnQpLmlubmVyVGV4dCB8fCBcIlwiKS50cmltKCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+iusOW9leatpOiKgueCueeahGlubmVySFRNTOWAvFxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSBLZXlUeXBlRW51bS5odG1sKSB7XHJcbiAgICAgICAgICAgICAgICAodGhpcy52YWx1ZVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKCgobm9kZSBhcyBIVE1MRWxlbWVudCkuaW5uZXJIVE1MIHx8IFwiXCIpLnRyaW0oKSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v57uf6K6h6L+Z5Lqb5bGe5oCn5YWD57Sg55qE5Liq5pWwXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09IEtleVR5cGVFbnVtLmNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAodGhpcy52YWx1ZVtrZXldIGFzIG51bWJlcikgPSAodGhpcy52YWx1ZVtrZXldIGFzIG51bWJlcikgKyAxXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+WmguaenOS4jeWtmOWcqOWFtuWug+WxnuaAp++8jOWImeebtOaOpeiusOW9leS4gOS4quagh+iusFxyXG4gICAgICAgICAgICAodGhpcy52YWx1ZVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKFwiMVwiKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxufSJdfQ==