#react-hooks [[React hooks]]

## ==useEffect ==
[Documentation](https://ru.reactjs.org/docs/hooks-reference.html#useeffect)

<iframe width="560" height="315" src="https://www.youtube.com/embed/IGdBFYLQQHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/RPorJiFntJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Принимает 2 аргумента :
1. функцию callback
2. Массив значений,от изминения которых вызывается наша функция. 

```tsx
  useEffect(() => {

     setNumber(startValue)

  }, [startValue]) 
  // После измиинения startValue хук перепишет наш Стэйт на новый
```

####  ==Условное срабатывание эффекта==
---------------------------------------------
# ==Важныйе моменты! ==
- ==useEffect срабатывает только после отрисовки JSX . Тобишь сначала выполняется весь код внутри компоненты,потом рисуется JSX и только потом срабатывет юсЭфект==

- ==Если массива зависимостей нету,то useEffect будет срабатывать после каджой перерисовки компоненты==

 - ==Если передали пустой массив,то он сработает только один раз при вмонтировании компоненты. Аналог из классов componentDidMount()==

------------------------------------------
return выполнится при перерисовки компоненты или перед ее смертью
```tsx
useEffect(() => {  
    const intervalId = setInterval(() => {  
        setDate(new Date())  
    }, 1000)  
  
    return () => {  
        clearInterval(intervalId)  
    }  
}, [])
```

По умолчанию эффекты запускаются после каждого завершённого рендера. Таким образом, эффект всегда пересоздаётся, если значение какой-то из зависимости изменилось.

Однако в некоторых случаях это может быть излишним, например, в примере подписки из предыдущего раздела. Нам не нужно создавать новую подписку на каждое обновление, а только если изменился проп `source`.

Чтобы реализовать это, передайте второй аргумент в `useEffect`, который является массивом значений, от которых зависит эффект. Наш обновлённый пример теперь выглядит так:

``` tsx
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source],
);
```

Теперь подписка будет создана повторно только при изменении `props.source`.



**Запускается ли useEffect после каждой отрисовки?** Да! По умолчанию он запускается как после первой отрисовки, так и после каждого последующего обновления. (Позже мы поговорим о том, как это можно кастомизировать.) Вместо того, чтобы мыслить в терминах «монтирования» и «обновления», можно просто представлять, что эффекты происходят «после отрисовки». React гарантирует, что DOM будет обновлен к моменту запуска эффектов.


