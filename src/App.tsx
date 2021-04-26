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
  
  return (
    <div>
      <TodoList todos={todos}/>
      <AddTodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
