# lab 2: javascript basics

## C. Welcome to Programming in Javascript

3.

```js
var y = "Hello World";
y.includes("hello"); // false
y.repeat(10); // 'Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World'
```

4.

```js
function square(i) {
    return i * i;
}

square(2.5); // 6.25
square("hello") // NaN
```

5.

```js
function square(i) {
  if (typeof i === 'number')
  {
    return i * i;
  }
  return -1;
}
```

6.

```js
function numberString(i) {
  let result = "";
  if (Number.isInteger(number) && number > 0)
  {
    for (let n = 1; n <= i; n++)
    {
      result += n.toString();
    }
    return result;
  }
  return -1;
}
`