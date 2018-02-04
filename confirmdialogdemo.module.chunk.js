webpackJsonp(["confirmdialogdemo.module"],{

/***/ "../../../../../src/app/components/confirmdialog/confirmdialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConfirmDialog */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_shared__ = __webpack_require__("../../../../../src/app/components/common/shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_confirmationservice__ = __webpack_require__("../../../../../src/app/components/common/confirmationservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfirmDialog = (function () {
    function ConfirmDialog(el, domHandler, renderer, confirmationService, zone) {
        var _this = this;
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.confirmationService = confirmationService;
        this.zone = zone;
        this.acceptIcon = 'fa-check';
        this.acceptLabel = 'Yes';
        this.acceptVisible = true;
        this.rejectIcon = 'fa-close';
        this.rejectLabel = 'No';
        this.rejectVisible = true;
        this.closeOnEscape = true;
        this.closable = true;
        this.responsive = true;
        this.subscription = confirmationService.requireConfirmation$.subscribe(function (confirmation) {
            if (confirmation.key === _this.key) {
                _this.confirmation = confirmation;
                _this.message = _this.confirmation.message || _this.message;
                _this.icon = _this.confirmation.icon || _this.icon;
                _this.header = _this.confirmation.header || _this.header;
                _this.rejectVisible = _this.confirmation.rejectVisible == null ? _this.rejectVisible : _this.confirmation.rejectVisible;
                _this.acceptVisible = _this.confirmation.acceptVisible == null ? _this.acceptVisible : _this.confirmation.acceptVisible;
                if (_this.confirmation.accept) {
                    _this.confirmation.acceptEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
                    _this.confirmation.acceptEvent.subscribe(_this.confirmation.accept);
                }
                if (_this.confirmation.reject) {
                    _this.confirmation.rejectEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
                    _this.confirmation.rejectEvent.subscribe(_this.confirmation.reject);
                }
                _this.visible = true;
            }
        });
    }
    Object.defineProperty(ConfirmDialog.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (val) {
            this._visible = val;
            if (this._visible) {
                if (!this.positionInitialized) {
                    this.center();
                    this.positionInitialized = true;
                }
                this.el.nativeElement.children[0].style.zIndex = ++__WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */].zindex;
                this.bindGlobalListeners();
                this.executePostShowActions = true;
            }
            if (this._visible)
                this.enableModality();
            else
                this.disableModality();
        },
        enumerable: true,
        configurable: true
    });
    ConfirmDialog.prototype.ngAfterViewInit = function () {
        this.contentContainer = this.domHandler.findSingle(this.el.nativeElement, '.ui-dialog-content');
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.el.nativeElement);
            else
                this.domHandler.appendChild(this.el.nativeElement, this.appendTo);
        }
    };
    ConfirmDialog.prototype.ngAfterViewChecked = function () {
        if (this.executePostShowActions) {
            this.domHandler.findSingle(this.el.nativeElement.children[0], 'button').focus();
            this.executePostShowActions = false;
        }
    };
    ConfirmDialog.prototype.center = function () {
        var container = this.el.nativeElement.children[0];
        var elementWidth = this.domHandler.getOuterWidth(container);
        var elementHeight = this.domHandler.getOuterHeight(container);
        if (elementWidth == 0 && elementHeight == 0) {
            container.style.visibility = 'hidden';
            container.style.display = 'block';
            elementWidth = this.domHandler.getOuterWidth(container);
            elementHeight = this.domHandler.getOuterHeight(container);
            container.style.display = 'none';
            container.style.visibility = 'visible';
        }
        var viewport = this.domHandler.getViewport();
        var x = (viewport.width - elementWidth) / 2;
        var y = (viewport.height - elementHeight) / 2;
        container.style.left = x + 'px';
        container.style.top = y + 'px';
    };
    ConfirmDialog.prototype.enableModality = function () {
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = this.el.nativeElement.children[0].style.zIndex - 1;
            this.domHandler.addMultipleClasses(this.mask, 'ui-widget-overlay ui-dialog-mask');
            document.body.appendChild(this.mask);
            this.domHandler.addClass(document.body, 'ui-overflow-hidden');
        }
    };
    ConfirmDialog.prototype.disableModality = function () {
        if (this.mask) {
            document.body.removeChild(this.mask);
            this.domHandler.removeClass(document.body, 'ui-overflow-hidden');
            this.mask = null;
        }
    };
    ConfirmDialog.prototype.close = function (event) {
        if (this.confirmation.rejectEvent) {
            this.confirmation.rejectEvent.emit();
        }
        this.hide();
        event.preventDefault();
    };
    ConfirmDialog.prototype.hide = function () {
        this.visible = false;
        this.unbindGlobalListeners();
    };
    ConfirmDialog.prototype.moveOnTop = function () {
        this.el.nativeElement.children[0].style.zIndex = ++__WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */].zindex;
    };
    ConfirmDialog.prototype.bindGlobalListeners = function () {
        var _this = this;
        if (this.closeOnEscape && this.closable && !this.documentEscapeListener) {
            this.documentEscapeListener = this.renderer.listen('document', 'keydown', function (event) {
                if (event.which == 27) {
                    if (_this.el.nativeElement.children[0].style.zIndex == __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */].zindex && _this.visible) {
                        _this.close(event);
                    }
                }
            });
        }
        if (this.responsive) {
            this.zone.runOutsideAngular(function () {
                _this.documentResponsiveListener = _this.center.bind(_this);
                window.addEventListener('resize', _this.documentResponsiveListener);
            });
        }
    };
    ConfirmDialog.prototype.unbindGlobalListeners = function () {
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
        }
        if (this.documentResponsiveListener) {
            window.removeEventListener('resize', this.documentResponsiveListener);
            this.documentResponsiveListener = null;
        }
    };
    ConfirmDialog.prototype.ngOnDestroy = function () {
        this.disableModality();
        if (this.documentResponsiveListener) {
            this.documentResponsiveListener();
        }
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
        }
        if (this.appendTo && this.appendTo === 'body') {
            document.body.removeChild(this.el.nativeElement);
        }
        this.subscription.unsubscribe();
    };
    ConfirmDialog.prototype.accept = function () {
        if (this.confirmation.acceptEvent) {
            this.confirmation.acceptEvent.emit();
        }
        this.hide();
        this.confirmation = null;
    };
    ConfirmDialog.prototype.reject = function () {
        if (this.confirmation.rejectEvent) {
            this.confirmation.rejectEvent.emit();
        }
        this.hide();
        this.confirmation = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "acceptIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "acceptLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "acceptVisible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "rejectIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "rejectLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "rejectVisible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "acceptButtonStyleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "rejectButtonStyleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ConfirmDialog.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ConfirmDialog.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "closeOnEscape", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "rtl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "closable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ConfirmDialog.prototype, "responsive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ConfirmDialog.prototype, "appendTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ConfirmDialog.prototype, "key", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_4__common_shared__["b" /* Footer */]),
        __metadata("design:type", Object)
    ], ConfirmDialog.prototype, "footer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ConfirmDialog.prototype, "visible", null);
    ConfirmDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-confirmDialog',
            template: "\n        <div [ngClass]=\"{'ui-dialog ui-confirmdialog ui-widget ui-widget-content ui-corner-all ui-shadow':true,'ui-dialog-rtl':rtl}\" \n            [style.display]=\"visible ? 'block' : 'none'\" [style.width.px]=\"width\" [style.height.px]=\"height\" (mousedown)=\"moveOnTop()\" [@dialogState]=\"visible ? 'visible' : 'hidden'\">\n            <div class=\"ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top\">\n                <span class=\"ui-dialog-title\" *ngIf=\"header\">{{header}}</span>\n                <a *ngIf=\"closable\" [ngClass]=\"{'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all':true}\" href=\"#\" role=\"button\" (click)=\"close($event)\">\n                    <span class=\"fa fa-fw fa-close\"></span>\n                </a>\n            </div>\n            <div class=\"ui-dialog-content ui-widget-content\">\n                <i [ngClass]=\"'fa'\" [class]=\"icon\" *ngIf=\"icon\"></i>\n                <span class=\"ui-confirmdialog-message\" [innerHTML]=\"message\"></span>\n            </div>\n            <div class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"footer\">\n                <ng-content select=\"p-footer\"></ng-content>\n            </div>\n            <div class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"!footer\">\n                <button type=\"button\" pButton [icon]=\"acceptIcon\" [label]=\"acceptLabel\" (click)=\"accept()\" [class]=\"acceptButtonStyleClass\" *ngIf=\"acceptVisible\"></button>\n                <button type=\"button\" pButton [icon]=\"rejectIcon\" [label]=\"rejectLabel\" (click)=\"reject()\" [class]=\"rejectButtonStyleClass\" *ngIf=\"rejectVisible\"></button>\n            </div>\n        </div>\n    ",
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('dialogState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        opacity: 0
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('visible => hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('hidden => visible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-out'))
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_6__common_confirmationservice__["a" /* ConfirmationService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], ConfirmDialog);
    return ConfirmDialog;
}());

var ConfirmDialogModule = (function () {
    function ConfirmDialogModule() {
    }
    ConfirmDialogModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__button_button__["a" /* ButtonModule */]],
            exports: [ConfirmDialog, __WEBPACK_IMPORTED_MODULE_5__button_button__["a" /* ButtonModule */], __WEBPACK_IMPORTED_MODULE_4__common_shared__["g" /* SharedModule */]],
            declarations: [ConfirmDialog]
        })
    ], ConfirmDialogModule);
    return ConfirmDialogModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmdialogdemo__ = __webpack_require__("../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmDialogDemoRoutingModule = (function () {
    function ConfirmDialogDemoRoutingModule() {
    }
    ConfirmDialogDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__confirmdialogdemo__["a" /* ConfirmDialogDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], ConfirmDialogDemoRoutingModule);
    return ConfirmDialogDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">ConfirmDialog</span>\r\n        <span>ConfirmDialog is backed by a service utilizing Observables to display confirmation windows\r\n            easily that can be shared by multiple actions on the same component.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [value]=\"msgs\"></p-growl>\r\n    \r\n    <p-confirmDialog></p-confirmDialog>\r\n\r\n    <button type=\"button\" (click)=\"confirm1()\" pButton icon=\"fa-check\" label=\"Confirm\"></button>\r\n    \r\n    <button type=\"button\" (click)=\"confirm2()\" pButton icon=\"fa-trash\" label=\"Delete\"></button>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;ConfirmDialogModule&#125; from 'primeng/confirmdialog';\r\nimport &#123;ConfirmationService&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>ConfirmDialog is defined using p-confirmDialog tag and an instance of ConfirmationService is required to display it by \r\n                calling confirm method.</p>\r\n                    \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"&gt;&lt;/p-confirmDialog&gt;\r\n\r\n&lt;button type=\"text\" (click)=\"confirm()\" pButton icon=\"fa-check\" label=\"Confirm\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ConfirmDialogDemo &#123; \r\n           \r\n    constructor(private confirmationService: ConfirmationService) &#123;&#125;\r\n\r\n    confirm() &#123;\r\n        this.confirmationService.confirm(&#123;\r\n            message: 'Are you sure that you want to perform this action?',\r\n            accept: () => &#123;\r\n                //Actual logic to perform a confirmation\r\n            &#125;\r\n        &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Confirm method takes a confirmation instance used to customize the dialog UI along with accept and reject actions.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>message</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Message of the confirmation.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>key</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Optional key to match the key of the confirm dialog, necessary to use when component tree has multiple confirm dialogs.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>header</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Header text of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>icon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Icon to display next to the message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>accept</td>\r\n                            <td>Function</td>\r\n                            <td>null</td>\r\n                            <td>Callback to execute when action is confirmed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>reject</td>\r\n                            <td>Function</td>\r\n                            <td>null</td>\r\n                            <td>Callback to execute when action is rejected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>acceptButtonStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the accept button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rejectButtonStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the reject button.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Customization</h3>\r\n            <p>Properties of the dialog are defined in two ways, message, icon and header properties can either\r\n            be defined using confirm method or declaratively on p-confirmDialog ng-template. If these values are unlikely to change then\r\n            declarative approach would be useful, still properties defined in a ng-template can be overriden with confirm method call.</p>\r\n            \r\n            <p>In addition, buttons at footer section can be customized by passing your own UI, important note to make confirmation work with\r\n            a custom UI is defining a local ng-template variable for the dialog and assign accept()-reject() methods to your own buttons.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\" #cd&gt;\r\n    &lt;p-footer&gt;\r\n        &lt;button type=\"button\" pButton icon=\"fa-close\" label=\"No\" (click)=\"cd.reject()\"&gt;&lt;/button&gt;\r\n        &lt;button type=\"button\" pButton icon=\"fa-check\" label=\"Yes\" (click)=\"cd.accept()\"&gt;&lt;/button&gt;\r\n    &lt;/p-footer&gt;\r\n&lt;/p-confirmDialog&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                         <tr>\r\n                            <td>header</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Title text of the dialog.</td>\r\n                         </tr>\r\n                         <tr>\r\n                           <td>message</td>\r\n                           <td>string</td>\r\n                           <td>null</td>\r\n                           <td>Message of the confirmation.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>key</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>icon</td>\r\n                          <td>string</td>\r\n                          <td>null</td>\r\n                          <td>Icon to display next to message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>acceptLabel</td>\r\n                          <td>string</td>\r\n                          <td>Yes</td>\r\n                          <td>Label of the accept button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>acceptIcon</td>\r\n                          <td>string</td>\r\n                          <td>fa-check</td>\r\n                          <td>Icon of the accept button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>acceptVisible</td>\r\n                          <td>boolean</td>\r\n                          <td>true</td>\r\n                          <td>Visibility of the accept button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>rejectLabel</td>\r\n                          <td>string</td>\r\n                          <td>No</td>\r\n                          <td>Label of the reject button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>rejectIcon</td>\r\n                          <td>string</td>\r\n                          <td>fa-close</td>\r\n                          <td>Icon of the reject button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>rejectVisible</td>\r\n                          <td>boolean</td>\r\n                          <td>true</td>\r\n                          <td>Visibility of the reject button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>width</td>\r\n                            <td>int</td>\r\n                            <td>300</td>\r\n                            <td>Width of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>height</td>\r\n                            <td>int</td>\r\n                            <td>auto</td>\r\n                            <td>Height of the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>closeOnEscape</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Specifices if pressing escape key should hide the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rtl</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled dialog is displayed in RTL direction.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>closable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Adds a close icon to the header to hide the dialog.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>responsive</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>In responsive mode, dialog adjusts itself to screen width.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the dialog, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-dialog</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-confirmdialog</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-titlebar</td>\r\n                            <td>Container of header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-title</td>\r\n                            <td>Header element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-titlebar-icon</td>\r\n                            <td>Icon container inside header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-titlebar-close</td>\r\n                            <td>Close icon element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-dialog-content</td>\r\n                            <td>Content element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>ConfirmationService</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/confirmdialog\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n    \r\n&lt;p-confirmDialog&gt;&lt;/p-confirmDialog&gt;\r\n\r\n&lt;button type=\"button\" (click)=\"confirm1()\" pButton icon=\"fa-check\" label=\"Confirm\"&gt;&lt;/button&gt;\r\n\r\n&lt;button type=\"button\" (click)=\"confirm2()\" pButton icon=\"fa-trash\" label=\"Delete\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Component(&#123;\r\n    templateUrl: 'showcase/demo/confirmdialog/confirmdialogdemo.html',\r\n    providers: [ConfirmationService]\r\n&#125;)\r\nexport class ConfirmDialogDemo &#123;\r\n    \r\n    msgs: Message[] = [];\r\n    \r\n    constructor(private confirmationService: ConfirmationService) &#123;&#125;\r\n\r\n    confirm1() &#123;\r\n        this.confirmationService.confirm(&#123;\r\n            message: 'Are you sure that you want to proceed?',\r\n            header: 'Confirmation',\r\n            icon: 'fa fa-question-circle',\r\n            accept: () => &#123;\r\n                this.msgs = [&#123;severity:'info', summary:'Confirmed', detail:'You have accepted'&#125;];\r\n            &#125;,\r\n            reject: () => &#123;\r\n                this.msgs = [&#123;severity:'info', summary:'Rejected', detail:'You have rejected'&#125;];\r\n            &#125;\r\n        &#125;);\r\n    &#125;\r\n\r\n    confirm2() &#123;\r\n        this.confirmationService.confirm(&#123;\r\n            message: 'Do you want to delete this record?',\r\n            header: 'Delete Confirmation',\r\n            icon: 'fa fa-trash',\r\n            accept: () => &#123;\r\n                this.msgs = [&#123;severity:'info', summary:'Confirmed', detail:'Record deleted'&#125;];\r\n            &#125;,\r\n            reject: () => &#123;\r\n                this.msgs = [&#123;severity:'info', summary:'Rejected', detail:'You have rejected'&#125;];\r\n            &#125;\r\n        &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogDemoModule", function() { return ConfirmDialogDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmdialogdemo__ = __webpack_require__("../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmdialogdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_confirmdialog_confirmdialog__ = __webpack_require__("../../../../../src/app/components/confirmdialog/confirmdialog.ts");
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









var ConfirmDialogDemoModule = (function () {
    function ConfirmDialogDemoModule() {
    }
    ConfirmDialogDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__confirmdialogdemo_routing_module__["a" /* ConfirmDialogDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_confirmdialog_confirmdialog__["a" /* ConfirmDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__["a" /* GrowlModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirmdialogdemo__["a" /* ConfirmDialogDemo */]
            ]
        })
    ], ConfirmDialogDemoModule);
    return ConfirmDialogDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_api__ = __webpack_require__("../../../../../src/app/components/common/api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialogDemo = (function () {
    function ConfirmDialogDemo(confirmationService) {
        this.confirmationService = confirmationService;
        this.msgs = [];
    }
    ConfirmDialogDemo.prototype.confirm1 = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'fa-question-circle',
            accept: function () {
                _this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
            },
            reject: function () {
                _this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    };
    ConfirmDialogDemo.prototype.confirm2 = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa-trash',
            accept: function () {
                _this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
            },
            reject: function () {
                _this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    };
    ConfirmDialogDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/confirmdialog/confirmdialogdemo.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__components_common_api__["a" /* ConfirmationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__components_common_api__["a" /* ConfirmationService */]])
    ], ConfirmDialogDemo);
    return ConfirmDialogDemo;
}());



/***/ })

});
//# sourceMappingURL=confirmdialogdemo.module.chunk.js.map