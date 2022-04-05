// Import data

// Import components
import "./App.css";
import Directory from "./Directory";
import Gallery from "./Gallery";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";

function App() {
    return (
        <div>
            <h1>craigslist</h1>
            <div className="App">
                {/* App
                  Searchbar
                  Directory
                  Gallery
                  Posting
                  Sidebar
                  Help */}
                <Searchbar />
                <Directory />
                <Gallery />
                <Sidebar />
            </div>
        </div>
    );
}

export default App;
