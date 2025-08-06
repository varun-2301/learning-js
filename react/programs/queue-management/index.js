

const App = () => {
    const [counterCount, setCounterCount] = React.useState("")
    const [counters, setCounters] = React.useState([])
    const [isCounterAdded, setIsCounterAdded] = React.useState(false)
    const [quantity, setQuantity] = React.useState("")
    const [lastAssigned, setLastAssigned] = React.useState(null)

    const handleSetCounters = () => {
        const numericValue = parseInt(counterCount);
        if (isNaN(numericValue) || numericValue < 0) return
        setCounters(Array.from({ length: numericValue }, () => []))
        setIsCounterAdded(true);
    }

    const handleAddCustomer = () => {
        const qty = parseInt(quantity)
        if (isNaN(qty) || qty <= 0) return

        const totalItemsPerCounter = counters.map(counter => 
            counter.reduce((acc, item) => acc+item, 0)
        )

        let counterIndex = totalItemsPerCounter.findIndex((t) => t === 0)

        if(counterIndex === -1) {
            const minTotal = Math.min(...totalItemsPerCounter)
            counterIndex = totalItemsPerCounter.findIndex((t) => t === minTotal)
        }

        const updatedCounters = counters.map((counter, index) => 
            index === counterIndex ? [...counter, qty] : counter
        )

        setCounters(updatedCounters)
        setLastAssigned(counterIndex + 1) // +1 to make it 1-based index
        setQuantity("") // Clear the input field after adding customer
    }

    return (
        <div className="billing-container" data-testid="billing-container">
            <h2 data-testid="heading">Billing Counter System</h2>
            {!isCounterAdded ? 
                <div className="input-section" data-testid="counter-input-section">
                    <input
                        data-testid="counter-input"
                        type="number"
                        placeholder="Number of counters"
                        value={counterCount}
                        onChange={(e) => setCounterCount(e.target.value)}
                        name="counter-input"
                    />
                    <button data-testid="set-counter-button" onClick={handleSetCounters}>
                        Set Counters
                    </button>
                </div>
            :
                <React.Fragment>
                <div className="input-section" data-testid="customer-input-section">
                    <input
                        data-testid="quantity-input"
                        type="number"
                        placeholder="Enter quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button data-testid="add-customer-button" onClick={handleAddCustomer}>
                        Add Customer
                    </button>
                </div>

                {lastAssigned && (
                    <div className="assigned-msg" data-testid="assignment-msg">
                        Customer assigned to Counter {lastAssigned}
                    </div>
                )}

                <div className="counter-wrapper" data-testid="counter-wrapper">
                {counters.map((counter, index) => (
                    <div className="counter" key={index} data-testid={`counter-${index}`}>
                        <h4 data-testid={`counter-heading`}>Counter {index + 1}</h4>
                        <div className="queue" data-testid={`queue-${index}`}>
                            {counter.map((customer, customerIndex) => (
                                <div className="customer-box" key={customerIndex} data-testid={`customer-box`}>
                                    {customer}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                </div>
                </React.Fragment>
            }
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)