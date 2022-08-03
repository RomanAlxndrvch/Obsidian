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