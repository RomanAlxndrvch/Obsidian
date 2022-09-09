[[Promise]] #promise 

[Documenttaion](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)


### Можем плучить доступ к result промиса
``` JS
const promise = new Promise((resolve, reject) => {  
    setTimeout(() => {  
        reject('Some err')  
    }, 2000)  
})  
  
promise.catch((value) => {  
    console.log(value)  
})
```



