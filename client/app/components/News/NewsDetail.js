import React, {Component} from 'react';

class NewsDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};


  }

  componentDidMount() {

  }

  render() {
    let bg1 = require('../../../public/assets/img/images/news_detail/news_detail_cover.jpg');
    return (
      <div>
        <section id="slider">
          <div className="owl_slider top_slider_wrap">
            <ul className="owl-carousel top_slider">
              <li className="style-3 top-slider-item" style={{backgroundImage: "url(" + bg1 + ")"}} id="voting-slider">
                <div className="contentwrap">
                  <div className="container">
                    <div className="content">
                      <div className="slideheadingwrap">
                        <h2>We empower Vietnamese deaf youths. </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="column-50-inline">
              <div className="container">
                <iframe className="news-details-vid" height="315" src="https://www.youtube.com/embed/Nsmz4Vmwx0U"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
              </div>
            </div>
            <div className="column-50-inline">
              <div className="container">
                <iframe className="news-details-vid" height="315" src="https://www.youtube.com/embed/qmct_k15YOM"
                        frameborder="0" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="news-section">
          <div className="container">
            <div className="main-title-box text-center">
              <div className="small-title">News & Blog</div>
              <h2 className="big-title">Câu chuyện Hear.Us.Now</h2>
            </div>
            <div className="row">

              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0ms">
                <div className="news-item">
                  <div className="news_box">
                    <div classname="newsimg"><img className="img-responsive"
                                                  src={require('../../../public/assets/img/images/news_detail/news_detail_cover.jpg')} alt=""/></div>
                    <div className="news-content">
                      <div className="news_postdate">
                        <span>Jan 03, 2019</span>
                      </div>
                      <a href="#">
                        <h3>The Future of Digital Marketing</h3>
                      </a>
                      <p>Lorem ipsum dolor sit amet, cons ectet a ur elit. Vestibulum necod ios suspe age a to ndisse
                        cursus mal.</p>
                      <div className="news_authorinfo">
                        <span><i className="fa fa-user"></i>  <a href="">Nguồn: </a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default NewsDetail;
