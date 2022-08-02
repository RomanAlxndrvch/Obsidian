[[Arrays]] #methods 

# Array.prototype.every()
[Documentation](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

Метод **every()** проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

**Обратите внимание**: метод возвращает `true` при любом условии для пустого массива.

## [Синтаксис](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every#syntax "Permalink to Синтаксис")

  ```
arr.every(callback(currentValue, index, array, thisArg)
```

### [Параметры](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every#parameters "Permalink to Параметры")

`callback`
Функция проверки каждого элемента, принимает три аргумента:

`currentValue`
Текущий обрабатываемый элемент массива.

`index`Необязательный
Индекс текущего обрабатываемого элемента массива.

`array`Необязательный
Массив, по которому осуществляется проход.

`thisArg`Необязательный
Необязательный параметр. Значение, используемое в качестве `this` при выполнении функции `callback`.

### [Возвращаемое значение](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every#%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D0%BC%D0%BE%D0%B5_%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5 "Permalink to Возвращаемое значение")

`**true**` если функция проверки возвращает [truthy](https://developer.mozilla.org/ru/docs/Glossary/Truthy) значение для каждого элемента массива. Иначе, `**false**`.