const App = () => {
    const [users, setUsers] = React.useState([])
    const [sortType, setSortType] = React.useState(false)

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) => res.json())
        .then((data) => setUsers(data))
    }, []);

    const displayUsers = () => {
        if(users.length > 0)
            return users.map(({ id, name, email }) => (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                </tr>
            ))
        else
            return (
                <tr>
                    <td colSpan={3}>Fetching Data</td>
                </tr>
            )
    }

    const sortData = () => {
        setSortType(prev => {
            const sortedData = [...users].sort((a, b) => {
                return sortType ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
            })
            setUsers(sortedData)
            return !prev
        })
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th onClick={sortData}>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>{displayUsers()}</tbody>
            </table>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)
