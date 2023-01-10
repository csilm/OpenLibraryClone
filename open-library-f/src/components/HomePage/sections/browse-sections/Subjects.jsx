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
                <div>
                    <h3>Subjects</h3>
                    <div>
                        <p>Last edited by <span><a>LeadSongDog</a></span></p>
                        <div>March 2, 2021</div>
                        <div class="vr"></div>
                        <div><a href="action2">History</a></div>
                     
                    </div>
                    <div>
                        <a href="#action1">Edit</a>
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
                        <h3 className="cat-head py-2">Arts</h3>
                        <ul className="styled-list">
                            <li><a href="#action1">Architecture</a></li>
                            <li><a href="#action1">Art Instruction</a></li>
                            <li><a href="#action1">Art History</a></li>
                            <li><a href="#action1">Dance</a></li>
                            <li><a href="#action1">Design</a></li>
                            <li><a href="#action1">Fashion</a></li>
                            <li><a href="#action1">Film</a></li>
                            <li><a href="#action1">Graphic Design</a></li>
                            <li><a href="#action1">Music</a></li>
                            <li><a href="#action1">Music Theory</a></li>
                            <li><a href="#action1">Painting</a></li>
                            <li><a href="#action1">Photography</a></li>
                        </ul>
                        <h3 className="cat-head py-2">Animals</h3>
                        <ul className="styled-list">
                            <li><a href="#action1">Bears</a></li>
                            <li><a href="#action1">Cats</a></li>
                            <li><a href="#action1">Kittens</a></li>
                            <li><a href="#action1">Dogs</a></li>
                            <li><a href="#action1">Puppies</a></li>
                        </ul>
                        <h3 className="cat-head py-2"><a href="#action">Fiction</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1">Fantasy</a></li>
                            <li><a href="#action1">Historical Fiction</a></li>
                            <li><a href="#action1">Horror</a></li>
                            <li><a href="#action1">Humor</a></li>
                            <li><a href="#action1">Literature</a></li>
                        </ul>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 ">
                        <ul className="styled-list">
                            <li><a href="#action1">Magic</a></li>
                            <li><a href="#action1">Mystery and detective stories</a></li>
                            <li><a href="#action1">Plays</a></li>
                            <li><a href="#action1">Poetry</a></li>
                            <li><a href="#action1">Romance</a></li>
                            <li><a href="#action1">Science Fiction</a></li>
                            <li><a href="#action1">Short Stories</a></li>
                            <li><a href="#action1">Thriller</a></li>
                            <li><a href="#action1">Young Adult</a></li>
                        </ul>
                        <h3 className="cat-head py-2"><a href="#action">Science & Mathematics</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1">Biology</a></li>
                            <li><a href="#action1">Chemistry</a></li>
                            <li><a href="#action1">Mathematics</a></li>
                            <li><a href="#action1">Physics</a></li>
                            <li><a href="#action1">Programming</a></li>
                        </ul>
                        <h3 className="cat-head py-2"><a href="#action">Business & Finance</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1">Management</a></li>
                            <li><a href="#action1">Entrepreneurship</a></li>
                            <li><a href="#action1">Business Economics</a></li>
                            <li><a href="#action1">Business Success</a></li>
                            <li><a href="#action1">Finance</a></li>
                        </ul>
                        <h3 className="cat-head py-2"><a href="#action">Children's</a></h3>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <ul className="styled-list">
                            <li><a href="#action1">Kids Books</a></li>
                            <li><a href="#action1">Stories in Rhyme</a></li>
                            <li><a href="#action1">Baby Books</a></li>
                            <li><a href="#action1">Bedtime Books</a></li>
                            <li><a href="#action1">Picture Books</a></li>
                        </ul>
                        <h3 className="cat-head py-2"><a href="#action">History</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1">Ancient Civilization</a></li>
                            <li><a href="#action1">Archaeology</a></li>
                            <li><a href="#action1">Anthropology</a></li>
                            <li><a href="#action1">World War II</a></li>
                            <li><a href="#action1">Social Life and Customs</a></li>
                        </ul>
                        <h3 className="cat-head py-2"><a href="#action">Health & Wellness</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1">Cooking</a></li>
                            <li><a href="#action1">Cookbooks</a></li>
                            <li><a href="#action1">Mental Health</a></li>
                            <li><a href="#action1">Exercise</a></li>
                            <li><a href="#action1">Nutrition</a></li>
                            <li><a href="#action1">Self-help</a></li>
                        </ul>
                        <h3 className="cat-head py-2"><a href="#action">Biography</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1">Autobiographies</a></li>
                            <li><a href="#action1">History</a></li>
                            <li><a href="#action1">Politics and Government</a></li>
                            <li><a href="#action1">World War II</a></li>
                            <li><a href="#action1">Women</a></li>
                            <li><a href="#action1">Kings and Rulers</a></li>
                            <li><a href="#action1">Composers</a></li>
                            <li><a href="#action1">Artists</a></li>
                        </ul>
                        <h3 className="cat-head py-2">Social Sciences</h3>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <ul className="styled-list">
                            <li><a href="#action1">Anthropology</a></li>
                            <li><a href="#action1">Religion</a></li>
                            <li><a href="#action1">Political Science</a></li>
                            <li><a href="#action1">Psychology</a></li>
                        </ul>
                        <h3 className="cat-head py-2"><a href="#action">Places</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1">Brazil</a></li>
                            <li><a href="#action1">India</a></li>
                            <li><a href="#action1">Indonesia</a></li>
                            <li><a href="#action1">United States</a></li>
                        </ul>
                        <h3 className="cat-head py-2"><a href="#action">Textbooks</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1">History</a></li>
                            <li><a href="#action1">Mathematics</a></li>
                            <li><a href="#action1">Geography</a></li>
                            <li><a href="#action1">Psychology</a></li>
                            <li><a href="#action1">Algebra</a></li>
                            <li><a href="#action1">Education</a></li>
                            <li><a href="#action1">Business & Economics</a></li>
                            <li><a href="#action1">Science</a></li>
                            <li><a href="#action1">Chemistry</a></li>
                            <li><a href="#action1">English Language</a></li>
                            <li><a href="#action1">Physics</a></li>
                            <li><a href="#action1">Computer Science</a></li>
                        </ul>
                        <h3 className="cat-head py-2">Books by Language</h3>
                        <ul className="styled-list">
                            <li><a href="#action1">English</a></li>
                            <li><a href="#action1">French</a></li>
                            <li><a href="#action1">Spanish</a></li>
                            <li><a href="#action1">German</a></li>
                            <li><a href="#action1">Russian</a></li>
                            <li><a href="#action1">Italian</a></li>
                            <li><a href="#action1">Chinese</a></li>
                            <li><a href="#action1">Japanese</a></li>
                            <li><a href="#action1">See more...</a></li>
                        </ul>
                    </div>
                </div>

            </Container>

        </div>


    );
}

export default Subjects;