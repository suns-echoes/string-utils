Insert
======

**Insert string**

Inserts new string into original one.

```js
/* string */ StringUtils.insert(
	/* string */ string,
	/* string */ insertion,
	/* number */ [position=0]
)
```


Arguments
---------

* `<string>` `string` - original string;
* `<string>` `insertion` - string to insert;
* `<number>` `[position]` - optional, default is 0, insert at this position.


Returns
-------

* `string` - new string.


Examples
--------

```js
// default position is 0
StringUtils.insert('123456789', '+++') === '+++123456789';

// insert at given position
StringUtils.insert('123456789', '+++', 3) === '123+++456789';

// if position is above string length, insertion will be added at the end
StringUtils.insert('123456789', '+++', 99) === '123456789+++';

// if position is negative it will be calculated from string end
StringUtils.insert('123456789', '+++', -3) === '123456+++789';

// position below 0 will be treated as 0
StringUtils.insert('123456789', '+++', -99) === '+++123456789';
```
