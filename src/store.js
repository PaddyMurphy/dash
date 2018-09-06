import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';
// enable redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = {}) {
  if (process.env.NODE_ENV === 'production') {
    return createStore(rootReducer, applyMiddleware(thunk));
  } else {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  }
}
