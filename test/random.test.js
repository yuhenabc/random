var random = require('../');

var TIMES = 10000000;
var result = random(TIMES, 'ABCDE');
var stat = [0, 0, 0, 0, 0];
for (var i in result) {
  var s = result[i];
  switch (s) {
    case 'A':
      stat[0]++;
      break;
    case 'B':
      stat[1]++;
      break;
    case 'C':
      stat[2]++;
      break;
    case 'D':
      stat[3]++;
      break;
    case 'E':
      stat[4]++;
      break;
    default:
      break;
  }
}

test('stat is normal', () => {
  var target_ratio = 1 / stat.length;
  for (var i = stat.length; i--;) {
    var cur_ratio = stat[i] / TIMES;
    expect(cur_ratio).toBeCloseTo(target_ratio, 3);
  }
});
