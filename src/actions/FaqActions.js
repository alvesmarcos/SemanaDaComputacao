import * as firebase from 'firebase';
import { MUDA_FAQ } from './types';
import { references as r } from '../util';

export const carregaFaq = () => {
  return async(dispatch) => {
    try {
      const snapshot = await firebase.database().ref(r.FAQ.concat('cursos/')).once('value');
      const cursos = [];
      //-- 
      snapshot.forEach(child => {
        cursos.push(child.val());
      });
      //--

      const snapshot1 = await firebase.database().ref(r.FAQ.concat('auxilios/')).once('value');
      const auxilios = [];
       //-- 
       snapshot1.forEach(child => {
        auxilios.push(child.val());
      });
      //--

      const snapshot2 = await firebase.database().ref(r.FAQ.concat('laboratorios/')).once('value');
      const laboratorios = [];
       //-- 
       snapshot2.forEach(child => {
        laboratorios.push(child.val());
      });
      //--

      const snapshot3 = await firebase.database().ref(r.FAQ.concat('monitorias/')).once('value');
      const monitorias = [];
       //-- 
       snapshot3.forEach(child => {
        monitorias.push(child.val());
      });
      //--

      const snapshot4 = await firebase.database().ref(r.FAQ.concat('coordenacoes/')).once('value');
      const coordenacoes = [];
       //-- 
       snapshot4.forEach(child => {
        coordenacoes.push(child.val());
      });
      //--

      const snapshot5 = await firebase.database().ref(r.FAQ.concat('geral/')).once('value');
      const geral = [];
       //-- 
       snapshot5.forEach(child => {
        geral.push(child.val());
      });
      //--
      dispatch({ type: MUDA_FAQ, payload: { cursos, auxilios, laboratorios, monitorias, coordenacoes, geral }});
    } catch (e) {
      throw e;
    }
  };
};