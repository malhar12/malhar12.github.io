webpackJsonp(["megamenudemo.module"],{

/***/ "../../../../../src/app/components/megamenu/megamenu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MegaMenu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MegaMenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MegaMenu = (function () {
    function MegaMenu(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.orientation = 'horizontal';
        this.autoZIndex = true;
        this.baseZIndex = 0;
    }
    MegaMenu.prototype.onItemMouseEnter = function (event, item, menuitem) {
        if (menuitem.disabled) {
            return;
        }
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
        this.activeItem = item;
        if (menuitem.items) {
            var submenu = item.children[0].nextElementSibling;
            if (submenu) {
                if (this.autoZIndex) {
                    submenu.style.zIndex = String(this.baseZIndex + (++__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */].zindex));
                }
                if (this.orientation === 'horizontal') {
                    submenu.style.top = this.domHandler.getOuterHeight(item.children[0]) + 'px';
                    submenu.style.left = '0px';
                }
                else if (this.orientation === 'vertical') {
                    submenu.style.top = '0px';
                    submenu.style.left = this.domHandler.getOuterWidth(item.children[0]) + 'px';
                }
            }
        }
    };
    MegaMenu.prototype.onItemMouseLeave = function (event, link) {
        var _this = this;
        this.hideTimeout = setTimeout(function () {
            _this.activeItem = null;
        }, 1000);
    };
    MegaMenu.prototype.itemClick = function (event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        this.activeItem = null;
    };
    MegaMenu.prototype.getColumnClass = function (menuitem) {
        var length = menuitem.items ? menuitem.items.length : 0;
        var columnClass;
        switch (length) {
            case 2:
                columnClass = 'ui-g-6';
                break;
            case 3:
                columnClass = 'ui-g-4';
                break;
            case 4:
                columnClass = 'ui-g-3';
                break;
            case 6:
                columnClass = 'ui-g-2';
                break;
            default:
                columnClass = 'ui-g-12';
                break;
        }
        return columnClass;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], MegaMenu.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], MegaMenu.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], MegaMenu.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], MegaMenu.prototype, "orientation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MegaMenu.prototype, "autoZIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], MegaMenu.prototype, "baseZIndex", void 0);
    MegaMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-megaMenu',
            template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\"\n            [ngClass]=\"{'ui-megamenu ui-widget ui-widget-content ui-corner-all':true,'ui-megamenu-horizontal': orientation == 'horizontal','ui-megamenu-vertical': orientation == 'vertical'}\">\n            <ul class=\"ui-megamenu-root-list\">\n                <ng-template ngFor let-category [ngForOf]=\"model\">\n                    <li *ngIf=\"category.separator\" class=\"ui-menu-separator ui-widget-content\">\n                    <li *ngIf=\"!category.separator\" #item [ngClass]=\"{'ui-menuitem ui-corner-all':true,'ui-menuitem-active':item==activeItem}\"\n                        (mouseenter)=\"onItemMouseEnter($event, item, category)\" (mouseleave)=\"onItemMouseLeave($event, item)\">\n   \n                        <a *ngIf=\"!category.routerLink\" [href]=\"category.url||'#'\" [attr.target]=\"category.target\" [attr.title]=\"category.title\" [attr.id]=\"category.id\" (click)=\"itemClick($event, category)\"\n                            [ngClass]=\"{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':category.disabled}\" [ngStyle]=\"category.style\" [class]=\"category.styleClass\">\n                            <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"category.icon\" [ngClass]=\"category.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{category.label}}</span>\n                            <span *ngIf=\"category.items\" class=\"ui-submenu-icon fa fa-fw\" [ngClass]=\"{'fa-caret-down':orientation=='horizontal','fa-caret-right':orientation=='vertical'}\"></span>\n                        </a>\n                        <a *ngIf=\"category.routerLink\" [routerLink]=\"category.routerLink\" [queryParams]=\"category.queryParams\" [routerLinkActive]=\"'ui-state-active'\" [routerLinkActiveOptions]=\"category.routerLinkActiveOptions||{exact:false}\" \n                            [attr.target]=\"category.target\" [attr.title]=\"category.title\" [attr.id]=\"category.id\"\n                            (click)=\"itemClick($event, category)\" [ngClass]=\"{'ui-menuitem-link ui-corner-all':true,'ui-state-disabled':child.disabled}\" [ngStyle]=\"child.style\" [class]=\"child.styleClass\">\n                            <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"category.icon\" [ngClass]=\"category.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{category.label}}</span>\n                        </a>\n\n                        <div class=\"ui-megamenu-panel ui-widget-content ui-corner-all ui-shadow\" *ngIf=\"category.items\">\n                            <div class=\"ui-g\">\n                                <ng-template ngFor let-column [ngForOf]=\"category.items\">\n                                    <div [class]=\"getColumnClass(category)\">\n                                        <ng-template ngFor let-submenu [ngForOf]=\"column\">\n                                            <ul class=\"ui-megamenu-submenu\">\n                                                <li class=\"ui-widget-header ui-megamenu-submenu-header ui-corner-all\">{{submenu.label}}</li>\n                                                <ng-template ngFor let-item [ngForOf]=\"submenu.items\">\n                                                    <li *ngIf=\"item.separator\" class=\"ui-menu-separator ui-widget-content\">\n                                                    <li *ngIf=\"!item.separator\" class=\"ui-menuitem ui-corner-all\">\n                                                        <a *ngIf=\"!item.routerLink\" [href]=\"item.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\"\n                                                            [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"itemClick($event, item)\">\n                                                            <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n                                                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                                                        </a>\n                                                        <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams\" [routerLinkActive]=\"'ui-state-active'\" \n                                                            [routerLinkActiveOptions]=\"item.routerLinkActiveOptions||{exact:false}\" class=\"ui-menuitem-link ui-corner-all\" \n                                                             [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\"\n                                                            [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"itemClick($event, item)\">\n                                                            <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n                                                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                                                        </a>\n                                                    </li>\n                                                </ng-template>\n                                            </ul>\n                                        </ng-template>\n                                    </div>\n                                </ng-template>\n                            </div>\n                        </div>\n                    </li>\n                </ng-template>\n                <li class=\"ui-menuitem ui-menuitem-custom ui-corner-all\" *ngIf=\"orientation === 'horizontal'\">\n                    <ng-content></ng-content>\n                </li>\n            </ul>\n        </div>\n    ",
            providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */]])
    ], MegaMenu);
    return MegaMenu;
}());

var MegaMenuModule = (function () {
    function MegaMenuModule() {
    }
    MegaMenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]],
            exports: [MegaMenu, __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]],
            declarations: [MegaMenu]
        })
    ], MegaMenuModule);
    return MegaMenuModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/megamenu/megamenudemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MegaMenuDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__megamenudemo__ = __webpack_require__("../../../../../src/app/showcase/components/megamenu/megamenudemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MegaMenuDemoRoutingModule = (function () {
    function MegaMenuDemoRoutingModule() {
    }
    MegaMenuDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__megamenudemo__["a" /* MegaMenuDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], MegaMenuDemoRoutingModule);
    return MegaMenuDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/megamenu/megamenudemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">MegaMenu</span>\r\n        <span>MegaMenu displays submenus of root items together.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Default</h3>\r\n    <p-megaMenu [model]=\"items\"></p-megaMenu>\r\n    \r\n    <h3>Vertical</h3>\r\n    <p-megaMenu [model]=\"items\" orientation=\"vertical\"></p-megaMenu>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;MegaMenuModule&#125; from 'primeng/megamenu';\r\n</code>\r\n</pre>\r\n\r\n            <h3>MenuModel API</h3>\r\n            <p>MegaMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>MegaMenu requires nested menuitems as its model where the items of a root menuitem is a two dimensional array to define columns in an overlay submenu.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-megaMenu [model]=\"items\"&gt;&lt;/p-megaMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n    export class MegaMenuDemo &#123;\r\n\r\n        items: MenuItem[];\r\n\r\n        ngOnInit() &#123;\r\n            this.items = [\r\n                &#123;\r\n                    label: 'TV', icon: 'fa-check',\r\n                    items: [\r\n                        [\r\n                            &#123;\r\n                                label: 'TV 1',\r\n                                items: [&#123;label: 'TV 1.1'&#125;,&#123;label: 'TV 1.2'&#125;]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'TV 2',\r\n                                items: [&#123;label: 'TV 2.1'&#125;,&#123;label: 'TV 2.2'&#125;]\r\n                            &#125;\r\n                        ],\r\n                        [\r\n                            &#123;\r\n                                label: 'TV 3',\r\n                                items: [&#123;label: 'TV 3.1'&#125;,&#123;label: 'TV 3.2'&#125;]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'TV 4',\r\n                                items: [&#123;label: 'TV 4.1'&#125;,&#123;label: 'TV 4.2'&#125;]\r\n                            &#125;    \r\n                        ]\r\n                    ]\r\n                &#125;,\r\n                &#123;\r\n                    label: 'Sports', icon: 'fa-soccer-ball-o',\r\n                    items: [\r\n                        [\r\n                            &#123;\r\n                                label: 'Sports 1',\r\n                                items: [&#123;label: 'Sports 1.1'&#125;,&#123;label: 'Sports 1.2'&#125;]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'Sports 2',\r\n                                items: [&#123;label: 'Sports 2.1'&#125;,&#123;label: 'Sports 2.2'&#125;]\r\n                            &#125;,\r\n\r\n                        ],\r\n                        [\r\n                            &#123;\r\n                                label: 'Sports 3',\r\n                                items: [&#123;label: 'Sports 3.1'&#125;,&#123;label: 'Sports 3.2'&#125;]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'Sports 4',\r\n                                items: [&#123;label: 'Sports 4.1'&#125;,&#123;label: 'Sports 4.2'&#125;]\r\n                            &#125;\r\n                        ],\r\n                        [\r\n                            &#123;\r\n                                label: 'Sports 5',\r\n                                items: [&#123;label: 'Sports 5.1'&#125;,&#123;label: 'Sports 5.2'&#125;]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'Sports 6',\r\n                                items: [&#123;label: 'Sports 6.1'&#125;,&#123;label: 'Sports 6.2'&#125;]\r\n                            &#125;\r\n                        ]\r\n                    ]\r\n                &#125;\r\n            ];\r\n        &#125;\r\n    &#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Custom Content</h3>\r\n            <p>Custom content can be placed between p-megaMenu tags. Megamenu should be horizontal for custom content.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-megaMenu [model]=\"items\"&gt;\r\n    &lt;input type=\"text\" pInputText placeholder=\"Search\"&gt;\r\n    &lt;button pButton label=\"Logout\" icon=\"fa-sign-out\"&gt;&lt;/button&gt;\r\n&lt;/p-megaMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>model</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of menuitems.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>orientation</td>\r\n                            <td>string</td>\r\n                            <td>horizontal</td>\r\n                            <td>Defines the orientation, valid values are horizontal and vertical.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>baseZIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Base zIndex value to use in layering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoZIndex</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to automatically manage layering.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr>\r\n                        <td>ui-megamenu</td>\r\n                        <td>Container element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menu-list</td>\r\n                        <td>List element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menuitem</td>\r\n                        <td>Menuitem element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menuitem-text</td>\r\n                        <td>Label of a menuitem.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-menuitem-icon</td>\r\n                        <td>Icon of a menuitem.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-submenu-icon</td>\r\n                        <td>Arrow icon of a submenu.</td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n<h3>Dependencies</h3>\r\n<p>None.</p>\r\n</p-tabPanel>\r\n\r\n<p-tabPanel header=\"Source\">\r\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/megamenu\" class=\"btn-viewsource\" target=\"_blank\">\r\n        <i class=\"fa fa-github\"></i>\r\n        <span>View on GitHub</span>\r\n    </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-megaMenu [model]=\"items\"&gt;&lt;/p-megaMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MegaMenuDemo &#123;\r\n\r\n    items: MenuItem[];\r\n\r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;\r\n                label: 'TV', icon: 'fa-check',\r\n                items: [\r\n                    [\r\n                        &#123;\r\n                            label: 'TV 1',\r\n                            items: [&#123;label: 'TV 1.1'&#125;,&#123;label: 'TV 1.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'TV 2',\r\n                            items: [&#123;label: 'TV 2.1'&#125;,&#123;label: 'TV 2.2'&#125;]\r\n                        &#125;\r\n                    ],\r\n                    [\r\n                        &#123;\r\n                            label: 'TV 3',\r\n                            items: [&#123;label: 'TV 3.1'&#125;,&#123;label: 'TV 3.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'TV 4',\r\n                            items: [&#123;label: 'TV 4.1'&#125;,&#123;label: 'TV 4.2'&#125;]\r\n                        &#125;    \r\n                    ]\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Sports', icon: 'fa-soccer-ball-o',\r\n                items: [\r\n                    [\r\n                        &#123;\r\n                            label: 'Sports 1',\r\n                            items: [&#123;label: 'Sports 1.1'&#125;,&#123;label: 'Sports 1.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Sports 2',\r\n                            items: [&#123;label: 'Sports 2.1'&#125;,&#123;label: 'Sports 2.2'&#125;]\r\n                        &#125;,\r\n\r\n                    ],\r\n                    [\r\n                        &#123;\r\n                            label: 'Sports 3',\r\n                            items: [&#123;label: 'Sports 3.1'&#125;,&#123;label: 'Sports 3.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Sports 4',\r\n                            items: [&#123;label: 'Sports 4.1'&#125;,&#123;label: 'Sports 4.2'&#125;]\r\n                        &#125;\r\n                    ],\r\n                    [\r\n                        &#123;\r\n                            label: 'Sports 5',\r\n                            items: [&#123;label: 'Sports 5.1'&#125;,&#123;label: 'Sports 5.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Sports 6',\r\n                            items: [&#123;label: 'Sports 6.1'&#125;,&#123;label: 'Sports 6.2'&#125;]\r\n                        &#125;\r\n                    ]\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Entertainment', icon: 'fa-child',\r\n                items: [\r\n                    [\r\n                        &#123;\r\n                            label: 'Entertainment 1',\r\n                            items: [&#123;label: 'Entertainment 1.1'&#125;,&#123;label: 'Entertainment 1.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Entertainment 2',\r\n                            items: [&#123;label: 'Entertainment 2.1'&#125;,&#123;label: 'Entertainment 2.2'&#125;]\r\n                        &#125;\r\n                    ],\r\n                    [\r\n                        &#123;\r\n                            label: 'Entertainment 3',\r\n                            items: [&#123;label: 'Entertainment 3.1'&#125;,&#123;label: 'Entertainment 3.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Entertainment 4',\r\n                            items: [&#123;label: 'Entertainment 4.1'&#125;,&#123;label: 'Entertainment 4.2'&#125;]\r\n                        &#125;    \r\n                    ]\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Technology', icon: 'fa-gears',\r\n                items: [\r\n                    [\r\n                        &#123;\r\n                            label: 'Technology 1',\r\n                            items: [&#123;label: 'Technology 1.1'&#125;,&#123;label: 'Technology 1.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Technology 2',\r\n                            items: [&#123;label: 'Technology 2.1'&#125;,&#123;label: 'Technology 2.2'&#125;]\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Technology 3',\r\n                            items: [&#123;label: 'Technology 3.1'&#125;,&#123;label: 'Technology 3.2'&#125;]\r\n                        &#125;\r\n                    ],\r\n                    [\r\n                        &#123;\r\n                            label: 'Technology 4',\r\n                            items: [&#123;label: 'Technology 4.1'&#125;,&#123;label: 'Technology 4.2'&#125;]\r\n                        &#125;  \r\n                    ]\r\n                ]\r\n            &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n</p-tabPanel>\r\n</p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/megamenu/megamenudemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegaMenuDemoModule", function() { return MegaMenuDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__megamenudemo__ = __webpack_require__("../../../../../src/app/showcase/components/megamenu/megamenudemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__megamenudemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/megamenu/megamenudemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_megamenu_megamenu__ = __webpack_require__("../../../../../src/app/components/megamenu/megamenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MegaMenuDemoModule = (function () {
    function MegaMenuDemoModule() {
    }
    MegaMenuDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__megamenudemo_routing_module__["a" /* MegaMenuDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_megamenu_megamenu__["a" /* MegaMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__megamenudemo__["a" /* MegaMenuDemo */]
            ]
        })
    ], MegaMenuDemoModule);
    return MegaMenuDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/megamenu/megamenudemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MegaMenuDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MegaMenuDemo = (function () {
    function MegaMenuDemo() {
    }
    MegaMenuDemo.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'TV', icon: 'fa-check',
                items: [
                    [
                        {
                            label: 'TV 1',
                            items: [{ label: 'TV 1.1' }, { label: 'TV 1.2' }]
                        },
                        {
                            label: 'TV 2',
                            items: [{ label: 'TV 2.1' }, { label: 'TV 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'TV 3',
                            items: [{ label: 'TV 3.1' }, { label: 'TV 3.2' }]
                        },
                        {
                            label: 'TV 4',
                            items: [{ label: 'TV 4.1' }, { label: 'TV 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Sports', icon: 'fa-soccer-ball-o',
                items: [
                    [
                        {
                            label: 'Sports 1',
                            items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
                        },
                        {
                            label: 'Sports 2',
                            items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
                        },
                    ],
                    [
                        {
                            label: 'Sports 3',
                            items: [{ label: 'Sports 3.1' }, { label: 'Sports 3.2' }]
                        },
                        {
                            label: 'Sports 4',
                            items: [{ label: 'Sports 4.1' }, { label: 'Sports 4.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Sports 5',
                            items: [{ label: 'Sports 5.1' }, { label: 'Sports 5.2' }]
                        },
                        {
                            label: 'Sports 6',
                            items: [{ label: 'Sports 6.1' }, { label: 'Sports 6.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Entertainment', icon: 'fa-child',
                items: [
                    [
                        {
                            label: 'Entertainment 1',
                            items: [{ label: 'Entertainment 1.1' }, { label: 'Entertainment 1.2' }]
                        },
                        {
                            label: 'Entertainment 2',
                            items: [{ label: 'Entertainment 2.1' }, { label: 'Entertainment 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Entertainment 3',
                            items: [{ label: 'Entertainment 3.1' }, { label: 'Entertainment 3.2' }]
                        },
                        {
                            label: 'Entertainment 4',
                            items: [{ label: 'Entertainment 4.1' }, { label: 'Entertainment 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Technology', icon: 'fa-gears',
                items: [
                    [
                        {
                            label: 'Technology 1',
                            items: [{ label: 'Technology 1.1' }, { label: 'Technology 1.2' }]
                        },
                        {
                            label: 'Technology 2',
                            items: [{ label: 'Technology 2.1' }, { label: 'Technology 2.2' }]
                        },
                        {
                            label: 'Technology 3',
                            items: [{ label: 'Technology 3.1' }, { label: 'Technology 3.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Technology 4',
                            items: [{ label: 'Technology 4.1' }, { label: 'Technology 4.2' }]
                        }
                    ]
                ]
            }
        ];
    };
    MegaMenuDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/megamenu/megamenudemo.html")
        })
    ], MegaMenuDemo);
    return MegaMenuDemo;
}());



/***/ })

});
//# sourceMappingURL=megamenudemo.module.chunk.js.map