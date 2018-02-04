webpackJsonp(["paneldemo.module"],{

/***/ "../../../../../src/app/showcase/components/panel/paneldemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paneldemo__ = __webpack_require__("../../../../../src/app/showcase/components/panel/paneldemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PanelDemoRoutingModule = (function () {
    function PanelDemoRoutingModule() {
    }
    PanelDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__paneldemo__["a" /* PanelDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], PanelDemoRoutingModule);
    return PanelDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/panel/paneldemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Panel</span>\r\n        <span>Panel is a grouping component providing with content toggle feature.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [value]=\"msgs\"></p-growl>\r\n\r\n    <p-panel header=\"Godfather I\" [toggleable]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\r\n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\r\n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\r\n        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n    </p-panel>\r\n\r\n    <p-panel>\r\n        <p-header>\r\n            <div class=\"ui-helper-clearfix\">\r\n                <span class=\"ui-panel-title\" style=\"display:inline-block;margin-top:.4em\">Custom Header</span>\r\n\r\n                <p-splitButton [style]=\"{'float':'right'}\" label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\"></p-splitButton>\r\n            </div>\r\n        </p-header>\r\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\r\n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\r\n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\r\n        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n        <p-footer>\r\n            <button pButton type=\"button\" icon=\"fa-plus\" label=\"New\" class=\"ui-button-info\"></button>\r\n            <button pButton type=\"button\" icon=\"fa-list\" label=\"View\" class=\"ui-button-success\"></button>\r\n        </p-footer>\r\n    </p-panel>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;PanelModule&#125; from 'primeng/panel';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Panel is defined with p-panel element.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-panel header=\"Title\"&gt;\r\n    Content\r\n&lt;/p-panel&gt;\r\n</code>\r\n</pre>\r\n            <h3>Toggleable</h3>\r\n            <p>Content of the panel can be expanded and collapsed using toggleable option, default state is defined with collapsed option.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-panel header=\"Title\" [toggleable]=\"true\"&gt;\r\n    Content\r\n&lt;/p-panel&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Header and Footer Content</h3>\r\n            <p>Header and Footers sections can be customized using p-header and p-footer components.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-panel &gt;\r\n    &lt;p-header&gt;\r\n        Header content here\r\n    &lt;/p-header&gt;\r\n    Body Content\r\n    &lt;p-footer&gt;\r\n        Footer content here\r\n    &lt;/p-footer&gt;\r\n&lt;/p-panel&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>header</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Header text of the panel.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>toggleable</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if content of panel can be expanded and collapsed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>collapsed</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines the initial state of panel content, supports one or two-way binding as well.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>expandIcon</td>\r\n                            <td>string</td>\r\n                            <td>fa-plus</td>\r\n                            <td>Expand icon of the toggle button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>collapseIcon</td>\r\n                            <td>string</td>\r\n                            <td>fa-minus</td>\r\n                            <td>Collapsed icon of the toggle button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>showHeader</td>\r\n                          <td>boolean</td>\r\n                          <td>true</td>\r\n                          <td>Specifies if header of panel cannot be displayed.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onBeforeToggle</td>\r\n                            <td>event.originalEvent: browser event<br>\r\n                                event.collapsed: state as a boolean</td>\r\n                            <td>Callback to invoke before content toggle.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onAfterToggle</td>\r\n                            <td>event.originalEvent: browser event<br>\r\n                                event.collapsed: state as a boolean</td>\r\n                            <td>Callback to invoke after content toggle.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-panel</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-panel-titlebar</td>\r\n                            <td>Header section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-panel-title</td>\r\n                            <td>Title text of panel.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-panel-titlebar-toggler</td>\r\n                            <td>Toggle icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-panel-content</td>\r\n                            <td>Content of panel.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n        <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/panel\" class=\"btn-viewsource\" target=\"_blank\">\r\n            <i class=\"fa fa-github\"></i>\r\n            <span>View on GitHub</span>\r\n        </a>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;p-panel header=\"Godfather I\" [toggleable]=\"true\" [style]=\"&#123;'margin-bottom':'20px'&#125;\"&gt;\r\n    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\r\n    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\r\n    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\r\n    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n&lt;/p-panel&gt;\r\n\r\n&lt;p-panel&gt;\r\n    &lt;p-header&gt;\r\n        &lt;div class=\"ui-helper-clearfix\"&gt;\r\n            &lt;span class=\"ui-panel-title\" style=\"font-size:16px;display:inline-block;margin-top:2px\"&gt;Custom Header&lt;/span&gt;\r\n\r\n            &lt;p-splitButton [style]=\"&#123;'float':'right'&#125;\" label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\"&gt;&lt;/p-splitButton&gt;\r\n        &lt;/div&gt;\r\n    &lt;/p-header&gt;\r\n    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\r\n    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\r\n    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\r\n    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n    &lt;p-footer&gt;\r\n        &lt;button pButton type=\"button\" icon=\"fa-plus\" label=\"New\" class=\"ui-button-info\"&gt;&lt;/button&gt;\r\n        &lt;button pButton type=\"button\" icon=\"fa-list\" label=\"View\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n    &lt;/p-footer&gt;\r\n&lt;/p-panel&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/panel/paneldemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelDemoModule", function() { return PanelDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paneldemo__ = __webpack_require__("../../../../../src/app/showcase/components/panel/paneldemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paneldemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/panel/paneldemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_panel_panel__ = __webpack_require__("../../../../../src/app/components/panel/panel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_splitbutton_splitbutton__ = __webpack_require__("../../../../../src/app/components/splitbutton/splitbutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PanelDemoModule = (function () {
    function PanelDemoModule() {
    }
    PanelDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__paneldemo_routing_module__["a" /* PanelDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_panel_panel__["a" /* PanelModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__["a" /* GrowlModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_splitbutton_splitbutton__["a" /* SplitButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paneldemo__["a" /* PanelDemo */]
            ]
        })
    ], PanelDemoModule);
    return PanelDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/panel/paneldemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PanelDemo = (function () {
    function PanelDemo() {
        this.msgs = [];
    }
    PanelDemo.prototype.ngOnInit = function () {
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
    PanelDemo.prototype.save = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Saved' });
    };
    PanelDemo.prototype.update = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Updated' });
    };
    PanelDemo.prototype.delete = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Deleted' });
    };
    PanelDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/panel/paneldemo.html")
        })
    ], PanelDemo);
    return PanelDemo;
}());



/***/ })

});
//# sourceMappingURL=paneldemo.module.chunk.js.map