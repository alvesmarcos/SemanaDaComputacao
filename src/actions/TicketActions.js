import * as firebase from 'firebase';
import { references as r } from '../util';
import { MUDA_LISTA_INGRESSOS, MUDA_INGRESSO } from './types';

export const mudaIngresso = (campos) => ({ type: MUDA_INGRESSO, payload: campos });

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