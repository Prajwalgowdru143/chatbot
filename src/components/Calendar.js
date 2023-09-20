import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectCalendarDate } from '../redux/actions/chatbotActions';

const Calendar = ({ onSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const dispatch = useDispatch();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTimeSlot) {
      dispatch(selectCalendarDate(selectedDate));
      onSelect(`${selectedDate}, ${selectedTimeSlot}`);
    }
  };

  const isSelected = (value) => {
    return value === selectedDate || value === selectedTimeSlot;
  };

  return (
    <div className="mb-2 text-left">
      <div className="mb-2">
        <strong>Select a Date:</strong>
      </div>
      <div className="flex space-x-2">
        <button
          className={`${
            isSelected('15 MAY, MON') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          } rounded-lg py-2 px-4 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={() => handleDateSelect('15 MAY, MON')}
        >
          15 MAY, MON
        </button>
        <button
          className={`${
            isSelected('16 MAY, TUE') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          } rounded-lg py-2 px-4 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={() => handleDateSelect('16 MAY, TUE')}
        >
          16 MAY, TUE
        </button>
        <button
          className={`${
            isSelected('17 MAY, WED') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          } rounded-lg py-2 px-4 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={() => handleDateSelect('17 MAY, WED')}
        >
          17 MAY, WED
        </button>
      </div>
      <div className="mt-4">
        <strong>Select a Time Slot:</strong>
      </div>
      <div className="flex space-x-2">
        <button
          className={`${
            isSelected('Morning') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          } rounded-lg py-2 px-4 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={() => handleTimeSlotSelect('Morning')}
        >
          Morning (8 AM - 12 PM)
        </button>
        <button
          className={`${
            isSelected('Afternoon') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          } rounded-lg py-2 px-4 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={() => handleTimeSlotSelect('Afternoon')}
        >
          Afternoon (12 PM - 4 PM)
        </button>
        <button
          className={`${
            isSelected('Evening') ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          } rounded-lg py-2 px-4 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={() => handleTimeSlotSelect('Evening')}
        >
          Evening (4 PM - 8 PM)
        </button>
      </div>
      <div className="mt-4">
        {selectedDate && selectedTimeSlot && (
          <button
            className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleConfirm}
          >
            Confirm Selection
          </button>
        )}
      </div>
    </div>
  );
};

export default Calendar;
