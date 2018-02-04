webpackJsonp(["gmapdemo.module"],{

/***/ "../../../../../src/app/components/gmap/gmap.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GMapModule; });
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


var GMap = (function () {
    function GMap(el, differs, cd, zone) {
        this.el = el;
        this.cd = cd;
        this.zone = zone;
        this.onMapClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onOverlayClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onOverlayDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onOverlayDrag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onOverlayDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onMapReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onMapDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onZoomChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.differ = differs.find([]).create(null);
    }
    GMap.prototype.ngAfterViewChecked = function () {
        if (!this.map && this.el.nativeElement.offsetParent) {
            this.initialize();
        }
    };
    GMap.prototype.initialize = function () {
        var _this = this;
        this.map = new google.maps.Map(this.el.nativeElement.children[0], this.options);
        this.onMapReady.emit({
            map: this.map
        });
        if (this.overlays) {
            for (var _i = 0, _a = this.overlays; _i < _a.length; _i++) {
                var overlay = _a[_i];
                overlay.setMap(this.map);
                this.bindOverlayEvents(overlay);
            }
        }
        this.map.addListener('click', function (event) {
            _this.zone.run(function () {
                _this.onMapClick.emit(event);
            });
        });
        this.map.addListener('dragend', function (event) {
            _this.zone.run(function () {
                _this.onMapDragEnd.emit(event);
            });
        });
        this.map.addListener('zoom_changed', function (event) {
            _this.zone.run(function () {
                _this.onZoomChanged.emit(event);
            });
        });
    };
    GMap.prototype.bindOverlayEvents = function (overlay) {
        var _this = this;
        overlay.addListener('click', function (event) {
            _this.zone.run(function () {
                _this.onOverlayClick.emit({
                    originalEvent: event,
                    'overlay': overlay,
                    map: _this.map
                });
            });
        });
        if (overlay.getDraggable()) {
            this.bindDragEvents(overlay);
        }
    };
    GMap.prototype.ngDoCheck = function () {
        var _this = this;
        var changes = this.differ.diff(this.overlays);
        if (changes && this.map) {
            changes.forEachRemovedItem(function (record) { record.item.setMap(null); });
            changes.forEachAddedItem(function (record) {
                record.item.setMap(_this.map);
                record.item.addListener('click', function (event) {
                    _this.zone.run(function () {
                        _this.onOverlayClick.emit({
                            originalEvent: event,
                            overlay: record.item,
                            map: _this.map
                        });
                    });
                });
                if (record.item.getDraggable()) {
                    _this.bindDragEvents(record.item);
                }
            });
        }
    };
    GMap.prototype.bindDragEvents = function (overlay) {
        var _this = this;
        overlay.addListener('dragstart', function (event) {
            _this.zone.run(function () {
                _this.onOverlayDragStart.emit({
                    originalEvent: event,
                    overlay: overlay,
                    map: _this.map
                });
            });
        });
        overlay.addListener('drag', function (event) {
            _this.zone.run(function () {
                _this.onOverlayDrag.emit({
                    originalEvent: event,
                    overlay: overlay,
                    map: _this.map
                });
            });
        });
        overlay.addListener('dragend', function (event) {
            _this.zone.run(function () {
                _this.onOverlayDragEnd.emit({
                    originalEvent: event,
                    overlay: overlay,
                    map: _this.map
                });
            });
        });
    };
    GMap.prototype.getMap = function () {
        return this.map;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], GMap.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], GMap.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], GMap.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], GMap.prototype, "overlays", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], GMap.prototype, "onMapClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], GMap.prototype, "onOverlayClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], GMap.prototype, "onOverlayDragStart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], GMap.prototype, "onOverlayDrag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], GMap.prototype, "onOverlayDragEnd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], GMap.prototype, "onMapReady", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], GMap.prototype, "onMapDragEnd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], GMap.prototype, "onZoomChanged", void 0);
    GMap = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-gmap',
            template: "<div [ngStyle]=\"style\" [class]=\"styleClass\"></div>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], GMap);
    return GMap;
}());

var GMapModule = (function () {
    function GMapModule() {
    }
    GMapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [GMap],
            declarations: [GMap]
        })
    ], GMapModule);
    return GMapModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/gmap/gmapdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GMapDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gmapdemo__ = __webpack_require__("../../../../../src/app/showcase/components/gmap/gmapdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GMapDemoRoutingModule = (function () {
    function GMapDemoRoutingModule() {
    }
    GMapDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__gmapdemo__["a" /* GMapDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], GMapDemoRoutingModule);
    return GMapDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/gmap/gmapdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">GMap</span>\r\n        <span>GMap component provides integration with Google Maps API. This sample demontrates\r\n        various uses cases like binding, overlays and events. Click the map to add a new item.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [value]=\"msgs\"></p-growl>\r\n    \r\n    <p-gmap #gmap [style]=\"&#123;'width':'100%','height':'320px'&#125;\" [options]=\"options\" [overlays]=\"overlays\" \r\n       (onMapClick)=\"handleMapClick($event)\" (onOverlayClick)=\"handleOverlayClick($event)\" (onOverlayDragEnd)=\"handleDragEnd($event)\"></p-gmap>\r\n    <button type=\"button\" pButton label=\"Clear\" icon=\"fa-close\" (click)=\"clear()\" style=\"margin-top:10px\"></button>\r\n    <button type=\"button\" pButton label=\"Zoom In\" icon=\"fa-search-plus\" (click)=\"zoomIn(gmap.getMap())\" style=\"margin-top:10px\"></button>\r\n    <button type=\"button\" pButton label=\"Zoom Out\" icon=\"fa-search-minus\" (click)=\"zoomOut(gmap.getMap())\" style=\"margin-top:10px\"></button>\r\n\r\n    <p-dialog showEffect=\"fade\" [(visible)]=\"dialogVisible\" header=\"New Location\" [width]=\"300\">\r\n        <div class=\"ui-g ui-fluid\" *ngIf=\"selectedPosition\">\r\n            <div class=\"ui-g-2\"><label for=\"title\">Label</label></div>\r\n            <div class=\"ui-g-10\"><input type=\"text\" pInputText id=\"title\" [(ngModel)]=\"markerTitle\"></div>\r\n            \r\n            <div class=\"ui-g-2\"><label for=\"lat\">Lat</label></div>\r\n            <div class=\"ui-g-10\"><input id=\"lat\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lat()\"></div>\r\n            \r\n            <div class=\"ui-g-2\"><label for=\"lng\">Lng</label></div>\r\n            <div class=\"ui-g-10\"><input id=\"lng\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lng()\"></div>\r\n            \r\n            <div class=\"ui-g-2\"><label for=\"drg\">Drag</label></div>\r\n            <div class=\"ui-g-10\"><p-checkbox [(ngModel)]=\"draggable\" binary=\"true\" [style]=\"{'margin-top':'.25em'}\"></p-checkbox></div>\r\n        </div>\r\n        <p-footer>\r\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                <button type=\"button\" pButton label=\"Add Marker\" icon=\"fa-plus\" (click)=\"addMarker()\"></button>\r\n            </div>\r\n        </p-footer>\r\n    </p-dialog>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;GMapModule&#125; from 'primeng/gmap';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>A map is initialized with options and dimensions. Refer to the google maps api for the list of available options.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-gmap [options]=\"options\" [style]=\"&#123;'width':'100%','height':'320px'&#125;\" &gt;&lt;/p-gmap&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    options: any;\r\n    \r\n    overlays: any[];\r\n    \r\n    ngOnInit() &#123;\r\n        this.options = &#123;\r\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\r\n            zoom: 12\r\n        &#125;;\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Overlays</h3>\r\n            <p>GMap can display any type of overlay such as markers, polygons and circles. Overlay instances are bound using the overlays property array. Overlays are aware\r\n            of one-way binding so whenever the array changes, gmap updates itself.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-gmap [options]=\"options\" [overlays]=\"overlays\" [style]=\"&#123;'width':'100%','height':'320px'&#125;\" &gt;&lt;/p-gmap&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    options: any;\r\n    \r\n    overlays: any[];\r\n    \r\n    ngOnInit() &#123;\r\n        this.options = &#123;\r\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\r\n            zoom: 12\r\n        &#125;;\r\n        \r\n        this.overlays = [\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.879466, lng: 30.667648&#125;, title:\"Konyaalti\"&#125;),\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.883707, lng: 30.689216&#125;, title:\"Ataturk Park\"&#125;),\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.885233, lng: 30.702323&#125;, title:\"Oldtown\"&#125;),\r\n            new google.maps.Polygon(&#123;paths: [\r\n                &#123;lat: 36.9177, lng: 30.7854&#125;,&#123;lat: 36.8851, lng: 30.7802&#125;,&#123;lat: 36.8829, lng: 30.8111&#125;,&#123;lat: 36.9177, lng: 30.8159&#125;\r\n            ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35\r\n            &#125;),\r\n            new google.maps.Circle(&#123;center: &#123;lat: 36.90707, lng: 30.56533&#125;, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500&#125;),\r\n            new google.maps.Polyline(&#123;path: [&#123;lat: 36.86149, lng: 30.63743&#125;,&#123;lat: 36.86341, lng: 30.72463&#125;], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2&#125;)\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Events</h3>\r\n            <p>GMap provides common callbacks to hook into events including map click, overlay click and overlay dragging.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-gmap [options]=\"options\" [overlays]=\"overlays\" [style]=\"&#123;'width':'100%','height':'320px'&#125;\"\r\n            (onMapClick)=\"handleMapClick($event)\" (onOverlayClick)=\"handleOverlayClick($event)\"&gt;&lt;/p-gmap&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    options: any;\r\n    \r\n    overlays: any[];\r\n    \r\n    ngOnInit() &#123;\r\n        this.options = &#123;\r\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\r\n            zoom: 12\r\n        &#125;;\r\n        \r\n        this.overlays = [\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.879466, lng: 30.667648&#125;, title:\"Konyaalti\"&#125;),\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.883707, lng: 30.689216&#125;, title:\"Ataturk Park\"&#125;),\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.885233, lng: 30.702323&#125;, title:\"Oldtown\"&#125;),\r\n            new google.maps.Polygon(&#123;paths: [\r\n                &#123;lat: 36.9177, lng: 30.7854&#125;,&#123;lat: 36.8851, lng: 30.7802&#125;,&#123;lat: 36.8829, lng: 30.8111&#125;,&#123;lat: 36.9177, lng: 30.8159&#125;\r\n            ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35\r\n            &#125;),\r\n            new google.maps.Circle(&#123;center: &#123;lat: 36.90707, lng: 30.56533&#125;, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500&#125;),\r\n            new google.maps.Polyline(&#123;path: [&#123;lat: 36.86149, lng: 30.63743&#125;,&#123;lat: 36.86341, lng: 30.72463&#125;], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2&#125;)\r\n        ];\r\n    &#125;\r\n    \r\n    handleMapClick(event) &#123;\r\n        //event: MouseEvent of Google Maps api\r\n    &#125;\r\n    \r\n    handleOverlayClick(event) &#123;\r\n        //event.originalEvent: MouseEvent of Google Maps api\r\n        //event.overlay: Clicked overlay     \r\n        //event.map: Map instance   \r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Google Maps API</h3>\r\n            <p>In case you need to access the map instance directly, use the getMap() method.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-gmap #gmap [options]=\"options\"&gt;&lt;/p-gmap&gt;\r\n\r\n&lt;button type=\"button\" pButton label=\"Zoom In\" icon=\"fa-search-plus\" (click)=\"zoomIn(gmap.getMap())\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    options: any;\r\n    \r\n    overlays: any[];\r\n    \r\n    ngOnInit() &#123;\r\n        this.options = &#123;\r\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\r\n            zoom: 12\r\n        &#125;;\r\n    &#125;\r\n    \r\n    zoomIn(map) &#123;\r\n        map.setZoom(map.getZoom()+1);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n            <p>Another option is to to get the map object directly after init via (onMapReady) event.\r\n               In the example below, google.maps.Map is used for adjusting map bounds to markers.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-gmap #gmap [options]=\"options\" [overlays]=\"overlays\" [style]=\"mapStyle\"\r\n    (onMapReady)=\"setMap($event)\"&gt;&lt;/p-gmap&gt;\r\n</code>\r\n</pre>\r\n            <p>Then from your component you would write</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    options: any;\r\n    \r\n    overlays: any[];\r\n    \r\n    map: google.maps.Map;\r\n    \r\n    setMap(event) &#123;\r\n        this.map = event.map;\r\n    &#125;\r\n    \r\n    ngOnInit() &#123;\r\n        let bounds = new google.maps.LatLngBounds();\r\n        this.overlays = [\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.879466, lng: 30.667648&#125;, title:\"Konyaalti\"&#125;),\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.883707, lng: 30.689216&#125;, title:\"Ataturk Park\"&#125;),\r\n            new google.maps.Marker(&#123;position: &#123;lat: 36.885233, lng: 30.702323&#125;, title:\"Oldtown\"&#125;),\r\n        ]\r\n        // ... extend bounds\r\n        this.overlays.forEach(marker => &#123;\r\n            bounds.extend(marker.getPosition());\r\n        &#125;);\r\n        \r\n        setTimeout(()=> &#123; // map will need some time to load\r\n            this.map.fitBounds(bounds); // Map object used directly\r\n        &#125;, 1000);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Type</th>\r\n                        <th>Default</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>options</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Google Maps API configuration object.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>overlays</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of overlays to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onMapClick</td>\r\n                            <td>event: Google Maps MouseEvent</td>\r\n                            <td>Callback to invoke when map is clicked except markers.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onMapDragEnd</td>\r\n                            <td>originalEvent: Google Maps dragend<br></td>\r\n                            <td>Callback to invoke when map drag (i.e. pan) has ended.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onMapReady</td>\r\n                            <td>event.map: Google Maps Instance</td>\r\n                            <td>Callback to invoke when the map is ready to be used.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onOverlayClick</td>\r\n                            <td>originalEvent: Google Maps MouseEvent <br>\r\n                                overlay: Clicked overlay <br>\r\n                                map: Map instance <br></td>\r\n                            <td>Callback to invoke when an overlay is clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onOverlayDrag</td>\r\n                            <td>originalEvent: Google Maps MouseEvent <br>\r\n                                overlay: Clicked overlay <br>\r\n                                map: Map instance <br></td>\r\n                            <td>Callback to invoke when an overlay is being dragged.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onOverlayDragEnd</td>\r\n                            <td>originalEvent: Google Maps MouseEvent <br>\r\n                                overlay: Clicked overlay <br>\r\n                                map: Map instance <br></td>\r\n                            <td>Callback to invoke when an overlay drag ends.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onOverlayDragStart</td>\r\n                            <td>originalEvent: Google Maps MouseEvent <br>\r\n                                overlay: Clicked overlay <br>\r\n                                map: Map instance <br></td>\r\n                            <td>Callback to invoke when an overlay drag starts.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onZoomChanged</td>\r\n                            <td>originalEvent: Google Maps zoom_changed</td>\r\n                            <td>Callback to invoke when zoom level has changed.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>Google Maps API.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/gmap\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;p-gmap #gmap [style]=\"&#123;'width':'100%','height':'320px'&#125;\" [options]=\"options\" [overlays]=\"overlays\" \r\n    (onMapClick)=\"handleMapClick($event)\" (onOverlayClick)=\"handleOverlayClick($event)\" (onOverlayDragEnd)=\"handleDragEnd($event)\"&gt;&lt;/p-gmap&gt;\r\n&lt;button type=\"button\" pButton label=\"Clear\" icon=\"fa-close\" (click)=\"clear()\" style=\"margin-top:10px\"&gt;&lt;/button&gt;\r\n&lt;button type=\"button\" pButton label=\"Zoom In\" icon=\"fa-search-plus\" (click)=\"zoomIn(gmap.getMap())\" style=\"margin-top:10px\"&gt;&lt;/button&gt;\r\n&lt;button type=\"button\" pButton label=\"Zoom Out\" icon=\"fa-search-minus\" (click)=\"zoomOut(gmap.getMap())\" style=\"margin-top:10px\"&gt;&lt;/button&gt;\r\n\r\n&lt;p-dialog showEffect=\"fade\" [(visible)]=\"dialogVisible\" header=\"New Location\"&gt;\r\n    &lt;div class=\"ui-g ui-fluid\" *ngIf=\"selectedPosition\"&gt;\r\n        &lt;div class=\"ui-g-2\"&gt;&lt;label for=\"title\"&gt;Label&lt;/label&gt;&lt;/div&gt;\r\n        &lt;div class=\"ui-g-10\"&gt;&lt;input type=\"text\" pInputText id=\"title\" [(ngModel)]=\"markerTitle\"&gt;&lt;/div&gt;\r\n        \r\n        &lt;div class=\"ui-g-2\"&gt;&lt;label for=\"lat\"&gt;Lat&lt;/label&gt;&lt;/div&gt;\r\n        &lt;div class=\"ui-g-10\"&gt;&lt;input id=\"lat\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lat()\"&gt;&lt;/div&gt;\r\n        \r\n        &lt;div class=\"ui-g-2\"&gt;&lt;label for=\"lng\"&gt;Lng&lt;/label&gt;&lt;/div&gt;\r\n        &lt;div class=\"ui-g-10\"&gt;&lt;input id=\"lng\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lng()\"&gt;&lt;/div&gt;\r\n        \r\n        &lt;div class=\"ui-g-2\"&gt;&lt;label for=\"drg\"&gt;Drag&lt;/label&gt;&lt;/div&gt;\r\n        &lt;div class=\"ui-g-10\"&gt;&lt;p-checkbox [(ngModel)]=\"draggable\" binary=\"true\" [style]=\"&#123;'margin-top':'.25em'&#125;\"&gt;&lt;/p-checkbox&gt;&lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;p-footer&gt;\r\n        &lt;div class=\"ui-dialog-buttonpane ui-helper-clearfix\"&gt;\r\n            &lt;button type=\"button\" pButton label=\"Add Marker\" icon=\"fa-plus\" (click)=\"addMarker()\"&gt;&lt;/button&gt;\r\n        &lt;/div&gt;\r\n    &lt;/p-footer&gt;\r\n&lt;/p-dialog&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class GMapDemo implements OnInit &#123;\r\n\r\n    options: any;\r\n    \r\n    overlays: any[];\r\n    \r\n    dialogVisible: boolean;\r\n    \r\n    markerTitle: string;\r\n    \r\n    selectedPosition: any;\r\n    \r\n    infoWindow: any;\r\n    \r\n    draggable: boolean;\r\n    \r\n    msgs: Message[] = [];\r\n\r\n    ngOnInit() &#123;\r\n        this.options = &#123;\r\n            center: &#123;lat: 36.890257, lng: 30.707417&#125;,\r\n            zoom: 12\r\n        &#125;;\r\n        \r\n        this.initOverlays();\r\n        \r\n        this.infoWindow = new google.maps.InfoWindow();\r\n    &#125;\r\n    \r\n    handleMapClick(event) &#123;\r\n        this.dialogVisible = true;\r\n        this.selectedPosition = event.latLng;\r\n    &#125;\r\n    \r\n    handleOverlayClick(event) &#123;\r\n        this.msgs = [];\r\n        let isMarker = event.overlay.getTitle != undefined;\r\n        \r\n        if(isMarker) &#123;\r\n            let title = event.overlay.getTitle();\r\n            this.infoWindow.setContent('<div>' + title + '</div>');\r\n            this.infoWindow.open(event.map, event.overlay);\r\n            event.map.setCenter(event.overlay.getPosition());\r\n            \r\n            this.msgs.push(&#123;severity:'info', summary:'Marker Selected', detail: title&#125;);\r\n        &#125;\r\n        else &#123;\r\n            this.msgs.push(&#123;severity:'info', summary:'Shape Selected', detail: ''&#125;);\r\n        &#125;        \r\n    &#125;\r\n    \r\n    addMarker() &#123;\r\n        this.overlays.push(new google.maps.Marker(&#123;position:&#123;lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()&#125;, title:this.markerTitle, draggable: this.draggable&#125;));\r\n        this.markerTitle = null;\r\n        this.dialogVisible = false;\r\n    &#125;\r\n    \r\n    handleDragEnd(event) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()&#125;);\r\n    &#125;\r\n    \r\n    initOverlays() &#123;\r\n        if(!this.overlays||!this.overlays.length) &#123;\r\n            this.overlays = [\r\n                new google.maps.Marker(&#123;position: &#123;lat: 36.879466, lng: 30.667648&#125;, title:\"Konyaalti\"&#125;),\r\n                new google.maps.Marker(&#123;position: &#123;lat: 36.883707, lng: 30.689216&#125;, title:\"Ataturk Park\"&#125;),\r\n                new google.maps.Marker(&#123;position: &#123;lat: 36.885233, lng: 30.702323&#125;, title:\"Oldtown\"&#125;),\r\n                new google.maps.Polygon(&#123;paths: [\r\n                    &#123;lat: 36.9177, lng: 30.7854&#125;,&#123;lat: 36.8851, lng: 30.7802&#125;,&#123;lat: 36.8829, lng: 30.8111&#125;,&#123;lat: 36.9177, lng: 30.8159&#125;\r\n                ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35\r\n                &#125;),\r\n                new google.maps.Circle(&#123;center: &#123;lat: 36.90707, lng: 30.56533&#125;, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500&#125;),\r\n                new google.maps.Polyline(&#123;path: [&#123;lat: 36.86149, lng: 30.63743&#125;,&#123;lat: 36.86341, lng: 30.72463&#125;], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2&#125;)\r\n            ];\r\n        &#125;\r\n    &#125;\r\n    \r\n    zoomIn(map) &#123;\r\n        map.setZoom(map.getZoom()+1);\r\n    &#125;\r\n    \r\n    zoomOut(map) &#123;\r\n        map.setZoom(map.getZoom()-1);\r\n    &#125;\r\n    \r\n    clear() &#123;\r\n        this.overlays = [];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/gmap/gmapdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GMapDemoModule", function() { return GMapDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gmapdemo__ = __webpack_require__("../../../../../src/app/showcase/components/gmap/gmapdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gmapdemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/gmap/gmapdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_gmap_gmap__ = __webpack_require__("../../../../../src/app/components/gmap/gmap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_checkbox_checkbox__ = __webpack_require__("../../../../../src/app/components/checkbox/checkbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dialog_dialog__ = __webpack_require__("../../../../../src/app/components/dialog/dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_inputtext_inputtext__ = __webpack_require__("../../../../../src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var GMapDemoModule = (function () {
    function GMapDemoModule() {
    }
    GMapDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__gmapdemo_routing_module__["a" /* GMapDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_gmap_gmap__["a" /* GMapModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__["a" /* GrowlModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_inputtext_inputtext__["a" /* InputTextModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_checkbox_checkbox__["a" /* CheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_dialog_dialog__["a" /* DialogModule */],
                __WEBPACK_IMPORTED_MODULE_10__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_12__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__gmapdemo__["a" /* GMapDemo */]
            ]
        })
    ], GMapDemoModule);
    return GMapDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/gmap/gmapdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GMapDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GMapDemo = (function () {
    function GMapDemo() {
        this.msgs = [];
    }
    GMapDemo.prototype.ngOnInit = function () {
        this.options = {
            center: { lat: 36.890257, lng: 30.707417 },
            zoom: 12
        };
        this.initOverlays();
        this.infoWindow = new google.maps.InfoWindow();
    };
    GMapDemo.prototype.handleMapClick = function (event) {
        this.dialogVisible = true;
        this.selectedPosition = event.latLng;
    };
    GMapDemo.prototype.handleOverlayClick = function (event) {
        this.msgs = [];
        var isMarker = event.overlay.getTitle != undefined;
        if (isMarker) {
            var title = event.overlay.getTitle();
            this.infoWindow.setContent('<div>' + title + '</div>');
            this.infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());
            this.msgs.push({ severity: 'info', summary: 'Marker Selected', detail: title });
        }
        else {
            this.msgs.push({ severity: 'info', summary: 'Shape Selected', detail: '' });
        }
    };
    GMapDemo.prototype.addMarker = function () {
        this.overlays.push(new google.maps.Marker({ position: { lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng() }, title: this.markerTitle, draggable: this.draggable }));
        this.markerTitle = null;
        this.dialogVisible = false;
    };
    GMapDemo.prototype.handleDragEnd = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Marker Dragged', detail: event.overlay.getTitle() });
    };
    GMapDemo.prototype.initOverlays = function () {
        if (!this.overlays || !this.overlays.length) {
            this.overlays = [
                new google.maps.Marker({ position: { lat: 36.879466, lng: 30.667648 }, title: "Konyaalti" }),
                new google.maps.Marker({ position: { lat: 36.883707, lng: 30.689216 }, title: "Ataturk Park" }),
                new google.maps.Marker({ position: { lat: 36.885233, lng: 30.702323 }, title: "Oldtown" }),
                new google.maps.Polygon({ paths: [
                        { lat: 36.9177, lng: 30.7854 }, { lat: 36.8851, lng: 30.7802 }, { lat: 36.8829, lng: 30.8111 }, { lat: 36.9177, lng: 30.8159 }
                    ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
                }),
                new google.maps.Circle({ center: { lat: 36.90707, lng: 30.56533 }, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500 }),
                new google.maps.Polyline({ path: [{ lat: 36.86149, lng: 30.63743 }, { lat: 36.86341, lng: 30.72463 }], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2 })
            ];
        }
    };
    GMapDemo.prototype.zoomIn = function (map) {
        map.setZoom(map.getZoom() + 1);
    };
    GMapDemo.prototype.zoomOut = function (map) {
        map.setZoom(map.getZoom() - 1);
    };
    GMapDemo.prototype.clear = function () {
        this.overlays = [];
    };
    GMapDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/gmap/gmapdemo.html"),
            styles: ["\n        .ui-g-2 {\n            padding-top: .75em;\n        }\n    "]
        })
    ], GMapDemo);
    return GMapDemo;
}());



/***/ })

});
//# sourceMappingURL=gmapdemo.module.chunk.js.map