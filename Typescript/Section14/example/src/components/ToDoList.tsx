import './TodoList.css';
interface TodoListProps {
    items:{id:string , text:string}[],
    onDeleteTodo:(id:string)=>void;
}
function ToDoList(props:TodoListProps){

    return <ul>
        {props.items.map((todo)=>{
            return <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={props.onDeleteTodo.bind(null,todo.id)}>Delete me</button>
            </li>
        })}
    </ul>
}
export default ToDoList;