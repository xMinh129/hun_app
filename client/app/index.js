import React from 'react';
import { render } from 'react-dom';

import {Router, Switch, Route} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home.js';
import TeamDetail from './components/Team/TeamDetail.js';
import VotingDetail from './components/Voting/VotingDetail.js';
import StoryDetail from './components/Story/StoryDetail.js';
import DonationSection from './components/DonationSection/DonationSection.js';
import Authentication from './components/Authentication/Authentication.js';

import './styles/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/jquery.bxslider.css';
import './styles/template.css';
import './styles/navbar.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Auth from "./modules/Auth.js";
import history from "./modules/history.js";

render((
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/hun-team" component={TeamDetail}/>
        <Route exact path="/vote-for-HUN" component={VotingDetail}/>
        <Route exact path="/contribute" component={DonationSection}/>
        <Route exact path="/our-story" component={StoryDetail}/>
        <Route exact path="/login" component={() => <Authentication/>}/>
        <Route exact path="/signout" render={() => {
              Auth.deauthenticateUser();
              history.goBack();
            }
        }/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
