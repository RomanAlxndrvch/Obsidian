#ClassComponents [[Классовые компоненты]][[useEffect]]

# ==componentDidUpdate==

[Docomentation](https://ru.reactjs.org/docs/react-component.html#componentdidupdate)

### Аналог хука useEffect для классовых копмонент

`componentDidUpdate()` вызывается сразу после обновления. Не вызывается при первом рендере.

Метод позволяет работать с DOM при обновлении компонента. Также он подходит для выполнения таких сетевых запросов, которые выполняются на основании результата сравнения текущих пропсов с предыдущими. Если пропсы не изменились, новый запрос может и не требоваться.

```tsx
componentDidUpdate(prevProps) {
  // Популярный пример (не забудьте сравнить пропсы):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}

```


<iframe width="560" height="315" src="https://www.youtube.com/embed/wcwG-pofoZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


```tsx
componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: typeof this.state) {  
    if (this.props.status !== prevProps.status) {  
        this.setState({status: this.props.status})  
    }  
}
```