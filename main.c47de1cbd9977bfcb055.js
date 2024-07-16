/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var themeButtons = document.querySelectorAll(".header__theme-menu-button");
themeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    themeButtons.forEach(function (btn) {
      btn.classList.remove("header__theme-menu-button_active");
      btn.removeAttribute("disabled");
    });
    if (_toConsumableArray(button.classList).includes("header__theme-menu-button_type_light")) {
      changeTheme("light");
    } else if (_toConsumableArray(button.classList).includes("header__theme-menu-button_type_dark")) {
      changeTheme("dark");
    } else {
      changeTheme("auto");
    }
    button.classList.add("header__theme-menu-button_active");
    button.setAttribute("disabled", true);
  });
});
function changeTheme(theme) {
  document.body.className = "page";
  document.body.classList.add("theme_".concat(theme));
  localStorage.setItem("theme", theme);
}
function initTheme() {
  var theme = localStorage.getItem("theme");
  if (theme) {
    changeTheme(theme);
    themeButtons.forEach(function (btn) {
      btn.classList.remove("header__theme-menu-button_active");
      btn.removeAttribute("disabled");
    });
    document.querySelector(".header__theme-menu-button_type_".concat(theme)).classList.add("header__theme-menu-button_active");
    document.querySelector(".header__theme-menu-button_type_".concat(theme)).setAttribute("disabled", true);
  }
}
initTheme();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jNDdkZTFjYmQ5OTc3YmZjYjA1NS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ3JCLElBQU1BLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBQztBQUU1RUYsWUFBWSxDQUFDRyxPQUFPLENBQUMsVUFBQ0MsTUFBTSxFQUFLO0VBQy9CQSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3JDTCxZQUFZLENBQUNHLE9BQU8sQ0FBQyxVQUFDRyxHQUFHLEVBQUs7TUFDNUJBLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsa0NBQWtDLENBQUM7TUFDeERGLEdBQUcsQ0FBQ0csZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNqQyxDQUFDLENBQUM7SUFDRixJQUNFQyxrQkFBQSxDQUFJTixNQUFNLENBQUNHLFNBQVMsRUFBRUksUUFBUSxDQUFDLHNDQUFzQyxDQUFDLEVBQ3RFO01BQ0FDLFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQyxNQUFNLElBQ0xGLGtCQUFBLENBQUlOLE1BQU0sQ0FBQ0csU0FBUyxFQUFFSSxRQUFRLENBQUMscUNBQXFDLENBQUMsRUFDckU7TUFDQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDLE1BQU07TUFDTEEsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUNyQjtJQUNBUixNQUFNLENBQUNHLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLGtDQUFrQyxDQUFDO0lBQ3hEVCxNQUFNLENBQUNVLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO0VBQ3ZDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLFNBQVNGLFdBQVdBLENBQUNHLEtBQUssRUFBRTtFQUMxQmQsUUFBUSxDQUFDZSxJQUFJLENBQUNDLFNBQVMsR0FBRyxNQUFNO0VBQ2hDaEIsUUFBUSxDQUFDZSxJQUFJLENBQUNULFNBQVMsQ0FBQ00sR0FBRyxVQUFBSyxNQUFBLENBQVVILEtBQUssQ0FBRSxDQUFDO0VBQzdDSSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLEVBQUVMLEtBQUssQ0FBQztBQUN0QztBQUVBLFNBQVNNLFNBQVNBLENBQUEsRUFBRztFQUNuQixJQUFNTixLQUFLLEdBQUdJLFlBQVksQ0FBQ0csT0FBTyxDQUFDLE9BQU8sQ0FBQztFQUMzQyxJQUFJUCxLQUFLLEVBQUU7SUFDVEgsV0FBVyxDQUFDRyxLQUFLLENBQUM7SUFDbEJmLFlBQVksQ0FBQ0csT0FBTyxDQUFDLFVBQUNHLEdBQUcsRUFBSztNQUM1QkEsR0FBRyxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxrQ0FBa0MsQ0FBQztNQUN4REYsR0FBRyxDQUFDRyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2pDLENBQUMsQ0FBQztJQUNGUixRQUFRLENBQ0xzQixhQUFhLG9DQUFBTCxNQUFBLENBQW9DSCxLQUFLLENBQUUsQ0FBQyxDQUN6RFIsU0FBUyxDQUFDTSxHQUFHLENBQUMsa0NBQWtDLENBQUM7SUFDcERaLFFBQVEsQ0FDTHNCLGFBQWEsb0NBQUFMLE1BQUEsQ0FBb0NILEtBQUssQ0FBRSxDQUFDLENBQ3pERCxZQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztFQUNuQztBQUNGO0FBRUFPLFNBQVMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbG96aG5vLXNvc3JlZG90b2NoaXRzeWEvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL3Nsb3pobm8tc29zcmVkb3RvY2hpdHN5YS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zbG96aG5vLXNvc3JlZG90b2NoaXRzeWEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zbG96aG5vLXNvc3JlZG90b2NoaXRzeWEvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmNvbnN0IHRoZW1lQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyX190aGVtZS1tZW51LWJ1dHRvblwiKTtcclxuXHJcbnRoZW1lQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHRoZW1lQnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJfX3RoZW1lLW1lbnUtYnV0dG9uX2FjdGl2ZVwiKTtcclxuICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoXHJcbiAgICAgIFsuLi5idXR0b24uY2xhc3NMaXN0XS5pbmNsdWRlcyhcImhlYWRlcl9fdGhlbWUtbWVudS1idXR0b25fdHlwZV9saWdodFwiKVxyXG4gICAgKSB7XHJcbiAgICAgIGNoYW5nZVRoZW1lKFwibGlnaHRcIik7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBbLi4uYnV0dG9uLmNsYXNzTGlzdF0uaW5jbHVkZXMoXCJoZWFkZXJfX3RoZW1lLW1lbnUtYnV0dG9uX3R5cGVfZGFya1wiKVxyXG4gICAgKSB7XHJcbiAgICAgIGNoYW5nZVRoZW1lKFwiZGFya1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNoYW5nZVRoZW1lKFwiYXV0b1wiKTtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX190aGVtZS1tZW51LWJ1dHRvbl9hY3RpdmVcIik7XHJcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlVGhlbWUodGhlbWUpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IFwicGFnZVwiO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChgdGhlbWVfJHt0aGVtZX1gKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHRoZW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFRoZW1lKCkge1xyXG4gIGNvbnN0IHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKTtcclxuICBpZiAodGhlbWUpIHtcclxuICAgIGNoYW5nZVRoZW1lKHRoZW1lKTtcclxuICAgIHRoZW1lQnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJfX3RoZW1lLW1lbnUtYnV0dG9uX2FjdGl2ZVwiKTtcclxuICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihgLmhlYWRlcl9fdGhlbWUtbWVudS1idXR0b25fdHlwZV8ke3RoZW1lfWApXHJcbiAgICAgIC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX190aGVtZS1tZW51LWJ1dHRvbl9hY3RpdmVcIik7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihgLmhlYWRlcl9fdGhlbWUtbWVudS1idXR0b25fdHlwZV8ke3RoZW1lfWApXHJcbiAgICAgIC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcbmluaXRUaGVtZSgpO1xyXG4iXSwibmFtZXMiOlsidGhlbWVCdXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJidG4iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJpbmNsdWRlcyIsImNoYW5nZVRoZW1lIiwiYWRkIiwic2V0QXR0cmlidXRlIiwidGhlbWUiLCJib2R5IiwiY2xhc3NOYW1lIiwiY29uY2F0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImluaXRUaGVtZSIsImdldEl0ZW0iLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==