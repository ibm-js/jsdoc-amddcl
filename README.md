# jsdoc-amddcl-template

This repositry contains an effort to create a JSDoc template that works well with [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) and C3MRO-based multiple class inheritance.

## Setup

First you need to:

1. Create a directory, /path/to/jsdoc-amddcl-template/templates/amddcl/static/scripts/prettify
2. Download [prettify](https://code.google.com/p/google-code-prettify/) and place prettify.js as well as lang-css.js under /path/to/jsdoc-amddcl-template/templates/amddcl/static/scripts/prettify

Then you can use the template by:

```sh
$ jsdoc mycode.js -t /path/to/jsdoc-amddcl-template/templates/amddcl
```

## Licensing

This project is distributed by the Dojo Foundation and licensed under the ["New" BSD License](./LICENSE).
All contributions require a [Dojo Foundation CLA](http://dojofoundation.org/about/claForm).

This is a derivative work of JSDoc 3 which is copyright (c) 2011-2014 Michael Mathews <micmath@gmail.com> and the
[contributors to JSDoc](https://github.com/jsdoc3/jsdoc/graphs/contributors).

JSDoc 3 is free software, licensed under the Apache License, Version 2.0. See
the file `LICENSE-jsdoc.md` in this distribution for more details.
