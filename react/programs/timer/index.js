const App = () => {
    const [time, setTime] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(false);
    const intervalRef = React.useRef(null); // Holds the interval ID

    const MAX_TIME = 5 * 60; // 5 minutes = 300 seconds

    React.useEffect(() => {
        if (isRunning && time < MAX_TIME) {
            intervalRef.current = setInterval(() => {
                setTime(prev => {
                    if (prev >= MAX_TIME - 1) {
                        clearInterval(intervalRef.current);
                        return MAX_TIME;
                    }
                    return prev + 1;
                });
            }, 1000);
        }
        
        // Clear on unmount or when isRunning changes
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const startTimer = () => {
        if (!isRunning && time < MAX_TIME) {
            setIsRunning(true);
        }
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
    }

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime(0);
    }

    const formatTime = (totalSeconds) => {
        const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const secs = String(totalSeconds % 60).padStart(2, '0');
        return `${mins}:${secs}`;
    };

    return (
        <div className="timer">
            <h1>Timer Component</h1>
            <div className="timer-display" data-testid="timer-display">
                {formatTime(time)}
            </div>
            <div className="timer-controls">
                <button onClick={startTimer} disabled={isRunning} data-testid="start-button">Start</button>
                <button onClick={stopTimer} disabled={!isRunning} data-testid="stop-button">Stop</button>
                <button onClick={resetTimer} data-testid="reset-button">Reset</button>
            </div>
            <div className="timer-status">
                {isRunning ? <span data-testid="status">Running</span> : <span data-testid="status">Stopped</span>}
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)