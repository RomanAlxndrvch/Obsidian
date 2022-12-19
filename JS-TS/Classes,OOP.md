#js-ts [[JS-TS]]

<iframe width="560" height="315" src="https://www.youtube.com/embed/k70t3svgTss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


________________


```js
class DeleteAction {  
    constructor(userId) {  
        this.type = 'DELETE-USER'  
        this.payload = {  
            userId: userId  
        }  
    }  
}
```
Создается класс с помощью литерала class и constructor,для обозначений полей класса. 

