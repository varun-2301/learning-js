/**
 * Star Rating Component
 * This component allows users to rate something using a star rating system.
 *  { Step 1: Render 5 stars using a loop ★★★★★ }
    { Step 2: Update rating when a star is clicked }
    { Step 3: Style stars based on rating } 
    { Step 4: Display current rating below the stars }
    { Step 5: Add a Reset button to clear the rating }
 */
const App = () => {
    const [rating, setRating] = React.useState(0);

    const renderStars = () => {
        return [1,2,3,4,5].map(star => (
                <span className={`star ${star <= rating ? "filled" : ""}`} 
                    data-index={star + 1}
                    onClick={() => setRating(star)}
                    key={star}
                >
                    &#9733;
                </span>
        ))
    }

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Star Rating</h1>
            <div className="stars" id="starContainer">
                {renderStars()}
            </div>

            <p>Current Rating: {rating}</p>

            <button onClick={() => setRating(0)} style={{ marginTop: "20px" }}>
                Reset Rating
            </button>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
