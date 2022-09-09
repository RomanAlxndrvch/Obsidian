[[Promise]] #promise 

[Documenttaion](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

Метод `finally()` возвращает [`Promise`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise). Когда промис был выполнен, вне зависимости успешно или с ошибкой, указанная функция будет выполнена. Это даёт возможность запустить один раз определённый участок кода, который должен выполниться вне зависимости от того, с каким результатом выполнился `Promise`.

Это позволяет вам избавиться от дубликации кода в обработчиках [`then()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) и [`catch()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch).

```js
const promise = new Promise((resolve, reject) => {  
    setTimeout(() => {  
        reject('Some err')  
    }, 2000)  
})  
  
promise.finally(() => {  
    console.log('finally')  
})
```