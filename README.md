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

## List of changes on top of the original

* Fix to an issue of duplicate doc of a method.
  It happens if a method is defined in more than one parent classes, but not in child class.
* Show modules in AMD format instead of CommonJS format.
* Makes sure inheritance chain is shown for modules exporting what `dcl()`[http://www.dcljs.org/] returns.

## Licensing

This project is distributed by the Dojo Foundation and licensed under the ["New" BSD License](./LICENSE).
All contributions require a [Dojo Foundation CLA](http://dojofoundation.org/about/claForm).

This is a derivative work of JSDoc 3 which is copyright (c) 2011-2014 Michael Mathews <micmath@gmail.com> and the
[contributors to JSDoc](https://github.com/jsdoc3/jsdoc/graphs/contributors).

JSDoc 3 is free software, licensed under the Apache License, Version 2.0. See
the file `LICENSE-jsdoc.md` in this distribution for more details.
