//import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Views/Landing.jsx";

function App() {
    return (
      <BrowserRouter>
        <div className="App">          
          <Routes>
            <Route  path="/" element={Landing()} />           
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
  
  export default App;