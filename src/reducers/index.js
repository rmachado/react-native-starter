import { combineReducers } from 'redux';

import gitReducer from './gitReducer';
import activeReducer from './activeReducer';

const reducers = combineReducers({
  repos: gitReducer,
  activeRepo: activeReducer
});

export default reducers;
