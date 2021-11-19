"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MethodResult = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 消息结果实体
 */
var MethodResult = function MethodResult() {
  _classCallCheck(this, MethodResult);

  _defineProperty(this, "isSuccess", true);

  _defineProperty(this, "message", "");

  _defineProperty(this, "errorMessage", "");

  _defineProperty(this, "result", undefined);

  _defineProperty(this, "data", undefined);
};

exports.MethodResult = MethodResult;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvbWV0aG9kLXJlc3VsdC50cyJdLCJuYW1lcyI6WyJNZXRob2RSZXN1bHQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBQ2FBLFk7OztxQ0FJWSxJOzttQ0FJSCxFOzt3Q0FJSyxFOztrQ0FJTEMsUzs7Z0NBSUpBLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5raI5oGv57uT5p6c5a6e5L2TXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWV0aG9kUmVzdWx0PFRSZXN1bHQgPSBhbnksIFREYXRhID0gYW55PiB7XHJcbiAgICAvKipcclxuICAgICAqIOivpeaWueazleaJp+ihjOeahOmAu+i+keaYr+WQpuaIkOWKn++8iOm7mOiupOS4unRydWXvvIlcclxuICAgICAqL1xyXG4gICAgaXNTdWNjZXNzOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgLyoqXHJcbiAgICAgKiDor6Xmlrnms5Xov5Tlm57nmoTmtojmga/mj5DnpLpcclxuICAgICAqL1xyXG4gICAgbWVzc2FnZTogc3RyaW5nID0gXCJcIlxyXG4gICAgLyoqXHJcbiAgICAgKiDor6Xmlrnms5Xov5Tlm57nmoTplJnor6/mtojmga/mj5DnpLpcclxuICAgICAqL1xyXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAvKipcclxuICAgICAqIOivpeaWueazlei/lOWbnueahOe7k+aenFxyXG4gICAgICovXHJcbiAgICByZXN1bHQ6IFRSZXN1bHQgPSB1bmRlZmluZWQgYXMgYW55XHJcbiAgICAvKipcclxuICAgICAqIOWFtuWug+aVsOaNru+8iOavlOWmgueUqGRpY3Rpb25hcnnlrZjmlL7kuI3lkIznmoTmlbDmja7nu5PmnpzvvIlcclxuICAgICAqL1xyXG4gICAgZGF0YTogVERhdGEgPSB1bmRlZmluZWQgYXMgYW55XHJcbn1cclxuIl19