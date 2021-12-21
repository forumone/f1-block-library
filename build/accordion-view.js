/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./common/_slide.js":
/*!**************************!*\
  !*** ./common/_slide.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slideUp": function() { return /* binding */ slideUp; },
/* harmony export */   "slideDown": function() { return /* binding */ slideDown; },
/* harmony export */   "slideToggle": function() { return /* binding */ slideToggle; }
/* harmony export */ });
/**
 * Use Notes: To ensure a seamless slide animation, the target element
 * should have both margin and padding set to 0. You can customize
 * whitespace inside the target by adding padding to any of the child
 * elements.
 */

/**
 * Slides target element up and out view.
 *
 * @name slideUp
 * @param {HTMLElement} target   - The element sliding up.
 * @param {number}      duration - The duration of the animation, with default value 500.
 */
const slideUp = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.height = `${target.offsetHeight}px`;
  window.requestAnimationFrame(() => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = `${duration}ms`;
    target.style.boxSizing = 'border-box';
    target.style.overflow = 'hidden';
    target.style.paddingTop = '0';
    target.style.paddingBottom = '0';
    target.style.marginTop = '0';
    target.style.marginBottom = '0';
    window.requestAnimationFrame(() => {
      function hideTarget() {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.removeEventListener('transitionend', hideTarget);
        const event = new window.CustomEvent('finishslider', {
          detail: target
        });
        target.dispatchEvent(event);
      }

      target.addEventListener('transitionend', hideTarget);
      target.style.height = '0';
    });
  });
};
/**
 * Slides target element down and into view.
 *
 * @name slideDown
 * @param {HTMLElement} target   - The element sliding down.
 * @param {number}      duration - The duration of the animation, with default value 500.
 */

const slideDown = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  let height;
  target.style.removeProperty('display');
  window.requestAnimationFrame(() => {
    let {
      display
    } = window.getComputedStyle(target);

    if (display === 'none') {
      display = 'block';
    }

    target.style.display = display;
    height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = '0';
    target.style.paddingTop = '0';
    target.style.paddingBottom = '0';
    target.style.marginTop = '0';
    target.style.marginBottom = '0';
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = `${duration}ms`;
    window.requestAnimationFrame(() => {
      function showTarget() {
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.removeEventListener('transitionend', showTarget);
        const event = new window.CustomEvent('finishslider', {
          detail: target
        });
        target.dispatchEvent(event);
      }

      target.style.height = `${height}px`;
      target.addEventListener('transitionend', showTarget);
    });
  });
};
/**
 * Toggle slides target element in and out of view.
 *
 * @name slideToggle
 * @param {HTMLElement} target   - The element to toggle.
 * @param {number}      duration - The duration of the animation, with default value 500.
 */

const slideToggle = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (!target.dataset.isSliding) {
    target.addEventListener('finishslider', () => {
      delete target.dataset.isSliding;
      target.removeEventListener('finishslider');
    });

    if (window.getComputedStyle(target).display === 'none') {
      target.dataset.isSliding = 'true';
      slideDown(target, duration);
    } else {
      target.dataset.isSliding = 'true';
      slideUp(target, duration);
    }
  }
};

/***/ }),

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
/*!*************************************!*\
  !*** ./accordion/accordion-view.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/_slide */ "./common/_slide.js");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);



function initAccordion() {
  const ACCORDION_CLASS = 'js-accordion';
  const ACCORDION_TOGGLE_CLASS = 'js-accordion-toggle';
  const ACCORDION_SPEED = 250;
  const accordions = document.querySelectorAll(`.${ACCORDION_CLASS}`);

  const openAccordion = (accordion, button) => {
    if (button.getAttribute('aria-expanded') === 'false') {
      button.setAttribute('aria-expanded', 'true');
      const accordionSection = document.getElementById(button.getAttribute('aria-controls'));
      accordionSection.setAttribute('aria-expanded', 'true');
      (0,_common_slide__WEBPACK_IMPORTED_MODULE_0__.slideDown)(accordionSection, ACCORDION_SPEED);
    }
  };

  const closeAccordion = (accordion, button) => {
    if (button.getAttribute('aria-expanded') === 'true') {
      button.setAttribute('aria-expanded', 'false');
      const accordionSection = document.getElementById(button.getAttribute('aria-controls'));
      accordionSection.setAttribute('aria-expanded', 'false');
      (0,_common_slide__WEBPACK_IMPORTED_MODULE_0__.slideUp)(document.getElementById(button.getAttribute('aria-controls')), ACCORDION_SPEED);
    }
  }; // Accessible Accordion Functionality
  // Based off example work from W3 best aria practices
  // https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html


  accordions.forEach(accordion => {
    // Allow for multiple accordion sections to be expanded at the same time
    const allowMultiple = accordion.hasAttribute('data-allow-multiple'); // Allow for each toggle to both open and close individually

    const allowToggle = allowMultiple ? true : accordion.hasAttribute('data-allow-toggle'); // Create the array of toggle elements for the accordion group

    const triggers = Array.prototype.slice.call(accordion.querySelectorAll(`.${ACCORDION_TOGGLE_CLASS}`));
    accordion.addEventListener('click', event => {
      // Set target differently depending on click vs. keydown
      // because the <span> inside <button> screws things up
      if (event.target.classList.contains(ACCORDION_TOGGLE_CLASS) || event.target.closest(`.${ACCORDION_TOGGLE_CLASS}`)) {
        let target; // Set target based on click or keydown

        if (event.target.classList.contains(ACCORDION_TOGGLE_CLASS)) {
          target = event.target;
        } else {
          target = event.target.closest(`.${ACCORDION_TOGGLE_CLASS}`);
        } // Check if the current toggle is expanded.


        const isExpanded = target.getAttribute('aria-expanded') === 'true';
        const active = accordion.querySelector('[aria-expanded="true"]'); // without allowMultiple, close the open accordion

        if (!allowMultiple && active && active !== target) {
          closeAccordion(document.getElementById(active.getAttribute('aria-controls')), active, allowToggle, true);
        }

        if (!isExpanded) {
          openAccordion(document.getElementById(target.getAttribute('aria-controls')), target, allowToggle, !allowMultiple);
        } else if (allowToggle && isExpanded) {
          closeAccordion(document.getElementById(target.getAttribute('aria-controls')), target, allowToggle, !allowMultiple);
        }

        event.preventDefault();
      }
    }); // Bind keyboard behaviors on the main accordion container

    accordion.addEventListener('keydown', event => {
      const currentTarget = event.target;
      const key = event.which.toString(); // 33 = Page Up, 34 = Page Down

      const ctrlModifier = event.ctrlKey && key.match(/33|34/); // Is this coming from an accordion header?

      if (currentTarget.classList.contains(ACCORDION_TOGGLE_CLASS)) {
        // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
        // 38 = Up, 40 = Down
        if (key.match(/38|40/) || ctrlModifier) {
          const index = triggers.indexOf(currentTarget);
          const direction = key.match(/34|40/) ? 1 : -1;
          const triggerLength = triggers.length;
          const newIndex = (index + triggerLength + direction) % triggerLength;
          triggers[newIndex].focus();
          event.preventDefault();
        } else if (key.match(/35|36/)) {
          // 35 = End, 36 = Home keyboard operations
          switch (key) {
            // Go to first accordion
            case '36':
              triggers[0].focus();
              break;
            // Go to last accordion

            case '35':
              triggers[triggers.length - 1].focus();
              break;

            default:
              triggers[0].focus();
              break;
          }

          event.preventDefault();
        }
      }
    }); // These are used to style the accordion when one of the buttons has focus

    accordion.querySelectorAll(`.${ACCORDION_TOGGLE_CLASS}`).forEach(trigger => {
      trigger.addEventListener('focus', () => {
        accordion.classList.add('focus');
      });
      trigger.addEventListener('blur', () => {
        accordion.classList.remove('focus');
      });
    }); // Minor setup: will set disabled state, via aria-disabled, to an
    // expanded/ active accordion which is not allowed to be toggled close

    if (!allowToggle) {
      // Get the first expanded/ active accordion
      const expanded = accordion.querySelector('[aria-expanded="true"]'); // If an expanded/ active accordion is found, disable

      if (expanded) {
        expanded.setAttribute('aria-disabled', 'true');
      }
    }
  });
}

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(initAccordion);
}();
/******/ })()
;
//# sourceMappingURL=accordion-view.js.map