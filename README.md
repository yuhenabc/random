# random

A JavaScript random string generator with customizable length and characters.

## Install

By bower:

```bash
bower install random-string-generator
```

By npm:

```bash
npm install random-string-generator
```

By yarn:

```bash
yarn add random-string-generator
```

By pnpm:

```bash
pnpm add random-string-generator
```

By deno:

```bash
deno add jsr:@yuhenabc/random
```

## Documention

```
random([length] [, type]);
```

#### **length**:

Random string's length, default is `12`.

```javascript
random() // 'qCCm2Yoyycjm' or others
random(12) // 'qCCm2Yoyycjm' or others
random(16, 'numeric') // '2222953283744321' or others
```

#### **type**:

You can generate different variant of strings based on the choices available, default is `'alphanumeric'`:

##### 1. alphanumeric

To genereate alphanumeric characters. _example_

```javascript
random('alphanumeric') // 'qCCm2Yoyycjm' or others
```

##### 2. numeric

To generate numeric characters. _example_

```javascript
random('numeric') // '222295328374' or others
```

##### 3. upper

To generate upper case alphabetic characters. _example_

```javascript
random('upper') // 'ELYGLGBVKLUE' or others
```

##### 4. lower

To generate lower case alphabetic characters. _example_

```javascript
random('lower') // 'pivohkmuzxrv' or others
```

##### 5. uppernummeric

To generate upper case numeric characters. _example_

```javascript
random('uppernumeric') // '8DOUIL7RW8MW' or others
```

##### 6. lowernummeric

To generate upper case numeric characters. _example_

```javascript
random('lowernumeric') // 'k0oooqv77wrq' or others
```

##### 7. scoped:.+

To generate upper case numeric characters. _example_

```javascript
random('scoped:ABCDEF') // 'ACBBCAFCEDAA' or others
```

## Usage

#### Use with HTML &lt;script&gt; tag:

```html
<script src="/bower_components/random-string-generator/dist/random.js"></script>
```

other js field you can write:

```html
<script>
  console.log(random()) // 'qCCm2Yoyycjm' or others
</script>
```

#### Use with require.js:

```javascript
define(['./bower_components/random-string-generator/dist/random.js'], function (random) {
  console.log(random()) // 'qCCm2Yoyycjm' or others
})
```

#### Use with node modules:

```javascript
import random from 'random-string-generator'

console.log(random()) // 'qCCm2Yoyycjm' or others
```

## Example

```javascript
import random from 'random-string-generator'

const result = random(100000, 'scoped:ABCDE')
const stat = [0, 0, 0, 0, 0]

for (const s of result) {
  switch (s) {
    case 'A':
      stat[0]++
      break
    case 'B':
      stat[1]++
      break
    case 'C':
      stat[2]++
      break
    case 'D':
      stat[3]++
      break
    case 'E':
      stat[4]++
      break
    default:
      break
  }
}

const output = (char, num) => `${char}: ${stat[num] / 1000}%`

console.log(output('A', 0))
console.log(output('B', 1))
console.log(output('C', 2))
console.log(output('D', 3))
console.log(output('E', 4))

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
