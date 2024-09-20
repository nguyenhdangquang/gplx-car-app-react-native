import { createAction } from 'redux-actions';

export const increment = createAction('INCREMENT', data => ({ data }) );
export const decrement = createAction('DECREMENT', data => ({ data }) );