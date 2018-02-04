webpackJsonp(["inplacedemo.module"],{

/***/ "../../../../../src/app/components/inplace/inplace.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InplaceDisplay */
/* unused harmony export InplaceContent */
/* unused harmony export Inplace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InplaceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InplaceDisplay = (function () {
    function InplaceDisplay() {
    }
    InplaceDisplay = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-inplaceDisplay',
            template: '<ng-content></ng-content>'
        })
    ], InplaceDisplay);
    return InplaceDisplay;
}());

var InplaceContent = (function () {
    function InplaceContent() {
    }
    InplaceContent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-inplaceContent',
            template: '<ng-content></ng-content>'
        })
    ], InplaceContent);
    return InplaceContent;
}());

var Inplace = (function () {
    function Inplace() {
        this.onActivate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onDeactivate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Inplace.prototype.activate = function (event) {
        if (!this.disabled) {
            this.active = true;
            this.onActivate.emit(event);
        }
    };
    Inplace.prototype.deactivate = function (event) {
        if (!this.disabled) {
            this.active = false;
            this.hover = false;
            this.onDeactivate.emit(event);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Inplace.prototype, "active", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Inplace.prototype, "closable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Inplace.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Inplace.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Inplace.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Inplace.prototype, "onActivate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Inplace.prototype, "onDeactivate", void 0);
    Inplace = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-inplace',
            template: "\n        <div [ngClass]=\"'ui-inplace ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-inplace-display\" (click)=\"activate($event)\"\n                [ngClass]=\"{'ui-state-disabled':disabled}\" *ngIf=\"!active\">\n                <ng-content select=\"[pInplaceDisplay]\"></ng-content>\n            </div>\n            <div class=\"ui-inplace-content\" *ngIf=\"active\">\n                <ng-content select=\"[pInplaceContent]\"></ng-content>\n                <button type=\"button\" icon=\"fa-close\" pButton (click)=\"deactivate($event)\" *ngIf=\"closable\"></button>\n            </div>\n        </div>\n    "
        })
    ], Inplace);
    return Inplace;
}());

var InplaceModule = (function () {
    function InplaceModule() {
    }
    InplaceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__button_button__["a" /* ButtonModule */]],
            exports: [Inplace, InplaceDisplay, InplaceContent, __WEBPACK_IMPORTED_MODULE_2__button_button__["a" /* ButtonModule */]],
            declarations: [Inplace, InplaceDisplay, InplaceContent]
        })
    ], InplaceModule);
    return InplaceModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/inplace/inplacedemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InplaceDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inplacedemo__ = __webpack_require__("../../../../../src/app/showcase/components/inplace/inplacedemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InplaceDemoRoutingModule = (function () {
    function InplaceDemoRoutingModule() {
    }
    InplaceDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__inplacedemo__["a" /* InplaceDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], InplaceDemoRoutingModule);
    return InplaceDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/inplace/inplacedemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Inplace</span>\r\n        <span>Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-inplace closable=\"closable\" [style]=\"{'min-height':'30px'}\">\r\n        <span pInplaceDisplay>\r\n            Click to Edit\r\n        </span>\r\n        <span pInplaceContent>\r\n            <input type=\"text\" value=\"PrimeNG\" pInputText>\r\n        </span>\r\n    </p-inplace>\r\n    \r\n    <h3>Image</h3>\r\n    <p-inplace>\r\n        <span pInplaceDisplay>\r\n            <span class=\"fa fa-picture-o\"></span><span style=\"margin-left:8px\">View Picture</span>\r\n        </span>\r\n        <span pInplaceContent>\r\n            <img src=\"assets/showcase/images/demo/galleria/galleria5.jpg\" alt=\"Nature\">\r\n        </span>\r\n    </p-inplace>\r\n    \r\n    <h3>Data</h3>\r\n    <p-inplace>\r\n        <span pInplaceDisplay>\r\n            <span class=\"fa fa-table\"></span><span style=\"margin-left:8px\">View Data</span>\r\n        </span>\r\n        <span pInplaceContent>\r\n            <p-dataTable [value]=\"cars\">\r\n                <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n                <p-column field=\"year\" header=\"Year\"></p-column>\r\n                <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n                <p-column field=\"color\" header=\"Color\"></p-column>\r\n            </p-dataTable>\r\n        </span>\r\n    </p-inplace>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;InplaceModule&#125; from 'primeng/inplace';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Inplace requires two child components having <i>pInplaceDisplay</i> and <i>pInplaceOutput</i> attributes respectively to define.</p>\r\n            \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-inplace&gt;\r\n    &lt;span pInplaceDisplay&gt;\r\n        Click to Edit\r\n    &lt;/span&gt;\r\n    &lt;span pInplaceContent&gt;\r\n        &lt;input type=\"text\" value=\"PrimeNG\" pInputText&gt;\r\n    &lt;/span&gt;\r\n&lt;/p-inplace&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>active</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether the content is displayed or not.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the element should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>closable</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Displays a button to switch back to display mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onActivate</td>\r\n                            <td>event.originalEvent: Click event</td>\r\n                            <td>Activates the content.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onDeactivate</td>\r\n                            <td>event.originalEvent: Click event</td>\r\n                            <td>Deactivates the content.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-inplace</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-inplace-display</td>\r\n                            <td>Display container</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-inplace-content</td>\r\n                            <td>Content container</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n        \r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inplace\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-inplace closable=\"closable\"&gt;\r\n    &lt;span pInplaceDisplay&gt;\r\n        Click to Edit\r\n    &lt;/span&gt;\r\n    &lt;span pInplaceContent&gt;\r\n        &lt;input type=\"text\" value=\"PrimeNG\" pInputText&gt;\r\n    &lt;/span&gt;\r\n&lt;/p-inplace&gt;\r\n\r\n&lt;h3&gt;Image&lt;/h3&gt;\r\n&lt;p-inplace&gt;\r\n    &lt;span pInplaceDisplay&gt;\r\n        &lt;span class=\"fa fa-picture-o\"&gt;&lt;/span&gt;&lt;span style=\"margin-left:8px\"&gt;View Picture&lt;/span&gt;\r\n    &lt;/span&gt;\r\n    &lt;span pInplaceContent&gt;\r\n        &lt;img src=\"assets/showcase/images/demo/galleria/galleria5.jpg\" alt=\"Nature\"&gt;\r\n    &lt;/span&gt;\r\n&lt;/p-inplace&gt;\r\n\r\n&lt;h3&gt;Data&lt;/h3&gt;\r\n&lt;p-inplace&gt;\r\n    &lt;span pInplaceDisplay&gt;\r\n        &lt;span class=\"fa fa-table\"&gt;&lt;/span&gt;&lt;span style=\"margin-left:8px\"&gt;View Data&lt;/span&gt;\r\n    &lt;/span&gt;\r\n    &lt;span pInplaceContent&gt;\r\n        &lt;p-dataTable [value]=\"cars\"&gt;\r\n            &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n        &lt;/p-dataTable&gt;\r\n    &lt;/span&gt;\r\n&lt;/p-inplace&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/inplace/inplacedemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InplaceDemoModule", function() { return InplaceDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inplacedemo__ = __webpack_require__("../../../../../src/app/showcase/components/inplace/inplacedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inplacedemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/inplace/inplacedemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_inplace_inplace__ = __webpack_require__("../../../../../src/app/components/inplace/inplace.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_inputtext_inputtext__ = __webpack_require__("../../../../../src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_datatable_datatable__ = __webpack_require__("../../../../../src/app/components/datatable/datatable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var InplaceDemoModule = (function () {
    function InplaceDemoModule() {
    }
    InplaceDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__inplacedemo_routing_module__["a" /* InplaceDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_inplace_inplace__["a" /* InplaceModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_inputtext_inputtext__["a" /* InputTextModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_datatable_datatable__["a" /* DataTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inplacedemo__["a" /* InplaceDemo */]
            ]
        })
    ], InplaceDemoModule);
    return InplaceDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/inplace/inplacedemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InplaceDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__("../../../../../src/app/showcase/service/carservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InplaceDemo = (function () {
    function InplaceDemo(carService) {
        this.carService = carService;
    }
    InplaceDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    InplaceDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/inplace/inplacedemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], InplaceDemo);
    return InplaceDemo;
}());



/***/ })

});
//# sourceMappingURL=inplacedemo.module.chunk.js.map