Overwrite
=========

Method overwrites part of the original string with new one starting from given position.

```js
/* string */ StringUtils.overwrite(
	/* string */ string,
	/* string */ insertion,
	/* number */ [position=0]
)
```


Arguments
---------

* `<string>` `string` - original string;
* `<string>` `insertion` - string to insert that will overwrite part of original one;
* `<number>` `[position]` - optional, default is 0, overwrite from this position.


Returns
-------

* `string` - new string.


Examples
--------

```js
// default position is 0
StringUtils.overwrite('123456789', '+++') === '+++456789';

// start to overwrite from given position
StringUtils.overwrite('123456789', '+++', 3) === '123+++789';

// if position is above string length, insertion will be added at the end
StringUtils.overwrite('123456789', '+++', 99) === '123456789+++';

// if position is negative, it will be calculated from string end
StringUtils.overwrite('123456789', '+++', -1) === '12345678+++';

StringUtils.overwrite('123456789', '+++', -4) === '12345+++9';

StringUtils.overwrite('123456789', '+++', -10) === '+++3456789';

StringUtils.overwrite('123456789', '+++', -99) === '+++123456789';
```
