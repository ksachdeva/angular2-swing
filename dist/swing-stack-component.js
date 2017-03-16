"use strict";
var core_1 = require('@angular/core');
var Swing = require('swing');
var SwingStackComponent = (function () {
    function SwingStackComponent() {
        this.throwout = new core_1.EventEmitter();
        this.throwoutend = new core_1.EventEmitter();
        this.throwoutleft = new core_1.EventEmitter();
        this.throwoutright = new core_1.EventEmitter();
        this.throwoutup = new core_1.EventEmitter();
        this.throwoutdown = new core_1.EventEmitter();
        this.throwin = new core_1.EventEmitter();
        this.throwinend = new core_1.EventEmitter();
        this.dragstart = new core_1.EventEmitter();
        this.dragmove = new core_1.EventEmitter();
        this.dragend = new core_1.EventEmitter();
        this.cards = [];
    }
    SwingStackComponent.prototype.addCard = function (card) {
        this.cards.push(card);
        if (this.stack) {
            this.stack.createCard(card.getNativeElement());
        }
    };
    SwingStackComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.stack = Swing.Stack(this.stackConfig || {});
        this.cards.forEach(function (c) { return _this.stack.createCard(c.getNativeElement()); });
        // Hook various events
        this.stack.on('throwout', function ($event) { return _this.throwout.emit($event); });
        this.stack.on('throwoutend', function ($event) { return _this.throwoutend.emit($event); });
        this.stack.on('throwoutleft', function ($event) { return _this.throwoutleft.emit($event); });
        this.stack.on('throwoutright', function ($event) { return _this.throwoutright.emit($event); });
        this.stack.on('throwin', function ($event) { return _this.throwin.emit($event); });
        this.stack.on('throwinend', function ($event) { return _this.throwinend.emit($event); });
        this.stack.on('dragstart', function ($event) { return _this.dragstart.emit($event); });
        this.stack.on('dragmove', function ($event) { return _this.dragmove.emit($event); });
        this.stack.on('dragend', function ($event) { return _this.dragend.emit($event); });
        this.stack.on('throwoutup', function ($event) { return _this.throwoutup.emit($event); });
        this.stack.on('throwoutdown', function ($event) { return _this.throwoutdown.emit($event); });
    };
    SwingStackComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[swing-stack]',
                    template: "\n    <ng-content></ng-content>\n  ",
                    outputs: [
                        'throwout',
                        'throwoutend',
                        'throwoutleft',
                        'throwoutright',
                        'throwoutup',
                        'throwoutdown',
                        'throwin',
                        'throwinend',
                        'dragstart',
                        'dragmove',
                        'dragend',
                    ]
                },] },
    ];
    /** @nocollapse */
    SwingStackComponent.ctorParameters = function () { return []; };
    SwingStackComponent.propDecorators = {
        'stackConfig': [{ type: core_1.Input },],
    };
    return SwingStackComponent;
}());
exports.SwingStackComponent = SwingStackComponent;
//# sourceMappingURL=swing-stack-component.js.map