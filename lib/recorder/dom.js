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
    value:
    /**
     * 初始化
     */
    function init() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWNvcmRlci9kb20udHMiXSwibmFtZXMiOlsiS2V5VHlwZUVudW0iLCJET01EYXRhUmVjb3JkZXIiLCJ1bmRlZmluZWQiLCJkb2N1bWVudCIsIkVycm9yIiwid2luIiwiZ2xvYmFsT2JqZWN0IiwidXJsIiwibG9jYXRpb24iLCJocmVmIiwicmVmZXIiLCJyZWZlcnJlciIsImF0dHJLZXlOYW1lIiwiYXR0clByZWZpeCIsImF0dHJUeXBlTmFtZSIsImF0dHJWYWx1ZU5hbWUiLCJlbGVzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImZvckVhY2giLCJub2RlIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwidG9Mb3dlckNhc2UiLCJ0cmltIiwidHlwZSIsImNvdW50IiwidmFsdWUiLCJoYXNBdHRyaWJ1dGUiLCJwdXNoIiwidHh0IiwiaW5uZXJUZXh0IiwiaHRtbCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0lBQ0tBLFc7QUFvQkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1dBN0JLQSxXO0FBQUFBLEVBQUFBLFc7QUFBQUEsRUFBQUEsVztBQUFBQSxFQUFBQSxXO0FBQUFBLEVBQUFBLFc7R0FBQUEsVyxLQUFBQSxXOztJQThCUUMsZTs7OztpQ0FJSyxFOzttQ0FJRSxFOztnQ0FJSCxFOzt3Q0FJQSxROzttQ0FJMkMsRTs7b0NBSWxCQyxTOzs7Ozs7QUFDdEM7QUFDSjtBQUNBO0FBQ0ksb0JBQU87QUFBQTs7QUFDSDtBQUNBLFVBQUksQ0FBQ0MsYUFBTCxFQUFlO0FBQ1gsY0FBTSxJQUFJQyxLQUFKLENBQVUsd0JBQVYsQ0FBTjtBQUNILE9BSkUsQ0FLSDs7O0FBQ0EsVUFBTUMsR0FBRyxHQUFHQyxpQkFBWjtBQUNBLFdBQUtDLEdBQUwsR0FBV0YsR0FBRyxDQUFDRyxRQUFKLENBQWFDLElBQXhCO0FB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Ii4uL2NvbW1vbi9saWJcIlxyXG5pbXBvcnQgeyBBbnlLZXlWYWx1ZVR5cGUgfSBmcm9tIFwiLi4vZGVjbGFyYXRpb24vY29tbW9uXCJcclxuXHJcbi8qKlxyXG4gKiBrZXkg55qE5p6a5Li+5YC8XHJcbiAqL1xyXG5lbnVtIEtleVR5cGVFbnVtIHtcclxuICAgIC8qKlxyXG4gICAgICog6K6w5b2V5bGe5oCn5YC8XHJcbiAgICAgKi9cclxuICAgIHZhbCA9IFwidmFsXCIsXHJcbiAgICAvKipcclxuICAgICAqIOiusOW9lWlubmVyVGV4dFxyXG4gICAgICovXHJcbiAgICB0eHQgPSBcInR4dFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDorrDlvZVpbm5lckhUTUxcclxuICAgICAqL1xyXG4gICAgaHRtbCA9IFwiaHRtbFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDorrDlvZXmrKHmlbBcclxuICAgICAqL1xyXG4gICAgY291bnQgPSBcImNvdW50XCJcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBET03mlbDmja7mlLbpm4borrDlvZXlmajnsbvjgILnlKjkuo7mibnph4/mlLbpm4ZET03lhYPntKDnmoTlsZ7mgKfkv6Hmga/vvIzlubblsIbov5nkupvlsZ7mgKflhoXlrrnlrZjmlL7liLDkuIDkuKrlr7nosaHkuK3jgIJqc2tpdC1rZXkg5bGe5oCn5b+F6aG76KaB5oyH5a6a44CCXHJcbiAqIOekuuS+i++8mjxkaXYganNraXQta2V5PVwibmFtZVwiIGpza2l0LXR5cGU9XCJ2YWxcIiBqc2tpdC12YWw9XCJ0ZXN0XCI+PC9kaXY+77yM5YiZ5pyA57uI5Lya5oqK44CQbmFtZeOAkeS4juOAkHRlc3TjgJHkv53lrZjliLDkuIDkuKrlr7nosaHkuK3jgIJcclxuICog5YW35L2T6K+05piO77yaXHJcbiAqIDHvvJrlpoLmnpzmraRET03nmoQganNraXQtdHlwZT1cInZhbFwi77yM5YiZ5Lya6K6w5b2V5bGe5oCnIGpza2l0LXZhbCDnmoTlgLzvvIjov5nnp43mg4XlhrXvvIxqc2tpdC10eXBlIOWPr+S7peecgeeVpeS4jeeUqOaMh+Wumu+8iVxyXG4gKiAy77ya5aaC5p6c5q2kRE9N55qEIGpza2l0LXR5cGU9XCJ0eHRcIu+8jOWImeS8muiusOW9leivpURPTeeahGlubmVyVGV4dFxyXG4gKiAz77ya5aaC5p6c5q2kRE9N55qEIGpza2l0LXR5cGU9XCJodG1sXCLvvIzliJnkvJrorrDlvZXor6VET03nmoRpbm5lckhUTUxcclxuICogNO+8muWmguaenOatpERPTeeahCBqc2tpdC10eXBlPVwiY291bnRcIu+8jOWImeS8muiusOW9leS4juivpURPTeebuOWQjOOAkGpza2l0LWtleeOAkeeahERPTeWFg+e0oOeahOWHuueOsOasoeaVsFxyXG4gKiA177ya5aaC5p6c5q2kRE9N5Y+q5pyJIGpza2l0LWtleSDlsZ7mgKfvvIzliJnkvJrpu5jorqTorrDlvZXkuIDkuKrmoIforrDkuLpcIjFcIlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERPTURhdGFSZWNvcmRlciB7XHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjXVybOWcsOWdgFxyXG4gICAgICovXHJcbiAgICB1cmw6IHN0cmluZyA9IFwiXCJcclxuICAgIC8qKlxyXG4gICAgICog5p2l5rqQdXJs5Zyw5Z2AXHJcbiAgICAgKi9cclxuICAgIHJlZmVyOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAvKipcclxuICAgICAqIOaVsOaNruagh+ivhlxyXG4gICAgICovXHJcbiAgICBpZDogc3RyaW5nID0gXCJcIlxyXG4gICAgLyoqXHJcbiAgICAgKiBET03lhYPntKDlsZ7mgKfliY3nvIDvvIzpu5jorqTkuLrvvJpqc2tpdC1cclxuICAgICAqL1xyXG4gICAgYXR0clByZWZpeCA9IFwianNraXQtXCJcclxuICAgIC8qKlxyXG4gICAgICog5pWw5o2u5YC877yI6ZSu5YC85a+555qE5b2i5byP77yJXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHZhbHVlOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmdbXSB8IG51bWJlciB9ID0ge31cclxuICAgIC8qKlxyXG4gICAgICog5omp5bGV6Ieq5a6a5LmJ5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIGV4dGVuZDogQW55S2V5VmFsdWVUeXBlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIC8v546v5aKD5qCh6aqMXHJcbiAgICAgICAgaWYgKCFkb2N1bWVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2N1bWVudCBpcyBub3QgZm91bmQhXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Z+65pys5bGe5oCnXHJcbiAgICAgICAgY29uc3Qgd2luID0gZ2xvYmFsT2JqZWN0IGFzIFdpbmRvd1xyXG4gICAgICAgIHRoaXMudXJsID0gd2luLmxvY2F0aW9uLmhyZWZcclxuICAgICAgICB0aGlzLnJlZmVyID0gZG9jdW1lbnQucmVmZXJyZXJcclxuICAgICAgICAvL+aVsOaNrlxyXG4gICAgICAgIGNvbnN0IGF0dHJLZXlOYW1lID0gYCR7dGhpcy5hdHRyUHJlZml4fWtleWBcclxuICAgICAgICBjb25zdCBhdHRyVHlwZU5hbWUgPSBgJHt0aGlzLmF0dHJQcmVmaXh9dHlwZWBcclxuICAgICAgICBjb25zdCBhdHRyVmFsdWVOYW1lID0gYCR7dGhpcy5hdHRyUHJlZml4fXZhbGBcclxuICAgICAgICBjb25zdCBlbGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHthdHRyS2V5TmFtZX1dYCkpXHJcbiAgICAgICAgaWYgKCFlbGVzIHx8ICFlbGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IChub2RlLmdldEF0dHJpYnV0ZShhdHRyS2V5TmFtZSkgfHwgXCJcIikudG9Mb3dlckNhc2UoKS50cmltKClcclxuICAgICAgICAgICAgaWYgKCFrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSAobm9kZS5nZXRBdHRyaWJ1dGUoYXR0clR5cGVOYW1lKSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxyXG5cclxuICAgICAgICAgICAgLy/liJ3lp4vljJZcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gS2V5VHlwZUVudW0uY291bnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWx1ZVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZVtrZXldID0gMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZVtrZXldID0gdGhpcy52YWx1ZVtrZXldIHx8IFtdXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5aaC5p6c5a2Y5ZyoanNraXQtdmFs5bGe5oCn77yM5YiZ6K6w5b2V5q2k5bGe5oCn5YC8XHJcbiAgICAgICAgICAgIGlmIChub2RlLmhhc0F0dHJpYnV0ZShhdHRyVmFsdWVOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgKHRoaXMudmFsdWVba2V5XSBhcyBzdHJpbmdbXSkucHVzaCgobm9kZS5nZXRBdHRyaWJ1dGUoYXR0clZhbHVlTmFtZSkgfHwgXCJcIikudHJpbSgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/orrDlvZXmraToioLngrnnmoRpbm5lclRleHTlgLxcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gS2V5VHlwZUVudW0udHh0KSB7XHJcbiAgICAgICAgICAgICAgICAodGhpcy52YWx1ZVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKCgobm9kZSBhcyBIVE1MRWxlbWVudCkuaW5uZXJUZXh0IHx8IFwiXCIpLnRyaW0oKSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6K6w5b2V5q2k6IqC54K555qEaW5uZXJIVE1M5YC8XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09IEtleVR5cGVFbnVtLmh0bWwpIHtcclxuICAgICAgICAgICAgICAgICh0aGlzLnZhbHVlW2tleV0gYXMgc3RyaW5nW10pLnB1c2goKChub2RlIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgfHwgXCJcIikudHJpbSgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nu5/orqHov5nkupvlsZ7mgKflhYPntKDnmoTkuKrmlbBcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gS2V5VHlwZUVudW0uY291bnQpIHtcclxuICAgICAgICAgICAgICAgICh0aGlzLnZhbHVlW2tleV0gYXMgbnVtYmVyKSA9ICh0aGlzLnZhbHVlW2tleV0gYXMgbnVtYmVyKSArIDFcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5LiN5a2Y5Zyo5YW25a6D5bGe5oCn77yM5YiZ55u05o6l6K6w5b2V5LiA5Liq5qCH6K6wXHJcbiAgICAgICAgICAgICh0aGlzLnZhbHVlW2tleV0gYXMgc3RyaW5nW10pLnB1c2goXCIxXCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG59Il19