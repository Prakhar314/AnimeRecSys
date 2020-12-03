import React from 'react'
import { Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand href="/">AnimeRecSys</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                        <Link className="nav-link" to="/" >
                        Browse
                        </Link>
                        <Link className="nav-link" to="/rec" >
                        Recommendations
                        </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
