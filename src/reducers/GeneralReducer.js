import { MUDA_DADOS_GERAIS } from '../actions/types';

const INITIAL_STATE = {
  id: '',
  mes: '',
  ano: '',
  diaInicio: '',
  diaFim: '',
  nome: '',
  ativo: true,
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case MUDA_DADOS_GERAIS:
      const { id, mes, ano, diaInicio, diaFim, nome } = action.payload;
      return { ...state, id, mes, ano, diaInicio, diaFim, nome };
    default:
      return state;
  }
};