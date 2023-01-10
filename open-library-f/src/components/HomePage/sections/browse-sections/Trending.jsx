import React from "react";
import Header from "../Header";
import NavBar from "../NavBar";
import Announcement from "../Announcement";
import Container from "react-bootstrap/esm/Container";
import './style.css';


function Trending(){
    return(
        <div>
            <Header />
            <NavBar />
            <Container className="w-79 px-0 announce">
                <Announcement />
            </Container>
            <Container  className="mainBody w-79 pb-1">
                <h1>Trending</h1>
            </Container>
        </div>

    );
}

export default Trending;