[[Promise]] #promise 

[Documenttaion](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)


### Можем плучить доступ к result промиса
``` JS
const promisData = api.getTodolist()  
  
promisData.then((value) => {  
    console.log(value)  
})
```
