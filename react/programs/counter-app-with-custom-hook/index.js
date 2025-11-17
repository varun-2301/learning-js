// Child component: only re-renders if props change
const CounterButton = React.memo(({ onClick, label }) => {
    return (
        <button onClick={onClick}>{label}</button>
    )
})

const CounterHook = (initialVal = 0) => {
    const [count, setCount] = React.useState(initialVal)

    const increment = React.useCallback(() => {
        setCount(prev => prev + 1)
    },[])

    const decrement = React.useCallback(() => {
        setCount(prev => prev > 0 ? prev-1: 0)
    }, [])

    const reset = React.useCallback(() => {
        setCount(0)
    }, [])

    return { count, increment, decrement, reset}
}

const App = () => {
    const {count, increment, decrement, reset} = CounterHook(0)

    return (
        <div className="container">
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <CounterButton onClick={increment} label="Increment" />
            <CounterButton onClick={decrement} label="Decrement" />
            <CounterButton onClick={reset} label="Reset" />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)