webpackHotUpdate("static/development/pages/poc.js",{

/***/ "./pages/poc.js":
/*!**********************!*\
  !*** ./pages/poc.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nivo_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nivo/line */ "./node_modules/@nivo/line/dist/nivo-line.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api */ "./services/api.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/home/thomas/repos/retraites/simulateur/pages/poc.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var SimpleForm = function SimpleForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      raw = _useState[0],
      setRaw = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetch('http://localhost:3000/data.xlsx').then(function (response) {
      return response.arrayBuffer();
    }).then(function (blob) {
      var raw = xlsx__WEBPACK_IMPORTED_MODULE_1___default.a.read(new Uint8Array(blob), {
        type: "array"
      });
      setRaw(raw);
      console.log(raw);
    });
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "TEST"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["withProvider"])(SimpleForm));

/***/ })

})
//# sourceMappingURL=poc.js.c6f14db27ef24bbb1c44.hot-update.js.map