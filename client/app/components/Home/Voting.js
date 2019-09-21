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
          <img
            src={require('../../../public/assets/img/images/events/voting_2.jpg')}/>
        </div>
      </section>
    );
  }
}

export default Voting;
