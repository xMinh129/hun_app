import React, {Component} from 'react';


class News extends Component {
  constructor(props) {
    super(props);

    this.state = {};


  }

  componentDidMount() {

  }


  render() {
    return (
      <section id="newsandevents">
        <div className="container">
          <div className="section-title">
            <h2 className="dark-bg">Tin Tức</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="latestnews">
              <h3 className="black-text">Mới Nhất</h3>
              <div className="newsitem">
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-6">
                    <img src={require("../../../public/assets/img/images/news/midautumn.jpg")} alt=""/>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-7 col-xs-6">
                    <div className="news-text-wrap">
                      <div className="news-title">Workshop Lồng Đèn Trung Thu
                      </div>
                      <div className="news-date">07 Tháng 9 2019
                      </div>
                      <div className="news-text">
                        <p>Chung tay thắp sáng ước mơ của các bạn khiếm thính qua những chiếc lồng đèn lung linh.</p>
                        <p><a href="https://www.facebook.com/hear.us.now.project/photos/a.876399822406431/2495562810490116/?type=3&theater" target="_blank" className="dark light-text">Chi
                          Tiết</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="newsitem">
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-6">
                    <img src={require("../../../public/assets/img/images/news/sign_lang_class.jpg")} alt=""/>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-7 col-xs-6">
                    <div className="news-text-wrap">
                      <div className="news-title">Buổi Tốt Nghiệp Khoá Học Ngôn Ngữ Ký Hiệu Hè/2019
                      </div>
                      <div className="news-date">22 Tháng 8 2019
                      </div>
                      <div className="news-text">
                        <p>Hear.Us.Now luôn sẵn sàng giúp đỡ các bạn trong hành trình tìm hiểu cuộc sống của người điếc/
                          khiếm thính.</p>
                        <p><a href="https://www.facebook.com/pg/hear.us.now.project/photos/?tab=album&album_id=2503417393037991&__xts__%5B0%5D=68.ARCfikfkX2ujuPkiQ4r91ed7oOCKJZKf-prdePDy1V2QI3nffL_esNi1ab88B0MSWP4sMyrai27aTpjb3spsSMDlrb5dJgbnXhVCcUsYTeBpVmRUvGkOP6upZ1KNKVkLfJLl-yYnMPFaZMNbJMbE-lmY5sVy9iacVXDFY_qO_mCYiD_s7ZCHQNdekfvhx_yiUXwrZHP6cjFtZIeT0JrOofiXbY06FZY92g8OfWux5oQk38AtiXPTTYmbFqPAJktcSFo4jgV4gI8RAUccNWYW0PHH2JPmfRf2H86zm0FQ0ZKm-aMRj9rlkru_EnNSJTV00P3C82SyjB1lNRrQt6_R3Eigoz5C6JljkO5HikUpCe1qF9ndY7SJViLVxPqMycJDKOVhs6uwK4APKCaUr8VMWw8VGJxOcb5jqg3NKXGRRiZcYg628L8dbHlfxQLBdN5fcPgpF9tGIiLo2uEH1qdI&__tn__=-UC-R" target="_blank" className="dark light-text">Chi
                          Tiết</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="events-wrap">
                <h3 className="black-text">Sự Kiện Sắp Tới</h3>
                <div className="event-item">
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 event-date">10<br/><span
                    className="month">SEP</span></div>
                  <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 event-info">
                    <div className="event-title">Rước Đèn Trung Thu Cùng Hear.Us.Now</div>
                    <div className="event-text">
                      <p>Hãy cùng Hear.Us.Now đón đêm rằm trung thu tại Trường Chuyên Biệt Khiếm Thính Anh Minh.</p>
                    </div>
                    <p><a href="#" className="dark light-text" data-toggle="modal" data-target=".event_1">Chi Tiết</a>
                    </p>
                  </div>
                </div>
                <div className="event-item">
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 event-date">17<br/><span
                    className="month">SEP</span></div>
                  <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 event-info">
                    <div className="event-title">Lớp Học Nghề Cùng Life Project For Youths</div>
                    <div className="event-text">
                      <p>Hear.Us.Now phối hợp cùng Life Project For Youth trao 17 suất học nghề cho miễn phí trong
                        vòng
                        một năm cho các bạn khiếm thính.</p>
                    </div>
                    <p><a href="#" className="dark light-text" data-toggle="modal" data-target=".event_1">Chi tiết</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
