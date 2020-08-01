Count Lines
===========

Method counts lines in given string.


Usage
-----

```js
const lineCount = StringUtils.countLines(string);
```


### Arguments

* `<string>` `string` - string to check.


### Returns

* `<number>` - lines count.


Examples
--------

```js
// empty string
StringUtils.countLines('') === 0;

// single line
StringUtils.countLines('line') === 1;

// multiple lines
StringUtils.countLines('line\nline\nline') === 3;
```
