type Todo = {
    text: string
    complete: boolean
}

type AddTodo = (newTodo: string) => void