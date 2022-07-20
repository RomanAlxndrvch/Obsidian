#фишки  [[React]]

# ==Controlled input, checkbox, select==

### Input
```tsx

export const ControlledInput = () => {  
    const [parentValue, setParentValue] = useState<string>('')  
  
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {  
        setParentValue(e.currentTarget.value)  
    }  
  
    return <input value={parentValue} onChange={onChangeInputHandler}/>  
}

```

![[Controlled Input.png]]
____________________________________________________

### CheckBox
```tsx

export const ControlledCheckbox = () => {  
    const [parentValue, setParentValue] = useState<boolean>(true)  
  
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {  
        setParentValue(e.currentTarget.checked)  
    }  
  
    return <input type={"checkbox"} onChange={onChangeInputHandler} checked={parentValue}/>  
}

```

![[Controlled checkbox.png]]
__________________________________________________

### Select
```tsx

export const ControlledSelect = () => {  
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)  
    const onChangeInputHandler = (e: ChangeEvent<HTMLSelectElement>) => {  
        setParentValue(e.currentTarget.value)  
    }  
  
    return (  
        <select value={parentValue} onChange={onChangeInputHandler}>  
            <option value={'1'}>Minsk</option>  
            <option value={'2'}>Kiev</option>  
            <option value={'3'}>Ottawa</option>  
        </select>  
    )}

```

![[Controlled select.png]]

<iframe width="560" height="315" src="https://www.youtube.com/embed/7QKfmuLd5fQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
[ React кабзда как подробно: controlled input, checkbox, select](https://www.youtube.com/watch?v=7QKfmuLd5fQ&t=1s)