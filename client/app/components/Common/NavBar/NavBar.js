import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import VolunteerForm from "../../Form/VolunteerForm";
import {
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
  DropdownItem } from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      modalIsOpen: false,
      isOpen: false
    };
  }


  componentDidMount() {

  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  toggle() {
    console.log(this.state.isOpen);
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <section id="header">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src={require('../../../../public/assets/img/images/hun_main_logo.jpg')} alt="Logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#about">Câu Chuyện</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#projects">Các Dự Án</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#meettheteam">Team HUN</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#newsandevents">Tin tức</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#contacts">Tin tức</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="highlighted" onClick={this.openModal}><span className="volunteer-tab">Volunteer</span></NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>

        {/*<VolunteerForm modalIsOpen={this.state.modalIsOpen}/>*/}


      </section>
    );
  }
}

export default NavBar;
