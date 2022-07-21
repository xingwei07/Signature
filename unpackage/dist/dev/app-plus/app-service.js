(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!**************************************************!*\
  !*** E:/Project/HbuilderProjects/canvas/main.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 18));\n\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7OztBQUduQixzRTtBQUNBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7QUFDQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7QUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSUwsWUFBSjtBQUNMRyxZQURLLEVBQVo7O0FBR0FFLEdBQUcsQ0FBQ0MsTUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcclxuICAgIC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KClcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************************************!*\
  !*** E:/Project/HbuilderProjects/canvas/pages.json ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}


if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!****************************************************************************!*\
  !*** E:/Project/HbuilderProjects/canvas/pages/index/index.vue?mpType=page ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 16);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2tMO0FBQ2xMLGdCQUFnQiwyTEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXERldmVsb3BtZW50XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**********************************************************************************************************!*\
  !*** E:/Project/HbuilderProjects/canvas/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Project/HbuilderProjects/canvas/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    vSign: __webpack_require__(/*! @/uni_modules/v-sign/components/v-sign/v-sign.vue */ 5).default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c("v-sign", {
        attrs: {
          width: _vm.winWidth + "px",
          height: _vm.winHeight + "px",
          _i: 1
        },
        on: { init: _vm.onSignInit }
      }),
      _c("button", { attrs: { _i: 2 }, on: { click: _vm.clear } }),
      _c("button", { attrs: { _i: 3 }, on: { click: _vm.saveTempFilePath } })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!******************************************************************************************!*\
  !*** E:/Project/HbuilderProjects/canvas/uni_modules/v-sign/components/v-sign/v-sign.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v_sign_vue_vue_type_template_id_2a6f283c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v-sign.vue?vue&type=template&id=2a6f283c&scoped=true& */ 6);\n/* harmony import */ var _v_sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v-sign.vue?vue&type=script&lang=js& */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _v_sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _v_sign_vue_vue_type_template_id_2a6f283c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _v_sign_vue_vue_type_template_id_2a6f283c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2a6f283c\",\n  null,\n  false,\n  _v_sign_vue_vue_type_template_id_2a6f283c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/v-sign/components/v-sign/v-sign.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDMEQ7QUFDTDs7O0FBR3JEO0FBQ2tMO0FBQ2xMLGdCQUFnQiwyTEFBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdi1zaWduLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYTZmMjgzYyZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Ytc2lnbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Ytc2lnbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXERldmVsb3BtZW50XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyYTZmMjgzY1wiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ1bmlfbW9kdWxlcy92LXNpZ24vY29tcG9uZW50cy92LXNpZ24vdi1zaWduLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*************************************************************************************************************************************!*\
  !*** E:/Project/HbuilderProjects/canvas/uni_modules/v-sign/components/v-sign/v-sign.vue?vue&type=template&id=2a6f283c&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_v_sign_vue_vue_type_template_id_2a6f283c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./v-sign.vue?vue&type=template&id=2a6f283c&scoped=true& */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_v_sign_vue_vue_type_template_id_2a6f283c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_v_sign_vue_vue_type_template_id_2a6f283c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_v_sign_vue_vue_type_template_id_2a6f283c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_v_sign_vue_vue_type_template_id_2a6f283c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Project/HbuilderProjects/canvas/uni_modules/v-sign/components/v-sign/v-sign.vue?vue&type=template&id=2a6f283c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "signature-wrap"), attrs: { _i: 0 } },
    [
      _c("canvas", {
        style: _vm._$s(1, "s", [
          {
            width: _vm.width && _vm.formatSize(_vm.width),
            height: _vm.height && _vm.formatSize(_vm.height)
          },
          _vm.customStyle
        ]),
        attrs: {
          "canvas-id": _vm._$s(1, "a-canvas-id", _vm.cid),
          id: _vm._$s(1, "a-id", _vm.cid),
          _i: 1
        },
        on: {
          touchstart: _vm.onTouchStart,
          touchmove: _vm.onTouchMove,
          touchend: _vm.onTouchEnd
        }
      }),
      _vm._t("default", null, { _i: 2 })
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!*******************************************************************************************************************!*\
  !*** E:/Project/HbuilderProjects/canvas/uni_modules/v-sign/components/v-sign/v-sign.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_v_sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./v-sign.vue?vue&type=script&lang=js& */ 9);\n/* harmony import */ var _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_v_sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_v_sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_v_sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_v_sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_v_sign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFsQixDQUFnQixvbkJBQUcsRUFBQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxEZXZlbG9wbWVudFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXERldmVsb3BtZW50XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxcRGV2ZWxvcG1lbnRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcRGV2ZWxvcG1lbnRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdi1zaWduLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxEZXZlbG9wbWVudFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXERldmVsb3BtZW50XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxcRGV2ZWxvcG1lbnRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcRGV2ZWxvcG1lbnRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdi1zaWduLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Project/HbuilderProjects/canvas/uni_modules/v-sign/components/v-sign/v-sign.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 11));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _utils = __webpack_require__(/*! ../../utils */ 14);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default2 =\n\n{\n  name: 'v-sign',\n  props: {\n    // canvas id\n    cid: {\n      type: String,\n      default: \"v-sign-\".concat(Date.now())\n      // required: true\n    },\n    // canvas 宽度\n    width: {\n      type: [String, Number] },\n\n    // canvas 高度\n    height: {\n      type: [String, Number] },\n\n    // 画笔大小，权重小于 v-sign-pen 组件设置的画笔大小 penLineWidth\n    lineWidth: {\n      type: Number,\n      default: 4 },\n\n    // 线颜色，权重小于 v-sign-color 组件设置的画笔颜色 penLineColor\n    lineColor: {\n      type: String,\n      default: '#333' },\n\n    // 画布背景颜色\n    bgColor: {\n      type: String,\n      default: '#fff' },\n\n    // canvas自定义样式\n    customStyle: {\n      type: Object,\n      default: function _default() {return {};} } },\n\n\n  provide: function provide() {\n    return {\n      getSignInterface: this.provideSignInterface };\n\n  },\n  data: function data() {\n    return {\n      formatSize: _utils.formatSize,\n      lineData: [],\n      winWidth: 0,\n      winHeight: 0,\n      penLineWidth: null, // v-sign-pen 组件设置的画笔大小\n      penLineColor: null // v-sign-color 组件设置的颜色\n    };\n  },\n  created: function created() {\n    // 获取窗口宽高\n    var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),windowWidth = _uni$getSystemInfoSyn.windowWidth,windowHeight = _uni$getSystemInfoSyn.windowHeight;\n    this.winWidth = windowWidth;\n    this.winHeight = windowHeight;\n  },\n  mounted: function mounted() {\n    this.canvasCtx = uni.createCanvasContext(this.cid, this);\n    // h5 需延迟绘制，否则绘制失败\n\n\n\n    this.setBackgroundColor(this.bgColor);\n\n\n\n    // 初始化完成，触发 init 事件\n    this.$emit('init', this.provideSignInterface());\n  },\n  methods: {\n    onTouchStart: function onTouchStart(e) {\n      var pos = e.touches[0];\n      this.lineData.push({\n        style: {\n          color: this.penLineColor || this.lineColor,\n          width: this.penLineWidth || this.lineWidth },\n\n        // 屏幕坐标\n        coordinates: [\n        {\n          type: e.type,\n          x: pos.x,\n          y: pos.y }] });\n\n\n\n      this.drawLine();\n    },\n    onTouchMove: function onTouchMove(e) {\n      var pos = e.touches[0];\n      this.lineData[this.lineData.length - 1].coordinates.push({\n        type: e.type,\n        x: pos.x,\n        y: pos.y });\n\n      this.drawLine();\n    },\n    onTouchEnd: function onTouchEnd(e) {\n      this.$emit('end', this.lineData);\n    },\n    // 清空画布\n    clear: function clear() {\n      this.lineData = [];\n      this.canvasCtx.clearRect(0, 0, this.winWidth, this.winHeight);\n      this.canvasCtx.draw();\n      this.setBackgroundColor(this.bgColor);\n      this.$emit('clear');\n    },\n    // 撤销\n    revoke: function revoke() {var _this = this;\n      this.setBackgroundColor(this.bgColor);\n      this.lineData.pop();\n      this.lineData.forEach(function (item, index) {\n        _this.canvasCtx.beginPath();\n        _this.canvasCtx.setLineCap('round');\n        _this.canvasCtx.setStrokeStyle(item.style.color);\n        _this.canvasCtx.setLineWidth(item.style.width);\n        if (item.coordinates.length < 2) {\n          var pos = item.coordinates[0];\n          _this.canvasCtx.moveTo(pos.x, pos.y);\n          _this.canvasCtx.lineTo(pos.x + 1, pos.y);\n        } else {\n          item.coordinates.forEach(function (pos) {\n            if (pos.type == 'touchstart') {\n              _this.canvasCtx.moveTo(pos.x, pos.y);\n            } else {\n              _this.canvasCtx.lineTo(pos.x, pos.y);\n            }\n          });\n        }\n        _this.canvasCtx.stroke();\n      });\n      this.canvasCtx.draw(true);\n      this.$emit('revoke', this.lineData);\n    },\n    // 绘制线条\n    drawLine: function drawLine() {\n      var lineDataLen = this.lineData.length;\n      if (!lineDataLen) return;\n      var currentLineData = this.lineData[lineDataLen - 1];\n      var coordinates = currentLineData.coordinates;\n      var coordinatesLen = coordinates.length;\n      if (!coordinatesLen) return;\n      var startPos;\n      var endPos;\n      if (coordinatesLen < 2) {\n        // only start, no move event\n        startPos = coordinates[coordinatesLen - 1];\n        endPos = {\n          x: startPos.x + 1,\n          y: startPos.y };\n\n      } else {\n        startPos = coordinates[coordinatesLen - 2];\n        endPos = coordinates[coordinatesLen - 1];\n      }\n\n      var style = currentLineData.style;\n      this.canvasCtx.beginPath();\n      this.canvasCtx.setLineCap('round');\n      this.canvasCtx.setStrokeStyle(style.color);\n      this.canvasCtx.setLineWidth(style.width);\n      this.canvasCtx.moveTo(startPos.x, startPos.y);\n      this.canvasCtx.lineTo(endPos.x, endPos.y);\n      // const P1 = this.caculateBezier(startPos, endPos, centerPos)\n      // console.log(P1.x, P1.y)\n      // this.canvasCtx.moveTo(startPos.x, startPos.y)\n      // this.canvasCtx.quadraticCurveTo(P1.x, P1.y, endPos.x, endPos.y)\n      this.canvasCtx.stroke();\n      this.canvasCtx.draw(true);\n    },\n    // 保存png图片，文件名配置 filename 仅支持 h5\n    saveImage: function saveImage() {var _arguments = arguments,_this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var filename, tempFilePath;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:filename = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : '签名';_context.next = 3;return (\n                  _this2.canvasToTempFilePath());case 3:tempFilePath = _context.sent;return _context.abrupt(\"return\",\n                new Promise(function (resolve, reject) {\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                  uni.saveImageToPhotosAlbum({\n                    filePath: tempFilePath,\n                    success: function success(resObj) {\n                      resolve(resObj);\n                    },\n                    fail: function fail(err) {\n                      reject(err);\n                    } });\n\n\n                }));case 5:case \"end\":return _context.stop();}}}, _callee);}))();\n    },\n    // canvas 保存为临时图片路径，h5返回 base64\n    canvasToTempFilePath: function canvasToTempFilePath() {var _this3 = this;var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      return new Promise(function (resolve, reject) {\n        uni.canvasToTempFilePath(_objectSpread(_objectSpread({\n\n          canvasId: _this3.cid },\n        conf), {}, {\n          success: function success(res) {\n\n            var path = plus.io.convertLocalFileSystemURL(res.tempFilePath); //绝对路径\n            var fileReader = new plus.io.FileReader();\n            fileReader.readAsDataURL(path);\n            fileReader.onloadend = function (res) {//读取文件成功完成的回调函数\n              resolve(res.target.result); //输出base64内容\n            };\n\n\n\n\n          },\n          fail: function fail(err) {\n            __f__(\"log\", 'fail', err, \" at uni_modules/v-sign/components/v-sign/v-sign.vue:267\");\n            reject(err);\n          } }),\n\n        _this3);\n\n      });\n    },\n    setBackgroundColor: function setBackgroundColor() {var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#fff';\n      this.canvasCtx.beginPath();\n      this.canvasCtx.setFillStyle(color);\n      this.canvasCtx.fillRect(0, 0, this.winWidth, this.winHeight);\n      this.canvasCtx.fill();\n      this.canvasCtx.draw(true);\n    },\n    setLineWidth: function setLineWidth(numberVal) {\n      this.penLineWidth = numberVal;\n    },\n    setLineColor: function setLineColor(strValue) {\n      this.penLineColor = strValue;\n    },\n    // 向外暴露内部方法\n    provideSignInterface: function provideSignInterface() {var _this4 = this;\n      return {\n        cid: this.cid,\n        ctx: this.canvasCtx,\n        clear: this.clear,\n        revoke: this.revoke,\n        saveImage: this.saveImage,\n        canvasToTempFilePath: this.canvasToTempFilePath,\n        setLineWidth: this.setLineWidth,\n        setLineColor: this.setLineColor,\n        setBackgroundColor: this.setBackgroundColor,\n        getLineData: function getLineData() {return _this4.lineData;} };\n\n    },\n    /**\r\n        * 计算二次贝塞尔曲线 控制点 P1\r\n        * 起点 P0(x0,y0)、控制点P1(x1, y1)、P2(x2, y2)、曲线上任意点B(x, y)\r\n        * 二次贝塞尔公式：B(t) = (1-t)²P0 + 2t(1-t)P1 + t²P2\r\n        * 代入坐标得：\r\n        * x = (1-t)²*x0 + 2t(1-t)*x1 + t²*x2\r\n        * y = (1-t)²*y0 + 2t(1-t)*y1 + t²*y2\r\n        */\n    caculateBezier: function caculateBezier(P0, P2, B) {var t = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.5;var\n      x0 = P0.x,y0 = P0.y;var\n      x2 = P2.x,y2 = P2.y;var\n      x = B.x,y = B.y;\n      var x1 = (x - (1 - t) * (1 - t) * x0 - t * t * x2) / (2 * t * (1 - t));\n      var y1 = (y - (1 - t) * (1 - t) * y0 - t * t * y2) / (2 * t * (1 - t));\n      return {\n        x: x1,\n        y: y1 };\n\n    } } };exports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdi1zaWduL2NvbXBvbmVudHMvdi1zaWduL3Ytc2lnbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NBLHdEOztBQUVBO0FBQ0EsZ0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBQ0E7QUFIQSxLQUZBO0FBT0E7QUFDQTtBQUNBLDRCQURBLEVBUkE7O0FBV0E7QUFDQTtBQUNBLDRCQURBLEVBWkE7O0FBZUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFoQkE7O0FBb0JBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHFCQUZBLEVBckJBOztBQXlCQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxxQkFGQSxFQTFCQTs7QUE4QkE7QUFDQTtBQUNBLGtCQURBO0FBRUEsK0NBRkEsRUEvQkEsRUFGQTs7O0FBc0NBLFNBdENBLHFCQXNDQTtBQUNBO0FBQ0EsaURBREE7O0FBR0EsR0ExQ0E7QUEyQ0EsTUEzQ0Esa0JBMkNBO0FBQ0E7QUFDQSxtQ0FEQTtBQUVBLGtCQUZBO0FBR0EsaUJBSEE7QUFJQSxrQkFKQTtBQUtBLHdCQUxBLEVBS0E7QUFDQSx3QkFOQSxDQU1BO0FBTkE7QUFRQSxHQXBEQTtBQXFEQSxTQXJEQSxxQkFxREE7QUFDQTtBQURBLGdDQUVBLHVCQUZBLENBRUEsV0FGQSx5QkFFQSxXQUZBLENBRUEsWUFGQSx5QkFFQSxZQUZBO0FBR0E7QUFDQTtBQUNBLEdBMURBO0FBMkRBLFNBM0RBLHFCQTJEQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7OztBQUlBO0FBQ0E7QUFDQSxHQXZFQTtBQXdFQTtBQUNBLGdCQURBLHdCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQURBO0FBRUEsb0RBRkEsRUFEQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLGtCQUZBO0FBR0Esa0JBSEEsRUFEQSxDQU5BOzs7O0FBY0E7QUFDQSxLQWxCQTtBQW1CQSxlQW5CQSx1QkFtQkEsQ0FuQkEsRUFtQkE7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxnQkFGQTtBQUdBLGdCQUhBOztBQUtBO0FBQ0EsS0EzQkE7QUE0QkEsY0E1QkEsc0JBNEJBLENBNUJBLEVBNEJBO0FBQ0E7QUFDQSxLQTlCQTtBQStCQTtBQUNBLFNBaENBLG1CQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXRDQTtBQXVDQTtBQUNBLFVBeENBLG9CQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsV0FOQTtBQU9BO0FBQ0E7QUFDQSxPQW5CQTtBQW9CQTtBQUNBO0FBQ0EsS0FqRUE7QUFrRUE7QUFDQSxZQW5FQSxzQkFtRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLHVCQUZBOztBQUlBLE9BUEEsTUFPQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBckdBO0FBc0dBO0FBQ0EsYUF2R0EsdUJBdUdBO0FBQ0EsK0NBREEsU0FDQSxZQURBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBLDBDQURBO0FBRUEsMkJBRkEsbUJBRUEsTUFGQSxFQUVBO0FBQ0E7QUFDQSxxQkFKQTtBQUtBLHdCQUxBLGdCQUtBLEdBTEEsRUFLQTtBQUNBO0FBQ0EscUJBUEE7OztBQVVBLGlCQTVCQSxDQUZBO0FBK0JBLEtBdElBO0FBdUlBO0FBQ0Esd0JBeElBLGtDQXdJQTtBQUNBO0FBQ0E7O0FBRUEsOEJBRkE7QUFHQSxZQUhBO0FBSUE7O0FBRUEsMkVBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQURBLENBQ0E7QUFDQSxhQUZBOzs7OztBQU9BLFdBaEJBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBLFdBcEJBOztBQXNCQSxjQXRCQTs7QUF3QkEsT0F6QkE7QUEwQkEsS0FuS0E7QUFvS0Esc0JBcEtBLGdDQW9LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTFLQTtBQTJLQSxnQkEzS0Esd0JBMktBLFNBM0tBLEVBMktBO0FBQ0E7QUFDQSxLQTdLQTtBQThLQSxnQkE5S0Esd0JBOEtBLFFBOUtBLEVBOEtBO0FBQ0E7QUFDQSxLQWhMQTtBQWlMQTtBQUNBLHdCQWxMQSxrQ0FrTEE7QUFDQTtBQUNBLHFCQURBO0FBRUEsMkJBRkE7QUFHQSx5QkFIQTtBQUlBLDJCQUpBO0FBS0EsaUNBTEE7QUFNQSx1REFOQTtBQU9BLHVDQVBBO0FBUUEsdUNBUkE7QUFTQSxtREFUQTtBQVVBLHFFQVZBOztBQVlBLEtBL0xBO0FBZ01BOzs7Ozs7OztBQVFBLGtCQXhNQSwwQkF3TUEsRUF4TUEsRUF3TUEsRUF4TUEsRUF3TUEsQ0F4TUEsRUF3TUE7QUFDQSxRQURBLEdBQ0EsRUFEQSxDQUNBLENBREEsQ0FDQSxFQURBLEdBQ0EsRUFEQSxDQUNBLENBREE7QUFFQSxRQUZBLEdBRUEsRUFGQSxDQUVBLENBRkEsQ0FFQSxFQUZBLEdBRUEsRUFGQSxDQUVBLENBRkE7QUFHQSxPQUhBLEdBR0EsQ0FIQSxDQUdBLENBSEEsQ0FHQSxDQUhBLEdBR0EsQ0FIQSxDQUdBLENBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQSxhQURBO0FBRUEsYUFGQTs7QUFJQSxLQWxOQSxFQXhFQSxFIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwic2lnbmF0dXJlLXdyYXBcIj5cblx0XHQ8Y2FudmFzXG5cdFx0XHQ6Y2FudmFzLWlkPVwiY2lkXCJcblx0XHRcdDppZD1cImNpZFwiXG5cdFx0XHRAdG91Y2hzdGFydD1cIm9uVG91Y2hTdGFydFwiXG5cdFx0XHRAdG91Y2htb3ZlPVwib25Ub3VjaE1vdmVcIlxuXHRcdFx0QHRvdWNoZW5kPVwib25Ub3VjaEVuZFwiXG5cdFx0XHRkaXNhYmxlLXNjcm9sbFxuXHRcdFx0OnN0eWxlPVwiW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0d2lkdGg6IHdpZHRoICYmIGZvcm1hdFNpemUod2lkdGgpLFxuXHRcdFx0XHRcdGhlaWdodDogaGVpZ2h0ICYmIGZvcm1hdFNpemUoaGVpZ2h0KVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRjdXN0b21TdHlsZVxuXHRcdFx0XVwiXG5cdFx0PjwvY2FudmFzPlxuXHRcdDxzbG90IC8+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vKipcbiAqIHNpZ24gY2FudmFzIOaJi+WGmeetvuWQjVxuICogQGRlc2NyaXB0aW9uIOiuvue9rue6v+adoeWuveW6puOAgeminOiJsu+8jOaSpOWbnu+8jOa4heepulxuICogQHR1dG9yaWFsXG4gKiBAcHJvcGVydHkge1N0cmluZ30gY2lkIGNhbnZhcyBpZCDkuI3orr7nva7liJnpu5jorqTkuLogdi1zaWduLeaXtumXtOaIs1xuICogQHByb3BlcnR5IHtTdHJpbmcsIE51bWJlcn0gd2lkdGggY2FudmFzIOWuveW6plxuICogQHByb3BlcnR5IHtTdHJpbmcsIE51bWJlcn0gaGVpZ2h0IGNhbnZhcyDpq5jluqZcbiAqIEBwcm9wZXJ0eSB7YmdDb2xvcn0gYmdDb2xvciDnlLvluIPog4zmma/popzoibJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBjdXN0b21TdHlsZSBjYW52YXMg6Ieq5a6a5LmJ5qC35byPXG4gKiBAcHJvcGVydHkge1N0cmluZ30gbGluZVdpZHRoIOeUu+eslOWkp+Wwj++8jOadg+mHjeWwj+S6jiB2LXNpZ24tcGVuIOe7hOS7tuiuvue9rueahOeUu+eslOWkp+Wwj1xuICogQHByb3BlcnR5IHtOdW1iZXJ9IGxpbmVDb2xvciDnlLvnrJTpopzoibLvvIzmnYPph43lsI/kuo4gdi1zaWduLXBlbiDnu4Tku7borr7nva7nmoTnlLvnrJTlpKflsI9cbiAqIEBldmVudCB7RnVuY3Rpb259IGluaXQg5b2T5Yib5bu65a6MIGNhbnZhcyDlrp7kvovlkI7op6blj5HvvIzlkJHlpJbmj5DkvpsgY2FudmFz5a6e5L6L77yM5pKk5Zue77yM5riF56m65pa55rOVXG4gKiBAZXhhbXBsZSA8di1zaWduIEBpbml0PVwic2lnbkluaXRcIj48L3Ytc2lnbj5cbiAqL1xuaW1wb3J0IHsgZm9ybWF0U2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICd2LXNpZ24nLFxuXHRwcm9wczoge1xuXHRcdC8vIGNhbnZhcyBpZFxuXHRcdGNpZDoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogYHYtc2lnbi0ke0RhdGUubm93KCl9YFxuXHRcdFx0Ly8gcmVxdWlyZWQ6IHRydWVcblx0XHR9LFxuXHRcdC8vIGNhbnZhcyDlrr3luqZcblx0XHR3aWR0aDoge1xuXHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXVxuXHRcdH0sXG5cdFx0Ly8gY2FudmFzIOmrmOW6plxuXHRcdGhlaWdodDoge1xuXHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXVxuXHRcdH0sXG5cdFx0Ly8g55S756yU5aSn5bCP77yM5p2D6YeN5bCP5LqOIHYtc2lnbi1wZW4g57uE5Lu26K6+572u55qE55S756yU5aSn5bCPIHBlbkxpbmVXaWR0aFxuXHRcdGxpbmVXaWR0aDoge1xuXHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0ZGVmYXVsdDogNFxuXHRcdH0sXG5cdFx0Ly8g57q/6aKc6Imy77yM5p2D6YeN5bCP5LqOIHYtc2lnbi1jb2xvciDnu4Tku7borr7nva7nmoTnlLvnrJTpopzoibIgcGVuTGluZUNvbG9yXG5cdFx0bGluZUNvbG9yOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRkZWZhdWx0OiAnIzMzMydcblx0XHR9LFxuXHRcdC8vIOeUu+W4g+iDjOaZr+minOiJslxuXHRcdGJnQ29sb3I6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6ICcjZmZmJ1xuXHRcdH0sXG5cdFx0Ly8gY2FudmFz6Ieq5a6a5LmJ5qC35byPXG5cdFx0Y3VzdG9tU3R5bGU6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6ICgpID0+ICh7fSlcblx0XHR9XG5cdH0sXG5cdHByb3ZpZGUoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldFNpZ25JbnRlcmZhY2U6IHRoaXMucHJvdmlkZVNpZ25JbnRlcmZhY2Vcblx0XHR9XG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGZvcm1hdFNpemUsXG5cdFx0XHRsaW5lRGF0YTogW10sXG5cdFx0XHR3aW5XaWR0aDogMCxcblx0XHRcdHdpbkhlaWdodDogMCxcblx0XHRcdHBlbkxpbmVXaWR0aDogbnVsbCwgLy8gdi1zaWduLXBlbiDnu4Tku7borr7nva7nmoTnlLvnrJTlpKflsI9cblx0XHRcdHBlbkxpbmVDb2xvcjogbnVsbCAvLyB2LXNpZ24tY29sb3Ig57uE5Lu26K6+572u55qE6aKc6ImyXG5cdFx0fVxuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdC8vIOiOt+WPlueql+WPo+WuvemrmFxuXHRcdGNvbnN0IHsgd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodCB9ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKClcblx0XHR0aGlzLndpbldpZHRoID0gd2luZG93V2lkdGhcblx0XHR0aGlzLndpbkhlaWdodCA9IHdpbmRvd0hlaWdodFxuXHR9LFxuXHRtb3VudGVkKCkge1xuXHRcdHRoaXMuY2FudmFzQ3R4ID0gdW5pLmNyZWF0ZUNhbnZhc0NvbnRleHQodGhpcy5jaWQsIHRoaXMpXG5cdFx0Ly8gaDUg6ZyA5bu26L+f57uY5Yi277yM5ZCm5YiZ57uY5Yi25aSx6LSlXG5cdFx0Ly8gI2lmZGVmIEg1XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHQvLyAjZW5kaWZcblx0XHRcdHRoaXMuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuYmdDb2xvcilcblx0XHRcdC8vICNpZmRlZiBINVxuXHRcdH0sIDEwKVxuXHRcdC8vICNlbmRpZlxuXHRcdC8vIOWIneWni+WMluWujOaIkO+8jOinpuWPkSBpbml0IOS6i+S7tlxuXHRcdHRoaXMuJGVtaXQoJ2luaXQnLCB0aGlzLnByb3ZpZGVTaWduSW50ZXJmYWNlKCkpXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRvblRvdWNoU3RhcnQoZSkge1xuXHRcdFx0Y29uc3QgcG9zID0gZS50b3VjaGVzWzBdXG5cdFx0XHR0aGlzLmxpbmVEYXRhLnB1c2goe1xuXHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdGNvbG9yOiB0aGlzLnBlbkxpbmVDb2xvciB8fCB0aGlzLmxpbmVDb2xvcixcblx0XHRcdFx0XHR3aWR0aDogdGhpcy5wZW5MaW5lV2lkdGggfHwgdGhpcy5saW5lV2lkdGhcblx0XHRcdFx0fSxcblx0XHRcdFx0Ly8g5bGP5bmV5Z2Q5qCHXG5cdFx0XHRcdGNvb3JkaW5hdGVzOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogZS50eXBlLFxuXHRcdFx0XHRcdFx0eDogcG9zLngsXG5cdFx0XHRcdFx0XHR5OiBwb3MueVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSlcblx0XHRcdHRoaXMuZHJhd0xpbmUoKVxuXHRcdH0sXG5cdFx0b25Ub3VjaE1vdmUoZSkge1xuXHRcdFx0Y29uc3QgcG9zID0gZS50b3VjaGVzWzBdXG5cdFx0XHR0aGlzLmxpbmVEYXRhW3RoaXMubGluZURhdGEubGVuZ3RoIC0gMV0uY29vcmRpbmF0ZXMucHVzaCh7XG5cdFx0XHRcdHR5cGU6IGUudHlwZSxcblx0XHRcdFx0eDogcG9zLngsXG5cdFx0XHRcdHk6IHBvcy55XG5cdFx0XHR9KVxuXHRcdFx0dGhpcy5kcmF3TGluZSgpXG5cdFx0fSxcblx0XHRvblRvdWNoRW5kKGUpIHtcblx0XHRcdHRoaXMuJGVtaXQoJ2VuZCcsIHRoaXMubGluZURhdGEpXG5cdFx0fSxcblx0XHQvLyDmuIXnqbrnlLvluINcblx0XHRjbGVhcigpIHtcblx0XHRcdHRoaXMubGluZURhdGEgPSBbXVxuXHRcdFx0dGhpcy5jYW52YXNDdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2luV2lkdGgsIHRoaXMud2luSGVpZ2h0KVxuXHRcdFx0dGhpcy5jYW52YXNDdHguZHJhdygpXG5cdFx0XHR0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmJnQ29sb3IpXG5cdFx0XHR0aGlzLiRlbWl0KCdjbGVhcicpXG5cdFx0fSxcblx0XHQvLyDmkqTplIBcblx0XHRyZXZva2UoKSB7XG5cdFx0XHR0aGlzLnNldEJhY2tncm91bmRDb2xvcih0aGlzLmJnQ29sb3IpXG5cdFx0XHR0aGlzLmxpbmVEYXRhLnBvcCgpXG5cdFx0XHR0aGlzLmxpbmVEYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRcdHRoaXMuY2FudmFzQ3R4LmJlZ2luUGF0aCgpXG5cdFx0XHRcdHRoaXMuY2FudmFzQ3R4LnNldExpbmVDYXAoJ3JvdW5kJylcblx0XHRcdFx0dGhpcy5jYW52YXNDdHguc2V0U3Ryb2tlU3R5bGUoaXRlbS5zdHlsZS5jb2xvcilcblx0XHRcdFx0dGhpcy5jYW52YXNDdHguc2V0TGluZVdpZHRoKGl0ZW0uc3R5bGUud2lkdGgpXG5cdFx0XHRcdGlmIChpdGVtLmNvb3JkaW5hdGVzLmxlbmd0aCA8IDIpIHtcblx0XHRcdFx0XHRjb25zdCBwb3MgPSBpdGVtLmNvb3JkaW5hdGVzWzBdXG5cdFx0XHRcdFx0dGhpcy5jYW52YXNDdHgubW92ZVRvKHBvcy54LCBwb3MueSlcblx0XHRcdFx0XHR0aGlzLmNhbnZhc0N0eC5saW5lVG8ocG9zLnggKyAxLCBwb3MueSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpdGVtLmNvb3JkaW5hdGVzLmZvckVhY2gocG9zID0+IHtcblx0XHRcdFx0XHRcdGlmIChwb3MudHlwZSA9PSAndG91Y2hzdGFydCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5jYW52YXNDdHgubW92ZVRvKHBvcy54LCBwb3MueSlcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuY2FudmFzQ3R4LmxpbmVUbyhwb3MueCwgcG9zLnkpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmNhbnZhc0N0eC5zdHJva2UoKVxuXHRcdFx0fSlcblx0XHRcdHRoaXMuY2FudmFzQ3R4LmRyYXcodHJ1ZSlcblx0XHRcdHRoaXMuJGVtaXQoJ3Jldm9rZScsIHRoaXMubGluZURhdGEpXG5cdFx0fSxcblx0XHQvLyDnu5jliLbnur/mnaFcblx0XHRkcmF3TGluZSgpIHtcblx0XHRcdGNvbnN0IGxpbmVEYXRhTGVuID0gdGhpcy5saW5lRGF0YS5sZW5ndGhcblx0XHRcdGlmICghbGluZURhdGFMZW4pIHJldHVyblxuXHRcdFx0Y29uc3QgY3VycmVudExpbmVEYXRhID0gdGhpcy5saW5lRGF0YVtsaW5lRGF0YUxlbiAtIDFdXG5cdFx0XHRjb25zdCBjb29yZGluYXRlcyA9IGN1cnJlbnRMaW5lRGF0YS5jb29yZGluYXRlc1xuXHRcdFx0Y29uc3QgY29vcmRpbmF0ZXNMZW4gPSBjb29yZGluYXRlcy5sZW5ndGhcblx0XHRcdGlmICghY29vcmRpbmF0ZXNMZW4pIHJldHVyblxuXHRcdFx0bGV0IHN0YXJ0UG9zXG5cdFx0XHRsZXQgZW5kUG9zXG5cdFx0XHRpZiAoY29vcmRpbmF0ZXNMZW4gPCAyKSB7XG5cdFx0XHRcdC8vIG9ubHkgc3RhcnQsIG5vIG1vdmUgZXZlbnRcblx0XHRcdFx0c3RhcnRQb3MgPSBjb29yZGluYXRlc1tjb29yZGluYXRlc0xlbiAtIDFdXG5cdFx0XHRcdGVuZFBvcyA9IHtcblx0XHRcdFx0XHR4OiBzdGFydFBvcy54ICsgMSxcblx0XHRcdFx0XHR5OiBzdGFydFBvcy55XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0YXJ0UG9zID0gY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXNMZW4gLSAyXVxuXHRcdFx0XHRlbmRQb3MgPSBjb29yZGluYXRlc1tjb29yZGluYXRlc0xlbiAtIDFdXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHN0eWxlID0gY3VycmVudExpbmVEYXRhLnN0eWxlXG5cdFx0XHR0aGlzLmNhbnZhc0N0eC5iZWdpblBhdGgoKVxuXHRcdFx0dGhpcy5jYW52YXNDdHguc2V0TGluZUNhcCgncm91bmQnKVxuXHRcdFx0dGhpcy5jYW52YXNDdHguc2V0U3Ryb2tlU3R5bGUoc3R5bGUuY29sb3IpXG5cdFx0XHR0aGlzLmNhbnZhc0N0eC5zZXRMaW5lV2lkdGgoc3R5bGUud2lkdGgpXG5cdFx0XHR0aGlzLmNhbnZhc0N0eC5tb3ZlVG8oc3RhcnRQb3MueCwgc3RhcnRQb3MueSlcblx0XHRcdHRoaXMuY2FudmFzQ3R4LmxpbmVUbyhlbmRQb3MueCwgZW5kUG9zLnkpXG5cdFx0XHQvLyBjb25zdCBQMSA9IHRoaXMuY2FjdWxhdGVCZXppZXIoc3RhcnRQb3MsIGVuZFBvcywgY2VudGVyUG9zKVxuXHRcdFx0Ly8gY29uc29sZS5sb2coUDEueCwgUDEueSlcblx0XHRcdC8vIHRoaXMuY2FudmFzQ3R4Lm1vdmVUbyhzdGFydFBvcy54LCBzdGFydFBvcy55KVxuXHRcdFx0Ly8gdGhpcy5jYW52YXNDdHgucXVhZHJhdGljQ3VydmVUbyhQMS54LCBQMS55LCBlbmRQb3MueCwgZW5kUG9zLnkpXG5cdFx0XHR0aGlzLmNhbnZhc0N0eC5zdHJva2UoKVxuXHRcdFx0dGhpcy5jYW52YXNDdHguZHJhdyh0cnVlKVxuXHRcdH0sXG5cdFx0Ly8g5L+d5a2YcG5n5Zu+54mH77yM5paH5Lu25ZCN6YWN572uIGZpbGVuYW1lIOS7heaUr+aMgSBoNVxuXHRcdGFzeW5jIHNhdmVJbWFnZShmaWxlbmFtZSA9ICfnrb7lkI0nKSB7XG5cdFx0XHRjb25zdCB0ZW1wRmlsZVBhdGggPSBhd2FpdCB0aGlzLmNhbnZhc1RvVGVtcEZpbGVQYXRoKClcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdC8vICNpZmRlZiBINVxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblx0XHRcdFx0XHRhLmhyZWYgPSB0ZW1wRmlsZVBhdGhcblx0XHRcdFx0XHRhLmRvd25sb2FkID0gZmlsZW5hbWVcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpXG5cdFx0XHRcdFx0YS5jbGljaygpXG5cdFx0XHRcdFx0YS5yZW1vdmUoKVxuXHRcdFx0XHRcdHJlc29sdmUoe1xuXHRcdFx0XHRcdFx0ZXJyTXNnOiAnc2F2ZUltYWdlSDU6b2snXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZSlcblx0XHRcdFx0XHRyZWplY3QoZSlcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyAjZW5kaWZcblx0XHRcdFx0Ly8gI2lmbmRlZiBINVxuXHRcdFx0XHR1bmkuc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XG5cdFx0XHRcdFx0ZmlsZVBhdGg6IHRlbXBGaWxlUGF0aCxcblx0XHRcdFx0XHRzdWNjZXNzKHJlc09iaikge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXNPYmopXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRmYWlsKGVycikge1xuXHRcdFx0XHRcdFx0cmVqZWN0KGVycilcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC8vICNlbmRpZlxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIGNhbnZhcyDkv53lrZjkuLrkuLTml7blm77niYfot6/lvoTvvIxoNei/lOWbniBiYXNlNjRcblx0XHRjYW52YXNUb1RlbXBGaWxlUGF0aChjb25mID0ge30pIHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHVuaS5jYW52YXNUb1RlbXBGaWxlUGF0aChcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRjYW52YXNJZDogdGhpcy5jaWQsXG5cdFx0XHRcdFx0XHQuLi5jb25mLFxuXHRcdFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBwYXRoID0gcGx1cy5pby5jb252ZXJ0TG9jYWxGaWxlU3lzdGVtVVJMKHJlcy50ZW1wRmlsZVBhdGgpIC8v57ud5a+56Lev5b6EXHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgZmlsZVJlYWRlciA9IG5ldyBwbHVzLmlvLkZpbGVSZWFkZXIoKVxyXG5cdFx0XHRcdFx0XHRcdGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChwYXRoKVxyXG5cdFx0XHRcdFx0XHRcdGZpbGVSZWFkZXIub25sb2FkZW5kID0gKHJlcykgPT4geyAvL+ivu+WPluaWh+S7tuaIkOWKn+WujOaIkOeahOWbnuiwg+WHveaVsFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyZXMudGFyZ2V0LnJlc3VsdCkgLy/ovpPlh7piYXNlNjTlhoXlrrlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdFx0Ly8gI2lmbmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUocmVzLnRlbXBGaWxlUGF0aClcclxuXHRcdFx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGZhaWw6IGVyciA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmYWlsJywgZXJyKVxuXHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGhpc1xuXHRcdFx0XHQpXG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0c2V0QmFja2dyb3VuZENvbG9yKGNvbG9yID0gJyNmZmYnKSB7XG5cdFx0XHR0aGlzLmNhbnZhc0N0eC5iZWdpblBhdGgoKVxuXHRcdFx0dGhpcy5jYW52YXNDdHguc2V0RmlsbFN0eWxlKGNvbG9yKVxuXHRcdFx0dGhpcy5jYW52YXNDdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aW5XaWR0aCwgdGhpcy53aW5IZWlnaHQpXG5cdFx0XHR0aGlzLmNhbnZhc0N0eC5maWxsKClcblx0XHRcdHRoaXMuY2FudmFzQ3R4LmRyYXcodHJ1ZSlcblx0XHR9LFxuXHRcdHNldExpbmVXaWR0aChudW1iZXJWYWwpIHtcblx0XHRcdHRoaXMucGVuTGluZVdpZHRoID0gbnVtYmVyVmFsXG5cdFx0fSxcblx0XHRzZXRMaW5lQ29sb3Ioc3RyVmFsdWUpIHtcblx0XHRcdHRoaXMucGVuTGluZUNvbG9yID0gc3RyVmFsdWVcblx0XHR9LFxuXHRcdC8vIOWQkeWkluaatOmcsuWGhemDqOaWueazlVxuXHRcdHByb3ZpZGVTaWduSW50ZXJmYWNlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2lkOiB0aGlzLmNpZCxcblx0XHRcdFx0Y3R4OiB0aGlzLmNhbnZhc0N0eCxcblx0XHRcdFx0Y2xlYXI6IHRoaXMuY2xlYXIsXG5cdFx0XHRcdHJldm9rZTogdGhpcy5yZXZva2UsXG5cdFx0XHRcdHNhdmVJbWFnZTogdGhpcy5zYXZlSW1hZ2UsXG5cdFx0XHRcdGNhbnZhc1RvVGVtcEZpbGVQYXRoOiB0aGlzLmNhbnZhc1RvVGVtcEZpbGVQYXRoLFxuXHRcdFx0XHRzZXRMaW5lV2lkdGg6IHRoaXMuc2V0TGluZVdpZHRoLFxuXHRcdFx0XHRzZXRMaW5lQ29sb3I6IHRoaXMuc2V0TGluZUNvbG9yLFxuXHRcdFx0XHRzZXRCYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc2V0QmFja2dyb3VuZENvbG9yLFxuXHRcdFx0XHRnZXRMaW5lRGF0YTogKCkgPT4gdGhpcy5saW5lRGF0YVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICog6K6h566X5LqM5qyh6LSd5aGe5bCU5puy57q/IOaOp+WItueCuSBQMVxuXHRcdCAqIOi1t+eCuSBQMCh4MCx5MCnjgIHmjqfliLbngrlQMSh4MSwgeTEp44CBUDIoeDIsIHkyKeOAgeabsue6v+S4iuS7u+aEj+eCuUIoeCwgeSlcblx0XHQgKiDkuozmrKHotJ3loZ7lsJTlhazlvI/vvJpCKHQpID0gKDEtdCnCslAwICsgMnQoMS10KVAxICsgdMKyUDJcblx0XHQgKiDku6PlhaXlnZDmoIflvpfvvJpcblx0XHQgKiB4ID0gKDEtdCnCsip4MCArIDJ0KDEtdCkqeDEgKyB0wrIqeDJcblx0XHQgKiB5ID0gKDEtdCnCsip5MCArIDJ0KDEtdCkqeTEgKyB0wrIqeTJcblx0XHQgKi9cblx0XHRjYWN1bGF0ZUJlemllcihQMCwgUDIsIEIsIHQgPSAwLjUpIHtcblx0XHRcdGNvbnN0IHsgeDogeDAsIHk6IHkwIH0gPSBQMFxuXHRcdFx0Y29uc3QgeyB4OiB4MiwgeTogeTIgfSA9IFAyXG5cdFx0XHRjb25zdCB7IHgsIHkgfSA9IEJcblx0XHRcdGxldCB4MSA9ICh4IC0gKDEgLSB0KSAqICgxIC0gdCkgKiB4MCAtIHQgKiB0ICogeDIpIC8gKDIgKiB0ICogKDEgLSB0KSlcblx0XHRcdGxldCB5MSA9ICh5IC0gKDEgLSB0KSAqICgxIC0gdCkgKiB5MCAtIHQgKiB0ICogeTIpIC8gKDIgKiB0ICogKDEgLSB0KSlcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHg6IHgxLFxuXHRcdFx0XHR5OiB5MVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5zaWduYXR1cmUtd3JhcCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 11 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 12);

/***/ }),
/* 12 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 13);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 13 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 14 */
/*!****************************************************************************!*\
  !*** E:/Project/HbuilderProjects/canvas/uni_modules/v-sign/utils/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.isNumber = isNumber;exports.formatSize = formatSize; /**\r\n                                                                                                                                         * 判断是否未数值\r\n                                                                                                                                         * @param {Object} val\r\n                                                                                                                                         */\nfunction isNumber(val) {\n  return !isNaN(Number(val));\n}\n\n/**\r\n   * 处理大小单位\r\n   * @param {Object} val\r\n   */\nfunction formatSize(val) {var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';\n  return isNumber(val) ? \"\".concat(val).concat(unit) : val;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdi1zaWduL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbImlzTnVtYmVyIiwidmFsIiwiaXNOYU4iLCJOdW1iZXIiLCJmb3JtYXRTaXplIiwidW5pdCJdLCJtYXBwaW5ncyI6IjJIQUFBOzs7O0FBSU8sU0FBU0EsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDN0IsU0FBTyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0YsR0FBRCxDQUFQLENBQWI7QUFDQTs7QUFFRDs7OztBQUlPLFNBQVNHLFVBQVQsQ0FBb0JILEdBQXBCLEVBQXVDLEtBQWRJLElBQWMsdUVBQVAsS0FBTztBQUM3QyxTQUFPTCxRQUFRLENBQUNDLEdBQUQsQ0FBUixhQUFtQkEsR0FBbkIsU0FBeUJJLElBQXpCLElBQWtDSixHQUF6QztBQUNBIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWIpOaWreaYr+WQpuacquaVsOWAvFxyXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XHJcblx0cmV0dXJuICFpc05hTihOdW1iZXIodmFsKSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWkhOeQhuWkp+Wwj+WNleS9jVxyXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0U2l6ZSh2YWwsIHVuaXQgPSAncnB4Jykge1xyXG5cdHJldHVybiBpc051bWJlcih2YWwpID8gYCR7dmFsfSR7dW5pdH1gIDogdmFsXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 16 */
/*!****************************************************************************************************!*\
  !*** E:/Project/HbuilderProjects/canvas/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 17);\n/* harmony import */ var _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStsQixDQUFnQiw4bkJBQUcsRUFBQyIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcRGV2ZWxvcG1lbnRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxEZXZlbG9wbWVudFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXERldmVsb3BtZW50XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXERldmVsb3BtZW50XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXERldmVsb3BtZW50XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcRGV2ZWxvcG1lbnRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxEZXZlbG9wbWVudFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxEZXZlbG9wbWVudFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Project/HbuilderProjects/canvas/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 11));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} //\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      winWidth: 0,\n      winHeight: 0 };\n\n  },\n  created: function created() {\n    // 宽度设为可使用窗口宽度\n    var _uni$getSystemInfoSyn =\n\n    uni.getSystemInfoSync(),windowWidth = _uni$getSystemInfoSyn.windowWidth;\n    this.winWidth = windowWidth;\n    this.winHeight = windowWidth;\n  },\n  methods: {\n    onSignInit: function onSignInit(signCtx) {\n      this.signCtx = signCtx;\n    },\n    // 清空\n    clear: function clear() {\n      __f__(\"log\", this.signCtx.getLineData(), \" at pages/index/index.vue:30\");\n      this.signCtx.clear();\n    },\n    saveTempFilePath: function saveTempFilePath() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n                  _this.signCtx.canvasToTempFilePath());case 2:res = _context.sent;\n                __f__(\"log\", res, \" at pages/index/index.vue:35\");case 4:case \"end\":return _context.stop();}}}, _callee);}))();\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJ3aW5XaWR0aCIsIndpbkhlaWdodCIsImNyZWF0ZWQiLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd1dpZHRoIiwibWV0aG9kcyIsIm9uU2lnbkluaXQiLCJzaWduQ3R4IiwiY2xlYXIiLCJnZXRMaW5lRGF0YSIsInNhdmVUZW1wRmlsZVBhdGgiLCJjYW52YXNUb1RlbXBGaWxlUGF0aCIsInJlcyJdLCJtYXBwaW5ncyI6Inc4QkFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNkQSxNQURjLGtCQUNQO0FBQ04sV0FBTztBQUNOQyxjQUFRLEVBQUUsQ0FESjtBQUVOQyxlQUFTLEVBQUUsQ0FGTCxFQUFQOztBQUlBLEdBTmE7QUFPZEMsU0FQYyxxQkFPSjtBQUNUO0FBRFM7O0FBSUxDLE9BQUcsQ0FBQ0MsaUJBQUosRUFKSyxDQUdSQyxXQUhRLHlCQUdSQSxXQUhRO0FBS1QsU0FBS0wsUUFBTCxHQUFnQkssV0FBaEI7QUFDQSxTQUFLSixTQUFMLEdBQWlCSSxXQUFqQjtBQUNBLEdBZGE7QUFlZEMsU0FBTyxFQUFFO0FBQ1JDLGNBRFEsc0JBQ0dDLE9BREgsRUFDWTtBQUNuQixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxLQUhPO0FBSVI7QUFDQUMsU0FMUSxtQkFLQTtBQUNQLG1CQUFZLEtBQUtELE9BQUwsQ0FBYUUsV0FBYixFQUFaO0FBQ0EsV0FBS0YsT0FBTCxDQUFhQyxLQUFiO0FBQ0EsS0FSTztBQVNGRSxvQkFURSw4QkFTaUI7QUFDTix1QkFBSSxDQUFDSCxPQUFMLENBQWFJLG9CQUFiLEVBRE0sU0FDbEJDLEdBRGtCO0FBRXhCLDZCQUFZQSxHQUFaLGtDQUZ3QjtBQUd4QixLQVpPLEVBZkssRSIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0d2luV2lkdGg6IDAsXG5cdFx0XHR3aW5IZWlnaHQ6IDBcblx0XHR9XG5cdH0sXG5cdGNyZWF0ZWQoKSB7XG5cdFx0Ly8g5a695bqm6K6+5Li65Y+v5L2/55So56qX5Y+j5a695bqmXG5cdFx0Y29uc3Qge1xuXHRcdFx0d2luZG93V2lkdGhcblx0XHR9ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKClcblx0XHR0aGlzLndpbldpZHRoID0gd2luZG93V2lkdGhcblx0XHR0aGlzLndpbkhlaWdodCA9IHdpbmRvd1dpZHRoXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRvblNpZ25Jbml0KHNpZ25DdHgpIHtcblx0XHRcdHRoaXMuc2lnbkN0eCA9IHNpZ25DdHhcblx0XHR9LFxuXHRcdC8vIOa4heepulxuXHRcdGNsZWFyKCkge1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zaWduQ3R4LmdldExpbmVEYXRhKCkpXG5cdFx0XHR0aGlzLnNpZ25DdHguY2xlYXIoKVxuXHRcdH0sXG5cdFx0YXN5bmMgc2F2ZVRlbXBGaWxlUGF0aCgpIHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuc2lnbkN0eC5jYW52YXNUb1RlbXBGaWxlUGF0aCgpXG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0fSxcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!**************************************************!*\
  !*** E:/Project/HbuilderProjects/canvas/App.vue ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 19);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDa0w7QUFDbEwsZ0JBQWdCLDJMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcRGV2ZWxvcG1lbnRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!***************************************************************************!*\
  !*** E:/Project/HbuilderProjects/canvas/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 20);\n/* harmony import */ var _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Development_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtsQixDQUFnQixpbkJBQUcsRUFBQyIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcRGV2ZWxvcG1lbnRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxEZXZlbG9wbWVudFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXERldmVsb3BtZW50XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXERldmVsb3BtZW50XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcRGV2ZWxvcG1lbnRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxEZXZlbG9wbWVudFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXERldmVsb3BtZW50XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXERldmVsb3BtZW50XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Project/HbuilderProjects/canvas/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })
],[[0,"app-config"]]]);