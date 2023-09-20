// src/components/TimeSlots.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { selectTimeSlot } from '../redux/actions/chatbotActions';

const TimeSlots = () => {
  const dispatch = useDispatch();

  const handleTimeSlotSelection = (timeSlot) => {
    dispatch(selectTimeSlot(timeSlot));
  };

  return (
    // Render the time slots component with options
    // Example: render time slot options and handle selection
    <div>
        timeslots
    </div>
  );
};

export default TimeSlots;
