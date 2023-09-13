import React, {useState} from 'react';
import ToDoList from "./components/ToDoList";
import NewTodo from "./components/NewTodo";
import Todo from './TodoModel';
function App() {
    const [todos,setTodos] = useState<Todo[]>([]);
    const todoAddHandler = (text:string)=>{
        setTodos(prevTodos => [...prevTodos , {id:Math.random().toString() , text:text}])
    }

    const todoDeleteHandler = (id:string)=>{
        setTodos(prevTodos => {return prevTodos.filter(todo =>
            id!==todo.id)})
    }

    return (
        <div className="App">
            <NewTodo onAddTodo={todoAddHandler} />
            <ToDoList items={todos} onDeleteTodo={todoDeleteHandler}/>
        </div>
    );
}

export default App;
