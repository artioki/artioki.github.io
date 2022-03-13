import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Navbar,Nav} from "react-bootstrap"
import { NavLink } from 'react-router-dom';
import MyTimer from '../MyTimer/MyTimer';


const Header = () => {
        
    return (
        <>
        <MyTimer ismain={true}></MyTimer>
        <Navbar  >
            <Nav className="me-auto my-2 my-lg-0 mx-2" >
                    <Nav.Link className='my' href="https://github.com/artioki"><FontAwesomeIcon icon="fa-solid fa-angle-left"/> User Pages</Nav.Link>
            </Nav>
            <Nav>
                    <Nav.Link className='my' href="#action1"><FontAwesomeIcon icon="fa-regular fa-bell" /></Nav.Link>
                    <Nav.Link className='my' href="#action2"><FontAwesomeIcon icon="fa-regular fa-user" /></Nav.Link>
            </Nav>
        </Navbar>
        <div style={{ background:"#DDE0E6",height:"1px"}}></div>

        <Navbar className=' py-0' style={{margin:"0px 32px"}} expand="md">
        <Navbar.Toggle/>
        <Navbar.Collapse>
        <Nav className="me-auto my-2 my-lg-0 d-flex flex" style={{width:"100%"}}>

                <Nav.Link className='my-under px-0 mx-2' as={NavLink} to=""><FontAwesomeIcon icon="fa-solid fa-list"/> Activity</Nav.Link>
                <Nav.Link className='my-under px-0 mx-2' as={NavLink} to="/map"><FontAwesomeIcon icon="fa-regular fa-map" /> Map</Nav.Link>
                <Nav.Link className='my-under px-0 mx-2' as={NavLink} to="/timer"><FontAwesomeIcon icon="fa-solid fa-gear" /> Timer</Nav.Link>
                <div style={{margin:"auto"}}></div>
                <Nav.Link className='my-under px-0 mx-2' href="#action3" ><FontAwesomeIcon icon="fa-regular fa-note-sticky" /> Notes</Nav.Link>
                <Nav.Link className='my-under px-0 mx-2' href="#action4"><FontAwesomeIcon icon="fa-regular fa-user" /> Friends</Nav.Link>
                <Nav.Link className='my-under px-0 mx-2' href="#action5"><FontAwesomeIcon icon="fa-regular fa-user" /> Photos</Nav.Link>
                <Nav.Link className='my' href="#action6"><FontAwesomeIcon icon="fa-solid fa-gear"  /> <FontAwesomeIcon icon="fa-solid fa-angle-down"/></Nav.Link>

        </Nav>
        </Navbar.Collapse>
        </Navbar>
        
        </>
    );
}

export default Header;
