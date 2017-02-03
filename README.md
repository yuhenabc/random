# random

Javascript random string generator, the length and scope can be custom defined.

## Install

By bower:

```
bower install @yuhenabc/random
```

By npm:

```
npm install @yuhenabc/random
```

## Usage

### Use with HTML &lt;script&gt; tag:

```
<script src="/node_modules/random/dist/random.js"></script>
```

other js field you can write:

```
<script>
  console.log(random(12, 'ABCD'));   // 'BBCCBACDAADD' or others
</script>
```

### Use with require.js:

```
define(["./node_modules/random/dist/random.js"], function(random) {
    console.log(random(12, 'ABCD'));   // 'BBCCBACDAADD' or others
  }
);
```

### Use with npm:

```
var ran = require('random');

console.log(ran(12, 'ABCD'));   // 'BBCCBACDAADD' or others
```

## Contributing

Instead of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

## License

Licensed under the MIT license.
