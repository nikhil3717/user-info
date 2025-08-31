import React, { useState } from "react";
import Register from "./Components/Register";
import ShowUser from "./Components/ShowUser";


const App = () => {

  return (
    <div className="flex  justify-between  items-center h-screen  bg-black text-white   p-10 ">
    <Register />
    <ShowUser />
    </div>
  );
};

export default App;
