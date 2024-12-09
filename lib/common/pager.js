"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPagerInfo = createPagerInfo;

/**
 * 根据总数和每页最多显示的条数，获取分页信息
 */
function createPagerInfo(totalCount, pageSize, pageIndex) {
  if (pageSize <= 0) {
    pageSize = 10;
  }

  if (pageIndex <= 0) {
    pageIndex = 1;
  }

  var pagerInfo = {};
  pagerInfo.pageIndex = pageIndex;
  pagerInfo.startIndex = -1;
  pagerInfo.endIndex = -1;
  pagerInfo.pageSize = pageSize;
  pagerInfo.recordCount = totalCount;
  pagerInfo.pageCount = Math.ceil(totalCount * 1.0 / pageSize);

  if (!pagerInfo.pageCount) {
    return pagerInfo;
  }

  if (pagerInfo.pageIndex > pagerInfo.pageCount) {
    pagerInfo.pageIndex = pagerInfo.pageCount;
  }

  pagerInfo.startIndex = (pagerInfo.pageIndex - 1) * pagerInfo.pageSize;
  pagerInfo.endIndex = pagerInfo.pageIndex * pagerInfo.pageSize - 1;

  if (pagerInfo.endIndex > totalCount - 1) {
    pagerInfo.endIndex = totalCount - 1;
  }

  return pagerInfo;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFnZXIudHMiXSwibmFtZXMiOlsiY3JlYXRlUGFnZXJJbmZvIiwidG90YWxDb3VudCIsInBhZ2VTaXplIiwicGFnZUluZGV4IiwicGFnZXJJbmZvIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwicmVjb3JkQ291bnQiLCJwYWdlQ291bnQiLCJNYXRoIiwiY2VpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLGVBQVQsQ0FBeUJDLFVBQXpCLEVBQTZDQyxRQUE3QyxFQUErREMsU0FBL0QsRUFBa0Y7QUFDckYsTUFBSUQsUUFBUSxJQUFJLENBQWhCLEVBQW1CO0FBQ2ZBLElBQUFBLFFBQVEsR0FBRyxFQUFYO0FBQ0g7O0FBQ0QsTUFBSUMsU0FBUyxJQUFJLENBQWpCLEVBQW9CO0FBQ2hCQSxJQUFBQSxTQUFTLEdBQUcsQ0FBWjtBQUNIOztBQUVELE1BQU1DLFNBQXdCLEdBQUcsRUFBakM7QUFDQUEsRUFBQUEsU0FBUyxDQUFDRCxTQUFWLEdBQXNCQSxTQUF0QjtBQUNBQyxFQUFBQSxTQUFTLENBQUNDLFVBQVYsR0FBdUIsQ0FBQyxDQUF4QjtBQUNBRCxFQUFBQSxTQUFTLENBQUNFLFFBQVYsR0FBcUIsQ0FBQyxDQUF0QjtBQUNBRixFQUFBQSxTQUFTLENBQUNGLFFBQVYsR0FBcUJBLFFBQXJCO0FBQ0FFLEVBQUFBLFNBQVMsQ0FBQ0csV0FBVixHQUF3Qk4sVUFBeEI7QUFDQUcsRUFBQUEsU0FBUyxDQUFDSSxTQUFWLEdBQXNCQyxJQUFJLENBQUNDLElBQUwsQ0FBV1QsVUFBVSxHQUFHLEdBQWQsR0FBcUJDLFFBQS9CLENBQXRCOztBQUNBLE1BQUksQ0FBQ0UsU0FBUyxDQUFDSSxTQUFmLEVBQTBCO0FBQ3RCLFdBQU9KLFNBQVA7QUFDSDs7QUFFRCxNQUFJQSxTQUFTLENBQUNELFNBQVYsR0FBc0JDLFNBQVMsQ0FBQ0ksU0FBcEMsRUFBK0M7QUFDM0NKLElBQUFBLFNBQVMsQ0FBQ0QsU0FBVixHQUFzQkMsU0FBUyxDQUFDSSxTQUFoQztBQUNIOztBQUNESixFQUFBQSxTQUFTLENBQUNDLFVBQVYsR0FBdUIsQ0FBQ0QsU0FBUyxDQUFDRCxTQUFWLEdBQXNCLENBQXZCLElBQTRCQyxTQUFTLENBQUNGLFFBQTdEO0FBQ0FFLEVBQUFBLFNBQVMsQ0FBQ0UsUUFBVixHQUFxQkYsU0FBUyxDQUFDRCxTQUFWLEdBQXNCQyxTQUFTLENBQUNGLFFBQWhDLEdBQTJDLENBQWhFOztBQUNBLE1BQUlFLFNBQVMsQ0FBQ0UsUUFBVixHQUFxQkwsVUFBVSxHQUFHLENBQXRDLEVBQXlDO0FBQ3JDRyxJQUFBQSxTQUFTLENBQUNFLFFBQVYsR0FBcUJMLFVBQVUsR0FBRyxDQUFsQztBQUNIOztBQUNELFNBQU9HLFNBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VySW5mb1R5cGUgfSBmcm9tIFwiLi4vZW50aXR5L3BhZ2VyLWluZm9cIlxyXG5cclxuLyoqXHJcbiAqIOagueaNruaAu+aVsOWSjOavj+mhteacgOWkmuaYvuekuueahOadoeaVsO+8jOiOt+WPluWIhumhteS/oeaBr1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2VySW5mbyh0b3RhbENvdW50OiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIsIHBhZ2VJbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAocGFnZVNpemUgPD0gMCkge1xyXG4gICAgICAgIHBhZ2VTaXplID0gMTBcclxuICAgIH1cclxuICAgIGlmIChwYWdlSW5kZXggPD0gMCkge1xyXG4gICAgICAgIHBhZ2VJbmRleCA9IDFcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYWdlckluZm86IFBhZ2VySW5mb1R5cGUgPSB7fSBhcyBhbnlcclxuICAgIHBhZ2VySW5mby5wYWdlSW5kZXggPSBwYWdlSW5kZXhcclxuICAgIHBhZ2VySW5mby5zdGFydEluZGV4ID0gLTFcclxuICAgIHBhZ2VySW5mby5lbmRJbmRleCA9IC0xXHJcbiAgICBwYWdlckluZm8ucGFnZVNpemUgPSBwYWdlU2l6ZVxyXG4gICAgcGFnZXJJbmZvLnJlY29yZENvdW50ID0gdG90YWxDb3VudFxyXG4gICAgcGFnZXJJbmZvLnBhZ2VDb3VudCA9IE1hdGguY2VpbCgodG90YWxDb3VudCAqIDEuMCkgLyBwYWdlU2l6ZSlcclxuICAgIGlmICghcGFnZXJJbmZvLnBhZ2VDb3VudCkge1xyXG4gICAgICAgIHJldHVybiBwYWdlckluZm9cclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFnZXJJbmZvLnBhZ2VJbmRleCA+IHBhZ2VySW5mby5wYWdlQ291bnQpIHtcclxuICAgICAgICBwYWdlckluZm8ucGFnZUluZGV4ID0gcGFnZXJJbmZvLnBhZ2VDb3VudFxyXG4gICAgfVxyXG4gICAgcGFnZXJJbmZvLnN0YXJ0SW5kZXggPSAocGFnZXJJbmZvLnBhZ2VJbmRleCAtIDEpICogcGFnZXJJbmZvLnBhZ2VTaXplXHJcbiAgICBwYWdlckluZm8uZW5kSW5kZXggPSBwYWdlckluZm8ucGFnZUluZGV4ICogcGFnZXJJbmZvLnBhZ2VTaXplIC0gMVxyXG4gICAgaWYgKHBhZ2VySW5mby5lbmRJbmRleCA+IHRvdGFsQ291bnQgLSAxKSB7XHJcbiAgICAgICAgcGFnZXJJbmZvLmVuZEluZGV4ID0gdG90YWxDb3VudCAtIDFcclxuICAgIH1cclxuICAgIHJldHVybiBwYWdlckluZm9cclxufVxyXG4iXX0=