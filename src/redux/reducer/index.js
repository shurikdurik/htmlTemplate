import templates from './templates';
import editTemplate from './editTemplate';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  editTemplate,
  templates,
});

export default rootReducers;
