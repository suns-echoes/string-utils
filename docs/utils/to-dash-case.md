To dash case
============

Method for transfromation camel case string into dash case string.


Usage
-----

```js
const dashCaseString = StringUtils.toDashCase(string, conservative);
```


### Arguments

* `<string>` `string` - string to transform;
* `<boolean>` `[conservative]` - optional, dafault is `false`, don't group upper case letters.


### Returns

* `<string>` - transformed string.


Examples
--------

```js
// default settings:
StringUtils.toDashCase('thisIsTheCASE') === 'this-is-the-case';

// conservative mode:
StringUtils.toDashCase('ThisIsTheCASE', true) === 'this-is-the-c-a-s-e';

```
