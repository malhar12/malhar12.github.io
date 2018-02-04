webpackJsonp(["overlaypaneldemo.module"],{

/***/ "../../../../../src/app/components/overlaypanel/overlaypanel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OverlayPanel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayPanelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OverlayPanel = (function () {
    function OverlayPanel(el, domHandler, renderer, cd) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.cd = cd;
        this.dismissable = true;
        this.onBeforeShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onAfterShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onBeforeHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onAfterHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.visible = false;
    }
    OverlayPanel.prototype.ngAfterViewInit = function () {
        this.container = this.el.nativeElement.children[0];
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                this.domHandler.appendChild(this.container, this.appendTo);
        }
    };
    OverlayPanel.prototype.ngAfterViewChecked = function () {
        if (this.willShow) {
            this.domHandler.absolutePosition(this.container, this.target);
            this.bindDocumentClickListener();
            this.onAfterShow.emit(null);
            this.willShow = false;
        }
        if (this.willHide) {
            this.onAfterHide.emit(null);
            this.willHide = false;
        }
    };
    OverlayPanel.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener && this.dismissable) {
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
                if (!_this.selfClick && !_this.targetClickEvent) {
                    _this.hide();
                }
                _this.selfClick = false;
                _this.targetClickEvent = false;
                _this.cd.markForCheck();
            });
        }
    };
    OverlayPanel.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    OverlayPanel.prototype.toggle = function (event, target) {
        if (!this.target || this.target === (target || event.currentTarget || event.target)) {
            if (this.visible)
                this.hide();
            else
                this.show(event, target);
        }
        else {
            this.show(event, target);
        }
    };
    OverlayPanel.prototype.show = function (event, target) {
        this.onBeforeShow.emit(null);
        this.target = target || event.currentTarget || event.target;
        this.container.style.zIndex = ++__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */].zindex;
        this.visible = true;
        this.willShow = true;
        if (event.type === 'click') {
            this.targetClickEvent = true;
        }
    };
    OverlayPanel.prototype.hide = function () {
        if (this.visible) {
            this.onBeforeHide.emit(null);
            this.willHide = true;
            this.visible = false;
            this.selfClick = false;
            this.targetClickEvent = false;
            this.unbindDocumentClickListener();
        }
    };
    OverlayPanel.prototype.onPanelClick = function (event) {
        if (this.closeClick) {
            this.hide();
            this.closeClick = false;
        }
        else if (this.dismissable) {
            this.selfClick = true;
        }
    };
    OverlayPanel.prototype.onCloseClick = function (event) {
        this.closeClick = true;
        event.preventDefault();
    };
    OverlayPanel.prototype.ngOnDestroy = function () {
        this.unbindDocumentClickListener();
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
        this.target = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], OverlayPanel.prototype, "dismissable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], OverlayPanel.prototype, "showCloseIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], OverlayPanel.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], OverlayPanel.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], OverlayPanel.prototype, "appendTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], OverlayPanel.prototype, "onBeforeShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], OverlayPanel.prototype, "onAfterShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], OverlayPanel.prototype, "onBeforeHide", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], OverlayPanel.prototype, "onAfterHide", void 0);
    OverlayPanel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-overlayPanel',
            template: "\n        <div [ngClass]=\"'ui-overlaypanel ui-widget ui-widget-content ui-corner-all ui-shadow'\" [ngStyle]=\"style\" [class]=\"styleClass\"\n            [style.display]=\"visible ? 'block' : 'none'\" (click)=\"onPanelClick($event)\" [@panelState]=\"visible ? 'visible' : 'hidden'\">\n            <div class=\"ui-overlaypanel-content\">\n                <ng-content></ng-content>\n            </div>\n            <a href=\"#\" *ngIf=\"showCloseIcon\" class=\"ui-overlaypanel-close ui-state-default\" (click)=\"onCloseClick($event)\">\n                <span class=\"fa fa-fw fa-close\"></span>\n            </a>\n        </div>\n    ",
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* trigger */])('panelState', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                        opacity: 0
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('visible => hidden', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('400ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('hidden => visible', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('400ms ease-out'))
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], OverlayPanel);
    return OverlayPanel;
}());

var OverlayPanelModule = (function () {
    function OverlayPanelModule() {
    }
    OverlayPanelModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [OverlayPanel],
            declarations: [OverlayPanel]
        })
    ], OverlayPanelModule);
    return OverlayPanelModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/overlaypanel/overlaypaneldemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayPanelDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlaypaneldemo__ = __webpack_require__("../../../../../src/app/showcase/components/overlaypanel/overlaypaneldemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OverlayPanelDemoRoutingModule = (function () {
    function OverlayPanelDemoRoutingModule() {
    }
    OverlayPanelDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__overlaypaneldemo__["a" /* OverlayPanelDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], OverlayPanelDemoRoutingModule);
    return OverlayPanelDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/overlaypanel/overlaypaneldemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">OverlayPanel</span>\r\n        <span>OverlayPanel is a container component that can overlay other components on page.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p>Click the button to show the panel.</p>\r\n    <button type=\"text\" pButton label=\"Basic\" (click)=\"op1.toggle($event)\"></button>\r\n\r\n    <p-overlayPanel #op1>\r\n        <img src=\"assets/showcase/images/demo/galleria/galleria1.jpg\" alt=\"Galleria 1\" />\r\n    </p-overlayPanel>\r\n    \r\n    <h3>Customized</h3>\r\n    <p>This OverlayPanel gets displayed on hover of the icon, is not dismissable and displays a close icon.</p>\r\n    <i class=\"fa fa-search\" (mouseenter)=\"op2.show($event)\" style=\"font-size:24px\"></i>\r\n    \r\n    <p-overlayPanel #op2 [showCloseIcon]=\"true\" [dismissable]=\"false\">\r\n        <p-dataTable [value]=\"cars1\" [style]=\"&#123;'width':'500px'&#125;\">\r\n            <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\r\n            <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\r\n            <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\r\n            <p-column field=\"color\" header=\"Color\" [sortable]=\"true\"></p-column>\r\n        </p-dataTable>\r\n    </p-overlayPanel>\r\n    \r\n    <h3>DataTable Integration</h3>\r\n    <p-dataTable [value]=\"cars2\">\r\n        <p-column [style]=\"&#123;'width':'10%','text-align':'center'&#125;\" header=\"Logo\">\r\n            <ng-template let-car=\"rowData\" pTemplate=\"body\">\r\n                <button type=\"button\" pButton (click)=\"selectCar($event,car,op3);\" icon=\"fa-search\"></button>\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n    </p-dataTable>\r\n    \r\n    <p-overlayPanel #op3>\r\n        <img src=\"assets/showcase/images/demo/car/{{selectedCar.brand}}.png\" *ngIf=\"selectedCar\"/>\r\n    </p-overlayPanel>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;OverlayPanelModule&#125; from 'primeng/overlaypanel';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>OverlayPanel is defined using p-overlayPanel element and is displayed using the <i>show</i> or <i>toggle</i> method of a local ng-template variable.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-overlayPanel #op&gt;\r\n    Content\r\n&lt;/p-overlayPanel&gt;\r\n\r\n&lt;button type=\"text\" pButton label=\"Basic\" (click)=\"op.toggle($event)\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n            <h3>Show and Hide</h3>\r\n            <p><i>show</i> method takes two parameters, first one is the event and it is mandatory. By default the target component to align the overlay is the event target, \r\n            if you'd like to align it to another element, provide it as the second parameter. Similarly calling <i>hide()</i> hides the overlay panel and the <i>toggle</i> method \r\n            toggles the visibility of the panel. In example below, clicking the button displays the overlayPanel aligned to the actualTarget div, not the button itself.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-overlayPanel #op&gt;\r\n    Content\r\n&lt;/p-overlayPanel&gt;\r\n\r\n&lt;button type=\"text\" pButton label=\"Custom Target\" (click)=\"op.show($event, actualTarget)\"&gt;&lt;/button&gt;\r\n&lt;div #actualTarget&gt;&lt;/div&gt;\r\n</code>\r\n</pre>\r\n        \r\n        \r\n            <h3>Dismissable and CloseIcon</h3>\r\n            <p>Clicking outside the overlay hides the panel, setting dismissable to false disables this behavior. Additionally enablign showCloseIcon property \r\n            displays a close icon at the top right corner to close the panel</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-overlayPanel #op [dismissable]=\"true\" [showCloseIcon]=\"true\"&gt;\r\n    Content\r\n&lt;/p-overlayPanel&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>dismissable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Enables to hide the overlay when outside is clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showCloseIcon</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled, displays a close icon at top right corner.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the panel, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onBeforeShow</td>\r\n                            <td>-</td>\r\n                            <td>Callback to invoke before overlay is shown.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onAfterShow</td>\r\n                            <td>-</td>\r\n                            <td>Callback to invoke after overlay is shown.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onBeforeHide</td>\r\n                            <td>-</td>\r\n                            <td>Callback to invoke before overlay is hidden.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onAfterHide</td>\r\n                            <td>-</td>\r\n                            <td>Callback to invoke after overlay is hidden.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>toggle</td>\r\n                            <td>event: browser event <br>\r\n                                target?: target element to align the panel, defaults to event.target\r\n                            </td>\r\n                            <td>Toggles the visibility of the panel.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>show</td>\r\n                            <td>event: browser event <br>\r\n                                target?: target element to align the panel to\r\n                            </td>\r\n                            <td>Displays the panel.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hide</td>\r\n                            <td>-</td>\r\n                            <td>Hides the panel.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-overlaypanel</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-overlaypanel-content</td>\r\n                            <td>Content of the panel.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-overlaypanel-close</td>\r\n                            <td>Close icon.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/overlaypanel\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p&gt;Click the button to show the panel.&lt;/p&gt;\r\n&lt;button type=\"text\" pButton label=\"Basic\" (click)=\"op1.toggle($event)\"&gt;&lt;/button&gt;\r\n\r\n&lt;p-overlayPanel #op1&gt;\r\n    &lt;img src=\"assets/showcase/images/demo/galleria/galleria1.jpg\" alt=\"Galleria 1\" /&gt;\r\n&lt;/p-overlayPanel&gt;\r\n\r\n&lt;h3&gt;Customized&lt;/h3&gt;\r\n&lt;p&gt;This OverlayPanel gets displayed on hover of the icon, is not dismissable and displays a close icon.&lt;/p&gt;\r\n&lt;i class=\"fa fa-search\" (mouseenter)=\"op2.show($event)\" style=\"font-size:24px\"&gt;&lt;/i&gt;\r\n\r\n&lt;p-overlayPanel #op2 [showCloseIcon]=\"true\" [dismissable]=\"false\"&gt;\r\n    &lt;p-dataTable [value]=\"cars1\" [style]=\"&#123;'width':'500px'&#125;\"&gt;\r\n        &lt;p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\r\n        &lt;p-column field=\"year\" header=\"Year\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\r\n        &lt;p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\r\n        &lt;p-column field=\"color\" header=\"Color\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;/p-dataTable&gt;\r\n&lt;/p-overlayPanel&gt;\r\n\r\n&lt;h3&gt;DataTable Integration&lt;/h3&gt;\r\n&lt;p-dataTable [value]=\"cars2\"&gt;\r\n    &lt;p-column [style]=\"&#123;'width':'10%','text-align':'center'&#125;\" header=\"Logo\"&gt;\r\n        &lt;ng-template let-car=\"rowData\" pTemplate=\"body\"&gt;\r\n            &lt;button type=\"button\" pButton (click)=\"selectCar($event,car,op3);\" icon=\"fa-search\"&gt;&lt;/button&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;p-overlayPanel #op3&gt;\r\n    &lt;img src=\"assets/showcase/images/demo/car/{{selectedCar.brand}}.png\" *ngIf=\"selectedCar\"/&gt;\r\n&lt;/p-overlayPanel&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class OverlayPanelDemo &#123;\r\n\r\n    cars1: Car[];\r\n    \r\n    cars2: Car[];\r\n    \r\n    selectedCar: Car;\r\n    \r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars1 = cars);\r\n        this.carService.getCarsSmall().then(cars => this.cars2 = cars);\r\n    &#125;\r\n    \r\n    selectCar(event,car: Car, overlaypanel: OverlayPanel) &#123;\r\n        this.selectedCar = car;\r\n        overlaypanel.toggle(event);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/overlaypanel/overlaypaneldemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayPanelDemoModule", function() { return OverlayPanelDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlaypaneldemo__ = __webpack_require__("../../../../../src/app/showcase/components/overlaypanel/overlaypaneldemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlaypaneldemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/overlaypanel/overlaypaneldemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_overlaypanel_overlaypanel__ = __webpack_require__("../../../../../src/app/components/overlaypanel/overlaypanel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_datatable_datatable__ = __webpack_require__("../../../../../src/app/components/datatable/datatable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var OverlayPanelDemoModule = (function () {
    function OverlayPanelDemoModule() {
    }
    OverlayPanelDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__overlaypaneldemo_routing_module__["a" /* OverlayPanelDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_overlaypanel_overlaypanel__["a" /* OverlayPanelModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_datatable_datatable__["a" /* DataTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__overlaypaneldemo__["a" /* OverlayPanelDemo */]
            ]
        })
    ], OverlayPanelDemoModule);
    return OverlayPanelDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/overlaypanel/overlaypaneldemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayPanelDemo; });
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


var OverlayPanelDemo = (function () {
    function OverlayPanelDemo(carService) {
        this.carService = carService;
    }
    OverlayPanelDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars1 = cars; });
        this.carService.getCarsSmall().then(function (cars) { return _this.cars2 = cars; });
    };
    OverlayPanelDemo.prototype.selectCar = function (event, car, overlaypanel) {
        this.selectedCar = car;
        overlaypanel.toggle(event);
    };
    OverlayPanelDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/overlaypanel/overlaypaneldemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], OverlayPanelDemo);
    return OverlayPanelDemo;
}());



/***/ })

});
//# sourceMappingURL=overlaypaneldemo.module.chunk.js.map