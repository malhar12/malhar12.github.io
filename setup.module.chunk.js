webpackJsonp(["setup.module"],{

/***/ "../../../../../src/app/showcase/components/setup/setup-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_component__ = __webpack_require__("../../../../../src/app/showcase/components/setup/setup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SetupRoutingModule = (function () {
    function SetupRoutingModule() {
    }
    SetupRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__setup_component__["a" /* SetupComponent */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], SetupRoutingModule);
    return SetupRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/setup/setup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Get Started</span>\r\n        <span>PrimeNG is a rich set of open source native Angular UI components.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <h3 style=\"margin-top:0px\">Download</h3>\r\n    <p>PrimeNG is available at npm, if you have an existing application run the following command to download it to your project.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\nnpm install primeng --save\r\n</code>\r\n</pre>\r\n\r\n    <h3>Load Configuration</h3>\r\n    <p>PrimeNG is distributed in commonjs format, a module manager of your choice is required and this guide provides samples for SystemJS, WebPack and Angular CLI.</p>\r\n\r\n    <h3>Import</h3>\r\n    <p>UI components are configured as modules, once PrimeNG is downloaded and configured, modules and apis can be imported from 'primeng/*' shorthand in your application code. Documentation\r\n        of each component states the import path.\r\n    </p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;AccordionModule&#125; from 'primeng/accordion';     //accordion and accordion tab\r\nimport &#123;MenuItem&#125; from 'primeng/api';                 //api\r\n</code>\r\n</pre>\r\n\r\n    <h3>Dependencies</h3>\r\n    <p>Majority of PrimeNG components (95%) are native and there are some exceptions having 3rd party dependencies. In addition, components require font-awesome for icons.</p>\r\n\r\n    <p>The css dependencies are as follows, font awesome, theme of your choice and structural css of components.</p>\r\n<pre>\r\n<code class=\"language-html\" pCode ngNonBindable>\r\n&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"YOUR_PATH/font-awesome.min.css\" /&gt;\r\n&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"/node_modules/primeng/resources/themes/omega/theme.css\" /&gt;\r\n&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"/node_modules/primeng/resources/primeng.min.css\" /&gt;\r\n</code>\r\n</pre>\r\n    \r\n    <p>Here is the list of components with 3rd party dependencies.</p>\r\n\r\n    <div class=\"doc-tablewrapper\">\r\n        <table class=\"doc-table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Component</th>\r\n                    <th>Dependency</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>Schedule</td>\r\n                    <td>FullCalendar and Moment.js</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Editor</td>\r\n                    <td>Quill Editor</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>GMap</td>\r\n                    <td>Google Maps</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Charts</td>\r\n                    <td>Charts.js 2.7.x</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Captcha</td>\r\n                    <td>Google Recaptcha</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <h3>Animations with Angular 4+</h3>\r\n    <p>Various components utilize angular animations to improve the user experience, starting with Angular 4 animations have their own module so you need\r\n    to import <i>BrowserAnimationsModule</i> to your application. If you prefer not to use <i>NoopAnimationsModule</i> instead.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\nnpm install @angular/animations --save\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;BrowserModule&#125; from '@angular/platform-browser';\r\nimport &#123;BrowserAnimationsModule&#125; from '@angular/platform-browser/animations';\r\n\r\n@NgModule(&#123;\r\n    imports: [\r\n        BrowserModule,\r\n        BrowserAnimationsModule,\r\n        //...\r\n    ],\r\n    //...\r\n&#125;)\r\nexport class YourAppModule &#123; &#125;\r\n</code>\r\n</pre>\r\n\r\n    <h3>Angular CLI Integration</h3>\r\n    <p>Angular CLI is the official CLI tool for Angular. We strongly suggest using Angular CLI when starting an Angular project.</p>\r\n\r\n    <h4>Dependencies</h4>\r\n    <p>Add PrimeNG and FontAwesome as a dependency</p>\r\n<pre>\r\n<code class=\"language-js\" pCode ngNonBindable>\r\n\"dependencies\": &#123;\r\n  //...\r\n  \"primeng\": \"^4.1.0\",\r\n  \"font-awesome\": \"^4.7.0\"\r\n&#125;,\r\n</code>\r\n</pre>\r\n\r\n    <h4>Styles Configuration</h4>\r\n    <p>Configure required styles at the styles section, example below uses the Omega theme.</p>\r\n<pre>\r\n<code class=\"language-js\" pCode ngNonBindable>\r\n\"styles\": [\r\n  \"../node_modules/font-awesome/css/font-awesome.min.css\",\r\n  \"../node_modules/primeng/resources/themes/omega/theme.css\",\r\n  \"../node_modules/primeng/resources/primeng.min.css\",\r\n  //...\r\n],\r\n</code>\r\n</pre>\r\n\r\n    <p>That is all, you may now import PrimeNG components, for a working example visit the <a href=\"https://github.com/primefaces/primeng-quickstart-cli\">PrimeNG CLI QuickStart</a> sample at GitHub.</p>\r\n\r\n    <h3>Angular Seed Integration</h3>\r\n    <p>Angular2 Seed is an alternative modular starter project, there is an <a href=\"https://github.com/mgechev/angular2-seed/wiki/Add-PrimeNG\">official entry</a> at the project wiki\r\n        describing how to use PrimeNG with seed.</p>\r\n\r\n    <h3>QuickStart with System.js</h3>\r\n    <p><a href=\"https://angular.io/docs/ts/latest/quickstart.html\">The official quickstart example</a> of Angular uses System.JS and we\r\n    have extended it to add PrimeNG. Visit the <a href=\"https://github.com/primefaces/primeng-quickstart\">PrimeNG-Quickstart</a> at GitHub for an example.</p>\r\n\r\n    <h3>QuickStart with Webpack</h3>\r\n    <p>There is also a webpack version of the <a href=\"https://angular.io/docs/ts/latest/guide/webpack.html\">The official quickstart example</a> of Angular and we\r\n    have extended it to add PrimeNG. Visit the <a href=\"https://github.com/primefaces/primeng-quickstart-webpack\">PrimeNG-Quickstart-Webpack</a> at GitHub for an example.</p>\r\n\r\n    <h4>External Articles</h4>\r\n    <ul>\r\n        <li><a href=\"https://yakovfain.com/2016/10/06/primeng-ui-components-for-angular-2/\">PrimeNG - UI Components for Angular 2</a> - Yakov Fain's Blog</li>\r\n        <li><a href=\"https://yakovfain.com/2016/10/28/adding-primeng-ui-components-to-angular-cli-project/\">Adding PrimeNG UI components to Angular CLI projects</a> - Yakov Fain's Blog</li>\r\n        <li><a href=\"https://blog.davincisoftware.sk/primeng-web-component-framework-based-on-angularjs-2\">PRIMENG - WEB COMPONENT FRAMEWORK BASED ON ANGULARJS 2</a> - DaVinci IT Blog</li>\r\n        <li><a href=\"http://blogs.bytecode.com.au/glen/2016/10/27/primeng-with-angular-cli.html\">PrimeNG with CLI</a> - Glen Smith</li>\r\n        <li><a href=\"http://lightswitchhelpwebsite.com/Blog/tabid/61/EntryId/3304/Hello-World-Angular-2-Data-Sample-Using-JavaScriptServices-Net-Core-and-PrimeNg.aspx\">Hello World Angular 2+ Data Sample Using JavaScriptServices .Net Core and PrimeNg</a></li>\r\n        <li><a href=\"http://lightswitchhelpwebsite.com/Blog/tabid/61/EntryId/3298/An-Angular-2-Tree-With-CRUD-Functionality.aspx\">An Angular 2 Tree With CRUD Functionality</a></li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/setup/setup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SetupComponent = (function () {
    function SetupComponent() {
    }
    SetupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/setup/setup.component.html")
        })
    ], SetupComponent);
    return SetupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/setup/setup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupModule", function() { return SetupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_component__ = __webpack_require__("../../../../../src/app/showcase/components/setup/setup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setup_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/setup/setup-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SetupModule = (function () {
    function SetupModule() {
    }
    SetupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */],
                __WEBPACK_IMPORTED_MODULE_3__setup_routing_module__["a" /* SetupRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setup_component__["a" /* SetupComponent */]
            ]
        })
    ], SetupModule);
    return SetupModule;
}());



/***/ })

});
//# sourceMappingURL=setup.module.chunk.js.map