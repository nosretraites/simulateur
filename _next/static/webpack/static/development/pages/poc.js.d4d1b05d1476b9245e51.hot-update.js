webpackHotUpdate("static/development/pages/poc.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "./node_modules/core-js/library/fn/parse-float.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/core-js/library/modules/es6.parse-float.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").parseFloat;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_parse-float.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").parseFloat;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/library/modules/_string-trim.js").trim;

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.parse-float.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.parse-float.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/library/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "./pages/poc.js":
/*!**********************!*\
  !*** ./pages/poc.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nivo_line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nivo/line */ "./node_modules/@nivo/line/dist/nivo-line.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api */ "./services/api.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");


var _jsxFileName = "/home/thomas/repos/retraites/simulateur/pages/poc.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var SimpleForm = function SimpleForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      raw = _useState[0],
      setRaw = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      salaryPlotData = _useState2[0],
      setSalaryPlotData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetch('http://localhost:3000/data.xlsx').then(function (response) {
      return response.arrayBuffer();
    }).then(function (blob) {
      var raw = xlsx__WEBPACK_IMPORTED_MODULE_4___default.a.read(new Uint8Array(blob), {
        type: "array"
      });
      setRaw(raw);
      var emp = xlsx__WEBPACK_IMPORTED_MODULE_4___default.a.utils.sheet_to_csv(raw.Sheets.emp);
      var json = d3__WEBPACK_IMPORTED_MODULE_3__["csvParse"](emp);
      var data = json.map(function (row) {
        return {
          x: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(row.age),
          y: _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(row.salaire)
        };
      });
      setSalaryPlotData([{
        id: 'id',
        data: data
      }]);
    });
  }, []);
  return __jsx("div", {
    style: {
      height: "80vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "TEST"), __jsx(_nivo_line__WEBPACK_IMPORTED_MODULE_5__["ResponsiveLine"], {
    data: salaryPlotData,
    margin: {
      top: 50,
      right: 110,
      bottom: 50,
      left: 60
    },
    xScale: {
      type: "point"
    },
    yScale: {
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false
    },
    axisTop: null,
    axisRight: null,
    axisBottom: {
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Âge",
      legendOffset: 36,
      legendPosition: "middle"
    },
    axisLeft: {
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Salaire",
      legendOffset: -40,
      legendPosition: "middle"
    },
    colors: {
      scheme: "nivo"
    },
    pointSize: 10,
    pointColor: {
      theme: "background"
    },
    pointBorderWidth: 2,
    pointBorderColor: {
      from: "serieColor"
    },
    pointLabel: "y",
    pointLabelYOffset: -12,
    useMesh: true,
    legends: [{
      anchor: "bottom-right",
      direction: "column",
      justify: false,
      translateX: 100,
      translateY: 0,
      itemsSpacing: 0,
      itemDirection: "left-to-right",
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: "circle",
      symbolBorderColor: "rgba(0, 0, 0, .5)",
      effects: [{
        on: "hover",
        style: {
          itemBackground: "rgba(0, 0, 0, .03)",
          itemOpacity: 1
        }
      }]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["withProvider"])(SimpleForm));

/***/ })

})
//# sourceMappingURL=poc.js.d4d1b05d1476b9245e51.hot-update.js.map