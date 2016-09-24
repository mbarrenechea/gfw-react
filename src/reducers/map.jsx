import {MAP} from '../constants';

const initialState = {
  list: null
};

export default function(state = initialState, action) {

  switch (action.type) {
    case MAP:
      return Object.assign({}, state, {list: action.payload.repositories});
    default:
      return state;
  }
};
