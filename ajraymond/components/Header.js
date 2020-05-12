import React from 'react';
import Link from './NavLink';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


const navbar ={
  background: '#fff',
}

const logo = {
  color: 'var(--base2)',
  fontWeight: 'bold',
  fontSize: '24pt',
}

// const link = {
//     margin: '50px',
// }

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" style={navbar}>
            <Navbar.Brand href="/" style={logo}>AJR</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <Link href="/" >Home</Link>
                    <Link href="/tech" >Technology</Link>
                    <Link href="/art" >Photography</Link>
                    <Link href="/about" >About</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}   