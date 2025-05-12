/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/creational/builder2/Builder.ts":
/*!********************************************!*\
  !*** ./src/creational/builder2/Builder.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Builder = /** @class */ (function () {
    function Builder(data) {
        this.data = data;
    }
    return Builder;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Builder);


/***/ }),

/***/ "./src/creational/builder2/Data.ts":
/*!*****************************************!*\
  !*** ./src/creational/builder2/Data.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Data = /** @class */ (function () {
    function Data(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Object.defineProperty(Data.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    return Data;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);


/***/ }),

/***/ "./src/creational/builder2/Director.ts":
/*!*********************************************!*\
  !*** ./src/creational/builder2/Director.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Director = /** @class */ (function () {
    function Director(_builder) {
        this._builder = _builder;
    }
    Director.prototype.build = function () {
        return "".concat(this._builder.head()).concat(this._builder.body()).concat(this._builder.foot());
    };
    return Director;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Director);


/***/ }),

/***/ "./src/creational/builder2/XMLBuilder.ts":
/*!***********************************************!*\
  !*** ./src/creational/builder2/XMLBuilder.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder */ "./src/creational/builder2/Builder.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PlainTextBuilder = /** @class */ (function (_super) {
    __extends(PlainTextBuilder, _super);
    function PlainTextBuilder(data) {
        return _super.call(this, data) || this;
    }
    PlainTextBuilder.prototype.head = function () {
        return '';
    };
    PlainTextBuilder.prototype.body = function () {
        return "Name: ".concat(this.data.name, ", Age: ").concat(this.data.age);
    };
    PlainTextBuilder.prototype.foot = function () {
        return '';
    };
    return PlainTextBuilder;
}(_Builder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlainTextBuilder);


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
/*!******************************************!*\
  !*** ./src/creational/builder2/index.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data */ "./src/creational/builder2/Data.ts");
/* harmony import */ var _Director__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Director */ "./src/creational/builder2/Director.ts");
/* harmony import */ var _XMLBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./XMLBuilder */ "./src/creational/builder2/XMLBuilder.ts");



/**
 * Builder 패턴은 복잡한 설정으로 구성된 객체를 좀 더 효과적으로 생성하기 위한 패턴으로
 * Builder 패턴의 목적은 2가지로 (1) 객체 생성시 생성자의 인자가 너무 많을 경우에 좀 더 효과적으로 생성하기 위해 사용되거나 (2) 여러 단계에 걸쳐 객체가 생성될 때 각 단계를 다양한 목적에 따라 구현하기 위해 사용된다.
 * 이 강좌에서는 "여러 단계에 걸쳐 객체가 생성될 때 각 단계를 다양한 목적에 따라 구현" 되는 Builder 패턴에 대해 살펴보았다.
 */
var data = new _Data__WEBPACK_IMPORTED_MODULE_0__["default"]('John', 30);
// const builder = new PlainTextBuilder(data);
// const builder = new JSONBuilder(data);
var builder = new _XMLBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](data);
var director = new _Director__WEBPACK_IMPORTED_MODULE_1__["default"](builder);
var result = director.build();
console.log(result);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFDRSxpQkFBc0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBS3RDLGNBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDUkQ7SUFDRSxjQUFvQixLQUFhLEVBQVUsSUFBWTtRQUFuQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFHLENBQUM7SUFFM0Qsc0JBQUksc0JBQUk7YUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFCQUFHO2FBQVA7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzs7O09BQUE7SUFDSCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JEO0lBQ0Usa0JBQW9CLFFBQWlCO1FBQWpCLGFBQVEsR0FBUixRQUFRLENBQVM7SUFBRyxDQUFDO0lBRXpDLHdCQUFLLEdBQUw7UUFDRSxPQUFPLFVBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsU0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxTQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUUsQ0FBQztJQUNqRixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUitCO0FBR2hDO0lBQThDLG9DQUFPO0lBV25ELDBCQUFZLElBQVU7UUFDcEIsYUFBSyxZQUFDLElBQUksQ0FBQyxTQUFDO0lBQ2QsQ0FBQztJQVpELCtCQUFJLEdBQUo7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCwrQkFBSSxHQUFKO1FBQ0UsT0FBTyxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksb0JBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsK0JBQUksR0FBSjtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUtILHVCQUFDO0FBQUQsQ0FBQyxDQWQ2QyxnREFBTyxHQWNwRDs7Ozs7Ozs7VUNqQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQ1E7QUFHSTtBQUV0Qzs7OztHQUlHO0FBRUgsSUFBTSxJQUFJLEdBQUcsSUFBSSw2Q0FBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUVsQyw4Q0FBOEM7QUFDOUMseUNBQXlDO0FBQ3pDLElBQU0sT0FBTyxHQUFHLElBQUksbURBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVyQyxJQUFNLFFBQVEsR0FBRyxJQUFJLGlEQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFdkMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NyZWF0aW9uYWwvYnVpbGRlcjIvQnVpbGRlci50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NyZWF0aW9uYWwvYnVpbGRlcjIvRGF0YS50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NyZWF0aW9uYWwvYnVpbGRlcjIvRGlyZWN0b3IudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9jcmVhdGlvbmFsL2J1aWxkZXIyL1hNTEJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvY3JlYXRpb25hbC9idWlsZGVyMi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YSBmcm9tICcuL0RhdGEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQnVpbGRlciB7XHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRhdGE6IERhdGEpIHt9XHJcblxyXG4gIGFic3RyYWN0IGhlYWQoKTogc3RyaW5nO1xyXG4gIGFic3RyYWN0IGJvZHkoKTogc3RyaW5nO1xyXG4gIGFic3RyYWN0IGZvb3QoKTogc3RyaW5nO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGEge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25hbWU6IHN0cmluZywgcHJpdmF0ZSBfYWdlOiBudW1iZXIpIHt9XHJcblxyXG4gIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FnZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEJ1aWxkZXIgZnJvbSAnLi9CdWlsZGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9idWlsZGVyOiBCdWlsZGVyKSB7fVxyXG5cclxuICBidWlsZCgpIHtcclxuICAgIHJldHVybiBgJHt0aGlzLl9idWlsZGVyLmhlYWQoKX0ke3RoaXMuX2J1aWxkZXIuYm9keSgpfSR7dGhpcy5fYnVpbGRlci5mb290KCl9YDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEJ1aWxkZXIgZnJvbSAnLi9CdWlsZGVyJztcclxuaW1wb3J0IERhdGEgZnJvbSAnLi9EYXRhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYWluVGV4dEJ1aWxkZXIgZXh0ZW5kcyBCdWlsZGVyIHtcclxuICBoZWFkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG4gIGJvZHkoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgTmFtZTogJHt0aGlzLmRhdGEubmFtZX0sIEFnZTogJHt0aGlzLmRhdGEuYWdlfWA7XHJcbiAgfVxyXG4gIGZvb3QoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IERhdGEpIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBEYXRhIGZyb20gJy4vRGF0YSc7XHJcbmltcG9ydCBEaXJlY3RvciBmcm9tICcuL0RpcmVjdG9yJztcclxuaW1wb3J0IFBsYWluVGV4dEJ1aWxkZXIgZnJvbSAnLi9QbGFpblRleHRCdWlsZGVyJztcclxuaW1wb3J0IEpTT05CdWlsZGVyIGZyb20gJy4vSlNPTkJ1aWxkZXInO1xyXG5pbXBvcnQgWE1MQnVpbGRlciBmcm9tICcuL1hNTEJ1aWxkZXInO1xyXG5cclxuLyoqXHJcbiAqIEJ1aWxkZXIg7Yyo7YS07J2AIOuzteyeoe2VnCDshKTsoJXsnLzroZwg6rWs7ISx65CcIOqwneyytOulvCDsooAg642UIO2aqOqzvOyggeycvOuhnCDsg53shLHtlZjquLAg7JyE7ZWcIO2MqO2EtOycvOuhnFxyXG4gKiBCdWlsZGVyIO2MqO2EtOydmCDrqqnsoIHsnYAgMuqwgOyngOuhnCAoMSkg6rCd7LK0IOyDneyEseyLnCDsg53shLHsnpDsnZgg7J247J6Q6rCAIOuEiOustCDrp47snYQg6rK97Jqw7JeQIOyigCDrjZQg7Zqo6rO87KCB7Jy866GcIOyDneyEse2VmOq4sCDsnITtlbQg7IKs7Jqp65CY6rGw64KYICgyKSDsl6zrn6wg64uo6rOE7JeQIOqxuOyzkCDqsJ3ssrTqsIAg7IOd7ISx65CgIOuVjCDqsIEg64uo6rOE66W8IOuLpOyWke2VnCDrqqnsoIHsl5Ag65Sw6528IOq1rO2YhO2VmOq4sCDsnITtlbQg7IKs7Jqp65Cc64ukLlxyXG4gKiDsnbQg6rCV7KKM7JeQ7ISc64qUIFwi7Jes65+sIOuLqOqzhOyXkCDqsbjss5Ag6rCd7LK06rCAIOyDneyEseuQoCDrlYwg6rCBIOuLqOqzhOulvCDri6TslpHtlZwg66qp7KCB7JeQIOuUsOudvCDqtaztmIRcIiDrkJjripQgQnVpbGRlciDtjKjthLTsl5Ag64yA7ZW0IOyCtO2OtOuztOyVmOuLpC5cclxuICovXHJcblxyXG5jb25zdCBkYXRhID0gbmV3IERhdGEoJ0pvaG4nLCAzMCk7XHJcblxyXG4vLyBjb25zdCBidWlsZGVyID0gbmV3IFBsYWluVGV4dEJ1aWxkZXIoZGF0YSk7XHJcbi8vIGNvbnN0IGJ1aWxkZXIgPSBuZXcgSlNPTkJ1aWxkZXIoZGF0YSk7XHJcbmNvbnN0IGJ1aWxkZXIgPSBuZXcgWE1MQnVpbGRlcihkYXRhKTtcclxuXHJcbmNvbnN0IGRpcmVjdG9yID0gbmV3IERpcmVjdG9yKGJ1aWxkZXIpO1xyXG5cclxuY29uc3QgcmVzdWx0ID0gZGlyZWN0b3IuYnVpbGQoKTtcclxuXHJcbmNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==