import { combineReducers } from 'redux';
import PerfilReducer from './PerfilReducer';
import NotificacaoReducer from './NotificacaoReducer';
import TicketReducer from './TicketReducer';

export default combineReducers({
  PerfilReducer,
  NotificacaoReducer,
  TicketReducer,
});
