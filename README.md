# random

Javascript random string generator, the length and scope can be custom defined.

## Install

By bower:

```
bower install random-string-generator
```

By npm:

```
npm install random-string-generator
```

## Documention

```
random([length [, type]]); // This generates random 12 alphanumeric characters.
```

#### **length**:

random string's length, default is 12.

You can generate different variant of strings based on the choices available:

1. **alphanumeric** To genereate alphanumeric characters. *example*:

```javascript
random(undefined, 'alphanumeric'); // qCCm2Yoyycjm
random(); // qCCm2Yoyycjm
```
2. **numeric** To generate numeric characters. *example*

```javascript
random(undefined, 'numeric'); // 222295328374
```

3. **upper** To generate upper case alphabetic characters. *example*

```javascript
random(undefined, 'upper'); // ELYGLGBVKLUE
```

4. **lower** To generate lower case alphabetic characters. *example*

```javascript
random(undefined, 'lower'); // pivohkmuzxrv
```

5. **uppernummeric** To generate upper case numeric characters. *example*

```javascript
random(undefined, 'uppernumeric'); // 8DOUIL7RW8MW
```

6. **lowernummeric** To generate upper case numeric characters. *example*

```javascript
random(undefined, 'lowernumeric'); // k0oooqv77wrq
```

7. **scoped:.+** To generate upper case numeric characters. *example*

```javascript
random(undefined, 'scoped:ABCDEF'); // ACBBCAFCEDAA
```

## Usage

#### Use with HTML &lt;script&gt; tag:

```html
<script src="/bower_components/random-string-generator/dist/random.js"></script>
```

other js field you can write:

```html
<script>
  console.log(random(12));  // 'abcABC123' or others
</script>
```

#### Use with require.js:

```javascript
define(["./bower_components/random-string-generator/dist/random.js"], function(random) {
    console.log(random(12));  // 'abcABC123' or others
  }
);
```

#### Use with node modules:

```javascript
var random = require('random-string-generator');

console.log(random(12));  // 'abcABC123' or others
```

## Example

```javascript
var random = require('random-string-generator');
var result = random(100000, 'scoped:ABCDE');
var stat = [0, 0, 0, 0, 0];
for (var i in result) {
    var s = result[i];
    switch (s) {
        case 'A': stat[0]++; break;
        case 'B': stat[1]++; break;
        case 'C': stat[2]++; break;
        case 'D': stat[3]++; break;
        case 'E': stat[4]++; break;
        default: break;
    }
}

function put(char, num) {
    return char + ': ' + stat[num] / 1000;
}

console.log(put('A', 0));
console.log(put('B', 1));
console.log(put('C', 2));
console.log(put('D', 3));
console.log(put('E', 4));

/*
 * The results may be:
 *
 * A: 20.044
 * B: 19.969
 * C: 19.93
 * D: 19.991
 * E: 20.066
 *
 * or some others.
*/
```

## Contributing

Instead of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

## License

Licensed under the MIT license.
