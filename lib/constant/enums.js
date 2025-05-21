"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YesOrNoEnumList = exports.RangeTextTypeEnum = exports.YesOrNoEnum = exports.FormTypeEnum = void 0;

var _enumTool = require("../common/enumTool");

/**
 * 表单类型枚举
 */
var FormTypeEnum;
/**
 * 是否类型枚举
 */

exports.FormTypeEnum = FormTypeEnum;

(function (FormTypeEnum) {
  FormTypeEnum[FormTypeEnum["NONE"] = 0] = "NONE";
  FormTypeEnum[FormTypeEnum["ADD"] = 1] = "ADD";
  FormTypeEnum[FormTypeEnum["UPDATE"] = 2] = "UPDATE";
})(FormTypeEnum || (exports.FormTypeEnum = FormTypeEnum = {}));

var YesOrNoEnum;
exports.YesOrNoEnum = YesOrNoEnum;

(function (YesOrNoEnum) {
  YesOrNoEnum["\u662F"] = "\u662F";
  YesOrNoEnum["\u5426"] = "\u5426";
})(YesOrNoEnum || (exports.YesOrNoEnum = YesOrNoEnum = {}));

var RangeTextTypeEnum;
exports.RangeTextTypeEnum = RangeTextTypeEnum;

(function (RangeTextTypeEnum) {
  RangeTextTypeEnum["\u9875\u9762\u8303\u56F4"] = "\u9875\u9762\u8303\u56F4";
  RangeTextTypeEnum["\u5DE5\u4F5C\u8868\u8303\u56F4"] = "\u5DE5\u4F5C\u8868\u8303\u56F4";
  RangeTextTypeEnum["\u5B57\u7B26\u8303\u56F4"] = "\u5B57\u7B26\u8303\u56F4";
  RangeTextTypeEnum["\u6587\u672C\u4F4D\u7F6E\u8303\u56F4"] = "\u6587\u672C\u4F4D\u7F6E\u8303\u56F4";
})(RangeTextTypeEnum || (exports.RangeTextTypeEnum = RangeTextTypeEnum = {}));

var YesOrNoEnumList = (0, _enumTool.convertEnumToList)(YesOrNoEnum);
exports.YesOrNoEnumList = YesOrNoEnumList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudC9lbnVtcy50cyJdLCJuYW1lcyI6WyJGb3JtVHlwZUVudW0iLCJZZXNPck5vRW51bSIsIlJhbmdlVGV4dFR5cGVFbnVtIiwiWWVzT3JOb0VudW1MaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0lBQ1lBLFk7QUFlWjtBQUNBO0FBQ0E7Ozs7V0FqQllBLFk7QUFBQUEsRUFBQUEsWSxDQUFBQSxZO0FBQUFBLEVBQUFBLFksQ0FBQUEsWTtBQUFBQSxFQUFBQSxZLENBQUFBLFk7R0FBQUEsWSw0QkFBQUEsWTs7SUFrQkFDLFc7OztXQUFBQSxXO0FBQUFBLEVBQUFBLFc7QUFBQUEsRUFBQUEsVztHQUFBQSxXLDJCQUFBQSxXOztJQUtBQyxpQjs7O1dBQUFBLGlCO0FBQUFBLEVBQUFBLGlCO0FBQUFBLEVBQUFBLGlCO0FBQUFBLEVBQUFBLGlCO0FBQUFBLEVBQUFBLGlCO0dBQUFBLGlCLGlDQUFBQSxpQjs7QUFPTCxJQUFNQyxlQUFlLEdBQUcsaUNBQWtCRixXQUFsQixDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnZlcnRFbnVtVG9MaXN0IH0gZnJvbSBcIi4uL2NvbW1vbi9lbnVtVG9vbFwiXHJcblxyXG4vKipcclxuICog6KGo5Y2V57G75Z6L5p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBGb3JtVHlwZUVudW0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDml6BcclxuICAgICAqL1xyXG4gICAgTk9ORSxcclxuICAgIC8qKlxyXG4gICAgICog5re75YqgXHJcbiAgICAgKi9cclxuICAgIEFERCxcclxuICAgIC8qKlxyXG4gICAgICog5L+u5pS5XHJcbiAgICAgKi9cclxuICAgIFVQREFURVxyXG59XHJcblxyXG4vKipcclxuICog5piv5ZCm57G75Z6L5p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBZZXNPck5vRW51bSB7XHJcbiAgICDmmK8gPSBcIuaYr1wiLFxyXG4gICAg5ZCmID0gXCLlkKZcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBSYW5nZVRleHRUeXBlRW51bSB7XHJcbiAgICDpobXpnaLojIPlm7QgPSBcIumhtemdouiMg+WbtFwiLFxyXG4gICAg5bel5L2c6KGo6IyD5Zu0ID0gXCLlt6XkvZzooajojIPlm7RcIixcclxuICAgIOWtl+espuiMg+WbtCA9IFwi5a2X56ym6IyD5Zu0XCIsXHJcbiAgICDmlofmnKzkvY3nva7ojIPlm7QgPSBcIuaWh+acrOS9jee9ruiMg+WbtFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBZZXNPck5vRW51bUxpc3QgPSBjb252ZXJ0RW51bVRvTGlzdChZZXNPck5vRW51bSlcclxuIl19