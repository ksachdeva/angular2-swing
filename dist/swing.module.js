"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var swing_stack_component_1 = require('./swing-stack-component');
var swing_card_component_1 = require('./swing-card-component');
var SwingModule = (function () {
    function SwingModule() {
    }
    SwingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [swing_stack_component_1.SwingStackComponent, swing_card_component_1.SwingCardComponent],
                    exports: [swing_card_component_1.SwingCardComponent, swing_stack_component_1.SwingStackComponent]
                },] },
    ];
    /** @nocollapse */
    SwingModule.ctorParameters = function () { return []; };
    return SwingModule;
}());
exports.SwingModule = SwingModule;
//# sourceMappingURL=swing.module.js.map