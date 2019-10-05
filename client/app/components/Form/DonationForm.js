import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Auth from "../../modules/Auth.js";

class DonationForm extends Component {
  constructor(props) {
    super(props);
    this.clickDonationTab = this.clickDonationTab.bind(this);
    this.clickSetAmount = this.clickSetAmount.bind(this);
    this.setDonationStage = this.setDonationStage.bind(this);
    this.clickAuthenticationTab = this.clickAuthenticationTab.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);

    this.state = {
      one_time_donation: true,
      monthly_donation: false,
      modalIsOpen: this.props.modalIsOpen ? this.props.modalIsOpen : false,
      login: true,
      signup: false,
      donation_amount: false,
      user: {
        email: ''
      },
      donation_stage: 'set_amount'
    };
  }

  setDonationStage(word){
    if (word){
      this.setState({
        donation_stage: word
      })
    }
  }

  clickDonationTab(word) {
    let monthly_donation, one_time_donation;
    if (word == "monthly_donation") {
      monthly_donation = true;
      one_time_donation = false;
    } else {
      one_time_donation = true;
      monthly_donation = false;
    }
    return this.setState({one_time_donation: one_time_donation, monthly_donation: monthly_donation})
  }

  clickSetAmount(amount){
    this.setState({
      donation_amount: parseFloat(amount)
    })
  }

  clickAuthenticationTab(word){
    let signup, login;
    if (word == "signup") {
      signup = true;
      login = false;
    } else {
      login = true;
      signup = false;
    }
    return this.setState({login: login, signup: signup})
  }

  responseFacebook(res) {
    console.log(res);
  }

  responseGoogle(res) {
    console.log(res);
  }


  showPaymentDetailedForm(){

  }

  onChange(){
    event.preventDefault();
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({
      user: user
    });
  }

  handleLoginSubmit(event){
    event.preventDefault();

    let postData = {
      'email': this.state.user.email,
      'password': this.state.user.password
    };

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', apiRoutes.login);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          submitSuccess: true,
          modalIsOpen: false
        });
        Auth.authenticateUser(xhr.response.data.user, xhr.response.data.token.accessToken);
        browserHistory.push('/home');
      } else {
        this.setState({
          error: xhr.response.errors[0].messages[0]
        });
      }
      this.setState({
        user: {
          email: '',
          password: ''
        }
      })
    });
    xhr.send(JSON.stringify(postData));
  }

  handleSignUpSubmit(event) {
    event.preventDefault();

    if (this.state.user.password === this.state.user.password_repeat) {
      let postData = {
        'email': this.state.user.email,
        'password': this.state.user.password,
        'role': 'user'
      };

      // create an AJAX request
      const xhr = new XMLHttpRequest();
      xhr.open('post', apiRoutes.signup);
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          this.setState({
            submitSuccess: true,
            signup: false,
            login: true,
            signupSuccess: true
          });
        } else {
          this.setState({
            error: xhr.response.errors[0].messages[0]
          });
        }
        this.setState({
          user: {
            email: '',
            password: '',
            name: '',
            password_repeat: ''
          }
        })
      });
      xhr.send(JSON.stringify(postData));
    } else {
      this.setState({
        error: 'Xác nhận mật khẩu không khớp. Xin vui lòng điền lại mật khẩu.'
      });
    }
  }

  handlePaySubmit(){}

  componentDidMount() {}

  componentDidUpdate(prevProps) {
    if (this.props.modalIsOpen !== prevProps.modalIsOpen) {
      this.setState({
        modalIsOpen: this.props.modalIsOpen
      })
    }
  }

  render() {
    let self = this;
    let bg1 = require('../../../public/assets/img/images/donation/donation_cover.jpg');
    if (this.state.donation_stage === 'set_amount'){
      return (
        <section id="donation">
          <div className="owl_slider top_slider_wrap">
            <ul className="owl-carousel top_slider">
              <li className="style-3 top-slider-item" style={{backgroundImage: "url("+bg1+")"}} id="voting-slider">
                  <div className="contentwrap">
                    <div className="container">
                      <div className="content">
                        <div className="donation-form-section">
                        <div className="one_time_donation-box">
                          <div className="lb-header donation-header">
                            <div onClick={self.clickDonationTab.bind(null, "one_time_donation")}
                                 className={self.state.one_time_donation ? " column-50-inline donation-option active" : "column-50-inline donation-option donation-inactive"}>
                              <a className="donation-option" ref="one_time_donation" id="one_time_donation-box-link">Đóng góp một
                                lần</a>
                            </div>
                            <div onClick={self.clickDonationTab.bind(null, "monthly_donation")}
                                 className={self.state.monthly_donation ? " column-50-inline donation-option active" : "column-50-inline donation-option donation-inactive"}>
                              <a className="donation-option" id="monthly_donation-box-link">Đóng góp hàng tháng</a>
                            </div>
                          </div>
                          <div>
                            <span className="adf-form-header text-center"><span>Chọn số tiến bạn muốn ủng hộ </span></span>
                          </div>
                          <div className="donate-form-body">
                            <div>
                              <div className="amount-wrapper">
                                <div className="amount-buttons-wrapper"><a onClick={self.clickSetAmount.bind(null, "100000")}
                                 className={self.state.donation_amount === 100000 ? "button button--grey-20 amount-button donation-choice-active" : "button button--grey-20 amount-button"}>VND 100,000<span
                                  className="amount-button-monthly"></span></a><a onClick={self.clickSetAmount.bind(null, "200000")}
                                   className={self.state.donation_amount === 200000 ? "button button--grey-20 amount-button donation-choice-active" : "button button--grey-20 amount-button"}>VND
                                  200,000<span
                                    className="amount-button-monthly"></span></a><a onClick={self.clickSetAmount.bind(null, "500000")}
                                     className={self.state.donation_amount === 500000 ? "button button--grey-20 amount-button donation-choice-active" : "button button--grey-20 amount-button"}>
                                  VND 500,000<span
                                    className="amount-button-monthly"></span></a><a onClick={self.clickSetAmount.bind(null, "1000000")}
                                     className={self.state.donation_amount === 1000000 ? "button button--grey-20 amount-button donation-choice-active" : "button button--grey-20 amount-button"}>VND 1,000,000<span
                                  className="amount-button-monthly"></span></a>
                                </div>
                              </div>
                            </div>
                            <button onClick={self.setDonationStage.bind(null, "get_payment")} className="donate-section-button">Đóng góp một lần</button>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
            </ul>
          </div>
        </section>
      );
    }
    else if (this.state.donation_stage === "get_payment" && !Auth.isUserAuthenticated()){
      return(
        <section id="slider">
          <div className="owl_slider top_slider_wrap">
            <ul className="owl-carousel top_slider">
              <li className="style-3 top-slider-item" style={{backgroundImage: "url("+bg1+")"}} id="voting-slider">
                  <div className="contentwrap">
                    <div className="container">
                      <div className="content">
                      <div className="donation-form-section">
                      <div className="one_time_donation-box">
                        <div className="lb-header donation-header">
                          <div onClick={self.clickAuthenticationTab.bind(null, "login")}
                               className={self.state.login ? "column-50-inline donation-option active" : "column-50-inline donation-option donation-inactive"}>
                            <a id="login-box-link" className="donation-authentication-tab">Đăng Nhập</a>
                          </div>
                          <div onClick={self.clickAuthenticationTab.bind(null, "signup")}
                               className={self.state.signup ? "column-50-inline donation-option active" : "column-50-inline donation-option donation-inactive"}>
                            <a id="signup-box-link" className="donation-authentication-tab">Đăng Ký</a>
                          </div>
                        </div>

                        <div className="donate-form-body donation-form-body-authentication">

                        <div className="social-login">
                          <FacebookLogin
                            appId="464070144196079"
                            fields="name,email,picture"
                            callback={this.responseFacebook}
                            textButton="Đăng nhập qua facebook"
                            cssClass="social-login-fb donation-form-fb"/>
                          <GoogleLogin
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            buttonText="Đăng nhập qua google"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            icon={true}
                            style="social-login-gg"
                          />
                        </div>

                        {this.state.login ? (
                          <form className="email-login">
                            {
                              this.state.signupSuccess ? (<div className="success-msg">
                                Bạn đã tạo tài khoản thành công. Bạn có thể đăng nhập.
                              </div>) : (<div></div>)
                            }
                            <div className="u-form-group">
                              <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={this.state.user.email}
                                onChange={this.onChange}
                                placeholder="Email"
                                required
                              />
                            </div>
                            <div className="u-form-group">
                              <input
                                     type="password"
                                     name="password"
                                     value={this.state.user.password}
                                     onChange={this.onChange}
                                     placeholder="Mật khẩu"
                                     required
                                     />
                            </div>

                            <div className="u-form-group">
                              <button onClick={this.handleLoginSubmit}>Đăng nhập</button>
                            </div>
                            <div className="u-form-group forgot-password-link">
                              <a className="forgot-password">Quên mật khẩu?</a>
                            </div>
                            <div className="u-form-group skip-login-section" onClick={self.setDonationStage.bind(null, "get_payment_details")}>
                              <a className="skip-login forgot-password">Bỏ qua</a>
                            </div>
                            {
                              this.state.error ? (
                                <div className="error-msg">
                                  this.state.error
                                </div>) : (
                                <div>
                                </div>)
                            }
                          </form>


                        ) : (
                          <form className="email-signup">
                            <div className="u-form-group donation-form-field">
                              <input
                                     placeholder="Username"
                                     type="text"
                                     name="name"
                                     value={this.state.user.name}
                                     onChange={this.onChange}
                                     required/>
                            </div>
                            <div className="u-form-group donation-form-field">
                              <input
                                     placeholder="Email"
                                     type="email"
                                     name="email"
                                     value={this.state.user.email}
                                     onChange={this.onChange}
                                     required/>
                            </div>
                            <div className="u-form-group donation-form-field">
                              <input
                                     placeholder="Mật Khẩu"
                                     type="password"
                                     name="password"
                                     value={this.state.user.password}
                                     onChange={this.onChange}
                                     required/>
                            </div>
                            <div className="u-form-group donation-form-field">
                              <input
                                     placeholder="Xác Nhận Mật Khẩu"
                                     type="password"
                                     name="password_repeat"
                                     value={this.state.user.password_repeat}
                                     onChange={this.onChange}
                                     required/>
                            </div>
                            <div className="u-form-group">
                              <button onClick={this.handleSignUpSubmit}>Đăng ký</button>
                            </div>
                            <div className="u-form-group skip-login-section" onClick={self.setDonationStage.bind(null, "get_payment_details")}>
                              <a className="skip-login forgot-password">Bỏ qua</a>
                            </div>
                            {
                              this.state.error ? (
                                <div className="error-msg">
                                  {this.state.error}
                                </div>) : (
                                <div>
                                </div>)
                            }
                          </form>
                        )}
                      </div>
                      </div>
                      </div>
                      </div>
                    </div>
                  </div>
              </li>
            </ul>
          </div>
        </section>
    )
    }
    else {
      return (
        <section id="slider">
            <div className="owl_slider top_slider_wrap">
              <ul className="owl-carousel top_slider">
                <li className="style-3 top-slider-item" style={{backgroundImage: "url("+bg1+")"}} id="voting-slider">
                    <div className="contentwrap">
                      <div className="container">
                        <div className="content">
                        <div className="donation-form-section">
                        <form className="email-login" className="donation-form-pay">
                          <h3>Thông tin tài khoản</h3>
                          {
                            this.state.signupSuccess ? (<div className="success-msg">
                              Bạn đã tạo tài khoản thành công. Bạn có thể đăng nhập.
                            </div>) : (<div></div>)
                          }
                          <div className="u-form-group">
                            <input
                              placeholder="Số tài khoản"
                              type="text"
                              name="account_no"
                              value={this.state.user.account_no}
                              onChange={this.onChange}
                              required
                            />
                          </div>
                          <div className="u-form-group">
                            <input
                              placeholder="Tháng hết hạn"
                              type="text"
                              name="expiry_month"
                              value={this.state.user.expiry_month}
                              onChange={this.onChange}
                              required
                            />
                          </div>

                          <div className="u-form-group">
                            <input
                              placeholder="Năm hết hạn"
                              type="text"
                              name="expiry_year"
                              value={this.state.user.expiry_year}
                              onChange={this.onChange}
                              required
                            />
                          </div>

                          <div className="u-form-group">
                            <input
                              placeholder="CCV"
                              type="password"
                              name="ccv"
                              value={this.state.user.ccv}
                              onChange={this.onChange}
                              required
                            />
                          </div>

                          <div className="u-form-group">
                            <button onClick={this.handlePaySubmit}>Đóng góp</button>
                          </div>
                          {
                            this.state.error ? (
                              <div className="error-msg">
                                this.state.error
                              </div>) : (
                              <div>
                              </div>)
                          }
                        </form>
                        </div>
                        </div>
                      </div>
                    </div>
                </li>
              </ul>
            </div>
          </section>
      )
    }
  }
}

export default DonationForm;
