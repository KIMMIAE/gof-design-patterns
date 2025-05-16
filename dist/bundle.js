/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/behavioral/visitor/AvgVisitor.ts":
/*!**********************************************!*\
  !*** ./src/behavioral/visitor/AvgVisitor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/behavioral/visitor/Item.ts");

var AvgVisitor = /** @class */ (function () {
    function AvgVisitor() {
        this.sum = 0;
        this.count = 0;
    }
    AvgVisitor.prototype.getValue = function () {
        return this.sum / this.count;
    };
    AvgVisitor.prototype.visit = function (unit) {
        if (unit instanceof _Item__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this.sum += unit.getValue();
            this.count++;
        }
        else {
            unit.accept(this);
        }
    };
    return AvgVisitor;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AvgVisitor);


/***/ }),

/***/ "./src/behavioral/visitor/Item.ts":
/*!****************************************!*\
  !*** ./src/behavioral/visitor/Item.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item(value) {
        this.value = value;
    }
    Item.prototype.getValue = function () {
        return this.value;
    };
    Item.prototype.accept = function (visitor) {
        visitor.visit(this);
    };
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


/***/ }),

/***/ "./src/behavioral/visitor/ItemList.ts":
/*!********************************************!*\
  !*** ./src/behavioral/visitor/ItemList.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ItemList = /** @class */ (function () {
    function ItemList() {
        this.list = new Array();
    }
    ItemList.prototype.add = function (unit) {
        this.list.push(unit);
    };
    ItemList.prototype.accept = function (visitor) {
        this.list.forEach(function (unit) { return visitor.visit(unit); });
    };
    return ItemList;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemList);


/***/ }),

/***/ "./src/behavioral/visitor/SumVisitor.ts":
/*!**********************************************!*\
  !*** ./src/behavioral/visitor/SumVisitor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/behavioral/visitor/Item.ts");

var SumVisitor = /** @class */ (function () {
    function SumVisitor() {
        this.sum = 0;
    }
    SumVisitor.prototype.getValue = function () {
        return this.sum;
    };
    SumVisitor.prototype.visit = function (unit) {
        if (unit instanceof _Item__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this.sum += unit.getValue();
        }
        else {
            unit.accept(this);
        }
    };
    return SumVisitor;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SumVisitor);


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
  !*** ./src/behavioral/visitor/index.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AvgVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvgVisitor */ "./src/behavioral/visitor/AvgVisitor.ts");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./src/behavioral/visitor/Item.ts");
/* harmony import */ var _ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemList */ "./src/behavioral/visitor/ItemList.ts");
/* harmony import */ var _SumVisitor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SumVisitor */ "./src/behavioral/visitor/SumVisitor.ts");




/**
 * Visitor 패턴은 데이터 구조와 데이터 처리를 분리해 주는 패턴이다.
 * 데이터에 대한 새로운 처리가 필요할 때 데이터 처리에 대한 새로운 클래스를 추가하는 것만으로도 기능 확장이 가능하다.
 * 효과적인 데이터 처리를 위해서 데이터 구조를 Composite 패턴으로 표현하여 단일 데이터와 집합 데이터를 효과적으로 처리할 수 있도록 한다.
 */
var list1 = new _ItemList__WEBPACK_IMPORTED_MODULE_2__["default"]();
list1.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](10));
list1.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](20));
list1.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](40));
var list2 = new _ItemList__WEBPACK_IMPORTED_MODULE_2__["default"]();
list2.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](30));
list2.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](40));
list1.add(list2);
var list3 = new _ItemList__WEBPACK_IMPORTED_MODULE_2__["default"]();
list3.add(new _Item__WEBPACK_IMPORTED_MODULE_1__["default"](25));
list2.add(list3);
var sum = new _SumVisitor__WEBPACK_IMPORTED_MODULE_3__["default"]();
list1.accept(sum);
console.log("\uD569\uACC4: ".concat(sum.getValue()));
var avg = new _AvgVisitor__WEBPACK_IMPORTED_MODULE_0__["default"]();
list1.accept(avg);
console.log("\uD3C9\uADE0: ".concat(avg.getValue()));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQztBQUN4QixLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksNkNBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXhCLElBQU0sS0FBSyxHQUFHLElBQUksaURBQVEsRUFBRSxDQUFDO0FBQzdCLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSw2Q0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLDZDQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRWpCLElBQU0sS0FBSyxHQUFHLElBQUksaURBQVEsRUFBRSxDQUFDO0FBQzdCLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSw2Q0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVqQixJQUFNLEdBQUcsR0FBRyxJQUFJLG1EQUFVLEVBQUUsQ0FBQztBQUM3QixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFFLENBQUMsQ0FBQztBQUVyQyxJQUFNLEdBQUcsR0FBRyxJQUFJLG1EQUFVLEVBQUUsQ0FBQztBQUM3QixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC92aXNpdG9yL0F2Z1Zpc2l0b3IudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL3Zpc2l0b3IvSXRlbS50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2JlaGF2aW9yYWwvdmlzaXRvci9JdGVtTGlzdC50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2JlaGF2aW9yYWwvdmlzaXRvci9TdW1WaXNpdG9yLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2JlaGF2aW9yYWwvdmlzaXRvci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuaW1wb3J0IFVuaXQgZnJvbSAnLi9Vbml0JztcbmltcG9ydCBWaXNpdG9yIGZyb20gJy4vVmlzaXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2Z1Zpc2l0b3IgaW1wbGVtZW50cyBWaXNpdG9yIHtcbiAgcHJpdmF0ZSBzdW0gPSAwO1xuICBwcml2YXRlIGNvdW50ID0gMDtcblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdW0gLyB0aGlzLmNvdW50O1xuICB9XG5cbiAgdmlzaXQodW5pdDogVW5pdCk6IHZvaWQge1xuICAgIGlmICh1bml0IGluc3RhbmNlb2YgSXRlbSkge1xuICAgICAgdGhpcy5zdW0gKz0gdW5pdC5nZXRWYWx1ZSgpO1xuICAgICAgdGhpcy5jb3VudCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0LmFjY2VwdCh0aGlzKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBVbml0IGZyb20gJy4vVW5pdCc7XG5pbXBvcnQgVmlzaXRvciBmcm9tICcuL1Zpc2l0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIGltcGxlbWVudHMgVW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsdWU6IG51bWJlcikge31cblxuICBnZXRWYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgYWNjZXB0KHZpc2l0b3I6IFZpc2l0b3IpOiB2b2lkIHtcbiAgICB2aXNpdG9yLnZpc2l0KHRoaXMpO1xuICB9XG59XG4iLCJpbXBvcnQgVW5pdCBmcm9tICcuL1VuaXQnO1xuaW1wb3J0IFZpc2l0b3IgZnJvbSAnLi9WaXNpdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUxpc3QgaW1wbGVtZW50cyBVbml0IHtcbiAgcHJpdmF0ZSBsaXN0ID0gbmV3IEFycmF5PFVuaXQ+KCk7XG5cbiAgYWRkKHVuaXQ6IFVuaXQpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3QucHVzaCh1bml0KTtcbiAgfVxuXG4gIGFjY2VwdCh2aXNpdG9yOiBWaXNpdG9yKTogdm9pZCB7XG4gICAgdGhpcy5saXN0LmZvckVhY2goKHVuaXQpID0+IHZpc2l0b3IudmlzaXQodW5pdCkpO1xuICB9XG59XG4iLCJpbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuaW1wb3J0IFVuaXQgZnJvbSAnLi9Vbml0JztcbmltcG9ydCBWaXNpdG9yIGZyb20gJy4vVmlzaXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1bVZpc2l0b3IgaW1wbGVtZW50cyBWaXNpdG9yIHtcbiAgcHJpdmF0ZSBzdW0gPSAwO1xuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnN1bTtcbiAgfVxuXG4gIHZpc2l0KHVuaXQ6IFVuaXQpOiB2b2lkIHtcbiAgICBpZiAodW5pdCBpbnN0YW5jZW9mIEl0ZW0pIHtcbiAgICAgIHRoaXMuc3VtICs9IHVuaXQuZ2V0VmFsdWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdC5hY2NlcHQodGhpcyk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBdmdWaXNpdG9yIGZyb20gJy4vQXZnVmlzaXRvcic7XG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuaW1wb3J0IEl0ZW1MaXN0IGZyb20gJy4vSXRlbUxpc3QnO1xuaW1wb3J0IFN1bVZpc2l0b3IgZnJvbSAnLi9TdW1WaXNpdG9yJztcblxuLyoqXG4gKiBWaXNpdG9yIO2MqO2EtOydgCDrjbDsnbTthLAg6rWs7KGw7JmAIOuNsOydtO2EsCDsspjrpqzrpbwg67aE66as7ZW0IOyjvOuKlCDtjKjthLTsnbTri6QuXG4gKiDrjbDsnbTthLDsl5Ag64yA7ZWcIOyDiOuhnOyatCDsspjrpqzqsIAg7ZWE7JqU7ZWgIOuVjCDrjbDsnbTthLAg7LKY66as7JeQIOuMgO2VnCDsg4jroZzsmrQg7YG0656Y7Iqk66W8IOy2lOqwgO2VmOuKlCDqsoPrp4zsnLzroZzrj4Qg6riw64qlIO2ZleyepeydtCDqsIDriqXtlZjri6QuXG4gKiDtmqjqs7zsoIHsnbgg642w7J207YSwIOyymOumrOulvCDsnITtlbTshJwg642w7J207YSwIOq1rOyhsOulvCBDb21wb3NpdGUg7Yyo7YS07Jy866GcIO2RnO2YhO2VmOyXrCDri6jsnbwg642w7J207YSw7JmAIOynke2VqSDrjbDsnbTthLDrpbwg7Zqo6rO87KCB7Jy866GcIOyymOumrO2VoCDsiJgg7J6I64+E66GdIO2VnOuLpC5cbiAqL1xuXG5jb25zdCBsaXN0MSA9IG5ldyBJdGVtTGlzdCgpO1xubGlzdDEuYWRkKG5ldyBJdGVtKDEwKSk7XG5saXN0MS5hZGQobmV3IEl0ZW0oMjApKTtcbmxpc3QxLmFkZChuZXcgSXRlbSg0MCkpO1xuXG5jb25zdCBsaXN0MiA9IG5ldyBJdGVtTGlzdCgpO1xubGlzdDIuYWRkKG5ldyBJdGVtKDMwKSk7XG5saXN0Mi5hZGQobmV3IEl0ZW0oNDApKTtcbmxpc3QxLmFkZChsaXN0Mik7XG5cbmNvbnN0IGxpc3QzID0gbmV3IEl0ZW1MaXN0KCk7XG5saXN0My5hZGQobmV3IEl0ZW0oMjUpKTtcbmxpc3QyLmFkZChsaXN0Myk7XG5cbmNvbnN0IHN1bSA9IG5ldyBTdW1WaXNpdG9yKCk7XG5saXN0MS5hY2NlcHQoc3VtKTtcbmNvbnNvbGUubG9nKGDtlanqs4Q6ICR7c3VtLmdldFZhbHVlKCl9YCk7XG5cbmNvbnN0IGF2ZyA9IG5ldyBBdmdWaXNpdG9yKCk7XG5saXN0MS5hY2NlcHQoYXZnKTtcbmNvbnNvbGUubG9nKGDtj4nqt6A6ICR7YXZnLmdldFZhbHVlKCl9YCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=