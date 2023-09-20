import { combineReducers } from 'redux';
import chatbotReducer from './chatbotReducer';

const rootReducer = combineReducers({
  chatbot: chatbotReducer,
});

export default rootReducer;