import React, { Component } from 'react';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };


  }

  componentDidMount() {

  }




  render() {
    return (
      <section id="projects">
        <div className="container">
          <div className="section-title">
            <h2 className="dark-bg">Các Dự Án</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <h3>Hoạt Động Của HUN</h3>
              <br/>
              <p>Hear.Us.Now không ngừng xây dựng các chương trình chất lượng, cùng đội ngũ giảng viên tâm huyết để đem
                lại những bài học giá trị, những hoạt động bổ ích nhằm rèn dũa kỹ năng cho các em điếc/khiếm thính, giúp
                các em vững tin bước vào đời.</p>
              <p><a className="dark" href="#" data-toggle="modal" data-target="#volunteerformModal">Đăng Ký Tham Gia</a></p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="owl_slider projects_slider_wrap">
                <ul className="owl-carousel projects_slider">
                  <li>
                    <div className="project_img"><img src={require('../../../public/assets/img/images/projects/project_1.jpg')}/></div>
                    <h5>Bài Học Tiếng Anh</h5>
                    <p>HUN xây dựng các bài học tiếng anh sinh động theo chương trình Sách Giáo Khoa cấp 2 và phát hành
                      miễn phí qua kênh YouTube. Các bài học đều có minh hoạ bằng ngôn ngữ ký hiệu.</p>
                    <a href="#" data-toggle="modal" data-target="#volunteerformModal" className="btn btn-primary">Tham
                      Gia Dự Án</a><a href="https://www.youtube.com/channel/UCBfXaqhRopUGkOP6neqaorA/videos" className="btn btn-secondary" target="_blank">Tìm Hiểu Thêm</a>
                  </li>
                  <li>
                    <div className="project_img"><img src={require('../../../public/assets/img/images/projects/project_2.jpg')}/></div>
                    <h5>Lớp Học Kỹ Năng</h5>
                    <p>Lớp học các kỹ năng như sơ cấp cứu, tin học đồ hoạ giúp các em học sinh khiếm thính có thêm nhiều
                      kỹ năng và khám phá đam mê mới.</p>
                    <a href="#" data-toggle="modal" data-target="#volunteerformModal" className="btn btn-primary">Tham
                      Gia Dự Án</a><a href="https://www.facebook.com/hear.us.now.project/posts/2439325639447167?__xts__%5B0%5D=68.ARCT7VqOyFrSyU_sASMBBtc8LyVrLhOiXCap61yd66DNViWNYjPWC3xdTSMro3Fkr0wrg7DEC351py2KCAu-GFr1OjYW8OEgEOXi_-dCxCSbCt85rQiSCBPYPgoTplfAhV_wDiBkSKV114iPpEGv2BVkmMUJ3ApzAH5SveWRo7v_TCiATrIFcChVspbFvT8QPxxs20XBzovwW_UPJM5FNIdYHkaQr_VYIH-Ra7Syt9n1F8Nx_vaRNnNaO047azwAhQaWbEJE07DI9wCWJ4A7LtjhOVIoRzTP-5k7wOSXWIRpEwouXQ41W0SUMshI8LqUlrIdH3MXAYstEV46Wy36Iq6z4A&__tn__=K-R" className="btn btn-secondary" target="_blank">Tìm Hiểu Thêm</a>
                  </li>
                  <li>
                    <div className="project_img"><img src={require('../../../public/assets/img/images/projects/project_3.jpg')}/></div>
                    <h5>Lớp Học Ngôn Ngữ Ký Hiệu</h5>
                    <p>Các bài học ngôn ngữ ký hiệu để giúp mọi người có thể hiểu thêm về cách giao tiếp với những người
                      điếc hoặc khiếm thính. Sau chương trình học, các học viên có thể trở thành người phiên dịch chính
                      thức. </p>
                    <a href="#" data-toggle="modal">Tham
                      Gia Dự Án</a><a href="https://www.facebook.com/pg/hear.us.now.project/photos/?tab=album&album_id=2503417393037991&__xts__%5B0%5D=68.ARCfikfkX2ujuPkiQ4r91ed7oOCKJZKf-prdePDy1V2QI3nffL_esNi1ab88B0MSWP4sMyrai27aTpjb3spsSMDlrb5dJgbnXhVCcUsYTeBpVmRUvGkOP6upZ1KNKVkLfJLl-yYnMPFaZMNbJMbE-lmY5sVy9iacVXDFY_qO_mCYiD_s7ZCHQNdekfvhx_yiUXwrZHP6cjFtZIeT0JrOofiXbY06FZY92g8OfWux5oQk38AtiXPTTYmbFqPAJktcSFo4jgV4gI8RAUccNWYW0PHH2JPmfRf2H86zm0FQ0ZKm-aMRj9rlkru_EnNSJTV00P3C82SyjB1lNRrQt6_R3Eigoz5C6JljkO5HikUpCe1qF9ndY7SJViLVxPqMycJDKOVhs6uwK4APKCaUr8VMWw8VGJxOcb5jqg3NKXGRRiZcYg628L8dbHlfxQLBdN5fcPgpF9tGIiLo2uEH1qdI&__tn__=-UC-R" className="btn btn-secondary" target="_blank">Tìm Hiểu Thêm</a>
                  </li>
                  <li>
                    <div className="project_img"><img src={require('../../../public/assets/img/images/projects/project_4.jpg')}/></div>
                    <h5>Life Projects For Youth </h5>
                    <p>HUN phối hợp cùng Life Projects For Youth xây dựng các khoá học nghề, tạo cơ hội việc làm cho
                      người điếc và khiếm thính. </p>
                    <a href="#" data-toggle="modal" data-target="#volunteerformModal" className="btn btn-primary">Tham
                      Gia Dự Án</a><a href="#" className="btn btn-secondary">Tìm Hiểu Thêm</a>
                  </li>
                  <li>
                    <div className="project_img"><img src={require('../../../public/assets/img/images/projects/project_5.jpg')}/></div>
                    <h5>Bread And Smiles</h5>
                    <p>Các suất học nghề làm bánh cùng giáo viên người Pháp hoàn toàn miễn phí trong 1 năm dành riêng
                      cho các bạn khiếm thính (từ 17 - 25 tuổi) trên địa bàn thành phố Hồ Chí Minh.</p>
                    <a href="#" data-toggle="modal" data-target="#volunteerformModal" className="btn btn-primary">Tham
                      Gia Dự Án</a><a href="https://www.facebook.com/hear.us.now.project/posts/2497938476919216" className="btn btn-secondary" target="_blank">Tìm Hiểu Thêm</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
