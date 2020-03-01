import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
export default class CustomNavbar extends Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">bill me l8r</Navbar.Brand>
				<Nav className=" ml-auto"></Nav>
				<Nav className="ml-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#about">Settings</Nav.Link>
					<Nav.Link href="#episodeList">Profile</Nav.Link>
				</Nav>
			</Navbar>
		);
	}
}
