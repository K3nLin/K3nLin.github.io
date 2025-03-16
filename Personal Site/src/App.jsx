import React from "react";
import NavButton from "./components/NavButton";

const App = () => {
  return (
    <>
      <p className="text-white">hello</p>
      <div
        id="nav-bar"
        className="bg-black h-full w-3/12 fixed left-0 top-0 z-10"
      >
        <p className="text-white text-8xl ">Ken Lin</p>
      </div>
    </>
  );
};

export default App;
