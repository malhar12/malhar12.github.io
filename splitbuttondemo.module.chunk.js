webpackJsonp(["splitbuttondemo.module"],{

/***/ "../../../../../src/app/showcase/components/splitbutton/splitbuttondemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitButtonDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splitbuttondemo__ = __webpack_require__("../../../../../src/app/showcase/components/splitbutton/splitbuttondemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SplitButtonDemoRoutingModule = (function () {
    function SplitButtonDemoRoutingModule() {
    }
    SplitButtonDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__splitbuttondemo__["a" /* SplitButtonDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], SplitButtonDemoRoutingModule);
    return SplitButtonDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/splitbutton/splitbuttondemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">SplitButton</span>\r\n        <span>SplitButton groups a set of commands in an overlay with a default command.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [value]=\"msgs\"></p-growl>\r\n    \r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\"></p-splitButton>\r\n    \r\n    <h3>Severities</h3>\r\n    <p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-secondary\"></p-splitButton>\r\n    <p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-success\"></p-splitButton>\r\n    <p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-info\"></p-splitButton>\r\n    <p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-warning\"></p-splitButton>\r\n    <p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-danger\"></p-splitButton>\r\n    \r\n    <h3>RTL</h3>\r\n    <p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" dir=\"rtl\"></p-splitButton>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n                    <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;SplitButtonModule&#125; from 'primeng/splitbutton';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>SplitButton has a default command button and a collection of menuitems to be displayed in an overlay.</p>\r\n            \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\"&gt;&lt;/p-splitButton&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>MenuModel API</h3>\r\n            <p>SplitButton uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\r\n    \r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>label</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Text of the button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>icon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>iconPos</td>\r\n                            <td>string</td>\r\n                            <td>left</td>\r\n                            <td>Position of the icon, valid values are \"left\" and \"right\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>menuStyle</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the overlay menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>menuStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the overlay menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the component should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tabindex</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Index of the element in tabbing order.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dir</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Indicates the direction of the element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onClick</td>\r\n                            <td>event: browser event<br></td>\r\n                            <td>Callback to invoke when default command button is clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onDropdownClick</td>\r\n                            <td>event: browser event<br></td>\r\n                            <td>Callback to invoke when dropdown button is clicked.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n          <h3>Severity</h3>\r\n          <p>Different color options are available to define severity levels.</p>\r\n\r\n          <ul>\r\n            <li>.ui-button-secondary</li>\r\n            <li>.ui-button-success</li>\r\n            <li>.ui-button-info</li>\r\n            <li>.ui-button-warning</li>\r\n            <li>.ui-button-danger</li>\r\n          </ul>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" [model]=\"items\" styleClass=\"ui-button-warning\"&gt;&lt;/p-splitButton&gt;\r\n</code>\r\n</pre>\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>. SplitButton uses\r\n            button and menu components internally, refer to their documentation for the detailed style list.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-splitbutton</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-splitbutton-button</td>\r\n                            <td>Dropdown button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menu</td>\r\n                            <td>Overlay menu.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/splitbutton\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\"&gt;&lt;/p-splitButton&gt;\r\n\r\n&lt;h3&gt;Severities&lt;/h3&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-secondary\"&gt;&lt;/p-splitButton&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-success\"&gt;&lt;/p-splitButton&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-info\"&gt;&lt;/p-splitButton&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-warning\"&gt;&lt;/p-splitButton&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-danger\"&gt;&lt;/p-splitButton&gt;\r\n\r\n&lt;h3&gt;RTL&lt;/h3&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" dir=\"rtl\"&gt;&lt;/p-splitButton&gt;\r\n</code>\r\n</pre>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class SplitButtonDemo implements OnInit &#123;\r\n\r\n    msgs: Message[] = [];\r\n    \r\n    items: MenuItem[];\r\n    \r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;label: 'Update', icon: 'fa-refresh', command: () => &#123;\r\n                this.update();\r\n            &#125;&#125;,\r\n            &#123;label: 'Delete', icon: 'fa-close', command: () => &#123;\r\n                this.delete();\r\n            &#125;&#125;,\r\n            &#123;label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'&#125;,\r\n            &#123;label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']&#125;\r\n        ];\r\n    &#125;\r\n\r\n    save() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Success', detail:'Data Saved'&#125;);\r\n    &#125;\r\n    \r\n    update() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Success', detail:'Data Updated'&#125;);\r\n    &#125;\r\n    \r\n    delete() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Success', detail:'Data Deleted'&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </ p-tabPanel>\r\n     </p-tabView >\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/splitbutton/splitbuttondemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButtonDemoModule", function() { return SplitButtonDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splitbuttondemo__ = __webpack_require__("../../../../../src/app/showcase/components/splitbutton/splitbuttondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__splitbuttondemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/splitbutton/splitbuttondemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_splitbutton_splitbutton__ = __webpack_require__("../../../../../src/app/components/splitbutton/splitbutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SplitButtonDemoModule = (function () {
    function SplitButtonDemoModule() {
    }
    SplitButtonDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__splitbuttondemo_routing_module__["a" /* SplitButtonDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_splitbutton_splitbutton__["a" /* SplitButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__["a" /* GrowlModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__splitbuttondemo__["a" /* SplitButtonDemo */]
            ]
        })
    ], SplitButtonDemoModule);
    return SplitButtonDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/splitbutton/splitbuttondemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitButtonDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SplitButtonDemo = (function () {
    function SplitButtonDemo() {
        this.msgs = [];
    }
    SplitButtonDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [
            { label: 'Update', icon: 'fa-refresh', command: function () {
                    _this.update();
                } },
            { label: 'Delete', icon: 'fa-close', command: function () {
                    _this.delete();
                } },
            { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
        ];
    };
    SplitButtonDemo.prototype.save = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Saved' });
    };
    SplitButtonDemo.prototype.update = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Updated' });
    };
    SplitButtonDemo.prototype.delete = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Deleted' });
    };
    SplitButtonDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/splitbutton/splitbuttondemo.html")
        })
    ], SplitButtonDemo);
    return SplitButtonDemo;
}());



/***/ })

});
//# sourceMappingURL=splitbuttondemo.module.chunk.js.map