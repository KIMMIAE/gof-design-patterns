/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/behavioral/command/BoxCommand.ts":
/*!**********************************************!*\
  !*** ./src/behavioral/command/BoxCommand.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./src/behavioral/command/Draw.ts");
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

var BoxCommand = /** @class */ (function (_super) {
    __extends(BoxCommand, _super);
    function BoxCommand(canvas, x, y, width, height) {
        var _this = _super.call(this, canvas) || this;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    BoxCommand.prototype.run = function () {
        var context = this.canvas.getContext('2d');
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.strokeColor;
        context.fill();
        context.stroke();
    };
    return BoxCommand;
}(_Draw__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxCommand);


/***/ }),

/***/ "./src/behavioral/command/CircleCommand.ts":
/*!*************************************************!*\
  !*** ./src/behavioral/command/CircleCommand.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./src/behavioral/command/Draw.ts");
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

var CircleCommand = /** @class */ (function (_super) {
    __extends(CircleCommand, _super);
    function CircleCommand(canvas, x, y, radius) {
        var _this = _super.call(this, canvas) || this;
        _this.x = x;
        _this.y = y;
        _this.radius = radius;
        return _this;
    }
    CircleCommand.prototype.run = function () {
        var context = this.canvas.getContext('2d');
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.strokeColor;
        context.fill();
        context.stroke();
    };
    return CircleCommand;
}(_Draw__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircleCommand);


/***/ }),

/***/ "./src/behavioral/command/ClearCommand.ts":
/*!************************************************!*\
  !*** ./src/behavioral/command/ClearCommand.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./src/behavioral/command/Draw.ts");
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

var ClearCommand = /** @class */ (function (_super) {
    __extends(ClearCommand, _super);
    function ClearCommand(canvas) {
        return _super.call(this, canvas) || this;
    }
    ClearCommand.prototype.run = function () {
        var context = this.canvas.getContext('2d');
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return ClearCommand;
}(_Draw__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClearCommand);


/***/ }),

/***/ "./src/behavioral/command/Draw.ts":
/*!****************************************!*\
  !*** ./src/behavioral/command/Draw.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Draw = /** @class */ (function () {
    function Draw(canvas, fillColor, strokeColor) {
        if (fillColor === void 0) { fillColor = '#ffffff'; }
        if (strokeColor === void 0) { strokeColor = '#000000'; }
        this.canvas = canvas;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
    }
    Draw.prototype.setFillColor = function (color) {
        this.fillColor = color;
        return this;
    };
    Draw.prototype.setStrokeColor = function (color) {
        this.strokeColor = color;
        return this;
    };
    return Draw;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Draw);


/***/ }),

/***/ "./src/behavioral/command/PlayCommand.ts":
/*!***********************************************!*\
  !*** ./src/behavioral/command/PlayCommand.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./src/behavioral/command/Draw.ts");
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

var PlayCommand = /** @class */ (function (_super) {
    __extends(PlayCommand, _super);
    function PlayCommand(canvas) {
        var _this = _super.call(this, canvas) || this;
        _this.commands = new Array();
        _this.playIndex = 0;
        return _this;
    }
    PlayCommand.prototype.addCommand = function (command) {
        this.commands.push(command);
    };
    PlayCommand.prototype.run = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.playIndex < _this.commands.length) {
                var command = _this.commands[_this.playIndex];
                command.run();
                _this.playIndex++;
                _this.run();
            }
            else {
                _this.playIndex = 0;
            }
        }, 1000);
    };
    return PlayCommand;
}(_Draw__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayCommand);


/***/ }),

/***/ "./src/behavioral/command/TextCommand.ts":
/*!***********************************************!*\
  !*** ./src/behavioral/command/TextCommand.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./src/behavioral/command/Draw.ts");
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

var TextCommand = /** @class */ (function (_super) {
    __extends(TextCommand, _super);
    function TextCommand(canvas, x, y, size, text) {
        var _this = _super.call(this, canvas) || this;
        _this.x = x;
        _this.y = y;
        _this.size = size;
        _this.text = text;
        return _this;
    }
    TextCommand.prototype.run = function () {
        var context = this.canvas.getContext('2d');
        context.font = "".concat(this.size, "px Arial");
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.strokeColor;
        context.fillText(this.text, this.x, this.y);
        context.strokeText(this.text, this.x, this.y);
    };
    return TextCommand;
}(_Draw__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextCommand);


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
  !*** ./src/behavioral/command/index.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoxCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxCommand */ "./src/behavioral/command/BoxCommand.ts");
/* harmony import */ var _CircleCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CircleCommand */ "./src/behavioral/command/CircleCommand.ts");
/* harmony import */ var _ClearCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClearCommand */ "./src/behavioral/command/ClearCommand.ts");
/* harmony import */ var _PlayCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayCommand */ "./src/behavioral/command/PlayCommand.ts");
/* harmony import */ var _TextCommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextCommand */ "./src/behavioral/command/TextCommand.ts");





/**
 * Command 패턴은 하나의 기능을 클래스의 객체로 정의한 것이며 이를 커맨드 객체라고 한다.
 * 커맨드 객체는 저장소에 저장해서 계속 유지할 수 있고 함수의 인자 등으로 전달할 수 있어 다양하게 사용될 수 있다.
 * 여러 개의 커맨드를 한 번에 실행하는 배치 기능, 실행에 대한 취소와 재실행에 대한 Undo/Redo 기능 개발에 Command 패턴을 적용할 수 있다.
 */
var domCanvas = document.querySelector('canvas');
var domDrawBtn = document.getElementById('draw');
var domPlayBtn = document.getElementById('play');
var cmdClear = new _ClearCommand__WEBPACK_IMPORTED_MODULE_2__["default"](domCanvas);
var cmdCircle1 = new _CircleCommand__WEBPACK_IMPORTED_MODULE_1__["default"](domCanvas, 50, 150, 40);
cmdCircle1.setFillColor('#ee4040').setStrokeColor('#ee4040');
var cmdText = new _TextCommand__WEBPACK_IMPORTED_MODULE_4__["default"](domCanvas, 200, 200, 40, 'Design Patterns');
cmdText.setStrokeColor('#458de5');
var cmdCircle2 = new _CircleCommand__WEBPACK_IMPORTED_MODULE_1__["default"](domCanvas, 355, 240, 30);
cmdCircle2.setFillColor('#ff884d').setStrokeColor('#ff884d');
var cmdBox = new _BoxCommand__WEBPACK_IMPORTED_MODULE_0__["default"](domCanvas, 40, 165, 320, 65);
cmdBox.setFillColor('#4dc4ff').setStrokeColor('#4dc4ff');
domDrawBtn.addEventListener('click', function () {
    cmdClear.run();
    cmdCircle1.run();
    cmdBox.run();
    cmdCircle2.run();
    cmdText.run();
});
var playCommand = new _PlayCommand__WEBPACK_IMPORTED_MODULE_3__["default"](domCanvas);
playCommand.addCommand(cmdClear);
playCommand.addCommand(cmdCircle1);
playCommand.addCommand(cmdBox);
playCommand.addCommand(cmdCircle2);
playCommand.addCommand(cmdText);
domPlayBtn.addEventListener('click', function () {
    playCommand.run();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO0FBQzlELFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTdELElBQU0sTUFBTSxHQUFHLElBQUksbURBQVUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDM0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFekQsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNuQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDZixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDakIsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNoQixDQUFDLENBQUMsQ0FBQztBQUVILElBQU0sV0FBVyxHQUFHLElBQUksb0RBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMvQyxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvQixXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25DLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFaEMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNuQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDcEIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2JlaGF2aW9yYWwvY29tbWFuZC9Cb3hDb21tYW5kLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC9jb21tYW5kL0NpcmNsZUNvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL2NvbW1hbmQvQ2xlYXJDb21tYW5kLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC9jb21tYW5kL0RyYXcudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL2NvbW1hbmQvUGxheUNvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL2NvbW1hbmQvVGV4dENvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC9jb21tYW5kL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21tYW5kIGZyb20gJy4vQ29tbWFuZCc7XG5pbXBvcnQgRHJhdyBmcm9tICcuL0RyYXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3hDb21tYW5kIGV4dGVuZHMgRHJhdyBpbXBsZW1lbnRzIENvbW1hbmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgIHByaXZhdGUgeDogbnVtYmVyLFxuICAgIHByaXZhdGUgeTogbnVtYmVyLFxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlcixcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyXG4gICkge1xuICAgIHN1cGVyKGNhbnZhcyk7XG4gIH1cblxuICBydW4oKTogdm9pZCB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3I7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlQ29sb3I7XG5cbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgQ29tbWFuZCBmcm9tICcuL0NvbW1hbmQnO1xuaW1wb3J0IERyYXcgZnJvbSAnLi9EcmF3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlQ29tbWFuZCBleHRlbmRzIERyYXcgaW1wbGVtZW50cyBDb21tYW5kIHtcbiAgY29uc3RydWN0b3IoXG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICBwcml2YXRlIHg6IG51bWJlcixcbiAgICBwcml2YXRlIHk6IG51bWJlcixcbiAgICBwcml2YXRlIHJhZGl1czogbnVtYmVyXG4gICkge1xuICAgIHN1cGVyKGNhbnZhcyk7XG4gIH1cblxuICBydW4oKTogdm9pZCB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3I7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlQ29sb3I7XG5cbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgQ29tbWFuZCBmcm9tICcuL0NvbW1hbmQnO1xuaW1wb3J0IERyYXcgZnJvbSAnLi9EcmF3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xlYXJDb21tYW5kIGV4dGVuZHMgRHJhdyBpbXBsZW1lbnRzIENvbW1hbmQge1xuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgc3VwZXIoY2FudmFzKTtcbiAgfVxuXG4gIHJ1bigpOiB2b2lkIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhdyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgIHByb3RlY3RlZCBmaWxsQ29sb3IgPSAnI2ZmZmZmZicsXG4gICAgcHJvdGVjdGVkIHN0cm9rZUNvbG9yID0gJyMwMDAwMDAnXG4gICkge31cblxuICBzZXRGaWxsQ29sb3IoY29sb3I6IHN0cmluZyk6IERyYXcge1xuICAgIHRoaXMuZmlsbENvbG9yID0gY29sb3I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRTdHJva2VDb2xvcihjb2xvcjogc3RyaW5nKTogRHJhdyB7XG4gICAgdGhpcy5zdHJva2VDb2xvciA9IGNvbG9yO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgQ29tbWFuZCBmcm9tICcuL0NvbW1hbmQnO1xuaW1wb3J0IERyYXcgZnJvbSAnLi9EcmF3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheUNvbW1hbmQgZXh0ZW5kcyBEcmF3IGltcGxlbWVudHMgQ29tbWFuZCB7XG4gIHByaXZhdGUgY29tbWFuZHMgPSBuZXcgQXJyYXk8Q29tbWFuZD4oKTtcbiAgcHJpdmF0ZSBwbGF5SW5kZXggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICBzdXBlcihjYW52YXMpO1xuICB9XG5cbiAgYWRkQ29tbWFuZChjb21tYW5kOiBDb21tYW5kKTogdm9pZCB7XG4gICAgdGhpcy5jb21tYW5kcy5wdXNoKGNvbW1hbmQpO1xuICB9XG5cbiAgcnVuKCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGxheUluZGV4IDwgdGhpcy5jb21tYW5kcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMuY29tbWFuZHNbdGhpcy5wbGF5SW5kZXhdO1xuICAgICAgICBjb21tYW5kLnJ1bigpO1xuXG4gICAgICAgIHRoaXMucGxheUluZGV4Kys7XG5cbiAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheUluZGV4ID0gMDtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbW1hbmQgZnJvbSAnLi9Db21tYW5kJztcbmltcG9ydCBEcmF3IGZyb20gJy4vRHJhdyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRDb21tYW5kIGV4dGVuZHMgRHJhdyBpbXBsZW1lbnRzIENvbW1hbmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgIHByaXZhdGUgeDogbnVtYmVyLFxuICAgIHByaXZhdGUgeTogbnVtYmVyLFxuICAgIHByaXZhdGUgc2l6ZTogbnVtYmVyLFxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nXG4gICkge1xuICAgIHN1cGVyKGNhbnZhcyk7XG4gIH1cblxuICBydW4oKTogdm9pZCB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb250ZXh0LmZvbnQgPSBgJHt0aGlzLnNpemV9cHggQXJpYWxgO1xuICAgIGNvbnRleHQudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3I7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlQ29sb3I7XG5cbiAgICBjb250ZXh0LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy54LCB0aGlzLnkpO1xuICAgIGNvbnRleHQuc3Ryb2tlVGV4dCh0aGlzLnRleHQsIHRoaXMueCwgdGhpcy55KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQm94Q29tbWFuZCBmcm9tICcuL0JveENvbW1hbmQnO1xuaW1wb3J0IENpcmNsZUNvbW1hbmQgZnJvbSAnLi9DaXJjbGVDb21tYW5kJztcbmltcG9ydCBDbGVhckNvbW1hbmQgZnJvbSAnLi9DbGVhckNvbW1hbmQnO1xuaW1wb3J0IFBsYXlDb21tYW5kIGZyb20gJy4vUGxheUNvbW1hbmQnO1xuaW1wb3J0IFRleHRDb21tYW5kIGZyb20gJy4vVGV4dENvbW1hbmQnO1xuXG4vKipcbiAqIENvbW1hbmQg7Yyo7YS07J2AIO2VmOuCmOydmCDquLDriqXsnYQg7YG0656Y7Iqk7J2YIOqwneyytOuhnCDsoJXsnZjtlZwg6rKD7J2066mwIOydtOulvCDsu6Trp6jrk5wg6rCd7LK065286rOgIO2VnOuLpC5cbiAqIOy7pOunqOuTnCDqsJ3ssrTripQg7KCA7J6l7IaM7JeQIOyggOyepe2VtOyEnCDqs4Tsho0g7Jyg7KeA7ZWgIOyImCDsnojqs6Ag7ZWo7IiY7J2YIOyduOyekCDrk7HsnLzroZwg7KCE64us7ZWgIOyImCDsnojslrQg64uk7JaR7ZWY6rKMIOyCrOyaqeuQoCDsiJgg7J6I64ukLlxuICog7Jes65+sIOqwnOydmCDsu6Trp6jrk5zrpbwg7ZWcIOuyiOyXkCDsi6TtlontlZjripQg67Cw7LmYIOq4sOuKpSwg7Iuk7ZaJ7JeQIOuMgO2VnCDst6jshozsmYAg7J6s7Iuk7ZaJ7JeQIOuMgO2VnCBVbmRvL1JlZG8g6riw64qlIOqwnOuwnOyXkCBDb21tYW5kIO2MqO2EtOydhCDsoIHsmqntlaAg7IiYIOyeiOuLpC5cbiAqL1xuXG5jb25zdCBkb21DYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbmNvbnN0IGRvbURyYXdCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhdycpO1xuY29uc3QgZG9tUGxheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5Jyk7XG5cbmNvbnN0IGNtZENsZWFyID0gbmV3IENsZWFyQ29tbWFuZChkb21DYW52YXMpO1xuXG5jb25zdCBjbWRDaXJjbGUxID0gbmV3IENpcmNsZUNvbW1hbmQoZG9tQ2FudmFzLCA1MCwgMTUwLCA0MCk7XG5jbWRDaXJjbGUxLnNldEZpbGxDb2xvcignI2VlNDA0MCcpLnNldFN0cm9rZUNvbG9yKCcjZWU0MDQwJyk7XG5cbmNvbnN0IGNtZFRleHQgPSBuZXcgVGV4dENvbW1hbmQoZG9tQ2FudmFzLCAyMDAsIDIwMCwgNDAsICdEZXNpZ24gUGF0dGVybnMnKTtcbmNtZFRleHQuc2V0U3Ryb2tlQ29sb3IoJyM0NThkZTUnKTtcblxuY29uc3QgY21kQ2lyY2xlMiA9IG5ldyBDaXJjbGVDb21tYW5kKGRvbUNhbnZhcywgMzU1LCAyNDAsIDMwKTtcbmNtZENpcmNsZTIuc2V0RmlsbENvbG9yKCcjZmY4ODRkJykuc2V0U3Ryb2tlQ29sb3IoJyNmZjg4NGQnKTtcblxuY29uc3QgY21kQm94ID0gbmV3IEJveENvbW1hbmQoZG9tQ2FudmFzLCA0MCwgMTY1LCAzMjAsIDY1KTtcbmNtZEJveC5zZXRGaWxsQ29sb3IoJyM0ZGM0ZmYnKS5zZXRTdHJva2VDb2xvcignIzRkYzRmZicpO1xuXG5kb21EcmF3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjbWRDbGVhci5ydW4oKTtcbiAgY21kQ2lyY2xlMS5ydW4oKTtcbiAgY21kQm94LnJ1bigpO1xuICBjbWRDaXJjbGUyLnJ1bigpO1xuICBjbWRUZXh0LnJ1bigpO1xufSk7XG5cbmNvbnN0IHBsYXlDb21tYW5kID0gbmV3IFBsYXlDb21tYW5kKGRvbUNhbnZhcyk7XG5wbGF5Q29tbWFuZC5hZGRDb21tYW5kKGNtZENsZWFyKTtcbnBsYXlDb21tYW5kLmFkZENvbW1hbmQoY21kQ2lyY2xlMSk7XG5wbGF5Q29tbWFuZC5hZGRDb21tYW5kKGNtZEJveCk7XG5wbGF5Q29tbWFuZC5hZGRDb21tYW5kKGNtZENpcmNsZTIpO1xucGxheUNvbW1hbmQuYWRkQ29tbWFuZChjbWRUZXh0KTtcblxuZG9tUGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcGxheUNvbW1hbmQucnVuKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==