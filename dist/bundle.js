/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/creational/prototype/Group.ts":
/*!*******************************************!*\
  !*** ./src/creational/prototype/Group.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Group = /** @class */ (function () {
    function Group() {
        this.shapes = new Array();
    }
    Group.prototype.add = function (shape) {
        this.shapes.push(shape.copy());
        return this;
    };
    Group.prototype.copy = function () {
        var result = new Group();
        this.shapes.forEach(function (shape) {
            result.add(shape);
        });
        return result;
    };
    Group.prototype.draw = function (canvas) {
        this.shapes.forEach(function (shape) {
            shape.draw(canvas);
        });
        return this;
    };
    Group.prototype.moveOffset = function (dx, dy) {
        this.shapes.forEach(function (shape) {
            shape.moveOffset(dx, dy);
        });
        return this;
    };
    return Group;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Group);


/***/ }),

/***/ "./src/creational/prototype/Line.ts":
/*!******************************************!*\
  !*** ./src/creational/prototype/Line.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Line = /** @class */ (function () {
    function Line(pt1, pt2) {
        this.pt1 = pt1.copy();
        this.pt2 = pt2.copy();
    }
    Line.prototype.setPt1 = function (pt) {
        this.pt1 = pt.copy();
        return this;
    };
    Line.prototype.setPt2 = function (pt) {
        this.pt2 = pt.copy();
        return this;
    };
    Line.prototype.getPt1 = function () {
        return this.pt1;
    };
    Line.prototype.getPt2 = function () {
        return this.pt2;
    };
    Line.prototype.copy = function () {
        var result = new Line(this.pt1, this.pt2);
        return result;
    };
    Line.prototype.draw = function (canvas) {
        var context = canvas.getContext('2d');
        context.beginPath();
        context.moveTo(this.pt1.getX(), this.pt1.getY());
        context.lineTo(this.pt2.getX(), this.pt2.getY());
        context.stroke();
        return this;
    };
    Line.prototype.moveOffset = function (dx, dy) {
        this.pt1.moveOffset(dx, dy);
        this.pt2.moveOffset(dx, dy);
        return this;
    };
    return Line;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Line);


/***/ }),

/***/ "./src/creational/prototype/Point.ts":
/*!*******************************************!*\
  !*** ./src/creational/prototype/Point.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.setX = function (v) {
        this.x = v;
        return this;
    };
    Point.prototype.setY = function (v) {
        this.y = v;
        return this;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.copy = function () {
        var result = new Point(this.x, this.y);
        return result;
    };
    Point.prototype.draw = function (canvas) {
        var context = canvas.getContext('2d');
        context.beginPath();
        context.arc(this.x, this.y, 4, 0, 2 * Math.PI);
        context.fill();
        return this;
    };
    Point.prototype.moveOffset = function (dx, dy) {
        this.x += dx;
        this.y += dy;
        return this;
    };
    return Point;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Point);


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
/*!*******************************************!*\
  !*** ./src/creational/prototype/index.ts ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Group */ "./src/creational/prototype/Group.ts");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Line */ "./src/creational/prototype/Line.ts");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Point */ "./src/creational/prototype/Point.ts");



/**
 * Prototype 패턴은 객체를 클래스 이름으로 생성하지 않고 실행 중에 생성된 객체를 통해 동일한 상태값으로 새로운 객체를 생성하는 패턴이다.
 * 원본 객체에 대한 깊은 복사(Deep Copy)를 사용하여 변경에 대해 서로 다른 쪽에 영향을 주지 않는다.
 */
var domCanvas = document.querySelector('canvas');
var pt1 = new _Point__WEBPACK_IMPORTED_MODULE_2__["default"](100, 100);
// pt1.draw(domCanvas);
var pt2 = new _Point__WEBPACK_IMPORTED_MODULE_2__["default"](200, 100);
// pt2.draw(domCanvas);
var line1 = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](pt1, pt2);
// line1.draw(domCanvas);
var pt3 = new _Point__WEBPACK_IMPORTED_MODULE_2__["default"](200, 200);
var pt4 = new _Point__WEBPACK_IMPORTED_MODULE_2__["default"](100, 200);
var line2 = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](pt2, pt3);
var line3 = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](pt3, pt4);
var line4 = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](pt4, pt1);
var rect = new _Group__WEBPACK_IMPORTED_MODULE_0__["default"]();
rect.add(line1).add(line2).add(line3).add(line4);
//rect.draw(domCanvas);
var cloneRect = rect.copy();
cloneRect.moveOffset(200, 200);
rect.moveOffset(-100, -100);
rect.draw(domCanvas);
cloneRect.draw(domCanvas);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLElBQU0sR0FBRyxHQUFHLElBQUksOENBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFaEMsSUFBTSxLQUFLLEdBQUcsSUFBSSw2Q0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqQyxJQUFNLEtBQUssR0FBRyxJQUFJLDZDQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksNkNBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFakMsSUFBTSxJQUFJLEdBQUcsSUFBSSw4Q0FBSyxFQUFFLENBQUM7QUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqRCx1QkFBdUI7QUFFdkIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzlCLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRS9CLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUU1QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3JCLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NyZWF0aW9uYWwvcHJvdG90eXBlL0dyb3VwLnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvLi9zcmMvY3JlYXRpb25hbC9wcm90b3R5cGUvTGluZS50cyIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NyZWF0aW9uYWwvcHJvdG90eXBlL1BvaW50LnRzIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ29mLWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvZi1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nb2YtZGVzaWduLXBhdHRlcm5zLy4vc3JjL2NyZWF0aW9uYWwvcHJvdG90eXBlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm90b3R5cGUgZnJvbSAnLi9Qcm90b3R5cGUnO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vU2hhcGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cCBpbXBsZW1lbnRzIFByb3RvdHlwZSwgU2hhcGUge1xuICBwcml2YXRlIHNoYXBlcyA9IG5ldyBBcnJheTxTaGFwZSB8IFByb3RvdHlwZT4oKTtcblxuICBhZGQoc2hhcGU6IFNoYXBlIHwgUHJvdG90eXBlKTogdGhpcyB7XG4gICAgdGhpcy5zaGFwZXMucHVzaCgoc2hhcGUgYXMgUHJvdG90eXBlKS5jb3B5KCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29weSgpOiB0aGlzIHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgR3JvdXAoKTtcblxuICAgIHRoaXMuc2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XG4gICAgICByZXN1bHQuYWRkKHNoYXBlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQgYXMgdGhpcztcbiAgfVxuXG4gIGRyYXcoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IHRoaXMge1xuICAgIHRoaXMuc2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XG4gICAgICAoc2hhcGUgYXMgU2hhcGUpLmRyYXcoY2FudmFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbW92ZU9mZnNldChkeDogbnVtYmVyLCBkeTogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy5zaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcbiAgICAgIChzaGFwZSBhcyBTaGFwZSkubW92ZU9mZnNldChkeCwgZHkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL1BvaW50JztcbmltcG9ydCBQcm90b3R5cGUgZnJvbSAnLi9Qcm90b3R5cGUnO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vU2hhcGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lIGltcGxlbWVudHMgUHJvdG90eXBlLCBTaGFwZSB7XG4gIHByaXZhdGUgcHQxOiBQb2ludDtcbiAgcHJpdmF0ZSBwdDI6IFBvaW50O1xuXG4gIGNvbnN0cnVjdG9yKHB0MTogUG9pbnQsIHB0MjogUG9pbnQpIHtcbiAgICB0aGlzLnB0MSA9IHB0MS5jb3B5KCk7XG4gICAgdGhpcy5wdDIgPSBwdDIuY29weSgpO1xuICB9XG5cbiAgc2V0UHQxKHB0OiBQb2ludCkge1xuICAgIHRoaXMucHQxID0gcHQuY29weSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0UHQyKHB0OiBQb2ludCkge1xuICAgIHRoaXMucHQyID0gcHQuY29weSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0UHQxKCkge1xuICAgIHJldHVybiB0aGlzLnB0MTtcbiAgfVxuXG4gIGdldFB0MigpIHtcbiAgICByZXR1cm4gdGhpcy5wdDI7XG4gIH1cblxuICBjb3B5KCk6IHRoaXMge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMaW5lKHRoaXMucHQxLCB0aGlzLnB0Mik7XG4gICAgcmV0dXJuIHJlc3VsdCBhcyB0aGlzO1xuICB9XG5cbiAgZHJhdyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogdGhpcyB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5tb3ZlVG8odGhpcy5wdDEuZ2V0WCgpLCB0aGlzLnB0MS5nZXRZKCkpO1xuICAgIGNvbnRleHQubGluZVRvKHRoaXMucHQyLmdldFgoKSwgdGhpcy5wdDIuZ2V0WSgpKTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtb3ZlT2Zmc2V0KGR4OiBudW1iZXIsIGR5OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnB0MS5tb3ZlT2Zmc2V0KGR4LCBkeSk7XG4gICAgdGhpcy5wdDIubW92ZU9mZnNldChkeCwgZHkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgUHJvdG90eXBlIGZyb20gJy4vUHJvdG90eXBlJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL1NoYXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQgaW1wbGVtZW50cyBQcm90b3R5cGUsIFNoYXBlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB4OiBudW1iZXIsIHByaXZhdGUgeTogbnVtYmVyKSB7fVxuXG4gIHNldFgodjogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFkodjogbnVtYmVyKSB7XG4gICAgdGhpcy55ID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFgoKSB7XG4gICAgcmV0dXJuIHRoaXMueDtcbiAgfVxuXG4gIGdldFkoKSB7XG4gICAgcmV0dXJuIHRoaXMueTtcbiAgfVxuXG4gIGNvcHkoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcbiAgICByZXR1cm4gcmVzdWx0IGFzIHRoaXM7XG4gIH1cblxuICBkcmF3KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB0aGlzIHtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmFyYyh0aGlzLngsIHRoaXMueSwgNCwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtb3ZlT2Zmc2V0KGR4OiBudW1iZXIsIGR5OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLnggKz0gZHg7XG4gICAgdGhpcy55ICs9IGR5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHcm91cCBmcm9tICcuL0dyb3VwJztcbmltcG9ydCBMaW5lIGZyb20gJy4vTGluZSc7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9Qb2ludCc7XG5cbi8qKlxuICogUHJvdG90eXBlIO2MqO2EtOydgCDqsJ3ssrTrpbwg7YG0656Y7IqkIOydtOumhOycvOuhnCDsg53shLHtlZjsp4Ag7JWK6rOgIOyLpO2WiSDspJHsl5Ag7IOd7ISx65CcIOqwneyytOulvCDthrXtlbQg64+Z7J287ZWcIOyDge2DnOqwkuycvOuhnCDsg4jroZzsmrQg6rCd7LK066W8IOyDneyEse2VmOuKlCDtjKjthLTsnbTri6QuXG4gKiDsm5Drs7gg6rCd7LK07JeQIOuMgO2VnCDquYrsnYAg67O17IKsKERlZXAgQ29weSnrpbwg7IKs7Jqp7ZWY7JesIOuzgOqyveyXkCDrjIDtlbQg7ISc66GcIOuLpOuluCDsqr3sl5Ag7JiB7Zal7J2EIOyjvOyngCDslYrripTri6QuXG4gKi9cblxuY29uc3QgZG9tQ2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG5cbmNvbnN0IHB0MSA9IG5ldyBQb2ludCgxMDAsIDEwMCk7XG4vLyBwdDEuZHJhdyhkb21DYW52YXMpO1xuXG5jb25zdCBwdDIgPSBuZXcgUG9pbnQoMjAwLCAxMDApO1xuLy8gcHQyLmRyYXcoZG9tQ2FudmFzKTtcblxuY29uc3QgbGluZTEgPSBuZXcgTGluZShwdDEsIHB0Mik7XG4vLyBsaW5lMS5kcmF3KGRvbUNhbnZhcyk7XG5cbmNvbnN0IHB0MyA9IG5ldyBQb2ludCgyMDAsIDIwMCk7XG5jb25zdCBwdDQgPSBuZXcgUG9pbnQoMTAwLCAyMDApO1xuXG5jb25zdCBsaW5lMiA9IG5ldyBMaW5lKHB0MiwgcHQzKTtcbmNvbnN0IGxpbmUzID0gbmV3IExpbmUocHQzLCBwdDQpO1xuY29uc3QgbGluZTQgPSBuZXcgTGluZShwdDQsIHB0MSk7XG5cbmNvbnN0IHJlY3QgPSBuZXcgR3JvdXAoKTtcbnJlY3QuYWRkKGxpbmUxKS5hZGQobGluZTIpLmFkZChsaW5lMykuYWRkKGxpbmU0KTtcbi8vcmVjdC5kcmF3KGRvbUNhbnZhcyk7XG5cbmNvbnN0IGNsb25lUmVjdCA9IHJlY3QuY29weSgpO1xuY2xvbmVSZWN0Lm1vdmVPZmZzZXQoMjAwLCAyMDApO1xuXG5yZWN0Lm1vdmVPZmZzZXQoLTEwMCwgLTEwMCk7XG5cbnJlY3QuZHJhdyhkb21DYW52YXMpO1xuY2xvbmVSZWN0LmRyYXcoZG9tQ2FudmFzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==