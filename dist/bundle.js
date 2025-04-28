/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/structural/bridge/CaptionDisplay.ts":
/*!*************************************************!*\
  !*** ./src/structural/bridge/CaptionDisplay.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CaptionDisplay = /** @class */ (function () {
    function CaptionDisplay() {
    }
    CaptionDisplay.prototype.title = function (draft) {
        console.log("\uC81C\uBAA9: ".concat(draft.getTitle()));
    };
    CaptionDisplay.prototype.author = function (draft) {
        console.log("\uC800\uC790: ".concat(draft.getAuthor()));
    };
    CaptionDisplay.prototype.content = function (draft) {
        console.log('내용:');
        var content = draft.getContent();
        content.forEach(function (item) {
            console.log(" ".concat(item));
        });
    };
    return CaptionDisplay;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaptionDisplay);


/***/ }),

/***/ "./src/structural/bridge/CharactersCounter.ts":
/*!****************************************************!*\
  !*** ./src/structural/bridge/CharactersCounter.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Draft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draft */ "./src/structural/bridge/Draft.ts");
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

var CharactersCounter = /** @class */ (function (_super) {
    __extends(CharactersCounter, _super);
    function CharactersCounter(title, author, content) {
        return _super.call(this, title, author, content) || this;
    }
    CharactersCounter.prototype.getCharactersCount = function () {
        var count = 0;
        count += this.getTitle().length;
        count += this.getAuthor().length;
        this.getContent().forEach(function (item) {
            count += item.length;
        });
        return count;
    };
    return CharactersCounter;
}(_Draft__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharactersCounter);


/***/ }),

/***/ "./src/structural/bridge/Draft.ts":
/*!****************************************!*\
  !*** ./src/structural/bridge/Draft.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Draft = /** @class */ (function () {
    function Draft(title, author, content) {
        this.title = title;
        this.author = author;
        this.content = content;
    }
    Draft.prototype.getTitle = function () {
        return this.title;
    };
    Draft.prototype.getAuthor = function () {
        return this.author;
    };
    Draft.prototype.getContent = function () {
        return this.content;
    };
    Draft.prototype.print = function (display) {
        display.title(this);
        display.author(this);
        display.content(this);
    };
    return Draft;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Draft);


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
/*!****************************************!*\
  !*** ./src/structural/bridge/index.ts ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CaptionDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaptionDisplay */ "./src/structural/bridge/CaptionDisplay.ts");
/* harmony import */ var _CharactersCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CharactersCounter */ "./src/structural/bridge/CharactersCounter.ts");


/**
 * Bridge 패턴은 기능 계층과 구현 계층을 분리한다.
 * 새로운 기능을 추가할 때는 기능 계층을 확장하고 새로운 구현을 추가할 때는 구현 계층을 확장함으로써 복잡도를 효과적으로 낮출 수 있다.
 * 기능 계층과 구현 계층은 서로 위임을 통해서 통신한다.
 * 클래스들간의 관계는 단순하게 만들어 주는 것이 좋은데 Bridge 패턴은 기능 계층과 구현 계층을 분리함으로써 클래스들 간의 관계를 단순하게 유지시켜 준다.
 */
var title = '좋은 아침';
var author = '김사랑';
var content = [
    '오늘은 좋은 날이다.',
    '창 밖을 바라보고 싶다.',
    '인간을 깨워야 겠다.',
];
// const draft = new Draft(title, author, content);
var draft = new _CharactersCounter__WEBPACK_IMPORTED_MODULE_1__["default"](title, author, content);
// const display = new SimpleDisplay();
var display = new _CaptionDisplay__WEBPACK_IMPORTED_MODULE_0__["default"]();
draft.print(display);
console.log("\uCD1D \uBB38\uC790 \uC218: ".concat(draft.getCharactersCount()));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUgsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQztBQUNyQixJQUFNLE9BQU8sR0FBRztJQUNkLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtDQUNkLENBQUM7QUFFRixtREFBbUQ7QUFDbkQsSUFBTSxLQUFLLEdBQUcsSUFBSSwwREFBaUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBRTVELHVDQUF1QztBQUN2QyxJQUFNLE9BQU8sR0FBRyxJQUFJLHVEQUFjLEVBQUUsQ0FBQztBQUNyQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQVcsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdHJ1Y3R1cmFsL2JyaWRnZS9DYXB0aW9uRGlzcGxheS50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3N0cnVjdHVyYWwvYnJpZGdlL0NoYXJhY3RlcnNDb3VudGVyLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvc3RydWN0dXJhbC9icmlkZ2UvRHJhZnQudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvc3RydWN0dXJhbC9icmlkZ2UvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpc3BsYXkgZnJvbSAnLi9EaXNwbGF5JztcbmltcG9ydCBEcmFmdCBmcm9tICcuL0RyYWZ0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FwdGlvbkRpc3BsYXkgaW1wbGVtZW50cyBEaXNwbGF5IHtcbiAgdGl0bGUoZHJhZnQ6IERyYWZ0KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coYOygnOuqqTogJHtkcmFmdC5nZXRUaXRsZSgpfWApO1xuICB9XG5cbiAgYXV0aG9yKGRyYWZ0OiBEcmFmdCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGDsoIDsnpA6ICR7ZHJhZnQuZ2V0QXV0aG9yKCl9YCk7XG4gIH1cblxuICBjb250ZW50KGRyYWZ0OiBEcmFmdCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCfrgrTsmqk6Jyk7XG4gICAgY29uc3QgY29udGVudCA9IGRyYWZ0LmdldENvbnRlbnQoKTtcbiAgICBjb250ZW50LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGAgJHtpdGVtfWApO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgRHJhZnQgZnJvbSAnLi9EcmFmdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlcnNDb3VudGVyIGV4dGVuZHMgRHJhZnQge1xuICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29udGVudDogc3RyaW5nW10pIHtcbiAgICBzdXBlcih0aXRsZSwgYXV0aG9yLCBjb250ZW50KTtcbiAgfVxuXG4gIGdldENoYXJhY3RlcnNDb3VudCgpOiBudW1iZXIge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY291bnQgKz0gdGhpcy5nZXRUaXRsZSgpLmxlbmd0aDtcbiAgICBjb3VudCArPSB0aGlzLmdldEF1dGhvcigpLmxlbmd0aDtcblxuICAgIHRoaXMuZ2V0Q29udGVudCgpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvdW50ICs9IGl0ZW0ubGVuZ3RoO1xuICAgIH0pO1xuICAgIHJldHVybiBjb3VudDtcbiAgfVxufVxuIiwiaW1wb3J0IERpc3BsYXkgZnJvbSAnLi9EaXNwbGF5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBhdXRob3I6IHN0cmluZyxcbiAgICBwcml2YXRlIGNvbnRlbnQ6IHN0cmluZ1tdXG4gICkge31cblxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIGdldEF1dGhvcigpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRob3I7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBwcmludChkaXNwbGF5OiBEaXNwbGF5KTogdm9pZCB7XG4gICAgZGlzcGxheS50aXRsZSh0aGlzKTtcbiAgICBkaXNwbGF5LmF1dGhvcih0aGlzKTtcbiAgICBkaXNwbGF5LmNvbnRlbnQodGhpcyk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENhcHRpb25EaXNwbGF5IGZyb20gJy4vQ2FwdGlvbkRpc3BsYXknO1xuaW1wb3J0IENoYXJhY3RlcnNDb3VudGVyIGZyb20gJy4vQ2hhcmFjdGVyc0NvdW50ZXInO1xuaW1wb3J0IERyYWZ0IGZyb20gJy4vRHJhZnQnO1xuaW1wb3J0IFNpbXBsZURpc3BsYXkgZnJvbSAnLi9TaW1wbGVEaXNwbGF5JztcblxuLyoqXG4gKiBCcmlkZ2Ug7Yyo7YS07J2AIOq4sOuKpSDqs4TsuLXqs7wg6rWs7ZiEIOqzhOy4teydhCDrtoTrpqztlZzri6QuXG4gKiDsg4jroZzsmrQg6riw64ql7J2EIOy2lOqwgO2VoCDrlYzripQg6riw64qlIOqzhOy4teydhCDtmZXsnqXtlZjqs6Ag7IOI66Gc7Jq0IOq1rO2YhOydhCDstpTqsIDtlaAg65WM64qUIOq1rO2YhCDqs4TsuLXsnYQg7ZmV7J6l7ZWo7Jy866Gc7I2oIOuzteyeoeuPhOulvCDtmqjqs7zsoIHsnLzroZwg64Ku7LacIOyImCDsnojri6QuXG4gKiDquLDriqUg6rOE7Li16rO8IOq1rO2YhCDqs4TsuLXsnYAg7ISc66GcIOychOyehOydhCDthrXtlbTshJwg7Ya17Iug7ZWc64ukLlxuICog7YG0656Y7Iqk65Ok6rCE7J2YIOq0gOqzhOuKlCDri6jsiJztlZjqsowg66eM65Ok7Ja0IOyjvOuKlCDqsoPsnbQg7KKL7J2A642wIEJyaWRnZSDtjKjthLTsnYAg6riw64qlIOqzhOy4teqzvCDqtaztmIQg6rOE7Li17J2EIOu2hOumrO2VqOycvOuhnOyNqCDtgbTrnpjsiqTrk6Qg6rCE7J2YIOq0gOqzhOulvCDri6jsiJztlZjqsowg7Jyg7KeA7Iuc7LycIOykgOuLpC5cbiAqL1xuXG5jb25zdCB0aXRsZSA9ICfsoovsnYAg7JWE7LmoJztcbmNvbnN0IGF1dGhvciA9ICfquYDsgqzrnpEnO1xuY29uc3QgY29udGVudCA9IFtcbiAgJ+yYpOuKmOydgCDsoovsnYAg64Kg7J2064ukLicsXG4gICfssL0g67CW7J2EIOuwlOudvOuztOqzoCDsi7bri6QuJyxcbiAgJ+yduOqwhOydhCDquajsm4zslbwg6rKg64ukLicsXG5dO1xuXG4vLyBjb25zdCBkcmFmdCA9IG5ldyBEcmFmdCh0aXRsZSwgYXV0aG9yLCBjb250ZW50KTtcbmNvbnN0IGRyYWZ0ID0gbmV3IENoYXJhY3RlcnNDb3VudGVyKHRpdGxlLCBhdXRob3IsIGNvbnRlbnQpO1xuXG4vLyBjb25zdCBkaXNwbGF5ID0gbmV3IFNpbXBsZURpc3BsYXkoKTtcbmNvbnN0IGRpc3BsYXkgPSBuZXcgQ2FwdGlvbkRpc3BsYXkoKTtcbmRyYWZ0LnByaW50KGRpc3BsYXkpO1xuXG5jb25zb2xlLmxvZyhg7LSdIOusuOyekCDsiJg6ICR7ZHJhZnQuZ2V0Q2hhcmFjdGVyc0NvdW50KCl9YCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=