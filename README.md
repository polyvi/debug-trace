# debug-trace
A  wrapper of tj/debug for functional programming. 

The only difference is debug-trace-fn return the first argument instead of return void, so you can use it in any places such as in an expression. 

# Installation

```bash
$ npm install debug-trace-fn
```

# Usage

- require/import:

```javascript
var Trace = require('debug-trace-fn');
```

  or es6/typescript:

```typescript
import * as Debug  from 'debug-trace-fn';
```


- same usage as [tj/debug](https://github.com/visionmedia/debug)
- in an expression: 


```javascript
x=y+z;  // x=y+debug(z);

obj={a:100,b:200};
foo(obj.a);// foo(debug(obj).a);
```

- for functional programming:

```javascript
import * as Trace from 'debug-trace-fn'
const trace = Trace('trace')

import * as R from 'ramda'

const f = R.compose(
    f2,
    trace,
    f1
)
f1[1,2,3] //output: trace [ 1, 2, 3 ] +0ms
```

  