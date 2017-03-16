"use strict";
var Swing = require('swing');
(function (ThrowDirection) {
    ThrowDirection[ThrowDirection["LEFT"] = -1] = "LEFT";
    ThrowDirection[ThrowDirection["RIGHT"] = 1] = "RIGHT";
    ThrowDirection[ThrowDirection["UP"] = 2] = "UP";
    ThrowDirection[ThrowDirection["DOWN"] = 3] = "DOWN";
})(exports.ThrowDirection || (exports.ThrowDirection = {}));
var ThrowDirection = exports.ThrowDirection;
(function (Direction) {
    Direction[Direction["DOWN"] = Swing.Direction.DOWN] = "DOWN";
    Direction[Direction["INVALID"] = Swing.Direction.INVALID] = "INVALID";
    Direction[Direction["LEFT"] = Swing.Direction.LEFT] = "LEFT";
    Direction[Direction["RIGHT"] = Swing.Direction.RIGHT] = "RIGHT";
    Direction[Direction["UP"] = Swing.Direction.UP] = "UP";
})(exports.Direction || (exports.Direction = {}));
var Direction = exports.Direction;
//# sourceMappingURL=swing.js.map