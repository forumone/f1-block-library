/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["domReady"];

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
/*!*****************************************!*\
  !*** ./back-to-top/back-to-top-view.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Additional functionality for Back to Top button.
 *
 * @param {number}  threshold    Distance the user must scroll down the page
 *                               before the back to top button is displayed.
 * @param {boolean} smoothScroll Whether to animate the user's scroll back
 *                               to the top.
 */


function initBackToTop() {
  let threshold = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
  let smoothScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    if (!isNaN(threshold)) {
      backToTop.setAttribute('aria-hidden', 'true');
      backToTop.setAttribute('tabIndex', '-1');

      const scrollHandler = () => {
        if (window.scrollY >= threshold && backToTop.getAttribute('aria-hidden') === 'true') {
          backToTop.setAttribute('aria-hidden', 'false');
          backToTop.removeAttribute('tabIndex');
        } else if (window.scrollY < threshold && backToTop.getAttribute('aria-hidden', 'false')) {
          backToTop.setAttribute('aria-hidden', 'true');
          backToTop.setAttribute('tabIndex', '-1');
        }
      };

      let stillScrolling = false;
      window.addEventListener('scroll', () => {
        if (stillScrolling !== false) {
          clearTimeout(stillScrolling);
        }

        stillScrolling = setTimeout(scrollHandler, 60);
      });
    }

    if (smoothScroll) {
      backToTop.addEventListener('click', event => {
        const targetId = backToTop.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
          event.preventDefault();
          const coords = target.getBoundingClientRect();
          target.setAttribute('tabIndex', '-1');
          window.scrollTo({
            top: coords.top,
            behavior: 'smooth'
          });
          target.focus();
        }
      });
    }
  }
}

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(initBackToTop);
}();
/******/ })()
;
//# sourceMappingURL=back-to-top-view.js.map