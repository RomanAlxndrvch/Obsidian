[[Promise]] [[Promise.all]] #promise 

[Documenttaion](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)

Метод `Promise.allSettled()` возвращает промис, который исполняется когда все полученные промисы завершены (исполнены или отклонены,или перешли с состояния pending в fulfilled или rejected) переданные в параментр (promise1.promise2)


```js
Promise.allSettled([promise1.promise2]).then((data) => {  
    'finish'  
})
```

Данные в data сидят достаточно инетерсно,и лучше всего посмотреть как с ними рабоать в видео начиная с 57 минуты.

<iframe width="560" height="315" src="https://www.youtube.com/embed/F3B59K2qE2Y?start=3289" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>