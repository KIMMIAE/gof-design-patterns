/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/behavioral/chain-of-responsibility/DomainHandler.ts":
/*!*****************************************************************!*\
  !*** ./src/behavioral/chain-of-responsibility/DomainHandler.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handler */ "./src/behavioral/chain-of-responsibility/Handler.ts");
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

var DomainHandler = /** @class */ (function (_super) {
    __extends(DomainHandler, _super);
    function DomainHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DomainHandler.prototype.process = function (url) {
        var startIndex = url.indexOf('://');
        var lastIndex = url.lastIndexOf(':');
        if (startIndex === -1) {
            if (lastIndex === -1) {
                this.displayResult('DOMAIN', url);
            }
            else {
                this.displayResult('DOMAIN', url.substring(0, lastIndex));
            }
        }
        else if (startIndex !== lastIndex) {
            this.displayResult('DOMAIN', url.substring(startIndex + 3, lastIndex));
        }
        else if (startIndex === lastIndex) {
            this.displayResult('DOMAIN', url.substring(startIndex + 3));
        }
        else {
            this.displayResult('DOMAIN', 'NONE');
        }
    };
    return DomainHandler;
}(_Handler__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomainHandler);


/***/ }),

/***/ "./src/behavioral/chain-of-responsibility/Handler.ts":
/*!***********************************************************!*\
  !*** ./src/behavioral/chain-of-responsibility/Handler.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Handler = /** @class */ (function () {
    function Handler() {
        this.nextHandler = null;
    }
    Handler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    Handler.prototype.run = function (url) {
        this.process(url);
        if (this.nextHandler) {
            this.nextHandler.run(url);
        }
    };
    Handler.prototype.displayResult = function (title, content) {
        var domLayout = document.createElement('div');
        var domTitle = document.createElement('div');
        var domContent = document.createElement('div');
        domLayout.append(domTitle, domContent);
        domLayout.classList.add('layout');
        domTitle.classList.add('title');
        domContent.classList.add('content');
        domTitle.innerHTML = title;
        domContent.innerHTML = content;
        var domTarget = document.querySelector('.result');
        domTarget.append(domLayout);
    };
    return Handler;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Handler);


/***/ }),

/***/ "./src/behavioral/chain-of-responsibility/PortHandler.ts":
/*!***************************************************************!*\
  !*** ./src/behavioral/chain-of-responsibility/PortHandler.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handler */ "./src/behavioral/chain-of-responsibility/Handler.ts");
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

var PortHandler = /** @class */ (function (_super) {
    __extends(PortHandler, _super);
    function PortHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PortHandler.prototype.process = function (url) {
        var index = url.lastIndexOf(':');
        if (index !== -1) {
            var strPort = url.substring(index + 1);
            if (!isNaN(Number(strPort))) {
                this.displayResult('PORT', strPort);
                return;
            }
        }
        this.displayResult('PORT', 'NONE');
    };
    return PortHandler;
}(_Handler__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortHandler);


/***/ }),

/***/ "./src/behavioral/chain-of-responsibility/ProtocolHandler.ts":
/*!*******************************************************************!*\
  !*** ./src/behavioral/chain-of-responsibility/ProtocolHandler.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handler */ "./src/behavioral/chain-of-responsibility/Handler.ts");
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

var ProtocolHandler = /** @class */ (function (_super) {
    __extends(ProtocolHandler, _super);
    function ProtocolHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProtocolHandler.prototype.process = function (url) {
        var index = url.indexOf('://');
        if (index !== -1) {
            this.displayResult('PROTOCOL', url.substring(0, index));
        }
        else {
            this.displayResult('PROTOCOL', 'NONE');
        }
    };
    return ProtocolHandler;
}(_Handler__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtocolHandler);


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
/*!*********************************************************!*\
  !*** ./src/behavioral/chain-of-responsibility/index.ts ***!
  \*********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DomainHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomainHandler */ "./src/behavioral/chain-of-responsibility/DomainHandler.ts");
/* harmony import */ var _PortHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PortHandler */ "./src/behavioral/chain-of-responsibility/PortHandler.ts");
/* harmony import */ var _ProtocolHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProtocolHandler */ "./src/behavioral/chain-of-responsibility/ProtocolHandler.ts");



/**
 * Chain of Responsibility 패턴은 기능 단위로 클래스를 분리하고 이 클래스의 객체를 연결해서 각 기능을 지정된 순서로 실핼할 수 있는 패턴이다.
 * 기능을 클래스 별로 분리하여 구현하도록 유도하므로 객체지향설계 원칙 중 단일 책임 원칙 및 개방폐쇄원칙 등을 자연스럽게 따르게 된다.
 */
var protocolHandler = new _ProtocolHandler__WEBPACK_IMPORTED_MODULE_2__["default"]();
var domainHandler = new _DomainHandler__WEBPACK_IMPORTED_MODULE_0__["default"]();
var portHandler = new _PortHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();
protocolHandler.setNext(domainHandler).setNext(portHandler);
var domInput = document.querySelector('#url');
var domBtn = document.querySelector('#btn');
domBtn.addEventListener('click', function () {
    var url = domInput.value;
    protocolHandler.run(url);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6QyxDQUFDO0lBQ0gsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxDQVQ0QyxnREFBTyxHQVNuRDs7Ozs7Ozs7VUNYRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDSjtBQUNRO0FBRWhEOzs7R0FHRztBQUVILElBQU0sZUFBZSxHQUFHLElBQUksd0RBQWUsRUFBRSxDQUFDO0FBQzlDLElBQU0sYUFBYSxHQUFHLElBQUksc0RBQWEsRUFBRSxDQUFDO0FBQzFDLElBQU0sV0FBVyxHQUFHLElBQUksb0RBQVcsRUFBRSxDQUFDO0FBRXRDLGVBQWUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRTVELElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFxQixDQUFDO0FBQ3BFLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFzQixDQUFDO0FBRW5FLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDL0IsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUMzQixlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL2NoYWluLW9mLXJlc3BvbnNpYmlsaXR5L0RvbWFpbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL2NoYWluLW9mLXJlc3BvbnNpYmlsaXR5L0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL2NoYWluLW9mLXJlc3BvbnNpYmlsaXR5L1BvcnRIYW5kbGVyLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC9jaGFpbi1vZi1yZXNwb25zaWJpbGl0eS9Qcm90b2NvbEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC9jaGFpbi1vZi1yZXNwb25zaWJpbGl0eS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGFuZGxlciBmcm9tICcuL0hhbmRsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb21haW5IYW5kbGVyIGV4dGVuZHMgSGFuZGxlciB7XG4gIHByb3RlY3RlZCBwcm9jZXNzKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHVybC5pbmRleE9mKCc6Ly8nKTtcbiAgICBjb25zdCBsYXN0SW5kZXggPSB1cmwubGFzdEluZGV4T2YoJzonKTtcblxuICAgIGlmIChzdGFydEluZGV4ID09PSAtMSkge1xuICAgICAgaWYgKGxhc3RJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5UmVzdWx0KCdET01BSU4nLCB1cmwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5UmVzdWx0KCdET01BSU4nLCB1cmwuc3Vic3RyaW5nKDAsIGxhc3RJbmRleCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3RhcnRJbmRleCAhPT0gbGFzdEluZGV4KSB7XG4gICAgICB0aGlzLmRpc3BsYXlSZXN1bHQoJ0RPTUFJTicsIHVybC5zdWJzdHJpbmcoc3RhcnRJbmRleCArIDMsIGxhc3RJbmRleCkpO1xuICAgIH0gZWxzZSBpZiAoc3RhcnRJbmRleCA9PT0gbGFzdEluZGV4KSB7XG4gICAgICB0aGlzLmRpc3BsYXlSZXN1bHQoJ0RPTUFJTicsIHVybC5zdWJzdHJpbmcoc3RhcnRJbmRleCArIDMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5UmVzdWx0KCdET01BSU4nLCAnTk9ORScpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgSGFuZGxlciB7XG4gIHByb3RlY3RlZCBuZXh0SGFuZGxlcjogSGFuZGxlciA9IG51bGw7XG5cbiAgc2V0TmV4dChoYW5kbGVyOiBIYW5kbGVyKTogSGFuZGxlciB7XG4gICAgdGhpcy5uZXh0SGFuZGxlciA9IGhhbmRsZXI7XG4gICAgcmV0dXJuIGhhbmRsZXI7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgcHJvY2Vzcyh1cmw6IHN0cmluZyk6IHZvaWQ7XG5cbiAgcnVuKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wcm9jZXNzKHVybCk7XG4gICAgaWYgKHRoaXMubmV4dEhhbmRsZXIpIHtcbiAgICAgIHRoaXMubmV4dEhhbmRsZXIucnVuKHVybCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGRpc3BsYXlSZXN1bHQodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZG9tTGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZG9tVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkb21Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBkb21MYXlvdXQuYXBwZW5kKGRvbVRpdGxlLCBkb21Db250ZW50KTtcblxuICAgIGRvbUxheW91dC5jbGFzc0xpc3QuYWRkKCdsYXlvdXQnKTtcbiAgICBkb21UaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIGRvbUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuXG4gICAgZG9tVGl0bGUuaW5uZXJIVE1MID0gdGl0bGU7XG4gICAgZG9tQ29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuXG4gICAgY29uc3QgZG9tVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdCcpO1xuICAgIGRvbVRhcmdldC5hcHBlbmQoZG9tTGF5b3V0KTtcbiAgfVxufVxuIiwiaW1wb3J0IEhhbmRsZXIgZnJvbSAnLi9IYW5kbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9ydEhhbmRsZXIgZXh0ZW5kcyBIYW5kbGVyIHtcbiAgcHJvdGVjdGVkIHByb2Nlc3ModXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHVybC5sYXN0SW5kZXhPZignOicpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHN0clBvcnQgPSB1cmwuc3Vic3RyaW5nKGluZGV4ICsgMSk7XG4gICAgICBpZiAoIWlzTmFOKE51bWJlcihzdHJQb3J0KSkpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5UmVzdWx0KCdQT1JUJywgc3RyUG9ydCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kaXNwbGF5UmVzdWx0KCdQT1JUJywgJ05PTkUnKTtcbiAgfVxufVxuIiwiaW1wb3J0IEhhbmRsZXIgZnJvbSAnLi9IYW5kbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvdG9jb2xIYW5kbGVyIGV4dGVuZHMgSGFuZGxlciB7XG4gIHByb3RlY3RlZCBwcm9jZXNzKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB1cmwuaW5kZXhPZignOi8vJyk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5kaXNwbGF5UmVzdWx0KCdQUk9UT0NPTCcsIHVybC5zdWJzdHJpbmcoMCwgaW5kZXgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5UmVzdWx0KCdQUk9UT0NPTCcsICdOT05FJyk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBEb21haW5IYW5kbGVyIGZyb20gJy4vRG9tYWluSGFuZGxlcic7XG5pbXBvcnQgUG9ydEhhbmRsZXIgZnJvbSAnLi9Qb3J0SGFuZGxlcic7XG5pbXBvcnQgUHJvdG9jb2xIYW5kbGVyIGZyb20gJy4vUHJvdG9jb2xIYW5kbGVyJztcblxuLyoqXG4gKiBDaGFpbiBvZiBSZXNwb25zaWJpbGl0eSDtjKjthLTsnYAg6riw64qlIOuLqOychOuhnCDtgbTrnpjsiqTrpbwg67aE66as7ZWY6rOgIOydtCDtgbTrnpjsiqTsnZgg6rCd7LK066W8IOyXsOqysO2VtOyEnCDqsIEg6riw64ql7J2EIOyngOygleuQnCDsiJzshJzroZwg7Iuk7ZW87ZWgIOyImCDsnojripQg7Yyo7YS07J2064ukLlxuICog6riw64ql7J2EIO2BtOuemOyKpCDrs4TroZwg67aE66as7ZWY7JesIOq1rO2YhO2VmOuPhOuhnSDsnKDrj4TtlZjrr4DroZwg6rCd7LK07KeA7Zal7ISk6rOEIOybkOy5mSDspJEg64uo7J28IOyxheyehCDsm5DsuZkg67CPIOqwnOuwqe2PkOyHhOybkOy5mSDrk7HsnYQg7J6Q7Jew7Iqk65+96rKMIOuUsOultOqyjCDrkJzri6QuXG4gKi9cblxuY29uc3QgcHJvdG9jb2xIYW5kbGVyID0gbmV3IFByb3RvY29sSGFuZGxlcigpO1xuY29uc3QgZG9tYWluSGFuZGxlciA9IG5ldyBEb21haW5IYW5kbGVyKCk7XG5jb25zdCBwb3J0SGFuZGxlciA9IG5ldyBQb3J0SGFuZGxlcigpO1xuXG5wcm90b2NvbEhhbmRsZXIuc2V0TmV4dChkb21haW5IYW5kbGVyKS5zZXROZXh0KHBvcnRIYW5kbGVyKTtcblxuY29uc3QgZG9tSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXJsJykgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IGRvbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCB1cmwgPSBkb21JbnB1dC52YWx1ZTtcbiAgcHJvdG9jb2xIYW5kbGVyLnJ1bih1cmwpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=