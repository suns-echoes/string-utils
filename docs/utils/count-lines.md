Count Lines
===========

Method counts lines in given string.

```js
/* string */ StringUtils.countLines(
	/* number */ str
)
```


Arguments
---------

* `<string>` `str` - string to check.


Returns
-------

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
