#redux [[React]]

[Official docomentation](https://redux.js.org/)
[Не оффициальная дока на русском](https://rajdee.gitbooks.io/redux-in-russian/content/)

Redux дает возможность создать store.


# Справочник API
==let store = createStore()== - [Link](https://rajdee.gitbooks.io/redux-in-russian/content/docs/api/createStore.html) - Создает Redux стор которое хранит полное дерево состояния вашего приложения. Оно должно быть единственным стором в вашем приложении. 

______________________________
==combineReducers({reducers})==  [Link](https://rajdee.gitbooks.io/redux-in-russian/content/docs/api/combineReducers.html) -  Как только ваше приложение становится все более сложным, вы захотите разделить ваш [функцию редюсер](https://rajdee.gitbooks.io/redux-in-russian/content/docs/Glossary.html#reducer) на отдельные функции, которые управляют независимыми частями [состояния](https://rajdee.gitbooks.io/redux-in-russian/content/docs/Glossary.html#state).

Вспомогательная функция `combineReducers` преобразует объект, значениями которого являются различные функции редюсеры, в одну функцию редюсер, которую можно передать в метод [`createStore`](https://rajdee.gitbooks.io/redux-in-russian/content/docs/api/createStore.html).

Результирующий редюсер вызывает вложенные редюсеры и собирает их результаты в единый объект состояния. **Состояние, созданное именами `combineReducers()`, сохраняет состояние каждого редуктора под их ключами, переданные в `combineReducers()`**

Пример:

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