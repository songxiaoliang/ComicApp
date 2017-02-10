/**
 * 创建Store,整合Provider
 * Songlcy create by 2017-01-10
 * @flow
 */
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './../reducers/rootReducer';

let store = createStore(rootReducer, {}, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store;
