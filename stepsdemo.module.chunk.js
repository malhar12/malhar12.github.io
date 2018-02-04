webpackJsonp(["stepsdemo.module"],{

/***/ "../../../../../src/app/components/steps/steps.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Steps */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Steps = (function () {
    function Steps() {
        this.activeIndex = 0;
        this.readonly = true;
        this.activeIndexChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Steps.prototype.itemClick = function (event, item, i) {
        if (this.readonly || item.disabled) {
            event.preventDefault();
            return;
        }
        this.activeIndexChange.emit(i);
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item,
                index: i
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Steps.prototype, "activeIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], Steps.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Steps.prototype, "readonly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Steps.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Steps.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Steps.prototype, "activeIndexChange", void 0);
    Steps = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-steps',
            template: "\n        <div [ngClass]=\"{'ui-steps ui-widget ui-helper-clearfix':true,'ui-steps-readonly':readonly}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ul role=\"tablist\">\n                <li *ngFor=\"let item of model; let i = index\" class=\"ui-steps-item\" #menuitem\n                    [ngClass]=\"{'ui-state-highlight':(i === activeIndex),'ui-state-default':(i !== activeIndex),\n                        'ui-state-disabled':item.disabled||(i !== activeIndex && readonly)}\">\n                    <a *ngIf=\"!item.routerLink\" [href]=\"item.url||'#'\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, item, i)\" [attr.target]=\"item.target\" [attr.id]=\"item.id\">\n                        <span class=\"ui-steps-number\">{{i + 1}}</span>\n                        <span class=\"ui-steps-title\">{{item.label}}</span>\n                    </a>\n                    <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams\" [routerLinkActive]=\"'ui-state-active'\" [routerLinkActiveOptions]=\"item.routerLinkActiveOptions||{exact:false}\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, item, i)\" [attr.target]=\"item.target\" [attr.id]=\"item.id\">\n                        <span class=\"ui-steps-number\">{{i + 1}}</span>\n                        <span class=\"ui-steps-title\">{{item.label}}</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    "
        })
    ], Steps);
    return Steps;
}());

var StepsModule = (function () {
    function StepsModule() {
    }
    StepsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
            exports: [Steps, __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
            declarations: [Steps]
        })
    ], StepsModule);
    return StepsModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/steps/stepsdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepsDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stepsdemo__ = __webpack_require__("../../../../../src/app/showcase/components/steps/stepsdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StepsDemoRoutingModule = (function () {
    function StepsDemoRoutingModule() {
    }
    StepsDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__stepsdemo__["a" /* StepsDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], StepsDemoRoutingModule);
    return StepsDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/steps/stepsdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Steps</span>\r\n        <span>Steps components is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [value]=\"msgs\"></p-growl>\r\n    \r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-steps [model]=\"items\"></p-steps>\r\n    \r\n    <h3>Clickable</h3>\r\n    <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"false\"></p-steps>\r\n    \r\n    <h3>Custom Style</h3>\r\n    <p-steps [model]=\"items\" styleClass=\"steps-custom\"></p-steps>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;StepsModule&#125; from 'primeng/steps';\r\nimport &#123;MenuItem&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n            <h3>MenuModel API</h3>\r\n            <p>Steps uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Steps requires a collection of menuitems as its model.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-steps [model]=\"items\"&gt;&lt;/p-steps&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MenuDemo &#123;\r\n    \r\n    items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;label: 'Step 1'&#125;,\r\n            &#123;label: 'Step 2'&#125;,\r\n            &#123;label: 'Step 3'&#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Readonly</h3>\r\n            <p>Items are readonly by default, if you'd like to make them interactive then disable readonly.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-steps [model]=\"items\" [readonly]=\"false\"&gt;&lt;/p-steps&gt;\r\n</code>\r\n</pre>\r\n       \r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Type</th>\r\n                        <th>Default</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>model</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of menuitems.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>activeIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Index of the active item.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>readonly</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether the items are clickable or not.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>activeIndexChange</td>\r\n                            <td>index: Index of the active step item</td>\r\n                            <td>Callback to invoke when the new step is selected.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-steps</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-steps-item</td>\r\n                            <td>Menuitem element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-steps-number</td>\r\n                            <td>Number of menuitem.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-steps-title</td>\r\n                            <td>Label of menuitem.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/steps\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-steps [model]=\"items\"&gt;&lt;/p-steps&gt;\r\n\r\n&lt;h3&gt;Clickable&lt;/h3&gt;\r\n&lt;p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"false\"&gt;&lt;/p-steps&gt;\r\n\r\n&lt;h3&gt;Custom Style&lt;/h3&gt;\r\n&lt;p-steps [model]=\"items\" styleClass=\"steps-custom\"&gt;&lt;/p-steps&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Component(&#123;\r\n    templateUrl: 'showcase/demo/steps/stepsdemo.html',\r\n    styles: [`\r\n        .ui-steps .ui-steps-item &#123;\r\n            width: 25%;\r\n        &#125;\r\n        \r\n        .ui-steps.steps-custom &#123;\r\n            margin-bottom: 30px;\r\n        &#125;\r\n         \r\n        .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link &#123;\r\n            height: 10px;\r\n            padding: 0 1em;\r\n        &#125;\r\n         \r\n        .ui-steps.steps-custom .ui-steps-item .ui-steps-number &#123;\r\n            background-color: #0081c2;\r\n            color: #FFFFFF;\r\n            display: inline-block;\r\n            width: 36px;\r\n            border-radius: 50%;\r\n            margin-top: -14px;\r\n            margin-bottom: 10px;\r\n        &#125;\r\n        \r\n        .ui-steps.steps-custom .ui-steps-item .ui-steps-title &#123;\r\n            color: #555555;\r\n        &#125;\r\n    `],\r\n    encapsulation: ViewEncapsulation.None\r\n&#125;)\r\nexport class StepsDemo implements OnInit &#123;\r\n\r\n    items: MenuItem[];\r\n    \r\n    msgs: Message[] = [];\r\n    \r\n    activeIndex: number = 1;\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [&#123;\r\n                label: 'Personal',\r\n                command: (event: any) => &#123;\r\n                    this.activeIndex = 0;\r\n                    this.msgs.length = 0;\r\n                    this.msgs.push(&#123;severity:'info', summary:'First Step', detail: event.item.label&#125;);\r\n                &#125;\r\n            &#125;,\r\n            &#123;\r\n                label: 'Seat',\r\n                command: (event: any) => &#123;\r\n                    this.activeIndex = 1;\r\n                    this.msgs.length = 0;\r\n                    this.msgs.push(&#123;severity:'info', summary:'Seat Selection', detail: event.item.label&#125;);\r\n                &#125;\r\n            &#125;,\r\n            &#123;\r\n                label: 'Payment',\r\n                command: (event: any) => &#123;\r\n                    this.activeIndex = 2;\r\n                    this.msgs.length = 0;\r\n                    this.msgs.push(&#123;severity:'info', summary:'Pay with CC', detail: event.item.label&#125;);\r\n                &#125;\r\n            &#125;,\r\n            &#123;\r\n                label: 'Confirmation',\r\n                command: (event: any) => &#123;\r\n                    this.activeIndex = 3;\r\n                    this.msgs.length = 0;\r\n                    this.msgs.push(&#123;severity:'info', summary:'Last Step', detail: event.item.label&#125;);\r\n                &#125;\r\n            &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/steps/stepsdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsDemoModule", function() { return StepsDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stepsdemo__ = __webpack_require__("../../../../../src/app/showcase/components/steps/stepsdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stepsdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/steps/stepsdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_steps_steps__ = __webpack_require__("../../../../../src/app/components/steps/steps.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var StepsDemoModule = (function () {
    function StepsDemoModule() {
    }
    StepsDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__stepsdemo_routing_module__["a" /* StepsDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_steps_steps__["a" /* StepsModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__["a" /* GrowlModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__stepsdemo__["a" /* StepsDemo */]
            ]
        })
    ], StepsDemoModule);
    return StepsDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/steps/stepsdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepsDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StepsDemo = (function () {
    function StepsDemo() {
        this.msgs = [];
        this.activeIndex = 1;
    }
    StepsDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [{
                label: 'Personal',
                command: function (event) {
                    _this.activeIndex = 0;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'First Step', detail: event.item.label });
                }
            },
            {
                label: 'Seat',
                command: function (event) {
                    _this.activeIndex = 1;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
                }
            },
            {
                label: 'Payment',
                command: function (event) {
                    _this.activeIndex = 2;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
                }
            },
            {
                label: 'Confirmation',
                command: function (event) {
                    _this.activeIndex = 3;
                    _this.msgs.length = 0;
                    _this.msgs.push({ severity: 'info', summary: 'Last Step', detail: event.item.label });
                }
            }
        ];
    };
    StepsDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/steps/stepsdemo.html"),
            styles: ["\n        .ui-steps .ui-steps-item {\n            width: 25%;\n        }\n        \n        .ui-steps.steps-custom {\n            margin-bottom: 30px;\n        }\n         \n        .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {\n            height: 10px;\n            padding: 0 1em;\n            overflow: visible;\n        }\n         \n        .ui-steps.steps-custom .ui-steps-item .ui-steps-number {\n            background-color: #0081c2;\n            color: #FFFFFF;\n            display: inline-block;\n            width: 36px;\n            border-radius: 50%;\n            margin-top: -14px;\n            margin-bottom: 10px;\n        }\n        \n        .ui-steps.steps-custom .ui-steps-item .ui-steps-title {\n            color: #555555;\n        }\n    "],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        })
    ], StepsDemo);
    return StepsDemo;
}());



/***/ })

});
//# sourceMappingURL=stepsdemo.module.chunk.js.map