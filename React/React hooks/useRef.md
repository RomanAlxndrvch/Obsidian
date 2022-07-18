#react-hooks [[React hooks]]

## ==useRef==
[Documentation](https://ru.reactjs.org/docs/hooks-reference.html#useref)

``` tsx
export const GetValueOfUncontrolledInputByButtonPress = () => {  
    const [value, setValue] = useState<string>('')  
    const inputRef = useRef<HTMLInputElement>(null)  
  
    const onClickBtnHandler = () => {  
        /*const el = inputRef.current as HTMLInputElement*/  
        /*setValue(el.value)*/ //or  
        setValue(inputRef.current!.value)  
    }  
  
    return <><input ref={inputRef}/>  
        <button onClick={onClickBtnHandler}>save</button>- actual value : {value}</>  
}

```
  
>[Пример с видео(17:00 минута)](https://www.youtube.com/watch?v=SqyL5K5TXpM&t=746s)
>
><iframe width="560" height="315" src="https://www.youtube.com/embed/SqyL5K5TXpM?start=1020" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
>
  

По сути, `useRef` похож на "коробку", которая может хранить изменяемое значение в своём свойстве `.current`.

Вероятно, вы знакомы с ссылками в первую очередь как способ доступа к DOM. Если вы передадите объект `ref` в React с помощью `<div ref = {myRef} />`, React будет устанавливать его свойство `.current` в соответствующий узел DOM каждый раз, когда этот узел изменяется.

Однако `useRef()` полезен не только для атрибута `ref`. Он удобен для хранения любого изменяемого значения почти так же, как и поля экземпляра класса.

`useRef` возвращает изменяемый объект `ref`, чьё свойство `.current` инициализируется переданным аргументом `initialValue`. Возвращенный объект будет сохранён в течение всего времени жизни компонента.

Обычный вариант использования - это императивный доступ к дочернему элементу:
