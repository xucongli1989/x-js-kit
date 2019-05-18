"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceImgSrc = replaceImgSrc;
var ImageSrcReg = /(<img\s+[^>]*)(src)(=[^>]*>)/gi;
/**
 * 替换html中所有img标签的src标签名称
 * 如：<img src="http://www.a.com/a.jpg"/> ==> <img data-src="http://www.a.com/a.jpg"/>
 * @param html html字符串
 * @param newAttrName 新的替代src的属性名，默认为data-src
 * @returns 新的html字符串
 */

function replaceImgSrc(html) {
  var newAttrName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "data-src";

  if (!html) {
    return "";
  }

  return html.replace(ImageSrcReg, "$1".concat(newAttrName, "$3"));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vaW1hZ2UudHMiXSwibmFtZXMiOlsiSW1hZ2VTcmNSZWciLCJyZXBsYWNlSW1nU3JjIiwiaHRtbCIsIm5ld0F0dHJOYW1lIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsV0FBVyxHQUFHLGdDQUFwQjtBQUVBOzs7Ozs7OztBQU9PLFNBQVNDLGFBQVQsQ0FBdUJDLElBQXZCLEVBQStFO0FBQUEsTUFBMUNDLFdBQTBDLHVFQUFwQixVQUFvQjs7QUFDbEYsTUFBSSxDQUFDRCxJQUFMLEVBQVc7QUFDUCxXQUFPLEVBQVA7QUFDSDs7QUFDRCxTQUFPQSxJQUFJLENBQUNFLE9BQUwsQ0FBYUosV0FBYixjQUErQkcsV0FBL0IsUUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSW1hZ2VTcmNSZWcgPSAvKDxpbWdcXHMrW14+XSopKHNyYykoPVtePl0qPikvZ2lcclxuXHJcbi8qKlxyXG4gKiDmm7/mjaJodG1s5Lit5omA5pyJaW1n5qCH562+55qEc3Jj5qCH562+5ZCN56ewXHJcbiAqIOWmgu+8mjxpbWcgc3JjPVwiaHR0cDovL3d3dy5hLmNvbS9hLmpwZ1wiLz4gPT0+IDxpbWcgZGF0YS1zcmM9XCJodHRwOi8vd3d3LmEuY29tL2EuanBnXCIvPlxyXG4gKiBAcGFyYW0gaHRtbCBodG1s5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBuZXdBdHRyTmFtZSDmlrDnmoTmm7/ku6NzcmPnmoTlsZ7mgKflkI3vvIzpu5jorqTkuLpkYXRhLXNyY1xyXG4gKiBAcmV0dXJucyDmlrDnmoRodG1s5a2X56ym5LiyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUltZ1NyYyhodG1sOiBzdHJpbmcsIG5ld0F0dHJOYW1lOiBzdHJpbmcgPSBcImRhdGEtc3JjXCIpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFodG1sKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBodG1sLnJlcGxhY2UoSW1hZ2VTcmNSZWcsIGAkMSR7bmV3QXR0ck5hbWV9JDNgKVxyXG59Il19