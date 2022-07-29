[[React]] #react 

[Documentation](https://ru.reactjs.org/docs/context.html)

В типичном React-приложении данные передаются сверху вниз (от родителя к дочернему компоненту) с помощью пропсов. Однако, подобный способ использования может быть чересчур громоздким для некоторых типов пропсов (например, выбранный язык, UI-тема), которые необходимо передавать во многие компоненты в приложении. Контекст предоставляет способ делиться такими данными между компонентами без необходимости явно передавать пропсы через каждый уровень дерева.

-   [Когда использовать контекст](https://ru.reactjs.org/docs/context.html#when-to-use-context)
-   [Перед тем, как вы начнёте использовать контекст](https://ru.reactjs.org/docs/context.html#before-you-use-context)
-   [API](https://ru.reactjs.org/docs/context.html#api)
    
    -   [React.createContext](https://ru.reactjs.org/docs/context.html#reactcreatecontext)
    -   [Context.Provider](https://ru.reactjs.org/docs/context.html#contextprovider)
    -   [Class.contextType](https://ru.reactjs.org/docs/context.html#classcontexttype)
    -   [Context.Consumer](https://ru.reactjs.org/docs/context.html#contextconsumer)
    -   [Context.displayName](https://ru.reactjs.org/docs/context.html#contextdisplayname)
-   [Примеры](https://ru.reactjs.org/docs/context.html#examples)
    
    -   [Динамический контекст](https://ru.reactjs.org/docs/context.html#dynamic-context)
    -   [Изменение контекста из вложенного компонента](https://ru.reactjs.org/docs/context.html#updating-context-from-a-nested-component)
    -   [Использование нескольких контекстов](https://ru.reactjs.org/docs/context.html#consuming-multiple-contexts)
-   [Предостережения](https://ru.reactjs.org/docs/context.html#caveats)
-   [Устаревший API](https://ru.reactjs.org/docs/context.html#legacy-api)

## [](https://ru.reactjs.org/docs/context.html#when-to-use-context)

[Видео с пути самурая](https://www.youtube.com/watch?v=Q_UvAaKSK90&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=45&t=470s)

___________________________________________________

# ==Синтаксис :==

1 : Для начала нужно создать контекст. В примере пути самурая мы создавали оттельный файл для этого

![[Create Context.png]]

2:  Оборачиваем компоненту **StoreContext.Provider** ,которая и\ или дети которой будут иметь доспуп к нашему контексту,который сидит в value. 
(Контекст нужно [типизировать](obsidian://open?vault=ObsidianFiles&file=React%2FContext%20API%2F%D0%A2%D0%B8%D0%BF%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%20%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%B0.png))

![[Оборачивания компоненты контекстом.png]]

 3: Теперь мы должны обернуть нашего получателя контекста компонентой-функцией **StoreContext.Comsumer**, где наш JSX будет передан в эту функциюю
 Выглядит это так :
 ![[Компонента обёрнута в консюмер.png]]