'use strict';

var lower = 'abcdefghijklmnopqrstuvwxyz', upper = lower.toUpperCase(), numeric = '0123456789', types = { lower: lower, upper: upper, numeric: numeric, alphanumeric: "" + lower + upper + numeric };
var random = (function (length, scope, type) {
    if (length === void 0) { length = 12; }
    if (scope === void 0) { scope = ""; }
    if (type === void 0) { type = 'alphanumeric'; }
    if (typeof length !== 'number')
        throw new Error('length must be a number');
    if (typeof scope !== 'string')
        throw new Error('scope must be a string');
    var tk = Object.keys(types);
    var t = typeof type === 'string' && ~tk.indexOf(type) ? types[type] : types['alphanumeric'];
    var str = '';
    var l = t.length;
    for (var i = 0; i < length; i++) {
        str += t.charAt(Math.floor(Math.random() * l));
    }
    return str;
});

module.exports = random;
