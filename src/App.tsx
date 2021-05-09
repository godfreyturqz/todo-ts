import { useState } from 'react'
import AddTodoForm from './components/AddTodoForm'
import TodoList from "./components/TodoList"


const App: React.FC = () => {

  // const initialTodos: Array<Todo> = [
  //   {text: 'learn basic typescript', complete: true},
  // ]

  const [todos, setTodos] = useState<Todo[]>([])

  // This is how to declare types on functions
  const addTodo: AddTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  // This is how to declare types on functions
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map(todo => {
      if(todo.id === selectedTodo.id) return {...todo, complete: !todo.complete}
      return todo
    })
    setTodos(newTodos)
  }

  // This is how to declare types on functions in a different way
  const deleteTodo = (selectedTodo: Todo) => {
    const newTodos = todos.filter(todo => todo.id !== selectedTodo.id)
    setTodos(newTodos)
  }
  

  return (
    <div>
      <AddTodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
