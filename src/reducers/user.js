
import * as types from './../constants/ActionTypes';

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');
const refresh = localStorage.getItem('refresh');

const user_data = {'user': user, 'token': token, 'refresh': refresh};
var initialState = user_data ? user_data : null;

var reducer = (state = initialState, action) => {
  switch (action.type)
  {
    case types.LOGIN:
      localStorage.setItem('user', action.user);
      localStorage.setItem('token', action.token);
      localStorage.setItem('refresh', action.refresh);
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      const refresh = localStorage.getItem('refresh');

      state = {'user': user, 'token': token, 'refresh': refresh};
      return state;
    default:
      return state;
  }
}

export default reducer;