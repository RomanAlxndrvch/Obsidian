#ClassComponents [[Классовые компоненты]]

# ==componentDidMount()===

[Documentation](https://ru.reactjs.org/docs/react-component.html#componentdidmount)

`componentDidMount()` вызывается сразу после монтирования (то есть, вставки компонента в DOM). В этом методе должны происходить действия, которые требуют наличия DOM-узлов. Это хорошее место для создания сетевых запросов.

Этот метод подходит для настройки подписок. Но не забудьте отписаться от них в `componentWillUnmount()`.