webpackHotUpdate("static/development/pages/poc.js",{

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
        id: 'salaire',
        data: data
      }, {
        id: 'test',
        data: data.map(function (e) {
          return {
            x: e.x,
            y: e.y * 0.8
          };
        })
      }]);
    });
  }, []);
  return __jsx("div", {
    style: {
      height: "80vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "TEST"), __jsx(_nivo_line__WEBPACK_IMPORTED_MODULE_5__["ResponsiveLine"], {
    data: salaryPlotData,
    enablePoints: false,
    margin: {
      top: 50,
      right: 110,
      bottom: 50,
      left: 60
    },
    xScale: {
      type: "linear"
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
      lineNumber: 37
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["withProvider"])(SimpleForm));

/***/ })

})
//# sourceMappingURL=poc.js.7481a1f8c185e1d4db1a.hot-update.js.map