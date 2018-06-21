import { MUDA_LISTA_INGRESSOS, MUDA_INGRESSO } from '../actions/types';

const INITIAL_STATE = {
  listaIngressos: [],
  ativo: true,
  id: '',
  data: '',
  dia: '',
  evento: '',
  horario: '',
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case MUDA_LISTA_INGRESSOS:
      return { ...state, listaIngressos: action.payload };
    
    case MUDA_INGRESSO:
      const { ativo, data, id, dia, evento, horario } = action.payload;
      return { ...state, ativo, data, id, dia, evento, horario };
    default:
      return state;
  }
};
