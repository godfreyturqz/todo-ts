import { useState } from 'react'
import AddTodoForm from './AddTodoForm'
import TodoList from "./TodoList"


const initialTodos: Array<Todo> = [
  // {text: 'learn basic typescript', complete: true},
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos)

  const addTodo: AddTodo = (newTodo) => {
    setTodos([...todos, {text: newTodo, complete: false}])
  }

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map(todo => {
      if(todo !== selectedTodo) return todo
      return {
        ...todo,
        complete: !todo.complete
      }
    })
    setTodos(newTodos)
  }

  return (
    <div>
      <AddTodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  )
}

export default App
