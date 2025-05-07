/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/behavioral/memento/BlindMan.ts":
/*!********************************************!*\
  !*** ./src/behavioral/memento/BlindMan.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action),
/* harmony export */   Memento: () => (/* binding */ Memento),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Action;
(function (Action) {
    Action[Action["UP"] = 1] = "UP";
    Action[Action["DOWN"] = 2] = "DOWN";
    Action[Action["LEFT"] = 3] = "LEFT";
    Action[Action["RIGHT"] = 4] = "RIGHT";
})(Action || (Action = {}));
var Memento = /** @class */ (function () {
    function Memento(_x, _y, actions) {
        this._x = _x;
        this._y = _y;
        this._actions = new Array();
        this._actions = structuredClone(actions);
        // this._actions = JSON.parse(JSON.stringify(actions));
    }
    Object.defineProperty(Memento.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Memento.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Memento.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    return Memento;
}());

var BlindMan = /** @class */ (function () {
    function BlindMan(currentX, currentY, targetX, targetY) {
        this.currentX = currentX;
        this.currentY = currentY;
        this.targetX = targetX;
        this.targetY = targetY;
        this.actions = new Array();
    }
    BlindMan.prototype.walk = function (action) {
        this.actions.push(action);
        if (action === Action.UP) {
            this.currentY += 1;
        }
        else if (action === Action.RIGHT) {
            this.currentX += 1;
        }
        else if (action === Action.DOWN) {
            this.currentY -= 1;
        }
        else if (action === Action.LEFT) {
            this.currentX -= 1;
        }
        return Math.sqrt(Math.pow(this.currentX - this.targetX, 2) +
            Math.pow(this.currentY - this.targetY, 2));
    };
    BlindMan.prototype.createMemento = function () {
        var memento = new Memento(this.currentX, this.currentY, this.actions);
        return memento;
    };
    BlindMan.prototype.restoreMemento = function (memento) {
        this.currentX = memento.x;
        this.currentY = memento.y;
        this.actions = structuredClone(memento.actions);
    };
    BlindMan.prototype.resultPath = function () {
        return this.actions.map(function (action) { return Action[action]; }).join('→');
    };
    return BlindMan;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlindMan);


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
  !*** ./src/behavioral/memento/index.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlindMan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlindMan */ "./src/behavioral/memento/BlindMan.ts");

/**
 * Memento 패턴은 객체의 상태를 기억해 두고 필요할 때 다시 복원하기 위한 패턴이다.
 * 어떤 기능의 실행 이력 보관, 실행 취소, 재실행 등의 목적을 위해 활용될 수 있는 패턴이다.
 * 이미 기억된 객체의 상태가 변경되지 않도록 주의해야 한다.
 */
var blindMan = new _BlindMan__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 10, 10);
var minDistance = Number.MAX_VALUE;
var memento = null;
while (true) {
    var action = Math.floor(Math.random() * 4) + 1;
    var distance = blindMan.walk(action);
    console.log(_BlindMan__WEBPACK_IMPORTED_MODULE_0__.Action[action], distance);
    if (distance === 0.0) {
        console.log('도착!');
        break;
    }
    if (minDistance > distance) {
        minDistance = distance;
        memento = blindMan.createMemento();
    }
    else {
        if (memento !== null) {
            blindMan.restoreMemento(memento);
        }
    }
}
console.log(blindMan.resultPath());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO1FBQ25CLE1BQU07SUFDUixDQUFDO0lBRUQsSUFBSSxXQUFXLEdBQUcsUUFBUSxFQUFFLENBQUM7UUFDM0IsV0FBVyxHQUFHLFFBQVEsQ0FBQztRQUN2QixPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7U0FBTSxDQUFDO1FBQ04sSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDckIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL21lbWVudG8vQmxpbmRNYW4udHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC9tZW1lbnRvL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEFjdGlvbiB7XG4gIFVQID0gMSxcbiAgRE9XTixcbiAgTEVGVCxcbiAgUklHSFQsXG59XG5cbmV4cG9ydCBjbGFzcyBNZW1lbnRvIHtcbiAgcHJpdmF0ZSBfYWN0aW9ucyA9IG5ldyBBcnJheTxBY3Rpb24+KCk7XG4gIGdldCBhY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3Rpb25zO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfeDogbnVtYmVyLCBwcml2YXRlIF95OiBudW1iZXIsIGFjdGlvbnM6IEFycmF5PEFjdGlvbj4pIHtcbiAgICB0aGlzLl9hY3Rpb25zID0gc3RydWN0dXJlZENsb25lKGFjdGlvbnMpO1xuICAgIC8vIHRoaXMuX2FjdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFjdGlvbnMpKTtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLl94O1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3k7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxpbmRNYW4ge1xuICBwcml2YXRlIGFjdGlvbnMgPSBuZXcgQXJyYXk8QWN0aW9uPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY3VycmVudFg6IG51bWJlcixcbiAgICBwcml2YXRlIGN1cnJlbnRZOiBudW1iZXIsXG4gICAgcHJpdmF0ZSB0YXJnZXRYOiBudW1iZXIsXG4gICAgcHJpdmF0ZSB0YXJnZXRZOiBudW1iZXJcbiAgKSB7fVxuXG4gIHdhbGsoYWN0aW9uOiBBY3Rpb24pOiBudW1iZXIge1xuICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvbik7XG5cbiAgICBpZiAoYWN0aW9uID09PSBBY3Rpb24uVVApIHtcbiAgICAgIHRoaXMuY3VycmVudFkgKz0gMTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gQWN0aW9uLlJJR0hUKSB7XG4gICAgICB0aGlzLmN1cnJlbnRYICs9IDE7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IEFjdGlvbi5ET1dOKSB7XG4gICAgICB0aGlzLmN1cnJlbnRZIC09IDE7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IEFjdGlvbi5MRUZUKSB7XG4gICAgICB0aGlzLmN1cnJlbnRYIC09IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KHRoaXMuY3VycmVudFggLSB0aGlzLnRhcmdldFgsIDIpICtcbiAgICAgICAgTWF0aC5wb3codGhpcy5jdXJyZW50WSAtIHRoaXMudGFyZ2V0WSwgMilcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlTWVtZW50bygpOiBNZW1lbnRvIHtcbiAgICBjb25zdCBtZW1lbnRvID0gbmV3IE1lbWVudG8odGhpcy5jdXJyZW50WCwgdGhpcy5jdXJyZW50WSwgdGhpcy5hY3Rpb25zKTtcbiAgICByZXR1cm4gbWVtZW50bztcbiAgfVxuXG4gIHJlc3RvcmVNZW1lbnRvKG1lbWVudG86IE1lbWVudG8pIHtcbiAgICB0aGlzLmN1cnJlbnRYID0gbWVtZW50by54O1xuICAgIHRoaXMuY3VycmVudFkgPSBtZW1lbnRvLnk7XG4gICAgdGhpcy5hY3Rpb25zID0gc3RydWN0dXJlZENsb25lKG1lbWVudG8uYWN0aW9ucyk7XG4gIH1cblxuICByZXN1bHRQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5tYXAoKGFjdGlvbikgPT4gQWN0aW9uW2FjdGlvbl0pLmpvaW4oJ+KGkicpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBCbGluZE1hbiwgeyBBY3Rpb24sIE1lbWVudG8gfSBmcm9tICcuL0JsaW5kTWFuJztcblxuLyoqXG4gKiBNZW1lbnRvIO2MqO2EtOydgCDqsJ3ssrTsnZgg7IOB7YOc66W8IOq4sOyWte2VtCDrkZDqs6Ag7ZWE7JqU7ZWgIOuVjCDri6Tsi5wg67O17JuQ7ZWY6riwIOychO2VnCDtjKjthLTsnbTri6QuXG4gKiDslrTrlqQg6riw64ql7J2YIOyLpO2WiSDsnbTroKUg67O06rSALCDsi6Ttlokg7Leo7IaMLCDsnqzsi6Ttlokg65Ox7J2YIOuqqeyggeydhCDsnITtlbQg7Zmc7Jqp65CgIOyImCDsnojripQg7Yyo7YS07J2064ukLlxuICog7J2066+4IOq4sOyWteuQnCDqsJ3ssrTsnZgg7IOB7YOc6rCAIOuzgOqyveuQmOyngCDslYrrj4TroZ0g7KO87J2Y7ZW07JW8IO2VnOuLpC5cbiAqL1xuXG5jb25zdCBibGluZE1hbiA9IG5ldyBCbGluZE1hbigwLCAwLCAxMCwgMTApO1xubGV0IG1pbkRpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRTtcbmxldCBtZW1lbnRvOiBNZW1lbnRvID0gbnVsbDtcblxud2hpbGUgKHRydWUpIHtcbiAgY29uc3QgYWN0aW9uOiBBY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDE7XG4gIGNvbnN0IGRpc3RhbmNlID0gYmxpbmRNYW4ud2FsayhhY3Rpb24pO1xuXG4gIGNvbnNvbGUubG9nKEFjdGlvblthY3Rpb25dLCBkaXN0YW5jZSk7XG5cbiAgaWYgKGRpc3RhbmNlID09PSAwLjApIHtcbiAgICBjb25zb2xlLmxvZygn64+E7LCpIScpO1xuICAgIGJyZWFrO1xuICB9XG5cbiAgaWYgKG1pbkRpc3RhbmNlID4gZGlzdGFuY2UpIHtcbiAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIG1lbWVudG8gPSBibGluZE1hbi5jcmVhdGVNZW1lbnRvKCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKG1lbWVudG8gIT09IG51bGwpIHtcbiAgICAgIGJsaW5kTWFuLnJlc3RvcmVNZW1lbnRvKG1lbWVudG8pO1xuICAgIH1cbiAgfVxufVxuXG5jb25zb2xlLmxvZyhibGluZE1hbi5yZXN1bHRQYXRoKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9