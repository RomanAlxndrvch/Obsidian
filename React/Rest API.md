[[React]] [[JS-TS]] [[axios]]#restApi 


<iframe width="560" height="315" src="https://www.youtube.com/embed/gmk0Bts6UX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### get - получения данных. Ждет 1 или 2 параметра. URL and Settings 
```tsx
const settings = {  
    withCredentials: true,  // доступ к куки. дает возмоджность брать данные как залогиняный
}

export const GetTodolists = () => {  
    const [state, setState] = useState<any>({name: 'Roma'})  
    useEffect(() => {  
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings).then(res => {  
            return setState(res.data)  
        }).catch((err) => {  
            console.log(err)  
        })  
  
    }, [])  
    return <div>{JSON.stringify(state)}</div>  
}
```


# Типизация ответа запроса
```tsx

export type CreateTodolistResponseType = {  
  
    resultCode: number  
    messages: Array<string>  
    data: {  
        item: TodolistType  
    }  
  
}
createTodolist(title: string) {  
    return axios.post<CreateTodolistResponseType>('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: title}, settings)  
},
```

# Generic Type 
```tsx
type ResponseType<D> = {  
    resultCode: number  
    messages: Array<string>  
    data: D  
}

createTodolist(title: string) {  
    return axios.post<ResponseType<{ item: TodolistType }>>('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: title}, settings)  
},
```

Кусок о типизации дженерик
<iframe width="560" height="315" src="https://www.youtube.com/embed/gmk0Bts6UX8?start=7115" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


тут посмотреть кусок о всей типизации
<iframe width="560" height="315" src="https://www.youtube.com/embed/gmk0Bts6UX8?start=6704" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Для всем мутабельных операций нужно добавлять в settings API key

### post - добавлений данных. Ждет 3 параметра. 

```tsx
const settings = {  
    withCredentials: true,  
    headers: {  
        'API-KEY': '8fc044d8-3f5e-469a-b681-136f15cb55d0'  
    }  
}

export const CreateTodolist = () => {  
    const [state, setState] = useState<any>(null)  
    useEffect(() => {  
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: 'TodoList N1'}, settings)  
            .then(res => {  
                return setState(res.data)  
            }).catch((err) => {  
            console.log(err)  
        })  
    }, [])  
  
    return <div>{JSON.stringify(state)}</div>  
}
```


### put - обновления данных. Ждет 3 параметра

```tsx
const settings = {  
    withCredentials: true,  
    headers: {  
        'API-KEY': '8fc044d8-3f5e-469a-b681-136f15cb55d0'  
    }  
}

export const UpdateTodolistTitle = () => {  
    const [state, setState] = useState<any>(null)  
    useEffect(() => {  
        axios.put('https://social-network.samuraijs.com/api/1.1/todo-lists/4850f084-5d2c-4a30-b850-6b5652642e5f', {title: 'new Title'}, settings)  
            .then(res => {  
                return setState(res.data)  
            }).catch((err) => {  
            console.log(err)  
        })  
    }, [])  
  
    return <div>{JSON.stringify(state)}</div>  
}
```


### delete - удаления данных. Ждет 2 параметра

```tsx
const settings = {  
    withCredentials: true,  
    headers: {  
        'API-KEY': '8fc044d8-3f5e-469a-b681-136f15cb55d0'  
    }  
}

export const DeleteTodolist = () => {  
    const [state, setState] = useState<any>(null)  
    useEffect(() => {  
        axios.delete('https://social-network.samuraijs.com/api/1.1/todo-lists/02673f80-ea32-474f-8e2e-7c8b4d453477', settings)  
            .then(res => {  
                return setState(res.data)  
            }).catch((err) => {  
            console.log(err)  
        })  
    }, [])  
  
    return <div>{JSON.stringify(state)}</div>  
}
```

# Axios Instance

```tsx
const instance = axios.create({  
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',  
    withCredentials: true,  
    headers: {  
        'API-KEY': '8fc044d8-3f5e-469a-b681-136f15cb55d0'  
    }  
})
```

Using
```tsx
getTodolists() {  
    return instance.get<Array<TodolistType>>('todo-lists/')  
},  
createTodolist(title: string) {  
    return instance.post<ResponseType<{ item: TodolistType }>>('todo-lists/', {title: title})  
},
```
<iframe width="560" height="315" src="https://www.youtube.com/embed/gmk0Bts6UX8?start=8114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
