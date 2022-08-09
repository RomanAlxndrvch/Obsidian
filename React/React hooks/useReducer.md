#react-hooks  [[Reducer]]  [[React hooks]]

[Documentation](https://ru.reactjs.org/docs/hooks-reference.html#usereducer)

# ==useReducer==

<iframe width="560" height="315" src="https://www.youtube.com/embed/aMuUuEVt3j8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
[Link](https://youtu.be/aMuUuEVt3j8)

useReducer - это альтернатива useState, которая используется для больших обьемов данных и используется в основном для работы с нашими данными . Она состоит из значения,и dispatch(альтертнатива set).
Принимает хук 2 параметра. 
Первый,это редюсер c которым будем работать,второй это стартовое значения.
dispatchTasks = это функция которая будет отправлять в редюсер наши экшены. 

![[Files/React/useReducer.png]]
[Кусок с урока про useReducer](https://youtu.be/Ed70AZk1ofE?t=9415)

# Вызов actionCreator для нашего редюса: 
![[ActionsCreators.png]]
И пример самых ActionCreators
![[ActionCreators in TaskReducer.png]]


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