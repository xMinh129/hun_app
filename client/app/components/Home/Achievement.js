import React, { Component } from 'react';

class Achievement extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };


  }

  componentDidMount() {

  }




  render() {
    let line = require('../../../public/assets/img/images/line_yellow.jpg');
    return (
      <section id="achievements" className="dark bg">
        <div className="container">
          <div className="section-title" style={{backgroundImage: "url("+line+")"}}>
            <h2 className="color-bg">Chặng đường của HUN</h2>
          </div>
          <div className="at-grid" data-column="4">
            <div className="at-column">
              <div className="at-user">
                  <i className="fa fa-user-circle-o fa-5x achievement-icon"></i>
                <div className="at-user__title achievement">200 người khiếm thính</div>
              </div>
            </div>

            <div className="at-column">
              <div className="at-user">
                <i className="fa fa-youtube-play fa-5x achievement-icon"></i>
                <div className="at-user__title achievement">81 video Tiếng Anh</div>
              </div>
            </div>

            <div className="at-column">
              <div className="at-user">
                <i className="fa fa-wrench fa-5x achievement-icon"></i>
                <div className="at-user__title achievement">15 workshop kỹ năng</div>
              </div>
            </div>

            <div className="at-column">
              <div className="at-user">
                <i className="fa fa-american-sign-language-interpreting  fa-5x achievement-icon"></i>
                <div className="at-user__title achievement">24 lớp sign language</div>
              </div>
            </div>
          </div>
          <div className="at-grid" data-column="2">
            <div className="half-column column-left">
              <iframe height="350" src="https://www.youtube.com/embed/477JWaVE5fE" frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
            </div>
            <div className="half-column column-right column-white">
              <div>
                <p className="funding-public-title">Với sự tin tưởng của cộng đồng</p>
                <p className="funding-public-text">Hear.Us.Now đã đem lại giá trị đến hơn <span>200</span> người khiếm thính từ độ tuổi <span>12-25</span> trên khắp TPHCM.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Achievement;
