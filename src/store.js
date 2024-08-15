import { createStore } from 'redux';
import rootReducer from './reducers'; // Importa o rootReducer, que combina todos os reducers

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Para usar as Redux DevTools no navegador
);

export default store;
