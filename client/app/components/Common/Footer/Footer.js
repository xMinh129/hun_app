import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  componentDidMount() {
  }

  render() {
    return (
      <section id="footer" className="dark">
        <div className="container">
          <p>&#64; 2019 Hear.Us.Now</p>
        </div>
        <a href="#" className="scrollToTop"><i className="fa fa-chevron-up fa-2x" aria-hidden="true"></i></a>
      </section>
    );
  }
}

export default Footer;
