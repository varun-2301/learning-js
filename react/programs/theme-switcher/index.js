const ThemeContext = React.createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState(() => {
        return localStorage.getItem("theme") || "light"
    })

    React.useEffect(() => {
        document.body.className = theme
        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => React.useContext(ThemeContext)


const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div style={{ padding: "1rem" }}>
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
            <p>Current theme: {theme}</p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ThemeProvider><App /></ThemeProvider>)