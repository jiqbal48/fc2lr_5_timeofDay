import React from "react";

const App = () => {
  const timeOfDay = 13; //new Date().getHours();

  let greeting;
  if (timeOfDay < 12) {
    greeting = "good morning";
  } else if (timeOfDay > 12 && timeOfDay < 17) {
    greeting = "good afternoon.";
  } else {
    greeting = "good evening";
  }

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default App;
