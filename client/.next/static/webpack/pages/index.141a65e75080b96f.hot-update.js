"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _custom_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom_hooks/useAuthContext */ \"./custom_hooks/useAuthContext.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Landing = (param)=>{\n    let { tickets  } = param;\n    _s();\n    const { state  } = (0,_custom_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuthContext)();\n    const currentUser = state.user;\n    // List of Tickets we fetched from db.\n    const ticketList = tickets.map((ticket)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: ticket.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\pages\\\\index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: ticket.price\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\pages\\\\index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/tickets/\".concat(ticket.id),\n                        children: \"View\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\pages\\\\index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, ticket.id, true, {\n            fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\pages\\\\index.tsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Tickets\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            ticketList.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Title\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\pages\\\\index.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Price\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\pages\\\\index.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Link\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\pages\\\\index.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\pages\\\\index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: ticketList\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 37,\n                columnNumber: 38\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \" display-6 pb-12\",\n                children: \"No tickets for sale at this time, please check again later!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 48,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\edwar\\\\OneDrive\\\\Documents\\\\Elder Scrolls Online\\\\BuyTicket\\\\client\\\\pages\\\\index.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Landing, \"Y7KWw0z8P/j7onQZzvGiEKiL/U4=\", false, function() {\n    return [\n        _custom_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_1__.useAuthContext\n    ];\n});\n_c = Landing;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHZ0U7QUFDbkM7QUFRN0IsTUFBTUUsVUFBVSxTQUErQjtRQUE5QixFQUFFQyxRQUFPLEVBQWdCOztJQUN0QyxNQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHSiw0RUFBY0E7SUFDaEMsTUFBTUssY0FBY0QsTUFBTUUsSUFBSTtJQUU5QixzQ0FBc0M7SUFDdEMsTUFBTUMsYUFBYUosUUFBUUssR0FBRyxDQUFDLENBQUNDLFNBQVc7UUFDdkMscUJBQ0ksOERBQUNDOzs4QkFDRyw4REFBQ0M7OEJBQUlGLE9BQU9HLEtBQUs7Ozs7Ozs4QkFDakIsOERBQUNEOzhCQUFJRixPQUFPSSxLQUFLOzs7Ozs7OEJBQ2pCLDhEQUFDRjs4QkFDRyw0RUFBQ1Ysa0RBQUlBO3dCQUFDYSxNQUFNLFlBQXNCLE9BQVZMLE9BQU9NLEVBQUU7a0NBQUk7Ozs7Ozs7Ozs7OztXQUpwQ04sT0FBT00sRUFBRTs7Ozs7SUFZMUI7SUFFQSxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7O1lBQ0hWLFdBQVdXLE1BQU0sR0FBRyxrQkFBSSw4REFBQ0M7O2tDQUN0Qiw4REFBQ0M7a0NBQ0csNEVBQUNWOzs4Q0FDRyw4REFBQ1c7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDQztrQ0FBT2Y7Ozs7Ozs7Ozs7OzBDQUdSLDhEQUFDVTtnQkFBR00sV0FBVTswQkFBb0I7Ozs7O3lCQUFnRTs7Ozs7OztBQU1sSDtHQXpDTXJCOztRQUNnQkYsd0VBQWNBOzs7S0FEOUJFOztBQXFFTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gJy4uL2FwaS9idWlsZC1jbGllbnQnO1xyXG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gJy4uL2N1c3RvbV9ob29rcy91c2VBdXRoQ29udGV4dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFRpY2tldCB9IGZyb20gJy4uL2NvbW1vbl9pbnRlcmZhY2VzL1RpY2tldCc7XHJcblxyXG4vLyBUaGUgUHJvcHMgdGhpcyBjb21wb25lbnQgd2lsbCB0YWtlIGZyb20gZ2V0U2VydmVyU2lkZVByb3BzLlxyXG5pbnRlcmZhY2UgTGFuZGluZ1Byb3BzIHtcclxuICAgIHRpY2tldHM6IFRpY2tldFtdO1xyXG59XHJcblxyXG5jb25zdCBMYW5kaW5nID0gKHsgdGlja2V0cyB9OiBMYW5kaW5nUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUF1dGhDb250ZXh0KCk7XHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IHN0YXRlLnVzZXI7XHJcblxyXG4gICAgLy8gTGlzdCBvZiBUaWNrZXRzIHdlIGZldGNoZWQgZnJvbSBkYi5cclxuICAgIGNvbnN0IHRpY2tldExpc3QgPSB0aWNrZXRzLm1hcCgodGlja2V0KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyIGtleT17dGlja2V0LmlkfT5cclxuICAgICAgICAgICAgICAgIDx0ZD57dGlja2V0LnRpdGxlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3RpY2tldC5wcmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdGlja2V0cy8ke3RpY2tldC5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlld1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+VGlja2V0czwvaDE+XHJcbiAgICAgICAgICAgIHt0aWNrZXRMaXN0Lmxlbmd0aCA+IDAgPyA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGl0bGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGluazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+e3RpY2tldExpc3R9PC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgZGlzcGxheS02IHBiLTEyXCIgPk5vIHRpY2tldHMgZm9yIHNhbGUgYXQgdGhpcyB0aW1lLCBwbGVhc2UgY2hlY2sgYWdhaW4gbGF0ZXIhPC9oMT5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuLy9SZXRpcmV2ZXMgYWxsIFRpY2tldHMgdGhhdCBhcmUgYXZhaWxhYmxlIGZvciBwdXJjaGFzZSFcclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzPExhbmRpbmdQcm9wcz4gPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjbGllbnQgPSBidWlsZENsaWVudChjb250ZXh0KTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudC5nZXQoJy9hcGkvdGlja2V0cycpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhOiBUaWNrZXRbXSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tldHM6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gZmV0Y2ggdGlja2V0cycpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdGlja2V0czogW10sXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nO1xyXG4iXSwibmFtZXMiOlsidXNlQXV0aENvbnRleHQiLCJMaW5rIiwiTGFuZGluZyIsInRpY2tldHMiLCJzdGF0ZSIsImN1cnJlbnRVc2VyIiwidXNlciIsInRpY2tldExpc3QiLCJtYXAiLCJ0aWNrZXQiLCJ0ciIsInRkIiwidGl0bGUiLCJwcmljZSIsImhyZWYiLCJpZCIsImRpdiIsImgxIiwibGVuZ3RoIiwidGFibGUiLCJ0aGVhZCIsInRoIiwidGJvZHkiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});