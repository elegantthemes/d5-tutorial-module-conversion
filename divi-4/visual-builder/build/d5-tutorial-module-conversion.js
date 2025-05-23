/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_static_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/static-module */ \"./src/modules/static-module/index.jsx\");\n/* harmony import */ var _modules_dynamic_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dynamic-module */ \"./src/modules/dynamic-module/index.jsx\");\n\n\n\n\n/**\n * Register modules to Visual Builder once the API is ready.\n */\njquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('et_builder_api_ready', (event, API) => {\n  // Register module.\n  API.registerModules([_modules_static_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _modules_dynamic_module__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]);\n});\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./src/index.js?");

/***/ }),

/***/ "./src/modules/dynamic-module/index.jsx":
/*!**********************************************!*\
  !*** ./src/modules/dynamic-module/index.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n// External Dependencies\n\n\n/**\n * Component for rendering Dynamic module in visual builder.\n *\n * @since 1.0.0\n */\nclass DTMCDynamicModule extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  static slug = 'dtmc_dynamic_module';\n  render() {\n    const HeaderLevel = this.props.header_level ? this.props.header_level : 'h2';\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeaderLevel, {\n      className: \"dtmc_dynamic_module_title\"\n    }, this?.props?.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"dtmc_dynamic_module_content\",\n      dangerouslySetInnerHTML: {\n        __html: this?.props?.__content\n      }\n    }));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DTMCDynamicModule);\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./src/modules/dynamic-module/index.jsx?");

/***/ }),

/***/ "./src/modules/static-module/index.jsx":
/*!*********************************************!*\
  !*** ./src/modules/static-module/index.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n// External Dependencies\n\n\n/**\n * Component for rendering Static module in Visual Builder.\n *\n * @since ??\n */\nclass DTMCStaticModule extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  static slug = 'dtmc_static_module';\n  render() {\n    const HeaderLevel = this.props.header_level ? this.props.header_level : 'h2';\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeaderLevel, {\n      className: \"dtmc_static_module_title\"\n    }, this.props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"dtmc_static_module_content\"\n    }, this.props.content()));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DTMCStaticModule);\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./src/modules/static-module/index.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;