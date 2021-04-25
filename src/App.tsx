import { useState } from 'react'
import TodoList from "./TodoList"


const initialTodos: Array<Todo> = [
  {text: 'learn basic typescript', complete: true},
  {text: 'learn basic typescript', complete: true},
  {text: 'learn basic typescript', complete: true}
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos)
  
  return (
    <div>
      <TodoList todos={todos}/>
    </div>
  )
}

export default App
