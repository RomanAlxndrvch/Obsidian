#react-libraries [[React libraries]] [[Redux]]

[Documentation](https://react-redux.js.org/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/rax-pihie5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/cbnExb3GSFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/SYaHe-lP7eY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


# Provider
## Данная библиотека нужна,чтобы наши контейнерные компоненты / компоненты имели возможность получать достук к нашему стору напрямую

Для начала нужно создать провайдера,который будет предоставлять доступ к стору,и оберуть этим провайдером нашу родительскую компоненту.

![[React-Redux provider.png]]
____________________________
# Connect
Connect служит для создания "контейнерной компоненты" для нашей UI / презинтационной компоненты. (В которую мы будем передавать наши каллбэки и функции)

```tsx
// Нужные импорты для конекта
import React from "react";
import {connect} from "react-redux";  
import {Dispatch} from "redux";

```

#### Синтаксис всей контейнерной компоненты: 
```tsx
export type MessageType = {  
    id: number,  
    message: string  
}  
type DialogType = {  
    id: number,  
    name: string,  
    avatar: string  
}  
export type DialogsPageType = {  
    messages: Array<MessageType>  
    dialogs: Array<DialogType>  
    newMessageBody: string  
}


type MapStateToPropsType = {  
    dialogsPage: DialogsPageType  
}  
type MapDispatchPropsType = {  
    updateNewMessageBody: (e: string) => void  
    sendMessageCreator: () => void  
}  
  
const mapStateToProps = (state: stateType): MapStateToPropsType => {  
    return {  
        dialogsPage: state.dialogsPage  
    }  
}  
  
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {  
    return {  
        updateNewMessageBody: (e: string) => {  
            dispatch(updateNewMessageBodyActionCreator(e))  
  
        },  
        sendMessageCreator: () => {  
            dispatch(sendMessageActionCreator())  
        }  
    }  
}  
  
const DialogsContainer = connect  
(mapStateToProps, mapDispatchToProps)(Dialogs)  
  
export default DialogsContainer

```

_______________________________________

### Так мы создаем нашу котейнерную компоненту DialogsContainer

![[Создания контейнера через конекс.png]]


_______________________________________


Эта компонента будет возвращять компопнету Dialogs,которой передаст в просы все с mapStateToProps и mapDispatchToProps.
Пропсы которые будут в Dialogs позначены красным.
Зеленым позначены важные моменты типизиции

![[Мап стэйт и Мап диспатч.png]]