/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/structural/facade/Cache.ts":
/*!****************************************!*\
  !*** ./src/structural/facade/Cache.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Cache = /** @class */ (function () {
    function Cache() {
        this.cache = new Map();
    }
    Cache.prototype.put = function (row) {
        this.cache.set(row.name, row);
    };
    Cache.prototype.get = function (name) {
        return this.cache.get(name);
    };
    return Cache;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cache);


/***/ }),

/***/ "./src/structural/facade/DBMS.ts":
/*!***************************************!*\
  !*** ./src/structural/facade/DBMS.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Row */ "./src/structural/facade/Row.ts");

var DBMS = /** @class */ (function () {
    function DBMS() {
        this.db = new Map();
        this.db.set('1', new _Row__WEBPACK_IMPORTED_MODULE_0__["default"]('John', '1990-01-01', 'john@example.com'));
        this.db.set('2', new _Row__WEBPACK_IMPORTED_MODULE_0__["default"]('Jane', '1990-01-02', 'jane@example.com'));
        this.db.set('3', new _Row__WEBPACK_IMPORTED_MODULE_0__["default"]('Jim', '1990-01-03', 'jim@example.com'));
    }
    DBMS.prototype.query = function (name, callback) {
        var _this = this;
        setTimeout(function () {
            callback(_this.db.get(name));
        }, 1500);
    };
    return DBMS;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DBMS);


/***/ }),

/***/ "./src/structural/facade/Facade.ts":
/*!*****************************************!*\
  !*** ./src/structural/facade/Facade.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cache */ "./src/structural/facade/Cache.ts");
/* harmony import */ var _DBMS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DBMS */ "./src/structural/facade/DBMS.ts");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message */ "./src/structural/facade/Message.ts");



var Facade = /** @class */ (function () {
    function Facade() {
        this.dbms = new _DBMS__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.cache = new _Cache__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    Facade.prototype.queryName = function (name, onBeforeQuery, onAfterQuery, domOutput) {
        var _this = this;
        var row = this.cache.get(name);
        if (!row) {
            onBeforeQuery();
            this.dbms.query(name, function (row) {
                onAfterQuery();
                if (row) {
                    _this.cache.put(row);
                }
                var message = new _Message__WEBPACK_IMPORTED_MODULE_2__["default"](row);
                message.print(domOutput);
            });
        }
        else {
            var message = new _Message__WEBPACK_IMPORTED_MODULE_2__["default"](row);
            message.print(domOutput);
        }
    };
    return Facade;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Facade);


/***/ }),

/***/ "./src/structural/facade/Message.ts":
/*!******************************************!*\
  !*** ./src/structural/facade/Message.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Message = /** @class */ (function () {
    function Message(row) {
        this.row = row;
    }
    Message.prototype.print = function (dom) {
        var domLayout = document.createElement('div');
        domLayout.classList.add('layout');
        if (this.row) {
            domLayout.innerHTML = "\n        <div class=\"name\">".concat(this.row.name, "</div>\n        <div class=\"birthday\">").concat(this.row.birthday, "</div>\n        <div class=\"email\">").concat(this.row.email, "</div>\n      ");
        }
        else {
            domLayout.innerHTML = 'No data';
        }
        dom.appendChild(domLayout);
    };
    return Message;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);


/***/ }),

/***/ "./src/structural/facade/Row.ts":
/*!**************************************!*\
  !*** ./src/structural/facade/Row.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Row = /** @class */ (function () {
    function Row(_name, _birthday, _email) {
        this._name = _name;
        this._birthday = _birthday;
        this._email = _email;
    }
    Object.defineProperty(Row.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Row.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Row.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    return Row;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);


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
/*!****************************************!*\
  !*** ./src/structural/facade/index.ts ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Facade */ "./src/structural/facade/Facade.ts");

/**
 * Facade 패턴은 어떤 기능 개발을 위해 필요한 많은 클래스와 관련 API 호출 등 복잡한 내용을 단순화 시켜주는 패턴이다.
 * 즉, Facade에 해당하는 클래스 하나로 단순화 시키고 기존의 클래스들은 감출 수 있다.(비공개 처리가 가능)
 * Facade 패턴을 적용하여 만들어진 라이브러리를 사용하는 개발자의 입장에서 학습에 대한 부담이 많이 줄게 된다.
 */
var domInput = document.querySelector('input');
var domButton = document.querySelector('button');
var domResult = document.querySelector('.result');
var facade = new _Facade__WEBPACK_IMPORTED_MODULE_0__["default"]();
domButton.addEventListener('click', function () {
    var name = domInput.value;
    facade.queryName(name, function () {
        domInput.value = '(조회 중...)';
        domButton.disabled = true;
    }, function () {
        domInput.value = name;
        domButton.disabled = false;
    }, domResult);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044QjtBQUU5Qjs7OztHQUlHO0FBRUgsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqRCxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25ELElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFcEQsSUFBTSxNQUFNLEdBQUcsSUFBSSwrQ0FBTSxFQUFFLENBQUM7QUFFNUIsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNsQyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBRTVCLE1BQU0sQ0FBQyxTQUFTLENBQ2QsSUFBSSxFQUNKO1FBQ0UsUUFBUSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7UUFDN0IsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQyxFQUNEO1FBQ0UsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdEIsU0FBUyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQyxFQUNELFNBQVMsQ0FDVixDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3N0cnVjdHVyYWwvZmFjYWRlL0NhY2hlLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvc3RydWN0dXJhbC9mYWNhZGUvREJNUy50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3N0cnVjdHVyYWwvZmFjYWRlL0ZhY2FkZS50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL3N0cnVjdHVyYWwvZmFjYWRlL01lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9zdHJ1Y3R1cmFsL2ZhY2FkZS9Sb3cudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvc3RydWN0dXJhbC9mYWNhZGUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdyBmcm9tICcuL1Jvdyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhY2hlIHtcbiAgcHJpdmF0ZSBjYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBSb3c+KCk7XG5cbiAgcHV0KHJvdzogUm93KTogdm9pZCB7XG4gICAgdGhpcy5jYWNoZS5zZXQocm93Lm5hbWUsIHJvdyk7XG4gIH1cblxuICBnZXQobmFtZTogc3RyaW5nKTogUm93IHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZS5nZXQobmFtZSk7XG4gIH1cbn1cbiIsImltcG9ydCBSb3cgZnJvbSAnLi9Sb3cnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEQk1TIHtcbiAgcHJpdmF0ZSBkYiA9IG5ldyBNYXA8c3RyaW5nLCBSb3c+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYi5zZXQoJzEnLCBuZXcgUm93KCdKb2huJywgJzE5OTAtMDEtMDEnLCAnam9obkBleGFtcGxlLmNvbScpKTtcbiAgICB0aGlzLmRiLnNldCgnMicsIG5ldyBSb3coJ0phbmUnLCAnMTk5MC0wMS0wMicsICdqYW5lQGV4YW1wbGUuY29tJykpO1xuICAgIHRoaXMuZGIuc2V0KCczJywgbmV3IFJvdygnSmltJywgJzE5OTAtMDEtMDMnLCAnamltQGV4YW1wbGUuY29tJykpO1xuICB9XG5cbiAgcXVlcnkobmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHJvdzogUm93KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYWxsYmFjayh0aGlzLmRiLmdldChuYW1lKSk7XG4gICAgfSwgMTUwMCk7XG4gIH1cbn1cbiIsImltcG9ydCBDYWNoZSBmcm9tICcuL0NhY2hlJztcbmltcG9ydCBEQk1TIGZyb20gJy4vREJNUyc7XG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuL01lc3NhZ2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjYWRlIHtcbiAgcHJpdmF0ZSBkYm1zID0gbmV3IERCTVMoKTtcbiAgcHJpdmF0ZSBjYWNoZSA9IG5ldyBDYWNoZSgpO1xuXG4gIHF1ZXJ5TmFtZShcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgb25CZWZvcmVRdWVyeTogKCkgPT4gdm9pZCxcbiAgICBvbkFmdGVyUXVlcnk6ICgpID0+IHZvaWQsXG4gICAgZG9tT3V0cHV0OiBFbGVtZW50XG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHJvdyA9IHRoaXMuY2FjaGUuZ2V0KG5hbWUpO1xuXG4gICAgaWYgKCFyb3cpIHtcbiAgICAgIG9uQmVmb3JlUXVlcnkoKTtcbiAgICAgIHRoaXMuZGJtcy5xdWVyeShuYW1lLCAocm93KSA9PiB7XG4gICAgICAgIG9uQWZ0ZXJRdWVyeSgpO1xuICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgdGhpcy5jYWNoZS5wdXQocm93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShyb3cpO1xuICAgICAgICBtZXNzYWdlLnByaW50KGRvbU91dHB1dCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKHJvdyk7XG4gICAgICBtZXNzYWdlLnByaW50KGRvbU91dHB1dCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUm93IGZyb20gJy4vUm93JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm93OiBSb3cpIHt9XG5cbiAgcHJpbnQoZG9tOiBFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgZG9tTGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBkb21MYXlvdXQuY2xhc3NMaXN0LmFkZCgnbGF5b3V0Jyk7XG5cbiAgICBpZiAodGhpcy5yb3cpIHtcbiAgICAgIGRvbUxheW91dC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+JHt0aGlzLnJvdy5uYW1lfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmlydGhkYXlcIj4ke3RoaXMucm93LmJpcnRoZGF5fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1haWxcIj4ke3RoaXMucm93LmVtYWlsfTwvZGl2PlxuICAgICAgYDtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tTGF5b3V0LmlubmVySFRNTCA9ICdObyBkYXRhJztcbiAgICB9XG5cbiAgICBkb20uYXBwZW5kQ2hpbGQoZG9tTGF5b3V0KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm93IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2JpcnRoZGF5OiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfZW1haWw6IHN0cmluZ1xuICApIHt9XG5cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIGdldCBiaXJ0aGRheSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9iaXJ0aGRheTtcbiAgfVxuXG4gIGdldCBlbWFpbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRmFjYWRlIGZyb20gJy4vRmFjYWRlJztcblxuLyoqXG4gKiBGYWNhZGUg7Yyo7YS07J2AIOyWtOuWpCDquLDriqUg6rCc67Cc7J2EIOychO2VtCDtlYTsmpTtlZwg66eO7J2AIO2BtOuemOyKpOyZgCDqtIDroKggQVBJIO2YuOy2nCDrk7Eg67O17J6h7ZWcIOuCtOyaqeydhCDri6jsiJztmZQg7Iuc7Lyc7KO864qUIO2MqO2EtOydtOuLpC5cbiAqIOymiSwgRmFjYWRl7JeQIO2VtOuLue2VmOuKlCDtgbTrnpjsiqQg7ZWY64KY66GcIOuLqOyInO2ZlCDsi5ztgqTqs6Ag6riw7KG07J2YIO2BtOuemOyKpOuTpOydgCDqsJDstpwg7IiYIOyeiOuLpC4o67mE6rO16rCcIOyymOumrOqwgCDqsIDriqUpXG4gKiBGYWNhZGUg7Yyo7YS07J2EIOyggeyaqe2VmOyXrCDrp4zrk6TslrTsp4Qg65287J2067iM65+s66as66W8IOyCrOyaqe2VmOuKlCDqsJzrsJzsnpDsnZgg7J6F7J6l7JeQ7IScIO2VmeyKteyXkCDrjIDtlZwg67aA64u07J20IOunjuydtCDspITqsowg65Cc64ukLlxuICovXG5cbmNvbnN0IGRvbUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbmNvbnN0IGRvbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuY29uc3QgZG9tUmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdCcpO1xuXG5jb25zdCBmYWNhZGUgPSBuZXcgRmFjYWRlKCk7XG5cbmRvbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgbmFtZSA9IGRvbUlucHV0LnZhbHVlO1xuXG4gIGZhY2FkZS5xdWVyeU5hbWUoXG4gICAgbmFtZSxcbiAgICAoKSA9PiB7XG4gICAgICBkb21JbnB1dC52YWx1ZSA9ICco7KGw7ZqMIOykkS4uLiknO1xuICAgICAgZG9tQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9LFxuICAgICgpID0+IHtcbiAgICAgIGRvbUlucHV0LnZhbHVlID0gbmFtZTtcbiAgICAgIGRvbUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0sXG4gICAgZG9tUmVzdWx0XG4gICk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==