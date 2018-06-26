import * as firebase from 'firebase';
import {
  MUDA_NOME_PERFIL,
  MUDA_CURSO_PERFIL,
  MUDA_EMAIL_PERFIL,
  MUDA_SENHA_PERFIL,
  MUDA_FERA_PERFIL,
  MUDA_EH_INSCRICAO,
  MUDA_ID_PERFIL,
  MUDA_CAMPOS_PERFIL,
  LOGOUT,
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

export const mudaCamposPerfil = (campos) => (
  { type: MUDA_CAMPOS_PERFIL, payload: campos }
);

export const cadastraUsuario = () => {
  // return funcao async
  return async (dispatch, getState) => {
    const { nome, curso, email, senha, fera } = getState().PerfilReducer;
    try {
      const usuario = await firebase.auth().createUserWithEmailAndPassword(email, senha);
      const uid = firebase.auth().currentUser.uid;
      // --
      await firebase.database().ref(r.USUARIOS.concat(uid)).set({ id: uid, nome, curso, email, fera, modo: 'mobile' });
      dispatch({ type: MUDA_ID_PERFIL, payload: uid });
    } catch (e) {
      throw e;
    }
  };
};

export const doLogin = () => {
  // return funcao async
  return async(dispatch, getState) => {
    const { email, senha } = getState().PerfilReducer;
    try {
      const { user } = await firebase.auth().signInWithEmailAndPassword(email, senha);
      const snapshot = await firebase.database().ref(r.USUARIOS.concat(user.uid).concat('/')).once('value');
      dispatch({ type: MUDA_CAMPOS_PERFIL, payload: { id: user.uid, ...snapshot.val() } });
    } catch (e) {
      throw e;
    }
  }
};

export const doLogout = () => {
  return async(dispatch) => {
    try {
      await firebase.auth().signOut();
      dispatch({ type: LOGOUT })
    } catch (e) {
      throw e;
    }
  };
};
