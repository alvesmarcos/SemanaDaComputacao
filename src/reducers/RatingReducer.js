import { MUDA_RATING_NOME } from '../actions/types';

const INITIAL_STATE = {
  ratingNome: '',
  listagemAvaliacoes: [],
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case MUDA_RATING_NOME:
      return { ...state, ratingNome: action.payload };
    default:
      return state;
  }
};