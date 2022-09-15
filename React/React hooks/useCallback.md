#react-hooks [[React hooks]]

# ==useCallback==

Возвращает [мемоизированный](https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%BC%D0%BE%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F) колбэк.

Передайте встроенный колбэк и массив зависимостей. Хук `useCallback` вернёт мемоизированную версию колбэка, который изменяется только, если изменяются значения одной из зависимостей.

Если в зависимоти передать пустой массив,то это скажет хуку,чтобы не перерисоздавал функцию в любом случае. Функция всегда будет одна и та же

Завипсимости для АС мы можем просто передать или пустой массив или 
dispatch. Выглядит так :
```tsx
const removeTask = useCallback((id: string, todolistId: string) => {  
    dispatch(removeTaskAC(todolistId, id))  
}, [dispatch])
```

Зависимоти для кобеков которые мы мемоизируем из приходящих пропсов мы можем передать все пропсы,которые используются в этом каллбеке.
```tsx
const addTask = useCallback((title: string) => {  
    props.addTask(title, props.id)  
}, [props.id, props.addTask])
```
[Documentation](https://ru.reactjs.org/docs/hooks-reference.html#usecallback)

<iframe width="560" height="315" src="https://www.youtube.com/embed/pEl0aoJkWYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/VE2WbZtCfdY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![[useCallback.png]]