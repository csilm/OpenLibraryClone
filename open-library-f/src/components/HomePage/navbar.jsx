import React from 'react';
import Openlib from './images/openlibrary-logo-tighter.svg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import Form from 'react-bootstrap/Form';
import Searchbox from './SearchBox';

function NavBar(){
  return(
    <Navbar className='justify-content-between'> 
    <Container className='NavBar my-2'>
      <Navbar.Brand href="https://openlibrary.org/"> <img src={Openlib} alt='openLibrary' width={189} className='ms-2'/></Navbar.Brand>
      <Nav.Link href="#action1">My Books</Nav.Link> 
      <NavDropdown title="Browse" id="navbarScrollingDropdown"> 
          <NavDropdown.Item href="#action3">Subjects</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action4">Trending</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Library Explorer</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action6">Lists</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action7">Collections</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action8">K-12 Student Library</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action9">Random Book</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action10">Advanced Search</NavDropdown.Item>
        </NavDropdown>
        <Searchbox />
      <Navbar.Brand href="#action11">Log In</Navbar.Brand>
      <a href='#action2' className='signup-btn px-2 py-1'>Sign Up</a>{' '}
      <Navbar.Brand href="#action1    ">
      <svg width="24px" height="24px" viewBox="0 0 28 28" fill="none" xmlns="#action1" stroke="#e1dcc5" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path d="M3 7C3 6.44771 3.44772 6 4 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H4C3.44772 8 3 7.55229 3 7Z" fill="#000"></path><path d="M3 14C3 13.4477 3.44772 13 4 13H24C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H4C3.44772 15 3 14.5523 3 14Z" fill="#000"></path><path d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H24C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20H4Z" fill="#000"></path></g></svg>
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
}


export default NavBar;