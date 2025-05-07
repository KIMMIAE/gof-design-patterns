/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/structural/proxy/ProxyImage.ts":
/*!********************************************!*\
  !*** ./src/structural/proxy/ProxyImage.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RealImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RealImage */ "./src/structural/proxy/RealImage.ts");

var ProxyImage = /** @class */ (function () {
    function ProxyImage(title, url, parent) {
        this.title = title;
        this.url = url;
        this.parent = parent;
        this.image = null;
        this.domLayout = null;
        this.domTitle = null;
        this.domLayout = document.createElement('div');
        this.domLayout.classList.add('layout');
        this.parent.append(this.domLayout);
        this.domTitle = document.createElement('div');
        this.domTitle.classList.add('title-proxy');
        this.domTitle.innerHTML = "<span>".concat(this.title, "</span><br/><span>Click to load</span>");
        this.domLayout.append(this.domTitle);
    }
    ProxyImage.prototype.append = function () {
        var _this = this;
        if (this.image) {
            return;
        }
        this.domLayout.addEventListener('click', function () {
            _this.domLayout.style.border = 'none';
            _this.domLayout.innerHTML = '';
            _this.image = new _RealImage__WEBPACK_IMPORTED_MODULE_0__["default"](_this.title, _this.url, _this.domLayout);
            _this.image.append();
        });
    };
    return ProxyImage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProxyImage);


/***/ }),

/***/ "./src/structural/proxy/RealImage.ts":
/*!*******************************************!*\
  !*** ./src/structural/proxy/RealImage.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var RealImage = /** @class */ (function () {
    function RealImage(_title, _url, _parent) {
        this._title = _title;
        this._url = _url;
        this._parent = _parent;
        this.domLayout = null;
        this.domTitle = null;
        this.domImage = null;
        this.domLoading = null;
        this.domLayout = document.createElement('div');
        this.domLayout.classList.add('layout');
        this._parent.append(this.domLayout);
        this.domTitle = document.createElement('div');
        this.domTitle.classList.add('title');
        this.domTitle.innerText = this._title;
        this.domLayout.append(this.domTitle);
        this.domLoading = document.createElement('div');
        this.domLoading.classList.add('loading');
        this.domLoading.innerText = 'Loading ...';
    }
    RealImage.prototype.append = function () {
        var _this = this;
        if (this.domImage) {
            return;
        }
        this.domImage = new Image();
        this.domLayout.append(this.domLoading);
        this.domImage.src = this._url;
        this.domImage.onload = function () {
            setTimeout(function () {
                _this.domLayout.removeChild(_this.domLoading);
                _this.domLayout.append(_this.domImage);
            }, Math.random() * 2000 + 3000);
        };
    };
    return RealImage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RealImage);


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/structural/proxy/index.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProxyImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProxyImage */ "./src/structural/proxy/ProxyImage.ts");

/**
 * Proxy 패턴의 종류에는 가상 Proxy, 원격 Proxy, 보호 Proxy등이 있다.
 * 가상 Proxy는 필요한 시점까지 객체의 생성을 연기하고 마치 생성된 것처럼 동작하다가 필요한 시점에 실제 객체를 생성해서 사용한다.
 * Proxy 패턴은 실제 기능 실행을 대리인(Proxy)을 통해 실행하도록 하는 것이 근본적인 목적이다.
 */
var items = [
    [
        '설산야경',
        'https://cdn.bhdw.net/im/snow-mountain-night-wallpaper-81305_w635.webp',
    ],
    [
        '외로운늑대',
        'https://cdn.bhdw.net/im/fantasy-world-wallpaper-29897_w635.webp',
    ],
    [
        '강변황혼',
        'https://cdn.bhdw.net/im/sunset-minimalist-wallpaper-81072_w635.webp',
    ],
    [
        '일출',
        'https://cdn.bhdw.net/im/sunset-scenery-minimalist-wallpaper-81379_w635.webp',
    ],
    [
        '지구탈출',
        'https://cdn.bhdw.net/im/mountain-scenery-art-wallpaper-81095_w635.webp',
    ],
    [
        '비둘기',
        'https://wallpapers.com/images/high/flying-homing-pigeon-low-angle-shot-bliq95v02wjt2d7b.webp',
    ],
    [
        '아기 고양이',
        'https://wallpapers.com/images/high/kitten-pictures-gm0hvkdl9hbm21xj.webp',
    ],
    [
        '고양이',
        'https://wallpapers.com/images/hd/elegant-feline-in-soft-natural-light-00nbm86akvtczty6.webp',
    ],
];
var domList = document.querySelector('.list');
items.forEach(function (item) {
    var title = item[0];
    var url = item[1];
    // const img = new RealImage(title, url, domList);
    var img = new _ProxyImage__WEBPACK_IMPORTED_MODULE_0__["default"](title, url, domList);
    img.append();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnNDO0FBR3RDOzs7O0dBSUc7QUFFSCxJQUFNLEtBQUssR0FBRztJQUNaO1FBQ0UsTUFBTTtRQUNOLHVFQUF1RTtLQUN4RTtJQUNEO1FBQ0UsT0FBTztRQUNQLGlFQUFpRTtLQUNsRTtJQUNEO1FBQ0UsTUFBTTtRQUNOLHFFQUFxRTtLQUN0RTtJQUNEO1FBQ0UsSUFBSTtRQUNKLDZFQUE2RTtLQUM5RTtJQUNEO1FBQ0UsTUFBTTtRQUNOLHdFQUF3RTtLQUN6RTtJQUNEO1FBQ0UsS0FBSztRQUNMLDhGQUE4RjtLQUMvRjtJQUNEO1FBQ0UsUUFBUTtRQUNSLDBFQUEwRTtLQUMzRTtJQUNEO1FBQ0UsS0FBSztRQUNMLDZGQUE2RjtLQUM5RjtDQUNGLENBQUM7QUFFRixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hELEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO0lBQ2pCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsa0RBQWtEO0lBQ2xELElBQU0sR0FBRyxHQUFHLElBQUksbURBQVUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNmLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdHJ1Y3R1cmFsL3Byb3h5L1Byb3h5SW1hZ2UudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdHJ1Y3R1cmFsL3Byb3h5L1JlYWxJbWFnZS50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdHJ1Y3R1cmFsL3Byb3h5L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFsSW1hZ2UgZnJvbSAnLi9SZWFsSW1hZ2UnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm94eUltYWdlIGltcGxlbWVudHMgSW1hZ2Uge1xuICBwcml2YXRlIGltYWdlOiBSZWFsSW1hZ2UgPSBudWxsO1xuICBwcml2YXRlIGRvbUxheW91dDogSFRNTERpdkVsZW1lbnQgPSBudWxsO1xuICBwcml2YXRlIGRvbVRpdGxlOiBIVE1MRGl2RWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nLFxuICAgIHByaXZhdGUgdXJsOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IEVsZW1lbnRcbiAgKSB7XG4gICAgdGhpcy5kb21MYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmRvbUxheW91dC5jbGFzc0xpc3QuYWRkKCdsYXlvdXQnKTtcbiAgICB0aGlzLnBhcmVudC5hcHBlbmQodGhpcy5kb21MYXlvdXQpO1xuXG4gICAgdGhpcy5kb21UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZG9tVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtcHJveHknKTtcbiAgICB0aGlzLmRvbVRpdGxlLmlubmVySFRNTCA9IGA8c3Bhbj4ke3RoaXMudGl0bGV9PC9zcGFuPjxici8+PHNwYW4+Q2xpY2sgdG8gbG9hZDwvc3Bhbj5gO1xuICAgIHRoaXMuZG9tTGF5b3V0LmFwcGVuZCh0aGlzLmRvbVRpdGxlKTtcbiAgfVxuICBhcHBlbmQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRvbUxheW91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuZG9tTGF5b3V0LnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICAgIHRoaXMuZG9tTGF5b3V0LmlubmVySFRNTCA9ICcnO1xuICAgICAgdGhpcy5pbWFnZSA9IG5ldyBSZWFsSW1hZ2UodGhpcy50aXRsZSwgdGhpcy51cmwsIHRoaXMuZG9tTGF5b3V0KTtcbiAgICAgIHRoaXMuaW1hZ2UuYXBwZW5kKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhbEltYWdlIGltcGxlbWVudHMgSW1hZ2Uge1xuICBwcml2YXRlIGRvbUxheW91dDogSFRNTERpdkVsZW1lbnQgPSBudWxsO1xuICBwcml2YXRlIGRvbVRpdGxlOiBIVE1MRGl2RWxlbWVudCA9IG51bGw7XG4gIHByaXZhdGUgZG9tSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBudWxsO1xuICBwcml2YXRlIGRvbUxvYWRpbmc6IEhUTUxEaXZFbGVtZW50ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aXRsZTogc3RyaW5nLFxuICAgIHByaXZhdGUgX3VybDogc3RyaW5nLFxuICAgIHByaXZhdGUgX3BhcmVudDogRWxlbWVudFxuICApIHtcbiAgICB0aGlzLmRvbUxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZG9tTGF5b3V0LmNsYXNzTGlzdC5hZGQoJ2xheW91dCcpO1xuICAgIHRoaXMuX3BhcmVudC5hcHBlbmQodGhpcy5kb21MYXlvdXQpO1xuXG4gICAgdGhpcy5kb21UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZG9tVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICB0aGlzLmRvbVRpdGxlLmlubmVyVGV4dCA9IHRoaXMuX3RpdGxlO1xuICAgIHRoaXMuZG9tTGF5b3V0LmFwcGVuZCh0aGlzLmRvbVRpdGxlKTtcblxuICAgIHRoaXMuZG9tTG9hZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZG9tTG9hZGluZy5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG4gICAgdGhpcy5kb21Mb2FkaW5nLmlubmVyVGV4dCA9ICdMb2FkaW5nIC4uLic7XG4gIH1cblxuICBhcHBlbmQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZG9tSW1hZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kb21JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZG9tTGF5b3V0LmFwcGVuZCh0aGlzLmRvbUxvYWRpbmcpO1xuICAgIHRoaXMuZG9tSW1hZ2Uuc3JjID0gdGhpcy5fdXJsO1xuXG4gICAgdGhpcy5kb21JbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kb21MYXlvdXQucmVtb3ZlQ2hpbGQodGhpcy5kb21Mb2FkaW5nKTtcbiAgICAgICAgdGhpcy5kb21MYXlvdXQuYXBwZW5kKHRoaXMuZG9tSW1hZ2UpO1xuICAgICAgfSwgTWF0aC5yYW5kb20oKSAqIDIwMDAgKyAzMDAwKTtcbiAgICB9O1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm94eUltYWdlIGZyb20gJy4vUHJveHlJbWFnZSc7XG5pbXBvcnQgUmVhbEltYWdlIGZyb20gJy4vUmVhbEltYWdlJztcblxuLyoqXG4gKiBQcm94eSDtjKjthLTsnZgg7KKF66WY7JeQ64qUIOqwgOyDgSBQcm94eSwg7JuQ6rKpIFByb3h5LCDrs7TtmLggUHJveHnrk7HsnbQg7J6I64ukLlxuICog6rCA7IOBIFByb3h564qUIO2VhOyalO2VnCDsi5zsoJDquYzsp4Ag6rCd7LK07J2YIOyDneyEseydhCDsl7DquLDtlZjqs6Ag66eI7LmYIOyDneyEseuQnCDqsoPsspjrn7wg64+Z7J6R7ZWY64uk6rCAIO2VhOyalO2VnCDsi5zsoJDsl5Ag7Iuk7KCcIOqwneyytOulvCDsg53shLHtlbTshJwg7IKs7Jqp7ZWc64ukLlxuICogUHJveHkg7Yyo7YS07J2AIOyLpOygnCDquLDriqUg7Iuk7ZaJ7J2EIOuMgOumrOyduChQcm94eSnsnYQg7Ya17ZW0IOyLpO2Wie2VmOuPhOuhnSDtlZjripQg6rKD7J20IOq3vOuzuOyggeyduCDrqqnsoIHsnbTri6QuXG4gKi9cblxuY29uc3QgaXRlbXMgPSBbXG4gIFtcbiAgICAn7ISk7IKw7JW86rK9JyxcbiAgICAnaHR0cHM6Ly9jZG4uYmhkdy5uZXQvaW0vc25vdy1tb3VudGFpbi1uaWdodC13YWxscGFwZXItODEzMDVfdzYzNS53ZWJwJyxcbiAgXSxcbiAgW1xuICAgICfsmbjroZzsmrTripHrjIAnLFxuICAgICdodHRwczovL2Nkbi5iaGR3Lm5ldC9pbS9mYW50YXN5LXdvcmxkLXdhbGxwYXBlci0yOTg5N193NjM1LndlYnAnLFxuICBdLFxuICBbXG4gICAgJ+qwleuzgO2Zqe2YvCcsXG4gICAgJ2h0dHBzOi8vY2RuLmJoZHcubmV0L2ltL3N1bnNldC1taW5pbWFsaXN0LXdhbGxwYXBlci04MTA3Ml93NjM1LndlYnAnLFxuICBdLFxuICBbXG4gICAgJ+ydvOy2nCcsXG4gICAgJ2h0dHBzOi8vY2RuLmJoZHcubmV0L2ltL3N1bnNldC1zY2VuZXJ5LW1pbmltYWxpc3Qtd2FsbHBhcGVyLTgxMzc5X3c2MzUud2VicCcsXG4gIF0sXG4gIFtcbiAgICAn7KeA6rWs7YOI7LacJyxcbiAgICAnaHR0cHM6Ly9jZG4uYmhkdy5uZXQvaW0vbW91bnRhaW4tc2NlbmVyeS1hcnQtd2FsbHBhcGVyLTgxMDk1X3c2MzUud2VicCcsXG4gIF0sXG4gIFtcbiAgICAn67mE65GY6riwJyxcbiAgICAnaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGlnaC9mbHlpbmctaG9taW5nLXBpZ2Vvbi1sb3ctYW5nbGUtc2hvdC1ibGlxOTV2MDJ3anQyZDdiLndlYnAnLFxuICBdLFxuICBbXG4gICAgJ+yVhOq4sCDqs6DslpHsnbQnLFxuICAgICdodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9oaWdoL2tpdHRlbi1waWN0dXJlcy1nbTBodmtkbDloYm0yMXhqLndlYnAnLFxuICBdLFxuICBbXG4gICAgJ+qzoOyWkeydtCcsXG4gICAgJ2h0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2hkL2VsZWdhbnQtZmVsaW5lLWluLXNvZnQtbmF0dXJhbC1saWdodC0wMG5ibTg2YWt2dGN6dHk2LndlYnAnLFxuICBdLFxuXTtcblxuY29uc3QgZG9tTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gaXRlbVswXTtcbiAgY29uc3QgdXJsID0gaXRlbVsxXTtcbiAgLy8gY29uc3QgaW1nID0gbmV3IFJlYWxJbWFnZSh0aXRsZSwgdXJsLCBkb21MaXN0KTtcbiAgY29uc3QgaW1nID0gbmV3IFByb3h5SW1hZ2UodGl0bGUsIHVybCwgZG9tTGlzdCk7XG4gIGltZy5hcHBlbmQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9