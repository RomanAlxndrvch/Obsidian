[[Redux]] #redux 

Чтобы иметь возможность использовать санки нам нужно сказать нашему сторору,что он может использовать middleware. (В файле где мы создаем стор редаса)

```tsx
yarn add redux-thunk
```

```ts
import thunk from "redux-thunk"

let store = createStore(rootReducer, applyMiddleware(thunk))
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/eWdnjfRu9Io" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/C-C3FLfNukU?start=1809" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Санка - это функция которая умеет диспатчить обычные action в редюсерах,и идея этой санка что ее тоже можна задиспатчить



```tsx
export const getUsersThunkCreator = (currentPage:number,pageSize:number) => (dispatch: dispType) => {  

    dispatch(toggleIsFetching(true))  
  
    usersAPI.getUsers(currentPage, pageSize).then(data => {  
        dispatch(toggleIsFetching(false))  
        dispatch(setUsers(data.items))  
        dispatch(setTotalUsersCount(data.totalCount))  
    })  
}
```

Через dispatch реакт диспатчит наши ActionCreator
Через currentPage и pageSize мы можем давать нашей санке нужные данные 

_______________
