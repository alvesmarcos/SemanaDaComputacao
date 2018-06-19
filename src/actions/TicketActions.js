import * as firebase from 'firebase';
import { references as r } from '../util';
import { MUDA_LISTA_INGRESSOS } from './types';

export const carregaTickets = () => {
  return async(dispatch) => {
    try {
      const snapshot = await firebase.database().ref(r.INGRESSOS).orderByChild('dia').once('value');
      const listagem = [];
      //-- 
      snapshot.forEach(child => {
        listagem.push(child.val());
      });

      dispatch({ type: MUDA_LISTA_INGRESSOS, payload: listagem });
      //--
    } catch (e) {
      throw e;
    }
  }
};