webpackJsonp(["responsivedemo.module"],{

/***/ "../../../../../src/app/showcase/components/responsive/responsivedemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponsiveDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__responsivedemo__ = __webpack_require__("../../../../../src/app/showcase/components/responsive/responsivedemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResponsiveDemoRoutingModule = (function () {
    function ResponsiveDemoRoutingModule() {
    }
    ResponsiveDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__responsivedemo__["a" /* ResponsiveDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], ResponsiveDemoRoutingModule);
    return ResponsiveDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/responsive/responsivedemo.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"content-section introduction\">\r\n        <div>\r\n            <span class=\"feature-title\">Responsive</span>\r\n            <span>.ui-fluid style class provides fluid width to components for efficient use of space in screen.\r\n                This example demonstrates ui-fluid in combination with Grid CSS and the components having built-in responsive modes like datatable. Note that Grid CSS is not mandatory, any grid system \r\n                can be used with ui-fluid.</span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"content-section implementation ui-fluid\">\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n                <div class=\"ui-g-4\">\r\n                    InputText\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input pInputText type=\"text\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n                <div class=\"ui-g-4\">\r\n                    Textarea\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <textarea pInputTextarea type=\"text\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n                <div class=\"ui-g-4\">\r\n                    Calendar\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-calendar [(ngModel)]=\"date\"></p-calendar>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n                <div class=\"ui-g-4\">\r\n                    Suggest\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-autoComplete [(ngModel)]=\"country\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"filterCountrySingle($event)\" field=\"name\" [size]=\"30\"\r\n                    placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n                <div class=\"ui-g-4\">\r\n                    Button\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <button pButton label=\"Save\"type=\"button\"></button>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n                <div class=\"ui-g-4\">\r\n                    SplitButton\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-splitButton label=\"Save\" icon=\"fa-check\" [model]=\"splitMenuItems\"></p-splitButton>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n                <div class=\"ui-g-4\">\r\n                    Dropdown\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity\" [autoWidth]=\"false\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n                <div class=\"ui-g-4\">\r\n                    Password\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input type=\"text\" pPassword />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n                <div class=\"ui-g-4\">\r\n                    Listbox\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-listbox [options]=\"options\" [(ngModel)]=\"selectedOption\"></p-listbox>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-6\">\r\n                <div class=\"ui-g-4\">\r\n                    Radio\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <div class=\"ui-g radiobuttons\">\r\n                        <div class=\"ui-g-12\"><p-radioButton name=\"group1\" value=\"Option 1\" [(ngModel)]=\"val\"></p-radioButton><label class=\"ui-widget\">Option 1</label></div>\r\n                        <div class=\"ui-g-12\"><p-radioButton name=\"group1\" value=\"Option 2\" [(ngModel)]=\"val\"></p-radioButton><label class=\"ui-widget\">Option 2</label></div>\r\n                        <div class=\"ui-g-12\"><p-radioButton name=\"group1\" value=\"Option 3\" [(ngModel)]=\"val\"></p-radioButton><label class=\"ui-widget\">Option 3</label></div>\r\n                        <div class=\"ui-g-12\"><p-radioButton name=\"group1\" value=\"Option 4\" [(ngModel)]=\"val\"></p-radioButton><label class=\"ui-widget\">Option 4</label></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                Dialog\r\n            </div>\r\n            <div class=\"ui-g-10\">\r\n                <button pButton label=\"Show\" type=\"button\" icon='fa-external-link' (click)=\"showDialog()\"></button>\r\n            </div>\r\n        </div>\r\n\r\n        <p-dialog header=\"Godfather 1\" [(visible)]=\"display\" [responsive]=\"true\" [resizable]=\"false\" [width]=\"300\">\r\n            <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\r\n                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\r\n                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\r\n                kind and benevolent to those who give respect,\r\n                but given to ruthless violence whenever anything stands against the good of the family.</p>\r\n        </p-dialog>\r\n\r\n        <p-panel header=\"Panel\" [style]=\"{'margin-top':'20px'}\">\r\n            The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\r\n            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\r\n            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\r\n            kind and benevolent to those who give respect,\r\n            but given to ruthless violence whenever anything stands against the good of the family.\r\n        </p-panel>\r\n\r\n        <p-dataTable [style]=\"{'margin-top':'20px'}\" [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [responsive]=\"true\">\r\n            <p-header>Cars</p-header>\r\n            <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n            <p-column field=\"year\" header=\"Year\"></p-column>\r\n            <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n            <p-column field=\"color\" header=\"Color\"></p-column>\r\n        </p-dataTable>\r\n\r\n        <p-dataGrid [style]=\"{'margin-top':'20px','margin-bottom':'20px'}\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"20\">\r\n            <p-header>\r\n                Datagrid\r\n            </p-header>\r\n            <ng-template let-car pTemplate=\"item\">\r\n                <div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\">\r\n                    <p-panel [header]=\"car.vin\" [style]=\"{'text-align':'center'}\">\r\n                        <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\">\r\n                        <div class=\"car-detail\">{{car.year}} - {{car.color}}</div>\r\n                        <hr class=\"ui-widget-content\" style=\"border-top:0\">\r\n                    </p-panel>\r\n                </div>\r\n            </ng-template>\r\n        </p-dataGrid>\r\n\r\n        <p-tree [value]=\"files\" [style]=\"{'margin-top':'20px','margin-bottom':'20px'}\"></p-tree>\r\n\r\n        <p-orderList [value]=\"cars\" [listStyle]=\"{'height':'250px'}\" [style]=\"{'margin-top':'20px','margin-bottom':'20px'}\" [responsive]=\"true\" header=\"Responsive Cars\">\r\n            <ng-template let-car pTemplate=\"item\">\r\n                <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" style=\"display:inline-block;margin:2px 0 2px 2px\" width=\"48\">\r\n                <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{car.brand}} - {{car.year}} - {{car.color}}</div>\r\n            </ng-template>\r\n        </p-orderList>\r\n\r\n        <p-carousel headerText=\"Cars\" [value]=\"cars2\" [style]=\"{'margin-top':'20px','margin-bottom':'20px'}\">\r\n            <ng-template let-car pTemplate=\"item\">\r\n                <div class=\"ui-g\" style=\"text-align:center\">\r\n                    <div class=\"ui-g-12\"><img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" width=\"60\"></div>\r\n                    <div class=\"ui-g-6\">Vin</div>\r\n                    <div class=\"ui-g-6\">{{car.vin}}</div>\r\n                    \r\n                    <div class=\"ui-g-6\">Year</div>\r\n                    <div class=\"ui-g-6\">{{car.year}}</div>\r\n                    \r\n                    <div class=\"ui-g-6\">Color</div>\r\n                    <div class=\"ui-g-6\">{{car.color}}</div>\r\n                </div>\r\n            </ng-template>\r\n        </p-carousel>\r\n\r\n        <p-pickList [source]=\"sourceCars\" [target]=\"targetCars\" sourceHeader=\"Available\" targetHeader=\"Selected\" [responsive]=\"true\" \r\n            [sourceStyle]=\"{'height':'300px'}\" [targetStyle]=\"{'height':'300px'}\" [style]=\"{'margin-top':'20px','margin-bottom':'20px'}\">\r\n            <ng-template let-car pTemplate=\"item\">\r\n                <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" style=\"display:inline-block;margin:2px 0 2px 2px\" width=\"48\">\r\n                <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{car.brand}} - {{car.year}} - {{car.color}}</div>\r\n            </ng-template>\r\n        </p-pickList>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-4\">\r\n                <p-menu [model]=\"items1\"></p-menu>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-8\">\r\n                <p-panelMenu [model]=\"items2\"></p-panelMenu>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/responsive\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6\"&gt;\r\n        &lt;div class=\"ui-g-4\"&gt;\r\n            InputText\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-g-8\"&gt;\r\n            &lt;input pInputText type=\"text\" /&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6\"&gt;\r\n        &lt;div class=\"ui-g-4\"&gt;\r\n            Textarea\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-g-8\"&gt;\r\n            &lt;textarea pInputTextarea type=\"text\"&gt;&lt;/textarea&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6\"&gt;\r\n        &lt;div class=\"ui-g-4\"&gt;\r\n            Calendar\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-g-8\"&gt;\r\n            &lt;p-calendar [(ngModel)]=\"date\"&gt;&lt;/p-calendar&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6\"&gt;\r\n        &lt;div class=\"ui-g-4\"&gt;\r\n            Suggest\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-g-8\"&gt;\r\n            &lt;p-autoComplete [(ngModel)]=\"country\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"filterCountrySingle($event)\" field=\"name\" [size]=\"30\"\r\n            placeholder=\"Countries\" [minLength]=\"1\"&gt;&lt;/p-autoComplete&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6\"&gt;\r\n        &lt;div class=\"ui-g-4\"&gt;\r\n            Button\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-g-8\"&gt;\r\n            &lt;button pButton label=\"Save\"type=\"button\"&gt;&lt;/button&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6\"&gt;\r\n        &lt;div class=\"ui-g-4\"&gt;\r\n            SplitButton\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-g-8\"&gt;\r\n            &lt;p-splitButton label=\"Save\" icon=\"fa-check\" [model]=\"splitMenuItems\"&gt;&lt;/p-splitButton&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6\"&gt;\r\n        &lt;div class=\"ui-g-4\"&gt;\r\n            Dropdown\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-g-8\"&gt;\r\n            &lt;p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity\" [autoWidth]=\"false\"&gt;&lt;/p-dropdown&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6\"&gt;\r\n        &lt;div class=\"ui-g-4\"&gt;\r\n            Password\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-g-8\"&gt;\r\n            &lt;input type=\"text\" pPassword /&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n\r\n    &lt;div class=\"ui-g-12 ui-md-6\"&gt;\r\n        &lt;div class=\"ui-g-4\"&gt;\r\n            Listbox\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-g-8\"&gt;\r\n            &lt;p-listbox [options]=\"options\" [(ngModel)]=\"selectedOption\"&gt;&lt;/p-listbox&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-6\"&gt;\r\n        &lt;div class=\"ui-g-4\"&gt;\r\n            Radio\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-g-8\"&gt;\r\n            &lt;div class=\"ui-g radiobuttons\"&gt;\r\n                &lt;div class=\"ui-g-12\"&gt;&lt;p-radioButton name=\"group1\" value=\"Option 1\" [(ngModel)]=\"val\"&gt;&lt;/p-radioButton&gt;&lt;label class=\"ui-widget\"&gt;Option 1&lt;/label&gt;&lt;/div&gt;\r\n                &lt;div class=\"ui-g-12\"&gt;&lt;p-radioButton name=\"group1\" value=\"Option 2\" [(ngModel)]=\"val\"&gt;&lt;/p-radioButton&gt;&lt;label class=\"ui-widget\"&gt;Option 2&lt;/label&gt;&lt;/div&gt;\r\n                &lt;div class=\"ui-g-12\"&gt;&lt;p-radioButton name=\"group1\" value=\"Option 3\" [(ngModel)]=\"val\"&gt;&lt;/p-radioButton&gt;&lt;label class=\"ui-widget\"&gt;Option 3&lt;/label&gt;&lt;/div&gt;\r\n                &lt;div class=\"ui-g-12\"&gt;&lt;p-radioButton name=\"group1\" value=\"Option 4\" [(ngModel)]=\"val\"&gt;&lt;/p-radioButton&gt;&lt;label class=\"ui-widget\"&gt;Option 4&lt;/label&gt;&lt;/div&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-2\"&gt;\r\n        Dialog\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-10\"&gt;\r\n        &lt;button pButton label=\"Show\" type=\"button\" icon='fa-external-link' (click)=\"showDialog()\"&gt;&lt;/button&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;p-dialog header=\"Godfather 1\" [(visible)]=\"display\" [responsive]=\"true\" [resizable]=\"false\" [width]=\"300\"&gt;\r\n    &lt;p&gt;The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\r\n        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\r\n        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\r\n        kind and benevolent to those who give respect,\r\n        but given to ruthless violence whenever anything stands against the good of the family.&lt;/p&gt;\r\n&lt;/p-dialog&gt;\r\n\r\n&lt;p-panel header=\"Panel\" [style]=\"&#123;'margin-top':'20px'&#125;\"&gt;\r\n    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\r\n    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.\r\n    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,\r\n    kind and benevolent to those who give respect,\r\n    but given to ruthless violence whenever anything stands against the good of the family.\r\n&lt;/p-panel&gt;\r\n\r\n&lt;p-dataTable [style]=\"&#123;'margin-top':'20px'&#125;\" [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [responsive]=\"true\"&gt;\r\n    &lt;p-header&gt;Cars&lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;p-dataGrid [style]=\"&#123;'margin-top':'20px','margin-bottom':'20px'&#125;\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"20\"&gt;\r\n    &lt;p-header&gt;\r\n        Datagrid\r\n    &lt;/p-header&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        &lt;div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\"&gt;\r\n            &lt;p-panel [header]=\"car.vin\" [style]=\"&#123;'text-align':'center'&#125;\"&gt;\r\n                &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.gif\"&gt;\r\n                &lt;div class=\"car-detail\"&gt;&#123;&#123;car.year&#125;&#125; - &#123;&#123;car.color&#125;&#125;&lt;/div&gt;\r\n                &lt;hr class=\"ui-widget-content\" style=\"border-top:0\"&gt;\r\n            &lt;/p-panel&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataGrid&gt;\r\n\r\n&lt;p-tree [value]=\"files\" [style]=\"&#123;'margin-top':'20px','margin-bottom':'20px'&#125;\"&gt;&lt;/p-tree&gt;\r\n\r\n&lt;p-orderList [value]=\"cars\" [listStyle]=\"&#123;'height':'250px'&#125;\" [style]=\"&#123;'margin-top':'20px','margin-bottom':'20px'&#125;\" [responsive]=\"true\" header=\"Responsive Cars\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.gif\" style=\"display:inline-block;margin:2px 0 2px 2px\" width=\"48\"&gt;\r\n        &lt;div style=\"font-size:14px;float:right;margin:15px 5px 0 0\"&gt;&#123;&#123;car.brand&#125;&#125; - &#123;&#123;car.year&#125;&#125; - &#123;&#123;car.color&#125;&#125;&lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-orderList&gt;\r\n\r\n&lt;p-carousel headerText=\"Cars\" [value]=\"cars2\" [style]=\"&#123;'margin-top':'20px','margin-bottom':'20px'&#125;\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-g\" style=\"text-align:center\"&gt;\r\n            &lt;div class=\"ui-g-12\"&gt;&lt;img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" width=\"60\"&gt;&lt;/div&gt;\r\n            &lt;div class=\"ui-g-6\"&gt;Vin&lt;/div&gt;\r\n            &lt;div class=\"ui-g-6\"&gt;{{car.vin}}&lt;/div&gt;\r\n            \r\n            &lt;div class=\"ui-g-6\"&gt;Year&lt;/div&gt;\r\n            &lt;div class=\"ui-g-6\"&gt;{{car.year}}&lt;/div&gt;\r\n            \r\n            &lt;div class=\"ui-g-6\"&gt;Color&lt;/div&gt;\r\n            &lt;div class=\"ui-g-6\"&gt;{{car.color}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-carousel&gt;\r\n\r\n&lt;p-pickList [source]=\"sourceCars\" [target]=\"targetCars\" sourceHeader=\"Available\" targetHeader=\"Selected\" [responsive]=\"true\" \r\n    [sourceStyle]=\"&#123;'height':'300px'&#125;\" [targetStyle]=\"&#123;'height':'300px'&#125;\" [style]=\"&#123;'margin-top':'20px','margin-bottom':'20px'&#125;\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.gif\" style=\"display:inline-block;margin:2px 0 2px 2px\" width=\"48\"&gt;\r\n        &lt;div style=\"font-size:14px;float:right;margin:15px 5px 0 0\"&gt;&#123;&#123;car.brand&#125;&#125; - &#123;&#123;car.year&#125;&#125; - &#123;&#123;car.color&#125;&#125;&lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-pickList&gt;\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;p-menu [model]=\"items1\"&gt;&lt;/p-menu&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-8\"&gt;\r\n        &lt;p-panelMenu [model]=\"items2\"&gt;&lt;/p-panelMenu&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ResponsiveDemo implements OnInit &#123;\r\n\r\n    cities: SelectItem[];\r\n\r\n    files: TreeNode[];\r\n\r\n    sourceCars: Car[];\r\n\r\n    targetCars: Car[];\r\n\r\n    data: any;\r\n\r\n    selectedCity: string;\r\n\r\n    val: string;\r\n\r\n    options: SelectItem[];\r\n\r\n    selectedOption: string;\r\n\r\n    display: boolean = false;\r\n\r\n    cars: Car[];\r\n\r\n    cars1: Car[];\r\n\r\n    cars2: Car[];\r\n\r\n    cars3: Car[];\r\n\r\n    date: string;\r\n\r\n    text: string;\r\n\r\n    filteredCountriesSingle: any[];\r\n    \r\n    items1: MenuItem[];\r\n    \r\n    items2: MenuItem[];\r\n    \r\n    splitMenuItems: MenuItem[];\r\n    \r\n    country: any;\r\n    \r\n    showDialog() &#123;\r\n        this.display = true;\r\n    &#125;\r\n\r\n    constructor(private carService: CarService, private countryService: CountryService, private nodeService: NodeService) &#123;\r\n        this.cars2 = [\r\n            &#123;vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black'&#125;,\r\n            &#123;vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White'&#125;,\r\n            &#123;vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue'&#125;,\r\n            &#123;vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White'&#125;,\r\n            &#123;vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red'&#125;,\r\n            &#123;vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue'&#125;,\r\n            &#123;vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow'&#125;,\r\n            &#123;vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown'&#125;,\r\n            &#123;vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black'&#125;\r\n        ];\r\n\r\n        this.cities = [];\r\n        this.cities.push(&#123;label:'Select Cities', value:'Select Cities'&#125;);\r\n        this.cities.push(&#123;label:'New York', value:'New York'&#125;);\r\n        this.cities.push(&#123;label:'Rome', value:'Rome'&#125;);\r\n        this.cities.push(&#123;label:'London', value:'London'&#125;);\r\n        this.cities.push(&#123;label:'Istanbul', value:'Istanbul'&#125;);\r\n        this.cities.push(&#123;label:'Paris', value:'Paris'&#125;);\r\n\r\n        this.options = [];\r\n        this.options.push(&#123;label:'Option 1', value:'Option 1'&#125;);\r\n        this.options.push(&#123;label:'Option 2', value:'Option 2'&#125;);\r\n        this.options.push(&#123;label:'Option 3', value:'Option 3'&#125;);\r\n        this.options.push(&#123;label:'Option 4', value:'Option 4'&#125;);\r\n        this.options.push(&#123;label:'Option 5', value:'Option 5'&#125;);\r\n\r\n        this.data = &#123;\r\n            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n            datasets: [\r\n                &#123;\r\n                    label: 'My First dataset',\r\n                    fillColor: 'rgba(220,220,220,0.2)',\r\n                    strokeColor: 'rgba(220,220,220,1)',\r\n                    pointColor: 'rgba(220,220,220,1)',\r\n                    pointStrokeColor: '#fff',\r\n                    pointHighlightFill: '#fff',\r\n                    pointHighlightStroke: 'rgba(220,220,220,1)',\r\n                    data: [65, 59, 80, 81, 56, 55, 40]\r\n                &#125;,\r\n                &#123;\r\n                    label: 'My Second dataset',\r\n                    fillColor: 'rgba(151,187,205,0.2)',\r\n                    strokeColor: 'rgba(151,187,205,1)',\r\n                    pointColor: 'rgba(151,187,205,1)',\r\n                    pointStrokeColor: '#fff',\r\n                    pointHighlightFill: '#fff',\r\n                    pointHighlightStroke: 'rgba(151,187,205,1)',\r\n                    data: [28, 48, 40, 19, 86, 27, 90]\r\n                &#125;\r\n            ]\r\n        &#125;\r\n    &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\r\n        this.nodeService.getFiles().then(files => this.files = files);\r\n        this.carService.getCarsSmall().then(cars1 => this.cars1 = cars1);\r\n        this.carService.getCarsSmall().then(cars3 => this.sourceCars = cars3);\r\n        this.targetCars = [];\r\n        \r\n        this.items1 = [&#123;\r\n            label: 'File',\r\n            items: [\r\n                &#123;label: 'New', icon: 'fa-plus'&#125;,\r\n                &#123;label: 'Open', icon: 'fa-download'&#125;\r\n            ]\r\n        &#125;,\r\n        &#123;\r\n            label: 'Edit',\r\n            items: [\r\n                &#123;label: 'Undo', icon: 'fa-refresh'&#125;,\r\n                &#123;label: 'Redo', icon: 'fa-repeat'&#125;\r\n            ]\r\n        &#125;];\r\n        \r\n        this.items2 = [\r\n            &#123;\r\n                label: 'File',\r\n                icon: 'fa-file-o',\r\n                items: [&#123;\r\n                        label: 'New', \r\n                        icon: 'fa-plus',\r\n                        items: [\r\n                            &#123;label: 'Project'&#125;,\r\n                            &#123;label: 'Other'&#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;label: 'Open'&#125;,\r\n                    &#123;label: 'Quit'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Edit',\r\n                icon: 'fa-edit',\r\n                items: [\r\n                    &#123;label: 'Undo', icon: 'fa-mail-forward'&#125;,\r\n                    &#123;label: 'Redo', icon: 'fa-mail-reply'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Help',\r\n                icon: 'fa-question',\r\n                items: [\r\n                    &#123;\r\n                        label: 'Contents'\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Search', \r\n                        icon: 'fa-search', \r\n                        items: [\r\n                            &#123;\r\n                                label: 'Text', \r\n                                items: [\r\n                                    &#123;\r\n                                        label: 'Workspace'\r\n                                    &#125;\r\n                                ]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'File'\r\n                            &#125;\r\n                    ]&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Actions',\r\n                icon: 'fa-gear',\r\n                items: [\r\n                    &#123;\r\n                        label: 'Edit',\r\n                        icon: 'fa-refresh',\r\n                        items: [\r\n                            &#123;label: 'Save', icon: 'fa-save'&#125;,\r\n                            &#123;label: 'Update', icon: 'fa-save'&#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Other',\r\n                        icon: 'fa-phone',\r\n                        items: [\r\n                            &#123;label: 'Delete', icon: 'fa-minus'&#125;\r\n                        ]\r\n                    &#125;\r\n                ]\r\n            &#125;\r\n        ];\r\n        \r\n        this.splitMenuItems = [\r\n            &#123;label: 'Update', icon: 'fa-refresh'&#125;,\r\n            &#123;label: 'Delete', icon: 'fa-close'&#125;,\r\n            &#123;label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'&#125;,\r\n            &#123;label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']&#125;\r\n        ];\r\n    &#125;\r\n\r\n    filterCountrySingle(event) &#123;\r\n        let query = event.query;\r\n        this.countryService.getCountries().then(countries => &#123;\r\n            this.filteredCountriesSingle = this.filterCountry(query, countries);\r\n        &#125;);\r\n    &#125;\r\n\r\n    filterCountry(query, countries: any[]):any[] &#123;\r\n        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side\r\n        let filtered : any[] = [];\r\n        for(let i = 0; i < countries.length; i++) &#123;\r\n            let country = countries[i];\r\n            if(country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) &#123;\r\n                filtered.push(country);\r\n            &#125;\r\n        &#125;\r\n        return filtered;\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/responsive/responsivedemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveDemoModule", function() { return ResponsiveDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__responsivedemo__ = __webpack_require__("../../../../../src/app/showcase/components/responsive/responsivedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__responsivedemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/responsive/responsivedemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_inputtext_inputtext__ = __webpack_require__("../../../../../src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_inputtextarea_inputtextarea__ = __webpack_require__("../../../../../src/app/components/inputtextarea/inputtextarea.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_calendar_calendar__ = __webpack_require__("../../../../../src/app/components/calendar/calendar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_autocomplete_autocomplete__ = __webpack_require__("../../../../../src/app/components/autocomplete/autocomplete.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_splitbutton_splitbutton__ = __webpack_require__("../../../../../src/app/components/splitbutton/splitbutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dropdown_dropdown__ = __webpack_require__("../../../../../src/app/components/dropdown/dropdown.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_password_password__ = __webpack_require__("../../../../../src/app/components/password/password.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_listbox_listbox__ = __webpack_require__("../../../../../src/app/components/listbox/listbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_radiobutton_radiobutton__ = __webpack_require__("../../../../../src/app/components/radiobutton/radiobutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dialog_dialog__ = __webpack_require__("../../../../../src/app/components/dialog/dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_panel_panel__ = __webpack_require__("../../../../../src/app/components/panel/panel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_datatable_datatable__ = __webpack_require__("../../../../../src/app/components/datatable/datatable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_datagrid_datagrid__ = __webpack_require__("../../../../../src/app/components/datagrid/datagrid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_carousel_carousel__ = __webpack_require__("../../../../../src/app/components/carousel/carousel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_orderlist_orderlist__ = __webpack_require__("../../../../../src/app/components/orderlist/orderlist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_picklist_picklist__ = __webpack_require__("../../../../../src/app/components/picklist/picklist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_menu_menu__ = __webpack_require__("../../../../../src/app/components/menu/menu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_panelmenu_panelmenu__ = __webpack_require__("../../../../../src/app/components/panelmenu/panelmenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_tree_tree__ = __webpack_require__("../../../../../src/app/components/tree/tree.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var ResponsiveDemoModule = (function () {
    function ResponsiveDemoModule() {
    }
    ResponsiveDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__responsivedemo_routing_module__["a" /* ResponsiveDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_inputtext_inputtext__["a" /* InputTextModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_inputtextarea_inputtextarea__["a" /* InputTextareaModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_calendar_calendar__["a" /* CalendarModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_autocomplete_autocomplete__["a" /* AutoCompleteModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_splitbutton_splitbutton__["a" /* SplitButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__components_password_password__["a" /* PasswordModule */],
                __WEBPACK_IMPORTED_MODULE_10__components_dropdown_dropdown__["a" /* DropdownModule */],
                __WEBPACK_IMPORTED_MODULE_12__components_listbox_listbox__["a" /* ListboxModule */],
                __WEBPACK_IMPORTED_MODULE_13__components_radiobutton_radiobutton__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_14__components_dialog_dialog__["a" /* DialogModule */],
                __WEBPACK_IMPORTED_MODULE_15__components_panel_panel__["a" /* PanelModule */],
                __WEBPACK_IMPORTED_MODULE_16__components_datatable_datatable__["a" /* DataTableModule */],
                __WEBPACK_IMPORTED_MODULE_17__components_datagrid_datagrid__["a" /* DataGridModule */],
                __WEBPACK_IMPORTED_MODULE_18__components_carousel_carousel__["a" /* CarouselModule */],
                __WEBPACK_IMPORTED_MODULE_19__components_orderlist_orderlist__["a" /* OrderListModule */],
                __WEBPACK_IMPORTED_MODULE_20__components_picklist_picklist__["a" /* PickListModule */],
                __WEBPACK_IMPORTED_MODULE_21__components_menu_menu__["a" /* MenuModule */],
                __WEBPACK_IMPORTED_MODULE_22__components_panelmenu_panelmenu__["a" /* PanelMenuModule */],
                __WEBPACK_IMPORTED_MODULE_24__components_tree_tree__["b" /* TreeModule */],
                __WEBPACK_IMPORTED_MODULE_23__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_25__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__responsivedemo__["a" /* ResponsiveDemo */]
            ]
        })
    ], ResponsiveDemoModule);
    return ResponsiveDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/responsive/responsivedemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponsiveDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__("../../../../../src/app/showcase/service/carservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_nodeservice__ = __webpack_require__("../../../../../src/app/showcase/service/nodeservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_countryservice__ = __webpack_require__("../../../../../src/app/showcase/service/countryservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResponsiveDemo = (function () {
    function ResponsiveDemo(carService, countryService, nodeService) {
        this.carService = carService;
        this.countryService = countryService;
        this.nodeService = nodeService;
        this.display = false;
        this.cars2 = [
            { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
            { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
            { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
            { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
            { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red' },
            { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
            { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
            { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
            { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
        ];
        this.cities = [];
        this.cities.push({ label: 'Select Cities', value: 'Select Cities' });
        this.cities.push({ label: 'New York', value: 'New York' });
        this.cities.push({ label: 'Rome', value: 'Rome' });
        this.cities.push({ label: 'London', value: 'London' });
        this.cities.push({ label: 'Istanbul', value: 'Istanbul' });
        this.cities.push({ label: 'Paris', value: 'Paris' });
        this.options = [];
        this.options.push({ label: 'Option 1', value: 'Option 1' });
        this.options.push({ label: 'Option 2', value: 'Option 2' });
        this.options.push({ label: 'Option 3', value: 'Option 3' });
        this.options.push({ label: 'Option 4', value: 'Option 4' });
        this.options.push({ label: 'Option 5', value: 'Option 5' });
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    fillColor: 'rgba(220,220,220,0.2)',
                    strokeColor: 'rgba(220,220,220,1)',
                    pointColor: 'rgba(220,220,220,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    fillColor: 'rgba(151,187,205,0.2)',
                    strokeColor: 'rgba(151,187,205,1)',
                    pointColor: 'rgba(151,187,205,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151,187,205,1)',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
    }
    ResponsiveDemo.prototype.showDialog = function () {
        this.display = true;
    };
    ResponsiveDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
        this.nodeService.getFiles().then(function (files) { return _this.files = files; });
        this.carService.getCarsSmall().then(function (cars1) { return _this.cars1 = cars1; });
        this.carService.getCarsSmall().then(function (cars3) { return _this.sourceCars = cars3; });
        this.targetCars = [];
        this.items1 = [{
                label: 'File',
                items: [
                    { label: 'New', icon: 'fa-plus' },
                    { label: 'Open', icon: 'fa-download' }
                ]
            },
            {
                label: 'Edit',
                items: [
                    { label: 'Undo', icon: 'fa-refresh' },
                    { label: 'Redo', icon: 'fa-repeat' }
                ]
            }];
        this.items2 = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                        label: 'New',
                        icon: 'fa-plus',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    { label: 'Undo', icon: 'fa-mail-forward' },
                    { label: 'Redo', icon: 'fa-mail-reply' }
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            { label: 'Save', icon: 'fa-save' },
                            { label: 'Update', icon: 'fa-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            { label: 'Delete', icon: 'fa-minus' }
                        ]
                    }
                ]
            }
        ];
        this.splitMenuItems = [
            { label: 'Update', icon: 'fa-refresh' },
            { label: 'Delete', icon: 'fa-close' },
            { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
        ];
    };
    ResponsiveDemo.prototype.filterCountrySingle = function (event) {
        var _this = this;
        var query = event.query;
        this.countryService.getCountries().then(function (countries) {
            _this.filteredCountriesSingle = _this.filterCountry(query, countries);
        });
    };
    ResponsiveDemo.prototype.filterCountry = function (query, countries) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    };
    ResponsiveDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/responsive/responsivedemo.html"),
            styles: ["\n        .ui-datagrid .ui-datagrid-column {\n            text-align: center;\n        }\n        \n        .radiobuttons > * {\n            vertical-align: middle;\n        }\n    "],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */], __WEBPACK_IMPORTED_MODULE_3__service_countryservice__["a" /* CountryService */], __WEBPACK_IMPORTED_MODULE_2__service_nodeservice__["a" /* NodeService */]])
    ], ResponsiveDemo);
    return ResponsiveDemo;
}());



/***/ })

});
//# sourceMappingURL=responsivedemo.module.chunk.js.map