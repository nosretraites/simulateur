webpackHotUpdate("static/development/pages/result.js",{

/***/ "./pages/result.js":
/*!*************************!*\
  !*** ./pages/result.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var _components_pie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/pie */ "./components/pie.js");
/* harmony import */ var _components_socialIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/socialIcon */ "./components/socialIcon.js");



var _jsxFileName = "/home/thomas/repos/retraites/simulateur/pages/result.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var SEO_TITLE = 'Resultats du simulateur de retraite';
var BASE_SOCIAL_URL = 'https://nosretraites.github.io/simulateur';
var SOCIAL_TITLE = 'Voici ce que je toucherai comme retraite avec la reforme macron';
var SOCIAL_DESCRIPTION = 'Simulateur de retraite du collectif nos retraites';
var SOCIAL_IMAGE = "".concat(BASE_SOCIAL_URL, "/logo_collectif.png");

var Result = function Result() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_6__["Context"]),
      result = _useContext.result;

  var fullDataSet = JSON.parse(result.json);

  var resProps = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(fullDataSet[0]);

  var past = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(result.past);

  var current = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(result.current);

  var data = [{
    id: "result",
    label: "result",
    value: current
  }, {
    id: "other",
    label: "other",
    value: 100 - current
  }];
  var baseData = [{
    id: "result",
    label: "result",
    value: past
  }, {
    id: "other",
    label: "other",
    value: 100 - past
  }];
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, SEO_TITLE), __jsx("meta", {
    property: "og:type",
    content: "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: SOCIAL_DESCRIPTION,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: SOCIAL_IMAGE,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:description",
    content: SOCIAL_DESCRIPTION,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), __jsx("div", {
    className: "results",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "result",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Une personne n\xE9e en "), __jsx("span", {
    className: "important",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "1960")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "peut partir \xE0 la retraite \xE0 "), __jsx("span", {
    className: "important",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "65 ans")), __jsx("div", {
    className: "chart-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "sa pension repr\xE9sentera "), __jsx(_components_pie__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: baseData,
    label: "de son dernier salaire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }))), __jsx("div", {
    className: "result",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Vous \xEAtes n\xE9-e en "), __jsx("span", {
    className: "important",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, result.naissance)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "en partant \xE0 la retraite \xE0 "), __jsx("span", {
    className: "important",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, result.age, " ans")), __jsx("div", {
    className: "chart-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "votre pension repr\xE9sentera "), __jsx(_components_pie__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: data,
    label: "de votre dernier salaire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })), __jsx("p", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Pour partir \xE0 la retraite \xE0 taux plein ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), "il vous faudra travailler ", result.delay, " ans de plus !"))), __jsx("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, resProps.map(function (name) {
    return __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "mm");
  })), fullDataSet.map(function (row) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(row), row.age);
  })), __jsx("div", {
    className: "social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("span", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Partagez les cons\xE9quences de la r\xE9forme des retraites :"), __jsx("div", {
    className: "social-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_4__["FacebookShareButton"], {
    url: BASE_SOCIAL_URL + '?' + new URLSearchParams(result),
    quote: SOCIAL_TITLE,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_components_socialIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })), __jsx(react_share__WEBPACK_IMPORTED_MODULE_4__["TwitterShareButton"], {
    url: BASE_SOCIAL_URL + '?' + new URLSearchParams(result),
    quote: SOCIAL_TITLE,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(_components_socialIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Result);

/***/ })

})
//# sourceMappingURL=result.js.f9d0b4b365a2e3375b93.hot-update.js.map