"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YesOrNoEnumList = exports.YesOrNoEnum = exports.FormTypeEnum = void 0;

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

var YesOrNoEnumList = (0, _enumTool.convertEnumToList)(YesOrNoEnum);
exports.YesOrNoEnumList = YesOrNoEnumList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudC9lbnVtcy50cyJdLCJuYW1lcyI6WyJGb3JtVHlwZUVudW0iLCJZZXNPck5vRW51bSIsIlllc09yTm9FbnVtTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtJQUNZQSxZO0FBZVo7QUFDQTtBQUNBOzs7O1dBakJZQSxZO0FBQUFBLEVBQUFBLFksQ0FBQUEsWTtBQUFBQSxFQUFBQSxZLENBQUFBLFk7QUFBQUEsRUFBQUEsWSxDQUFBQSxZO0dBQUFBLFksNEJBQUFBLFk7O0lBa0JBQyxXOzs7V0FBQUEsVztBQUFBQSxFQUFBQSxXO0FBQUFBLEVBQUFBLFc7R0FBQUEsVywyQkFBQUEsVzs7QUFLTCxJQUFNQyxlQUFlLEdBQUcsaUNBQWtCRCxXQUFsQixDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnZlcnRFbnVtVG9MaXN0IH0gZnJvbSBcIi4uL2NvbW1vbi9lbnVtVG9vbFwiXHJcblxyXG4vKipcclxuICog6KGo5Y2V57G75Z6L5p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBGb3JtVHlwZUVudW0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDml6BcclxuICAgICAqL1xyXG4gICAgTk9ORSxcclxuICAgIC8qKlxyXG4gICAgICog5re75YqgXHJcbiAgICAgKi9cclxuICAgIEFERCxcclxuICAgIC8qKlxyXG4gICAgICog5L+u5pS5XHJcbiAgICAgKi9cclxuICAgIFVQREFURVxyXG59XHJcblxyXG4vKipcclxuICog5piv5ZCm57G75Z6L5p6a5Li+XHJcbiAqL1xyXG5leHBvcnQgZW51bSBZZXNPck5vRW51bSB7XHJcbiAgICDmmK8gPSBcIuaYr1wiLFxyXG4gICAg5ZCmID0gXCLlkKZcIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgWWVzT3JOb0VudW1MaXN0ID0gY29udmVydEVudW1Ub0xpc3QoWWVzT3JOb0VudW0pXHJcbiJdfQ==