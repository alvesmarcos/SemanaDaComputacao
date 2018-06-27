import { MUDA_RATING_NOME, ITEM_AVALIADO } from '../actions/types';

const INITIAL_STATE = {
  ratingNome: '',
  ratingId: '',
  listagemAvaliacoes: [],
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case MUDA_RATING_NOME:
      return { ...state, ratingNome: action.payload.nome, ratingId: action.payload.id };
    case ITEM_AVALIADO:
      return state;
    default:
      return state;
  }
};