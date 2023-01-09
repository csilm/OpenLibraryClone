import React from 'react';
import Container from "react-bootstrap/esm/Container";
import './style.css';
import Header from "./sections/Header";
import NavBar from "./sections/NavBar";
import Openlib from "./sections/OpenlibraryMain";
import Trendingb from "./sections/Trendingbooks";
import Announcement from "./sections/Announcement";

const Homepage = () => {
  return (
    <div>
      <Header />
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
  )
}

export default Homepage