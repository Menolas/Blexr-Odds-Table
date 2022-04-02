/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".odds-table {\n  width: 100%;\n  min-width: 100%;\n  max-width: 100%;\n}\n.odds-table .odds-table__body {\n  display: flex;\n  flex-direction: row;\n  padding: 30px 0;\n  overflow: auto;\n}\n.odds-table .odds-table__row {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-shrink: 0;\n  flex-grow: 0;\n  border-bottom: 1px solid gray;\n  border: 1px solid #aaa;\n}\n.odds-table .odds-table__teams {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 160px;\n  min-width: 160px;\n  max-width: 160px;\n  height: 152px;\n  box-sizing: border-box;\n}\n.odds-table .odds-table__teams-name {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: center;\n  column-gap: 4px;\n  font-size: 16px;\n  font-weight: 700;\n}\n.odds-table .odds-table__teams-name span {\n  text-align: center;\n}\n.odds-table .odds-table__teams-home-icon {\n  display: flex;\n}\n.odds-table .odds-table__teams-home-icon svg {\n  width: 20px;\n  height: 20px;\n}\n.odds-table .odds-table__game-date {\n  font-size: 12px;\n  font-weight: 600;\n  color: #92aeb7;\n}\n.odds-table .odds-table__platforms {\n  overflow: hidden;\n}\n.odds-table .odds-table__platfroms-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.odds-table .odds-table__platfroms-item {\n  padding: 10px;\n  width: 174px;\n  min-width: 174px;\n  box-sizing: border-box;\n}\n.odds-table .odds-table__platfroms-item:nth-child(odd) {\n  background-color: rgb(200, 205, 206);\n}\n.odds-table .odds-table__platfroms-item-title {\n  margin: 0;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 700;\n  text-transform: none;\n}\n.odds-table .odds-table__platfroms-item-game-odds {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  column-gap: 8px;\n}\n.odds-table .odds-table__platfroms-item-game-odds > div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media (min-width: 900px) {\n  .odds-table .odds-table__body {\n    flex-direction: column;\n    padding: 20px 30px;\n    overflow: hidden;\n  }\n  .odds-table .odds-table__row {\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: flex-start;\n    padding: 16px 0;\n    border: none;\n  }\n  .odds-table .odds-table__teams {\n    margin-right: 18px;\n    height: unset;\n  }\n  .odds-table .odds-table__platfroms-list {\n    flex-direction: row;\n    overflow: auto;\n  }\n}\n.odds-filter {\n  padding: 22px 30px;\n  background-color: rgb(150, 179, 150);\n  max-width: 100%;\n  width: 100%;\n  box-sizing: border-box;\n}\n.odds-filter .odds-filter__form {\n  display: flex;\n  flex-direction: column;\n  row-gap: 12px;\n  max-width: 100%;\n  width: 100%;\n}\n.odds-filter .odds-filter__form label {\n  width: 25%;\n}\n.odds-filter .odds-filter__form select {\n  padding: 0 10px;\n  min-width: 147px;\n  height: 36px;\n  font-weight: 600;\n  border-radius: 4px;\n}\n.odds-filter .odds-table-form__wrap {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.odds-filter button[type=submit] {\n  display: inline-block;\n  text-align: center;\n  margin-left: auto;\n  margin-right: 0;\n  padding: 0;\n  height: 36px;\n  width: 147px;\n  font-weight: 600;\n  color: #fff;\n  background-color: #000;\n  border-radius: 4px;\n  border: none;\n}\n\n@media (min-width: 600px) {\n  .odds-filter .odds-filter__form {\n    flex-direction: row;\n    flex-wrap: wrap;\n    column-gap: 18px;\n  }\n  .odds-filter .odds-filter__form label {\n    margin-right: 8px;\n    width: unset;\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/odds-table.scss","webpack://./src/scss/style.scss","webpack://./src/scss/odds-filter.scss"],"names":[],"mappings":"AAAA;EACG,WAAA;EACA,eAAA;EACA,eAAA;ACCH;ADCG;EACG,aAAA;EACA,mBAAA;EACA,eAAA;EACA,cAAA;ACCN;ADEG;EACG,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,cAAA;EACA,YAAA;EACA,6BAAA;EACA,sBAAA;ACAN;ADGG;EACG,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,8BAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;ACDN;ADIG;EACG,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;ACFN;ADIM;EACG,kBAAA;ACFT;ADMG;EACG,aAAA;ACJN;ADMM;EACG,WAAA;EACA,YAAA;ACJT;ADQG;EACG,eAAA;EACA,gBAAA;EACA,cAAA;ACNN;ADSG;EACG,gBAAA;ACPN;ADUG;EACG,gBAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,cAAA;EACA,YAAA;ACRN;ADWG;EACG,aAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;ACTN;ADWM;EACG,oCAAA;ACTT;ADaG;EACG,SAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;ACXN;ADcG;EACG,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,6BAAA;EACA,eAAA;ACZN;ADeG;EACG,aAAA;EACA,sBAAA;EACA,mBAAA;ACbN;;ADiBA;EAIM;IACG,sBAAA;IACA,kBAAA;IACA,gBAAA;ECjBP;EDoBI;IACG,mBAAA;IACA,iBAAA;IACA,uBAAA;IACA,eAAA;IACA,YAAA;EClBP;EDqBI;IACG,kBAAA;IACA,aAAA;ECnBP;EDsBI;IACG,mBAAA;IACA,cAAA;ECpBP;AACF;ACrHA;EACG,kBAAA;EACA,oCAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;ADuHH;ACrHG;EACG,aAAA;EACA,sBAAA;EACA,aAAA;EACA,eAAA;EACA,WAAA;ADuHN;ACrHM;EACG,UAAA;ADuHT;ACpHM;EACG,eAAA;EACA,gBAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;ADsHT;AClHG;EACG,aAAA;EACA,8BAAA;EACA,mBAAA;ADoHN;ACjHG;EACG,qBAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,gBAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,YAAA;ADmHN;;AC/GA;EAIM;IACG,mBAAA;IACA,eAAA;IACA,gBAAA;ED+GP;EC7GO;IACG,iBAAA;IACA,YAAA;ED+GV;AACF","sourcesContent":[".odds-table {\r\n   width: 100%;\r\n   min-width: 100%;\r\n   max-width: 100%;\r\n\r\n   .odds-table__body {\r\n      display: flex;\r\n      flex-direction: row;\r\n      padding: 30px 0;\r\n      overflow: auto;\r\n   }\r\n\r\n   .odds-table__row {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      flex-shrink: 0;\r\n      flex-grow: 0;\r\n      border-bottom: 1px solid gray;\r\n      border: 1px solid #aaa;\r\n   }\r\n\r\n   .odds-table__teams {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: space-between;\r\n      width: 160px;\r\n      min-width: 160px;\r\n      max-width: 160px;\r\n      height: 152px;\r\n      box-sizing: border-box;\r\n   }\r\n\r\n   .odds-table__teams-name {\r\n      display: flex;\r\n      flex-wrap: nowrap;\r\n      align-items: center;\r\n      justify-content: center;\r\n      column-gap: 4px;\r\n      font-size: 16px;\r\n      font-weight: 700;\r\n\r\n      span {\r\n         text-align: center;\r\n      }\r\n   }\r\n\r\n   .odds-table__teams-home-icon {\r\n      display: flex;\r\n\r\n      svg {\r\n         width: 20px;\r\n         height: 20px;\r\n      }\r\n   }\r\n\r\n   .odds-table__game-date {\r\n      font-size: 12px;\r\n      font-weight: 600;\r\n      color: #92aeb7;\r\n   }\r\n\r\n   .odds-table__platforms {\r\n      overflow: hidden;\r\n   }\r\n\r\n   .odds-table__platfroms-list {\r\n      list-style: none;\r\n      margin: 0;\r\n      padding: 0;\r\n      display: flex;\r\n      flex-direction: column;\r\n      flex-shrink: 0;\r\n      flex-grow: 0;\r\n   }\r\n\r\n   .odds-table__platfroms-item {\r\n      padding: 10px;\r\n      width: 174px;\r\n      min-width: 174px;\r\n      box-sizing: border-box;\r\n\r\n      &:nth-child(odd) {\r\n         background-color: rgb(200, 205, 206);\r\n      }\r\n   }\r\n\r\n   .odds-table__platfroms-item-title {\r\n      margin: 0;\r\n      text-align: center;\r\n      font-size: 14px;\r\n      font-weight: 700;\r\n      text-transform: none;\r\n   }\r\n\r\n   .odds-table__platfroms-item-game-odds {\r\n      display: flex;\r\n      flex-direction: row;\r\n      flex-wrap: nowrap;\r\n      justify-content: space-around;\r\n      column-gap: 8px;\r\n   }\r\n\r\n   .odds-table__platfroms-item-game-odds > div {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n   }\r\n}\r\n\r\n@media (min-width: 900px) {\r\n\r\n   .odds-table {\r\n      \r\n      .odds-table__body {\r\n         flex-direction: column;\r\n         padding: 20px 30px;\r\n         overflow: hidden;\r\n      }\r\n\r\n      .odds-table__row {\r\n         flex-direction: row;\r\n         flex-wrap: nowrap;\r\n         align-items: flex-start;\r\n         padding: 16px 0;\r\n         border: none;\r\n      }\r\n\r\n      .odds-table__teams {\r\n         margin-right: 18px;\r\n         height: unset;\r\n      }\r\n\r\n      .odds-table__platfroms-list {\r\n         flex-direction: row;\r\n         overflow: auto;\r\n      }\r\n   }\r\n}\r\n",".odds-table {\n  width: 100%;\n  min-width: 100%;\n  max-width: 100%;\n}\n.odds-table .odds-table__body {\n  display: flex;\n  flex-direction: row;\n  padding: 30px 0;\n  overflow: auto;\n}\n.odds-table .odds-table__row {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-shrink: 0;\n  flex-grow: 0;\n  border-bottom: 1px solid gray;\n  border: 1px solid #aaa;\n}\n.odds-table .odds-table__teams {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 160px;\n  min-width: 160px;\n  max-width: 160px;\n  height: 152px;\n  box-sizing: border-box;\n}\n.odds-table .odds-table__teams-name {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: center;\n  column-gap: 4px;\n  font-size: 16px;\n  font-weight: 700;\n}\n.odds-table .odds-table__teams-name span {\n  text-align: center;\n}\n.odds-table .odds-table__teams-home-icon {\n  display: flex;\n}\n.odds-table .odds-table__teams-home-icon svg {\n  width: 20px;\n  height: 20px;\n}\n.odds-table .odds-table__game-date {\n  font-size: 12px;\n  font-weight: 600;\n  color: #92aeb7;\n}\n.odds-table .odds-table__platforms {\n  overflow: hidden;\n}\n.odds-table .odds-table__platfroms-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.odds-table .odds-table__platfroms-item {\n  padding: 10px;\n  width: 174px;\n  min-width: 174px;\n  box-sizing: border-box;\n}\n.odds-table .odds-table__platfroms-item:nth-child(odd) {\n  background-color: rgb(200, 205, 206);\n}\n.odds-table .odds-table__platfroms-item-title {\n  margin: 0;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 700;\n  text-transform: none;\n}\n.odds-table .odds-table__platfroms-item-game-odds {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  column-gap: 8px;\n}\n.odds-table .odds-table__platfroms-item-game-odds > div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media (min-width: 900px) {\n  .odds-table .odds-table__body {\n    flex-direction: column;\n    padding: 20px 30px;\n    overflow: hidden;\n  }\n  .odds-table .odds-table__row {\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: flex-start;\n    padding: 16px 0;\n    border: none;\n  }\n  .odds-table .odds-table__teams {\n    margin-right: 18px;\n    height: unset;\n  }\n  .odds-table .odds-table__platfroms-list {\n    flex-direction: row;\n    overflow: auto;\n  }\n}\n.odds-filter {\n  padding: 22px 30px;\n  background-color: rgb(150, 179, 150);\n  max-width: 100%;\n  width: 100%;\n  box-sizing: border-box;\n}\n.odds-filter .odds-filter__form {\n  display: flex;\n  flex-direction: column;\n  row-gap: 12px;\n  max-width: 100%;\n  width: 100%;\n}\n.odds-filter .odds-filter__form label {\n  width: 25%;\n}\n.odds-filter .odds-filter__form select {\n  padding: 0 10px;\n  min-width: 147px;\n  height: 36px;\n  font-weight: 600;\n  border-radius: 4px;\n}\n.odds-filter .odds-table-form__wrap {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.odds-filter button[type=submit] {\n  display: inline-block;\n  text-align: center;\n  margin-left: auto;\n  margin-right: 0;\n  padding: 0;\n  height: 36px;\n  width: 147px;\n  font-weight: 600;\n  color: #fff;\n  background-color: #000;\n  border-radius: 4px;\n  border: none;\n}\n\n@media (min-width: 600px) {\n  .odds-filter .odds-filter__form {\n    flex-direction: row;\n    flex-wrap: wrap;\n    column-gap: 18px;\n  }\n  .odds-filter .odds-filter__form label {\n    margin-right: 8px;\n    width: unset;\n  }\n}",".odds-filter {\r\n   padding: 22px 30px;\r\n   background-color: rgb(150, 179, 150);\r\n   max-width: 100%;\r\n   width: 100%;\r\n   box-sizing: border-box;\r\n\r\n   .odds-filter__form {\r\n      display: flex;\r\n      flex-direction: column;\r\n      row-gap: 12px;\r\n      max-width: 100%;\r\n      width: 100%;\r\n\r\n      label {\r\n         width: 25%;\r\n      }\r\n\r\n      select {\r\n         padding: 0 10px;\r\n         min-width: 147px;\r\n         height: 36px;\r\n         font-weight: 600;\r\n         border-radius: 4px;\r\n      }\r\n   }\r\n\r\n   .odds-table-form__wrap {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n   }\r\n\r\n   button[type=\"submit\"] {\r\n      display: inline-block;\r\n      text-align: center;\r\n      margin-left: auto;\r\n      margin-right: 0;\r\n      padding: 0;\r\n      height: 36px;\r\n      width: 147px;\r\n      font-weight: 600;\r\n      color: #fff;\r\n      background-color: #000;\r\n      border-radius: 4px;\r\n      border: none;\r\n   }\r\n}\r\n\r\n@media (min-width: 600px) {\r\n\r\n   .odds-filter {\r\n\r\n      .odds-filter__form {\r\n         flex-direction: row;\r\n         flex-wrap: wrap;\r\n         column-gap: 18px;\r\n\r\n         label {\r\n            margin-right: 8px;\r\n            width: unset;\r\n         }\r\n      }\r\n   }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/const.js":
/*!*************************!*\
  !*** ./src/js/const.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIKEY": function() { return /* binding */ APIKEY; },
/* harmony export */   "getDataUrl": function() { return /* binding */ getDataUrl; },
/* harmony export */   "sportsUrl": function() { return /* binding */ sportsUrl; }
/* harmony export */ });
const APIKEY = 'c36f951b13981f9df13951e77d9c1e90';
const sportsUrl = 'https://api.the-odds-api.com/v3/sports?apiKey=' + APIKEY;
const DATAURL = 'https://api.the-odds-api.com/v3/odds/?sport=';

let getDataUrl = (sport, region, market) => {
   let res = DATAURL + sport + '&region=' + region + '&mkt=' + market + '&apiKey=' + APIKEY;
   return res;
}


/***/ }),

/***/ "./src/js/local-team-icon-view.js":
/*!****************************************!*\
  !*** ./src/js/local-team-icon-view.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localTeamIcon": function() { return /* binding */ localTeamIcon; }
/* harmony export */ });
const localTeamIcon = () => (
   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
       <path d="M570.69,236.27,512,184.44V48a16,16,0,0,0-16-16H432a16,16,0,0,0-16,16V99.67L314.76,10.3C308.48,4.61,296.51,0,288,0s-20.45,4.61-26.73,10.3l-256,226a16,16,0,0,0-1.2,22.6l21.4,23.8A18.31,18.31,0,0,0,37.42,288a18.51,18.51,0,0,0,10.69-4.11l15.9-14V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V269.87l15.91,14A18.62,18.62,0,0,0,538.63,288a18.12,18.12,0,0,0,11.87-5.31l21.41-23.81A18.61,18.61,0,0,0,576,248.18,18.21,18.21,0,0,0,570.69,236.27ZM352,298.66A21.39,21.39,0,0,1,330.64,320h-85.3A21.39,21.39,0,0,1,224,298.66V213.32A21.39,21.39,0,0,1,245.34,192h85.3A21.39,21.39,0,0,1,352,213.32Z"/>
   </svg>`
);


/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGameElement": function() { return /* binding */ createGameElement; }
/* harmony export */ });
let createGameElement = (template) => {
   const newElement = document.createElement('div');
   newElement.innerHTML = template;

   return newElement.firstChild;
};


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
/******/ 			id: moduleId,
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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************************!*\
  !*** ./src/js/odds-table.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _local_team_icon_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-team-icon-view.js */ "./src/js/local-team-icon-view.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const.js */ "./src/js/const.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");




const sportsSelect = document.querySelector('#sport');
const oddsTableBody = document.querySelector('.odds-table__body');
const oddsFilterBtn = document.querySelector('#odds_filter');

// getting sports data for sport slect filter from API 

async function getSports(url) {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        getSportsOptions(data.data);
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// getting odds data for odds tabel from API

async function getOdds() {
    let currentSport = sportsSelect.value;
    let currentMarket = document.querySelector('#market').value;
    let currentRegion = document.querySelector('#region').value;
    let response = await fetch((0,_const_js__WEBPACK_IMPORTED_MODULE_2__.getDataUrl)(currentSport, currentRegion, currentMarket));
    let data = await response.json();
    console.log(data.data);
    buildTab(data.data, currentMarket);
}

// pushing sports options to the sport select

const getSportsOptions = (sports) => {
    sports.forEach((element) => {
        const sportOption = () => (`<option value="${element.key}">${element.title}</option>`);
        sportsSelect.append((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.createGameElement)(sportOption()));
    });
};

// building one odd item
const oddItem = (market, element) => (`<div><span>${element}</span><span>${market[element]}</span></div>`);

// building odds list for one betting platform

const oddsItems = (market) =>
    Object.keys(market).length ? Object.keys(market).map((element) => oddItem(market, element)).join('') : '';

// getting an object with data of odds for particular market and particular platform

const getOddsResult = (data, market) => {
    let oddsResult = {};
    switch (market) {
        case 'h2h':
            oddsResult[1] = data.odds.h2h[0];
            oddsResult[2] = data.odds.h2h[1];
            if (Object.keys(data.odds).length > 1) {
                oddsResult[3] = data.odds.h2h_lay[0];
                oddsResult[4] = data.odds.h2h_lay[1];
            }
            break;
        case 'spreads':
            oddsResult[1] = data.odds.spreads.odds[0];
            oddsResult[2] = data.odds.spreads.odds[1];
            oddsResult[3] = data.odds.spreads.points[0];
            oddsResult[4] = data.odds.spreads.points[1];
            break;
        case 'totals':
            oddsResult[1] = data.odds.totals.odds[0];
            oddsResult[2] = data.odds.totals.odds[1];
            oddsResult[3] = data.odds.totals.points[0];
            oddsResult[4] = data.odds.totals.points[1];
            break;
    }

    return oddsResult;
}

// building a platform item

const gameOddsPlatformItem = (data, market) => {

    return (
        `<li class="odds-table__platfroms-item">
            <h6 class="odds-table__platfroms-item-title">${data.site_nice}</h6>
            <div class="odds-table__platfroms-item-game-odds">
                ${oddsItems(getOddsResult(data, market))}
            </div>
        </li>`
    );
};

// getting list of platforms for betting for a particular game

const gameOddsPlatforms = (data, market) =>
    data.length ? data.map((element) => gameOddsPlatformItem(element, market)).join('') : '';


// building a row of tab (game with it's betting platforms and odds)

const gameItem = (data, market) => (
    `<div class="odds-table__row">
        <div class="odds-table__teams">
        <div class="odds-table__teams-name">
            <span class="odds-table__teams-home-icon">${data.home_team === data.teams[0] ? (0,_local_team_icon_view_js__WEBPACK_IMPORTED_MODULE_1__.localTeamIcon)() : ''}</span>
            <span>${data.teams[0]}</span>
        </div>
        <span>vs</span>
        <div class="odds-table__teams-name">
            <span>${data.teams[1]}</span>
            <span class="odds-table__teams-home-icon">${data.home_team === data.teams[1] ? (0,_local_team_icon_view_js__WEBPACK_IMPORTED_MODULE_1__.localTeamIcon)() : ''}</span>
        </div>
        <span class="odds-table__game-date">December 15, 2020 - 6.00 pm</span>
        </div>
        <div class="odds-table__platforms">
        <ul class="odds-table__platfroms-list">${gameOddsPlatforms(data.sites, market)}</ul>
        </div>
    </div>`
);

// building the odds table

const buildTab = (games, market) => {
    games.forEach((game) => oddsTableBody.append((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.createGameElement)(gameItem(game, market))));
};

// definition of queue of getting and pushing data

async function getData() {
    await getSports(_const_js__WEBPACK_IMPORTED_MODULE_2__.sportsUrl);
    await getOdds();
}


// checking that container for the page is parced on the page

if (document.querySelector('#odds-table')) {

    getData();

    // listening of click event of the filter button and refilling table with fresh odds according filter data

    oddsFilterBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        oddsTableBody.innerHTML = '';
        getOdds();
    });
}

}();
/******/ })()
;
//# sourceMappingURL=bundler.js.map