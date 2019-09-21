import React, {Component} from 'react';
import VolunteerForm from "../../Form/VolunteerForm";
import LoginForm from "../../Form/LoginForm";
import DonationForm from "../../Form/DonationForm";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.toggle = this.toggle.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      modalVolunteerIsOpen: false,
      modalDonationIsOpen: false,
      modalAuthenticationIsOpen: false,
      isOpen: false
    };
  }

  componentDidMount() {

  }

  openModal(word) {
    if (word == 'volunteer') {
      this.setState({
        modalVolunteerIsOpen: true
      });
    }
    if (word == 'donation') {
      this.setState({
        modalDonationIsOpen: true
      });
    }
    if (word == 'authentication') {
      this.setState({
        modalAuthenticationIsOpen: true
      });
    }
  }

  closeModal(word) {
    if (word == 'volunteer') {
      this.setState({
        modalVolunteerIsOpen: false
      });
    }
    if (word == 'donation') {
      this.setState({
        modalDonationIsOpen: false
      });
    }
    if (word == 'authentication') {
      this.setState({
        modalAuthenticationIsOpen: false
      });
    }
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <section id="header">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src={require('../../../../public/assets/img/images/hun_main_logo.jpg')}
                                     alt="Logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
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
                <NavLink onClick={this.openModal.bind(null, 'authentication')}>Đăng Nhập</NavLink>
              </NavItem>
              <NavItem className="donation-tab">
                <NavLink className="highlighted nav-button donation-button"
                         onClick={this.openModal.bind(null, 'donation')}><span>Đóng Góp</span></NavLink>
              </NavItem>

              <NavItem className="volunteer-tab">
                <NavLink className="highlighted nav-button" onClick={this.openModal.bind(null, 'volunteer')}><span>Tình Nguyện Viên</span></NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>

        <VolunteerForm modalIsOpen={this.state.modalVolunteerIsOpen}
                       closeModal={this.closeModal.bind(null, 'volunteer')}/>
        <LoginForm modalIsOpen={this.state.modalAuthenticationIsOpen}
                   closeModal={this.closeModal.bind(null, 'authentication')}/>
        <DonationForm modalIsOpen={this.state.modalDonationIsOpen}
                      closeModal={this.closeModal.bind(null, 'donation')}/>

      </section>
    );
  }
}

export default NavBar;
