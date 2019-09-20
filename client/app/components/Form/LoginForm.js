import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.clickTab = this.clickTab.bind(this);

    this.state = {
      signup: false,
      login: true,
      modalIsOpen: this.props.modalIsOpen ? this.props.modalIsOpen : false
    };

  }

  clickTab(word){
    let signup,login;
    if(word == "signup"){signup = true;login = false;}
    else{login = true; signup = false;}
    return this.setState({login:login, signup:signup})
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps) {
    if (this.props.modalIsOpen !== prevProps.modalIsOpen) {
      this.setState({
        modalIsOpen: this.props.modalIsOpen
      })
    }
  }

  render() {
    let self = this;
    return (
      <Modal show={self.state.modalIsOpen} onHide={self.props.closeModal} animation={false}>
        <div className="login-box">
          <div className="lb-header">
            <div onClick={self.clickTab.bind(null,"login")} className={self.state.login ? " column-50-inline active":"column-50-inline"}>
              <a href="#"  ref="Login" id="login-box-link" >Đăng Nhập</a>
            </div>
            <div onClick={self.clickTab.bind(null,"signup")} className={self.state.signup ? " column-50-inline active":"column-50-inline"}>
             <a href="#" id="signup-box-link" >Đăng Ký</a>
            </div>
          </div>

          <div className="social-login">
            <a href="#">
              <i className="fa fa-facebook fa-lg"></i>
              Đăng nhập qua facebook
            </a>
            <a href="#">
              <i className="fa fa-google-plus fa-lg"></i>
              Đăng nhập qua Google
            </a>
          </div>

          {this.state.login ? (
            <form className="email-login">
              <div className="u-form-group">
                <input type="email" placeholder="Email"/>
              </div>
              <div className="u-form-group">
                <input type="password" placeholder="Mật khẩu"/>
              </div>
              <div className="u-form-group">
                <button>Đăng nhập</button>
              </div>
              <div className="u-form-group">
                <a href="#" className="forgot-password">Quên mật khẩu?</a>
              </div>
            </form>
          ) : (
            <form className="email-signup">
              <div className="u-form-group">
                <input type="email" placeholder="Email"/>
              </div>
              <div className="u-form-group">
                <input type="password" placeholder="Mật khẩu"/>
              </div>
              <div className="u-form-group">
                <input type="password" placeholder="Xác nhận mật khẩu"/>
              </div>
              <div className="u-form-group">
                <button>Đăng ký</button>
              </div>
            </form>
          )}
        </div>
      </Modal>

    );
  }
}

export default LoginForm;
