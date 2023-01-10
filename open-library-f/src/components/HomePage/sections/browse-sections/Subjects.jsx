import React from "react";
import Header from "../Header";
import NavBar from "../NavBar";
import Announcement from "../Announcement";
import Container from "react-bootstrap/esm/Container";
//import Button from "react-bootstrap/esm/Button";
import './style.css';


function Subjects(){
    return(
        <div>
            <Header />
            <NavBar />
            <Container className="w-79 px-0 announce">
                <Announcement />
            </Container>
            <Container  className="mainBody w-79 pb-1">
                <div className="d-flex justify-content-between">
                    <h3>Subjects</h3>
                    <div>
                        <p>Last edited by <span><a href="#action">LeadSongDog</a></span></p>
                        <div>March 2, 2021</div>
                        <div class="vr"></div>
                        <div><a href="#action2">History</a></div>
                        <div>
                        <a href="#action1">Edit</a>
                        </div>
                    </div>
                    
                </div>
                <div className=" ">
                    <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn" type="submit">Search</button>
                    </form>
                </div>
                <div className="row align-items-start">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <h3 className="cat-head py-2 ms-4">Arts</h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Architecture</a></li>
                            <li><a href="#action1" className="b-links">Art Instruction</a></li>
                            <li><a href="#action1" className="b-links">Art History</a></li>
                            <li><a href="#action1" className="b-links">Dance</a></li>
                            <li><a href="#action1" className="b-links">Design</a></li>
                            <li><a href="#action1" className="b-links">Fashion</a></li>
                            <li><a href="#action1" className="b-links">Film</a></li>
                            <li><a href="#action1" className="b-links">Graphic Design</a></li>
                            <li><a href="#action1" className="b-links">Music</a></li>
                            <li><a href="#action1" className="b-links">Music Theory</a></li>
                            <li><a href="#action1" className="b-links">Painting</a></li>
                            <li><a href="#action1" className="b-links">Photography</a></li>
                        </ul>
                        <h3 className="cat-head py-2 ms-4">Animals</h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Bears</a></li>
                            <li><a href="#action1" className="b-links">Cats</a></li>
                            <li><a href="#action1" className="b-links">Kittens</a></li>
                            <li><a href="#action1" className="b-links">Dogs</a></li>
                            <li><a href="#action1" className="b-links">Puppies</a></li>
                        </ul>
                        <h3 className="cat-head py-2 ms-4"><a href="#action">Fiction</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Fantasy</a></li>
                            <li><a href="#action1" className="b-links">Historical Fiction</a></li>
                            <li><a href="#action1" className="b-links">Horror</a></li>
                            <li><a href="#action1" className="b-links">Humor</a></li>
                            <li><a href="#action1" className="b-links">Literature</a></li>
                        </ul>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 ">
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Magic</a></li>
                            <li><a href="#action1" className="b-links">Mystery and detective stories</a></li>
                            <li><a href="#action1" className="b-links">Plays</a></li>
                            <li><a href="#action1" className="b-links">Poetry</a></li>
                            <li><a href="#action1" className="b-links">Romance</a></li>
                            <li><a href="#action1" className="b-links">Science Fiction</a></li>
                            <li><a href="#action1" className="b-links">Short Stories</a></li>
                            <li><a href="#action1" className="b-links">Thriller</a></li>
                            <li><a href="#action1" className="b-links">Young Adult</a></li>
                        </ul>
                        <h3 className="cat-head py-2 ms-4"><a href="#action">Science & Mathematics</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Biology</a></li>
                            <li><a href="#action1" className="b-links">Chemistry</a></li>
                            <li><a href="#action1" className="b-links">Mathematics</a></li>
                            <li><a href="#action1" className="b-links">Physics</a></li>
                            <li><a href="#action1" className="b-links">Programming</a></li>
                        </ul>
                        <h3 className="cat-head py-2 ms-4"><a href="#action">Business & Finance</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Management</a></li>
                            <li><a href="#action1" className="b-links">Entrepreneurship</a></li>
                            <li><a href="#action1" className="b-links">Business Economics</a></li>
                            <li><a href="#action1" className="b-links">Business Success</a></li>
                            <li><a href="#action1" className="b-links">Finance</a></li>
                        </ul>
                        <h3 className="cat-head py-2 ms-4"><a href="#action">Children's</a></h3>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Kids Books</a></li>
                            <li><a href="#action1" className="b-links">Stories in Rhyme</a></li>
                            <li><a href="#action1" className="b-links">Baby Books</a></li>
                            <li><a href="#action1" className="b-links">Bedtime Books</a></li>
                            <li><a href="#action1" className="b-links">Picture Books</a></li>
                        </ul>
                        <h3 className="cat-head py-2 ms-4"><a href="#action">History</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Ancient Civilization</a></li>
                            <li><a href="#action1" className="b-links">Archaeology</a></li>
                            <li><a href="#action1" className="b-links">Anthropology</a></li>
                            <li><a href="#action1" className="b-links">World War II</a></li>
                            <li><a href="#action1" className="b-links">Social Life and Customs</a></li>
                        </ul>
                        <h3 className="cat-head py-2 ms-4"><a href="#action">Health & Wellness</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Cooking</a></li>
                            <li><a href="#action1" className="b-links">Cookbooks</a></li>
                            <li><a href="#action1" className="b-links">Mental Health</a></li>
                            <li><a href="#action1" className="b-links">Exercise</a></li>
                            <li><a href="#action1" className="b-links">Nutrition</a></li>
                            <li><a href="#action1" className="b-links">Self-help</a></li>
                        </ul>
                        <h3 className="cat-head py-2 ms-4"><a href="#action">Biography</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Autobiographies</a></li>
                            <li><a href="#action1" className="b-links">History</a></li>
                            <li><a href="#action1" className="b-links">Politics and Government</a></li>
                            <li><a href="#action1" className="b-links">World War II</a></li>
                            <li><a href="#action1" className="b-links">Women</a></li>
                            <li><a href="#action1" className="b-links">Kings and Rulers</a></li>
                            <li><a href="#action1" className="b-links">Composers</a></li>
                            <li><a href="#action1" className="b-links">Artists</a></li>
                        </ul>
                        <h3 className="cat-head py-2 ms-4">Social Sciences</h3>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Anthropology</a></li>
                            <li><a href="#action1" className="b-links">Religion</a></li>
                            <li><a href="#action1" className="b-links">Political Science</a></li>
                            <li><a href="#action1" className="b-links">Psychology</a></li>
                        </ul>
                        <h3 className="cat-head py-2 ms-4"><a href="#action">Places</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Brazil</a></li>
                            <li><a href="#action1" className="b-links">India</a></li>
                            <li><a href="#action1" className="b-links">Indonesia</a></li>
                            <li><a href="#action1" className="b-links">United States</a></li>
                        </ul>
                        <h3 className="cat-head py-2 ms-4"><a href="#action">Textbooks</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">History</a></li>
                            <li><a href="#action1" className="b-links">Mathematics</a></li>
                            <li><a href="#action1" className="b-links">Geography</a></li>
                            <li><a href="#action1" className="b-links">Psychology</a></li>
                            <li><a href="#action1" className="b-links">Algebra</a></li>
                            <li><a href="#action1" className="b-links">Education</a></li>
                            <li><a href="#action1" className="b-links">Business & Economics</a></li>
                            <li><a href="#action1" className="b-links">Science</a></li>
                            <li><a href="#action1" className="b-links">Chemistry</a></li>
                            <li><a href="#action1" className="b-links">English Language</a></li>
                            <li><a href="#action1" className="b-links">Physics</a></li>
                            <li><a href="#action1" className="b-links">Computer Science</a></li>
                        </ul>
                        <h3 className="cat-head py-2 ms-4">Books by Language</h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">English</a></li>
                            <li><a href="#action1" className="b-links">French</a></li>
                            <li><a href="#action1" className="b-links">Spanish</a></li>
                            <li><a href="#action1" className="b-links">German</a></li>
                            <li><a href="#action1" className="b-links">Russian</a></li>
                            <li><a href="#action1" className="b-links">Italian</a></li>
                            <li><a href="#action1" className="b-links">Chinese</a></li>
                            <li><a href="#action1" className="b-links">Japanese</a></li>
                            <li><a href="#action1" className="b-links">See more...</a></li>
                        </ul>
                    </div>
                </div>

            </Container>

        </div>


    );
}

export default Subjects;