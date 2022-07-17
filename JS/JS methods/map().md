[[Arrays]] #js-methods
# Array.prototype.map()
[Docmumentation](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

Метод **map()** создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

## [Синтаксис](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map#syntax "Permalink to Синтаксис")

```js

const new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // Возвращает элемент для new_array
}[, thisArg])

```

```js
const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);
// теперь doubles равен [2, 8, 18], а numbers всё ещё равен [1, 4, 9]
```


### [Параметры](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map#parameters "Permalink to Параметры")

`callback`
Функция, вызываемая для каждого элемента массива `arr`. Каждый раз, когда `callback` выполняется, возвращаемое значение добавляется в `new_array`.
Функция `callback`, создающая элемент в новом массиве, принимает три аргумента:

`currentValue`
Текущий обрабатываемый элемент массива.

`index`Необязательный
Индекс текущего обрабатываемого элемента в массиве.

`array`Необязательный
Массив, по которому осуществляется проход.

`thisArg`Необязательный
Необязательный параметр. Значение, используемое в качестве `this` при вызове функции `callback`

### [Возвращаемое значение](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map#%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D0%BC%D0%BE%D0%B5_%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5 "Permalink to Возвращаемое значение")

Новый массив, где каждый элемент является результатом `callback` функции.