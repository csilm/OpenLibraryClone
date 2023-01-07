import Container from "react-bootstrap/esm/Container";
//import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/HomePage/Header";
import NavBar from "./components/HomePage/NavBar";
import Openlib from "./components/HomePage/OpenlibraryMain";
import Trendingb from "./components/HomePage/Trendingbooks";
import Announcement from "./components/HomePage/Announcement";
import './components/HomePage/style.css';

/*
   <BrowserRouter>
<Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/" element={<Navbar/>} />
        <Route path="/" element={<Openlib/>} />
        <Route path="/" element={<Trendingb/>} />
      </Routes>
      </BrowserRouter> 
*/

function App() {
  return (
    <div className="App">
      <Header/>
      <Container className="w-79 px-0">
        <NavBar/>
      </Container>
      <Container className="w-79 px-0 announce">
        <Announcement />
      </Container>
      <Container className="mainBody w-79 pb-1">
        <Openlib/>
      </Container>
      <Container className="beige_background w-79 pt-4">
      <Trendingb/>
        
      </Container>
      
        
      
    </div>
  );
}

export default App;
