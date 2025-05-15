/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/behavioral/state/Player.ts":
/*!****************************************!*\
  !*** ./src/behavioral/state/Player.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StandUpState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StandUpState */ "./src/behavioral/state/StandUpState.ts");

var Player = /** @class */ (function () {
    function Player(domTalk) {
        this.domTalk = domTalk;
        this.speed = 0;
        this.state = new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    }
    Player.prototype.getSpeed = function () {
        return this.speed;
    };
    Player.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Player.prototype.setState = function (state) {
        this.state = state;
    };
    Player.prototype.getState = function () {
        return this.state;
    };
    Player.prototype.talk = function (msg) {
        this.domTalk.innerHTML = msg;
    };
    return Player;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/behavioral/state/RunState.ts":
/*!******************************************!*\
  !*** ./src/behavioral/state/RunState.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StandUpState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StandUpState */ "./src/behavioral/state/StandUpState.ts");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State */ "./src/behavioral/state/State.ts");
/* harmony import */ var _WalkState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WalkState */ "./src/behavioral/state/WalkState.ts");
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



var RunState = /** @class */ (function (_super) {
    __extends(RunState, _super);
    function RunState(player) {
        return _super.call(this, player) || this;
    }
    RunState.prototype.standUp = function () {
        this.player.talk('뛰다가 갑자기 서면 무릎 연골 나가요..!');
        this.player.setSpeed(0);
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
    };
    RunState.prototype.sitDown = function () {
        this.player.talk('뛰다가 앉으면 크게 다칠 수 있어요!');
        this.player.setSpeed(0);
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
    };
    RunState.prototype.walk = function () {
        this.player.talk('속도를 줄일게요~');
        this.player.setSpeed(8);
        this.player.setState(new _WalkState__WEBPACK_IMPORTED_MODULE_2__["default"](this.player));
    };
    RunState.prototype.run = function () {
        this.player.talk('더 빨리 뛰라는 거죠?');
        this.player.setSpeed(this.player.getSpeed() + 2);
    };
    RunState.prototype.getDescription = function () {
        return '뛰는 상태';
    };
    return RunState;
}(_State__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RunState);


/***/ }),

/***/ "./src/behavioral/state/SitDownState.ts":
/*!**********************************************!*\
  !*** ./src/behavioral/state/SitDownState.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StandUpState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StandUpState */ "./src/behavioral/state/StandUpState.ts");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State */ "./src/behavioral/state/State.ts");
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


var SitDownState = /** @class */ (function (_super) {
    __extends(SitDownState, _super);
    function SitDownState(player) {
        return _super.call(this, player) || this;
    }
    SitDownState.prototype.standUp = function () {
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
        this.player.talk('일어나서 걷자!');
    };
    SitDownState.prototype.sitDown = function () {
        this.player.talk('이미 앉아있는데?');
    };
    SitDownState.prototype.walk = function () {
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
        this.player.talk('앉아서 어떻게 걸어? 일단 일어나자.');
    };
    SitDownState.prototype.run = function () {
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
        this.player.talk('앉아서 어떻게 뛰어? 일단 일어나자.');
    };
    SitDownState.prototype.getDescription = function () {
        return '앉아있는 상태';
    };
    return SitDownState;
}(_State__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SitDownState);


/***/ }),

/***/ "./src/behavioral/state/StandUpState.ts":
/*!**********************************************!*\
  !*** ./src/behavioral/state/StandUpState.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SitDownState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SitDownState */ "./src/behavioral/state/SitDownState.ts");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State */ "./src/behavioral/state/State.ts");
/* harmony import */ var _WalkState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WalkState */ "./src/behavioral/state/WalkState.ts");
/* harmony import */ var _RunState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RunState */ "./src/behavioral/state/RunState.ts");
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




var StandUpState = /** @class */ (function (_super) {
    __extends(StandUpState, _super);
    function StandUpState(player) {
        return _super.call(this, player) || this;
    }
    StandUpState.prototype.standUp = function () {
        this.player.talk('언제쯤 움직여?');
    };
    StandUpState.prototype.sitDown = function () {
        this.player.setState(new _SitDownState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
        this.player.talk('앉으니까 편하고 좋다.');
    };
    StandUpState.prototype.walk = function () {
        this.player.setSpeed(8);
        this.player.setState(new _WalkState__WEBPACK_IMPORTED_MODULE_2__["default"](this.player));
        this.player.talk('걷는 중~');
    };
    StandUpState.prototype.run = function () {
        this.player.setSpeed(10);
        this.player.setState(new _RunState__WEBPACK_IMPORTED_MODULE_3__["default"](this.player));
        this.player.talk('뛰는 중!');
    };
    StandUpState.prototype.getDescription = function () {
        return '서있는 상태';
    };
    return StandUpState;
}(_State__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StandUpState);


/***/ }),

/***/ "./src/behavioral/state/State.ts":
/*!***************************************!*\
  !*** ./src/behavioral/state/State.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var State = /** @class */ (function () {
    function State(player) {
        this.player = player;
    }
    return State;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (State);


/***/ }),

/***/ "./src/behavioral/state/WalkState.ts":
/*!*******************************************!*\
  !*** ./src/behavioral/state/WalkState.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RunState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RunState */ "./src/behavioral/state/RunState.ts");
/* harmony import */ var _SitDownState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SitDownState */ "./src/behavioral/state/SitDownState.ts");
/* harmony import */ var _StandUpState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StandUpState */ "./src/behavioral/state/StandUpState.ts");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./State */ "./src/behavioral/state/State.ts");
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




var WalkState = /** @class */ (function (_super) {
    __extends(WalkState, _super);
    function WalkState(player) {
        return _super.call(this, player) || this;
    }
    WalkState.prototype.standUp = function () {
        this.player.setSpeed(0);
        this.player.talk('멈춰..');
        this.player.setState(new _StandUpState__WEBPACK_IMPORTED_MODULE_2__["default"](this.player));
    };
    WalkState.prototype.sitDown = function () {
        this.player.setSpeed(0);
        this.player.talk('걷다가 앉으면 넘어질 수 있어요...');
        this.player.setState(new _SitDownState__WEBPACK_IMPORTED_MODULE_1__["default"](this.player));
    };
    WalkState.prototype.walk = function () {
        this.player.talk('난 걷는 게 좋아~');
    };
    WalkState.prototype.run = function () {
        this.player.setSpeed(20);
        this.player.talk('걷다가 뛰면 빨라질 수 있지!');
        this.player.setState(new _RunState__WEBPACK_IMPORTED_MODULE_0__["default"](this.player));
    };
    WalkState.prototype.getDescription = function () {
        return '걷는 상태';
    };
    return WalkState;
}(_State__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalkState);


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
/*!***************************************!*\
  !*** ./src/behavioral/state/index.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/behavioral/state/Player.ts");

/**
 * State 패턴은 상태를 클래스화하여 객체로 만들 수 있는 패턴이다.
 * 어떤 상태에서 다른 상태로 변경할 때 각 상태 변화 따른 조건 처리를 매우 효과적으로 코딩할 수 있다.
 * 새로운 상태 추가 시에도 상태 변화 로직이 복잡해지지 않고 한가지 상태만 집중해서 처리할 수 있다.
 */
var domTalk = document.querySelector('.talk');
var domStand = document.querySelector('.stand');
var domSit = document.querySelector('.sit');
var domWalk = document.querySelector('.walk');
var domRun = document.querySelector('.run');
var player = new _Player__WEBPACK_IMPORTED_MODULE_0__["default"](domTalk);
function putDescription() {
    var domDescription = document.querySelector('.description');
    domDescription.innerHTML = "".concat(player
        .getState()
        .getDescription(), " / \uC18D\uB3C4: ").concat(player.getSpeed(), "km/h");
}
putDescription();
domStand.addEventListener('click', function () {
    player.getState().standUp();
    putDescription();
});
domSit.addEventListener('click', function () {
    player.getState().sitDown();
    putDescription();
});
domWalk.addEventListener('click', function () {
    player.getState().walk();
    putDescription();
});
domRun.addEventListener('click', function () {
    player.getState().run();
    putDescription();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJLEVBQUUsQ0FBQztJQUN6QixjQUFjLEVBQUUsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDL0IsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLGNBQWMsRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL3N0YXRlL1BsYXllci50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2JlaGF2aW9yYWwvc3RhdGUvUnVuU3RhdGUudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL3N0YXRlL1NpdERvd25TdGF0ZS50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2JlaGF2aW9yYWwvc3RhdGUvU3RhbmRVcFN0YXRlLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC9zdGF0ZS9TdGF0ZS50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2JlaGF2aW9yYWwvc3RhdGUvV2Fsa1N0YXRlLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2JlaGF2aW9yYWwvc3RhdGUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0YW5kVXBTdGF0ZSBmcm9tICcuL1N0YW5kVXBTdGF0ZSc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9TdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDA7XG4gIGdldFNwZWVkKCkge1xuICAgIHJldHVybiB0aGlzLnNwZWVkO1xuICB9XG4gIHNldFNwZWVkKHNwZWVkOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gIH1cblxuICBwcml2YXRlIHN0YXRlOiBTdGF0ZTtcbiAgc2V0U3RhdGUoc3RhdGU6IFN0YXRlKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICB9XG4gIGdldFN0YXRlKCk6IFN0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tVGFsazogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnN0YXRlID0gbmV3IFN0YW5kVXBTdGF0ZSh0aGlzKTtcbiAgfVxuXG4gIHRhbGsobXNnOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRvbVRhbGsuaW5uZXJIVE1MID0gbXNnO1xuICB9XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcbmltcG9ydCBTdGFuZFVwU3RhdGUgZnJvbSAnLi9TdGFuZFVwU3RhdGUnO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vU3RhdGUnO1xuaW1wb3J0IFdhbGtTdGF0ZSBmcm9tICcuL1dhbGtTdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1blN0YXRlIGV4dGVuZHMgU3RhdGUge1xuICBzdGFuZFVwKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnRhbGsoJ+ubsOuLpOqwgCDqsJHsnpDquLAg7ISc66m0IOustOumjiDsl7Dqs6gg64KY6rCA7JqULi4hJyk7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3BlZWQoMCk7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3RhdGUobmV3IFN0YW5kVXBTdGF0ZSh0aGlzLnBsYXllcikpO1xuICB9XG4gIHNpdERvd24oKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIudGFsaygn65uw64uk6rCAIOyVieycvOuptCDtgazqsowg64uk7LmgIOyImCDsnojslrTsmpQhJyk7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3BlZWQoMCk7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3RhdGUobmV3IFN0YW5kVXBTdGF0ZSh0aGlzLnBsYXllcikpO1xuICB9XG4gIHdhbGsoKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIudGFsaygn7IaN64+E66W8IOykhOydvOqyjOyalH4nKTtcbiAgICB0aGlzLnBsYXllci5zZXRTcGVlZCg4KTtcbiAgICB0aGlzLnBsYXllci5zZXRTdGF0ZShuZXcgV2Fsa1N0YXRlKHRoaXMucGxheWVyKSk7XG4gIH1cbiAgcnVuKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnRhbGsoJ+uNlCDruajrpqwg65uw652864qUIOqxsOyjoD8nKTtcbiAgICB0aGlzLnBsYXllci5zZXRTcGVlZCh0aGlzLnBsYXllci5nZXRTcGVlZCgpICsgMik7XG4gIH1cbiAgZ2V0RGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ+ubsOuKlCDsg4Htg5wnO1xuICB9XG4gIGNvbnN0cnVjdG9yKHBsYXllcjogUGxheWVyKSB7XG4gICAgc3VwZXIocGxheWVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgU3RhbmRVcFN0YXRlIGZyb20gJy4vU3RhbmRVcFN0YXRlJztcbmltcG9ydCBTdGF0ZSBmcm9tICcuL1N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2l0RG93blN0YXRlIGV4dGVuZHMgU3RhdGUge1xuICBzdGFuZFVwKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBTdGFuZFVwU3RhdGUodGhpcy5wbGF5ZXIpKTtcbiAgICB0aGlzLnBsYXllci50YWxrKCfsnbzslrTrgpjshJwg6rG37J6QIScpO1xuICB9XG4gIHNpdERvd24oKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIudGFsaygn7J2066+4IOyVieyVhOyeiOuKlOuNsD8nKTtcbiAgfVxuICB3YWxrKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBTdGFuZFVwU3RhdGUodGhpcy5wbGF5ZXIpKTtcbiAgICB0aGlzLnBsYXllci50YWxrKCfslYnslYTshJwg7Ja065a76rKMIOqxuOyWtD8g7J2864uoIOydvOyWtOuCmOyekC4nKTtcbiAgfVxuICBydW4oKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3RhdGUobmV3IFN0YW5kVXBTdGF0ZSh0aGlzLnBsYXllcikpO1xuICAgIHRoaXMucGxheWVyLnRhbGsoJ+yVieyVhOyEnCDslrTrlrvqsowg65uw7Ja0PyDsnbzri6gg7J287Ja064KY7J6QLicpO1xuICB9XG4gIGdldERlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICfslYnslYTsnojripQg7IOB7YOcJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHBsYXllcjogUGxheWVyKSB7XG4gICAgc3VwZXIocGxheWVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgU2l0RG93blN0YXRlIGZyb20gJy4vU2l0RG93blN0YXRlJztcbmltcG9ydCBTdGF0ZSBmcm9tICcuL1N0YXRlJztcbmltcG9ydCBXYWxrU3RhdGUgZnJvbSAnLi9XYWxrU3RhdGUnO1xuaW1wb3J0IFJ1blN0YXRlIGZyb20gJy4vUnVuU3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFuZFVwU3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XG4gIHN0YW5kVXAoKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIudGFsaygn7Ja47KCc7K+kIOybgOyngeyXrD8nKTtcbiAgfVxuICBzaXREb3duKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBTaXREb3duU3RhdGUodGhpcy5wbGF5ZXIpKTtcbiAgICB0aGlzLnBsYXllci50YWxrKCfslYnsnLzri4jquYwg7Y647ZWY6rOgIOyii+uLpC4nKTtcbiAgfVxuICB3YWxrKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnNldFNwZWVkKDgpO1xuICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBXYWxrU3RhdGUodGhpcy5wbGF5ZXIpKTtcbiAgICB0aGlzLnBsYXllci50YWxrKCfqsbfripQg7KSRficpO1xuICB9XG4gIHJ1bigpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci5zZXRTcGVlZCgxMCk7XG4gICAgdGhpcy5wbGF5ZXIuc2V0U3RhdGUobmV3IFJ1blN0YXRlKHRoaXMucGxheWVyKSk7XG4gICAgdGhpcy5wbGF5ZXIudGFsaygn65uw64qUIOykkSEnKTtcbiAgfVxuICBnZXREZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiAn7ISc7J6I64qUIOyDge2DnCc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllcikge1xuICAgIHN1cGVyKHBsYXllcik7XG4gIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBTdGF0ZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBwbGF5ZXI6IFBsYXllcikge31cblxuICBhYnN0cmFjdCBzdGFuZFVwKCk6IHZvaWQ7XG4gIGFic3RyYWN0IHNpdERvd24oKTogdm9pZDtcbiAgYWJzdHJhY3Qgd2FsaygpOiB2b2lkO1xuICBhYnN0cmFjdCBydW4oKTogdm9pZDtcblxuICBhYnN0cmFjdCBnZXREZXNjcmlwdGlvbigpOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcbmltcG9ydCBSdW5TdGF0ZSBmcm9tICcuL1J1blN0YXRlJztcbmltcG9ydCBTaXREb3duU3RhdGUgZnJvbSAnLi9TaXREb3duU3RhdGUnO1xuaW1wb3J0IFN0YW5kVXBTdGF0ZSBmcm9tICcuL1N0YW5kVXBTdGF0ZSc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9TdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGtTdGF0ZSBleHRlbmRzIFN0YXRlIHtcbiAgc3RhbmRVcCgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci5zZXRTcGVlZCgwKTtcbiAgICB0aGlzLnBsYXllci50YWxrKCfrqYjstrAuLicpO1xuICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBTdGFuZFVwU3RhdGUodGhpcy5wbGF5ZXIpKTtcbiAgfVxuICBzaXREb3duKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnNldFNwZWVkKDApO1xuICAgIHRoaXMucGxheWVyLnRhbGsoJ+qxt+uLpOqwgCDslYnsnLzrqbQg64SY7Ja07KeIIOyImCDsnojslrTsmpQuLi4nKTtcbiAgICB0aGlzLnBsYXllci5zZXRTdGF0ZShuZXcgU2l0RG93blN0YXRlKHRoaXMucGxheWVyKSk7XG4gIH1cbiAgd2FsaygpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci50YWxrKCfrgpwg6rG364qUIOqyjCDsoovslYR+Jyk7XG4gIH1cbiAgcnVuKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLnNldFNwZWVkKDIwKTtcbiAgICB0aGlzLnBsYXllci50YWxrKCfqsbfri6TqsIAg65uw66m0IOu5qOudvOyniCDsiJgg7J6I7KeAIScpO1xuICAgIHRoaXMucGxheWVyLnNldFN0YXRlKG5ldyBSdW5TdGF0ZSh0aGlzLnBsYXllcikpO1xuICB9XG4gIGdldERlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICfqsbfripQg7IOB7YOcJztcbiAgfVxuICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllcikge1xuICAgIHN1cGVyKHBsYXllcik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5cbi8qKlxuICogU3RhdGUg7Yyo7YS07J2AIOyDge2DnOulvCDtgbTrnpjsiqTtmZTtlZjsl6wg6rCd7LK066GcIOunjOuTpCDsiJgg7J6I64qUIO2MqO2EtOydtOuLpC5cbiAqIOyWtOuWpCDsg4Htg5zsl5DshJwg64uk66W4IOyDge2DnOuhnCDrs4Dqsr3tlaAg65WMIOqwgSDsg4Htg5wg67OA7ZmUIOuUsOuluCDsobDqsbQg7LKY66as66W8IOunpOyasCDtmqjqs7zsoIHsnLzroZwg7L2U65Sp7ZWgIOyImCDsnojri6QuXG4gKiDsg4jroZzsmrQg7IOB7YOcIOy2lOqwgCDsi5zsl5Drj4Qg7IOB7YOcIOuzgO2ZlCDroZzsp4HsnbQg67O17J6h7ZW07KeA7KeAIOyViuqzoCDtlZzqsIDsp4Ag7IOB7YOc66eMIOynkeykke2VtOyEnCDsspjrpqztlaAg7IiYIOyeiOuLpC5cbiAqL1xuXG5jb25zdCBkb21UYWxrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhbGsnKSBhcyBIVE1MRGl2RWxlbWVudDtcbmNvbnN0IGRvbVN0YW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YW5kJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCBkb21TaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0JykgYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCBkb21XYWxrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndhbGsnKSBhcyBIVE1MRGl2RWxlbWVudDtcbmNvbnN0IGRvbVJ1biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ydW4nKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihkb21UYWxrKTtcblxuZnVuY3Rpb24gcHV0RGVzY3JpcHRpb24oKSB7XG4gIGNvbnN0IGRvbURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLmRlc2NyaXB0aW9uJ1xuICApIGFzIEhUTUxEaXZFbGVtZW50O1xuICBkb21EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBgJHtwbGF5ZXJcbiAgICAuZ2V0U3RhdGUoKVxuICAgIC5nZXREZXNjcmlwdGlvbigpfSAvIOyGjeuPhDogJHtwbGF5ZXIuZ2V0U3BlZWQoKX1rbS9oYDtcbn1cblxucHV0RGVzY3JpcHRpb24oKTtcblxuZG9tU3RhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBsYXllci5nZXRTdGF0ZSgpLnN0YW5kVXAoKTtcbiAgcHV0RGVzY3JpcHRpb24oKTtcbn0pO1xuXG5kb21TaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBsYXllci5nZXRTdGF0ZSgpLnNpdERvd24oKTtcbiAgcHV0RGVzY3JpcHRpb24oKTtcbn0pO1xuXG5kb21XYWxrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwbGF5ZXIuZ2V0U3RhdGUoKS53YWxrKCk7XG4gIHB1dERlc2NyaXB0aW9uKCk7XG59KTtcblxuZG9tUnVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwbGF5ZXIuZ2V0U3RhdGUoKS5ydW4oKTtcbiAgcHV0RGVzY3JpcHRpb24oKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9