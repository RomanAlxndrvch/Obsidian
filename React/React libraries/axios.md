#react-libraries [[React libraries]]


# ==AXIOS==

## [Documentation](https://axios-http.com/ru/)


### Предназначен для отправки и получения запросов с бэкэнда.
![[AXIOS Example.png]]

**get** - отправляем запрос на сервер  на получения данных,и при успешном отвеве выполнится код(стрелочная функция )в **_then_**

**post** - отправляем запрос на сервер  на создания данных,и при успешном отвеве выполнится код(стрелочная функция )в **_then_**

**delete** - отправляем запрос на сервер  на удаления данных,и при успешном отвеве выполнится код(стрелочная функция )в **_then_**

В get можем передать второй параментр =={withCredentials: true}==,который даст доступ к нашуй куки. От этого можем отсылать запросы от залогиняного пользователя 

```jsx
axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {  
    if (response.data.resultCode === 0) {  
        this.props.SetAuthUserDataAC(response.data.data.id, response.data.data.email, response.data.data.login)  
    }  
})

```