import { handleActions } from 'redux-actions';

const initialState = {
   color: ''
};

const count = handleActions({
  COLOR: (state, { payload }) => ({
    ...state,
    color: payload.data
  }),
}, initialState);

export default count;