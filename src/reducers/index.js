import  { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';//more descriptive name to the form reducer
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});