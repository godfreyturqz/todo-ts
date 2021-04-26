type Todo = {
    text: string
    complete: boolean
}

type AddTodo = (newTodo: string) => void

type ToggleTodo = (selectedTodo: Todo) => void