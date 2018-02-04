webpackJsonp(["carouseldemo.module"],{

/***/ "../../../../../src/app/showcase/components/carousel/carouseldemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carouseldemo__ = __webpack_require__("../../../../../src/app/showcase/components/carousel/carouseldemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarouselDemoRoutingModule = (function () {
    function CarouselDemoRoutingModule() {
    }
    CarouselDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__carouseldemo__["a" /* CarouselDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], CarouselDemoRoutingModule);
    return CarouselDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/carousel/carouseldemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Carousel</span>\r\n        <span>Carousel displays content using a slide effect featuring responsive mode, swipe support for touch enabled devices and various customization options.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n\r\n    <p-growl [value]=\"msgs\"></p-growl>\r\n\r\n    <p-carousel headerText=\"Cars\" [value]=\"cars\">\r\n        <ng-template let-car pTemplate=\"item\">\r\n            <div class=\"ui-grid ui-grid-responsive\">\r\n                <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-12\"><img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" width=\"60\"></div>\r\n                </div>\r\n                <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-6\">Vin</div>\r\n                    <div class=\"ui-grid-col-6\">{{car.vin}}</div>\r\n                </div>\r\n                <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-6\">Year</div>\r\n                    <div class=\"ui-grid-col-6\">{{car.year}}</div>\r\n                </div>\r\n                <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-6\">Color</div>\r\n                    <div class=\"ui-grid-col-6\">{{car.color}}</div>\r\n                </div>\r\n                <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-12\">\r\n                        <button type=\"button\" pButton icon=\"fa-search\" (click)=\"selectCar(car)\"></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </p-carousel>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;CarouselModule&#125; from 'primeng/carousel';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Carousel requires a collection of items as its value and a ng-template content to display\r\n                where each item can be accessed using the implicit variable.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-carousel [value]=\"items\"&gt;\r\n    &lt;ng-template let-item pTemplate=\"item\"&gt;\r\n        Content to display\r\n    &lt;/ul&gt;\r\n&lt;/p-carousel&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Managing Data</h3>\r\n            <p>DataTable uses setter based checking to realize if the underlying data has changed to update the UI so your data changes such as adding or removing a record \r\n                should always create a new array reference instead of manipulating an existing array. For example, use slice instead of splice when removing an item \r\n                or use spread operator instead of push method when adding an item.</p>\r\n\r\n            <h3>Limiting Visible Items</h3>\r\n            <p>Default number of visible items is 3, use numVisible option to customize this.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-carousel numVisible=\"1\"&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Effects</h3>\r\n            <p>The easing function to use is \"ease-out\" by default and this can be customized using easing property. \r\n                See <a href=\"http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp\">here</a> for possible alternative values.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-carousel easing=\"easeOutStrong\"&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>SlideShow</h3>\r\n            <p>Carousel can display the contents in a slideshow, for this purpose autoPlayInterval and circular attributes are used.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-carousel circular=\"circular\" autoplayInterval=\"3000\"&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Responsive</h3>\r\n            <p>Responsive mode is enabled by default causing carousel to switch between small and large viewport depending on the breakpoint value which is 560 initially.</p>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>value</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>Array of data to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>numVisible</td>\r\n                            <td>number</td>\r\n                            <td>3</td>\r\n                            <td>Number of visible items per page.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>firstVisible</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Index of the first visible item.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>headerText</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Text of the header section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>effectDuration</td>\r\n                            <td>any</td>\r\n                            <td>500</td>\r\n                            <td>Duration of the scrolling animation in milliseconds or a predefined value like \"slow\", \"normal\" and \"fast\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>circular</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines continuous scrolling.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>breakpoint</td>\r\n                            <td>number</td>\r\n                            <td>560</td>\r\n                            <td>Breakpoint value in pixels to switch between small and large viewport.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>responsive</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>When defined, causes carousel to adjust its width based on screen size.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoplayInterval</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Time in milliseconds to have carousel start scrolling automatically.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>easing</td>\r\n                            <td>string</td>\r\n                            <td>ease-out</td>\r\n                            <td>Easing animation to use for scrolling.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>pageLinks</td>\r\n                            <td>number</td>\r\n                            <td>3</td>\r\n                            <td>Number of maximum page links to display. If total page count exceeds this value a dropdown is displayed instead.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onPage</td>\r\n                            <td>event.page: New page index</td>\r\n                            <td>Callback to invoke on page change.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-carousel</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-carousel-header</td>\r\n                            <td>Header element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-carousel-header-title</td>\r\n                            <td>Header text.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-carousel-viewport</td>\r\n                            <td>Viewport containing the items.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-carousel-button</td>\r\n                            <td>Navigator button at header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-carousel-next-button</td>\r\n                            <td>Next page button at header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-carousel-prev-button</td>\r\n                            <td>Previous page button at header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-carousel-page-links</td>\r\n                            <td>Page links container.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-carousel-page-link</td>\r\n                            <td>A page link.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-carousel-mobiledropdown</td>\r\n                            <td>Cancel icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-carousel-item</td>\r\n                            <td>Cancel icon.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/carousel\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;p-carousel headerText=\"Cars\" [value]=\"cars\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-grid ui-grid-responsive\"&gt;\r\n            &lt;div class=\"ui-grid-row\"&gt;\r\n                &lt;div class=\"ui-grid-col-12\"&gt;&lt;img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" width=\"60\"&gt;&lt;/div&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-grid-row\"&gt;\r\n                &lt;div class=\"ui-grid-col-6\"&gt;Vin&lt;/div&gt;\r\n                &lt;div class=\"ui-grid-col-6\"&gt;{{car.vin}}&lt;/div&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-grid-row\"&gt;\r\n                &lt;div class=\"ui-grid-col-6\"&gt;Year&lt;/div&gt;\r\n                &lt;div class=\"ui-grid-col-6\"&gt;{{car.year}}&lt;/div&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-grid-row\"&gt;\r\n                &lt;div class=\"ui-grid-col-6\"&gt;Color&lt;/div&gt;\r\n                &lt;div class=\"ui-grid-col-6\"&gt;{{car.color}}&lt;/div&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-grid-row\"&gt;\r\n                &lt;div class=\"ui-grid-col-12\"&gt;\r\n                    &lt;button type=\"button\" pButton icon=\"fa-search\" (click)=\"selectCar(car)\"&gt;&lt;/button&gt;\r\n                &lt;/div&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-carousel&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class CarouselDemo &#123;\r\n\r\n    cars: Car[];\r\n\r\n    msgs: Message[];\r\n\r\n    constructor() &#123;\r\n        this.msgs = [];\r\n        this.cars = [\r\n            &#123;vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black'&#125;,\r\n            &#123;vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White'&#125;,\r\n            &#123;vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue'&#125;,\r\n            &#123;vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White'&#125;,\r\n            &#123;vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red'&#125;,\r\n            &#123;vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue'&#125;,\r\n            &#123;vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow'&#125;,\r\n            &#123;vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown'&#125;,\r\n            &#123;vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black'&#125;\r\n        ];\r\n    &#125;\r\n\r\n    selectCar(car: Car) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Car Selected', detail: 'Vin:' + car.vin&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/carousel/carouseldemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselDemoModule", function() { return CarouselDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carouseldemo__ = __webpack_require__("../../../../../src/app/showcase/components/carousel/carouseldemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carouseldemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/carousel/carouseldemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_carousel_carousel__ = __webpack_require__("../../../../../src/app/components/carousel/carousel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CarouselDemoModule = (function () {
    function CarouselDemoModule() {
    }
    CarouselDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__carouseldemo_routing_module__["a" /* CarouselDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_carousel_carousel__["a" /* CarouselModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__["a" /* GrowlModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__carouseldemo__["a" /* CarouselDemo */]
            ]
        })
    ], CarouselDemoModule);
    return CarouselDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/carousel/carouseldemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselDemo = (function () {
    function CarouselDemo() {
        this.msgs = [];
        this.cars = [
            { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
            { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
            { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
            { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
            { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red' },
            { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
            { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
            { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
            { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
        ];
    }
    CarouselDemo.prototype.selectCar = function (car) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: 'Vin:' + car.vin });
    };
    CarouselDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/carousel/carouseldemo.html"),
            styles: ["\n        .ui-grid-row {\n            text-align: center;\n        }\n\n        .ui-grid {\n            margin: 10px 0px;\n        }\n\n        .ui-grid-row > div {\n            padding: 4px 10px;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselDemo);
    return CarouselDemo;
}());



/***/ })

});
//# sourceMappingURL=carouseldemo.module.chunk.js.map