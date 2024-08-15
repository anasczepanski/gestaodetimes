import { combineReducers } from 'redux';
import someReducer from './someReducer'; // Certifique-se de que o caminho está correto

const rootReducer = combineReducers({
  someState: someReducer, // Defina o estado que esse reducer vai gerenciar
  // Adicione outros reducers aqui se necessário
});

export default rootReducer;
