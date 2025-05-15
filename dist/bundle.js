/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/behavioral/interpreter/ActionCommandExpression.ts":
/*!***************************************************************!*\
  !*** ./src/behavioral/interpreter/ActionCommandExpression.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CommandExpressoin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommandExpressoin */ "./src/behavioral/interpreter/CommandExpressoin.ts");
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

var ActionCommandExpression = /** @class */ (function (_super) {
    __extends(ActionCommandExpression, _super);
    function ActionCommandExpression(keyword) {
        return _super.call(this, keyword) || this;
    }
    ActionCommandExpression.prototype.parse = function (context) {
        if (!ActionCommandExpression.checkValidKeyword(this.keyword)) {
            return false;
        }
        if (context.readNextKeyword() === null) {
            return false;
        }
        return true;
    };
    ActionCommandExpression.prototype.run = function () {
        console.log("CMD: ".concat(this.keyword));
        return true;
    };
    ActionCommandExpression.prototype.getDescription = function () {
        return this.keyword;
    };
    ActionCommandExpression.checkValidKeyword = function (keyword) {
        var bOK = keyword === 'FRONT' ||
            keyword === 'BACK' ||
            keyword === 'LEFT' ||
            keyword === 'RIGHT';
        return bOK;
    };
    return ActionCommandExpression;
}(_CommandExpressoin__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionCommandExpression);


/***/ }),

/***/ "./src/behavioral/interpreter/BeginExpression.ts":
/*!*******************************************************!*\
  !*** ./src/behavioral/interpreter/BeginExpression.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CommandListExpression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommandListExpression */ "./src/behavioral/interpreter/CommandListExpression.ts");

var BeginExpression = /** @class */ (function () {
    function BeginExpression() {
    }
    BeginExpression.prototype.parse = function (context) {
        if (BeginExpression.checkValidKeyword(context.getCurrentKeyword())) {
            context.readNextKeyword();
            this.expression = new _CommandListExpression__WEBPACK_IMPORTED_MODULE_0__["default"]();
            return this.expression.parse(context);
        }
        else {
            return false;
        }
    };
    BeginExpression.prototype.run = function () {
        return this.expression.run();
    };
    BeginExpression.prototype.getDescription = function () {
        return "BEGIN ".concat(this.expression.getDescription());
    };
    BeginExpression.checkValidKeyword = function (keyword) {
        return keyword === 'BEGIN';
    };
    return BeginExpression;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BeginExpression);


/***/ }),

/***/ "./src/behavioral/interpreter/CommandExpressoin.ts":
/*!*********************************************************!*\
  !*** ./src/behavioral/interpreter/CommandExpressoin.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CommandExpression = /** @class */ (function () {
    function CommandExpression(keyword) {
        this.keyword = keyword;
    }
    return CommandExpression;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommandExpression);


/***/ }),

/***/ "./src/behavioral/interpreter/CommandListExpression.ts":
/*!*************************************************************!*\
  !*** ./src/behavioral/interpreter/CommandListExpression.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActionCommandExpression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionCommandExpression */ "./src/behavioral/interpreter/ActionCommandExpression.ts");
/* harmony import */ var _LoopCommandExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoopCommandExpression */ "./src/behavioral/interpreter/LoopCommandExpression.ts");


var CommandListExpression = /** @class */ (function () {
    function CommandListExpression() {
        this.commands = new Array();
    }
    CommandListExpression.prototype.parse = function (context) {
        while (true) {
            var currentKeyword = context.getCurrentKeyword();
            if (currentKeyword === null) {
                return false;
            }
            else if (currentKeyword === 'END') {
                context.readNextKeyword();
                break;
            }
            else {
                var command = null;
                if (_LoopCommandExpression__WEBPACK_IMPORTED_MODULE_1__["default"].checkValidKeyword(currentKeyword)) {
                    command = new _LoopCommandExpression__WEBPACK_IMPORTED_MODULE_1__["default"](currentKeyword);
                }
                else if (_ActionCommandExpression__WEBPACK_IMPORTED_MODULE_0__["default"].checkValidKeyword(currentKeyword)) {
                    command = new _ActionCommandExpression__WEBPACK_IMPORTED_MODULE_0__["default"](currentKeyword);
                }
                if (command !== null) {
                    if (command.parse(context)) {
                        this.commands.push(command);
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        }
        return true;
    };
    CommandListExpression.prototype.run = function () {
        var cntCommands = this.commands.length;
        for (var i = 0; i < cntCommands; i++) {
            var bOK = this.commands[i].run();
            if (!bOK) {
                return false;
            }
        }
        return true;
    };
    CommandListExpression.prototype.getDescription = function () {
        return ('( ' +
            this.commands.map(function (command) { return command.getDescription(); }).join(', ') +
            ' )');
    };
    return CommandListExpression;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommandListExpression);


/***/ }),

/***/ "./src/behavioral/interpreter/Context.ts":
/*!***********************************************!*\
  !*** ./src/behavioral/interpreter/Context.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Context = /** @class */ (function () {
    function Context(script) {
        this.keywords = [];
        this.currentIndex = 0;
        this.keywords = script.split(' ');
    }
    Context.prototype.readNextKeyword = function () {
        this.currentIndex++;
        return this.getCurrentKeyword();
    };
    Context.prototype.getCurrentKeyword = function () {
        if (this.keywords.length > this.currentIndex) {
            return this.keywords[this.currentIndex];
        }
        else {
            return null;
        }
    };
    return Context;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);


/***/ }),

/***/ "./src/behavioral/interpreter/LoopCommandExpression.ts":
/*!*************************************************************!*\
  !*** ./src/behavioral/interpreter/LoopCommandExpression.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CommandExpressoin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommandExpressoin */ "./src/behavioral/interpreter/CommandExpressoin.ts");
/* harmony import */ var _CommandListExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommandListExpression */ "./src/behavioral/interpreter/CommandListExpression.ts");
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


var LoopCommandExpression = /** @class */ (function (_super) {
    __extends(LoopCommandExpression, _super);
    function LoopCommandExpression(keyword) {
        return _super.call(this, keyword) || this;
    }
    LoopCommandExpression.prototype.parse = function (context) {
        if (!LoopCommandExpression.checkValidKeyword(this.keyword)) {
            return false;
        }
        var countKeyword = context.readNextKeyword();
        if (countKeyword === null) {
            return false;
        }
        var count = parseInt(countKeyword);
        if (isNaN(count)) {
            return false;
        }
        this.loopCount = count;
        this.expression = new _CommandListExpression__WEBPACK_IMPORTED_MODULE_1__["default"]();
        if (context.readNextKeyword() === null) {
            return false;
        }
        return this.expression.parse(context);
    };
    LoopCommandExpression.prototype.run = function () {
        for (var i = 0; i < this.loopCount; i++) {
            if (!this.expression.run()) {
                return false;
            }
        }
        return true;
    };
    LoopCommandExpression.prototype.getDescription = function () {
        return "LOOP(".concat(this.loopCount, ") ").concat(this.expression.getDescription());
    };
    LoopCommandExpression.checkValidKeyword = function (keyword) {
        return keyword === 'LOOP';
    };
    return LoopCommandExpression;
}(_CommandExpressoin__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoopCommandExpression);


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
/*!*********************************************!*\
  !*** ./src/behavioral/interpreter/index.ts ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BeginExpression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BeginExpression */ "./src/behavioral/interpreter/BeginExpression.ts");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./src/behavioral/interpreter/Context.ts");


/**
 * Interpreter 패턴은 "규칙을 가지는 문자열"(스크립트)를 해석하는 패턴이다.
 */
/*
const script = 'BEGIN FRONT LOOP 2 BACK RIGHT END BACK END';

const context = new Context(script);

while (true) {
  const keyword = context.getCurrentKeyword();
  if (keyword === null) {
    break;
  }

  console.log(keyword);

  context.readNextKeyword();
}
*/
var script = 'BEGIN FRONT LOOP 3 LOOP 2 RIGHT FRONT END LOOP 3 LEFT END BACK RIGHT END BACK END';
console.log(script);
var context = new _Context__WEBPACK_IMPORTED_MODULE_1__["default"](script);
var beginExpression = new _BeginExpression__WEBPACK_IMPORTED_MODULE_0__["default"]();
if (beginExpression.parse(context)) {
    console.log(beginExpression.getDescription());
    beginExpression.run();
}
else {
    console.log('ERROR');
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDBEQUFpQixHQWtEbkU7Ozs7Ozs7O1VDdEREO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmdEO0FBQ2hCO0FBRWhDOztHQUVHO0FBRUg7Ozs7Ozs7Ozs7Ozs7OztFQWVFO0FBRUYsSUFBTSxNQUFNLEdBQ1YsbUZBQW1GLENBQUM7QUFDdEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVwQixJQUFNLE9BQU8sR0FBRyxJQUFJLGdEQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsSUFBTSxlQUFlLEdBQUcsSUFBSSx3REFBZSxFQUFFLENBQUM7QUFFOUMsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUM5QyxlQUFlLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDeEIsQ0FBQztLQUFNLENBQUM7SUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2JlaGF2aW9yYWwvaW50ZXJwcmV0ZXIvQWN0aW9uQ29tbWFuZEV4cHJlc3Npb24udHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL2ludGVycHJldGVyL0JlZ2luRXhwcmVzc2lvbi50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2JlaGF2aW9yYWwvaW50ZXJwcmV0ZXIvQ29tbWFuZEV4cHJlc3NvaW4udHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL2ludGVycHJldGVyL0NvbW1hbmRMaXN0RXhwcmVzc2lvbi50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2JlaGF2aW9yYWwvaW50ZXJwcmV0ZXIvQ29udGV4dC50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2JlaGF2aW9yYWwvaW50ZXJwcmV0ZXIvTG9vcENvbW1hbmRFeHByZXNzaW9uLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2JlaGF2aW9yYWwvaW50ZXJwcmV0ZXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbW1hbmRFeHByZXNzaW9uIGZyb20gJy4vQ29tbWFuZEV4cHJlc3NvaW4nO1xuaW1wb3J0IENvbnRleHQgZnJvbSAnLi9Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQ29tbWFuZEV4cHJlc3Npb24gZXh0ZW5kcyBDb21tYW5kRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKGtleXdvcmQ6IHN0cmluZykge1xuICAgIHN1cGVyKGtleXdvcmQpO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dDogQ29udGV4dCk6IGJvb2xlYW4ge1xuICAgIGlmICghQWN0aW9uQ29tbWFuZEV4cHJlc3Npb24uY2hlY2tWYWxpZEtleXdvcmQodGhpcy5rZXl3b3JkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChjb250ZXh0LnJlYWROZXh0S2V5d29yZCgpID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBydW4oKTogYm9vbGVhbiB7XG4gICAgY29uc29sZS5sb2coYENNRDogJHt0aGlzLmtleXdvcmR9YCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmtleXdvcmQ7XG4gIH1cblxuICBzdGF0aWMgY2hlY2tWYWxpZEtleXdvcmQoa2V5d29yZDogc3RyaW5nKSB7XG4gICAgY29uc3QgYk9LID1cbiAgICAgIGtleXdvcmQgPT09ICdGUk9OVCcgfHxcbiAgICAgIGtleXdvcmQgPT09ICdCQUNLJyB8fFxuICAgICAga2V5d29yZCA9PT0gJ0xFRlQnIHx8XG4gICAgICBrZXl3b3JkID09PSAnUklHSFQnO1xuXG4gICAgcmV0dXJuIGJPSztcbiAgfVxufVxuIiwiaW1wb3J0IENvbW1hbmRMaXN0RXhwcmVzc2lvbiBmcm9tICcuL0NvbW1hbmRMaXN0RXhwcmVzc2lvbic7XG5pbXBvcnQgQ29udGV4dCBmcm9tICcuL0NvbnRleHQnO1xuaW1wb3J0IEV4cHJlc3Npb24gZnJvbSAnLi9FeHByZXNzaW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVnaW5FeHByZXNzaW9uIGltcGxlbWVudHMgRXhwcmVzc2lvbiB7XG4gIHByaXZhdGUgZXhwcmVzc2lvbjogQ29tbWFuZExpc3RFeHByZXNzaW9uO1xuXG4gIHBhcnNlKGNvbnRleHQ6IENvbnRleHQpOiBib29sZWFuIHtcbiAgICBpZiAoQmVnaW5FeHByZXNzaW9uLmNoZWNrVmFsaWRLZXl3b3JkKGNvbnRleHQuZ2V0Q3VycmVudEtleXdvcmQoKSkpIHtcbiAgICAgIGNvbnRleHQucmVhZE5leHRLZXl3b3JkKCk7XG4gICAgICB0aGlzLmV4cHJlc3Npb24gPSBuZXcgQ29tbWFuZExpc3RFeHByZXNzaW9uKCk7XG4gICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uLnBhcnNlKGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcnVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb24ucnVuKCk7XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgQkVHSU4gJHt0aGlzLmV4cHJlc3Npb24uZ2V0RGVzY3JpcHRpb24oKX1gO1xuICB9XG5cbiAgc3RhdGljIGNoZWNrVmFsaWRLZXl3b3JkKGtleXdvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBrZXl3b3JkID09PSAnQkVHSU4nO1xuICB9XG59XG4iLCJpbXBvcnQgQ29udGV4dCBmcm9tICcuL0NvbnRleHQnO1xuaW1wb3J0IEV4cHJlc3Npb24gZnJvbSAnLi9FeHByZXNzaW9uJztcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29tbWFuZEV4cHJlc3Npb24gaW1wbGVtZW50cyBFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGtleXdvcmQ6IHN0cmluZykge31cblxuICBhYnN0cmFjdCBwYXJzZShjb250ZXh0OiBDb250ZXh0KTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgcnVuKCk6IGJvb2xlYW47XG4gIGFic3RyYWN0IGdldERlc2NyaXB0aW9uKCk6IHN0cmluZztcbn1cbiIsImltcG9ydCBBY3Rpb25Db21tYW5kRXhwcmVzc2lvbiBmcm9tICcuL0FjdGlvbkNvbW1hbmRFeHByZXNzaW9uJztcbmltcG9ydCBDb21tYW5kRXhwcmVzc2lvbiBmcm9tICcuL0NvbW1hbmRFeHByZXNzb2luJztcbmltcG9ydCBDb250ZXh0IGZyb20gJy4vQ29udGV4dCc7XG5pbXBvcnQgRXhwcmVzc2lvbiBmcm9tICcuL0V4cHJlc3Npb24nO1xuaW1wb3J0IExvb3BDb21tYW5kRXhwcmVzc2lvbiBmcm9tICcuL0xvb3BDb21tYW5kRXhwcmVzc2lvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1hbmRMaXN0RXhwcmVzc2lvbiBpbXBsZW1lbnRzIEV4cHJlc3Npb24ge1xuICBwcml2YXRlIGNvbW1hbmRzID0gbmV3IEFycmF5PENvbW1hbmRFeHByZXNzaW9uPigpO1xuXG4gIHBhcnNlKGNvbnRleHQ6IENvbnRleHQpOiBib29sZWFuIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgY3VycmVudEtleXdvcmQgPSBjb250ZXh0LmdldEN1cnJlbnRLZXl3b3JkKCk7XG5cbiAgICAgIGlmIChjdXJyZW50S2V5d29yZCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRLZXl3b3JkID09PSAnRU5EJykge1xuICAgICAgICBjb250ZXh0LnJlYWROZXh0S2V5d29yZCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBjb21tYW5kOiBDb21tYW5kRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgICAgICAgaWYgKExvb3BDb21tYW5kRXhwcmVzc2lvbi5jaGVja1ZhbGlkS2V5d29yZChjdXJyZW50S2V5d29yZCkpIHtcbiAgICAgICAgICBjb21tYW5kID0gbmV3IExvb3BDb21tYW5kRXhwcmVzc2lvbihjdXJyZW50S2V5d29yZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoQWN0aW9uQ29tbWFuZEV4cHJlc3Npb24uY2hlY2tWYWxpZEtleXdvcmQoY3VycmVudEtleXdvcmQpKSB7XG4gICAgICAgICAgY29tbWFuZCA9IG5ldyBBY3Rpb25Db21tYW5kRXhwcmVzc2lvbihjdXJyZW50S2V5d29yZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tbWFuZCAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChjb21tYW5kLnBhcnNlKGNvbnRleHQpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzLnB1c2goY29tbWFuZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcnVuKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNudENvbW1hbmRzID0gdGhpcy5jb21tYW5kcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbnRDb21tYW5kczsgaSsrKSB7XG4gICAgICBjb25zdCBiT0sgPSB0aGlzLmNvbW1hbmRzW2ldLnJ1bigpO1xuICAgICAgaWYgKCFiT0spIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgICcoICcgK1xuICAgICAgdGhpcy5jb21tYW5kcy5tYXAoKGNvbW1hbmQpID0+IGNvbW1hbmQuZ2V0RGVzY3JpcHRpb24oKSkuam9pbignLCAnKSArXG4gICAgICAnICknXG4gICAgKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG4gIHByaXZhdGUga2V5d29yZHM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgY3VycmVudEluZGV4OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHNjcmlwdDogc3RyaW5nKSB7XG4gICAgdGhpcy5rZXl3b3JkcyA9IHNjcmlwdC5zcGxpdCgnICcpO1xuICB9XG5cbiAgcmVhZE5leHRLZXl3b3JkKCkge1xuICAgIHRoaXMuY3VycmVudEluZGV4Kys7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudEtleXdvcmQoKTtcbiAgfVxuXG4gIGdldEN1cnJlbnRLZXl3b3JkKCkge1xuICAgIGlmICh0aGlzLmtleXdvcmRzLmxlbmd0aCA+IHRoaXMuY3VycmVudEluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5rZXl3b3Jkc1t0aGlzLmN1cnJlbnRJbmRleF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IENvbW1hbmRFeHByZXNzaW9uIGZyb20gJy4vQ29tbWFuZEV4cHJlc3NvaW4nO1xuaW1wb3J0IENvbW1hbmRMaXN0RXhwcmVzc2lvbiBmcm9tICcuL0NvbW1hbmRMaXN0RXhwcmVzc2lvbic7XG5pbXBvcnQgQ29udGV4dCBmcm9tICcuL0NvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29wQ29tbWFuZEV4cHJlc3Npb24gZXh0ZW5kcyBDb21tYW5kRXhwcmVzc2lvbiB7XG4gIHByaXZhdGUgbG9vcENvdW50OiBudW1iZXI7XG4gIHByaXZhdGUgZXhwcmVzc2lvbjogQ29tbWFuZExpc3RFeHByZXNzaW9uO1xuXG4gIGNvbnN0cnVjdG9yKGtleXdvcmQ6IHN0cmluZykge1xuICAgIHN1cGVyKGtleXdvcmQpO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dDogQ29udGV4dCk6IGJvb2xlYW4ge1xuICAgIGlmICghTG9vcENvbW1hbmRFeHByZXNzaW9uLmNoZWNrVmFsaWRLZXl3b3JkKHRoaXMua2V5d29yZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb3VudEtleXdvcmQgPSBjb250ZXh0LnJlYWROZXh0S2V5d29yZCgpO1xuICAgIGlmIChjb3VudEtleXdvcmQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb3VudCA9IHBhcnNlSW50KGNvdW50S2V5d29yZCk7XG4gICAgaWYgKGlzTmFOKGNvdW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMubG9vcENvdW50ID0gY291bnQ7XG5cbiAgICB0aGlzLmV4cHJlc3Npb24gPSBuZXcgQ29tbWFuZExpc3RFeHByZXNzaW9uKCk7XG4gICAgaWYgKGNvbnRleHQucmVhZE5leHRLZXl3b3JkKCkgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uLnBhcnNlKGNvbnRleHQpO1xuICB9XG5cbiAgcnVuKCk6IGJvb2xlYW4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sb29wQ291bnQ7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLmV4cHJlc3Npb24ucnVuKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYExPT1AoJHt0aGlzLmxvb3BDb3VudH0pICR7dGhpcy5leHByZXNzaW9uLmdldERlc2NyaXB0aW9uKCl9YDtcbiAgfVxuXG4gIHN0YXRpYyBjaGVja1ZhbGlkS2V5d29yZChrZXl3b3JkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4ga2V5d29yZCA9PT0gJ0xPT1AnO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBCZWdpbkV4cHJlc3Npb24gZnJvbSAnLi9CZWdpbkV4cHJlc3Npb24nO1xuaW1wb3J0IENvbnRleHQgZnJvbSAnLi9Db250ZXh0JztcblxuLyoqXG4gKiBJbnRlcnByZXRlciDtjKjthLTsnYAgXCLqt5zsuZnsnYQg6rCA7KeA64qUIOusuOyekOyXtFwiKOyKpO2BrOumve2KuCnrpbwg7ZW07ISd7ZWY64qUIO2MqO2EtOydtOuLpC5cbiAqL1xuXG4vKlxuY29uc3Qgc2NyaXB0ID0gJ0JFR0lOIEZST05UIExPT1AgMiBCQUNLIFJJR0hUIEVORCBCQUNLIEVORCc7XG5cbmNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dChzY3JpcHQpO1xuXG53aGlsZSAodHJ1ZSkge1xuICBjb25zdCBrZXl3b3JkID0gY29udGV4dC5nZXRDdXJyZW50S2V5d29yZCgpO1xuICBpZiAoa2V5d29yZCA9PT0gbnVsbCkge1xuICAgIGJyZWFrO1xuICB9XG5cbiAgY29uc29sZS5sb2coa2V5d29yZCk7XG5cbiAgY29udGV4dC5yZWFkTmV4dEtleXdvcmQoKTtcbn1cbiovXG5cbmNvbnN0IHNjcmlwdCA9XG4gICdCRUdJTiBGUk9OVCBMT09QIDMgTE9PUCAyIFJJR0hUIEZST05UIEVORCBMT09QIDMgTEVGVCBFTkQgQkFDSyBSSUdIVCBFTkQgQkFDSyBFTkQnO1xuY29uc29sZS5sb2coc2NyaXB0KTtcblxuY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0KHNjcmlwdCk7XG5jb25zdCBiZWdpbkV4cHJlc3Npb24gPSBuZXcgQmVnaW5FeHByZXNzaW9uKCk7XG5cbmlmIChiZWdpbkV4cHJlc3Npb24ucGFyc2UoY29udGV4dCkpIHtcbiAgY29uc29sZS5sb2coYmVnaW5FeHByZXNzaW9uLmdldERlc2NyaXB0aW9uKCkpO1xuICBiZWdpbkV4cHJlc3Npb24ucnVuKCk7XG59IGVsc2Uge1xuICBjb25zb2xlLmxvZygnRVJST1InKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==