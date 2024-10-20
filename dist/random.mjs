var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = lower.toUpperCase();
var numeric = '0123456789';
var types = {
    lower: lower,
    upper: upper,
    numeric: numeric,
    lowernumeric: "".concat(lower).concat(numeric),
    uppernumeric: "".concat(upper).concat(numeric),
    alphanumeric: "".concat(lower).concat(upper).concat(numeric)
};
var typeKeys = Object.keys(types);
/**
 * Generate random string
 *
 * @param {number} length The length of the random string
 * @param {string} type The type of the random string
 * @returns {string}
*/
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
    else if (!~typeKeys.indexOf(type) && !/^scoped:.+$/.test(type)) {
        throw new Error('type must be one of ' + typeKeys.join(', ') + ', scoped:*, but you not.');
    }
    var splitedTypes = type.split(':').map(function (v) { return v.trim(); });
    var t = '';
    if (splitedTypes[0] !== 'scoped') {
        t = types[type];
    }
    else if (typeof splitedTypes[1] === 'string' && splitedTypes[1].length) {
        t = splitedTypes[1];
    }
    var str = '';
    var l = t.length;
    for (var i = 0; i < length; i++) {
        str += t.charAt(Math.floor(Math.random() * l));
    }
    return str;
}

export { random as default };
