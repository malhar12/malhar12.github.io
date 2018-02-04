webpackJsonp(["codehighlighterdemo.module"],{

/***/ "../../../../../src/app/showcase/components/codehighlighter/codehighlighterdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeHighlighterDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__codehighlighterdemo__ = __webpack_require__("../../../../../src/app/showcase/components/codehighlighter/codehighlighterdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CodeHighlighterDemoRoutingModule = (function () {
    function CodeHighlighterDemoRoutingModule() {
    }
    CodeHighlighterDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__codehighlighterdemo__["a" /* CodeHighlighterDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], CodeHighlighterDemoRoutingModule);
    return CodeHighlighterDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/codehighlighter/codehighlighterdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div class=\"Content100 overHidden TextShadow\">\r\n        <span class=\"fontSize30 TextShadow orange mediumFont marginBottom20 dispBlock\">CodeHighlighter</span>\r\n        <span class=\"defaultText dispTable\">CodeHighlighter is an attribute directive to highlight code blocks using PrismJS</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">CSS</h3>\r\n<pre>\r\n<code class=\"language-css\" pCode ngNonBindable>\r\n.ui-datatable table &#123;\r\n    border-collapse:collapse;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n&#125;\r\n</code>\r\n</pre>\r\n    \r\n    <h3>HTML</h3>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div id=\"pm\" style=\"width:300px\"&gt;\r\n&lt;div&gt;\r\n&lt;div&gt;&lt;a data-icon=\"fa-file-o\"&gt;File&lt;/a&gt;&lt;/div&gt;\r\n&lt;div&gt;\r\n    &lt;ul&gt;\r\n        &lt;li&gt;&lt;a data-icon=\"fa-plus\"&gt;New&lt;/a&gt;\r\n            &lt;ul&gt;\r\n                &lt;li&gt;&lt;a&gt;Project&lt;/a&gt;&lt;/li&gt;\r\n                &lt;li&gt;&lt;a&gt;Other&lt;/a&gt;&lt;/li&gt;\r\n            &lt;/ul&gt;\r\n        &lt;/li&gt;\r\n        &lt;li&gt;&lt;a&gt;Open&lt;/a&gt;&lt;/li&gt;\r\n        &lt;li&gt;&lt;a&gt;Quit&lt;/a&gt;&lt;/li&gt;\r\n    &lt;/ul&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n    \r\n    <h3>Javascript</h3>\r\n<pre>\r\n<code class=\"language-javascript\" pCode ngNonBindable>\r\nvar map;\r\n    function initMap() &#123;\r\n        map = new google.maps.Map(document.getElementById('map'), &#123;\r\n        center: &#123;lat: -34.397, lng: 150.644&#125;,\r\n        zoom: 8\r\n    &#125;);\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n    <h3>Typescript</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Directive, ElementRef, OnInit&#125; from '@angular/core';\r\n\r\ndeclare var Prism: any;\r\n\r\n@Directive(&#123;\r\n    selector: '[pCode]'\r\n&#125;)\r\nexport class CodeHighlighter implements OnInit &#123;\r\n\r\n    constructor(private el: ElementRef) &#123;&#125;\r\n\r\n    ngOnInit() &#123;\r\n        Prism.highlightElement(this.el.nativeElement);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n                    <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;CodeHighlighterModule&#125; from 'primeng/codehighlighter';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>CodeHighlighter is applied to a code element with [pCode] directive. The &lt;code&gt; should have\r\n            a style class having language- prefix to specify the language to highlight. See Prismjs docs for the list of available languages.\r\n            An example block with css code would be as follows.</p>\r\n            \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;pre&gt;\r\n&lt;code class=\"language-css\" pCode&gt;\r\n    .ui-datatable table &#123;\r\n    border-collapse:collapse;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n&#125;\r\n&lt;/code&gt;\r\n&lt;/pre&gt;\r\n</code>\r\n</pre>                        \r\n            <h3>Dependencies</h3>\r\n            <p>Prismjs</p>\r\n        </p-tabPanel>\r\n        \r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/codehighlighter\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n        </p-tabPanel>\r\n     </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/codehighlighter/codehighlighterdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlighterDemoModule", function() { return CodeHighlighterDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__codehighlighterdemo__ = __webpack_require__("../../../../../src/app/showcase/components/codehighlighter/codehighlighterdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__codehighlighterdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/codehighlighter/codehighlighterdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CodeHighlighterDemoModule = (function () {
    function CodeHighlighterDemoModule() {
    }
    CodeHighlighterDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__codehighlighterdemo_routing_module__["a" /* CodeHighlighterDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__codehighlighterdemo__["a" /* CodeHighlighterDemo */]
            ]
        })
    ], CodeHighlighterDemoModule);
    return CodeHighlighterDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/codehighlighter/codehighlighterdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeHighlighterDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CodeHighlighterDemo = (function () {
    function CodeHighlighterDemo() {
    }
    CodeHighlighterDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/codehighlighter/codehighlighterdemo.html")
        })
    ], CodeHighlighterDemo);
    return CodeHighlighterDemo;
}());



/***/ })

});
//# sourceMappingURL=codehighlighterdemo.module.chunk.js.map