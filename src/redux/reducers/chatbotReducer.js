// src/redux/reducers/chatbotReducer.js

const initialState = {
    messages: [],
    calendarSelectedDate: null,
    timeSlotSelected: null,
  };
  
  const chatbotReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      case 'SELECT_CALENDAR_DATE':
        return {
          ...state,
          calendarSelectedDate: action.payload,
        };
      case 'SELECT_TIME_SLOT':
        return {
          ...state,
          timeSlotSelected: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default chatbotReducer;
  