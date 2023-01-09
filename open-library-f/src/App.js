import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Homepage from "./components/HomePage/Homepage";

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
    </Routes>
  </BrowserRouter> 
  );
}
 
export default App;
