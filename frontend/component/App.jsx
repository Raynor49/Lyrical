import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import LoginFormContainer from './session/login_form_container.jsx';
import SignupFormContainer from './session/signup_form_container.jsx';
import Modal from './modal/modal';
import Header from './header/header';
import HeaderContainer from './header/header_container';
import TrackIndexContainer from './tracks/tracks_index/track_index_container.jsx';
import TrackShowContainer from './tracks/tracks_show/tracks_show_container.jsx';
import TrackFormContainer from './tracks/tracks_form/tracks_form_container.jsx';
import TrackEditFormContainer from './tracks/tracks_form/tracks_form_edit_container.jsx';
import {ProtectedRoute, AuthRoute} from '../util/route_util.jsx';

const App = () => (
  <div>
    <Modal />
    <HeaderContainer />
    <Switch>
      <Route exact path='/' component={TrackIndexContainer} />
      <ProtectedRoute exact path="/tracks/new" component={TrackFormContainer} />
      <AuthRoute exact path="/tracks/:trackId/edit" component={TrackEditFormContainer} />
      <Route exact path='/tracks/:trackId' component={TrackShowContainer} />
    </Switch>
  </div>
);

export default App;
