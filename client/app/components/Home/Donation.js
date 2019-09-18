import React, { Component } from 'react';
import Select from "react-select";

class Donation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: {
        name: '',
        email: '',
        amount: '',
        msg: '',
        interest: []
      }
    };


  }

  componentDidMount() {

  }




  render() {
    return (
      <section id="sponsors">
        <div className="container sponsor-title">
          <div className="section-title">
            <h2 className="dark-bg">Đóng Góp</h2>
          </div>
        </div>

        <div className="columns-resp donation-section">
          <div className="column-resp donation-box margin-right-20 once-donation">
            <div className="donation-title">
              <h2>Đóng Góp Một Lần</h2>
            </div>
            <p>
              Mỗi một đồng đóng góp của bạn sẽ giúp chấp cánh ước mơ đến trường cho các em khiếm thính. Xin chân thành cảm ơn tấm lòng nhân ái của bạn.
            </p>
            <div className="donation-form">
              <form className="cmxform" id="volunteer-form">
                <input
                  id="fname"
                  placeholder="Tên Của Bạn"
                  type="text"
                  name="name"
                  value={this.state.contact.name}
                  required/>
                <input
                  id="femail"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={this.state.contact.email}
                  required/>
                <input
                  id="fname"
                  placeholder="Số tiền (VND)"
                  type="text"
                  name="name"
                  value={this.state.contact.amount}
                  required/>

                <button className="btn btn-danger btn-lg rds btn_donate" type="button" id="btn_donateonce"
                        data-val="once">Đóng góp một lần
                </button>
              </form>
            </div>
          </div>
          <div className="column-resp donation-box monthly-donation">
              <div className="donation-title">
                <h2>Đóng Góp Hàng Tháng</h2>
              </div>
              <p>
               Sự hỗ trợ hàng tháng của bạn sẽ giúp các em học sinh khiếm thính vững tin đến trường. Cảm ơn bạn đã chung tay cùng chúng tôi thu hẹp khoảng cách giáo dục.
              </p>
            <div className="donation-form">
              <form className="cmxform" id="volunteer-form">
                <input
                  id="fname"
                  placeholder="Tên Của Bạn"
                  type="text"
                  name="name"
                  value={this.state.contact.name}
                  required/>
                <input
                  id="femail"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={this.state.contact.email}
                  required/>
                <input
                  id="fname"
                  placeholder="Số tiền (VND)"
                  type="text"
                  name="name"
                  value={this.state.contact.amount}
                  required/>

                <button className="btn btn-danger btn-lg rds btn_donate" type="button" id="btn_donateonce"
                        data-val="once">Đóng góp hàng tháng
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Donation;
