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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcmVnZXhwLnRzIl0sIm5hbWVzIjpbImVzY2FwZVJlZyIsInN0ciIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxTQUFULENBQW1CQyxHQUFuQixFQUFnQztBQUNuQyxNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOLFdBQU8sRUFBUDtBQUNIOztBQUNELFNBQU9BLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLHFCQUFaLEVBQW1DLE1BQW5DLEVBQTJDQSxPQUEzQyxDQUFtRCxJQUFuRCxFQUF5RCxPQUF6RCxDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5bCG5a2X56ym5Liy5Lit55qE5YWz6ZSu5a2X56ym6L+b6KGM57yW56CB77yM5Lul6YG/5YWN5Zyo5Lyg57uZUmVnZXjml7bvvIzov5nkupvlrZfnrKbooqvlvZPmiJDmraPliJnkuK3nmoTlhbPplK7lrZflpITnkIZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWcoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy5dL2csICdcXFxcJCYnKS5yZXBsYWNlKC8tL2csICdcXFxceDJkJyk7XHJcbn0iXX0=