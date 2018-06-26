import { MUDA_PROGRAMACAO } from '../actions/types';

const INITIAL_STATE = {
  dia1: [],
  dia2: [],
  dia3: [],
  dia4: [],
  dia5: [],
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case MUDA_PROGRAMACAO:
      const { dia1, dia2, dia3, dia4, dia5 } = action.payload;
      return { ...state, dia1, dia2, dia3, dia4, dia5 };
    default:
      return state;
  }
};
