[[Promise]] #promise 

[Documenttaion](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)


### Можем плучить доступ к result промиса


``` JS
const api = {  
    getTodolist() {  
        return new Promise((resolve, reject) => {  
            setTimeout(() => {  
                resolve({title: 'Monday'})  
            }, 1000)  
        })  
    }  
}


const promisData = api.getTodolist()  
  
promisData.then((value) => {  
    console.log(value)  
})
```
