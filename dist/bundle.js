/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Form/Form.ts":
/*!*************************************!*\
  !*** ./src/components/Form/Form.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ \"./src/store/index.ts\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst userRecipes = {\n    name: \"\",\n    ingredients: \"\",\n    instructions: \"\",\n    img: \"\",\n};\nclass Form extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c, _d, _e, _f, _g, _h, _j;\n        const name = this.ownerDocument.createElement('input');\n        const lName = this.ownerDocument.createElement('label');\n        lName.textContent = \"Nombre de la receta\";\n        name.addEventListener(\"change\", (e) => {\n            userRecipes.name = e.target.value;\n        });\n        const ingredients = this.ownerDocument.createElement('input');\n        const lIngredients = this.ownerDocument.createElement('label');\n        lIngredients.textContent = \"Ingredientes\";\n        ingredients.addEventListener(\"change\", (e) => {\n            userRecipes.ingredients = e.target.value;\n        });\n        const instructions = this.ownerDocument.createElement('input');\n        const lInstructions = this.ownerDocument.createElement('label');\n        lInstructions.textContent = \"Instrucciones\";\n        instructions.addEventListener(\"change\", (e) => {\n            userRecipes.instructions = e.target.value;\n        });\n        const img = this.ownerDocument.createElement('input');\n        const lImg = this.ownerDocument.createElement('label');\n        lImg.textContent = \"Imagen\";\n        img.type = \"file\";\n        img.addEventListener(\"change\", (e) => {\n            userRecipes.img = e.target.value;\n        });\n        const submit = this.ownerDocument.createElement('button');\n        submit.textContent = \"Submit\";\n        submit.addEventListener(\"click\", () => __awaiter(this, void 0, void 0, function* () {\n            console.log(userRecipes);\n            (0,_store__WEBPACK_IMPORTED_MODULE_0__.dispatch)(yield (0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.saveRecipe)(userRecipes));\n        }));\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(lName);\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(name);\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(lIngredients);\n        (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(ingredients);\n        (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.appendChild(lInstructions);\n        (_f = this.shadowRoot) === null || _f === void 0 ? void 0 : _f.appendChild(instructions);\n        (_g = this.shadowRoot) === null || _g === void 0 ? void 0 : _g.appendChild(lImg);\n        (_h = this.shadowRoot) === null || _h === void 0 ? void 0 : _h.appendChild(img);\n        (_j = this.shadowRoot) === null || _j === void 0 ? void 0 : _j.appendChild(submit);\n    }\n}\ncustomElements.define('app-form', Form);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Form/Form.ts?");

/***/ }),

/***/ "./src/components/Recipes/recipes.ts":
/*!*******************************************!*\
  !*** ./src/components/Recipes/recipes.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Recipes extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c, _d;\n        const name = this.ownerDocument.createElement('h1');\n        const ingredients = this.ownerDocument.createElement('h2');\n        const instructions = this.ownerDocument.createElement('h2');\n        const img = this.ownerDocument.createElement('img');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(name);\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(ingredients);\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(instructions);\n        (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(img);\n    }\n}\ncustomElements.define('app-recipes', Recipes);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recipes);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Recipes/recipes.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": () => (/* reexport safe */ _Form_Form__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Recipes\": () => (/* reexport safe */ _Recipes_recipes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form/Form */ \"./src/components/Form/Form.ts\");\n/* harmony import */ var _Recipes_recipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Recipes/recipes */ \"./src/components/Recipes/recipes.ts\");\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const form = this.ownerDocument.createElement('app-form');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(form);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: 'return' outside of function (15:4)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| {\\n|     await firebase.saveRecipesInDB(product);\\n>     return {\\n|         action: SomeActions.SAVE_RECIPE,\\n|         payload: product,\");\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addObserver\": () => (/* binding */ addObserver),\n/* harmony export */   \"appState\": () => (/* binding */ appState),\n/* harmony export */   \"dispatch\": () => (/* binding */ dispatch)\n/* harmony export */ });\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/storage */ \"./src/utils/storage.ts\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\n\n\nconst emptyState = {\n    products: [],\n};\nlet appState = _utils_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get({\n    key: _utils_storage__WEBPACK_IMPORTED_MODULE_0__.PersistanceKeys.STORE,\n    defaultValue: emptyState,\n});\nlet observers = [];\nconst persistStore = (state) => _utils_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set({ key: _utils_storage__WEBPACK_IMPORTED_MODULE_0__.PersistanceKeys.STORE, value: state });\nconst notifyObservers = () => observers.forEach((o) => o.render());\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(appState));\n    const newState = (0,_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer)(action, clone);\n    appState = newState;\n    persistStore(newState);\n    notifyObservers();\n};\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n\nconst reducer = (actions, state) => {\n    const { action, payload } = actions;\n    switch (action) {\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.SomeActions.SAVE_RECIPE:\n            state.products = [...state.products, payload];\n            return state;\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SomeActions\": () => (/* binding */ SomeActions)\n/* harmony export */ });\nvar SomeActions;\n(function (SomeActions) {\n    SomeActions[\"SAVE_RECIPE\"] = \"SAVE_RECIPE\";\n})(SomeActions || (SomeActions = {}));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/types/store.ts?");

/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PersistanceKeys\": () => (/* binding */ PersistanceKeys),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar PersistanceKeys;\n(function (PersistanceKeys) {\n    PersistanceKeys[\"STORE\"] = \"STORE\";\n})(PersistanceKeys || (PersistanceKeys = {}));\nconst get = ({ key, defaultValue, }) => {\n    const value = localStorage.getItem(key) || sessionStorage.getItem(key);\n    return value ? JSON.parse(value) : defaultValue;\n};\nconst set = ({ key, value, session = false, }) => {\n    const storage = session ? sessionStorage : localStorage;\n    const parsed = JSON.stringify(value);\n    storage.setItem(key, parsed);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    get,\n    set,\n});\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/storage.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;