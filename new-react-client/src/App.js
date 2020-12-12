import Navbar from "./Components/NavBar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Components/Pages/Routes";

function App() {
  return (
    <div className="App">
      <Navbar />  
      <Router>
        <Routes/>
      </Router>    
    </div>
  );
}

export default App;
