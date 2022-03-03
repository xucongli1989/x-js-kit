"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeReg = escapeReg;
exports.RegExpEngineEnum = void 0;

/**
 * 正则引擎枚举
 */
var RegExpEngineEnum;
/**
 * 将字符串中的关键字符进行编码，以避免在传给Regex时，这些字符被当成正则中的关键字处理
 */

exports.RegExpEngineEnum = RegExpEngineEnum;

(function (RegExpEngineEnum) {
  RegExpEngineEnum["ECMA"] = "ECMA";
  RegExpEngineEnum["DOTNET"] = "DOTNET";
})(RegExpEngineEnum || (exports.RegExpEngineEnum = RegExpEngineEnum = {}));

function escapeReg(str) {
  var engine = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : RegExpEngineEnum.ECMA;

  if (!str) {
    return "";
  }

  if (engine == RegExpEngineEnum.ECMA) {
    return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }

  if (engine == RegExpEngineEnum.DOTNET) {
    //https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.escape?view=net-6.0
    return str.replace(/[\\*+?|{[()^$.# ]/g, "\\$&");
  }

  return "";
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcmVnZXhwLnRzIl0sIm5hbWVzIjpbIlJlZ0V4cEVuZ2luZUVudW0iLCJlc2NhcGVSZWciLCJzdHIiLCJlbmdpbmUiLCJFQ01BIiwicmVwbGFjZSIsIkRPVE5FVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDWUEsZ0I7QUFLWjtBQUNBO0FBQ0E7Ozs7V0FQWUEsZ0I7QUFBQUEsRUFBQUEsZ0I7QUFBQUEsRUFBQUEsZ0I7R0FBQUEsZ0IsZ0NBQUFBLGdCOztBQVFMLFNBQVNDLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQWtGO0FBQUEsTUFBbERDLE1BQWtELHVFQUF2QkgsZ0JBQWdCLENBQUNJLElBQU07O0FBQ3JGLE1BQUksQ0FBQ0YsR0FBTCxFQUFVO0FBQ04sV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsTUFBSUMsTUFBTSxJQUFJSCxnQkFBZ0IsQ0FBQ0ksSUFBL0IsRUFBcUM7QUFDakMsV0FBT0YsR0FBRyxDQUFDRyxPQUFKLENBQVkscUJBQVosRUFBbUMsTUFBbkMsRUFBMkNBLE9BQTNDLENBQW1ELElBQW5ELEVBQXlELE9BQXpELENBQVA7QUFDSDs7QUFDRCxNQUFJRixNQUFNLElBQUlILGdCQUFnQixDQUFDTSxNQUEvQixFQUF1QztBQUNuQztBQUNBLFdBQU9KLEdBQUcsQ0FBQ0csT0FBSixDQUFZLG9CQUFaLEVBQWtDLE1BQWxDLENBQVA7QUFDSDs7QUFDRCxTQUFPLEVBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmraPliJnlvJXmk47mnprkuL5cclxuICovXHJcbmV4cG9ydCBlbnVtIFJlZ0V4cEVuZ2luZUVudW0ge1xyXG4gICAgRUNNQSA9IFwiRUNNQVwiLFxyXG4gICAgRE9UTkVUID0gXCJET1RORVRcIlxyXG59XHJcblxyXG4vKipcclxuICog5bCG5a2X56ym5Liy5Lit55qE5YWz6ZSu5a2X56ym6L+b6KGM57yW56CB77yM5Lul6YG/5YWN5Zyo5Lyg57uZUmVnZXjml7bvvIzov5nkupvlrZfnrKbooqvlvZPmiJDmraPliJnkuK3nmoTlhbPplK7lrZflpITnkIZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWcoc3RyOiBzdHJpbmcsIGVuZ2luZTogUmVnRXhwRW5naW5lRW51bSA9IFJlZ0V4cEVuZ2luZUVudW0uRUNNQSkge1xyXG4gICAgaWYgKCFzdHIpIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgaWYgKGVuZ2luZSA9PSBSZWdFeHBFbmdpbmVFbnVtLkVDTUEpIHtcclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uXS9nLCBcIlxcXFwkJlwiKS5yZXBsYWNlKC8tL2csIFwiXFxcXHgyZFwiKVxyXG4gICAgfVxyXG4gICAgaWYgKGVuZ2luZSA9PSBSZWdFeHBFbmdpbmVFbnVtLkRPVE5FVCkge1xyXG4gICAgICAgIC8vaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvZG90bmV0L2FwaS9zeXN0ZW0udGV4dC5yZWd1bGFyZXhwcmVzc2lvbnMucmVnZXguZXNjYXBlP3ZpZXc9bmV0LTYuMFxyXG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvW1xcXFwqKz98e1soKV4kLiMgXS9nLCBcIlxcXFwkJlwiKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCJcclxufVxyXG4iXX0=