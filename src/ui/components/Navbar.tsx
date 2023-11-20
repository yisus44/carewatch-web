import React from "react";
import {
  ButtonGroup,
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  NavDropdown,
  Navbar,
  SplitButton,
} from "react-bootstrap"; // Import Navbar from react-bootstrap

export default function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="p-3">
      <Navbar.Brand>
        <Container>
          <img
            width={50}
            height={50}
            src="https://carewatch-en-equipo-files.s3.us-east-2.amazonaws.com/carewatch_logo_2.png"
          ></img>
        </Container>
      </Navbar.Brand>{" "}
      <Navbar.Brand href="/">
        <Container>Carewatch en equipo</Container>
      </Navbar.Brand>
    </Navbar>
  );
}
