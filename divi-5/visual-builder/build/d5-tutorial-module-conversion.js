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

/***/ "./visual-builder/src/index.js":
/*!*************************************!*\
  !*** ./visual-builder/src/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"./visual-builder/src/modules/index.js\");\n\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/index.js?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/edit.jsx":
/*!************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/edit.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DynamicModuleEdit\": () => (/* binding */ DynamicModuleEdit)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_use_module_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/use-module-data */ \"./visual-builder/src/modules/dynamic-module/hooks/use-module-data/index.js\");\n\n\nconst {\n  ModuleContainer\n} = divi.module; // ModuleContainer is a component that wraps the module's edit component.\n\n/**\n * Edit component for Dynamic Module.\n */\nconst DynamicModuleEdit = ({\n  attrs,\n  id,\n  name\n}) => {\n  const HeaderLevel = attrs?.titleFont?.font?.desktop?.value?.headingLevel ?? 'h2';\n  const title = attrs?.title?.desktop?.value ?? '';\n  const {\n    getModuleData,\n    moduleData,\n    isLoading\n  } = (0,_hooks_use_module_data__WEBPACK_IMPORTED_MODULE_1__.useModuleData)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    getModuleData(title);\n  }, [title]);\n  return /*#__PURE__*/React.createElement(ModuleContainer, {\n    attrs: attrs,\n    id: id,\n    name: name\n  }, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(HeaderLevel, {\n    className: \"dtmc_dynamic_module_title\"\n  }, title), isLoading && /*#__PURE__*/React.createElement(\"div\", null, \"Loading...\"), !isLoading && /*#__PURE__*/React.createElement(\"div\", {\n    className: \"dtmc_dynamic_module_content\",\n    dangerouslySetInnerHTML: {\n      __html: moduleData\n    }\n  })));\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/edit.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/hooks/use-module-data/index.js":
/*!**********************************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/hooks/use-module-data/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useModuleData\": () => (/* binding */ useModuleData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  loggedFetch\n} = divi.ajax;\n\n/**\n * Custom hook to fetch module data.\n * \n * @return {Object} Object containing getModuleData, moduleData and isLoading.\n */\nconst useModuleData = () => {\n  const [moduleData, setModuleData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const apiFetchController = new AbortController();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => {\n    apiFetchController.abort(); // Abort fetch on unmount.\n  }, []);\n\n  // Fetch module data from REST API.\n  const getModuleData = title => {\n    setLoading(true);\n    loggedFetch({\n      restRoute: 'dtmc/v1/modules/dynamic-module',\n      method: 'GET',\n      data: {\n        title\n      },\n      signal: apiFetchController.signal\n    }).then(value => {\n      if (!apiFetchController.signal.aborted) {\n        setModuleData(value.data);\n        setLoading(false);\n      }\n    }).catch(error => {\n      console.log(error);\n      setLoading(false);\n    });\n  };\n  return {\n    getModuleData,\n    moduleData,\n    isLoading\n  };\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/hooks/use-module-data/index.js?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/index.js":
/*!************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dynamicModule\": () => (/* binding */ dynamicModule),\n/* harmony export */   \"dynamicModuleMetadata\": () => (/* binding */ dynamicModuleMetadata)\n/* harmony export */ });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./visual-builder/src/modules/dynamic-module/edit.jsx\");\n/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module.json */ \"./visual-builder/src/modules/dynamic-module/module.json\");\n/* harmony import */ var _settings_advanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-advanced */ \"./visual-builder/src/modules/dynamic-module/settings-advanced.jsx\");\n/* harmony import */ var _settings_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-content */ \"./visual-builder/src/modules/dynamic-module/settings-content.jsx\");\n/* harmony import */ var _settings_design__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-design */ \"./visual-builder/src/modules/dynamic-module/settings-design.jsx\");\n\n\n\n\n\nconst dynamicModuleMetadata = _module_json__WEBPACK_IMPORTED_MODULE_1__;\nconst dynamicModule = {\n  renderers: {\n    edit: _edit__WEBPACK_IMPORTED_MODULE_0__.DynamicModuleEdit\n  },\n  settings: {\n    content: _settings_content__WEBPACK_IMPORTED_MODULE_3__.SettingsContent,\n    design: _settings_design__WEBPACK_IMPORTED_MODULE_4__.SettingsDesign,\n    advanced: _settings_advanced__WEBPACK_IMPORTED_MODULE_2__.SettingsAdvanced\n  }\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/index.js?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/settings-advanced.jsx":
/*!*************************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/settings-advanced.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsAdvanced\": () => (/* binding */ SettingsAdvanced)\n/* harmony export */ });\nconst SettingsAdvanced = () => null;\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/settings-advanced.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/settings-content.jsx":
/*!************************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/settings-content.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsContent\": () => (/* binding */ SettingsContent)\n/* harmony export */ });\nconst SettingsContent = () => null;\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/settings-content.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/settings-design.jsx":
/*!***********************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/settings-design.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsDesign\": () => (/* binding */ SettingsDesign)\n/* harmony export */ });\nconst SettingsDesign = () => null;\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/settings-design.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/index.js":
/*!*********************************************!*\
  !*** ./visual-builder/src/modules/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dynamic_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-module */ \"./visual-builder/src/modules/dynamic-module/index.js\");\n/* harmony import */ var _static_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static-module */ \"./visual-builder/src/modules/static-module/index.js\");\n\n\nconst {\n  addAction\n} = wp.hooks;\nconst {\n  registerModule\n} = divi.moduleLibrary;\naddAction('moduleLibrary.registerModuleLibraryStore.after', 'dtmc', () => {\n  registerModule(_static_module__WEBPACK_IMPORTED_MODULE_1__.staticModuleMetadata, _static_module__WEBPACK_IMPORTED_MODULE_1__.staticModule);\n  registerModule(_dynamic_module__WEBPACK_IMPORTED_MODULE_0__.dynamicModuleMetadata, _dynamic_module__WEBPACK_IMPORTED_MODULE_0__.dynamicModule);\n});\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/index.js?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/edit.jsx":
/*!***********************************************************!*\
  !*** ./visual-builder/src/modules/static-module/edit.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StaticModuleEdit\": () => (/* binding */ StaticModuleEdit)\n/* harmony export */ });\nconst {\n  ModuleContainer\n} = divi.module;\nconst StaticModuleEdit = ({\n  attrs,\n  id,\n  name\n}) => {\n  const HeaderLevel = attrs?.titleFont?.font?.desktop?.value?.headingLevel ?? 'h2';\n  const title = attrs?.title?.desktop?.value ?? '';\n  const content = attrs?.content?.desktop?.value ?? '';\n  return /*#__PURE__*/React.createElement(ModuleContainer, {\n    attrs: attrs,\n    id: id,\n    name: name\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"et_pb_module_inner\"\n  }, /*#__PURE__*/React.createElement(HeaderLevel, {\n    className: \"dtmc_static_module_title\"\n  }, title), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"dtmc_static_module_content\",\n    dangerouslySetInnerHTML: {\n      __html: content\n    }\n  })));\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/edit.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/index.js":
/*!***********************************************************!*\
  !*** ./visual-builder/src/modules/static-module/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"staticModule\": () => (/* binding */ staticModule),\n/* harmony export */   \"staticModuleMetadata\": () => (/* binding */ staticModuleMetadata)\n/* harmony export */ });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./visual-builder/src/modules/static-module/edit.jsx\");\n/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module.json */ \"./visual-builder/src/modules/static-module/module.json\");\n/* harmony import */ var _settings_advanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-advanced */ \"./visual-builder/src/modules/static-module/settings-advanced.jsx\");\n/* harmony import */ var _settings_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-content */ \"./visual-builder/src/modules/static-module/settings-content.jsx\");\n/* harmony import */ var _settings_design__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-design */ \"./visual-builder/src/modules/static-module/settings-design.jsx\");\n\n\n\n\n\nconst staticModuleMetadata = _module_json__WEBPACK_IMPORTED_MODULE_1__;\nconst staticModule = {\n  renderers: {\n    edit: _edit__WEBPACK_IMPORTED_MODULE_0__.StaticModuleEdit\n  },\n  settings: {\n    content: _settings_content__WEBPACK_IMPORTED_MODULE_3__.SettingsContent,\n    design: _settings_design__WEBPACK_IMPORTED_MODULE_4__.SettingsDesign,\n    advanced: _settings_advanced__WEBPACK_IMPORTED_MODULE_2__.SettingsAdvanced\n  }\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/index.js?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/settings-advanced.jsx":
/*!************************************************************************!*\
  !*** ./visual-builder/src/modules/static-module/settings-advanced.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsAdvanced\": () => (/* binding */ SettingsAdvanced)\n/* harmony export */ });\nconst SettingsAdvanced = () => null;\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/settings-advanced.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/settings-content.jsx":
/*!***********************************************************************!*\
  !*** ./visual-builder/src/modules/static-module/settings-content.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsContent\": () => (/* binding */ SettingsContent)\n/* harmony export */ });\nconst SettingsContent = () => null;\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/settings-content.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/settings-design.jsx":
/*!**********************************************************************!*\
  !*** ./visual-builder/src/modules/static-module/settings-design.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsDesign\": () => (/* binding */ SettingsDesign)\n/* harmony export */ });\nconst SettingsDesign = () => null;\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/settings-design.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/module.json":
/*!***************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/module.json ***!
  \***************************************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"name\":\"dtmc/dynamic-module\",\"d4Shortcode\":\"dtmc_dynamic_module\",\"title\":\"DTMC Dynamic Module\",\"titles\":\"DTMC Dynamic Modules\",\"moduleIcon\":\"divi/module-blurb\",\"category\":\"module\",\"attributes\":{}}');\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/module.json?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/module.json":
/*!**************************************************************!*\
  !*** ./visual-builder/src/modules/static-module/module.json ***!
  \**************************************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"name\":\"dtmc/static-module\",\"d4Shortcode\":\"dtmc_static_module\",\"title\":\"DTMC Static Module\",\"titles\":\"DTMC Static Modules\",\"moduleIcon\":\"divi/module-blurb\",\"category\":\"module\",\"attributes\":{}}');\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/module.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./visual-builder/src/index.js");
/******/ 	
/******/ })()
;