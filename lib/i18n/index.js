"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLanguageTypeEnumList = getLanguageTypeEnumList;
exports.getLanguageFromCode = getLanguageFromCode;
exports.getDefaultLanguage = getDefaultLanguage;
exports.getDefaultCurrencySymbol = getDefaultCurrencySymbol;
exports.getLanguageNodeData = getLanguageNodeData;
exports.createOrInitI18nInstance = createOrInitI18nInstance;
exports.getXJsKitI18nInstance = getXJsKitI18nInstance;
exports.LanguageTypeEnum = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _enumTool = require("../common/enumTool");

var _data = require("../common/data");

var _lib = require("../common/lib");

var _data2 = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LanguageTypeEnum;
/**
 * 显示语言列表
 * @param isChina true：只返回【简体中文、繁体中文】，false：返回除【简体中文、繁体中文】之外的所有语言
 */

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

function getLanguageTypeEnumList(isChina) {
  var lst = (0, _enumTool.convertEnumToList)(LanguageTypeEnum);
  var chinaLangs = [LanguageTypeEnum.简体中文, LanguageTypeEnum.繁體中文];

  if (isChina === true) {
    return lst.filter(function (k) {
      return chinaLangs.includes(k.value);
    });
  }

  if (isChina === false) {
    return lst.filter(function (k) {
      return !chinaLangs.includes(k.value);
    });
  }

  return lst;
}
/**
 * 从语言的字符串代码中获取支持的语言，如：ja-jp -> ja-JP, ja -> ja-JP
 */


function getLanguageFromCode(code) {
  var _getLanguageTypeEnumL;

  var result = (_getLanguageTypeEnumL = getLanguageTypeEnumList().find(function (k) {
    return k.value.toUpperCase() == code.toUpperCase();
  })) === null || _getLanguageTypeEnumL === void 0 ? void 0 : _getLanguageTypeEnumL.value;

  if (!result) {
    var _getLanguageTypeEnumL2;

    result = (_getLanguageTypeEnumL2 = getLanguageTypeEnumList().find(function (k) {
      return k.value.toUpperCase().split("-")[1] == code.toUpperCase();
    })) === null || _getLanguageTypeEnumL2 === void 0 ? void 0 : _getLanguageTypeEnumL2.value;
  }

  if (!result) {
    var _getLanguageTypeEnumL3;

    result = (_getLanguageTypeEnumL3 = getLanguageTypeEnumList().find(function (k) {
      return k.value.toUpperCase().split("-")[0] == code.toUpperCase();
    })) === null || _getLanguageTypeEnumL3 === void 0 ? void 0 : _getLanguageTypeEnumL3.value;
  }

  return result;
}
/**
 * 获取默认语言
 */


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
 * 获取指定对象中的某个语言节点中的数据。
 * 如果 data 是字符串，则直接返回该字符串；如果是 object，则返回 object[当前语言] ；如果 object[当前语言] 没有值，则返回 object[默认语言]
 */


function getLanguageNodeData(data, isChina, lang) {
  if (!data) {
    return null;
  } //如果是字符串，则直接返回原数据即可


  if ((0, _data.isString)(data)) {
    return data;
  }

  return data[lang] || data[getDefaultLanguage(isChina)];
}
/**
 * 创建或初始化 i18n 实例。注意：defaultInstance、initReact 必须作为参数由具体使用的项目传过来，因为每个项目的默认实例不一样
 */


function createOrInitI18nInstance(isCreateNewInstance, defaultInstance, initReact, isChina, lang, transData) {
  var defaultLang = getDefaultLanguage(isChina);
  var currentLang = lang && (0, _enumTool.isValueInEnum)(LanguageTypeEnum, lang) ? lang : defaultLang;
  var initOps = {
    lng: currentLang,
    supportedLngs: getLanguageTypeEnumList().map(function (k) {
      return k.value;
    }),
    fallbackLng: defaultLang,
    interpolation: {
      escapeValue: false
    },
    resources: transData
  };
  var instance = isCreateNewInstance ? defaultInstance.createInstance() : defaultInstance;
  var ins = initReact ? instance.use(initReact) : instance; //初始化实例

  ins.init(initOps, function (err) {
    if (!err) {
      return;
    }

    console.error("Init default i18n instance error: ".concat(err));
  });
  return instance;
}
/**
 * 获取当前组件库的 i18n 实例。这里会将 i18n 实例挂载到全局变量上，供不同组件跨模块访问。为什么要这样做？因为这个组件库中的每一个组件最终是分别 build 成一个独立的包，组件与组件是隔离的，并没有数据共享机制，如果不这样做，那么每个打包后的组件都有自己的 i18n 实例。
 */


function getXJsKitI18nInstance() {
  var globalObj = (0, _lib.getGlobalObject)();

  if (globalObj.___xJsKitI18nInstance) {
    return globalObj.___xJsKitI18nInstance;
  }

  globalObj.___xJsKitI18nInstance = createOrInitI18nInstance(true, _i18next.default, null, true, getDefaultLanguage(true), _data2.XJsKitI18nResourcesData);
  return globalObj.___xJsKitI18nInstance;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pMThuL2luZGV4LnRzIl0sIm5hbWVzIjpbIkxhbmd1YWdlVHlwZUVudW0iLCJnZXRMYW5ndWFnZVR5cGVFbnVtTGlzdCIsImlzQ2hpbmEiLCJsc3QiLCJjaGluYUxhbmdzIiwi566A5L2T5Lit5paHIiwi57mB6auU5Lit5paHIiwiZmlsdGVyIiwiayIsImluY2x1ZGVzIiwidmFsdWUiLCJnZXRMYW5ndWFnZUZyb21Db2RlIiwiY29kZSIsInJlc3VsdCIsImZpbmQiLCJ0b1VwcGVyQ2FzZSIsInNwbGl0IiwiZ2V0RGVmYXVsdExhbmd1YWdlIiwiRW5nbGlzaCIsImdldERlZmF1bHRDdXJyZW5jeVN5bWJvbCIsImdldExhbmd1YWdlTm9kZURhdGEiLCJkYXRhIiwibGFuZyIsImNyZWF0ZU9ySW5pdEkxOG5JbnN0YW5jZSIsImlzQ3JlYXRlTmV3SW5zdGFuY2UiLCJkZWZhdWx0SW5zdGFuY2UiLCJpbml0UmVhY3QiLCJ0cmFuc0RhdGEiLCJkZWZhdWx0TGFuZyIsImN1cnJlbnRMYW5nIiwiaW5pdE9wcyIsImxuZyIsInN1cHBvcnRlZExuZ3MiLCJtYXAiLCJmYWxsYmFja0xuZyIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsInJlc291cmNlcyIsImluc3RhbmNlIiwiY3JlYXRlSW5zdGFuY2UiLCJpbnMiLCJ1c2UiLCJpbml0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZ2V0WEpzS2l0STE4bkluc3RhbmNlIiwiZ2xvYmFsT2JqIiwiX19feEpzS2l0STE4bkluc3RhbmNlIiwiaTE4bmV4dCIsIlhKc0tpdEkxOG5SZXNvdXJjZXNEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0lBRVlBLGdCO0FBV1o7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FkWUEsZ0I7QUFBQUEsRUFBQUEsZ0I7QUFBQUEsRUFBQUEsZ0I7QUFBQUEsRUFBQUEsZ0I7QUFBQUEsRUFBQUEsZ0I7QUFB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cUJBQVQsR0FBaUM7QUFDcEMsTUFBTUMsU0FBUyxHQUFHLDJCQUFsQjs7QUFDQSxNQUFJQSxTQUFTLENBQUNDLHFCQUFkLEVBQXFDO0FBQ2pDLFdBQU9ELFNBQVMsQ0FBQ0MscUJBQWpCO0FBQ0g7O0FBQ0RELEVBQUFBLFNBQVMsQ0FBQ0MscUJBQVYsR0FBa0N6Qix3QkFBd0IsQ0FBQyxJQUFELEVBQU8wQixnQkFBUCxFQUF1QixJQUF2QixFQUFvQyxJQUFwQyxFQUEwQ2hDLGtCQUFrQixDQUFDLElBQUQsQ0FBNUQsRUFBb0VpQyw4QkFBcEUsQ0FBMUQ7QUFDQSxTQUFPSCxTQUFTLENBQUNDLHFCQUFqQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGkxOG5leHQsIHsgaTE4biwgSW5pdE9wdGlvbnMsIFJlc291cmNlLCBUaGlyZFBhcnR5TW9kdWxlIH0gZnJvbSBcImkxOG5leHRcIlxyXG5pbXBvcnQgeyBjb252ZXJ0RW51bVRvTGlzdCwgaXNWYWx1ZUluRW51bSB9IGZyb20gXCIuLi9jb21tb24vZW51bVRvb2xcIlxyXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCIuLi9jb21tb24vZGF0YVwiXHJcbmltcG9ydCB7IGdldEdsb2JhbE9iamVjdCB9IGZyb20gXCIuLi9jb21tb24vbGliXCJcclxuaW1wb3J0IHsgWEpzS2l0STE4blJlc291cmNlc0RhdGEgfSBmcm9tIFwiLi9kYXRhXCJcclxuXHJcbmV4cG9ydCBlbnVtIExhbmd1YWdlVHlwZUVudW0ge1xyXG4gICAg566A5L2T5Lit5paHID0gXCJ6aC1DTlwiLFxyXG4gICAg57mB6auU5Lit5paHID0gXCJ6aC1UV1wiLFxyXG4gICAgRW5nbGlzaCA9IFwiZW4tVVNcIixcclxuICAgIEZyYW7Dp2FpcyA9IFwiZnItRlJcIixcclxuICAgIERldXRzY2ggPSBcImRlLURFXCIsXHJcbiAgICBFc3Bhw7FvbCA9IFwiZXMtRVNcIixcclxuICAgIOaXpeacrOiqniA9IFwiamEtSlBcIixcclxuICAgIO2VnOq1reyWtCA9IFwia28tS1JcIlxyXG59XHJcblxyXG4vKipcclxuICog5pi+56S66K+t6KiA5YiX6KGoXHJcbiAqIEBwYXJhbSBpc0NoaW5hIHRydWXvvJrlj6rov5Tlm57jgJDnroDkvZPkuK3mlofjgIHnuYHkvZPkuK3mlofjgJHvvIxmYWxzZe+8mui/lOWbnumZpOOAkOeugOS9k+S4reaWh+OAgee5geS9k+S4reaWh+OAkeS5i+WklueahOaJgOacieivreiogFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmd1YWdlVHlwZUVudW1MaXN0KGlzQ2hpbmE/OiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBsc3QgPSBjb252ZXJ0RW51bVRvTGlzdChMYW5ndWFnZVR5cGVFbnVtKVxyXG4gICAgY29uc3QgY2hpbmFMYW5ncyA9IFtMYW5ndWFnZVR5cGVFbnVtLueugOS9k+S4reaWhywgTGFuZ3VhZ2VUeXBlRW51bS7nuYHpq5TkuK3mloddXHJcbiAgICBpZiAoaXNDaGluYSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiBsc3QuZmlsdGVyKChrKSA9PiBjaGluYUxhbmdzLmluY2x1ZGVzKGsudmFsdWUgYXMgYW55KSlcclxuICAgIH1cclxuICAgIGlmIChpc0NoaW5hID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiBsc3QuZmlsdGVyKChrKSA9PiAhY2hpbmFMYW5ncy5pbmNsdWRlcyhrLnZhbHVlIGFzIGFueSkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbHN0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDku47or63oqIDnmoTlrZfnrKbkuLLku6PnoIHkuK3ojrflj5bmlK/mjIHnmoTor63oqIDvvIzlpoLvvJpqYS1qcCAtPiBqYS1KUCwgamEgLT4gamEtSlBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5ndWFnZUZyb21Db2RlKGNvZGU6IHN0cmluZykge1xyXG4gICAgbGV0IHJlc3VsdCA9IGdldExhbmd1YWdlVHlwZUVudW1MaXN0KCkuZmluZCgoaykgPT4gay52YWx1ZS50b1VwcGVyQ2FzZSgpID09IGNvZGUudG9VcHBlckNhc2UoKSk/LnZhbHVlXHJcbiAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgIHJlc3VsdCA9IGdldExhbmd1YWdlVHlwZUVudW1MaXN0KCkuZmluZCgoaykgPT4gay52YWx1ZS50b1VwcGVyQ2FzZSgpLnNwbGl0KFwiLVwiKVsxXSA9PSBjb2RlLnRvVXBwZXJDYXNlKCkpPy52YWx1ZVxyXG4gICAgfVxyXG4gICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICByZXN1bHQgPSBnZXRMYW5ndWFnZVR5cGVFbnVtTGlzdCgpLmZpbmQoKGspID0+IGsudmFsdWUudG9VcHBlckNhc2UoKS5zcGxpdChcIi1cIilbMF0gPT0gY29kZS50b1VwcGVyQ2FzZSgpKT8udmFsdWVcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQgYXMgTGFuZ3VhZ2VUeXBlRW51bVxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W6buY6K6k6K+t6KiAXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdExhbmd1YWdlKGlzQ2hpbmE6IGJvb2xlYW4pIHtcclxuICAgIHJldHVybiBpc0NoaW5hID8gTGFuZ3VhZ2VUeXBlRW51bS7nroDkvZPkuK3mlocgOiBMYW5ndWFnZVR5cGVFbnVtLkVuZ2xpc2hcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPlum7mOiupOeahOi0p+W4geespuWPt1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRDdXJyZW5jeVN5bWJvbChpc0NoaW5hOiBib29sZWFuKSB7XHJcbiAgICByZXR1cm4gaXNDaGluYSA/IFwiwqVcIiA6IFwiJFwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5bmjIflrprlr7nosaHkuK3nmoTmn5DkuKror63oqIDoioLngrnkuK3nmoTmlbDmja7jgIJcclxuICog5aaC5p6cIGRhdGEg5piv5a2X56ym5Liy77yM5YiZ55u05o6l6L+U5Zue6K+l5a2X56ym5Liy77yb5aaC5p6c5pivIG9iamVjdO+8jOWImei/lOWbniBvYmplY3Rb5b2T5YmN6K+t6KiAXSDvvJvlpoLmnpwgb2JqZWN0W+W9k+WJjeivreiogF0g5rKh5pyJ5YC877yM5YiZ6L+U5ZueIG9iamVjdFvpu5jorqTor63oqIBdXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VOb2RlRGF0YTxUPihkYXRhOiBzdHJpbmcgfCBSZWNvcmQ8TGFuZ3VhZ2VUeXBlRW51bSwgVD4sIGlzQ2hpbmE6IGJvb2xlYW4sIGxhbmc6IExhbmd1YWdlVHlwZUVudW0pIHtcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICAvL+WmguaenOaYr+Wtl+espuS4su+8jOWImeebtOaOpei/lOWbnuWOn+aVsOaNruWNs+WPr1xyXG4gICAgaWYgKGlzU3RyaW5nKGRhdGEpKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEgYXMgc3RyaW5nXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGRhdGEgYXMgUmVjb3JkPExhbmd1YWdlVHlwZUVudW0sIFQ+KVtsYW5nXSB8fCAoZGF0YSBhcyBSZWNvcmQ8TGFuZ3VhZ2VUeXBlRW51bSwgVD4pW2dldERlZmF1bHRMYW5ndWFnZShpc0NoaW5hKV1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWIm+W7uuaIluWIneWni+WMliBpMThuIOWunuS+i+OAguazqOaEj++8mmRlZmF1bHRJbnN0YW5jZeOAgWluaXRSZWFjdCDlv4XpobvkvZzkuLrlj4LmlbDnlLHlhbfkvZPkvb/nlKjnmoTpobnnm67kvKDov4fmnaXvvIzlm6DkuLrmr4/kuKrpobnnm67nmoTpu5jorqTlrp7kvovkuI3kuIDmoLdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPckluaXRJMThuSW5zdGFuY2UoaXNDcmVhdGVOZXdJbnN0YW5jZTogYm9vbGVhbiwgZGVmYXVsdEluc3RhbmNlOiBpMThuLCBpbml0UmVhY3Q6IFRoaXJkUGFydHlNb2R1bGUsIGlzQ2hpbmE6IGJvb2xlYW4sIGxhbmc6IExhbmd1YWdlVHlwZUVudW0sIHRyYW5zRGF0YTogUmVzb3VyY2UpIHtcclxuICAgIGNvbnN0IGRlZmF1bHRMYW5nID0gZ2V0RGVmYXVsdExhbmd1YWdlKGlzQ2hpbmEpXHJcbiAgICBjb25zdCBjdXJyZW50TGFuZyA9IGxhbmcgJiYgaXNWYWx1ZUluRW51bShMYW5ndWFnZVR5cGVFbnVtLCBsYW5nKSA/IGxhbmcgOiBkZWZhdWx0TGFuZ1xyXG5cclxuICAgIGNvbnN0IGluaXRPcHM6IEluaXRPcHRpb25zID0ge1xyXG4gICAgICAgIGxuZzogY3VycmVudExhbmcsXHJcbiAgICAgICAgc3VwcG9ydGVkTG5nczogZ2V0TGFuZ3VhZ2VUeXBlRW51bUxpc3QoKS5tYXAoKGspID0+IGsudmFsdWUpLFxyXG4gICAgICAgIGZhbGxiYWNrTG5nOiBkZWZhdWx0TGFuZyxcclxuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVzY2FwZVZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzb3VyY2VzOiB0cmFuc0RhdGFcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnN0YW5jZSA9IGlzQ3JlYXRlTmV3SW5zdGFuY2UgPyBkZWZhdWx0SW5zdGFuY2UuY3JlYXRlSW5zdGFuY2UoKSA6IGRlZmF1bHRJbnN0YW5jZVxyXG4gICAgY29uc3QgaW5zID0gaW5pdFJlYWN0ID8gaW5zdGFuY2UudXNlKGluaXRSZWFjdCkgOiBpbnN0YW5jZVxyXG5cclxuICAgIC8v5Yid5aeL5YyW5a6e5L6LXHJcbiAgICBpbnMuaW5pdChpbml0T3BzLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEluaXQgZGVmYXVsdCBpMThuIGluc3RhbmNlIGVycm9yOiAke2Vycn1gKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gaW5zdGFuY2VcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluW9k+WJjee7hOS7tuW6k+eahCBpMThuIOWunuS+i+OAgui/memHjOS8muWwhiBpMThuIOWunuS+i+aMgui9veWIsOWFqOWxgOWPmOmHj+S4iu+8jOS+m+S4jeWQjOe7hOS7tui3qOaooeWdl+iuv+mXruOAguS4uuS7gOS5iOimgei/meagt+WBmu+8n+WboOS4uui/meS4que7hOS7tuW6k+S4reeahOavj+S4gOS4que7hOS7tuacgOe7iOaYr+WIhuWIqyBidWlsZCDmiJDkuIDkuKrni6znq4vnmoTljIXvvIznu4Tku7bkuI7nu4Tku7bmmK/pmpTnprvnmoTvvIzlubbmsqHmnInmlbDmja7lhbHkuqvmnLrliLbvvIzlpoLmnpzkuI3ov5nmoLflgZrvvIzpgqPkuYjmr4/kuKrmiZPljIXlkI7nmoTnu4Tku7bpg73mnInoh6rlt7HnmoQgaTE4biDlrp7kvovjgIJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRYSnNLaXRJMThuSW5zdGFuY2UoKSB7XHJcbiAgICBjb25zdCBnbG9iYWxPYmogPSBnZXRHbG9iYWxPYmplY3QoKSBhcyBhbnlcclxuICAgIGlmIChnbG9iYWxPYmouX19feEpzS2l0STE4bkluc3RhbmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbE9iai5fX194SnNLaXRJMThuSW5zdGFuY2UgYXMgdHlwZW9mIGkxOG5leHRcclxuICAgIH1cclxuICAgIGdsb2JhbE9iai5fX194SnNLaXRJMThuSW5zdGFuY2UgPSBjcmVhdGVPckluaXRJMThuSW5zdGFuY2UodHJ1ZSwgaTE4bmV4dCBhcyBhbnksIG51bGwgYXMgYW55LCB0cnVlLCBnZXREZWZhdWx0TGFuZ3VhZ2UodHJ1ZSksIFhKc0tpdEkxOG5SZXNvdXJjZXNEYXRhKVxyXG4gICAgcmV0dXJuIGdsb2JhbE9iai5fX194SnNLaXRJMThuSW5zdGFuY2UgYXMgdHlwZW9mIGkxOG5leHRcclxufVxyXG4iXX0=