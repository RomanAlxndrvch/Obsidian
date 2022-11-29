#js-ts [[JS-TS]]

<iframe width="560" height="315" src="https://www.youtube.com/embed/MMzYb7AW4OA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```ts
const alex = {  
    name: 'Alex',  
}  
  
Object.setPrototypeOf(alex, userPrototype)  
  
  
// @ts-ignore  
console.log(alex.defaultAge)
```
Так мы указываем,что обьект userPrototype есть прототипом обьекта alex

