import {
  MUDA_NOME_PERFIL,
  MUDA_CURSO_PERFIL,
  MUDA_EMAIL_PERFIL,
  MUDA_SENHA_PERFIL,
  MUDA_FERA_PERFIL,
  MUDA_EH_INSCRICAO,
  MUDA_ID_PERFIL,
  MUDA_CAMPOS_PERFIL,
} from '../actions/types';

const INITIAL_STATE_DEV = {
  id: '',
  nome: 'Marcos Alves',
  curso: 'Ciência da Computação',
  email: 'marcos@mail.com',
  senha: '12345678',
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

export default (state = INITIAL_STATE_DEV, action) => {
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
    case MUDA_CAMPOS_PERFIL:
      return { 
        ...state, 
        id: action.payload.id,
        nome: action.payload.nome,
        curso: action.payload.curso,
        email: action.payload.email,
        senha: action.payload.senha,
        fera: action.payload.fera
      };
    default:
      return state;
  } 
};
