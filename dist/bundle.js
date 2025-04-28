/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/structural/adapter/Animal.ts":
/*!******************************************!*\
  !*** ./src/structural/adapter/Animal.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animal);


/***/ }),

/***/ "./src/structural/adapter/Cat.ts":
/*!***************************************!*\
  !*** ./src/structural/adapter/Cat.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/structural/adapter/Animal.ts");
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

var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.sound = function () {
        console.log("".concat(this.name, "\uAC00 \uC57C\uC639~"));
    };
    return Cat;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cat);


/***/ }),

/***/ "./src/structural/adapter/Dog.ts":
/*!***************************************!*\
  !*** ./src/structural/adapter/Dog.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/structural/adapter/Animal.ts");
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

var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.sound = function () {
        console.log("".concat(this.name, "\uAC00 \uBA4D\uBA4D~"));
    };
    return Dog;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dog);


/***/ }),

/***/ "./src/structural/adapter/Tiger.ts":
/*!*****************************************!*\
  !*** ./src/structural/adapter/Tiger.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Tiger = /** @class */ (function () {
    function Tiger() {
        this._name = null;
    }
    Object.defineProperty(Tiger.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    Tiger.prototype.roar = function () {
        return '으르릉~';
    };
    return Tiger;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tiger);


/***/ }),

/***/ "./src/structural/adapter/TigerAdapter.ts":
/*!************************************************!*\
  !*** ./src/structural/adapter/TigerAdapter.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/structural/adapter/Animal.ts");
/* harmony import */ var _Tiger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tiger */ "./src/structural/adapter/Tiger.ts");
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


var TigerAdapter = /** @class */ (function (_super) {
    __extends(TigerAdapter, _super);
    function TigerAdapter(name) {
        var _this = _super.call(this, name) || this;
        _this.tiger = new _Tiger__WEBPACK_IMPORTED_MODULE_1__["default"]();
        _this.tiger.name = name;
        return _this;
    }
    TigerAdapter.prototype.sound = function () {
        console.log("".concat(this.tiger.name, "\uAC00 ").concat(this.tiger.roar()));
    };
    return TigerAdapter;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TigerAdapter);


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
/*!*****************************************!*\
  !*** ./src/structural/adapter/index.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cat */ "./src/structural/adapter/Cat.ts");
/* harmony import */ var _Dog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dog */ "./src/structural/adapter/Dog.ts");
/* harmony import */ var _TigerAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TigerAdapter */ "./src/structural/adapter/TigerAdapter.ts");



/**
 * Adapter 패턴은 코드를 변경할 수 없는 클래스를 원하는 형태로 사용하고자 할 때 적용할 수 있는 패턴이다.
 * 클래스의 코드를 변경하기 어려운 경우
 * ex1) 처음부터 코드가 제공되지 않는 클래스의 경우(컴파일 언어인 경우에 한함)
 * ex2) 이미 많은 프로그램에서 사용되는 공용 클래스로써 공용 클래스가 변경되면 영향을 받는 다른 프로그램의 코드가 너무 많이 변경되는 경우
 * ex3) 어떤 클래스가 버전업된 경우 하위버전의 클래스도 지원해야 하는 경우
 */
var list = Array();
list.push(new _Dog__WEBPACK_IMPORTED_MODULE_1__["default"]('쿠키'));
list.push(new _Cat__WEBPACK_IMPORTED_MODULE_0__["default"]('사랑이'));
list.push(new _Cat__WEBPACK_IMPORTED_MODULE_0__["default"]('야옹이'));
// const tiger = new Tiger();
// tiger.name = '호돌이';
// list.push(tiger);
list.push(new _TigerAdapter__WEBPACK_IMPORTED_MODULE_2__["default"]('호돌이'));
list.forEach(function (animal) {
    animal.sound();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDdEIsb0JBQW9CO0FBRXBCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxxREFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFFbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07SUFDbEIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdHJ1Y3R1cmFsL2FkYXB0ZXIvQW5pbWFsLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvc3RydWN0dXJhbC9hZGFwdGVyL0NhdC50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3N0cnVjdHVyYWwvYWRhcHRlci9Eb2cudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdHJ1Y3R1cmFsL2FkYXB0ZXIvVGlnZXIudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdHJ1Y3R1cmFsL2FkYXB0ZXIvVGlnZXJBZGFwdGVyLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3N0cnVjdHVyYWwvYWRhcHRlci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBbmltYWwge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbmFtZTogc3RyaW5nKSB7fVxuICBhYnN0cmFjdCBzb3VuZCgpOiB2b2lkO1xufVxuIiwiaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdCBleHRlbmRzIEFuaW1hbCB7XG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKG5hbWUpO1xuICB9XG5cbiAgc291bmQoKSB7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfeqwgCDslbzsmLl+YCk7XG4gIH1cbn1cbiIsImltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2cgZXh0ZW5kcyBBbmltYWwge1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgfVxuXG4gIHNvdW5kKCkge1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX3qsIAg66mN66mNfmApO1xuICB9XG59XG4iLCJpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlnZXIge1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBzZXQgbmFtZSh2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdjtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgcm9hcigpOiBzdHJpbmcge1xuICAgIHJldHVybiAn7Jy866W066aJfic7XG4gIH1cbn1cbiIsImltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwnO1xuaW1wb3J0IFRpZ2VyIGZyb20gJy4vVGlnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWdlckFkYXB0ZXIgZXh0ZW5kcyBBbmltYWwge1xuICBwcml2YXRlIHRpZ2VyOiBUaWdlcjtcblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuYW1lKTtcblxuICAgIHRoaXMudGlnZXIgPSBuZXcgVGlnZXIoKTtcbiAgICB0aGlzLnRpZ2VyLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc291bmQoKSB7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy50aWdlci5uYW1lfeqwgCAke3RoaXMudGlnZXIucm9hcigpfWApO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwnO1xuaW1wb3J0IENhdCBmcm9tICcuL0NhdCc7XG5pbXBvcnQgRG9nIGZyb20gJy4vRG9nJztcbmltcG9ydCBUaWdlciBmcm9tICcuL1RpZ2VyJztcbmltcG9ydCBUaWdlckFkYXB0ZXIgZnJvbSAnLi9UaWdlckFkYXB0ZXInO1xuXG4vKipcbiAqIEFkYXB0ZXIg7Yyo7YS07J2AIOy9lOuTnOulvCDrs4Dqsr3tlaAg7IiYIOyXhuuKlCDtgbTrnpjsiqTrpbwg7JuQ7ZWY64qUIO2Yle2DnOuhnCDsgqzsmqntlZjqs6DsnpAg7ZWgIOuVjCDsoIHsmqntlaAg7IiYIOyeiOuKlCDtjKjthLTsnbTri6QuXG4gKiDtgbTrnpjsiqTsnZgg7L2U65Oc66W8IOuzgOqyve2VmOq4sCDslrTroKTsmrQg6rK97JqwXG4gKiBleDEpIOyymOydjOu2gO2EsCDsvZTrk5zqsIAg7KCc6rO165CY7KeAIOyViuuKlCDtgbTrnpjsiqTsnZgg6rK97JqwKOy7tO2MjOydvCDslrjslrTsnbgg6rK97Jqw7JeQIO2VnO2VqClcbiAqIGV4Mikg7J2066+4IOunjuydgCDtlITroZzqt7jrnqjsl5DshJwg7IKs7Jqp65CY64qUIOqzteyaqSDtgbTrnpjsiqTroZzsjagg6rO17JqpIO2BtOuemOyKpOqwgCDrs4Dqsr3rkJjrqbQg7JiB7Zal7J2EIOuwm+uKlCDri6Trpbgg7ZSE66Gc6re4656o7J2YIOy9lOuTnOqwgCDrhIjrrLQg66eO7J20IOuzgOqyveuQmOuKlCDqsr3smrBcbiAqIGV4Mykg7Ja065akIO2BtOuemOyKpOqwgCDrsoTsoITsl4XrkJwg6rK97JqwIO2VmOychOuyhOyghOydmCDtgbTrnpjsiqTrj4Qg7KeA7JuQ7ZW07JW8IO2VmOuKlCDqsr3smrBcbiAqL1xuXG5jb25zdCBsaXN0ID0gQXJyYXk8QW5pbWFsPigpO1xuXG5saXN0LnB1c2gobmV3IERvZygn7L+g7YKkJykpO1xubGlzdC5wdXNoKG5ldyBDYXQoJ+yCrOuekeydtCcpKTtcbmxpc3QucHVzaChuZXcgQ2F0KCfslbzsmLnsnbQnKSk7XG5cbi8vIGNvbnN0IHRpZ2VyID0gbmV3IFRpZ2VyKCk7XG4vLyB0aWdlci5uYW1lID0gJ+2YuOuPjOydtCc7XG4vLyBsaXN0LnB1c2godGlnZXIpO1xuXG5saXN0LnB1c2gobmV3IFRpZ2VyQWRhcHRlcign7Zi464+M7J20JykpO1xuXG5saXN0LmZvckVhY2goKGFuaW1hbCkgPT4ge1xuICBhbmltYWwuc291bmQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9