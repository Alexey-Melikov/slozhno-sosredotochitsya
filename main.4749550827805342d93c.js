/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var themeButtons = document.querySelectorAll('.header__theme-menu-button');
themeButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    themeButtons.forEach(function (btn) {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });
    if (_toConsumableArray(button.classList).includes('header__theme-menu-button_type_light')) {
      changeTheme('light');
    } else if (_toConsumableArray(button.classList).includes('header__theme-menu-button_type_dark')) {
      changeTheme('dark');
    } else {
      changeTheme('auto');
    }
    button.classList.add('header__theme-menu-button_active');
    button.setAttribute('disabled', true);
  });
});
function changeTheme(theme) {
  document.body.className = 'page';
  document.body.classList.add("theme_".concat(theme));
  localStorage.setItem('theme', theme);
}
function initTheme() {
  var theme = localStorage.getItem('theme');
  if (theme) {
    changeTheme(theme);
    themeButtons.forEach(function (btn) {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });
    document.querySelector(".header__theme-menu-button_type_".concat(theme)).classList.add('header__theme-menu-button_active');
    document.querySelector(".header__theme-menu-button_type_".concat(theme)).setAttribute('disabled', true);
  }
}
initTheme();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40NzQ5NTUwODI3ODA1MzQyZDkzYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBQztBQUU1RUYsWUFBWSxDQUFDRyxPQUFPLENBQUMsVUFBQ0MsTUFBTSxFQUFLO0VBQy9CQSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3JDTCxZQUFZLENBQUNHLE9BQU8sQ0FBQyxVQUFDRyxHQUFHLEVBQUs7TUFDNUJBLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsa0NBQWtDLENBQUM7TUFDeERGLEdBQUcsQ0FBQ0csZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNqQyxDQUFDLENBQUM7SUFDRixJQUNFQyxrQkFBQSxDQUFJTixNQUFNLENBQUNHLFNBQVMsRUFBRUksUUFBUSxDQUFDLHNDQUFzQyxDQUFDLEVBQ3RFO01BQ0FDLFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQyxNQUFNLElBQ0xGLGtCQUFBLENBQUlOLE1BQU0sQ0FBQ0csU0FBUyxFQUFFSSxRQUFRLENBQUMscUNBQXFDLENBQUMsRUFDckU7TUFDQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDLE1BQU07TUFDTEEsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUNyQjtJQUNBUixNQUFNLENBQUNHLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLGtDQUFrQyxDQUFDO0lBQ3hEVCxNQUFNLENBQUNVLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO0VBQ3ZDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLFNBQVNGLFdBQVdBLENBQUNHLEtBQUssRUFBRTtFQUMxQmQsUUFBUSxDQUFDZSxJQUFJLENBQUNDLFNBQVMsR0FBRyxNQUFNO0VBQ2hDaEIsUUFBUSxDQUFDZSxJQUFJLENBQUNULFNBQVMsQ0FBQ00sR0FBRyxVQUFBSyxNQUFBLENBQVVILEtBQUssQ0FBRSxDQUFDO0VBQzdDSSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLEVBQUVMLEtBQUssQ0FBQztBQUN0QztBQUVBLFNBQVNNLFNBQVNBLENBQUEsRUFBRztFQUNuQixJQUFNTixLQUFLLEdBQUdJLFlBQVksQ0FBQ0csT0FBTyxDQUFDLE9BQU8sQ0FBQztFQUMzQyxJQUFJUCxLQUFLLEVBQUU7SUFDVEgsV0FBVyxDQUFDRyxLQUFLLENBQUM7SUFDbEJmLFlBQVksQ0FBQ0csT0FBTyxDQUFDLFVBQUNHLEdBQUcsRUFBSztNQUM1QkEsR0FBRyxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxrQ0FBa0MsQ0FBQztNQUN4REYsR0FBRyxDQUFDRyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2pDLENBQUMsQ0FBQztJQUNGUixRQUFRLENBQ0xzQixhQUFhLG9DQUFBTCxNQUFBLENBQW9DSCxLQUFLLENBQUUsQ0FBQyxDQUN6RFIsU0FBUyxDQUFDTSxHQUFHLENBQUMsa0NBQWtDLENBQUM7SUFDcERaLFFBQVEsQ0FDTHNCLGFBQWEsb0NBQUFMLE1BQUEsQ0FBb0NILEtBQUssQ0FBRSxDQUFDLENBQ3pERCxZQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztFQUNuQztBQUNGO0FBRUFPLFNBQVMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbG96aG5vLXNvc3JlZG90b2NoaXRzeWEvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGhlbWVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fdGhlbWUtbWVudS1idXR0b24nKTtcclxuXHJcbnRoZW1lQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0aGVtZUJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX3RoZW1lLW1lbnUtYnV0dG9uX2FjdGl2ZScpO1xyXG4gICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoXHJcbiAgICAgIFsuLi5idXR0b24uY2xhc3NMaXN0XS5pbmNsdWRlcygnaGVhZGVyX190aGVtZS1tZW51LWJ1dHRvbl90eXBlX2xpZ2h0JylcclxuICAgICkge1xyXG4gICAgICBjaGFuZ2VUaGVtZSgnbGlnaHQnKTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIFsuLi5idXR0b24uY2xhc3NMaXN0XS5pbmNsdWRlcygnaGVhZGVyX190aGVtZS1tZW51LWJ1dHRvbl90eXBlX2RhcmsnKVxyXG4gICAgKSB7XHJcbiAgICAgIGNoYW5nZVRoZW1lKCdkYXJrJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjaGFuZ2VUaGVtZSgnYXV0bycpO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fdGhlbWUtbWVudS1idXR0b25fYWN0aXZlJyk7XHJcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVRoZW1lKHRoZW1lKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSAncGFnZSc7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGB0aGVtZV8ke3RoZW1lfWApO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHRoZW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFRoZW1lKCkge1xyXG4gIGNvbnN0IHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XHJcbiAgaWYgKHRoZW1lKSB7XHJcbiAgICBjaGFuZ2VUaGVtZSh0aGVtZSk7XHJcbiAgICB0aGVtZUJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX3RoZW1lLW1lbnUtYnV0dG9uX2FjdGl2ZScpO1xyXG4gICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihgLmhlYWRlcl9fdGhlbWUtbWVudS1idXR0b25fdHlwZV8ke3RoZW1lfWApXHJcbiAgICAgIC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX3RoZW1lLW1lbnUtYnV0dG9uX2FjdGl2ZScpO1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC5oZWFkZXJfX3RoZW1lLW1lbnUtYnV0dG9uX3R5cGVfJHt0aGVtZX1gKVxyXG4gICAgICAuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuaW5pdFRoZW1lKCk7XHJcbiJdLCJuYW1lcyI6WyJ0aGVtZUJ1dHRvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ0biIsImNsYXNzTGlzdCIsInJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIl90b0NvbnN1bWFibGVBcnJheSIsImluY2x1ZGVzIiwiY2hhbmdlVGhlbWUiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJ0aGVtZSIsImJvZHkiLCJjbGFzc05hbWUiLCJjb25jYXQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaW5pdFRoZW1lIiwiZ2V0SXRlbSIsInF1ZXJ5U2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9