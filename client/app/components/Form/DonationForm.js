import React, { Component } from 'react';
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

  clickTab(word){
    let monthly_donation,one_time_donation;
    if(word == "monthly_donation"){monthly_donation = true;one_time_donation = false;}
    else{one_time_donation = true; monthly_donation = false;}
    return this.setState({one_time_donation:one_time_donation, monthly_donation:monthly_donation})
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
        <div className="one_time_donation-box">
          <div className="lb-header">
            <div onClick={self.clickTab.bind(null,"one_time_donation")} className={self.state.one_time_donation ? " column-50-inline active":"column-50-inline"}>
              <a href="#"  ref="one_time_donation" id="one_time_donation-box-link" >Đóng góp một lần</a>
            </div>
            <div onClick={self.clickTab.bind(null,"monthly_donation")} className={self.state.monthly_donation ? " column-50-inline active":"column-50-inline"}>
              <a href="#" id="monthly_donation-box-link" >Đóng góp hàng tháng</a>
            </div>
          </div>
        </div>
      </Modal>

    );
  }
}

export default DonationForm;
