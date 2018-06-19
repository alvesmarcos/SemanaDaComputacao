import { MUDA_LISTA_INGRESSOS } from '../actions/types';

const INITIAL_STATE = {
  listaIngressos: []
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case MUDA_LISTA_INGRESSOS:
      return { ...state, listaIngressos: action.payload };
    default:
      return state;
  }
};
