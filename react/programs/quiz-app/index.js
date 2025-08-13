/**
 * Quiz App
 * 
*/

const questions = [
    {
        id: 1,
        question: "What is the capital of Haryana?",
        options: ["Yamunanagar", "Panipat", "Gurgaon", "Chandigarh"],
        answer: "Chandigarh",
    },
    {
        id: 2,
        question: "What is the capital of Punjab?",
        options: ["Patiala", "Ludhiana", "Amritsar", "Chandigarh"],
        answer: "Chandigarh",
    },
    {
        id: 3,
        question: "What is the capital of India?",
        options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        answer: "Delhi",
    },
    {
        id: 4,
        question: "What is the capital of Uttarakhand?",
        options: ["Roorkee", "Haridwar", "Dehradun", "Nanital"],
        answer: "Dehradun",
    },
    {
        id: 5,
        question: "What is capital of Uttar Pradesh?",
        options: ["GB Nagar", "Lucknow", "Prayagraj", "Agra"],
        answer: "Lucknow",
    },
]

const App = () => {
    const [index, setIndex] = React.useState(0)
    const [score, setScore] = React.useState(0)
    const [selectedAns, setSelectedAns] = React.useState('')
    const [warning, setWarning] = React.useState(false)
    const [quizEnd, setQuizEnd] = React.useState(false)

    const current = questions[index]

    if(questions.length === 0)
        return <p>No Quiz available</p>

    const handleChange = (e) => {
        setSelectedAns(e.target.value)
        if(!warning) setWarning(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!selectedAns){
            setWarning(true)
            return
        }

        if(current.answer === selectedAns)
            setScore(score+1)

        if((index + 1) < questions.length){
            setIndex(index+1)
            setWarning(false)
            setSelectedAns('')
        } else {
            setQuizEnd(true)
        }
    }

    const handleReset = () => {
        setIndex(0)
        setScore(0)
        setWarning(false)
        setQuizEnd(false)
        setSelectedAns('')
    }
    
    const getOptionTestId = (index) => {
        return `option-${String.fromCharCode(65 + index)}`; // A, B, C, D
    };

    return (
        <div className="App">
            <h1 className="app-title">Quiz App</h1>
            {!quizEnd ? (
                <form className="question-container">
                    <h3>Question {index+1}</h3>
                    <p data-testid="question">{questions[index].question}</p>
                    <div className="options">
                        {questions[index].options.map((opt, idx) => (
                            <label key={idx} className="option">
                                <input
                                    type="radio"
                                    name="option"
                                    value={opt}
                                    onChange={handleChange}
                                    checked={opt === selectedAns}
                                />
                                <span data-testid={getOptionTestId(idx)}>{opt}</span>
                            </label>
                        ))}
                    </div>

                    {warning && (
                        <p className="warning">Please select an option before submitting</p>
                    )}

                    <button type="submit" className="submit-button" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            ) : (
                <div className="score-container">
                    <h2 data-testid="score">
                        Your Score: {score} / {questions.length}
                    </h2>
                    <button    
                        className="restart-button"
                        data-testid="restart-button"
                        onClick={handleReset}
                    >
                        Play Again
                    </button>
                </div>
            )}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)