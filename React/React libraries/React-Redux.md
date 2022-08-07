#react-libraries [[React libraries]] [[Redux]]

[Documentation](https://react-redux.js.org/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/rax-pihie5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Provider
## Данная библиотека нужна,чтобы наши контейнерные компоненты / компоненты имели возможность получать достук к нашему стору напрямую

Для начала нужно создать провайдера,который будет предоставлять доступ к стору,и оберуть этим провайдером нашу родительскую компоненту.

![[React-Redux provider.png]]
____________________________
# Connect
Connect служит для создания "контейнерной компоненты" для нашей UI / презинтационной компоненты. (В которую мы будем передавать наши каллбэки и функции)

#### Синтаксис: 

