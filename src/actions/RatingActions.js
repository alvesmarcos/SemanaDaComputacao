import * as firebase from 'firebase';
import uuidv1 from 'uuid/v1';
import { MUDA_RATING_NOME, ITEM_AVALIADO, MUDA_LISTA_AVALIACAO } from './types';
import { references as r } from '../util';

export const mudaRatingNome = (campo) => ({ type: MUDA_RATING_NOME, payload: campo });

export const avaliarItem = (avaliacao) => {
  return async(dispatch, getState) => {
    try {
      const uuid = uuidv1();
      const { id } = getState().PerfilReducer;
      const { ratingId } = getState().RatingReducer;
      await firebase.database().ref(r.AVALIACOES.concat('/').concat(id).concat('/').concat(uuid)).set({ id: uuid, itemId: ratingId, avaliacao });
      
      dispatch({ type: ITEM_AVALIADO });
    } catch(e) {
      throw e;
    }
  }
};

export const carregaAvaliacoes = () => {
  return async(dispatch, getState) => {
    try {
      const { id } = getState().PerfilReducer;

      const snapshot = await firebase.database().ref(r.AVALIACOES.concat('/').concat(id)).once('value');
      const listagem = [];
      //-- 
      snapshot.forEach(child => {
        listagem.push(child.val());
      });
      //--
      dispatch({ type: MUDA_LISTA_AVALIACAO, payload: listagem });
    } catch (e) {
      throw e;
    }
  };
};