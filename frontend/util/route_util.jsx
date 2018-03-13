import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Auth = ({ component: Component, path, loggedIn, correctUser, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     (loggedIn && correctUser) ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const mapStateToProps = (state, ownProps) => {
  const loggedIn = Boolean(state.session.currentUser);
  return(
    {
      loggedIn: loggedIn,
    }
  );
};
const mapStateToProps2 = (state, ownProps) => {
  const loggedIn = Boolean(state.session.currentUser);
  let correctUser;
  if(loggedIn && state.entities.tracks[parseInt(ownProps.computedMatch.params.trackId)]){
    correctUser = Boolean(state.session.currentUser.id === state.entities.tracks[parseInt(ownProps.computedMatch.params.trackId)].user_id);
  }else{
    correctUser = false;
  }
  return(
    {
      loggedIn: loggedIn,
      correctUser: correctUser
    }
  );
};

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const AuthRoute = withRouter(connect(mapStateToProps2)(Auth));
