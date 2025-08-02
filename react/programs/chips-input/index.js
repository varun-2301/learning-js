const App = () => {
    const [chips, setChips] = React.useState([]);
    const [inputValue, setInputValue] = React.useState("");

    const handleChipList = (event) => {
        if (event.key === 'Enter') {
            if (inputValue.trim() === '') return

            setChips([...chips, { label: inputValue.trim(), id: chips.length + 1 }])
            setInputValue('')
        }
    }

    const handleDeleteChip = (id) => setChips(chips.filter(c => c.id !== id))

    const chipsList = chips.map((c, i) => (
        <div key={i} className="chips-container">
            <span>{c.label}</span>
            <button className="chips-button" onClick={() => handleDeleteChip(c.id)}>X</button>
        </div>
    ))

    return (
        <div className="container">
            <h2>Chips Input</h2>
            <input
                type="text"
                placeholder="Type a chip and press tag"
                className="chips-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleChipList}
                name="chips-input"
            />
            <div className="chips-list">
                {chips.length > 0 ? chipsList : <span>No chips added</span>}
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);