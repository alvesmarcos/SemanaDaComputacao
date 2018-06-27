import * as firebase from 'firebase';
import { references as r } from '../util';
import { MUDA_PROGRAMACAO } from './types';

export const carregaProgramacao = () => {
  return async(dispatch) => {
    const snapshot1 = await firebase.database().ref(r.PROGRAMACAO.concat('1/')).orderByChild('horaInicio').once('value');
    const dia1 = [];
    //-- 
    snapshot1.forEach(child => {
      dia1.push({ ...child.val(), dia: 1 });
    });

    const snapshot2 = await firebase.database().ref(r.PROGRAMACAO.concat('2/')).orderByChild('horaInicio').once('value');
    const dia2 = [];
    //-- 
    snapshot2.forEach(child => {
      dia2.push({ ...child.val(), dia: 2 });
    });

    const snapshot3 = await firebase.database().ref(r.PROGRAMACAO.concat('3/')).orderByChild('horaInicio').once('value');
    const dia3 = [];
    //-- 
    snapshot3.forEach(child => {
      dia3.push({ ...child.val(), dia: 3 });
    });

    const snapshot4 = await firebase.database().ref(r.PROGRAMACAO.concat('4/')).orderByChild('horaInicio').once('value');
    const dia4 = [];
    //-- 
    snapshot4.forEach(child => {
      dia4.push({ ...child.val(), dia: 4 });
    });


    const snapshot5 = await firebase.database().ref(r.PROGRAMACAO.concat('5/')).orderByChild('horaInicio').once('value');
    const dia5 = [];
    //-- 
    snapshot5.forEach(child => {
      dia5.push({ ...child.val(), dia: 5 });
    });

    dispatch({ type: MUDA_PROGRAMACAO, payload: { dia1, dia2, dia3, dia4, dia5 }});
    //--
  }
};