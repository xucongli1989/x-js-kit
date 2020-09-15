"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeReg = escapeReg;

/**
 * 将字符串中的关键字符进行编码，以避免在传给Regex时，这些字符被当成正则中的关键字处理
 */
function escapeReg(str) {
  if (!str) {
    return "";
  }

  return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcmVnZXhwLnRzIl0sIm5hbWVzIjpbImVzY2FwZVJlZyIsInN0ciIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBR08sU0FBU0EsU0FBVCxDQUFtQkMsR0FBbkIsRUFBZ0M7QUFDbkMsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixXQUFPLEVBQVA7QUFDSDs7QUFDRCxTQUFPQSxHQUFHLENBQUNDLE9BQUosQ0FBWSxxQkFBWixFQUFtQyxNQUFuQyxFQUEyQ0EsT0FBM0MsQ0FBbUQsSUFBbkQsRUFBeUQsT0FBekQsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWwhuWtl+espuS4suS4reeahOWFs+mUruWtl+espui/m+ihjOe8luegge+8jOS7pemBv+WFjeWcqOS8oOe7mVJlZ2V45pe277yM6L+Z5Lqb5a2X56ym6KKr5b2T5oiQ5q2j5YiZ5Lit55qE5YWz6ZSu5a2X5aSE55CGXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uXS9nLCAnXFxcXCQmJykucmVwbGFjZSgvLS9nLCAnXFxcXHgyZCcpO1xyXG59Il19