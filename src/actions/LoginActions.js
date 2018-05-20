import {
  MUDA_NOME_LOGIN,
  MUDA_CURSO_LOGIN,
  MUDA_EMAIL_LOGIN,
  MUDA_SENHA_LOGIN,
  MUDA_FERA_LOGIN,
  MUDA_EH_INSCRICAO,
} from './types';

export const mudaNome = (valor) => (
  { type: MUDA_NOME_LOGIN, payload: valor }
);

export const mudaCurso = (valor) => (
  { type: MUDA_CURSO_LOGIN, payload: valor }
);

export const mudaEmail = (valor) => (
  { type: MUDA_EMAIL_LOGIN, payload: valor }
);

export const mudaSenha = (valor) => (
  { type: MUDA_SENHA_LOGIN, payload: valor }
);

export const mudaFera = (valor) => (
  { type: MUDA_FERA_LOGIN, payload: valor }
);

export const mudaEhInscricao = (valor) => (
  { type: MUDA_EH_INSCRICAO, payload: valor }
);
