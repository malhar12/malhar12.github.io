webpackJsonp(["buttondemo.module"],{

/***/ "../../../../../src/app/showcase/components/button/buttondemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttondemo__ = __webpack_require__("../../../../../src/app/showcase/components/button/buttondemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ButtonDemoRoutingModule = (function () {
    function ButtonDemoRoutingModule() {
    }
    ButtonDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__buttondemo__["a" /* ButtonDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], ButtonDemoRoutingModule);
    return ButtonDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/button/buttondemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Button</span>\r\n        <span>Button is an extension to standard input element with icons and theming.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3>Button Component</h3>\r\n    <p-button (onClick)=\"count()\" label=\"Click\"></p-button>\r\n    \r\n    <p-button (onClick)=\"count()\" icon=\"fa fa-fw fa-check\" label=\"Click\"></p-button>\r\n    \r\n    <p-button (onClick)=\"count()\" icon=\"fa fa-fw fa-check\" iconPos=\"right\" label=\"Click\"></p-button>\r\n    \r\n    <p-button (onClick)=\"count()\" icon=\"fa fa-fw fa-close\"></p-button>\r\n    \r\n    <p-button (onClick)=\"count()\" icon=\"fa fa-fw fa-check\" [disabled]=\"true\" label=\"Disabled\"></p-button>\r\n\r\n    <h3>Button Directive</h3>\r\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Click\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" label=\"Click\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" iconPos=\"right\" label=\"Click\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" icon=\"fa-close\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" [disabled]=\"true\" label=\"Disabled\"></button>\r\n\r\n    <h3>Severity Buttons</h3>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Primary\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Secondary\" class=\"ui-button-secondary\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Success\" class=\"ui-button-success\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Info\"  class=\"ui-button-info\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Warning\"  class=\"ui-button-warning\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Danger\"  class=\"ui-button-danger\"></button>\r\n\r\n    <br /><br />\r\n    Number of clicks: {{clicks}}\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n                    <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;ButtonModule&#125; from 'primeng/button';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Button is either applies as a component using p-button element or a directive using pButton attribute. Directive enhances an existing button whereas \r\n                p-button is an element on its own.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;button pButton type=\"button\" label=\"Click\" &gt;&lt;/button&gt;\r\n&lt;p-button label=\"Click\" &gt;&lt;/p-button&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Events</h3>\r\n            <p>Events are defined using standard notation in pButton and with on* prefix at p-button.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;button pButton type=\"button\" label=\"Click\" (click)=\"handleClick($event)\"&gt;&lt;/button&gt;\r\n&lt;p-button label=\"Click\" (onClick)=\"handleClick($event)\"&gt;&lt;/p-button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class Model &#123;\r\n\r\n    handleClick() &#123;\r\n        //execute action\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Icons</h3>\r\n            <p>Icon on a button is specified with icon attribute and position is customized using iconPos attribute. Default\r\n            icon position is left. To display only an icon, leave label as undefined.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;button pButton type=\"button\" icon=\"fa-check\" iconPos=\"left\"&gt;&lt;/button&gt;\r\n&lt;p-button label=\"Click\" icon=\"fa-check\" iconPos=\"left\"&gt;&lt;/p-button&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Severity</h3>\r\n            <p>Different color options are available to define severity levels.</p>\r\n\r\n            <ul>\r\n                <li>.ui-button-secondary</li>\r\n                <li>.ui-button-success</li>\r\n                <li>.ui-button-info</li>\r\n                <li>.ui-button-warning</li>\r\n                <li>.ui-button-danger</li>\r\n            </ul>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;button pButton type=\"button\" class=\"ui-button-info\"&gt;&lt;/button&gt;\r\n&lt;p-button label=\"Click\" styleClass=\"ui-button-info\"&gt;&lt;/p-button&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties of pButton</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>label</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Text of the button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>icon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>iconPos</td>\r\n                            <td>string</td>\r\n                            <td>left</td>\r\n                            <td>Position of the icon, valid values are \"left\" and \"right\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>cornerStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>ui-corner-all</td>\r\n                            <td>Defines the cornering of the button, valid replacements are top, left, right and button such as ui-corner-top.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Properties of p-button</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>type</td>\r\n                            <td>string</td>\r\n                            <td>button</td>\r\n                            <td>Type of the button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>label</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Text of the button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>icon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>iconPos</td>\r\n                            <td>string</td>\r\n                            <td>left</td>\r\n                            <td>Position of the icon, valid values are \"left\" and \"right\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the component should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onClick</td>\r\n                            <td>event</td>\r\n                            <td>null</td>\r\n                            <td>Callback to execute when button is clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onFocus</td>\r\n                            <td>event</td>\r\n                            <td>null</td>\r\n                            <td>Callback to execute when button is focused.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onBlur</td>\r\n                            <td>event</td>\r\n                            <td>null</td>\r\n                            <td>Callback to execute when button loses focus.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-button</td>\r\n                            <td>Button element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-button-icon</td>\r\n                            <td>Icon element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-button-text</td>\r\n                            <td>Label element of the button</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/button\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3&gt;Button Component&lt;/h3&gt;\r\n&lt;p-button (onClick)=\"count()\" label=\"Click\"&gt;&lt;/p-button&gt;\r\n\r\n&lt;p-button (onClick)=\"count()\" icon=\"fa fa-fw fa-check\" label=\"Click\"&gt;&lt;/p-button&gt;\r\n\r\n&lt;p-button (onClick)=\"count()\" icon=\"fa fa-fw fa-check\" iconPos=\"right\" label=\"Click\"&gt;&lt;/p-button&gt;\r\n\r\n&lt;p-button (onClick)=\"count()\" icon=\"fa fa-fw fa-close\"&gt;&lt;/p-button&gt;\r\n\r\n&lt;p-button (onClick)=\"count()\" icon=\"fa fa-fw fa-check\" [disabled]=\"true\" label=\"Disabled\"&gt;&lt;/p-button&gt;\r\n\r\n&lt;h3&gt;Button Directive&lt;/h3&gt;\r\n&lt;button pButton type=\"button\" (click)=\"count()\" label=\"Click\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" label=\"Click\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" iconPos=\"right\" label=\"Click\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" icon=\"fa-close\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" [disabled]=\"true\" label=\"Disabled\"&gt;&lt;/button&gt;\r\n\r\n&lt;h3&gt;Severity Buttons&lt;/h3&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" label=\"Primary\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" label=\"Secondary\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" label=\"Success\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" label=\"Info\"  class=\"ui-button-info\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" label=\"Warning\"  class=\"ui-button-warning\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" label=\"Danger\"  class=\"ui-button-danger\"&gt;&lt;/button&gt;\r\n\r\nNumber of clicks: {{clicks}}\r\n</code>\r\n</pre>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ButtonDemo &#123;\r\n\r\n    clicks: number = 0;\r\n\r\n    count() &#123;\r\n        this.clicks++;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </ p-tabPanel>\r\n     </p-tabView >\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/button/buttondemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDemoModule", function() { return ButtonDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttondemo__ = __webpack_require__("../../../../../src/app/showcase/components/button/buttondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttondemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/button/buttondemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ButtonDemoModule = (function () {
    function ButtonDemoModule() {
    }
    ButtonDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__buttondemo_routing_module__["a" /* ButtonDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buttondemo__["a" /* ButtonDemo */]
            ]
        })
    ], ButtonDemoModule);
    return ButtonDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/button/buttondemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonDemo = (function () {
    function ButtonDemo() {
        this.clicks = 0;
    }
    ButtonDemo.prototype.count = function () {
        this.clicks++;
    };
    ButtonDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/button/buttondemo.html")
        })
    ], ButtonDemo);
    return ButtonDemo;
}());



/***/ })

});
//# sourceMappingURL=buttondemo.module.chunk.js.map