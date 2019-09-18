import React, { Component } from 'react';
import Slider from "./Slider";
import Story from "./Story";
import Achievement from "./Achievement";
import Project from "./Project";
import Team from "./Team";
import News from "./News";
import Sponsor from "./Sponsor";
import Contact from "./Contact";
import Donation from "./Donation";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };


  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Slider/>
        <Story/>
        <Achievement/>
        <Project/>
        <Team/>
        <News/>
        <Sponsor/>
        <Donation/>
        <Contact/>
      </div>
    );
  }
}

export default Home;
