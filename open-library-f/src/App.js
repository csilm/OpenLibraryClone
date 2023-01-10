import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Homepage from "./components/HomePage/Homepage";
import Subjects from "./components/HomePage/sections/browse-sections/Subjects";
import Trending from "./components/HomePage/sections/browse-sections/Trending";

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/sections/browse-sections/Subjects" element={<Subjects/>} />
      <Route path="/sections/browse-sections/Trending" element={<Trending/>} />
    </Routes>
  </BrowserRouter> 
  );
}
 
export default App;
