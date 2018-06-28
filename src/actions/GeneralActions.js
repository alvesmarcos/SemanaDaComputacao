import * as firebase from 'firebase';
import { references as r } from '../util';
import { MUDA_DADOS_GERAIS } from './types';

export const carregaDadosGerais = () => {
  return async(dispatch) => {
    try {
      const snapshot = await firebase.database().ref(r.GERAL).once('value');
      const listagem = [];
      //-- 
      snapshot.forEach(child => {
        listagem.push(child.val());
      });
      dispatch({ type: MUDA_DADOS_GERAIS, payload: listagem[0] });
    } catch (e) {
      throw e;
    }
  }
};

