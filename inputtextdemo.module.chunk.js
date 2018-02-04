webpackJsonp(["inputtextdemo.module"],{

/***/ "../../../../../src/app/showcase/components/inputtext/inputtextdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputTextDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inputtextdemo__ = __webpack_require__("../../../../../src/app/showcase/components/inputtext/inputtextdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputTextDemoRoutingModule = (function () {
    function InputTextDemoRoutingModule() {
    }
    InputTextDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__inputtextdemo__["a" /* InputTextDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], InputTextDemoRoutingModule);
    return InputTextDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/inputtext/inputtextdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Inputtext</span>\r\n        <span>InputText is an extension to standard input element with theming.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"text\"> \r\n    <span id=\"text\">{{text}}</span>\r\n    \r\n    <h3>Float Label</h3>\r\n    <span class=\"ui-float-label\">\r\n        <input id=\"float-input\" type=\"text\" size=\"30\" pInputText> \r\n        <label for=\"float-input\">Username</label>\r\n    </span>\r\n\r\n    <h3>Disabled</h3>\r\n    <input id=\"disabled-input\" type=\"text\" size=\"30\" pInputText [disabled]=\"disabled\" />\r\n\r\n    <button id=\"disabled-btn\" type=\"button\" (click)=\"toggleDisabled()\" pButton label=\"Toggle\"></button>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;InputTextModule&#125; from 'primeng/inputtext';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>InputText is applied to an input field with pInputText directive.</p>\r\n            \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;input type=\"text\" pInputText /&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Model Binding</h3>\r\n            <p>A model can be bound using standard ngModel directive.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;input type=\"text\" pInputText [(ngModel)]=\"property\"/&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Addons</h3>\r\n            <p>Text, icon, buttons and other content can be grouped next to an input by wrapping the addons and input inside\r\n                .ui-inputgroup element. Multiple addons can be used within the same group as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div class=\"ui-inputgroup\"&gt;\r\n    &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;i class=\"fa fa-user\"&gt;&lt;/i&gt;&lt;/span&gt;\r\n    &lt;input type=\"text\" pInputText placeholder=\"Username\"&gt;         \r\n&lt;/div&gt;\r\n\r\n&lt;div class=\"ui-inputgroup\"&gt;\r\n    &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;i class=\"fa fa-credit-card\"&gt;&lt;/i&gt;&lt;/span&gt;  \r\n    &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;i class=\"fa fa-cc-visa\"&gt;&lt;/i&gt;&lt;/span&gt;   \r\n    &lt;input type=\"text\" pInputText placeholder=\"Price\"&gt; \r\n    &lt;span class=\"ui-inputgroup-addon\"&gt;$&lt;/span&gt;  \r\n    &lt;span class=\"ui-inputgroup-addon\"&gt;.00&lt;/span&gt;      \r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Float Label</h3>\r\n            <p>A floating label is implemented by wrapping the input and the label inside a container with .ui-float-label class.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;span class=\"ui-float-label\"&gt;\r\n    &lt;input id=\"float-input\" type=\"text\" size=\"30\" pInputText&gt; \r\n    &lt;label for=\"float-input\"&gt;Username&lt;/label&gt;\r\n&lt;/span&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the element should be disabled.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-inputtext</td>\r\n                            <td>Input element</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputtext\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"text\"&gt; \r\n&lt;span id=\"text\"&gt;&#123;&#123;text&#125;&#125;&lt;/span&gt;\r\n\r\n&lt;h3&gt;Float Label&lt;/h3&gt;\r\n&lt;span class=\"ui-float-label\"&gt;\r\n    &lt;input id=\"float-input\" type=\"text\" size=\"30\" pInputText&gt; \r\n    &lt;label for=\"float-input\"&gt;Username&lt;/label&gt;\r\n&lt;/span&gt;\r\n\r\n&lt;h3&gt;Disabled&lt;/h3&gt;\r\n&lt;input id=\"disabled-input\" type=\"text\" size=\"30\" pInputText [disabled]=\"disabled\" /&gt;\r\n\r\n&lt;button id=\"disabled-btn\" type=\"button\" (click)=\"toggleDisabled()\" pButton label=\"Toggle\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class InputTextDemo &#123;\r\n\r\n    text: string;\r\n\r\n    disabled: boolean = true;\r\n\r\n    toggleDisabled() &#123;\r\n        this.disabled = !this.disabled;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/inputtext/inputtextdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextDemoModule", function() { return InputTextDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputtextdemo__ = __webpack_require__("../../../../../src/app/showcase/components/inputtext/inputtextdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inputtextdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/inputtext/inputtextdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_inputtext_inputtext__ = __webpack_require__("../../../../../src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var InputTextDemoModule = (function () {
    function InputTextDemoModule() {
    }
    InputTextDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__inputtextdemo_routing_module__["a" /* InputTextDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_inputtext_inputtext__["a" /* InputTextModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__inputtextdemo__["a" /* InputTextDemo */]
            ]
        })
    ], InputTextDemoModule);
    return InputTextDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/inputtext/inputtextdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputTextDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InputTextDemo = (function () {
    function InputTextDemo() {
        this.disabled = true;
    }
    InputTextDemo.prototype.toggleDisabled = function () {
        this.disabled = !this.disabled;
    };
    InputTextDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/inputtext/inputtextdemo.html")
        })
    ], InputTextDemo);
    return InputTextDemo;
}());



/***/ })

});
//# sourceMappingURL=inputtextdemo.module.chunk.js.map