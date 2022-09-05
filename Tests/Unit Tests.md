[[React]][[JS-TS]] #Tests 

# Тесты состоят их 3-х частей,это :
## [Documentation](https://jestjs.io/ru/docs/expect)

1: Данныe
2: Действия
3: Ожидания

### Данные которые будут применяться к каждому тесту. 
```ts

let todolistId1: string  
let todolistId2: string  
let startState: Array<TodolistType>  
  
beforeEach(() => {  
    todolistId1 = v1()  
    todolistId2 = v1()  
  
  
    startState = [  
        {id: todolistId1, title: 'What to learn', filter: 'all'},  
        {id: todolistId2, title: 'What to buy', filter: 'all'}  
    ]  
})

/// Full test

let todolistId1: string  
let todolistId2: string  
let startState: Array<TodolistType>  
  
beforeEach(() => {  
    todolistId1 = v1()  
    todolistId2 = v1()  
  
  
    startState = [  
        {id: todolistId1, title: 'What to learn', filter: 'all'},  
        {id: todolistId2, title: 'What to buy', filter: 'all'}  
    ]  
})  
  
  
test('correct todolist should be removed', () => {  
  
    const endState = todolistsReducer(startState, RemoveTodolistAC(todolistId1))  
  
    expect(endState.length).toBe(1)  
    expect(endState[0].id).toBe(todolistId2)  
})  
  
test('correct todolist should be added', () => {  
    let newTodolistTitle = 'New Todolist'  
  
    const endState = todolistsReducer(startState, AddTodolistAC(newTodolistTitle))  
  
    expect(endState.length).toBe(3)  
    expect(endState[2].title).toBe(newTodolistTitle)  
})


```

## Пример примитивного теста: 
Тест принимает 2 параментра: нзвания что он должен сделать и функицию самого теста.

![[TextExample.png]]

![[Text Example 2.png]]


# Reducers tests


``` tsx

import {userReducer} from './user-reducer'  
  
test('user reducer should increment only age', () => {  
    const startState = {age: 20, childrenCount: 2, name: 'Dimych'}  
  
    const endState = userReducer(startState, {type: 'INCREMENT-AGE'})  
  
    expect(endState.age).toBe(21)  
    expect(endState.childrenCount).toBe(2)  
    expect(startState).not.toEqual(endState)  
})  
  
test('user reducer should increment only childrenCount', () => {  
    const startState = {age: 20, childrenCount: 2, name: 'Dimych'}  
  
    const endState = userReducer(startState, {type: 'INCREMENT-CHILDREN-COUNT'})  
  
    expect(endState.childrenCount).toBe(3)  
    expect(endState.age).toBe(startState.age)  
    expect(startState).not.toEqual(endState)  
  
})  
  
  
test('user reducer should change name of user', () => {  
    const startState = {name: 'Dimych', age: 20, childrenCount: 2}  
    const newName = 'Viktor'  
    const endState = userReducer(startState, {type: 'CHANGE-NAME', newName: newName})  
  
    expect(endState.name).toBe(newName)  
    expect(startState).not.toEqual(endState)  
})


```