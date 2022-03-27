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

/***/ "./components/navBar/navBar.tsx":
/*!**************************************!*\
  !*** ./components/navBar/navBar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _navBar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navBar.module.css */ \"./components/navBar/navBar.module.css\");\n/* harmony import */ var _navBar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_navBar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mobileMenu_mobileMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mobileMenu/mobileMenu */ \"./components/mobileMenu/mobileMenu.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./components/utils.js\");\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction NavBar(param) {\n    var websiteTitle = param.websiteTitle, links = param.links;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), open = ref[0], setOpen = ref[1];\n    var ref1 = _slicedToArray((0,_utils__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), 2), width = ref1[0], height = ref1[1];\n    var breakpoint = 900;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_navBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: (_navBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().list),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: (_navBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().li) + ' ' + (_navBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_navBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().logoSection),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_navBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().link) + ' ' + (_navBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().webTitle),\n                                children: websiteTitle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MitchHein\\\\OneDrive\\\\Documents\\\\Development - Personal\\\\mitchhein.com\\\\mitchhein.com\\\\components\\\\navBar\\\\navBar.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MitchHein\\\\OneDrive\\\\Documents\\\\Development - Personal\\\\mitchhein.com\\\\mitchhein.com\\\\components\\\\navBar\\\\navBar.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MitchHein\\\\OneDrive\\\\Documents\\\\Development - Personal\\\\mitchhein.com\\\\mitchhein.com\\\\components\\\\navBar\\\\navBar.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MitchHein\\\\OneDrive\\\\Documents\\\\Development - Personal\\\\mitchhein.com\\\\mitchhein.com\\\\components\\\\navBar\\\\navBar.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_navBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().navLinks),\n                    children: width >= breakpoint ? links.map(function(link) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_navBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().li),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: link.link,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: (_navBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().link),\n                                    children: link.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MitchHein\\\\OneDrive\\\\Documents\\\\Development - Personal\\\\mitchhein.com\\\\mitchhein.com\\\\components\\\\navBar\\\\navBar.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 45\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MitchHein\\\\OneDrive\\\\Documents\\\\Development - Personal\\\\mitchhein.com\\\\mitchhein.com\\\\components\\\\navBar\\\\navBar.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 41\n                            }, _this)\n                        }, link.name, false, {\n                            fileName: \"C:\\\\Users\\\\MitchHein\\\\OneDrive\\\\Documents\\\\Development - Personal\\\\mitchhein.com\\\\mitchhein.com\\\\components\\\\navBar\\\\navBar.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 37\n                        }, _this);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: open ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"/icons/hamburger-menu.svg\",\n                                alt: \"Mobile navigation menu button\",\n                                width: 40,\n                                height: 40,\n                                onClick: function() {\n                                    return setOpen(!open);\n                                },\n                                className: (_navBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().transition)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MitchHein\\\\OneDrive\\\\Documents\\\\Development - Personal\\\\mitchhein.com\\\\mitchhein.com\\\\components\\\\navBar\\\\navBar.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 37\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MitchHein\\\\OneDrive\\\\Documents\\\\Development - Personal\\\\mitchhein.com\\\\mitchhein.com\\\\components\\\\navBar\\\\navBar.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 33\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/icons/exit.svg\",\n                                    alt: \"Exit navigation menu button\",\n                                    width: 30,\n                                    height: 30,\n                                    onClick: function() {\n                                        return setOpen(!open);\n                                    },\n                                    className: (_navBar_module_css__WEBPACK_IMPORTED_MODULE_6___default().transition)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MitchHein\\\\OneDrive\\\\Documents\\\\Development - Personal\\\\mitchhein.com\\\\mitchhein.com\\\\components\\\\navBar\\\\navBar.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 37\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mobileMenu_mobileMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    websiteTitle: websiteTitle,\n                                    links: links\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MitchHein\\\\OneDrive\\\\Documents\\\\Development - Personal\\\\mitchhein.com\\\\mitchhein.com\\\\components\\\\navBar\\\\navBar.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 37\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\MitchHein\\\\OneDrive\\\\Documents\\\\Development - Personal\\\\mitchhein.com\\\\mitchhein.com\\\\components\\\\navBar\\\\navBar.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 33\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MitchHein\\\\OneDrive\\\\Documents\\\\Development - Personal\\\\mitchhein.com\\\\mitchhein.com\\\\components\\\\navBar\\\\navBar.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MitchHein\\\\OneDrive\\\\Documents\\\\Development - Personal\\\\mitchhein.com\\\\mitchhein.com\\\\components\\\\navBar\\\\navBar.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\MitchHein\\\\OneDrive\\\\Documents\\\\Development - Personal\\\\mitchhein.com\\\\mitchhein.com\\\\components\\\\navBar\\\\navBar.tsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MitchHein\\\\OneDrive\\\\Documents\\\\Development - Personal\\\\mitchhein.com\\\\mitchhein.com\\\\components\\\\navBar\\\\navBar.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this));\n};\n_s(NavBar, \"EJokvCeJPxcdncb3vm6V6pI8kW8=\", false, function() {\n    return [\n        _utils__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdkJhci9uYXZCYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0o7QUFDRTtBQUNnQjtBQUNHO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQixRQUFRLENBQUNNLE1BQU0sQ0FBQyxLQUFvQyxFQUFFLENBQUM7UUFBckNDLFlBQVksR0FBZCxLQUFvQyxDQUFsQ0EsWUFBWSxFQUFFQyxLQUFLLEdBQXJCLEtBQW9DLENBQXBCQSxLQUFLOzs7SUFDaEQsR0FBSyxDQUFtQlIsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBOUJTLElBQUksR0FBYVQsR0FBYyxLQUF6QlUsT0FBTyxHQUFJVixHQUFjO0lBQ3RDLEdBQUssQ0FBbUJLLElBQWUsa0JBQWZBLGtEQUFhLFFBQTlCTSxLQUFLLEdBQVlOLElBQWUsS0FBekJPLE1BQU0sR0FBSVAsSUFBZTtJQUN2QyxHQUFLLENBQUNRLFVBQVUsR0FBRyxHQUFHO0lBRXRCLE1BQU0sNkVBQ0RDLENBQUc7UUFBQ0MsU0FBUyxFQUFFWixxRUFBc0I7OEZBQ2pDYyxDQUFFO1lBQUNGLFNBQVMsRUFBRVosZ0VBQWlCOzs0RkFFM0JnQixDQUFFO29CQUFDSixTQUFTLEVBQUVaLDhEQUFlLEdBQUcsQ0FBRyxLQUFHQSxpRUFBa0I7MEdBQ3BERixrREFBSTt3QkFBQ29CLElBQUksRUFBQyxDQUFHO3dCQUFDQyxRQUFROzhHQUNsQlIsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFFWix1RUFBd0I7a0hBT25DcUIsQ0FBQztnQ0FBQ1QsU0FBUyxFQUFFWixnRUFBaUIsR0FBRyxDQUFHLEtBQUdBLG9FQUFxQjswQ0FBR0ksWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQUl2Rk8sQ0FBRztvQkFBQ0MsU0FBUyxFQUFFWixvRUFBcUI7OEJBQ2hDUSxLQUFLLElBQUlFLFVBQVUsR0FDUkwsS0FBSyxDQUFDb0IsR0FBRyxDQUFDLFFBQVEsQ0FBUEgsSUFBSTtzQ0FDWCxNQUFNLCtEQUFMTixDQUFFOzRCQUFDSixTQUFTLEVBQUVaLDhEQUFlO2tIQUN6QkYsa0RBQUk7Z0NBQUNvQixJQUFJLEVBQUVJLElBQUksQ0FBQ0EsSUFBSTtzSEFDaEJELENBQUM7b0NBQUNULFNBQVMsRUFBRVosZ0VBQWlCOzhDQUFHc0IsSUFBSSxDQUFDSSxJQUFJOzs7Ozs7Ozs7OzsyQkFGZEosSUFBSSxDQUFDSSxJQUFJOzs7OztxR0FPekRmLENBQUc7a0NBQ0NMLElBQUksK0VBQ0FLLENBQUc7a0hBQ0NaLG1EQUFLO2dDQUNGNEIsR0FBRyxFQUFDLENBQTJCO2dDQUMvQkMsR0FBRyxFQUFDLENBQStCO2dDQUNuQ3BCLEtBQUssRUFBRSxFQUFFO2dDQUNUQyxNQUFNLEVBQUUsRUFBRTtnQ0FDVm9CLE9BQU8sRUFBRSxRQUFRO29DQUFGdEIsTUFBTSxDQUFOQSxPQUFPLEVBQUVELElBQUk7O2dDQUM1Qk0sU0FBUyxFQUFFWixzRUFBdUI7Ozs7Ozs7Ozs7K0dBSXpDVyxDQUFHOzs0R0FDQ1osbURBQUs7b0NBQ0Y0QixHQUFHLEVBQUMsQ0FBaUI7b0NBQ3JCQyxHQUFHLEVBQUMsQ0FBNkI7b0NBQ2pDcEIsS0FBSyxFQUFFLEVBQUU7b0NBQ1RDLE1BQU0sRUFBRSxFQUFFO29DQUNWb0IsT0FBTyxFQUFFLFFBQVE7d0NBQUZ0QixNQUFNLENBQU5BLE9BQU8sRUFBRUQsSUFBSTs7b0NBQzVCTSxTQUFTLEVBQUVaLHNFQUF1Qjs7Ozs7OzRHQUVyQ0MsOERBQVU7b0NBQUNHLFlBQVksRUFBRUEsWUFBWTtvQ0FBRUMsS0FBSyxFQUFFQSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTeEYsQ0FBQztHQS9EdUJGLE1BQU07O1FBRUZELDhDQUFhOzs7S0FGakJDLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZCYXIvbmF2QmFyLnRzeD9lYmMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBuYXZCYXJTdHlsZXMgZnJvbSAnLi9uYXZCYXIubW9kdWxlLmNzcydcclxuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi4vbW9iaWxlTWVudS9tb2JpbGVNZW51J1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuLi91dGlscydcclxuXHJcbmludGVyZmFjZSBOYXZCYXJQcm9wcyB7XHJcbiAgICB3ZWJzaXRlVGl0bGU6IHN0cmluZztcclxuICAgIGxpbmtzOiBBcnJheTx7bmFtZTogc3RyaW5nLCBsaW5rOiBzdHJpbmd9PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoeyB3ZWJzaXRlVGl0bGUsIGxpbmtzIH06IE5hdkJhclByb3BzKSB7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IHVzZVdpbmRvd1NpemUoKTtcclxuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSA5MDA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bmF2QmFyU3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e25hdkJhclN0eWxlcy5saXN0fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtuYXZCYXJTdHlsZXMubGkgKyAnICcgKyBuYXZCYXJTdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bmF2QmFyU3R5bGVzLmxvZ29TZWN0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxJbWFnZSovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIHNyYz0nL2ljb25zL21haW4tbG9nby1ob21lLWljb24uc3ZnJyovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIGFsdD0nTWFpbiBsb2dvIGljb24nKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgd2lkdGg9ezUwfSovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIGhlaWdodD17NTB9Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyovPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtuYXZCYXJTdHlsZXMubGluayArICcgJyArIG5hdkJhclN0eWxlcy53ZWJUaXRsZX0+e3dlYnNpdGVUaXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bmF2QmFyU3R5bGVzLm5hdkxpbmtzfT5cclxuICAgICAgICAgICAgICAgICAgICB7d2lkdGggPj0gYnJlYWtwb2ludCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e25hdkJhclN0eWxlcy5saX0ga2V5PXtsaW5rLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGluay5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e25hdkJhclN0eWxlcy5saW5rfT57bGluay5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3BlbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pY29ucy9oYW1idXJnZXItbWVudS5zdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J01vYmlsZSBuYXZpZ2F0aW9uIG1lbnUgYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtuYXZCYXJTdHlsZXMudHJhbnNpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pY29ucy9leGl0LnN2ZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nRXhpdCBuYXZpZ2F0aW9uIG1lbnUgYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtuYXZCYXJTdHlsZXMudHJhbnNpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vYmlsZU1lbnUgd2Vic2l0ZVRpdGxlPXt3ZWJzaXRlVGl0bGV9IGxpbmtzPXtsaW5rc30+PC9Nb2JpbGVNZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwiSW1hZ2UiLCJuYXZCYXJTdHlsZXMiLCJNb2JpbGVNZW51IiwidXNlV2luZG93U2l6ZSIsIk5hdkJhciIsIndlYnNpdGVUaXRsZSIsImxpbmtzIiwib3BlbiIsInNldE9wZW4iLCJ3aWR0aCIsImhlaWdodCIsImJyZWFrcG9pbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ1bCIsImxpc3QiLCJsaSIsInRpdGxlIiwiaHJlZiIsInBhc3NIcmVmIiwibG9nb1NlY3Rpb24iLCJhIiwibGluayIsIndlYlRpdGxlIiwibmF2TGlua3MiLCJtYXAiLCJuYW1lIiwic3JjIiwiYWx0Iiwib25DbGljayIsInRyYW5zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navBar/navBar.tsx\n");

/***/ })

});