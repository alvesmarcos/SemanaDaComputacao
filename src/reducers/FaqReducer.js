import { MUDA_FAQ } from '../actions/types';

const INITIAL_STATE = {
  cursos: [],
  auxilios: [],
  laboratorios: [],
  monitorias: [],
  coordenacao: [],
  geral: []
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case MUDA_FAQ:
      const { cursos, auxilios, laboratorios, monitorias, coordenacao, geral } = action.payload;
      return { ...state, 
        cursos, 
        auxilios, 
        laboratorios, 
        monitorias, 
        coordenacao, 
        geral
      };
    default:
      return state;
  }
};