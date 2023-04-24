"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./dist/index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Alert = function Alert(_ref) {
  var alertMessage = _ref.alertMessage,
    alertType = _ref.alertType;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "alert alert-".concat(alertType),
    role: "alert"
  }, alertMessage);
};
var _default = Alert;
exports["default"] = _default;
