[[Arrays]] #js-methods


# Array.prototype.filter()
[Documentation](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Метод **`filter()`** **создаёт новый массив со всеми элементами**, прошедшими проверку, задаваемую в передаваемой функции.

## [Синтаксис](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#%D1%81%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%81 "Permalink to Синтаксис")

``` js
// Стрелочная функция
filter((element) => { ... } )
filter((element, index) => { ... } )
filter((element, index, array) => { ... } )

// Колбэк-функция
filter(callbackFn)
filter(callbackFn, thisArg)

// Встроенная колбэк-функция
filter(function callbackFn(element) { ... })
filter(function callbackFn(element, index) { ... })
filter(function callbackFn(element, index, array){ ... })
filter(function callbackFn(element, index, array) { ... }, thisArg)
```

Copy to Clipboard

### [Параметры](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B "Permalink to Параметры")

`callbackFn`
Функция-предикат, которая будет вызвана для проверки каждого элемента массива. Если функция возвращает `true`, то элемент остаётся в массиве, если `false`, то удаляется.

Принимает три аргумента:

`element`
Текущий обрабатываемый элемент в массиве.

`index`Необязательный
Индекс текущего обрабатываемого элемента в массиве.

`array`Необязательный
Обрабатываемый массив, на котором был вызван метод `filter()`.

`thisArg`Необязательный
Значение, используемое в качестве `this` при вызове колбэк-функции `callbackFn`.

Вернётся новый массив с элементами, которые прошли проверку. Если ни один элемент не прошёл проверку, то будет возвращён пустой массив.

## [Примеры](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B "Permalink to Примеры")

### [Фильтрация всех маленьких значений](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%B2%D1%81%D0%B5%D1%85_%D0%BC%D0%B0%D0%BB%D0%B5%D0%BD%D1%8C%D0%BA%D0%B8%D1%85_%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B9 "Permalink to Фильтрация всех маленьких значений")

Следующий пример использует `filter()` для создания отфильтрованного массива, все элементы которого больше или равны 10, а все меньшие 10 удалены.

``` js
function isBigEnough(value) {
  return value >= 10;
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// массив filtered теперь содержит [12, 130, 44]
```

## [Описание](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#%D0%BE%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5 "Permalink to Описание")

Метод `filter()` вызывает переданную функцию `callback` один раз для каждого элемента, присутствующего в массиве, и создаёт новый массив со всеми значениями, для которых функция `callback` вернула [значение, которое может быть приведено к `true`](https://developer.mozilla.org/ru/docs/Glossary/Truthy). Функция `callback` вызывается только для индексов массива с уже определёнными значениями; она не вызывается для индексов, которые были удалены или которым значения никогда не присваивались. Элементы массива, не прошедшие проверку функцией `callback`, просто пропускаются и не включаются в новый массив.

Функция `callback` вызывается с тремя аргументами:

1.  значение элемента;
2.  индекс элемента;
3.  массив, по которому осуществляется проход.

Если в метод `filter()` был передан параметр `thisArg`, при вызове `callback` он будет использоваться в качестве значения `this`. В противном случае в качестве значения `this` будет использоваться значение `undefined`. В конечном итоге, значение `this`, наблюдаемое из функции `callback`, определяется согласно [обычным правилам определения `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).

Метод `filter()` не изменяет массив, для которого он был вызван.

Элементы массива, обрабатываемые методом `filter()`, устанавливается до первого вызова функции `callback`. Элементы, добавленные в массив после начала выполнения метода `filter()`, либо изменённые в процессе выполнения, не будут обработаны функцией `callback`. Соответствующим образом, если существующие элементы удаляются из массива, они также не будут обработаны

**Предупреждение:** одновременное изменение элементов, описанное в предыдущем параграфе, часто приводит к труднопонимаемому коду, поэтому не рекомендуется делать это (за исключением особых случаев).