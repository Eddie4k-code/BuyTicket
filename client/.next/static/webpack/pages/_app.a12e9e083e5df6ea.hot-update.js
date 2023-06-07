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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _custom_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom_hooks/useAuthContext */ \"./custom_hooks/useAuthContext.ts\");\n/* harmony import */ var _custom_hooks_useLogout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom_hooks/useLogout */ \"./custom_hooks/useLogout.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const { state  } = (0,_custom_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext)();\n    const { logout  } = (0,_custom_hooks_useLogout__WEBPACK_IMPORTED_MODULE_4__.useLogout)(); // Call the useLogout hook\n    //Handle Logout\n    const handleLogout = async ()=>{\n        await logout();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-lg navbar-light bg-dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"navbar-brand text-white \",\n                href: \"/\",\n                children: [\n                    \"BuyTicket\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://th.bing.com/th/id/OIP.OmMOmQxqoPOXv7_qy9dz0AHaGl?pid=ImgDet&rs=1\",\n                        className: \"img-thumbnail d-flex w-50\",\n                        alt: \"Responsive image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav d-flex align-items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item text-white text-decoration-none\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                onClick: handleLogout,\n                                className: \"nav-link\",\n                                children: state.user && \"Sign Out\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 78\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item text-white text-decoration-none\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link\",\n                                href: \"/auth/signin\",\n                                children: !state.user && \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 78\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item text-white text-decoration-none\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"nav-link\",\n                                href: \"/auth/signup\",\n                                children: !state.user && \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 78\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\components\\\\header.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"13YLkNQXAFbNRSKkCKDOJ2+yK3o=\", false, function() {\n    return [\n        _custom_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext,\n        _custom_hooks_useLogout__WEBPACK_IMPORTED_MODULE_4__.useLogout\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUM7QUFDWjtBQUNtQztBQUNWO0FBa0J0RCxNQUFNSSxTQUFTLElBQU07O0lBRWpCLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdILDRFQUFjQTtJQUNoQyxNQUFNLEVBQUVJLE9BQU0sRUFBRSxHQUFHSCxrRUFBU0EsSUFBSSwwQkFBMEI7SUFFMUQsZUFBZTtJQUNmLE1BQU1JLGVBQWUsVUFBWTtRQUM3QixNQUFNRDtJQUNWO0lBRUEscUJBRUksOERBQUNFO1FBQUlDLFdBQVU7OzBCQUVYLDhEQUFDUixrREFBSUE7Z0JBQUNRLFdBQVU7Z0JBQTJCQyxNQUFLOztvQkFBSTtrQ0FFaEQsOERBQUNDO3dCQUFJQyxLQUFJO3dCQUEyRUgsV0FBVTt3QkFBNEJJLEtBQUk7Ozs7Ozs7Ozs7OzswQkFJbEksOERBQUNDO2dCQUFJTCxXQUFVOzBCQUNYLDRFQUFDTTtvQkFBR04sV0FBVTs7c0NBQ1YsOERBQUNPOzRCQUFHUCxXQUFVO3NDQUEyQyw0RUFBQ1E7Z0NBQUVDLFNBQVNYO2dDQUFjRSxXQUFVOzBDQUFZSixNQUFNYyxJQUFJLElBQUk7Ozs7Ozs7Ozs7O3NDQUN2SCw4REFBQ0g7NEJBQUdQLFdBQVU7c0NBQTJDLDRFQUFDUTtnQ0FBRVIsV0FBVTtnQ0FBV0MsTUFBSzswQ0FBZ0IsQ0FBQ0wsTUFBTWMsSUFBSSxJQUFJOzs7Ozs7Ozs7OztzQ0FDckgsOERBQUNIOzRCQUFHUCxXQUFVO3NDQUEyQyw0RUFBQ1E7Z0NBQUVSLFdBQVU7Z0NBQVdDLE1BQUs7MENBQWdCLENBQUNMLE1BQU1jLElBQUksSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN6STtHQWpDTWY7O1FBRWdCRix3RUFBY0E7UUFDYkMsOERBQVNBOzs7S0FIMUJDO0FBbUNOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyLnRzeD84NzBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZUF1dGhDb250ZXh0IH0gZnJvbSAnLi4vY3VzdG9tX2hvb2tzL3VzZUF1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlTG9nb3V0IH0gZnJvbSAnLi4vY3VzdG9tX2hvb2tzL3VzZUxvZ291dCc7XHJcblxyXG5cclxuLy9OYXZiYXIgd2hpY2ggd2lsbCBiZSBkaXNwbGF5ZWQgaW4gQmFzZUxheW91dCBDb21wb25lbnQuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy9EZWZpbmVzIHRoZSBTaGFwZSBvZiB0aGUgcHJvcHMgZm9yIHRoZSBIZWFkZXIuXHJcbmludGVyZmFjZSBoZWFkZXJQcm9wcyB7XHJcbiAgICBjdXJyZW50VXNlcjogb2JqZWN0IHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB1c2VBdXRoQ29udGV4dCgpO1xyXG4gICAgY29uc3QgeyBsb2dvdXQgfSA9IHVzZUxvZ291dCgpOyAvLyBDYWxsIHRoZSB1c2VMb2dvdXQgaG9va1xyXG5cclxuICAgIC8vSGFuZGxlIExvZ291dFxyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGxvZ291dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1sZyBuYXZiYXItbGlnaHQgYmctZGFya1wiPlxyXG5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kIHRleHQtd2hpdGUgXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIEJ1eVRpY2tldFxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3RoLmJpbmcuY29tL3RoL2lkL09JUC5PbU1PbVF4cW9QT1h2N19xeTlkejBBSGFHbD9waWQ9SW1nRGV0JnJzPTFcIiBjbGFzc05hbWU9XCJpbWctdGh1bWJuYWlsIGQtZmxleCB3LTUwXCIgYWx0PVwiUmVzcG9uc2l2ZSBpbWFnZVwiPjwvaW1nPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHRleHQtd2hpdGUgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIj48YSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9IGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e3N0YXRlLnVzZXIgJiYgJ1NpZ24gT3V0J308L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gdGV4dC13aGl0ZSB0ZXh0LWRlY29yYXRpb24tbm9uZVwiPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9hdXRoL3NpZ25pblwiPnshc3RhdGUudXNlciAmJiAnU2lnbiBJbid9PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHRleHQtd2hpdGUgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIj48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvYXV0aC9zaWdudXBcIj57IXN0YXRlLnVzZXIgJiYgJ1NpZ24gVXAnfTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VBdXRoQ29udGV4dCIsInVzZUxvZ291dCIsIkhlYWRlciIsInN0YXRlIiwibG9nb3V0IiwiaGFuZGxlTG9nb3V0IiwibmF2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImRpdiIsInVsIiwibGkiLCJhIiwib25DbGljayIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ })

});