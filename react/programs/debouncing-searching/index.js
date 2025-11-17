const App = () => {
    const [users, setUsers] = React.useState([])
    const [filteredUsers, setFilteredUsers] = React.useState([])
    const [search, setSearch] = React.useState('')
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            setUsers(data)
            setFilteredUsers(data)
            setLoading(false)
        })
        .catch(() => setLoading(false))
    }, []);

    // ✅ Debounced search only
    React.useEffect(() => {
        if (!users.length) return;

        const timeout = setTimeout(() => {
            applyFilter(search)
        }, 400)

        return () => clearTimeout(timeout)
    }, [search, applyFilter])

    const applyFilter = React.useCallback((value) => {
        if(value.trim() !== '')
            setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(value.toLowerCase())))
        else
            setFilteredUsers([...users])
    },[users])

    const triggerSearch = () => applyFilter(search)

    return (
        <div>
            <div style={{display: "block"}}>
                <input type="text" 
                        placeholder="search" 
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' ? triggerSearch : ""}
                />
                <button style={{margin: "5px"}} onClick={triggerSearch}>Search</button>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map(({ id, name, email }) => (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3}>No Data Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)
