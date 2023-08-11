"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _styles = require("@mui/material/styles");
var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _InputBase = _interopRequireDefault(require("@mui/material/InputBase"));
var _Menu = _interopRequireDefault(require("@mui/material/Menu"));
var _Menu2 = _interopRequireDefault(require("@mui/icons-material/Menu"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Search = (0, _styles.styled)("div")(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: (0, _styles.alpha)(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: (0, _styles.alpha)(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    marginRight: theme.spacing(2),
    width: "auto"
  }, theme.breakpoints.up("sm"), {
    width: "auto"
  });
});
var SearchIconWrapper = (0, _styles.styled)("div")(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
});
var StyledInputBase = (0, _styles.styled)(_InputBase.default)(function (_ref4) {
  var theme = _ref4.theme;
  return {
    color: "inherit",
    "& .MuiInputBase-input": _defineProperty({
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), ")"),
      transition: theme.transitions.create("width"),
      width: "auto"
    }, theme.breakpoints.up("sm"), {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    })
  };
});
var Navbar = function Navbar() {
  var pages = ["Products", "Pricing", "Blog"];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    anchorElNav = _useState2[0],
    setAnchorElNav = _useState2[1];
  var handleOpenNavMenu = function handleOpenNavMenu(event) {
    setAnchorElNav(event.currentTarget);
  };
  var handleCloseNavMenu = function handleCloseNavMenu() {
    setAnchorElNav(null);
  };
  return /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(_AppBar.default, {
    position: "static",
    color: "transparent",
    elevation: 0,
    enableColorOnDark: true
  }, /*#__PURE__*/React.createElement(_Toolbar.default, {
    disableGutters: true
  }, /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      flexGrow: 1,
      display: {
        xs: "flex",
        md: "none"
      }
    }
  }, /*#__PURE__*/React.createElement(_IconButton.default, {
    size: "large",
    "aria-label": "mobile icon",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    onClick: handleOpenNavMenu,
    color: "inherit"
  }, /*#__PURE__*/React.createElement(_Menu2.default, null)), /*#__PURE__*/React.createElement(_Menu.default, {
    id: "menu-appbar",
    anchorEl: anchorElNav,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    open: Boolean(anchorElNav),
    onClose: handleCloseNavMenu,
    sx: {
      display: {
        xs: "block",
        md: "none"
      }
    }
  }, pages.map(function (page) {
    return /*#__PURE__*/React.createElement(_MenuItem.default, {
      key: page,
      onClick: handleCloseNavMenu
    }, /*#__PURE__*/React.createElement(_Typography.default, {
      textAlign: "center"
    }, page));
  }))), /*#__PURE__*/React.createElement(_Typography.default, {
    variant: "h6",
    noWrap: true,
    component: "a",
    href: "/",
    sx: {
      mr: 2,
      fontWeight: 700,
      letterSpacing: ".2rem",
      color: "inherit",
      textDecoration: "none",
      paddingInline: "2rem"
    }
  }, "MovieScop"), /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      flexGrow: 1,
      display: {
        xs: "none",
        md: "flex"
      }
    }
  }, pages.map(function (page) {
    return /*#__PURE__*/React.createElement(_Button.default, {
      key: page,
      onClick: handleCloseNavMenu,
      sx: {
        my: 2,
        color: "white",
        display: "block"
      }
    }, page);
  })), /*#__PURE__*/React.createElement(Search, null, /*#__PURE__*/React.createElement(SearchIconWrapper, null, /*#__PURE__*/React.createElement(_Search.default, null)), /*#__PURE__*/React.createElement(StyledInputBase, {
    placeholder: "Search\u2026",
    inputProps: {
      "aria-label": "search"
    }
  })))));
};
var _default = Navbar;
exports.default = _default;