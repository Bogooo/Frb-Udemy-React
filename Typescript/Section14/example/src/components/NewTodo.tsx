import {useRef} from "react";
import './NewTodo.css'

interface NewTodoProps{
    onAddTodo:(todoText:string)=>void,
}

function NewTodo(props:NewTodoProps){
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler=(event : React.FormEvent)=>{
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    }

    return(<form onSubmit={todoSubmitHandler}>
        <div className="form-control">
            <label htmlFor="todo-text" >Todo text</label>
            <input id="todo-text" type="text" ref={textInputRef}/>
        </div>
        <button type="submit">Add Todo</button>
    </form>);
}

export default NewTodo;