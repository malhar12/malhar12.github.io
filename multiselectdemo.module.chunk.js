webpackJsonp(["multiselectdemo.module"],{

/***/ "../../../../../src/app/showcase/components/multiselect/multiselectdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiSelectDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multiselectdemo__ = __webpack_require__("../../../../../src/app/showcase/components/multiselect/multiselectdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MultiSelectDemoRoutingModule = (function () {
    function MultiSelectDemoRoutingModule() {
    }
    MultiSelectDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__multiselectdemo__["a" /* MultiSelectDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], MultiSelectDemoRoutingModule);
    return MultiSelectDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/multiselect/multiselectdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">MultiSelect</span>\r\n        <span>MultiSelect is used to select multiple items from a collection.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-multiSelect [options]=\"cars\" [(ngModel)]=\"selectedCars1\" [panelStyle]=\"{minWidth:'12em'}\"></p-multiSelect>\r\n    <p>Selected Cars: {{selectedCars1}}</p>\r\n    \r\n    <h3>Template</h3>\r\n    <p-multiSelect [options]=\"cars\" [(ngModel)]=\"selectedCars2\" [panelStyle]=\"{minWidth:'12em'}\">\r\n        <ng-template let-car pTemplate=\"item\">\r\n            <img src=\"assets/showcase/images/demo/car/{{car.label}}.png\" style=\"width:24px;display:inline-block;vertical-align:middle\"/>\r\n            <div style=\"font-size:14px;float:right;margin-top:4px\">{{car.label}}</div>\r\n        </ng-template>\r\n    </p-multiSelect>\r\n    <p>Selected Cars: {{selectedCars2}}</p>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;MultiSelectModule&#125; from 'primeng/multiselect';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>MultiSelect requires a value to bind and a collection of options. There are two alternatives of how to define the options property; one way is providing a collection of SelectItem\r\n            instances whereas other way is providing an array of arbitrary objects along with the optionLabel property to specify the field name of the option. SelectItem API is designed to have more control on how \r\n            the options are displayed such as grouping and disabling however in most cases an arbitrary object collection will suffice. Example below demonstrates both cases.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-multiSelect [options]=\"cities1\" [(ngModel)]=\"selectedCities1\"&gt;&lt;/p-multiSelect&gt;\r\n\r\n&lt;p-multiSelect [options]=\"cities2\" [(ngModel)]=\"selectedCities2\" optionLabel=\"name\"&gt;&lt;/p-multiSelect&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;SelectItem&#125; from 'primeng/api';\r\n\r\ninterface City &#123;&#123;\r\n    name: string,\r\n    code: string\r\n&#125;&#125;\r\n\r\nexport class MyModel &#123;\r\n\r\n    cities1: SelectItem[];\r\n    \r\n    cities2: City[];\r\n\r\n    selectedCities1: City[];\r\n    \r\n    selectedCities2: City[];\r\n\r\n    constructor() &#123;\r\n        //SelectItem API with label-value pairs\r\n        this.cities1 = [\r\n            &#123;label:'New York', value:&#123;id:1, name: 'New York', code: 'NY'&#125;&#125;,\r\n            &#123;label:'Rome', value:&#123;id:2, name: 'Rome', code: 'RM'&#125;&#125;,\r\n            &#123;label:'London', value:&#123;id:3, name: 'London', code: 'LDN'&#125;&#125;,\r\n            &#123;label:'Istanbul', value:&#123;id:4, name: 'Istanbul', code: 'IST'&#125;&#125;\r\n            &#123;label:'Paris', value:&#123;id:5, name: 'Paris', code: 'PRS'&#125;&#125;\r\n        ];\r\n        \r\n        //An array of cities\r\n        this.cities2 = [\r\n            &#123;name: 'New York', code: 'NY'&#125;,\r\n            &#123;name: 'Rome', code: 'RM'&#125;,\r\n            &#123;name: 'London', code: 'LDN'&#125;,\r\n            &#123;name: 'Istanbul', code: 'IST'&#125;,\r\n            &#123;name: 'Paris', code: 'PRS'&#125;\r\n        ];\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Model Driven Forms</h3>\r\n            <p>MultiSelect can be used in a model driven form as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-multiSelect [options]=\"cities\" formControlName=\"selectedCities\"&gt;&lt;/p-multiSelect&gt;\r\n</code>\r\n</pre>\r\n        \r\n            <h3>Templating</h3>\r\n            <p>Label of a selectitem is displayed by default next to the checkbox in the overlay panel and it is possible to customize\r\n            the content using templating. The ngTemplate receives the selectitem as the implicit variable along with the index of the option.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-multiSelect [options]=\"cars\" [(ngModel)]=\"selectedCars2\" [panelStyle]=\"&#123;minWidth:'12em'}\"&gt;\r\n    &lt;ng-template let-car let-i=\"index\" pTemplate=\"item\"&gt;\r\n        {{i}}\r\n        &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.label&#125;&#125;.png\" style=\"width:24px;display:inline-block;vertical-align:middle\"/&gt;\r\n        &lt;div style=\"font-size:14px;float:right;margin-top:4px\"&gt;&#123;&#123;car.label&#125;&#125;&lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-multiSelect&gt;\r\n&lt;p&gt;Selected Cars: &#123;&#123;selectedCars2&#125;&#125;&lt;/p&gt;\r\n</code>\r\n</pre>\r\n        \r\n        \r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Type</th>\r\n                        <th>Default</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>options</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of objects to display as the available options.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>optionLabel</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the element should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filter</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>When specified, displays an input field to filter the items on keyup.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filterPlaceHolder</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Defines placeholder of the filter input.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>defaultLabel</td>\r\n                            <td>string</td>\r\n                            <td>Choose</td>\r\n                            <td>Label to display when there are no selections.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>object</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>panelStyle</td>\r\n                            <td>object</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the overlay panel.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the overlay panel.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>scrollHeight</td>\r\n                            <td>string</td>\r\n                            <td>200px</td>\r\n                            <td>Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>overlayVisible</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Specifies the visibility of the options panel.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tabindex</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Index of the element in tabbing order.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dataKey</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>A property to uniquely identify a value in options.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputId</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>displaySelectedLabel</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to show labels of selected item labels or use default label.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>maxSelectedLabels</td>\r\n                            <td>number</td>\r\n                            <td>3</td>\r\n                            <td>Decides how many selected item labels to show at most.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selectedItemsLabel</td>\r\n                            <td>string</td>\r\n                            <td>&#123;0&#125; items selected</td>\r\n                            <td>Label to display after exceeding max selected labels.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showToggleAll</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to show the checkbox at header to toggle all items at once.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>resetFilterOnHide</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Clears the filter value when hiding the dropdown.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dropdownIcon</td>\r\n                            <td>string</td>\r\n                            <td>fa fa-fw fa-caret-down</td>\r\n                            <td>Icon class of the dropdown icon.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onChange</td>\r\n                            <td>event.originalEvent: browser event<br />\r\n                                event.value: Current selected values<br />\r\n                                event.itemValue: Toggled item value\r\n                            </td>\r\n                            <td>Callback to invoke when value changes.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onFocus</td>\r\n                            <td>event.originalEvent: browser event</td>\r\n                            <td>Callback to invoke when multiselect receives focus.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onBlur</td>\r\n                            <td>event.originalEvent: browser event</td>\r\n                            <td>Callback to invoke when multiselect loses focus.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onPanelShow</td>\r\n                            <td>-</td>\r\n                            <td>Callback to invoke when overlay panel becomes visible.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onPanelHide</td>\r\n                            <td>-</td>\r\n                            <td>Callback to invoke when overlay panel becomes hidden.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-multiselect</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-multiselect-label-container</td>\r\n                            <td>Container of the label to display selected items.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-multiselect-label-container</td>\r\n                            <td>Label to display selected items.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-multiselect-trigger</td>\r\n                            <td>Dropdown button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-multiselect-filter-container</td>\r\n                            <td>Container of filter input.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-multiselect-panel</td>\r\n                            <td>Overlay panel for items.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-multiselect-items</td>\r\n                            <td>List container of items.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-multiselect-item</td>\r\n                            <td>An item in the list.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/multiselect\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-multiSelect [options]=\"cars\" [(ngModel)]=\"selectedCars1\" [panelStyle]=\"&#123;minWidth:'12em'}\"&gt;&lt;/p-multiSelect&gt;\r\n&lt;p&gt;Selected Cars: &#123;&#123;selectedCars1&#125;&#125;&lt;/p&gt;\r\n\r\n&lt;h3&gt;Template&lt;/h3&gt;\r\n&lt;p-multiSelect [options]=\"cars\" [(ngModel)]=\"selectedCars2\" [panelStyle]=\"&#123;minWidth:'12em'}\"&gt;\r\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n        &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.label&#125;&#125;.png\" style=\"width:24px;display:inline-block;vertical-align:middle\"/&gt;\r\n        &lt;div style=\"font-size:14px;float:right;margin-top:4px\"&gt;&#123;&#123;car.label&#125;&#125;&lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-multiSelect&gt;\r\n&lt;p&gt;Selected Cars: &#123;&#123;selectedCars2&#125;&#125;&lt;/p&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MultiSelectDemo &#123;\r\n\r\n    cars: SelectItem[];\r\n\r\n    selectedCars1: string[] = [];\r\n\r\n    selectedCars2: string[] = [];\r\n\r\n    constructor() &#123;\r\n        this.cars = [\r\n            &#123;label: 'Audi', value: 'Audi'&#125;,\r\n            &#123;label: 'BMW', value: 'BMW'&#125;,\r\n            &#123;label: 'Fiat', value: 'Fiat'&#125;,\r\n            &#123;label: 'Ford', value: 'Ford'&#125;,\r\n            &#123;label: 'Honda', value: 'Honda'&#125;,\r\n            &#123;label: 'Jaguar', value: 'Jaguar'&#125;,\r\n            &#123;label: 'Mercedes', value: 'Mercedes'&#125;,\r\n            &#123;label: 'Renault', value: 'Renault'&#125;,\r\n            &#123;label: 'VW', value: 'VW'&#125;,\r\n            &#123;label: 'Volvo', value: 'Volvo'&#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/multiselect/multiselectdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectDemoModule", function() { return MultiSelectDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__multiselectdemo__ = __webpack_require__("../../../../../src/app/showcase/components/multiselect/multiselectdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__multiselectdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/multiselect/multiselectdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_multiselect_multiselect__ = __webpack_require__("../../../../../src/app/components/multiselect/multiselect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MultiSelectDemoModule = (function () {
    function MultiSelectDemoModule() {
    }
    MultiSelectDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__multiselectdemo_routing_module__["a" /* MultiSelectDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_multiselect_multiselect__["a" /* MultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__multiselectdemo__["a" /* MultiSelectDemo */]
            ]
        })
    ], MultiSelectDemoModule);
    return MultiSelectDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/multiselect/multiselectdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiSelectDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MultiSelectDemo = (function () {
    function MultiSelectDemo() {
        this.selectedCars1 = [];
        this.selectedCars2 = [];
        this.cars = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' },
        ];
    }
    MultiSelectDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/multiselect/multiselectdemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], MultiSelectDemo);
    return MultiSelectDemo;
}());



/***/ })

});
//# sourceMappingURL=multiselectdemo.module.chunk.js.map