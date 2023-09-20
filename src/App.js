import React, { useState } from 'react';
import Page1 from './components/Page1';
import Chatbot from './components/Chatbot';

function App() {

  const [enrollmentStarted, setEnrollmentStarted] = useState(false);

  const handleEnrollClick = () => {
    // Dispatch initial message from chatbot
    

    // Set enrollmentStarted to true to show the chatbot
    setEnrollmentStarted(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-2xl font-bold">Student Enrollment</h1>
      </header>
      <main className="flex-grow">
        {enrollmentStarted ? (
          <Chatbot />
        ) : (
          <Page1 onEnrollClick={handleEnrollClick} />
        )}
      </main>
      <footer className="bg-blue-500 p-4 text-white text-center">
        © {new Date().getFullYear()} Student Info System
      </footer>
    </div>
  );
}

export default App;
