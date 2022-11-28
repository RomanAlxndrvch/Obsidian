[[JS-TS]] [[Promise]] #async/await

[Documentation](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/async_function)

<iframe width="560" height="315" src="https://www.youtube.com/embed/v1hdrFi4il4?start=6028" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/F3B59K2qE2Y?start=6355" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/_Y2KOWRKvJI?start=5475" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/D563_Obu59M?start=8445" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


1 : Объявление `async function` определяет _асинхронную функцию_, которая возвращает объект [Promise](obsidian://open?vault=ObsidianFiles&file=JS-TS%2FPromise%2FPromise)

2 : Мы можем использовать await. По сути внутри находится тот-же then. Вся суть в том,что приставка await в блоке try говорит о том,что код ниже выполнятся не будет,пока текущий не заризолвится (выполнится без ошибок)
-Ошибки мы ловим в блоке catch. Рабоает он так же как и в промисах
-Выполняем что-то в независимости от ответа в блоке finally. Работает так же как в промисах

``` JS
const getData = () => {  
    getDataFromServer('http:/api.com/users').then((users) => {  
        return getDataFromServer('http:/api.com/users/2')  
    }).then((user) => {  
        return getDataFromServer('http:/api.com/users/2/book')  
    }).then((books) => {  
        return getDataFromServer('http:/api.com/users/2/book/123')  
    }).then((book) => {  
        return getDataFromServer('http:/api.com/users/2/book/123/pages')  
    }).catch(  
        () => {  
        }    )  
}  
  
const getDataAsync = async (e) => {  
    try {  
        const users = await getDataFromServer('http:/api.com/users/')  
        const user = await getDataFromServer('http:/api.com/users/2')  
        const books = await getDataFromServer('http:/api.com/users/2/book')  
    } catch {  
        console.log(e)  
  
    } finally {  
        console.log('finally')   
}  

}
```

