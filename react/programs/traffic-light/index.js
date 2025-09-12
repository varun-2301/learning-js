const App = () => {
    const [light, setLight] = React.useState('red')

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if(light === 'red') setLight('yellow')
            if(light === 'yellow') setLight('green')
            if(light === 'green') setLight('red')
        }, light === 'red' ? 3000 : light === 'yellow' ? 1000 : 2000)

        return () => clearTimeout(timer)
    }, [light])

    return (
        <div>
            <h2 data-testid="title">Traffic Lights</h2>
            <div className="traffic-light" id="traffic-light" data-testid="traffic-light">
                <div id="red-light" data-testid="red-light" className={`circle ${light === 'red' ? 'red-on' : ''}`}></div>
                <div id="yellow-light" data-testid="yellow-light" className={`circle ${light === 'yellow' ? 'yellow-on' : ''}`}></div>
                <div id="green-light" data-testid="green-light" className={`circle ${light === 'green' ? 'green-on' : ''}`}></div>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)