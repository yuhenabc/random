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

By yarn:

```
yarn add random-string-generator
```

## Documention

```
random([length] [, type]);
```

#### **length**:

Random string's length, default is `12`.

```javascript
random(); // 'qCCm2Yoyycjm' or others
random(12); // 'qCCm2Yoyycjm' or others
```

#### **type**:

You can generate different variant of strings based on the choices available, default is `'alphanumeric'`:

##### 1. alphanumeric

To genereate alphanumeric characters. *example*

```javascript
random('alphanumeric'); // 'qCCm2Yoyycjm' or others
```

##### 2. numeric

To generate numeric characters. *example*

```javascript
random('numeric'); // '222295328374' or others
```

##### 3. upper

To generate upper case alphabetic characters. *example*

```javascript
random('upper'); // 'ELYGLGBVKLUE' or others
```

##### 4. lower

To generate lower case alphabetic characters. *example*

```javascript
random('lower'); // 'pivohkmuzxrv' or others
```

##### 5. uppernummeric

To generate upper case numeric characters. *example*

```javascript
random('uppernumeric'); // '8DOUIL7RW8MW' or others
```

##### 6. lowernummeric

To generate upper case numeric characters. *example*

```javascript
random('lowernumeric'); // 'k0oooqv77wrq' or others
```

##### 7. scoped:.+

To generate upper case numeric characters. *example*

```javascript
random('scoped:ABCDEF'); // 'ACBBCAFCEDAA' or others
```

## Usage

#### Use with HTML &lt;script&gt; tag:

```html
<script src="/bower_components/random-string-generator/dist/random.js"></script>
```

other js field you can write:

```html
<script>
  console.log(random());  // 'qCCm2Yoyycjm' or others
</script>
```

#### Use with require.js:

```javascript
define(["./bower_components/random-string-generator/dist/random.js"], function(random) {
    console.log(random());  // 'qCCm2Yoyycjm' or others
  }
);
```

#### Use with node modules:

```javascript
var random = require('random-string-generator');

console.log(random());  // 'qCCm2Yoyycjm' or others
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

function output(char, num) {
    return char + ': ' + stat[num] / 1000 + '%';
}

console.log(output('A', 0));
console.log(output('B', 1));
console.log(output('C', 2));
console.log(output('D', 3));
console.log(output('E', 4));

/*
 * The results may be:
 *
 * A: 20.044%
 * B: 19.969%
 * C: 19.93%
 * D: 19.991%
 * E: 20.066%
 *
 * or some others.
*/
```

## Contributing

Instead of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

## License

Licensed under the MIT license.
