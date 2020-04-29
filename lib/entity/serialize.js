"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseClass = void 0;

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 序列化基类（解决getter的JSON.stringify无效的问题）
 */
var BaseClass = /*#__PURE__*/function () {
  function BaseClass() {
    _classCallCheck(this, BaseClass);
  }

  _createClass(BaseClass, [{
    key: "toJSON",
    value: function toJSON() {
      var jsonObj = _objectSpread({}, this);

      var proto = Object.getPrototypeOf(this);

      var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(proto)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          var desc = Object.getOwnPropertyDescriptor(proto, key);
          var hasGetter = desc && typeof desc.get === 'function';

          if (hasGetter) {
            jsonObj[key] = this[key];
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return jsonObj;
    }
  }]);

  return BaseClass;
}();

exports.BaseClass = BaseClass;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvc2VyaWFsaXplLnRzIl0sIm5hbWVzIjpbIkJhc2VDbGFzcyIsImpzb25PYmoiLCJwcm90byIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImtleSIsImRlc2MiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJoYXNHZXR0ZXIiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0lBR2FBLFM7Ozs7Ozs7NkJBQ0E7QUFDTCxVQUFNQyxPQUFPLHFCQUFRLElBQVIsQ0FBYjs7QUFDQSxVQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQixJQUF0QixDQUFkOztBQUZLLGlEQUdhRCxNQUFNLENBQUNFLG1CQUFQLENBQTJCSCxLQUEzQixDQUhiO0FBQUE7O0FBQUE7QUFHTCw0REFBcUQ7QUFBQSxjQUExQ0ksR0FBMEM7QUFDakQsY0FBTUMsSUFBSSxHQUFHSixNQUFNLENBQUNLLHdCQUFQLENBQWdDTixLQUFoQyxFQUF1Q0ksR0FBdkMsQ0FBYjtBQUNBLGNBQU1HLFNBQVMsR0FBR0YsSUFBSSxJQUFJLE9BQU9BLElBQUksQ0FBQ0csR0FBWixLQUFvQixVQUE5Qzs7QUFDQSxjQUFJRCxTQUFKLEVBQWU7QUFDWFIsWUFBQUEsT0FBTyxDQUFDSyxHQUFELENBQVAsR0FBZ0IsSUFBRCxDQUFjQSxHQUFkLENBQWY7QUFDSDtBQUNKO0FBVEk7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVTCxhQUFPTCxPQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5bqP5YiX5YyW5Z+657G777yI6Kej5YazZ2V0dGVy55qESlNPTi5zdHJpbmdpZnnml6DmlYjnmoTpl67popjvvIlcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ2xhc3Mge1xyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIGNvbnN0IGpzb25PYmogPSB7IC4uLnRoaXMgfSBhcyBhbnlcclxuICAgICAgICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3RvKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywga2V5KVxyXG4gICAgICAgICAgICBjb25zdCBoYXNHZXR0ZXIgPSBkZXNjICYmIHR5cGVvZiBkZXNjLmdldCA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICAgICAgICBpZiAoaGFzR2V0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBqc29uT2JqW2tleV0gPSAodGhpcyBhcyBhbnkpW2tleV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ganNvbk9ialxyXG4gICAgfVxyXG59Il19