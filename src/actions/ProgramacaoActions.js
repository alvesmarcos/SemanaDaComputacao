import * as firebase from 'firebase';
import { references as r } from '../util';
import { MUDA_PROGRAMACAO } from './types';

export const carregaProgramacao = () => {
  return async(dispatch) => {
    const snapshot1 = await firebase.database().ref(r.PROGRAMACAO.concat('1/')).orderByChild('ordem').once('value');
    const dia1 = [];
    //-- 
    snapshot1.forEach(child => {
      dia1.push(child.val());
    });

    dispatch({ type: MUDA_PROGRAMACAO, payload: { dia1 }});
    //--
  }
};