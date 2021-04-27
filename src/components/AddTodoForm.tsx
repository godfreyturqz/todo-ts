import { useState, ChangeEvent, FormEvent } from 'react'

// can either choose 'interface' or 'type'
// interface AddTodoFormProps {
//     addTodo: AddTodo
// }

type AddTodoFormProps = {
    addTodo: AddTodo
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {

    const [newTodo, setNewTodo] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newTodo === '') return
        addTodo(newTodo)
        setNewTodo('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newTodo} onChange={handleChange}/>
            <button>Add todo</button>
        </form>
    )
}

export default AddTodoForm
