#redux [[React]] [[React libraries]][[Redux]]

https://samurai.it-incubator.io/pc/video-content/watch/60b53104f084890015872e3b


## Create store with reducers and add middleware
```tsx
import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from 'redux'

const rootReducer = combineReducers({  
tasks: tasksReducer,  
todolists: todolistsReducer,  
app: appReducer,  
auth: authReducer  
})

export const store = configureStore({  
reducer: rootReducer,  
middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware,)  
})

```