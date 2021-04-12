To camel case
=============

Method for transfromation dash case string into camel case string.


Usage
-----

```js
const camelCaseString = StringUtils.toCamelCase(string, capital);
```


### Arguments

* `<string>` `string` - string to transform;
* `<boolean>` `[capital]` - optional, dafault is `false`, start from upper letter.


### Returns

* `<string>` - transformed string.


Examples
--------

```js
// default settings:
StringUtils.toCamelCase('this-is-the-case') === 'thisIsTheCase';

// capital first letter:
StringUtils.toCamelCase('this-is-the-case', true) === 'ThisIsTheCase';

```
