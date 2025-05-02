/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/creational/factory-method/Bow.ts":
/*!**********************************************!*\
  !*** ./src/creational/factory-method/Bow.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Bow = /** @class */ (function () {
    function Bow() {
    }
    Bow.prototype.use = function () {
        return '활로 멀리서 쏘았다. 약오르지?!';
    };
    return Bow;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bow);


/***/ }),

/***/ "./src/creational/factory-method/Factory.ts":
/*!**************************************************!*\
  !*** ./src/creational/factory-method/Factory.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.create = function (name) {
        var bCreatable = this.isCreatable(name);
        if (bCreatable) {
            var item = this.createItem(name);
            this.postprocessItem(name);
            return item;
        }
        return null;
    };
    return Factory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Factory);


/***/ }),

/***/ "./src/creational/factory-method/ItemFactory.ts":
/*!******************************************************!*\
  !*** ./src/creational/factory-method/ItemFactory.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Bow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bow */ "./src/creational/factory-method/Bow.ts");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factory */ "./src/creational/factory-method/Factory.ts");
/* harmony import */ var _Shield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shield */ "./src/creational/factory-method/Shield.ts");
/* harmony import */ var _Sword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sword */ "./src/creational/factory-method/Sword.ts");
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




var ItemCount = /** @class */ (function () {
    function ItemCount(_maxCount) {
        this._maxCount = _maxCount;
        this._currentCount = 0;
    }
    Object.defineProperty(ItemCount.prototype, "maxCount", {
        get: function () {
            return this._maxCount;
        },
        enumerable: false,
        configurable: true
    });
    ItemCount.prototype.isCreatable = function () {
        return this._currentCount < this.maxCount;
    };
    ItemCount.prototype.increaseCount = function () {
        if (this.isCreatable) {
            this._currentCount++;
        }
    };
    return ItemCount;
}());
var ItemFactory = /** @class */ (function (_super) {
    __extends(ItemFactory, _super);
    function ItemFactory() {
        var _this = _super.call(this) || this;
        _this.repository = new Map();
        _this.repository.set('sword', new ItemCount(3));
        _this.repository.set('shield', new ItemCount(5));
        _this.repository.set('bow', new ItemCount(2));
        return _this;
    }
    ItemFactory.prototype.isCreatable = function (name) {
        var itemCount = this.repository.get(name);
        return itemCount.isCreatable();
    };
    ItemFactory.prototype.createItem = function (name) {
        var result = null;
        if (name === 'sword') {
            result = new _Sword__WEBPACK_IMPORTED_MODULE_3__["default"]();
        }
        else if (name === 'shield') {
            result = new _Shield__WEBPACK_IMPORTED_MODULE_2__["default"]();
        }
        else if (name === 'bow') {
            result = new _Bow__WEBPACK_IMPORTED_MODULE_0__["default"]();
        }
        return result;
    };
    ItemFactory.prototype.postprocessItem = function (name) {
        var itemCount = this.repository.get(name);
        itemCount.increaseCount();
    };
    return ItemFactory;
}(_Factory__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemFactory);


/***/ }),

/***/ "./src/creational/factory-method/Shield.ts":
/*!*************************************************!*\
  !*** ./src/creational/factory-method/Shield.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Shield = /** @class */ (function () {
    function Shield() {
    }
    Shield.prototype.use = function () {
        return '방패로 공격을 막았다. 멋지다!';
    };
    return Shield;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shield);


/***/ }),

/***/ "./src/creational/factory-method/Sword.ts":
/*!************************************************!*\
  !*** ./src/creational/factory-method/Sword.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Sword = /** @class */ (function () {
    function Sword() {
    }
    Sword.prototype.use = function () {
        return '칼로 샥 베었다. 잔인하다!';
    };
    return Sword;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sword);


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
/*!************************************************!*\
  !*** ./src/creational/factory-method/index.ts ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemFactory */ "./src/creational/factory-method/ItemFactory.ts");

/**
 * Factory Method 패턴은 객체 생성을 위한 패턴 중에 하나로 객체 생성에 필요한 과정을 템플릿처럼 정해 놓고 각 과정을 다양하게 구현이 가능하다.
 * 객체 생성에 대한 인터페이스와 구현의 분리를 통해 새로운 객체 생성을 유연하게 확장할 수 있다.
 */
var factory = new _ItemFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
var domOutput = document.querySelector('textarea');
var buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    return button.addEventListener('click', function (event) {
        var itemName = event.target.innerText;
        var item = factory.create(itemName);
        if (item) {
            domOutput.value += "\n".concat(item.use());
        }
        else {
            domOutput.value += "\n".concat(itemName, "\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4! \u3160_\u3160");
        }
        domOutput.scrollTop = domOutput.scrollHeight;
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsQ0FBQyxDQUFDO1FBQ3RDLElBQUksSUFBSSxFQUFFLENBQUM7WUFDVCxTQUFTLENBQUMsS0FBSyxJQUFJLFlBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFFLENBQUM7UUFDdkMsQ0FBQzthQUFNLENBQUM7WUFDTixTQUFTLENBQUMsS0FBSyxJQUFJLFlBQUssUUFBUSw2RUFBbUIsQ0FBQztRQUN0RCxDQUFDO1FBQ0QsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO0lBQy9DLENBQUMsQ0FBQztBQVRGLENBU0UsQ0FDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9jcmVhdGlvbmFsL2ZhY3RvcnktbWV0aG9kL0Jvdy50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NyZWF0aW9uYWwvZmFjdG9yeS1tZXRob2QvRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NyZWF0aW9uYWwvZmFjdG9yeS1tZXRob2QvSXRlbUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9jcmVhdGlvbmFsL2ZhY3RvcnktbWV0aG9kL1NoaWVsZC50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NyZWF0aW9uYWwvZmFjdG9yeS1tZXRob2QvU3dvcmQudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvY3JlYXRpb25hbC9mYWN0b3J5LW1ldGhvZC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3cgaW1wbGVtZW50cyBJdGVtIHtcbiAgdXNlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICftmZzroZwg66mA66as7IScIOyPmOyVmOuLpC4g7JW97Jik66W07KeAPyEnO1xuICB9XG59XG4iLCJpbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuXG5leHBvcnQgdHlwZSBJdGVtTmFtZSA9ICdzd29yZCcgfCAnc2hpZWxkJyB8ICdib3cnO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBGYWN0b3J5IHtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGlzQ3JlYXRhYmxlKG5hbWU6IEl0ZW1OYW1lKTogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUl0ZW0obmFtZTogSXRlbU5hbWUpOiBJdGVtO1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgcG9zdHByb2Nlc3NJdGVtKG5hbWU6IEl0ZW1OYW1lKTogdm9pZDtcblxuICBjcmVhdGUobmFtZTogSXRlbU5hbWUpOiBJdGVtIHtcbiAgICBjb25zdCBiQ3JlYXRhYmxlID0gdGhpcy5pc0NyZWF0YWJsZShuYW1lKTtcbiAgICBpZiAoYkNyZWF0YWJsZSkge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY3JlYXRlSXRlbShuYW1lKTtcbiAgICAgIHRoaXMucG9zdHByb2Nlc3NJdGVtKG5hbWUpO1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgQm93IGZyb20gJy4vQm93JztcbmltcG9ydCBGYWN0b3J5LCB7IEl0ZW1OYW1lIH0gZnJvbSAnLi9GYWN0b3J5JztcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5pbXBvcnQgU2hpZWxkIGZyb20gJy4vU2hpZWxkJztcbmltcG9ydCBTd29yZCBmcm9tICcuL1N3b3JkJztcblxuY2xhc3MgSXRlbUNvdW50IHtcbiAgcHJpdmF0ZSBfY3VycmVudENvdW50ID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tYXhDb3VudDogbnVtYmVyKSB7fVxuXG4gIGdldCBtYXhDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tYXhDb3VudDtcbiAgfVxuXG4gIGlzQ3JlYXRhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q291bnQgPCB0aGlzLm1heENvdW50O1xuICB9XG5cbiAgaW5jcmVhc2VDb3VudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0NyZWF0YWJsZSkge1xuICAgICAgdGhpcy5fY3VycmVudENvdW50Kys7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1GYWN0b3J5IGV4dGVuZHMgRmFjdG9yeSB7XG4gIHByb3RlY3RlZCBpc0NyZWF0YWJsZShuYW1lOiBJdGVtTmFtZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGl0ZW1Db3VudCA9IHRoaXMucmVwb3NpdG9yeS5nZXQobmFtZSk7XG4gICAgcmV0dXJuIGl0ZW1Db3VudC5pc0NyZWF0YWJsZSgpO1xuICB9XG4gIHByb3RlY3RlZCBjcmVhdGVJdGVtKG5hbWU6IEl0ZW1OYW1lKTogSXRlbSB7XG4gICAgbGV0IHJlc3VsdDogSXRlbSA9IG51bGw7XG5cbiAgICBpZiAobmFtZSA9PT0gJ3N3b3JkJykge1xuICAgICAgcmVzdWx0ID0gbmV3IFN3b3JkKCk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnc2hpZWxkJykge1xuICAgICAgcmVzdWx0ID0gbmV3IFNoaWVsZCgpO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2JvdycpIHtcbiAgICAgIHJlc3VsdCA9IG5ldyBCb3coKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBwcm90ZWN0ZWQgcG9zdHByb2Nlc3NJdGVtKG5hbWU6IEl0ZW1OYW1lKTogdm9pZCB7XG4gICAgY29uc3QgaXRlbUNvdW50ID0gdGhpcy5yZXBvc2l0b3J5LmdldChuYW1lKTtcbiAgICBpdGVtQ291bnQuaW5jcmVhc2VDb3VudCgpO1xuICB9XG4gIHByaXZhdGUgcmVwb3NpdG9yeSA9IG5ldyBNYXA8SXRlbU5hbWUsIEl0ZW1Db3VudD4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5yZXBvc2l0b3J5LnNldCgnc3dvcmQnLCBuZXcgSXRlbUNvdW50KDMpKTtcbiAgICB0aGlzLnJlcG9zaXRvcnkuc2V0KCdzaGllbGQnLCBuZXcgSXRlbUNvdW50KDUpKTtcbiAgICB0aGlzLnJlcG9zaXRvcnkuc2V0KCdib3cnLCBuZXcgSXRlbUNvdW50KDIpKTtcbiAgfVxufVxuIiwiaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpZWxkIGltcGxlbWVudHMgSXRlbSB7XG4gIHVzZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAn67Cp7Yyo66GcIOqzteqyqeydhCDrp4nslZjri6QuIOupi+yngOuLpCEnO1xuICB9XG59XG4iLCJpbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd29yZCBpbXBsZW1lbnRzIEl0ZW0ge1xuICB1c2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ+y5vOuhnCDsg6Ug67Kg7JeI64ukLiDsnpTsnbjtlZjri6QhJztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBJdGVtTmFtZSB9IGZyb20gJy4vRmFjdG9yeSc7XG5pbXBvcnQgSXRlbUZhY3RvcnkgZnJvbSAnLi9JdGVtRmFjdG9yeSc7XG5cbi8qKlxuICogRmFjdG9yeSBNZXRob2Qg7Yyo7YS07J2AIOqwneyytCDsg53shLHsnYQg7JyE7ZWcIO2MqO2EtCDspJHsl5Ag7ZWY64KY66GcIOqwneyytCDsg53shLHsl5Ag7ZWE7JqU7ZWcIOqzvOygleydhCDthZztlIzrpr/sspjrn7wg7KCV7ZW0IOuGk+qzoCDqsIEg6rO87KCV7J2EIOuLpOyWke2VmOqyjCDqtaztmITsnbQg6rCA64ql7ZWY64ukLlxuICog6rCd7LK0IOyDneyEseyXkCDrjIDtlZwg7J247YSw7Y6Y7J207Iqk7JmAIOq1rO2YhOydmCDrtoTrpqzrpbwg7Ya17ZW0IOyDiOuhnOyatCDqsJ3ssrQg7IOd7ISx7J2EIOycoOyXsO2VmOqyjCDtmZXsnqXtlaAg7IiYIOyeiOuLpC5cbiAqL1xuXG5jb25zdCBmYWN0b3J5ID0gbmV3IEl0ZW1GYWN0b3J5KCk7XG5cbmNvbnN0IGRvbU91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG5cbmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PlxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBpdGVtTmFtZSA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlubmVyVGV4dCBhcyBJdGVtTmFtZTtcbiAgICBjb25zdCBpdGVtID0gZmFjdG9yeS5jcmVhdGUoaXRlbU5hbWUpO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBkb21PdXRwdXQudmFsdWUgKz0gYFxcbiR7aXRlbS51c2UoKX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21PdXRwdXQudmFsdWUgKz0gYFxcbiR7aXRlbU5hbWV97J2EIOyCrOyaqe2VoCDsiJgg7JeG7Iq164uI64ukISDjhaBf44WgYDtcbiAgICB9XG4gICAgZG9tT3V0cHV0LnNjcm9sbFRvcCA9IGRvbU91dHB1dC5zY3JvbGxIZWlnaHQ7XG4gIH0pXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9