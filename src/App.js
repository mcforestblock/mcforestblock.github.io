import React from "react";
import Card from "./components/Card";
import ThemeSwitch from "./components/ThemeSwitch";


function App() {
  return (
    <div className="backdrop-brightness-200 bg-[url('./images/shaders/dawn.png')] dark:bg-[url('./images/shaders/night.png')] bg-no-repeat relative bg-center bg-cover transition duration-1000">
      <Card/>
      <ThemeSwitch/>
    </div>
  );
}

export default App;
