import {TaskType} from "../Todolist";
import {v1} from "uuid";

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

