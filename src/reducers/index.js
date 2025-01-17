import { combineReducers } from 'redux';
import PerfilReducer from './PerfilReducer';
import NotificacaoReducer from './NotificacaoReducer';
import TicketReducer from './TicketReducer';
import ProgramacaoReducer from './ProgramacaoReducer';
import FaqReducer from './FaqReducer';
import RatingReducer from './RatingReducer';
import GeneralReducer from './GeneralReducer';

export default combineReducers({
  PerfilReducer,
  NotificacaoReducer,
  TicketReducer,
  ProgramacaoReducer,
  FaqReducer,
  RatingReducer,
  GeneralReducer,
});
