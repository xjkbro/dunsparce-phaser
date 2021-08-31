import React, { useState } from "react";
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from "reactstrap";

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Container>
            <Navbar
                className="nunito-font text-white"
                color=""
                light
                expand="lg"
            >
                <NavbarBrand href="/" className="pixel-font text-white">
                    <img src="logo.png" alt="" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="text-white" href="#about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" href="#howto">
                                How To Play
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" href="#controls">
                                Controls
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" href="#thoughts">
                                Thoughts
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" href="#team">
                                The Team
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="text-white"
                                href="https://github.com/xjkbro/dunsparce-phaser"
                            >
                                GitHub
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    );
};
export default NavBar;
