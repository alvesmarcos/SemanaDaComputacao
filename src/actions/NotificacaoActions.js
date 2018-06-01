import * as firebase from 'firebase';
import { MUDA_LISTA_NOTIFICACAO, MUDA_CAMPOS_NOTIFICACAO } from './types';
import { references as r } from '../util';

export const mudaCamposNotificacao = campos => ({ type: MUDA_CAMPOS_NOTIFICACAO, payload: campos });

export const carregaNotificacoes = () => {
  return async(dispatch) => {
    try {
      const snapshot = await firebase.database().ref(r.NOTIFICACOES).once('value');
      const listagem = [];
      //-- 
      snapshot.forEach(child => {
        listagem.push(child.val());
      });

      dispatch({ type: MUDA_LISTA_NOTIFICACAO, payload: listagem });
      //--
    } catch (e) {
      throw e;
    }
  }
};