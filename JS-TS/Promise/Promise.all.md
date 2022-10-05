[[Promise]] #promise 

[Documenttaion](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)


Метод `Promise.all(iterable)` возвращает промис, который выполнится тогда, когда будут выполнены(зарезолвлены,успешно выполнены) все промисы переданные в параментр (promise1.promise2)

```js
Promise.all([promise1.promise2]).then((result)=>{  
    'finish'  
})
```

В result сидит результат выполнения(зарезолвленые данные) обеих промисов

<iframe width="560" height="315" src="https://www.youtube.com/embed/F3B59K2qE2Y?start=2580" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>