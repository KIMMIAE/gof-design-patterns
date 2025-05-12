/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/creational/builder1/Car.ts":
/*!****************************************!*\
  !*** ./src/creational/builder1/Car.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Car = /** @class */ (function () {
    function Car(engine, // 엔진 이름
    airbag, // 에어백 유무
    color, // 차량 색상
    cameraSensor, // 카메라 센서 유무
    AEB // 자동급제동장치 유무
    ) {
        this.engine = engine;
        this.airbag = airbag;
        this.color = color;
        this.cameraSensor = cameraSensor;
        this.AEB = AEB;
    }
    Car.prototype.print = function () {
        console.table(this);
    };
    return Car;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);


/***/ }),

/***/ "./src/creational/builder1/CarBuilder.ts":
/*!***********************************************!*\
  !*** ./src/creational/builder1/CarBuilder.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Car */ "./src/creational/builder1/Car.ts");

var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.engine = undefined;
        this.airbag = false;
        this.color = undefined;
        this.cameraSensor = false;
        this.AEB = false;
    }
    CarBuilder.prototype.setEngine = function (v) {
        this.engine = v;
        return this;
    };
    CarBuilder.prototype.setAirbag = function (v) {
        this.airbag = v;
        return this;
    };
    CarBuilder.prototype.setColor = function (v) {
        this.color = v;
        return this;
    };
    CarBuilder.prototype.setCameraSensor = function (v) {
        this.cameraSensor = v;
        return this;
    };
    CarBuilder.prototype.setAEB = function (v) {
        this.AEB = v;
        return this;
    };
    CarBuilder.prototype.build = function () {
        if (this.engine === undefined) {
            return null;
        }
        if (this.color === undefined) {
            return null;
        }
        if (this.AEB === undefined) {
            return null;
        }
        return new _Car__WEBPACK_IMPORTED_MODULE_0__["default"](this.engine, this.airbag, this.color, this.cameraSensor, this.AEB);
    };
    return CarBuilder;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarBuilder);


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
  !*** ./src/creational/builder1/index.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Car */ "./src/creational/builder1/Car.ts");
/* harmony import */ var _CarBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarBuilder */ "./src/creational/builder1/CarBuilder.ts");


/**
 * Builder 패턴은 복잡한 설정으로 구성된 객체를 좀 더 효과적으로 생성하기 위한 패턴으로
 * Builder 패턴의 목적은 2가지로 (1) 객체 생성시 생성자의 인자가 너무 많을 경우에 좀 더 효과적으로 생성하기 위해 사용되거나 (2) 여러 단계에 걸쳐 객체가 생성될 때 각 단계를 다양한 목적에 따라 구현하기 위해 사용된다.
 * 이 실습에서는 "생성할 때 생성자의 인자가 너무 많을 경우에 좀 더 효과적으로 생성하기 위해 사용" 되는 Builder 패턴에 대해 살펴보았다.
 */
var car1 = new _Car__WEBPACK_IMPORTED_MODULE_0__["default"]('V7', true, 'black', true, false);
car1.print();
var car2 = new _CarBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
    .setAEB(false)
    .setAirbag(false)
    .setCameraSensor(true)
    .setColor('white')
    .setEngine('V9')
    .build();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdkQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRWIsSUFBTSxJQUFJLEdBQUcsSUFBSSxtREFBVSxFQUFFO0tBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDYixTQUFTLENBQUMsS0FBSyxDQUFDO0tBQ2hCLGVBQWUsQ0FBQyxJQUFJLENBQUM7S0FDckIsUUFBUSxDQUFDLE9BQU8sQ0FBQztLQUNqQixTQUFTLENBQUMsSUFBSSxDQUFDO0tBQ2YsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NyZWF0aW9uYWwvYnVpbGRlcjEvQ2FyLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvY3JlYXRpb25hbC9idWlsZGVyMS9DYXJCdWlsZGVyLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NyZWF0aW9uYWwvYnVpbGRlcjEvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZW5naW5lOiBzdHJpbmcsIC8vIOyXlOynhCDsnbTrpoRcclxuICAgIHByaXZhdGUgYWlyYmFnOiBib29sZWFuLCAvLyDsl5DslrTrsLEg7Jyg66y0XHJcbiAgICBwcml2YXRlIGNvbG9yOiBzdHJpbmcsIC8vIOywqOufiSDsg4nsg4FcclxuICAgIHByaXZhdGUgY2FtZXJhU2Vuc29yOiBib29sZWFuLCAvLyDsubTrqZTrnbwg7IS87IScIOycoOustFxyXG4gICAgcHJpdmF0ZSBBRUI6IGJvb2xlYW4gLy8g7J6Q64+Z6riJ7KCc64+Z7J6l7LmYIOycoOustFxyXG4gICkge31cclxuXHJcbiAgcHJpbnQoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLnRhYmxlKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQ2FyIGZyb20gJy4vQ2FyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhckJ1aWxkZXIge1xyXG4gIHByaXZhdGUgZW5naW5lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBhaXJiYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIGNvbG9yOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBjYW1lcmFTZW5zb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIEFFQjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBzZXRFbmdpbmUodjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVuZ2luZSA9IHY7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldEFpcmJhZyh2OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmFpcmJhZyA9IHY7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldENvbG9yKHY6IHN0cmluZykge1xyXG4gICAgdGhpcy5jb2xvciA9IHY7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldENhbWVyYVNlbnNvcih2OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmNhbWVyYVNlbnNvciA9IHY7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldEFFQih2OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLkFFQiA9IHY7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGJ1aWxkKCk6IENhciB7XHJcbiAgICBpZiAodGhpcy5lbmdpbmUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb2xvciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLkFFQiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgQ2FyKFxyXG4gICAgICB0aGlzLmVuZ2luZSxcclxuICAgICAgdGhpcy5haXJiYWcsXHJcbiAgICAgIHRoaXMuY29sb3IsXHJcbiAgICAgIHRoaXMuY2FtZXJhU2Vuc29yLFxyXG4gICAgICB0aGlzLkFFQlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ2FyIGZyb20gJy4vQ2FyJztcclxuaW1wb3J0IENhckJ1aWxkZXIgZnJvbSAnLi9DYXJCdWlsZGVyJztcclxuLyoqXHJcbiAqIEJ1aWxkZXIg7Yyo7YS07J2AIOuzteyeoe2VnCDshKTsoJXsnLzroZwg6rWs7ISx65CcIOqwneyytOulvCDsooAg642UIO2aqOqzvOyggeycvOuhnCDsg53shLHtlZjquLAg7JyE7ZWcIO2MqO2EtOycvOuhnFxyXG4gKiBCdWlsZGVyIO2MqO2EtOydmCDrqqnsoIHsnYAgMuqwgOyngOuhnCAoMSkg6rCd7LK0IOyDneyEseyLnCDsg53shLHsnpDsnZgg7J247J6Q6rCAIOuEiOustCDrp47snYQg6rK97Jqw7JeQIOyigCDrjZQg7Zqo6rO87KCB7Jy866GcIOyDneyEse2VmOq4sCDsnITtlbQg7IKs7Jqp65CY6rGw64KYICgyKSDsl6zrn6wg64uo6rOE7JeQIOqxuOyzkCDqsJ3ssrTqsIAg7IOd7ISx65CgIOuVjCDqsIEg64uo6rOE66W8IOuLpOyWke2VnCDrqqnsoIHsl5Ag65Sw6528IOq1rO2YhO2VmOq4sCDsnITtlbQg7IKs7Jqp65Cc64ukLlxyXG4gKiDsnbQg7Iuk7Iq17JeQ7ISc64qUIFwi7IOd7ISx7ZWgIOuVjCDsg53shLHsnpDsnZgg7J247J6Q6rCAIOuEiOustCDrp47snYQg6rK97Jqw7JeQIOyigCDrjZQg7Zqo6rO87KCB7Jy866GcIOyDneyEse2VmOq4sCDsnITtlbQg7IKs7JqpXCIg65CY64qUIEJ1aWxkZXIg7Yyo7YS07JeQIOuMgO2VtCDsgrTtjrTrs7TslZjri6QuXHJcbiAqL1xyXG5cclxuY29uc3QgY2FyMSA9IG5ldyBDYXIoJ1Y3JywgdHJ1ZSwgJ2JsYWNrJywgdHJ1ZSwgZmFsc2UpO1xyXG5jYXIxLnByaW50KCk7XHJcblxyXG5jb25zdCBjYXIyID0gbmV3IENhckJ1aWxkZXIoKVxyXG4gIC5zZXRBRUIoZmFsc2UpXHJcbiAgLnNldEFpcmJhZyhmYWxzZSlcclxuICAuc2V0Q2FtZXJhU2Vuc29yKHRydWUpXHJcbiAgLnNldENvbG9yKCd3aGl0ZScpXHJcbiAgLnNldEVuZ2luZSgnVjknKVxyXG4gIC5idWlsZCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=