#ClassComponents [[Классовые компоненты]]

Работа state в классовых компонентах слегка отличается нежели в функциональных.

```tsx
class ProfileStatus extends React.Component<ProfileStatusPropsType> {  
    state = {  
        editMode: false  
    }  
  
    activateEditMode() {  
        this.setState({editMode: true})  
    }  
  
    deactivateEditMode() {  
        this.setState({editMode: false})  
    }  
  
    render() {  
        return (  
            <div>  
                {this.state.editMode ?  
                    <div>  
                        <input onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.props.status}/>  
                    </div> :  
                    <div>  
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>  
                    </div>}  
            </div>  
        );  
    }  
}
```

стєйт храним в отдельном обьекте,а меняем его через встроеный метод setState.
Так он говорит компоненте что стейт изменился и ей нужно перерисоваться 

Видео о работе метода
<iframe width="560" height="315" src="https://www.youtube.com/embed/78ak5Jqmh9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

