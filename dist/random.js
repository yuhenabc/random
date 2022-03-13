(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.random = factory());
})(this, (function () { 'use strict';

    var lower = 'abcdefghijklmnopqrstuvwxyz', upper = lower.toUpperCase(), numeric = '0123456789', types = {
        lower: lower,
        upper: upper,
        numeric: numeric,
        lowernumeric: "".concat(lower).concat(numeric),
        uppernumeric: "".concat(upper).concat(numeric),
        alphanumeric: "".concat(lower).concat(upper).concat(numeric)
    }, tk = Object.keys(types);
    function random (length, type) {
        switch (arguments.length) {
            case 0:
                length = 12;
                type = 'alphanumeric';
                break;
            case 1:
                if (typeof arguments[0] === 'string') {
                    length = 12;
                    type = arguments[0];
                }
                else {
                    type = 'alphanumeric';
                }
                break;
        }
        if (typeof length !== 'number')
            throw new Error('length must be a number, but you give a ' + typeof length + '.');
        if (typeof type !== 'string') {
            throw new Error('type must be a string, but you give a ' + typeof type + '.');
        }
        else if (!~tk.indexOf(type) && !/^scoped:.+$/.test(type)) {
            throw new Error('type must be one of ' + tk.join(', ') + ', scoped:*, but you not.');
        }
        var splitType = type.split(':').map(function (v) { return v.trim(); });
        var t = '';
        if (splitType[0] !== 'scoped') {
            t = types[type];
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
    }

    return random;

}));
