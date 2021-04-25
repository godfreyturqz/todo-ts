import TodoListItem from "./TodoListItem"


const todos: Array<Todo> = [
  {text: 'learn basic typescript', complete: true}
]

const App: React.FC = () => {
  return (
    <div>
      <TodoListItem todo={todos[0]}/>
    </div>
  )
}

export default App
