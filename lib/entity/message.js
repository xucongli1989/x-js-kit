"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageEntity = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 消息头
 */
var MessageHead = function MessageHead() {
  _classCallCheck(this, MessageHead);

  _defineProperty(this, "isAck", true);

  _defineProperty(this, "date", new Date().valueOf());

  _defineProperty(this, "isSuccess", true);

  _defineProperty(this, "isException", false);

  _defineProperty(this, "message", "");

  _defineProperty(this, "messageMore", "");

  _defineProperty(this, "redirectURL", "");

  _defineProperty(this, "isRefresh", false);

  _defineProperty(this, "errorCode", "");
};
/**
 * 消息正文
 */


var MessageBody = function MessageBody() {
  _classCallCheck(this, MessageBody);

  _defineProperty(this, "data", null);

  _defineProperty(this, "extendData", null);
};
/**
 * 消息实体
 */


var MessageEntity = function MessageEntity() {
  _classCallCheck(this, MessageEntity);

  _defineProperty(this, "head", new MessageHead());

  _defineProperty(this, "body", new MessageBody());
};

exports.MessageEntity = MessageEntity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvbWVzc2FnZS50cyJdLCJuYW1lcyI6WyJNZXNzYWdlSGVhZCIsIkRhdGUiLCJ2YWx1ZU9mIiwiTWVzc2FnZUJvZHkiLCJNZXNzYWdlRW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtJQUNNQSxXOzs7aUNBSWUsSTs7Z0NBSUYsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEU7O3FDQUlNLEk7O3VDQUlFLEs7O21DQUlMLEU7O3VDQUlJLEU7O3VDQUlBLEU7O3FDQUlELEs7O3FDQUlELEU7O0FBR3hCO0FBQ0E7QUFDQTs7O0lBQ01DLFc7OztnQ0FJUyxJOztzQ0FJTSxJOztBQUlyQjtBQUNBO0FBQ0E7OztJQUNhQyxhOzs7Z0NBSVcsSUFBSUosV0FBSixFOztnQ0FJa0MsSUFBSUcsV0FBSixFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOa2iOaBr+WktFxyXG4gKi9cclxuY2xhc3MgTWVzc2FnZUhlYWQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKblk43lupRcclxuICAgICAqL1xyXG4gICAgaXNBY2s6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICAvKipcclxuICAgICAqIOaXtumXtFxyXG4gICAgICovXHJcbiAgICBkYXRlOiBudW1iZXIgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKVxyXG4gICAgLyoqXHJcbiAgICAgKiDmtojmga/mmK/lkKbmiJDlip9cclxuICAgICAqL1xyXG4gICAgaXNTdWNjZXNzOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbkuLrlvILluLhcclxuICAgICAqL1xyXG4gICAgaXNFeGNlcHRpb246IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgLyoqXHJcbiAgICAgKiDmj5DnpLror61cclxuICAgICAqL1xyXG4gICAgbWVzc2FnZTogc3RyaW5nID0gXCJcIlxyXG4gICAgLyoqXHJcbiAgICAgKiDmj5DnpLror63nmoTor6bnu4bkv6Hmga9cclxuICAgICAqL1xyXG4gICAgbWVzc2FnZU1vcmU6IHN0cmluZyA9IFwiXCJcclxuICAgIC8qKlxyXG4gICAgICog6ZyA6KaB6Lez6L2s55qEdXJs5Zyw5Z2AXHJcbiAgICAgKi9cclxuICAgIHJlZGlyZWN0VVJMOiBzdHJpbmcgPSBcIlwiXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpumcgOimgeWIt+aWsOW9k+WJjemhtemdolxyXG4gICAgICovXHJcbiAgICBpc1JlZnJlc2g6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgLyoqXHJcbiAgICAgKiDplJnor6/noIFcclxuICAgICAqL1xyXG4gICAgZXJyb3JDb2RlOiBzdHJpbmcgPSBcIlwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmtojmga/mraPmlodcclxuICovXHJcbmNsYXNzIE1lc3NhZ2VCb2R5PFQxLCBUMj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDmja5cclxuICAgICAqL1xyXG4gICAgZGF0YTogVDEgPSBudWxsIGFzIGFueVxyXG4gICAgLyoqXHJcbiAgICAgKiDmianlsZXmlbDmja5cclxuICAgICAqL1xyXG4gICAgZXh0ZW5kRGF0YTogVDIgPSBudWxsIGFzIGFueVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIOa2iOaBr+WunuS9k1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VFbnRpdHk8Qm9keURhdGFUeXBlID0gYW55LCBCb2R5RXh0ZW5kRGF0YVR5cGUgPSBhbnk+IHtcclxuICAgIC8qKlxyXG4gICAgICog5aS05L+h5oGvXHJcbiAgICAgKi9cclxuICAgIGhlYWQ6IE1lc3NhZ2VIZWFkID0gbmV3IE1lc3NhZ2VIZWFkKClcclxuICAgIC8qKlxyXG4gICAgICog5q2j5paH5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIGJvZHk6IE1lc3NhZ2VCb2R5PEJvZHlEYXRhVHlwZSwgQm9keUV4dGVuZERhdGFUeXBlPiA9IG5ldyBNZXNzYWdlQm9keTxCb2R5RGF0YVR5cGUsIEJvZHlFeHRlbmREYXRhVHlwZT4oKVxyXG59XHJcblxyXG4iXX0=