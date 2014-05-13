# jsdoc-amddcl

This repositry contains an effort to create a JSDoc template and plugins that work well with [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) and C3MRO-based multiple class inheritance.

## Setup

First you need to:

1. Create a directory, /path/to/jsdoc-amddcl/templates/amddcl/static/scripts/prettify
2. Download [prettify](https://code.google.com/p/google-code-prettify/) and place prettify.js as well as lang-css.js under /path/to/jsdoc-amddcl/templates/amddcl/static/scripts/prettify
3. Make sure your project has package.json, so that JSDoc can understand the name of your project

Then you can use the template/plugins by:

```sh
$ cd /path/to/jsdoc-amddcl
$ jsdoc -c ./conf.json /path/to/yourproject /path/to/yourproject/README.md /path/to/yourproject/package.json
```

The [conf.json](https://github.com/ibm-js/jsdoc-amddcl/blob/master/conf.json) file contains the pointer to our template/plugins, as well as the typical usage pattern using our template/plugins.

You can try a sample project in this repo:

```sh
$ cd /path/to/jsdoc-amddcl
$ jsdoc -c ./conf.json ./sampleprojects/sampleproject/ ./sampleprojects/sampleproject/README.md ./sampleprojects/sampleproject/package.json
```

## Importing doclets from other projects

First you export doclets of the dependant projects by JSDoc's `-X` option:

```sh
$ cd /path/to/jsdoc-amddcl
$ mkdir out/dependantproject
$ jsdoc -X -c ./conf.json /path/to/dependantproject /path/to/dependantproject/package.json >! out/dependantproject/doclets.json
```

All doclets.json files under JSDoc output directory is searched by [our plugin to import doclets](https://github.com/ibm-js/jsdoc-amddcl/blob/master/custom-plugins/importer.js).

You can try a sample project in this repo:

```sh
$ cd /path/to/jsdoc-amddcl
$ mkdir out/sampleframework
$ jsdoc -X -c ./conf.json ./sampleprojects/sampleframework ./sampleprojects/sampleframework/package.json > out/sampleframework/doclets.json
```

## List of changes on top of the original

* Fix to an issue of duplicate doc of a method.
  It happens if a method is defined in more than one parent classes, but not in child class.
* Show modules in AMD format instead of CommonJS format.
* Makes sure inheritance chain is shown for modules exporting what [`dcl()`](http://www.dcljs.org/) returns.
* Allows you to import doclets from other projects (see above section).

## Licensing

This project is distributed by the Dojo Foundation and licensed under the ["New" BSD License](./LICENSE).
All contributions require a [Dojo Foundation CLA](http://dojofoundation.org/about/claForm).

This is a derivative work of JSDoc 3 which is copyright (c) 2011-2014 Michael Mathews <micmath@gmail.com> and the
[contributors to JSDoc](https://github.com/jsdoc3/jsdoc/graphs/contributors).

JSDoc 3 is free software, licensed under the Apache License, Version 2.0. See
the file `LICENSE-jsdoc.md` in this distribution for more details.
