const App = () => {
    const [todos, setTodos] = React.useState([])
    const [todoText, setTodoText] = React.useState('')

    const handleAddTodo = () => {
        if(todoText.trim() === '') return
        setTodos([...todos, {id: todos.length + 1, text: todoText, completed: false}])
        setTodoText('')
    }

    const handleDeleteTodo = (id) => setTodos(todos.filter(t => t.id !== id))

    const handleToggleTodo = (id) => {
        const updatedTodos = todos.map(t => {
            if(t.id === id)
                return {...t, completed: !t.completed}
            
            return t
        })
        setTodos(updatedTodos)
    }

    return (
        <div className="container">
            <h2>To Do App</h2>
            <div className="input-group">
                <input type="text" placeholder="Add a new Todo" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>

            <ul className="todo-list">
                {todos.map(({id, text, completed}) => (
                    <li className={`todo-item ${completed ? 'done' : ''}`} key={id}>
                        <label className="checkbox-label">
                            <input type="checkbox" checked={completed} onChange={() => handleToggleTodo(id)} />
                            <span className="todo-text">{text}</span>
                        </label>
                        <button className="delete" onClick={() => handleDeleteTodo(id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);