import React, { Component } from 'react';
import DonationForm from "../Form/DonationForm";

class DonationSection extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };


  }

  componentDidMount() {

  }

  render() {
    let bg1 = require('../../../public/assets/img/images/donation/donation_cover.jpg');
    return (
      <div>
        <section id="slider">
          <div className="owl_slider top_slider_wrap">
            <ul className="owl-carousel top_slider">
              <li className="style-3 top-slider-item" style={{backgroundImage: "url("+bg1+")"}} id="voting-slider">
                <li className="style-1 slider-3 top-slider-item"
                    style={{backgroundImage: "url("+bg1+")"}}>
                  <div className="contentwrap">
                    <div className="container">
                      <div className="content">
                        <div className="donation-form-section">
                          <DonationForm/>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </li>
            </ul>
          </div>
        </section>

        <section id="donation-allocation">
          <div className="container">
            <div className="section-title">
              <h2 className="dark-bg">HUN sẽ sử dụng số tiền đóng góp như thế nào?</h2>
            </div>
            <div className="row">
              <div className="column-white column-30-width">
                <p className="solution-title">Xây Dựng Chương Trình Giáo Dục</p>
                <p className="solution-description">Tiền tài trợ sẽ được sử dụng để mở rộng các lớp học Tiếng Anh, cũng như trao học bổng cho các em khiếm thính có năng lực.</p>
              </div>
              <div className="column-white column-30-width">
                <p className="solution-title">Xây Dựng Các Lớp Dạy Nghề Chuyên Nghiệp </p>
                <p className="solution-description">Tiếp tục phát triển các lớp nghề với chi phí tốt nhất giúp các bạn khiếm thính trau dồi tay nghề và tìm được công việc ổn định. </p>
              </div>
              <div className="column-white column-30-width">
                <p className="solution-title">Tổ Chức Chương Trình Cộng Đồng Người Khiếm Thính</p>
                <p className="solution-description">Tiếp tục các chương trình hiệu quả nhất nhằm phục vụ cộng đồng người khiếm thính như các dịp lễ trung thu, noel. </p>
                <p className="solution-description"></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default DonationSection;
