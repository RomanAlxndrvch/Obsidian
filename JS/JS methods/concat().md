[[Arrays]] #js-methods

# Array.prototype.concat()
[Docomentation](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

Метод **concat()** возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.

### Следующий код соединяет два массива:
``` js
var alpha = ['a', 'b', 'c'],
    numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Результат: ['a', 'b', 'c', 1, 2, 3]
```

### Следующий код соединяет три массива:
``` js
var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);

console.log(nums); // Результат: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
