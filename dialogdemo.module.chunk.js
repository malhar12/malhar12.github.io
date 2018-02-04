webpackJsonp(["dialogdemo.module"],{

/***/ "../../../../../src/app/showcase/components/dialog/dialogdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogdemo__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/dialogdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DialogDemoRoutingModule = (function () {
    function DialogDemoRoutingModule() {
    }
    DialogDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__dialogdemo__["a" /* DialogDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], DialogDemoRoutingModule);
    return DialogDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/dialogdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Dialog</span>\r\n        <span>Dialog is a container to display content in an overlay window.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-dialog header=\"Godfather I\" [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [width]=\"300\" [minWidth]=\"200\">\r\n        <span>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \r\n           His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \r\n           Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \r\n           kind and benevolent to those who give respect,\r\n           but given to ruthless violence whenever anything stands against the good of the family.</span>\r\n           <p-footer>\r\n               <button type=\"button\" pButton icon=\"fa-check\" (click)=\"display=false\" label=\"Yes\"></button>\r\n               <button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"No\"></button>\r\n           </p-footer>\r\n    </p-dialog>\r\n\r\n    <button type=\"button\" (click)=\"showDialog()\" pButton icon=\"fa-external-link-square\" label=\"Show\"></button>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;DialogModule&#125; from 'primeng/dialog';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Dialog is used as a container and visibility is controlled with visible property.</p>\r\n                    \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dialog header=\"Title\" [(visible)]=\"display\"&gt;\r\n    Content\r\n&lt;/p-dialog&gt;\r\n\r\n&lt;button type=\"text\" (click)=\"showDialog()\" pButton icon=\"fa-external-link-square\" label=\"Show\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ModelComponent &#123;\r\n\r\n    display: boolean = false;\r\n\r\n    showDialog() &#123;\r\n        this.display = true;\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>By default dialog is hidden and enabling the visible property displays the dialog. As visible supports\r\n            two-way binding, hiding the dialog with close button updates the visible state as false.</p>\r\n            \r\n            <h3>Width</h3>\r\n            <p>When the content of the dialog is fluid, dialog width may grow unexpectedly, in this case define a fixed width to the dialog\r\n                or the content.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dialog header=\"Title\" [(visible)]=\"display\" [width]=\"300\"&gt;\r\n    Content\r\n&lt;/p-dialog&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Header and Footer</h3>\r\n            <p>Header and Footer sections are useful to include custom content. Note that Header and Footer components should be imported and defined\r\n            at directives section of your component for this to work.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dialog [(visible)]=\"display\"&gt;\r\n    &lt;p-header&gt;\r\n        Header content here\r\n    &lt;/p-header&gt;\r\n    Content\r\n    &lt;p-footer&gt;\r\n        //buttons\r\n    &lt;/p-footer&gt;\r\n&lt;/p-dialog&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Overlays Inside</h3>\r\n            <p>When dialog includes other components with overlays such as dropdown, the overlay part cannot exceed dialog boundaries due to overflow. In order to solve this, you can \r\n            either append the overlay to the body or allow overflow in dialog.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dialog&gt;\r\n    &lt;p-dropdown appendTo=\"body\"&gt;&lt;/p-dropdown&gt;\r\n&lt;/p-dialog&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dialog [contentStyle]=\"&#123;'overflow':'visible'&#125;\"&gt;\r\n    &lt;p-dropdown&gt;&lt;/p-dropdown&gt;\r\n&lt;/p-dialog&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>RTL Support</h3>\r\n            <p>RTL orientation is enabled by adding \"ui-rtl\" to an ancestor element of dialog in combination with standard dir=\"rtl\" option.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div class=\"ui-rtl\" dir=\"rtl\"&gt;\r\n    &lt;p-dialog [(visible)]=\"display\"&gt;\r\n        &lt;p-header&gt;\r\n            Header content here\r\n        &lt;/p-header&gt;\r\n        Content\r\n        &lt;p-footer&gt;\r\n            Footer content here\r\n        &lt;/p-footer&gt;\r\n    &lt;/p-dialog&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>header</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Title text of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>draggable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Enables dragging to change the position using header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>resizable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Enables resizing of the content.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>minWidth</td>\r\n                            <td>number</td>\r\n                            <td>150</td>\r\n                            <td>Minimum width of a resizable dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>minHeight</td>\r\n                            <td>number</td>\r\n                            <td>150</td>\r\n                            <td>Minimum width of a resizable dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>width</td>\r\n                            <td>int</td>\r\n                            <td>300</td>\r\n                            <td>Width of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>height</td>\r\n                            <td>int</td>\r\n                            <td>auto</td>\r\n                            <td>Height of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>contentStyle</td>\r\n                            <td>object</td>\r\n                            <td>null</td>\r\n                            <td>Style of the content section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>visible</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Specifies the visibility of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>modal</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if background should be blocked when dialog is displayed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>closeOnEscape</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Specifices if pressing escape key should hide the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dismissableMask</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Specifices if clicking the modal background should hide the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rtl</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled dialog is displayed in RTL direction.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>closable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Adds a close icon to the header to hide the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>responsive</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>In responsive mode, dialog adjusts itself to screen width.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>breakpoint</td>\r\n                            <td>number</td>\r\n                            <td>640</td>\r\n                            <td>Maximum screen width to display the dialog with 100% width in responsive mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the dialog, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showHeader</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to show the header or not.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>positionLeft</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Left coordinate value of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>positionTop</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Top coordinate value of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onShow</td>\r\n                            <td>event: Event object</td>\r\n                            <td>Callback to invoke when dialog is shown.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onHide</td>\r\n                            <td>event: Event object</td>\r\n                            <td>Callback to invoke when dialog is hidden.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-dialog</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-titlebar</td>\r\n                            <td>Container of header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-title</td>\r\n                            <td>Header element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-titlebar-icon</td>\r\n                            <td>Icon container inside header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-titlebar-close</td>\r\n                            <td>Close icon element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-content</td>\r\n                            <td>Content element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-footer</td>\r\n                            <td>Footer element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/dialog\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dialog header=\"Godfather I\" [(visible)]=\"display\" modal=\"modal\" width=\"300\" [responsive]=\"true\"&gt;\r\n    &lt;p&gt;The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \r\n       His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \r\n       Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \r\n       kind and benevolent to those who give respect, \r\n       but given to ruthless violence whenever anything stands against the good of the family.&lt;/p&gt;\r\n        &lt;p-footer&gt;\r\n            &lt;button type=\"button\" pButton icon=\"fa-check\" (click)=\"display=false\" label=\"Yes\"&gt;&lt;/button&gt;\r\n            &lt;button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"No\"&gt;&lt;/button&gt;\r\n        &lt;/p-footer&gt;\r\n&lt;/p-dialog&gt;\r\n\r\n&lt;button type=\"button\" (click)=\"showDialog()\" pButton icon=\"fa-external-link-square\" label=\"Show\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DialogDemo &#123;\r\n\r\n    display: boolean = false;\r\n\r\n    showDialog() &#123;\r\n        this.display = true;\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/dialogdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDemoModule", function() { return DialogDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogdemo__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/dialogdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/dialogdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dialog_dialog__ = __webpack_require__("../../../../../src/app/components/dialog/dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DialogDemoModule = (function () {
    function DialogDemoModule() {
    }
    DialogDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__dialogdemo_routing_module__["a" /* DialogDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_dialog_dialog__["a" /* DialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dialogdemo__["a" /* DialogDemo */]
            ]
        })
    ], DialogDemoModule);
    return DialogDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/dialogdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DialogDemo = (function () {
    function DialogDemo() {
        this.display = false;
    }
    DialogDemo.prototype.showDialog = function () {
        this.display = true;
    };
    DialogDemo.prototype.hideDialog = function () {
        this.display = false;
    };
    DialogDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/dialog/dialogdemo.html")
        })
    ], DialogDemo);
    return DialogDemo;
}());



/***/ })

});
//# sourceMappingURL=dialogdemo.module.chunk.js.map