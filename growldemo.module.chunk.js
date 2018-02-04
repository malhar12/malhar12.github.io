webpackJsonp(["growldemo.module"],{

/***/ "../../../../../src/app/showcase/components/growl/growldemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrowlDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__growldemo__ = __webpack_require__("../../../../../src/app/showcase/components/growl/growldemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GrowlDemoRoutingModule = (function () {
    function GrowlDemoRoutingModule() {
    }
    GrowlDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__growldemo__["a" /* GrowlDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], GrowlDemoRoutingModule);
    return GrowlDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/growl/growldemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Growl</span>\r\n        <span>Growl is used to display messages in an overlay.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n    <h3 class=\"first\">Basic</h3>\r\n    <div>\r\n        <button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" class=\"ui-button-success\"></button>\r\n        <button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" class=\"ui-button-info\"></button>\r\n        <button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"ui-button-warning\"></button>\r\n        <button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"ui-button-danger\"></button>\r\n        <button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\"></button>\r\n        <button type=\"button\" pButton (click)=\"clear()\" icon=\"fa-close\" style=\"float:right\" label=\"Clear\"></button>\r\n    </div>\r\n    \r\n    <h3>Message Service</h3>\r\n    <button type=\"button\" pButton (click)=\"showViaService()\" label=\"Add with Service\"></button>\r\n    <button type=\"button\" pButton (click)=\"clearViaService()\" label=\"Clear with Service\"></button>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;GrowlModule&#125; from 'primeng/growl';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>A single message is specified by the Message interface in PrimeNG that defines the id, severity, summary and detail as properties.\r\n            Messages to display on growl can either be defined using the value property which should be an array of Message instances or using \r\n            a MessageService.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [(value)]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Message&#125; from 'primeng/api';\r\n\r\nexport class MyModel &#123;\r\n\r\n    msgs: Message[] = [];\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n            \r\n            <h3>Message Service</h3>\r\n            <p>MessageService allows having one growl in the entire application instead of having separate ones in each component that uses it.\r\n            In order to use this service, import the class and define it as a provider in a component higher up in the component tree such as the application instance itself \r\n            so that descandant components can have it injected.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;MessageService&#125; from 'primeng/components/common/messageservice';\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Component&#125; from '@angular/core';\r\nimport &#123;Message&#125; from 'primeng/components/common/api';\r\nimport &#123;MessageService&#125; from 'primeng/components/common/messageservice';\r\n\r\n@Component(&#123;\r\n    templateUrl: './growldemo.html'\r\n&#125;)\r\nexport class MessageServiceDemo &#123;\r\n    \r\n    constructor(private messageService: MessageService) &#123;&#125;\r\n    \r\n    addSingle() &#123;\r\n        this.messageService.add(&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;);\r\n    &#125;\r\n    \r\n    addMultiple() &#123;\r\n        this.messageService.addAll([&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;,\r\n                                    &#123;severity:'info', summary:'Info Message', detail:'Via MessageService'&#125;]);\r\n    &#125;\r\n    \r\n    clear() &#123;\r\n        this.messageService.clear();\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        \r\n            <h3>Change Detection</h3>\r\n            <p>In case messages are provided via the value property instead of service, growl either uses setter based checking or ngDoCheck to realize if the messages has changed to update the UI. This is configured using the immutable\r\n                property, when enabled (default) setter based detection is utilized so your changes such as adding or removing a record \r\n                should always create a new array reference instead of manipulating an existing array as Angular does not trigger setters if the reference does not change. \r\n                For example, use slice instead of splice when removing an item or use spread operator instead of push method when adding an item. On the other hand, setting immutable property to false removes\r\n                this restriction by using ngDoCheck with IterableDiffers to listen changes without the need to create a new reference of data. Setter based method is faster however\r\n                both methods can be used depending on your preference. Note that immutable property also defines how Growl treats the value, for example\r\n                when immutable is enabled removing a message does not mutate the original value but creates a new array.\r\n            </p>\r\n\r\n            <h3>Severities</h3>\r\n            <p>Here are the possible values for the severity of a message.</p>\r\n            <ul>\r\n                <li>success</li>\r\n                <li>info</li>\r\n                <li>warn</li>\r\n                <li>error</li>\r\n            </ul>\r\n\r\n            <h3>Showing Messages</h3>\r\n            <p>Adding messages to the array is enough to display them via growl. Similary removing a message\r\n            from the array is also removed by growl.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [(value)]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n    \r\n&lt;button type=\"button\" (click)=\"show()\"&gt;Show&lt;/button&gt;\r\n&lt;button type=\"button\" (click)=\"clear()\"&gt;Clear&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nshow() &#123;\r\n    this.msgs.push(&#123;severity:'info', summary:'Info Message', detail:'PrimeNG rocks'&#125;);\r\n&#125;\r\n\r\nclear() &#123;\r\n    this.msgs = [];\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Type</th>\r\n                        <th>Default</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>value</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of messages to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sticky</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When defined, growl messages are not removed automatically after a period defined by life option.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>life</td>\r\n                            <td>number</td>\r\n                            <td>3000</td>\r\n                            <td>Time to display a message in milliseconds before removing it.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>immutable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Defines how the messages data should be manipulated.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onClose</td>\r\n                            <td>message: Removed message</td>\r\n                            <td>Callback to invoke when a message is closed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onClick</td>\r\n                            <td>message: Clicked message</td>\r\n                            <td>Callback to invoke when a message is clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onHover</td>\r\n                            <td>message: Hovered message</td>\r\n                            <td>Callback to invoke when mouse enters a message.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-growl</td>\r\n                            <td>Main container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-growl-container</td>\r\n                            <td>Container of a message item.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-growl-item</td>\r\n                            <td>Message element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-growl-icon-close</td>\r\n                            <td>Close icon of a message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-growl-image</td>\r\n                            <td>Severity icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-growl-message</td>\r\n                            <td>Container of message texts.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-growl-title</td>\r\n                            <td>Summary of the message.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/growl\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [(value)]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;div&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" class=\"ui-button-info\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"ui-button-danger\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"clear()\" icon=\"fa-close\" style=\"float:right\" label=\"Clear\"&gt;&lt;/button&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;h3&gt;Message Service&lt;/h3&gt;\r\n&lt;button type=\"button\" pButton (click)=\"showViaService()\" label=\"Add with Service\"&gt;&lt;/button&gt;\r\n&lt;button type=\"button\" pButton (click)=\"clearViaService()\" label=\"Clear with Service\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Component&#125; from '@angular/core';\r\nimport &#123;SelectItem&#125; from 'primeng/components/common/api';\r\nimport &#123;Message&#125; from 'primeng/components/common/api';\r\nimport &#123;MessageService&#125; from 'primeng/components/common/messageservice';\r\n\r\n@Component(&#123;\r\n    templateUrl: './growldemo.html',\r\n    providers: [MessageService]\r\n&#125;)\r\nexport class GrowlDemo &#123;\r\n\r\n    msgs: Message[] = [];\r\n    \r\n    constructor(private messageService: MessageService) &#123;&#125;\r\n\r\n    showSuccess() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'success', summary:'Success Message', detail:'Order submitted'&#125;);\r\n    &#125;\r\n\r\n    showInfo() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Info Message', detail:'PrimeNG rocks'&#125;);\r\n    &#125;\r\n\r\n    showWarn() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'&#125;);\r\n    &#125;\r\n\r\n    showError() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'error', summary:'Error Message', detail:'Validation failed'&#125;);\r\n    &#125;\r\n\r\n    showMultiple() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Message 1', detail:'PrimeNG rocks'&#125;);\r\n        this.msgs.push(&#123;severity:'info', summary:'Message 2', detail:'PrimeUI rocks'&#125;);\r\n        this.msgs.push(&#123;severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'&#125;);\r\n    &#125;\r\n    \r\n    showViaService() &#123;\r\n        this.messageService.add(&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;);\r\n    &#125;\r\n    \r\n    clearViaService() &#123;\r\n        this.messageService.clear();\r\n    &#125;\r\n\r\n    clear() &#123;\r\n        this.msgs = [];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/growl/growldemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlDemoModule", function() { return GrowlDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__growldemo__ = __webpack_require__("../../../../../src/app/showcase/components/growl/growldemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__growldemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/growl/growldemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var GrowlDemoModule = (function () {
    function GrowlDemoModule() {
    }
    GrowlDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__growldemo_routing_module__["a" /* GrowlDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_growl_growl__["a" /* GrowlModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__growldemo__["a" /* GrowlDemo */]
            ]
        })
    ], GrowlDemoModule);
    return GrowlDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/growl/growldemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrowlDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_messageservice__ = __webpack_require__("../../../../../src/app/components/common/messageservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GrowlDemo = (function () {
    function GrowlDemo(messageService) {
        this.messageService = messageService;
        this.msgs = [];
    }
    GrowlDemo.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
    };
    GrowlDemo.prototype.showInfo = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    GrowlDemo.prototype.showWarn = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    };
    GrowlDemo.prototype.showError = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    };
    GrowlDemo.prototype.showMultiple = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
    };
    GrowlDemo.prototype.showViaService = function () {
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
    };
    GrowlDemo.prototype.clearViaService = function () {
        this.messageService.clear();
    };
    GrowlDemo.prototype.clear = function () {
        this.msgs = [];
    };
    GrowlDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/growl/growldemo.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__components_common_messageservice__["a" /* MessageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__components_common_messageservice__["a" /* MessageService */]])
    ], GrowlDemo);
    return GrowlDemo;
}());



/***/ })

});
//# sourceMappingURL=growldemo.module.chunk.js.map