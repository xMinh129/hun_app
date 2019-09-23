import React, { Component } from 'react';

class Voting extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };


  }

  componentDidMount() {

  }

  render() {
    return (
      <section id="voting">
        <div className="column-50-inline competition_1">
          <img
            src={require('../../../public/assets/img/images/events/tnst_2.jpg')}/>
          <button className="btn btn-danger btn-lg rds btn_donate btn_join btn_voting_1" type="button" id="btn_join">Bình chọn cho Hear.Us.Now</button>
        </div>
        <div className="column-50-inline competition_2">
          <div className="stack-half">
            <img
              src={require('../../../public/assets/img/images/events/voting_2.jpg')}/>
          </div>
          <div className="stack-half">
            <iframe className="voting_vid"
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNarrowTheGapProgram%2Fvideos%2F2682334325327570%2F&show_text=0&width=560"
              scrolling="no" frameBorder="0"
              allowTransparency="true" allowFullScreen="true"></iframe>
          </div>
        </div>
      </section>
    );
  }
}

export default Voting;
