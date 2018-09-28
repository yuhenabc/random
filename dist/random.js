(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.random = factory());
}(this, (function () { 'use strict';

  function random () {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
    var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    if (typeof length !== 'number') throw new Error('length must be a number');
    if (typeof scope !== 'string') throw new Error('scope must be a string');
    var str = '';
    var l = scope.length;

    for (var i = 0; i < length; i++) {
      str += scope.charAt(Math.floor(Math.random() * l));
    }

    return str;
  }

  return random;

})));
