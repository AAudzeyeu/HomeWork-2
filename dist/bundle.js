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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _post_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.js */ \"./src/post.js\");\n\r\nconst post = new _post_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Webpack Post Title');\r\n\r\nconsole.log('Post to String:', post.toString());\r\n\n\n//# sourceURL=webpack://testwebpack/./src/index.js?");

/***/ }),

/***/ "./src/post.js":
/*!*********************!*\
  !*** ./src/post.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post)\n/* harmony export */ });\n// if (true) {\r\n//     let a = 5;\r\n// }\r\n\r\n// console.log(a);\r\n\r\n// const arr = [1, 2, 3];\r\n\r\n// console.log(arr);\r\n\r\n// arr.push(2);\r\n// console.log(arr);\r\n\r\n// setTimeout(() => console.log(1), 1000)\r\n\r\n// const log = function() {\r\n//     console.log(this);\r\n// }\r\n\r\n// const arrowLog = () => {\r\n//     console.log(this);\r\n// }\r\n\r\n// const person = {\r\n//     name: 'Elena',\r\n//     age: 18,\r\n//     log: log,\r\n//     arrowLog: arrowLog,\r\n//     delayLog: function() {\r\n//         setTimeout(() => {\r\n//             console.log(this.name + ' ' + this.age);\r\n//         }, 500)\r\n//     }\r\n// }\r\n\r\n// person.delayLog();\r\n\r\n// const hi = 'Hello';\r\n// const inVisible = () => Math.random() >= 0.5;\r\n\r\n\r\n// const template = `\r\n//     ${inVisible() ? \"Visible\" : \"\"}\r\n//     ${hi} \r\n\r\n// `\r\n\r\n// console.log(template.trim());\r\n\r\n// class Person {\r\n//     constructor(name) {\r\n//         this.name = name;\r\n//     };\r\n\r\n//     sayHi() {\r\n//         console.log(\"Hello\".concat(` ${this.name}`));\r\n//     }\r\n// }\r\n\r\n// const artyom = new Person('Artyom');\r\n// // artyom.sayHi();\r\n\r\n// class NoResidents extends Person {\r\n//     constructor(name, residents) {\r\n//         super(name);\r\n//         this._residents = residents;\r\n//     }\r\n\r\n//     get residents() {\r\n//         return this._residents;\r\n//     }\r\n//     set residents(residents) {\r\n//         if (residents.length < 2) {\r\n//             console.log('Validation Failed')\r\n//         } else {\r\n//             this._residents = residents;\r\n//         }\r\n//     }\r\n\r\n//     sayHi() {\r\n//         super.sayHi();\r\n//         console.log(`Hello ${this.name} are you ${this._residents}`);\r\n//     }\r\n\r\n// }\r\n// const egor = new NoResidents('Egor', 'NoResidents');\r\n\r\n// // egor.sayHi();\r\n// console.log(egor.residents);\r\n// egor.residents = '1'\r\n// console.log(egor.residents);\r\n\r\n\r\nclass Post {\r\n    constructor(title) {\r\n        this.title = title\r\n        this.data = new Date()\r\n    };\r\n\r\n    toString() {\r\n        return JSON.stringify({\r\n            title: this.title,\r\n            date: this.data.toJSON()\r\n        })\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://testwebpack/./src/post.js?");

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