webpackJsonp(["editordemo.module"],{

/***/ "../../../../../src/app/components/editor/editor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EDITOR_VALUE_ACCESSOR */
/* unused harmony export Editor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_shared__ = __webpack_require__("../../../../../src/app/components/common/shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EDITOR_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* forwardRef */])(function () { return Editor; }),
    multi: true
};
var Editor = (function () {
    function Editor(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.onTextChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onSelectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Editor.prototype.ngAfterViewInit = function () {
        var _this = this;
        var editorElement = this.domHandler.findSingle(this.el.nativeElement, 'div.ui-editor-content');
        var toolbarElement = this.domHandler.findSingle(this.el.nativeElement, 'div.ui-editor-toolbar');
        this.quill = new Quill(editorElement, {
            modules: {
                toolbar: toolbarElement
            },
            placeholder: this.placeholder,
            readOnly: this.readonly,
            theme: 'snow',
            formats: this.formats
        });
        if (this.value) {
            this.quill.pasteHTML(this.value);
        }
        this.quill.on('text-change', function (delta, oldContents, source) {
            if (source === 'user') {
                var html = editorElement.children[0].innerHTML;
                var text = _this.quill.getText();
                if (html == '<p><br></p>') {
                    html = null;
                }
                _this.onTextChange.emit({
                    htmlValue: html,
                    textValue: text,
                    delta: delta,
                    source: source
                });
                _this.onModelChange(html);
                _this.onModelTouched();
            }
        });
        this.quill.on('selection-change', function (range, oldRange, source) {
            _this.onSelectionChange.emit({
                range: range,
                oldRange: oldRange,
                source: source
            });
        });
        this.onInit.emit({
            editor: this.quill
        });
    };
    Editor.prototype.writeValue = function (value) {
        this.value = value;
        if (this.quill) {
            if (value)
                this.quill.pasteHTML(value);
            else
                this.quill.setText('');
        }
    };
    Editor.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Editor.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Editor.prototype.getQuill = function () {
        return this.quill;
    };
    Object.defineProperty(Editor.prototype, "readonly", {
        get: function () {
            return this._readonly;
        },
        set: function (val) {
            this._readonly = val;
            if (this.quill) {
                if (this._readonly)
                    this.quill.disable();
                else
                    this.quill.enable();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Editor.prototype, "onTextChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Editor.prototype, "onSelectionChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_2__common_shared__["d" /* Header */]),
        __metadata("design:type", Object)
    ], Editor.prototype, "toolbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Editor.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Editor.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Editor.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], Editor.prototype, "formats", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Editor.prototype, "onInit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Editor.prototype, "readonly", null);
    Editor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-editor',
            template: "\n        <div [ngClass]=\"'ui-widget ui-editor-container ui-corner-all'\" [class]=\"styleClass\">\n            <div class=\"ui-editor-toolbar ui-widget-header ui-corner-top\" *ngIf=\"toolbar\">\n                <ng-content select=\"p-header\"></ng-content>\n            </div>\n            <div class=\"ui-editor-toolbar ui-widget-header ui-corner-top\" *ngIf=\"!toolbar\">\n                <span class=\"ql-formats\">\n                    <select class=\"ql-header\">\n                      <option value=\"1\">Heading</option>\n                      <option value=\"2\">Subheading</option>\n                      <option selected>Normal</option>\n                    </select>\n                    <select class=\"ql-font\">\n                      <option selected>Sans Serif</option>\n                      <option value=\"serif\">Serif</option>\n                      <option value=\"monospace\">Monospace</option>\n                    </select>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-bold\" aria-label=\"Bold\"></button>\n                    <button class=\"ql-italic\" aria-label=\"Italic\"></button>\n                    <button class=\"ql-underline\" aria-label=\"Underline\"></button>\n                </span>\n                <span class=\"ql-formats\">\n                    <select class=\"ql-color\"></select>\n                    <select class=\"ql-background\"></select>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-list\" value=\"ordered\" aria-label=\"Ordered List\"></button>\n                    <button class=\"ql-list\" value=\"bullet\" aria-label=\"Unordered List\"></button>\n                    <select class=\"ql-align\">\n                        <option selected></option>\n                        <option value=\"center\"></option>\n                        <option value=\"right\"></option>\n                        <option value=\"justify\"></option>\n                    </select>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-link\" aria-label=\"Insert Link\"></button>\n                    <button class=\"ql-image\" aria-label=\"Insert Image\"></button>\n                    <button class=\"ql-code-block\" aria-label=\"Insert Code Block\"></button>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-clean\" aria-label=\"Remove Styles\"></button>\n                </span>\n            </div>\n            <div class=\"ui-editor-content\" [ngStyle]=\"style\"></div>\n        </div>\n    ",
            providers: [__WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */], EDITOR_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */]])
    ], Editor);
    return Editor;
}());

var EditorModule = (function () {
    function EditorModule() {
    }
    EditorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [Editor, __WEBPACK_IMPORTED_MODULE_2__common_shared__["g" /* SharedModule */]],
            declarations: [Editor]
        })
    ], EditorModule);
    return EditorModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/editor/editordemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editordemo__ = __webpack_require__("../../../../../src/app/showcase/components/editor/editordemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditorDemoRoutingModule = (function () {
    function EditorDemoRoutingModule() {
    }
    EditorDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__editordemo__["a" /* EditorDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], EditorDemoRoutingModule);
    return EditorDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/editor/editordemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Editor</span>\r\n        <span>Editor is rich text editor component based on Quill.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Default</h3>\r\n    <p-editor [(ngModel)]=\"text1\" [style]=\"{'height':'320px'}\"></p-editor>\r\n    <p>Value: {{text1||'empty'}}</p>\r\n    \r\n    <button pButton type=\"button\" label=\"Clear\" icon=\"fa-close\" (click)=\"text1=null\"></button>\r\n    \r\n    <hr style=\"border-top:0px;border-color:#dde3e6\">\r\n    \r\n    <h3>Custom Toolbar</h3>\r\n    <p-editor [(ngModel)]=\"text2\" [style]=\"{'height':'320px'}\">\r\n        <p-header>\r\n            <span class=\"ql-formats\">\r\n                <button class=\"ql-bold\" aria-label=\"Bold\"></button>\r\n                <button class=\"ql-italic\" aria-label=\"Italic\"></button>\r\n                <button class=\"ql-underline\" aria-label=\"Underline\"></button>\r\n            </span>\r\n        </p-header>\r\n    </p-editor>\r\n    <p>Value: {{text2||'empty'}}</p>\r\n    \r\n    <button pButton type=\"button\" label=\"Clear\" icon=\"fa-close\" (click)=\"text2=null\"></button>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;EditorModule&#125; from 'primeng/editor';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Two-way value binding is defined with ngModel.</p>\r\n            \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-editor [(ngModel)]=\"text\" [style]=\"&#123;'height':'320px'&#125;\"&gt;&lt;/p-editor&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class EditorDemo &#123;\r\n    \r\n    text: string;\r\n        \r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Model Driven Forms</h3>\r\n            <p>Editor can be used in a model driven form as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-editor formControlName=\"description\" [style]=\"&#123;'height':'320px'&#125;\"&gt;&lt;/p-editor&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Toolbar</h3>\r\n            <p>Editor provides a default toolbar with common options, to customize it define your elements inside the header element. Refer to <a href=\"http://quilljs.com/docs/modules/toolbar/\">Quill documentation</a> for available controls.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-editor [(ngModel)]=\"text2\" [style]=\"&#123;'height':'320px'&#125;\"&gt;\r\n    &lt;p-header&gt;\r\n        &lt;span class=\"ql-format-group\"&gt;\r\n            &lt;span title=\"Bold\" class=\"ql-format-button ql-bold\"&gt;&lt;/span&gt;\r\n            &lt;span class=\"ql-format-separator\"&gt;&lt;/span&gt;\r\n            &lt;span title=\"Italic\" class=\"ql-format-button ql-italic\"&gt;&lt;/span&gt;\r\n            &lt;span class=\"ql-format-separator\"&gt;&lt;/span&gt;\r\n            &lt;span title=\"Underline\" class=\"ql-format-button ql-underline\"&gt;&lt;/span&gt;\r\n            &lt;span class=\"ql-format-separator\"&gt;&lt;/span&gt;\r\n            &lt;span title=\"Strikethrough\" class=\"ql-format-button ql-strike\"&gt;&lt;/span&gt;\r\n        &lt;/span&gt;\r\n    &lt;/p-header&gt;\r\n&lt;/p-editor&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the container.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the container.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>placeholder</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Placeholder text to show when editor is empty.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>readonly</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether to instantiate the editor to read-only mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>formats</td>\r\n                            <td>string[]</td>\r\n                            <td>null</td>\r\n                            <td>Whitelist of formats to display, see <a href=\"http://quilljs.com/docs/formats/\">here</a> for available options.</td>\r\n                        </tr>\r\n                        \r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onTextChange</td>\r\n                            <td>event.delta: Representation of the change.<br>\r\n                                event.source: Source of change. Will be either \"user\" or \"api\".<br>\r\n                                event.htmlValue: Current value as html.<br>\r\n                                event.textValue: Current value as text.<br></td>\r\n                            <td>Callback to invoke when the text of the editor is changed by the user.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onSelectionChange</td>\r\n                            <td>event.range: Object with index and length keys indicating where the selection exists.<br>\r\n                                event.oldRange: Object with index and length keys indicating where the previous selection was..<br>\r\n                                event.source: Source of change. Will be either \"user\" or \"api\".</td>\r\n                            <td>Callback to invoke when selected text of editor changes.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onInit</td>\r\n                            <td>event.editor: Quill editor instance.<br>\r\n                                event.oldRange: Object with index and length keys indicating where the previous selection was..<br>\r\n                                event.source: Source of change. Will be either \"user\" or \"api\".</td>\r\n                            <td>Callback to invoke after editor is initialized.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <p>Refer to <a href=\"http://beta.quilljs.com/docs/api/#events\">Quill documentation</a> for more information.</p>\r\n\r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>getQuill</td>\r\n                            <td>-</td>\r\n                            <td>Returns the underlying quill instance.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-editor-container</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-editor-toolbar</td>\r\n                            <td>Toolbar of the editor</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-editor-content</td>\r\n                            <td>Editable area</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p><a href=\"http://quilljs.com\">Quill</a> Editor 1.0.</p>\r\n            <p>Resources of quill needs to be added to your application. Example setup with CLI is as follows;</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\nnpm install quill --save\r\n</code>\r\n</pre>\r\n            <p>Add Quill to scripts in angular-cli.json</p>  \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n\"scripts\": [... \"../node_modules/quill/dist/quill.js\"],\r\n</code>\r\n</pre>\r\n            <p>Add Quill css to styles in angular-cli.json</p>  \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n\"styles\": [ ... \"../node_modules/quill/dist/quill.core.css\", \"../node_modules/quill/dist/quill.snow.css\"],\r\n</code> \r\n</pre>        \r\n\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/editor\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\r\n&lt;p-editor [(ngModel)]=\"text1\" [style]=\"&#123;'height':'320px'&#125;\"&gt;&lt;/p-editor&gt;\r\n&lt;p&gt;Value: &#123;&#123;text1||'empty'&#125;&#125;&lt;/p&gt;\r\n\r\n&lt;button pButton type=\"button\" label=\"Clear\" icon=\"fa-close\" (click)=\"text1=null\"&gt;&lt;/button&gt;\r\n\r\n&lt;hr style=\"border-top:0px;border-color:#dde3e6\"&gt;\r\n\r\n&lt;h3&gt;Custom Toolbar&lt;/h3&gt;\r\n&lt;p-editor [(ngModel)]=\"text2\" [style]=\"&#123;'height':'320px'&#125;\"&gt;\r\n    &lt;p-header&gt;\r\n        &lt;span class=\"ql-formats\"&gt;\r\n            &lt;button class=\"ql-bold\" aria-label=\"Bold\"&gt;&lt;/button&gt;\r\n            &lt;button class=\"ql-italic\" aria-label=\"Italic\"&gt;&lt;/button&gt;\r\n            &lt;button class=\"ql-underline\" aria-label=\"Underline\"&gt;&lt;/button&gt;\r\n        &lt;/span&gt;\r\n    &lt;/p-header&gt;\r\n&lt;/p-editor&gt;\r\n&lt;p&gt;Value: &#123;&#123;text2||'empty'&#125;&#125;&lt;/p&gt;\r\n\r\n&lt;button pButton type=\"button\" label=\"Clear\" icon=\"fa-close\" (click)=\"text2=null\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Component&#125; from '@angular/core';\r\n\r\n@Component(&#123;\r\n    templateUrl: './editordemo.html'\r\n&#125;)\r\nexport class EditorDemo &#123;\r\n\r\n    text1: string = '&lt;div&gt;Hello World!&lt;/div&gt;&lt;div&gt;PrimeNG &lt;b&gt;Editor&lt;/b&gt; Rocks&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;';\r\n    \r\n    text2: string;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/editor/editordemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorDemoModule", function() { return EditorDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editordemo__ = __webpack_require__("../../../../../src/app/showcase/components/editor/editordemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editordemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/editor/editordemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_editor_editor__ = __webpack_require__("../../../../../src/app/components/editor/editor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var EditorDemoModule = (function () {
    function EditorDemoModule() {
    }
    EditorDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__editordemo_routing_module__["a" /* EditorDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_editor_editor__["a" /* EditorModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__editordemo__["a" /* EditorDemo */]
            ]
        })
    ], EditorDemoModule);
    return EditorDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/editor/editordemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EditorDemo = (function () {
    function EditorDemo() {
        this.text1 = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';
    }
    EditorDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/editor/editordemo.html")
        })
    ], EditorDemo);
    return EditorDemo;
}());



/***/ })

});
//# sourceMappingURL=editordemo.module.chunk.js.map