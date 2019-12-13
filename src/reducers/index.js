import { combineReducers } from 'redux';
import { blogs } from './blogs';
import { i18nReducer } from 'react-redux-i18n';
import contactUs from "./contactUs"
import tryItFree from "./tryItFree"

const pipelineApp = combineReducers({
  blogs,
  i18n: i18nReducer,
  contactUs,
  tryItFree
});

export default pipelineApp;