interface TodoListItemProps {
    todo: Todo
    toggleTodo: ToggleTodo
}

const TodoListItem: React.FC<TodoListItemProps> = ({todo, toggleTodo}) => {
    
    return (
        <li style={{display: 'flex'}}>
            <div style={{width: '100%'}}>
                <label style={{textDecoration: todo.complete ? 'line-through' : 'none'}}>
                    <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)}/>
                    {todo.text}
                </label>
            </div>
            <div style={{width: '100%'}}>
                <button>Delete</button>
            </div>
        </li>
    )
}

export default TodoListItem
