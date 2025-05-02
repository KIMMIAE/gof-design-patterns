/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/behavioral/observer/DiceGame.ts":
/*!*********************************************!*\
  !*** ./src/behavioral/observer/DiceGame.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DiceGame = /** @class */ (function () {
    function DiceGame() {
        this.players = new Array();
    }
    DiceGame.prototype.addPlayer = function (player) {
        this.players.push(player);
    };
    return DiceGame;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiceGame);


/***/ }),

/***/ "./src/behavioral/observer/EvenBettingPlayer.ts":
/*!******************************************************!*\
  !*** ./src/behavioral/observer/EvenBettingPlayer.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/behavioral/observer/Player.ts");
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

var EvenBettingPlayer = /** @class */ (function (_super) {
    __extends(EvenBettingPlayer, _super);
    function EvenBettingPlayer(name) {
        return _super.call(this, name) || this;
    }
    EvenBettingPlayer.prototype.update = function (diceNumber) {
        this._winning = diceNumber % 2 === 0;
    };
    return EvenBettingPlayer;
}(_Player__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EvenBettingPlayer);


/***/ }),

/***/ "./src/behavioral/observer/FairDiceGame.ts":
/*!*************************************************!*\
  !*** ./src/behavioral/observer/FairDiceGame.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DiceGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiceGame */ "./src/behavioral/observer/DiceGame.ts");
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

var FairDiceGame = /** @class */ (function (_super) {
    __extends(FairDiceGame, _super);
    function FairDiceGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FairDiceGame.prototype.play = function () {
        var n = Math.floor(Math.random() * 6) + 1;
        this.players.forEach(function (player) {
            player.update(n);
        });
        return n;
    };
    return FairDiceGame;
}(_DiceGame__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FairDiceGame);


/***/ }),

/***/ "./src/behavioral/observer/NBettingPlayer.ts":
/*!***************************************************!*\
  !*** ./src/behavioral/observer/NBettingPlayer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/behavioral/observer/Player.ts");
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

var NBettingPlayer = /** @class */ (function (_super) {
    __extends(NBettingPlayer, _super);
    function NBettingPlayer(name, ns) {
        var _this = _super.call(this, name) || this;
        _this.ns = ns;
        return _this;
    }
    NBettingPlayer.prototype.update = function (diceNumber) {
        this._winning = this.ns.includes(diceNumber);
    };
    return NBettingPlayer;
}(_Player__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NBettingPlayer);


/***/ }),

/***/ "./src/behavioral/observer/OddBettingPlayer.ts":
/*!*****************************************************!*\
  !*** ./src/behavioral/observer/OddBettingPlayer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/behavioral/observer/Player.ts");
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

var OddBettingPlayer = /** @class */ (function (_super) {
    __extends(OddBettingPlayer, _super);
    function OddBettingPlayer(name) {
        return _super.call(this, name) || this;
    }
    OddBettingPlayer.prototype.update = function (diceNumber) {
        this._winning = diceNumber % 2 === 1;
    };
    return OddBettingPlayer;
}(_Player__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OddBettingPlayer);


/***/ }),

/***/ "./src/behavioral/observer/Player.ts":
/*!*******************************************!*\
  !*** ./src/behavioral/observer/Player.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Player = /** @class */ (function () {
    function Player(_name) {
        this._name = _name;
        this._winning = false;
    }
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "winning", {
        get: function () {
            return this._winning;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


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
  !*** ./src/behavioral/observer/index.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EvenBettingPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EvenBettingPlayer */ "./src/behavioral/observer/EvenBettingPlayer.ts");
/* harmony import */ var _FairDiceGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FairDiceGame */ "./src/behavioral/observer/FairDiceGame.ts");
/* harmony import */ var _NBettingPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NBettingPlayer */ "./src/behavioral/observer/NBettingPlayer.ts");
/* harmony import */ var _OddBettingPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OddBettingPlayer */ "./src/behavioral/observer/OddBettingPlayer.ts");




/**
 * Observer 패턴은 어떤 상태의 변화에 대한 처리를 위해 사용된다.
 * 상태 변화가 발생하면 상태 변화에 관심을 가지고 있는 객체들(Observer)에게 상태 변화를 알리며 필요하다면 변경된 상태값도 전달한다.
 */
var diceGame = new _FairDiceGame__WEBPACK_IMPORTED_MODULE_1__["default"]();
var players = [
    new _OddBettingPlayer__WEBPACK_IMPORTED_MODULE_3__["default"]('홀수 플레이어'),
    new _EvenBettingPlayer__WEBPACK_IMPORTED_MODULE_0__["default"]('짝수 플레이어'),
    new _NBettingPlayer__WEBPACK_IMPORTED_MODULE_2__["default"]('직감 플레이어', [2, 3, 5]),
];
players.forEach(function (player) { return diceGame.addPlayer(player); });
function updateBoard() {
    var domPlayers = document.querySelector('.players');
    domPlayers.innerHTML = '';
    players.forEach(function (player) {
        var domPlayer = document.createElement('div');
        domPlayer.innerHTML = player.name;
        if (player.winning) {
            domPlayer.classList.add('win');
        }
        domPlayers.append(domPlayer);
    });
}
updateBoard();
document.querySelector('button').addEventListener('click', function () {
    var diceNumber = diceGame.play();
    var domeDice = document.querySelector('.dice');
    domeDice.innerHTML = diceNumber.toString();
    updateBoard();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ3pELElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVuQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBZ0IsQ0FBQztJQUNoRSxRQUFRLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUUzQyxXQUFXLEVBQUUsQ0FBQztBQUNoQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC9vYnNlcnZlci9EaWNlR2FtZS50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2JlaGF2aW9yYWwvb2JzZXJ2ZXIvRXZlbkJldHRpbmdQbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL29ic2VydmVyL0ZhaXJEaWNlR2FtZS50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2JlaGF2aW9yYWwvb2JzZXJ2ZXIvTkJldHRpbmdQbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL29ic2VydmVyL09kZEJldHRpbmdQbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL29ic2VydmVyL1BsYXllci50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL29ic2VydmVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBEaWNlR2FtZSB7XG4gIHByb3RlY3RlZCBwbGF5ZXJzID0gbmV3IEFycmF5PFBsYXllcj4oKTtcblxuICBhZGRQbGF5ZXIocGxheWVyOiBQbGF5ZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXIpO1xuICB9XG5cbiAgYWJzdHJhY3QgcGxheSgpOiBudW1iZXI7XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbkJldHRpbmdQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgfVxuXG4gIHVwZGF0ZShkaWNlTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl93aW5uaW5nID0gZGljZU51bWJlciAlIDIgPT09IDA7XG4gIH1cbn1cbiIsImltcG9ydCBEaWNlR2FtZSBmcm9tICcuL0RpY2VHYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFpckRpY2VHYW1lIGV4dGVuZHMgRGljZUdhbWUge1xuICBwbGF5KCk6IG51bWJlciB7XG4gICAgY29uc3QgbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMTtcbiAgICB0aGlzLnBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICBwbGF5ZXIudXBkYXRlKG4pO1xuICAgIH0pO1xuICAgIHJldHVybiBuO1xuICB9XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTkJldHRpbmdQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHByaXZhdGUgbnM6IEFycmF5PG51bWJlcj4pIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgfVxuXG4gIHVwZGF0ZShkaWNlTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl93aW5uaW5nID0gdGhpcy5ucy5pbmNsdWRlcyhkaWNlTnVtYmVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9kZEJldHRpbmdQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICB1cGRhdGUoZGljZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fd2lubmluZyA9IGRpY2VOdW1iZXIgJSAyID09PSAxO1xuICB9XG5cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobmFtZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFBsYXllciB7XG4gIHByb3RlY3RlZCBfd2lubmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25hbWU6IHN0cmluZykge31cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIGdldCB3aW5uaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl93aW5uaW5nO1xuICB9XG5cbiAgYWJzdHJhY3QgdXBkYXRlKGRpY2VOdW1iZXI6IG51bWJlcik6IHZvaWQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBFdmVuQmV0dGluZ1BsYXllciBmcm9tICcuL0V2ZW5CZXR0aW5nUGxheWVyJztcbmltcG9ydCBGYWlyRGljZUdhbWUgZnJvbSAnLi9GYWlyRGljZUdhbWUnO1xuaW1wb3J0IE5CZXR0aW5nUGxheWVyIGZyb20gJy4vTkJldHRpbmdQbGF5ZXInO1xuaW1wb3J0IE9kZEJldHRpbmdQbGF5ZXIgZnJvbSAnLi9PZGRCZXR0aW5nUGxheWVyJztcblxuLyoqXG4gKiBPYnNlcnZlciDtjKjthLTsnYAg7Ja065akIOyDge2DnOydmCDrs4DtmZTsl5Ag64yA7ZWcIOyymOumrOulvCDsnITtlbQg7IKs7Jqp65Cc64ukLlxuICog7IOB7YOcIOuzgO2ZlOqwgCDrsJzsg53tlZjrqbQg7IOB7YOcIOuzgO2ZlOyXkCDqtIDsi6zsnYQg6rCA7KeA6rOgIOyeiOuKlCDqsJ3ssrTrk6QoT2JzZXJ2ZXIp7JeQ6rKMIOyDge2DnCDrs4DtmZTrpbwg7JWM66as66mwIO2VhOyalO2VmOuLpOuptCDrs4Dqsr3rkJwg7IOB7YOc6rCS64+EIOyghOuLrO2VnOuLpC5cbiAqL1xuXG5jb25zdCBkaWNlR2FtZSA9IG5ldyBGYWlyRGljZUdhbWUoKTtcblxuY29uc3QgcGxheWVycyA9IFtcbiAgbmV3IE9kZEJldHRpbmdQbGF5ZXIoJ+2ZgOyImCDtlIzroIjsnbTslrQnKSxcbiAgbmV3IEV2ZW5CZXR0aW5nUGxheWVyKCfsp53siJgg7ZSM66CI7J207Ja0JyksXG4gIG5ldyBOQmV0dGluZ1BsYXllcign7KeB6rCQIO2UjOugiOydtOyWtCcsIFsyLCAzLCA1XSksXG5dO1xuXG5wbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4gZGljZUdhbWUuYWRkUGxheWVyKHBsYXllcikpO1xuXG5mdW5jdGlvbiB1cGRhdGVCb2FyZCgpIHtcbiAgY29uc3QgZG9tUGxheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJzJyk7XG4gIGRvbVBsYXllcnMuaW5uZXJIVE1MID0gJyc7XG5cbiAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBkb21QbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb21QbGF5ZXIuaW5uZXJIVE1MID0gcGxheWVyLm5hbWU7XG5cbiAgICBpZiAocGxheWVyLndpbm5pbmcpIHtcbiAgICAgIGRvbVBsYXllci5jbGFzc0xpc3QuYWRkKCd3aW4nKTtcbiAgICB9XG5cbiAgICBkb21QbGF5ZXJzLmFwcGVuZChkb21QbGF5ZXIpO1xuICB9KTtcbn1cblxudXBkYXRlQm9hcmQoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGRpY2VOdW1iZXIgPSBkaWNlR2FtZS5wbGF5KCk7XG5cbiAgY29uc3QgZG9tZURpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGljZScpIGFzIEhUTUxFbGVtZW50O1xuICBkb21lRGljZS5pbm5lckhUTUwgPSBkaWNlTnVtYmVyLnRvU3RyaW5nKCk7XG5cbiAgdXBkYXRlQm9hcmQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9