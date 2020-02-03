webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_restyle_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/restyle.css */ "./styles/restyle.css");
/* harmony import */ var _styles_restyle_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_restyle_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/api */ "./services/api.js");



var _jsxFileName = "/home/thomas/repos/retraites/simulateur/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var carrieres = [{
  id: 'SMIC',
  label: 'SMIC'
}, {
  id: 'COR1',
  label: 'Cadre à carrière sans interruption'
}, {
  id: 'COR2',
  label: 'Non cadre à carrière sans interruption'
}, {
  id: 'COR3',
  label: 'Non cadre à carrière interrompue par du chômage'
}, {
  id: 'COR4',
  label: 'Non cadre avec une interruption de carrière pour enfant'
}];

var SimpleForm = function SimpleForm() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_9__["Context"]),
      updateData = _useContext.updateData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      pending = _useState[0],
      setPending = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(22),
      start = _useState2[0],
      setStart = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('COR2'),
      career = _useState3[0],
      setCareer = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      timerMessage = _useState4[0],
      setTimerMessage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      result = _useState5[0],
      setResult = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setResult({
      past: 75,
      current: 60,
      age: 63,
      delay: 3
    });
  }, []);
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_4__["useFormik"])({
    initialValues: {
      naissance: 1984,
      debut: start,
      carriere: career,
      proportion: 1
    },
    onSubmit: function onSubmit(values) {
      setPending(true);
      setTimerMessage('tic. tac. tic. tac.');
      Object(_services_api__WEBPACK_IMPORTED_MODULE_10__["postSimpleForm"])(values).then(function (blob) {
        var raw = xlsx__WEBPACK_IMPORTED_MODULE_7___default.a.read(new Uint8Array(blob), {
          type: "array"
        });
        var data = xlsx__WEBPACK_IMPORTED_MODULE_7___default.a.utils.sheet_to_csv(raw.Sheets.fullset);
        var json = d3__WEBPACK_IMPORTED_MODULE_6__["csvParse"](data);
        var past, age, current, delay;
        json.forEach(function (r) {
          if (r.anaiss == '1960' && r.scenario == 'actuel') {
            age = r.age;
            past = Math.round(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(r.TR_brut) * 100);
          }

          if (r.anaiss == '1980' && r.scenario == 'reforme' && r.age == age) {
            current = Math.round(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(r.TR_brut) * 100);
          }

          if (current && !delay && r.anaiss == '1980' && r.scenario == 'reforme') {
            var test = Math.round(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_2___default()(r.TR_brut) * 100);

            if (test >= past) {
              delay = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(r.age) - _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(age);
            }
          }
        });
        setResult({
          past: past,
          current: current,
          delay: delay,
          age: age
        });
      })["finally"](function () {
        setPending(false);
        setTimerMessage(false);
      });
    }
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Acc\xE9dez enfin \xE0 l'impact de la r\xE9forme sur votre retraite", __jsx("img", {
    src: "/logo_collectif.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }))), __jsx("form", {
    onSubmit: formik.handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    className: "inputs row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Ann\xE9e de naissance", __jsx("input", {
    id: "naissance",
    name: "naissance",
    type: "number",
    min: "1930",
    max: "2020",
    step: "1",
    onChange: formik.handleChange,
    value: formik.values.naissance,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "\xC2ge de d\xE9but de carri\xE8re", __jsx("input", {
    id: "debut",
    name: "debut",
    type: "number",
    min: "12",
    max: "77",
    step: "1",
    onChange: formik.handleChange,
    value: formik.values.debut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Carri\xE8re"), __jsx("div", {
    className: "carrieres",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, carrieres.map(function (p) {
    var _jsx;

    return __jsx("div", {
      className: "carriere",
      key: p.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("input", (_jsx = {
      type: "radio",
      onChange: formik.handleChange,
      value: formik.values.carriere,
      name: "carriere"
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "value", p.id), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "checked", formik.values.carriere === p.id), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
      fileName: _jsxFileName,
      lineNumber: 130
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx)), p.label));
  }))), __jsx("div", {
    className: "row submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("button", {
    type: "submit",
    disabled: pending,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Acc\xE9der au carnage"), pending && timerMessage && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, timerMessage)), result && __jsx("div", {
    className: "row results",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("div", {
    className: "result",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "La personne avec la m\xEAme carri\xE8re"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "n\xE9 en ", __jsx("span", {
    className: "semi important",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "1960")), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "peut partir \xE0 la retraite \xE0 ", result.age, " ans"), __jsx("div", {
    className: "focus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Sa pension repr\xE9sente", __jsx("span", {
    className: "important",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, result.past, " %"), "de son dernier salaire")), __jsx("div", {
    className: "result",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Vous"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "n\xE9 en ", __jsx("span", {
    className: "semi important",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "1980")), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "en partant \xE0 la retraite \xE0 ", result.age, " ans"), __jsx("div", {
    className: "focus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Votre pension repr\xE9sente", __jsx("span", {
    className: "important",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, result.current, " %"), "de son dernier salaire")), __jsx("div", {
    className: "result",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Pour conserver"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "une pension"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "suffisante"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "pour vivre"), __jsx("div", {
    className: "focus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "vous devez partir", __jsx("span", {
    className: "important",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, result.delay, " ans"), "plus tard.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (SimpleForm);

/***/ })

})
//# sourceMappingURL=index.js.2b06c3f129b87992f922.hot-update.js.map