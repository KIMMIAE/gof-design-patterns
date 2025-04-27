/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/behavioral/template/Article.ts":
/*!********************************************!*\
  !*** ./src/behavioral/template/Article.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Article = /** @class */ (function () {
    function Article(title, content, footer) {
        this.title = title;
        this.content = content;
        this.footer = footer;
    }
    Article.prototype.getTitle = function () {
        return this.title;
    };
    Article.prototype.getContent = function () {
        return this.content;
    };
    Article.prototype.getFooter = function () {
        return this.footer;
    };
    return Article;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);


/***/ }),

/***/ "./src/behavioral/template/DisplayArticleTemplate.ts":
/*!***********************************************************!*\
  !*** ./src/behavioral/template/DisplayArticleTemplate.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DisplayArticleTemplate = /** @class */ (function () {
    function DisplayArticleTemplate(article) {
        var _this = this;
        this.article = article;
        this.displayHtml = function () {
            return "\n        ".concat(_this.titleHtml(), "\n        ").concat(_this.contentHtml(), "\n        ").concat(_this.footerHtml(), "\n    ");
        };
    }
    return DisplayArticleTemplate;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayArticleTemplate);


/***/ }),

/***/ "./src/behavioral/template/EditableDisplayArticle.ts":
/*!***********************************************************!*\
  !*** ./src/behavioral/template/EditableDisplayArticle.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/behavioral/template/DisplayArticleTemplate.ts");
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

var EditableDisplayArticle = /** @class */ (function (_super) {
    __extends(EditableDisplayArticle, _super);
    function EditableDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    EditableDisplayArticle.prototype.titleHtml = function () {
        return "<div><span>\uC81C\uBAA9</span><input value='".concat(this.article.getTitle(), "' /></div>");
    };
    EditableDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (item) { return "".concat(item, "\n"); });
        return "<span>\uB0B4\uC6A9</span><br/><textarea cols='50' rows='5'>".concat(items.join(''), "</textarea>");
    };
    EditableDisplayArticle.prototype.footerHtml = function () {
        return "<div><span>\uAE00\uC4F4\uC774</span><input value='".concat(this.article.getFooter(), "'</div>");
    };
    return EditableDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableDisplayArticle);


/***/ }),

/***/ "./src/behavioral/template/SimpleDisplayArticle.ts":
/*!*********************************************************!*\
  !*** ./src/behavioral/template/SimpleDisplayArticle.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/behavioral/template/DisplayArticleTemplate.ts");
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

var SimpleDisplayArticle = /** @class */ (function (_super) {
    __extends(SimpleDisplayArticle, _super);
    function SimpleDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    SimpleDisplayArticle.prototype.titleHtml = function () {
        return "<h1>".concat(this.article.getTitle(), "</h1>");
    };
    SimpleDisplayArticle.prototype.contentHtml = function () {
        var items = this.article
            .getContent()
            .map(function (content) { return "<li>".concat(content, "</li>"); });
        return "<ul>".concat(items.join(''), "</ul>");
    };
    SimpleDisplayArticle.prototype.footerHtml = function () {
        return "<h3>".concat(this.article.getFooter(), "</h3>");
    };
    return SimpleDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleDisplayArticle);


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
  !*** ./src/behavioral/template/index.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article */ "./src/behavioral/template/Article.ts");
/* harmony import */ var _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableDisplayArticle */ "./src/behavioral/template/EditableDisplayArticle.ts");
/* harmony import */ var _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleDisplayArticle */ "./src/behavioral/template/SimpleDisplayArticle.ts");



/**
 * Template 패턴은 어떤 기능을 구성하는 각 실행 순서(단계)를 미리 정하고 각 실행 단계에 대한 구체적인 코드를 재정의할 수 있는 유연성을 제공합니다.
 */
var article = new _Article__WEBPACK_IMPORTED_MODULE_0__["default"]('GIS 분야의 업무', [
    '공간 DB 구축 및 가공',
    '위치기반 서비스 개발',
    '지도 기반 업무 시스템 설계 및 개발',
    '공간 정보 3차원 시각화',
    '영상 판독을 위한 딥러닝 학습 및 서비스 개발',
], 'GIS DEVLOPLER');
var display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
document.querySelector('.content').innerHTML = display.displayHtml();
document.querySelector('.edit-mode').addEventListener('change', function (event) {
    var display;
    if (event.target.checked) {
        display = new _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__["default"](article);
    }
    else {
        display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
    }
    document.querySelector('.content').innerHTML = display.displayHtml();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQzhCO0FBQ0o7QUFDMUQ7O0dBRUc7QUFDSCxJQUFNLE9BQU8sR0FBRyxJQUFJLGdEQUFPLENBQ3pCLFlBQVksRUFDWjtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiwyQkFBMkI7Q0FDNUIsRUFDRCxlQUFlLENBQ2hCLENBQUM7QUFFRixJQUFNLE9BQU8sR0FBRyxJQUFJLDZEQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUVyRSxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLEtBQUs7SUFDcEUsSUFBSSxPQUFPLENBQUM7SUFDWixJQUF1QixLQUFLLENBQUMsTUFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdDLE9BQU8sR0FBRyxJQUFJLCtEQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxHQUFHLElBQUksNkRBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN2RSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC90ZW1wbGF0ZS9BcnRpY2xlLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC90ZW1wbGF0ZS9EaXNwbGF5QXJ0aWNsZVRlbXBsYXRlLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC90ZW1wbGF0ZS9FZGl0YWJsZURpc3BsYXlBcnRpY2xlLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvYmVoYXZpb3JhbC90ZW1wbGF0ZS9TaW1wbGVEaXNwbGF5QXJ0aWNsZS50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy8uL3NyYy9iZWhhdmlvcmFsL3RlbXBsYXRlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFydGljbGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBjb250ZW50OiBzdHJpbmdbXSxcbiAgICBwcml2YXRlIGZvb3Rlcjogc3RyaW5nXG4gICkge31cblxuICBwdWJsaWMgZ2V0VGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb250ZW50KCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgcHVibGljIGdldEZvb3RlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvb3RlcjtcbiAgfVxufVxuIiwiaW1wb3J0IEFydGljbGUgZnJvbSAnLi9BcnRpY2xlJztcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRGlzcGxheUFydGljbGVUZW1wbGF0ZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcnRpY2xlOiBBcnRpY2xlKSB7fVxuXG4gIHB1YmxpYyByZWFkb25seSBkaXNwbGF5SHRtbCA9ICgpID0+IHtcbiAgICByZXR1cm4gYFxuICAgICAgICAke3RoaXMudGl0bGVIdG1sKCl9XG4gICAgICAgICR7dGhpcy5jb250ZW50SHRtbCgpfVxuICAgICAgICAke3RoaXMuZm9vdGVySHRtbCgpfVxuICAgIGA7XG4gIH07XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHRpdGxlSHRtbCgpOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjb250ZW50SHRtbCgpOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBmb290ZXJIdG1sKCk6IHN0cmluZztcbn1cbiIsImltcG9ydCBBcnRpY2xlIGZyb20gJy4vQXJ0aWNsZSc7XG5pbXBvcnQgRGlzcGxheUFydGljbGVUZW1wbGF0ZSBmcm9tICcuL0Rpc3BsYXlBcnRpY2xlVGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0YWJsZURpc3BsYXlBcnRpY2xlIGV4dGVuZHMgRGlzcGxheUFydGljbGVUZW1wbGF0ZSB7XG4gIGNvbnN0cnVjdG9yKGFydGljbGU6IEFydGljbGUpIHtcbiAgICBzdXBlcihhcnRpY2xlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB0aXRsZUh0bWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxkaXY+PHNwYW4+7KCc66qpPC9zcGFuPjxpbnB1dCB2YWx1ZT0nJHt0aGlzLmFydGljbGUuZ2V0VGl0bGUoKX0nIC8+PC9kaXY+YDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb250ZW50SHRtbCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5hcnRpY2xlLmdldENvbnRlbnQoKS5tYXAoKGl0ZW0pID0+IGAke2l0ZW19XFxuYCk7XG4gICAgcmV0dXJuIGA8c3Bhbj7rgrTsmqk8L3NwYW4+PGJyLz48dGV4dGFyZWEgY29scz0nNTAnIHJvd3M9JzUnPiR7aXRlbXMuam9pbihcbiAgICAgICcnXG4gICAgKX08L3RleHRhcmVhPmA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZm9vdGVySHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGRpdj48c3Bhbj7quIDsk7TsnbQ8L3NwYW4+PGlucHV0IHZhbHVlPScke3RoaXMuYXJ0aWNsZS5nZXRGb290ZXIoKX0nPC9kaXY+YDtcbiAgfVxufVxuIiwiaW1wb3J0IEFydGljbGUgZnJvbSAnLi9BcnRpY2xlJztcbmltcG9ydCBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIGZyb20gJy4vRGlzcGxheUFydGljbGVUZW1wbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZURpc3BsYXlBcnRpY2xlIGV4dGVuZHMgRGlzcGxheUFydGljbGVUZW1wbGF0ZSB7XG4gIHByb3RlY3RlZCB0aXRsZUh0bWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxoMT4ke3RoaXMuYXJ0aWNsZS5nZXRUaXRsZSgpfTwvaDE+YDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb250ZW50SHRtbCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5hcnRpY2xlXG4gICAgICAuZ2V0Q29udGVudCgpXG4gICAgICAubWFwKChjb250ZW50KSA9PiBgPGxpPiR7Y29udGVudH08L2xpPmApO1xuICAgIHJldHVybiBgPHVsPiR7aXRlbXMuam9pbignJyl9PC91bD5gO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZvb3Rlckh0bWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxoMz4ke3RoaXMuYXJ0aWNsZS5nZXRGb290ZXIoKX08L2gzPmA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhcnRpY2xlOiBBcnRpY2xlKSB7XG4gICAgc3VwZXIoYXJ0aWNsZSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFydGljbGUgZnJvbSAnLi9BcnRpY2xlJztcbmltcG9ydCBFZGl0YWJsZURpc3BsYXlBcnRpY2xlIGZyb20gJy4vRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSc7XG5pbXBvcnQgU2ltcGxlRGlzcGxheUFydGljbGUgZnJvbSAnLi9TaW1wbGVEaXNwbGF5QXJ0aWNsZSc7XG4vKipcbiAqIFRlbXBsYXRlIO2MqO2EtOydgCDslrTrlqQg6riw64ql7J2EIOq1rOyEse2VmOuKlCDqsIEg7Iuk7ZaJIOyInOyEnCjri6jqs4Qp66W8IOuvuOumrCDsoJXtlZjqs6Ag6rCBIOyLpO2WiSDri6jqs4Tsl5Ag64yA7ZWcIOq1rOyytOyggeyduCDsvZTrk5zrpbwg7J6s7KCV7J2Y7ZWgIOyImCDsnojripQg7Jyg7Jew7ISx7J2EIOygnOqzte2VqeuLiOuLpC5cbiAqL1xuY29uc3QgYXJ0aWNsZSA9IG5ldyBBcnRpY2xlKFxuICAnR0lTIOu2hOyVvOydmCDsl4XrrLQnLFxuICBbXG4gICAgJ+qzteqwhCBEQiDqtazstpUg67CPIOqwgOqztScsXG4gICAgJ+ychOy5mOq4sOuwmCDshJzruYTsiqQg6rCc67CcJyxcbiAgICAn7KeA64+EIOq4sOuwmCDsl4XrrLQg7Iuc7Iqk7YWcIOyEpOqzhCDrsI8g6rCc67CcJyxcbiAgICAn6rO16rCEIOygleuztCAz7LCo7JuQIOyLnOqwge2ZlCcsXG4gICAgJ+yYgeyDgSDtjJDrj4XsnYQg7JyE7ZWcIOuUpeufrOuLnSDtlZnsirUg67CPIOyEnOu5hOyKpCDqsJzrsJwnLFxuICBdLFxuICAnR0lTIERFVkxPUExFUidcbik7XG5cbmNvbnN0IGRpc3BsYXkgPSBuZXcgU2ltcGxlRGlzcGxheUFydGljbGUoYXJ0aWNsZSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmlubmVySFRNTCA9IGRpc3BsYXkuZGlzcGxheUh0bWwoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtbW9kZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICBsZXQgZGlzcGxheTtcbiAgaWYgKCg8SFRNTElucHV0RWxlbWVudD5ldmVudC50YXJnZXQpLmNoZWNrZWQpIHtcbiAgICBkaXNwbGF5ID0gbmV3IEVkaXRhYmxlRGlzcGxheUFydGljbGUoYXJ0aWNsZSk7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheSA9IG5ldyBTaW1wbGVEaXNwbGF5QXJ0aWNsZShhcnRpY2xlKTtcbiAgfVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmlubmVySFRNTCA9IGRpc3BsYXkuZGlzcGxheUh0bWwoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9