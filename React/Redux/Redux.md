#redux [[React]] [[React libraries]]

[Official docomentation](https://redux.js.org/)
[Не оффициальная дока на русском](https://rajdee.gitbooks.io/redux-in-russian/content/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/w-agjmFFSdM?start=1717" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Redux дает возможность создать store.

```
yarn add redux react-redux @types/react-redux
```

# Справочник API
==let store = createStore()== - [Link](https://rajdee.gitbooks.io/redux-in-russian/content/docs/api/createStore.html) - Создает Redux стор которое хранит полное дерево состояния вашего приложения. Оно должно быть единственным стором в вашем приложении. 

______________________________
==combineReducers({reducers})==  [Link](https://rajdee.gitbooks.io/redux-in-russian/content/docs/api/combineReducers.html) -  Как только ваше приложение становится все более сложным, вы захотите разделить ваш [функцию редюсер](https://rajdee.gitbooks.io/redux-in-russian/content/docs/Glossary.html#reducer) на отдельные функции, которые управляют независимыми частями [состояния](https://rajdee.gitbooks.io/redux-in-russian/content/docs/Glossary.html#state).

Вспомогательная функция `combineReducers` преобразует объект, значениями которого являются различные функции редюсеры, в одну функцию редюсер, которую можно передать в метод [`createStore`](https://rajdee.gitbooks.io/redux-in-russian/content/docs/api/createStore.html).

Результирующий редюсер вызывает вложенные редюсеры и собирает их результаты в единый объект состояния. **Состояние, созданное именами `combineReducers()`, сохраняет состояние каждого редуктора под их ключами, переданные в `combineReducers()`**

______________________________________

# Пример из тудулиста:

### 1 : Создаем наш стор
``` tsx
import {combineReducers, legacy_createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";  
import {todolistsReducer} from "./todolists-reducer";  
  
const rootReducer = combineReducers({  
    tasks: tasksReducer,  
    todolists: todolistsReducer   // кобайним редюсеры
})  
  
export const store = legacy_createStore(rootReducer)  // создаем стор
  
export type AppRootState = ReturnType<typeof rootReducer> // типизируем наш стор
```


### 2 :Пользования стором
Теперь мы оборачиваем нашу корневую компоненту в **index.tsx** провайдетром с библиотеки [React-Redux](obsidian://open?vault=ObsidianFiles&file=React%2FReact%20libraries%2FReact-Redux) чтобы дать доступ к стору всем дочерним копонентам.
```tsx 
ReactDOM.render(  
    <Provider store={store}>  
        <AppWithRedux/>  
    </Provider>  
    ,  
    document.getElementById('root'));

```

### 3: Создаем initialState для наших редюсеров чтобы произошел стортовые рендер.

```tsx

const initialState: Array<TodoListType> = [  
    {id: todoListId1, title: 'What to learn?', filter: 'all'},  
    {id: todoListId2, title: 'What to buy?', filter: 'all'}  
]  
  
export const todolistsReducer = (state: Array<TodoListType> = initialState, action: ActionsType): Array<TodoListType> => {...}

```


### 4:  Получаем возможность использовать store c Redux'a
Для этого нам нужно уметь диспатчить ЭкшнКриэйтеры в Redux.

1:Создам общий диспатч с помощью хука библиотеки [React-Redux](obsidian://open?vault=ObsidianFiles&file=React%2FReact%20libraries%2FReact-Redux) [useDispatch](obsidian://open?vault=ObsidianFiles&file=React%2FReact%20libraries%2FuseDispatch)
```tsx
import {useDispatch} from "react-redux"; 

const dispatch = useDispatch()
```

2: теперь мы можем диспатчить наши ActionCreator в любой редюсер из стейта

```tsx

function removeTask(id: string, todolistId: string) {  
    dispatch(removeTaskAC(todolistId, id))  
}  
  
function addTask(title: string, todolistId: string) {  
    dispatch(addTaskAC(title, todolistId))  
}  
  
function changeTaskTitle(newValue: string, taskId: string, todoListId: string) {  
    dispatch(changeTaskTitleAC(taskId, newValue, todoListId))  
}  
  
function changeStatus(taskId: string, isDone: boolean, todolistId: string) {  
    dispatch(changeTaskStatusAC(taskId, isDone, todolistId))  
}  
  
function changeFilter(value: FilteredValuesType, todoListId: string) {  
    dispatch(changeTodolistFilterAC(value, todoListId))  
}  
  
function removeTodolist(todolistId: string) {  
    dispatch(removeTodolistAC(todolistId))  
}  
  
const changeTodoListTitle = (newTitle: string, id: string) => {  
    dispatch(changeTodolistTitleAC(id, newTitle))  
}  
  
function addTodoList(title: string) {  
    let action = addTodolistAC(title)  
    dispatch(action)  
}

```

3:  Теперь мы можем заменить useReduser с стейтами на хук с библиотеки [React-Redux](obsidian://open?vault=ObsidianFiles&file=React%2FReact%20libraries%2FReact-Redux)  - [useSelector](obsidian://open?vault=ObsidianFiles&file=React%2FRedux%2FuseSelector)
useReducer больше не нужен
```tsx
const todolists = useSelector<AppRootState, Array<TodoListType>>(state => state.todolists)  
  
const tasks = useSelector<AppRootState, TasksStateType>(state => state.tasks)

```

# Final :

```tsx 

function App() {

// States

const dispatch = useDispatch()

const todolists = useSelector<AppRootState, Array<TodoListType>>(state => state.todolists)

const tasks = useSelector<AppRootState, TasksStateType>(state => state.tasks)

// Function for changing state

function removeTask(id: string, todolistId: string) {

dispatch(removeTaskAC(todolistId, id))

}

function addTask(title: string, todolistId: string) {

dispatch(addTaskAC(title, todolistId))

}

function changeTaskTitle(newValue: string, taskId: string, todoListId: string) {

dispatch(changeTaskTitleAC(taskId, newValue, todoListId))

}

function changeStatus(taskId: string, isDone: boolean, todolistId: string) {

dispatch(changeTaskStatusAC(taskId, isDone, todolistId))

}

function changeFilter(value: FilteredValuesType, todoListId: string) {

dispatch(changeTodolistFilterAC(value, todoListId))

}

function removeTodolist(todolistId: string) {

dispatch(removeTodolistAC(todolistId))

}

const changeTodoListTitle = (newTitle: string, id: string) => {

dispatch(changeTodolistTitleAC(id, newTitle))

}

function addTodoList(title: string) {

let action = addTodolistAC(title)

dispatch(action)

}

```

___________________________________________

# ==Пример из соц сети:==

``` ts
rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})
// Это создаст следующий объект состояния
{
  potato: {
    // ... potatoes и другое состояние управляемое potatoReducer ... 
  },
  tomato: {
    // ... tomatoes и другое состояние управляемое tomatoReducer, возможно, какой-нибудь хороший соус? ...
  }
}
```

__________________________________
# Типизация самого стора. 
![[Типизация стора.png]]
Вот  так мы можем типзировать стор,чтобы потом его передать в пропсах.
Важно чтобы обьявления типа было после создания стора.

``` tsx
type AppPropsType = {  
    state: StatePropsType,  
    dispatch: (e: ActionsType) => void  
    store: storeType  
}  
  
  
function App(props: AppPropsType) {  
    return (  
        <div className={'app-wrapper'}>  
            <Header/>  
            <Navbar state={props.state.sidebar}/>  
            <div className={'app-wrapper-content'}>  
                <Route path={'/profile'}  
                       render={() => <Profile  
                           store={props.store}  
                       />}/>  
                <Route path={'/dialogs'}  
                       render={() => <DialogsContainer  
                           store={props.store}/>}/>  
                <Route exact path={'/News'} render={() => <News/>}/>  
                <Route exact path={'/Music'} render={() => <Music/>}/>  
                <Route exact path={'/Settings'} render={() => <Settings/>}/>  
            </div>  
        </div>  
  
    );  
}
```