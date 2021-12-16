import { combineReducers } from 'redux';
import gravuresReducer from './gravures/gravures.reducer';

const rootReducer = combineReducers({
  gravures: gravuresReducer,
});

export default rootReducer;
