[[React]][[JS-TS]] #Tests 

# Тесты состоят их 3-х частей,это :
## [Documentation](https://jestjs.io/ru/docs/expect)

1: Данны
2: Действия
3: Ожидания

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