webpackJsonp(["theming.module"],{

/***/ "../../../../../src/app/showcase/components/theming/theming-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theming_component__ = __webpack_require__("../../../../../src/app/showcase/components/theming/theming.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThemingRoutingModule = (function () {
    function ThemingRoutingModule() {
    }
    ThemingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__theming_component__["a" /* ThemingComponent */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], ThemingRoutingModule);
    return ThemingRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/theming/theming.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Theming</span>\r\n        <span>Create your own PrimeNG experience</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <h3 style=\"margin-top:0px\">Structural CSS</h3>\r\n    <p>These style classes define the skeleton of the components and include css properties such as margin, padding, display type, dimensions and positioning.\r\n    Refer to documentation of each component for the list of structural classes per component.</p>\r\n\r\n    <h3>Skinning CSS</h3>\r\n    <p>Skinning defines the look and feel properties like colors, border colors, background images.</p>\r\n\r\n    <div class=\"doc-tablewrapper\">\r\n        <table class=\"doc-table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Style Class</th>\r\n                    <th>Applies</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>ui-widget</td>\r\n                    <td>All PrimeNG components</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ui-widget-header</td>\r\n                    <td>Header section of a component</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ui-widget-content</td>\r\n                    <td>Content section of a component</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ui-state-default</td>\r\n                    <td>Default state of a clickable element</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ui-state-hover</td>\r\n                    <td>Hover state of a clickable element like mouse over</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ui-state-active</td>\r\n                    <td>Active state of a clickable element like mouse press</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ui-state-highlight</td>\r\n                    <td>Highlighed elements</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>ui-state-disabled</td>\r\n                    <td>Disabled elements</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>fa</td>\r\n                    <td>Icon elements based on font awesome</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <p>These classes are not aware of structural css like margins and paddings, mostly they only define colors. This clean separation brings great flexibility in theming because you don’t need to know each and every skinning selectors of components to change their style.</p>\r\n\r\n    <p>For example Panel component’s header section has the \"ui-panel-titlebar\" structural class, to change the color of a panel\r\n        header you don’t need to about this class as \"ui-widget-header\" defines colors for panel header. However if you only\r\n        want to customize the headers of all panel component you need to use the \"ui-panel-titlebar\" instead of the global \"ui-widget-header\".\r\n        Additionally to change the style of a particular panel header instead of of panels, use the styleClass property of the\r\n        panel instead.</p>\r\n   \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-panel styleClass=\"my-panel\"&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-css\" pCode ngNonBindable>\r\n.my-panel .ui-panel-titlebar &#123;\r\n    background: #000000 \r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n    <p>If your css is added using styles or stylesUrl property of a component, it may not be applied due to ViewEncapsulation, in this case you may consider changing the ViewEncapsulation\r\n        of your component as \"none\".\r\n    </p>\r\n\r\n    <h3>Free Themes</h3>\r\n    <p>16 free themes are available for PrimeNG, these include the themeroller themes and our custom themes. ThemeSwitcher on the top right section\r\n        of the page dynamically changes the theme at demo pages. Themes are distributed along with PrimeNG itself. Free themes are based on a basic SASS structure whereas\r\n        premium themes offer far more advanced SASS integration with advanced customization options.</p>\r\n\r\n    <p>In order to create a custom theme based on the free themes structure, define the variables below and import the <a href=\"https://github.com/primefaces/primeng/blob/master/src/assets/components/themes/_theme.scss\">_theme.scss</a>.</p>\r\n<pre>\r\n<code class=\"language-css\" pCode ngNonBindable>\r\n$fontFamily: Lucida Grande, Lucida Sans, Arial, sans-serif;\r\n$fontSize: 1em;\r\n$borderRadius: 6px;\r\n$disabledOpacity: 0.35;\r\n\r\n//Header\r\n$headerBorderWidth: 1px;\r\n$headerBorderColor: #aed0ea;\r\n$headerBgColor: #deedf7;\r\n$headerTextColor: #222222;\r\n$headerFontWeight: bold;\r\n$headerIconTextColor: #222222;\r\n\r\n//Content\r\n$contentBorderWidth: 1px;\r\n$contentBorderColor: #dddddd;\r\n$contentBgColor: #f2f5f7;\r\n$contentTextColor: #362b36;\r\n\r\n//Default State\r\n$stateDefaultBorderWidth: 1px;\r\n$stateDefaultBorderColor: #aed0ea;\r\n$stateDefaultBgColor: #d7ebf9;\r\n$stateDefaultTextColor: #2779aa;\r\n\r\n//Active State\r\n$stateActiveBorderColor: #2694e8;\r\n$stateActiveBgColor: #3baae3;\r\n$stateActiveTextColor: #ffffff;\r\n\r\n//Highlight State\r\n$stateHighlightBorderColor: #f9dd34;\r\n$stateHighlightBgColor: #ffef8f;\r\n$stateHighlightTextColor: #363636;\r\n\r\n//Focus State\r\n$stateFocusBorderColor: #74b2e2;\r\n$stateFocusBgColor: #e4f1fb;\r\n$stateFocusTextColor: #0070a3;\r\n\r\n//Error State\r\n$stateErrorBorderColor: #cd0a0a;\r\n$stateErrorBgColor: #cd0a0a;\r\n$stateErrorTextColor: #ffffff;\r\n\r\n//Hover State\r\n$stateHoverBorderColor: #74b2e2;\r\n$stateHoverBgColor: #e4f1fb;\r\n$stateHoverTextColor: #0070a3;\r\n\r\n//Forms\r\n$inputBgColor: #ffffff;\r\n$inputTextColor: #222222;\r\n$invalidInputBorderColor: #cd0a0a;\r\n$inputGroupTextColor: #2779aa;\r\n\r\n@import '../_theme';\r\n</code>\r\n</pre>\r\n\r\n    <p>Premium themes have advanced sass customization, refer to documentation of each theme such as <a href=\"https://www.primefaces.org/serenity-ng/#/documentation\">Serenity</a>.</p>\r\n\r\n    <p>Font-size of free themes use em to define the font size of the widgets using .ui-widget class. This is 1em by default and it is suggested to define a base font-size at the body element of your application to adjust the size of\r\n    components.</p>\r\n\r\n    <h3>Premium Layouts and Themes</h3>\r\n    <p>PrimeNG offers advanced sass based, fully customizable and easy to use <a href=\"http://www.primefaces.org/themes\">premium themes and layouts</a> such as <b>Ultima</b>\r\n        as Angular CLI projects.</p>\r\n\r\n    <a href=\"http://www.primefaces.org/layouts/ultima\">\r\n        <img alt=\"Ultima\" src=\"http://www.primefaces.org/images/market/ultima/ultima_layout_biggest.png\" style=\"width:100%\"/> \r\n    </a>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/theming/theming.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThemingComponent = (function () {
    function ThemingComponent() {
    }
    ThemingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/theming/theming.component.html")
        })
    ], ThemingComponent);
    return ThemingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/theming/theming.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemingModule", function() { return ThemingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theming_component__ = __webpack_require__("../../../../../src/app/showcase/components/theming/theming.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theming_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/theming/theming-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ThemingModule = (function () {
    function ThemingModule() {
    }
    ThemingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__theming_routing_module__["a" /* ThemingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__theming_component__["a" /* ThemingComponent */]
            ]
        })
    ], ThemingModule);
    return ThemingModule;
}());



/***/ })

});
//# sourceMappingURL=theming.module.chunk.js.map