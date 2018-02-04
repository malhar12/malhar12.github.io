webpackJsonp(["keyfilterdemo.module"],{

/***/ "../../../../../src/app/components/keyfilter/keyfilter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export KEYFILTER_VALIDATOR */
/* unused harmony export KeyFilter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyFilterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KEYFILTER_VALIDATOR = {
    provide: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NG_VALIDATORS */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* forwardRef */])(function () { return KeyFilter; }),
    multi: true
};
var KeyFilter = (function () {
    function KeyFilter(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
    }
    KeyFilter_1 = KeyFilter;
    Object.defineProperty(KeyFilter.prototype, "pattern", {
        get: function () {
            return this._pattern;
        },
        set: function (_pattern) {
            this._pattern = _pattern;
            this.regex = KeyFilter_1.DEFAULT_MASKS[this._pattern] || this._pattern;
        },
        enumerable: true,
        configurable: true
    });
    KeyFilter.prototype.isNavKeyPress = function (e) {
        var k = e.keyCode;
        k = this.domHandler.getBrowser().safari ? (KeyFilter_1.SAFARI_KEYS[k] || k) : k;
        return (k >= 33 && k <= 40) || k == KeyFilter_1.KEYS.RETURN || k == KeyFilter_1.KEYS.TAB || k == KeyFilter_1.KEYS.ESC;
    };
    ;
    KeyFilter.prototype.isSpecialKey = function (e) {
        var k = e.keyCode;
        var c = e.charCode;
        return k == 9 || k == 13 || k == 27 || k == 16 || k == 17 || (k >= 18 && k <= 20) ||
            (this.domHandler.getBrowser().opera && !e.shiftKey && (k == 8 || (k >= 33 && k <= 35) || (k >= 36 && k <= 39) || (k >= 44 && k <= 45)));
    };
    KeyFilter.prototype.getKey = function (e) {
        var k = e.keyCode || e.charCode;
        return this.domHandler.getBrowser().safari ? (KeyFilter_1.SAFARI_KEYS[k] || k) : k;
    };
    KeyFilter.prototype.getCharCode = function (e) {
        return e.charCode || e.keyCode || e.which;
    };
    ;
    KeyFilter.prototype.onKeyPress = function (e) {
        if (this.pValidateOnly) {
            return;
        }
        var browser = this.domHandler.getBrowser();
        if (e.ctrlKey || e.altKey) {
            return;
        }
        var k = this.getKey(e);
        if (browser.mozilla && (this.isNavKeyPress(e) || k == KeyFilter_1.KEYS.BACKSPACE || (k == KeyFilter_1.KEYS.DELETE && e.charCode == 0))) {
            return;
        }
        var c = this.getCharCode(e);
        var cc = String.fromCharCode(c);
        var ok = true;
        if (browser.mozilla && (this.isSpecialKey(e) || !cc)) {
            return;
        }
        ok = this.regex.test(cc);
        if (!ok) {
            e.preventDefault();
        }
    };
    KeyFilter.prototype.validate = function (c) {
        var value = this.el.nativeElement.value;
        if (!this.regex.test(value)) {
            return {
                validatePattern: false
            };
        }
    };
    KeyFilter.DEFAULT_MASKS = {
        pint: /[\d]/,
        'int': /[\d\-]/,
        pnum: /[\d\.]/,
        money: /[\d\.\s,]/,
        num: /[\d\-\.]/,
        hex: /[0-9a-f]/i,
        email: /[a-z0-9_\.\-@]/i,
        alpha: /[a-z_]/i,
        alphanum: /[a-z0-9_]/i
    };
    KeyFilter.KEYS = {
        TAB: 9,
        RETURN: 13,
        ESC: 27,
        BACKSPACE: 8,
        DELETE: 46
    };
    KeyFilter.SAFARI_KEYS = {
        63234: 37,
        63235: 39,
        63232: 38,
        63233: 40,
        63276: 33,
        63277: 34,
        63272: 46,
        63273: 36,
        63275: 35 // end
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], KeyFilter.prototype, "pValidateOnly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('pKeyFilter'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], KeyFilter.prototype, "pattern", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], KeyFilter.prototype, "onKeyPress", null);
    KeyFilter = KeyFilter_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pKeyFilter]',
            providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */], KEYFILTER_VALIDATOR]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]])
    ], KeyFilter);
    return KeyFilter;
    var KeyFilter_1;
}());

var KeyFilterModule = (function () {
    function KeyFilterModule() {
    }
    KeyFilterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [KeyFilter],
            declarations: [KeyFilter]
        })
    ], KeyFilterModule);
    return KeyFilterModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/keyfilter/keyfilterdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyFilterDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keyfilterdemo__ = __webpack_require__("../../../../../src/app/showcase/components/keyfilter/keyfilterdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KeyFilterDemoRoutingModule = (function () {
    function KeyFilterDemoRoutingModule() {
    }
    KeyFilterDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__keyfilterdemo__["a" /* KeyFilterDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], KeyFilterDemoRoutingModule);
    return KeyFilterDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/keyfilter/keyfilterdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">KeyFilter</span>\r\n        <span>KeyFilter directive restricts user input based on a regular expression.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3>Filtering</h3>\r\n    <div class=\"ui-g ui-fluid\">\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <input type=\"text\" pInputText pKeyFilter=\"int\" placeholder=\"Integers\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <input type=\"text\" pInputText pKeyFilter=\"num\" placeholder=\"Numbers\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <input type=\"text\" pInputText pKeyFilter=\"money\" placeholder=\"Money\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <input type=\"text\" pInputText pKeyFilter=\"hex\" placeholder=\"Hex\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <input type=\"text\" pInputText pKeyFilter=\"alpha\" placeholder=\"Alphabetic\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <input type=\"text\" pInputText pKeyFilter=\"alphanum\" placeholder=\"Alphanumeric\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <input type=\"text\" pInputText [pKeyFilter]=\"blockSpecial\" placeholder=\"Block # < > * !\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <input type=\"text\" pInputText [pKeyFilter]=\"blockSpace\" placeholder=\"Block space key\">\r\n        </div>\r\n    </div>\r\n\r\n    <h3>Validation Mode</h3>\r\n    <form #form=\"ngForm\">\r\n        <label for=\"cc\" style=\"display:block;margin-bottom:4px\">Credit Card</label>\r\n        <input id=\"cc\" type=\"text\" name=\"cc\" [(ngModel)]=\"cc\" pInputText [pKeyFilter]=\"ccRegex\" [pValidateOnly]=\"true\" placeholder=\"1234-1234-1234-1234\">\r\n        <p-message severity=\"error\" text=\"Not a valid number\" [@errorState]=\"form.dirty && !form.valid ? 'visible' : 'hidden'\"></p-message>\r\n    </form>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n                    <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;KeyFilterModule&#125; from 'primeng/keyfilter';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>KeyFilter directive is applied to an input text element using pKeyFilter attribute whose value is either a built-in regular expression name or a custom one.\r\n                Following input only accepts integers.</p>\r\n            \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;input type=\"text\" pKeyFilter=\"int\"&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Built-in Filters</h3>\r\n            <p>Commonly used cases have their own built-in shortcuts.</p>\r\n            <ul>\r\n                <li>pint: Positive integers</li>\r\n                <li>int: Integers</li>\r\n                <li>pnum: Positive numbers</li>\r\n                <li>num: Numbers</li>\r\n                <li>hex: Hexadecimal</li>\r\n                <li>email: Email</li>\r\n                <li>alpha: Alphabetic</li>\r\n                <li>alphanum: Alphanumeric</li>\r\n            </ul>\r\n\r\n            <h3>Custom Filter</h3>\r\n            <p>A custom filter is provided by binding a regular expression, here is an example that blocks special characters including \"< > * !\"</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;input type=\"text\" pKeyFilter=\"noSpecial\"&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class KeyFilterDemo &#123;\r\n\r\n     noSpecial: RegExp = /^[^&lt;&gt;*!]+$/\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Validate Mode</h3>\r\n            <p>Instead of blocking a single keypress, the alternative validation mode which is enabled with pValidateOnly property validates the whole input\r\n                with a built-in Angular validator.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;form #form=\"ngForm\"&gt; \r\n    &lt;label for=\"cc\"&gt;Credit Card&lt;/label&gt; \r\n    &lt;input id=\"cc\" type=\"text\" name=\"cc\" [(ngModel)]=\"cc\" pInputText [pKeyFilter]=\"ccRegex\" [pValidateOnly]=\"true\" placeholder=\"1234-1234-1234-1234\"&gt;\r\n    &lt;p-message severity=\"error\" text=\"Not a valid number\" [@errorState]=\"form.dirty && !form.valid ? 'visible' : 'hidden'\"&gt;&lt;/p-message&gt;\r\n&lt;/form&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>pValidateOnly</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled, instead of blocking keys, input is validated internally to test against the regular expression.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>This directive does not apply any styling.</p>\r\n            \r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n        \r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tooltip\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3&gt;Filtering&lt;/h3&gt;\r\n&lt;div class=\"ui-g ui-fluid\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;input type=\"text\" pInputText pKeyFilter=\"int\" placeholder=\"Integers\"&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;input type=\"text\" pInputText pKeyFilter=\"num\" placeholder=\"Numbers\"&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;input type=\"text\" pInputText pKeyFilter=\"money\" placeholder=\"Money\"&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;input type=\"text\" pInputText pKeyFilter=\"hex\" placeholder=\"Hex\"&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;input type=\"text\" pInputText pKeyFilter=\"alpha\" placeholder=\"Alphabetic\"&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;input type=\"text\" pInputText pKeyFilter=\"alphanum\" placeholder=\"Alphanumberic\"&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;input type=\"text\" pInputText [pKeyFilter]=\"blockSpecial\" placeholder=\"Block # &lt; &gt; * !\"&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;input type=\"text\" pInputText [pKeyFilter]=\"blockSpace\" placeholder=\"Block space key\"&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;h3&gt;Validation Mode&lt;/h3&gt;\r\n&lt;form #form=\"ngForm\"&gt;\r\n    &lt;label for=\"cc\" style=\"display:block;margin-bottom:4px\"&gt;Credit Card&lt;/label&gt;\r\n    &lt;input id=\"cc\" type=\"text\" name=\"cc\" [(ngModel)]=\"cc\" pInputText [pKeyFilter]=\"ccRegex\" [pValidateOnly]=\"true\" placeholder=\"1234-1234-1234-1234\"&gt;\r\n    &lt;p-message severity=\"error\" text=\"Not a valid number\" [@errorState]=\"form.dirty && !form.valid ? 'visible' : 'hidden'\"&gt;&lt;/p-message&gt;\r\n&lt;/form&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class KeyFilterDemo &#123;\r\n\r\n    blockSpecial: RegExp = /^[^&lt;&gt;*!]+$/ \r\n    \r\n    blockSpace: RegExp = /[^\\s]/; \r\n    \r\n    ccRegex: RegExp = /[0-9]&#123;4&#125;-[0-9]&#123;4&#125;-[0-9]&#123;4&#125;-[0-9]&#123;4&#125;$/; \r\n    \r\n    cc: string; \r\n    \r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n        </p-tabPanel>\r\n     </p-tabView >\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/keyfilter/keyfilterdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyFilterDemoModule", function() { return KeyFilterDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keyfilterdemo__ = __webpack_require__("../../../../../src/app/showcase/components/keyfilter/keyfilterdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_message_message__ = __webpack_require__("../../../../../src/app/components/message/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keyfilterdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/keyfilter/keyfilterdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_keyfilter_keyfilter__ = __webpack_require__("../../../../../src/app/components/keyfilter/keyfilter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_inputtext_inputtext__ = __webpack_require__("../../../../../src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var KeyFilterDemoModule = (function () {
    function KeyFilterDemoModule() {
    }
    KeyFilterDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__keyfilterdemo_routing_module__["a" /* KeyFilterDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_keyfilter_keyfilter__["a" /* KeyFilterModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_inputtext_inputtext__["a" /* InputTextModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_message_message__["a" /* MessageModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__keyfilterdemo__["a" /* KeyFilterDemo */]
            ]
        })
    ], KeyFilterDemoModule);
    return KeyFilterDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/keyfilter/keyfilterdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyFilterDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var KeyFilterDemo = (function () {
    function KeyFilterDemo() {
        this.blockSpecial = /^[^<>*!]+$/;
        this.blockSpace = /[^\s]/;
        this.ccRegex = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    }
    KeyFilterDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/keyfilter/keyfilterdemo.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('errorState', [
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
        })
    ], KeyFilterDemo);
    return KeyFilterDemo;
}());



/***/ })

});
//# sourceMappingURL=keyfilterdemo.module.chunk.js.map