import React, { Component } from 'react';

class Sponsor extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };


  }

  componentDidMount() {

  }




  render() {
    return (
      <section id="sponsors">
        <div className="container">
          <div className="section-title">
            <h2 className="dark-bg">Nhà Đồng Hành</h2>
          </div>
          <div className="section-body">
            <div className="bx_slider sponsor_slider_wrap">
              <ul className="sponsor_slider">
                <li><img src={require("../../../public/assets/img/images/sponsors/1.jpg")} alt=""/></li>
                <li><img src={require("../../../public/assets/img/images/sponsors/2.jpg")} alt=""/></li>
                <li><img src={require("../../../public/assets/img/images/sponsors/3.jpg")} alt=""/></li>
                <li><img src={require("../../../public/assets/img/images/sponsors/4.jpg")} alt=""/></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Sponsor;
