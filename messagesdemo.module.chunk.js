webpackJsonp(["messagesdemo.module"],{

/***/ "../../../../../src/app/showcase/components/messages/messagesdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messagesdemo__ = __webpack_require__("../../../../../src/app/showcase/components/messages/messagesdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessagesDemoRoutingModule = (function () {
    function MessagesDemoRoutingModule() {
    }
    MessagesDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__messagesdemo__["a" /* MessagesDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], MessagesDemoRoutingModule);
    return MessagesDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/messages/messagesdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Messages</span>\r\n        <span>Messages is used to display messages inline.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-messages [(value)]=\"msgs\"></p-messages>\r\n\r\n    <h3 class=\"first\">Basic</h3>\r\n    <div>\r\n        <button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" class=\"ui-button-success\"></button>\r\n        <button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" class=\"ui-button-info\"></button>\r\n        <button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"ui-button-warning\"></button>\r\n        <button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"ui-button-danger\"></button>\r\n        <button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\"></button>\r\n        <button type=\"button\" pButton (click)=\"clear()\" icon=\"fa-close\" style=\"float:right\" label=\"Clear\"></button>\r\n    </div>\r\n    \r\n    <h3>Message Service</h3>\r\n    <button type=\"button\" pButton (click)=\"showViaService()\" label=\"Use Service\"></button>\r\n    \r\n    <h3>Inline Message CSS</h3>\r\n    <p>p-message component is used to display inline messages mostly within forms.</p>\r\n    <p-message severity=\"info\" text=\"PrimeNG Rocks\"></p-message>\r\n    <p-message severity=\"success\" text=\"Record Saved\"></p-message>  \r\n    <p-message severity=\"warn\" text=\"Are you sure?\"></p-message>  \r\n    <p-message severity=\"error\" text=\"Field is required\"></p-message>\r\n    \r\n    <div style=\"margin-top:30px\">\r\n        <input type=\"text\" pInputText placeholder=\"Username\" class=\"ng-dirty ng-invalid\">\r\n        <p-message severity=\"error\" text=\"Field is required\"></p-message>\r\n    </div>\r\n    \r\n    <div style=\"margin-top:30px\">\r\n        <input type=\"text\" pInputText placeholder=\"Email\" class=\"ng-dirty ng-invalid\">\r\n        <p-message severity=\"error\"></p-message>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;MessagesModule&#125; from 'primeng/messages';\r\nimport &#123;MessageModule&#125; from 'primeng/message';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>A single message is specified by Message interface in PrimeNG that defines the id, severity, summary and detail as the properties.\r\n                Messages to display can either be defined using the value property which should an array of Message instances or using \r\n                a MessageService are defined using the value property which should an array of Message instances.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-messages [(value)]=\"msgs\"&gt;&lt;/p-messages&gt;\r\n</code>\r\n</pre>\r\n            \r\n            <h3>Message Array</h3>\r\n            <p>A binding to the value property is required to provide messages to the component.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-messages [(value)]=\"msgs\"&gt;&lt;/p-messages&gt;\r\n\r\n&lt;button type=\"button\" (click)=\"show()\"&gt;Show&lt;/button&gt;\r\n&lt;button type=\"button\" (click)=\"clear()\"&gt;Hide&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nshow() &#123;\r\n    this.msgs.push(&#123;severity:'info', summary:'Info Message', detail:'PrimeNG rocks'&#125;);\r\n&#125;\r\n\r\nhide() &#123;\r\n    this.msgs = [];\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Message Service</h3>\r\n            <p>MessageService alternative does not require a value binding to an array.\r\n            In order to use this service, import the class and define it as a provider in a component higher up in the component tree such as application instance itself \r\n            so that descandant components can have it injected.</p>\r\n            \r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;MessageService&#125; from 'primeng/components/common/messageservice';\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Component&#125; from '@angular/core';\r\nimport &#123;Message&#125; from 'primeng/components/common/api';\r\nimport &#123;MessageService&#125; from 'primeng/components/common/messageservice';\r\n\r\n@Component(&#123;\r\n    templateUrl: './messagesdemo.html'\r\n    &#125;)\r\n    export class MessageServiceDemo &#123;\r\n\r\n        constructor(private messageService: MessageService) &#123;&#125;\r\n\r\n        addSingle() &#123;\r\n            this.messageService.add(&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;);\r\n        &#125;\r\n\r\n        addMultiple() &#123;\r\n            this.messageService.addAll([&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;,\r\n                            &#123;severity:'info', summary:'Info Message', detail:'Via MessageService'&#125;]);\r\n        &#125;\r\n        \r\n        clear() &#123;\r\n            this.messageService.clear();\r\n        &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Closable</h3>\r\n            <p>Messages are closable by default resulting in a close icon being displayed on top right corner.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-messages [(value)]=\"msgs\"&gt;&lt;/p-messages&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>In order to disable closable messages, set closable to false. Note that in this case two-way binding is not necessary as the component\r\n            does not need to update its value.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-messages [value]=\"msgs\" [closable]=\"false\"&gt;&lt;/p-messages&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Severities</h3>\r\n            <p>Here are the possible values for the severity of a message.</p>\r\n            <ul>\r\n                <li>success</li>\r\n                <li>info</li>\r\n                <li>warn</li>\r\n                <li>error</li>\r\n            </ul>\r\n            \r\n            <h3>Message Component</h3>\r\n            <p>Message component is useful in cases where messages need to be displayed related to an element such as forms. It has two property, severity and text of the message.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3&gt;Inline Message CSS&lt;/h3&gt;\r\n&lt;p&gt;CSS helpers to display inline messages mostly within forms.&lt;/p&gt;\r\n&lt;p-message severity=\"info\" text=\"PrimeNG Rocks\"&gt;&lt;/p-message&gt;\r\n&lt;p-message severity=\"success\" text=\"Record Saved\"&gt;&lt;/p-message&gt;  \r\n&lt;p-message severity=\"warn\" text=\"Are you sure?\"&gt;&lt;/p-message&gt;  \r\n&lt;p-message severity=\"error\" text=\"Field is required\"&gt;&lt;/p-message&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Type</th>\r\n                        <th>Default</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>value</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of messages to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>closable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Defines if message box can be closed by the click icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-messages</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-messages-info</td>\r\n                            <td>Container element when displaying info messages.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-messages-warn</td>\r\n                            <td>Container element when displaying warning messages.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-messages-error</td>\r\n                            <td>Container element when displaying error messages.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-messages-success</td>\r\n                            <td>Container element when displaying success messages.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-messages-close</td>\r\n                            <td>Close icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-messages-icon</td>\r\n                            <td>Severity icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-messages-summary</td>\r\n                            <td>Summary of a message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-messages-detail</td>\r\n                            <td>Detail of a message.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/messages\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-messages [(value)]=\"msgs\"&gt;&lt;/p-messages&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;div&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" class=\"ui-button-info\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"ui-button-danger\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\"&gt;&lt;/button&gt;\r\n    &lt;button type=\"button\" pButton (click)=\"clear()\" icon=\"fa-close\" style=\"float:right\" label=\"Clear\"&gt;&lt;/button&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;h3&gt;Message Service&lt;/h3&gt;\r\n&lt;button type=\"button\" pButton (click)=\"showViaService()\" label=\"Use Service\"&gt;&lt;/button&gt;\r\n\r\n&lt;h3&gt;Inline Message CSS&lt;/h3&gt;\r\n&lt;p&gt;CSS helpers to display inline messages mostly within forms.&lt;/p&gt;\r\n&lt;p-message severity=\"info\" text=\"PrimeNG Rocks\"&gt;&lt;/p-message&gt;\r\n&lt;p-message severity=\"success\" text=\"Record Saved\"&gt;&lt;/p-message&gt;  \r\n&lt;p-message severity=\"warn\" text=\"Are you sure?\"&gt;&lt;/p-message&gt;  \r\n&lt;p-message severity=\"error\" text=\"Field is required\"&gt;&lt;/p-message&gt;\r\n\r\n&lt;div style=\"margin-top:30px\"&gt;\r\n    &lt;input type=\"text\" pInputText placeholder=\"Username\" class=\"ng-dirty ng-invalid\"&gt;\r\n    &lt;p-message severity=\"error\" text=\"Field is required\"&gt;&lt;/p-message&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;div style=\"margin-top:30px\"&gt;\r\n    &lt;input type=\"text\" pInputText placeholder=\"Email\" class=\"ng-dirty ng-invalid\"&gt;\r\n    &lt;p-message severity=\"error\"&gt;&lt;/p-message&gt;\r\n&lt;/div>\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Component&#125; from '@angular/core';\r\nimport &#123;SelectItem&#125; from 'primeng/components/common/api';\r\nimport &#123;Message&#125; from 'primeng/components/common/api';\r\nimport &#123;MessageService&#125; from 'primeng/components/common/messageservice';\r\n\r\n@Component(&#123;\r\n    templateUrl: './messagesdemo.html',\r\n    providers: [MessageService]\r\n&#125;)\r\nexport class GrowlDemo &#123;\r\n\r\n    msgs: Message[] = [];\r\n    \r\n    constructor(private messageService: MessageService) &#123;&#125;\r\n\r\n    showSuccess() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'success', summary:'Success Message', detail:'Order submitted'&#125;);\r\n    &#125;\r\n\r\n    showInfo() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Info Message', detail:'PrimeNG rocks'&#125;);\r\n    &#125;\r\n\r\n    showWarn() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'&#125;);\r\n    &#125;\r\n\r\n    showError() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'error', summary:'Error Message', detail:'Validation failed'&#125;);\r\n    &#125;\r\n\r\n    showMultiple() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Message 1', detail:'PrimeNG rocks'&#125;);\r\n        this.msgs.push(&#123;severity:'info', summary:'Message 2', detail:'PrimeUI rocks'&#125;);\r\n        this.msgs.push(&#123;severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'&#125;);\r\n    &#125;\r\n    \r\n    showViaService() &#123;\r\n        this.messageService.add(&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;);\r\n    &#125;\r\n\r\n    clear() &#123;\r\n        this.msgs = [];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/messages/messagesdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesDemoModule", function() { return MessagesDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messagesdemo__ = __webpack_require__("../../../../../src/app/showcase/components/messages/messagesdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messagesdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/messages/messagesdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_messages_messages__ = __webpack_require__("../../../../../src/app/components/messages/messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message_message__ = __webpack_require__("../../../../../src/app/components/message/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_inputtext_inputtext__ = __webpack_require__("../../../../../src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MessagesDemoModule = (function () {
    function MessagesDemoModule() {
    }
    MessagesDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__messagesdemo_routing_module__["a" /* MessagesDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_messages_messages__["a" /* MessagesModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_message_message__["a" /* MessageModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_inputtext_inputtext__["a" /* InputTextModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__messagesdemo__["a" /* MessagesDemo */]
            ]
        })
    ], MessagesDemoModule);
    return MessagesDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/messages/messagesdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesDemo; });
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


var MessagesDemo = (function () {
    function MessagesDemo(messageService) {
        this.messageService = messageService;
        this.msgs = [];
    }
    MessagesDemo.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
    };
    MessagesDemo.prototype.showInfo = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    MessagesDemo.prototype.showWarn = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    };
    MessagesDemo.prototype.showError = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    };
    MessagesDemo.prototype.showMultiple = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
    };
    MessagesDemo.prototype.showViaService = function () {
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
    };
    MessagesDemo.prototype.clear = function () {
        this.msgs = [];
    };
    MessagesDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/messages/messagesdemo.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__components_common_messageservice__["a" /* MessageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__components_common_messageservice__["a" /* MessageService */]])
    ], MessagesDemo);
    return MessagesDemo;
}());



/***/ })

});
//# sourceMappingURL=messagesdemo.module.chunk.js.map