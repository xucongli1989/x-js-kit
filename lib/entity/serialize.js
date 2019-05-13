"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseClass = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 序列化基类（解决getter的JSON.stringify无效的问题）
 */
var BaseClass =
/*#__PURE__*/
function () {
  function BaseClass() {
    _classCallCheck(this, BaseClass);
  }

  _createClass(BaseClass, [{
    key: "toJSON",
    value: function toJSON() {
      var jsonObj = Object.assign({}, this);
      var proto = Object.getPrototypeOf(this);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.getOwnPropertyNames(proto)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;
          var desc = Object.getOwnPropertyDescriptor(proto, key);
          var hasGetter = desc && typeof desc.get === 'function';

          if (hasGetter) {
            jsonObj[key] = this[key];
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return jsonObj;
    }
  }]);

  return BaseClass;
}();

exports.BaseClass = BaseClass;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvc2VyaWFsaXplLnRzIl0sIm5hbWVzIjpbIkJhc2VDbGFzcyIsImpzb25PYmoiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImtleSIsImRlc2MiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJoYXNHZXR0ZXIiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0lBR2FBLFM7Ozs7Ozs7Ozs2QkFDQTtBQUNMLFVBQU1DLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixJQUFsQixDQUFoQjtBQUNBLFVBQU1DLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxjQUFQLENBQXNCLElBQXRCLENBQWQ7QUFGSztBQUFBO0FBQUE7O0FBQUE7QUFHTCw2QkFBa0JILE1BQU0sQ0FBQ0ksbUJBQVAsQ0FBMkJGLEtBQTNCLENBQWxCLDhIQUFxRDtBQUFBLGNBQTFDRyxHQUEwQztBQUNqRCxjQUFNQyxJQUFJLEdBQUdOLE1BQU0sQ0FBQ08sd0JBQVAsQ0FBZ0NMLEtBQWhDLEVBQXVDRyxHQUF2QyxDQUFiO0FBQ0EsY0FBTUcsU0FBUyxHQUFHRixJQUFJLElBQUksT0FBT0EsSUFBSSxDQUFDRyxHQUFaLEtBQW9CLFVBQTlDOztBQUNBLGNBQUlELFNBQUosRUFBZTtBQUNYVCxZQUFBQSxPQUFPLENBQUNNLEdBQUQsQ0FBUCxHQUFnQixJQUFELENBQWNBLEdBQWQsQ0FBZjtBQUNIO0FBQ0o7QUFUSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVMLGFBQU9OLE9BQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDluo/liJfljJbln7rnsbvvvIjop6PlhrNnZXR0ZXLnmoRKU09OLnN0cmluZ2lmeeaXoOaViOeahOmXrumimO+8iVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJhc2VDbGFzcyB7XHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgY29uc3QganNvbk9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMpIGFzIGFueVxyXG4gICAgICAgIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG8pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBrZXkpXHJcbiAgICAgICAgICAgIGNvbnN0IGhhc0dldHRlciA9IGRlc2MgJiYgdHlwZW9mIGRlc2MuZ2V0ID09PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgICAgIGlmIChoYXNHZXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGpzb25PYmpba2V5XSA9ICh0aGlzIGFzIGFueSlba2V5XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBqc29uT2JqXHJcbiAgICB9XHJcbn0iXX0=