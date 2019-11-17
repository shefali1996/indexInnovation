import { combineReducers } from 'redux';
import { blogs } from './blogs';
import { i18nReducer } from 'react-redux-i18n';

const pipelineApp = combineReducers({
  blogs,
  i18n: i18nReducer
});

export default pipelineApp;