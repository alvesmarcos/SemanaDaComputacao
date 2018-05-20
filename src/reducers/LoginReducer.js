import {
  MUDA_NOME_LOGIN,
  MUDA_CURSO_LOGIN,
  MUDA_EMAIL_LOGIN,
  MUDA_SENHA_LOGIN,
  MUDA_FERA_LOGIN,
  MUDA_EH_INSCRICAO,
} from '../actions/types';

const INITIAL_STATE_DEV = {
  nome: 'Marcos Alves',
  curso: 'Ciência da Computação',
  email: 'marcos.alves@cc.ci.ufpb.br',
  senha: 'petcc',
  fera: true,
  ehInscricao: true
};

const INITIAL_STATE = {
  nome: '',
  curso: '',
  email: '',
  senha: '',
  fera: false,
  ehInscricao: false
};

export default (state = INITIAL_STATE_DEV, action) => {
  switch (action.type) {
    case MUDA_NOME_LOGIN:
      return { ...state, nome: action.payload };
    case MUDA_CURSO_LOGIN:
      return { ...state, curso: action.payload };
    case MUDA_EMAIL_LOGIN:
      return { ...state, email: action.payload };
    case MUDA_SENHA_LOGIN:
      return { ...state, senha: action.payload };
    case MUDA_FERA_LOGIN:
      return { ...state, fera: action.payload };
    case MUDA_EH_INSCRICAO:
      return { ...state, ehInscricao: action.payload };
    default:
      return state;
  } 
};
