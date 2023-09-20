import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/actions/chatbotActions";
import Calendar from "./Calendar";
import Page3 from "./Page3";

const ConversationStages = {
  WELCOME: "WELCOME",
  PICK_SLOT: "PICK_SLOT",
  ASK_NAME: "ASK_NAME",
  ASK_AGE: "ASK_AGE",
  THANK_YOU: "THANK_YOU",
};

const Chatbot = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chatbot.messages);

  const [userMessage, setUserMessage] = useState("");
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [showGotItButton, setShowGotItButton] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showPickSlotMessage, setShowPickSlotMessage] = useState(false);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [conversationStage, setConversationStage] = useState(
    ConversationStages.WELCOME
  );
  const [countdown, setCountdown] = useState(5); // Countdown timer

  useEffect(() => {
    if (showWelcomeMessage) {
      dispatch(addMessage("Bot: Hello, Welcome to student info system!"));
      setShowGotItButton(true);
    }
  }, [dispatch, showWelcomeMessage]);

  useEffect(() => {
    // Countdown logic
    if (
      conversationStage === ConversationStages.THANK_YOU &&
      countdown > 0
    ) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (
      conversationStage === ConversationStages.THANK_YOU &&
      countdown === 0
    ) {
      // Redirect to page 3 after countdown
      window.location.href = "/page3"; // Replace with your actual URL
    }
  }, [conversationStage, countdown]);

  const handleGotItClick = () => {
    dispatch(addMessage("User: Got It!"));
    setShowWelcomeMessage(false);
    setShowGotItButton(false);
    setShowPickSlotMessage(true);
    setShowCalendar(true);
    setConversationStage(ConversationStages.PICK_SLOT);
  };

  const handleDateAndTimeSelection = (dateTime) => {
    dispatch(addMessage("Bot: Pick a slot!"));
    setSelectedDateTime(dateTime);
    dispatch(addMessage(`User: ${dateTime}`));
    setShowCalendar(false);
    setShowPickSlotMessage(false);
    dispatch(addMessage("Bot: Enter your Name"));
    setConversationStage(ConversationStages.ASK_NAME);
  };

  const handleUserMessage = () => {
    if (userMessage.trim() === "") return;

    switch (conversationStage) {
      case ConversationStages.ASK_NAME:
        setUserName(userMessage); // Set the user's name
        dispatch(addMessage(`User: ${userMessage}`));
        dispatch(addMessage("Bot: Enter your age"));
        setUserMessage("");
        setConversationStage(ConversationStages.ASK_AGE);
        break;
      case ConversationStages.ASK_AGE:
        setUserAge(userMessage); // Set the user's age
        dispatch(addMessage(`User: ${userMessage}`));
        setUserMessage("");
        setConversationStage(ConversationStages.THANK_YOU); // Transition to THANK_YOU stage
        break;
      default:
        dispatch(addMessage(`User: ${userMessage}`));
        setUserMessage("");
        break;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <div className="flex-grow overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${index % 2 === 0 ? "text-left" : "text-right"}`}
          >
            {message}
          </div>
        ))}
        {showGotItButton && (
          <div className="mb-2 text-left">
            <button
              className="bg-blue-500 text-white rounded-lg py-2 px-4"
              onClick={handleGotItClick}
            >
              Got it!
            </button>
          </div>
        )}
        {showPickSlotMessage && (
          <div className="mb-2 text-left">Bot: Pick a slot!</div>
        )}
        {showCalendar && (
          <div className="mb-2 text-left">
            <Calendar onSelect={handleDateAndTimeSelection} />
          </div>
        )}
        {conversationStage === ConversationStages.THANK_YOU && (
          <div className="mb-2 text-left">
            Bot: Thank you. In {countdown} seconds, bot will exit.
            <Page3 userName={userName} userAge={userAge} />
          </div>
        )}
      </div>
     
      <div className="flex justify-between items-center p-2 border-t">
        <input
          type="text"
          className="w-4/5 px-2 py-1 rounded border outline-none"
          placeholder="Type a message..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button
          className="w-1/5 bg-blue-500 text-white rounded hover:bg-blue-700 p-2 ml-2"
          onClick={handleUserMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
