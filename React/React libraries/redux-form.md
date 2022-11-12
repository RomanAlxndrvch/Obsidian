#react-libraries [[React libraries]]

```tsx
import {reducer as formReducer} from "redux-form";  
  
let rootReducer = combineReducers({  
    profilePage: profileReducer,  
    dialogsPage: dialogsReducer,  
    usersPage: userReducer,  
    sidebar: navbarReducer,  
    auth: authReducer,  
    form:formReducer  // в стор добавляем наши формы
})
```

[Пример из кода]()

<iframe width="560" height="315" src="https://www.youtube.com/embed/yhBYEM3VDTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>