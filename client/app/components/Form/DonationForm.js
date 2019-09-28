import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";

class DonationForm extends Component {
  constructor(props) {
    super(props);
    this.clickTab = this.clickTab.bind(this);

    this.state = {
      one_time_donation: true,
      monthly_donation: false,
      modalIsOpen: this.props.modalIsOpen ? this.props.modalIsOpen : false
    };

  }

  clickTab(word) {
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

      <div className="one_time_donation-box">
        <div className="lb-header donation-header">
          <div onClick={self.clickTab.bind(null, "one_time_donation")}
               className={self.state.one_time_donation ? " column-50-inline donation-option active" : "column-50-inline donation-option donation-inactive"}>
            <a href="#" className="donation-option" ref="one_time_donation" id="one_time_donation-box-link">Đóng góp một
              lần</a>
          </div>
          <div onClick={self.clickTab.bind(null, "monthly_donation")}
               className={self.state.monthly_donation ? " column-50-inline donation-option active" : "column-50-inline donation-option donation-inactive"}>
            <a href="#" className="donation-option" id="monthly_donation-box-link">Đóng góp hàng tháng</a>
          </div>
        </div>
        <div>
          <span className="adf-form-header text-center"><span>Chọn số tiến bạn muốn ủng hộ </span></span>
        </div>
        <div className="donate-form-body">
          <div>
            <div className="amount-wrapper">
              <div className="amount-buttons-wrapper"><a className="button button--grey-20 amount-button">VND 100,000<span
                className="amount-button-monthly"></span></a><a className="button button--grey-20 amount-button">VND
                200,000<span
                  className="amount-button-monthly"></span></a><a className="button button--grey-20 amount-button">
                VND 500,000<span
                  className="amount-button-monthly"></span></a><a className="button button--grey-20 amount-button">VND 1,000,000<span
                className="amount-button-monthly"></span></a>
              </div>
            </div>
          </div>
          <button className="donate-section-button">Đóng góp một lần</button>
        </div>
      </div>


    );
  }
}

export default DonationForm;
