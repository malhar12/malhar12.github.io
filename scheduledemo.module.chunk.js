webpackJsonp(["scheduledemo.module"],{

/***/ "../../../../../src/app/components/schedule/schedule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Schedule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleModule; });
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


var Schedule = (function () {
    function Schedule(el, differs) {
        this.el = el;
        this.aspectRatio = 1.35;
        this.defaultView = 'month';
        this.allDaySlot = true;
        this.allDayText = 'all-day';
        this.slotDuration = '00:30:00';
        this.scrollTime = '06:00:00';
        this.minTime = '00:00:00';
        this.maxTime = '24:00:00';
        this.slotEventOverlap = true;
        this.dragRevertDuration = 500;
        this.dragOpacity = .75;
        this.dragScroll = true;
        this.timezone = false;
        this.timeFormat = null;
        this.onDayClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onDrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEventClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEventMouseover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEventMouseout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEventDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEventDragStop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEventDrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEventResizeStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEventResizeStop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEventResize = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onViewRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onViewDestroy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.differ = differs.find([]).create(null);
        this.initialized = false;
    }
    Schedule.prototype.ngOnInit = function () {
        var _this = this;
        this.config = {
            theme: true,
            header: this.header,
            isRTL: this.rtl,
            weekends: this.weekends,
            hiddenDays: this.hiddenDays,
            fixedWeekCount: this.fixedWeekCount,
            weekNumbers: this.weekNumbers,
            businessHours: this.businessHours,
            height: this.height,
            contentHeight: this.contentHeight,
            aspectRatio: this.aspectRatio,
            eventLimit: this.eventLimit,
            defaultDate: this.defaultDate,
            locale: this.locale,
            timezone: this.timezone,
            timeFormat: this.timeFormat,
            editable: this.editable,
            droppable: this.droppable,
            eventStartEditable: this.eventStartEditable,
            eventDurationEditable: this.eventDurationEditable,
            defaultView: this.defaultView,
            allDaySlot: this.allDaySlot,
            allDayText: this.allDayText,
            slotDuration: this.slotDuration,
            slotLabelInterval: this.slotLabelInterval,
            snapDuration: this.snapDuration,
            scrollTime: this.scrollTime,
            minTime: this.minTime,
            maxTime: this.maxTime,
            slotEventOverlap: this.slotEventOverlap,
            nowIndicator: this.nowIndicator,
            dragRevertDuration: this.dragRevertDuration,
            dragOpacity: this.dragOpacity,
            dragScroll: this.dragScroll,
            eventOverlap: this.eventOverlap,
            eventConstraint: this.eventConstraint,
            eventRender: this.eventRender,
            dayRender: this.dayRender,
            navLinks: this.navLinks,
            dayClick: function (date, jsEvent, view) {
                _this.onDayClick.emit({
                    'date': date,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            drop: function (date, jsEvent, ui, resourceId) {
                _this.onDrop.emit({
                    'date': date,
                    'jsEvent': jsEvent,
                    'ui': ui,
                    'resourceId': resourceId
                });
            },
            eventClick: function (calEvent, jsEvent, view) {
                _this.onEventClick.emit({
                    'calEvent': calEvent,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventMouseover: function (calEvent, jsEvent, view) {
                _this.onEventMouseover.emit({
                    'calEvent': calEvent,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventMouseout: function (calEvent, jsEvent, view) {
                _this.onEventMouseout.emit({
                    'calEvent': calEvent,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventDragStart: function (event, jsEvent, ui, view) {
                _this.onEventDragStart.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventDragStop: function (event, jsEvent, ui, view) {
                _this.onEventDragStop.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventDrop: function (event, delta, revertFunc, jsEvent, ui, view) {
                _this._updateEvent(event);
                _this.onEventDrop.emit({
                    'event': event,
                    'delta': delta,
                    'revertFunc': revertFunc,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventResizeStart: function (event, jsEvent, ui, view) {
                _this.onEventResizeStart.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventResizeStop: function (event, jsEvent, ui, view) {
                _this.onEventResizeStop.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventResize: function (event, delta, revertFunc, jsEvent, ui, view) {
                _this._updateEvent(event);
                _this.onEventResize.emit({
                    'event': event,
                    'delta': delta,
                    'revertFunc': revertFunc,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            viewRender: function (view, element) {
                _this.onViewRender.emit({
                    'view': view,
                    'element': element
                });
            },
            viewDestroy: function (view, element) {
                _this.onViewDestroy.emit({
                    'view': view,
                    'element': element
                });
            }
        };
        if (this.options) {
            for (var prop in this.options) {
                this.config[prop] = this.options[prop];
            }
        }
    };
    Schedule.prototype.ngAfterViewChecked = function () {
        if (!this.initialized && this.el.nativeElement.offsetParent) {
            this.initialize();
        }
    };
    Schedule.prototype.ngOnChanges = function (changes) {
        if (this.schedule) {
            var options = {};
            for (var change in changes) {
                if (change !== 'events') {
                    options[change] = changes[change].currentValue;
                }
            }
            if (Object.keys(options).length) {
                this.schedule.fullCalendar('option', options);
            }
        }
    };
    Schedule.prototype.initialize = function () {
        this.schedule = jQuery(this.el.nativeElement.children[0]);
        this.schedule.fullCalendar(this.config);
        if (this.events) {
            this.schedule.fullCalendar('addEventSource', this.events);
        }
        this.initialized = true;
    };
    Schedule.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.events);
        if (this.schedule && changes) {
            this.schedule.fullCalendar('removeEventSources');
            if (this.events) {
                this.schedule.fullCalendar('addEventSource', this.events);
            }
        }
    };
    Schedule.prototype.ngOnDestroy = function () {
        jQuery(this.el.nativeElement.children[0]).fullCalendar('destroy');
        this.initialized = false;
        this.schedule = null;
    };
    Schedule.prototype.gotoDate = function (date) {
        this.schedule.fullCalendar('gotoDate', date);
    };
    Schedule.prototype.prev = function () {
        this.schedule.fullCalendar('prev');
    };
    Schedule.prototype.next = function () {
        this.schedule.fullCalendar('next');
    };
    Schedule.prototype.prevYear = function () {
        this.schedule.fullCalendar('prevYear');
    };
    Schedule.prototype.nextYear = function () {
        this.schedule.fullCalendar('nextYear');
    };
    Schedule.prototype.today = function () {
        this.schedule.fullCalendar('today');
    };
    Schedule.prototype.incrementDate = function (duration) {
        this.schedule.fullCalendar('incrementDate', duration);
    };
    Schedule.prototype.changeView = function (viewName) {
        this.schedule.fullCalendar('changeView', viewName);
    };
    Schedule.prototype.getDate = function () {
        return this.schedule.fullCalendar('getDate');
    };
    Schedule.prototype.updateEvent = function (event) {
        this.schedule.fullCalendar('updateEvent', event);
    };
    Schedule.prototype._findEvent = function (id) {
        var event;
        if (this.events) {
            for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
                var e = _a[_i];
                if (e.id === id) {
                    event = e;
                    break;
                }
            }
        }
        return event;
    };
    Schedule.prototype._updateEvent = function (event) {
        var sourceEvent = this._findEvent(event.id);
        if (sourceEvent) {
            sourceEvent.start = event.start.format();
            if (event.end) {
                sourceEvent.end = event.end.format();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], Schedule.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Schedule.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Schedule.prototype, "rtl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Schedule.prototype, "weekends", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], Schedule.prototype, "hiddenDays", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Schedule.prototype, "fixedWeekCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Schedule.prototype, "weekNumbers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "businessHours", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "contentHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Schedule.prototype, "aspectRatio", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "eventLimit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "defaultDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Schedule.prototype, "editable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Schedule.prototype, "droppable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Schedule.prototype, "eventStartEditable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Schedule.prototype, "eventDurationEditable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Schedule.prototype, "defaultView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Schedule.prototype, "allDaySlot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Schedule.prototype, "allDayText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "slotDuration", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "slotLabelInterval", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "snapDuration", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "scrollTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "minTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "maxTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Schedule.prototype, "slotEventOverlap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Schedule.prototype, "nowIndicator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Schedule.prototype, "dragRevertDuration", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Schedule.prototype, "dragOpacity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Schedule.prototype, "dragScroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "eventOverlap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "eventConstraint", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Schedule.prototype, "locale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "timezone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "timeFormat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Function)
    ], Schedule.prototype, "eventRender", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Function)
    ], Schedule.prototype, "dayRender", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Schedule.prototype, "navLinks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Schedule.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Schedule.prototype, "onDayClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Schedule.prototype, "onDrop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Schedule.prototype, "onEventClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Schedule.prototype, "onEventMouseover", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Schedule.prototype, "onEventMouseout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Schedule.prototype, "onEventDragStart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Schedule.prototype, "onEventDragStop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Schedule.prototype, "onEventDrop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Schedule.prototype, "onEventResizeStart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Schedule.prototype, "onEventResizeStop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Schedule.prototype, "onEventResize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Schedule.prototype, "onViewRender", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Schedule.prototype, "onViewDestroy", void 0);
    Schedule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-schedule',
            template: '<div [ngStyle]="style" [class]="styleClass"></div>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* IterableDiffers */]])
    ], Schedule);
    return Schedule;
}());

var ScheduleModule = (function () {
    function ScheduleModule() {
    }
    ScheduleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [Schedule],
            declarations: [Schedule]
        })
    ], ScheduleModule);
    return ScheduleModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/schedule/scheduledemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduledemo__ = __webpack_require__("../../../../../src/app/showcase/components/schedule/scheduledemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScheduleDemoRoutingModule = (function () {
    function ScheduleDemoRoutingModule() {
    }
    ScheduleDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__scheduledemo__["a" /* ScheduleDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], ScheduleDemoRoutingModule);
    return ScheduleDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/schedule/scheduledemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Schedule</span>\r\n        <span>Schedule is an event calendar based on FullCalendar. This sample demonstrates a crud scenario using a Dialog.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-schedule [events]=\"events\" [header]=\"header\" defaultDate=\"2017-02-01\" [eventLimit]=\"4\" [editable]=\"true\"></p-schedule>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;ScheduleModule&#125; from 'primeng/schedule';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Schedule is based on <a href=\"http://fullcalendar.io/\">FullCalendar</a>. For a complete documentation and samples please refer to the fullcalendar website.\r\n            Events of schedule should be an array and defined using the events property.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-schedule [events]=\"events\"&gt;&lt;/p-schedule&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    events: any[];\r\n\r\n    ngOnInit() &#123;\r\n        this.events = [\r\n            &#123;\r\n                \"title\": \"All Day Event\",\r\n                \"start\": \"2016-01-01\"\r\n            &#125;,\r\n            &#123;\r\n                \"title\": \"Long Event\",\r\n                \"start\": \"2016-01-07\",\r\n                \"end\": \"2016-01-10\"\r\n            &#125;,\r\n            &#123;\r\n                \"title\": \"Repeating Event\",\r\n                \"start\": \"2016-01-09T16:00:00\"\r\n            &#125;,\r\n            &#123;\r\n                \"title\": \"Repeating Event\",\r\n                \"start\": \"2016-01-16T16:00:00\"\r\n            &#125;,\r\n            &#123;\r\n                \"title\": \"Conference\",\r\n                \"start\": \"2016-01-11\",\r\n                \"end\": \"2016-01-13\"\r\n            &#125;\r\n        ];\r\n    &#125;\r\n    \r\n&#125;\r\n</code>\r\n</pre>\r\n            <p>In a real application, it is likely to populate the events by making a service call, when the events are updated, schedule component will detect the change and render them.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Injectable()\r\nexport class EventService &#123;\r\n    \r\n    constructor(private http: Http) &#123;&#125;\r\n\r\n    getEvents() &#123;\r\n        return this.http.get('showcase/resources/data/scheduleevents.json')\r\n                    .toPromise()\r\n                    .then(res =&gt; &lt;any[]&gt; res.json().data)\r\n                    .then(data =&gt; &#123; return data; &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    events: any[];\r\n\r\n    ngOnInit() &#123;\r\n        this.eventService.getEvents().then(events => &#123;this.events = events;&#125;);\r\n    &#125;\r\n    \r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Lazy Loading</h3>\r\n            <p>onViewRender call is used to implement lazy loading which is triggered when a new date-range is rendered or when the view type changes.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-schedule [events]=\"events\" (onViewRender)=\"loadEvents($event)\"&gt;&lt;/p-schedule&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nloadEvents(event) &#123;\r\n    let start = event.view.start\r\n    let end = event.view.end\r\n    this.events = this.eventService.getEvents().then(events => &#123;this.events = events;&#125;);\r\n&#125;\r\n</code>\r\n</pre>\r\n            \r\n\r\n            <h3>Event API</h3>\r\n            <p>Event object has various properties to define an event, refer to <a href=\"http://fullcalendar.io/docs/event_data/Event_Object/\">official documentation</a> for the whole list.</p>\r\n\r\n            <h3>Header Customization</h3>\r\n            <p>Header is customized using the header property that takes an object as its value. Default configuration is;</p>\r\n<pre>\r\n<code class=\"language-javascript\" pCode ngNonBindable>\r\n&#123;\r\n    left:   'title',\r\n    center: '',\r\n    right:  'today prev,next'\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Here is a customized version of header.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-schedule [events]=\"events\" [header]=\"headerConfig\"&gt;&lt;/p-schedule&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    events: any[];\r\n    \r\n    headerConfig: any;\r\n\r\n    ngOnInit() &#123;\r\n        this.headerConfig = &#123;\r\n\t\t\tleft: 'prev,next today',\r\n\t\t\tcenter: 'title',\r\n\t\t\tright: 'month,agendaWeek,agendaDay'\r\n\t\t&#125;;\r\n    &#125;\r\n    \r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Localization</h3>\r\n            <p>Localization for different languages and formats is defined by binding the settings object to the locale property. \r\n                Following is a schedule with Spanish month names. The locale file should also be included in your project, read more at <a href=\"https://fullcalendar.io/docs/text/locale/\">here</a>.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-schedule [events]=\"events\" locale=\"es\"&gt;&lt;/p-schedule&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Type</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>events</td>\r\n                            <td>array</td>\r\n                            <td>An array of events to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>header</td>\r\n                            <td>object</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/display/header/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>isRTL</td>\r\n                            <td>boolean</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/display/isRTL/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>weekends</td>\r\n                            <td>boolean</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/display/weekends/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hiddenDays</td>\r\n                            <td>array</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/display/hiddenDays/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>locale</td>\r\n                            <td>object</td>\r\n                            <td><a href=\"https://fullcalendar.io/docs/text/locale/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>fixedWeekCount</td>\r\n                            <td>boolean</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/display/fixedWeekCount/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>weekNumbers</td>\r\n                            <td>boolean</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/display/weekNumbers/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>businessHours</td>\r\n                            <td>any</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/display/businessHours/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>height</td>\r\n                            <td>any</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/display/height/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>contentHeight</td>\r\n                            <td>any</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/display/contentHeight/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>aspectRatio</td>\r\n                            <td>any</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/display/aspectRatio/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>eventLimit</td>\r\n                            <td>any</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/display/eventLimit/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>defaultDate</td>\r\n                            <td>any</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/defaultDate/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>editable</td>\r\n                            <td>boolean</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/editable/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>droppable</td>\r\n                            <td>boolean</td>\r\n                            <td><a href=\"https://fullcalendar.io/docs/dropping/droppable/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>eventStartEditable</td>\r\n                            <td>boolean</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventStartEditable/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>eventDurationEditable</td>\r\n                            <td>boolean</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventDurationEditable/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>defaultView</td>\r\n                            <td>string</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/views/defaultView/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>allDaySlot</td>\r\n                            <td>boolean</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/agenda/allDaySlot/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>allDayText</td>\r\n                            <td>string</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/agenda/allDayText/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>slotDuration</td>\r\n                            <td>Duration</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/agenda/slotDuration/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>slotLabelInterval</td>\r\n                            <td>Duration</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/agenda/slotLabelInterval/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>snapDuration</td>\r\n                            <td>Duration</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/agenda/snapDuration/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>scrollTime</td>\r\n                            <td>Duration</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/agenda/scrollTime/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>minTime</td>\r\n                            <td>Duration</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/agenda/minTime/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>maxTime</td>\r\n                            <td>Duration</td>\r\n                            <td><a href=\"hhttp://fullcalendar.io/docs/agenda/maxTime/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>slotEventOverlap</td>\r\n                            <td>boolean</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/agenda/slotEventOverlap/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>nowIndicator</td>\r\n                            <td>boolean</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/nowIndicator/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dragRevertDuration</td>\r\n                            <td>number</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/dragRevertDuration/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dragOpacity</td>\r\n                            <td>number</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/dragOpacity/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dragScroll</td>\r\n                            <td>boolean</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/dragScroll/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>eventOverlap</td>\r\n                            <td>any</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventOverlap/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>eventConstraint</td>\r\n                            <td>any</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventConstraint/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>eventRender</td>\r\n                            <td>Function</td>\r\n                            <td><a href=\"https://fullcalendar.io/docs/event_rendering/eventRender/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dayRender</td>\r\n                            <td>Function</td>\r\n                            <td><a href=\"https://fullcalendar.io/docs/display/dayRender/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>timezone</td>\r\n                            <td>boolean|string</td>\r\n                            <td><a href=\"https://fullcalendar.io/docs/timezone/timezone/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>timeFormat</td>\r\n                            <td>string</td>\r\n                            <td><a href=\"https://fullcalendar.io/docs/text/timeFormat/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>navLinks</td>\r\n                            <td>string</td>\r\n                            <td><a href=\"https://fullcalendar.io/docs/mouse/navLinks/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>options</td>\r\n                            <td>Object</td>\r\n                            <td>A configuration object to define properties of FullCalendar that do not have a corresponding option in schedule.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onDayClick</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/mouse/dayClick/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEventClick</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/mouse/eventClick/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEventMouseover</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/mouse/eventMouseover/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEventMouseout</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/mouse/eventMouseout/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEventDragStart</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventDragStart/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEventDragStop</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventDragStop/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEventDrop</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventDrop/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEventResizeStart</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventResizeStart/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEventResizeStop</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventResizeStop/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEventResize</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/event_ui/eventResize/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onViewRender</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/display/viewRender/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onViewDestroy</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/display/viewDestroy/\">Read more</a></td>\r\n                        </tr>  \r\n                        <tr>\r\n                            <td>onDrop</td>\r\n                            <td><a href=\"https://fullcalendar.io/docs/dropping/drop/\">Read more</a></td>\r\n                        </tr>                        \r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-schedule [events]=\"events\" [header]=\"headerConfig\" (onEventClick)=\"handleEventClick($event)\"&gt;&lt;/p-schedule&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    handleEventClick(e) &#123;\r\n        //e.calEvent = Selected event\r\n        //e.jsEvent = Browser click event\r\n        //e.view = Current view object\r\n    &#125;\r\n    \r\n&#125;\r\n</code>\r\n</pre>\r\n            \r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>prev()</td>\r\n                            <td>-</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/prev/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>next()</td>\r\n                            <td>-</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/next/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>prevYear()</td>\r\n                            <td>-</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/prevYear/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>nextYear()</td>\r\n                            <td>-</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/nextYear/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>today()</td>\r\n                            <td>-</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/today/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>gotoDate(date)</td>\r\n                            <td>date: Date to navigate</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/gotoDate/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>incrementDate(duration)</td>\r\n                            <td>duration: Duration to add to current date</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/incrementDate/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>getDate()</td>\r\n                            <td>-</td>\r\n                            <td><a href=\"http://fullcalendar.io/docs/current_date/getDate/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>changeView(viewName)</td>\r\n                            <td>viewName: A valid view string to change to</td>\r\n                            <td><a href=\"https://fullcalendar.io/docs/views/changeView/\">Read more</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>updateEvent(event)</td>\r\n                          <td>event: Original Event Object for an event (not merely a reconstructed object)</td>\r\n                          <td><a href=\"https://fullcalendar.io/docs/event_data/updateEvent/\">Read more</a></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-schedule [events]=\"events\" #fc&gt;&lt;/p-schedule&gt;\r\n\r\n&lt;button type=\"button\" pButton (click)=\"back(fc)\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class MyModel &#123;\r\n\r\n    back(fc) &#123;\r\n        fc.prev();\r\n    &#125;\r\n    \r\n&#125;\r\n</code>\r\n</pre>\r\n            \r\n            <h3>Dependencies</h3>\r\n            <p><a href=\"http://fullcalendar.io/docs/usage/\">FullCalendar</a>.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/schedule\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-schedule [events]=\"events\" [header]=\"header\" defaultDate=\"2017-02-01\" [eventLimit]=\"4\" [editable]=\"true\"&gt;&lt;/p-schedule&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ScheduleDemo implements OnInit &#123;\r\n\r\n    events: any[];\r\n\r\n    header: any;\r\n            \r\n    constructor(private eventService: EventService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.eventService.getEvents().then(events => &#123;this.events = events;&#125;);\r\n        \r\n        this.header = &#123;\r\n            left: 'prev,next today',\r\n            center: 'title',\r\n            right: 'month,agendaWeek,agendaDay'\r\n        &#125;;\r\n    &#125;\r\n\r\n&#125;\r\n\r\nexport class MyEvent &#123;\r\n    id: number;\r\n    title: string;\r\n    start: string;\r\n    end: string;\r\n    allDay: boolean = true;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Injectable()\r\nexport class EventService &#123;\r\n    \r\n    constructor(private http: Http) &#123;&#125;\r\n\r\n    getEvents() &#123;\r\n        return this.http.get('showcase/resources/data/scheduleevents.json')\r\n                    .toPromise()\r\n                    .then(res =&gt; &lt;any[]&gt; res.json().data)\r\n                    .then(data =&gt; &#123; return data; &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/schedule/scheduledemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleDemoModule", function() { return ScheduleDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scheduledemo__ = __webpack_require__("../../../../../src/app/showcase/components/schedule/scheduledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scheduledemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/schedule/scheduledemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_schedule_schedule__ = __webpack_require__("../../../../../src/app/components/schedule/schedule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dialog_dialog__ = __webpack_require__("../../../../../src/app/components/dialog/dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_inputtext_inputtext__ = __webpack_require__("../../../../../src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_calendar_calendar__ = __webpack_require__("../../../../../src/app/components/calendar/calendar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_checkbox_checkbox__ = __webpack_require__("../../../../../src/app/components/checkbox/checkbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_button_button__ = __webpack_require__("../../../../../src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_tabview_tabview__ = __webpack_require__("../../../../../src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../../src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ScheduleDemoModule = (function () {
    function ScheduleDemoModule() {
    }
    ScheduleDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__scheduledemo_routing_module__["a" /* ScheduleDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_schedule_schedule__["a" /* ScheduleModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_dialog_dialog__["a" /* DialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_inputtext_inputtext__["a" /* InputTextModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_calendar_calendar__["a" /* CalendarModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_checkbox_checkbox__["a" /* CheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_10__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_12__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__scheduledemo__["a" /* ScheduleDemo */]
            ]
        })
    ], ScheduleDemoModule);
    return ScheduleDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/schedule/scheduledemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleDemo; });
/* unused harmony export MyEvent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_eventservice__ = __webpack_require__("../../../../../src/app/showcase/service/eventservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScheduleDemo = (function () {
    function ScheduleDemo(eventService) {
        this.eventService = eventService;
    }
    ScheduleDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.getEvents().then(function (events) { _this.events = events; });
        this.header = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
    };
    ScheduleDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/showcase/components/schedule/scheduledemo.html"),
            styles: ["\n        .ui-grid-row div {\n          padding: 4px 10px\n        }\n        \n        .ui-grid-row div label {\n          font-weight: bold;\n        }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_eventservice__["a" /* EventService */]])
    ], ScheduleDemo);
    return ScheduleDemo;
}());

var MyEvent = (function () {
    function MyEvent() {
        this.allDay = true;
    }
    return MyEvent;
}());



/***/ })

});
//# sourceMappingURL=scheduledemo.module.chunk.js.map