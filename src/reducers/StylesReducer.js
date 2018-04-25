import { COR_STATUS_BAR } from '../actions/types';

const INITIAL_STATE = {
  cor: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COR_STATUS_BAR:
      return { ...state, cor: action.payload };
    default:
      return state;
  }
};
