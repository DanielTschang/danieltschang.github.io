self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ "./src/styles/GlobalComponents/Button.js");
/* harmony import */ var _HeroStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroStyles */ "./src/components/Hero/HeroStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\danchang11\\Documents\\GitHub\\portfolio\\src\\components\\Hero\\Hero.js",
    _this = undefined;







var Hero = function Hero(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
      row: true,
      nopadding: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_4__.LeftSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
          main: true,
          center: true,
          children: ["Hi, I'm Jong-Wen Chang ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 34
          }, _this), "A Software Devloper."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
          children: ["Currently a master student of National Tsing Hua University, Institute of Information Systems Applications, Intelligent Agent Systems Lab. My advisor is ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            style: {
              color: '#585897',
              textDecoration: 'underline'
            },
            children: "\u8A31\u805E\u5EC9 Wen-Lian Hsu"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          onClick: function onClick() {
            return window.location = "https://google.com";
          },
          children: "Learn More"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, _this);
};

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbIkhlcm8iLCJwcm9wcyIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQ7QUFBQSxzQkFDWDtBQUFBLDJCQUNFLDhEQUFDLDZEQUFEO0FBQVMsU0FBRyxNQUFaO0FBQWEsZUFBUyxNQUF0QjtBQUFBLDZCQUNFLDhEQUFDLG9EQUFEO0FBQUEsZ0NBQ0UsOERBQUMsa0VBQUQ7QUFBYyxjQUFJLE1BQWxCO0FBQW1CLGdCQUFNLE1BQXpCO0FBQUEsNkRBQ3lCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFLDhEQUFDLGlFQUFEO0FBQUEsK0xBRWdCO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQVksaUJBQUssRUFBRTtBQUFDQyxtQkFBSyxFQUFDLFNBQVA7QUFBa0JDLDRCQUFjLEVBQUM7QUFBakMsYUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQVNFLDhEQUFDLG9FQUFEO0FBQVEsaUJBQU8sRUFBRTtBQUFBLG1CQUFLQyxNQUFNLENBQUNDLFFBQVAsR0FBa0Isb0JBQXZCO0FBQUEsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEVztBQUFBLENBQWI7O0tBQU1MLEk7QUFvQk4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmQ3OGQ5ZDE1MTZlNDNjMjUxMjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZpVW5kZXJsaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xyXG5cclxuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgeyBMZWZ0U2VjdGlvbiB9IGZyb20gJy4vSGVyb1N0eWxlcyc7XHJcblxyXG5jb25zdCBIZXJvID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxTZWN0aW9uIHJvdyBub3BhZGRpbmc+XHJcbiAgICAgIDxMZWZ0U2VjdGlvbj5cclxuICAgICAgICA8U2VjdGlvblRpdGxlIG1haW4gY2VudGVyPlxyXG4gICAgICAgICAgSGksIEknbSBKb25nLVdlbiBDaGFuZyA8YnIvPlxyXG4gICAgICAgICAgQSBTb2Z0d2FyZSBEZXZsb3Blci5cclxuICAgICAgICA8L1NlY3Rpb25UaXRsZT5cclxuICAgICAgICA8U2VjdGlvblRleHQ+XHJcbiAgICAgICAgICBDdXJyZW50bHkgYSBtYXN0ZXIgc3R1ZGVudCBvZiBOYXRpb25hbCBUc2luZyBIdWEgVW5pdmVyc2l0eSwgSW5zdGl0dXRlIG9mIEluZm9ybWF0aW9uIFN5c3RlbXMgQXBwbGljYXRpb25zLCBJbnRlbGxpZ2VudCBBZ2VudCBTeXN0ZW1zIExhYi5cclxuICAgICAgICAgIE15IGFkdmlzb3IgaXMgPGEgaHJlZj1cIiNcIiBzdHlsZT17e2NvbG9yOicjNTg1ODk3JywgdGV4dERlY29yYXRpb246J3VuZGVybGluZSd9fT7oqLHogZ7lu4kgV2VuLUxpYW4gSHN1PC9hPlxyXG4gICAgICAgIDwvU2VjdGlvblRleHQ+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+IHdpbmRvdy5sb2NhdGlvbiA9IFwiaHR0cHM6Ly9nb29nbGUuY29tXCJ9PlxyXG4gICAgICAgICAgTGVhcm4gTW9yZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0xlZnRTZWN0aW9uPlxyXG4gICAgPC9TZWN0aW9uPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybzsiXSwic291cmNlUm9vdCI6IiJ9