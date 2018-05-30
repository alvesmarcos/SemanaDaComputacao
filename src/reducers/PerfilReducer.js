import {
  MUDA_NOME_PERFIL,
  MUDA_CURSO_PERFIL,
  MUDA_EMAIL_PERFIL,
  MUDA_SENHA_PERFIL,
  MUDA_FERA_PERFIL,
  MUDA_EH_INSCRICAO,
  MUDA_ID_PERFIL,
} from '../actions/types';

const INITIAL_STATE_DEV = {
  id: '',
  nome: 'Marcos Alves',
  curso: 'Ciência da Computação',
  email: 'marcos.alves@cc.ci.ufpb.br',
  senha: 'petcc',
  fera: true,
  ehInscricao: true
};

const INITIAL_STATE = {
  id: '',
  nome: '',
  curso: '',
  email: '',
  senha: '',
  fera: true,
  ehInscricao: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MUDA_ID_PERFIL:
      return { ...state, id: action.payload };
    case MUDA_NOME_PERFIL:
      return { ...state, nome: action.payload };
    case MUDA_CURSO_PERFIL:
      return { ...state, curso: action.payload };
    case MUDA_EMAIL_PERFIL:
      return { ...state, email: action.payload };
    case MUDA_SENHA_PERFIL:
      return { ...state, senha: action.payload };
    case MUDA_FERA_PERFIL:
      return { ...state, fera: action.payload };
    case MUDA_EH_INSCRICAO:
      return { ...state, ehInscricao: action.payload };
    default:
      return state;
  } 
};
