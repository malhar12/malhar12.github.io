webpackJsonp(["treetabledemo.module"],{

/***/ "../../../../../src/app/components/treetable/treetable.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UITreeRow */
/* unused harmony export TreeTable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeTableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_shared__ = __webpack_require__("../../../../../src/app/components/common/shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__ = __webpack_require__("../../../../../src/app/components/dom/domhandler.ts");
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





var UITreeRow = (function () {
    function UITreeRow(treeTable) {
        this.treeTable = treeTable;
        this.level = 0;
        this.labelExpand = "Expand";
        this.labelCollapse = "Collapse";
    }
    UITreeRow.prototype.ngOnInit = function () {
        this.node.parent = this.parentNode;
    };
    UITreeRow.prototype.toggle = function (event) {
        if (this.node.expanded)
            this.treeTable.onNodeCollapse.emit({ originalEvent: event, node: this.node });
        else
            this.treeTable.onNodeExpand.emit({ originalEvent: event, node: this.node });
        this.node.expanded = !this.node.expanded;
        event.preventDefault();
    };
    UITreeRow.prototype.isLeaf = function () {
        return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    };
    UITreeRow.prototype.isSelected = function () {
        return this.treeTable.isSelected(this.node);
    };
    UITreeRow.prototype.onRowClick = function (event) {
        this.treeTable.onRowClick(event, this.node);
    };
    UITreeRow.prototype.onRowRightClick = function (event) {
        this.treeTable.onRowRightClick(event, this.node);
    };
    UITreeRow.prototype.rowDblClick = function (event) {
        this.treeTable.onRowDblclick.emit({ originalEvent: event, node: this.node });
    };
    UITreeRow.prototype.onRowTouchEnd = function () {
        this.treeTable.onRowTouchEnd();
    };
    UITreeRow.prototype.resolveFieldData = function (data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                var fields = field.split('.');
                var value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], UITreeRow.prototype, "node", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], UITreeRow.prototype, "parentNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], UITreeRow.prototype, "level", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], UITreeRow.prototype, "labelExpand", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], UITreeRow.prototype, "labelCollapse", void 0);
    UITreeRow = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[pTreeRow]',
            template: "\n        <div [class]=\"node.styleClass\" [ngClass]=\"{'ui-treetable-row': true, 'ui-state-highlight':isSelected(),'ui-treetable-row-selectable':treeTable.selectionMode && node.selectable !== false}\">\n            <td *ngFor=\"let col of treeTable.columns; let i=index\" [ngStyle]=\"col.bodyStyle||col.style\" [class]=\"col.bodyStyleClass||col.styleClass\" (click)=\"onRowClick($event)\" (dblclick)=\"rowDblClick($event)\" (touchend)=\"onRowTouchEnd()\" (contextmenu)=\"onRowRightClick($event)\">\n                <a href=\"#\" *ngIf=\"i == treeTable.toggleColumnIndex\" class=\"ui-treetable-toggler fa fa-fw ui-clickable\" [ngClass]=\"node.expanded ? treeTable.expandedIcon : treeTable.collapsedIcon\"\n                    [ngStyle]=\"{'margin-left':level*16 + 'px','visibility': isLeaf() ? 'hidden' : 'visible'}\"\n                    (click)=\"toggle($event)\"\n                    [title]=\"node.expanded ? labelCollapse : labelExpand\">\n                </a>\n                <div class=\"ui-chkbox ui-treetable-checkbox\" *ngIf=\"treeTable.selectionMode == 'checkbox' && i==0\"><div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\">\n                    <span class=\"ui-chkbox-icon ui-clickable fa\" \n                        [ngClass]=\"{'fa-check':isSelected(),'fa-minus':node.partialSelected}\"></span></div></div\n                ><span *ngIf=\"!col.template\">{{resolveFieldData(node.data,col.field)}}</span>\n                <ng-container *ngTemplateOutlet=\"col.template; context: {$implicit: col, rowData: node}\"></ng-container>\n            </td>\n        </div>\n        <div *ngIf=\"node.children && node.expanded\" class=\"ui-treetable-row\" style=\"display:table-row\">\n            <td [attr.colspan]=\"treeTable.columns.length\" class=\"ui-treetable-child-table-container\">\n                <table [class]=\"treeTable.tableStyleClass\" [ngStyle]=\"treeTable.tableStyle\">\n                    <tbody pTreeRow *ngFor=\"let childNode of node.children\" [node]=\"childNode\" [level]=\"level+1\" [labelExpand]=\"labelExpand\" [labelCollapse]=\"labelCollapse\" [parentNode]=\"node\"></tbody>\n                </table>\n            </td>\n        </div>\n    "
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* forwardRef */])(function () { return TreeTable; }))),
        __metadata("design:paramtypes", [TreeTable])
    ], UITreeRow);
    return UITreeRow;
}());

var TreeTable = (function () {
    function TreeTable(el, domHandler, changeDetector, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.changeDetector = changeDetector;
        this.renderer = renderer;
        this.labelExpand = "Expand";
        this.labelCollapse = "Collapse";
        this.metaKeySelection = true;
        this.toggleColumnIndex = 0;
        this.collapsedIcon = "fa-caret-right";
        this.expandedIcon = "fa-caret-down";
        this.onRowDblclick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.selectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onNodeSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onNodeUnselect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onNodeExpand = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onNodeCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onContextMenuSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    TreeTable.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.initColumns();
        this.columnsSubscription = this.cols.changes.subscribe(function (_) {
            _this.initColumns();
            _this.changeDetector.markForCheck();
        });
    };
    TreeTable.prototype.initColumns = function () {
        this.columns = this.cols.toArray();
    };
    TreeTable.prototype.onRowClick = function (event, node) {
        var eventTarget = event.target;
        if (eventTarget.className && eventTarget.className.indexOf('ui-treetable-toggler') === 0) {
            return;
        }
        else if (this.selectionMode) {
            if (node.selectable === false) {
                return;
            }
            var metaSelection = this.rowTouched ? false : this.metaKeySelection;
            var index_1 = this.findIndexInSelection(node);
            var selected = (index_1 >= 0);
            if (this.isCheckboxSelectionMode()) {
                if (selected) {
                    this.propagateSelectionDown(node, false);
                    if (node.parent) {
                        this.propagateSelectionUp(node.parent, false);
                    }
                    this.selectionChange.emit(this.selection);
                    this.onNodeUnselect.emit({ originalEvent: event, node: node });
                }
                else {
                    this.propagateSelectionDown(node, true);
                    if (node.parent) {
                        this.propagateSelectionUp(node.parent, true);
                    }
                    this.selectionChange.emit(this.selection);
                    this.onNodeSelect.emit({ originalEvent: event, node: node });
                }
            }
            else {
                if (metaSelection) {
                    var metaKey = (event.metaKey || event.ctrlKey);
                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            this.selectionChange.emit(null);
                        }
                        else {
                            this.selection = this.selection.filter(function (val, i) { return i != index_1; });
                            this.selectionChange.emit(this.selection);
                        }
                        this.onNodeUnselect.emit({ originalEvent: event, node: node });
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            this.selectionChange.emit(node);
                        }
                        else if (this.isMultipleSelectionMode()) {
                            this.selection = (!metaKey) ? [] : this.selection || [];
                            this.selection = this.selection.concat([node]);
                            this.selectionChange.emit(this.selection);
                        }
                        this.onNodeSelect.emit({ originalEvent: event, node: node });
                    }
                }
                else {
                    if (this.isSingleSelectionMode()) {
                        if (selected) {
                            this.selection = null;
                            this.onNodeUnselect.emit({ originalEvent: event, node: node });
                        }
                        else {
                            this.selection = node;
                            this.onNodeSelect.emit({ originalEvent: event, node: node });
                        }
                    }
                    else {
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
            }
        }
        this.rowTouched = false;
    };
    TreeTable.prototype.onRowTouchEnd = function () {
        this.rowTouched = true;
    };
    TreeTable.prototype.onRowRightClick = function (event, node) {
        if (this.contextMenu) {
            var index = this.findIndexInSelection(node);
            var selected = (index >= 0);
            if (!selected) {
                if (this.isSingleSelectionMode()) {
                    this.selection = node;
                }
                else if (this.isMultipleSelectionMode()) {
                    this.selection = [node];
                    this.selectionChange.emit(this.selection);
                }
                this.selectionChange.emit(this.selection);
            }
            this.contextMenu.show(event);
            this.onContextMenuSelect.emit({ originalEvent: event, node: node });
        }
    };
    TreeTable.prototype.findIndexInSelection = function (node) {
        var index = -1;
        if (this.selectionMode && this.selection) {
            if (this.isSingleSelectionMode()) {
                index = (this.selection == node) ? 0 : -1;
            }
            else {
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
    TreeTable.prototype.propagateSelectionUp = function (node, select) {
        if (node.children && node.children.length) {
            var selectedCount = 0;
            var childPartialSelected = false;
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (this.isSelected(child)) {
                    selectedCount++;
                }
                else if (child.partialSelected) {
                    childPartialSelected = true;
                }
            }
            if (select && selectedCount == node.children.length) {
                this.selection = (this.selection || []).concat([node]);
                node.partialSelected = false;
            }
            else {
                if (!select) {
                    var index_2 = this.findIndexInSelection(node);
                    if (index_2 >= 0) {
                        this.selection = this.selection.filter(function (val, i) { return i != index_2; });
                    }
                }
                if (childPartialSelected || selectedCount > 0 && selectedCount != node.children.length)
                    node.partialSelected = true;
                else
                    node.partialSelected = false;
            }
        }
        var parent = node.parent;
        if (parent) {
            this.propagateSelectionUp(parent, select);
        }
    };
    TreeTable.prototype.propagateSelectionDown = function (node, select) {
        var index = this.findIndexInSelection(node);
        if (select && index == -1) {
            this.selection = (this.selection || []).concat([node]);
        }
        else if (!select && index > -1) {
            this.selection = this.selection.filter(function (val, i) { return i != index; });
        }
        node.partialSelected = false;
        if (node.children && node.children.length) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this.propagateSelectionDown(child, select);
            }
        }
    };
    TreeTable.prototype.isSelected = function (node) {
        return this.findIndexInSelection(node) != -1;
    };
    TreeTable.prototype.isSingleSelectionMode = function () {
        return this.selectionMode && this.selectionMode == 'single';
    };
    TreeTable.prototype.isMultipleSelectionMode = function () {
        return this.selectionMode && this.selectionMode == 'multiple';
    };
    TreeTable.prototype.isCheckboxSelectionMode = function () {
        return this.selectionMode && this.selectionMode == 'checkbox';
    };
    TreeTable.prototype.hasFooter = function () {
        if (this.columns) {
            var columnsArr = this.cols.toArray();
            for (var i = 0; i < columnsArr.length; i++) {
                if (columnsArr[i].footer) {
                    return true;
                }
            }
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], TreeTable.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TreeTable.prototype, "selectionMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TreeTable.prototype, "selection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TreeTable.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TreeTable.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TreeTable.prototype, "labelExpand", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TreeTable.prototype, "labelCollapse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TreeTable.prototype, "metaKeySelection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TreeTable.prototype, "contextMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], TreeTable.prototype, "toggleColumnIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TreeTable.prototype, "tableStyle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TreeTable.prototype, "tableStyleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TreeTable.prototype, "collapsedIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TreeTable.prototype, "expandedIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], TreeTable.prototype, "onRowDblclick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], TreeTable.prototype, "selectionChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], TreeTable.prototype, "onNodeSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], TreeTable.prototype, "onNodeUnselect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], TreeTable.prototype, "onNodeExpand", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], TreeTable.prototype, "onNodeCollapse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], TreeTable.prototype, "onContextMenuSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_2__common_shared__["d" /* Header */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__common_shared__["d" /* Header */])
    ], TreeTable.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_2__common_shared__["b" /* Footer */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__common_shared__["b" /* Footer */])
    ], TreeTable.prototype, "footer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__common_shared__["a" /* Column */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* QueryList */])
    ], TreeTable.prototype, "cols", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('tbl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], TreeTable.prototype, "tableViewChild", void 0);
    TreeTable = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-treeTable',
            template: "\n        <div [ngClass]=\"'ui-treetable ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-treetable-header ui-widget-header\" *ngIf=\"header\">\n                <ng-content select=\"p-header\"></ng-content>\n            </div>\n            <div class=\"ui-treetable-tablewrapper\">\n                <table #tbl class=\"ui-widget-content\" [class]=\"tableStyleClass\" [ngStyle]=\"tableStyle\">\n                    <thead>\n                        <tr class=\"ui-state-default\">\n                            <th #headerCell *ngFor=\"let col of columns; let lastCol=last \"  [ngStyle]=\"col.headerStyle||col.style\" [class]=\"col.headerStyleClass||col.styleClass\" \n                                [ngClass]=\"'ui-state-default ui-unselectable-text'\">\n                                <span class=\"ui-column-title\" *ngIf=\"!col.headerTemplate\">{{col.header}}</span>\n                                <span class=\"ui-column-title\" *ngIf=\"col.headerTemplate\">\n                                    <ng-container *ngTemplateOutlet=\"col.headerTemplate; context: {$implicit: col}\"></ng-container>\n                                </span>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tfoot *ngIf=\"hasFooter()\">\n                        <tr>\n                            <td *ngFor=\"let col of columns\" [ngStyle]=\"col.footerStyle||col.style\" [class]=\"col.footerStyleClass||col.styleClass\" [ngClass]=\"{'ui-state-default':true}\">\n                                <span class=\"ui-column-footer\" *ngIf=\"!col.footerTemplate\">{{col.footer}}</span>\n                                <span class=\"ui-column-footer\" *ngIf=\"col.footerTemplate\">\n                                    <ng-container *ngTemplateOutlet=\"col.headerTemplate; context: {$implicit: col}\"></ng-container>\n                                </span>\n                            </td>\n                        </tr>\n                    </tfoot>\n                    <tbody pTreeRow *ngFor=\"let node of value\" class=\"ui-treetable-data ui-widget-content\" [node]=\"node\" [level]=\"0\" [labelExpand]=\"labelExpand\" [labelCollapse]=\"labelCollapse\"></tbody>\n                </table>\n            </div>\n            \n            <div class=\"ui-treetable-footer ui-widget-header\" *ngIf=\"footer\">\n                <ng-content select=\"p-footer\"></ng-content>\n            </div>\n        </div>\n    ",
            providers: [__WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */]])
    ], TreeTable);
    return TreeTable;
}());

var TreeTableModule = (function () {
    function TreeTableModule() {
    }
    TreeTableModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [TreeTable, __WEBPACK_IMPORTED_MODULE_2__common_shared__["g" /* SharedModule */]],
            declarations: [TreeTable, UITreeRow]
        })
    ], TreeTableModule);
    return TreeTableModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/treetable/treetabledemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeTableDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__treetabledemo__ = __webpack_require__("../../../../../src/app/showcase/components/treetable/treetabledemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TreeTableDemoRoutingModule = (function () {
    function TreeTableDemoRoutingModule() {
    }
    TreeTableDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__treetabledemo__["a" /* TreeTableDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], TreeTableDemoRoutingModule);
    return TreeTableDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/treetable/treetabledemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">TreeTable</span>\r\n        <span>TreeTable is used to display hierarchical data in tabular format..</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [value]=\"msgs\"></p-growl>\r\n    \r\n    <p-treeTable [value]=\"files1\">\r\n        <p-header>Basic</p-header>\r\n        <p-column field=\"name\" header=\"Name\"></p-column>\r\n        <p-column field=\"size\" header=\"Size\"></p-column>\r\n        <p-column field=\"type\" header=\"Type\"></p-column>\r\n    </p-treeTable>\r\n        \r\n    <p-treeTable [value]=\"files2\" selectionMode=\"single\" [(selection)]=\"selectedFile\"\r\n        (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\" [style]=\"{'margin-top':'50px'}\">\r\n        <p-header>Single Selection</p-header>\r\n        <p-column field=\"name\" header=\"Name\"></p-column>\r\n        <p-column field=\"size\" header=\"Size\"></p-column>\r\n        <p-column field=\"type\" header=\"Type\"></p-column>\r\n    </p-treeTable>\r\n    <p>Selected Node: {{selectedFile ? selectedFile.data.name : 'none'}}</p>\r\n        \r\n    <p-treeTable [value]=\"files3\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\"\r\n        (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\" [style]=\"{'margin-top':'50px'}\">\r\n        <p-header>Multiple Selection with MetaKey</p-header>\r\n        <p-column field=\"name\" header=\"Name\"></p-column>\r\n        <p-column field=\"size\" header=\"Size\"></p-column>\r\n        <p-column field=\"type\" header=\"Type\"></p-column>\r\n    </p-treeTable>\r\n    <p>Selected Nodes: <span *ngFor=\"let file of selectedFiles\">{{file.data.name}} </span></p>\r\n    \r\n    <p-treeTable [value]=\"files4\" selectionMode=\"checkbox\" [(selection)]=\"selectedFiles2\" [style]=\"{'margin-top':'50px'}\">\r\n        <p-header>Checkbox Selection</p-header>\r\n        <p-column field=\"name\" header=\"Name\"></p-column>\r\n        <p-column field=\"size\" header=\"Size\"></p-column>\r\n        <p-column field=\"type\" header=\"Type\"></p-column>\r\n    </p-treeTable>\r\n    <p>Selected Nodes: <span *ngFor=\"let file of selectedFiles2\">{{file.data.name}} </span></p>\r\n    \r\n    <p-treeTable [value]=\"files5\" [style]=\"{'margin-top':'50px'}\">\r\n        <p-header>Editable Cells with Templating</p-header>\r\n        <p-column field=\"name\" header=\"Name\">\r\n            <ng-template let-node=\"rowData\" pTemplate=\"body\">\r\n                <input type=\"text\" [(ngModel)]=\"node.data.name\" style=\"width:100%;border-width:0px 0px 1px 0px\">\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"size\" header=\"Size\">\r\n            <ng-template let-node=\"rowData\" pTemplate=\"body\">\r\n                <input type=\"text\" [(ngModel)]=\"node.data.size\" style=\"width:100%;border-width:0px 0px 1px 0px\">\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"type\" header=\"Type\">\r\n            <ng-template let-node=\"rowData\" pTemplate=\"body\">\r\n                <input type=\"text\" [(ngModel)]=\"node.data.type\" style=\"width:100%;border-width:0px 0px 1px 0px\">\r\n            </ng-template>\r\n        </p-column>\r\n    </p-treeTable>\r\n    \r\n    <p-treeTable [value]=\"files6\" selectionMode=\"single\" [(selection)]=\"selectedFile2\" [style]=\"{'margin-top':'50px'}\" [contextMenu]=\"cm\">\r\n        <p-header>Context Menu</p-header>\r\n        <p-column field=\"name\" header=\"Name\"></p-column>\r\n        <p-column field=\"size\" header=\"Size\"></p-column>\r\n        <p-column field=\"type\" header=\"Type\"></p-column>\r\n    </p-treeTable>\r\n            \r\n    <p-contextMenu #cm [model]=\"items\"></p-contextMenu>\r\n    \r\n    <p-treeTable [value]=\"lazyFiles\" [style]=\"{'margin-top':'50px'}\"\r\n        (onNodeExpand)=\"nodeExpand($event)\">\r\n        <p-header>Lazy Loading</p-header>\r\n        <p-column field=\"name\" header=\"Name\"></p-column>\r\n        <p-column field=\"size\" header=\"Size\"></p-column>\r\n        <p-column field=\"type\" header=\"Type\"></p-column>\r\n    </p-treeTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;TreeTableModule&#125; from 'primeng/treetable';\r\nimport &#123;TreeNode&#125; from 'primeng/api';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>TreeTable component requires an array of TreeNode objects as its value. Let's begin with the TreeNode api.</p>\r\n            \r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>label</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Label of the node.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>data</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Data represented by the node.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>icon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Icon of the node to display next to content. Not used by TreeTable.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>expandedIcon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Icon to use in expanded state. Not used by TreeTable.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>collapsedIcon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Icon to use in collapsed state. Not used by TreeTable.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>children</td>\r\n                            <td>TreeNode[]</td>\r\n                            <td>null</td>\r\n                            <td>An array of treenodes as children.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>leaf</td>\r\n                            <td>boolean</td>\r\n                            <td>null</td>\r\n                            <td>Specifies if the node has children. Used in lazy loading.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the node.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the node.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <p>Most of the time, nodes will be loaded from a remote datasoure, here is an example NodeService that fetches the data from a json file.</p> \r\n<pre>\r\n<code class=\"language-javascript\" pCode ngNonBindable>\r\n@Injectable()\r\nexport class NodeService &#123;\r\n    \r\n    constructor(private http: Http) &#123;&#125;\r\n\r\n    getFilesystem() &#123;\r\n        return this.http.get('showcase/resources/data/filesystem.json')\r\n                    .toPromise()\r\n                    .then(res => &lt;TreeNode[]&gt; res.json().data);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        \r\n        <p>The filesystem.json file consists of sample data. In a real application, this should be a dynamic response generated from the remote call.</p>\r\n<pre>\r\n<code class=\"language-javascript\" pCode ngNonBindable>\r\n&#123;\r\n    \"data\":\r\n    [  \r\n        &#123;  \r\n            \"data\":&#123;  \r\n                \"name\":\"Documents\",\r\n                \"size\":\"75kb\",\r\n                \"type\":\"Folder\"\r\n            &#125;,\r\n            \"children\":[\r\n                &#123;  \r\n                    \"data\":&#123;  \r\n                        \"name\":\"Work\",\r\n                        \"size\":\"55kb\",\r\n                        \"type\":\"Folder\"\r\n                    &#125;,\r\n                    \"children\":[  \r\n                        &#123;  \r\n                            \"data\":&#123;  \r\n                                \"name\":\"Expenses.doc\",\r\n                                \"size\":\"30kb\",\r\n                                \"type\":\"Document\"\r\n                            &#125;\r\n                        &#125;,\r\n                        &#123;  \r\n                            \"data\":&#123;  \r\n                                \"name\":\"Resume.doc\",\r\n                                \"size\":\"25kb\",\r\n                                \"type\":\"Resume\"\r\n                            &#125;\r\n                        &#125;\r\n                    ]\r\n                &#125;,\r\n                &#123;  \r\n                    \"data\":&#123;  \r\n                        \"name\":\"Home\",\r\n                        \"size\":\"20kb\",\r\n                        \"type\":\"Folder\"\r\n                    &#125;,\r\n                    \"children\":[  \r\n                        &#123;  \r\n                            \"data\":&#123;  \r\n                                \"name\":\"Invoices\",\r\n                                \"size\":\"20kb\",\r\n                                \"type\":\"Text\"\r\n                            &#125;\r\n                        &#125;\r\n                    ]\r\n                &#125;\r\n            ]\r\n        &#125;,\r\n        &#123;  \r\n            \"data\":&#123;  \r\n                \"name\":\"Pictures\",\r\n                \"size\":\"150kb\",\r\n                \"type\":\"Folder\"\r\n            &#125;,\r\n            \"children\":[  \r\n                &#123;  \r\n                    \"data\":&#123;  \r\n                        \"name\":\"barcelona.jpg\",\r\n                        \"size\":\"90kb\",\r\n                        \"type\":\"Picture\"\r\n                    &#125;\r\n                &#125;,\r\n                &#123;  \r\n                    \"data\":&#123;  \r\n                        \"name\":\"primeui.png\",\r\n                        \"size\":\"30kb\",\r\n                        \"type\":\"Picture\"\r\n                    &#125;\r\n                &#125;,\r\n                &#123;  \r\n                    \"data\":&#123;  \r\n                        \"name\":\"optimus.jpg\",\r\n                        \"size\":\"30kb\",\r\n                        \"type\":\"Picture\"\r\n                    &#125;\r\n                &#125;\r\n            ]\r\n        &#125;\r\n    ]\r\n&#125;\r\n</code>\r\n</pre>  \r\n\r\n        <p>The component that uses this service makes a call to getFiles() and assigns them back to files property that is bound to the tree.</p>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemoComponent implements OnInit &#123;\r\n    \r\n    files: TreeNode[];\r\n\r\n    constructor(private nodeService: NodeService) &#123;&#125;\r\n    \r\n    ngOnInit() &#123;\r\n        this.nodeService.getFileSystem().then(files => this.files = files);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>         \r\n                  \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\"&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Column Component</h3>\r\n            <p>TreeTable utilizes the following options defined by a column component.</p>\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>field</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Property of a row data.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>header</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Header text of a column.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>footer</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Footer text of a column.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the column.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the column.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n</code>\r\n</pre>\r\n\r\n                <h3>Dynamic Colums</h3>\r\n                <p>Columns can be instantiated using an array as well by iterating with ngFor.</p>\r\n            <pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemoComponent implements OnInit &#123;\r\n\r\n    files: TreeNode[];\r\n\r\n    constructor(private nodeService: NodeService) &#123;&#125;\r\n    \r\n    ngOnInit() &#123;\r\n        this.nodeService.getFileSystem().then(files => this.files = files);\r\n\r\n        this.cols = [\r\n                &#123;field: 'name', header: 'Name'&#125;,\r\n                &#123;field: 'size', header: 'Size'&#125;,\r\n                &#123;field: 'type', header: 'Type'&#125;\r\n            ];\r\n        &#125;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"cars\"&gt;\r\n    &lt;p-column *ngFor=\"let col of cols\" [field]=\"col.field\" [header]=\"col.header\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Facets</h3>\r\n            <p>Header and Footer are the two sections aka facets that are capable of displaying custom content.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\"&gt;\r\n    &lt;p-header&gt;List of Files&lt;/p-header&gt;\r\n    &lt;p-footer&gt;Choose from the list.&lt;/p-footer&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Selection</h3>\r\n            <p>TreeTable supports three selection methods, single, multiple and checkbox. Selection is enabled by setting selectionMode property and providing a single TreeNode or\r\n            an array of TreeNodes to reference the selections depending on the selection mode. </p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemoComponent implements OnInit &#123;\r\n    \r\n    files: TreeNode[];\r\n    \r\n    selectedFile: TreeNode;\r\n\r\n    constructor(private nodeService: NodeService) &#123;&#125;\r\n    \r\n    ngOnInit() &#123;\r\n        this.nodeService.getFiles().then(files => this.files = files);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFile\"&gt;&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<p>In multiple mode or checkbox mode, selection property should be an array. In multiple mode, items can either be selected\r\nusing metaKey or toggled individually depending on the value of metaKeySelection property value which is true by default. On touch enabled\r\ndevices metaKeySelection is turned off automatically. In checkbox mode, when inititing a tree with preselections, also set partialSelected\r\nproperty on node so that minus icon can be displayed when necessary.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n    export class TreeTableDemoComponent implements OnInit &#123;\r\n        \r\n        files: TreeNode[];\r\n        \r\n        selectedFiles: TreeNode[];\r\n\r\n        constructor(private nodeService: NodeService) &#123;&#125;\r\n        \r\n        ngOnInit() &#123;\r\n            this.nodeService.getFiles().then(files => this.files = files);\r\n        &#125;\r\n\r\n    &#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFiles\"&gt;&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>TreeTable provides onNodeSelect and onNodeUnselect options as callbacks for selection feature.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeSelect($event)\"&gt;&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemoComponent implements OnInit &#123;\r\n    \r\n    files: TreeNode[];\r\n    \r\n    selectedFiles: TreeNode[];\r\n\r\n    constructor(private nodeService: NodeService) &#123;&#125;\r\n    \r\n    ngOnInit() &#123;\r\n        this.nodeService.getFiles().then(files => this.files = files);\r\n    &#125;\r\n    \r\n    nodeSelect(event) &#123;\r\n        //event.node = selected node\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Selection of a particular node can be disabled by setting the selectable property of the node to false.</p>\r\n            \r\n            <h3>ContextMenu</h3>\r\n            <p>TreeTable has exclusive integration with contextmenu component. In order to attach a menu to a treetable, define a local template\r\n            variable for the menu and bind it to the contextMenu property of the treetable. This enables showing the menu whenever a row is right clicked.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" selectionMode=\"single\" [(selection)]=\"selectedFile\" [contextMenu]=\"cm\"&gt;\r\n    &lt;p-header&gt;Context Menu&lt;/p-header&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemoComponent implements OnInit &#123;\r\n    \r\n    files: TreeNode[];\r\n    \r\n    selectedFile: TreeNode;\r\n\r\n    constructor(private nodeService: NodeService) &#123;&#125;\r\n    \r\n    ngOnInit() &#123;\r\n        this.nodeService.getFiles().then(files => this.files = files);\r\n        \r\n        this.items = [\r\n            &#123;label: 'View', icon: 'fa-search', command: (event) => this.viewNode(this.selectedFile2)&#125;,\r\n            &#123;label: 'Delete', icon: 'fa-close', command: (event) => this.deleteNode(this.selectedFile2)&#125;\r\n        ];\r\n    &#125;\r\n    \r\n    viewNode(node: TreeNode) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Selected', detail: node.data.name&#125;);\r\n    &#125;\r\n\r\n    deleteNode(node: TreeNode) &#123;\r\n        node.parent.children = node.parent.children.filter( n => n.data !== node.data);\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Deleted', detail: node.data.name&#125;);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n                \r\n            <h3>Templating</h3>\r\n            <p>By default label of a treenode is displayed inside a tree node, in case you need to place custom content define a ng-template inside a column that gets \r\n                the column as an implicit variable and rowData as the node instance. Similarly, custom content can be placed at the header and footer of a column with templating.\r\n                Example below places an input field to create editable treenodes.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3&gt;ng-template&lt;/h3&gt;\r\n&lt;p-treeTable [value]=\"files\"&gt;\r\n    &lt;p-column&gt;\r\n        &lt;ng-template let-col let-node=\"rowData\" pTemplate=\"header\"&gt;\r\n            &lt;button type=\"button\" pButton label=\"Refresh\"&gt;&lt;/button&gt;\r\n        &lt;/ng-template&gt;\r\n        &lt;ng-template let-col let-node=\"rowData\" pTemplate=\"body\"&gt;\r\n            &lt;input [(ngModel)]=\"node.data.name\" type=\"text\" style=\"width:100%\"&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Lazy Loading</h3>\r\n            <p>Lazy loading is handy to deal with large datasets. Instead of loading the whole tree, nodes can be loaded at onNodeExpand event.\r\n            Important part of implementing lazy loading is defining leaf property of a node as false, this will instruct tree to display an arrow icon\r\n            to indicate there are children of this node although they are not loaded yet. When the lazy node is expanded, onNodeExpand is called\r\n            and a remote call can be made to add the children to the expanded node.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-treeTable [value]=\"files\" (onNodeExpand)=\"loadNode($event)\"&gt;&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemoComponent implements OnInit &#123;\r\n    \r\n    files: TreeNode[];\r\n    \r\n    selectedFiles: TreeNode[];\r\n\r\n    constructor(private nodeService: NodeService) &#123;&#125;\r\n    \r\n    ngOnInit() &#123;\r\n        //initial nodes\r\n        this.nodeService.getFiles().then(files => this.files = files);\r\n    &#125;\r\n    \r\n    loadNode(event) &#123;\r\n        if(event.node) &#123;\r\n            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children\r\n            this.nodeService.getLazyFilesystem().then(nodes => event.node.children = nodes);\r\n        &#125;\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Assume at ngOnInit treetable is initialized with a data like below that has nodes having no actual children but leaf property is set false.</p>\r\n<pre>\r\n<code class=\"language-javascript\" pCode ngNonBindable>\r\n&#123;\r\n    \"data\":\r\n    [  \r\n        &#123;  \r\n            \"data\":&#123;  \r\n                \"name\":\"Lazy Folder 0\",\r\n                \"size\":\"75kb\",\r\n                \"type\":\"Folder\"\r\n            &#125;,\r\n            \"leaf\": false\r\n        &#125;,\r\n        &#123;  \r\n            \"data\":&#123;  \r\n                \"name\":\"Lazy Folder 1\",\r\n                \"size\":\"150kb\",\r\n                \"type\":\"Folder\"\r\n            &#125;,\r\n            \"leaf\": false\r\n        &#125;\r\n    ]\r\n&#125;\r\n</code>\r\n</pre>  \r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                         <tr>\r\n                            <td>value</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of treenodes.</td>\r\n                        </tr>\r\n                         <tr>\r\n                            <td>labelExpand</td>\r\n                            <td>string</td>\r\n                            <td>Expand</td>\r\n                            <td>Tooltip and screenreader text for expand icon.</td>\r\n                        </tr>\r\n                         <tr>\r\n                            <td>labelCollapse</td>\r\n                            <td>string</td>\r\n                            <td>Collapse</td>\r\n                            <td>Tooltip and screenreader text for collapse icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                           <td>expandedIcon</td>\r\n                           <td>string</td>\r\n                           <td>fa-caret-down</td>\r\n                           <td>Icon to display on an expanded node.</td>\r\n                       </tr>\r\n                        <tr>\r\n                           <td>collapsedIcon</td>\r\n                           <td>string</td>\r\n                           <td>fa-caret-right</td>\r\n                           <td>Icon to display on an expanded node.</td>\r\n                       </tr>\r\n                        <tr>\r\n                            <td>selectionMode</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Defines the selection mode, valid values are \"single\", \"multiple\" and \"checkbox\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selection</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>A single treenode instance or an array to refer to the selections.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>metaKeySelection</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item\r\n                            can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>toggleColumnIndex</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Index of the column that contains the toggler element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tableStyle</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the table element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tableStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the table element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onNodeSelect</td>\r\n                            <td>event.originalEvent: browser event <br>\r\n                                event.node: Selected node instance.</td>\r\n                            <td>Callback to invoke when a node is selected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onNodeUnselect</td>\r\n                            <td>event.originalEvent: browser event <br>\r\n                                event.node: Unselected node instance.</td>\r\n                            <td>Callback to invoke when a node is unselected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onNodeExpand</td>\r\n                            <td>event.originalEvent: browser event <br>\r\n                                event.node: Expanded node instance.</td>\r\n                            <td>Callback to invoke when a node is expanded.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onNodeCollapse</td>\r\n                            <td>event.originalEvent: browser event <br>\r\n                                event.node: Collapsed node instance.</td>\r\n                            <td>Callback to invoke when a node is collapsed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onContextMenuSelect</td>\r\n                            <td>event.originalEvent: browser event <br>\r\n                                event.node: Selected node instance.</td>\r\n                            <td>Callback to invoke when a node is selected with right click.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onRowDblclick</td>\r\n                            <td>event.originalEvent: Browser event <br>\r\n                                event.node: Selected node instance.</td>\r\n                            <td>Callback to invoke when a row is double clicked.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-treetable</td>\r\n                            <td>Main container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-header</td>\r\n                            <td>Header element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-tablewrapper</td>\r\n                            <td>Container of table</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-treetable-footer</td>\r\n                            <td>Footer element</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/treetable\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;p-treeTable [value]=\"files1\"&gt;\r\n    &lt;p-header&gt;Basic&lt;/p-header&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n    \r\n&lt;p-treeTable [value]=\"files2\" selectionMode=\"single\" [(selection)]=\"selectedFile\"\r\n    (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\" [style]=\"&#123;'margin-top':'50px'&#125;\"&gt;\r\n    &lt;p-header&gt;Singe Selection&lt;/p-header&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n&lt;p&gt;Selected Node: &#123;&#123;selectedFile ? selectedFile.data.name : 'none'&#125;&#125;&lt;/p&gt;\r\n    \r\n&lt;p-treeTable [value]=\"files3\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" \r\n    (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\" [style]=\"&#123;'margin-top':'50px'&#125;\"&gt;\r\n    &lt;p-header&gt;Multiple Selection&lt;/p-header&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n&lt;p&gt;Selected Nodes: &lt;span *ngFor=\"let file of selectedFiles\"&gt;&#123;&#123;file.data.name&#125;&#125; &lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p-treeTable [value]=\"files4\" selectionMode=\"checkbox\" [(selection)]=\"selectedFiles2\" [style]=\"&#123;'margin-top':'50px'&#125;\"&gt;\r\n    &lt;p-header&gt;Checkbox Selection&lt;/p-header&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n&lt;p&gt;Selected Nodes: &lt;span *ngFor=\"let file of selectedFiles2\"&gt;&#123;&#123;file.data.name&#125;&#125; &lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;p-treeTable [value]=\"files5\" [style]=\"&#123;'margin-top':'50px'&#125;\"&gt;\r\n    &lt;p-header&gt;Editable Cells with Templating&lt;/p-header&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;\r\n        &lt;ng-template let-node=\"rowData\" pTemplate=\"body\"&gt;\r\n            &lt;input type=\"text\" [(ngModel)]=\"node.data.name\" style=\"width:100%;border-width:0px 0px 1px 0px\"&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;\r\n        &lt;ng-template let-node=\"rowData\" pTemplate=\"body\"&gt;\r\n            &lt;input type=\"text\" [(ngModel)]=\"node.data.size\" style=\"width:100%;border-width:0px 0px 1px 0px\"&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;\r\n        &lt;ng-template let-node=\"rowData\" pTemplate=\"body\"&gt;\r\n            &lt;input type=\"text\" [(ngModel)]=\"node.data.type\" style=\"width:100%;border-width:0px 0px 1px 0px\"&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;p-treeTable [value]=\"files6\" selectionMode=\"single\" [(selection)]=\"selectedFile2\" [style]=\"&#123;'margin-top':'50px'&#125;\" [contextMenu]=\"cm\"&gt;\r\n    &lt;p-header&gt;Context Menu&lt;/p-header&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n\r\n&lt;p-treeTable [value]=\"lazyFiles\" [style]=\"&#123;'margin-top':'50px'&#125;\"\r\n    (onNodeExpand)=\"nodeExpand($event)\"&gt;\r\n    &lt;p-header&gt;Lazy Loading&lt;/p-header&gt;\r\n    &lt;p-column field=\"name\" header=\"Name\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"size\" header=\"Size\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"type\" header=\"Type\"&gt;&lt;/p-column&gt;\r\n&lt;/p-treeTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class TreeTableDemo implements OnInit &#123;\r\n    \r\n    msgs: Message[];\r\n    \r\n    files1: TreeNode[];\r\n    \r\n    files2: TreeNode[];\r\n    \r\n    files3: TreeNode[];\r\n    \r\n    files4: TreeNode[];\r\n    \r\n    files5: TreeNode[];\r\n    \r\n    files6: TreeNode[];\r\n            \r\n    lazyFiles: TreeNode[];\r\n        \r\n    selectedFile: TreeNode;\r\n    \r\n    selectedFile2: TreeNode;\r\n    \r\n    selectedFiles: TreeNode[];\r\n    \r\n    selectedFiles2: TreeNode[];\r\n    \r\n    items: MenuItem[];\r\n        \r\n    constructor(private nodeService: NodeService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.nodeService.getFilesystem().then(files => this.files1 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files2 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files3 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files4 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files5 = files);\r\n        this.nodeService.getFilesystem().then(files => this.files6 = files);\r\n        this.nodeService.getLazyFilesystem().then(files => this.lazyFiles = files);\r\n        \r\n        this.items = [\r\n            &#123;label: 'View', icon: 'fa-search', command: (event) => this.viewNode(this.selectedFile2)&#125;,\r\n            &#123;label: 'Delete', icon: 'fa-close', command: (event) => this.deleteNode(this.selectedFile2)&#125;\r\n        ];\r\n    &#125;\r\n    \r\n    nodeSelect(event) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Selected', detail: event.node.data.name&#125;);\r\n    &#125;\r\n    \r\n    nodeUnselect(event) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Unselected', detail: event.node.data.name&#125;);\r\n    &#125;\r\n    \r\n    nodeExpand(event) &#123;\r\n        if(event.node) &#123;\r\n            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children\r\n            this.nodeService.getLazyFilesystem().then(nodes => event.node.children = nodes);\r\n        &#125;\r\n    &#125;\r\n    \r\n    viewNode(node: TreeNode) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Selected', detail: node.data.name&#125;);\r\n    &#125;\r\n\r\n    deleteNode(node: TreeNode) &#123;\r\n        node.parent.children = node.parent.children.filter( n => n.data !== node.data);\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Node Deleted', detail: node.data.name&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/treetable/treetabledemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeTableDemoModule", function() { return TreeTableDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__treetabledemo__ = __webpack_require__("../../../../../src/app/showcase/components/treetable/treetabledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__treetabledemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/treetable/treetabledemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_treetable_treetable__ = __webpack_require__("../../../../../src/app/components/treetable/treetable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__ = __webpack_require__("../../../../../src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_contextmenu_contextmenu__ = __webpack_require__("../../../../../src/app/components/contextmenu/contextmenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var TreeTableDemoModule = (function () {
    function TreeTableDemoModule() {
    }
    TreeTableDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__treetabledemo_routing_module__["a" /* TreeTableDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_treetable_treetable__["a" /* TreeTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_growl_growl__["a" /* GrowlModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_contextmenu_contextmenu__["a" /* ContextMenuModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__treetabledemo__["a" /* TreeTableDemo */]
            ]
        })
    ], TreeTableDemoModule);
    return TreeTableDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/treetable/treetabledemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeTableDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_nodeservice__ = __webpack_require__("../../../../../src/app/showcase/service/nodeservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeTableDemo = (function () {
    function TreeTableDemo(nodeService) {
        this.nodeService = nodeService;
    }
    TreeTableDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.nodeService.getFilesystem().then(function (files) { return _this.files1 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files2 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files3 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files4 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files5 = files; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files6 = files; });
        this.nodeService.getLazyFilesystem().then(function (files) { return _this.lazyFiles = files; });
        this.items = [
            { label: 'View', icon: 'fa-search', command: function (event) { return _this.viewNode(_this.selectedFile2); } },
            { label: 'Delete', icon: 'fa-close', command: function (event) { return _this.deleteNode(_this.selectedFile2); } }
        ];
    };
    TreeTableDemo.prototype.nodeSelect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    };
    TreeTableDemo.prototype.nodeUnselect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
    };
    TreeTableDemo.prototype.nodeExpand = function (event) {
        if (event.node) {
            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            this.nodeService.getLazyFilesystem().then(function (nodes) { return event.node.children = nodes; });
        }
    };
    TreeTableDemo.prototype.viewNode = function (node) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: node.data.name });
    };
    TreeTableDemo.prototype.deleteNode = function (node) {
        node.parent.children = node.parent.children.filter(function (n) { return n.data !== node.data; });
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Deleted', detail: node.data.name });
    };
    TreeTableDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/treetable/treetabledemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_nodeservice__["a" /* NodeService */]])
    ], TreeTableDemo);
    return TreeTableDemo;
}());



/***/ })

});
//# sourceMappingURL=treetabledemo.module.chunk.js.map