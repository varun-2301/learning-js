/**
 * Search using Debouncing in React
 * Create a search input that does not fire API calls on every keystroke.
 * The challenge is implementing debouncing correctly and canceling previous requests.
 * Custom hooks are your friend here.
*/

// Debounces the query and cancels in-flight requests when the user types again
const useDebouncedSearch = (query, delay = 500) => {
    const [results, setResults] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError]   = React.useState(null);
    const abortRef = React.useRef(null);

    React.useEffect(() => {
        const q = query.trim();

        // If query is empty -> clear results and cancel any running request
        if (!q) {
            setResults([])
            setLoading(false)
            setError(null)
            if (abortRef.current) 
                abortRef.current.abort()
                
            return
        }

        // Start debounce timer
        const timerId = setTimeout(async () => {
            // Cancel the previous request (if any)
            if (abortRef.current) abortRef.current.abort()
            const controller = new AbortController()
            abortRef.current = controller

            try {
                setLoading(true)
                setError(null)

                // Fake HTTP API (real endpoint, fake data)
                const res = await fetch(
                    `https://dummyjson.com/products/search?q=${encodeURIComponent(q)}`,
                    { signal: controller.signal }
                )
                
                if (!res.ok) 
                    throw new Error(`HTTP ${res.status}`)

                const json = await res.json()
                setResults(Array.isArray(json ? json.products : '') ? json.products : [])

            } catch (e) {
                // Ignore aborts; report real errors
                if (e.name !== "AbortError") 
                    setError(e.message || "Something went wrong")
            } finally {
                setLoading(false)
            }
        }, delay)

        // Cleanup: clear the debounce timer and cancel request if effect re-runs/unmounts
        return () => {
            clearTimeout(timerId)
            if (abortRef.current) 
                abortRef.current.abort()
        }
    }, [query, delay])

    return { results, loading, error }
}

const App = () => {
    const [text, setText] = React.useState("");
    const { results, loading, error } = useDebouncedSearch(text, 400)
    const [activeIndex, setActiveIndex] = React.useState(-1); // for keyboard navigation
    const [selected, setSelected] = React.useState(null); // NEW: track chosen item

    const handleSelect = (item) => {
        setText(item.title);     // put value into input
        setSelected(item);       // save selected product
        setActiveIndex(-1);      // reset active index
    };

    const handleKeyDown = React.useCallback((e) => {
        if (!results.length) return

        if (e.key === "ArrowDown") {
            e.preventDefault()
            setActiveIndex((prev) => (prev + 1) % results.length)
        } else if (e.key === "ArrowUp") {
            e.preventDefault()
            setActiveIndex((prev) => prev <= 0 ? results.length - 1 : prev - 1)
        } else if (e.key === "Enter") {
            e.preventDefault()
            if (activeIndex >= 0) {
                setText(results[activeIndex].title)
                setActiveIndex(-1) // reset selection
            }
        }
    },[results, activeIndex])

    return (
        <div className="search-container">
            <label className="search-label">Search products</label>
            <input
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    setActiveIndex(-1);
                    setSelected(null); // clear previously chosen when typing again
                }}
                onKeyDown={handleKeyDown}
                placeholder="Type to search…"
                className="search-input"
            />

            {loading && <p className="loading-text">Loading…</p>}

            {/* Show dropdown only if typing (not after selecting) */}
            {results.length > 0 && text && !selected && (
                <ul className="dropdown">
                    {results.map((item, index) => (
                        <li
                            key={item.id}
                            className={`dropdown-item ${
                                index === activeIndex ? "active" : ""
                            }`}
                            onMouseDown={() => handleSelect(item)} // use handler
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            )}

            {/* Show chosen product details */}
            {selected && (
                <div className="selected-box">
                    <h3>{selected.title}</h3>
                    <p>Price: ${selected.price}</p>
                </div>
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)