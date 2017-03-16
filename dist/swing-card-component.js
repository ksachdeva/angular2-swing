"use strict";
var core_1 = require('@angular/core');
var swing_stack_component_1 = require('./swing-stack-component');
var SwingCardComponent = (function () {
    function SwingCardComponent(elmentRef, swingStack) {
        this.elmentRef = elmentRef;
        this.swingStack = swingStack;
    }
    SwingCardComponent.prototype.ngOnInit = function () {
        this.swingStack.addCard(this);
    };
    SwingCardComponent.prototype.getElementRef = function () {
        return this.elmentRef;
    };
    SwingCardComponent.prototype.getNativeElement = function () {
        return this.elmentRef.nativeElement;
    };
    SwingCardComponent.prototype.getCard = function () {
        return this.swingStack.stack.getCard(this.getNativeElement());
    };
    SwingCardComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[swing-card]',
                    template: "\n    <ng-content></ng-content>\n  "
                },] },
    ];
    /** @nocollapse */
    SwingCardComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: swing_stack_component_1.SwingStackComponent, },
    ]; };
    return SwingCardComponent;
}());
exports.SwingCardComponent = SwingCardComponent;
//# sourceMappingURL=swing-card-component.js.map