"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/build-client.ts":
/*!*****************************!*\
  !*** ./api/build-client.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ req  })=>{\n    if (true) {\n        // We are on the server\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n            baseURL: \"http://ingress-nginx-controller.ingress-nginx.svc.cluster.local\",\n            headers: req.headers\n        });\n    } else {}\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixpRUFBZSxDQUFDLEVBQUVDLEdBQUcsR0FBRSxHQUFLO0lBQzFCLElBQUksSUFBNkIsRUFBRTtRQUNqQyx1QkFBdUI7UUFFdkIsT0FBT0QsbURBQVksQ0FBQztZQUNsQkcsT0FBTyxFQUNMLGlFQUFpRTtZQUNuRUMsT0FBTyxFQUFFSCxHQUFHLENBQUNHLE9BQU87U0FDckIsQ0FBQyxDQUFDO0tBQ0osTUFBTSxFQUtOO0NBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpY2tldC1jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LnRzP2Q0NmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgcmVxIH0pID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gV2UgYXJlIG9uIHRoZSBzZXJ2ZXJcblxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVSTDpcbiAgICAgICAgJ2h0dHA6Ly9pbmdyZXNzLW5naW54LWNvbnRyb2xsZXIuaW5ncmVzcy1uZ2lueC5zdmMuY2x1c3Rlci5sb2NhbCcsXG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBXZSBtdXN0IGJlIG9uIHRoZSBicm93c2VyXG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XG4gICAgICBiYXNlVXJsOiAnLycsXG4gICAgfSk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJyZXEiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsImJhc2VVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/build-client.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.ts\");\n\n\nconst LandingPage = ({ currentUser  })=>{\n    return currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are signed in\"\n    }, void 0, false, {\n        fileName: \"/Users/rkjha/codebase/node-microservice-ticketing-app/ticket-client/pages/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are NOT signed in\"\n    }, void 0, false, {\n        fileName: \"/Users/rkjha/codebase/node-microservice-ticketing-app/ticket-client/pages/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\nLandingPage.getInitialProps = async (context)=>{\n    console.log(\"LANDING PAGE!\");\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(context);\n    const { data  } = await client.get(\"/api/users/currentuser\");\n    return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDOEM7QUFJOUMsTUFBTUMsV0FBVyxHQUFhLENBQUMsRUFBRUMsV0FBVyxHQUFFLEdBQUs7SUFDakQsT0FBT0EsV0FBVyxpQkFDaEIsOERBQUNDLElBQUU7a0JBQUMsbUJBQWlCOzs7OztpQkFBSyxpQkFFMUIsOERBQUNBLElBQUU7a0JBQUMsdUJBQXFCOzs7OztpQkFBSyxDQUM5QjtDQUNIO0FBRURGLFdBQVcsQ0FBQ0csZUFBZSxHQUFHLE9BQU1DLE9BQU8sR0FBSTtJQUM3Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0IsTUFBTUMsTUFBTSxHQUFHUiw2REFBVyxDQUFDSyxPQUFPLENBQUM7SUFDbkMsTUFBTSxFQUFFSSxJQUFJLEdBQUUsR0FBRyxNQUFNRCxNQUFNLENBQUNFLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztJQUUzRCxPQUFPRCxJQUFJLENBQUM7Q0FDYixDQUFDO0FBRUYsaUVBQWVSLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWNrZXQtY2xpZW50Ly4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgYnVpbGRDbGllbnQgZnJvbSAnLi4vYXBpL2J1aWxkLWNsaWVudCc7XG5cblxuXG5jb25zdCBMYW5kaW5nUGFnZTogTmV4dFBhZ2UgPSAoeyBjdXJyZW50VXNlciB9KSA9PiB7XG4gIHJldHVybiBjdXJyZW50VXNlciA/IChcbiAgICA8aDE+WW91IGFyZSBzaWduZWQgaW48L2gxPlxuICApIDogKFxuICAgIDxoMT5Zb3UgYXJlIE5PVCBzaWduZWQgaW48L2gxPlxuICApO1xufTtcblxuTGFuZGluZ1BhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY29udGV4dCA9PiB7XG4gIGNvbnNvbGUubG9nKCdMQU5ESU5HIFBBR0UhJyk7XG4gIGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGNvbnRleHQpO1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5nZXQoJy9hcGkvdXNlcnMvY3VycmVudHVzZXInKTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlXG4iXSwibmFtZXMiOlsiYnVpbGRDbGllbnQiLCJMYW5kaW5nUGFnZSIsImN1cnJlbnRVc2VyIiwiaDEiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsImNsaWVudCIsImRhdGEiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();