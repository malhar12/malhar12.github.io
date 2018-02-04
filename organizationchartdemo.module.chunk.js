webpackJsonp(["organizationchartdemo.module"],{

/***/ "../../../../../src/app/components/organizationchart/organizationchart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OrganizationChartNode */
/* unused harmony export OrganizationChart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationChartModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_shared__ = __webpack_require__("../../../../../src/app/components/common/shared.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var OrganizationChartNode = (function () {
    function OrganizationChartNode(chart) {
        this.chart = chart;
    }
    Object.defineProperty(OrganizationChartNode.prototype, "leaf", {
        get: function () {
            return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrganizationChartNode.prototype, "colspan", {
        get: function () {
            return (this.node.children && this.node.children.length) ? this.node.children.length * 2 : null;
        },
        enumerable: true,
        configurable: true
    });
    OrganizationChartNode.prototype.onNodeClick = function (event, node) {
        this.chart.onNodeClick(event, node);
    };
    OrganizationChartNode.prototype.toggleNode = function (event, node) {
        node.expanded = !node.expanded;
        event.preventDefault();
    };
    OrganizationChartNode.prototype.isSelected = function () {
        return this.chart.isSelected(this.node);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], OrganizationChartNode.prototype, "node", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], OrganizationChartNode.prototype, "root", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], OrganizationChartNode.prototype, "first", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], OrganizationChartNode.prototype, "last", void 0);
    OrganizationChartNode = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[pOrganizationChartNode]',
            template: "\n        <tr *ngIf=\"node\">\n            <td [attr.colspan]=\"colspan\">\n                <div class=\"ui-organizationchart-node-content ui-widget-content ui-corner-all {{node.styleClass}}\" \n                    [ngClass]=\"{'ui-organizationchart-selectable-node': chart.selectionMode && node.selectable !== false,'ui-state-highlight':isSelected()}\"\n                    (click)=\"onNodeClick($event,node)\">\n                    <div *ngIf=\"!chart.getTemplateForNode(node)\">{{node.label}}</div>\n                    <div *ngIf=\"chart.getTemplateForNode(node)\">\n                        <ng-container *ngTemplateOutlet=\"chart.getTemplateForNode(node); context: {$implicit: node}\"></ng-container>\n                    </div>\n                    <a *ngIf=\"!leaf\" href=\"#\" class=\"ui-node-toggler\" (click)=\"toggleNode($event, node)\">\n                        <i class=\"fa ui-node-toggler-icon\" [ngClass]=\"{'fa-chevron-down': node.expanded, 'fa-chevron-up': !node.expanded}\"></i>\n                    </a>\n                </div>\n            </td>\n        </tr>\n        <tr [style.visibility]=\"!leaf&&node.expanded ? 'inherit' : 'hidden'\" class=\"ui-organizationchart-lines\" [@childState]=\"'in'\">\n            <td [attr.colspan]=\"colspan\">\n                <div class=\"ui-organizationchart-line-down\"></div>\n            </td>\n        </tr>\n        <tr [style.visibility]=\"!leaf&&node.expanded ? 'inherit' : 'hidden'\" class=\"ui-organizationchart-lines\" [@childState]=\"'in'\">\n            <ng-template ngFor let-child [ngForOf]=\"node.children\" let-first=\"first\" let-last=\"last\">\n                <td class=\"ui-organizationchart-line-left\" [ngClass]=\"{'ui-organizationchart-line-top':!first}\">&nbsp;</td>\n                <td class=\"ui-organizationchart-line-right\" [ngClass]=\"{'ui-organizationchart-line-top':!last}\">&nbsp;</td>\n            </ng-template>\n        </tr>\n        <tr [style.visibility]=\"!leaf&&node.expanded ? 'inherit' : 'hidden'\" class=\"ui-organizationchart-nodes\" [@childState]=\"'in'\">\n            <td *ngFor=\"let child of node.children\" colspan=\"2\">\n                <table class=\"ui-organizationchart-table\" pOrganizationChartNode [node]=\"child\"></table>\n            </td>\n        </tr>\n    ",
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('childState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(150)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(150, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* forwardRef */])(function () { return OrganizationChart; }))),
        __metadata("design:paramtypes", [OrganizationChart])
    ], OrganizationChartNode);
    return OrganizationChartNode;
}());

var OrganizationChart = (function () {
    function OrganizationChart(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.selectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onNodeSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onNodeUnselect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(OrganizationChart.prototype, "root", {
        get: function () {
            return this.value && this.value.length ? this.value[0] : null;
        },
        enumerable: true,
        configurable: true
    });
    OrganizationChart.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.templates.length) {
            this.templateMap = {};
        }
        this.templates.forEach(function (item) {
            _this.templateMap[item.getType()] = item.template;
        });
    };
    OrganizationChart.prototype.getTemplateForNode = function (node) {
        if (this.templateMap)
            return node.type ? this.templateMap[node.type] : this.templateMap['default'];
        else
            return null;
    };
    OrganizationChart.prototype.onNodeClick = function (event, node) {
        var eventTarget = event.target;
        if (eventTarget.className && (eventTarget.className.indexOf('ui-node-toggler') !== -1 || eventTarget.className.indexOf('ui-node-toggler-icon') !== -1)) {
            return;
        }
        else if (this.selectionMode) {
            if (node.selectable === false) {
                return;
            }
            var index_1 = this.findIndexInSelection(node);
            var selected = (index_1 >= 0);
            if (this.selectionMode === 'single') {
                if (selected) {
                    this.selection = null;
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    this.selection = node;
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            else if (this.selectionMode === 'multiple') {
                if (selected) {
                    this.selection = this.selection.filter(function (val, i) { return i != index_1; });
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    this.selection = (this.selection || []).concat([node]);
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            this.selectionChange.emit(this.selection);
        }
    };
    OrganizationChart.prototype.findIndexInSelection = function (node) {
        var index = -1;
        if (this.selectionMode && this.selection) {
            if (this.selectionMode === 'single') {
                index = (this.selection == node) ? 0 : -1;
            }
            else if (this.selectionMode === 'multiple') {
                for (var i = 0; i < this.selection.length; i++) {
                    if (this.selection[i] == node) {
                        index = i;
                        break;
                    }
                }
            }
        }
        return index;
    };
    OrganizationChart.prototype.isSelected = function (node) {
        return this.findIndexInSelection(node) != -1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], OrganizationChart.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], OrganizationChart.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], OrganizationChart.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], OrganizationChart.prototype, "selectionMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], OrganizationChart.prototype, "selection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], OrganizationChart.prototype, "selectionChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], OrganizationChart.prototype, "onNodeSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], OrganizationChart.prototype, "onNodeUnselect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_4__common_shared__["f" /* PrimeTemplate */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* QueryList */])
    ], OrganizationChart.prototype, "templates", void 0);
    OrganizationChart = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-organizationChart',
            template: "\n        <div [ngStyle]=\"style\" [class]=\"styleClass\" [ngClass]=\"'ui-organizationchart ui-widget'\">\n            <table class=\"ui-organizationchart-table\" pOrganizationChartNode [node]=\"root\" *ngIf=\"root\"></table>\n        </div>\n    ",
            providers: [__WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */]])
    ], OrganizationChart);
    return OrganizationChart;
}());

var OrganizationChartModule = (function () {
    function OrganizationChartModule() {
    }
    OrganizationChartModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]],
            exports: [OrganizationChart, __WEBPACK_IMPORTED_MODULE_4__common_shared__["g" /* SharedModule */]],
            declarations: [OrganizationChart, OrganizationChartNode]
        })
    ], OrganizationChartModule);
    return OrganizationChartModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/organizationchart/organizationchartdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationChartDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organizationchartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/organizationchart/organizationchartdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrganizationChartDemoRoutingModule = (function () {
    function OrganizationChartDemoRoutingModule() {
    }
    OrganizationChartDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__organizationchartdemo__["a" /* OrganizationChartDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], OrganizationChartDemoRoutingModule);
    return OrganizationChartDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/organizationchart/organizationchartdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">OrganizationChart</span>\r\n        <span>OrganizationChart visualized hierarchical organization data.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [(value)]=\"messages\"></p-growl>\r\n    \r\n    <h3 class=\"first\">Advanced</h3>\r\n    <p>Organization with advanced customization.</p>\r\n    <p-organizationChart [value]=\"data1\" selectionMode=\"single\" [(selection)]=\"selectedNode\" (onNodeSelect)=\"onNodeSelect($event)\"\r\n        styleClass=\"company\">\r\n        <ng-template let-node pTemplate=\"person\">\r\n            <div class=\"node-header ui-corner-top\">{{node.label}}</div>\r\n            <div class=\"node-content\">\r\n                <img src=\"assets/showcase/images/demo/organization/{{node.data.avatar}}\" width=\"32\">\r\n                <div>{{node.data.name}}</div>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-node pTemplate=\"department\">\r\n            {{node.label}}\r\n        </ng-template>\r\n    </p-organizationChart>\r\n    \r\n    <h3>Basic</h3>\r\n    <p>Hierarchical data with zero configuration.</p>\r\n    <p-organizationChart [value]=\"data2\"></p-organizationChart>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header =\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;OrganizationChartModule&#125; from 'primeng/organizationchart';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>OrganizationChart requires a model of TreeNode as its value. More information about TreeNode API is available at documentation of <a href=\"#\" [routerLink]=\"['/tree']\">tree</a> component.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;TreeNode&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-organizationChart [value]=\"data\"&gt;&lt;/p-organizationChart&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyComponents implements OnInit &#123;\r\n\r\n    data: TreeNode[];\r\n    \r\n    ngOnInit() &#123;\r\n        this.data = [&#123;\r\n            label: 'Root',\r\n            children: [\r\n                &#123;\r\n                    label: 'Child 1,\r\n                    children: [\r\n                        &#123;\r\n                            label: 'Grandchild 1.1'\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Grandchild 1.2'\r\n                        &#125;\r\n                    ]\r\n                &#125;,\r\n                &#123;\r\n                    label: 'Child 2',\r\n                    children: [\r\n                        &#123;\r\n                            label: 'Child 2.1'\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Child 2.2'\r\n                        &#125;\r\n                    ]\r\n                &#125;\r\n            ]\r\n        &#125;];\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Templating</h3>\r\n            <p>Label of the treenode is displayed inside the node content by default and templating enables enhanced customization. TreeNode API has type property which is\r\n            used to match the pTemplate type so templating can be done per node as well. In example below, nodes with type \"leaf\" are displayed with bold text. Note that a pTemplate\r\n            whose type is \"default\" applies to all nodes that have no type property defined.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-organizationChart [value]=\"data\"\r\n    styleClass=\"company\"&gt;\r\n    &lt;ng-template let-node pTemplate=\"leaf\"&gt;\r\n        &lt;span style=\"font-weight:bold\"&gt;{{node.label}}&lt;/span&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template let-node pTemplate=\"default\"&gt;\r\n        &#123;&#123;node.label&#125;&#125;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-organizationChart&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyComponents implements OnInit &#123;\r\n\r\n    data: TreeNode[];\r\n    \r\n    ngOnInit() &#123;\r\n        this.data = [&#123;\r\n            label: 'Root',\r\n            children: [\r\n                &#123;\r\n                    label: 'Child 1',\r\n                    children: [\r\n                        &#123;\r\n                            label: 'Grandchild 1.1', type: 'leaf'\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Grandchild 1.2', type: 'leaf'\r\n                        &#125;\r\n                    ]\r\n                &#125;,\r\n                &#123;\r\n                    label: 'Child 2',\r\n                    children: [\r\n                        &#123;\r\n                            label: 'Child 2.1', type: 'leaf'\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Child 2.2', type: 'leaf'\r\n                        &#125;\r\n                    ]\r\n                &#125;\r\n            ]\r\n        &#125;];\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Expand/Collapse State</h3>\r\n            <p>In order to display a treenode as expanded by default, set \"expanded\" property as true in your model.</p>\r\n\r\n            <h3>Selection</h3>\r\n            <p>OrganizationChart supports 2 selection methods; single or multiple. Selection is enabled by setting selectionMode property and providing a single TreeNode or\r\n            an array of TreeNodes to reference the selections depending on the selection mode.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-organizationChart [value]=\"data\" selectionMode=\"single\" [(selection)]=\"selectedNode\"&gt;&lt;/p-organizationChart&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyComponents implements OnInit &#123;\r\n\r\n    data: TreeNode[];\r\n    \r\n    ngOnInit() &#123;\r\n        this.data = [&#123;\r\n            label: 'Root',\r\n            children: [\r\n                &#123;\r\n                    label: 'Child 1,\r\n                    children: [\r\n                        &#123;\r\n                            label: 'Grandchild 1.1', type: 'leaf'\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Grandchild 1.2', type: 'leaf'\r\n                        &#125;\r\n                    ]\r\n                &#125;,\r\n                &#123;\r\n                    label: 'Child 2',\r\n                    children: [\r\n                        &#123;\r\n                            label: 'Child 2.1', type: 'leaf'\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Child 2.2', type: 'leaf'\r\n                        &#125;\r\n                    ]\r\n                &#125;\r\n            ]\r\n        &#125;];\r\n&#125;\r\n</code>\r\n</pre>\r\n    \r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>value</td>\r\n                            <td>null</td>\r\n                            <td>TreeNode[]</td>\r\n                            <td>An array of nested TreeNodes.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selectionMode</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Defines the selection mode, valid values \"single\" and \"multiple\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selection</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>A single treenode instance or an array to refer to the selections.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n        <h3>Events</h3>\r\n        <div class=\"doc-tablewrapper\">\r\n            <table class=\"doc-table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>Name</th>\r\n                    <th>Parameters</th>\r\n                    <th>Description</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>onNodeSelect</td>\r\n                        <td>event.originalEvent: browser event <br>\r\n                            event.node: Selected node instance.</td>\r\n                        <td>Callback to invoke when a node is selected.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>onNodeUnselect</td>\r\n                        <td>event.originalEvent: browser event <br>\r\n                            event.node: Unselected node instance.</td>\r\n                        <td>Callback to invoke when a node is unselected.</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <h3>Styling</h3>\r\n        <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n        <div class=\"doc-tablewrapper\">\r\n            <table class=\"doc-table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>ui-organizationchart</td>\r\n                        <td>Container element.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-organizationchart-table</td>\r\n                        <td>Table container of a node.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-organizationchart-lines</td>\r\n                        <td>Connector lines container.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-organizationchart-nodes</td>\r\n                        <td>Contained of node children.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-organizationchart-line-right</td>\r\n                        <td>Right side line of a node connector.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-organizationchart-line-left</td>\r\n                        <td>Left side line of a node connector.</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>ui-organizationchart-line-top</td>\r\n                        <td>Top side line of a node connector.</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <h3>Dependencies</h3>\r\n        <p>None.</p>\r\n\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/organizationchart\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [(value)]=\"messages\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Advanced&lt;/h3&gt;\r\n&lt;p&gt;Organization with advanced customization.&lt;/p&gt;\r\n&lt;p-organizationChart [value]=\"data1\" selectionMode=\"single\" [(selection)]=\"selectedNode\" (onNodeSelect)=\"onNodeSelect($event)\"\r\n    styleClass=\"company\"&gt;\r\n    &lt;ng-template let-node pTemplate=\"person\"&gt;\r\n        &lt;div class=\"node-header ui-corner-top\"&gt;&#123;node.label&#125;&lt;/div&gt;\r\n        &lt;div class=\"node-content\"&gt;\r\n            &lt;img src=\"assets/showcase/images/demo/organization/&#123;node.data.avatar&#125;\" width=\"32\"&gt;\r\n            &lt;div&gt;&#123;node.data.name&#125;&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template let-node pTemplate=\"department\"&gt;\r\n        &#123;node.label&#125;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-organizationChart&gt;\r\n\r\n&lt;h3&gt;Basic&lt;/h3&gt;\r\n&lt;p&gt;Hierarchical data with zero configuration.&lt;/p&gt;\r\n&lt;p-organizationChart [value]=\"data2\"&gt;&lt;/p-organizationChart&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Component(&#123;\r\n    templateUrl: './organizationchartdemo.html',\r\n    styles: [`\r\n        .company.ui-organizationchart .ui-organizationchart-node-content.ui-person &#123;\r\n            padding: 0;\r\n            border: 0 none;\r\n        &#125;\r\n        \r\n        .node-header,.node-content &#123;\r\n            padding: .5em .7em;\r\n        &#125;\r\n        \r\n        .node-header &#123;\r\n            background-color: #495ebb;\r\n            color: #ffffff;\r\n        &#125;\r\n        \r\n        .node-content &#123;\r\n            text-align: center;\r\n            border: 1px solid #495ebb;\r\n        &#125;\r\n        \r\n        .node-content img &#123;\r\n            border-radius: 50%;\r\n        &#125;\r\n        \r\n        .department-cfo &#123;\r\n            background-color: #7247bc;\r\n            color: #ffffff;\r\n        &#125;\r\n        \r\n        .department-coo &#123;\r\n            background-color: #a534b6;\r\n            color: #ffffff;\r\n        &#125;\r\n        \r\n        .department-cto &#123;\r\n            background-color: #e9286f;\r\n            color: #ffffff;\r\n        &#125;\r\n        \r\n        .ui-person .ui-node-toggler &#123;\r\n            color: #495ebb !important;\r\n        &#125;\r\n        \r\n        .department-cto .ui-node-toggler &#123;\r\n            color: #8a0a39 !important;\r\n        &#125;\r\n    `],\r\n    encapsulation: ViewEncapsulation.None\r\n&#125;)\r\nexport class OrganizationChartDemo implements OnInit &#123;\r\n\r\n    data1: TreeNode[];\r\n    \r\n    data2: TreeNode[];\r\n    \r\n    selectedNode: TreeNode;\r\n    \r\n    messages: Message[];\r\n    \r\n    ngOnInit() &#123;\r\n        this.data1 = [&#123;\r\n            label: 'CEO',\r\n            type: 'person',\r\n            styleClass: 'ui-person',\r\n            expanded: true,\r\n            data: &#123;name:'Walter White', 'avatar': 'walter.jpg'&#125;,\r\n            children: [\r\n                &#123;\r\n                    label: 'CFO',\r\n                    type: 'person',\r\n                    styleClass: 'ui-person',\r\n                    expanded: true,\r\n                    data: &#123;name:'Saul Goodman', 'avatar': 'saul.jpg'&#125;,\r\n                    children:[&#123;\r\n                        label: 'Tax',\r\n                        styleClass: 'department-cfo'\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Legal',\r\n                        styleClass: 'department-cfo'\r\n                    &#125;],\r\n                &#125;,\r\n                &#123;\r\n                    label: 'COO',\r\n                    type: 'person',\r\n                    styleClass: 'ui-person',\r\n                    expanded: true,\r\n                    data: &#123;name:'Mike E.', 'avatar': 'mike.jpg'&#125;,\r\n                    children:[&#123;\r\n                        label: 'Operations',\r\n                        styleClass: 'department-coo'\r\n                    &#125;]\r\n                &#125;,\r\n                &#123;\r\n                    label: 'CTO',\r\n                    type: 'person',\r\n                    styleClass: 'ui-person',\r\n                    expanded: true,\r\n                    data: &#123;name:'Jesse Pinkman', 'avatar': 'jesse.jpg'&#125;,\r\n                    children:[&#123;\r\n                        label: 'Development',\r\n                        styleClass: 'department-cto',\r\n                        expanded: true,\r\n                        children:[&#123;\r\n                            label: 'Analysis',\r\n                            styleClass: 'department-cto'\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Front End',\r\n                            styleClass: 'department-cto'\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Back End',\r\n                            styleClass: 'department-cto'\r\n                        &#125;]\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'QA',\r\n                        styleClass: 'department-cto'\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'R&amp;D',\r\n                        styleClass: 'department-cto'\r\n                    &#125;]\r\n                &#125;\r\n            ]\r\n        &#125;];\r\n        \r\n        this.data2 = [&#123;\r\n            label: 'F.C Barcelona',\r\n            expanded: true,\r\n            children: [\r\n                &#123;\r\n                    label: 'F.C Barcelona',\r\n                    expanded: true,\r\n                    children: [\r\n                        &#123;\r\n                            label: 'Chelsea FC'\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'F.C. Barcelona'\r\n                        &#125;\r\n                    ]\r\n                &#125;,\r\n                &#123;\r\n                    label: 'Real Madrid',\r\n                    expanded: true,\r\n                    children: [\r\n                        &#123;\r\n                            label: 'Bayern Munich'\r\n                        &#125;,\r\n                        &#123;\r\n                            label: 'Real Madrid'\r\n                        &#125;\r\n                    ]\r\n                &#125;\r\n            ]\r\n        &#125;];\r\n    &#125;\r\n    \r\n    onNodeSelect(event) &#123;\r\n        this.messages = [&#123;severity: 'success', summary: 'Node Selected', detail: event.node.label&#125;];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/organizationchart/organizationchartdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationChartDemoModule", function() { return OrganizationChartDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organizationchartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/organizationchart/organizationchartdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organizationchartdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/organizationchart/organizationchartdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_organizationchart_organizationchart__ = __webpack_require__("../../../../../src/app/components/organizationchart/organizationchart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_panel_panel__ = __webpack_require__("../../../../../src/app/components/panel/panel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var OrganizationChartDemoModule = (function () {
    function OrganizationChartDemoModule() {
    }
    OrganizationChartDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__organizationchartdemo_routing_module__["a" /* OrganizationChartDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_organizationchart_organizationchart__["a" /* OrganizationChartModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_growl_growl__["a" /* GrowlModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_panel_panel__["a" /* PanelModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__organizationchartdemo__["a" /* OrganizationChartDemo */]
            ]
        })
    ], OrganizationChartDemoModule);
    return OrganizationChartDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/organizationchart/organizationchartdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationChartDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrganizationChartDemo = (function () {
    function OrganizationChartDemo() {
    }
    OrganizationChartDemo.prototype.ngOnInit = function () {
        this.data1 = [{
                label: 'CEO',
                type: 'person',
                styleClass: 'ui-person',
                expanded: true,
                data: { name: 'Walter White', 'avatar': 'walter.jpg' },
                children: [
                    {
                        label: 'CFO',
                        type: 'person',
                        styleClass: 'ui-person',
                        expanded: true,
                        data: { name: 'Saul Goodman', 'avatar': 'saul.jpg' },
                        children: [{
                                label: 'Tax',
                                styleClass: 'department-cfo'
                            },
                            {
                                label: 'Legal',
                                styleClass: 'department-cfo'
                            }],
                    },
                    {
                        label: 'COO',
                        type: 'person',
                        styleClass: 'ui-person',
                        expanded: true,
                        data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
                        children: [{
                                label: 'Operations',
                                styleClass: 'department-coo'
                            }]
                    },
                    {
                        label: 'CTO',
                        type: 'person',
                        styleClass: 'ui-person',
                        expanded: true,
                        data: { name: 'Jesse Pinkman', 'avatar': 'jesse.jpg' },
                        children: [{
                                label: 'Development',
                                styleClass: 'department-cto',
                                expanded: true,
                                children: [{
                                        label: 'Analysis',
                                        styleClass: 'department-cto'
                                    },
                                    {
                                        label: 'Front End',
                                        styleClass: 'department-cto'
                                    },
                                    {
                                        label: 'Back End',
                                        styleClass: 'department-cto'
                                    }]
                            },
                            {
                                label: 'QA',
                                styleClass: 'department-cto'
                            },
                            {
                                label: 'R&D',
                                styleClass: 'department-cto'
                            }]
                    }
                ]
            }];
        this.data2 = [{
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'F.C Barcelona',
                        expanded: true,
                        children: [
                            {
                                label: 'Chelsea FC'
                            },
                            {
                                label: 'F.C. Barcelona'
                            }
                        ]
                    },
                    {
                        label: 'Real Madrid',
                        expanded: true,
                        children: [
                            {
                                label: 'Bayern Munich'
                            },
                            {
                                label: 'Real Madrid'
                            }
                        ]
                    }
                ]
            }];
    };
    OrganizationChartDemo.prototype.onNodeSelect = function (event) {
        this.messages = [{ severity: 'success', summary: 'Node Selected', detail: event.node.label }];
    };
    OrganizationChartDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/organizationchart/organizationchartdemo.html"),
            styles: ["\n        .company.ui-organizationchart .ui-organizationchart-node-content.ui-person {\n            padding: 0;\n            border: 0 none;\n        }\n        \n        .node-header,.node-content {\n            padding: .5em .7em;\n        }\n        \n        .node-header {\n            background-color: #495ebb;\n            color: #ffffff;\n        }\n        \n        .node-content {\n            text-align: center;\n            border: 1px solid #495ebb;\n        }\n        \n        .node-content img {\n            border-radius: 50%;\n        }\n        \n        .ui-organizationchart-node-content.department-cfo {\n            background-color: #7247bc;\n            color: #ffffff;\n        }\n        \n        .ui-organizationchart-node-content.department-coo {\n            background-color: #a534b6;\n            color: #ffffff;\n        }\n        \n        .ui-organizationchart-node-content.department-cto {\n            background-color: #e9286f;\n            color: #ffffff;\n        }\n        \n        .ui-person .ui-node-toggler {\n            color: #495ebb !important;\n        }\n        \n        .department-cto .ui-node-toggler {\n            color: #8a0a39 !important;\n        }\n    "],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        })
    ], OrganizationChartDemo);
    return OrganizationChartDemo;
}());



/***/ })

});
//# sourceMappingURL=organizationchartdemo.module.chunk.js.map