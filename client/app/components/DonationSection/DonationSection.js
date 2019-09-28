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
      </div>
    );
  }
}

export default DonationSection;
