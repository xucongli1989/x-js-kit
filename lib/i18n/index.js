"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLanguageFromCode = getLanguageFromCode;
exports.getDefaultLanguage = getDefaultLanguage;
exports.getDefaultCurrencySymbol = getDefaultCurrencySymbol;
exports.getLanguageNodeData = getLanguageNodeData;
exports.createOrInitI18nInstance = createOrInitI18nInstance;
exports.getXJsKitI18nInstance = getXJsKitI18nInstance;
exports.LanguageTypeEnumList = exports.LanguageTypeEnum = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _enumTool = require("../common/enumTool");

var _data = require("../common/data");

var _lib = require("../common/lib");

var _data2 = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * 从语言的字符串代码中获取支持的语言，如：ja-jp -> ja-JP, ja -> ja-JP
 */

exports.LanguageTypeEnumList = LanguageTypeEnumList;

function getLanguageFromCode(code) {
  var _LanguageTypeEnumList;

  var result = (_LanguageTypeEnumList = LanguageTypeEnumList.find(function (k) {
    return k.value.toUpperCase() == code.toUpperCase();
  })) === null || _LanguageTypeEnumList === void 0 ? void 0 : _LanguageTypeEnumList.value;

  if (!result) {
    var _LanguageTypeEnumList2;

    result = (_LanguageTypeEnumList2 = LanguageTypeEnumList.find(function (k) {
      return k.value.toUpperCase().split("-")[1] == code.toUpperCase();
    })) === null || _LanguageTypeEnumList2 === void 0 ? void 0 : _LanguageTypeEnumList2.value;
  }

  if (!result) {
    var _LanguageTypeEnumList3;

    result = (_LanguageTypeEnumList3 = LanguageTypeEnumList.find(function (k) {
      return k.value.toUpperCase().split("-")[0] == code.toUpperCase();
    })) === null || _LanguageTypeEnumList3 === void 0 ? void 0 : _LanguageTypeEnumList3.value;
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
    supportedLngs: LanguageTypeEnumList.map(function (k) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pMThuL2luZGV4LnRzIl0sIm5hbWVzIjpbIkxhbmd1YWdlVHlwZUVudW0iLCJMYW5ndWFnZVR5cGVFbnVtTGlzdCIsImdldExhbmd1YWdlRnJvbUNvZGUiLCJjb2RlIiwicmVzdWx0IiwiZmluZCIsImsiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwic3BsaXQiLCJnZXREZWZhdWx0TGFuZ3VhZ2UiLCJpc0NoaW5hIiwi566A5L2T5Lit5paHIiwiRW5nbGlzaCIsImdldERlZmF1bHRDdXJyZW5jeVN5bWJvbCIsImdldExhbmd1YWdlTm9kZURhdGEiLCJkYXRhIiwibGFuZyIsImNyZWF0ZU9ySW5pdEkxOG5JbnN0YW5jZSIsImlzQ3JlYXRlTmV3SW5zdGFuY2UiLCJkZWZhdWx0SW5zdGFuY2UiLCJpbml0UmVhY3QiLCJ0cmFuc0RhdGEiLCJkZWZhdWx0TGFuZyIsImN1cnJlbnRMYW5nIiwiaW5pdE9wcyIsImxuZyIsInN1cHBvcnRlZExuZ3MiLCJtYXAiLCJmYWxsYmFja0xuZyIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsInJlc291cmNlcyIsImluc3RhbmNlIiwiY3JlYXRlSW5zdGFuY2UiLCJpbnMiLCJ1c2UiLCJpbml0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZ2V0WEpzS2l0STE4bkluc3RhbmNlIiwiZ2xvYmFsT2JqIiwiX19feEpzS2l0STE4bkluc3RhbmNlIiwiaTE4bmV4dCIsIlhKc0tpdEkxOG5SZXNvdXJjZXNEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7SUFFWUEsZ0I7OztXQUFBQSxnQjtBQUFBQSxFQUFBQSxnQjtBQUFBQSxFQUFBQSxnQjtBQUFBQSxFQUFBQSxnQjtBQUFBQSxFQUFBQSxnQjtBQUFBQSxFQUFBQSxnQjtBQUFBQSxFQUFBQSxnQjtBQUFBQSxFQUFBQSxnQjtBQUFBQSxFQUFBQSxnQjtHQUFBQSxnQixnQ0FBQUEsZ0I7O0FB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QTdCO0FBVUEsTUFBTVcsUUFBUSxHQUFHZCxtQkFBbUIsR0FBR0MsZUFBZSxDQUFDYyxjQUFoQixFQUFILEdBQXNDZCxlQUExRTtBQUNBLE1BQU1lLEdBQUcsR0FBR2QsU0FBUyxHQUFHWSxRQUFRLENBQUNHLEdBQVQsQ0FBYWYsU0FBYixDQUFILEdBQTZCWSxRQUFsRCxDQWZzTCxDQWlCdEw7O0FBQ0FFLEVBQUFBLEdBQUcsQ0FBQ0UsSUFBSixDQUFTWixPQUFULEVBQWtCLFVBQUNhLEdBQUQsRUFBUztBQUN2QixRQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOO0FBQ0g7O0FBQ0RDLElBQUFBLE9BQU8sQ0FBQ0MsS0FBUiw2Q0FBbURGLEdBQW5EO0FBQ0gsR0FMRDtBQU9BLFNBQU9MLFFBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU1EscUJBQVQsR0FBaUM7QUFDcEMsTUFBTUMsU0FBUyxHQUFHLDJCQUFsQjs7QUFDQSxNQUFJQSxTQUFTLENBQUNDLHFCQUFkLEVBQXFDO0FBQ2pDLFdBQU9ELFNBQVMsQ0FBQ0MscUJBQWpCO0FBQ0g7O0FBQ0RELEVBQUFBLFNBQVMsQ0FBQ0MscUJBQVYsR0FBa0N6Qix3QkFBd0IsQ0FBQyxJQUFELEVBQU8wQixnQkFBUCxFQUF1QixJQUF2QixFQUFvQyxJQUFwQyxFQUEwQ2xDLGtCQUFrQixDQUFDLElBQUQsQ0FBNUQsRUFBb0VtQyw4QkFBcEUsQ0FBMUQ7QUFDQSxTQUFPSCxTQUFTLENBQUNDLHFCQUFqQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGkxOG5leHQsIHsgaTE4biwgSW5pdE9wdGlvbnMsIFJlc291cmNlLCBUaGlyZFBhcnR5TW9kdWxlIH0gZnJvbSBcImkxOG5leHRcIlxyXG5pbXBvcnQgeyBjb252ZXJ0RW51bVRvTGlzdCwgaXNWYWx1ZUluRW51bSB9IGZyb20gXCIuLi9jb21tb24vZW51bVRvb2xcIlxyXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gXCIuLi9jb21tb24vZGF0YVwiXHJcbmltcG9ydCB7IGdldEdsb2JhbE9iamVjdCB9IGZyb20gXCIuLi9jb21tb24vbGliXCJcclxuaW1wb3J0IHsgWEpzS2l0STE4blJlc291cmNlc0RhdGEgfSBmcm9tIFwiLi9kYXRhXCJcclxuXHJcbmV4cG9ydCBlbnVtIExhbmd1YWdlVHlwZUVudW0ge1xyXG4gICAg566A5L2T5Lit5paHID0gXCJ6aC1DTlwiLFxyXG4gICAg57mB6auU5Lit5paHID0gXCJ6aC1UV1wiLFxyXG4gICAgRW5nbGlzaCA9IFwiZW4tVVNcIixcclxuICAgIEZyYW7Dp2FpcyA9IFwiZnItRlJcIixcclxuICAgIERldXRzY2ggPSBcImRlLURFXCIsXHJcbiAgICBFc3Bhw7FvbCA9IFwiZXMtRVNcIixcclxuICAgIOaXpeacrOiqniA9IFwiamEtSlBcIixcclxuICAgIO2VnOq1reyWtCA9IFwia28tS1JcIlxyXG59XHJcbmV4cG9ydCBjb25zdCBMYW5ndWFnZVR5cGVFbnVtTGlzdCA9IGNvbnZlcnRFbnVtVG9MaXN0KExhbmd1YWdlVHlwZUVudW0pXHJcblxyXG4vKipcclxuICog5LuO6K+t6KiA55qE5a2X56ym5Liy5Luj56CB5Lit6I635Y+W5pSv5oyB55qE6K+t6KiA77yM5aaC77yaamEtanAgLT4gamEtSlAsIGphIC0+IGphLUpQXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VGcm9tQ29kZShjb2RlOiBzdHJpbmcpIHtcclxuICAgIGxldCByZXN1bHQgPSBMYW5ndWFnZVR5cGVFbnVtTGlzdC5maW5kKChrKSA9PiBrLnZhbHVlLnRvVXBwZXJDYXNlKCkgPT0gY29kZS50b1VwcGVyQ2FzZSgpKT8udmFsdWVcclxuICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgcmVzdWx0ID0gTGFuZ3VhZ2VUeXBlRW51bUxpc3QuZmluZCgoaykgPT4gay52YWx1ZS50b1VwcGVyQ2FzZSgpLnNwbGl0KFwiLVwiKVsxXSA9PSBjb2RlLnRvVXBwZXJDYXNlKCkpPy52YWx1ZVxyXG4gICAgfVxyXG4gICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICByZXN1bHQgPSBMYW5ndWFnZVR5cGVFbnVtTGlzdC5maW5kKChrKSA9PiBrLnZhbHVlLnRvVXBwZXJDYXNlKCkuc3BsaXQoXCItXCIpWzBdID09IGNvZGUudG9VcHBlckNhc2UoKSk/LnZhbHVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0IGFzIExhbmd1YWdlVHlwZUVudW1cclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPlum7mOiupOivreiogFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRMYW5ndWFnZShpc0NoaW5hOiBib29sZWFuKSB7XHJcbiAgICByZXR1cm4gaXNDaGluYSA/IExhbmd1YWdlVHlwZUVudW0u566A5L2T5Lit5paHIDogTGFuZ3VhZ2VUeXBlRW51bS5FbmdsaXNoXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5bpu5jorqTnmoTotKfluIHnrKblj7dcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0Q3VycmVuY3lTeW1ib2woaXNDaGluYTogYm9vbGVhbikge1xyXG4gICAgcmV0dXJuIGlzQ2hpbmEgPyBcIsKlXCIgOiBcIiRcIlxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5oyH5a6a5a+56LGh5Lit55qE5p+Q5Liq6K+t6KiA6IqC54K55Lit55qE5pWw5o2u44CCXHJcbiAqIOWmguaenCBkYXRhIOaYr+Wtl+espuS4su+8jOWImeebtOaOpei/lOWbnuivpeWtl+espuS4su+8m+WmguaenOaYryBvYmplY3TvvIzliJnov5Tlm54gb2JqZWN0W+W9k+WJjeivreiogF0g77yb5aaC5p6cIG9iamVjdFvlvZPliY3or63oqIBdIOayoeacieWAvO+8jOWImei/lOWbniBvYmplY3Rb6buY6K6k6K+t6KiAXVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmd1YWdlTm9kZURhdGE8VD4oZGF0YTogc3RyaW5nIHwgUmVjb3JkPExhbmd1YWdlVHlwZUVudW0sIFQ+LCBpc0NoaW5hOiBib29sZWFuLCBsYW5nOiBMYW5ndWFnZVR5cGVFbnVtKSB7XHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgLy/lpoLmnpzmmK/lrZfnrKbkuLLvvIzliJnnm7TmjqXov5Tlm57ljp/mlbDmja7ljbPlj69cclxuICAgIGlmIChpc1N0cmluZyhkYXRhKSkge1xyXG4gICAgICAgIHJldHVybiBkYXRhIGFzIHN0cmluZ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChkYXRhIGFzIFJlY29yZDxMYW5ndWFnZVR5cGVFbnVtLCBUPilbbGFuZ10gfHwgKGRhdGEgYXMgUmVjb3JkPExhbmd1YWdlVHlwZUVudW0sIFQ+KVtnZXREZWZhdWx0TGFuZ3VhZ2UoaXNDaGluYSldXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliJvlu7rmiJbliJ3lp4vljJYgaTE4biDlrp7kvovjgILms6jmhI/vvJpkZWZhdWx0SW5zdGFuY2XjgIFpbml0UmVhY3Qg5b+F6aG75L2c5Li65Y+C5pWw55Sx5YW35L2T5L2/55So55qE6aG555uu5Lyg6L+H5p2l77yM5Zug5Li65q+P5Liq6aG555uu55qE6buY6K6k5a6e5L6L5LiN5LiA5qC3XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3JJbml0STE4bkluc3RhbmNlKGlzQ3JlYXRlTmV3SW5zdGFuY2U6IGJvb2xlYW4sIGRlZmF1bHRJbnN0YW5jZTogaTE4biwgaW5pdFJlYWN0OiBUaGlyZFBhcnR5TW9kdWxlLCBpc0NoaW5hOiBib29sZWFuLCBsYW5nOiBMYW5ndWFnZVR5cGVFbnVtLCB0cmFuc0RhdGE6IFJlc291cmNlKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0TGFuZyA9IGdldERlZmF1bHRMYW5ndWFnZShpc0NoaW5hKVxyXG4gICAgY29uc3QgY3VycmVudExhbmcgPSBsYW5nICYmIGlzVmFsdWVJbkVudW0oTGFuZ3VhZ2VUeXBlRW51bSwgbGFuZykgPyBsYW5nIDogZGVmYXVsdExhbmdcclxuXHJcbiAgICBjb25zdCBpbml0T3BzOiBJbml0T3B0aW9ucyA9IHtcclxuICAgICAgICBsbmc6IGN1cnJlbnRMYW5nLFxyXG4gICAgICAgIHN1cHBvcnRlZExuZ3M6IExhbmd1YWdlVHlwZUVudW1MaXN0Lm1hcCgoaykgPT4gay52YWx1ZSksXHJcbiAgICAgICAgZmFsbGJhY2tMbmc6IGRlZmF1bHRMYW5nLFxyXG4gICAgICAgIGludGVycG9sYXRpb246IHtcclxuICAgICAgICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNvdXJjZXM6IHRyYW5zRGF0YVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluc3RhbmNlID0gaXNDcmVhdGVOZXdJbnN0YW5jZSA/IGRlZmF1bHRJbnN0YW5jZS5jcmVhdGVJbnN0YW5jZSgpIDogZGVmYXVsdEluc3RhbmNlXHJcbiAgICBjb25zdCBpbnMgPSBpbml0UmVhY3QgPyBpbnN0YW5jZS51c2UoaW5pdFJlYWN0KSA6IGluc3RhbmNlXHJcblxyXG4gICAgLy/liJ3lp4vljJblrp7kvotcclxuICAgIGlucy5pbml0KGluaXRPcHMsIChlcnIpID0+IHtcclxuICAgICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW5pdCBkZWZhdWx0IGkxOG4gaW5zdGFuY2UgZXJyb3I6ICR7ZXJyfWApXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBpbnN0YW5jZVxyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5b2T5YmN57uE5Lu25bqT55qEIGkxOG4g5a6e5L6L44CC6L+Z6YeM5Lya5bCGIGkxOG4g5a6e5L6L5oyC6L295Yiw5YWo5bGA5Y+Y6YeP5LiK77yM5L6b5LiN5ZCM57uE5Lu26Leo5qih5Z2X6K6/6Zeu44CC5Li65LuA5LmI6KaB6L+Z5qC35YGa77yf5Zug5Li66L+Z5Liq57uE5Lu25bqT5Lit55qE5q+P5LiA5Liq57uE5Lu25pyA57uI5piv5YiG5YirIGJ1aWxkIOaIkOS4gOS4queLrOeri+eahOWMhe+8jOe7hOS7tuS4jue7hOS7tuaYr+malOemu+eahO+8jOW5tuayoeacieaVsOaNruWFseS6q+acuuWItu+8jOWmguaenOS4jei/meagt+WBmu+8jOmCo+S5iOavj+S4quaJk+WMheWQjueahOe7hOS7tumDveacieiHquW3seeahCBpMThuIOWunuS+i+OAglxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFhKc0tpdEkxOG5JbnN0YW5jZSgpIHtcclxuICAgIGNvbnN0IGdsb2JhbE9iaiA9IGdldEdsb2JhbE9iamVjdCgpIGFzIGFueVxyXG4gICAgaWYgKGdsb2JhbE9iai5fX194SnNLaXRJMThuSW5zdGFuY2UpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsT2JqLl9fX3hKc0tpdEkxOG5JbnN0YW5jZSBhcyB0eXBlb2YgaTE4bmV4dFxyXG4gICAgfVxyXG4gICAgZ2xvYmFsT2JqLl9fX3hKc0tpdEkxOG5JbnN0YW5jZSA9IGNyZWF0ZU9ySW5pdEkxOG5JbnN0YW5jZSh0cnVlLCBpMThuZXh0IGFzIGFueSwgbnVsbCBhcyBhbnksIHRydWUsIGdldERlZmF1bHRMYW5ndWFnZSh0cnVlKSwgWEpzS2l0STE4blJlc291cmNlc0RhdGEpXHJcbiAgICByZXR1cm4gZ2xvYmFsT2JqLl9fX3hKc0tpdEkxOG5JbnN0YW5jZSBhcyB0eXBlb2YgaTE4bmV4dFxyXG59XHJcbiJdfQ==