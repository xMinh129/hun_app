import React, {Component} from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      contact: {
        name: '',
        email: '',
        msg: ''
      },
      submitSuccess: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    let postData = {
      'name': this.state.contact.name,
      'email': this.state.contact.email,
      'message': this.state.contact.msg
    };

    //TODO use axios to make http request in the future

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', 'http://localhost:8080/api/contacts');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          submitSuccess: true
        });
      }
      else if (xhr.response.error) {
        this.setState({
          error: xhr.response.error
        });
      }
      else {
        this.setState({
          error: 'Unexpected error. Check server'
        });
      }
    });
    xhr.send(JSON.stringify(postData));
  }

  onChange(event){
    event.preventDefault();
    const field = event.target.name;
    console.log(field);
    const contact = this.state.contact;
    contact[field] = event.target.value;
    this.setState({
      contact: contact
    });
  }




  componentDidMount() {

  }


  render() {
    if (!this.state.submitSuccess){
      return (
        <div>
          <p>HUN rất mong được nghe từ bạn, chúng tôi sẽ trả lời sớm nhất.</p>
          <form className="cmxform" id="ContactForm" onSubmit={this.handleSubmit}>
            <input
              id="fname"
              placeholder="Tên Của Bạn"
              type="text"
              name="name"
              value={this.state.contact.name}
              onChange={this.onChange}
              required/>
            <input
              id="femail"
              placeholder="Email"
              type="email"
              name="email"
              value={this.state.contact.email}
              onChange={this.onChange}
              required/>
            <textarea
              id="fmsg"
              placeholder="Tin Nhắn"
              name="msg"
              value={this.state.contact.msg}
              onChange={this.onChange}></textarea>
            <button className="btn btn-secondary">Gửi</button>
          </form>
        </div>
      )
    }
    else {
      return(
        <p>Tin nhắn của bạn đã được gửi đến HUN. Chúng tôi sẽ trả lời bạn sớm nhất :) Xin cảm ơn.</p>
      )
    }
  }
}

export default ContactForm;
