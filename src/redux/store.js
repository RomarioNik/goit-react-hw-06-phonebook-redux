import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsReducer';
import { filterReduser } from './filterReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReduser,
});

// const preloadedState = [
//   { id: '13', name: 'Kostya', number: '0-123-456-789-0' },
// ];

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhenser = devToolsEnhancer();

export const persistorStore = () => {
  let store = createStore(persistedReducer, enhenser);
  let persistor = persistStore(store);
  return { store, persistor };
};
