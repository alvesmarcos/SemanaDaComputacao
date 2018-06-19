import { combineReducers } from 'redux';
import PerfilReducer from './PerfilReducer';
import NotificacaoReducer from './NotificacaoReducer';
import TicketReducer from './TicketReducer';
import ProgramacaoReducer from './ProgramacaoReducer';

export default combineReducers({
  PerfilReducer,
  NotificacaoReducer,
  TicketReducer,
  ProgramacaoReducer,
});
