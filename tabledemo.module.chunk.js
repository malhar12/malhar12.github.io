webpackJsonp(["tabledemo.module"],{

/***/ "../../../../../src/app/components/table/table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TableService */
/* unused harmony export Table */
/* unused harmony export TableBody */
/* unused harmony export ScrollableView */
/* unused harmony export SortableColumn */
/* unused harmony export SortIcon */
/* unused harmony export SelectableRow */
/* unused harmony export TextEllipsis */
/* unused harmony export ContextMenuRow */
/* unused harmony export RowToggler */
/* unused harmony export ResizableColumn */
/* unused harmony export ReorderableColumn */
/* unused harmony export EditableColumn */
/* unused harmony export CellEditor */
/* unused harmony export TableRadioButton */
/* unused harmony export TableCheckbox */
/* unused harmony export TableHeaderCheckbox */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_shared__ = __webpack_require__("../../../../../src/app/components/common/shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paginator_paginator__ = __webpack_require__("../../../../../src/app/components/paginator/paginator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_objectutils__ = __webpack_require__("../../../../../src/app/components/utils/objectutils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TableService = (function () {
    function TableService() {
        this.sortSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.selectionSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.contextMenuSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.valueSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.sortSource$ = this.sortSource.asObservable();
        this.selectionSource$ = this.selectionSource.asObservable();
        this.contextMenuSource$ = this.contextMenuSource.asObservable();
        this.valueSource$ = this.valueSource.asObservable();
    }
    TableService.prototype.onSort = function (sortMeta) {
        this.sortSource.next(sortMeta);
    };
    TableService.prototype.onSelectionChange = function () {
        this.selectionSource.next();
    };
    TableService.prototype.onContextMenu = function (data) {
        this.contextMenuSource.next(data);
    };
    TableService.prototype.onValueChange = function (value) {
        this.valueSource.next(value);
    };
    TableService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], TableService);
    return TableService;
}());

var Table = (function () {
    function Table(el, domHandler, objectUtils, zone, tableService) {
        this.el = el;
        this.domHandler = domHandler;
        this.objectUtils = objectUtils;
        this.zone = zone;
        this.tableService = tableService;
        this.first = 0;
        this.totalRecords = 0;
        this.pageLinks = 5;
        this.alwaysShowPaginator = true;
        this.paginatorPosition = 'bottom';
        this.defaultSortOrder = 1;
        this.sortMode = 'single';
        this.selectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.contextMenuSelectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.rowTrackBy = function (index, item) { return item; };
        this.lazy = false;
        this.compareSelectionBy = 'deepEquals';
        this.csvSeparator = ',';
        this.exportFilename = 'download';
        this.filters = {};
        this.filterDelay = 300;
        this.expandedRowKeys = {};
        this.rowExpandMode = 'multiple';
        this.virtualScrollDelay = 500;
        this.virtualRowHeight = 27;
        this.columnResizeMode = 'fit';
        this.loadingIcon = 'fa fa-spin fa-2x fa-circle-o-notch';
        this.onRowSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onRowUnselect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onSort = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onLazyLoad = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onRowExpand = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onRowCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onContextMenuSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onColResize = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onColReorder = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEditInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEditComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEditCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onHeaderCheckboxToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.sortFunction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._value = [];
        this.selectionKeys = {};
        this._sortOrder = 1;
        this.filterConstraints = {
            startsWith: function (value, filter) {
                if (filter === undefined || filter === null || filter.trim() === '') {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                var filterValue = filter.toLowerCase();
                return value.toString().toLowerCase().slice(0, filterValue.length) === filterValue;
            },
            contains: function (value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            },
            endsWith: function (value, filter) {
                if (filter === undefined || filter === null || filter.trim() === '') {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                var filterValue = filter.toString().toLowerCase();
                return value.toString().toLowerCase().indexOf(filterValue, value.toString().length - filterValue.length) !== -1;
            },
            equals: function (value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value.toString().toLowerCase() == filter.toString().toLowerCase();
            },
            notEquals: function (value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return false;
                }
                if (value === undefined || value === null) {
                    return true;
                }
                return value.toString().toLowerCase() != filter.toString().toLowerCase();
            },
            in: function (value, filter) {
                if (filter === undefined || filter === null || filter.length === 0) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                for (var i = 0; i < filter.length; i++) {
                    if (filter[i] === value)
                        return true;
                }
                return false;
            },
            lt: function (value, filter) {
                if (filter === undefined || filter === null) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value < filter;
            },
            gt: function (value, filter) {
                if (filter === undefined || filter === null) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value > filter;
            }
        };
    }
    Table.prototype.ngOnInit = function () {
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.initialized = true;
    };
    Table.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'caption':
                    _this.captionTemplate = item.template;
                    break;
                case 'header':
                    _this.headerTemplate = item.template;
                    break;
                case 'body':
                    _this.bodyTemplate = item.template;
                    break;
                case 'footer':
                    _this.footerTemplate = item.template;
                    break;
                case 'summary':
                    _this.summaryTemplate = item.template;
                    break;
                case 'colgroup':
                    _this.colGroupTemplate = item.template;
                    break;
                case 'rowexpansion':
                    _this.expandedRowTemplate = item.template;
                    break;
                case 'frozenrows':
                    _this.frozenRowsTemplate = item.template;
                    break;
                case 'frozenheader':
                    _this.frozenHeaderTemplate = item.template;
                    break;
                case 'frozenbody':
                    _this.frozenBodyTemplate = item.template;
                    break;
                case 'frozenfooter':
                    _this.frozenFooterTemplate = item.template;
                    break;
                case 'frozencolgroup':
                    _this.frozenColGroupTemplate = item.template;
                    break;
                case 'emptymessage':
                    _this.emptyMessageTemplate = item.template;
                    break;
                case 'paginatorleft':
                    _this.paginatorLeftTemplate = item.template;
                    break;
                case 'paginatorright':
                    _this.paginatorRightTemplate = item.template;
                    break;
            }
        });
    };
    Object.defineProperty(Table.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.updateTotalRecords();
            if (!this.lazy) {
                if (this.sortMode == 'single')
                    this.sortSingle();
                else if (this.sortMode == 'multiple')
                    this.sortMultiple();
            }
            if (this.virtualScroll && this.virtualScrollCallback) {
                this.virtualScrollCallback();
            }
            this.tableService.onValueChange(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "sortField", {
        get: function () {
            return this._sortField;
        },
        set: function (val) {
            this._sortField = val;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                if (this.sortMode === 'single') {
                    this.sortSingle();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "sortOrder", {
        get: function () {
            return this._sortOrder;
        },
        set: function (val) {
            this._sortOrder = val;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                if (this.sortMode === 'single') {
                    this.sortSingle();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "multiSortMeta", {
        get: function () {
            return this._multiSortMeta;
        },
        set: function (val) {
            this._multiSortMeta = val;
            if (this.sortMode === 'multiple') {
                this.sortMultiple();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "selection", {
        get: function () {
            return this._selection;
        },
        set: function (val) {
            this._selection = val;
            if (!this.preventSelectionSetterPropagation) {
                this.updateSelectionKeys();
                this.tableService.onSelectionChange();
            }
            this.preventSelectionSetterPropagation = false;
        },
        enumerable: true,
        configurable: true
    });
    Table.prototype.updateSelectionKeys = function () {
        if (this.dataKey && this._selection) {
            this.selectionKeys = {};
            if (Array.isArray(this._selection)) {
                for (var _i = 0, _a = this._selection; _i < _a.length; _i++) {
                    var data = _a[_i];
                    this.selectionKeys[String(this.objectUtils.resolveFieldData(data, this.dataKey))] = 1;
                }
            }
            else {
                this.selectionKeys[String(this.objectUtils.resolveFieldData(this._selection, this.dataKey))] = 1;
            }
        }
    };
    Table.prototype.updateTotalRecords = function () {
        this.totalRecords = this.lazy ? this.totalRecords : (this._value ? this._value.length : 0);
    };
    Table.prototype.onPageChange = function (event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.onPage.emit({
            first: this.first,
            rows: this.rows
        });
    };
    Table.prototype.sort = function (event) {
        var originalEvent = event.originalEvent;
        if (this.sortMode === 'single') {
            this._sortOrder = (this.sortField === event.field) ? this.sortOrder * -1 : this.defaultSortOrder;
            this._sortField = event.field;
            this.sortSingle();
        }
        if (this.sortMode === 'multiple') {
            var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
            var sortMeta = this.getSortMeta(event.field);
            if (sortMeta) {
                if (!metaKey) {
                    this._multiSortMeta = [{ field: event.field, order: sortMeta.order * -1 }];
                }
                else {
                    sortMeta.order = sortMeta.order * -1;
                }
            }
            else {
                if (!metaKey || !this.multiSortMeta) {
                    this._multiSortMeta = [];
                }
                this.multiSortMeta.push({ field: event.field, order: this.defaultSortOrder });
            }
            this.sortMultiple();
        }
    };
    Table.prototype.sortSingle = function () {
        var _this = this;
        this.first = 0;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else if (this.value) {
            if (this.customSort) {
                this.sortFunction.emit({
                    data: this.value,
                    mode: this.sortMode,
                    field: this.sortField,
                    order: this.sortOrder
                });
            }
            else {
                this.value.sort(function (data1, data2) {
                    var value1 = _this.objectUtils.resolveFieldData(data1, _this.sortField);
                    var value2 = _this.objectUtils.resolveFieldData(data2, _this.sortField);
                    var result = null;
                    if (value1 == null && value2 != null)
                        result = -1;
                    else if (value1 != null && value2 == null)
                        result = 1;
                    else if (value1 == null && value2 == null)
                        result = 0;
                    else if (typeof value1 === 'string' && typeof value2 === 'string')
                        result = value1.localeCompare(value2);
                    else
                        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                    return (_this.sortOrder * result);
                });
            }
            if (this.hasFilter()) {
                this._filter();
            }
        }
        var sortMeta = {
            field: this.sortField,
            order: this.sortOrder
        };
        this.onSort.emit(sortMeta);
        this.tableService.onSort(sortMeta);
    };
    Table.prototype.sortMultiple = function () {
        var _this = this;
        if (this.multiSortMeta) {
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                if (this.customSort) {
                    this.sortFunction.emit({
                        data: this.value,
                        mode: this.sortMode,
                        multiSortMeta: this.multiSortMeta
                    });
                }
                else {
                    this.value.sort(function (data1, data2) {
                        return _this.multisortField(data1, data2, _this.multiSortMeta, 0);
                    });
                }
                if (this.hasFilter()) {
                    this._filter();
                }
            }
            this.onSort.emit({
                multisortmeta: this.multiSortMeta
            });
            this.tableService.onSort(this.multiSortMeta);
        }
    };
    Table.prototype.multisortField = function (data1, data2, multiSortMeta, index) {
        var value1 = this.objectUtils.resolveFieldData(data1, multiSortMeta[index].field);
        var value2 = this.objectUtils.resolveFieldData(data2, multiSortMeta[index].field);
        var result = null;
        if (typeof value1 == 'string' || value1 instanceof String) {
            if (value1.localeCompare && (value1 != value2)) {
                return (multiSortMeta[index].order * value1.localeCompare(value2));
            }
        }
        else {
            result = (value1 < value2) ? -1 : 1;
        }
        if (value1 == value2) {
            return (multiSortMeta.length - 1) > (index) ? (this.multisortField(data1, data2, multiSortMeta, index + 1)) : 0;
        }
        return (multiSortMeta[index].order * result);
    };
    Table.prototype.getSortMeta = function (field) {
        if (this.multiSortMeta && this.multiSortMeta.length) {
            for (var i = 0; i < this.multiSortMeta.length; i++) {
                if (this.multiSortMeta[i].field === field) {
                    return this.multiSortMeta[i];
                }
            }
        }
        return null;
    };
    Table.prototype.isSorted = function (field) {
        if (this.sortMode === 'single') {
            return (this.sortField && this.sortField === field);
        }
        else if (this.sortMode === 'multiple') {
            var sorted = false;
            if (this.multiSortMeta) {
                for (var i = 0; i < this.multiSortMeta.length; i++) {
                    if (this.multiSortMeta[i].field == field) {
                        sorted = true;
                        break;
                    }
                }
            }
            return sorted;
        }
    };
    Table.prototype.handleRowClick = function (event) {
        var targetNode = event.originalEvent.target.nodeName;
        if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' || (this.domHandler.hasClass(event.originalEvent.target, 'ui-clickable'))) {
            return;
        }
        if (this.selectionMode) {
            this.preventSelectionSetterPropagation = true;
            if (this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex != null) {
                this.domHandler.clearSelection();
                if (this.rangeRowIndex != null) {
                    this.clearSelectionRange(event.originalEvent);
                }
                this.rangeRowIndex = event.rowIndex;
                this.selectRange(event.originalEvent, event.rowIndex);
            }
            else {
                var rowData = event.rowData;
                var dataKeyValue = this.dataKey ? String(this.objectUtils.resolveFieldData(rowData, this.dataKey)) : null;
                var selected = this.isSelected(rowData);
                this.anchorRowIndex = event.rowIndex;
                this.rangeRowIndex = event.rowIndex;
                if (this.selectionMode === 'single') {
                    if (selected) {
                        this._selection = null;
                        this.selectionKeys = {};
                        this.selectionChange.emit(this.selection);
                        this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                    }
                    else {
                        this._selection = rowData;
                        this.selectionChange.emit(this.selection);
                        this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                        if (dataKeyValue) {
                            this.selectionKeys = {};
                            this.selectionKeys[dataKeyValue] = 1;
                        }
                    }
                }
                else if (this.selectionMode === 'multiple') {
                    if (selected) {
                        var selectionIndex_1 = this.findIndexInSelection(rowData);
                        this._selection = this.selection.filter(function (val, i) { return i != selectionIndex_1; });
                        this.selectionChange.emit(this.selection);
                        this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                        if (dataKeyValue) {
                            delete this.selectionKeys[dataKeyValue];
                        }
                    }
                    else {
                        this._selection = this.selection ? this.selection.concat([rowData]) : [rowData];
                        this.selectionChange.emit(this.selection);
                        this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                        if (dataKeyValue) {
                            this.selectionKeys[dataKeyValue] = 1;
                        }
                    }
                }
            }
            this.tableService.onSelectionChange();
        }
    };
    Table.prototype.handleRowRightClick = function (event) {
        if (this.contextMenu) {
            this.contextMenuSelection = event.rowData;
            this.contextMenuSelectionChange.emit(event.rowData);
            this.onContextMenuSelect.emit({ originalEvent: event.originalEvent, data: event.rowData });
            this.contextMenu.show(event.originalEvent);
            this.tableService.onContextMenu(event.rowData);
        }
    };
    Table.prototype.selectRange = function (event, rowIndex) {
        var rangeStart, rangeEnd;
        if (this.anchorRowIndex > rowIndex) {
            rangeStart = rowIndex;
            rangeEnd = this.anchorRowIndex;
        }
        else if (this.anchorRowIndex < rowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = rowIndex;
        }
        else {
            rangeStart = rowIndex;
            rangeEnd = rowIndex;
        }
        for (var i = rangeStart; i <= rangeEnd; i++) {
            var rangeRowData = this.value[i];
            if (!this.isSelected(rangeRowData)) {
                this._selection = this.selection.concat([rangeRowData]);
                var dataKeyValue = this.dataKey ? String(this.objectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
                if (dataKeyValue) {
                    this.selectionKeys[dataKeyValue] = 1;
                }
                this.onRowSelect.emit({ originalEvent: event, data: rangeRowData, type: 'row' });
            }
        }
        this.selectionChange.emit(this.selection);
    };
    Table.prototype.clearSelectionRange = function (event) {
        var rangeStart, rangeEnd;
        if (this.rangeRowIndex > this.anchorRowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = this.rangeRowIndex;
        }
        else if (this.rangeRowIndex < this.anchorRowIndex) {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.anchorRowIndex;
        }
        else {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.rangeRowIndex;
        }
        var _loop_1 = function (i) {
            var rangeRowData = this_1.value[i];
            var selectionIndex = this_1.findIndexInSelection(rangeRowData);
            this_1._selection = this_1.selection.filter(function (val, i) { return i != selectionIndex; });
            var dataKeyValue = this_1.dataKey ? String(this_1.objectUtils.resolveFieldData(rangeRowData, this_1.dataKey)) : null;
            if (dataKeyValue) {
                delete this_1.selectionKeys[dataKeyValue];
            }
            this_1.onRowUnselect.emit({ originalEvent: event, data: rangeRowData, type: 'row' });
        };
        var this_1 = this;
        for (var i = rangeStart; i <= rangeEnd; i++) {
            _loop_1(i);
        }
    };
    Table.prototype.isSelected = function (rowData) {
        if (rowData && this.selection) {
            if (this.dataKey) {
                return this.selectionKeys[this.objectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined;
            }
            else {
                if (this.selection instanceof Array)
                    return this.findIndexInSelection(rowData) > -1;
                else
                    return this.equals(rowData, this.selection);
            }
        }
        return false;
    };
    Table.prototype.findIndexInSelection = function (rowData) {
        var index = -1;
        if (this.selection && this.selection.length) {
            for (var i = 0; i < this.selection.length; i++) {
                if (this.equals(rowData, this.selection[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    Table.prototype.toggleRowWithRadio = function (event, rowData) {
        this.preventSelectionSetterPropagation = true;
        if (this.selection != rowData) {
            this._selection = rowData;
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({ originalEvent: event, data: rowData, type: 'radiobutton' });
            if (this.dataKey) {
                this.selectionKeys = {};
                this.selectionKeys[String(this.objectUtils.resolveFieldData(rowData, this.dataKey))] = 1;
            }
        }
        else {
            this._selection = null;
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({ originalEvent: event, data: rowData, type: 'radiobutton' });
        }
        this.tableService.onSelectionChange();
    };
    Table.prototype.toggleRowWithCheckbox = function (event, rowData) {
        this.selection = this.selection || [];
        var selected = this.isSelected(rowData);
        var dataKeyValue = this.dataKey ? String(this.objectUtils.resolveFieldData(rowData, this.dataKey)) : null;
        this.preventSelectionSetterPropagation = true;
        if (selected) {
            var selectionIndex_2 = this.findIndexInSelection(rowData);
            this._selection = this.selection.filter(function (val, i) { return i != selectionIndex_2; });
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'checkbox' });
            if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
            }
        }
        else {
            this._selection = this.selection ? this.selection.concat([rowData]) : [rowData];
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'checkbox' });
            if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
            }
        }
        this.tableService.onSelectionChange();
    };
    Table.prototype.toggleRowsWithCheckbox = function (event, check) {
        this._selection = check ? this.value.slice() : [];
        this.preventSelectionSetterPropagation = true;
        this.updateSelectionKeys();
        this.selectionChange.emit(this._selection);
        this.tableService.onSelectionChange();
        this.onHeaderCheckboxToggle.emit({ originalEvent: event, checked: check });
    };
    Table.prototype.equals = function (data1, data2) {
        return this.compareSelectionBy === 'equals' ? (data1 === data2) : this.objectUtils.equals(data1, data2, this.dataKey);
    };
    Table.prototype.filter = function (value, field, matchMode) {
        var _this = this;
        if (this.filterTimeout) {
            clearTimeout(this.filterTimeout);
        }
        this.filterTimeout = setTimeout(function () {
            if (!_this.isFilterBlank(value))
                _this.filters[field] = { value: value, matchMode: matchMode };
            else if (_this.filters[field])
                delete _this.filters[field];
            _this._filter();
            _this.filterTimeout = null;
        }, this.filterDelay);
    };
    Table.prototype.filterGlobal = function (value, matchMode) {
        this.filter(value, 'global', matchMode);
    };
    Table.prototype.isFilterBlank = function (filter) {
        if (filter !== null && filter !== undefined) {
            if ((typeof filter === 'string' && filter.trim().length == 0) || (filter instanceof Array && filter.length == 0))
                return true;
            else
                return false;
        }
        return true;
    };
    Table.prototype._filter = function () {
        this.first = 0;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            if (!this.value) {
                return;
            }
            if (!this.hasFilter()) {
                this.filteredValue = null;
                if (this.paginator) {
                    this.totalRecords = this.value ? this.value.length : 0;
                }
            }
            else {
                var globalFilterFieldsArray = void 0;
                if (this.filters['global']) {
                    if (!this.columns && !this.globalFilterFields)
                        throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');
                    else
                        globalFilterFieldsArray = this.globalFilterFields || this.columns;
                }
                this.filteredValue = [];
                for (var i = 0; i < this.value.length; i++) {
                    var localMatch = true;
                    var globalMatch = false;
                    var localFiltered = false;
                    for (var prop in this.filters) {
                        if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
                            localFiltered = true;
                            var filterMeta = this.filters[prop];
                            var filterField = prop;
                            var filterValue = filterMeta.value;
                            var filterMatchMode = filterMeta.matchMode || 'startsWith';
                            var dataFieldValue = this.objectUtils.resolveFieldData(this.value[i], filterField);
                            var filterConstraint = this.filterConstraints[filterMatchMode];
                            if (!filterConstraint(dataFieldValue, filterValue)) {
                                localMatch = false;
                            }
                            if (!localMatch) {
                                break;
                            }
                        }
                    }
                    if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
                        for (var j = 0; j < globalFilterFieldsArray.length; j++) {
                            var globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
                            globalMatch = this.filterConstraints[this.filters['global'].matchMode](this.objectUtils.resolveFieldData(this.value[i], globalFilterField), this.filters['global'].value);
                            if (globalMatch) {
                                break;
                            }
                        }
                    }
                    var matches = void 0;
                    if (this.filters['global']) {
                        matches = localFiltered ? (localFiltered && localMatch && globalMatch) : globalMatch;
                    }
                    else {
                        matches = localFiltered && localMatch;
                    }
                    if (matches) {
                        this.filteredValue.push(this.value[i]);
                    }
                }
                if (this.filteredValue.length === this.value.length) {
                    this.filteredValue = null;
                }
                if (this.paginator) {
                    this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
                }
            }
        }
        this.onFilter.emit({
            filters: this.filters,
            filteredValue: this.filteredValue || this.value
        });
    };
    Table.prototype.hasFilter = function () {
        var empty = true;
        for (var prop in this.filters) {
            if (this.filters.hasOwnProperty(prop)) {
                empty = false;
                break;
            }
        }
        return !empty;
    };
    Table.prototype.createLazyLoadMetadata = function () {
        return {
            first: this.first,
            rows: this.virtualScroll ? this.rows * 2 : this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder,
            filters: this.filters,
            globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
            multiSortMeta: this.multiSortMeta
        };
    };
    Table.prototype.reset = function () {
        this._sortField = null;
        this._sortOrder = 1;
        this._multiSortMeta = null;
        this.filteredValue = null;
        this.filters = {};
        this.first = 0;
        this.updateTotalRecords();
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
    };
    Table.prototype.exportCSV = function (options) {
        var _this = this;
        var data = this.filteredValue || this.value;
        var csv = '\ufeff';
        if (options && options.selectionOnly) {
            data = this.selection || [];
        }
        //headers
        for (var i = 0; i < this.columns.length; i++) {
            var column = this.columns[i];
            if (column.exportable !== false && column.field) {
                csv += '"' + (column.header || column.field) + '"';
                if (i < (this.columns.length - 1)) {
                    csv += this.csvSeparator;
                }
            }
        }
        //body
        data.forEach(function (record, i) {
            csv += '\n';
            for (var i_1 = 0; i_1 < _this.columns.length; i_1++) {
                var column = _this.columns[i_1];
                if (column.exportable !== false && column.field) {
                    var cellData = _this.objectUtils.resolveFieldData(record, column.field);
                    if (cellData != null)
                        cellData = String(cellData).replace(/"/g, '""');
                    else
                        cellData = '';
                    csv += '"' + cellData + '"';
                    if (i_1 < (_this.columns.length - 1)) {
                        csv += _this.csvSeparator;
                    }
                }
            }
        });
        var blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8;'
        });
        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, this.exportFilename + '.csv');
        }
        else {
            var link = document.createElement("a");
            link.style.display = 'none';
            document.body.appendChild(link);
            if (link.download !== undefined) {
                link.setAttribute('href', URL.createObjectURL(blob));
                link.setAttribute('download', this.exportFilename + '.csv');
                link.click();
            }
            else {
                csv = 'data:text/csv;charset=utf-8,' + csv;
                window.open(encodeURI(csv));
            }
            document.body.removeChild(link);
        }
    };
    Table.prototype.toggleRow = function (rowData, event) {
        if (!this.dataKey) {
            throw new Error('dataKey must be defined to use row expansion');
        }
        var dataKeyValue = String(this.objectUtils.resolveFieldData(rowData, this.dataKey));
        if (this.expandedRowKeys[dataKeyValue] != null) {
            delete this.expandedRowKeys[dataKeyValue];
            this.onRowCollapse.emit({
                originalEvent: event,
                data: rowData
            });
        }
        else {
            if (this.rowExpandMode === 'single') {
                this.expandedRowKeys = {};
            }
            this.expandedRowKeys[dataKeyValue] = 1;
            this.onRowExpand.emit({
                originalEvent: event,
                data: rowData
            });
        }
        if (event) {
            event.preventDefault();
        }
    };
    Table.prototype.isRowExpanded = function (rowData) {
        return this.expandedRowKeys[String(this.objectUtils.resolveFieldData(rowData, this.dataKey))] === 1;
    };
    Table.prototype.isSingleSelectionMode = function () {
        return this.selectionMode === 'single';
    };
    Table.prototype.isMultipleSelectionMode = function () {
        return this.selectionMode === 'multiple';
    };
    Table.prototype.onColumnResizeBegin = function (event) {
        var containerLeft = this.domHandler.getOffset(this.containerViewChild.nativeElement).left;
        this.lastResizerHelperX = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft);
    };
    Table.prototype.onColumnResize = function (event) {
        var containerLeft = this.domHandler.getOffset(this.containerViewChild.nativeElement).left;
        this.domHandler.addClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
        this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild.nativeElement.offsetHeight + 'px';
        this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
        this.resizeHelperViewChild.nativeElement.style.left = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft) + 'px';
        this.resizeHelperViewChild.nativeElement.style.display = 'block';
    };
    Table.prototype.onColumnResizeEnd = function (event, column) {
        var delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
        var columnWidth = column.offsetWidth;
        var newColumnWidth = columnWidth + delta;
        var minWidth = column.style.minWidth || 15;
        if (columnWidth + delta > parseInt(minWidth)) {
            if (this.columnResizeMode === 'fit') {
                var nextColumn = column.nextElementSibling;
                while (!nextColumn.offsetParent) {
                    nextColumn = nextColumn.nextElementSibling;
                }
                if (nextColumn) {
                    var nextColumnWidth = nextColumn.offsetWidth - delta;
                    var nextColumnMinWidth = nextColumn.style.minWidth || 15;
                    if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
                        if (this.scrollable) {
                            var scrollableBodyTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-table-scrollable-body-table');
                            var scrollableHeaderTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-table-scrollable-header-table');
                            var scrollableFooterTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-table-scrollable-footer-table');
                            var resizeColumnIndex = this.domHandler.index(column);
                            this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                        }
                        else {
                            var resizeColumnIndex = this.domHandler.index(column);
                            column.style.width = newColumnWidth + 'px';
                            this.noScrollOnResizeCheckOverflow(this.tableViewChild.nativeElement, newColumnWidth, nextColumnWidth, resizeColumnIndex);
                            if (nextColumn) {
                                nextColumn.style.width = nextColumnWidth + 'px';
                            }
                        }
                    }
                }
            }
            else if (this.columnResizeMode === 'expand') {
                if (this.scrollable) {
                    var scrollableBodyTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-table-scrollable-body-table');
                    var scrollableHeaderTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-table-scrollable-header-table');
                    var scrollableFooterTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-table-scrollable-footer-table');
                    scrollableBodyTable.style.width = scrollableBodyTable.offsetWidth + delta + 'px';
                    scrollableHeaderTable.style.width = scrollableHeaderTable.offsetWidth + delta + 'px';
                    if (scrollableFooterTable) {
                        scrollableFooterTable.style.width = scrollableHeaderTable.offsetWidth + delta + 'px';
                    }
                    var resizeColumnIndex = this.domHandler.index(column);
                    this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
                    this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
                    this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
                }
                else {
                    this.tableViewChild.nativeElement.style.width = this.tableViewChild.nativeElement.offsetWidth + delta + 'px';
                    column.style.width = newColumnWidth + 'px';
                    var resizeColumnIndex = this.domHandler.index(column);
                    var containerWidth = this.tableViewChild.nativeElement.style.width;
                    this.containerViewChild.nativeElement.style.width = containerWidth + 'px';
                    this.noScrollOnResizeCheckOverflow(this.tableViewChild.nativeElement, newColumnWidth, null, resizeColumnIndex);
                }
            }
            this.onColResize.emit({
                element: column,
                delta: delta
            });
        }
        this.resizeHelperViewChild.nativeElement.style.display = 'none';
        this.domHandler.removeClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
    };
    Table.prototype.noScrollOnResizeCheckOverflow = function (bodyTable, newColumnWidth, nextColumnWidth, resizeColumnIndex) {
        var _this = this;
        var trs = this.domHandler.find(bodyTable, 'tr');
        if (nextColumnWidth) {
            trs.forEach(function (row) {
                _this.objectUtils.onResizeCheckOverflow(row.children[resizeColumnIndex], newColumnWidth);
                _this.objectUtils.onResizeCheckOverflow(row.children[resizeColumnIndex + 1], nextColumnWidth);
            });
        }
        else {
            trs.forEach(function (row) {
                _this.objectUtils.onResizeCheckOverflow(row.children[resizeColumnIndex], newColumnWidth);
            });
        }
    };
    Table.prototype.resizeColGroup = function (table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
        var _this = this;
        if (table) {
            var colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;
            var trs = void 0;
            if (colGroup) {
                var col = colGroup.children[resizeColumnIndex];
                trs = this.domHandler.find(table, 'tr');
                var nextCol = col.nextElementSibling;
                col.style.width = newColumnWidth + 'px';
                if (nextCol && nextColumnWidth) {
                    nextCol.style.width = nextColumnWidth + 'px';
                    trs.forEach(function (row) {
                        _this.objectUtils.onResizeCheckOverflow(row.children[resizeColumnIndex], newColumnWidth);
                        _this.objectUtils.onResizeCheckOverflow(row.children[resizeColumnIndex + 1], nextColumnWidth);
                    });
                }
                else {
                    trs.forEach(function (row) {
                        _this.objectUtils.onResizeCheckOverflow(row.children[resizeColumnIndex], newColumnWidth);
                    });
                }
            }
            else {
                throw "Scrollable tables require a colgroup to support resizable columns";
            }
        }
    };
    Table.prototype.onColumnDragStart = function (event, columnElement) {
        if (this.domHandler.hasClass(event.target, 'ui-column-resizer')) {
            event.preventDefault();
            return;
        }
        this.reorderIconWidth = this.domHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild.nativeElement);
        this.reorderIconHeight = this.domHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild.nativeElement);
        this.draggedColumn = columnElement;
        event.dataTransfer.setData('text', 'b'); // For firefox
    };
    Table.prototype.onColumnDragEnter = function (event, dropHeader) {
        if (this.reorderableColumns && this.draggedColumn && dropHeader) {
            event.preventDefault();
            var containerOffset = this.domHandler.getOffset(this.containerViewChild.nativeElement);
            var dropHeaderOffset = this.domHandler.getOffset(dropHeader);
            if (this.draggedColumn != dropHeader) {
                var targetLeft = dropHeaderOffset.left - containerOffset.left;
                var targetTop = containerOffset.top - dropHeaderOffset.top;
                var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
                this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
                this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
                if (event.pageX > columnCenter) {
                    this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.dropPosition = 1;
                }
                else {
                    this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.dropPosition = -1;
                }
                this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
                this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
            }
            else {
                event.dataTransfer.dropEffect = 'none';
            }
        }
    };
    Table.prototype.onColumnDragLeave = function (event) {
        if (this.reorderableColumns && this.draggedColumn) {
            event.preventDefault();
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
        }
    };
    Table.prototype.onColumnDrop = function (event, dropColumn) {
        event.preventDefault();
        if (this.draggedColumn) {
            var dragIndex = this.domHandler.index(this.draggedColumn);
            var dropIndex = this.domHandler.index(dropColumn);
            var allowDrop = (dragIndex != dropIndex);
            if (allowDrop && ((dropIndex - dragIndex == 1 && this.dropPosition === -1) || (dragIndex - dropIndex == 1 && this.dropPosition === 1))) {
                allowDrop = false;
            }
            if (allowDrop) {
                this.objectUtils.reorderArray(this.columns, dragIndex, dropIndex);
                this.onColReorder.emit({
                    dragIndex: dragIndex,
                    dropIndex: dropIndex,
                    columns: this.columns
                });
            }
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
            this.draggedColumn.draggable = false;
            this.draggedColumn = null;
            this.dropPosition = null;
        }
    };
    Table.prototype.handleVirtualScroll = function (event) {
        var _this = this;
        this.first = (event.page - 1) * this.rows;
        this.virtualScrollCallback = event.callback;
        this.zone.run(function () {
            if (_this.virtualScrollTimer) {
                clearTimeout(_this.virtualScrollTimer);
            }
            _this.virtualScrollTimer = setTimeout(function () {
                _this.onLazyLoad.emit(_this.createLazyLoadMetadata());
            }, _this.virtualScrollDelay);
        });
    };
    Table.prototype.isEmpty = function () {
        var data = this.filteredValue || this.value;
        return data == null || data.length == 0;
    };
    Table.prototype.ngOnDestroy = function () {
        this.editingCell = null;
        this.initialized = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], Table.prototype, "columns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], Table.prototype, "frozenColumns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], Table.prototype, "frozenValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Table.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Table.prototype, "rows", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Table.prototype, "first", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Table.prototype, "totalRecords", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Table.prototype, "pageLinks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], Table.prototype, "rowsPerPageOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "alwaysShowPaginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "paginatorPosition", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Table.prototype, "paginatorDropdownAppendTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Table.prototype, "defaultSortOrder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "sortMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "selectionMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "selectionChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Table.prototype, "contextMenuSelection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "contextMenuSelectionChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "dataKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Function)
    ], Table.prototype, "rowTrackBy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "lazy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "compareSelectionBy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "csvSeparator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "exportFilename", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Table.prototype, "filters", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], Table.prototype, "globalFilterFields", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Table.prototype, "filterDelay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Table.prototype, "expandedRowKeys", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "rowExpandMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "scrollable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "scrollHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "virtualScroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Table.prototype, "virtualScrollDelay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Table.prototype, "virtualRowHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "frozenWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "responsive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Table.prototype, "contextMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "resizableColumns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "columnResizeMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "reorderableColumns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "loading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "loadingIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "rowHover", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "customSort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "autoLayout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onRowSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onRowUnselect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onSort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onFilter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onLazyLoad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onRowExpand", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onRowCollapse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onContextMenuSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onColResize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onColReorder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onEditInit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onEditComplete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onEditCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onHeaderCheckboxToggle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "sortFunction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], Table.prototype, "containerViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('resizeHelper'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], Table.prototype, "resizeHelperViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('reorderIndicatorUp'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], Table.prototype, "reorderIndicatorUpViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('reorderIndicatorDown'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], Table.prototype, "reorderIndicatorDownViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('table'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], Table.prototype, "tableViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__common_shared__["f" /* PrimeTemplate */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* QueryList */])
    ], Table.prototype, "templates", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], Table.prototype, "value", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], Table.prototype, "sortField", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], Table.prototype, "sortOrder", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], Table.prototype, "multiSortMeta", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Table.prototype, "selection", null);
    Table = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-table',
            template: "\n        <div #container [ngStyle]=\"style\" [class]=\"styleClass\"\n            [ngClass]=\"{'ui-table ui-widget': true, 'ui-table-responsive': responsive, 'ui-table-resizable': resizableColumns,\n                'ui-table-resizable-fit': (resizableColumns && columnResizeMode === 'fit'),\n                'ui-table-hoverable-rows': (rowHover||selectionMode), 'ui-table-auto-layout': autoLayout}\">\n            <div class=\"ui-table-loading ui-widget-overlay\" *ngIf=\"loading\"></div>\n            <div class=\"ui-table-loading-content\" *ngIf=\"loading\">\n                <i [class]=\"'fa fa-spin fa-2x ' + loadingIcon\"></i>\n            </div>\n            <div *ngIf=\"captionTemplate\" class=\"ui-table-caption ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"captionTemplate\"></ng-container>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-top\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'top' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\"></p-paginator>\n\n            <div class=\"ui-table-wrapper\" *ngIf=\"!scrollable\">\n                <table #table>\n                    <ng-container *ngTemplateOutlet=\"colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-table-thead\">\n                        <ng-container *ngTemplateOutlet=\"headerTemplate; context: {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tfoot class=\"ui-table-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                    <tbody class=\"ui-table-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"bodyTemplate\"></tbody>\n                </table>\n            </div>\n\n            <div class=\"ui-table-scrollable-wrapper\" *ngIf=\"scrollable\">\n               <div class=\"ui-table-frozen-view\" *ngIf=\"frozenColumns||frozenBodyTemplate\" [pScrollableView]=\"frozenColumns\" [frozen]=\"true\" [ngStyle]=\"{width: frozenWidth}\" [scrollHeight]=\"scrollHeight\"></div>\n               <div [pScrollableView]=\"columns\" [frozen]=\"false\" [scrollHeight]=\"scrollHeight\"></div>\n            </div>\n\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-bottom\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\"></p-paginator>\n            <div *ngIf=\"summaryTemplate\" class=\"ui-table-summary ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"summaryTemplate\"></ng-container>\n            </div>\n\n            <div #resizeHelper class=\"ui-column-resizer-helper ui-state-highlight\" style=\"display:none\" *ngIf=\"resizableColumns\"></div>\n\n            <span #reorderIndicatorUp class=\"fa fa-arrow-down ui-table-reorder-indicator-up\" *ngIf=\"reorderableColumns\"></span>\n            <span #reorderIndicatorDown class=\"fa fa-arrow-up ui-table-reorder-indicator-down\" *ngIf=\"reorderableColumns\"></span>\n        </div>\n    ",
            providers: [__WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_5__utils_objectutils__["a" /* ObjectUtils */], TableService]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_5__utils_objectutils__["a" /* ObjectUtils */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], TableService])
    ], Table);
    return Table;
}());

var TableBody = (function () {
    function TableBody(dt) {
        this.dt = dt;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pTableBody"),
        __metadata("design:type", Array)
    ], TableBody.prototype, "columns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pTableBodyTemplate"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* TemplateRef */])
    ], TableBody.prototype, "template", void 0);
    TableBody = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[pTableBody]',
            template: "\n        <ng-container *ngIf=\"!dt.expandedRowTemplate\">\n            <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"dt.paginator ? ((dt.filteredValue||dt.value) | slice:(dt.lazy ? 0 : dt.first):((dt.lazy ? 0 : dt.first) + dt.rows)) : (dt.filteredValue||dt.value)\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: rowIndex, columns: columns}\"></ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"dt.expandedRowTemplate\">\n            <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"dt.paginator ? ((dt.filteredValue||dt.value) | slice:(dt.lazy ? 0 : dt.first):((dt.lazy ? 0 : dt.first) + dt.rows)) : (dt.filteredValue||dt.value)\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngIf=\"dt.isRowExpanded(rowData); else collapsedrow\">\n                    <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: rowIndex, columns: columns, expanded: true}\"></ng-container>\n                    <ng-container *ngTemplateOutlet=\"dt.expandedRowTemplate; context: {$implicit: rowData, rowIndex: rowIndex, columns: columns}\"></ng-container>\n                </ng-container>\n                <ng-template #collapsedrow>\n                    <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: rowIndex, expanded: false, columns: columns}\"></ng-container>\n                </ng-template>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"dt.isEmpty()\">\n            <ng-container *ngTemplateOutlet=\"dt.emptyMessageTemplate; context: {$implicit: columns}\"></ng-container>\n        </ng-container>\n    "
        }),
        __metadata("design:paramtypes", [Table])
    ], TableBody);
    return TableBody;
}());

var ScrollableView = (function () {
    function ScrollableView(dt, el, domHandler, zone) {
        var _this = this;
        this.dt = dt;
        this.el = el;
        this.domHandler = domHandler;
        this.zone = zone;
        this.subscription = this.dt.tableService.valueSource$.subscribe(function () {
            _this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.alignScrollBar();
                }, 50);
            });
        });
    }
    Object.defineProperty(ScrollableView.prototype, "scrollHeight", {
        get: function () {
            return this._scrollHeight;
        },
        set: function (val) {
            this._scrollHeight = val;
            this.setScrollHeight();
        },
        enumerable: true,
        configurable: true
    });
    ScrollableView.prototype.ngAfterViewInit = function () {
        this.bindEvents();
        this.setScrollHeight();
        this.alignScrollBar();
        if (!this.frozen) {
            if (this.dt.frozenColumns || this.dt.frozenBodyTemplate) {
                this.domHandler.addClass(this.el.nativeElement, 'ui-table-unfrozen-view');
            }
            if (this.dt.frozenWidth) {
                this.el.nativeElement.style.left = this.dt.frozenWidth;
                this.el.nativeElement.style.width = 'calc(100% - ' + this.dt.frozenWidth + ')';
            }
            var frozenView = this.el.nativeElement.previousElementSibling;
            if (frozenView) {
                this.frozenSiblingBody = this.domHandler.findSingle(frozenView, '.ui-table-scrollable-body');
            }
        }
        else {
            this.scrollBodyViewChild.nativeElement.style.paddingBottom = this.domHandler.calculateScrollbarWidth() + 'px';
        }
        if (this.dt.virtualScroll) {
            this.virtualScrollerViewChild.nativeElement.style.height = this.dt.totalRecords * this.dt.virtualRowHeight + 'px';
        }
    };
    ScrollableView.prototype.bindEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            var scrollBarWidth = _this.domHandler.calculateScrollbarWidth();
            if (_this.scrollHeaderViewChild && _this.scrollHeaderViewChild.nativeElement) {
                _this.headerScrollListener = _this.onHeaderScroll.bind(_this);
                _this.scrollHeaderBoxViewChild.nativeElement.addEventListener('scroll', _this.headerScrollListener);
            }
            if (_this.scrollFooterViewChild && _this.scrollFooterViewChild.nativeElement) {
                _this.footerScrollListener = _this.onFooterScroll.bind(_this);
                _this.scrollFooterViewChild.nativeElement.addEventListener('scroll', _this.footerScrollListener);
            }
            if (!_this.frozen) {
                _this.bodyScrollListener = _this.onBodyScroll.bind(_this);
                _this.scrollBodyViewChild.nativeElement.addEventListener('scroll', _this.bodyScrollListener);
            }
        });
    };
    ScrollableView.prototype.unbindEvents = function () {
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderBoxViewChild.nativeElement.removeEventListener('scroll', this.headerScrollListener);
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.removeEventListener('scroll', this.footerScrollListener);
        }
        this.scrollBodyViewChild.nativeElement.addEventListener('scroll', this.bodyScrollListener);
    };
    ScrollableView.prototype.onHeaderScroll = function (event) {
        this.scrollHeaderViewChild.nativeElement.scrollLeft = 0;
    };
    ScrollableView.prototype.onFooterScroll = function (event) {
        this.scrollFooterViewChild.nativeElement.scrollLeft = 0;
    };
    ScrollableView.prototype.onBodyScroll = function (event) {
        var _this = this;
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft = -1 * this.scrollBodyViewChild.nativeElement.scrollLeft + 'px';
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterBoxViewChild.nativeElement.style.marginLeft = -1 * this.scrollBodyViewChild.nativeElement.scrollLeft + 'px';
        }
        if (this.frozenSiblingBody) {
            this.frozenSiblingBody.scrollTop = this.scrollBodyViewChild.nativeElement.scrollTop;
        }
        if (this.dt.virtualScroll) {
            var viewport = this.domHandler.getOuterHeight(this.scrollBodyViewChild.nativeElement);
            var tableHeight = this.domHandler.getOuterHeight(this.scrollTableViewChild.nativeElement);
            var pageHeight_1 = 28 * this.dt.rows;
            var virtualTableHeight = this.domHandler.getOuterHeight(this.virtualScrollerViewChild.nativeElement);
            var pageCount = (virtualTableHeight / pageHeight_1) || 1;
            var scrollBodyTop = this.scrollTableViewChild.nativeElement.style.top || '0';
            if ((this.scrollBodyViewChild.nativeElement.scrollTop + viewport > parseFloat(scrollBodyTop) + tableHeight) || (this.scrollBodyViewChild.nativeElement.scrollTop < parseFloat(scrollBodyTop))) {
                var page_1 = Math.floor((this.scrollBodyViewChild.nativeElement.scrollTop * pageCount) / (this.scrollBodyViewChild.nativeElement.scrollHeight)) + 1;
                this.dt.handleVirtualScroll({
                    page: page_1,
                    callback: function () {
                        _this.scrollTableViewChild.nativeElement.style.top = ((page_1 - 1) * pageHeight_1) + 'px';
                        if (_this.frozenSiblingBody) {
                            _this.frozenSiblingBody.children[0].style.top = _this.scrollTableViewChild.nativeElement.style.top;
                        }
                    }
                });
            }
        }
    };
    ScrollableView.prototype.setScrollHeight = function () {
        if (this.scrollHeight && this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
            if (this.scrollHeight.indexOf('%') !== -1) {
                this.scrollBodyViewChild.nativeElement.style.visibility = 'hidden';
                this.scrollBodyViewChild.nativeElement.style.height = '100px'; //temporary height to calculate static height
                var containerHeight = this.domHandler.getOuterHeight(this.dt.el.nativeElement.children[0]);
                var relativeHeight = this.domHandler.getOuterHeight(this.dt.el.nativeElement.parentElement) * parseInt(this.scrollHeight) / 100;
                var staticHeight = containerHeight - 100; //total height of headers, footers, paginators
                var scrollBodyHeight = (relativeHeight - staticHeight);
                this.scrollBodyViewChild.nativeElement.style.height = 'auto';
                this.scrollBodyViewChild.nativeElement.style.maxHeight = scrollBodyHeight + 'px';
                this.scrollBodyViewChild.nativeElement.style.visibility = 'visible';
            }
            else {
                this.scrollBodyViewChild.nativeElement.style.maxHeight = this.scrollHeight;
            }
        }
    };
    ScrollableView.prototype.hasVerticalOverflow = function () {
        return this.domHandler.getOuterHeight(this.scrollTableViewChild.nativeElement) > this.domHandler.getOuterHeight(this.scrollBodyViewChild.nativeElement);
    };
    ScrollableView.prototype.alignScrollBar = function () {
        if (!this.frozen) {
            var scrollBarWidth = this.hasVerticalOverflow() ? this.domHandler.calculateScrollbarWidth() : 0;
            this.scrollHeaderBoxViewChild.nativeElement.style.marginRight = scrollBarWidth + 'px';
            if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
                this.scrollFooterBoxViewChild.nativeElement.style.marginRight = scrollBarWidth + 'px';
            }
        }
    };
    ScrollableView.prototype.ngOnDestroy = function () {
        this.unbindEvents();
        this.frozenSiblingBody = null;
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pScrollableView"),
        __metadata("design:type", Array)
    ], ScrollableView.prototype, "columns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ScrollableView.prototype, "frozen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('scrollHeader'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollableView.prototype, "scrollHeaderViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('scrollHeaderBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollableView.prototype, "scrollHeaderBoxViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('scrollBody'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollableView.prototype, "scrollBodyViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('scrollTable'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollableView.prototype, "scrollTableViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('scrollFooter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollableView.prototype, "scrollFooterViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('scrollFooterBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollableView.prototype, "scrollFooterBoxViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('virtualScroller'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollableView.prototype, "virtualScrollerViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ScrollableView.prototype, "scrollHeight", null);
    ScrollableView = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[pScrollableView]',
            template: "\n        <div #scrollHeader class=\"ui-table-scrollable-header ui-widget-header\">\n            <div #scrollHeaderBox class=\"ui-table-scrollable-header-box\">\n                <table class=\"ui-table-scrollable-header-table\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-table-thead\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenHeaderTemplate||dt.headerTemplate : dt.headerTemplate; context {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tbody class=\"ui-table-tbody\">\n                        <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"dt.frozenValue\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                            <ng-container *ngTemplateOutlet=\"dt.frozenRowsTemplate; context: {$implicit: rowData, rowIndex: rowIndex, columns: columns}\"></ng-container>\n                        </ng-template>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div #scrollBody class=\"ui-table-scrollable-body\">\n            <table #scrollTable [ngClass]=\"{'ui-table-virtual-table': dt.virtualScroll}\" class=\"ui-table-scrollable-body-table\">\n                <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                <tbody class=\"ui-table-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"frozen ? dt.frozenBodyTemplate||dt.bodyTemplate : dt.bodyTemplate\"></tbody>\n            </table>\n            <div #virtualScroller class=\"ui-table-virtual-scroller\"></div>\n        </div>\n        <div #scrollFooter *ngIf=\"dt.footerTemplate\" class=\"ui-table-scrollable-footer ui-widget-header\">\n            <div #scrollFooterBox class=\"ui-table-scrollable-footer-box\">\n                <table class=\"ui-table-scrollable-footer-table\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tfoot class=\"ui-table-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenFooterTemplate||dt.footerTemplate : dt.footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], ScrollableView);
    return ScrollableView;
}());

var SortableColumn = (function () {
    function SortableColumn(dt, domHandler) {
        var _this = this;
        this.dt = dt;
        this.domHandler = domHandler;
        this.subscription = this.dt.tableService.sortSource$.subscribe(function (sortMeta) {
            _this.updateSortState();
        });
    }
    SortableColumn.prototype.ngOnInit = function () {
        this.updateSortState();
    };
    SortableColumn.prototype.updateSortState = function () {
        this.sorted = this.dt.isSorted(this.field);
    };
    SortableColumn.prototype.onClick = function (event) {
        this.dt.sort({
            originalEvent: event,
            field: this.field
        });
        this.domHandler.clearSelection();
    };
    SortableColumn.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pSortableColumn"),
        __metadata("design:type", String)
    ], SortableColumn.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], SortableColumn.prototype, "onClick", null);
    SortableColumn = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pSortableColumn]',
            providers: [__WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */]],
            host: {
                '[class.ui-sortable-column]': 'true',
                '[class.ui-state-highlight]': 'sorted'
            }
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */]])
    ], SortableColumn);
    return SortableColumn;
}());

var SortIcon = (function () {
    function SortIcon(dt) {
        var _this = this;
        this.dt = dt;
        this.subscription = this.dt.tableService.sortSource$.subscribe(function (sortMeta) {
            _this.updateSortState();
        });
    }
    SortIcon.prototype.ngOnInit = function () {
        this.updateSortState();
    };
    SortIcon.prototype.updateSortState = function () {
        if (this.dt.sortMode === 'single') {
            this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
        }
        else if (this.dt.sortMode === 'multiple') {
            var sortMeta = this.dt.getSortMeta(this.field);
            this.sortOrder = sortMeta ? sortMeta.order : 0;
        }
    };
    SortIcon.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SortIcon.prototype, "field", void 0);
    SortIcon = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-sortIcon',
            template: "\n        <span class=\"ui-sortable-column-icon fa fa-fw fa-sort\" [ngClass]=\"{'fa-sort-asc': sortOrder === 1, 'fa-sort-desc': sortOrder === -1}\"></span>\n    "
        }),
        __metadata("design:paramtypes", [Table])
    ], SortIcon);
    return SortIcon;
}());

var SelectableRow = (function () {
    function SelectableRow(dt, domHandler, tableService) {
        var _this = this;
        this.dt = dt;
        this.domHandler = domHandler;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this.selected = _this.dt.isSelected(_this.data);
        });
    }
    SelectableRow.prototype.ngOnInit = function () {
        this.selected = this.dt.isSelected(this.data);
    };
    SelectableRow.prototype.onClick = function (event) {
        this.dt.handleRowClick({
            originalEvent: event,
            rowData: this.data,
            rowIndex: this.index
        });
    };
    SelectableRow.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pSelectableRow"),
        __metadata("design:type", Object)
    ], SelectableRow.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pSelectableRowIndex"),
        __metadata("design:type", Number)
    ], SelectableRow.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], SelectableRow.prototype, "onClick", null);
    SelectableRow = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pSelectableRow]',
            providers: [__WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */]],
            host: {
                '[class.ui-state-highlight]': 'selected'
            }
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], TableService])
    ], SelectableRow);
    return SelectableRow;
}());

var TextEllipsis = (function () {
    function TextEllipsis(el, objectUtils) {
        this.el = el;
        this.objectUtils = objectUtils;
    }
    TextEllipsis.prototype.ngAfterViewInit = function () {
        this.objectUtils.checkOverflow(this.el);
    };
    TextEllipsis.prototype.displayToolTip = function () {
        var _this = this;
        var ele;
        setTimeout(function () {
            ele = document.querySelector('.ui-tooltip.ui-widget');
            if (!_this.el.nativeElement.parentElement.classList.value.includes('ui-cell-ellipsis') && ele) {
                ele.style.display = 'none';
            }
            else if (_this.el.nativeElement.parentElement.classList.value.includes('ui-cell-ellipsis') && ele) {
                ele.style.maxWidth = '100%';
            }
        }, 0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TextEllipsis.prototype, "displayToolTip", null);
    TextEllipsis = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pTextEllipsis]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_5__utils_objectutils__["a" /* ObjectUtils */]])
    ], TextEllipsis);
    return TextEllipsis;
}());

var ContextMenuRow = (function () {
    function ContextMenuRow(dt, tableService) {
        var _this = this;
        this.dt = dt;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.contextMenuSource$.subscribe(function (data) {
            _this.selected = _this.dt.equals(_this.data, data);
        });
    }
    ContextMenuRow.prototype.onContextMenu = function (event) {
        this.dt.handleRowRightClick({
            originalEvent: event,
            rowData: this.data
        });
        event.preventDefault();
    };
    ContextMenuRow.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pContextMenuRow"),
        __metadata("design:type", Object)
    ], ContextMenuRow.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('contextmenu', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ContextMenuRow.prototype, "onContextMenu", null);
    ContextMenuRow = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pContextMenuRow]',
            host: {
                '[class.ui-contextmenu-selected]': 'selected'
            }
        }),
        __metadata("design:paramtypes", [Table, TableService])
    ], ContextMenuRow);
    return ContextMenuRow;
}());

var RowToggler = (function () {
    function RowToggler(dt) {
        this.dt = dt;
    }
    RowToggler.prototype.onClick = function (event) {
        this.dt.toggleRow(this.data, event);
        event.preventDefault();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('pRowToggler'),
        __metadata("design:type", Object)
    ], RowToggler.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], RowToggler.prototype, "onClick", null);
    RowToggler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pRowToggler]'
        }),
        __metadata("design:paramtypes", [Table])
    ], RowToggler);
    return RowToggler;
}());

var ResizableColumn = (function () {
    function ResizableColumn(dt, el, domHandler, zone) {
        this.dt = dt;
        this.el = el;
        this.domHandler = domHandler;
        this.zone = zone;
    }
    ResizableColumn.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.domHandler.addClass(this.el.nativeElement, 'ui-resizable-column');
        this.resizer = document.createElement('span');
        this.resizer.className = 'ui-column-resizer ui-clickable';
        this.el.nativeElement.appendChild(this.resizer);
        this.zone.runOutsideAngular(function () {
            _this.resizerMouseDownListener = _this.onMouseDown.bind(_this);
            _this.resizer.addEventListener('mousedown', _this.resizerMouseDownListener);
        });
    };
    ResizableColumn.prototype.bindDocumentEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.documentMouseMoveListener = _this.onDocumentMouseMove.bind(_this);
            document.addEventListener('mousemove', _this.documentMouseMoveListener);
            _this.documentMouseUpListener = _this.onDocumentMouseUp.bind(_this);
            document.addEventListener('mouseup', _this.documentMouseUpListener);
        });
    };
    ResizableColumn.prototype.unbindDocumentEvents = function () {
        if (this.documentMouseMoveListener) {
            document.removeEventListener('mousemove', this.documentMouseMoveListener);
            this.documentMouseMoveListener = null;
        }
        if (this.documentMouseUpListener) {
            document.removeEventListener('mouseup', this.documentMouseUpListener);
            this.documentMouseUpListener = null;
        }
    };
    ResizableColumn.prototype.onMouseDown = function (event) {
        this.dt.onColumnResizeBegin(event);
        this.bindDocumentEvents();
    };
    ResizableColumn.prototype.onDocumentMouseMove = function (event) {
        this.dt.onColumnResize(event);
    };
    ResizableColumn.prototype.onDocumentMouseUp = function (event) {
        this.dt.onColumnResizeEnd(event, this.el.nativeElement);
        this.unbindDocumentEvents();
    };
    ResizableColumn.prototype.ngOnDestroy = function () {
        if (this.resizerMouseDownListener) {
            this.resizer.removeEventListener('mousedown', this.resizerMouseDownListener);
        }
        this.unbindDocumentEvents();
    };
    ResizableColumn = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pResizableColumn]'
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], ResizableColumn);
    return ResizableColumn;
}());

var ReorderableColumn = (function () {
    function ReorderableColumn(dt, el, domHandler, zone) {
        this.dt = dt;
        this.el = el;
        this.domHandler = domHandler;
        this.zone = zone;
    }
    ReorderableColumn.prototype.ngAfterViewInit = function () {
        this.bindEvents();
    };
    ReorderableColumn.prototype.bindEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.mouseDownListener = _this.onMouseDown.bind(_this);
            _this.el.nativeElement.addEventListener('mousedown', _this.mouseDownListener);
            _this.dragStartListener = _this.onDragStart.bind(_this);
            _this.el.nativeElement.addEventListener('dragstart', _this.dragStartListener);
            _this.dragOverListener = _this.onDragEnter.bind(_this);
            _this.el.nativeElement.addEventListener('dragover', _this.dragOverListener);
            _this.dragEnterListener = _this.onDragEnter.bind(_this);
            _this.el.nativeElement.addEventListener('dragenter', _this.dragEnterListener);
            _this.dragLeaveListener = _this.onDragLeave.bind(_this);
            _this.el.nativeElement.addEventListener('dragleave', _this.dragLeaveListener);
        });
    };
    ReorderableColumn.prototype.unbindEvents = function () {
        if (this.mouseDownListener) {
            document.removeEventListener('mousedown', this.mouseDownListener);
            this.mouseDownListener = null;
        }
        if (this.dragOverListener) {
            document.removeEventListener('dragover', this.dragOverListener);
            this.dragOverListener = null;
        }
        if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
        }
        if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
        }
        if (this.dragLeaveListener) {
            document.removeEventListener('dragleave', this.dragLeaveListener);
            this.dragLeaveListener = null;
        }
    };
    ReorderableColumn.prototype.onMouseDown = function (event) {
        if (event.target.nodeName === 'INPUT')
            this.el.nativeElement.draggable = false;
        else
            this.el.nativeElement.draggable = true;
    };
    ReorderableColumn.prototype.onDragStart = function (event) {
        this.dt.onColumnDragStart(event, this.el.nativeElement);
    };
    ReorderableColumn.prototype.onDragOver = function (event) {
        event.preventDefault();
    };
    ReorderableColumn.prototype.onDragEnter = function (event) {
        this.dt.onColumnDragEnter(event, this.el.nativeElement);
    };
    ReorderableColumn.prototype.onDragLeave = function (event) {
        this.dt.onColumnDragLeave(event);
    };
    ReorderableColumn.prototype.onDrop = function (event) {
        this.dt.onColumnDrop(event, this.el.nativeElement);
    };
    ReorderableColumn.prototype.ngOnDestroy = function () {
        this.unbindEvents();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ReorderableColumn.prototype, "onDrop", null);
    ReorderableColumn = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pReorderableColumn]'
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], ReorderableColumn);
    return ReorderableColumn;
}());

var EditableColumn = (function () {
    function EditableColumn(dt, el, domHandler, zone) {
        this.dt = dt;
        this.el = el;
        this.domHandler = domHandler;
        this.zone = zone;
    }
    EditableColumn.prototype.ngAfterViewInit = function () {
        this.domHandler.addClass(this.el.nativeElement, 'ui-editable-column');
    };
    EditableColumn.prototype.isValid = function () {
        return (this.dt.editingCell && this.domHandler.find(this.dt.editingCell, '.ng-invalid.ng-dirty').length === 0);
    };
    EditableColumn.prototype.onClick = function (event) {
        if (this.dt.editingCell) {
            if (this.dt.editingCell !== this.el.nativeElement) {
                if (!this.isValid()) {
                    return;
                }
                this.domHandler.removeClass(this.dt.editingCell, 'ui-editing-cell');
                this.openCell();
            }
        }
        else {
            this.openCell();
        }
    };
    EditableColumn.prototype.openCell = function () {
        var _this = this;
        this.dt.editingCell = this.el.nativeElement;
        this.domHandler.addClass(this.el.nativeElement, 'ui-editing-cell');
        this.dt.onEditInit.emit({ field: this.field, data: this.data });
        this.zone.runOutsideAngular(function () {
            setTimeout(function () {
                var focusable = _this.domHandler.findSingle(_this.el.nativeElement, 'input, textarea');
                if (focusable) {
                    focusable.focus();
                }
            }, 50);
        });
    };
    EditableColumn.prototype.onKeyDown = function (event) {
        //enter
        if (event.keyCode == 13) {
            if (this.isValid()) {
                this.domHandler.removeClass(this.dt.editingCell, 'ui-editing-cell');
                this.dt.editingCell = null;
                this.dt.onEditComplete.emit({ field: this.field, data: this.data });
            }
            event.preventDefault();
        }
        else if (event.keyCode == 27) {
            if (this.isValid()) {
                this.domHandler.removeClass(this.dt.editingCell, 'ui-editing-cell');
                this.dt.editingCell = null;
                this.dt.onEditCancel.emit({ field: this.field, data: this.data });
            }
            event.preventDefault();
        }
        else if (event.keyCode == 9) {
            if (event.shiftKey)
                this.moveToPreviousCell(event);
            else
                this.moveToNextCell(event);
        }
    };
    EditableColumn.prototype.findCell = function (element) {
        if (element) {
            var cell = element;
            while (cell && !this.domHandler.hasClass(cell, 'ui-editing-cell')) {
                cell = cell.parentElement;
            }
            return cell;
        }
        else {
            return null;
        }
    };
    EditableColumn.prototype.moveToPreviousCell = function (event) {
        var currentCell = this.findCell(event.target);
        var row = currentCell.parentElement;
        var targetCell = this.findPreviousEditableColumn(currentCell);
        if (targetCell) {
            this.domHandler.invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    };
    EditableColumn.prototype.moveToNextCell = function (event) {
        var currentCell = this.findCell(event.target);
        var row = currentCell.parentElement;
        var targetCell = this.findNextEditableColumn(currentCell);
        if (targetCell) {
            this.domHandler.invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    };
    EditableColumn.prototype.findPreviousEditableColumn = function (cell) {
        var prevCell = cell.previousElementSibling;
        if (!prevCell) {
            var previousRow = cell.parentElement.previousElementSibling;
            if (previousRow) {
                prevCell = previousRow.lastElementChild;
            }
        }
        if (prevCell) {
            if (this.domHandler.hasClass(prevCell, 'ui-editable-column'))
                return prevCell;
            else
                return this.findPreviousEditableColumn(prevCell);
        }
        else {
            return null;
        }
    };
    EditableColumn.prototype.findNextEditableColumn = function (cell) {
        var nextCell = cell.nextElementSibling;
        if (!nextCell) {
            var nextRow = cell.parentElement.nextElementSibling;
            if (nextRow) {
                nextCell = nextRow.firstElementChild;
            }
        }
        if (nextCell) {
            if (this.domHandler.hasClass(nextCell, 'ui-editable-column'))
                return nextCell;
            else
                return this.findNextEditableColumn(nextCell);
        }
        else {
            return null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pEditableColumn"),
        __metadata("design:type", Object)
    ], EditableColumn.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pEditableColumnField"),
        __metadata("design:type", Object)
    ], EditableColumn.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], EditableColumn.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], EditableColumn.prototype, "onKeyDown", null);
    EditableColumn = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pEditableColumn]'
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], EditableColumn);
    return EditableColumn;
}());

var CellEditor = (function () {
    function CellEditor(dt, editableColumn) {
        this.dt = dt;
        this.editableColumn = editableColumn;
    }
    CellEditor.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'input':
                    _this.inputTemplate = item.template;
                    break;
                case 'output':
                    _this.outputTemplate = item.template;
                    break;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__common_shared__["f" /* PrimeTemplate */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* QueryList */])
    ], CellEditor.prototype, "templates", void 0);
    CellEditor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-cellEditor',
            template: "\n        <ng-container *ngIf=\"dt.editingCell === editableColumn.el.nativeElement\">\n            <ng-container *ngTemplateOutlet=\"inputTemplate\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"!dt.editingCell || dt.editingCell !== editableColumn.el.nativeElement\">\n            <ng-container *ngTemplateOutlet=\"outputTemplate\"></ng-container>\n        </ng-container>\n    "
        }),
        __metadata("design:paramtypes", [Table, EditableColumn])
    ], CellEditor);
    return CellEditor;
}());

var TableRadioButton = (function () {
    function TableRadioButton(dt, domHandler, tableService) {
        var _this = this;
        this.dt = dt;
        this.domHandler = domHandler;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this.checked = _this.dt.isSelected(_this.value);
        });
    }
    TableRadioButton.prototype.ngOnInit = function () {
        this.checked = this.dt.isSelected(this.value);
    };
    TableRadioButton.prototype.onClick = function (event) {
        this.dt.toggleRowWithRadio(event, this.value);
        this.domHandler.clearSelection();
    };
    TableRadioButton.prototype.onFocus = function () {
        this.domHandler.addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableRadioButton.prototype.onBlur = function () {
        this.domHandler.removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableRadioButton.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TableRadioButton.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TableRadioButton.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('box'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], TableRadioButton.prototype, "boxViewChild", void 0);
    TableRadioButton = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-tableRadioButton',
            template: "\n        <div class=\"ui-radiobutton ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input type=\"radio\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n            </div>\n            <div #box [ngClass]=\"{'ui-radiobutton-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled':disabled}\">\n                <span class=\"ui-radiobutton-icon ui-clickable\" [ngClass]=\"{'fa fa-circle':checked}\"></span>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], TableService])
    ], TableRadioButton);
    return TableRadioButton;
}());

var TableCheckbox = (function () {
    function TableCheckbox(dt, domHandler, tableService) {
        var _this = this;
        this.dt = dt;
        this.domHandler = domHandler;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this.checked = _this.dt.isSelected(_this.value);
        });
    }
    TableCheckbox.prototype.ngOnInit = function () {
        this.checked = this.dt.isSelected(this.value);
    };
    TableCheckbox.prototype.onClick = function (event) {
        this.dt.toggleRowWithCheckbox(event, this.value);
        this.domHandler.clearSelection();
    };
    TableCheckbox.prototype.onFocus = function () {
        this.domHandler.addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableCheckbox.prototype.onBlur = function () {
        this.domHandler.removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableCheckbox.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TableCheckbox.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TableCheckbox.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('box'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], TableCheckbox.prototype, "boxViewChild", void 0);
    TableCheckbox = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-tableCheckbox',
            template: "\n        <div class=\"ui-chkbox ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input type=\"checkbox\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n            </div>\n            <div #box [ngClass]=\"{'ui-chkbox-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled':disabled}\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'fa fa-check':checked}\"></span>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], TableService])
    ], TableCheckbox);
    return TableCheckbox;
}());

var TableHeaderCheckbox = (function () {
    function TableHeaderCheckbox(dt, domHandler, tableService) {
        var _this = this;
        this.dt = dt;
        this.domHandler = domHandler;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this.checked = _this.updateCheckedState();
        });
    }
    TableHeaderCheckbox.prototype.ngOnInit = function () {
        this.checked = this.updateCheckedState();
    };
    TableHeaderCheckbox.prototype.onClick = function (event, checked) {
        if (this.dt.value && this.dt.value.length > 0) {
            this.dt.toggleRowsWithCheckbox(event, !checked);
        }
        this.domHandler.clearSelection();
    };
    TableHeaderCheckbox.prototype.onFocus = function () {
        this.domHandler.addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableHeaderCheckbox.prototype.onBlur = function () {
        this.domHandler.removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableHeaderCheckbox.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    TableHeaderCheckbox.prototype.updateCheckedState = function () {
        return (this.dt.value && this.dt.value.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.dt.selection.length === this.dt.value.length);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('box'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], TableHeaderCheckbox.prototype, "boxViewChild", void 0);
    TableHeaderCheckbox = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-tableHeaderCheckbox',
            template: "\n        <div class=\"ui-chkbox ui-widget\" (click)=\"onClick($event, cb.checked)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [disabled]=\"!dt.value || dt.value.length === 0\">\n            </div>\n            <div #box [ngClass]=\"{'ui-chkbox-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled': (!dt.value || dt.value.length === 0)}\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'fa fa-check':checked}\"></span>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], TableService])
    ], TableHeaderCheckbox);
    return TableHeaderCheckbox;
}());

var TableModule = (function () {
    function TableModule() {
    }
    TableModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__paginator_paginator__["a" /* PaginatorModule */]],
            exports: [Table, __WEBPACK_IMPORTED_MODULE_2__common_shared__["g" /* SharedModule */], SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, TextEllipsis],
            declarations: [Table, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, ScrollableView, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, TextEllipsis]
        })
    ], TableModule);
    return TableModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablecolgroupdemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Column Group</span></span>\r\n        <span>Columns can be grouped using rowspan and colspan properties.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-table [value]=\"sales\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th rowspan=\"3\">Brand</th>\r\n                <th colspan=\"4\">Sale Rate</th>\r\n            </tr>\r\n            <tr>\r\n                <th colspan=\"2\">Sales</th>\r\n                <th colspan=\"2\">Profits</th>\r\n            </tr>\r\n            <tr>\r\n                <th>Last Year</th>\r\n                <th>This Year</th>\r\n                <th>Last Year</th>\r\n                <th>This Year</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-sale>\r\n            <tr>\r\n                <td>&#123;&#123;sale.brand&#125;&#125;</td>\r\n                <td>&#123;&#123;sale.lastYearSale&#125;&#125;</td>\r\n                <td>&#123;&#123;sale.thisYearSale&#125;&#125;</td>\r\n                <td>&#123;&#123;sale.lastYearProfit&#125;&#125;</td>\r\n                <td>&#123;&#123;sale.thisYearProfit&#125;&#125;</td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"footer\">\r\n            <tr>\r\n                <td colspan=\"3\">Totals</td>\r\n                <td>$506,202</td>\r\n                <td>$531,020</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tablecolgroupdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolgroupdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableColGroupDemo implements OnInit &#123;\r\n\r\n    sales: any[];\r\n\r\n    ngOnInit() &#123;\r\n        this.sales = [\r\n            &#123; brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' &#125;,\r\n            &#123; brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' &#125;,\r\n            &#123; brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' &#125;,\r\n            &#123; brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' &#125;,\r\n            &#123; brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' &#125;,\r\n            &#123; brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' &#125;,\r\n            &#123; brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' &#125;,\r\n            &#123; brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' &#125;,\r\n            &#123; brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' &#125;,\r\n            &#123; brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tablecolgroupdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolgroupdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [value]=\"sales\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th rowspan=\"3\"&gt;Brand&lt;/th&gt;\r\n            &lt;th colspan=\"4\"&gt;Sale Rate&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;th colspan=\"2\"&gt;Sales&lt;/th&gt;\r\n            &lt;th colspan=\"2\"&gt;Profits&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Last Year&lt;/th&gt;\r\n            &lt;th&gt;This Year&lt;/th&gt;\r\n            &lt;th&gt;Last Year&lt;/th&gt;\r\n            &lt;th&gt;This Year&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-sale&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;&#123;&#123;sale.brand&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;sale.lastYearSale&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;sale.thisYearSale&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;sale.lastYearProfit&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;sale.thisYearProfit&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"footer\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td colspan=\"3\"&gt;Totals&lt;/td&gt;\r\n            &lt;td&gt;$506,202&lt;/td&gt;\r\n            &lt;td&gt;$531,020&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablecolgroupdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableColGroupDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TableColGroupDemo = (function () {
    function TableColGroupDemo() {
    }
    TableColGroupDemo.prototype.ngOnInit = function () {
        this.sales = [
            { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
            { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
        ];
    };
    TableColGroupDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tablecolgroupdemo.html")
        })
    ], TableColGroupDemo);
    return TableColGroupDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablecolreorderdemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Column Reorder</span></span>\r\n        <span>Order of the columns can be changed using drag and drop.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-table [columns]=\"cols\" [value]=\"cars\" [reorderableColumns]=\"true\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" pReorderableColumn>\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tablecolreorder.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolreorder.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableColReorderDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tablecolreorder.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolreorder.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [reorderableColumns]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" pReorderableColumn&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablecolreorderdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableColReorderDemo; });
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


var TableColReorderDemo = (function () {
    function TableColReorderDemo(carService) {
        this.carService = carService;
    }
    TableColReorderDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableColReorderDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tablecolreorderdemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableColReorderDemo);
    return TableColReorderDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablecolresizedemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Column Resize</span></span>\r\n        <span>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; \"fit\" and \"expand\". Fit is the default one and \r\n            the overall table width does not change when a column is resized. In \"expand\" mode, table width also changes along with the column width.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Fit Mode</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars1\" [resizableColumns]=\"true\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" pResizableColumn>\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Expand Mode</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars1\" [resizableColumns]=\"true\" columnResizeMode=\"expand\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" pResizableColumn>\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n    \r\n    <h3>Scrollable</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\">\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n                <col *ngFor=\"let col of columns\" >\r\n            </colgroup>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" pResizableColumn>\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Scrollable with Variable Width</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\">\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n                <col *ngFor=\"let col of columns\" [style.width]=\"col.width\">\r\n            </colgroup>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" pResizableColumn>\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tablecolresize.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolresize.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableColResizeDemo implements OnInit &#123;\r\n\r\n    cars1: Car[];\r\n\r\n    cars2: Car[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars1 = cars);\r\n        this.carService.getCarsMedium().then(cars => this.cars2 = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tablecolresize.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolresize.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\" [resizableColumns]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Expand Mode&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\" [resizableColumns]=\"true\" columnResizeMode=\"expand\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Scrollable&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" &gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Scrollable with Variable Width&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" [style.width]=\"col.width\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablecolresizedemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableColResizeDemo; });
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


var TableColResizeDemo = (function () {
    function TableColResizeDemo(carService) {
        this.carService = carService;
    }
    TableColResizeDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars1 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars2 = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin', width: '25%' },
            { field: 'year', header: 'Year', width: '15%' },
            { field: 'brand', header: 'Brand', width: '35%' },
            { field: 'color', header: 'Color', width: '25%' }
        ];
    };
    TableColResizeDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tablecolresizedemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableColResizeDemo);
    return TableColResizeDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablecoltoggledemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Column Toggle</span></span>\r\n        <span>This demo uses a multiselect component to implement toggleable columns.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-table [columns]=\"selectedColumns\" [value]=\"cars\">\r\n        <ng-template pTemplate=\"caption\">\r\n            <div style=\"text-align:left\">\r\n                <p-multiSelect [options]=\"cols\" [(ngModel)]=\"selectedColumns\" optionLabel=\"header\"\r\n                         selectedItemsLabel=\"&#123;0&#125; columns selected\" [style]=\"&#123;minWidth: '200px'&#125;\" defaultLabel=\"Choose Columns\"></p-multiSelect>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    &#123;&#123;col.header&#125;&#125;\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    &#123;&#123;rowData[col.field]&#125;&#125;\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tablecoltoggle.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecoltoggle.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableColToggleDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    selectedColumns: any[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n\r\n        this.selectedColumns = this.cols;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tablecoltoggle.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecoltoggle.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"selectedColumns\" [value]=\"cars\"&gt;\r\n    &lt;ng-template pTemplate=\"caption\"&gt;\r\n        &lt;div style=\"text-align:left\"&gt;\r\n            &lt;p-multiSelect [options]=\"cols\" [(ngModel)]=\"selectedColumns\" optionLabel=\"header\"\r\n                        selectedItemsLabel=\"&#123;0&#125; columns selected\" [style]=\"&#123;minWidth: '200px'&#125;\" defaultLabel=\"Choose Columns\"&gt;&lt;/p-multiSelect&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablecoltoggledemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableColToggleDemo; });
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


var TableColToggleDemo = (function () {
    function TableColToggleDemo(carService) {
        this.carService = carService;
    }
    TableColToggleDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.selectedColumns = this.cols;
    };
    TableColToggleDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tablecoltoggledemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableColToggleDemo);
    return TableColToggleDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablecontextmenudemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">ContextMenu</span></span>\r\n        <span>DataTable has exclusive integration with ContextMenu.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [value]=\"msgs\"></p-growl>\r\n    \r\n    <p-table [columns]=\"cols\" [value]=\"cars\" [(contextMenuSelection)]=\"selectedCar\" [contextMenu]=\"cm\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr [pContextMenuRow]=\"rowData\">\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <p-contextMenu #cm [model]=\"items\"></p-contextMenu>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tablecontextmenudemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecontextmenudemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableContextMenuDemo implements OnInit &#123;\r\n\r\n    msgs: Message[];\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    selectedCar: Car;\r\n\r\n    selectCars: Car[];\r\n\r\n    items: MenuItem[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n\r\n        this.items = [\r\n            &#123; label: 'View', icon: 'fa-search', command: (event) => this.viewCar(this.selectedCar) &#125;,\r\n            &#123; label: 'Delete', icon: 'fa-close', command: (event) => this.deleteCar(this.selectedCar) &#125;\r\n        ];\r\n    &#125;\r\n\r\n    viewCar(car: Car) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123; severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand &#125;);\r\n    &#125;\r\n\r\n    deleteCar(car: Car) &#123;\r\n        let index = -1;\r\n        for (let i = 0; i &lt; this.cars.length; i++) &#123;\r\n            if (this.cars[i].vin == car.vin) &#123;\r\n                index = i;\r\n                break;\r\n            &#125;\r\n        &#125;\r\n        this.cars.splice(index, 1);\r\n\r\n        this.msgs = [];\r\n        this.msgs.push(&#123; severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tablecontextmenudemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecontextmenudemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(contextMenuSelection)]=\"selectedCar\" [contextMenu]=\"cm\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr [pContextMenuRow]=\"rowData\"&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablecontextmenudemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableContextMenuDemo; });
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


var TableContextMenuDemo = (function () {
    function TableContextMenuDemo(carService) {
        this.carService = carService;
    }
    TableContextMenuDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.items = [
            { label: 'View', icon: 'fa-search', command: function (event) { return _this.viewCar(_this.selectedCar); } },
            { label: 'Delete', icon: 'fa-close', command: function (event) { return _this.deleteCar(_this.selectedCar); } }
        ];
    };
    TableContextMenuDemo.prototype.viewCar = function (car) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand });
    };
    TableContextMenuDemo.prototype.deleteCar = function (car) {
        var index = -1;
        for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i].vin == car.vin) {
                index = i;
                break;
            }
        }
        this.cars.splice(index, 1);
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand });
    };
    TableContextMenuDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tablecontextmenudemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableContextMenuDemo);
    return TableContextMenuDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablecruddemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">CRUD</span></span>\r\n        <span>This samples demonstrates a CRUD implementation using various PrimeNG components.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" rows=\"15\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"summary\" let-rowData>\r\n            <div style=\"text-align:left\">\r\n                <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"showDialogToAdd()\" label=\"Add\"></button>\r\n            </div>\r\n        </ng-template>\r\n        \r\n    </p-table>\r\n    \r\n    <p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"300\">\r\n        <div class=\"ui-g ui-fluid\" *ngIf=\"car\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"vin\">Vin</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input pInputText id=\"vin\" [(ngModel)]=\"car.vin\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"year\">Year</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input pInputText id=\"year\" [(ngModel)]=\"car.year\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"brand\">Brand</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input pInputText id=\"brand\" [(ngModel)]=\"car.brand\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                    <label for=\"color\">Color</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input pInputText id=\"color\" [(ngModel)]=\"car.color\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <p-footer>\r\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                <button type=\"button\" pButton icon=\"fa-close\" (click)=\"delete()\" label=\"Delete\"></button>\r\n                <button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Save\"></button>\r\n            </div>\r\n        </p-footer>\r\n    </p-dialog>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tablecruddemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablepagedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableCrudDemo implements OnInit &#123;\r\n\r\n    displayDialog: boolean;\r\n\r\n    car: Car = &#123;&#125;;\r\n\r\n    selectedCar: Car;\r\n\r\n    newCar: boolean;\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n    &#125;\r\n\r\n    showDialogToAdd() &#123;\r\n        this.newCar = true;\r\n        this.car = &#123;&#125;;\r\n        this.displayDialog = true;\r\n    &#125;\r\n\r\n    save() &#123;\r\n        let cars = [...this.cars];\r\n        if (this.newCar)\r\n            cars.push(this.car);\r\n        else\r\n            cars[this.cars.indexOf(this.selectedCar)] = this.car;\r\n\r\n        this.cars = cars;\r\n        this.car = null;\r\n        this.displayDialog = false;\r\n    &#125;\r\n\r\n    delete() &#123;\r\n        let index = this.cars.indexOf(this.selectedCar);\r\n        this.cars = this.cars.filter((val, i) => i != index);\r\n        this.car = null;\r\n        this.displayDialog = false;\r\n    &#125;\r\n\r\n    onRowSelect(event) &#123;\r\n        this.newCar = false;\r\n        this.car = this.cloneCar(event.data);\r\n        this.displayDialog = true;\r\n    &#125;\r\n\r\n    cloneCar(c: Car): Car &#123;\r\n        let car = &#123;&#125;;\r\n        for (let prop in c) &#123;\r\n            car[prop] = c[prop];\r\n        &#125;\r\n        return car;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tablecruddemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablepagedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" rows=\"15\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n\r\n    &lt;ng-template pTemplate=\"summary\" let-rowData&gt;\r\n        &lt;div style=\"text-align:left\"&gt;\r\n            &lt;button type=\"button\" pButton icon=\"fa-plus\" (click)=\"showDialogToAdd()\" label=\"Add\"&gt;&lt;/button&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    \r\n&lt;/p-table&gt;\r\n\r\n&lt;p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"300\"&gt;\r\n    &lt;div class=\"ui-g ui-fluid\" *ngIf=\"car\"&gt;\r\n        &lt;div class=\"ui-g-12\"&gt;\r\n            &lt;div class=\"ui-g-4\"&gt;\r\n                &lt;label for=\"vin\"&gt;Vin&lt;/label&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-8\"&gt;\r\n                &lt;input pInputText id=\"vin\" [(ngModel)]=\"car.vin\" /&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-g-12\"&gt;\r\n            &lt;div class=\"ui-g-4\"&gt;\r\n                &lt;label for=\"year\"&gt;Year&lt;/label&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-8\"&gt;\r\n                &lt;input pInputText id=\"year\" [(ngModel)]=\"car.year\" /&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-g-12\"&gt;\r\n            &lt;div class=\"ui-g-4\"&gt;\r\n                &lt;label for=\"brand\"&gt;Brand&lt;/label&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-8\"&gt;\r\n                &lt;input pInputText id=\"brand\" [(ngModel)]=\"car.brand\" /&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-g-12\"&gt;\r\n            &lt;div class=\"ui-g-4\"&gt;\r\n                &lt;label for=\"color\"&gt;Color&lt;/label&gt;\r\n            &lt;/div&gt;\r\n            &lt;div class=\"ui-g-8\"&gt;\r\n                &lt;input pInputText id=\"color\" [(ngModel)]=\"car.color\" /&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;p-footer&gt;\r\n        &lt;div class=\"ui-dialog-buttonpane ui-helper-clearfix\"&gt;\r\n            &lt;button type=\"button\" pButton icon=\"fa-close\" (click)=\"delete()\" label=\"Delete\"&gt;&lt;/button&gt;\r\n            &lt;button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Save\"&gt;&lt;/button&gt;\r\n        &lt;/div&gt;\r\n    &lt;/p-footer&gt;\r\n&lt;/p-dialog&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablecruddemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableCrudDemo; });
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


var TableCrudDemo = (function () {
    function TableCrudDemo(carService) {
        this.carService = carService;
        this.car = {};
    }
    TableCrudDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableCrudDemo.prototype.showDialogToAdd = function () {
        this.newCar = true;
        this.car = {};
        this.displayDialog = true;
    };
    TableCrudDemo.prototype.save = function () {
        var cars = this.cars.slice();
        if (this.newCar)
            cars.push(this.car);
        else
            cars[this.cars.indexOf(this.selectedCar)] = this.car;
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    };
    TableCrudDemo.prototype.delete = function () {
        var index = this.cars.indexOf(this.selectedCar);
        this.cars = this.cars.filter(function (val, i) { return i != index; });
        this.car = null;
        this.displayDialog = false;
    };
    TableCrudDemo.prototype.onRowSelect = function (event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    };
    TableCrudDemo.prototype.cloneCar = function (c) {
        var car = {};
        for (var prop in c) {
            car[prop] = c[prop];
        }
        return car;
    };
    TableCrudDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tablecruddemo.html"),
            styles: ["        \n        .ui-g label {\n          font-weight: bold;\n          margin-top: .25em;\n          display: block;\n        }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableCrudDemo);
    return TableCrudDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tabledemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabledemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tabledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tablepagedemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablepagedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tablesortdemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablesortdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tablefilterdemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablefilterdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tableselectiondemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tableselectiondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tablesectionsdemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablesectionsdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tablestyledemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablestyledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tablelazydemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablelazydemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tableexportdemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tableexportdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tablecolgroupdemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablecolgroupdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tablerowexpansiondemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablerowexpansiondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tablescrolldemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablescrolldemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tablecoltoggledemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablecoltoggledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tablecruddemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablecruddemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tableresponsivedemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tableresponsivedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tablecontextmenudemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablecontextmenudemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tablecolresizedemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablecolresizedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tablecolreorderdemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablecolreorderdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__tableeditdemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tableeditdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__tablerowgroupdemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablerowgroupdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__tableellipsis__ = __webpack_require__("../../../../../src/app/showcase/components/table/tableellipsis.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var TableDemoRoutingModule = (function () {
    function TableDemoRoutingModule() {
    }
    TableDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__tabledemo__["a" /* TableDemo */] },
                    { path: 'page', component: __WEBPACK_IMPORTED_MODULE_3__tablepagedemo__["a" /* TablePageDemo */] },
                    { path: 'sort', component: __WEBPACK_IMPORTED_MODULE_4__tablesortdemo__["a" /* TableSortDemo */] },
                    { path: 'selection', component: __WEBPACK_IMPORTED_MODULE_6__tableselectiondemo__["a" /* TableSelectionDemo */] },
                    { path: 'filter', component: __WEBPACK_IMPORTED_MODULE_5__tablefilterdemo__["a" /* TableFilterDemo */] },
                    { path: 'sections', component: __WEBPACK_IMPORTED_MODULE_7__tablesectionsdemo__["a" /* TableSectionsDemo */] },
                    { path: 'style', component: __WEBPACK_IMPORTED_MODULE_8__tablestyledemo__["a" /* TableStyleDemo */] },
                    { path: 'lazy', component: __WEBPACK_IMPORTED_MODULE_9__tablelazydemo__["a" /* TableLazyDemo */] },
                    { path: 'export', component: __WEBPACK_IMPORTED_MODULE_10__tableexportdemo__["a" /* TableExportDemo */] },
                    { path: 'colgroup', component: __WEBPACK_IMPORTED_MODULE_11__tablecolgroupdemo__["a" /* TableColGroupDemo */] },
                    { path: 'rowexpansion', component: __WEBPACK_IMPORTED_MODULE_12__tablerowexpansiondemo__["a" /* TableRowExpansionDemo */] },
                    { path: 'scroll', component: __WEBPACK_IMPORTED_MODULE_13__tablescrolldemo__["a" /* TableScrollDemo */] },
                    { path: 'coltoggle', component: __WEBPACK_IMPORTED_MODULE_14__tablecoltoggledemo__["a" /* TableColToggleDemo */] },
                    { path: 'crud', component: __WEBPACK_IMPORTED_MODULE_15__tablecruddemo__["a" /* TableCrudDemo */] },
                    { path: 'responsive', component: __WEBPACK_IMPORTED_MODULE_16__tableresponsivedemo__["a" /* TableResponsiveDemo */] },
                    { path: 'contextmenu', component: __WEBPACK_IMPORTED_MODULE_17__tablecontextmenudemo__["a" /* TableContextMenuDemo */] },
                    { path: 'colresize', component: __WEBPACK_IMPORTED_MODULE_18__tablecolresizedemo__["a" /* TableColResizeDemo */] },
                    { path: 'colreorder', component: __WEBPACK_IMPORTED_MODULE_19__tablecolreorderdemo__["a" /* TableColReorderDemo */] },
                    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_20__tableeditdemo__["a" /* TableEditDemo */] },
                    { path: 'rowgroup', component: __WEBPACK_IMPORTED_MODULE_21__tablerowgroupdemo__["a" /* TableRowGroupDemo */] },
                    { path: 'ellipsis', component: __WEBPACK_IMPORTED_MODULE_22__tableellipsis__["a" /* TableEllipsisDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], TableDemoRoutingModule);
    return TableDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tabledemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TurboTable</span>\r\n        <span>Table is the successor of p-dataTable with a lightning fast performance (at least 10x faster) and excellent level of control over the presentation. p-table is called as TurboTable in order to differantiate if from the deprecated p-dataTable.\r\n        </span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-table [value]=\"cars\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Vin</th>\r\n                <th>Year</th>\r\n                <th>Brand</th>\r\n                <th>Color</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-car>\r\n            <tr>\r\n                <td>{{car.vin}}</td>\r\n                <td>{{car.year}}</td>\r\n                <td>{{car.brand}}</td>\r\n                <td>{{car.color}}</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Dynamic Columns</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    &#123;&#123;col.header&#125;&#125;\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                     &#123;&#123;rowData[col.field]&#125;&#125;\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;TableModule&#125; from 'primeng/table';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Table requires a value as an array of objects and templates for the presentation. Throughout the samples, a car interface having\r\n            vin, brand, year and color properties is used to define an object to be displayed by the table. Cars are loaded by a CarService that\r\n            connects to a server to fetch the data.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport interface Car &#123;\r\n    vin;\r\n    year;\r\n    brand;\r\n    color;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Injectable&#125; from 'angular2/core';\r\nimport &#123;Http, Response&#125; from 'angular2/http';\r\nimport &#123;Car&#125; from '../domain/car';\r\n\r\n@Injectable()\r\nexport class CarService &#123;\r\n\r\n    constructor(private http: Http) &#123;&#125;\r\n\r\n    getCarsSmall() &#123;\r\n        return this.http.get('/showcase/resources/data/cars-small.json')\r\n                    .toPromise()\r\n                    .then(res => &lt;Car[]&gt; res.json().data)\r\n                    .then(data => &#123; return data; &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n            <p>Following sample has a table of 4 columns and retrieves the data from a service on ngOnInit.</p>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n        <p>List of cars are bound to the value property whereas <i>header</i> and <i>body</i> templates are used to define the content of these sections.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [value]=\"cars\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Vin&lt;/th&gt;\r\n            &lt;th&gt;Year&lt;/th&gt;\r\n            &lt;th&gt;Brand&lt;/th&gt;\r\n            &lt;th&gt;Color&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n        <h3>Dynamic Columns</h3>\r\n        <p>Instead of configuring columns one by one, a simple ngFor can be used to implement dynamic columns. cols property below is an array of objects that represent a column, \r\n            only property that table component uses is field, rest of the properties like header depend on your choice.\r\n        </p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DynamicColumnsDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n        <p>There are two ways to render dynamic columns, since cols property is in the scope of component you can just simply bind it to ngFor directive to generate the structure.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [value]=\"cars\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of cols\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of cols\"&gt;\r\n                    &#123;&#123;car[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Other alternative is binding the cols array to the columns property and then defining a template variable to access it within your templates. \r\n                There are 3 cases where this is required which are csv export, reorderable columns and global filtering without the globalFilterFields property.\r\n            </p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-car let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                    &#123;&#123;car[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Tip: Use ngSwitch to customize the column content per dynamic column.</p>\r\n\r\n            <h3>Table Layout</h3>\r\n            <p>For performance reasons, default table-layout is fixed meaning the cell widths do not depend on their content. If you require cells to scale based on their contents\r\n                set <i>autoLayout</i> property to true.\r\n            </p>\r\n\r\n            <h3>Templates</h3>\r\n            <p>Table is a template driven component with named templates such as header and body that we've used so far. Templates grant a great level of customization and flexibility \r\n                where you have total control over the presentation while table handles the features such as paging, sorting, filtering and more. This speeds up development without sacrifing \r\n                flexibility. Here is the full list of available templates.</p>\r\n\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>caption</td>\r\n                            <td>-</td>\r\n                            <td>Caption content of the table.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>header</td>\r\n                            <td>$implicit: Columns</td>\r\n                            <td>Content of the thead element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>body</td>\r\n                            <td>$implicit: Data of the row <br>\r\n                                rowIndex: Index of the row <br>\r\n                                columns: Columns collection <br>\r\n                                expanded: Whethert the row is expanded\r\n                            </td>\r\n                            <td>Content of the tbody element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>footer</td>\r\n                            <td>$implicit: Columns</td>\r\n                            <td>Content of the tfoot element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>summary</td>\r\n                            <td>-</td>\r\n                            <td>Summary section to display below the table.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>colgroup</td>\r\n                            <td>$implicit: Columns</td>\r\n                            <td>ColGroup element of the table to customize columns.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowexpansion</td>\r\n                            <td>$implicit: Data of the row <br>\r\n                                rowIndex: Index of the row <br>\r\n                                columns: Columns collection <br>\r\n                            </td>\r\n                            <td>Content of an extended row.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frozenrows</td>\r\n                            <td>$implicit: Data of the row <br>\r\n                                rowIndex: Index of the row <br>\r\n                                columns: Columns collection<br>\r\n                            </td>\r\n                            <td>Content of the tbody element to display frozen rows.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frozenheader</td>\r\n                            <td>$implicit: Columns</td>\r\n                            <td>Content of the thead element in frozen side.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frozenbody</td>\r\n                            <td>$implicit: Data of the row <br>\r\n                                rowIndex: Index of the row <br>\r\n                                columns: Columns collection <br>\r\n                            </td>\r\n                            <td>Content of the tbody element in frozen side.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frozenfooter</td>\r\n                            <td>$implicit: Columns</td>\r\n                            <td>Content of the tfoot element in frozen side.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frozencolgroup</td>\r\n                            <td>$implicit: Columns</td>\r\n                            <td>ColGroup element of the table to customize frozen columns.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>emptymessage</td>\r\n                            <td>$implicit: Columns</td>\r\n                            <td>Content to display when there is no value to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginatorleft</td>\r\n                            <td>state: $implicit\r\n                                state.page: Current page<br />\r\n                                state.rows: Rows per page<br />\r\n                                state.first: Index of the first records<br />\r\n                                state.totalRecords: Number of total records<br />\r\n                            </td>\r\n                            <td>Content to display when there is no value to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginatorright</td>\r\n                            <td>state: $implicit\r\n                                state.page: Current page<br />\r\n                                state.rows: Rows per page<br />\r\n                                state.first: Index of the first records<br />\r\n                                state.totalRecords: Number of total records<br />\r\n                            </td>\r\n                            <td>Content to display when there is no value to display.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Change Detection</h3>\r\n            <p>Table may need to be aware of changes in its value in some cases such as reapplying sort. For the sake of performance, this is only done when the reference of the value changes meaning a\r\n                setter is used instead of ngDoCheck/IterableDiffers which can reduce performance. So when you manipulate the value such as removing or adding an item, instead of using array methods such as push, splice\r\n                create a new array reference using a spread operator or similar.\r\n            </p>\r\n\r\n            <h3>Sections</h3>\r\n            <p>Table offers various templates to display additional information about the data such as a caption or summary.</p>\r\n\r\n <pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\r\n    &lt;ng-template pTemplate=\"caption\"&gt;\r\n        List of Cars\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n            &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"footer\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n            &#123;&#123;col.header&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"summary\"&gt;\r\n        There are &#123;&#123;cars?.length&#125;&#125; cars\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n            <p>See the <a [routerLink]=\"['/table/sections']\">live example.</a></p>\r\n\r\n            <h3>Column Grouping</h3>\r\n            <p>Columns can easily be grouped using templating. Let's start with sample data of sales of brands per year.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableColGroupDemo implements OnInit &#123;\r\n\r\n    sales: any[];\r\n\r\n    ngOnInit() &#123;\r\n        this.sales = [\r\n            &#123; brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' &#125;,\r\n            &#123; brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' &#125;,\r\n            &#123; brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' &#125;,\r\n            &#123; brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' &#125;,\r\n            &#123; brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' &#125;,\r\n            &#123; brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' &#125;,\r\n            &#123; brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' &#125;,\r\n            &#123; brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' &#125;,\r\n            &#123; brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' &#125;,\r\n            &#123; brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [value]=\"sales\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th rowspan=\"3\"&gt;Brand&lt;/th&gt;\r\n            &lt;th colspan=\"4\"&gt;Sale Rate&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;th colspan=\"2\"&gt;Sales&lt;/th&gt;\r\n            &lt;th colspan=\"2\"&gt;Profits&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Last Year&lt;/th&gt;\r\n            &lt;th&gt;This Year&lt;/th&gt;\r\n            &lt;th&gt;Last Year&lt;/th&gt;\r\n            &lt;th&gt;This Year&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-sale&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;&#123;&#123;sale.brand&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;sale.lastYearSale&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;sale.thisYearSale&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;sale.lastYearProfit&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;sale.thisYearProfit&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"footer\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td colspan=\"3\"&gt;Totals&lt;/td&gt;\r\n            &lt;td&gt;$506,202&lt;/td&gt;\r\n            &lt;td&gt;$531,020&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n            <p>See the <a [routerLink]=\"['/table/colgroup']\">live example.</a></p>\r\n\r\n            <h3>Row Grouping</h3>\r\n            <p>Templating features can also be used to implement row grouping functionality, here is an example implementation that uses a metadata object\r\n                to keep at what index a group starts and how many items it has.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableRowGroupDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    rowGroupMetadata: any;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsMedium().then(cars => &#123;\r\n            this.cars = cars;\r\n            this.updateRowGroupMetaData();\r\n        &#125;);\r\n    &#125;\r\n\r\n    onSort() &#123;\r\n        this.updateRowGroupMetaData();\r\n    &#125;\r\n\r\n    updateRowGroupMetaData() &#123;\r\n        this.rowGroupMetadata = &#123;&#125;;\r\n        if (this.cars) &#123;\r\n            for (let i = 0; i &lt; this.cars.length; i++) &#123;\r\n                let rowData = this.cars[i];\r\n                let brand = rowData.brand;\r\n                if (i == 0) &#123;\r\n                    this.rowGroupMetadata[brand] = &#123; index: 0, size: 1 &#125;;\r\n                &#125;\r\n                else &#123;\r\n                    let previousRowData = this.cars[i - 1];\r\n                    let previousRowGroup = previousRowData.brand;\r\n                    if (brand === previousRowGroup)\r\n                        this.rowGroupMetadata[brand].size++;\r\n                    else\r\n                        this.rowGroupMetadata[brand] = &#123; index: i, size: 1 &#125;;\r\n                &#125;\r\n            &#125;\r\n        &#125;\r\n    &#125;\r\n    \r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Using this metadata rows can be grouped using a subheader that displays the group. Note that grouped data should be sorted so enable sortField \r\n            so that table applies sorting before grouping if your data is not sorted.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Vin&lt;/th&gt;\r\n            &lt;th&gt;Year&lt;/th&gt;\r\n            &lt;th&gt;Color&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\"&gt;\r\n        &lt;tr class=\"ui-widget-header\" *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\"&gt;\r\n            &lt;td colspan=\"3\"&gt;\r\n                &lt;span style=\"font-weight:bold\"&gt;&#123;&#123;rowData.brand&#125;&#125;&lt;/span&gt;\r\n            &lt;/td&lt;                \r\n        &lt;/tr&lt;\r\n        &lt;tr&lt;\r\n            &lt;td&gt;&#123;&#123;rowData.vin&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.year&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.color&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n            \r\n<p>An alternative grouping could be using rowspans for the group field.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Brand&lt;/th&gt;\r\n            &lt;th&gt;Vin&lt;/th&gt;\r\n            &lt;th&gt;Year&lt;/th&gt;\r\n            &lt;th&gt;Color&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\" [attr.rowspan]=\"rowGroupMetadata[rowData.brand].size\"&gt;\r\n                &#123;&#123;rowData.brand&#125;&#125;\r\n            &lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.vin&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.year&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.color&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/table/rowgroup']\">live example.</a></p>\r\n\r\n            <h3>Multi Field grouping</h3>\r\n            <p>Previous example uses a single field to group the rows however nothing limits you to implement multiple field grouping as well. Similarly to single\r\n                grouping, your data should be sorted first, you may use the built-in multiSorting or provide it sorted to the table and create a rowGroupMetadata\r\n                for multiple fields.\r\n            </p>\r\n\r\n            <h3>Paginator</h3>\r\n            <p>Pagination is enabled by setting paginator property to true, rows property defines the number of rows per page and pageLinks specify the the number\r\n                of page links to display. See <a [routerLink]=\"['/paginator']\">paginator</a> component for more information.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Paginator can also be controlled via model using a binding to the first property where changes trigger a pagination.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\" [first]=\"first\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTablePageDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    first: number = 0;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n\r\n    reset() &#123;\r\n        this.first = 0;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Paginator accepts custom content for the left and the right side via named templates.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\" [first]=\"first\"&gt;\r\n&lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n    &lt;tr&gt;\r\n        &lt;th *ngFor=\"let col of columns\"&gt;\r\n            &#123;&#123;col.header&#125;&#125;\r\n        &lt;/th&gt;\r\n    &lt;/tr&gt;\r\n&lt;/ng-template&gt;\r\n&lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n    &lt;tr&gt;\r\n        &lt;td *ngFor=\"let col of columns\"&gt;\r\n            &#123;&#123;rowData[col.field]&#125;&#125;\r\n        &lt;/td&gt;\r\n    &lt;/tr&gt;\r\n&lt;/ng-template&gt;\r\n&lt;ng-template pTemplate=\"paginatorLeft\" let-state&gt;\r\n    &#123;&#123;state.first&#125;&#125;\r\n    &lt;button type=\"button\" pButton icon=\"fa-refresh\"&gt;&lt;/button&gt;\r\n&lt;/ng-template&gt;\r\n&lt;ng-template pTemplate=\"paginatorRight\"&gt;\r\n    &lt;button type=\"button\" pButton icon=\"fa-cloud-upload\"&gt;&lt;/button&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Paginator templates gets the paginator state as an implicit variable that provides the following properties</p>\r\n            <ul>\r\n                <li>first</li>\r\n                <li>rows</li>\r\n                <li>page</li>\r\n                <li>totalRecords</li>\r\n            </ul>\r\n\r\n            <p>See the <a [routerLink]=\"['/table/page']\">live example.</a></p>\r\n\r\n            <h3>Sorting</h3>\r\n            <p>A column can be made sortable by adding the pSortableColumn directive whose value is the field to sort against and a sort indicator via p-sortIcon component.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n            <p>Default sorting is executed on a single column, in order to enable multiple field sorting, set sortMode property to \"multiple\" and use metakey\r\n            when clicking on another column.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [value]=\"cars\" sortMode=\"multiple\"&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>In case you'd like to display the table as sorted by default initially on load, use the sortField-sortOrder properties in single mode.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\" sortField=\"year\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n            <p>In multiple mode, use the multiSortMeta property and bind an array of SortMeta objects.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\" [multiSortMeta]=\"multiSortMeta\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nthis.multiSortMeta = [];\r\nthis.multiSortMeta.push(&#123;field: 'year', order: 1&#125;);\r\nthis.multiSortMeta.push(&#123;field: 'brand', order: -1&#125;);\r\n</code>\r\n</pre>\r\n\r\n            <p>Instead of using the built-in sorting algorithm a custom sort can be attached by enabling customSort property and defining a sortFunction implementation. This function gets a SortEvent instance\r\n                that provides the data to sort, sortField, sortOrder and multiSortMeta.\r\n            </p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class CustomTableSortDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n    &#125;\r\n\r\n    customSort(event: SortEvent) &#123;\r\n        //event.data = Data to sort\r\n        //event.mode = 'single' or 'multiple' sort mode\r\n        //event.field = Sort field in single sort\r\n        //event.order = Sort order in single sort\r\n        //event.multiSortMeta = SortMeta array in multiple sort\r\n\r\n        event.data.sort((data1, data2) => &#123;\r\n            let value1 = data1[event.field];\r\n            let value2 = data2[event.field];\r\n            let result = null;\r\n\r\n            if (value1 == null && value2 != null)\r\n                result = -1;\r\n            else if (value1 != null && value2 == null)\r\n                result = 1;\r\n            else if (value1 == null && value2 == null)\r\n                result = 0;\r\n            else if (typeof value1 === 'string' && typeof value2 === 'string')\r\n                result = value1.localeCompare(value2);\r\n            else\r\n                result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;\r\n\r\n            return (event.order * result);\r\n        &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" (sortFunction)=\"customSort($event)\" [customSort]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n\r\n            <p>See the <a [routerLink]=\"['/table/sort']\">live example.</a></p>\r\n\r\n            <h3>Filtering</h3>\r\n            <p>Filtering is enabled by defining the filter and calling filter method on the local template variable of the table with value, column field and match mode parameters. Available match modes are\r\n            \"startsWith\", \"contains\", \"endsWith\", \"equals\" and \"in\". Following is an example that utilizes various PrimeNG form components as filters.</p>\r\n\r\n            <p>An optional global filter feature is available to search all fields with the same query, to enable this place an input component and call the filterGlobal function with value and match mode properties on your event of choice.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table #tt [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\"&gt;\r\n    &lt;ng-template pTemplate=\"caption\"&gt;\r\n        &lt;i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"&gt;&lt;/i&gt;\r\n        &lt;input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"tt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\"&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\"&gt;\r\n                &lt;input *ngSwitchCase=\"'vin'\" pInputText type=\"text\" (input)=\"tt.filter($event.target.value, col.field, col.filterMatchMode)\"&gt;\r\n                &lt;div *ngSwitchCase=\"'year'\"&gt;\r\n                    &#123;&#123;yearFilter&#125;&#125;\r\n                    &lt;i class=\"fa fa-close\" (click)=\"yearFilter=null;tt.filter(null, col.field, col.filterMatchMode)\"&gt;&lt;/i&gt;\r\n                    &lt;p-slider [style]=\"&#123;'width':'100%','margin-top':'8px'&#125;\" [(ngModel)]=\"yearFilter\" [min]=\"1970\" [max]=\"2010\" (onChange)=\"onYearChange($event, dt)\"&gt;&lt;/p-slider&gt;\r\n                &lt;/div&gt;\r\n                &lt;p-dropdown *ngSwitchCase=\"'brand'\" [options]=\"brands\" [style]=\"&#123;'width':'100%'&#125;\" (onChange)=\"tt.filter($event.value, col.field, 'equals')\"&gt;&lt;/p-dropdown&gt;\r\n                &lt;p-multiSelect *ngSwitchCase=\"'color'\" [options]=\"colors\" defaultLabel=\"All Colors\" (onChange)=\"tt.filter($event.value, col.field, 'in')\"&gt;&lt;/p-multiSelect&gt;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableFilterDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    brands: SelectItem[];\r\n\r\n    colors: SelectItem[];\r\n\r\n    yearFilter: number;\r\n\r\n    yearTimeout: any;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\r\n\r\n        this.brands = [\r\n            &#123; label: 'All Brands', value: null &#125;,\r\n            &#123; label: 'Audi', value: 'Audi' &#125;,\r\n            &#123; label: 'BMW', value: 'BMW' &#125;,\r\n            &#123; label: 'Fiat', value: 'Fiat' &#125;,\r\n            &#123; label: 'Honda', value: 'Honda' &#125;,\r\n            &#123; label: 'Jaguar', value: 'Jaguar' &#125;,\r\n            &#123; label: 'Mercedes', value: 'Mercedes' &#125;,\r\n            &#123; label: 'Renault', value: 'Renault' &#125;,\r\n            &#123; label: 'VW', value: 'VW' &#125;,\r\n            &#123; label: 'Volvo', value: 'Volvo' &#125;\r\n        ];\r\n\r\n        this.colors = [\r\n            &#123; label: 'White', value: 'White' &#125;,\r\n            &#123; label: 'Green', value: 'Green' &#125;,\r\n            &#123; label: 'Silver', value: 'Silver' &#125;,\r\n            &#123; label: 'Black', value: 'Black' &#125;,\r\n            &#123; label: 'Red', value: 'Red' &#125;,\r\n            &#123; label: 'Maroon', value: 'Maroon' &#125;,\r\n            &#123; label: 'Brown', value: 'Brown' &#125;,\r\n            &#123; label: 'Orange', value: 'Orange' &#125;,\r\n            &#123; label: 'Blue', value: 'Blue' &#125;\r\n        ];\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n    &#125;\r\n\r\n    onYearChange(event, dt) &#123;\r\n        if (this.yearTimeout) &#123;\r\n            clearTimeout(this.yearTimeout);\r\n        &#125;\r\n\r\n        this.yearTimeout = setTimeout(() => &#123;\r\n            tt.filter(event.value, 'year', 'gt');\r\n        &#125;, 250);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>If you have static columns and need to use global filtering, globalFilterFields property must be defined to configure which fields should be used in global filtering. Another\r\n                use case of this property is to change the fields to utilize in global filtering with dynamic columns.  \r\n            </p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\" [globalFilterFields]=\"['vin','year']\"&gt;\r\n    //content\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/table/filter']\">live example.</a></p>\r\n\r\n            <h3>Selection</h3>\r\n            <p>Table provides built-in single and multiple selection features where selected rows are bound to the selection property and onRowSelect-onRowUnselect events\r\n            are provided as optional callbacks. In order to enable this feature, define a selectionMode, bind a selection reference and add pSelectableRow directive\r\n            whose value is the rowData to the rows that can be selected. Alternatively instead of row click, radiobutton or checkbox elements can be used to implement row selection.</p>\r\n\r\n            <p>When resolving if a row is selected, by default Table compares selection array with the datasource which may cause a performance issue with huge datasets that do not use pagination.\r\n                If available the fastest way is to use dataKey property that identifies a unique row so that Table can avoid comparing arrays as internally a map instance is used instead of looping arrays, on the other hand\r\n                if dataKey cannot be provided consider using compareSelectionBy property as \"equals\" which uses reference comparison instead of the default \"deepEquals\" comparison. Latter is slower since it checks all properties.\r\n            </p>\r\n\r\n            <p>In single mode, selection binding is an object reference.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    selectedCar: Car;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n        <p>In multiple mode, selection binding should be an array. Note that if you require shiftKey based range selection, pass the rowIndex to the SelectableRow directive.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    selectedCars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\"&gt;\r\n        &lt;tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\"&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Single selection using a radiobutton can be done by using p-tableRadioButton component.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCar\" dataKey=\"vin\"&gt;\r\n&lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n    &lt;tr&gt;\r\n        &lt;th style=\"width: 2.25em\"&gt;&lt;/th&gt;\r\n        &lt;th *ngFor=\"let col of columns\"&gt;\r\n            &#123;&#123;col.header&#125;&#125;\r\n        &lt;/th&gt;\r\n    &lt;/tr&gt;\r\n&lt;/ng-template&gt;\r\n&lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n    &lt;tr [pSelectableRow]=\"rowData\"&gt;\r\n        &lt;td&gt;\r\n            &lt;p-tableRadioButton [value]=\"rowData\"&gt;&lt;/p-tableRadioButton&gt;\r\n        &lt;/td&gt;\r\n        &lt;td *ngFor=\"let col of columns\"&gt;\r\n            &#123;&#123;rowData[col.field]&#125;&#125;\r\n        &lt;/td&gt;\r\n    &lt;/tr&gt;\r\n&lt;/ng-template&gt;\r\n&lt;ng-template pTemplate=\"summary\"&gt;\r\n        &lt;div style=\"text-align: left\"&gt;\r\n            Selected Car: &#123;&#123;selectedCar4 ? selectedCar4.vin + ' - ' + selectedCar4.brand + ' - ' + selectedCar4.year + ' - ' + selectedCar4.color: 'none'&#125;&#125;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n                <p>Similarly p-tableCheckbox and p-tableHeaderCheckbox elements are provide to implement checkbox based multiple selection.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCars\" dataKey=\"vin\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th style=\"width: 2.25em\"&gt;\r\n                &lt;p-tableHeaderCheckbox&gt;&lt;/p-tableHeaderCheckbox&gt;\r\n            &lt;/th&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\r\n            &lt;td&gt;\r\n                &lt;p-tableCheckbox [value]=\"rowData\"&gt;&lt;/p-tableCheckbox&gt;\r\n            &lt;/td&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/table/selection']\">live example.</a></p>\r\n\r\n            <h3>ContextMenu</h3>\r\n            <p>DataTable has exclusive integration with contextmenu component. In order to attach a menu to a datatable, add pContextMenuRow directive to the rows that can be selected with context menu, define a local template\r\n            variable for the menu and bind it to the contextMenu property of the datatable. This enables displaying the menu whenever a row is right clicked. A separate contextMenuSelection\r\n            property is used to get a hold of the right clicked row.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(contextMenuSelection)]=\"selectedCar\" [contextMenu]=\"cm\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr [pContextMenuRow]=\"rowData\"&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/table/contextmenu']\">live example.</a></p>\r\n\r\n            <h3>Editing</h3>\r\n            <p>Incell editing is enabled by adding pEditableColumn directive to an editable cell that has a p:cellEditor helper\r\n                component to defint the input-output templates for the edit and view modes respectively.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Vin&lt;/th&gt;\r\n            &lt;th&gt;Year&lt;/th&gt;\r\n            &lt;th&gt;Brand&lt;/th&gt;\r\n            &lt;th&gt;Color&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td pEditableColumn&gt;\r\n                &lt;p-cellEditor&gt;\r\n                    &lt;ng-template pTemplate=\"input\"&gt;\r\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.vin\"&gt;\r\n                    &lt;/ng-template&gt;\r\n                    &lt;ng-template pTemplate=\"output\"&gt;\r\n                        &#123;&#123;rowData.vin&#125;&#125;\r\n                    &lt;/ng-template&gt;\r\n                &lt;/p-cellEditor&gt;\r\n            &lt;/td&gt;\r\n            &lt;td pEditableColumn&gt;\r\n                &lt;p-cellEditor&gt;\r\n                    &lt;ng-template pTemplate=\"input\"&gt;\r\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.year\" required&gt;\r\n                    &lt;/ng-template&gt;\r\n                    &lt;ng-template pTemplate=\"output\"&gt;\r\n                        &#123;&#123;rowData.year&#125;&#125;\r\n                    &lt;/ng-template&gt;\r\n                &lt;/p-cellEditor&gt;\r\n            &lt;/td&gt;\r\n            &lt;td pEditableColumn&gt;\r\n                &lt;p-cellEditor&gt;\r\n                    &lt;ng-template pTemplate=\"input\"&gt;\r\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.brand\"&gt;\r\n                    &lt;/ng-template&gt;\r\n                    &lt;ng-template pTemplate=\"output\"&gt;\r\n                        &#123;&#123;rowData.brand&#125;&#125;\r\n                    &lt;/ng-template&gt;\r\n                &lt;/p-cellEditor&gt;\r\n            &lt;/td&gt;\r\n            &lt;td pEditableColumn&gt;\r\n                &lt;p-cellEditor&gt;\r\n                    &lt;ng-template pTemplate=\"input\"&gt;\r\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.color\"&gt;\r\n                    &lt;/ng-template&gt;\r\n                    &lt;ng-template pTemplate=\"output\"&gt;\r\n                        &#123;&#123;rowData.color&#125;&#125;\r\n                    &lt;/ng-template&gt;\r\n                &lt;/p-cellEditor&gt;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n            <p>See the <a [routerLink]=\"['/table/editable']\">live example.</a></p>\r\n\r\n            <h3>Expandable Rows</h3>\r\n            <p>Row expansion allows displaying detailed content for a particular row. To use this feature, add a template named rowexpansion and\r\n                use the pRowToggler directive whose value is the row data instance on an element of your choice whose click event toggles the expansion. This\r\n            enables providing your custom UI such as buttons, links and so on. Example below uses an anchor with an icon as a toggler.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" dataKey=\"vin\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th style=\"width: 2.25em\"&gt;&lt;/th&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-expanded=\"expanded\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;\r\n                &lt;a href=\"#\" [pRowToggler]=\"rowData\"&gt;\r\n                    &lt;i [ngClass]=\"expanded ? 'fa fa-fw fa-chevron-circle-down' : 'fa fa-fw fa-chevron-circle-right'\"&gt;&lt;/i&gt;\r\n                &lt;/a&gt;\r\n            &lt;/td&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td [attr.colspan]=\"columns.length + 1\"&gt;\r\n                &lt;div class=\"ui-g ui-fluid\" style=\"font-size:16px;padding:20px\"&gt;\r\n                    &lt;div class=\"ui-g-12 ui-md-3\" style=\"text-align:center\"&gt;\r\n                        &lt;img [attr.alt]=\"rowData.brand\" src=\"assets/showcase/images/demo/car/&#123;&#123;rowData.brand&#125;&#125;.png\"&gt;\r\n                    &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-12 ui-md-9\"&gt;\r\n                        &lt;div class=\"ui-g\"&gt;\r\n                            &lt;div class=\"ui-g-12\"&gt;\r\n                                &lt;b&gt;Vin:&lt;/b&gt; &#123;&#123;rowData.vin&#125;&#125;\r\n                            &lt;/div&gt;\r\n                            &lt;div class=\"ui-g-12\"&gt;\r\n                                &lt;b&gt;Vin:&lt;/b&gt; &#123;&#123;rowData.color&#125;&#125;\r\n                            &lt;/div&gt;\r\n                            &lt;div class=\"ui-g-12\"&gt;\r\n                                &lt;b&gt;Brand:&lt;/b&gt; &#123;&#123;rowData.brand&#125;&#125;\r\n                            &lt;/div&gt;\r\n                            &lt;div class=\"ui-g-12\"&gt;\r\n                                &lt;b&gt;Color:&lt;/b&gt; &#123;&#123;rowData.color&#125;&#125;\r\n                            &lt;/div&gt;\r\n                        &lt;/div&gt;\r\n                    &lt;/div&gt;\r\n                &lt;/div&gt;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Multiple rows can be expanded at the same time, if you prefer a single row expansion at any time set rowExpandMode property to \"single\". All rows\r\n                are collapsed initially and providing expandedRowKeys property whose value is the dataKeys of the rows to be expanded enables rendering these rows as expanded. A dataKey must be defined\r\n                for this feature.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" dataKey=\"vin\" [expandedRowKeys]=\"expandedRows\"&gt;\r\n   ...\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/table/rowexpansion']\">live example.</a></p>\r\n\r\n            <h3>Column Resize</h3>\r\n            <p>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; \"fit\" and \"expand\". Fit is the default one and\r\n            the overall table width does not change when a column is resized. In \"expand\" mode, table width also changes along with the column width. onColumnResize\r\n            is a callback that passes the resized column header as a parameter.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [resizableColumns]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>It is important to note that when you need to change column widths, since table width is 100%, giving fixed pixel widths does not work well as browsers scale them, instead give percentage widths.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [resizableColumns]=\"true\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\" [style]=\"&#123;'width':'20%'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" [style]=\"&#123;'width':'30%'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\" [style]=\"&#123;'width':'15%'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" [style]=\"&#123;'width':'35%'&#125;\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p><b>Note:</b> Scrollable tables require a column group to support resizing.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/table/colresize']\">live example.</a></p>\r\n\r\n            <h3>Column Reordering</h3>\r\n            <p>Columns can be reordered using drag drop by setting the reorderableColumns to true and adding pReorderableColumn directive to the columns that can be dragged. Note that\r\n                columns should be dynamic for reordering to work.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [reorderableColumns]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" pReorderableColumn&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n            <p>See the <a [routerLink]=\"['/table/colreorder']\">live example.</a></p>\r\n\r\n            <h3>Data Export</h3>\r\n            <p>Table can export its data in CSV format using exportCSV() method. By default whole data is exported, if you'd like to export only the selection then pass a config object with selectionOnly property as true. Note that\r\n                columns should be dynamic for export functionality to work and column objects must define field/header properties.\r\n            </p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table #tt[columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars\"&gt;\r\n    &lt;ng-template pTemplate=\"caption\"&gt;\r\n        &lt;div class=\"ui-helper-clearfix\"&gt;\r\n            &lt;button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"All Data\" (click)=\"tt.exportCSV()\" style=\"float:left\"&gt;&lt;/button&gt;\r\n            &lt;button type=\"button\" pButton icon=\"fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"tt.exportCSV(&#123;selectionOnly:true&#125;)\" style=\"float:right\"&gt;&lt;/button&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/table/export']\">live example.</a></p>\r\n\r\n            <h3>Scrolling</h3>\r\n            <p>DataTable supports both horizontal and vertical scrolling as well as frozen columns and rows.</p>\r\n\r\n            <p>Additionally, virtualScroll mode enables dealing with large datasets by loading data on demand during scrolling.</p>\r\n\r\n            <p>Sample below uses vertical scrolling where headers are fixed and data is scrollable.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n            <p>In horizontal scrolling on the other hand, it is important to give fixed widths to columns.</p>\r\n        \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [scrollable]=\"true\" [style]=\"&#123;width:'500px'&#125;\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" style=\"width:250px\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n        <p>Horizontal and Vertical scrolling can be combined as well on the same table.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars3\" [scrollable]=\"true\" [style]=\"&#123;width:'500px'&#125;\" scrollHeight=\"200px\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" style=\"width:250px\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n        <p>Certain rows can be fixed by using the frozenValue property along with the \"frozenrows\" template.</p>\r\n            \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars4\" [frozenValue]=\"frozenCars\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"frozenrows\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &lt;b&gt;&#123;&#123;rowData[col.field]&#125;&#125;&lt;/b&gt;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Particular columns can be made fixed where others remain scrollable, there are to ways to implement this functionality, either\r\n                define a frozenColumns property if your frozen columns are dynamic or use frozenbody template. The width of the frozen section also\r\n                must be defined with frozenWidth property. Templates including header, body and footer apply to the frozen section as well, however\r\n                if require different content for the frozen section use frozenheader, frozenbody and frozenfooter instead. First example below uses\r\n                dynamic frozen columns and second one demonstrates how to use frozen templates with column grouping.\r\n            </p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [value]=\"cars5\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" style=\"width:200px\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;p-table [value]=\"sales\" [scrollable]=\"true\" scrollHeight=\"150px\" frozenWidth=\"200px\"&gt;\r\n    &lt;ng-template pTemplate=\"frozenheader\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th style=\"width:200px;height:84px\"&gt;Brand&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"frozenbody\" let-sale&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;&#123;&#123;sale.brand&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th colspan=\"4\"&gt;Sale Rate&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;th colspan=\"2\"&gt;Sales&lt;/th&gt;\r\n            &lt;th colspan=\"2\"&gt;Profits&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Last Year&lt;/th&gt;\r\n            &lt;th&gt;This Year&lt;/th&gt;\r\n            &lt;th&gt;Last Year&lt;/th&gt;\r\n            &lt;th&gt;This Year&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-sale&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;&#123;&#123;sale.lastYearSale&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;sale.thisYearSale&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;sale.lastYearProfit&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;sale.thisYearProfit&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>When frozen columns are enabled, frozen and scrollable cells may have content with varying height which leads to misalignment. To avoid a performance hit, Table avoids expensive calculations\r\n                to align the row heights as it can be easily done with CSS manually.</p>\r\n<pre>\r\n<code class=\"language-css\" pCode ngNonBindable>\r\n.ui-table .ui-table-frozen-view .ui-table-tbody > tr > td,\r\n.ui-table .ui-table-unfrozen-view .ui-table-tbody > tr > td &#123;\r\n    height: 24px !important;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Virtual Scrolling is used with lazy loading to fetch data on demand during scrolling. For smooth scrolling twice the amount of rows property is loaded\r\n                on a lazy load event. In addition, to avoid performance problems row height is not calculated automatically and should be provided using virtualRowHeight \r\n                property which defaults to 27px. Note that variable row height is not supported due to the nature of the virtual scrolling behavior.\r\n            </p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"virtualCars\" [scrollable]=\"true\" [rows]=\"20\" scrollHeight=\"200px\" \r\n    [virtualScroll]=\"true\" (onLazyLoad)=\"loadDataOnScroll($event)\" [lazy]=\"true\" [totalRecords]=\"totalRecords\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>When column widths need to vary or resizable columns is activated, use colgroup template to avoid misalignment issues and apply percentage values since table width is 100%.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" [style.width]=\"col.width\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/table/scroll']\">live example.</a></p>\r\n\r\n            <h3>Lazy Loading</h3>\r\n            <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\r\n             onLazyLoad callback everytime paging, sorting and filtering happens. To implement lazy loading,\r\n            enable lazy attribute and provide a method callback using onLazyLoad that actually loads the data from a remote datasource. onLazyLoad gets an event object\r\n            that contains information about how the data should be loaded. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator\r\n            displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>\r\n\r\n            <pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                 &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nloadData(event: LazyLoadEvent) &#123;\r\n    //event.first = First row offset\r\n    //event.rows = Number of rows per page\r\n    //event.sortField = Field name to sort in single sort mode\r\n    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec in single sort mode\r\n    //multiSortMeta: An array of SortMeta objects used in multiple columns sorting. Each SortMeta has field and order properties.\r\n    //filters: Filters object having field as key and filter value, filter matchMode as value\r\n    //globalFilter: Value of the global filter if available\r\n    this.cars = //do a request to a remote datasource using a service and return the cars that match the lazy load criteria\r\n&#125;\r\n</code>\r\n</pre>\r\n            <p>See the <a [routerLink]=\"['/table/lazy']\">live example.</a></p>\r\n\r\n            <h3>Responsive</h3>\r\n            <p>Table columns are displayed as stacked in responsive mode if the screen size becomes smaller than a certain breakpoint value. This feature is enabled\r\n            by setting responsive to true and adding an element whose class name is \"ui-column-title\" to the body cells.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [responsive]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"caption\"&gt;\r\n        List of Cars\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &lt;span class=\"ui-column-title\"&gt;&#123;&#123;col.header&#125;&#125;&lt;/span&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"summary\"&gt;\r\n        There are &#123;&#123;cars?.length&#125;&#125; cars\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n            <p>See the <a [routerLink]=\"['/table/responsive']\">live example.</a></p>\r\n\r\n            <h3>EmptyMessage</h3>\r\n            <p>When there is no data, emptymessage template can be used to display a message.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [value]=\"cars\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Vin&lt;/th&gt;\r\n            &lt;th&gt;Year&lt;/th&gt;\r\n            &lt;th&gt;Brand&lt;/th&gt;\r\n            &lt;th&gt;Color&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"emptymessage\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;td [attr.colspan]=\"columns.length\"&gt;\r\n                No records found\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Loading Status</h3>\r\n            <p>Table has a loading property, when enabled a spinner icon is displayed to indicate data load.\r\n                An optional loadingIcon property can be passed in case you'd like a different loading icon.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [value]=\"cars\" [loading]=\"loading\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Vin&lt;/th&gt;\r\n            &lt;th&gt;Year&lt;/th&gt;\r\n            &lt;th&gt;Brand&lt;/th&gt;\r\n            &lt;th&gt;Color&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableDemo implements OnInit &#123;\r\n\r\n    loading: boolean;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.loading = true;\r\n        setTimeout(() => &#123;\r\n            this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n            this.loading = false;\r\n        &#125;, 1000);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Styling Certain Rows and Columns</h3>\r\n            <p>Certain rows and cells can easily be styled using templating features. In example below, the row whose vin property is '123' will get the 'success' style class. Example here \r\n                paint the background of the last cell using a colgroup and highlights rows whose year is older than 2000.\r\n            </p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col&gt;\r\n            &lt;col&gt;\r\n            &lt;col&gt;\r\n            &lt;col style=\"background-color:#FFD54F !important\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr [ngClass]=\"rowData.year &gt; 2010 ? 'old-car' : null\"&gt;\r\n            &lt;td *ngFor=\"let col of columns\" [ngClass]=\"rowData[col.field] &lt; 2000 ? 'very-old-car' : null\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/table/responsive']\">live example.</a></p>\r\n\r\n            <h3>Performance Tips</h3>\r\n            <ul>\r\n                <li>When selection is enabled use dataKey to avoid deep checking when comparing objects.</li>\r\n                <li>Use rowTrackBy to avoid unnecessary dom operations.</li>\r\n                <li>Prefer lazy loading for large datasets.</li>\r\n            </ul>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>value</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of objects to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>columns</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of objects to represent dynamic columns.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frozenColumns</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of objects to represent dynamic columns that are frozen.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frozenValue</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of objects to display as frozen.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginator</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When specified as true, enables the pagination.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rows</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Number of rows to display per page.</td>\r\n                        </tr>  \r\n                        <tr>\r\n                            <td>first</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Index of the first row to be displayed.</td>\r\n                        </tr>                     \r\n                        <tr>\r\n                            <td>totalRecords</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Number of total records, defaults to length of value when not defined.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>pageLinks</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Number of page links to display in paginator.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowsPerPageOptions</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>Array of integer values to display inside rows per page dropdown of paginator</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>alwaysShowPaginator</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to show it even there is only one page.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginatorPosition</td>\r\n                            <td>string</td>\r\n                            <td>bottom</td>\r\n                            <td>Position of the paginator, options are \"top\",\"bottom\" or \"both\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sortMode</td>\r\n                            <td>string</td>\r\n                            <td>single</td>\r\n                            <td>Defines whether sorting works on single column or on multiple columns.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sortField</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the field to sort data by default.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sortOrder</td>\r\n                            <td>number</td>\r\n                            <td>1</td>\r\n                            <td>Order to sort when default sorting is enabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>multiSortMeta</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of SortMeta objects to sort the data by default in multiple sort mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowGroupMode</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Type of the row grouping, valid values are \"subheader\" and \"rowspan\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>defaultSortOrder</td>\r\n                            <td>number</td>\r\n                            <td>1</td>\r\n                            <td>Sort order to use when an unsorted column gets sorted by user interaction.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>customSort</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether to use the default sorting or a custom one using sortFunction.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sortFunction</td>\r\n                            <td>function</td>\r\n                            <td>null</td>\r\n                            <td>A function to implement custom sorting, refer to sorting section for details.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selectionMode</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Specifies the selection mode, valid values are \"single\" and \"multiple\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selection</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Selected row in single mode or an array of values in multiple mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>contextMenuSelection</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Selected row with a context menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dataKey</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>A property to uniquely identify a record in data.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowTrackBy</td>\r\n                            <td>Function</td>\r\n                            <td>null</td>\r\n                            <td>Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>lazy</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if data is loaded and interacted with in lazy manner.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>compareSelectionBy</td>\r\n                            <td>string</td>\r\n                            <td>deepEquals</td>\r\n                            <td>Algorithm to define if a row is selected, valid values are \"equals\" that compares by reference and \"deepEquals\" that compares all fields.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>csvSeparator</td>\r\n                            <td>string</td>\r\n                            <td>,</td>\r\n                            <td>Character to use as the csv separator.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>exportFilename</td>\r\n                            <td>string</td>\r\n                            <td>download</td>\r\n                            <td>Name of the exported file.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filters</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of FilterMetadata objects to provide external filters.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filterDelay</td>\r\n                            <td>number</td>\r\n                            <td>300</td>\r\n                            <td>Delay in milliseconds before filtering the data.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>globalFilterFields</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of fields as string to use in global filtering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>expandedRowKeys</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>Collection of rows to display as expanded.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowExpandMode</td>\r\n                            <td>string</td>\r\n                            <td>multiple</td>\r\n                            <td>Whether multiple rows can be expanded at any time. Valid values are \"multiple\" and \"single\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>scrollable</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When specifies, enables horizontal and/or vertical scrolling.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>scrollHeight</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Height of the scroll viewport in fixed pixels or percentage.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>virtualScroll</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether the data should be loaded on demand during scroll.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>virtualScrollDelay</td>\r\n                            <td>number</td>\r\n                            <td>500</td>\r\n                            <td>Delay in virtual scroll before doing a call to lazy load.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>virtualRowHeight</td>\r\n                            <td>number</td>\r\n                            <td>27</td>\r\n                            <td>Height of a row to use in calculations of virtual scrolling.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frozenWidth</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Width of the frozen columns container.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>responsive</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if the columns should be stacked in smaller screens.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>contextMenu</td>\r\n                            <td>ContextMenu</td>\r\n                            <td>null</td>\r\n                            <td>Local ng-template varilable of a ContextMenu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>resizableColumns</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled, columns can be resized using drag and drop.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>columnResizeMode</td>\r\n                            <td>string</td>\r\n                            <td>fit</td>\r\n                            <td>Defines whether the overall table width should change on column resize, valid values are \"fit\" and \"expand\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>reorderableColumns</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled, columns can be reordered using drag and drop.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>loading</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Displays a loader to indicate data load is in progress.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>loadingIcon</td>\r\n                            <td>string</td>\r\n                            <td>fa-circle-o-notch</td>\r\n                            <td>The icon to show while indicating data load is in progress.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowHover</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Adds hover effect to rows without the need for selectionMode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginatorDropdownAppendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the paginator dropdown overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoLayout</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether the cell widths scale according to their content or not.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onRowSelect</td>\r\n                            <td>event.originalEvent: Browser event <br>\r\n                                event.data: Selected data <br >\r\n                                event.type: Type of selection, valid values are \"row\", \"radiobutton\" and \"checkbox\"\r\n                            </td>\r\n                            <td>Callback to invoke when a row is selected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onRowUnselect</td>\r\n                            <td>event.originalEvent: Browser event <br>\r\n                                event.data: Unselected data <br >\r\n                                event.type: Type of unselection, valid values are \"row\" and \"checkbox\"</td>\r\n                            <td>Callback to invoke when a row is unselected with metakey.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onPage</td>\r\n                            <td>event.first: Index of first record in page<br>\r\n                                event.rows: Number of rows on the page</td>\r\n                            <td>Callback to invoke when pagination occurs.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onSort</td>\r\n                            <td>event.field: Field name of the sorted column<br>\r\n                                event.order: Sort order as 1 or -1<br>\r\n                                event.multisortmeta: Sort metadata in multi sort mode. See multiple sorting section for the structure of this object.</td>\r\n                            <td>Callback to invoke when a column gets sorted.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onFilter</td>\r\n                            <td>event.filters: Filters object having a field as the property key and an object with value, matchMode as the property value.<br>\r\n                                event.filteredValue: Filtered data after running the filtering.</td>\r\n                            <td>Callback to invoke when data is filtered.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onLazyLoad</td>\r\n                            <td>event.first = First row offset <br>\r\n                                event.rows = Number of rows per page <br>\r\n                                event.sortField = Field name to sort with <br>\r\n                                event.sortOrder = Sort order as number, 1 for asc and -1 for dec <br>\r\n                                filters: FilterMetadata object having field as key and filter value, filter matchMode as value</td>\r\n                            <td>Callback to invoke when paging, sorting or filtering happens in lazy mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onRowExpand</td>\r\n                            <td>event.originalEvent: Browser event<br>\r\n                                data: Row data to expand.</td>\r\n                            <td>Callback to invoke when a row is expanded.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onRowCollapse</td>\r\n                            <td>event.originalEvent: Browser event<br>\r\n                                data: Row data to collapse.</td>\r\n                            <td>Callback to invoke when a row is collapsed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onContextMenuSelect</td>\r\n                            <td>event.originalEvent: Browser event <br>\r\n                                event.data: Selected data</td>\r\n                            <td>Callback to invoke when a row is selected with right click.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onColResize</td>\r\n                            <td>event.element: Resized column header <br>\r\n                                event.delta: Change of width in number of pixels</td>\r\n                            <td>Callback to invoke when a column is resized.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onColReorder</td>\r\n                            <td>event.dragIndex: Index of the dragged column <br>\r\n                                event.dropIndex: Index of the dropped column <br>\r\n                                event.columns: Columns array after reorder. <br></td>\r\n                            <td>Callback to invoke when a column is reordered.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEditInit</td>\r\n                            <td>event.column: Column object of the cell<br>\r\n                                event.data: Row data</td>\r\n                            <td>Callback to invoke when a cell switches to edit mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEdit</td>\r\n                            <td>event.originalEvent: Browser event\r\n                                event.column: Column object of the cell<br>\r\n                                event.data: Row data <br />\r\n                                event.index: Row index</td>\r\n                            <td>Callback to invoke when cell data is being edited.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEditComplete</td>\r\n                            <td>event.column: Column object of the cell<br>\r\n                                event.data: Row data <br />\r\n                                event.index: Row index</td>\r\n                            <td>Callback to invoke when cell edit is completed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEditCancel</td>\r\n                            <td>event.column: Column object of the cell<br>\r\n                                event.data: Row data <br />\r\n                                event.index: Row index</td>\r\n                            <td>Callback to invoke when cell edit is cancelled with escape key.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onHeaderCheckboxToggle</td>\r\n                            <td>event.originalEvent: Browser event <br>\r\n                                event.checked: State of the header checkbox</td>\r\n                            <td>Callback to invoke when state of header checkbox changes.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>reset</td>\r\n                            <td>-</td>\r\n                            <td>Resets sort, filter and paginator state.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>exportCSV</td>\r\n                            <td>config?.selectionOnly: Exports only the selection.</td>\r\n                            <td>Exports the data in csv format.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table #tt [value]=\"cars\"&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nupdate(dt: DataTable) &#123;\r\n    tt.reset();\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-table</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-datatable-caption</td>\r\n                            <td>Caption element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-table-summary</td>\r\n                            <td>Section section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sortable-column</td>\r\n                            <td>Sortable column header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-table-scrollable-header</td>\r\n                            <td>Container of header in a scrollable table.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-table-scrollable-body</td>\r\n                            <td>Container of body in a scrollable table.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-table-scrollable-footer</td>\r\n                            <td>Container of footer in a scrollable table.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-table-responsive</td>\r\n                            <td>Container element of a responsive datatable.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-table-loading</td>\r\n                            <td>Loader mask.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-table-loading-content</td>\r\n                            <td>Loader content.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-table-wrapper</td>\r\n                            <td>Loader content.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-table-scrollable-wrapper</td>\r\n                            <td>Loader content.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-table-resizer-helper</td>\r\n                            <td>Vertical resize indicator bar.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-table-reorder-indicator-top</td>\r\n                            <td>Top indicator of column reordering.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-table-reorder-indicator-top</td>\r\n                            <td>Bottom indicator of column reordering.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-table [value]=\"cars\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Vin&lt;/th&gt;\r\n            &lt;th&gt;Year&lt;/th&gt;\r\n            &lt;th&gt;Brand&lt;/th&gt;\r\n            &lt;th&gt;Color&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Dynamic Columns&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                    &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123;field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n\r\n</code>\r\n</pre>\r\n\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tabledemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDemoModule", function() { return TableDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabledemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tabledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tablepagedemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablepagedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tablesortdemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablesortdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tableselectiondemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tableselectiondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tablefilterdemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablefilterdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tablesectionsdemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablesectionsdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tablesubmenu__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablesubmenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tablestyledemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablestyledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tablelazydemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablelazydemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tableexportdemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tableexportdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tabledemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/table/tabledemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_table_table__ = __webpack_require__("../../../../../src/app/components/table/table.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_slider_slider__ = __webpack_require__("../../../../../src/app/components/slider/slider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_multiselect_multiselect__ = __webpack_require__("../../../../../src/app/components/multiselect/multiselect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_contextmenu_contextmenu__ = __webpack_require__("../../../../../src/app/components/contextmenu/contextmenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_dialog_dialog__ = __webpack_require__("../../../../../src/app/components/dialog/dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dropdown_dropdown__ = __webpack_require__("../../../../../src/app/components/dropdown/dropdown.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_inputtext_inputtext__ = __webpack_require__("../../../../../src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__tablecolgroupdemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablecolgroupdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__tablerowexpansiondemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablerowexpansiondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__tablescrolldemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablescrolldemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__tablecoltoggledemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablecoltoggledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__tablecruddemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablecruddemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__tableresponsivedemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tableresponsivedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__tablecontextmenudemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablecontextmenudemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__tablecolresizedemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablecolresizedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__tablecolreorderdemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablecolreorderdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__tableeditdemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tableeditdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__tablerowgroupdemo__ = __webpack_require__("../../../../../src/app/showcase/components/table/tablerowgroupdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_tooltip_tooltip__ = __webpack_require__("../../../../../src/app/components/tooltip/tooltip.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__tableellipsis__ = __webpack_require__("../../../../../src/app/showcase/components/table/tableellipsis.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var TableDemoModule = (function () {
    function TableDemoModule() {
    }
    TableDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__tabledemo_routing_module__["a" /* TableDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14__components_table_table__["a" /* TableModule */],
                __WEBPACK_IMPORTED_MODULE_15__components_slider_slider__["a" /* SliderModule */],
                __WEBPACK_IMPORTED_MODULE_20__components_dialog_dialog__["a" /* DialogModule */],
                __WEBPACK_IMPORTED_MODULE_16__components_multiselect_multiselect__["a" /* MultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_17__components_contextmenu_contextmenu__["a" /* ContextMenuModule */],
                __WEBPACK_IMPORTED_MODULE_21__components_dropdown_dropdown__["a" /* DropdownModule */],
                __WEBPACK_IMPORTED_MODULE_19__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_18__components_growl_growl__["a" /* GrowlModule */],
                __WEBPACK_IMPORTED_MODULE_22__components_inputtext_inputtext__["a" /* InputTextModule */],
                __WEBPACK_IMPORTED_MODULE_34__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_36__components_tooltip_tooltip__["a" /* TooltipModule */],
                __WEBPACK_IMPORTED_MODULE_35__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__tablesubmenu__["a" /* TableSubmenu */],
                __WEBPACK_IMPORTED_MODULE_3__tabledemo__["a" /* TableDemo */],
                __WEBPACK_IMPORTED_MODULE_4__tablepagedemo__["a" /* TablePageDemo */],
                __WEBPACK_IMPORTED_MODULE_5__tablesortdemo__["a" /* TableSortDemo */],
                __WEBPACK_IMPORTED_MODULE_6__tableselectiondemo__["a" /* TableSelectionDemo */],
                __WEBPACK_IMPORTED_MODULE_8__tablesectionsdemo__["a" /* TableSectionsDemo */],
                __WEBPACK_IMPORTED_MODULE_7__tablefilterdemo__["a" /* TableFilterDemo */],
                __WEBPACK_IMPORTED_MODULE_10__tablestyledemo__["a" /* TableStyleDemo */],
                __WEBPACK_IMPORTED_MODULE_11__tablelazydemo__["a" /* TableLazyDemo */],
                __WEBPACK_IMPORTED_MODULE_12__tableexportdemo__["a" /* TableExportDemo */],
                __WEBPACK_IMPORTED_MODULE_23__tablecolgroupdemo__["a" /* TableColGroupDemo */],
                __WEBPACK_IMPORTED_MODULE_24__tablerowexpansiondemo__["a" /* TableRowExpansionDemo */],
                __WEBPACK_IMPORTED_MODULE_25__tablescrolldemo__["a" /* TableScrollDemo */],
                __WEBPACK_IMPORTED_MODULE_26__tablecoltoggledemo__["a" /* TableColToggleDemo */],
                __WEBPACK_IMPORTED_MODULE_27__tablecruddemo__["a" /* TableCrudDemo */],
                __WEBPACK_IMPORTED_MODULE_28__tableresponsivedemo__["a" /* TableResponsiveDemo */],
                __WEBPACK_IMPORTED_MODULE_29__tablecontextmenudemo__["a" /* TableContextMenuDemo */],
                __WEBPACK_IMPORTED_MODULE_30__tablecolresizedemo__["a" /* TableColResizeDemo */],
                __WEBPACK_IMPORTED_MODULE_31__tablecolreorderdemo__["a" /* TableColReorderDemo */],
                __WEBPACK_IMPORTED_MODULE_32__tableeditdemo__["a" /* TableEditDemo */],
                __WEBPACK_IMPORTED_MODULE_33__tablerowgroupdemo__["a" /* TableRowGroupDemo */],
                __WEBPACK_IMPORTED_MODULE_37__tableellipsis__["a" /* TableEllipsisDemo */]
            ]
        })
    ], TableDemoModule);
    return TableDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tabledemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDemo; });
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


var TableDemo = (function () {
    function TableDemo(carService) {
        this.carService = carService;
    }
    TableDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tabledemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableDemo);
    return TableDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tableeditdemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Edit</span></span>\r\n        <span>Incell editing provides a quick and user friendly way to manipulate data.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-table [columns]=\"cols\" [value]=\"cars\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th>Vin</th>\r\n                <th>Year</th>\r\n                <th>Brand</th>\r\n                <th>Color</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td pEditableColumn>\r\n                    <p-cellEditor>\r\n                        <ng-template pTemplate=\"input\">\r\n                            <input type=\"text\" [(ngModel)]=\"rowData.vin\">\r\n                        </ng-template>\r\n                        <ng-template pTemplate=\"output\">\r\n                            {{rowData.vin}}\r\n                        </ng-template>\r\n                    </p-cellEditor>\r\n                </td>\r\n                <td pEditableColumn>\r\n                    <p-cellEditor>\r\n                        <ng-template pTemplate=\"input\">\r\n                            <input type=\"text\" [(ngModel)]=\"rowData.year\" required>\r\n                        </ng-template>\r\n                        <ng-template pTemplate=\"output\">\r\n                            {{rowData.year}}\r\n                        </ng-template>\r\n                    </p-cellEditor>\r\n                </td>\r\n                <td pEditableColumn>\r\n                    <p-cellEditor>\r\n                        <ng-template pTemplate=\"input\">\r\n                            <input type=\"text\" [(ngModel)]=\"rowData.brand\">\r\n                        </ng-template>\r\n                        <ng-template pTemplate=\"output\">\r\n                            {{rowData.brand}}\r\n                        </ng-template>\r\n                    </p-cellEditor>\r\n                </td>\r\n                <td pEditableColumn>\r\n                    <p-cellEditor>\r\n                        <ng-template pTemplate=\"input\">\r\n                            <input type=\"text\" [(ngModel)]=\"rowData.color\">\r\n                        </ng-template>\r\n                        <ng-template pTemplate=\"output\">\r\n                            {{rowData.color}}\r\n                        </ng-template>\r\n                    </p-cellEditor>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tableeditdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableeditdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableEditDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tableeditdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableeditdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Vin&lt;/th&gt;\r\n            &lt;th&gt;Year&lt;/th&gt;\r\n            &lt;th&gt;Brand&lt;/th&gt;\r\n            &lt;th&gt;Color&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td pEditableColumn&gt;\r\n                &lt;p-cellEditor&gt;\r\n                    &lt;ng-template pTemplate=\"input\"&gt;\r\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.vin\"&gt;\r\n                    &lt;/ng-template&gt;\r\n                    &lt;ng-template pTemplate=\"output\"&gt;\r\n                        {{rowData.vin}}\r\n                    &lt;/ng-template&gt;\r\n                &lt;/p-cellEditor&gt;\r\n            &lt;/td&gt;\r\n            &lt;td pEditableColumn&gt;\r\n                &lt;p-cellEditor&gt;\r\n                    &lt;ng-template pTemplate=\"input\"&gt;\r\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.year\" required&gt;\r\n                    &lt;/ng-template&gt;\r\n                    &lt;ng-template pTemplate=\"output\"&gt;\r\n                        {{rowData.year}}\r\n                    &lt;/ng-template&gt;\r\n                &lt;/p-cellEditor&gt;\r\n            &lt;/td&gt;\r\n            &lt;td pEditableColumn&gt;\r\n                &lt;p-cellEditor&gt;\r\n                    &lt;ng-template pTemplate=\"input\"&gt;\r\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.brand\"&gt;\r\n                    &lt;/ng-template&gt;\r\n                    &lt;ng-template pTemplate=\"output\"&gt;\r\n                        {{rowData.brand}}\r\n                    &lt;/ng-template&gt;\r\n                &lt;/p-cellEditor&gt;\r\n            &lt;/td&gt;\r\n            &lt;td pEditableColumn&gt;\r\n                &lt;p-cellEditor&gt;\r\n                    &lt;ng-template pTemplate=\"input\"&gt;\r\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.color\"&gt;\r\n                    &lt;/ng-template&gt;\r\n                    &lt;ng-template pTemplate=\"output\"&gt;\r\n                        {{rowData.color}}\r\n                    &lt;/ng-template&gt;\r\n                &lt;/p-cellEditor&gt;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tableeditdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableEditDemo; });
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


var TableEditDemo = (function () {
    function TableEditDemo(carService) {
        this.carService = carService;
    }
    TableEditDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableEditDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tableeditdemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableEditDemo);
    return TableEditDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tableellipsis.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableEllipsisDemo; });
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


var TableEllipsisDemo = (function () {
    function TableEllipsisDemo(carService) {
        this.carService = carService;
    }
    TableEllipsisDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) {
            _this.cars1 = cars;
            _this.cars1[3].vin = '1ZVHT8-2H4851-13K456-67DSHJ-GHFW6G';
            _this.cars1[0].brand = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
            _this.cars1[0].color = 'Rechtsschutzversicherungsgesellschaften';
        });
        this.carService.getCarsSmall().then(function (cars) {
            _this.cars2 = cars;
            _this.cars2[3].vin = '1ZVHT8-2H4851-13K456-67DSHJ-GHFW6G';
            _this.cars2[0].brand = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
            _this.cars2[0].color = 'Rechtsschutzversicherungsgesellschaften';
        });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableEllipsisDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tableellipsisdemo.html"),
            styles: ["\n        .ui-g label {\n          font-weight: bold;\n          margin-top: .25em;\n          display: block;\n        }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableEllipsisDemo);
    return TableEllipsisDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tableellipsisdemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Ellipses</span></span>\r\n        <span>Ellipses can be applied to the cells conditionally, in which cell content overflows outside of the cell. The ellipses can be used in addtion with tooltip to show the full content of table cell, on which ellipses is applied.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n  <h3 class=\"first\">Basic</h3>\r\n  <p-table [columns]=\"cols\" [value]=\"cars2\">\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n          <tr>\r\n              <th *ngFor=\"let col of columns\">\r\n                  {{col.header}}\r\n              </th>\r\n          </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n          <tr>\r\n              <td *ngFor=\"let col of columns\">\r\n                  <span pTextEllipsis [pTooltip]=\"rowData[col.field]\" tooltipPosition=\"bottom\">{{rowData[col.field]}}</span>\r\n              </td>\r\n          </tr>\r\n      </ng-template>\r\n  </p-table>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Scroll - Resize Mode (Fit)</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars1\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\">\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n                <col *ngFor=\"let col of columns\">\r\n            </colgroup>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" pResizableColumn>\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    <span pTextEllipsis [pTooltip]=\"rowData[col.field]\" tooltipPosition=\"bottom\">{{rowData[col.field]}}</span>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n  </div>\r\n\r\n  <div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Scroll - Resize Mode (Expand)</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars1\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\" columnResizeMode=\"expand\">\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n                <col *ngFor=\"let col of columns\">\r\n            </colgroup>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" pResizableColumn>\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    <span pTextEllipsis [pTooltip]=\"rowData[col.field]\" tooltipPosition=\"bottom\">{{rowData[col.field]}}</span>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n  </div>\r\n\r\n  <div class=\"content-section implementation\">\r\n    <h3 class=\"first\">No Scroll - Resize Mode (Fit)</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars2\" [resizableColumns]=\"true\">\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n                <col *ngFor=\"let col of columns\">\r\n            </colgroup>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" pResizableColumn>\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    <span pTextEllipsis [pTooltip]=\"rowData[col.field]\" tooltipPosition=\"bottom\">{{rowData[col.field]}}</span>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n  </div>\r\n\r\n  <div class=\"content-section implementation\">\r\n    <h3 class=\"first\">No Scroll - Resize Mode (Expand)</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars2\" [resizableColumns]=\"true\" columnResizeMode=\"expand\">\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n                <col *ngFor=\"let col of columns\">\r\n            </colgroup>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" pResizableColumn>\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    <span pTextEllipsis [pTooltip]=\"rowData[col.field]\" tooltipPosition=\"bottom\">{{rowData[col.field]}}</span>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n  </div>\r\n\r\n  <div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tablescrolldemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablescrolldemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n    <pre>\r\n    <code class=\"language-typescript\" pCode ngNonBindable>\r\n    export class TableEllipsisDemo implements OnInit &#123;\r\n\r\n        cars1: Car[];\r\n        cars2: Car[];\r\n        cols: any[];\r\n\r\n        constructor(private carService:CarService) &#123; &#125;\r\n\r\n        ngOnInit()&#123;\r\n          this.carService.getCarsMedium().then(cars => &#123;\r\n            this.cars1 = cars\r\n\r\n            this.cars1[3].vin = '1ZVHT8-2H4851-13K456-67DSHJ-GHFW6G';\r\n            this.cars1[0].brand = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';\r\n            this.cars1[0].color = 'Rechtsschutzversicherungsgesellschaften';\r\n          &#125;);\r\n\r\n          this.carService.getCarsSmall().then(cars => &#123;\r\n            this.cars2 = cars\r\n\r\n            this.cars2[3].vin = '1ZVHT8-2H4851-13K456-67DSHJ-GHFW6G';\r\n            this.cars2[0].brand = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';\r\n            this.cars2[0].color = 'Rechtsschutzversicherungsgesellschaften';\r\n          &#125;);\r\n\r\n          this.cols = [\r\n              &#123; field: 'vin', header: 'Vin' &#125;,\r\n              &#123; field: 'year', header: 'Year' &#125;,\r\n              &#123; field: 'brand', header: 'Brand' &#125;,\r\n              &#123; field: 'color', header: 'Color' &#125;\r\n          ];\r\n        &#125;\r\n    &#125;\r\n    </code>\r\n    </pre>\r\n            </p-tabPanel>\r\n\r\n            <p-tabPanel header=\"tablescrolldemo.html\">\r\n                <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablescrolldemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                    <i class=\"fa fa-github\"></i>\r\n                    <span>View on GitHub</span>\r\n                </a>\r\n                <pre>\r\n                <code class=\"language-markup\" pCode ngNonBindable>\r\n                &lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n                &lt;p-table [columns]=\"cols\" [value]=\"cars2\"&gt;\r\n                    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n                        &lt;tr&gt;\r\n                            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                                {{col.header}}\r\n                            &lt;/th&gt;\r\n                        &lt;/tr&gt;\r\n                    &lt;/ng-template&gt;\r\n                    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n                        &lt;tr&gt;\r\n                            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                                &lt;span pTextEllipsis [pTooltip]=\"rowData[col.field]\" tooltipPosition=\"bottom\"&gt;{{rowData[col.field]}}&lt;/span&gt;\r\n                            &lt;/td&gt;\r\n                        &lt;/tr&gt;\r\n                    &lt;/ng-template&gt;\r\n                &lt;/p-table&gt;\r\n\r\n                &lt;h3 class=\"first\"&gt;Scroll - Resize Mode (Fit)&lt;/h3&gt;\r\n                &lt;p-table [columns]=\"cols\" [value]=\"cars1\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\"&gt;\r\n                    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n                        &lt;colgroup&gt;\r\n                            &lt;col *ngFor=\"let col of columns\"&gt;\r\n                        &lt;/colgroup&gt;\r\n                    &lt;/ng-template&gt;\r\n                    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n                        &lt;tr&gt;\r\n                            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\r\n                                {{col.header}}\r\n                            &lt;/th&gt;\r\n                        &lt;/tr&gt;\r\n                    &lt;/ng-template&gt;\r\n                    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n                        &lt;tr&gt;\r\n                            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                                &lt;span pTextEllipsis [pTooltip]=\"rowData[col.field]\" tooltipPosition=\"bottom\"&gt;{{rowData[col.field]}}&lt;/span&gt;\r\n                            &lt;/td&gt;\r\n                        &lt;/tr&gt;\r\n                    &lt;/ng-template&gt;\r\n                &lt;/p-table&gt;\r\n\r\n                &lt;h3 class=\"first\"&gt;Scroll - Resize Mode (Expand)&lt;/h3&gt;\r\n                &lt;p-table [columns]=\"cols\" [value]=\"cars1\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\" columnResizeMode=\"expand\"&gt;\r\n                    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n                        &lt;colgroup&gt;\r\n                            &lt;col *ngFor=\"let col of columns\"&gt;\r\n                        &lt;/colgroup&gt;\r\n                    &lt;/ng-template&gt;\r\n                    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n                        &lt;tr&gt;\r\n                            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\r\n                                {{col.header}}\r\n                            &lt;/th&gt;\r\n                        &lt;/tr&gt;\r\n                    &lt;/ng-template&gt;\r\n                    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n                        &lt;tr&gt;\r\n                            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                                &lt;span pTextEllipsis [pTooltip]=\"rowData[col.field]\" tooltipPosition=\"bottom\"&gt;{{rowData[col.field]}}&lt;/span&gt;\r\n                            &lt;/td&gt;\r\n                        &lt;/tr&gt;\r\n                    &lt;/ng-template&gt;\r\n                &lt;/p-table&gt;\r\n                </code>\r\n                </pre>\r\n                        </p-tabPanel>\r\n                    </p-tabView>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tableexportdemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Export</span></span>\r\n        <span>DataTable can export its data to CSV format.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-table #dt [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars\">\r\n        <ng-template pTemplate=\"caption\">\r\n            <div class=\"ui-helper-clearfix\">\r\n                <button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"All Data\" (click)=\"dt.exportCSV()\" style=\"float:left\"></button>\r\n                <button type=\"button\" pButton icon=\"fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"dt.exportCSV({selectionOnly:true})\" style=\"float:right\"></button>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tableexportdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableexportdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableExportDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    selectedCars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tableexportdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableexportdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table #dt [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars\"&gt;\r\n    &lt;ng-template pTemplate=\"caption\"&gt;\r\n        &lt;div class=\"ui-helper-clearfix\"&gt;\r\n            &lt;button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"All Data\" (click)=\"dt.exportCSV()\" style=\"float:left\"&gt;&lt;/button&gt;\r\n            &lt;button type=\"button\" pButton icon=\"fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"dt.exportCSV(&#123;selectionOnly:true&#125;)\" style=\"float:right\"&gt;&lt;/button&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tableexportdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableExportDemo; });
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


var TableExportDemo = (function () {
    function TableExportDemo(carService) {
        this.carService = carService;
    }
    TableExportDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableExportDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tableexportdemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableExportDemo);
    return TableExportDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablefilterdemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Filter</span></span>\r\n        <span>Filtering reduces the data by running a search using column filters and an optional global filter.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation ui-fluid\">\r\n    <p-table #dt [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\">\r\n        <ng-template pTemplate=\"caption\">\r\n            <div style=\"text-align: right\">\r\n                <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\r\n            </div>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n                    <input *ngSwitchCase=\"'vin'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n                    <div *ngSwitchCase=\"'year'\">\r\n                        {{yearFilter}}\r\n                        <i class=\"fa fa-close\" (click)=\"yearFilter=null;dt.filter(null, col.field, col.filterMatchMode)\" style=\"cursor:pointer\"></i>\r\n                        <p-slider [style]=\"{'width':'100%','margin-top':'8px'}\" [(ngModel)]=\"yearFilter\" [min]=\"1970\" [max]=\"2010\" (onChange)=\"onYearChange($event, dt)\"></p-slider>\r\n                    </div>\r\n                    <p-dropdown *ngSwitchCase=\"'brand'\" [options]=\"brands\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value, col.field, 'equals')\"></p-dropdown>\r\n                    <p-multiSelect *ngSwitchCase=\"'color'\" [options]=\"colors\" defaultLabel=\"All Colors\" (onChange)=\"dt.filter($event.value, col.field, 'in')\"></p-multiSelect>\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tablefilterdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablefilterdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableFilterDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    brands: SelectItem[];\r\n\r\n    colors: SelectItem[];\r\n\r\n    yearFilter: number;\r\n\r\n    yearTimeout: any;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\r\n\r\n        this.brands = [\r\n            &#123; label: 'All Brands', value: null &#125;,\r\n            &#123; label: 'Audi', value: 'Audi' &#125;,\r\n            &#123; label: 'BMW', value: 'BMW' &#125;,\r\n            &#123; label: 'Fiat', value: 'Fiat' &#125;,\r\n            &#123; label: 'Honda', value: 'Honda' &#125;,\r\n            &#123; label: 'Jaguar', value: 'Jaguar' &#125;,\r\n            &#123; label: 'Mercedes', value: 'Mercedes' &#125;,\r\n            &#123; label: 'Renault', value: 'Renault' &#125;,\r\n            &#123; label: 'VW', value: 'VW' &#125;,\r\n            &#123; label: 'Volvo', value: 'Volvo' &#125;\r\n        ];\r\n\r\n        this.colors = [\r\n            &#123; label: 'White', value: 'White' &#125;,\r\n            &#123; label: 'Green', value: 'Green' &#125;,\r\n            &#123; label: 'Silver', value: 'Silver' &#125;,\r\n            &#123; label: 'Black', value: 'Black' &#125;,\r\n            &#123; label: 'Red', value: 'Red' &#125;,\r\n            &#123; label: 'Maroon', value: 'Maroon' &#125;,\r\n            &#123; label: 'Brown', value: 'Brown' &#125;,\r\n            &#123; label: 'Orange', value: 'Orange' &#125;,\r\n            &#123; label: 'Blue', value: 'Blue' &#125;\r\n        ];\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n    &#125;\r\n\r\n    onYearChange(event, dt) &#123;\r\n        if (this.yearTimeout) &#123;\r\n            clearTimeout(this.yearTimeout);\r\n        &#125;\r\n\r\n        this.yearTimeout = setTimeout(() => &#123;\r\n            dt.filter(event.value, 'year', 'gt');\r\n        &#125;, 250);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tablefilterdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablefilterdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table #dt [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\"&gt;\r\n    &lt;ng-template pTemplate=\"caption\"&gt;\r\n        &lt;div style=\"text-align: right\"&gt;        \r\n            &lt;i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"&gt;&lt;/i&gt;\r\n            &lt;input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\"&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\"&gt;\r\n                &lt;input *ngSwitchCase=\"'vin'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\"&gt;\r\n                &lt;div *ngSwitchCase=\"'year'\"&gt;\r\n                    &#123;&#123;yearFilter&#125;&#125;\r\n                    &lt;i class=\"fa fa-close\" (click)=\"yearFilter=null;dt.filter(null, col.field, col.filterMatchMode)\" style=\"cursor:pointer\"&gt;&lt;/i&gt;\r\n                    &lt;p-slider [style]=\"&#123;'width':'100%','margin-top':'8px'&#125;\" [(ngModel)]=\"yearFilter\" [min]=\"1970\" [max]=\"2010\" (onChange)=\"onYearChange($event, dt)\"&gt;&lt;/p-slider&gt;\r\n                &lt;/div&gt;\r\n                &lt;p-dropdown *ngSwitchCase=\"'brand'\" [options]=\"brands\" [style]=\"&#123;'width':'100%'&#125;\" (onChange)=\"dt.filter($event.value, col.field, 'equals')\"&gt;&lt;/p-dropdown&gt;\r\n                &lt;p-multiSelect *ngSwitchCase=\"'color'\" [options]=\"colors\" defaultLabel=\"All Colors\" (onChange)=\"dt.filter($event.value, col.field, 'in')\"&gt;&lt;/p-multiSelect&gt;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablefilterdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableFilterDemo; });
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


var TableFilterDemo = (function () {
    function TableFilterDemo(carService) {
        this.carService = carService;
    }
    TableFilterDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
        this.brands = [
            { label: 'All Brands', value: null },
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        this.colors = [
            { label: 'White', value: 'White' },
            { label: 'Green', value: 'Green' },
            { label: 'Silver', value: 'Silver' },
            { label: 'Black', value: 'Black' },
            { label: 'Red', value: 'Red' },
            { label: 'Maroon', value: 'Maroon' },
            { label: 'Brown', value: 'Brown' },
            { label: 'Orange', value: 'Orange' },
            { label: 'Blue', value: 'Blue' }
        ];
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableFilterDemo.prototype.onYearChange = function (event, dt) {
        if (this.yearTimeout) {
            clearTimeout(this.yearTimeout);
        }
        this.yearTimeout = setTimeout(function () {
            dt.filter(event.value, 'year', 'gt');
        }, 250);
    };
    TableFilterDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tablefilterdemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableFilterDemo);
    return TableFilterDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablelazydemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Lazy</span></span>\r\n        <span>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\r\n            onLazyLoad callback everytime paging, sorting and filtering happens. Sample belows imitates lazy paging by using an in memory list.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-table [columns]=\"cols\" [value]=\"cars\" [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\" \r\n        [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\" [loading]=\"loading\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tablelazydemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablelazydemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableLazyDemo implements OnInit &#123;\r\n\r\n    datasource: Car[];\r\n\r\n    cars: Car[];\r\n\r\n    totalRecords: number;\r\n\r\n    cols: any[];\r\n\r\n    loading: boolean;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        //datasource imitation\r\n        this.carService.getCarsLarge().then(cars => &#123;\r\n            this.datasource = cars;\r\n            this.totalRecords = this.datasource.length;\r\n        &#125;);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n\r\n        this.loading = true;\r\n    &#125;\r\n\r\n    loadCarsLazy(event: LazyLoadEvent) &#123;\r\n        this.loading = true;\r\n\r\n        //in a real application, make a remote request to load data using state metadata from event\r\n        //event.first = First row offset\r\n        //event.rows = Number of rows per page\r\n        //event.sortField = Field name to sort with\r\n        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec\r\n        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value\r\n\r\n        //imitate db connection over a network\r\n        setTimeout(() => &#123;\r\n            if (this.datasource) &#123;\r\n                this.cars = this.datasource.slice(event.first, (event.first + event.rows));\r\n                this.loading = false;\r\n            &#125;\r\n        &#125;, 1000);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tablelazydemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablelazydemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\" [paginator]=\"true\" \r\n    [rows]=\"10\" [totalRecords]=\"totalRecords\" [loading]=\"loading\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablelazydemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableLazyDemo; });
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


var TableLazyDemo = (function () {
    function TableLazyDemo(carService) {
        this.carService = carService;
    }
    TableLazyDemo.prototype.ngOnInit = function () {
        var _this = this;
        //datasource imitation
        this.carService.getCarsLarge().then(function (cars) {
            _this.datasource = cars;
            _this.totalRecords = _this.datasource.length;
        });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.loading = true;
    };
    TableLazyDemo.prototype.loadCarsLazy = function (event) {
        var _this = this;
        this.loading = true;
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        //imitate db connection over a network
        setTimeout(function () {
            if (_this.datasource) {
                _this.cars = _this.datasource.slice(event.first, (event.first + event.rows));
                _this.loading = false;
            }
        }, 1000);
    };
    TableLazyDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tablelazydemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableLazyDemo);
    return TableLazyDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablepagedemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Page</span></span>\r\n        <span>Pagination is enabled by setting paginator property to true and defining a rows property to specify the number of rows per page.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-table [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tablepagedemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablepagedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TablePageDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tablepagedemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablepagedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablepagedemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablePageDemo; });
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


var TablePageDemo = (function () {
    function TablePageDemo(carService) {
        this.carService = carService;
    }
    TablePageDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TablePageDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tablepagedemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TablePageDemo);
    return TablePageDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tableresponsivedemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Responsive</span></span>\r\n        <span>Table columns are displayed as stacked in responsive mode if the screen size becomes smaller. In addition certain columns can be hidden\r\n            based on a priority, note that priority based implementation is not built-in and provided as a demo instead.\r\n        </span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Reflow</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars\" [responsive]=\"true\">\r\n        <ng-template pTemplate=\"caption\">\r\n            List of Cars\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    &#123;&#123;col.header&#125;&#125;\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    <span class=\"ui-column-title\">&#123;&#123;col.header&#125;&#125;</span>\r\n                    &#123;&#123;rowData[col.field]&#125;&#125;\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"summary\">\r\n            There are &#123;&#123;cars?.length&#125;&#125; cars\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Priority</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars\">\r\n        <ng-template pTemplate=\"caption\">\r\n            List of Cars\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\">\r\n                <tr>\r\n                    <th>Vin</th>\r\n                    <th class=\"ui-p-4\">Year - p4</th>\r\n                    <th class=\"ui-p-5\">Brand - p5</th>\r\n                    <th class=\"ui-p-6\">Color - p6</th>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-car>\r\n                <tr>\r\n                    <td>&#123;&#123;car.vin&#125;&#125;</td>\r\n                    <td class=\"ui-p-4\">&#123;&#123;car.year&#125;&#125;</td>\r\n                    <td class=\"ui-p-5\">&#123;&#123;car.brand&#125;&#125;</td>\r\n                    <td class=\"ui-p-6\">&#123;&#123;car.color&#125;&#125;</td>\r\n                </tr>\r\n            </ng-template>\r\n        <ng-template pTemplate=\"summary\">\r\n            There are &#123;&#123;cars?.length&#125;&#125; cars\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tableresponsivedemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableresponsivedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Component(&#123;\r\n    templateUrl: './tableresponsivedemo.html',\r\n    styles: [`\r\n        /* Column Priorities */\r\n        @media only all &#123;\r\n            th.ui-p-6,\r\n            td.ui-p-6,\r\n            th.ui-p-5,\r\n            td.ui-p-5,\r\n            th.ui-p-4,\r\n            td.ui-p-4,\r\n            th.ui-p-3,\r\n            td.ui-p-3,\r\n            th.ui-p-2,\r\n            td.ui-p-2,\r\n            th.ui-p-1,\r\n            td.ui-p-1 &#123;\r\n                display: none;\r\n            &#125;\r\n        &#125;\r\n        \r\n        /* Show priority 1 at 320px (20em x 16px) */\r\n        @media screen and (min-width: 20em) &#123;\r\n            th.ui-p-1,\r\n            td.ui-p-1 &#123;\r\n                display: table-cell;\r\n            &#125;\r\n        &#125;\r\n        \r\n        /* Show priority 2 at 480px (30em x 16px) */\r\n        @media screen and (min-width: 30em) &#123;\r\n            th.ui-p-2,\r\n            td.ui-p-2 &#123;\r\n                display: table-cell;\r\n            &#125;\r\n        &#125;\r\n        \r\n        /* Show priority 3 at 640px (40em x 16px) */\r\n        @media screen and (min-width: 40em) &#123;\r\n            th.ui-p-3,\r\n            td.ui-p-3 &#123;\r\n                display: table-cell;\r\n            &#125;\r\n        &#125;\r\n        \r\n        /* Show priority 4 at 800px (50em x 16px) */\r\n        @media screen and (min-width: 50em) &#123;\r\n            th.ui-p-4,\r\n            td.ui-p-4 &#123;\r\n                display: table-cell;\r\n            &#125;\r\n        &#125;\r\n        \r\n        /* Show priority 5 at 960px (60em x 16px) */\r\n        @media screen and (min-width: 60em) &#123;\r\n            th.ui-p-5,\r\n            td.ui-p-5 &#123;\r\n                display: table-cell;\r\n            &#125;\r\n        &#125;\r\n        \r\n        /* Show priority 6 at 1,120px (70em x 16px) */\r\n        @media screen and (min-width: 70em) &#123;\r\n            th.ui-p-6,\r\n            td.ui-p-6 &#123;\r\n                display: table-cell;\r\n            &#125;\r\n        &#125;\r\n    `]\r\n    &#125;)\r\n    export class TableResponsiveDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tableresponsivedemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableresponsivedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>&lt;h3 class=\"first\"&gt;Reflow&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [responsive]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"caption\"&gt;\r\n        List of Cars\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &lt;span class=\"ui-column-title\"&gt;&#123;&#123;col.header&#125;&#125;&lt;/span&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"summary\"&gt;\r\n        There are &#123;&#123;cars?.length&#125;&#125; cars\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Priority&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\r\n    &lt;ng-template pTemplate=\"caption\"&gt;\r\n        List of Cars\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n            &lt;tr&gt;\r\n                &lt;th&gt;Vin&lt;/th&gt;\r\n                &lt;th class=\"ui-p-4\"&gt;Year&lt;/th&gt;\r\n                &lt;th class=\"ui-p-5\"&gt;Brand&lt;/th&gt;\r\n                &lt;th class=\"ui-p-6\"&gt;Color&lt;/th&gt;\r\n            &lt;/tr&gt;\r\n        &lt;/ng-template&gt;\r\n        &lt;ng-template pTemplate=\"body\" let-car&gt;\r\n            &lt;tr&gt;\r\n                &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\r\n                &lt;td class=\"ui-p-4\"&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\r\n                &lt;td class=\"ui-p-5\"&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\r\n                &lt;td class=\"ui-p-6\"&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\r\n            &lt;/tr&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"summary\"&gt;\r\n        There are &#123;&#123;cars?.length&#125;&#125; cars\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tableresponsivedemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableResponsiveDemo; });
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


var TableResponsiveDemo = (function () {
    function TableResponsiveDemo(carService) {
        this.carService = carService;
    }
    TableResponsiveDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableResponsiveDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tableresponsivedemo.html"),
            styles: ["\n        /* Column Priorities */\n        @media only all {\n            th.ui-p-6,\n            td.ui-p-6,\n            th.ui-p-5,\n            td.ui-p-5,\n            th.ui-p-4,\n            td.ui-p-4,\n            th.ui-p-3,\n            td.ui-p-3,\n            th.ui-p-2,\n            td.ui-p-2,\n            th.ui-p-1,\n            td.ui-p-1 {\n                display: none;\n            }\n        }\n        \n        /* Show priority 1 at 320px (20em x 16px) */\n        @media screen and (min-width: 20em) {\n            th.ui-p-1,\n            td.ui-p-1 {\n                display: table-cell;\n            }\n        }\n        \n        /* Show priority 2 at 480px (30em x 16px) */\n        @media screen and (min-width: 30em) {\n            th.ui-p-2,\n            td.ui-p-2 {\n                display: table-cell;\n            }\n        }\n        \n        /* Show priority 3 at 640px (40em x 16px) */\n        @media screen and (min-width: 40em) {\n            th.ui-p-3,\n            td.ui-p-3 {\n                display: table-cell;\n            }\n        }\n        \n        /* Show priority 4 at 800px (50em x 16px) */\n        @media screen and (min-width: 50em) {\n            th.ui-p-4,\n            td.ui-p-4 {\n                display: table-cell;\n            }\n        }\n        \n        /* Show priority 5 at 960px (60em x 16px) */\n        @media screen and (min-width: 60em) {\n            th.ui-p-5,\n            td.ui-p-5 {\n                display: table-cell;\n            }\n        }\n        \n        /* Show priority 6 at 1,120px (70em x 16px) */\n        @media screen and (min-width: 70em) {\n            th.ui-p-6,\n            td.ui-p-6 {\n                display: table-cell;\n            }\n        }\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableResponsiveDemo);
    return TableResponsiveDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablerowexpansiondemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Row Expansion</span></span>\r\n        <span>Row expansion is used to display additional content about the row data.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-table [columns]=\"cols\" [value]=\"cars\" dataKey=\"vin\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th style=\"width: 2.25em\"></th>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-expanded=\"expanded\" let-columns=\"columns\">\r\n            <tr>\r\n                <td>\r\n                    <a href=\"#\" [pRowToggler]=\"rowData\">\r\n                        <i [ngClass]=\"expanded ? 'fa fa-fw fa-chevron-circle-down' : 'fa fa-fw fa-chevron-circle-right'\"></i>\r\n                    </a>\r\n                </td>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td [attr.colspan]=\"columns.length + 1\">\r\n                    <div class=\"ui-g ui-fluid\" style=\"font-size:16px;padding:20px\">\r\n                        <div class=\"ui-g-12 ui-md-3\" style=\"text-align:center\">\r\n                            <img [attr.alt]=\"rowData.brand\" src=\"assets/showcase/images/demo/car/{{rowData.brand}}.png\">\r\n                        </div>\r\n                        <div class=\"ui-g-12 ui-md-9\">\r\n                            <div class=\"ui-g\">\r\n                                <div class=\"ui-g-12\">\r\n                                    <b>Vin:</b> {{rowData.vin}}\r\n                                </div>\r\n                                <div class=\"ui-g-12\">\r\n                                    <b>Vin:</b> {{rowData.color}}\r\n                                </div>\r\n                                <div class=\"ui-g-12\">\r\n                                    <b>Brand:</b> {{rowData.brand}}\r\n                                </div>\r\n                                <div class=\"ui-g-12\">\r\n                                    <b>Color:</b> {{rowData.color}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tablerowexpansiondemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablerowexpansiondemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableRowExpansionDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tablerowexpansiondemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablerowexpansiondemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" dataKey=\"vin\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th style=\"width: 2.25em\"&gt;&lt;/th&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-expanded=\"expanded\" let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;\r\n                &lt;a href=\"#\" [pRowToggler]=\"rowData\"&gt;\r\n                    &lt;i [ngClass]=\"expanded ? 'fa fa-fw fa-chevron-circle-down' : 'fa fa-fw fa-chevron-circle-right'\"&gt;&lt;/i&gt;\r\n                &lt;/a&gt;\r\n            &lt;/td&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td [attr.colspan]=\"columns.length + 1\"&gt;\r\n                &lt;div class=\"ui-g ui-fluid\" style=\"font-size:16px;padding:20px\"&gt;\r\n                    &lt;div class=\"ui-g-12 ui-md-3\" style=\"text-align:center\"&gt;\r\n                        &lt;img [attr.alt]=\"rowData.brand\" src=\"assets/showcase/images/demo/car/&#123;&#123;rowData.brand&#125;&#125;.png\"&gt;\r\n                    &lt;/div&gt;\r\n                    &lt;div class=\"ui-g-12 ui-md-9\"&gt;\r\n                        &lt;div class=\"ui-g\"&gt;\r\n                            &lt;div class=\"ui-g-12\"&gt;\r\n                                &lt;b&gt;Vin:&lt;/b&gt; &#123;&#123;rowData.vin&#125;&#125;\r\n                            &lt;/div&gt;\r\n                            &lt;div class=\"ui-g-12\"&gt;\r\n                                &lt;b&gt;Vin:&lt;/b&gt; &#123;&#123;rowData.color&#125;&#125;\r\n                            &lt;/div&gt;\r\n                            &lt;div class=\"ui-g-12\"&gt;\r\n                                &lt;b&gt;Brand:&lt;/b&gt; &#123;&#123;rowData.brand&#125;&#125;\r\n                            &lt;/div&gt;\r\n                            &lt;div class=\"ui-g-12\"&gt;\r\n                                &lt;b&gt;Color:&lt;/b&gt; &#123;&#123;rowData.color&#125;&#125;\r\n                            &lt;/div&gt;\r\n                        &lt;/div&gt;\r\n                    &lt;/div&gt;\r\n                &lt;/div&gt;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablerowexpansiondemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableRowExpansionDemo; });
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


var TableRowExpansionDemo = (function () {
    function TableRowExpansionDemo(carService) {
        this.carService = carService;
    }
    TableRowExpansionDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableRowExpansionDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tablerowexpansiondemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableRowExpansionDemo);
    return TableRowExpansionDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablerowgroupdemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">RowGroup</span></span>\r\n        <span>It is easy to implement row grouping using the flexible template driven approach of the p-table. In this example, sorting\r\n            is enabled by default to sort the data by brand initially and then a rowGroupMetadata object is created to\r\n            represent how many rows a brand should span along with the rowIndex of the group. Similarly multiple field grouping can be implemented as well.\r\n        </span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Subheader</h3>\r\n    <p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Vin</th>\r\n                <th>Year</th>\r\n                <th>Color</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n            <tr class=\"ui-widget-header\" *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\">\r\n                <td colspan=\"3\">\r\n                    <span style=\"font-weight:bold\">{{rowData.brand}}</span>\r\n                </td>                \r\n            </tr>\r\n            <tr>\r\n                <td>{{rowData.vin}}</td>\r\n                <td>{{rowData.year}}</td>\r\n                <td>{{rowData.color}}</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Rowspan</h3>\r\n    <p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Brand</th>\r\n                <th>Vin</th>\r\n                <th>Year</th>\r\n                <th>Color</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n            <tr>\r\n                <td *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\" [attr.rowspan]=\"rowGroupMetadata[rowData.brand].size\">\r\n                    {{rowData.brand}}\r\n                </td>\r\n                <td>{{rowData.vin}}</td>\r\n                <td>{{rowData.year}}</td>\r\n                <td>{{rowData.color}}</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tablerowgroupdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablerowgroupdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableRowGroupDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    rowGroupMetadata: any;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsMedium().then(cars => &#123;\r\n            this.cars = cars;\r\n            this.updateRowGroupMetaData();\r\n        &#125;);\r\n    &#125;\r\n\r\n    onSort() &#123;\r\n        this.updateRowGroupMetaData();\r\n    &#125;\r\n\r\n    updateRowGroupMetaData() &#123;\r\n        this.rowGroupMetadata = &#123;&#125;;\r\n        if (this.cars) &#123;\r\n            for (let i = 0; i &lt; this.cars.length; i++) &#123;\r\n                let rowData = this.cars[i];\r\n                let brand = rowData.brand;\r\n                if (i == 0) &#123;\r\n                    this.rowGroupMetadata[brand] = &#123; index: 0, size: 1 &#125;;\r\n                &#125;\r\n                else &#123;\r\n                    let previousRowData = this.cars[i - 1];\r\n                    let previousRowGroup = previousRowData.brand;\r\n                    if (brand === previousRowGroup)\r\n                        this.rowGroupMetadata[brand].size++;\r\n                    else\r\n                        this.rowGroupMetadata[brand] = &#123; index: i, size: 1 &#125;;\r\n                &#125;\r\n            &#125;\r\n        &#125;\r\n    &#125;\r\n    \r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tablerowgroupdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablerowgroupdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Subheader&lt;/h3&gt;\r\n&lt;p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Vin&lt;/th&gt;\r\n            &lt;th&gt;Year&lt;/th&gt;\r\n            &lt;th&gt;Color&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\"&gt;\r\n        &lt;tr class=\"ui-widget-header\" *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\"&gt;\r\n            &lt;td colspan=\"3\"&gt;\r\n                &lt;span style=\"font-weight:bold\"&gt;&#123;&#123;rowData.brand&#125;&#125;&lt;/span&gt;\r\n            &lt;/td&gt;                \r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.vin&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.year&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.color&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Rowspan&lt;/h3&gt;\r\n&lt;p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\"&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Brand&lt;/th&gt;\r\n            &lt;th&gt;Vin&lt;/th&gt;\r\n            &lt;th&gt;Year&lt;/th&gt;\r\n            &lt;th&gt;Color&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\" [attr.rowspan]=\"rowGroupMetadata[rowData.brand].size\"&gt;\r\n                &#123;&#123;rowData.brand&#125;&#125;\r\n            &lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.vin&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.year&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;rowData.color&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablerowgroupdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableRowGroupDemo; });
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


var TableRowGroupDemo = (function () {
    function TableRowGroupDemo(carService) {
        this.carService = carService;
    }
    TableRowGroupDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) {
            _this.cars = cars;
            _this.updateRowGroupMetaData();
        });
    };
    TableRowGroupDemo.prototype.onSort = function () {
        this.updateRowGroupMetaData();
    };
    TableRowGroupDemo.prototype.updateRowGroupMetaData = function () {
        this.rowGroupMetadata = {};
        if (this.cars) {
            for (var i = 0; i < this.cars.length; i++) {
                var rowData = this.cars[i];
                var brand = rowData.brand;
                if (i == 0) {
                    this.rowGroupMetadata[brand] = { index: 0, size: 1 };
                }
                else {
                    var previousRowData = this.cars[i - 1];
                    var previousRowGroup = previousRowData.brand;
                    if (brand === previousRowGroup)
                        this.rowGroupMetadata[brand].size++;
                    else
                        this.rowGroupMetadata[brand] = { index: i, size: 1 };
                }
            }
        }
    };
    TableRowGroupDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tablerowgroupdemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableRowGroupDemo);
    return TableRowGroupDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablescrolldemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Scroll</span></span>\r\n        <span>Scrolling data is available horizontally, vertically or both. Optional virtual scrolling mode would be handy to deal with large datasets by loading data on demand during scrolling. \r\n            In additon certain columns and rows can be fixed as well.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Vertical</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars1\" [scrollable]=\"true\" scrollHeight=\"200px\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Virtual Scroll - 250K Rows</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"virtualCars\" [scrollable]=\"true\" [rows]=\"20\" scrollHeight=\"200px\" \r\n            [virtualScroll]=\"true\" (onLazyLoad)=\"loadDataOnScroll($event)\"\r\n            [lazy]=\"true\" [totalRecords]=\"totalRecords\" [loading]=\"loading\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Horizontal</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" [style]=\"{width:'500px'}\">\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n                <col *ngFor=\"let col of columns\" style=\"width:250px\">\r\n            </colgroup>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Horizontal and Vertical</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars3\" [scrollable]=\"true\" [style]=\"{width:'500px'}\" scrollHeight=\"200px\">\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n                <col *ngFor=\"let col of columns\" style=\"width:250px\">\r\n            </colgroup>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Frozen Rows</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars4\" [frozenValue]=\"frozenCars\" [scrollable]=\"true\" scrollHeight=\"200px\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"frozenrows\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    <b>{{rowData[col.field]}}</b>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Frozen Columns</h3>\r\n    <p-table [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [value]=\"cars5\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\">\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n                <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n            </colgroup>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Frozen Columns and Frozen Rows</h3>\r\n    <p-table [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [frozenValue]=\"frozenCars\" [value]=\"cars5\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\">\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n                <col *ngFor=\"let col of columns\" style=\"width:200px\">\r\n            </colgroup>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"frozenrows\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    <b>{{rowData[col.field]}}</b>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Frozen Column Groups</h3>\r\n    <p-table [value]=\"sales\" [scrollable]=\"true\" scrollHeight=\"150px\" frozenWidth=\"200px\">\r\n        <ng-template pTemplate=\"frozenheader\">\r\n            <tr>\r\n                <th style=\"width:200px;height:84px\">Brand</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"frozenbody\" let-sale>\r\n            <tr>\r\n                <td>{{sale.brand}}</td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th colspan=\"4\">Sale Rate</th>\r\n            </tr>\r\n            <tr>\r\n                <th colspan=\"2\">Sales</th>\r\n                <th colspan=\"2\">Profits</th>\r\n            </tr>\r\n            <tr>\r\n                <th>Last Year</th>\r\n                <th>This Year</th>\r\n                <th>Last Year</th>\r\n                <th>This Year</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-sale>\r\n            <tr>\r\n                <td>{{sale.lastYearSale}}</td>\r\n                <td>{{sale.thisYearSale}}</td>\r\n                <td>{{sale.lastYearProfit}}</td>\r\n                <td>{{sale.thisYearProfit}}</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tablescrolldemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablescrolldemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableScrollDemo implements OnInit &#123;\r\n\r\n    cars1: Car[];\r\n\r\n    cars2: Car[];\r\n\r\n    cars3: Car[];\r\n    \r\n    cars4: Car[];\r\n\r\n    cars5: Car[];\r\n\r\n    virtualCars: Car[];\r\n\r\n    totalRecords: number;\r\n\r\n    cols: any[];\r\n\r\n    frozenCars: Car[];\r\n\r\n    frozenCols: any[];\r\n\r\n    scrollableCols: any[];\r\n\r\n    sales: any[];\r\n\r\n    loading: boolean;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsMedium().then(cars => this.cars1 = cars);\r\n        this.carService.getCarsSmall().then(cars => this.cars2 = cars);\r\n        this.carService.getCarsMedium().then(cars => this.cars3 = cars);\r\n        this.carService.getCarsMedium().then(cars => this.cars4 = cars);\r\n        this.carService.getCarsMedium().then(cars => this.cars5 = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n\r\n        this.scrollableCols = [\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n\r\n        this.frozenCols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n        ];\r\n\r\n        this.frozenCars = [\r\n            &#123; \"brand\": \"BMW\", \"year\": 2013, \"color\": \"Grey\", \"vin\": \"fh2uf23\" &#125;,\r\n            &#123; \"brand\": \"Chevrolet\", \"year\": 2011, \"color\": \"Black\", \"vin\": \"4525g23\" &#125;\r\n        ];\r\n\r\n        this.sales = [\r\n            &#123; brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' &#125;,\r\n            &#123; brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' &#125;,\r\n            &#123; brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' &#125;,\r\n            &#123; brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' &#125;,\r\n            &#123; brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' &#125;,\r\n            &#123; brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' &#125;,\r\n            &#123; brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' &#125;,\r\n            &#123; brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' &#125;,\r\n            &#123; brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' &#125;,\r\n            &#123; brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' &#125;\r\n        ];\r\n\r\n        this.totalRecords = 250000;\r\n        this.loading = true;\r\n    &#125;\r\n\r\n    loadDataOnScroll(event: LazyLoadEvent) &#123;      \r\n        this.loading = true;\r\n\r\n        //for demo purposes keep loading the same dataset \r\n        //in a real production application, this data should come from server by building the query with LazyLoadEvent options \r\n        setTimeout(() => &#123;\r\n            this.virtualCars = [\r\n                &#123;\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": event.first&#125;,\r\n                &#123;\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": event.first + 1&#125;,\r\n                &#123;\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": event.first + 2&#125;,\r\n                &#123;\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": event.first + 3&#125;,\r\n                &#123;\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": event.first + 4&#125;,\r\n                &#123;\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": event.first + 5&#125;,\r\n                &#123;\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": event.first + 6&#125;,\r\n                &#123;\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": event.first + 7&#125;,\r\n                &#123;\"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": event.first + 8&#125;,\r\n                &#123;\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": event.first + 9&#125;,\r\n                &#123;\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": event.first + 10&#125;,\r\n                &#123;\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": event.first + 11&#125;,\r\n                &#123;\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": event.first + 12&#125;,\r\n                &#123;\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": event.first + 13&#125;,\r\n                &#123;\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": event.first + 14&#125;,\r\n                &#123;\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": event.first + 15&#125;,\r\n                &#123;\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": event.first + 16&#125;,\r\n                &#123;\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": event.first + 17&#125;,\r\n                &#123;\"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": event.first + 18&#125;,\r\n                &#123;\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": event.first + 19&#125;,\r\n                &#123;\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": event.first + 20&#125;,\r\n                &#123;\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": event.first + 21&#125;,\r\n                &#123;\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": event.first + 22&#125;,\r\n                &#123;\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": event.first + 23&#125;,\r\n                &#123;\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": event.first + 24&#125;,\r\n                &#123;\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": event.first + 25&#125;,\r\n                &#123;\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": event.first + 26&#125;,\r\n                &#123;\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": event.first + 27&#125;,\r\n                &#123;\"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": event.first + 28&#125;,\r\n                &#123;\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": event.first + 29&#125;,\r\n                &#123;\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": event.first + 30&#125;,\r\n                &#123;\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": event.first + 31&#125;,\r\n                &#123;\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": event.first + 32&#125;,\r\n                &#123;\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": event.first + 33&#125;,\r\n                &#123;\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": event.first + 34&#125;,\r\n                &#123;\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": event.first + 35&#125;,\r\n                &#123;\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": event.first + 36&#125;,\r\n                &#123;\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": event.first + 37&#125;,\r\n                &#123;\"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": event.first + 38&#125;,\r\n                &#123;\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": event.first + 39&#125;\r\n            ];  \r\n\r\n            this.loading = false;  \r\n        &#125;, 1000);   \r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tablescrolldemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablescrolldemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Vertical&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Virtual Scroll - 250K Rows&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"virtualCars\" [scrollable]=\"true\" [rows]=\"20\" scrollHeight=\"200px\" [virtualScroll]=\"true\" (onLazyLoad)=\"loadDataOnScroll($event)\"\r\n    [lazy]=\"true\" [totalRecords]=\"totalRecords\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Horizontal&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" [style]=\"&#123;width:'500px'&#125;\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" style=\"width:250px\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Horizontal and Vertical&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars3\" [scrollable]=\"true\" [style]=\"&#123;width:'500px'&#125;\" scrollHeight=\"200px\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" style=\"width:250px\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Frozen Rows&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars4\" [frozenValue]=\"frozenCars\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"frozenrows\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &lt;b&gt;&#123;&#123;rowData[col.field]&#125;&#125;&lt;/b&gt;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Frozen Columns&lt;/h3&gt;\r\n&lt;p-table [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [value]=\"cars5\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" style=\"width:200px\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Frozen Columns and Frozen Rows&lt;/h3&gt;\r\n&lt;p-table [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [frozenValue]=\"frozenCars\" [value]=\"cars5\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\"&gt;\r\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\r\n        &lt;colgroup&gt;\r\n            &lt;col *ngFor=\"let col of columns\" style=\"width:200px\"&gt;\r\n        &lt;/colgroup&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"frozenrows\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &lt;b&gt;&#123;&#123;rowData[col.field]&#125;&#125;&lt;/b&gt;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Frozen Column Groups&lt;/h3&gt;\r\n&lt;p-table [value]=\"sales\" [scrollable]=\"true\" scrollHeight=\"150px\" frozenWidth=\"200px\"&gt;\r\n    &lt;ng-template pTemplate=\"frozenheader\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th style=\"width:200px;height:84px\"&gt;Brand&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"frozenbody\" let-sale&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;&#123;&#123;sale.brand&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;th colspan=\"4\"&gt;Sale Rate&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;th colspan=\"2\"&gt;Sales&lt;/th&gt;\r\n            &lt;th colspan=\"2\"&gt;Profits&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n        &lt;tr&gt;\r\n            &lt;th&gt;Last Year&lt;/th&gt;\r\n            &lt;th&gt;This Year&lt;/th&gt;\r\n            &lt;th&gt;Last Year&lt;/th&gt;\r\n            &lt;th&gt;This Year&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-sale&gt;\r\n        &lt;tr&gt;\r\n            &lt;td&gt;&#123;&#123;sale.lastYearSale&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;sale.thisYearSale&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;sale.lastYearProfit&#125;&#125;&lt;/td&gt;\r\n            &lt;td&gt;&#123;&#123;sale.thisYearProfit&#125;&#125;&lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablescrolldemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableScrollDemo; });
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


var TableScrollDemo = (function () {
    function TableScrollDemo(carService) {
        this.carService = carService;
    }
    TableScrollDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars1 = cars; });
        this.carService.getCarsSmall().then(function (cars) { return _this.cars2 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars3 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars4 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars5 = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.scrollableCols = [
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.frozenCols = [
            { field: 'vin', header: 'Vin' },
        ];
        this.frozenCars = [
            { "brand": "BMW", "year": 2013, "color": "Grey", "vin": "fh2uf23" },
            { "brand": "Chevrolet", "year": 2011, "color": "Black", "vin": "4525g23" }
        ];
        this.sales = [
            { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
            { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
        ];
        this.totalRecords = 250000;
        this.loading = true;
    };
    TableScrollDemo.prototype.loadDataOnScroll = function (event) {
        var _this = this;
        this.loading = true;
        //for demo purposes keep loading the same dataset 
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options 
        setTimeout(function () {
            _this.virtualCars = [
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": event.first },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": event.first + 1 },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": event.first + 2 },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": event.first + 3 },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": event.first + 4 },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": event.first + 5 },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": event.first + 6 },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": event.first + 7 },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": event.first + 8 },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": event.first + 9 },
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": event.first + 10 },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": event.first + 11 },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": event.first + 12 },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": event.first + 13 },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": event.first + 14 },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": event.first + 15 },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": event.first + 16 },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": event.first + 17 },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": event.first + 18 },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": event.first + 19 },
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": event.first + 20 },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": event.first + 21 },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": event.first + 22 },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": event.first + 23 },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": event.first + 24 },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": event.first + 25 },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": event.first + 26 },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": event.first + 27 },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": event.first + 28 },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": event.first + 29 },
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": event.first + 30 },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": event.first + 31 },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": event.first + 32 },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": event.first + 33 },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": event.first + 34 },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": event.first + 35 },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": event.first + 36 },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": event.first + 37 },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": event.first + 38 },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": event.first + 39 }
            ];
            _this.loading = false;
        }, 1000);
    };
    TableScrollDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tablescrolldemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableScrollDemo);
    return TableScrollDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablesectionsdemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Sections</span></span>\r\n        <span>Table provides templates to customize the content of various sections such as caption and summary.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-table [columns]=\"cols\" [value]=\"cars\">\r\n        <ng-template pTemplate=\"caption\">\r\n            List of Cars\r\n        </ng-template>\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"footer\" let-columns>\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"summary\">\r\n            There are {{cars?.length}} cars\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tablesectionsdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablesectionsdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableSectionsDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tablesectionsdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablesectionsdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\r\n    &lt;ng-template pTemplate=\"caption\"&gt;\r\n        List of Cars\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"footer\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"summary\"&gt;\r\n        There are &#123;&#123;cars?.length&#125;&#125; cars\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablesectionsdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableSectionsDemo; });
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


var TableSectionsDemo = (function () {
    function TableSectionsDemo(carService) {
        this.carService = carService;
    }
    TableSectionsDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableSectionsDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tablesectionsdemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableSectionsDemo);
    return TableSectionsDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tableselectiondemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Selection</span></span>\r\n        <span>Single or Multiple rows can be selected depending on the selectionMode property.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n    <h3 class=\"first\">Single Row Selection</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar1\" dataKey=\"vin\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"summary\">\r\n            <div style=\"text-align: left\">\r\n                Selected Car: {{selectedCar1 ? selectedCar1.vin + ' - ' + selectedCar1.brand + ' - ' + selectedCar1.year + ' - ' + selectedCar1.color: 'none'}}\r\n            </div>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Multiple Row Selection</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars1\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"summary\">\r\n            <ul>\r\n                <li *ngFor=\"let car of selectedCars1\" style=\"text-align: left\">\r\n                    {{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}\r\n                </li>\r\n            </ul>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Column Selection</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n                <th style=\"width:3em\"></th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n                <td>\r\n                    <button pButton icon=\"fa-search\" (click)=\"selectCarWithButton(rowData)\"></button>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Events</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar3\" dataKey=\"vin\"\r\n        (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>RadioButton</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCar4\" dataKey=\"vin\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th style=\"width: 2.25em\"></th>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td>\r\n                    <p-tableRadioButton [value]=\"rowData\"></p-tableRadioButton>\r\n                </td>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"summary\">\r\n                <div style=\"text-align: left\">\r\n                    Selected Car: {{selectedCar4 ? selectedCar4.vin + ' - ' + selectedCar4.brand + ' - ' + selectedCar4.year + ' - ' + selectedCar4.color: 'none'}}\r\n                </div>\r\n            </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Checkbox Selection</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCars2\" dataKey=\"vin\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th style=\"width: 2.25em\">\r\n                    <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\r\n                </th>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr [pSelectableRow]=\"rowData\">\r\n                <td>\r\n                    <p-tableCheckbox [value]=\"rowData\"></p-tableCheckbox>\r\n                </td>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]}}\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"summary\">\r\n            <ul>\r\n                <li *ngFor=\"let car of selectedCars2\" style=\"text-align: left\">\r\n                    {{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}\r\n                </li>\r\n            </ul>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tableselectiondemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableselectiondemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableSelectionDemo implements OnInit &#123;\r\n\r\n    msgs: Message[] = [];\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    selectedCar1: Car;\r\n\r\n    selectedCar2: Car;\r\n\r\n    selectedCar3: Car;\r\n\r\n    selectedCar4: Car;\r\n\r\n    selectedCars1: Car[];\r\n\r\n    selectedCars2: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n    &#125;\r\n\r\n    selectCarWithButton(car: Car) &#123;\r\n        this.selectedCar2 = car;\r\n        this.msgs = [&#123;severity:'info', summary:'Car Selected', detail:'Vin: ' + car.vin&#125;];\r\n    &#125;\r\n\r\n    onRowSelect(event) &#123;\r\n        this.msgs = [&#123;severity:'info', summary:'Car Selected', detail:'Vin: ' + event.data.vin&#125;];\r\n    &#125;\r\n\r\n    onRowUnselect(event) &#123;\r\n        this.msgs = [&#123;severity:'info', summary:'Car Unselected', detail:'Vin: ' + event.data.vin&#125;];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tableselectiondemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableselectiondemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [(value)]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Single Row Selection&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar1\" dataKey=\"vin\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"summary\"&gt;\r\n        &lt;div style=\"text-align: left\"&gt;\r\n            Selected Car: &#123;&#123;selectedCar1 ? selectedCar.vin + ' - ' + selectedCar1.brand + ' - ' + selectedCar1.year + ' - ' + selectedCar1.color: 'none'&#125;&#125;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Multiple Row Selection&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars1\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\"&gt;\r\n        &lt;tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\"&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"summary\"&gt;\r\n        &lt;ul&gt;\r\n            &lt;li *ngFor=\"let car of selectedCars1\" style=\"text-align: left\"&gt;\r\n                &#123;&#123;car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color&#125;&#125;\r\n            &lt;/li&gt;\r\n        &lt;/ul&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Column Selection&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n            &lt;th style=\"width:3em\"&gt;&lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n            &lt;td&gt;\r\n                &lt;button pButton icon=\"fa-search\" (click)=\"selectCarWithButton(rowData)\"&gt;&lt;/button&gt;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Events&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar3\" dataKey=\"vin\"\r\n    (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;RadioButton&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCar4\" dataKey=\"vin\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th style=\"width: 2.25em\"&gt;&lt;/th&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\r\n            &lt;td&gt;\r\n                &lt;p-tableRadioButton [value]=\"rowData\"&gt;&lt;/p-tableRadioButton&gt;\r\n            &lt;/td&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"summary\"&gt;\r\n            &lt;div style=\"text-align: left\"&gt;\r\n                Selected Car: &#123;&#123;selectedCar4 ? selectedCar4.vin + ' - ' + selectedCar4.brand + ' - ' + selectedCar4.year + ' - ' + selectedCar4.color: 'none'&#125;&#125;\r\n            &lt;/div&gt;\r\n        &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Checkbox Selection&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCars2\" dataKey=\"vin\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th style=\"width: 2.25em\"&gt;\r\n                &lt;p-tableHeaderCheckbox&gt;&lt;/p-tableHeaderCheckbox&gt;\r\n            &lt;/th&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\r\n            &lt;td&gt;\r\n                &lt;p-tableCheckbox [value]=\"rowData\"&gt;&lt;/p-tableCheckbox&gt;\r\n            &lt;/td&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"summary\"&gt;\r\n        &lt;ul&gt;\r\n            &lt;li *ngFor=\"let car of selectedCars2\" style=\"text-align: left\"&gt;\r\n                &#123;&#123;car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color&#125;&#125;\r\n            &lt;/li&gt;\r\n        &lt;/ul&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tableselectiondemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableSelectionDemo; });
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


var TableSelectionDemo = (function () {
    function TableSelectionDemo(carService) {
        this.carService = carService;
        this.msgs = [];
    }
    TableSelectionDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableSelectionDemo.prototype.selectCarWithButton = function (car) {
        this.selectedCar2 = car;
        this.msgs = [{ severity: 'info', summary: 'Car Selected', detail: 'Vin: ' + car.vin }];
    };
    TableSelectionDemo.prototype.onRowSelect = function (event) {
        this.msgs = [{ severity: 'info', summary: 'Car Selected', detail: 'Vin: ' + event.data.vin }];
    };
    TableSelectionDemo.prototype.onRowUnselect = function (event) {
        this.msgs = [{ severity: 'info', summary: 'Car Unselected', detail: 'Vin: ' + event.data.vin }];
    };
    TableSelectionDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tableselectiondemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableSelectionDemo);
    return TableSelectionDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablesortdemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Sort</span></span>\r\n        <span>Table supports both single column and multiple column sorting.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Single Sort</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars1\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n                    {{col.header}}\r\n                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]&#125;&#125;\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Multi Sort with MetaKey</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars2\" sortMode=\"multiple\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n                    {{col.header}}\r\n                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    &#123;&#123;rowData[col.field]&#125;&#125;\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n    <h3>Custom Sort</h3>\r\n    <p-table [columns]=\"cols\" [value]=\"cars3\" (sortFunction)=\"customSort($event)\" [customSort]=\"true\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n                    {{col.header}}\r\n                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{rowData[col.field]&#125;&#125;\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tablesortdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablesortdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TableSortDemo implements OnInit &#123;\r\n\r\n    cars1: Car[];\r\n\r\n    cars2: Car[];\r\n\r\n    cars3: Car[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars1 = cars);\r\n        this.carService.getCarsSmall().then(cars => this.cars2 = cars);\r\n        this.carService.getCarsSmall().then(cars => this.cars3 = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n    &#125;\r\n\r\n    customSort(event: SortEvent) &#123;\r\n        event.data.sort((data1, data2) => &#123;\r\n            let value1 = data1[event.field];\r\n            let value2 = data2[event.field];\r\n            let result = null;\r\n\r\n            if (value1 == null && value2 != null)\r\n                result = -1;\r\n            else if (value1 != null && value2 == null)\r\n                result = 1;\r\n            else if (value1 == null && value2 == null)\r\n                result = 0;\r\n            else if (typeof value1 === 'string' && typeof value2 === 'string')\r\n                result = value1.localeCompare(value2);\r\n            else\r\n                result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;\r\n\r\n            return (event.order * result);\r\n        &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tablesortdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablesortdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Single Sort&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Multi Sort with MetaKey&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars2\" sortMode=\"multiple\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n\r\n&lt;h3&gt;Custom Sort&lt;/h3&gt;\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars3\" (sortFunction)=\"customSort($event)\" [customSort]=\"true\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr&gt;\r\n            &lt;td *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablesortdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableSortDemo; });
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


var TableSortDemo = (function () {
    function TableSortDemo(carService) {
        this.carService = carService;
    }
    TableSortDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars1 = cars; });
        this.carService.getCarsSmall().then(function (cars) { return _this.cars2 = cars; });
        this.carService.getCarsSmall().then(function (cars) { return _this.cars3 = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableSortDemo.prototype.customSort = function (event) {
        event.data.sort(function (data1, data2) {
            var value1 = data1[event.field];
            var value2 = data2[event.field];
            var result = null;
            if (value1 == null && value2 != null)
                result = -1;
            else if (value1 != null && value2 == null)
                result = 1;
            else if (value1 == null && value2 == null)
                result = 0;
            else if (typeof value1 === 'string' && typeof value2 === 'string')
                result = value1.localeCompare(value2);
            else
                result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
            return (event.order * result);
        });
    };
    TableSortDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tablesortdemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableSortDemo);
    return TableSortDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablestyledemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Style</span></span>\r\n        <span>Certain rows or cell can easily be styled based on conditions.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-table [columns]=\"cols\" [value]=\"cars\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    &#123;&#123;col.header&#125;&#125;\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n            <tr [ngClass]=\"rowData.year > 2010 ? 'new-car' : null\">\r\n                <td *ngFor=\"let col of columns\" [ngClass]=\"rowData[col.field] <= 2010 ? 'old-car' : null\">\r\n                    &#123;&#123;rowData[col.field]&#125;&#125;\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"tablestyledemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablestyledemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Component(&#123;\r\n    templateUrl: './tablestyledemo.html',\r\n    styles: [`\r\n        .old-car &#123;\r\n            background-color: #1CA979 !important;\r\n            color: #ffffff !important;\r\n        &#125;\r\n\r\n        .very-old-car &#123;\r\n            background-color: #2CA8B1 !important;\r\n            color: #ffffff !important;\r\n        &#125;\r\n    `\r\n    ]\r\n&#125;)\r\nexport class TableStyleDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n\r\n        this.cols = [\r\n            &#123; field: 'vin', header: 'Vin' &#125;,\r\n            &#123; field: 'year', header: 'Year' &#125;,\r\n            &#123; field: 'brand', header: 'Brand' &#125;,\r\n            &#123; field: 'color', header: 'Color' &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"tablestyledemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablestyledemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\r\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\r\n        &lt;tr&gt;\r\n            &lt;th *ngFor=\"let col of columns\"&gt;\r\n                &#123;&#123;col.header&#125;&#125;\r\n            &lt;/th&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\r\n        &lt;tr [ngClass]=\"rowData.year &gt; 2010 ? 'new-car' : null\"&gt;\r\n            &lt;td *ngFor=\"let col of columns\" [ngClass]=\"rowData[col.field] &lt;= 2010 ? 'old-car' : null\"&gt;\r\n                &#123;&#123;rowData[col.field]&#125;&#125;\r\n            &lt;/td&gt;\r\n        &lt;/tr&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-table&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablestyledemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableStyleDemo; });
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


var TableStyleDemo = (function () {
    function TableStyleDemo(carService) {
        this.carService = carService;
    }
    TableStyleDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableStyleDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/table/tablestyledemo.html"),
            styles: ["\n        .new-car {\n            background-color: #1CA979 !important;\n            color: #ffffff !important;\n        }\n\n        .old-car {\n            background-color: #2CA8B1 !important;\n            color: #ffffff !important;\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableStyleDemo);
    return TableStyleDemo;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/table/tablesubmenu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableSubmenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TableSubmenu = (function () {
    function TableSubmenu() {
    }
    TableSubmenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'table-submenu',
            template: "\n        <div class=\"content-section content-submenu ui-helper-clearfix\">\n            <ul>\n                <li><a [routerLink]=\"['/table']\">&#9679; Documentation</a></li>\n                <li><a [routerLink]=\"['/table/sections']\">&#9679; Sections</a></li>\n                <li><a [routerLink]=\"['/table/page']\">&#9679; Page</a></li>\n                <li><a [routerLink]=\"['/table/sort']\">&#9679; Sort</a></li>\n                <li><a [routerLink]=\"['/table/selection']\">&#9679; Selection</a></li>\n                <li><a [routerLink]=\"['/table/filter']\">&#9679; Filter</a></li>\n                <li><a [routerLink]=\"['/table/colgroup']\">&#9679; ColGroup</a></li>\n                <li><a [routerLink]=\"['/table/lazy']\">&#9679; Lazy</a></li>\n                <li><a [routerLink]=\"['/table/edit']\">&#9679; Edit</a></li>\n                <li><a [routerLink]=\"['/table/scroll']\">&#9679; Scroll</a></li>\n                <li><a [routerLink]=\"['/table/rowexpansion']\">&#9679; RowExpand</a></li>\n                <li><a [routerLink]=\"['/table/rowgroup']\">&#9679; RowGroup</a></li>\n                <li><a [routerLink]=\"['/table/colresize']\">&#9679; Resize</a></li>\n                <li><a [routerLink]=\"['/table/colreorder']\">&#9679; Reorder</a></li>\n                <li><a [routerLink]=\"['/table/coltoggle']\">&#9679; Toggle</a></li>\n                <li><a [routerLink]=\"['/table/style']\">&#9679; Style</a></li>\n                <li><a [routerLink]=\"['/table/export']\">&#9679; Export</a></li>\n                <li><a [routerLink]=\"['/table/contextmenu']\">&#9679; ContextMenu</a></li>\n                <li><a [routerLink]=\"['/table/responsive']\">&#9679; Responsive</a></li>\n                <li><a [routerLink]=\"['/table/crud']\">&#9679; Crud</a></li>\n                <li><a [routerLink]=\"['/table/ellipsis']\">&#9679; Ellipsis</a></li>\n            </ul>\n        </div>\n    "
        })
    ], TableSubmenu);
    return TableSubmenu;
}());



/***/ })

});
//# sourceMappingURL=tabledemo.module.chunk.js.map