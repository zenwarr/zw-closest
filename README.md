# What is it?

Same as `$.fn.closest` from jQuery, but without jQuery.
Does not modify any global objects or prototypes.
Gracefully falls back to using native `Element.closest` and `Element.matches` if ones are available.
The only requirement is native `Element.querySelectorAll` method, so it is compatible with all browsers except IE <= 7.

# Installation

```
npm i --save @zcomp/closest
```

# Usage

```javascript
const closest = require('@zcomp/closest');

closest(document.body, 'html');
```
