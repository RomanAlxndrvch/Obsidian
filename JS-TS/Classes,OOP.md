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

_________________

```js
class Coder extends User {  
    code() {  
        console.log(`Im ${this.name}. This my code const sum=(a,b)=>a+b`)  
    }  
}  
  
const coder1 = new Coder('Zadr', '15,15,15')  
coder1.code()
```
так мы можем наследоваться от других классов. 
<iframe width="560" height="315" src="https://www.youtube.com/embed/k70t3svgTss?start=2924" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
