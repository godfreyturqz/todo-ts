import TodoListItem from './TodoListItem'

interface TodoListProps {
    todos: Array<Todo>
}

const TodoList: React.FC<TodoListProps> = ({todos}) => {
    return (
        <ul>
            {
                todos.map(todo => <TodoListItem todo={todo}/> )
            }
        </ul>
    )
}

export default TodoList