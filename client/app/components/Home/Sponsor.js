import React, {Component} from 'react';

class Sponsor extends Component {
  constructor(props) {
    super(props);

    this.state = {};


  }

  componentDidMount() {

  }


  render() {
    return (
      <section id="sponsors">
        <div className="container sponsor-title">
          <div className="section-title">
            <h2 className="dark-bg">Nhà Đồng Hành Cùng Chúng Tôi</h2>
          </div>
        </div>

        <div className="columns-resp">

          <div className="column-resp">
            <div className="at-user__avatar sponsor_img"><img
              src={require('../../../public/assets/img/images/sponsors/aisec.jpg')}/>
            </div>
          </div>

          <div className="column-resp">
            <div className="at-user__avatar sponsor_img"><img
              src={require('../../../public/assets/img/images/sponsors/hb.jpg')}/>
            </div>
          </div>

          <div className="column-resp">
            <div className="at-user__avatar sponsor_img"><img
              src={require('../../../public/assets/img/images/sponsors/stella.jpg')}/>
            </div>
          </div>

          <div className="column-resp">
            <div className="at-user__avatar sponsor_img"><img
              src={require('../../../public/assets/img/images/sponsors/max.jpg')}/>
            </div>
          </div>

          <div className="column-resp">
            <div className="at-user__avatar sponsor_img"><img
              src={require('../../../public/assets/img/images/sponsors/exo.jpg')}/>
            </div>
          </div>

          <div className="column-resp">
            <div className="at-user__avatar sponsor_img"><img
              src={require('../../../public/assets/img/images/sponsors/gap.jpg')}/>
            </div>
          </div>

          <div className="column-resp">
            <div className="at-user__avatar sponsor_img"><img
              src={require('../../../public/assets/img/images/sponsors/diari.jpg')}/>
            </div>
          </div>

          <div className="column-resp">
            <div className="at-user__avatar sponsor_img"><img
              src={require('../../../public/assets/img/images/sponsors/rmit.jpg')}/>
            </div>
          </div>


          <div className="column-resp">
            <div className="at-user__avatar sponsor_img"><img
              src={require('../../../public/assets/img/images/sponsors/lin.jpg')}/>
            </div>
          </div>

          <div className="column-resp">
            <div className="at-user__avatar sponsor_img"><img
              src={require('../../../public/assets/img/images/sponsors/vietseeds.jpg')}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Sponsor;
