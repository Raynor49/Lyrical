import * as APIUtil from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const clearErrors = () => {
  return({
    type: CLEAR_ERRORS
  });
};

export const receiveCurrentUser = (currentUser) => {
  return({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

export const receiveErrors = (errors) => {
  return({
    type: RECEIVE_ERRORS,
    errors
  });
};

export const signup = (user) => dispatch => {
  return (APIUtil.signup(user).then(
    user => (dispatch(receiveCurrentUser(user))),
    error => {
      return(
        (dispatch(receiveErrors(error.responseJSON)))
      );
    }
  ));
};

export const login = (user) => dispatch => {
  return APIUtil.login(user).then(
    user => (dispatch(receiveCurrentUser(user))),
    error => {
      return(
        (dispatch(receiveErrors(error.responseJSON)))
      );
    }
  );
};

export const logout = () => dispatch => {
  APIUtil.logout().then(
    () => (dispatch(receiveCurrentUser(null)))
  );
};