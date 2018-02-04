webpackJsonp(["deferdemo.module"],{

/***/ "../../../../../src/app/components/defer/defer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DeferredLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeferModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeferredLoader = (function () {
    function DeferredLoader(el, domHandler, renderer, viewContainer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.viewContainer = viewContainer;
        this.onLoad = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    DeferredLoader.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.shouldLoad()) {
            this.load();
        }
        this.documentScrollListener = this.renderer.listen('window', 'scroll', function () {
            if (_this.shouldLoad()) {
                _this.load();
                _this.documentScrollListener();
                _this.documentScrollListener = null;
            }
        });
    };
    DeferredLoader.prototype.shouldLoad = function () {
        var rect = this.el.nativeElement.getBoundingClientRect();
        var docElement = document.documentElement;
        var scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
        var winHeight = docElement.clientHeight;
        return (winHeight >= rect.top);
    };
    DeferredLoader.prototype.load = function () {
        this.view = this.viewContainer.createEmbeddedView(this.template);
        this.onLoad.emit();
    };
    DeferredLoader.prototype.ngOnDestroy = function () {
        this.view = null;
        if (this.documentScrollListener) {
            this.documentScrollListener();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DeferredLoader.prototype, "onLoad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* TemplateRef */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* TemplateRef */])
    ], DeferredLoader.prototype, "template", void 0);
    DeferredLoader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pDefer]',
            host: {},
            providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */]])
    ], DeferredLoader);
    return DeferredLoader;
}());

var DeferModule = (function () {
    function DeferModule() {
    }
    DeferModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [DeferredLoader],
            declarations: [DeferredLoader]
        })
    ], DeferModule);
    return DeferModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/defer/deferdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeferDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deferdemo__ = __webpack_require__("../../../../../src/app/showcase/components/defer/deferdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeferDemoRoutingModule = (function () {
    function DeferDemoRoutingModule() {
    }
    DeferDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__deferdemo__["a" /* DeferDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], DeferDemoRoutingModule);
    return DeferDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/defer/deferdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Defer</span>\r\n        <span>Defer directive postpones the loading the content that is initially not in viewport until it becomes visible on scroll. Think of\r\n        pDefer as a smart ngIf that lazily loads content when it becomes visible after page scroll. Scroll down to load the DataTable\r\n        which initiates a query that is not executed on initial page load to speed up load performance.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <div style=\"height:800px\">\r\n        DataTable is not loaded, scroll down to initialize it.\r\n    </div>\r\n    \r\n    <p-growl [value]=\"msgs\"></p-growl>\r\n    \r\n    <div pDefer (onLoad)=\"initData()\">\r\n        <ng-template>\r\n            <p-dataTable [value]=\"cars\">\r\n                <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n                <p-column field=\"year\" header=\"Year\"></p-column>\r\n                <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n                <p-column field=\"color\" header=\"Color\"></p-column>\r\n            </p-dataTable>\r\n        </ng-template>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n                    <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;DeferModule&#125; from 'primeng/defer';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Defer is applied to a container element with pDefer directive where content needs to be placed inside an ng-template.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div pDefer&gt;\r\n    &lt;ng-template&gt;\r\n       deferred content\r\n   &lt;/ng-template&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Callback</h3>\r\n            <p>onLoad callback is useful to initialize the content when it becomes visible on scroll such as loading data.</p>\r\n            \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div pDefer (onLoad)=\"initData()\"&gt;\r\n    &lt;ng-template&gt;\r\n        &lt;p-dataTable [value]=\"cars\"&gt;\r\n            &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n        &lt;/p-dataTable&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nthis.cars = //initialize\r\n</code>\r\n</pre>\r\n            \r\n            <h3>Properties</h3>\r\n            <p>Directive has no attributes.</p>\r\n            \r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onLoad</td>\r\n                            <td>-</td>\r\n                            <td>Callback to invoke when deferred content is loaded.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Directive does not apply any styling to host.</p>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n        \r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/defer\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div pDefer (onLoad)=\"initData()\"&gt;\r\n    &lt;ng-template&gt;\r\n        &lt;p-dataTable [value]=\"cars\"&gt;\r\n            &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n        &lt;/p-dataTable&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DeferDemo &#123;\r\n\r\n    cars: Car[];\r\n    \r\n    msgs: Message[] = [];\r\n            \r\n    constructor(private carService: CarService)  &#123;&#125;\r\n    \r\n    initData()  &#123;\r\n        this.msgs = [&#123;severity:'success', summary:'Data Initialized', detail:'Render Completed'&#125;];\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n     &#125;\r\n &#125;\r\n</code>\r\n</pre>\r\n\r\n        </p-tabPanel>\r\n     </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/defer/deferdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferDemoModule", function() { return DeferDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deferdemo__ = __webpack_require__("../../../../../src/app/showcase/components/defer/deferdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deferdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/defer/deferdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_defer_defer__ = __webpack_require__("../../../../../src/app/components/defer/defer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_datatable_datatable__ = __webpack_require__("../../../../../src/app/components/datatable/datatable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DeferDemoModule = (function () {
    function DeferDemoModule() {
    }
    DeferDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__deferdemo_routing_module__["a" /* DeferDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_defer_defer__["a" /* DeferModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__["a" /* GrowlModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_datatable_datatable__["a" /* DataTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__deferdemo__["a" /* DeferDemo */]
            ]
        })
    ], DeferDemoModule);
    return DeferDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/defer/deferdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeferDemo; });
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


var DeferDemo = (function () {
    function DeferDemo(carService) {
        this.carService = carService;
        this.msgs = [];
    }
    DeferDemo.prototype.initData = function () {
        var _this = this;
        this.msgs = [{ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' }];
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    DeferDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/defer/deferdemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], DeferDemo);
    return DeferDemo;
}());



/***/ })

});
//# sourceMappingURL=deferdemo.module.chunk.js.map