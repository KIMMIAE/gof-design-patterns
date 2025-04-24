/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/behavioral/iterator/Array.ts":
/*!******************************************!*\
  !*** ./src/behavioral/iterator/Array.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayIterator */ "./src/behavioral/iterator/ArrayIterator.ts");

var Array = /** @class */ (function () {
    function Array(items) {
        this.items = items;
    }
    Array.prototype.getItem = function (index) {
        return this.items[index];
    };
    Object.defineProperty(Array.prototype, "count", {
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    Array.prototype.iterator = function () {
        return new _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    };
    return Array;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Array);


/***/ }),

/***/ "./src/behavioral/iterator/ArrayIterator.ts":
/*!**************************************************!*\
  !*** ./src/behavioral/iterator/ArrayIterator.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ArrayIterator = /** @class */ (function () {
    function ArrayIterator(array) {
        this.array = array;
        this.index = -1;
    }
    ArrayIterator.prototype.next = function () {
        this.index++;
        return this.index < this.array.count;
    };
    ArrayIterator.prototype.current = function () {
        return this.array.getItem(this.index);
    };
    return ArrayIterator;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrayIterator);


/***/ }),

/***/ "./src/behavioral/iterator/Item.ts":
/*!*****************************************!*\
  !*** ./src/behavioral/iterator/Item.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item(_name, _cost) {
        this._name = _name;
        this._cost = _cost;
    }
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


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
  !*** ./src/behavioral/iterator/index.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array */ "./src/behavioral/iterator/Array.ts");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./src/behavioral/iterator/Item.ts");


/**
 * Iterator 패턴은 배열이나 Linked-List, Tree 처럼 다른 데이터 구조를 갖는 Aggregator의 구성 항목을 표준화 된 공통 API로 접근할 수 있다.
 * 데이터 구조가 다른 Aggreator일지라도 구성항목을 표준화된 공통 API로 접근할 수 있음으로 하나의 공통된 알고리즘으로 처리할 수 있다.
 */
var items = [
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]('쿠크다스', 2500),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]('새우깡', 1800),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]('빼뺴로', 1200),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]('초코파이', 4600),
];
var array = new _Array__WEBPACK_IMPORTED_MODULE_0__["default"](items);
var iter = array.iterator();
while (iter.next()) {
    var item = iter.current();
    var domItem = document.createElement('div');
    domItem.innerText = "".concat(item.name, " : ").concat(item.cost, "\uC6D0");
    document.body.appendChild(domItem);
    domItem.classList.add('iterator-item');
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsSUFBSSxDQUFDLElBQUksZ0JBQU0sSUFBSSxDQUFDLElBQUksV0FBRyxDQUFDO0lBQ25ELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2JlaGF2aW9yYWwvaXRlcmF0b3IvQXJyYXkudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL2l0ZXJhdG9yL0FycmF5SXRlcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL2l0ZXJhdG9yL0l0ZW0udHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC9pdGVyYXRvci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWdncmVnYXRvciBmcm9tICcuL0FnZ3JlZ2F0b3InO1xuaW1wb3J0IEFycmF5SXRlcmF0b3IgZnJvbSAnLi9BcnJheUl0ZXJhdG9yJztcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5pbXBvcnQgSXRlcmF0b3IgZnJvbSAnLi9JdGVyYXRvcic7XG5cbmNsYXNzIEFycmF5IGltcGxlbWVudHMgQWdncmVnYXRvcjxJdGVtPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbXM6IEl0ZW1bXSkge31cblxuICBwdWJsaWMgZ2V0SXRlbShpbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbaW5kZXhdO1xuICB9XG5cbiAgcHVibGljIGdldCBjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGg7XG4gIH1cblxuICBpdGVyYXRvcigpOiBJdGVyYXRvcjxJdGVtPiB7XG4gICAgcmV0dXJuIG5ldyBBcnJheUl0ZXJhdG9yKHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5O1xuIiwiaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcbmltcG9ydCBJdGVyYXRvciBmcm9tICcuL0l0ZXJhdG9yJztcbmltcG9ydCBBcnJheSBmcm9tICcuL0FycmF5JztcblxuY2xhc3MgQXJyYXlJdGVyYXRvciBpbXBsZW1lbnRzIEl0ZXJhdG9yPEl0ZW0+IHtcbiAgcHJpdmF0ZSBpbmRleDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXJyYXk6IEFycmF5KSB7XG4gICAgdGhpcy5pbmRleCA9IC0xO1xuICB9XG5cbiAgbmV4dCgpOiBib29sZWFuIHtcbiAgICB0aGlzLmluZGV4Kys7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXggPCB0aGlzLmFycmF5LmNvdW50O1xuICB9XG5cbiAgY3VycmVudCgpOiBJdGVtIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5nZXRJdGVtKHRoaXMuaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5SXRlcmF0b3I7XG4iLCJjbGFzcyBJdGVtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmFtZTogc3RyaW5nLCBwcml2YXRlIF9jb3N0OiBudW1iZXIpIHt9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBnZXQgY29zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29zdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQXJyYXkgZnJvbSAnLi9BcnJheSc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuLyoqXG4gKiBJdGVyYXRvciDtjKjthLTsnYAg67Cw7Je07J2064KYIExpbmtlZC1MaXN0LCBUcmVlIOyymOufvCDri6Trpbgg642w7J207YSwIOq1rOyhsOulvCDqsJbripQgQWdncmVnYXRvcuydmCDqtazshLEg7ZWt66qp7J2EIO2RnOykgO2ZlCDrkJwg6rO17Ya1IEFQSeuhnCDsoJHqt7ztlaAg7IiYIOyeiOuLpC5cbiAqIOuNsOydtO2EsCDqtazsobDqsIAg64uk66W4IEFnZ3JlYXRvcuydvOyngOudvOuPhCDqtazshLHtla3rqqnsnYQg7ZGc7KSA7ZmU65CcIOqzte2GtSBBUEnroZwg7KCR6re87ZWgIOyImCDsnojsnYzsnLzroZwg7ZWY64KY7J2YIOqzte2GteuQnCDslYzqs6DrpqzsppjsnLzroZwg7LKY66as7ZWgIOyImCDsnojri6QuXG4gKi9cbmNvbnN0IGl0ZW1zID0gW1xuICBuZXcgSXRlbSgn7L+g7YGs64uk7IqkJywgMjUwMCksXG4gIG5ldyBJdGVtKCfsg4jsmrDquaEnLCAxODAwKSxcbiAgbmV3IEl0ZW0oJ+u5vOu6tOuhnCcsIDEyMDApLFxuICBuZXcgSXRlbSgn7LSI7L2U7YyM7J20JywgNDYwMCksXG5dO1xuXG5jb25zdCBhcnJheSA9IG5ldyBBcnJheShpdGVtcyk7XG5jb25zdCBpdGVyID0gYXJyYXkuaXRlcmF0b3IoKTtcblxud2hpbGUgKGl0ZXIubmV4dCgpKSB7XG4gIGNvbnN0IGl0ZW0gPSBpdGVyLmN1cnJlbnQoKTtcblxuICBjb25zdCBkb21JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRvbUl0ZW0uaW5uZXJUZXh0ID0gYCR7aXRlbS5uYW1lfSA6ICR7aXRlbS5jb3N0feybkGA7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tSXRlbSk7XG4gIGRvbUl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlcmF0b3ItaXRlbScpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9