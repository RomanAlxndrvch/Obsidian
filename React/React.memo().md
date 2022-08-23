[[React]] #react 

[Documentation](https://ru.reactjs.org/docs/react-api.html#reactmemo)

<iframe width="560" height="315" src="https://www.youtube.com/embed/9cCL92uiMaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
[Link](https://youtu.be/9cCL92uiMaw)

React.memo — это [компонент высшего порядка](https://ru.reactjs.org/docs/higher-order-components.html).
[Компонент высшего порядка](https://ru.reactjs.org/docs/higher-order-components.html) _Если ваш компонент всегда рендерит одно и то же при неменяющихся пропсах, вы можете обернуть его в вызов `React.memo` для повышения производительности в некоторых случаях, мемоизируя тем самым результат. Это значит, что React будет использовать результат последнего рендера, избегая повторного рендеринга._

`React.memo` затрагивает только изменения пропсов. Если функциональный компонент обёрнут в `React.memo` и использует [`useState`](https://ru.reactjs.org/docs/hooks-state.html), [`useReducer`](https://ru.reactjs.org/docs/hooks-reference.html#usereducer) или [`useContext`](https://ru.reactjs.org/docs/hooks-reference.html#usecontext), он будет повторно рендериться при изменении состояния или контекста.

Так как реакт перерисосвывает весь JSX если стэйт поменялся,и даже тот,где это не нужно,то мы можем с помощью ХОКов говорить реакту,чтобы переписовывал только те компоненты,где стейт или входящие данные сменились,не трогая другие.(Грубо говоря это кеширования)

Иными словами,можем сказать что React.memo нас просто спасает по производительности. 


![[React.memo.png]]

1: Сначала мы оборачиваем нашу комопоненту Users в контейнерную компоненту MemoUsers. 

2: Потом мы используем уже нашу контейнерную компоненту которая отрисосывает внутреннею компоненту,передавая ей все теже просы,которые использует внутренняя компонента.  Таким образом Users не начнут перерисовку пока просы которые идут к ним не сменятся. 