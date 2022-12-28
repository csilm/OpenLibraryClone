import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/HomePage/navbar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
