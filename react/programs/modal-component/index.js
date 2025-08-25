const modalRoot = document.getElementById("modal-root") || document.body;

const Modal = ({ isOpen, onClose, children }) => {
  // Close on Escape key
    React.useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose()
            }
        }
        
        document.addEventListener("keydown", handleEscape)
        
        return () => document.removeEventListener("keydown", handleEscape)
    }, [onClose])

    if (!isOpen) return null

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()} // prevent bubbling close
            >
                <button className="modal-close" onClick={onClose} aria-label="Close">
                    ✖
                </button>
                {children}
            </div>
        </div>,
        modalRoot
    )
}

const App = () =>{
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div>
            <h1>Reusable Modal Example</h1>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2>Modal Title</h2>
                <p>This is a reusable modal built with React Portals!</p>
                <button onClick={() => setIsOpen(false)}>Close Modal</button>
            </Modal>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)