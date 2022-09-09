[[JS-TS]] #promise

# ==Pomise==
[Documentation](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise)





_______________________________________
# УРОК 10

<iframe width="560" height="315" src="https://www.youtube.com/embed/v1hdrFi4il4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

----------------------------------------------

### Создаем промис
```JS
const promise = new Promise((resolve, reject) => {  
  
})
```
Создаем мы промис с помощью конструктора,в  которые передаем каллбэк в который приходит 2 функии : resolve,reject

### После создания промиса ,он выглидит внутри вот так :
```JS
const promise = {  
    state: 'pending',  
    result: undefined  
}
```
Там есть состонями промиса(state) и результат(result).

# В промиса есть 2 сотояния:
## Если что-то выполнилось успешно - 
```JS
const promise = {  
    state: 'fullfilled',  
    result: data  
}
```

## Если что-то выполнилось c ошибкой,или пошло не так - 
```JS
const promise = {  
    state: 'rejected',  
    result: error  
}
```

_______________________________
# Если промис завершился успешно : 
Если просмис завершился успешно,то мы вызываем функцию ==resolve==,иными словами ресолвим промис
```jS
const promise = new Promise((resolve, reject) => {  
    setTimeout(() => {  
        resolve('Hello')  
    }, 2000)  
})
```


# Если промис завершился с ошибкой или не успешно : 
Если просмис завершился с ошибкой или не успешно,то мы вызываем функцию ==reject==,иными словами реджектим промис
```jS
const promise = new Promise((resolve, reject) => {  
    setTimeout(() => {  
        reject('Hello')  
    }, 2000)  
})
```

### В тоге функции resolve,reject меняют стэйт функиции и могут что-то положить в result
Например вот в этом примере 
```jS
const promise = new Promise((resolve, reject) => {  
    setTimeout(() => {  
        resolve('Hello')  
    }, 2000)  
})
```
Промис будет выгоядеть так 
```
1.  Promise {<fulfilled>: 'Hello'}

1.  [[Prototype]]: Promise
2.  [[PromiseState]]: "fulfilled"
3.  [[PromiseResult]]: "Hello"
```

___________
# Работа с промисом
У нас есть обьект,в котором есть метод который возвращяет промис
```JS
const api = {  
    getTodolist() {  
        return new Promise((resolve, reject) => {  
            setTimeout(() => {  
                resolve({title: 'Monday'})  
            }, 2000)  
        })  
    }  
}
```
На данный момент при успешном выполнении в промисе будет стейт fulfilled,а в resulte обьект  {title: 'Monday'}

```JS
function Users() {  
    useEffect(() => {  
        const promise = api.getTodolist()  
    })  
}
```
Теперь мы используем этот промис и присваиваем результат какой-то переменной. Доступ  к данным можем c помощью метода [==then==](obsidian://open?vault=ObsidianFiles&file=JS-TS%2FPromise%2Fthen())

```JS
const promisData = api.getTodolist()  
  
promisData.then((value) => {  
    console.log(value)  
})
```
в метод then мы можем передать калбэк,в которм в параметре(value) будет сидеть доступ к result этого промиса

----------------------------

```js
const promise = new Promise((resolve, reject) => {  
    setTimeout(() => {  
        reject('Some err')  
    }, 2000)  
})
```
В случае если в промисе ошибка,то ее прочитать можна с помощью метода [==catch==](obsidian://open?vault=ObsidianFiles&file=JS-TS%2FPromise%2Fcatch())

-----------------------

### Так есть есть спелиальный метод  [finally]()
Он вызыввется в любом случае,не важно пришел ли нам resolve или reject
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
