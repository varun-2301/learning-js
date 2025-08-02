/**
 * Tab Switcher Component
 * This component allows users to switch between different tabs and view their content.
 */

const tabs = [
    { id: "home", label: "Home", content: "Welcome to the Home tab!" },
    { id: "profile", label: "Profile", content: "This is your Profile." },
    { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

const App = () => {
    const defaultTabId = tabs.length > 0 ? tabs[0].id : null;
    const [activeTab, setActiveTab] = React.useState(defaultTabId);

    const renderTabs = () => {
        return tabs.map(({id, label}) => (
            <button key={id}
                className={`${id === activeTab ? 'active' : ""}`}
                data-testid={`tab-button-${id}`}
                onClick={() => handleTabClick(id)}
            >
                {label}
            </button>
        ))
    }

    const handleTabClick = (id) => setActiveTab(id);

    const getActiveTabContent = () => {
        const activeTabData = tabs.find(tab => tab.id === activeTab);
        return activeTabData ? activeTabData.content : "No content available.";
    }

    return (
        <div className="tab-switcher">
            <h1>Tab Switcher</h1>

            {/* Tab buttons */}
            <div className="tab-buttons">
                {/* TODO: Render buttons for each tab */}
                {/* Use data-testid={`tab-button-${tab.id}`} for each button */}
                {renderTabs()}
            </div>

            {/* Content */}
            <div className="tab-content" data-testid="tab-content">
                {/* TODO: Show content of the currently active tab */}
                {getActiveTabContent()}
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);