import * as firebase from 'firebase';
import { references as r } from '../util';
import { MUDA_LISTA_INGRESSOS, MUDA_INGRESSO } from './types';
import uuidv1 from 'uuid/v1';
import { colors } from '../styles';

export const mudaIngresso = (campos) => ({ type: MUDA_INGRESSO, payload: campos });

export const carregaTickets = () => {
  return async(dispatch, getState) => {
    try {
      const { id } = getState().PerfilReducer;
      const snapshot = await firebase.database().ref(r.INGRESSOS).orderByChild('dia').once('value');
      const listagem = [];
      const snapshot1 = await firebase.database().ref(r.CHECKIN).once('value');

      //-- 
      snapshot.forEach(child => {
        const ingresso = child.val();
        listagem.push({ ...ingresso, cor: ingresso.ativo ? colors.orange300 : colors.pink700 });
      });
      // --
      snapshot1.forEach(child => {
        const check = child.val();

        for (let i = 0; i < listagem.length; ++i) {
          if (check.ingressoId === listagem[i].id && check.usuarioId === id) {
            listagem[i].cor = colors.green400;
          }
        }
      });

      dispatch({ type: MUDA_LISTA_INGRESSOS, payload: listagem });
      //--
    } catch (e) {
      throw e;
    }
  }
};

export const realizaCheckIn = () => {
  return async(dispatch, getState) => {
    try {
      const { nome } = getState().PerfilReducer;
      const { dia, id } = getState().TicketReducer;
      const uuid = uuidv1();
      await firebase.database().ref(r.CHECKIN.concat(uuid)).set({ id: uuid, dia, nome, ingressoId: id, usuarioId: getState().PerfilReducer.id });
      dispatch({ type: CHECKIN_REALIZADO });
    } catch (e) {
      throw e;
    }
  }
};