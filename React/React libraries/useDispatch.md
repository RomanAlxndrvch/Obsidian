# ==useDispatch==

#react-hooks [[React-Redux]][[React hooks]]

[Documentation](https://react-redux.js.org/api/hooks)

## Хук дает возможность диспатчить в наш store нужные нам Actions

```tsx 

const dispatch = useDispatch() 

function removeTask(id: string, todolistId: string) {  
        dispatch(removeTaskAC(todolistId, id))  
    }

```

<iframe width="560" height="315" src="https://www.youtube.com/embed/w-agjmFFSdM?start=3343" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

