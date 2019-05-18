'use strict';

var lower = 'abcdefghijklmnopqrstuvwxyz', upper = lower.toUpperCase(), numeric = '0123456789', types = {
    lower: lower,
    upper: upper,
    numeric: numeric,
    lowernumeric: "" + lower + numeric,
    uppernumeric: "" + upper + numeric,
    alphanumeric: "" + lower + upper + numeric
};
var random = (function (length, type) {
    if (length === void 0) { length = 12; }
    if (type === void 0) { type = 'alphanumeric'; }
    if (typeof length !== 'number')
        throw new Error('length must be a number');
    if (typeof type !== 'string')
        throw new Error('type must be a string');
    var splitType = type.split(':').map(function (v) { return v.trim(); });
    var t = '';
    var tk = Object.keys(types);
    if (splitType[0] !== 'scoped') {
        t = typeof type === 'string' && ~tk.indexOf(type) ? types[type] : types['alphanumeric'];
    }
    else if (typeof splitType[1] === 'string' && splitType[1].length) {
        t = splitType[1];
    }
    var str = '';
    var l = t.length;
    for (var i = 0; i < length; i++) {
        str += t.charAt(Math.floor(Math.random() * l));
    }
    return str;
});

module.exports = random;
