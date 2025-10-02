const withDelay = (WrappedComponent, delay) => {
    //returns a new functional component
    return (props) => {
        const [show, setShow] = React.useState(false)

        React.useEffect(() => {
            const timer = setTimeout(() => setShow(true), delay)

            return () => clearTimeout(timer)
        },[delay])

        return show ? <WrappedComponent {...props} /> : null
    } 
}

const Message = () => <h2>Hello after Delay!</h2>

const DelayedMessage = withDelay(Message, 5000)

const App = () => {
    return (
        <div>
            <h1>Waiting for the message</h1>
            <DelayedMessage />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)