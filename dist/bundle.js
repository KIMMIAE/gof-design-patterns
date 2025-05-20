/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/creational/abstract-factory/3DButton.ts":
/*!*****************************************************!*\
  !*** ./src/creational/abstract-factory/3DButton.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/creational/abstract-factory/Button.ts");
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

var ThreeDButton = /** @class */ (function (_super) {
    __extends(ThreeDButton, _super);
    function ThreeDButton(dom, caption) {
        var _this = _super.call(this, dom, caption) || this;
        _this.render();
        return _this;
    }
    ThreeDButton.prototype.render = function () {
        this.dom.innerHTML = "\n            ".concat(this.caption, "\n            <div></div>\n            <div></div>\n        ");
        this.dom.classList.add('threeD-button');
    };
    return ThreeDButton;
}(_Button__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDButton);


/***/ }),

/***/ "./src/creational/abstract-factory/3DCheckBox.ts":
/*!*******************************************************!*\
  !*** ./src/creational/abstract-factory/3DCheckBox.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckBox */ "./src/creational/abstract-factory/CheckBox.ts");
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

var ThreeDCheckBox = /** @class */ (function (_super) {
    __extends(ThreeDCheckBox, _super);
    function ThreeDCheckBox(dom, label, checked) {
        var _this = _super.call(this, dom, label, checked) || this;
        _this.render();
        return _this;
    }
    ThreeDCheckBox.prototype.render = function () {
        this.dom.innerHTML = "\n            <label>CheckBox\n                <input type=\"checkbox\" ".concat(this.checked ? 'checked="checked"' : '', ">\n                <div class=\"box\"></div>\n                <div class=\"line\"></div>\n            </label>\n        ");
        this.dom.classList.add('threeD-checkbox');
    };
    return ThreeDCheckBox;
}(_CheckBox__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDCheckBox);


/***/ }),

/***/ "./src/creational/abstract-factory/3DTextEdit.ts":
/*!*******************************************************!*\
  !*** ./src/creational/abstract-factory/3DTextEdit.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextEdit */ "./src/creational/abstract-factory/TextEdit.ts");
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

var ThreeDTextEdit = /** @class */ (function (_super) {
    __extends(ThreeDTextEdit, _super);
    function ThreeDTextEdit(dom, text) {
        var _this = _super.call(this, dom, text) || this;
        _this.render();
        return _this;
    }
    ThreeDTextEdit.prototype.render = function () {
        this.dom.innerHTML = "<input value=\"".concat(this.text, "\">");
        this.dom.classList.add('threeD-input');
    };
    return ThreeDTextEdit;
}(_TextEdit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDTextEdit);


/***/ }),

/***/ "./src/creational/abstract-factory/3DUIFactory.ts":
/*!********************************************************!*\
  !*** ./src/creational/abstract-factory/3DUIFactory.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _3DButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./3DButton */ "./src/creational/abstract-factory/3DButton.ts");
/* harmony import */ var _3DCheckBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3DCheckBox */ "./src/creational/abstract-factory/3DCheckBox.ts");
/* harmony import */ var _3DTextEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3DTextEdit */ "./src/creational/abstract-factory/3DTextEdit.ts");
/* harmony import */ var _UIFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIFactory */ "./src/creational/abstract-factory/UIFactory.ts");
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




var ThreeDUIFactory = /** @class */ (function (_super) {
    __extends(ThreeDUIFactory, _super);
    function ThreeDUIFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThreeDUIFactory.prototype.createButton = function (dom, caption) {
        return new _3DButton__WEBPACK_IMPORTED_MODULE_0__["default"](dom, caption);
    };
    ThreeDUIFactory.prototype.createCheckBox = function (dom, caption, checked) {
        return new _3DCheckBox__WEBPACK_IMPORTED_MODULE_1__["default"](dom, caption, checked);
    };
    ThreeDUIFactory.prototype.createTextEdit = function (dom, text) {
        return new _3DTextEdit__WEBPACK_IMPORTED_MODULE_2__["default"](dom, text);
    };
    return ThreeDUIFactory;
}(_UIFactory__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDUIFactory);


/***/ }),

/***/ "./src/creational/abstract-factory/Button.ts":
/*!***************************************************!*\
  !*** ./src/creational/abstract-factory/Button.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Button = /** @class */ (function () {
    function Button(dom, caption) {
        this.dom = dom;
        this.caption = caption;
    }
    return Button;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./src/creational/abstract-factory/CheckBox.ts":
/*!*****************************************************!*\
  !*** ./src/creational/abstract-factory/CheckBox.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CheckBox = /** @class */ (function () {
    function CheckBox(dom, label, checked) {
        this.dom = dom;
        this.label = label;
        this.checked = checked;
    }
    return CheckBox;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBox);


/***/ }),

/***/ "./src/creational/abstract-factory/FlatButton.ts":
/*!*******************************************************!*\
  !*** ./src/creational/abstract-factory/FlatButton.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/creational/abstract-factory/Button.ts");
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

var FlatButton = /** @class */ (function (_super) {
    __extends(FlatButton, _super);
    function FlatButton(dom, caption) {
        var _this = _super.call(this, dom, caption) || this;
        _this.render();
        return _this;
    }
    FlatButton.prototype.render = function () {
        this.dom.innerHTML = this.caption;
        this.dom.classList.add('flat-button');
    };
    return FlatButton;
}(_Button__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatButton);


/***/ }),

/***/ "./src/creational/abstract-factory/FlatCheckBox.ts":
/*!*********************************************************!*\
  !*** ./src/creational/abstract-factory/FlatCheckBox.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckBox */ "./src/creational/abstract-factory/CheckBox.ts");
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

var FlatCheckBox = /** @class */ (function (_super) {
    __extends(FlatCheckBox, _super);
    function FlatCheckBox(dom, label, checked) {
        var _this = _super.call(this, dom, label, checked) || this;
        _this.render();
        return _this;
    }
    FlatCheckBox.prototype.render = function () {
        this.dom.innerHTML = "\n      <label>".concat(this.label, "\n          <input type=\"checkbox\" ").concat(this.checked ? "checked=\"checked\"" : '', ">\n          <span></span>\n      </label>\n    ");
        this.dom.classList.add('flat-checkbox');
    };
    return FlatCheckBox;
}(_CheckBox__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatCheckBox);


/***/ }),

/***/ "./src/creational/abstract-factory/FlatTextEdit.ts":
/*!*********************************************************!*\
  !*** ./src/creational/abstract-factory/FlatTextEdit.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextEdit */ "./src/creational/abstract-factory/TextEdit.ts");
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

var FlatTextEdit = /** @class */ (function (_super) {
    __extends(FlatTextEdit, _super);
    function FlatTextEdit(dom, text) {
        var _this = _super.call(this, dom, text) || this;
        _this.render();
        return _this;
    }
    FlatTextEdit.prototype.render = function () {
        this.dom.innerHTML = "<input value=\"".concat(this.text, "\">");
        this.dom.classList.add('flat-input');
    };
    return FlatTextEdit;
}(_TextEdit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatTextEdit);


/***/ }),

/***/ "./src/creational/abstract-factory/FlatUIFactory.ts":
/*!**********************************************************!*\
  !*** ./src/creational/abstract-factory/FlatUIFactory.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FlatButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlatButton */ "./src/creational/abstract-factory/FlatButton.ts");
/* harmony import */ var _FlatCheckBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlatCheckBox */ "./src/creational/abstract-factory/FlatCheckBox.ts");
/* harmony import */ var _FlatTextEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlatTextEdit */ "./src/creational/abstract-factory/FlatTextEdit.ts");
/* harmony import */ var _UIFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIFactory */ "./src/creational/abstract-factory/UIFactory.ts");
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




var FlatUIFactory = /** @class */ (function (_super) {
    __extends(FlatUIFactory, _super);
    function FlatUIFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlatUIFactory.prototype.createButton = function (dom, caption) {
        return new _FlatButton__WEBPACK_IMPORTED_MODULE_0__["default"](dom, caption);
    };
    FlatUIFactory.prototype.createCheckBox = function (dom, label, checked) {
        return new _FlatCheckBox__WEBPACK_IMPORTED_MODULE_1__["default"](dom, label, checked);
    };
    FlatUIFactory.prototype.createTextEdit = function (dom, text) {
        return new _FlatTextEdit__WEBPACK_IMPORTED_MODULE_2__["default"](dom, text);
    };
    return FlatUIFactory;
}(_UIFactory__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatUIFactory);


/***/ }),

/***/ "./src/creational/abstract-factory/TextEdit.ts":
/*!*****************************************************!*\
  !*** ./src/creational/abstract-factory/TextEdit.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var TextEdit = /** @class */ (function () {
    function TextEdit(dom, text) {
        this.dom = dom;
        this.text = text;
    }
    return TextEdit;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextEdit);


/***/ }),

/***/ "./src/creational/abstract-factory/UIFactory.ts":
/*!******************************************************!*\
  !*** ./src/creational/abstract-factory/UIFactory.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var UIFactory = /** @class */ (function () {
    function UIFactory() {
    }
    return UIFactory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIFactory);


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
/*!**************************************************!*\
  !*** ./src/creational/abstract-factory/index.ts ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _3DUIFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./3DUIFactory */ "./src/creational/abstract-factory/3DUIFactory.ts");
/* harmony import */ var _FlatUIFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlatUIFactory */ "./src/creational/abstract-factory/FlatUIFactory.ts");


/**
 * Abstract Factory 패턴은 만들어야 하는 컴포넌트들을 먼저 개념적으로 정해두고 특정한 조건이 주어지면 해당 조건에 맞는 구체적인 컴포넌트로 생성하는 패턴이다.
 * 미리 정해두는 개념적인 컴포넌트들을 그룹(Group)으로 정하고 해당 조건에 맞는 구체적인 컴포넌트들을 생성하고 조립해 하나의 시스템을 완성시키는 패턴이다.
 */
var factory;
var flatMode = true;
// const flatMode = false;
if (flatMode) {
    factory = new _FlatUIFactory__WEBPACK_IMPORTED_MODULE_1__["default"]();
}
else {
    factory = new _3DUIFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
}
var domButton = document.querySelector('.button');
var domCheckbox = document.querySelector('.checkbox');
var domTextEdit = document.querySelector('.textedit');
factory.createButton(domButton, 'BUTTON');
factory.createCheckBox(domCheckbox, 'CheckBox', true);
factory.createTextEdit(domTextEdit, 'DesignPattern');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUN0RCxPQUFPLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvY3JlYXRpb25hbC9hYnN0cmFjdC1mYWN0b3J5LzNEQnV0dG9uLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvY3JlYXRpb25hbC9hYnN0cmFjdC1mYWN0b3J5LzNEQ2hlY2tCb3gudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9jcmVhdGlvbmFsL2Fic3RyYWN0LWZhY3RvcnkvM0RUZXh0RWRpdC50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NyZWF0aW9uYWwvYWJzdHJhY3QtZmFjdG9yeS8zRFVJRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NyZWF0aW9uYWwvYWJzdHJhY3QtZmFjdG9yeS9CdXR0b24udHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9jcmVhdGlvbmFsL2Fic3RyYWN0LWZhY3RvcnkvQ2hlY2tCb3gudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9jcmVhdGlvbmFsL2Fic3RyYWN0LWZhY3RvcnkvRmxhdEJ1dHRvbi50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NyZWF0aW9uYWwvYWJzdHJhY3QtZmFjdG9yeS9GbGF0Q2hlY2tCb3gudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9jcmVhdGlvbmFsL2Fic3RyYWN0LWZhY3RvcnkvRmxhdFRleHRFZGl0LnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvY3JlYXRpb25hbC9hYnN0cmFjdC1mYWN0b3J5L0ZsYXRVSUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9jcmVhdGlvbmFsL2Fic3RyYWN0LWZhY3RvcnkvVGV4dEVkaXQudHMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9jcmVhdGlvbmFsL2Fic3RyYWN0LWZhY3RvcnkvVUlGYWN0b3J5LnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NyZWF0aW9uYWwvYWJzdHJhY3QtZmFjdG9yeS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVEQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgY29uc3RydWN0b3IoZG9tOiBIVE1MRWxlbWVudCwgY2FwdGlvbjogc3RyaW5nKSB7XG4gICAgc3VwZXIoZG9tLCBjYXB0aW9uKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuZG9tLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICR7dGhpcy5jYXB0aW9ufVxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIGA7XG4gICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZCgndGhyZWVELWJ1dHRvbicpO1xuICB9XG59XG4iLCJpbXBvcnQgQ2hlY2tCb3ggZnJvbSAnLi9DaGVja0JveCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRocmVlRENoZWNrQm94IGV4dGVuZHMgQ2hlY2tCb3gge1xuICBjb25zdHJ1Y3Rvcihkb206IEhUTUxFbGVtZW50LCBsYWJlbDogc3RyaW5nLCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgc3VwZXIoZG9tLCBsYWJlbCwgY2hlY2tlZCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8bGFiZWw+Q2hlY2tCb3hcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgJHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA/ICdjaGVja2VkPVwiY2hlY2tlZFwiJyA6ICcnXG4gICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIGA7XG4gICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZCgndGhyZWVELWNoZWNrYm94Jyk7XG4gIH1cbn1cbiIsImltcG9ydCBUZXh0RWRpdCBmcm9tICcuL1RleHRFZGl0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVEVGV4dEVkaXQgZXh0ZW5kcyBUZXh0RWRpdCB7XG4gIGNvbnN0cnVjdG9yKGRvbTogSFRNTEVsZW1lbnQsIHRleHQ6IHN0cmluZykge1xuICAgIHN1cGVyKGRvbSwgdGV4dCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgPGlucHV0IHZhbHVlPVwiJHt0aGlzLnRleHR9XCI+YDtcbiAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKCd0aHJlZUQtaW5wdXQnKTtcbiAgfVxufVxuIiwiaW1wb3J0IFRocmVlREJ1dHRvbiBmcm9tICcuLzNEQnV0dG9uJztcbmltcG9ydCBUaHJlZURDaGVja0JveCBmcm9tICcuLzNEQ2hlY2tCb3gnO1xuaW1wb3J0IFRocmVlRFRleHRFZGl0IGZyb20gJy4vM0RUZXh0RWRpdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCBDaGVja0JveCBmcm9tICcuL0NoZWNrQm94JztcbmltcG9ydCBUZXh0RWRpdCBmcm9tICcuL1RleHRFZGl0JztcbmltcG9ydCBVSUZhY3RvcnkgZnJvbSAnLi9VSUZhY3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaHJlZURVSUZhY3RvcnkgZXh0ZW5kcyBVSUZhY3Rvcnkge1xuICBjcmVhdGVCdXR0b24oZG9tOiBIVE1MRWxlbWVudCwgY2FwdGlvbjogc3RyaW5nKTogQnV0dG9uIHtcbiAgICByZXR1cm4gbmV3IFRocmVlREJ1dHRvbihkb20sIGNhcHRpb24pO1xuICB9XG4gIGNyZWF0ZUNoZWNrQm94KFxuICAgIGRvbTogSFRNTEVsZW1lbnQsXG4gICAgY2FwdGlvbjogc3RyaW5nLFxuICAgIGNoZWNrZWQ6IGJvb2xlYW5cbiAgKTogQ2hlY2tCb3gge1xuICAgIHJldHVybiBuZXcgVGhyZWVEQ2hlY2tCb3goZG9tLCBjYXB0aW9uLCBjaGVja2VkKTtcbiAgfVxuXG4gIGNyZWF0ZVRleHRFZGl0KGRvbTogSFRNTEVsZW1lbnQsIHRleHQ6IHN0cmluZyk6IFRleHRFZGl0IHtcbiAgICByZXR1cm4gbmV3IFRocmVlRFRleHRFZGl0KGRvbSwgdGV4dCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkb206IEhUTUxFbGVtZW50LCBwcm90ZWN0ZWQgY2FwdGlvbjogc3RyaW5nKSB7fVxuXG4gIGFic3RyYWN0IHJlbmRlcigpOiB2b2lkO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ2hlY2tCb3gge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZG9tOiBIVE1MRWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgbGFiZWw6IHN0cmluZyxcbiAgICBwcm90ZWN0ZWQgY2hlY2tlZDogYm9vbGVhblxuICApIHt9XG5cbiAgYWJzdHJhY3QgcmVuZGVyKCk6IHZvaWQ7XG59XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhdEJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGRvbTogSFRNTEVsZW1lbnQsIGNhcHRpb246IHN0cmluZykge1xuICAgIHN1cGVyKGRvbSwgY2FwdGlvbik7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5kb20uaW5uZXJIVE1MID0gdGhpcy5jYXB0aW9uO1xuICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoJ2ZsYXQtYnV0dG9uJyk7XG4gIH1cbn1cbiIsImltcG9ydCBDaGVja0JveCBmcm9tICcuL0NoZWNrQm94JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhdENoZWNrQm94IGV4dGVuZHMgQ2hlY2tCb3gge1xuICBjb25zdHJ1Y3Rvcihkb206IEhUTUxFbGVtZW50LCBsYWJlbDogc3RyaW5nLCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgc3VwZXIoZG9tLCBsYWJlbCwgY2hlY2tlZCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy5kb20uaW5uZXJIVE1MID0gYFxuICAgICAgPGxhYmVsPiR7dGhpcy5sYWJlbH1cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgJHt0aGlzLmNoZWNrZWQgPyBgY2hlY2tlZD1cImNoZWNrZWRcImAgOiAnJ30+XG4gICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICBgO1xuICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoJ2ZsYXQtY2hlY2tib3gnKTtcbiAgfVxufVxuIiwiaW1wb3J0IFRleHRFZGl0IGZyb20gJy4vVGV4dEVkaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGF0VGV4dEVkaXQgZXh0ZW5kcyBUZXh0RWRpdCB7XG4gIGNvbnN0cnVjdG9yKGRvbTogSFRNTEVsZW1lbnQsIHRleHQ6IHN0cmluZykge1xuICAgIHN1cGVyKGRvbSwgdGV4dCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgPGlucHV0IHZhbHVlPVwiJHt0aGlzLnRleHR9XCI+YDtcbiAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKCdmbGF0LWlucHV0Jyk7XG4gIH1cbn1cbiIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IENoZWNrQm94IGZyb20gJy4vQ2hlY2tCb3gnO1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnLi9GbGF0QnV0dG9uJztcbmltcG9ydCBGbGF0Q2hlY2tCb3ggZnJvbSAnLi9GbGF0Q2hlY2tCb3gnO1xuaW1wb3J0IEZsYXRUZXh0RWRpdCBmcm9tICcuL0ZsYXRUZXh0RWRpdCc7XG5pbXBvcnQgVGV4dEVkaXQgZnJvbSAnLi9UZXh0RWRpdCc7XG5pbXBvcnQgVUlGYWN0b3J5IGZyb20gJy4vVUlGYWN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhdFVJRmFjdG9yeSBleHRlbmRzIFVJRmFjdG9yeSB7XG4gIGNyZWF0ZUJ1dHRvbihkb206IEhUTUxFbGVtZW50LCBjYXB0aW9uOiBzdHJpbmcpOiBCdXR0b24ge1xuICAgIHJldHVybiBuZXcgRmxhdEJ1dHRvbihkb20sIGNhcHRpb24pO1xuICB9XG5cbiAgY3JlYXRlQ2hlY2tCb3goZG9tOiBIVE1MRWxlbWVudCwgbGFiZWw6IHN0cmluZywgY2hlY2tlZDogYm9vbGVhbik6IENoZWNrQm94IHtcbiAgICByZXR1cm4gbmV3IEZsYXRDaGVja0JveChkb20sIGxhYmVsLCBjaGVja2VkKTtcbiAgfVxuXG4gIGNyZWF0ZVRleHRFZGl0KGRvbTogSFRNTEVsZW1lbnQsIHRleHQ6IHN0cmluZyk6IFRleHRFZGl0IHtcbiAgICByZXR1cm4gbmV3IEZsYXRUZXh0RWRpdChkb20sIHRleHQpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBUZXh0RWRpdCB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkb206IEhUTUxFbGVtZW50LCBwcm90ZWN0ZWQgdGV4dDogc3RyaW5nKSB7fVxuXG4gIGFic3RyYWN0IHJlbmRlcigpOiB2b2lkO1xufVxuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgQ2hlY2tCb3ggZnJvbSAnLi9DaGVja0JveCc7XG5pbXBvcnQgVGV4dEVkaXQgZnJvbSAnLi9UZXh0RWRpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFVJRmFjdG9yeSB7XG4gIGFic3RyYWN0IGNyZWF0ZUJ1dHRvbihkb206IEhUTUxFbGVtZW50LCBjYXB0aW9uOiBzdHJpbmcpOiBCdXR0b247XG4gIGFic3RyYWN0IGNyZWF0ZUNoZWNrQm94KFxuICAgIGRvbTogSFRNTEVsZW1lbnQsXG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICBjaGVja2VkOiBib29sZWFuXG4gICk6IENoZWNrQm94O1xuICBhYnN0cmFjdCBjcmVhdGVUZXh0RWRpdChkb206IEhUTUxFbGVtZW50LCB0ZXh0OiBzdHJpbmcpOiBUZXh0RWRpdDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRocmVlRFVJRmFjdG9yeSBmcm9tICcuLzNEVUlGYWN0b3J5JztcbmltcG9ydCBGbGF0VUlGYWN0b3J5IGZyb20gJy4vRmxhdFVJRmFjdG9yeSc7XG5pbXBvcnQgVUlGYWN0b3J5IGZyb20gJy4vVUlGYWN0b3J5JztcblxuLyoqXG4gKiBBYnN0cmFjdCBGYWN0b3J5IO2MqO2EtOydgCDrp4zrk6TslrTslbwg7ZWY64qUIOy7tO2PrOuEjO2KuOuTpOydhCDrqLzsoIAg6rCc64WQ7KCB7Jy866GcIOygle2VtOuRkOqzoCDtirnsoJXtlZwg7KGw6rG07J20IOyjvOyWtOyngOuptCDtlbTri7kg7KGw6rG07JeQIOunnuuKlCDqtazssrTsoIHsnbgg7Lu07Y+s64SM7Yq466GcIOyDneyEse2VmOuKlCDtjKjthLTsnbTri6QuXG4gKiDrr7jrpqwg7KCV7ZW065GQ64qUIOqwnOuFkOyggeyduCDsu7Ttj6zrhIztirjrk6TsnYQg6re466O5KEdyb3VwKeycvOuhnCDsoJXtlZjqs6Ag7ZW064u5IOyhsOqxtOyXkCDrp57ripQg6rWs7LK07KCB7J24IOy7tO2PrOuEjO2KuOuTpOydhCDsg53shLHtlZjqs6Ag7KGw66a97ZW0IO2VmOuCmOydmCDsi5zsiqTthZzsnYQg7JmE7ISx7Iuc7YKk64qUIO2MqO2EtOydtOuLpC5cbiAqL1xuXG5sZXQgZmFjdG9yeTogVUlGYWN0b3J5O1xuXG5jb25zdCBmbGF0TW9kZSA9IHRydWU7XG4vLyBjb25zdCBmbGF0TW9kZSA9IGZhbHNlO1xuXG5pZiAoZmxhdE1vZGUpIHtcbiAgZmFjdG9yeSA9IG5ldyBGbGF0VUlGYWN0b3J5KCk7XG59IGVsc2Uge1xuICBmYWN0b3J5ID0gbmV3IFRocmVlRFVJRmFjdG9yeSgpO1xufVxuXG5jb25zdCBkb21CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uJykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBkb21DaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveCcpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgZG9tVGV4dEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dGVkaXQnKSBhcyBIVE1MRWxlbWVudDtcblxuZmFjdG9yeS5jcmVhdGVCdXR0b24oZG9tQnV0dG9uLCAnQlVUVE9OJyk7XG5mYWN0b3J5LmNyZWF0ZUNoZWNrQm94KGRvbUNoZWNrYm94LCAnQ2hlY2tCb3gnLCB0cnVlKTtcbmZhY3RvcnkuY3JlYXRlVGV4dEVkaXQoZG9tVGV4dEVkaXQsICdEZXNpZ25QYXR0ZXJuJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=