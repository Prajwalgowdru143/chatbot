export const addMessage = (message) => ({
    type: 'ADD_MESSAGE',
    payload: message,
  });
  
  export const selectCalendarDate = (date) => ({
    type: 'SELECT_CALENDAR_DATE',
    payload: date,
  });
  
  export const selectTimeSlot = (timeSlot) => ({
    type: 'SELECT_TIME_SLOT',
    payload: timeSlot,
  });