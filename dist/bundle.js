/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/structural/composite/File.ts":
/*!******************************************!*\
  !*** ./src/structural/composite/File.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./src/structural/composite/Unit.ts");
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

var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File(name, size) {
        var _this = _super.call(this, name) || this;
        _this.size = size;
        return _this;
    }
    File.prototype.getSize = function () {
        return this.size;
    };
    return File;
}(_Unit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (File);


/***/ }),

/***/ "./src/structural/composite/Folder.ts":
/*!********************************************!*\
  !*** ./src/structural/composite/Folder.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./src/structural/composite/Unit.ts");
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

var Folder = /** @class */ (function (_super) {
    __extends(Folder, _super);
    function Folder(name) {
        var _this = _super.call(this, name) || this;
        _this.units = [];
        return _this;
    }
    Folder.prototype.getSize = function () {
        return this.units.reduce(function (acc, curr) { return acc + curr.getSize(); }, 0);
    };
    Folder.prototype.add = function (unit) {
        this.units.push(unit);
    };
    Folder.prototype.createUnit = function (unit, dom) {
        var domUnit = document.createElement('div');
        domUnit.classList.add('unit');
        domUnit.innerHTML = "<div><span>".concat(unit.getName(), "</span><span>(").concat(unit.getSize(), ")</span></div>");
        dom.append(domUnit);
        return domUnit;
    };
    Folder.prototype.list = function (dom) {
        var _this = this;
        var domUnit = this.createUnit(this, dom);
        var bFolder = this instanceof Folder;
        if (bFolder) {
            domUnit.classList.add('folder');
            this.units.forEach(function (unit) {
                if (unit instanceof Folder) {
                    unit.list(domUnit);
                }
                else {
                    _this.createUnit(unit, domUnit);
                }
            });
        }
    };
    return Folder;
}(_Unit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Folder);


/***/ }),

/***/ "./src/structural/composite/Unit.ts":
/*!******************************************!*\
  !*** ./src/structural/composite/Unit.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Unit = /** @class */ (function () {
    function Unit(name) {
        this.name = name;
    }
    Unit.prototype.getName = function () {
        return this.name;
    };
    return Unit;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unit);


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
  !*** ./src/structural/composite/index.ts ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Folder */ "./src/structural/composite/Folder.ts");
/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./File */ "./src/structural/composite/File.ts");


var root = new _Folder__WEBPACK_IMPORTED_MODULE_0__["default"]('root');
root.add(new _File__WEBPACK_IMPORTED_MODULE_1__["default"]('a.txt', 1000));
root.add(new _File__WEBPACK_IMPORTED_MODULE_1__["default"]('b.txt', 2000));
var sub1 = new _Folder__WEBPACK_IMPORTED_MODULE_0__["default"]('sub1');
root.add(sub1);
sub1.add(new _File__WEBPACK_IMPORTED_MODULE_1__["default"]('sa.txt', 100));
sub1.add(new _File__WEBPACK_IMPORTED_MODULE_1__["default"]('sb.txt', 4000));
var subSub = new _Folder__WEBPACK_IMPORTED_MODULE_0__["default"]('sub3');
sub1.add(subSub);
subSub.add(new _File__WEBPACK_IMPORTED_MODULE_1__["default"]('subsub1.txt', 2250));
subSub.add(new _File__WEBPACK_IMPORTED_MODULE_1__["default"]('subsub2.txt', 5340));
var sub2 = new _Folder__WEBPACK_IMPORTED_MODULE_0__["default"]('sub2');
root.add(sub2);
sub2.add(new _File__WEBPACK_IMPORTED_MODULE_1__["default"]('sA.txt', 250));
sub2.add(new _File__WEBPACK_IMPORTED_MODULE_1__["default"]('sB.txt', 340));
var dom = document.querySelector('#list');
root.list(dom);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksNkNBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksNkNBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUVsQyxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3N0cnVjdHVyYWwvY29tcG9zaXRlL0ZpbGUudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdHJ1Y3R1cmFsL2NvbXBvc2l0ZS9Gb2xkZXIudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdHJ1Y3R1cmFsL2NvbXBvc2l0ZS9Vbml0LnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3N0cnVjdHVyYWwvY29tcG9zaXRlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVbml0IGZyb20gJy4vVW5pdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGUgZXh0ZW5kcyBVbml0IHtcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwcml2YXRlIHNpemU6IG51bWJlcikge1xuICAgIHN1cGVyKG5hbWUpO1xuICB9XG5cbiAgZ2V0U2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNpemU7XG4gIH1cbn1cbiIsImltcG9ydCBVbml0IGZyb20gJy4vVW5pdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbGRlciBleHRlbmRzIFVuaXQge1xuICBwcml2YXRlIHVuaXRzOiBBcnJheTxVbml0PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKG5hbWUpO1xuICB9XG5cbiAgZ2V0U2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnVuaXRzLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLmdldFNpemUoKSwgMCk7XG4gIH1cblxuICBhZGQodW5pdDogVW5pdCk6IHZvaWQge1xuICAgIHRoaXMudW5pdHMucHVzaCh1bml0KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVW5pdCh1bml0OiBVbml0LCBkb206IEVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21Vbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9tVW5pdC5jbGFzc0xpc3QuYWRkKCd1bml0Jyk7XG4gICAgZG9tVW5pdC5pbm5lckhUTUwgPSBgPGRpdj48c3Bhbj4ke3VuaXQuZ2V0TmFtZSgpfTwvc3Bhbj48c3Bhbj4oJHt1bml0LmdldFNpemUoKX0pPC9zcGFuPjwvZGl2PmA7XG4gICAgZG9tLmFwcGVuZChkb21Vbml0KTtcbiAgICByZXR1cm4gZG9tVW5pdDtcbiAgfVxuXG4gIGxpc3QoZG9tOiBFbGVtZW50KSB7XG4gICAgY29uc3QgZG9tVW5pdCA9IHRoaXMuY3JlYXRlVW5pdCh0aGlzLCBkb20pO1xuICAgIGNvbnN0IGJGb2xkZXIgPSB0aGlzIGluc3RhbmNlb2YgRm9sZGVyO1xuXG4gICAgaWYgKGJGb2xkZXIpIHtcbiAgICAgIGRvbVVuaXQuY2xhc3NMaXN0LmFkZCgnZm9sZGVyJyk7XG4gICAgICB0aGlzLnVuaXRzLmZvckVhY2goKHVuaXQpID0+IHtcbiAgICAgICAgaWYgKHVuaXQgaW5zdGFuY2VvZiBGb2xkZXIpIHtcbiAgICAgICAgICB1bml0Lmxpc3QoZG9tVW5pdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVVbml0KHVuaXQsIGRvbVVuaXQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFVuaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hbWU6IHN0cmluZykge31cblxuICBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGFic3RyYWN0IGdldFNpemUoKTogbnVtYmVyO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRm9sZGVyIGZyb20gJy4vRm9sZGVyJztcbmltcG9ydCBGaWxlIGZyb20gJy4vRmlsZSc7XG5cbmNvbnN0IHJvb3QgPSBuZXcgRm9sZGVyKCdyb290Jyk7XG5yb290LmFkZChuZXcgRmlsZSgnYS50eHQnLCAxMDAwKSk7XG5yb290LmFkZChuZXcgRmlsZSgnYi50eHQnLCAyMDAwKSk7XG5cbmNvbnN0IHN1YjEgPSBuZXcgRm9sZGVyKCdzdWIxJyk7XG5yb290LmFkZChzdWIxKTtcbnN1YjEuYWRkKG5ldyBGaWxlKCdzYS50eHQnLCAxMDApKTtcbnN1YjEuYWRkKG5ldyBGaWxlKCdzYi50eHQnLCA0MDAwKSk7XG5cbmNvbnN0IHN1YlN1YiA9IG5ldyBGb2xkZXIoJ3N1YjMnKTtcbnN1YjEuYWRkKHN1YlN1Yik7XG5zdWJTdWIuYWRkKG5ldyBGaWxlKCdzdWJzdWIxLnR4dCcsIDIyNTApKTtcbnN1YlN1Yi5hZGQobmV3IEZpbGUoJ3N1YnN1YjIudHh0JywgNTM0MCkpO1xuXG5jb25zdCBzdWIyID0gbmV3IEZvbGRlcignc3ViMicpO1xucm9vdC5hZGQoc3ViMik7XG5zdWIyLmFkZChuZXcgRmlsZSgnc0EudHh0JywgMjUwKSk7XG5zdWIyLmFkZChuZXcgRmlsZSgnc0IudHh0JywgMzQwKSk7XG5cbmNvbnN0IGRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Jyk7XG5yb290Lmxpc3QoZG9tKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==