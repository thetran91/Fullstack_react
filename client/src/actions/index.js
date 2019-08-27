import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  /* Day la 1 action se dc dispatch dua vao reducer */
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};
export const handleToken = token => async dispatch => {
  /* Cap nhat them data de tra ve res.data */
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};
