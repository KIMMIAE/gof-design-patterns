/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/behavioral/mediator/CoolAircon.ts":
/*!***********************************************!*\
  !*** ./src/behavioral/mediator/CoolAircon.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/behavioral/mediator/Participant.ts");
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

var CoolAircon = /** @class */ (function (_super) {
    __extends(CoolAircon, _super);
    function CoolAircon(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bOff = true;
        return _this;
    }
    CoolAircon.prototype.on = function () {
        if (!this.bOff) {
            return;
        }
        this.bOff = false;
        this.mediator.participantsChanged(this);
    };
    CoolAircon.prototype.off = function () {
        if (this.bOff) {
            return;
        }
        this.bOff = true;
        this.mediator.participantsChanged(this);
    };
    CoolAircon.prototype.isRunning = function () {
        return !this.bOff;
    };
    CoolAircon.prototype.displayState = function (dom) {
        dom.innerHTML = this.bOff ? 'CoolAircon is off' : 'CoolAircon is on';
        if (this.bOff) {
            dom.classList.remove('highlight');
        }
        else {
            dom.classList.add('highlight');
        }
    };
    return CoolAircon;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoolAircon);


/***/ }),

/***/ "./src/behavioral/mediator/Door.ts":
/*!*****************************************!*\
  !*** ./src/behavioral/mediator/Door.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/behavioral/mediator/Participant.ts");
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

var Door = /** @class */ (function (_super) {
    __extends(Door, _super);
    function Door(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bClosed = true;
        return _this;
    }
    Door.prototype.open = function () {
        if (!this.bClosed) {
            return;
        }
        this.bClosed = false;
        this.mediator.participantsChanged(this);
    };
    Door.prototype.close = function () {
        if (this.bClosed) {
            return;
        }
        this.bClosed = true;
        this.mediator.participantsChanged(this);
    };
    Door.prototype.isClosed = function () {
        return this.bClosed;
    };
    Door.prototype.displayState = function (dom) {
        dom.innerHTML = this.bClosed ? 'Door is closed' : 'Door is open';
        if (this.bClosed) {
            dom.classList.remove('highlight');
        }
        else {
            dom.classList.add('highlight');
        }
    };
    return Door;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Door);


/***/ }),

/***/ "./src/behavioral/mediator/HeatBoiler.ts":
/*!***********************************************!*\
  !*** ./src/behavioral/mediator/HeatBoiler.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/behavioral/mediator/Participant.ts");
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

var HeatBoiler = /** @class */ (function (_super) {
    __extends(HeatBoiler, _super);
    function HeatBoiler(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bOff = true;
        return _this;
    }
    HeatBoiler.prototype.on = function () {
        if (!this.bOff) {
            return;
        }
        this.bOff = false;
        this.mediator.participantsChanged(this);
    };
    HeatBoiler.prototype.off = function () {
        if (this.bOff) {
            return;
        }
        this.bOff = true;
        this.mediator.participantsChanged(this);
    };
    HeatBoiler.prototype.isRunning = function () {
        return !this.bOff;
    };
    HeatBoiler.prototype.displayState = function (dom) {
        dom.innerHTML = this.bOff ? 'HeatBoiler is off' : 'HeatBoiler is on';
        if (this.bOff) {
            dom.classList.remove('highlight');
        }
        else {
            dom.classList.add('highlight');
        }
    };
    return HeatBoiler;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeatBoiler);


/***/ }),

/***/ "./src/behavioral/mediator/Participant.ts":
/*!************************************************!*\
  !*** ./src/behavioral/mediator/Participant.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Participant = /** @class */ (function () {
    function Participant(mediator) {
        this.mediator = mediator;
    }
    return Participant;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Participant);


/***/ }),

/***/ "./src/behavioral/mediator/SmartHome.ts":
/*!**********************************************!*\
  !*** ./src/behavioral/mediator/SmartHome.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Door__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Door */ "./src/behavioral/mediator/Door.ts");
/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Window */ "./src/behavioral/mediator/Window.ts");
/* harmony import */ var _HeatBoiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeatBoiler */ "./src/behavioral/mediator/HeatBoiler.ts");
/* harmony import */ var _CoolAircon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CoolAircon */ "./src/behavioral/mediator/CoolAircon.ts");




var SmartHome = /** @class */ (function () {
    function SmartHome() {
        this.door = new _Door__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        this.window = new _Window__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.heatBoiler = new _HeatBoiler__WEBPACK_IMPORTED_MODULE_2__["default"](this);
        this.coolAircon = new _CoolAircon__WEBPACK_IMPORTED_MODULE_3__["default"](this);
    }
    SmartHome.prototype.participantsChanged = function (participant) {
        if (participant === this.door && !this.door.isClosed()) {
            this.heatBoiler.off();
            this.coolAircon.off();
        }
        if (participant === this.window && !this.window.isClosed()) {
            this.heatBoiler.off();
            this.coolAircon.off();
        }
        if (participant === this.coolAircon && this.coolAircon.isRunning()) {
            this.heatBoiler.off();
            this.window.close();
            this.door.close();
        }
        if (participant === this.heatBoiler && this.heatBoiler.isRunning()) {
            this.coolAircon.off();
            this.window.close();
            this.door.close();
        }
    };
    SmartHome.prototype.display = function () {
        var domDoor = document.querySelector('.door');
        var domWindow = document.querySelector('.window');
        var domHeatBoiler = document.querySelector('.heatBoiler');
        var domCoolAircon = document.querySelector('.coolAircon');
        this.door.displayState(domDoor);
        this.window.displayState(domWindow);
        this.heatBoiler.displayState(domHeatBoiler);
        this.coolAircon.displayState(domCoolAircon);
    };
    SmartHome.prototype.install = function () {
        var _this = this;
        var domDoor = document.querySelector('.door');
        var domWindow = document.querySelector('.window');
        var domHeatBoiler = document.querySelector('.heatBoiler');
        var domCoolAircon = document.querySelector('.coolAircon');
        domDoor.addEventListener('click', function () {
            _this.door.isClosed() ? _this.door.open() : _this.door.close();
            _this.display();
        });
        domWindow.addEventListener('click', function () {
            _this.window.isClosed() ? _this.window.open() : _this.window.close();
            _this.display();
        });
        domHeatBoiler.addEventListener('click', function () {
            _this.heatBoiler.isRunning()
                ? _this.heatBoiler.off()
                : _this.heatBoiler.on();
            _this.display();
        });
        domCoolAircon.addEventListener('click', function () {
            _this.coolAircon.isRunning()
                ? _this.coolAircon.off()
                : _this.coolAircon.on();
            _this.display();
        });
        this.display();
    };
    return SmartHome;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmartHome);


/***/ }),

/***/ "./src/behavioral/mediator/Window.ts":
/*!*******************************************!*\
  !*** ./src/behavioral/mediator/Window.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./src/behavioral/mediator/Participant.ts");
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

var Window = /** @class */ (function (_super) {
    __extends(Window, _super);
    function Window(mediator) {
        var _this = _super.call(this, mediator) || this;
        _this.bClosed = true;
        return _this;
    }
    Window.prototype.open = function () {
        if (!this.bClosed) {
            return;
        }
        this.bClosed = false;
        this.mediator.participantsChanged(this);
    };
    Window.prototype.close = function () {
        if (this.bClosed) {
            return;
        }
        this.bClosed = true;
        this.mediator.participantsChanged(this);
    };
    Window.prototype.isClosed = function () {
        return this.bClosed;
    };
    Window.prototype.displayState = function (dom) {
        dom.innerHTML = this.bClosed ? 'Window is closed' : 'Window is open';
        if (this.bClosed) {
            dom.classList.remove('highlight');
        }
        else {
            dom.classList.add('highlight');
        }
    };
    return Window;
}(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Window);


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
  !*** ./src/behavioral/mediator/index.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SmartHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmartHome */ "./src/behavioral/mediator/SmartHome.ts");

var home = new _SmartHome__WEBPACK_IMPORTED_MODULE_0__["default"]();
home.install();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO1lBQ04sR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxDQXRDbUMsb0RBQVcsR0FzQzlDOzs7Ozs7OztVQ3pDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm9DO0FBRXBDLElBQU0sSUFBSSxHQUFHLElBQUksa0RBQVMsRUFBRSxDQUFDO0FBRTdCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC9tZWRpYXRvci9Db29sQWlyY29uLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC9tZWRpYXRvci9Eb29yLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC9tZWRpYXRvci9IZWF0Qm9pbGVyLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC9tZWRpYXRvci9QYXJ0aWNpcGFudC50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2JlaGF2aW9yYWwvbWVkaWF0b3IvU21hcnRIb21lLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC9tZWRpYXRvci9XaW5kb3cudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC9tZWRpYXRvci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVkaWF0b3IgZnJvbSAnLi9NZWRpYXRvcic7XG5pbXBvcnQgUGFydGljaXBhbnQgZnJvbSAnLi9QYXJ0aWNpcGFudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2xBaXJjb24gZXh0ZW5kcyBQYXJ0aWNpcGFudCB7XG4gIHByaXZhdGUgYk9mZiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IobWVkaWF0b3I6IE1lZGlhdG9yKSB7XG4gICAgc3VwZXIobWVkaWF0b3IpO1xuICB9XG5cbiAgb24oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmJPZmYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmJPZmYgPSBmYWxzZTtcbiAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50c0NoYW5nZWQodGhpcyk7XG4gIH1cblxuICBvZmYoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYk9mZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYk9mZiA9IHRydWU7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudHNDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgaXNSdW5uaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5iT2ZmO1xuICB9XG5cbiAgZGlzcGxheVN0YXRlKGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBkb20uaW5uZXJIVE1MID0gdGhpcy5iT2ZmID8gJ0Nvb2xBaXJjb24gaXMgb2ZmJyA6ICdDb29sQWlyY29uIGlzIG9uJztcblxuICAgIGlmICh0aGlzLmJPZmYpIHtcbiAgICAgIGRvbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IE1lZGlhdG9yIGZyb20gJy4vTWVkaWF0b3InO1xuaW1wb3J0IFBhcnRpY2lwYW50IGZyb20gJy4vUGFydGljaXBhbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb29yIGV4dGVuZHMgUGFydGljaXBhbnQge1xuICBwcml2YXRlIGJDbG9zZWQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKG1lZGlhdG9yOiBNZWRpYXRvcikge1xuICAgIHN1cGVyKG1lZGlhdG9yKTtcbiAgfVxuXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmJDbG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmJDbG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50c0NoYW5nZWQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5iQ2xvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5iQ2xvc2VkID0gdHJ1ZTtcbiAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50c0NoYW5nZWQodGhpcyk7XG4gIH1cblxuICBpc0Nsb3NlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5iQ2xvc2VkO1xuICB9XG5cbiAgZGlzcGxheVN0YXRlKGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBkb20uaW5uZXJIVE1MID0gdGhpcy5iQ2xvc2VkID8gJ0Rvb3IgaXMgY2xvc2VkJyA6ICdEb29yIGlzIG9wZW4nO1xuXG4gICAgaWYgKHRoaXMuYkNsb3NlZCkge1xuICAgICAgZG9tLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb20uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgTWVkaWF0b3IgZnJvbSAnLi9NZWRpYXRvcic7XG5pbXBvcnQgUGFydGljaXBhbnQgZnJvbSAnLi9QYXJ0aWNpcGFudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYXRCb2lsZXIgZXh0ZW5kcyBQYXJ0aWNpcGFudCB7XG4gIHByaXZhdGUgYk9mZiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IobWVkaWF0b3I6IE1lZGlhdG9yKSB7XG4gICAgc3VwZXIobWVkaWF0b3IpO1xuICB9XG5cbiAgb24oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmJPZmYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmJPZmYgPSBmYWxzZTtcbiAgICB0aGlzLm1lZGlhdG9yLnBhcnRpY2lwYW50c0NoYW5nZWQodGhpcyk7XG4gIH1cblxuICBvZmYoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYk9mZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYk9mZiA9IHRydWU7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudHNDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgaXNSdW5uaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5iT2ZmO1xuICB9XG5cbiAgZGlzcGxheVN0YXRlKGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBkb20uaW5uZXJIVE1MID0gdGhpcy5iT2ZmID8gJ0hlYXRCb2lsZXIgaXMgb2ZmJyA6ICdIZWF0Qm9pbGVyIGlzIG9uJztcblxuICAgIGlmICh0aGlzLmJPZmYpIHtcbiAgICAgIGRvbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IE1lZGlhdG9yIGZyb20gJy4vTWVkaWF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBQYXJ0aWNpcGFudCB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtZWRpYXRvcjogTWVkaWF0b3IpIHt9XG4gIGFic3RyYWN0IGRpc3BsYXlTdGF0ZShkb206IEhUTUxFbGVtZW50KTogdm9pZDtcbn1cbiIsImltcG9ydCBEb29yIGZyb20gJy4vRG9vcic7XG5pbXBvcnQgTWVkaWF0b3IgZnJvbSAnLi9NZWRpYXRvcic7XG5pbXBvcnQgUGFydGljaXBhbnQgZnJvbSAnLi9QYXJ0aWNpcGFudCc7XG5pbXBvcnQgV2luZG93IGZyb20gJy4vV2luZG93JztcbmltcG9ydCBIZWF0Qm9pbGVyIGZyb20gJy4vSGVhdEJvaWxlcic7XG5pbXBvcnQgQ29vbEFpcmNvbiBmcm9tICcuL0Nvb2xBaXJjb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbWFydEhvbWUgaW1wbGVtZW50cyBNZWRpYXRvciB7XG4gIGRvb3IgPSBuZXcgRG9vcih0aGlzKTtcbiAgd2luZG93ID0gbmV3IFdpbmRvdyh0aGlzKTtcbiAgaGVhdEJvaWxlciA9IG5ldyBIZWF0Qm9pbGVyKHRoaXMpO1xuICBjb29sQWlyY29uID0gbmV3IENvb2xBaXJjb24odGhpcyk7XG5cbiAgcGFydGljaXBhbnRzQ2hhbmdlZChwYXJ0aWNpcGFudDogUGFydGljaXBhbnQpOiB2b2lkIHtcbiAgICBpZiAocGFydGljaXBhbnQgPT09IHRoaXMuZG9vciAmJiAhdGhpcy5kb29yLmlzQ2xvc2VkKCkpIHtcbiAgICAgIHRoaXMuaGVhdEJvaWxlci5vZmYoKTtcbiAgICAgIHRoaXMuY29vbEFpcmNvbi5vZmYoKTtcbiAgICB9XG5cbiAgICBpZiAocGFydGljaXBhbnQgPT09IHRoaXMud2luZG93ICYmICF0aGlzLndpbmRvdy5pc0Nsb3NlZCgpKSB7XG4gICAgICB0aGlzLmhlYXRCb2lsZXIub2ZmKCk7XG4gICAgICB0aGlzLmNvb2xBaXJjb24ub2ZmKCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcnRpY2lwYW50ID09PSB0aGlzLmNvb2xBaXJjb24gJiYgdGhpcy5jb29sQWlyY29uLmlzUnVubmluZygpKSB7XG4gICAgICB0aGlzLmhlYXRCb2lsZXIub2ZmKCk7XG4gICAgICB0aGlzLndpbmRvdy5jbG9zZSgpO1xuICAgICAgdGhpcy5kb29yLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcnRpY2lwYW50ID09PSB0aGlzLmhlYXRCb2lsZXIgJiYgdGhpcy5oZWF0Qm9pbGVyLmlzUnVubmluZygpKSB7XG4gICAgICB0aGlzLmNvb2xBaXJjb24ub2ZmKCk7XG4gICAgICB0aGlzLndpbmRvdy5jbG9zZSgpO1xuICAgICAgdGhpcy5kb29yLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheSgpIHtcbiAgICBjb25zdCBkb21Eb29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvb3InKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBkb21XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZG93JykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZG9tSGVhdEJvaWxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWF0Qm9pbGVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZG9tQ29vbEFpcmNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29sQWlyY29uJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvb3IuZGlzcGxheVN0YXRlKGRvbURvb3IpO1xuICAgIHRoaXMud2luZG93LmRpc3BsYXlTdGF0ZShkb21XaW5kb3cpO1xuICAgIHRoaXMuaGVhdEJvaWxlci5kaXNwbGF5U3RhdGUoZG9tSGVhdEJvaWxlcik7XG4gICAgdGhpcy5jb29sQWlyY29uLmRpc3BsYXlTdGF0ZShkb21Db29sQWlyY29uKTtcbiAgfVxuXG4gIGluc3RhbGwoKSB7XG4gICAgY29uc3QgZG9tRG9vciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb29yJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZG9tV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmRvdycpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGRvbUhlYXRCb2lsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhdEJvaWxlcicpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGRvbUNvb2xBaXJjb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29vbEFpcmNvbicpIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgZG9tRG9vci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuZG9vci5pc0Nsb3NlZCgpID8gdGhpcy5kb29yLm9wZW4oKSA6IHRoaXMuZG9vci5jbG9zZSgpO1xuICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgfSk7XG5cbiAgICBkb21XaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLndpbmRvdy5pc0Nsb3NlZCgpID8gdGhpcy53aW5kb3cub3BlbigpIDogdGhpcy53aW5kb3cuY2xvc2UoKTtcbiAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgIH0pO1xuXG4gICAgZG9tSGVhdEJvaWxlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuaGVhdEJvaWxlci5pc1J1bm5pbmcoKVxuICAgICAgICA/IHRoaXMuaGVhdEJvaWxlci5vZmYoKVxuICAgICAgICA6IHRoaXMuaGVhdEJvaWxlci5vbigpO1xuICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgfSk7XG5cbiAgICBkb21Db29sQWlyY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5jb29sQWlyY29uLmlzUnVubmluZygpXG4gICAgICAgID8gdGhpcy5jb29sQWlyY29uLm9mZigpXG4gICAgICAgIDogdGhpcy5jb29sQWlyY29uLm9uKCk7XG4gICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlzcGxheSgpO1xuICB9XG59XG4iLCJpbXBvcnQgTWVkaWF0b3IgZnJvbSAnLi9NZWRpYXRvcic7XG5pbXBvcnQgUGFydGljaXBhbnQgZnJvbSAnLi9QYXJ0aWNpcGFudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmRvdyBleHRlbmRzIFBhcnRpY2lwYW50IHtcbiAgcHJpdmF0ZSBiQ2xvc2VkID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihtZWRpYXRvcjogTWVkaWF0b3IpIHtcbiAgICBzdXBlcihtZWRpYXRvcik7XG4gIH1cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5iQ2xvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5iQ2xvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudHNDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYkNsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYkNsb3NlZCA9IHRydWU7XG4gICAgdGhpcy5tZWRpYXRvci5wYXJ0aWNpcGFudHNDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgaXNDbG9zZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYkNsb3NlZDtcbiAgfVxuXG4gIGRpc3BsYXlTdGF0ZShkb206IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgZG9tLmlubmVySFRNTCA9IHRoaXMuYkNsb3NlZCA/ICdXaW5kb3cgaXMgY2xvc2VkJyA6ICdXaW5kb3cgaXMgb3Blbic7XG5cbiAgICBpZiAodGhpcy5iQ2xvc2VkKSB7XG4gICAgICBkb20uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNtYXJ0SG9tZSBmcm9tICcuL1NtYXJ0SG9tZSc7XG5cbmNvbnN0IGhvbWUgPSBuZXcgU21hcnRIb21lKCk7XG5cbmhvbWUuaW5zdGFsbCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9