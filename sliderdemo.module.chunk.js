webpackJsonp(["sliderdemo.module"],{

/***/ "../../../../../src/app/showcase/components/slider/sliderdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sliderdemo__ = __webpack_require__("../../../../../src/app/showcase/components/slider/sliderdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SliderDemoRoutingModule = (function () {
    function SliderDemoRoutingModule() {
    }
    SliderDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__sliderdemo__["a" /* SliderDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], SliderDemoRoutingModule);
    return SliderDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/slider/sliderdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Slider</span>\r\n        <span>Slider is a component to provide input using dragging of a handle.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic: {{val1}}</h3>\r\n    <p-slider [(ngModel)]=\"val1\" [style]=\"{'width':'200px'}\"></p-slider>\r\n\r\n    <h3>Input: {{val2}}</h3>\r\n    <input type=\"text\" pInputText [(ngModel)]=\"val2\" style=\"width:190px\" readonly/>\r\n    <p-slider [(ngModel)]=\"val2\" [style]=\"{'width':'200px'}\"></p-slider>\r\n\r\n    <h3>Animate: {{val3}}</h3>\r\n    <p-slider [(ngModel)]=\"val3\" [style]=\"{'width':'200px'}\" [animate]=\"true\"></p-slider>\r\n\r\n    <h3>Step: {{val4}}</h3>\r\n    <p-slider [(ngModel)]=\"val4\" [style]=\"{'width':'200px'}\" [step]=\"20\"></p-slider>\r\n\r\n    <h3>Range: {{rangeValues[0] + ' - ' + rangeValues[1]}}</h3>\r\n    <p-slider [(ngModel)]=\"rangeValues\" [style]=\"{'width':'200px'}\" [range]=\"true\"></p-slider>\r\n\r\n    <h3>Vertical: {{val5}}</h3>\r\n    <p-slider [(ngModel)]=\"val5\" [style]=\"{'height':'200px'}\" orientation=\"vertical\"></p-slider>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;SliderModule&#125; from 'primeng/slider';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Two-way binding is defined using the standard ngModel directive.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slider [(ngModel)]=\"val\"&gt;&lt;/p-slider&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    val: number;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Model Driven Forms</h3>\r\n            <p>Slider can be used in a model driven form as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slider formControlName=\"age\"&gt;&lt;/p-slider&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Min-Max</h3>\r\n            <p>Boundaries are specified with min and max attributes.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slider [(ngModel)]=\"val\" [min]=\"0\" [max]=\"100\"&gt;&lt;/p-slider&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Step</h3>\r\n            <p>Step factor is 1 by default and can be customized with step option.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slider [(ngModel)]=\"val\" [step]=\"10\"&gt;&lt;/p-slider&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Range</h3>\r\n            <p>Range slider provides two handles to define two values. In this case, value binding should refer to an array.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slider [(ngModel)]=\"rangeValues\" [range]=\"true\"&gt;&lt;/p-slider&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    rangeValues: number[];\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Orientation</h3>\r\n            <p>Sliders supports two orientations, horizontal is the default and other alternative is vertical.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slider [(ngModel)]=\"val\" orientation=\"vertical\"&gt;&lt;/p-slider&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>animate</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled, displays an animation on click of the slider bar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the element should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>min</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Mininum boundary value.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>max</td>\r\n                            <td>number</td>\r\n                            <td>100</td>\r\n                            <td>Maximum boundary value.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>orientation</td>\r\n                            <td>string</td>\r\n                            <td>horizontal</td>\r\n                            <td>Orientation of the slider, valid values are horizontal and vertical.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>step</td>\r\n                            <td>number</td>\r\n                            <td>1</td>\r\n                            <td>Step factor to increment/decrement the value.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>range</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When speficed, allows two boundary values to be picked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onChange</td>\r\n                            <td>\r\n                                event.originalEvent: Slide event <br />\r\n                                event.value: New value <br />\r\n                                event.values: Values in range mode <br />\r\n                            </td>\r\n                            <td>Callback to invoke on value change via slide.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onSlideEnd</td>\r\n                            <td>\r\n                                event.originalEvent: Mouseup event<br />\r\n                                event.value: New value \r\n                            </td>\r\n                            <td>Callback to invoke when slide stops.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-slider [(ngModel)]=\"val\" (onChange)=\"handleChange($event)\"&gt;&lt;/p-slider&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nhandleChange(e) &#123;\r\n    //e.value is the new value\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-slider</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-slider-handle</td>\r\n                            <td>Handle element</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/slider\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic: {{val1}}&lt;/h3&gt;\r\n&lt;p-slider [(ngModel)]=\"val1\" [style]=\"&#123;'width':'200px'&#125;\"&gt;&lt;/p-slider&gt;\r\n\r\n&lt;h3&gt;Input: {{val2}}&lt;/h3&gt;\r\n&lt;input type=\"text\" pInputText [(ngModel)]=\"val2\" style=\"width:190px\"/&gt;\r\n&lt;p-slider [(ngModel)]=\"val2\" [style]=\"&#123;'width':'200px'&#125;\"&gt;&lt;/p-slider&gt;\r\n\r\n&lt;h3&gt;Animate: {{val3}}&lt;/h3&gt;\r\n&lt;p-slider [(ngModel)]=\"val3\" [style]=\"&#123;'width':'200px'&#125;\" [animate]=\"true\"&gt;&lt;/p-slider&gt;\r\n\r\n&lt;h3&gt;Step: {{val4}}&lt;/h3&gt;\r\n&lt;p-slider [(ngModel)]=\"val4\" [style]=\"&#123;'width':'200px'&#125;\" [step]=\"20\"&gt;&lt;/p-slider&gt;\r\n\r\n&lt;h3&gt;Range: {{rangeValues[0] + ' - ' + rangeValues[1]}}&lt;/h3&gt;\r\n&lt;p-slider [(ngModel)]=\"rangeValues\" [style]=\"&#123;'width':'200px'&#125;\" [range]=\"true\"&gt;&lt;/p-slider&gt;\r\n\r\n&lt;h3&gt;Vertical: {{val5}}&lt;/h3&gt;\r\n&lt;p-slider [(ngModel)]=\"val5\" [style]=\"&#123;'height':'200px'&#125;\" orientation=\"vertical\"&gt;&lt;/p-slider&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class SliderDemo &#123;\r\n\r\n    val1: number;\r\n\r\n    val2: number = 50;\r\n\r\n    val3: number;\r\n\r\n    val4: number;\r\n\r\n    val5: number;\r\n\r\n    rangeValues: number[] = [20,80];\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/slider/sliderdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderDemoModule", function() { return SliderDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sliderdemo__ = __webpack_require__("../../../../../src/app/showcase/components/slider/sliderdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sliderdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/slider/sliderdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_slider_slider__ = __webpack_require__("../../../../../src/app/components/slider/slider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_inputtext_inputtext__ = __webpack_require__("../../../../../src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SliderDemoModule = (function () {
    function SliderDemoModule() {
    }
    SliderDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__sliderdemo_routing_module__["a" /* SliderDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_slider_slider__["a" /* SliderModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_inputtext_inputtext__["a" /* InputTextModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__sliderdemo__["a" /* SliderDemo */]
            ]
        })
    ], SliderDemoModule);
    return SliderDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/slider/sliderdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SliderDemo = (function () {
    function SliderDemo() {
        this.val2 = 50;
        this.rangeValues = [20, 80];
    }
    SliderDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/slider/sliderdemo.html")
        })
    ], SliderDemo);
    return SliderDemo;
}());



/***/ })

});
//# sourceMappingURL=sliderdemo.module.chunk.js.map