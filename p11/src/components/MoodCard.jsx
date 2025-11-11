import React, { useState } from "react";

function MoodCard({ name }) {
  const [mood, setMood] = useState("Happy 😃");

  const toggleMood = () => {
    setMood((prevMood) => (prevMood === "Happy 😃" ? "Sad 😞" : "Happy 😃"));
  };

  return (
    <div className="mood-card">
      <h2>Hello, {name}!</h2>
      <p>
        Current Mood: <strong>{mood}</strong>
      </p>
      <button onClick={toggleMood} className="mood-button">
        Change Mood
      </button>
    </div>
  );
}

export default MoodCard;
