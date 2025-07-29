/**
 * React Questions & Answers Toggle FAQ Component
 * This component allows users to toggle the visibility of answers to frequently asked questions.
*/

const App = () => {
    const faqs = [
    {
        question: "What is this app about?",
        answer: "This app helps users track and improve their daily habits.",
    },
    {
        question: "How do I reset my password?",
        answer:
        "Click on 'Forgot Password' on the login screen and follow instructions.",
    },
    {
        question: "Can I use this app offline?",
        answer: "Yes, some features are available offline after the initial setup.",
    },
    ];

    const [activeIndex, setActiveIndex] = React.useState(null)

    const toggleFAQ = (index) => {
        setActiveIndex((prev) => prev === index ? null : index)
    }

    return (
        <div className="faq-container">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                    <button className="faq-question" onClick = {() => toggleFAQ(index)}>
                        <span>{faq.question}</span>
                        <span className="faq-icon">
                            {activeIndex === index 
                            ? 
                                <i class="fa-solid fa-arrow-down"></i>
                            :
                                <i class="fa-solid fa-arrow-up"></i>
                            }
                        </span>
                    </button>
                    {activeIndex === index && (
                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);