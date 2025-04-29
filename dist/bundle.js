/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/structural/decorator/BoxDecorator.ts":
/*!**************************************************!*\
  !*** ./src/structural/decorator/BoxDecorator.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/structural/decorator/Decorator.ts");
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

var BoxDecorator = /** @class */ (function (_super) {
    __extends(BoxDecorator, _super);
    function BoxDecorator(targetItem) {
        return _super.call(this, targetItem) || this;
    }
    BoxDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount() + 2;
    };
    BoxDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + 2;
    };
    BoxDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + 2;
    };
    BoxDecorator.prototype.getString = function (i) {
        var maxWidth = this.getMaxLength();
        if (i === 0 || i === this.getLinesCount() - 1) {
            return "<span style='color:yellow'>+".concat('-'.repeat(maxWidth - 2), "+</span>");
        }
        else {
            return ("<span style='color:yellow'>|</span>" +
                "".concat(this.targetItem.getString(i - 1)) +
                "".concat(' '.repeat(maxWidth - this.targetItem.getLength(i - 1) - 2)) +
                "<span style='color:yellow'>|</span>");
        }
    };
    return BoxDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxDecorator);


/***/ }),

/***/ "./src/structural/decorator/Decorator.ts":
/*!***********************************************!*\
  !*** ./src/structural/decorator/Decorator.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/structural/decorator/Item.ts");
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

var Decorator = /** @class */ (function (_super) {
    __extends(Decorator, _super);
    function Decorator(targetItem) {
        var _this = _super.call(this) || this;
        _this.targetItem = targetItem;
        return _this;
    }
    return Decorator;
}(_Item__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Decorator);


/***/ }),

/***/ "./src/structural/decorator/Item.ts":
/*!******************************************!*\
  !*** ./src/structural/decorator/Item.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.prototype.print = function (dom) {
        var result = [];
        var cntLines = this.getLinesCount();
        for (var i = 0; i < cntLines; i++) {
            var str = this.getString(i);
            result.push(str);
        }
        dom.innerHTML = result.join('\n');
    };
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


/***/ }),

/***/ "./src/structural/decorator/LineNumberDecorator.ts":
/*!*********************************************************!*\
  !*** ./src/structural/decorator/LineNumberDecorator.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/structural/decorator/Decorator.ts");
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

var LineNumberDecorator = /** @class */ (function (_super) {
    __extends(LineNumberDecorator, _super);
    function LineNumberDecorator(targetItem) {
        return _super.call(this, targetItem) || this;
    }
    LineNumberDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount();
    };
    LineNumberDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + 6;
    };
    LineNumberDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + 6;
    };
    LineNumberDecorator.prototype.getString = function (i) {
        return ("<span style=\"color:green\">" +
            "".concat(String(i).padStart(4, '0')) +
            "</span><span style='color:dimgray'>: </span>" +
            "".concat(this.targetItem.getString(i)));
    };
    return LineNumberDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineNumberDecorator);


/***/ }),

/***/ "./src/structural/decorator/SideDecorator.ts":
/*!***************************************************!*\
  !*** ./src/structural/decorator/SideDecorator.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/structural/decorator/Decorator.ts");
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

var SideDecorator = /** @class */ (function (_super) {
    __extends(SideDecorator, _super);
    function SideDecorator(targetItem, ch) {
        var _this = _super.call(this, targetItem) || this;
        _this.ch = ch;
        return _this;
    }
    SideDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount();
    };
    SideDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + this.ch.length * 2;
    };
    SideDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + this.ch.length * 2;
    };
    SideDecorator.prototype.getString = function (i) {
        return ("<span style='color:gray'>".concat(this.ch, "</span>") +
            "".concat(this.targetItem.getString(i)) +
            "<span style='color:gray'>".concat(this.ch, "</span>"));
    };
    return SideDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideDecorator);


/***/ }),

/***/ "./src/structural/decorator/Strings.ts":
/*!*********************************************!*\
  !*** ./src/structural/decorator/Strings.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/structural/decorator/Item.ts");
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

var Strings = /** @class */ (function (_super) {
    __extends(Strings, _super);
    function Strings() {
        var _this = _super.call(this) || this;
        _this.data = new Array();
        return _this;
    }
    Strings.prototype.getLinesCount = function () {
        return this.data.length;
    };
    Strings.prototype.getLength = function (i) {
        return this.data[i].length;
    };
    Strings.prototype.getMaxLength = function () {
        // return Math.max(...this.data.map(str => str.length));
        var maxLength = 0;
        this.data.forEach(function (item) {
            if (item.length > maxLength) {
                maxLength = item.length;
            }
        });
        return maxLength;
    };
    Strings.prototype.getString = function (i) {
        return this.data[i];
    };
    Strings.prototype.add = function (str) {
        this.data.push(str);
    };
    return Strings;
}(_Item__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Strings);


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
  !*** ./src/structural/decorator/index.ts ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideDecorator */ "./src/structural/decorator/SideDecorator.ts");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Strings */ "./src/structural/decorator/Strings.ts");
/* harmony import */ var _LineNumberDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LineNumberDecorator */ "./src/structural/decorator/LineNumberDecorator.ts");
/* harmony import */ var _BoxDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoxDecorator */ "./src/structural/decorator/BoxDecorator.ts");




var strs = new _Strings__WEBPACK_IMPORTED_MODULE_1__["default"]();
strs.add('Hello');
strs.add('World');
strs.add('My name is Kim Sa Rang');
strs.add('I am a Cat.');
strs.add('Can you open the window and play with me');
var domPre = document.querySelector('pre');
// strs.print(domPre);
var d1 = new _SideDecorator__WEBPACK_IMPORTED_MODULE_0__["default"](strs, '"');
// d1.print(domPre);
var d2 = new _LineNumberDecorator__WEBPACK_IMPORTED_MODULE_2__["default"](d1);
// d2.print(domPre);
var d3 = new _BoxDecorator__WEBPACK_IMPORTED_MODULE_3__["default"](d2);
d3.print(domPre);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3RydWN0dXJhbC9kZWNvcmF0b3IvQm94RGVjb3JhdG9yLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvc3RydWN0dXJhbC9kZWNvcmF0b3IvRGVjb3JhdG9yLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvc3RydWN0dXJhbC9kZWNvcmF0b3IvSXRlbS50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3N0cnVjdHVyYWwvZGVjb3JhdG9yL0xpbmVOdW1iZXJEZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdHJ1Y3R1cmFsL2RlY29yYXRvci9TaWRlRGVjb3JhdG9yLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvc3RydWN0dXJhbC9kZWNvcmF0b3IvU3RyaW5ncy50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdHJ1Y3R1cmFsL2RlY29yYXRvci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGVjb3JhdG9yIGZyb20gJy4vRGVjb3JhdG9yJztcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveERlY29yYXRvciBleHRlbmRzIERlY29yYXRvciB7XG4gIGdldExpbmVzQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldExpbmVzQ291bnQoKSArIDI7XG4gIH1cbiAgZ2V0TGVuZ3RoKGk6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRMZW5ndGgoaSkgKyAyO1xuICB9XG4gIGdldE1heExlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TWF4TGVuZ3RoKCkgKyAyO1xuICB9XG4gIGdldFN0cmluZyhpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1heFdpZHRoID0gdGhpcy5nZXRNYXhMZW5ndGgoKTtcbiAgICBpZiAoaSA9PT0gMCB8fCBpID09PSB0aGlzLmdldExpbmVzQ291bnQoKSAtIDEpIHtcbiAgICAgIHJldHVybiBgPHNwYW4gc3R5bGU9J2NvbG9yOnllbGxvdyc+KyR7Jy0nLnJlcGVhdChtYXhXaWR0aCAtIDIpfSs8L3NwYW4+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYDxzcGFuIHN0eWxlPSdjb2xvcjp5ZWxsb3cnPnw8L3NwYW4+YCArXG4gICAgICAgIGAke3RoaXMudGFyZ2V0SXRlbS5nZXRTdHJpbmcoaSAtIDEpfWAgK1xuICAgICAgICBgJHsnICcucmVwZWF0KG1heFdpZHRoIC0gdGhpcy50YXJnZXRJdGVtLmdldExlbmd0aChpIC0gMSkgLSAyKX1gICtcbiAgICAgICAgYDxzcGFuIHN0eWxlPSdjb2xvcjp5ZWxsb3cnPnw8L3NwYW4+YFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IodGFyZ2V0SXRlbTogSXRlbSkge1xuICAgIHN1cGVyKHRhcmdldEl0ZW0pO1xuICB9XG59XG4iLCJpbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBEZWNvcmF0b3IgZXh0ZW5kcyBJdGVtIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRhcmdldEl0ZW06IEl0ZW0pIHtcbiAgICBzdXBlcigpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBJdGVtIHtcbiAgYWJzdHJhY3QgZ2V0TGluZXNDb3VudCgpOiBudW1iZXI7XG4gIGFic3RyYWN0IGdldExlbmd0aChpOiBudW1iZXIpOiBudW1iZXI7XG4gIGFic3RyYWN0IGdldE1heExlbmd0aCgpOiBudW1iZXI7XG4gIGFic3RyYWN0IGdldFN0cmluZyhpOiBudW1iZXIpOiBzdHJpbmc7XG5cbiAgcHJpbnQoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IGNudExpbmVzID0gdGhpcy5nZXRMaW5lc0NvdW50KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbnRMaW5lczsgaSsrKSB7XG4gICAgICBjb25zdCBzdHIgPSB0aGlzLmdldFN0cmluZyhpKTtcbiAgICAgIHJlc3VsdC5wdXNoKHN0cik7XG4gICAgfVxuICAgIGRvbS5pbm5lckhUTUwgPSByZXN1bHQuam9pbignXFxuJyk7XG4gIH1cbn1cbiIsImltcG9ydCBEZWNvcmF0b3IgZnJvbSAnLi9EZWNvcmF0b3InO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZU51bWJlckRlY29yYXRvciBleHRlbmRzIERlY29yYXRvciB7XG4gIGdldExpbmVzQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldExpbmVzQ291bnQoKTtcbiAgfVxuICBnZXRMZW5ndGgoaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldExlbmd0aChpKSArIDY7XG4gIH1cbiAgZ2V0TWF4TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRNYXhMZW5ndGgoKSArIDY7XG4gIH1cbiAgZ2V0U3RyaW5nKGk6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIGA8c3BhbiBzdHlsZT1cImNvbG9yOmdyZWVuXCI+YCArXG4gICAgICBgJHtTdHJpbmcoaSkucGFkU3RhcnQoNCwgJzAnKX1gICtcbiAgICAgIGA8L3NwYW4+PHNwYW4gc3R5bGU9J2NvbG9yOmRpbWdyYXknPjogPC9zcGFuPmAgK1xuICAgICAgYCR7dGhpcy50YXJnZXRJdGVtLmdldFN0cmluZyhpKX1gXG4gICAgKTtcbiAgfVxuICBjb25zdHJ1Y3Rvcih0YXJnZXRJdGVtOiBJdGVtKSB7XG4gICAgc3VwZXIodGFyZ2V0SXRlbSk7XG4gIH1cbn1cbiIsImltcG9ydCBEZWNvcmF0b3IgZnJvbSAnLi9EZWNvcmF0b3InO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZURlY29yYXRvciBleHRlbmRzIERlY29yYXRvciB7XG4gIGdldExpbmVzQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldExpbmVzQ291bnQoKTtcbiAgfVxuICBnZXRMZW5ndGgoaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldExlbmd0aChpKSArIHRoaXMuY2gubGVuZ3RoICogMjtcbiAgfVxuICBnZXRNYXhMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldE1heExlbmd0aCgpICsgdGhpcy5jaC5sZW5ndGggKiAyO1xuICB9XG4gIGdldFN0cmluZyhpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICBgPHNwYW4gc3R5bGU9J2NvbG9yOmdyYXknPiR7dGhpcy5jaH08L3NwYW4+YCArXG4gICAgICBgJHt0aGlzLnRhcmdldEl0ZW0uZ2V0U3RyaW5nKGkpfWAgK1xuICAgICAgYDxzcGFuIHN0eWxlPSdjb2xvcjpncmF5Jz4ke3RoaXMuY2h9PC9zcGFuPmBcbiAgICApO1xuICB9XG4gIGNvbnN0cnVjdG9yKHRhcmdldEl0ZW06IEl0ZW0sIHByaXZhdGUgY2g6IHN0cmluZykge1xuICAgIHN1cGVyKHRhcmdldEl0ZW0pO1xuICB9XG59XG4iLCJpbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdzIGV4dGVuZHMgSXRlbSB7XG4gIGdldExpbmVzQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcbiAgfVxuICBnZXRMZW5ndGgoaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW2ldLmxlbmd0aDtcbiAgfVxuICBnZXRNYXhMZW5ndGgoKTogbnVtYmVyIHtcbiAgICAvLyByZXR1cm4gTWF0aC5tYXgoLi4udGhpcy5kYXRhLm1hcChzdHIgPT4gc3RyLmxlbmd0aCkpO1xuICAgIGxldCBtYXhMZW5ndGggPSAwO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgbWF4TGVuZ3RoID0gaXRlbS5sZW5ndGg7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1heExlbmd0aDtcbiAgfVxuICBnZXRTdHJpbmcoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW2ldO1xuICB9XG4gIHByaXZhdGUgZGF0YSA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBhZGQoc3RyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEucHVzaChzdHIpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTaWRlRGVjb3JhdG9yIGZyb20gJy4vU2lkZURlY29yYXRvcic7XG5pbXBvcnQgU3RyaW5ncyBmcm9tICcuL1N0cmluZ3MnO1xuaW1wb3J0IExpbmVOdW1iZXJEZWNvcmF0b3IgZnJvbSAnLi9MaW5lTnVtYmVyRGVjb3JhdG9yJztcbmltcG9ydCBCb3hEZWNvcmF0b3IgZnJvbSAnLi9Cb3hEZWNvcmF0b3InO1xuXG5jb25zdCBzdHJzID0gbmV3IFN0cmluZ3MoKTtcbnN0cnMuYWRkKCdIZWxsbycpO1xuc3Rycy5hZGQoJ1dvcmxkJyk7XG5zdHJzLmFkZCgnTXkgbmFtZSBpcyBLaW0gU2EgUmFuZycpO1xuc3Rycy5hZGQoJ0kgYW0gYSBDYXQuJyk7XG5zdHJzLmFkZCgnQ2FuIHlvdSBvcGVuIHRoZSB3aW5kb3cgYW5kIHBsYXkgd2l0aCBtZScpO1xuXG5jb25zdCBkb21QcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcmUnKTtcbi8vIHN0cnMucHJpbnQoZG9tUHJlKTtcblxuY29uc3QgZDEgPSBuZXcgU2lkZURlY29yYXRvcihzdHJzLCAnXCInKTtcbi8vIGQxLnByaW50KGRvbVByZSk7XG5cbmNvbnN0IGQyID0gbmV3IExpbmVOdW1iZXJEZWNvcmF0b3IoZDEpO1xuLy8gZDIucHJpbnQoZG9tUHJlKTtcblxuY29uc3QgZDMgPSBuZXcgQm94RGVjb3JhdG9yKGQyKTtcbmQzLnByaW50KGRvbVByZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=