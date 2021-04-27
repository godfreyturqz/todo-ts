import { useState } from 'react'
import AddTodoForm from './components/AddTodoForm'
import TodoList from "./components/TodoList"


const App: React.FC = () => {

  // const initialTodos: Array<Todo> = [
  //   {text: 'learn basic typescript', complete: true},
  // ]

  const [todos, setTodos] = useState<Todo[]>([])

  // declaring types for functions
  const addTodo: AddTodo = (newTodo) => {
    setTodos([...todos, {text: newTodo, complete: false}])
  }

  // declaring types for functions
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

  // can also just declare types on function parameters
  const deleteTodo = (selectedTodo: Todo) => {
    const newTodos = todos.filter(todo => todo !== selectedTodo)
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
