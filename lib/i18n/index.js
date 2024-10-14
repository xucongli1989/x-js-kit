"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultLanguage = getDefaultLanguage;
exports.getDefaultCurrencySymbol = getDefaultCurrencySymbol;
exports.createOrInitI18nInstance = createOrInitI18nInstance;
exports.LanguageTypeEnumList = exports.LanguageTypeEnum = void 0;

var _enumTool = require("../common/enumTool");

var LanguageTypeEnum;
exports.LanguageTypeEnum = LanguageTypeEnum;

(function (LanguageTypeEnum) {
  LanguageTypeEnum["\u7B80\u4F53\u4E2D\u6587"] = "zh-CN";
  LanguageTypeEnum["\u7E41\u9AD4\u4E2D\u6587"] = "zh-TW";
  LanguageTypeEnum["English"] = "en-US";
  LanguageTypeEnum["Fran\xE7ais"] = "fr-FR";
  LanguageTypeEnum["Deutsch"] = "de-DE";
  LanguageTypeEnum["Espa\xF1ol"] = "es-ES";
  LanguageTypeEnum["\u65E5\u672C\u8A9E"] = "ja-JP";
  LanguageTypeEnum["\uD55C\uAD6D\uC5B4"] = "ko-KR";
})(LanguageTypeEnum || (exports.LanguageTypeEnum = LanguageTypeEnum = {}));

var LanguageTypeEnumList = (0, _enumTool.convertEnumToList)(LanguageTypeEnum);
/**
 * 获取默认语言
 */

exports.LanguageTypeEnumList = LanguageTypeEnumList;

function getDefaultLanguage(isChina) {
  return isChina ? LanguageTypeEnum.简体中文 : LanguageTypeEnum.English;
}
/**
 * 获取默认的货币符号
 */


function getDefaultCurrencySymbol(isChina) {
  return isChina ? "¥" : "$";
}
/**
 * 创建或初始化 i18n 实例。注意：defaultInstance、initReact 必须作为参数由具体使用的项目传过来，因为每个项目的默认实例不一样
 */


function createOrInitI18nInstance(isCreateNewInstance, defaultInstance, initReact, isChina, lang, transData) {
  var defaultLang = getDefaultLanguage(isChina);
  var currentLang = lang && (0, _enumTool.isValueInEnum)(LanguageTypeEnum, lang) ? lang : defaultLang;
  var initOps = {
    lng: currentLang,
    supportedLngs: LanguageTypeEnumList.map(function (k) {
      return k.value;
    }),
    fallbackLng: defaultLang,
    interpolation: {
      escapeValue: false
    },
    resources: transData
  };
  var ins = initReact ? defaultInstance.use(initReact) : defaultInstance; //创建新的 i18n 实例

  if (isCreateNewInstance) {
    return ins.createInstance(initOps, function (err) {
      //此函数必须有，否则报错
      if (!err) {
        return;
      }

      console.error("Create new i18n instance error: ".concat(err));
    });
  } //初始化默认实例


  return ins.init(initOps, function (err) {
    if (!err) {
      return;
    }

    console.error("Init default i18n instance error: ".concat(err));
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pMThuL2luZGV4LnRzIl0sIm5hbWVzIjpbIkxhbmd1YWdlVHlwZUVudW0iLCJMYW5ndWFnZVR5cGVFbnVtTGlzdCIsImdldERlZmF1bHRMYW5ndWFnZSIsImlzQ2hpbmEiLCLnroDkvZPkuK3mlociLCJFbmdsaXNoIiwiZ2V0RGVmYXVsdEN1cnJlbmN5U3ltYm9sIiwiY3JlYXRlT3JJbml0STE4bkluc3RhbmNlIiwiaXNDcmVhdGVOZXdJbnN0YW5jZSIsImRlZmF1bHRJbnN0YW5jZSIsImluaXRSZWFjdCIsImxhbmciLCJ0cmFuc0RhdGEiLCJkZWZhdWx0TGFuZyIsImN1cnJlbnRMYW5nIiwiaW5pdE9wcyIsImxuZyIsInN1cHBvcnRlZExuZ3MiLCJtYXAiLCJrIiwidmFsdWUiLCJmYWxsYmFja0xuZyIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsInJlc291cmNlcyIsImlucyIsInVzZSIsImNyZWF0ZUluc3RhbmNlIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiaW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOztJQUVZQSxnQjs7O1dBQUFBLGdCO0FBQUFBLEVBQUFBLGdCO0FBQUFBLEVBQUFBLGdCO0FBQUFBLEVBQUFBLGdCO0FBQUFBLEVBQUFBLGdCO0FBQUFBLEVBQUFBLGdCO0FBQUFBLEVBQUFBLGdCO0FBQUFBLEVBQUFBLGdCO0FBQUFBLEVBQUFBLGdCO0dBQUFBLGdCLGdDQUFBQSxnQjs7QUFVTCxJQUFNQyxvQkFBb0IsR0FBRyxpQ0FBa0JELGdCQUFsQixDQUE3QjtBQUVQO0FBQ0E7QUFDQTs7OztBQUNPLFNBQVNFLGtCQUFULENBQTRCQyxPQUE1QixFQUE4QztBQUNqRCxTQUFPQSxPQUFPLEdBQUdILGdCQUFnQixDQUFDSSxJQUFwQixHQUEyQkosZ0JBQWdCLENBQUNLLE9BQTFEO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNDLHdCQUFULENBQWtDSCxPQUFsQyxFQUFvRDtBQUN2RCxTQUFPQSxPQUFPLEdBQUcsR0FBSCxHQUFTLEdBQXZCO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7OztBQUNPLFNBQVNJLHdCQUFULENBQWtDQyxtQkFBbEMsRUFBZ0VDLGVBQWhFLEVBQXVGQyxTQUF2RixFQUFvSFAsT0FBcEgsRUFBc0lRLElBQXRJLEVBQThKQyxTQUE5SixFQUFtTDtBQUN0TCxNQUFNQyxXQUFXLEdBQUdYLGtCQUFrQixDQUFDQyxPQUFELENBQXRDO0FBQ0EsTUFBTVcsV0FBVyxHQUFHSCxJQUFJLElBQUksNkJBQWNYLGdCQUFkLEVBQWdDVyxJQUFoQyxDQUFSLEdBQWdEQSxJQUFoRCxHQUF1REUsV0FBM0U7QUFFQSxNQUFNRSxPQUFvQixHQUFHO0FBQ3pCQyxJQUFBQSxHQUFHLEVBQUVGLFdBRG9CO0FBRXpCRyxJQUFBQSxhQUFhLEVBQUVoQixvQkFBb0IsQ0FBQ2lCLEdBQXJCLENBQXlCLFVBQUNDLENBQUQ7QUFBQSxhQUFPQSxDQUFDLENBQUNDLEtBQVQ7QUFBQSxLQUF6QixDQUZVO0FBR3pCQyxJQUFBQSxXQUFXLEVBQUVSLFdBSFk7QUFJekJTLElBQUFBLGFBQWEsRUFBRTtBQUNYQyxNQUFBQSxXQUFXLEVBQUU7QUFERixLQUpVO0FBT3pCQyxJQUFBQSxTQUFTLEVBQUVaO0FBUGMsR0FBN0I7QUFVQSxNQUFNYSxHQUFHLEdBQUdmLFNBQVMsR0FBR0QsZUFBZSxDQUFDaUIsR0FBaEIsQ0FBb0JoQixTQUFwQixDQUFILEdBQW9DRCxlQUF6RCxDQWRzTCxDQWdCdEw7O0FBQ0EsTUFBSUQsbUJBQUosRUFBeUI7QUFDckIsV0FBT2lCLEdBQUcsQ0FBQ0UsY0FBSixDQUFtQlosT0FBbkIsRUFBNEIsVUFBQ2EsR0FBRCxFQUFTO0FBQ3hDO0FBQ0EsVUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTjtBQUNIOztBQUNEQyxNQUFBQSxPQUFPLENBQUNDLEtBQVIsMkNBQWlERixHQUFqRDtBQUNILEtBTk0sQ0FBUDtBQU9ILEdBekJxTCxDQTJCdEw7OztBQUNBLFNBQU9ILEdBQUcsQ0FBQ00sSUFBSixDQUFTaEIsT0FBVCxFQUFrQixVQUFDYSxHQUFELEVBQVM7QUFDOUIsUUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTjtBQUNIOztBQUNEQyxJQUFBQSxPQUFPLENBQUNDLEtBQVIsNkNBQW1ERixHQUFuRDtBQUNILEdBTE0sQ0FBUDtBQU1IIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaTE4biwgSW5pdE9wdGlvbnMsIFJlc291cmNlLCBUaGlyZFBhcnR5TW9kdWxlIH0gZnJvbSBcImkxOG5leHRcIlxyXG5pbXBvcnQgeyBjb252ZXJ0RW51bVRvTGlzdCwgaXNWYWx1ZUluRW51bSB9IGZyb20gXCIuLi9jb21tb24vZW51bVRvb2xcIlxyXG5cclxuZXhwb3J0IGVudW0gTGFuZ3VhZ2VUeXBlRW51bSB7XHJcbiAgICDnroDkvZPkuK3mlocgPSBcInpoLUNOXCIsXHJcbiAgICDnuYHpq5TkuK3mlocgPSBcInpoLVRXXCIsXHJcbiAgICBFbmdsaXNoID0gXCJlbi1VU1wiLFxyXG4gICAgRnJhbsOnYWlzID0gXCJmci1GUlwiLFxyXG4gICAgRGV1dHNjaCA9IFwiZGUtREVcIixcclxuICAgIEVzcGHDsW9sID0gXCJlcy1FU1wiLFxyXG4gICAg5pel5pys6KqeID0gXCJqYS1KUFwiLFxyXG4gICAg7ZWc6rWt7Ja0ID0gXCJrby1LUlwiXHJcbn1cclxuZXhwb3J0IGNvbnN0IExhbmd1YWdlVHlwZUVudW1MaXN0ID0gY29udmVydEVudW1Ub0xpc3QoTGFuZ3VhZ2VUeXBlRW51bSlcclxuXHJcbi8qKlxyXG4gKiDojrflj5bpu5jorqTor63oqIBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0TGFuZ3VhZ2UoaXNDaGluYTogYm9vbGVhbikge1xyXG4gICAgcmV0dXJuIGlzQ2hpbmEgPyBMYW5ndWFnZVR5cGVFbnVtLueugOS9k+S4reaWhyA6IExhbmd1YWdlVHlwZUVudW0uRW5nbGlzaFxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W6buY6K6k55qE6LSn5biB56ym5Y+3XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEN1cnJlbmN5U3ltYm9sKGlzQ2hpbmE6IGJvb2xlYW4pIHtcclxuICAgIHJldHVybiBpc0NoaW5hID8gXCLCpVwiIDogXCIkXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIm+W7uuaIluWIneWni+WMliBpMThuIOWunuS+i+OAguazqOaEj++8mmRlZmF1bHRJbnN0YW5jZeOAgWluaXRSZWFjdCDlv4XpobvkvZzkuLrlj4LmlbDnlLHlhbfkvZPkvb/nlKjnmoTpobnnm67kvKDov4fmnaXvvIzlm6DkuLrmr4/kuKrpobnnm67nmoTpu5jorqTlrp7kvovkuI3kuIDmoLdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPckluaXRJMThuSW5zdGFuY2UoaXNDcmVhdGVOZXdJbnN0YW5jZTogYm9vbGVhbiwgZGVmYXVsdEluc3RhbmNlOiBpMThuLCBpbml0UmVhY3Q6IFRoaXJkUGFydHlNb2R1bGUsIGlzQ2hpbmE6IGJvb2xlYW4sIGxhbmc6IExhbmd1YWdlVHlwZUVudW0sIHRyYW5zRGF0YTogUmVzb3VyY2UpIHtcclxuICAgIGNvbnN0IGRlZmF1bHRMYW5nID0gZ2V0RGVmYXVsdExhbmd1YWdlKGlzQ2hpbmEpXHJcbiAgICBjb25zdCBjdXJyZW50TGFuZyA9IGxhbmcgJiYgaXNWYWx1ZUluRW51bShMYW5ndWFnZVR5cGVFbnVtLCBsYW5nKSA/IGxhbmcgOiBkZWZhdWx0TGFuZ1xyXG5cclxuICAgIGNvbnN0IGluaXRPcHM6IEluaXRPcHRpb25zID0ge1xyXG4gICAgICAgIGxuZzogY3VycmVudExhbmcsXHJcbiAgICAgICAgc3VwcG9ydGVkTG5nczogTGFuZ3VhZ2VUeXBlRW51bUxpc3QubWFwKChrKSA9PiBrLnZhbHVlKSxcclxuICAgICAgICBmYWxsYmFja0xuZzogZGVmYXVsdExhbmcsXHJcbiAgICAgICAgaW50ZXJwb2xhdGlvbjoge1xyXG4gICAgICAgICAgICBlc2NhcGVWYWx1ZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc291cmNlczogdHJhbnNEYXRhXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zID0gaW5pdFJlYWN0ID8gZGVmYXVsdEluc3RhbmNlLnVzZShpbml0UmVhY3QpIDogZGVmYXVsdEluc3RhbmNlXHJcblxyXG4gICAgLy/liJvlu7rmlrDnmoQgaTE4biDlrp7kvotcclxuICAgIGlmIChpc0NyZWF0ZU5ld0luc3RhbmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGlucy5jcmVhdGVJbnN0YW5jZShpbml0T3BzLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5q2k5Ye95pWw5b+F6aG75pyJ77yM5ZCm5YiZ5oql6ZSZXHJcbiAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBDcmVhdGUgbmV3IGkxOG4gaW5zdGFuY2UgZXJyb3I6ICR7ZXJyfWApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMlum7mOiupOWunuS+i1xyXG4gICAgcmV0dXJuIGlucy5pbml0KGluaXRPcHMsIChlcnIpID0+IHtcclxuICAgICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW5pdCBkZWZhdWx0IGkxOG4gaW5zdGFuY2UgZXJyb3I6ICR7ZXJyfWApXHJcbiAgICB9KVxyXG59XHJcbiJdfQ==