#redux  [[Redux]]

# ==Reducer==

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ed70AZk1ofE?start=8324" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
[Link fron lessen 7 about Reducers](https://youtu.be/Ed70AZk1ofE?t=8323)

ИСПОЛЬЗУЕТСЯ ТОЛЬКО ДЛЯ РАБОТЫ С БОЛЬШИМИ ДАННЫМИ И ДЛЯ БОЛЬШОЙ ЛОГИКИ. 

Редюсер - это обычая функия,которая принимает 2 агрумента (**state,action**),где стэйт - это наш первоначальный,еще не изминенный стейт,а **action** это функции\ каллбэки которые создают обьект с инструкциями по работе с этим стейтом. 
ИЛИ
это чистая функция, принимает стейт и экшен. Экшен говорит как преобразовать стейт или вернуть стейт без изменений.

__________________
### Типизация Action для редюсер + автоматическая типизация

==**Action**== - это функиця которая возравщяет обьект.

![[Reducer Action Type.png]]
1 - Мы создаем автоматическую типизицию для того,что вернет функция **removeTaskACType**
2- В `ReturnType<typeof RemoveTaskAC>` часть typeof RemoveTaskAC указывает что наша функция вернет тип обьекта с такими же ключами и значениями. В нашем случае обьект типа :
```ts
{  
    type: 'REMOVE-TASK',  
    payload: {}  
}

```

  ### Добавлю,что добавлять ===as const === в конце -  **ОБЯЗАТЕЛЬНО!**   иначе типы работать не будут и наш type будет иметь тип string, не 'REMOVE-TASK'.  Изза этого РЕДЮССЕР просто не запустится
_________________________________________
# Вот пример нашего редюсера для стейта тасков.([useReducer](obsidian://open?vault=ObsidianFiles&file=React%2FReact%20hooks%2FuseReducer))
	Суть в том,что мы передаем наши ActionCreators в компоненту,где она будут вызываться. В компоненте мы их цепляем на фуккции,которые потом прицепим на кнопки. 
	
![[AC.png]]
Там они вызывются и создают обьект actions с последующими полями,где в зависимости поля action.type будет отрабатывать логика,которую мы передали на ретурн в нашем свич-кейсе
dispatchTasks = это функция которая будет отправлять в редюсер наши экшены. 

``` tsx
export const TasksReducer = (state: Array<TaskType>, action: mainActionCreatorType) => {  
    switch (action.type) {  
        case "REMOVE-TASK": {  
            return state.filter(el => el.id !== action.payload.id)  
        }  
        case "ADD-TASK": {  
            let task = {id: v1(), title: action.payload.title, isDone: false};  
            return [task, ...state]  
        }  
        case "CHANGE-STATUS": {  
            return state.map(el => action.payload.taskId === el.id ? {...el, isDone: action.payload.isDone} : el)  
        }  
        default:  
            return state  
    }  
}  
  
type mainActionCreatorType = removeTaskACType | addTaskAC | changeStatus  
type removeTaskACType = ReturnType<typeof removeTaskAC>  
type addTaskAC = ReturnType<typeof addTaskAC>  
type changeStatus = ReturnType<typeof changeStatusAC>  
  
export const removeTaskAC = (id: string) => {  
    return (  
        {  
            type: 'REMOVE-TASK',  
            payload: {  
                id: id  
            }  
        } as const  
    )  
}  
  
export const addTaskAC = (title: string) => {  
    return (  
        {  
            type: 'ADD-TASK',  
            payload: {  
                title: title  
            }  
        } as const)  
}  
  
export const changeStatusAC = (taskId: string, isDone: boolean) => {  
    return (  
        {  
            type: 'CHANGE-STATUS',  
            payload: {  
                taskId: taskId,  
                isDone: isDone  
            }  
        } as const)  
}
```



![[ActionsCreators.png]]