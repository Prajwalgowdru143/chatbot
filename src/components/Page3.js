import React from "react";

const Page3 = ({ userName, userAge }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100 p-1">
      <div className="flex-grow overflow-y-auto">
        {userName && userAge && (
          <div className="m-2 text-left">
            <p>
              Your name {userName} aged {userAge} has been added to the student
              system.
            </p>
            <p>You may now exit.</p>
          </div>
        )}
      </div>
      {/* Other content for Page3 */}
    </div>
  );
};

export default Page3;
