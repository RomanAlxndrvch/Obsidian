import React, {useReducer, useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {addTaskAC, changeStatusAC, removeTaskAC, TasksReducer} from "./reducer/TasksReducer";
import {changeFilterAC, FilterReducer} from "./reducer/FilterReducer";

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    /*    let [tasks, setTasks] = useState([
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ]);*/

    let [tasks, dispatchTasks] = useReducer(TasksReducer, [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]);


    let [filter, dispatchFilter] = useReducer(FilterReducer, "all");


    function removeTask(id: string) {
        dispatchTasks(removeTaskAC(id))

    }

    function addTask(title: string) {
        dispatchTasks(addTaskAC(title))

    }

    function changeStatus(taskId: string, isDone: boolean) {
        dispatchTasks(changeStatusAC(taskId, isDone))
    }


    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        dispatchFilter(changeFilterAC(value))
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
                      filter={filter}
            />
        </div>
    );
}

export default App;
