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

/***/ "./visual-builder/src/icons/index.js":
/*!*******************************************!*\
  !*** ./visual-builder/src/icons/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-dynamic */ \"./visual-builder/src/icons/module-dynamic/index.js\");\n\nconst {\n  addFilter\n} = window?.wp?.hooks;\n\n// Add module icons to the icon library.\naddFilter('iconLibrary.icon.map', 'd5TutorialModuleConversion', icons => {\n  return {\n    ...icons,\n    // This is important. Without this, all other icons will be overwritten.\n    [_module_dynamic__WEBPACK_IMPORTED_MODULE_0__.name]: _module_dynamic__WEBPACK_IMPORTED_MODULE_0__\n  };\n});\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/icons/index.js?");

/***/ }),

/***/ "./visual-builder/src/icons/module-dynamic/index.js":
/*!**********************************************************!*\
  !*** ./visual-builder/src/icons/module-dynamic/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"component\": () => (/* binding */ component),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"viewBox\": () => (/* binding */ viewBox)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst name = 'dtmc/module-dynamic';\nconst viewBox = '3 5 16 16';\n\n// SVG path. without the svg tag.\nconst component = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n  d: \"M4.5 20.25C4.30189 20.2474 4.11263 20.1676 3.97253 20.0275C3.83244 19.8874 3.75259 19.6981 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75C4.69891 3.75 4.88968 3.82902 5.03033 3.96967C5.17098 4.11032 5.25 4.30109 5.25 4.5V19.5C5.24741 19.6981 5.16756 19.8874 5.02747 20.0275C4.88737 20.1676 4.69811 20.2474 4.5 20.25Z\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n  d: \"M19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5C3.75 19.3011 3.82902 19.1103 3.96967 18.9697C4.11032 18.829 4.30109 18.75 4.5 18.75H19.5C19.6989 18.75 19.8897 18.829 20.0303 18.9697C20.171 19.1103 20.25 19.3011 20.25 19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25Z\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n  d: \"M14 14.75C13.9015 14.7504 13.8038 14.7312 13.7128 14.6934C13.6218 14.6557 13.5392 14.6001 13.47 14.53L11 12.06L8.53 14.53C8.38782 14.6624 8.19978 14.7346 8.00548 14.7311C7.81118 14.7277 7.62579 14.649 7.48838 14.5116C7.35096 14.3742 7.27225 14.1888 7.26882 13.9945C7.2654 13.8002 7.33752 13.6121 7.47 13.47L10.47 10.47C10.6106 10.3295 10.8012 10.2506 11 10.2506C11.1987 10.2506 11.3894 10.3295 11.53 10.47L14 12.94L17.47 9.46997C17.6122 9.33749 17.8002 9.26537 17.9945 9.26879C18.1888 9.27222 18.3742 9.35093 18.5116 9.48835C18.649 9.62576 18.7277 9.81115 18.7312 10.0054C18.7346 10.1997 18.6625 10.3878 18.53 10.53L14.53 14.53C14.4608 14.6001 14.3782 14.6557 14.2872 14.6934C14.1962 14.7312 14.0985 14.7504 14 14.75Z\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n  d: \"M18.5 13.84C18.3019 13.8374 18.1126 13.7576 17.9725 13.6175C17.8324 13.4774 17.7526 13.2881 17.75 13.09V10.25H15C14.8011 10.25 14.6103 10.171 14.4697 10.0303C14.329 9.88968 14.25 9.69891 14.25 9.5C14.25 9.30109 14.329 9.11032 14.4697 8.96967C14.6103 8.82902 14.8011 8.75 15 8.75H18.5C18.6981 8.75259 18.8874 8.83244 19.0275 8.97253C19.1676 9.11263 19.2474 9.30189 19.25 9.5V13.09C19.2474 13.2881 19.1676 13.4774 19.0275 13.6175C18.8874 13.7576 18.6981 13.8374 18.5 13.84Z\"\n}));\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/icons/module-dynamic/index.js?");

/***/ }),

/***/ "./visual-builder/src/index.js":
/*!*************************************!*\
  !*** ./visual-builder/src/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"./visual-builder/src/modules/index.js\");\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ \"./visual-builder/src/icons/index.js\");\n\n\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/index.js?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/constants.js":
/*!****************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/constants.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultAttrs\": () => (/* binding */ defaultAttrs),\n/* harmony export */   \"defaultPrintedStyleAttrs\": () => (/* binding */ defaultPrintedStyleAttrs),\n/* harmony export */   \"defaultSettingsAttrs\": () => (/* binding */ defaultSettingsAttrs)\n/* harmony export */ });\nconst {\n  __\n} = wp.i18n;\nconst {\n  mergeAttrs\n} = divi.moduleUtils;\n\n/**\n * Default attributes. Default attributes that are needed on rendered module\n * as well on the module's settings modal.\n */\nconst defaultAttrs = {\n  adminLabel: {\n    desktop: {\n      value: __('DTMC Dynamic Module', 'd5-tutorial-module-conversion')\n    }\n  },\n  text: {\n    text: {\n      desktop: {\n        value: {\n          color: 'dark'\n        }\n      }\n    }\n  },\n  titleFont: {\n    font: {\n      desktop: {\n        value: {\n          headingLevel: 'h2'\n        }\n      }\n    }\n  }\n};\n\n/**\n * Default attributes that is inferred from module's static style. Rendered module doesn't\n * need this because static style already executes style that resulting identical output should\n * these attributes are being rendered.\n */\nconst defaultPrintedStyleAttrs = {};\n\n/**\n * Combination of default attributes and defaults that are inferred from printed style attributes\n * that are needed by module's setting modal to render correct `defaultValue`.\n */\nconst defaultSettingsAttrs = mergeAttrs({\n  defaultAttrs,\n  attrs: defaultPrintedStyleAttrs\n});\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/constants.js?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/custom-css.js":
/*!*****************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/custom-css.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cssFields\": () => (/* binding */ cssFields)\n/* harmony export */ });\n/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.json */ \"./visual-builder/src/modules/dynamic-module/module.json\");\n\nconst {\n  __\n} = wp.i18n;\nconst customCssFields = _module_json__WEBPACK_IMPORTED_MODULE_0__.customCssFields;\n\n// Add label to custom CSS fields for Visual Builder\ncustomCssFields.title.label = __('Title', 'd5-tutorial-module-conversion');\nconst cssFields = {\n  ...customCssFields\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/custom-css.js?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/edit.jsx":
/*!************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/edit.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DynamicModuleEdit\": () => (/* binding */ DynamicModuleEdit)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _module_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-styles */ \"./visual-builder/src/modules/dynamic-module/module-styles.jsx\");\n/* harmony import */ var _module_script_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-script-data */ \"./visual-builder/src/modules/dynamic-module/module-script-data.jsx\");\n/* harmony import */ var _hooks_use_module_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/use-module-data */ \"./visual-builder/src/modules/dynamic-module/hooks/use-module-data/index.js\");\n/* harmony import */ var _module_classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module-classnames */ \"./visual-builder/src/modules/dynamic-module/module-classnames.js\");\n\n\n\n\n\nconst {\n  ModuleContainer\n} = divi.module; // ModuleContainer is a component that wraps the module's edit component.\n\n/**\n * Edit component for Dynamic Module.\n */\nconst DynamicModuleEdit = ({\n  attrs,\n  id,\n  name\n}) => {\n  const HeaderLevel = attrs?.titleFont?.font?.desktop?.value?.headingLevel ?? 'h2';\n  const title = attrs?.title?.desktop?.value ?? '';\n  const {\n    getModuleData,\n    moduleData,\n    isLoading\n  } = (0,_hooks_use_module_data__WEBPACK_IMPORTED_MODULE_3__.useModuleData)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    getModuleData(title);\n  }, [title]);\n  return /*#__PURE__*/React.createElement(ModuleContainer, {\n    attrs: attrs,\n    id: id,\n    name: name,\n    scriptDataComponent: _module_script_data__WEBPACK_IMPORTED_MODULE_2__.ModuleScriptData,\n    stylesComponent: _module_styles__WEBPACK_IMPORTED_MODULE_1__.ModuleStyles,\n    classnamesFunction: _module_classnames__WEBPACK_IMPORTED_MODULE_4__.moduleClassnames\n  }, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(HeaderLevel, {\n    className: \"dtmc_dynamic_module_title\"\n  }, title), isLoading && /*#__PURE__*/React.createElement(\"div\", null, \"Loading...\"), !isLoading && /*#__PURE__*/React.createElement(\"div\", {\n    className: \"dtmc_dynamic_module_content\",\n    dangerouslySetInnerHTML: {\n      __html: moduleData\n    }\n  })));\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/edit.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/hooks/use-module-data/index.js":
/*!**********************************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/hooks/use-module-data/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useModuleData\": () => (/* binding */ useModuleData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  loggedFetch\n} = divi.ajax;\n\n/**\n * Custom hook to fetch module data.\n *\n * @return {Object} Object containing getModuleData, moduleData and isLoading.\n */\nconst useModuleData = () => {\n  const [moduleData, setModuleData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const apiFetchController = new AbortController();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => {\n    apiFetchController.abort(); // Abort fetch on unmount.\n  }, []);\n\n  // Fetch module data from REST API.\n  const getModuleData = title => {\n    setLoading(true);\n    loggedFetch({\n      restRoute: 'dtmc/v1/module-data/dynamic-module',\n      method: 'GET',\n      data: {\n        title\n      },\n      signal: apiFetchController.signal\n    }).then(value => {\n      if (!apiFetchController.signal.aborted) {\n        setModuleData(value.data);\n        setLoading(false);\n      }\n    }).catch(error => {\n      console.log(error);\n      setLoading(false);\n    });\n  };\n  return {\n    getModuleData,\n    moduleData,\n    isLoading\n  };\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/hooks/use-module-data/index.js?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/index.js":
/*!************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dynamicModule\": () => (/* binding */ dynamicModule),\n/* harmony export */   \"dynamicModuleMetadata\": () => (/* binding */ dynamicModuleMetadata)\n/* harmony export */ });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./visual-builder/src/modules/dynamic-module/edit.jsx\");\n/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module.json */ \"./visual-builder/src/modules/dynamic-module/module.json\");\n/* harmony import */ var _settings_advanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-advanced */ \"./visual-builder/src/modules/dynamic-module/settings-advanced.jsx\");\n/* harmony import */ var _settings_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-content */ \"./visual-builder/src/modules/dynamic-module/settings-content.jsx\");\n/* harmony import */ var _settings_design__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-design */ \"./visual-builder/src/modules/dynamic-module/settings-design.jsx\");\n/* harmony import */ var _placeholder_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placeholder-content */ \"./visual-builder/src/modules/dynamic-module/placeholder-content.js\");\n\n\n\n\n\n\nconst dynamicModuleMetadata = _module_json__WEBPACK_IMPORTED_MODULE_1__;\nconst dynamicModule = {\n  renderers: {\n    edit: _edit__WEBPACK_IMPORTED_MODULE_0__.DynamicModuleEdit\n  },\n  settings: {\n    content: _settings_content__WEBPACK_IMPORTED_MODULE_3__.SettingsContent,\n    design: _settings_design__WEBPACK_IMPORTED_MODULE_4__.SettingsDesign,\n    advanced: _settings_advanced__WEBPACK_IMPORTED_MODULE_2__.SettingsAdvanced\n  },\n  placeholderContent: _placeholder_content__WEBPACK_IMPORTED_MODULE_5__.placeholderContent\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/index.js?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/module-classnames.js":
/*!************************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/module-classnames.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moduleClassnames\": () => (/* binding */ moduleClassnames)\n/* harmony export */ });\nconst {\n  animationClassnames,\n  textOptionsClassnames\n} = window?.divi?.module;\nconst moduleClassnames = ({\n  classnamesInstance,\n  attrs\n}) => {\n  // Text Options.\n  classnamesInstance.add(textOptionsClassnames(attrs?.text, {\n    orientation: false\n  }));\n\n  // Animation Options.\n  classnamesInstance.add(animationClassnames(attrs?.animation));\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/module-classnames.js?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/module-script-data.jsx":
/*!**************************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/module-script-data.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModuleScriptData\": () => (/* binding */ ModuleScriptData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  useStickyScriptDataContainer\n} = window?.divi?.module || {};\nconst ModuleScriptData = ({\n  attrs,\n  selector,\n  id\n}) => {\n  useStickyScriptDataContainer({\n    affectingAttrs: {\n      position: attrs?.position,\n      sizing: attrs?.sizing\n    },\n    attr: attrs?.sticky,\n    id,\n    selector\n  });\n  return null;\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/module-script-data.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/module-styles.jsx":
/*!*********************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/module-styles.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModuleStyles\": () => (/* binding */ ModuleStyles)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-css */ \"./visual-builder/src/modules/dynamic-module/custom-css.js\");\n\n\nconst {\n  AnimationStyle,\n  BackgroundStyle,\n  BorderStyle,\n  BoxShadowStyle,\n  CssStyle,\n  DisabledOnStyle,\n  FiltersStyle,\n  FontBodyStyle,\n  FontStyle,\n  OverflowStyle,\n  PositionStyle,\n  SizingStyle,\n  SpacingStyle,\n  StyleContainer,\n  TextStyle,\n  TransformStyle,\n  ZIndexStyle\n} = window.divi.module;\n\n/**\n * Module style component for dynamic module\n */\nconst ModuleStyles = ({\n  attrs,\n  settings,\n  orderClass,\n  mode,\n  state,\n  noStyleTag\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyleContainer, {\n  mode: mode,\n  state: state,\n  noStyleTag: noStyleTag\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BackgroundStyle, {\n  selector: orderClass,\n  attr: attrs.background\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextStyle, {\n  selector: [`${orderClass} .et_pb_promo_description`, `${orderClass} .et_pb_module_header`].join(', '),\n  attr: attrs?.text,\n  propertySelectors: {\n    textShadow: {\n      desktop: {\n        value: {\n          'text-shadow': `${orderClass} .et_pb_promo_description`\n        }\n      }\n    }\n  }\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FontStyle, {\n  selector: [`${orderClass} h2.dtmc_dynamic_module_title`, `${orderClass} h1.dtmc_dynamic_module_title`, `${orderClass} h3.dtmc_dynamic_module_title`, `${orderClass} h4.dtmc_dynamic_module_title`, `${orderClass} h5.dtmc_dynamic_module_title`, `${orderClass} h6.dtmc_dynamic_module_title`].join(', '),\n  attr: attrs.titleFont,\n  headingLevel: \"h2\",\n  important: true\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FontBodyStyle, {\n  selector: `${orderClass} .dtmc_dynamic_module_content`,\n  attr: attrs.bodyFont,\n  important: {\n    body: {\n      font: {\n        desktop: {\n          value: {\n            color: true\n          }\n        }\n      }\n    }\n  }\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SpacingStyle, {\n  selector: orderClass,\n  attr: attrs.spacing,\n  important: true\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SizingStyle, {\n  selector: orderClass,\n  attr: attrs.sizing,\n  propertySelectors: {\n    desktop: {\n      value: {\n        'margin-left': `${orderClass}.et_pb_module`,\n        'margin-right': `${orderClass}.et_pb_module`\n      }\n    }\n  },\n  important: {\n    desktop: {\n      value: {\n        'margin-left': true,\n        'margin-right': true\n      }\n    }\n  }\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BorderStyle, {\n  selector: orderClass,\n  attr: attrs.border\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BoxShadowStyle, {\n  selector: orderClass,\n  attr: attrs.boxShadow\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FiltersStyle, {\n  selector: orderClass,\n  attr: attrs.filter\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TransformStyle, {\n  selector: orderClass,\n  attr: attrs.transform\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AnimationStyle, {\n  selector: orderClass,\n  attr: attrs.animation\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CssStyle, {\n  selector: orderClass,\n  attr: attrs.css,\n  cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_1__.cssFields\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DisabledOnStyle, {\n  selector: orderClass,\n  attr: attrs.disabledOn,\n  disabledModuleVisibility: settings?.disabledModuleVisibility\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OverflowStyle, {\n  selector: orderClass,\n  attr: attrs.overflow\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PositionStyle, {\n  selector: orderClass,\n  attr: attrs.position\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ZIndexStyle, {\n  selector: orderClass,\n  attr: attrs.zIndex\n}));\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/module-styles.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/placeholder-content.js":
/*!**************************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/placeholder-content.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"placeholderContent\": () => (/* binding */ placeholderContent)\n/* harmony export */ });\nconst placeholder = window?.divi?.module?.placeholderContent;\nconst placeholderContent = {\n  title: {\n    desktop: {\n      value: placeholder?.title\n    }\n  }\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/placeholder-content.js?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/settings-advanced.jsx":
/*!*************************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/settings-advanced.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsAdvanced\": () => (/* binding */ SettingsAdvanced)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-css */ \"./visual-builder/src/modules/dynamic-module/custom-css.js\");\n\n\nconst {\n  Css,\n  IdClasses,\n  PositionGroup,\n  ScrollGroup,\n  Transition,\n  Visibility\n} = divi.module;\n\n/**\n * Advanced Settings panel for the Dynamic Module.\n */\nconst SettingsAdvanced = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IdClasses, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Css, {\n  mainSelector: \".dynamic-module\" // This is the main selector for the module.\n  ,\n  cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_1__.cssFields // This is the list of CSS fields.\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Visibility, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Transition, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PositionGroup, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ScrollGroup, null));\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/settings-advanced.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/settings-content.jsx":
/*!************************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/settings-content.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsContent\": () => (/* binding */ SettingsContent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./visual-builder/src/modules/dynamic-module/constants.js\");\n\n\nconst {\n  __\n} = wp.i18n;\nconst {\n  TextContainer\n} = divi.fieldLibrary;\nconst {\n  GroupContainer\n} = divi.modal;\nconst {\n  AdminLabel,\n  Background,\n  FieldContainer,\n  LinkOptions\n} = divi.module;\n\n/**\n * Content Settings panel for the Static Module.\n */\nconst SettingsContent = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GroupContainer, {\n  id: \"mainContent\",\n  title: __('Text', 'd5-tutorial-module-conversion')\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FieldContainer, {\n  attrName: \"title\",\n  label: __('Title', 'd5-tutorial-module-conversion'),\n  description: __('Text entered here will appear as title.', 'd5-tutorial-module-conversion'),\n  sticky: false\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextContainer, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LinkOptions, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Background, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AdminLabel, {\n  defaultGroupAttr: _constants__WEBPACK_IMPORTED_MODULE_1__.defaultSettingsAttrs.adminLabel\n}));\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/settings-content.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/dynamic-module/settings-design.jsx":
/*!***********************************************************************!*\
  !*** ./visual-builder/src/modules/dynamic-module/settings-design.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsDesign\": () => (/* binding */ SettingsDesign)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./visual-builder/src/modules/dynamic-module/constants.js\");\n\nconst {\n  __\n} = wp.i18n;\nconst {\n  Animation,\n  Border,\n  BoxShadow,\n  Filters,\n  Font,\n  FontBodyGroup,\n  Sizing,\n  Spacing,\n  Text,\n  Transform\n} = divi.module;\n\n\n/**\n * Design Settings panel for the Static Module.\n */\nconst SettingsDesign = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, {\n  defaultGroupAttr: _constants__WEBPACK_IMPORTED_MODULE_1__.defaultSettingsAttrs.text\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Font, {\n  groupLabel: __('Title Text', 'd5-tutorial-module-conversion'),\n  attrName: \"titleFont\",\n  fieldLabel: __('Title', 'd5-tutorial-module-conversion'),\n  hideElements: {\n    headingLevel: false\n  },\n  defaultGroupAttr: _constants__WEBPACK_IMPORTED_MODULE_1__.defaultSettingsAttrs.titleFont\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FontBodyGroup, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Sizing, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Spacing, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Border, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BoxShadow, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Filters, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Transform, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Animation, null));\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/settings-design.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/index.js":
/*!*********************************************!*\
  !*** ./visual-builder/src/modules/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dynamic_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-module */ \"./visual-builder/src/modules/dynamic-module/index.js\");\n/* harmony import */ var _static_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static-module */ \"./visual-builder/src/modules/static-module/index.js\");\n\n\nconst {\n  addAction\n} = wp.hooks;\nconst {\n  registerModule\n} = divi.moduleLibrary;\naddAction('moduleLibrary.registerModuleLibraryStore.after', 'dtmc', () => {\n  registerModule(_static_module__WEBPACK_IMPORTED_MODULE_1__.staticModuleMetadata, _static_module__WEBPACK_IMPORTED_MODULE_1__.staticModule);\n  registerModule(_dynamic_module__WEBPACK_IMPORTED_MODULE_0__.dynamicModuleMetadata, _dynamic_module__WEBPACK_IMPORTED_MODULE_0__.dynamicModule);\n});\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/index.js?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/constants.js":
/*!***************************************************************!*\
  !*** ./visual-builder/src/modules/static-module/constants.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultAttrs\": () => (/* binding */ defaultAttrs),\n/* harmony export */   \"defaultPrintedStyleAttrs\": () => (/* binding */ defaultPrintedStyleAttrs),\n/* harmony export */   \"defaultSettingsAttrs\": () => (/* binding */ defaultSettingsAttrs)\n/* harmony export */ });\nconst {\n  __\n} = wp.i18n;\nconst {\n  mergeAttrs\n} = divi.moduleUtils;\n\n/**\n * Default attributes. Default attributes that are needed on rendered module\n * as well on the module's settings modal.\n */\nconst defaultAttrs = {\n  adminLabel: {\n    desktop: {\n      value: __('DTMC Static Module', 'd5-tutorial-module-conversion')\n    }\n  },\n  text: {\n    text: {\n      desktop: {\n        value: {\n          color: 'dark'\n        }\n      }\n    }\n  },\n  titleFont: {\n    font: {\n      desktop: {\n        value: {\n          headingLevel: 'h2'\n        }\n      }\n    }\n  }\n};\n\n/**\n * Default attributes that is inferred from module's static style. Rendered module doesn't\n * need this because static style already executes style that resulting identical output should\n * these attributes are being rendered.\n */\nconst defaultPrintedStyleAttrs = {};\n\n/**\n * Combination of default attributes and defaults that are inferred from printed style attributes\n * that are needed by module's setting modal to render correct `defaultValue`.\n */\nconst defaultSettingsAttrs = mergeAttrs({\n  defaultAttrs,\n  attrs: defaultPrintedStyleAttrs\n});\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/constants.js?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/custom-css.js":
/*!****************************************************************!*\
  !*** ./visual-builder/src/modules/static-module/custom-css.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cssFields\": () => (/* binding */ cssFields)\n/* harmony export */ });\n/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.json */ \"./visual-builder/src/modules/static-module/module.json\");\n\nconst {\n  __\n} = wp.i18n;\nconst customCssFields = _module_json__WEBPACK_IMPORTED_MODULE_0__.customCssFields;\n\n// Add labels to custom CSS fields for Visual Builder\ncustomCssFields.title.label = __('Title', 'd5-tutorial-module-conversion');\ncustomCssFields.content.label = __('Content', 'd5-tutorial-module-conversion');\nconst cssFields = {\n  ...customCssFields\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/custom-css.js?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/edit.jsx":
/*!***********************************************************!*\
  !*** ./visual-builder/src/modules/static-module/edit.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StaticModuleEdit\": () => (/* binding */ StaticModuleEdit)\n/* harmony export */ });\n/* harmony import */ var _module_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-styles */ \"./visual-builder/src/modules/static-module/module-styles.jsx\");\n/* harmony import */ var _module_script_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-script-data */ \"./visual-builder/src/modules/static-module/module-script-data.jsx\");\n/* harmony import */ var _module_classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-classnames */ \"./visual-builder/src/modules/static-module/module-classnames.js\");\n\n\n\nconst {\n  ModuleContainer\n} = divi.module;\nconst StaticModuleEdit = ({\n  attrs,\n  id,\n  name\n}) => {\n  const HeaderLevel = attrs?.titleFont?.font?.desktop?.value?.headingLevel ?? 'h2';\n  const title = attrs?.title?.desktop?.value ?? '';\n  const content = attrs?.content?.desktop?.value ?? '';\n  return /*#__PURE__*/React.createElement(ModuleContainer, {\n    attrs: attrs,\n    id: id,\n    name: name,\n    scriptDataComponent: _module_script_data__WEBPACK_IMPORTED_MODULE_1__.ModuleScriptData,\n    stylesComponent: _module_styles__WEBPACK_IMPORTED_MODULE_0__.ModuleStyles,\n    classnamesFunction: _module_classnames__WEBPACK_IMPORTED_MODULE_2__.moduleClassnames\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"et_pb_module_inner\"\n  }, /*#__PURE__*/React.createElement(HeaderLevel, {\n    className: \"dtmc_static_module_title\"\n  }, title), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"dtmc_static_module_content\",\n    dangerouslySetInnerHTML: {\n      __html: content\n    }\n  })));\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/edit.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/index.js":
/*!***********************************************************!*\
  !*** ./visual-builder/src/modules/static-module/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"staticModule\": () => (/* binding */ staticModule),\n/* harmony export */   \"staticModuleMetadata\": () => (/* binding */ staticModuleMetadata)\n/* harmony export */ });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./visual-builder/src/modules/static-module/edit.jsx\");\n/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module.json */ \"./visual-builder/src/modules/static-module/module.json\");\n/* harmony import */ var _settings_advanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-advanced */ \"./visual-builder/src/modules/static-module/settings-advanced.jsx\");\n/* harmony import */ var _settings_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-content */ \"./visual-builder/src/modules/static-module/settings-content.jsx\");\n/* harmony import */ var _settings_design__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-design */ \"./visual-builder/src/modules/static-module/settings-design.jsx\");\n/* harmony import */ var _placeholder_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placeholder-content */ \"./visual-builder/src/modules/static-module/placeholder-content.js\");\n\n\n\n\n\n\nconst staticModuleMetadata = _module_json__WEBPACK_IMPORTED_MODULE_1__;\nconst staticModule = {\n  renderers: {\n    edit: _edit__WEBPACK_IMPORTED_MODULE_0__.StaticModuleEdit\n  },\n  settings: {\n    content: _settings_content__WEBPACK_IMPORTED_MODULE_3__.SettingsContent,\n    design: _settings_design__WEBPACK_IMPORTED_MODULE_4__.SettingsDesign,\n    advanced: _settings_advanced__WEBPACK_IMPORTED_MODULE_2__.SettingsAdvanced\n  },\n  placeholderContent: _placeholder_content__WEBPACK_IMPORTED_MODULE_5__.placeholderContent\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/index.js?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/module-classnames.js":
/*!***********************************************************************!*\
  !*** ./visual-builder/src/modules/static-module/module-classnames.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moduleClassnames\": () => (/* binding */ moduleClassnames)\n/* harmony export */ });\nconst {\n  animationClassnames,\n  textOptionsClassnames\n} = window?.divi?.module;\nconst moduleClassnames = ({\n  classnamesInstance,\n  attrs\n}) => {\n  // Text Options.\n  classnamesInstance.add(textOptionsClassnames(attrs?.text, {\n    orientation: false\n  }));\n\n  // Animation Options.\n  classnamesInstance.add(animationClassnames(attrs?.animation));\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/module-classnames.js?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/module-script-data.jsx":
/*!*************************************************************************!*\
  !*** ./visual-builder/src/modules/static-module/module-script-data.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModuleScriptData\": () => (/* binding */ ModuleScriptData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  useStickyScriptDataContainer\n} = window?.divi?.module || {};\nconst ModuleScriptData = ({\n  attrs,\n  selector,\n  id\n}) => {\n  useStickyScriptDataContainer({\n    affectingAttrs: {\n      position: attrs?.position,\n      sizing: attrs?.sizing\n    },\n    attr: attrs?.sticky,\n    id,\n    selector\n  });\n  return null;\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/module-script-data.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/module-styles.jsx":
/*!********************************************************************!*\
  !*** ./visual-builder/src/modules/static-module/module-styles.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModuleStyles\": () => (/* binding */ ModuleStyles)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-css */ \"./visual-builder/src/modules/static-module/custom-css.js\");\n\n\nconst {\n  AnimationStyle,\n  BackgroundStyle,\n  BorderStyle,\n  BoxShadowStyle,\n  CssStyle,\n  DisabledOnStyle,\n  FiltersStyle,\n  FontBodyStyle,\n  FontStyle,\n  OverflowStyle,\n  PositionStyle,\n  SizingStyle,\n  SpacingStyle,\n  StyleContainer,\n  TextStyle,\n  TransformStyle,\n  ZIndexStyle\n} = window.divi.module;\n\n/**\n * Module style component for static module\n */\nconst ModuleStyles = ({\n  attrs,\n  settings,\n  orderClass,\n  mode,\n  state,\n  noStyleTag\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyleContainer, {\n  mode: mode,\n  state: state,\n  noStyleTag: noStyleTag\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BackgroundStyle, {\n  selector: orderClass,\n  attr: attrs.background\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextStyle, {\n  selector: `${orderClass} .dtmc_static_module_content`,\n  attr: attrs?.text,\n  propertySelectors: {\n    textShadow: {\n      desktop: {\n        value: {\n          'text-shadow': `${orderClass} .dtmc_static_module_content`\n        }\n      }\n    }\n  }\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FontStyle, {\n  selector: [`${orderClass} h2.dtmc_static_module_title`, `${orderClass} h1.dtmc_static_module_title`, `${orderClass} h3.dtmc_static_module_title`, `${orderClass} h4.dtmc_static_module_title`, `${orderClass} h5.dtmc_static_module_title`, `${orderClass} h6.dtmc_static_module_title`].join(', '),\n  attr: attrs.titleFont,\n  headingLevel: \"h2\",\n  important: true\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FontBodyStyle, {\n  selector: `${orderClass} .dtmc_static_module_content`,\n  attr: attrs.bodyFont,\n  important: {\n    body: {\n      font: {\n        desktop: {\n          value: {\n            color: true\n          }\n        }\n      }\n    }\n  }\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SpacingStyle, {\n  selector: orderClass,\n  attr: attrs.spacing,\n  important: true\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SizingStyle, {\n  selector: orderClass,\n  attr: attrs.sizing,\n  propertySelectors: {\n    desktop: {\n      value: {\n        'margin-left': `${orderClass}.et_pb_module`,\n        'margin-right': `${orderClass}.et_pb_module`\n      }\n    }\n  },\n  important: {\n    desktop: {\n      value: {\n        'margin-left': true,\n        'margin-right': true\n      }\n    }\n  }\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BorderStyle, {\n  selector: orderClass,\n  attr: attrs.border\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BoxShadowStyle, {\n  selector: orderClass,\n  attr: attrs.boxShadow\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FiltersStyle, {\n  selector: orderClass,\n  attr: attrs.filter\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TransformStyle, {\n  selector: orderClass,\n  attr: attrs.transform\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AnimationStyle, {\n  selector: orderClass,\n  attr: attrs.animation\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CssStyle, {\n  selector: orderClass,\n  attr: attrs.css,\n  cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_1__.cssFields\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DisabledOnStyle, {\n  selector: orderClass,\n  attr: attrs.disabledOn,\n  disabledModuleVisibility: settings?.disabledModuleVisibility\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OverflowStyle, {\n  selector: orderClass,\n  attr: attrs.overflow\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PositionStyle, {\n  selector: orderClass,\n  attr: attrs.position\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ZIndexStyle, {\n  selector: orderClass,\n  attr: attrs.zIndex\n}));\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/module-styles.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/placeholder-content.js":
/*!*************************************************************************!*\
  !*** ./visual-builder/src/modules/static-module/placeholder-content.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"placeholderContent\": () => (/* binding */ placeholderContent)\n/* harmony export */ });\nconst placeholder = window?.divi?.module?.placeholderContent;\nconst placeholderContent = {\n  title: {\n    desktop: {\n      value: placeholder?.title\n    }\n  },\n  content: {\n    desktop: {\n      value: placeholder.body\n    }\n  }\n};\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/placeholder-content.js?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/settings-advanced.jsx":
/*!************************************************************************!*\
  !*** ./visual-builder/src/modules/static-module/settings-advanced.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsAdvanced\": () => (/* binding */ SettingsAdvanced)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-css */ \"./visual-builder/src/modules/static-module/custom-css.js\");\n\n\nconst {\n  Css,\n  IdClasses,\n  PositionGroup,\n  ScrollGroup,\n  Transition,\n  Visibility\n} = divi.module;\n\n/**\n * Advanced Settings panel for the Static Module.\n */\nconst SettingsAdvanced = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IdClasses, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Css, {\n  mainSelector: \".static-module\" // This is the main selector for the module.\n  ,\n  cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_1__.cssFields // This is the list of CSS fields.\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Visibility, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Transition, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PositionGroup, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ScrollGroup, null));\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/settings-advanced.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/settings-content.jsx":
/*!***********************************************************************!*\
  !*** ./visual-builder/src/modules/static-module/settings-content.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsContent\": () => (/* binding */ SettingsContent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./visual-builder/src/modules/static-module/constants.js\");\n\n\nconst {\n  __\n} = wp.i18n;\nconst {\n  RichTextContainer,\n  TextContainer\n} = divi.fieldLibrary;\nconst {\n  GroupContainer\n} = divi.modal;\nconst {\n  AdminLabel,\n  Background,\n  FieldContainer,\n  LinkOptions\n} = divi.module;\n\n/**\n * Content Settings panel for the Static Module.\n */\nconst SettingsContent = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GroupContainer, {\n  id: \"mainContent\",\n  title: __('Text', 'd5-tutorial-module-conversion')\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FieldContainer, {\n  attrName: \"title\",\n  label: __('Title', 'd5-tutorial-module-conversion'),\n  description: __('Text entered here will appear as title.', 'd5-tutorial-module-conversion'),\n  sticky: false\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextContainer, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FieldContainer, {\n  attrName: \"content\",\n  label: __('Content', 'd5-tutorial-module-conversion'),\n  description: __('Content entered here will appear inside the module.', 'd5-tutorial-module-conversion'),\n  sticky: false\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RichTextContainer, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LinkOptions, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Background, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AdminLabel, {\n  defaultGroupAttr: _constants__WEBPACK_IMPORTED_MODULE_1__.defaultSettingsAttrs.adminLabel\n}));\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/settings-content.jsx?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/settings-design.jsx":
/*!**********************************************************************!*\
  !*** ./visual-builder/src/modules/static-module/settings-design.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsDesign\": () => (/* binding */ SettingsDesign)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./visual-builder/src/modules/static-module/constants.js\");\n\nconst {\n  __\n} = wp.i18n;\nconst {\n  Animation,\n  Border,\n  BoxShadow,\n  Filters,\n  Font,\n  FontBodyGroup,\n  Sizing,\n  Spacing,\n  Text,\n  Transform\n} = divi.module;\n\n\n/**\n * Design Settings panel for the Static Module.\n */\nconst SettingsDesign = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Text, {\n  defaultGroupAttr: _constants__WEBPACK_IMPORTED_MODULE_1__.defaultSettingsAttrs.text\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Font, {\n  groupLabel: __('Title Text', 'd5-tutorial-module-conversion'),\n  attrName: \"titleFont\",\n  fieldLabel: __('Title', 'd5-tutorial-module-conversion'),\n  hideElements: {\n    headingLevel: false\n  },\n  defaultGroupAttr: _constants__WEBPACK_IMPORTED_MODULE_1__.defaultSettingsAttrs.titleFont\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FontBodyGroup, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Sizing, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Spacing, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Border, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BoxShadow, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Filters, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Transform, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Animation, null));\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/settings-design.jsx?");

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

eval("module.exports = JSON.parse('{\"name\":\"dtmc/dynamic-module\",\"d4Shortcode\":\"dtmc_dynamic_module\",\"title\":\"DTMC Dynamic Module\",\"titles\":\"DTMC Dynamic Modules\",\"moduleIcon\":\"dtmc/module-dynamic\",\"category\":\"module\",\"attributes\":{\"text\":{\"type\":\"object\",\"default\":{\"text\":{\"desktop\":{\"value\":{\"color\":\"dark\"}}}}},\"titleFont\":{\"type\":\"object\",\"default\":{\"font\":{\"desktop\":{\"value\":{\"headingLevel\":\"h2\"}}}}}},\"customCssFields\":{\"title\":{\"subName\":\"title\",\"selectorSuffix\":\" .dtmc_dynamic_module_title\"}}}');\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/dynamic-module/module.json?");

/***/ }),

/***/ "./visual-builder/src/modules/static-module/module.json":
/*!**************************************************************!*\
  !*** ./visual-builder/src/modules/static-module/module.json ***!
  \**************************************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"name\":\"dtmc/static-module\",\"d4Shortcode\":\"dtmc_static_module\",\"title\":\"DTMC Static Module\",\"titles\":\"DTMC Static Modules\",\"moduleIcon\":\"divi/module-cta\",\"category\":\"module\",\"attributes\":{\"text\":{\"type\":\"object\",\"default\":{\"text\":{\"desktop\":{\"value\":{\"color\":\"dark\"}}}}},\"titleFont\":{\"type\":\"object\",\"default\":{\"font\":{\"desktop\":{\"value\":{\"headingLevel\":\"h2\"}}}}}},\"customCssFields\":{\"title\":{\"subName\":\"title\",\"selectorSuffix\":\" .dtmc_static_module_title\"},\"content\":{\"subName\":\"content\",\"selectorSuffix\":\" .dtmc_static_module_content\"}}}');\n\n//# sourceURL=webpack://d5-tutorial-module-conversion/./visual-builder/src/modules/static-module/module.json?");

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