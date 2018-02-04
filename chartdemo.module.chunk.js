webpackJsonp(["chartdemo.module"],{

/***/ "../../../../../src/app/components/chart/chart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UIChart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UIChart = (function () {
    function UIChart(el) {
        this.el = el;
        this.onDataSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(UIChart.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (val) {
            this._data = val;
            this.reinit();
        },
        enumerable: true,
        configurable: true
    });
    UIChart.prototype.ngAfterViewInit = function () {
        this.initChart();
        this.initialized = true;
    };
    UIChart.prototype.onCanvasClick = function (event) {
        if (this.chart) {
            var element = this.chart.getElementAtEvent(event);
            var dataset = this.chart.getDatasetAtEvent(event);
            if (element && element[0] && dataset) {
                this.onDataSelect.emit({ originalEvent: event, element: element[0], dataset: dataset });
            }
        }
    };
    UIChart.prototype.initChart = function () {
        this.chart = new Chart(this.el.nativeElement.children[0].children[0], {
            type: this.type,
            data: this.data,
            options: this.options
        });
    };
    UIChart.prototype.getCanvas = function () {
        return this.el.nativeElement.children[0].children[0];
    };
    UIChart.prototype.getBase64Image = function () {
        return this.chart.toBase64Image();
    };
    UIChart.prototype.generateLegend = function () {
        if (this.chart) {
            this.chart.generateLegend();
        }
    };
    UIChart.prototype.refresh = function () {
        if (this.chart) {
            this.chart.update();
        }
    };
    UIChart.prototype.reinit = function () {
        if (this.chart) {
            this.chart.destroy();
            this.initChart();
        }
    };
    UIChart.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.initialized = false;
            this.chart = null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], UIChart.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], UIChart.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], UIChart.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], UIChart.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], UIChart.prototype, "onDataSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UIChart.prototype, "data", null);
    UIChart = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-chart',
            template: "\n        <div style=\"position:relative\" [style.width]=\"width\" [style.height]=\"height\">\n            <canvas (click)=\"onCanvasClick($event)\"></canvas>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], UIChart);
    return UIChart;
}());

var ChartModule = (function () {
    function ChartModule() {
    }
    ChartModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [UIChart],
            declarations: [UIChart]
        })
    ], ChartModule);
    return ChartModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/chart/barchart/barchartdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">BarChart</span>\r\n        <span>A bar chart or bar graph is a chart that presents Grouped data with rectangular bars with lengths proportional to the values that they represent.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-chart type=\"bar\" [data]=\"data\"></p-chart>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/chart/barchart\" class=\"btn-viewsource\" target=\"_blank\">\r\n        <i class=\"fa fa-github\"></i>\r\n        <span>View on GitHub</span>\r\n    </a>\r\n    \r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"barchartdemo.ts\">\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class BarChartDemo &#123;\r\n\r\n    data: any;\r\n\r\n    constructor() &#123;\r\n        this.data = &#123;\r\n            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n            datasets: [\r\n                &#123;\r\n                    label: 'My First dataset',\r\n                    backgroundColor: '#42A5F5',\r\n                    borderColor: '#1E88E5',\r\n                    data: [65, 59, 80, 81, 56, 55, 40]\r\n                &#125;,\r\n                &#123;\r\n                    label: 'My Second dataset',\r\n                    backgroundColor: '#9CCC65',\r\n                    borderColor: '#7CB342',\r\n                    data: [28, 48, 40, 19, 86, 27, 90]\r\n                &#125;\r\n            ]\r\n        &#125;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"barchartdemo.html\">\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"bar\" [data]=\"data\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/chart/barchart/barchartdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarChartDemo; });
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

var BarChartDemo = (function () {
    function BarChartDemo() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
    }
    BarChartDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/chart/barchart/barchartdemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], BarChartDemo);
    return BarChartDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/chart/chartdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chart/chartdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__piechart_piechartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chart/piechart/piechartdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__doughnutchart_doughnutchartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__barchart_barchartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chart/barchart/barchartdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__linechart_linechartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chart/linechart/linechartdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__polarareachart_polarareachartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chart/polarareachart/polarareachartdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__radarchart_radarchartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chart/radarchart/radarchartdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ChartDemoRoutingModule = (function () {
    function ChartDemoRoutingModule() {
    }
    ChartDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__chartdemo__["a" /* ChartDemo */] },
                    { path: 'pie', component: __WEBPACK_IMPORTED_MODULE_3__piechart_piechartdemo__["a" /* PieChartDemo */] },
                    { path: 'doughnut', component: __WEBPACK_IMPORTED_MODULE_4__doughnutchart_doughnutchartdemo__["a" /* DoughnutChartDemo */] },
                    { path: 'bar', component: __WEBPACK_IMPORTED_MODULE_5__barchart_barchartdemo__["a" /* BarChartDemo */] },
                    { path: 'line', component: __WEBPACK_IMPORTED_MODULE_6__linechart_linechartdemo__["a" /* LineChartDemo */] },
                    { path: 'polararea', component: __WEBPACK_IMPORTED_MODULE_7__polarareachart_polarareachartdemo__["a" /* PolarAreaChartDemo */] },
                    { path: 'radar', component: __WEBPACK_IMPORTED_MODULE_8__radarchart_radarchartdemo__["a" /* RadarChartDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], ChartDemoRoutingModule);
    return ChartDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/chart/chartdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Charts</span>\r\n        <span>Chart components are based on <a style=\"color:#68d4f9\" href=\"http://www.chartjs.org/\">Charts.js</a> 2.7.x, an open source HTML5 based charting library.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <h3 style=\"margin-top:0px\">Chart Component</h3>\r\n    <p>Chart component is used to display a chart on page. The classname is UIChart and element tag is p-chart.</p>\r\n    \r\n<h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;ChartModule&#125; from 'primeng/chart';\r\n</code>\r\n</pre>\r\n\r\n    <h3>Charts.js</h3>\r\n    <p>In order for chart component to work, include charts.js to your project. An example with CLI would be;</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n\"scripts\": [\r\n  \"../node_modules/chart.js/dist/Chart.js\",\r\n  //..others\r\n],\r\n</code>\r\n</pre>\r\n    \r\n\r\n    <h3 style=\"margin-top:0px\">Change Detection</h3>\r\n    <p>In order to chart to redraw itself, a new data object needs to be created. Changing the array contents without creating a new\r\n    array instance does not trigger change detection.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"pie\" [data]=\"data\"&gt;&lt;/p-chart&gt;\r\n&lt;button type=\"button\" pButton (click)=\"update($event)\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nupdate(event: Event) &#123;\r\n    this.data = //create new data\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<p>Attributes of Chart Component.</p>\r\n<div class=\"doc-tablewrapper\">\r\n    <table class=\"doc-table\">\r\n        <thead>\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Type</th>\r\n                <th>Default</th>\r\n                <th>Description</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>type</td>\r\n                <td>string</td>\r\n                <td>null</td>\r\n                <td>Type of the chart.</td>\r\n            </tr>\r\n            <tr>\r\n                <td>data</td>\r\n                <td>any</td>\r\n                <td>null</td>\r\n                <td>Data to display.</td>\r\n            </tr>\r\n            <tr>\r\n                <td>options</td>\r\n                <td>any</td>\r\n                <td>null</td>\r\n                <td>Options to customize the chart.</td>\r\n            </tr>\r\n            <tr>\r\n                <td>width</td>\r\n                <td>string</td>\r\n                <td>null</td>\r\n                <td>Width of the chart in non-responsive mode.</td>\r\n            </tr>\r\n            <tr>\r\n                <td>height</td>\r\n                <td>string</td>\r\n                <td>null</td>\r\n                <td>Height of the chart in non-responsive mode.</td>\r\n            </tr>\r\n            <tr>\r\n                <td>onDataSelect</td>\r\n                <td>function</td>\r\n                <td>null</td>\r\n                <td>Callback to execute when an element on chart is clicked.</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<h3>Methods</h3>\r\n<div class=\"doc-tablewrapper\">\r\n    <table class=\"doc-table\">\r\n        <thead>\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Parameters</th>\r\n                <th>Description</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>refresh</td>\r\n                <td>-</td>\r\n                <td>Redraws the graph with new data.</td>\r\n            </tr>\r\n            <tr>\r\n                <td>reinit</td>\r\n                <td>-</td>\r\n                <td>Destroys the graph first and then creates it again.</td>\r\n            </tr>\r\n            <tr>\r\n                <td>generateLegend</td>\r\n                <td>-</td>\r\n                <td>Returns an HTML string of a legend for that chart. The legend is generated from the legendCallback in the options.</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<h3>Chart Types</h3>\r\n<p>Chart type is defined using the type property. Currently there are 6 options available; pie, doughtnut, line(line or horizontalBar), bar, radar and polarArea.</p>\r\n\r\n<h3>Data</h3>\r\n<p>Data of a chart is provided using a binding to the data property, each type has its own format of data. Here is an example of a line chart.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"line\" [data]=\"data\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class LineChartDemo &#123;\r\n\r\n    data: any;\r\n    \r\n    constructor() &#123;\r\n        this.data = &#123;\r\n            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n            datasets: [\r\n                &#123;\r\n                    label: 'First Dataset',\r\n                    data: [65, 59, 80, 81, 56, 55, 40]\r\n                &#125;,\r\n                &#123;\r\n                    label: 'Second Dataset',\r\n                    data: [28, 48, 40, 19, 86, 27, 90]\r\n                &#125;\r\n            ]\r\n        &#125;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<h3>Options</h3>\r\n<p>While a series can be customized per dataset, general chart options are defined with options property. \r\n    Example below adds a title and customizes the legend position of the chart. For all available options refer to the charts.js documentation.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"line\" [data]=\"data\" [options]=\"options\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class LineChartDemo &#123;\r\n\r\n    data: any;\r\n    \r\n    options: any;\r\n    \r\n    constructor() &#123;\r\n        this.data = &#123;\r\n            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n            datasets: [\r\n                &#123;\r\n                    label: 'First Dataset',\r\n                    data: [65, 59, 80, 81, 56, 55, 40]\r\n                &#125;,\r\n                &#123;\r\n                    label: 'Second Dataset',\r\n                    data: [28, 48, 40, 19, 86, 27, 90]\r\n                &#125;\r\n            ]\r\n        &#125;\r\n        \r\n        this.options = &#123;\r\n            title: &#123;\r\n                display: true,\r\n                text: 'My Title',\r\n                fontSize: 16\r\n            &#125;,\r\n            legend: &#123;\r\n                position: 'bottom'\r\n            &#125;\r\n        &#125;;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<h3>Events</h3>\r\n<p>When data is selected with click event, chart component provides onDataSelect callback to process the selected data.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"line\" [data]=\"data\" (onDataSelect)=\"selectData($event)\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nselectData(event) &#123;\r\n    //event.dataset = Selected dataset\r\n    //event.element = Selected element\r\n    //event.element._datasetIndex = Index of the dataset in data\r\n    //event.element._index = Index of the data in dataset\r\n&#125;\r\n</code>\r\n</pre>  \r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/chart/chartdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDemoModule", function() { return ChartDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chartdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/chart/chartdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chart/chartdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__piechart_piechartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chart/piechart/piechartdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doughnutchart_doughnutchartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__barchart_barchartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chart/barchart/barchartdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__linechart_linechartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chart/linechart/linechartdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__polarareachart_polarareachartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chart/polarareachart/polarareachartdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__radarchart_radarchartdemo__ = __webpack_require__("../../../../../src/app/showcase/components/chart/radarchart/radarchartdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_chart_chart__ = __webpack_require__("../../../../../src/app/components/chart/chart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ChartDemoModule = (function () {
    function ChartDemoModule() {
    }
    ChartDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__chartdemo_routing_module__["a" /* ChartDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__components_chart_chart__["a" /* ChartModule */],
                __WEBPACK_IMPORTED_MODULE_11__components_growl_growl__["a" /* GrowlModule */],
                __WEBPACK_IMPORTED_MODULE_12__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_13__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__chartdemo__["a" /* ChartDemo */],
                __WEBPACK_IMPORTED_MODULE_4__piechart_piechartdemo__["a" /* PieChartDemo */],
                __WEBPACK_IMPORTED_MODULE_5__doughnutchart_doughnutchartdemo__["a" /* DoughnutChartDemo */],
                __WEBPACK_IMPORTED_MODULE_6__barchart_barchartdemo__["a" /* BarChartDemo */],
                __WEBPACK_IMPORTED_MODULE_7__linechart_linechartdemo__["a" /* LineChartDemo */],
                __WEBPACK_IMPORTED_MODULE_8__polarareachart_polarareachartdemo__["a" /* PolarAreaChartDemo */],
                __WEBPACK_IMPORTED_MODULE_9__radarchart_radarchartdemo__["a" /* RadarChartDemo */]
            ]
        })
    ], ChartDemoModule);
    return ChartDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/chart/chartdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartDemo = (function () {
    function ChartDemo() {
    }
    ChartDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/chart/chartdemo.html")
        })
    ], ChartDemo);
    return ChartDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DoughnutChart</span>\r\n        <span>A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-chart type=\"doughnut\" [data]=\"data\"></p-chart>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chart/doughnutchart\" class=\"btn-viewsource\" target=\"_blank\">\r\n        <i class=\"fa fa-github\"></i>\r\n        <span>View on GitHub</span>\r\n    </a>\r\n    \r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"doughnutchartdemo.ts\">\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DoughnutChartDemo &#123;\r\n\r\n    data: any;\r\n\r\n    constructor() &#123;\r\n        this.data = &#123;\r\n            labels: ['A','B','C'],\r\n            datasets: [\r\n                &#123;\r\n                    data: [300, 50, 100],\r\n                    backgroundColor: [\r\n                        \"#FF6384\",\r\n                        \"#36A2EB\",\r\n                        \"#FFCE56\"\r\n                    ],\r\n                    hoverBackgroundColor: [\r\n                        \"#FF6384\",\r\n                        \"#36A2EB\",\r\n                        \"#FFCE56\"\r\n                    ]\r\n                &#125;]    \r\n            &#125;;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"doughnutchartdemo.html\">\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"doughnut\" [data]=\"data\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoughnutChartDemo; });
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

var DoughnutChartDemo = (function () {
    function DoughnutChartDemo() {
        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        };
    }
    DoughnutChartDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/chart/doughnutchart/doughnutchartdemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], DoughnutChartDemo);
    return DoughnutChartDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/chart/linechart/linechartdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">LineChart</span>\r\n        <span>A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [value]=\"msgs\"></p-growl>\r\n\r\n    <p-chart type=\"line\" [data]=\"data\" (onDataSelect)=\"selectData($event)\"></p-chart>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/linechart/linechartdemo\" class=\"btn-viewsource\" target=\"_blank\">\r\n        <i class=\"fa fa-github\"></i>\r\n        <span>View on GitHub</span>\r\n    </a>\r\n    \r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"linechartdemo.ts\">\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class LineChartDemo &#123;\r\n\r\n    data: any;\r\n    \r\n    msgs: Message[];\r\n\r\n    constructor() &#123;\r\n        this.data = &#123;\r\n            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n            datasets: [\r\n                &#123;\r\n                    label: 'First Dataset',\r\n                    data: [65, 59, 80, 81, 56, 55, 40],\r\n                    fill: false,\r\n                    borderColor: '#4bc0c0'\r\n                &#125;,\r\n                &#123;\r\n                    label: 'Second Dataset',\r\n                    data: [28, 48, 40, 19, 86, 27, 90],\r\n                    fill: false,\r\n                    borderColor: '#565656'\r\n                &#125;\r\n            ]\r\n        &#125;\r\n    &#125;\r\n\r\n    selectData(event) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"linechartdemo.html\">\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;p-chart type=\"line\" [data]=\"data\" (onDataSelect)=\"selectData($event)\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/chart/linechart/linechartdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartDemo; });
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

var LineChartDemo = (function () {
    function LineChartDemo() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        };
    }
    LineChartDemo.prototype.selectData = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index] });
    };
    LineChartDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/chart/linechart/linechartdemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], LineChartDemo);
    return LineChartDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/chart/piechart/piechartdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">PieChart</span>\r\n        <span>A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-chart type=\"pie\" [data]=\"data\"></p-chart>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chart/piechart\" class=\"btn-viewsource\" target=\"_blank\">\r\n        <i class=\"fa fa-github\"></i>\r\n        <span>View on GitHub</span>\r\n    </a>\r\n    \r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"piechartdemo.ts\">\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class PieChartDemo &#123;\r\n\r\n    data: any;\r\n\r\n    constructor() &#123;\r\n        this.data = &#123;\r\n            labels: ['A','B','C'],\r\n            datasets: [\r\n                &#123;\r\n                    data: [300, 50, 100],\r\n                    backgroundColor: [\r\n                        \"#FF6384\",\r\n                        \"#36A2EB\",\r\n                        \"#FFCE56\"\r\n                    ],\r\n                    hoverBackgroundColor: [\r\n                        \"#FF6384\",\r\n                        \"#36A2EB\",\r\n                        \"#FFCE56\"\r\n                    ]\r\n                &#125;]    \r\n            &#125;;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"piechartdemo.html\">\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"pie\" [data]=\"data\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/chart/piechart/piechartdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartDemo; });
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

var PieChartDemo = (function () {
    function PieChartDemo() {
        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        };
    }
    PieChartDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/chart/piechart/piechartdemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], PieChartDemo);
    return PieChartDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/chart/polarareachart/polarareachartdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">PolarAreaChart</span>\r\n        <span>Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-chart type=\"polarArea\" [data]=\"data\"></p-chart>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chart/polarchart\" class=\"btn-viewsource\" target=\"_blank\">\r\n        <i class=\"fa fa-github\"></i>\r\n        <span>View on GitHub</span>\r\n    </a>\r\n    \r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"polarareachartdemo.ts\">\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class PolarAreaChartDemo &#123;\r\n\r\n    data: any;\r\n\r\n    constructor() &#123;\r\n        this.data = &#123;\r\n            datasets: [&#123;\r\n                data: [\r\n                    11,\r\n                    16,\r\n                    7,\r\n                    3,\r\n                    14\r\n                ],\r\n                backgroundColor: [\r\n                    \"#FF6384\",\r\n                    \"#4BC0C0\",\r\n                    \"#FFCE56\",\r\n                    \"#E7E9ED\",\r\n                    \"#36A2EB\"\r\n                ],\r\n                label: 'My dataset'\r\n            &#125;],\r\n            labels: [\r\n                \"Red\",\r\n                \"Green\",\r\n                \"Yellow\",\r\n                \"Grey\",\r\n                \"Blue\"\r\n            ]\r\n        &#125;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"polarareachartdemo.html\">\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"polarArea\" [data]=\"data\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/chart/polarareachart/polarareachartdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolarAreaChartDemo; });
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

var PolarAreaChartDemo = (function () {
    function PolarAreaChartDemo() {
        this.data = {
            datasets: [{
                    data: [
                        11,
                        16,
                        7,
                        3,
                        14
                    ],
                    backgroundColor: [
                        "#FF6384",
                        "#4BC0C0",
                        "#FFCE56",
                        "#E7E9ED",
                        "#36A2EB"
                    ],
                    label: 'My dataset'
                }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Grey",
                "Blue"
            ]
        };
    }
    PolarAreaChartDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/chart/polarareachart/polarareachartdemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], PolarAreaChartDemo);
    return PolarAreaChartDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/chart/radarchart/radarchartdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">RadarChart</span>\r\n        <span>A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-chart type=\"radar\" [data]=\"data\"></p-chart>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/chart/radarchart\" class=\"btn-viewsource\" target=\"_blank\">\r\n        <i class=\"fa fa-github\"></i>\r\n        <span>View on GitHub</span>\r\n    </a>\r\n    \r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"radarchartdemo.ts\">\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class RadarChartDemo &#123;\r\n\r\n    data: any;\r\n\r\n    constructor() &#123;\r\n        this.data = &#123;\r\n            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],\r\n            datasets: [\r\n                &#123;\r\n                    label: 'My First dataset',\r\n                    backgroundColor: 'rgba(179,181,198,0.2)',\r\n                    borderColor: 'rgba(179,181,198,1)',\r\n                    pointBackgroundColor: 'rgba(179,181,198,1)',\r\n                    pointBorderColor: '#fff',\r\n                    pointHoverBackgroundColor: '#fff',\r\n                    pointHoverBorderColor: 'rgba(179,181,198,1)',\r\n                    data: [65, 59, 90, 81, 56, 55, 40]\r\n                &#125;,\r\n                &#123;\r\n                    label: 'My Second dataset',\r\n                    backgroundColor: 'rgba(255,99,132,0.2)',\r\n                    borderColor: 'rgba(255,99,132,1)',\r\n                    pointBackgroundColor: 'rgba(255,99,132,1)',\r\n                    pointBorderColor: '#fff',\r\n                    pointHoverBackgroundColor: '#fff',\r\n                    pointHoverBorderColor: 'rgba(255,99,132,1)',\r\n                    data: [28, 48, 40, 19, 96, 27, 100]\r\n                &#125;\r\n            ]\r\n        &#125;;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"radarchartdemo.html\">\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-chart type=\"radar\" [data]=\"data\"&gt;&lt;/p-chart&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/chart/radarchart/radarchartdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadarChartDemo; });
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

var RadarChartDemo = (function () {
    function RadarChartDemo() {
        this.data = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
    }
    RadarChartDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/chart/radarchart/radarchartdemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], RadarChartDemo);
    return RadarChartDemo;
}());



/***/ })

});
//# sourceMappingURL=chartdemo.module.chunk.js.map