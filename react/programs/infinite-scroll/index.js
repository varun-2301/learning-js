// Fake API fetch
const fetchItems = async (page) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (page > 5) {
                // simulate no more data
                resolve({ data: [], hasMore: false })
            } else {
                // generate 20 items
                const items = Array.from({ length: 20 }, (_, i) => `Item ${(page - 1) * 20 + i + 1}`)
                resolve({ data: items, hasMore: true })
            }
        }, 1000) // simulate network delay
    })
}

const InfiniteScroll = () => {
    const [items, setItems] = React.useState([])
    const [page, setPage] = React.useState(1)
    const [loading, setLoading] = React.useState(false)
    const [hasMore, setHasMore] = React.useState(true)
    const [error, setError] = React.useState(null)

    const observerRef = React.useRef()

    // Load items when page changes
    React.useEffect(() => {
        const load = async () => {
            try {
                setLoading(true)
                setError(null)
                const res = await fetchItems(page)
                setItems((prev) => [...prev, ...res.data])
                setHasMore(res.hasMore)
            } catch (err) {
                setError("Failed to load data")
            } finally {
                setLoading(false)
            }
        }
    
        if (hasMore) load()
    }, [page])

    // IntersectionObserver callback
    const lastItemRef = React.useCallback((node) => {
        if (loading) return
        if (observerRef.current) observerRef.current.disconnect()

        observerRef.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPage((prev) => prev + 1)
            }
        })

        if (node) observerRef.current.observe(node)
    },[loading, hasMore])

    return (
        <div className="container">
            <h2 className="title">Infinite Scroll Example</h2>

            <ul className="list">
                {items.map((item, index) => {
                    if (index === items.length - 1) {
                        return (
                            <li key={item} ref={lastItemRef} className="item">
                                {item}
                            </li>
                        )
                    }
                    return (
                        <li key={item} className="item">
                            {item}
                        </li>
                    )
                })}
            </ul>

            {loading && <p className="loading">Loading...</p>}
            
            {error && (
                <p className="error">
                    {error} <button onClick={() => setPage(page)}>Retry</button>
                </p>
            )}
            
            {!hasMore && <p className="end">🎉 You reached the end!</p>}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<InfiniteScroll />)
