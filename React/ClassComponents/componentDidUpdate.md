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
