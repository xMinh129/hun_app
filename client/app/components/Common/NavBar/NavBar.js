import React, { Component } from 'react';
import VolunteerForm from "../../Form/VolunteerForm";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.toggle = this.toggle.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      modalIsOpen: false,
      isOpen: false
    };
  }


  componentDidMount() {

  }

  openModal() {
    this.setState({
      modalIsOpen: true,

    });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
                <NavLink href="/#newsandevents">Tin Tức</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#contacts">Liên Hệ </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="highlighted" onClick={this.openModal}><span className="volunteer-tab">Volunteer</span></NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>

        <VolunteerForm modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal}/>


      </section>
    );
  }
}

export default NavBar;
