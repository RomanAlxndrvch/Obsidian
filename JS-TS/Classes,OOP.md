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
 _______
```js
class User {  
    age = 23 // свойства класса. Они заносятся в сам экземпляр класса  
  
    static maxNameLength = 16 // статические свойства. Они доступны только классу и не доступны экземпляру.  
  
    static validateUserName(name) {  
        if (this.maxNameLength < name.length) { // статические свойства. Они доступны только классу и не доступны экземпляру  
            console.log("Err")  
        }  
    }  
  
    constructor(name) { // функция-конструктор  
        this.name = name  
        User.validateUserName(name)  
    }  
  
    sayHi() {  
        console.log(this.name) // метод класса. Они занесутся в прототип класса  
    }  
}
```

### Приватный поля (Privat field)

```js
class User {  
    #name // создания приватного поля  
  
    constructor(name) {  
        this.#name = name  
    }  
  
    getName() {  
        console.log(this.#name)  
    }  
}  
  
const user = new User('Alex')  
console.log(user.#name) // Так к свойству клкасса не добратся  
user.getName() // Так добираются до приватных полях в классе
```

```js
class User {  
    #name // создания приватного поля  
  
    constructor(name) {  
        this.#name = name  
    }  
  
    getName() {  
        console.log(this.#name) // Вариант обычный  
    }  
  
    setName(value) {  
        this.#name = value // Вариант обычный  
    }  
  
    get name() {  
        return this.#name // Вариант с ООП с гетером  
    }  
  
    set name(value) {  
        return this.#name = value // Вариант с ООП с сетером  
    }  
}  
  
const user = new User('Chel')  
user.name = 'Chelik ' // Доступ к сэттэру  
console.log(user.name) // Доступ к гэттэру
```

### EXTENDS (Наследования)
```js

class Car {  
    static WHEELS_COUNT = 4  
  
    run(model) {  
        console.log('Car running')  
    }  
}  
  
class Ford extends Car { // У форта будут все методы форса и Car  
    fordRun() {  
        console.log('Ford running')  
    }  
}  
  
const mondeo = new Ford()  
  
mondeo.fordRun()  
mondeo.run()  
console.log(Ford.WHEELS_COUNT)

```


### Super
<iframe width="560" height="315" src="https://www.youtube.com/embed/-xopOjN6Ee8?start=4929" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>