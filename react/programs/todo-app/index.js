const getInitialTodos = () => {
    try {
        return JSON.parse(localStorage.getItem('todos')) || [];
    } catch(err) {
        return [];
    }
}

const App = () => {
    const [todos, setTodos] = React.useState(getInitialTodos)
    const [todoText, setTodoText] = React.useState('')

    React.useEffect(() => {
        try {
            localStorage.setItem('todos', JSON.stringify(todos))
        } catch(err) {
            console.warn('Local storage not available.')
        }
    },[todos])

    const handleAddTodo = () => {
        if(todoText.trim() === '') return
        setTodos([...todos, {id: todos.length + 1, text: todoText, completed: false}])
        setTodoText('')
    }

    const handleDeleteTodo = (id) => setTodos(todos.filter(t => t.id !== id))

    const handleTodoStatus = (e, id) => {
        setTodos(todos.map(t => t.id === id ? {...t, completed: e.target.checked} : t))
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
                            <input type="checkbox" checked={completed} onChange={(e) => handleTodoStatus(e,id)} />
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