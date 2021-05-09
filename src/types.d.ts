type Todo = {
    id: string
    text: string
    complete: boolean
}

type AddTodo = (newTodo: Todo) => void

type ToggleTodo = (selectedTodo: Todo) => void
type DeleteTodo = (selectedTodo: Todo) => void