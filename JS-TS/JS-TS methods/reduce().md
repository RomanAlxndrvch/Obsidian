[[Arrays]] #methods 

# Array.prototype.reduce()
[Documentation](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

Метод **reduce()** применяет функцию **reducer** к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

## [Синтаксис](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#syntax "Permalink to Синтаксис")

```
array.reduce(callback[, initialValue])
```

### [Параметры](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#parameters "Permalink to Параметры")

`callback`
Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:

`accumulator`
Аккумулятор, аккумулирующий значение, которое возвращает функция **callback** после посещения очередного элемента, либо значение `initialValue`, если оно предоставлено (смотрите пояснения ниже).

`currentValue`
Текущий обрабатываемый элемент массива.

`index` Необязательный
Индекс текущего обрабатываемого элемента массива.

`array` Необязательный
Массив, для которого была вызвана функция `reduce`.

`initialValue`Необязательный
Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции `callback`.

# Example
```tsx

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.  
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"  
// getMinLengthWord("") => null  
// split()  
  
const getMinLengthWord = (sentence) => {  
    if (sentence.length === 0) {  
        console.log(null)  
    } else {  
        const array = sentence.split(' ')  
        const min = array.reduce((a, b) => a.length <= b.length ? a : b)  
        console.log(min)  
    }}

```