import { useState, ChangeEvent, FormEvent } from 'react'
import { v4 } from 'uuid';

// can either choose 'interface' or 'type'
// interface AddTodoFormProps {
//     addTodo: AddTodo
// }

type AddTodoFormProps = {
    addTodo: AddTodo
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {

    const initialState = {
        id: '',
        text: '',
        complete: false
    }

    const [newTodo, setNewTodo] = useState<Todo>(initialState)

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setNewTodo({
            id: v4(),
            text: e.target.value,
            complete: false
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (!newTodo.text && !newTodo.id) return
        addTodo(newTodo)
        setNewTodo(initialState)
    }

    return (
        <div className='d-flex justify-content-center form-group'>
            <form className='' onSubmit={handleSubmit}>
                <input type="text" value={newTodo.text} onChange={handleChange}/>
                <button className='btn btn-primary shadow-none'>Add todo</button>
            </form>
        </div>
    )
}

export default AddTodoForm
