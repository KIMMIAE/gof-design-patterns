/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/structural/flyweight/Digit.ts":
/*!*******************************************!*\
  !*** ./src/structural/flyweight/Digit.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Digit = /** @class */ (function () {
    function Digit(url) {
        this.url = url;
        this.data = null;
    }
    Digit.prototype.load = function (url, domOutput) {
        var _this = this;
        fetch(url)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            _this.data = json;
            if (domOutput)
                _this.put(domOutput);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    Digit.prototype.put = function (dom) {
        if (!this.data) {
            this.load(this.url, dom);
        }
        else {
            dom.innerHTML = '<div class = "digit-layout"></div>';
            var domLayout_1 = dom.querySelector('.digit-layout');
            this.data.forEach(function (item) {
                var len = item.length;
                for (var i = 0; i < len; i++) {
                    var domCell = document.createElement('div');
                    domCell.style.backgroundColor = item[i] === '1' ? '#ff0' : '#333';
                    domLayout_1.appendChild(domCell);
                }
            });
        }
    };
    return Digit;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Digit);


/***/ }),

/***/ "./src/structural/flyweight/DigitFactory.ts":
/*!**************************************************!*\
  !*** ./src/structural/flyweight/DigitFactory.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Digit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Digit */ "./src/structural/flyweight/Digit.ts");

var DigitFactory = /** @class */ (function () {
    function DigitFactory() {
        this.pool = [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ];
    }
    DigitFactory.prototype.getDigit = function (n) {
        if (!this.pool[n]) {
            this.pool[n] = new _Digit__WEBPACK_IMPORTED_MODULE_0__["default"]("./data/".concat(n, ".json"));
        }
        return this.pool[n];
    };
    return DigitFactory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DigitFactory);


/***/ }),

/***/ "./src/structural/flyweight/Number.ts":
/*!********************************************!*\
  !*** ./src/structural/flyweight/Number.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Number = /** @class */ (function () {
    function Number(factory, num) {
        this.factory = factory;
        this.num = num;
    }
    Number.prototype.put = function (dom) {
        var strNum = this.num.toString();
        var len = strNum.length;
        dom.innerHTML = '';
        for (var i = 0; i < len; i++) {
            var div = document.createElement('div');
            this.factory.getDigit(parseInt(strNum[i])).put(div);
            dom.append(div);
        }
    };
    return Number;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Number);


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
/*!*******************************************!*\
  !*** ./src/structural/flyweight/index.ts ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DigitFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DigitFactory */ "./src/structural/flyweight/DigitFactory.ts");
/* harmony import */ var _Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Number */ "./src/structural/flyweight/Number.ts");


/**
 * Flyweight 패턴은 동일한 객체를 여러 번 생성하지 않고 미리 생성해 두고 공유해 사용할 수 있다.
 * Flyweight 패턴을 통해 미리 생성해둔 객체는 공유의 개념으로 사용되므로 공유할 속성과 공유하지 않을 속성을 구분하여 설계할 필요가 있다.
 */
var factory = new _DigitFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
var domTarget = document.querySelector('#tmp');
var value = 434331;
setInterval(function () {
    var number = new _Number__WEBPACK_IMPORTED_MODULE_1__["default"](factory, value++);
    number.put(domTarget);
}, 100);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQUMsQ0FBQztJQUM1QyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvc3RydWN0dXJhbC9mbHl3ZWlnaHQvRGlnaXQudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdHJ1Y3R1cmFsL2ZseXdlaWdodC9EaWdpdEZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdHJ1Y3R1cmFsL2ZseXdlaWdodC9OdW1iZXIudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvc3RydWN0dXJhbC9mbHl3ZWlnaHQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlnaXQge1xuICBwcml2YXRlIGRhdGE6IEFycmF5PHN0cmluZz4gPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXJsOiBzdHJpbmcpIHt9XG5cbiAgcHJpdmF0ZSBsb2FkKHVybDogc3RyaW5nLCBkb21PdXRwdXQ6IEVsZW1lbnQpIHtcbiAgICBmZXRjaCh1cmwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBqc29uO1xuICAgICAgICBpZiAoZG9tT3V0cHV0KSB0aGlzLnB1dChkb21PdXRwdXQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBwdXQoZG9tOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMubG9hZCh0aGlzLnVybCwgZG9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzID0gXCJkaWdpdC1sYXlvdXRcIj48L2Rpdj4nO1xuICAgICAgY29uc3QgZG9tTGF5b3V0ID0gZG9tLnF1ZXJ5U2VsZWN0b3IoJy5kaWdpdC1sYXlvdXQnKTtcblxuICAgICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBsZW4gPSBpdGVtLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGNvbnN0IGRvbUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkb21DZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGl0ZW1baV0gPT09ICcxJyA/ICcjZmYwJyA6ICcjMzMzJztcbiAgICAgICAgICBkb21MYXlvdXQuYXBwZW5kQ2hpbGQoZG9tQ2VsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IERpZ2l0IGZyb20gJy4vRGlnaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWdpdEZhY3Rvcnkge1xuICBwcml2YXRlIHBvb2w6IEFycmF5PERpZ2l0IHwgbnVsbD4gPSBbXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgXTtcblxuICBnZXREaWdpdChuOiBudW1iZXIpOiBEaWdpdCB7XG4gICAgaWYgKCF0aGlzLnBvb2xbbl0pIHtcbiAgICAgIHRoaXMucG9vbFtuXSA9IG5ldyBEaWdpdChgLi9kYXRhLyR7bn0uanNvbmApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb29sW25dO1xuICB9XG59XG4iLCJpbXBvcnQgRGlnaXRGYWN0b3J5IGZyb20gJy4vRGlnaXRGYWN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYWN0b3J5OiBEaWdpdEZhY3RvcnksIHByaXZhdGUgbnVtOiBudW1iZXIpIHt9XG5cbiAgcHV0KGRvbTogRWxlbWVudCkge1xuICAgIGNvbnN0IHN0ck51bSA9IHRoaXMubnVtLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgbGVuID0gc3RyTnVtLmxlbmd0aDtcbiAgICBkb20uaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmZhY3RvcnkuZ2V0RGlnaXQocGFyc2VJbnQoc3RyTnVtW2ldKSkucHV0KGRpdik7XG4gICAgICBkb20uYXBwZW5kKGRpdik7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBEaWdpdEZhY3RvcnkgZnJvbSAnLi9EaWdpdEZhY3RvcnknO1xuaW1wb3J0IE51bWJlciBmcm9tICcuL051bWJlcic7XG5cbi8qKlxuICogRmx5d2VpZ2h0IO2MqO2EtOydgCDrj5nsnbztlZwg6rCd7LK066W8IOyXrOufrCDrsogg7IOd7ISx7ZWY7KeAIOyViuqzoCDrr7jrpqwg7IOd7ISx7ZW0IOuRkOqzoCDqs7XsnKDtlbQg7IKs7Jqp7ZWgIOyImCDsnojri6QuXG4gKiBGbHl3ZWlnaHQg7Yyo7YS07J2EIO2Gte2VtCDrr7jrpqwg7IOd7ISx7ZW065GUIOqwneyytOuKlCDqs7XsnKDsnZgg6rCc64WQ7Jy866GcIOyCrOyaqeuQmOuvgOuhnCDqs7XsnKDtlaAg7IaN7ISx6rO8IOqzteycoO2VmOyngCDslYrsnYQg7IaN7ISx7J2EIOq1rOu2hO2VmOyXrCDshKTqs4TtlaAg7ZWE7JqU6rCAIOyeiOuLpC5cbiAqL1xuXG5jb25zdCBmYWN0b3J5ID0gbmV3IERpZ2l0RmFjdG9yeSgpO1xuY29uc3QgZG9tVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RtcCcpO1xubGV0IHZhbHVlID0gNDM0MzMxO1xuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IG5ldyBOdW1iZXIoZmFjdG9yeSwgdmFsdWUrKyk7XG4gIG51bWJlci5wdXQoZG9tVGFyZ2V0KTtcbn0sIDEwMCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=