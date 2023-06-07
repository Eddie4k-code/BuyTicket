"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _custom_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom_hooks/useAuthContext */ \"./custom_hooks/useAuthContext.ts\");\n/* harmony import */ var _custom_hooks_useLogout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom_hooks/useLogout */ \"./custom_hooks/useLogout.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const { state  } = (0,_custom_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext)();\n    const { logout  } = (0,_custom_hooks_useLogout__WEBPACK_IMPORTED_MODULE_4__.useLogout)(); // Call the useLogout hook\n    //Handle Logout\n    const handleLogout = async ()=>{\n        await logout();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-lg navbar-light bg-dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"navbar-brand text-white \",\n                href: \"/\",\n                children: \"BuyTicket\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav d-flex align-items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item text-white text-decoration-none\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                onClick: handleLogout,\n                                className: \"nav-link\",\n                                children: state.user && \"Sign Out\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 78\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item text-white text-decoration-none\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link\",\n                                href: \"/auth/signin\",\n                                children: !state.user && \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 78\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item text-white text-decoration-none\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link\",\n                                href: \"/auth/signup\",\n                                children: !state.user && \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 78\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"13YLkNQXAFbNRSKkCKDOJ2+yK3o=\", false, function() {\n    return [\n        _custom_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext,\n        _custom_hooks_useLogout__WEBPACK_IMPORTED_MODULE_4__.useLogout\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUM7QUFDWjtBQUNtQztBQUNWO0FBa0J0RCxNQUFNSSxTQUFTLElBQU07O0lBRWpCLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdILDRFQUFjQTtJQUNoQyxNQUFNLEVBQUVJLE9BQU0sRUFBRSxHQUFHSCxrRUFBU0EsSUFBSSwwQkFBMEI7SUFFMUQsZUFBZTtJQUNmLE1BQU1JLGVBQWUsVUFBWTtRQUM3QixNQUFNRDtJQUNWO0lBRUEscUJBRUksOERBQUNFO1FBQUlDLFdBQVU7OzBCQUVYLDhEQUFDUixrREFBSUE7Z0JBQUNRLFdBQVU7Z0JBQTJCQyxNQUFLOzBCQUFJOzs7Ozs7MEJBS3BELDhEQUFDQztnQkFBSUYsV0FBVTswQkFDWCw0RUFBQ0c7b0JBQUdILFdBQVU7O3NDQUNWLDhEQUFDSTs0QkFBR0osV0FBVTtzQ0FBMkMsNEVBQUNLO2dDQUFFQyxTQUFTUjtnQ0FBY0UsV0FBVTswQ0FBWUosTUFBTVcsSUFBSSxJQUFJOzs7Ozs7Ozs7OztzQ0FDdkgsOERBQUNIOzRCQUFHSixXQUFVO3NDQUEyQyw0RUFBQ0s7Z0NBQUVMLFdBQVU7Z0NBQVdDLE1BQUs7MENBQWdCLENBQUNMLE1BQU1XLElBQUksSUFBSTs7Ozs7Ozs7Ozs7c0NBQ3JILDhEQUFDSDs0QkFBR0osV0FBVTtzQ0FBMkMsNEVBQUNLO2dDQUFFTCxXQUFVO2dDQUFXQyxNQUFLOzBDQUFnQixDQUFDTCxNQUFNVyxJQUFJLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTekk7R0FoQ01aOztRQUVnQkYsd0VBQWNBO1FBQ2JDLDhEQUFTQTs7O0tBSDFCQztBQWtDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci50c3g/ODcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gJy4uL2N1c3RvbV9ob29rcy91c2VBdXRoQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZUxvZ291dCB9IGZyb20gJy4uL2N1c3RvbV9ob29rcy91c2VMb2dvdXQnO1xyXG5cclxuXHJcbi8vTmF2YmFyIHdoaWNoIHdpbGwgYmUgZGlzcGxheWVkIGluIEJhc2VMYXlvdXQgQ29tcG9uZW50LlxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vRGVmaW5lcyB0aGUgU2hhcGUgb2YgdGhlIHByb3BzIGZvciB0aGUgSGVhZGVyLlxyXG5pbnRlcmZhY2UgaGVhZGVyUHJvcHMge1xyXG4gICAgY3VycmVudFVzZXI6IG9iamVjdCB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdXNlQXV0aENvbnRleHQoKTtcclxuICAgIGNvbnN0IHsgbG9nb3V0IH0gPSB1c2VMb2dvdXQoKTsgLy8gQ2FsbCB0aGUgdXNlTG9nb3V0IGhvb2tcclxuXHJcbiAgICAvL0hhbmRsZSBMb2dvdXRcclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBsb2dvdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItbGcgbmF2YmFyLWxpZ2h0IGJnLWRhcmtcIj5cclxuXHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCB0ZXh0LXdoaXRlIFwiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICBCdXlUaWNrZXRcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSB0ZXh0LXdoaXRlIHRleHQtZGVjb3JhdGlvbi1ub25lXCI+PGEgb25DbGljaz17aGFuZGxlTG9nb3V0fSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPntzdGF0ZS51c2VyICYmICdTaWduIE91dCd9PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHRleHQtd2hpdGUgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIj48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvYXV0aC9zaWduaW5cIj57IXN0YXRlLnVzZXIgJiYgJ1NpZ24gSW4nfTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSB0ZXh0LXdoaXRlIHRleHQtZGVjb3JhdGlvbi1ub25lXCI+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2F1dGgvc2lnbnVwXCI+eyFzdGF0ZS51c2VyICYmICdTaWduIFVwJ308L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwidXNlQXV0aENvbnRleHQiLCJ1c2VMb2dvdXQiLCJIZWFkZXIiLCJzdGF0ZSIsImxvZ291dCIsImhhbmRsZUxvZ291dCIsIm5hdiIsImNsYXNzTmFtZSIsImhyZWYiLCJkaXYiLCJ1bCIsImxpIiwiYSIsIm9uQ2xpY2siLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ })

});