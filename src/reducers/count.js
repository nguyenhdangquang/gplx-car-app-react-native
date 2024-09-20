import { handleActions } from 'redux-actions';

const initialState = {
   counter: 0
};

const count = handleActions({
  INCREMENT: (state, { payload }) => ({
      counter: state.counter + payload.data
  }),

  DECREMENT: (state, { payload }) => ({
      counter: state.counter - payload.data
    })
  }, initialState);

export default count;