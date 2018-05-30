import * as firebase from 'firebase';
import {
  MUDA_NOME_PERFIL,
  MUDA_CURSO_PERFIL,
  MUDA_EMAIL_PERFIL,
  MUDA_SENHA_PERFIL,
  MUDA_FERA_PERFIL,
  MUDA_EH_INSCRICAO,
} from './types';
import { references as r } from '../util';

export const mudaNome = (valor) => (
  { type: MUDA_NOME_PERFIL, payload: valor }
);

export const mudaCurso = (valor) => (
  { type: MUDA_CURSO_PERFIL, payload: valor }
);

export const mudaEmail = (valor) => (
  { type: MUDA_EMAIL_PERFIL, payload: valor }
);

export const mudaSenha = (valor) => (
  { type: MUDA_SENHA_PERFIL, payload: valor }
);

export const mudaFera = (valor) => (
  { type: MUDA_FERA_PERFIL, payload: valor }
);

export const mudaEhInscricao = (valor) => (
  { type: MUDA_EH_INSCRICAO, payload: valor }
);

export const cadastraUsuario = () => {
  // return funcao async
  return async (dispatch, getState) => {
    const { nome, curso, email, senha, fera } = getState().PerfilReducer;
    try {
      const usuario = await firebase.auth().createUserWithEmailAndPassword(email, senha);
      const uid = firebase.auth().currentUser.uid;
      // --
      await firebase.database().ref(r.USUARIO.concat(uid)).set({ nome, curso, email, senha, fera });
      dispatch({ type: MUDA_ID_PERFIL, payload: uid });
    } catch (e) {
      // console.log(e)
    }
  };
};
