"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MethodResult2 = exports.MethodResult = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 消息结果实体（首字母小写）
 */
var MethodResult = function MethodResult() {
  _classCallCheck(this, MethodResult);

  _defineProperty(this, "isSuccess", true);

  _defineProperty(this, "message", "");

  _defineProperty(this, "errorMessage", "");

  _defineProperty(this, "result", undefined);

  _defineProperty(this, "data", undefined);
};
/**
 * 消息结果实体（首字母大写）
 */


exports.MethodResult = MethodResult;

var MethodResult2 = function MethodResult2() {
  _classCallCheck(this, MethodResult2);

  _defineProperty(this, "IsSuccess", true);

  _defineProperty(this, "Message", "");

  _defineProperty(this, "ErrorMessage", "");

  _defineProperty(this, "Result", undefined);

  _defineProperty(this, "Data", undefined);
};

exports.MethodResult2 = MethodResult2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvbWV0aG9kLXJlc3VsdC50cyJdLCJuYW1lcyI6WyJNZXRob2RSZXN1bHQiLCJ1bmRlZmluZWQiLCJNZXRob2RSZXN1bHQyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtJQUNhQSxZOzs7cUNBSVksSTs7bUNBSUgsRTs7d0NBSUssRTs7a0NBSUxDLFM7O2dDQUlKQSxTOztBQUdsQjtBQUNBO0FBQ0E7Ozs7O0lBQ2FDLGE7OztxQ0FJWSxJOzttQ0FJSCxFOzt3Q0FJSyxFOztrQ0FJTEQsUzs7Z0NBSUpBLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5raI5oGv57uT5p6c5a6e5L2T77yI6aaW5a2X5q+N5bCP5YaZ77yJXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWV0aG9kUmVzdWx0PFRSZXN1bHQgPSBhbnksIFREYXRhID0gYW55PiB7XHJcbiAgICAvKipcclxuICAgICAqIOivpeaWueazleaJp+ihjOeahOmAu+i+keaYr+WQpuaIkOWKn++8iOm7mOiupOS4unRydWXvvIlcclxuICAgICAqL1xyXG4gICAgaXNTdWNjZXNzOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgLyoqXHJcbiAgICAgKiDor6Xmlrnms5Xov5Tlm57nmoTmtojmga/mj5DnpLpcclxuICAgICAqL1xyXG4gICAgbWVzc2FnZTogc3RyaW5nID0gXCJcIlxyXG4gICAgLyoqXHJcbiAgICAgKiDor6Xmlrnms5Xov5Tlm57nmoTplJnor6/mtojmga/mj5DnpLpcclxuICAgICAqL1xyXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAvKipcclxuICAgICAqIOivpeaWueazlei/lOWbnueahOe7k+aenFxyXG4gICAgICovXHJcbiAgICByZXN1bHQ6IFRSZXN1bHQgPSB1bmRlZmluZWQgYXMgYW55XHJcbiAgICAvKipcclxuICAgICAqIOWFtuWug+aVsOaNru+8iOavlOWmgueUqGRpY3Rpb25hcnnlrZjmlL7kuI3lkIznmoTmlbDmja7nu5PmnpzvvIlcclxuICAgICAqL1xyXG4gICAgZGF0YTogVERhdGEgPSB1bmRlZmluZWQgYXMgYW55XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmtojmga/nu5Pmnpzlrp7kvZPvvIjpppblrZfmr43lpKflhpnvvIlcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZXRob2RSZXN1bHQyPFRSZXN1bHQgPSBhbnksIFREYXRhID0gYW55PiB7XHJcbiAgICAvKipcclxuICAgICAqIOivpeaWueazleaJp+ihjOeahOmAu+i+keaYr+WQpuaIkOWKn++8iOm7mOiupOS4unRydWXvvIlcclxuICAgICAqL1xyXG4gICAgSXNTdWNjZXNzOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgLyoqXHJcbiAgICAgKiDor6Xmlrnms5Xov5Tlm57nmoTmtojmga/mj5DnpLpcclxuICAgICAqL1xyXG4gICAgTWVzc2FnZTogc3RyaW5nID0gXCJcIlxyXG4gICAgLyoqXHJcbiAgICAgKiDor6Xmlrnms5Xov5Tlm57nmoTplJnor6/mtojmga/mj5DnpLpcclxuICAgICAqL1xyXG4gICAgRXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAvKipcclxuICAgICAqIOivpeaWueazlei/lOWbnueahOe7k+aenFxyXG4gICAgICovXHJcbiAgICBSZXN1bHQ6IFRSZXN1bHQgPSB1bmRlZmluZWQgYXMgYW55XHJcbiAgICAvKipcclxuICAgICAqIOWFtuWug+aVsOaNru+8iOavlOWmgueUqGRpY3Rpb25hcnnlrZjmlL7kuI3lkIznmoTmlbDmja7nu5PmnpzvvIlcclxuICAgICAqL1xyXG4gICAgRGF0YTogVERhdGEgPSB1bmRlZmluZWQgYXMgYW55XHJcbn1cclxuIl19