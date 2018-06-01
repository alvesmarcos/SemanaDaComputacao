import { MUDA_LISTA_NOTIFICACAO, MUDA_CAMPOS_NOTIFICACAO } from '../actions/types';

const INITIAL_STATE_DEV = {
  listaNotificacoes: [],
  abreviatura: 'PC',
  autor: 'PET Computação',
  barColor: '#29B6F6',
  corpo: 'Estão abertas as inscrições para 19ª edição da Semana da Computação. Caso você já tenha o aplicativo do evento instalado sua inscrição é feita de maneira automática. É possível também fazer as inscrições pelo site oficial do evento: sdcufpb.com.br',
  darkBarColor: '#039BE5',
  data: '1 de Junho de 2018',
  titulo: 'Abertas as inscrições para 19ª Semana da Computação',
};

const INITIAL_STATE = {
  listaNotificacoes: [],
  abreviatura: '',
  autor: '',
  barColor: '',
  corpo: '',
  darkBarColor: '',
  data: '',
  titulo: '',
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case MUDA_CAMPOS_NOTIFICACAO:
      const { abreviatura, autor, barColor, corpo, darkBarColor, data, titulo } = action.payload;
      return {
        ...state,
        abreviatura,
        autor,
        barColor,
        corpo,
        darkBarColor,
        data,
        titulo,
      };
    case MUDA_LISTA_NOTIFICACAO:
      return { ...state, listaNotificacoes: action.payload };
    default:
      return state;
  }
};
