import { MUDA_LISTA_INGRESSOS, MUDA_INGRESSO } from '../actions/types';

const INITIAL_STATE = {
  listaIngressos: [],
  ativo: true,
  id: '',
  data: '09 de Julho de 2018',
  dia: '',
  evento: '19 Semana da Computação',
  horario: '07h30min - 17h30min',
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
